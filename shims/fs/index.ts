// this gets used in trying to read the pg password
export function stat(file: string, cb: (err: Error, stat?: any) => void) {
  cb(new Error('No filesystem'));
}
