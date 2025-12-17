export function parse(url: string, parseQueryString = false) {
  const { protocol } = new URL(url);
  // we now swap the protocol to http: so that `new URL()` will parse it fully
  const httpUrl = 'http:' + url.substring(protocol.length);
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
  } = new URL(httpUrl);
  password = decodeURIComponent(password);
  username = decodeURIComponent(username);
  pathname = decodeURIComponent(pathname);

  // extract the neon database endpoint from the password encoding
  let endpoint = null;
  if (password.startsWith("endpoint=")) {
    [endpoint, password] = password.substring(9).split(/[\;\$]/, 2);
  }

  // extract the neon database endpoint from the options encoding
  const options = searchParams.get("options");
  if (options) {
    const optionParams = new URLSearchParams(options);
    const ep = optionParams.get("endpoint");
    if (ep) {
      endpoint = ep;
    }
  }

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
    endpoint,
  };
}
