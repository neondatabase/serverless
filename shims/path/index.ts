
// this gets used in trying to read the pg password from a file; since we don't implement fs, the return value matters little
export function join(...args: string[]) {
  return args.join('/');
}
