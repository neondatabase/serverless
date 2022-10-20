export class StringDecoder {
  td = null;

  constructor(encoding) {
    this.td = new TextDecoder(encoding);
  }

  write(data) {
    return this.td.decode(data, { stream: true });
  }

  end(data) {
    return this.td.decode(data);
  }
}
