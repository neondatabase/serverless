export {
  Connection,
  DatabaseError,
  Query,
  defaults,
  types,
} from 'pg';

import { Client, Pool } from 'pg';
import { Socket } from '../shims/net';
import rewritePgConfig from '../shims/rewritePgConfig';

/**
 * We largely export the pg library unchanged, but we do make a few tweaks.
 * 
 * (1) SCRAM auth is deliberately CPU-intensive, and this is not appropriate
 * for a serverless environment. We address this two ways. First, we replace 
 * the standard pg implementation with one that uses SubtleCrypto for repeated
 * SHA-256 digests. This saves some time and CPU. Second, we disable SCRAM on
 * Neon hosts by using a Neon-specific workaround: we disable SNI in the TLS 
 * library and use the fallback of putting the Neon project name in the 
 * password field.
 * 
 * (2) Querying can require a lot of network round-trips. We provide a shortcut
 * option that saves two round-trips by combining the startup message, password
 * message and first query in one shot. This only works for cleartext password
 * auth over an unecrypted connection (which is safe as long as the connection
 * is made over a secure WebSocket).
 * */

class NeonPool extends Pool {
  constructor(config: any) {
    super(rewritePgConfig(config));
  }
}

class NeonClient extends Client {
  constructor(config: any) {
    super(rewritePgConfig(config));

    if (Socket.quickConnect) {
      this.connect = (...args: any[]) => new Promise(resolve => {
        // @ts-ignore: this is clearly just fine, but I haven't figured out how to persuade TS of that
        super.connect(...args);

        // @ts-ignore: connection does exist, just not advertised
        const con = this.connection;

        // (1) don't respond to authenticationCleartextPassword, because we send the password ahead of time, below
        con.removeAllListeners('authenticationCleartextPassword');

        // (2) don't respond to readyForQuery *this time only*, again because we assumed it was true already
        con.removeAllListeners('readyForQuery');
        // @ts-ignore: _handleReadyForQuery does exist, just not advertised
        con.once('readyForQuery', () => con.on('readyForQuery', this._handleReadyForQuery.bind(this)));

        // (3) for an SSL connection, fake the SSL support message from the server and remove the listener for it
        // (the server's actual 'S' response is ignored via the expectPreData argument to startTls in shims/net/index.ts)
        if (this.ssl && Socket.quickTLS) {
          con.removeAllListeners('sslconnect');
          con.on('connect', () => con.stream.emit('data', 'S'));
        }

        // (3) once connected, immediately send startup message (for ssl queries, which won't have sent it yet) and password
        const connectEvent = this.ssl && Socket.quickTLS ? 'sslconnect' : 'connect';
        con.on(connectEvent, () => {
          if (this.ssl && Socket.quickTLS) {
            // @ts-ignore: getStartupConf does exist, just not advertised
            con.startup(this.getStartupConf());
          }
          // @ts-ignore: _handleAuthCleartextPassword does exist, just not advertised
          this._handleAuthCleartextPassword();
          // @ts-ignore: _handleReadyForQuery does exist, just not advertised
          this._handleReadyForQuery();
          resolve();
        })
      });
    }
  }

