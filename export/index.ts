/*
We export the pg library mostly unchanged, but we do make a few tweaks.

(1) Connecting and querying can require a lot of network round-trips. We
add a pipelining option for the connection (startup + auth + first query),
but this works with cleartext password auth only. We can also pipeline TLS
startup, but currently this works only with Neon hosts (not vanilla pg or
pgbouncer).

(2) SCRAM auth is deliberately CPU-intensive, and this is not appropriate
for a serverless environment. In case it is still used, however, we replace
the standard (synchronous) pg implementation with one that uses SubtleCrypto
for repeated SHA-256 digests. This saves some time and CPU.

(3) We now (experimentally) redirect Pool.query over a fetch request if the
circumstances are right.
*/

import { Client, Connection, Pool } from 'pg';
import { Socket } from '../shims/net';
import { neon, NeonDbError } from './httpQuery';
import type {
  QueryResultRow,
  Submittable,
  QueryArrayConfig,
  QueryConfigValues,
  QueryConfig,
  QueryArrayResult,
  QueryResult,
} from 'pg';

// @ts-ignore -- this isn't officially exported by pg
import ConnectionParameters from '../node_modules/pg/lib/connection-parameters';

interface ConnectionParameters {
  user: string;
  password: string;
  host: string;
  database: string;
}

declare interface NeonClient {
  // these types suppress type errors in this file, but do not carry over to
  // the npm package

  connection: Connection & {
    stream: Socket;
    sendSCRAMClientFinalMessage: (response: any) => void;
    ssl: any;
  };
  _handleReadyForQuery: any;
  _handleAuthCleartextPassword: any;
  startup: any;
  getStartupConf: any;
  saslSession: any;
}

/**
 * The node-postgres `Client` object re-exported with minor modifications.
 * https://node-postgres.com/apis/client
 */
class NeonClient extends Client {
  get neonConfig() {
    return this.connection.stream as Socket;
  }

  constructor(public config: any) {
    super(config);
  }

  override connect(): Promise<void>;
  override connect(callback: (err?: Error) => void): void;
  override connect(callback?: (err?: Error) => void) {
    const { neonConfig } = this;

    // disable TLS if requested
    if (neonConfig.forceDisablePgSSL) {
      this.ssl = this.connection.ssl = false;
    }

    // warn on double-encryption
    if (this.ssl && neonConfig.useSecureWebSocket) {
      console.warn(
        `SSL is enabled for both Postgres (e.g. ?sslmode=require in the connection string + forceDisablePgSSL = false) and the WebSocket tunnel (useSecureWebSocket = true). Double encryption will increase latency and CPU usage. It may be appropriate to disable SSL in the Postgres connection parameters or set forceDisablePgSSL = true.`,
      );
    }

    // throw on likely missing DB connection params
    const hasConfiguredHost =
      this.config?.host !== undefined ||
      this.config?.connectionString !== undefined ||
      process.env.PGHOST !== undefined;
    const defaultUser = process.env.USER ?? process.env.USERNAME;
    if (
      !hasConfiguredHost &&
      this.host === 'localhost' &&
      this.user === defaultUser &&
      this.database === defaultUser &&
      this.password === null
    )
      throw new Error(
        `No database host or connection string was set, and key parameters have default values (host: localhost, user: ${defaultUser}, db: ${defaultUser}, password: null). Is an environment variable missing? Alternatively, if you intended to connect with these parameters, please set the host to 'localhost' explicitly.`,
      );
    // pipelining
    const result = super.connect(callback as any) as void | Promise<void>;

    const pipelineTLS = neonConfig.pipelineTLS && this.ssl;
    const pipelineConnect = neonConfig.pipelineConnect === 'password';

    if (!pipelineTLS && !neonConfig.pipelineConnect) return result;

    const con = this.connection;

    if (pipelineTLS) {
      // for a pipelined SSL connection, fake the SSL support message from the
      // server (the server's actual 'S' response is ignored via the
      // expectPreData argument to startTls in shims / net / index.ts)

      con.on('connect', () => con.stream.emit('data', 'S'));
      // -> prompts call to tls.connect and immediate 'sslconnect' event
    }

    if (pipelineConnect) {
      // for a pipelined startup:
      // (1) don't respond to authenticationCleartextPassword; instead, send
      // the password ahead of time
      // (2) *one time only*, don't respond to readyForQuery; instead, assume
      // it's already true

      con.removeAllListeners('authenticationCleartextPassword');
      con.removeAllListeners('readyForQuery');
      con.once('readyForQuery', () =>
        con.on('readyForQuery', this._handleReadyForQuery.bind(this)),
      );

      const connectEvent = this.ssl ? 'sslconnect' : 'connect';
      con.on(connectEvent, () => {
        this._handleAuthCleartextPassword();
        this._handleReadyForQuery();
      });
    }

    return result;
  }

