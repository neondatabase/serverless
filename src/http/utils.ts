/**
 * Detects if the code is running in a browser environment and displays a warning
 * about the security implications of running SQL directly from the browser.
 */
export function warnIfBrowser(): void {
  const isBrowser =
    typeof window !== 'undefined' && typeof document !== 'undefined';
  if (
    isBrowser &&
    typeof console !== 'undefined' &&
    typeof console.warn === 'function'
  ) {
    console.warn(`          
        ************************************************************
        *                                                          *
        *  WARNING: Running SQL directly from the browser can have *
        *  security implications. Even if your database is         *
        *  protected by Row-Level Security (RLS), use it at your   *
        *  own risk. This approach is great for fast prototyping,  *
        *  but ensure proper safeguards are in place to prevent    *
        *  misuse or execution of expensive SQL queries by your    *
        *  end users.                                              *
        *                                                          *
        *  If you've assessed the risks, suppress this message     *
        *  using the disableWarningInBrowsers configuration        *
        *  parameter.                                              *
        *                                                          *
        ************************************************************`);
  }
}

/**
 * Pre-2024 Firefox and Chrome parse unknown schemes as opaque paths, so we
 * pretend connection strings are `http:`, necessitating helper functions.
 *
 * See also:
 * * `pgConnectionStringFromURL(url)`
 * * `url.parse` shim in shims/url (but we don't use that because we want a
 *   real URL object we can serialize back into a string).
 * @param s - A 'postgres:' connection string
 */
export function URLFromPgConnectionString(s: string, checkComplete: boolean) {
  let protocol, url;
  try {
    protocol = new URL(s).protocol;
    url = new URL('http:' + s.slice(protocol.length));
  } catch {
    throw new Error(
      'Database connection string provided to `neon()` is not a valid URL. Connection string: ' +
        String(s),
    );
  }
  const { username, hostname, pathname } = url;
  if (
    (protocol !== 'postgres:' && protocol !== 'postgresql:') ||
    (checkComplete && (!username || !hostname || !pathname))
  ) {
    throw new Error(
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
 * @param url - An `http:` URL to serialize to a `postgres:` connection string
 */
export function pgConnectionStringFromURL(url: URL) {
  return 'postgresql:' + url.href.slice(url.protocol.length);
}
