import { parse } from 'pg-connection-string';
import { type ClientConfig } from 'pg';

// These functions come from pg-connection-string@2.14.0

// convert pg-connection-string ssl config to a ClientConfig.ConnectionOptions
function toConnectionOptions(sslConfig: any) {
  const connectionOptions = Object.entries(sslConfig).reduce(
    (c, [key, value]) => {
      // we explicitly check for undefined and null instead of `if (value)` because some
      // options accept falsy values. Example: `ssl.rejectUnauthorized = false`
      if (value !== undefined && value !== null) {
        c[key] = value;
      }
      return c;
    },
    Object.create(null),
  );
  return connectionOptions;
}

// convert pg-connection-string config to a ClientConfig
function toClientConfig(config: any) {
  const poolConfig = Object.entries(config).reduce((c, [key, value]) => {
    if (key === 'ssl') {
      const sslConfig = value;

      if (typeof sslConfig === 'boolean') {
        c[key] = sslConfig;
      }

      if (typeof sslConfig === 'object') {
        c[key] = toConnectionOptions(sslConfig);
      }
    } else if (value !== undefined && value !== null) {
      if (key === 'port') {
        // when port is not specified, it is converted into an empty string
        // we want to avoid NaN or empty string as a values in ClientConfig
        if (value !== '') {
          const v = parseInt(value as any, 10);
          if (isNaN(v)) {
            throw new Error(`Invalid ${key}: ${value}`);
          }

          c[key] = v;
        }
      } else {
        c[key] = value;
      }
    }

    return c;
  }, Object.create(null));

  return poolConfig;
}

// parses a connection string into ClientConfig
export function parseIntoClientConfig(str: string): ClientConfig {
  return toClientConfig(parse(str));
}