  async _handleAuthSASLContinue(msg: any) {
    if (
      typeof crypto === 'undefined' ||
      crypto.subtle === undefined ||
      crypto.subtle.importKey === undefined
    ) {
      throw new Error(
        'Cannot use SASL auth when `crypto.subtle` is not defined',
      );
    }

    const cs = crypto.subtle;
    const session = this.saslSession;
    const password = this.password;
    const serverData = msg.data;

    if (
      session.message !== 'SASLInitialResponse' ||
      typeof password !== 'string' ||
      typeof serverData !== 'string'
    )
      throw new Error('SASL: protocol error');

    const attrPairs = Object.fromEntries(
      serverData.split(',').map((attrValue) => {
        if (!/^.=/.test(attrValue))
          throw new Error('SASL: Invalid attribute pair entry');
        const name = attrValue[0];
        const value = attrValue.substring(2);
        return [name, value];
      }),
    );

    const nonce = attrPairs.r;
    const salt = attrPairs.s;
    const iterationText = attrPairs.i;

    if (!nonce || !/^[!-+--~]+$/.test(nonce))
      throw new Error(
        'SASL: SCRAM-SERVER-FIRST-MESSAGE: nonce missing/unprintable',
      );
    if (
      !salt ||
      !/^(?:[a-zA-Z0-9+/]{4})*(?:[a-zA-Z0-9+/]{2}==|[a-zA-Z0-9+/]{3}=)?$/.test(
        salt,
      )
    )
      throw new Error(
        'SASL: SCRAM-SERVER-FIRST-MESSAGE: salt missing/not base64',
      );
    if (!iterationText || !/^[1-9][0-9]*$/.test(iterationText))
      throw new Error(
        'SASL: SCRAM-SERVER-FIRST-MESSAGE: missing/invalid iteration count',
      );
    if (!nonce.startsWith(session.clientNonce))
      throw new Error(
        'SASL: SCRAM-SERVER-FIRST-MESSAGE: server nonce does not start with client nonce',
      );
    if (nonce.length === session.clientNonce.length)
      throw new Error(
        'SASL: SCRAM-SERVER-FIRST-MESSAGE: server nonce is too short',
      );

    const iterations = parseInt(iterationText, 10);
    const saltBytes = Buffer.from(salt, 'base64');
    const enc = new TextEncoder();
    const passwordBytes = enc.encode(password);
    const iterHmacKey = await cs.importKey(
      'raw',
      passwordBytes,
      { name: 'HMAC', hash: { name: 'SHA-256' } },
      false,
      ['sign'],
    );
    let ui1 = new Uint8Array(
      await cs.sign(
        'HMAC',
        iterHmacKey,
        Buffer.concat([saltBytes, Buffer.from([0, 0, 0, 1])]),
      ),
    );
    let ui = ui1;
    for (var i = 0; i < iterations - 1; i++) {
      ui1 = new Uint8Array(await cs.sign('HMAC', iterHmacKey, ui1));
      ui = Buffer.from(ui.map((_, i) => ui[i] ^ ui1[i]));
    }
    const saltedPassword = ui;

    const ckHmacKey = await cs.importKey(
      'raw',
      saltedPassword,
      { name: 'HMAC', hash: { name: 'SHA-256' } },
      false,
      ['sign'],
    );
    const clientKey = new Uint8Array(
      await cs.sign('HMAC', ckHmacKey, enc.encode('Client Key')),
    );
    const storedKey = await cs.digest('SHA-256', clientKey);

    const clientFirstMessageBare = 'n=*,r=' + session.clientNonce;
    const serverFirstMessage = 'r=' + nonce + ',s=' + salt + ',i=' + iterations;
    const clientFinalMessageWithoutProof = 'c=biws,r=' + nonce;
    const authMessage =
      clientFirstMessageBare +
      ',' +
      serverFirstMessage +
      ',' +
      clientFinalMessageWithoutProof;

    const csHmacKey = await cs.importKey(
      'raw',
      storedKey,
      { name: 'HMAC', hash: { name: 'SHA-256' } },
      false,
      ['sign'],
    );
    var clientSignature = new Uint8Array(
      await cs.sign('HMAC', csHmacKey, enc.encode(authMessage)),
    );
    var clientProofBytes = Buffer.from(
      clientKey.map((_, i) => clientKey[i] ^ clientSignature[i]),
    );
    var clientProof = clientProofBytes.toString('base64');

    const skHmacKey = await cs.importKey(
      'raw',
      saltedPassword,
      { name: 'HMAC', hash: { name: 'SHA-256' } },
      false,
      ['sign'],
    );
    const serverKey = await cs.sign(
      'HMAC',
      skHmacKey,
      enc.encode('Server Key'),
    );
    const ssbHmacKey = await cs.importKey(
      'raw',
      serverKey,
      { name: 'HMAC', hash: { name: 'SHA-256' } },
      false,
      ['sign'],
    );
    var serverSignatureBytes = Buffer.from(
      await cs.sign('HMAC', ssbHmacKey, enc.encode(authMessage)),
    );

    session.message = 'SASLResponse';
    session.serverSignature = serverSignatureBytes.toString('base64');
    session.response = clientFinalMessageWithoutProof + ',p=' + clientProof;

    this.connection.sendSCRAMClientFinalMessage(this.saslSession.response);
  }
}

