function parseUrl(url: string) {
  const { protocol } = new URL(url);
  // Use a special scheme so PostgreSQL connection strings parse hierarchically.
  const httpUrl = 'http:' + url.substring(protocol.length);
  return { protocol, parsedUrl: new URL(httpUrl) };
}

export function setDefaultQueryParam(url: string, name: string, value: string) {
  const { protocol, parsedUrl } = parseUrl(url);
  if (!parsedUrl.searchParams.has(name)) {
    parsedUrl.searchParams.set(name, value);
  }
  return protocol + parsedUrl.toString().substring(parsedUrl.protocol.length);
}

export function parse(url: string, parseQueryString = false) {
  const { protocol, parsedUrl } = parseUrl(url);
  let {
    username,
    password,
    host,
    hostname,
    port,
    pathname,
    search,
    searchParams,
    hash,
  } = parsedUrl;
  password = decodeURIComponent(password);
  username = decodeURIComponent(username);
  pathname = decodeURIComponent(pathname);
  const auth = username + ':' + password;
  const query = parseQueryString
    ? Object.fromEntries(searchParams.entries())
    : search;
  return {
    href: url,
    protocol,
    auth,
    username,
    password,
    host,
    hostname,
    port,
    pathname,
    search,
    query,
    hash,
  };
}
