// @ts-ignore -- this isn't officially exported by pg
import ConnectionParameters from '../node_modules/pg/lib/connection-parameters';

interface PoolConnectionParameters {
  user: string;
  password: string;
  host: string;
  database: string;
  port?: number | string;
  application_name?: string;
  options?: string;
  statement_timeout?: number | string | false;
  lock_timeout?: number | string | false;
  idle_in_transaction_session_timeout?: number | string | false;
  client_encoding?: string;
}

/**
 * Rebuild a connection string for the HTTP fetch path, preserving Pool /
 * connection-string startup options that node-postgres would otherwise send
 * in the StartupMessage (see neondatabase/serverless#223).
 */
export function connectionStringFromPoolOptions(options: unknown): string {
  const cp = new ConnectionParameters(options) as PoolConnectionParameters;
  const euc = encodeURIComponent;
  const eu = encodeURI;
  let connectionString = `postgresql://${euc(cp.user)}:${euc(cp.password)}@${euc(cp.host)}`;
  if (cp.port !== undefined && Number(cp.port) !== 5432) {
    connectionString += `:${cp.port}`;
  }
  connectionString += `/${eu(cp.database)}`;

  const params = new URLSearchParams();
  const setIfPresent = (key: string, value: unknown) => {
    if (value === undefined || value === false || value === null || value === '')
      return;
    params.set(key, String(value));
  };
  setIfPresent('application_name', cp.application_name);
  setIfPresent('options', cp.options);
  setIfPresent('statement_timeout', cp.statement_timeout);
  setIfPresent('lock_timeout', cp.lock_timeout);
  setIfPresent(
    'idle_in_transaction_session_timeout',
    cp.idle_in_transaction_session_timeout,
  );
  setIfPresent('client_encoding', cp.client_encoding);

  const qs = params.toString();
  return qs ? `${connectionString}?${qs}` : connectionString;
}
