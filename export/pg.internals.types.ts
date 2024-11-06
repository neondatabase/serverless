// Typescript module augmentation declarations for pg internals that don't have publicly exported types
// - https://www.typescriptlang.org/docs/handbook/declaration-merging.html#module-augmentation

declare module 'pg/lib/connection-parameters' {
  export default class ConnectionParameters {
    constructor(config: any);

    user: string;
    password: string;
    host: string;
    database: string;
  }
}

declare module 'pg/lib/type-overrides' {
  export default class TypeOverrides {
    constructor(userTypes: any);

    getOverrides(format: string): Record<any, any>;

    setTypeParser(oid: any, format: string, parseFn: any): void;

    getTypeParser(oid: any, format?: string): any;
  }
}

declare module 'pg/lib/utils' {
  export function prepareValue(value: any): any;
}
