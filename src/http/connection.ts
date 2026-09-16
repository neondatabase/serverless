import { NeonDbError } from './error';

/**
 * Pre-2024 Firefox and Chrome parse unknown schemes as opaque paths, so we
 * pretend connection strings are `http:`, necessitating helper functions.
 *
 * See also:
 * * `pgConnectionStringFromURL(url)`
 * * `url.parse` shim in shims/url (but we don't use that because we want a
 *   real URL object we can serialize back into a string).
 * @param s - A `postgres:` connection string
 * @returns An instance of URL (protocol: `http:`)
 */
export function URLFromPgConnectionString(s: string, checkComplete: boolean) {
  let protocol, url;
  try {
    protocol = new URL(s).protocol;
    url = new URL('http:' + s.slice(protocol.length));
  } catch {
    throw new NeonDbError(
      'Database connection string provided to `neon()` is not a valid URL. Connection string: ' +
        String(s),
    );
  }
  const { username, hostname, pathname } = url;
  if (
    (protocol !== 'postgres:' && protocol !== 'postgresql:') ||
    (checkComplete &&
      (!username ||
        !hostname ||
        hostname === '-' ||
        !pathname ||
        pathname === '/'))
  ) {
    throw new NeonDbError(
      'Database connection string format for `neon()` should be: postgresql://user:password@host.tld/dbname?option=value',
    );
  }
  return url;
}

/**
 * Pre-2024 Firefox and Chrome parse unknown schemes as opaque paths, so we
 * pretend connection strings are `http:`, necessitating helper functions.
 *
 * See also:
 * * `URLFromPgConnectionString(connectionString)`
 * @param url - An instance of URL to serialize (likely protocol: `http:`)
 * @returns A `postgresql:` connection string
 */
export function pgConnectionStringFromURL(url: URL) {
  return 'postgresql:' + url.href.slice(url.protocol.length);
}

export const connectionParamKeys = [
  'connectionString',
  'user',
  'username', // alias for user
  'password',
  'host',
  'hostname', // alias for host
  'database',
] as const;

const connectionParamsMap = {
  database: 'pathname',
  user: 'username',
  // node-postgres host omits port number like URL hostname does
  host: 'hostname',
} as Record<string, string>;

type ConnectionParamKey = (typeof connectionParamKeys)[number];
type StringLike = string | Promise<string> | (() => string | Promise<string>);

export type ConnectionParams = {
  [k in ConnectionParamKey]?: StringLike;
};

/**
 * Take an optional connection string and optional connection parameters, and
 * resolve them into a new connection string, prioritising parameters.
 * @param connectionString - A `postgres:` connection string, or undefined
 * @param params - An object containing connection parameters, or undefined
 * @returns An object with `resolvedConnectionString` and `resolvedURL`,
 * expressing equivalent parameters.
 */
export async function resolveConnectionParams(
  connectionString: StringLike = 'postgres://-',
  params: ConnectionParams = {},
) {
  // connectionString in options overrides connectionString specified directly
  if (params.connectionString !== undefined) {
    connectionString = params.connectionString;
  }
  if (typeof connectionString === 'function') {
    connectionString = connectionString();
  }
  connectionString = await connectionString; // separate from function call in case we're directly passed a Promise
  if (typeof connectionString !== 'string') {
    throw new Error(
      `Connection string must be: string | Promise<string> | (() => string | Promise<string>)`,
    );
  }

  const url = URLFromPgConnectionString(connectionString, false);

  await Promise.all(
    connectionParamKeys.map(async (k) => {
      // already dealt with connectionString
      if (k === 'connectionString') return;

      // normalise connection options
      let v = params[k];
      if (typeof v === 'function') v = v();
      v = await v; // separate from function call in case we're directly passed a Promise
      if (v === undefined) return;
      if (typeof v !== 'string') {
        throw new NeonDbError(
          `Connection parameter "${k}" must be: string | Promise<string> | (() => string | Promise<string>)`,
        );
      }

      // options override values from connectionString
      const urlPart = connectionParamsMap[k] ?? k;
      (url as any)[urlPart] = v;
    }),
  );

  const resolvedConnectionString = pgConnectionStringFromURL(url);
  const resolvedURL = URLFromPgConnectionString(resolvedConnectionString, true);

  return {
    resolvedConnectionString,
    resolvedURL,
  };
}
