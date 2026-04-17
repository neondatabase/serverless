/**
 * Minimal `pg` type declarations, replacing @types/pg as a runtime dependency.
 * They are resolved via tsconfig paths and inlined by api-extractor.
 *
 * esbuild ignores tsconfig paths, so the real `pg` module from node_modules
 * is still used for the runtime bundle.
 *
 * == Maintaining this shim ==
 *
 * The tests/type-compatibility.ts suite fails if @types/pg gains a property
 * or signature this shim lacks. When that happens;
 * - Check the failing assertion name (e.g. _ClientConfigInputCompat) -- the
 *   tsc error should include the offending key: e.g. `type '"new_key"' does
 *   not satisfy the constraint 'never'`
 * - Either mirror the new key verbatim (i.e add it to this file) or widen it
 *   (perhaps to avoid pulling in @types/node) and add a comment
 *
 * If you're adding a new shimmed module (not just editing pg/events), remember
 * that tsconfig.json paths, api-extractor.json bundledPackages, and build.sh
 * esbuild aliases must all reference it.
 *
 * The source of truth for signatures is node_modules/@types/pg/index.d.ts and
   node_modules/pg-protocol/dist/messages.d.ts (NoticeMessage/DatabaseError).
 */

import { EventEmitter } from 'events';

// -- Query types ------------------------------------------------------------

export type QueryConfigValues<T> = T extends Array<infer U> ? T : never;

export interface QueryConfig<I = any[]> {
  name?: string | undefined;
  text: string;
  values?: QueryConfigValues<I>;
  types?: CustomTypesConfig | undefined;
}

export interface QueryArrayConfig<I = any[]> extends QueryConfig<I> {
  rowMode: 'array';
}

export interface QueryResultBase {
  command: string;
  rowCount: number | null;
  oid: number;
  fields: FieldDef[];
}

export interface QueryResultRow {
  [column: string]: any;
}

export interface QueryResult<R extends QueryResultRow = any>
  extends QueryResultBase {
  rows: R[];
}

export interface QueryArrayResult<R extends any[] = any[]>
  extends QueryResultBase {
  rows: R[];
}

export interface ResultBuilder<R extends QueryResultRow = any>
  extends QueryResult<R> {
  addRow(row: R): void;
}

export interface QueryParse {
  name: string;
  text: string;
  types: string[];
}

// -- Config types -----------------------------------------------------------

export interface ClientConfig {
  user?: string | undefined;
  database?: string | undefined;
  password?: string | (() => string | Promise<string>) | undefined;
  port?: number | undefined;
  host?: string | undefined;
  connectionString?: string | undefined;
  keepAlive?: boolean | undefined;
  stream?: (() => any) | undefined;
  statement_timeout?: false | number | undefined;
  ssl?: boolean | object | undefined;
  query_timeout?: number | undefined;
  lock_timeout?: number | undefined;
  keepAliveInitialDelayMillis?: number | undefined;
  idle_in_transaction_session_timeout?: number | undefined;
  application_name?: string | undefined;
  fallback_application_name?: string | undefined;
  connectionTimeoutMillis?: number | undefined;
  types?: CustomTypesConfig | undefined;
  options?: string | undefined;
  client_encoding?: string | undefined;
}

export type ConnectionConfig = ClientConfig;

export interface Defaults extends ClientConfig {
  poolSize?: number | undefined;
  poolIdleTimeout?: number | undefined;
  reapIntervalMillis?: number | undefined;
  binary?: boolean | undefined;
  parseInt8?: boolean | undefined;
  parseInputDatesAsUTC?: boolean | undefined;
}

export interface PoolConfig extends ClientConfig {
  max?: number | undefined;
  min?: number | undefined;
  idleTimeoutMillis?: number | undefined | null;
  log?: ((...messages: any[]) => void) | undefined;
  Promise?: PromiseConstructorLike | undefined;
  allowExitOnIdle?: boolean | undefined;
  maxUses?: number | undefined;
  maxLifetimeSeconds?: number | undefined;
  Client?: (new () => any) | undefined;
}

export interface PoolOptions extends PoolConfig {
  max: number;
  maxUses: number;
  allowExitOnIdle: boolean;
  maxLifetimeSeconds: number;
  idleTimeoutMillis: number | null;
}

type PgTypeId = number;
type PgTypeFormat = 'text' | 'binary';

export interface CustomTypesConfig {
  getTypeParser: (id: PgTypeId, format?: PgTypeFormat) => any;
}

// -- Message types ----------------------------------------------------------

