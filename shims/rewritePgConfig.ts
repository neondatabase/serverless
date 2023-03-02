import { Socket } from './net';
import { parse } from 'pg-connection-string';

/*
 * When disabling SNI, we need to add the project to the password. 
 * The existing project and password may be found:
 *  (1) in a connection string,
 *  (2) in host and password keys, or
 *  (3) in process.env
 * So ...
*/

export default function rewritePgConfig(config: any) {
  let newConfig = config ?? {};
  if (typeof newConfig === 'string') newConfig = parse(newConfig);
  if (newConfig.connectionString) newConfig = Object.assign({}, newConfig, parse(newConfig.connectionString));
  delete newConfig.connectionString;  // because this still has the bare password and would be re-parsed by pg

  const host = newConfig.host ?? process.env.PGHOST ?? process.env.host;
  if (typeof host !== 'string' || !/[.]neon[.](tech|build)(:|$)/.test(host)) return config;

  newConfig.ssl = false;  // because Neon connections are always over `wss:` instead

  const originalPassword = newConfig.password ?? process.env.PGPASSWORD ?? process.env.password;
  if (typeof originalPassword !== 'string' || originalPassword === '') {
    console.warn(`No password was provided for Neon database host "${host}".`);
    return newConfig;
  }

  if (!Socket.addNeonProjectToPassword) return newConfig;

  const projectMatch = host.match(/^([^.]+)[.]/);
  if (projectMatch === null) return newConfig;

  const project = projectMatch[1];

  newConfig.password = `project=${project};${originalPassword}`;
  return newConfig;
}
