import { parse } from 'pg-connection-string';
import { Socket } from './net';

/*
 * When disabling SNI, we need to add the project to the password. 
 * The existing project and password may be found:
 *  (1) in a connection string,
 *  (2) in host and password keys, or
 *  (3) in process.env
 * So ...
*/

export default function rewritePgConfig(config: any) {
  if (Socket.disableSCRAM) {
    let newConfig = config;
    if (typeof newConfig === 'string') newConfig = parse(newConfig);
    if (newConfig.connectionString) newConfig = Object.assign({}, newConfig, parse(newConfig.connectionString));
    delete newConfig.connectionString;  // because this still has the unrewritten password and would be re-parsed by pg

    const host = newConfig.host ?? process.env.PGHOST ?? process.env.host;

    // apply this only to Neon hosts
    if (typeof host === 'string' && /[.]neon[.]tech(:|$)/.test(host)) {
      const projectMatch = host.match(/^([^.]+)[.]/);
      if (projectMatch !== null) {
        const project = projectMatch[1];
        const originalPassword = newConfig.password ?? process.env.PGPASSWORD ?? process.env.password;
        if (typeof originalPassword === 'string') {
          // console.log('SCRAM bypass implemented');
          newConfig.password = `project=${project};${originalPassword}`;
          config = newConfig;
        }
      }
    }
  }

  return config;
}