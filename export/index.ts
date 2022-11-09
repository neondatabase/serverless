export {
  Connection,
  DatabaseError,
  Pool,
  Query,
  defaults,
  types,
} from 'pg';

import { Client } from 'pg';
import { Socket } from '../shims/net';
import rewritePgConfig from '../shims/rewritePgConfig';

/**
 * We largely export the pg library unchanged, but we do make two tweaks, both 
 * relating to authentication. The problem is that SCRAM auth is deliberately
 * CPU-intensive, and this is not appropriate for a serverless environment.
 * We address this two ways. First, we disable SNI in the TLS library and use
 * the fallback of putting the Neon project name in the password field. As a
 * side effect, this prevents SCRAM authentication being used. Second, in case
 * SCRAM authentication does still get used, we replace the standard pg 
 * implementation with one that uses SubtleCrypto for the repeated SHA-256 
 * digests. This saves significant CPU time over our pure JS SHA-256 shim.
*/

class NeonClient extends Client {
  constructor(config: any) {
    super(Socket.disableSCRAM ? rewritePgConfig(config) : config);
  }

  async _handleAuthSASLContinue(msg: any) {
    // *** NOTE: the same code is also found in shims/patchPgClient.ts ***

    // console.log('SCRAM optimised');

    // @ts-ignore - this.saslSession does exist
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
  NeonClient as Client,
};
