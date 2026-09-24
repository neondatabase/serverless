import { NeonDbError } from './error';

type ThingLike<T> = T | (() => T | Promise<T>);
type StringLike = ThingLike<string>;
type StringNumberLike = ThingLike<string | number>;

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
      `Database connection string provided to neon() is not a valid URL (connection string: ${s})`,
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
      `Wrong URL scheme or missing user, host or database in connection parameters`,
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
  'port',
  'database',
] as const;

const connectionParamsMap = {
  database: 'pathname',
  user: 'username',
  // node-postgres host omits port number like URL hostname does
  host: 'hostname',
} as Record<string, string>;

type ConnectionParamKey = (typeof connectionParamKeys)[number];
export type ConnectionParams = {
  [k in ConnectionParamKey]?: k extends 'port' ? StringNumberLike : StringLike;
};

/**
 * Merges multiple sets of connection parameters. Later parameters override
 * earlier parameters, and a connectionString parameter overrides everything to
 * date.
 * @param paramSets - Multiple sets of connection parameters
 * @returns Merged connection parameters
 */
export function mergeConnectionParams(...paramSets: ConnectionParams[]) {
  let outParams: ConnectionParams = {};
  for (const params of paramSets) {
    outParams =
      params.connectionString !== undefined
        ? params
        : { ...outParams, ...params };
  }
  return outParams;
}

/**
 * Take an optional connection string and optional connection parameters, and
 * resolve them into a new connection string, prioritising the parameters.
 * @param connectionString - A `postgres:` connection string, or undefined
 * @param params - An object containing connection parameters, or undefined
 * @returns An object with `resolvedConnectionString` and `resolvedURL`,
 * expressing equivalent parameters.
 */
export async function resolveConnectionParams(
  connectionString: StringLike = 'postgresql://-',
  params: ConnectionParams = {},
  defaultOptions: Record<string, string> = {},
) {
  // connectionString in options overrides connectionString specified directly
  if (params.connectionString !== undefined) {
    connectionString = params.connectionString;
  }
  if (typeof connectionString === 'function') {
    connectionString = await connectionString();
  }
  if (typeof connectionString !== 'string') {
    throw new NeonDbError(
      `Connection string must be a string or a function resolving to one`,
    );
  }
  if (params.user !== undefined && params.username !== undefined) {
    throw new NeonDbError(`Please specify one only of user and username`);
  }
  if (params.host !== undefined && params.hostname !== undefined) {
    throw new NeonDbError(`Please specify one only of host and hostname`);
  }

  const url = URLFromPgConnectionString(connectionString, false);

  await Promise.all(
    connectionParamKeys.map(async (k) => {
      // already dealt with connectionString
      if (k === 'connectionString') return;

      // normalise options: call, await, skip if undefined
      let v = params[k];
      if (typeof v === 'function') v = await v();
      if (v === undefined) return;

      // check type
      if (typeof v !== 'string' && !(k === 'port' && typeof v === 'number')) {
        const orNumber = k === 'port' ? ' or a number' : '';
        throw new NeonDbError(
          `Connection parameter "${k}" must be a string${orNumber} or a function resolving to one`,
        );
      }

      // override value from connectionString
      const urlPart = connectionParamsMap[k] ?? k;
      (url as any)[urlPart] = v;
    }),
  );

  // apply default options where not already present in URL searchParams
  const { searchParams } = url;
  for (const k in defaultOptions) {
    if (searchParams.has(k)) continue;
    searchParams.append(k, defaultOptions[k]);
  }

  const resolvedConnectionString = pgConnectionStringFromURL(url);
  const resolvedURL = URLFromPgConnectionString(resolvedConnectionString, true);

  return {
    resolvedConnectionString,
    resolvedURL,
  };
}
