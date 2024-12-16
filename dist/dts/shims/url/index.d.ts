export declare function parse(url: string, parseQueryString?: boolean): {
    href: string;
    protocol: string;
    auth: string;
    username: string;
    password: string;
    host: string;
    hostname: string;
    port: string;
    pathname: string;
    search: string;
    query: string | {
        [k: string]: string;
    };
    hash: string;
};