export interface FieldDef {
  name: string;
  tableID: number;
  columnID: number;
  dataTypeID: number;
  dataTypeSize: number;
  dataTypeModifier: number;
  format: string;
}

export interface Notification {
  processId: number;
  channel: string;
  payload?: string | undefined;
}

// Kept local to avoid depending on pg-protocol declaration files.
export interface NoticeMessage {
  readonly name: 'notice';
  readonly length: number;
  readonly message: string | undefined;
  severity: string | undefined;
  code: string | undefined;
  detail: string | undefined;
  hint: string | undefined;
  position: string | undefined;
  internalPosition: string | undefined;
  internalQuery: string | undefined;
  where: string | undefined;
  schema: string | undefined;
  table: string | undefined;
  column: string | undefined;
  dataType: string | undefined;
  constraint: string | undefined;
  file: string | undefined;
  line: string | undefined;
  routine: string | undefined;
}

export interface BindConfig {
  portal?: string | undefined;
  statement?: string | undefined;
  binary?: string | undefined;
  values?: Array<Uint8Array | null | undefined | string> | undefined;
  valueMapper?: ((param: any, index: number) => any) | undefined;
}

export interface ExecuteConfig {
  portal?: string | undefined;
  rows?: string | undefined;
}

export interface MessageConfig {
  type: string;
  name?: string | undefined;
}

export interface Submittable {
  submit: (connection: Connection) => void;
}

// -- Classes ----------------------------------------------------------------

export class Connection extends EventEmitter {
  readonly stream: any;
  constructor(config?: ConnectionConfig);
  bind(config: BindConfig | null, more: boolean): void;
  execute(config: ExecuteConfig | null, more: boolean): void;
  parse(query: QueryParse, more: boolean): void;
  query(text: string): void;
  describe(msg: MessageConfig, more: boolean): void;
  close(msg: MessageConfig, more: boolean): void;
  flush(): void;
  sync(): void;
  end(): void;
}

export class ClientBase extends EventEmitter {
  constructor(config?: string | ClientConfig);
  connect(): Promise<void>;
  connect(callback: (err: Error) => void): void;
  query<T extends Submittable>(queryStream: T): T;
  query<R extends any[] = any[], I = any[]>(
    queryConfig: QueryArrayConfig<I>,
    values?: QueryConfigValues<I>,
  ): Promise<QueryArrayResult<R>>;
  query<R extends QueryResultRow = any, I = any>(
    queryConfig: QueryConfig<I>,
  ): Promise<QueryResult<R>>;
  query<R extends QueryResultRow = any, I = any[]>(
    queryTextOrConfig: string | QueryConfig<I>,
    values?: QueryConfigValues<I>,
  ): Promise<QueryResult<R>>;
  query<R extends any[] = any[], I = any[]>(
    queryConfig: QueryArrayConfig<I>,
    callback: (err: Error, result: QueryArrayResult<R>) => void,
  ): void;
  query<R extends QueryResultRow = any, I = any[]>(
    queryTextOrConfig: string | QueryConfig<I>,
    callback: (err: Error, result: QueryResult<R>) => void,
  ): void;
  query<R extends QueryResultRow = any, I = any[]>(
    queryText: string,
    values: QueryConfigValues<I>,
    callback: (err: Error, result: QueryResult<R>) => void,
  ): void;
  pauseDrain(): void;
  resumeDrain(): void;
  copyFrom(queryText: string): any;
  copyTo(queryText: string): any;
  escapeIdentifier(str: string): string;
  escapeLiteral(str: string): string;
  setTypeParser(id: PgTypeId, parseFn: (value: string) => any): void;
  setTypeParser(
    id: PgTypeId,
    format: PgTypeFormat,
    parseFn: (value: string) => any,
  ): void;
  getTypeParser(id: PgTypeId, format?: PgTypeFormat): any;
  on(event: 'drain', listener: () => void): this;
  on(event: 'error', listener: (err: Error) => void): this;
  on(event: 'notice', listener: (notice: NoticeMessage) => void): this;
  on(event: 'notification', listener: (message: Notification) => void): this;
  on(event: 'end', listener: () => void): this;
}

export class Client extends ClientBase {
  user?: string | undefined;
  database?: string | undefined;
  port: number;
  host: string;
  password?: string | undefined;
  ssl: boolean;
  readonly connection: Connection;
  constructor(config?: string | ClientConfig);
  end(): Promise<void>;
  end(callback: (err: Error) => void): void;
}

export interface PoolClient extends ClientBase {
  release(err?: Error | boolean): void;
}

