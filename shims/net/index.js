import { EventEmitter } from 'events';

export class Socket extends EventEmitter {
  writable = true;

  constructor() {
    super();
    console.log('socket constructed');
  }

  setNoDelay() {
    // no-op
  }

  setKeepAlive() {
    // no-op
  }

  ref() {

  }

  unref() {

  }

  connect(port, host) {
    // TODO ...
    setTimeout(() => this.emit('connect'), 10);
  }

  write(data) {
    // TODO
  }

  end() {
    // TODO
  }
}
