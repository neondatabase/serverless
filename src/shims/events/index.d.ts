// Minimal EventEmitter type declaration. Replaces the events module from
// `@types/node` as a runtime dependency. Resolved by via tsconfig paths
// and inlined by api-extractor.

export class EventEmitter {
  addListener(
    eventName: string | symbol,
    listener: (...args: any[]) => void,
  ): this;
  on(
    eventName: string | symbol,
    listener: (...args: any[]) => void,
  ): this;
  once(
    eventName: string | symbol,
    listener: (...args: any[]) => void,
  ): this;
  removeListener(
    eventName: string | symbol,
    listener: (...args: any[]) => void,
  ): this;
  off(
    eventName: string | symbol,
    listener: (...args: any[]) => void,
  ): this;
  removeAllListeners(event?: string | symbol): this;
  setMaxListeners(n: number): this;
  getMaxListeners(): number;
  listeners(eventName: string | symbol): Function[];
  rawListeners(eventName: string | symbol): Function[];
  emit(eventName: string | symbol, ...args: any[]): boolean;
  listenerCount(eventName: string | symbol): number;
  prependListener(
    eventName: string | symbol,
    listener: (...args: any[]) => void,
  ): this;
  prependOnceListener(
    eventName: string | symbol,
    listener: (...args: any[]) => void,
  ): this;
  eventNames(): Array<string | symbol>;
}