export class Pool extends EventEmitter {
  constructor(config?: PoolConfig);
  options: PoolOptions;
  readonly totalCount: number;
  readonly idleCount: number;
  readonly waitingCount: number;
  readonly expiredCount: number;
  readonly ending: boolean;
  readonly ended: boolean;
  connect(): Promise<PoolClient>;
  connect(
    callback: (
      err: Error | undefined,
      client: PoolClient | undefined,
      done: (release?: any) => void,
    ) => void,
  ): void;
  end(): Promise<void>;
  end(callback: () => void): void;
  query<T extends Submittable>(queryStream: T): T;
  query<R extends any[] = any[], I = any[]>(
    queryConfig: QueryArrayConfig<I>,
    values?: QueryConfigValues<I>,
  ): Promise<QueryArrayResult<R>>;
  query<R extends QueryResultRow = any, I = any[]>(
    queryConfig: QueryConfig<I>,
  ): Promise<QueryResult<R>>;
  query<R extends QueryResultRow = any, I = any[]>(
    queryTextOrConfig: string | QueryConfig<I>,
    values?: QueryConfigValues<I>,
  ): Promise<QueryResult<R>>;
  query<R extends any[] = any[], I = any[]>(
    queryConfig: QueryArrayConfig<I>,
    callback: (err: Error, result: QueryArrayResult<R>) => void,
  ): void;
  query<R extends QueryResultRow = any, I = any[]>(
    queryTextOrConfig: string | QueryConfig<I>,
    callback: (err: Error, result: QueryResult<R>) => void,
  ): void;
  query<R extends QueryResultRow = any, I = any[]>(
    queryText: string,
    values: QueryConfigValues<I>,
    callback: (err: Error, result: QueryResult<R>) => void,
  ): void;
  on(
    event: 'release' | 'error',
    listener: (err: Error, client: PoolClient) => void,
  ): this;
  on(
    event: 'connect' | 'acquire' | 'remove',
    listener: (client: PoolClient) => void,
  ): this;
}

export class Query<R extends QueryResultRow = any, I extends any[] = any>
  extends EventEmitter
  implements Submittable
{
  constructor(
    queryTextOrConfig?: string | QueryConfig<I>,
    values?: QueryConfigValues<I>,
  );
  submit: (connection: Connection) => void;
  on(
    event: 'row',
    listener: (row: R, result?: ResultBuilder<R>) => void,
  ): this;
  on(event: 'error', listener: (err: Error) => void): this;
  on(event: 'end', listener: (result: ResultBuilder<R>) => void): this;
}

export class Events extends EventEmitter {
  on(event: 'error', listener: (err: Error, client: Client) => void): this;
}

export class DatabaseError extends Error {
  readonly length: number;
  readonly name: string;
  severity: string | undefined;
  code: string | undefined;
  detail: string | undefined;
  hint: string | undefined;
  position: string | undefined;
  internalPosition: string | undefined;
  internalQuery: string | undefined;
  where: string | undefined;
  schema: string | undefined;
  table: string | undefined;
  column: string | undefined;
  dataType: string | undefined;
  constraint: string | undefined;
  file: string | undefined;
  line: string | undefined;
  routine: string | undefined;
  constructor(message: string, length: number, name: string);
}

export class Result<R extends QueryResultRow = any> implements QueryResult<R> {
  command: string;
  rowCount: number | null;
  oid: number;
  fields: FieldDef[];
  rows: R[];
  constructor(rowMode: string, types: CustomTypesConfig);
}

export class TypeOverrides implements CustomTypesConfig {
  constructor(types?: CustomTypesConfig);
  setTypeParser(id: PgTypeId, parseFn: (value: string) => any): void;
  setTypeParser(
    id: PgTypeId,
    format: PgTypeFormat,
    parseFn: (value: string | Uint8Array) => any,
  ): void;
  getTypeParser(id: PgTypeId, format?: PgTypeFormat): any;
}

// -- Value exports ----------------------------------------------------------

export declare const types: {
  setTypeParser(id: number, parseFn: (value: string) => any): void;
  setTypeParser(
    id: number,
    format: 'text' | 'binary',
    parseFn: (value: string) => any,
  ): void;
  getTypeParser(id: number, format?: 'text' | 'binary'): any;
  arrayParser(source: string, transform: (entry: any) => any): any[];
  builtins: { [key: string]: number };
};

export declare const defaults: Defaults & ClientConfig;

export declare function escapeIdentifier(str: string): string;
export declare function escapeLiteral(str: string): string;

import type * as Pg from './index.d.ts';
export declare const native: typeof Pg | null;
