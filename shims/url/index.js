export function parse(url, parseQueryString = false) {
  const { protocol } = new URL(url);
  const httpUrl = 'http:' + url.substring(protocol.length);
  const { username, password, hostname, port, search, searchParams, hash } = new URL(httpUrl);
  const auth = username + ':' + password;
  const query = parseQueryString ? Object.fromEntries(searchParams.entries()) : search;
  return { href: url, protocol, auth, username, password, hostname, port, search, query, hash };
}
