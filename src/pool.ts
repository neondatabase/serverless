import { Pool } from 'pg';
import type {
  QueryResultRow,
  Submittable,
  QueryArrayConfig,
  QueryConfigValues,
  QueryConfig,
  QueryArrayResult,
  QueryResult,
  PoolClient,
} from 'pg';

import { NeonClient } from './client';
import { neon } from './http';
import { Socket } from './shims/net';
import type { NeonConfigGlobalAndClient } from '.';

// @ts-ignore -- this isn't officially exported by pg
import ConnectionParameters from '../node_modules/pg/lib/connection-parameters';

interface ConnectionParameters {
  user: string;
  password: string;
  host: string;
  database: string;
}

// Settings that node-postgres honours over WebSockets (as startup parameters,
// or client-side in the case of `query_timeout`) but that are ignored over HTTP
const FETCH_UNSUPPORTED_KEYS = [
  'options',
  'application_name',
  'fallback_application_name',
  'replication',
  'statement_timeout',
  'lock_timeout',
  'idle_in_transaction_session_timeout',
  'query_timeout',
] as const;

// class 'PoolClient' exists only in @types/pg: under the hood in pg it's just a `Client extends EventEmitter`
export interface NeonPoolClient extends PoolClient {
  neonConfig: NeonConfigGlobalAndClient;
}

export declare interface NeonPool {
  Promise: typeof Promise;
  connect(): Promise<NeonPoolClient>;
  connect(
    callback: (
      err: Error | undefined,
      client: NeonPoolClient | undefined,
      done: (release?: any) => void,
    ) => void,
  ): void;
}

/**
 * The node-postgres `Pool` object re-exported with minor modifications.
 * https://node-postgres.com/apis/pool
 */
export class NeonPool extends Pool {
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
    // cheapest checks first, so the default (flag off) path does no extra work
    if (
      !Socket.poolQueryViaFetch ||
      this.hasFetchUnsupportedListeners ||
      typeof config === 'function' // super.query will detect this and error
    ) {
      return super.query(config, values, cb);
    }

    let cp: ConnectionParameters;
    try {
      cp = new ConnectionParameters(this.options);
    } catch {
      return super.query(config, values, cb); // let pg report a bad config as usual
    }

    // honoured over WebSockets, but ignored over HTTP
    if (FETCH_UNSUPPORTED_KEYS.some((k) => (cp as any)[k])) {
      return super.query(config, values, cb);
    }

    // allow plain text query without values
    if (typeof values === 'function') {
      cb = values;
      values = undefined;
    }

    const queryViaFetch = async () => {
      const euc = encodeURIComponent;
      const eu = encodeURI;
      const connectionString = `postgresql://${euc(cp.user)}@${euc(cp.host)}/${eu(cp.database)}`;
      const sql = neon(connectionString, {
        password: cp.password ?? undefined, // don't send text 'null' when null
        fullResults: true,
        arrayMode: config.rowMode === 'array',
      });
      return sql.query(
        typeof config === 'string' ? config : config.text,
        values ?? config.values ?? [],
        { types: config.types ?? this.options?.types },
      );
    };

    // `new this.Promise` honours a custom Promise implementation, as pg does
    const promise = new this.Promise((resolve) => resolve(queryViaFetch()));
    if (cb) {
      promise.then(
        (result) => cb(undefined, result),
        (err) => cb(err),
      );
      return undefined; // pg returns nothing in callback style
    }

    return promise;
  }
}
