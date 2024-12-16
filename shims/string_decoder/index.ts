declare global {
  class TextDecoderClass extends TextDecoder {}
}

export class StringDecoder {
  td: TextDecoderClass;

  constructor(encoding: ConstructorParameters<typeof TextDecoder>[0]) {
    this.td = new TextDecoder(encoding);
  }

  write(data: Uint8Array) {
    return this.td.decode(data, { stream: true });
  }

  end(data: Uint8Array) {
    return this.td.decode(data);
  }
}