// copied from pg to support NeonPool.query
function promisify(Promise: any, callback: any) {
  if (callback) return { callback: callback, result: undefined };
  let rej: any, res: any;
  const cb = function (err: any, client: any) {
    err ? rej(err) : res(client);
  };
  const result = new Promise(function (resolve: any, reject: any) {
    res = resolve;
    rej = reject;
  });
  return { callback: cb, result: result };
}

/**
 * The node-postgres `Pool` object re-exported with minor modifications.
 * https://node-postgres.com/apis/pool
 */
class NeonPool extends Pool {
  Client = NeonClient;
  hasFetchUnsupportedListeners = false;

  override on(
    event: 'error' | 'connect' | 'acquire' | 'release' | 'remove',
    listener: any,
  ) {
    if (event !== 'error') this.hasFetchUnsupportedListeners = true;
    return super.on(event as any, listener);
  }

  override addListener = this.on;

  override query<T extends Submittable>(queryStream: T): T;
  // tslint:disable:no-unnecessary-generics
  override query<R extends any[] = any[], I = any[]>(
    queryConfig: QueryArrayConfig<I>,
    values?: QueryConfigValues<I>,
  ): Promise<QueryArrayResult<R>>;
  override query<R extends QueryResultRow = any, I = any[]>(
    queryConfig: QueryConfig<I>,
  ): Promise<QueryResult<R>>;
  override query<R extends QueryResultRow = any, I = any[]>(
    queryTextOrConfig: string | QueryConfig<I>,
    values?: QueryConfigValues<I>,
  ): Promise<QueryResult<R>>;
  override query<R extends any[] = any[], I = any[]>(
    queryConfig: QueryArrayConfig<I>,
    callback: (err: Error, result: QueryArrayResult<R>) => void,
  ): void;
  override query<R extends QueryResultRow = any, I = any[]>(
    queryTextOrConfig: string | QueryConfig<I>,
    callback: (err: Error, result: QueryResult<R>) => void,
  ): void;
  override query<R extends QueryResultRow = any, I = any[]>(
    queryText: string,
    values: QueryConfigValues<I>,
    callback: (err: Error, result: QueryResult<R>) => void,
  ): void;
  override query(config?: any, values?: any, cb?: any) {
    if (
      !Socket.poolQueryViaFetch ||
      this.hasFetchUnsupportedListeners ||
      typeof config === 'function' // super.query will detect this and error
    ) {
      return super.query(config, values, cb);
    }

    // allow plain text query without values
    if (typeof values === 'function') {
      cb = values;
      values = undefined;
    }

    // create a synthetic callback that resolves the returned Promise
    // @ts-ignore -- TS doesn't know about this.Promise
    const response = promisify(this.Promise, cb);
    cb = response.callback;

    try {
      const cp = new ConnectionParameters(this.options) as ConnectionParameters;
      const euc = encodeURIComponent;
      const eu = encodeURI;
      const connectionString = `postgresql://${euc(cp.user)}:${euc(cp.password)}@${euc(cp.host)}/${eu(cp.database)}`;

      const queryText = typeof config === 'string' ? config : config.text;
      const queryValues = values ?? config.values ?? [];

      const sql = neon(connectionString, {
        fullResults: true,
        arrayMode: config.rowMode === 'array',
      });

      sql(queryText, queryValues, {
        types: config.types ?? this.options?.types,
      })
        .then((result) => cb(undefined, result))
        .catch((err) => cb(err));
    } catch (err) {
      cb(err);
    }

    return response.result;
  }
}

export { defaults, types } from 'pg';
export type {
  BindConfig,
  ClientConfig,
  Connection,
  ConnectionConfig,
  CustomTypesConfig,
  Defaults,
  Events,
  ExecuteConfig,
  FieldDef,
  MessageConfig,
  Notification,
  PoolConfig,
  Query,
  QueryArrayConfig,
  QueryArrayResult,
  QueryConfig,
  QueryParse,
  QueryResult,
  QueryResultBase,
  QueryResultRow,
  ResultBuilder,
  Submittable,
} from 'pg';

export * from './httpQuery';

export {
  Socket as neonConfig,
  NeonPool as Pool,
  NeonClient as Client,
  neon,
  NeonDbError,
};

export type {
  SocketDefaults,
  FetchEndpointOptions,
  WebSocketConstructor,
  WebSocketLike,
  subtls,
} from '../shims/net';

// @ts-ignore -- this is defined by esbuild so we can track whether we imported .js or .mjs
const _bundleExt: 'js' | 'mjs' = BUNDLE_EXT;

export { _bundleExt };
