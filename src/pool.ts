import { Pool } from 'pg';
import type {
  QueryResultRow,
  Submittable,
  QueryArrayConfig,
  QueryConfigValues,
  QueryConfig,
  QueryArrayResult,
  QueryResult,
} from 'pg';

import { NeonClient } from './client';
import { neon } from './httpQuery';
import { Socket } from './shims/net';

// @ts-ignore -- this isn't officially exported by pg
import ConnectionParameters from '../node_modules/pg/lib/connection-parameters';

interface ConnectionParameters {
  user: string;
  password: string;
  host: string;
  database: string;
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

export declare interface NeonPool {
  Promise: typeof Promise;
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

      sql
        .query(queryText, queryValues, {
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