  async _handleAuthSASLContinue(msg: any) {
    // @ts-ignore - this.saslSession DOES exist
    const session = this.saslSession;
    const password = this.password;
    const serverData = msg.data;

    if (session.message !== 'SASLInitialResponse' || typeof password !== 'string' || typeof serverData !== 'string') throw new Error('SASL: protocol error');

    const attrPairs = Object.fromEntries(
      serverData.split(',').map(attrValue => {
        if (!/^.=/.test(attrValue)) throw new Error('SASL: Invalid attribute pair entry')
        const name = attrValue[0];
        const value = attrValue.substring(2);
        return [name, value];
      })
    );

    const nonce = attrPairs.r;
    const salt = attrPairs.s;
    const iterationText = attrPairs.i;

    if (!nonce || !/^[!-+--~]+$/.test(nonce)) throw new Error('SASL: SCRAM-SERVER-FIRST-MESSAGE: nonce missing/unprintable');
    if (!salt || !/^(?:[a-zA-Z0-9+/]{4})*(?:[a-zA-Z0-9+/]{2}==|[a-zA-Z0-9+/]{3}=)?$/.test(salt)) throw new Error('SASL: SCRAM-SERVER-FIRST-MESSAGE: salt missing/not base64');
    if (!iterationText || !/^[1-9][0-9]*$/.test(iterationText)) throw new Error('SASL: SCRAM-SERVER-FIRST-MESSAGE: missing/invalid iteration count');
    if (!nonce.startsWith(session.clientNonce)) throw new Error('SASL: SCRAM-SERVER-FIRST-MESSAGE: server nonce does not start with client nonce');
    if (nonce.length === session.clientNonce.length) throw new Error('SASL: SCRAM-SERVER-FIRST-MESSAGE: server nonce is too short');

    const iterations = parseInt(iterationText, 10);
    const saltBytes = Buffer.from(salt, 'base64');
    const enc = new TextEncoder();
    const passwordBytes = enc.encode(password);
    const iterHmacKey = await crypto.subtle.importKey('raw', passwordBytes, { name: 'HMAC', hash: { name: 'SHA-256' } }, false, ['sign']);
    let ui1 = new Uint8Array(await crypto.subtle.sign('HMAC', iterHmacKey, Buffer.concat([saltBytes, Buffer.from([0, 0, 0, 1])])));
    let ui = ui1;
    for (var i = 0; i < iterations - 1; i++) {
      ui1 = new Uint8Array(await crypto.subtle.sign('HMAC', iterHmacKey, ui1));
      ui = Buffer.from(ui.map((_, i) => ui[i] ^ ui1[i]));
    }
    const saltedPassword = ui;

    const ckHmacKey = await crypto.subtle.importKey('raw', saltedPassword, { name: 'HMAC', hash: { name: 'SHA-256' } }, false, ['sign']);
    const clientKey = new Uint8Array(await crypto.subtle.sign('HMAC', ckHmacKey, enc.encode('Client Key')));
    const storedKey = await crypto.subtle.digest('SHA-256', clientKey);

    const clientFirstMessageBare = 'n=*,r=' + session.clientNonce;
    const serverFirstMessage = 'r=' + nonce + ',s=' + salt + ',i=' + iterations;
    const clientFinalMessageWithoutProof = 'c=biws,r=' + nonce;
    const authMessage = clientFirstMessageBare + ',' + serverFirstMessage + ',' + clientFinalMessageWithoutProof;

    const csHmacKey = await crypto.subtle.importKey('raw', storedKey, { name: 'HMAC', hash: { name: 'SHA-256' } }, false, ['sign']);
    var clientSignature = new Uint8Array(await crypto.subtle.sign('HMAC', csHmacKey, enc.encode(authMessage)));
    var clientProofBytes = Buffer.from(clientKey.map((_, i) => clientKey[i] ^ clientSignature[i]));
    var clientProof = clientProofBytes.toString('base64');

    const skHmacKey = await crypto.subtle.importKey('raw', saltedPassword, { name: 'HMAC', hash: { name: 'SHA-256' } }, false, ['sign']);
    const serverKey = await crypto.subtle.sign('HMAC', skHmacKey, enc.encode('Server Key'));
    const ssbHmacKey = await crypto.subtle.importKey('raw', serverKey, { name: 'HMAC', hash: { name: 'SHA-256' } }, false, ['sign']);
    var serverSignatureBytes = Buffer.from(await crypto.subtle.sign('HMAC', ssbHmacKey, enc.encode(authMessage)));

    session.message = 'SASLResponse';
    session.serverSignature = serverSignatureBytes.toString('base64');
    session.response = clientFinalMessageWithoutProof + ',p=' + clientProof;

    // @ts-ignore - this.connection and this.saslSession do exist
    this.connection.sendSCRAMClientFinalMessage(this.saslSession.response);
  };
}

export {
  Socket as neonConfig,
  NeonPool as Pool,
  NeonClient as Client,
};
