import { server } from '@vitest/browser/context';

export async function makeEnv() {
  const envStr = await server.commands.readFile('../../.env.test');
  const env = parseEnv(envStr);
  globalThis.process = { env } as any;
}

// basic env file parsing (because dotenv requires various nodeisms)

function parseEnv(s: string) {
  const env = {};
  for (let line of s.split('\n')) {
    line = line.replace(/#.*/, ''); // naively strip comments (cannot be protected by quoting)
    line = line.trim();
    if (line === '') continue;
    const eqIndex = line.indexOf('=');
    if (eqIndex === -1) throw new Error('Unsupported syntax in .env.test');
    const k = line.slice(0, eqIndex).trimEnd();
    let v = line.slice(eqIndex + 1).trimStart();
    if (/^(["']).*\1$/.test(v)) v = v.slice(1, -1);
    env[k] = v;
  }
  return env;
}
