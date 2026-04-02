/**
 * Type compatibility test.
 *
 * Verifies that our local pg shims declare all the same property keys
 * as the real @types/pg types. If @types/pg adds a new required property
 * to any interface, this test will fail to compile.
 *
 * We check keyof rather than structural assignability because our shims
 * intentionally widen some types (e.g. `number` instead of `TypeId`,
 * `Uint8Array` instead of `Buffer`, `object` instead of `ConnectionOptions`).
 *
 * Run: npm run test:type-shims
 */

import type * as Shims from '../src/shims/pg/index.d.ts';

// import the real @types/pg directly (bypass tsconfig paths)
import type * as Real from '../node_modules/@types/pg/index.d.ts';

// fails to compile if the real type has a property key that our shim lacks.
type Assert<_T extends true> = void;

// every key on Real.X must exist on Shims.X
type _ClientConfig = Assert<keyof Real.ClientConfig extends keyof Shims.ClientConfig ? true : false>;
type _ConnectionConfig = Assert<keyof Real.ConnectionConfig extends keyof Shims.ConnectionConfig ? true : false>;
type _Defaults = Assert<keyof Real.Defaults extends keyof Shims.Defaults ? true : false>;
type _PoolConfig = Assert<keyof Real.PoolConfig extends keyof Shims.PoolConfig ? true : false>;
type _QueryConfig = Assert<keyof Real.QueryConfig extends keyof Shims.QueryConfig ? true : false>;
type _QueryArrayConfig = Assert<keyof Real.QueryArrayConfig extends keyof Shims.QueryArrayConfig ? true : false>;
type _CustomTypesConfig = Assert<keyof Real.CustomTypesConfig extends keyof Shims.CustomTypesConfig ? true : false>;
type _FieldDef = Assert<keyof Real.FieldDef extends keyof Shims.FieldDef ? true : false>;
type _QueryResultBase = Assert<keyof Real.QueryResultBase extends keyof Shims.QueryResultBase ? true : false>;
type _QueryResultRow = Assert<keyof Real.QueryResultRow extends keyof Shims.QueryResultRow ? true : false>;
type _QueryResult = Assert<keyof Real.QueryResult extends keyof Shims.QueryResult ? true : false>;
type _QueryArrayResult = Assert<keyof Real.QueryArrayResult extends keyof Shims.QueryArrayResult ? true : false>;
type _ResultBuilder = Assert<keyof Real.ResultBuilder extends keyof Shims.ResultBuilder ? true : false>;
type _QueryParse = Assert<keyof Real.QueryParse extends keyof Shims.QueryParse ? true : false>;
type _BindConfig = Assert<keyof Real.BindConfig extends keyof Shims.BindConfig ? true : false>;
type _ExecuteConfig = Assert<keyof Real.ExecuteConfig extends keyof Shims.ExecuteConfig ? true : false>;
type _MessageConfig = Assert<keyof Real.MessageConfig extends keyof Shims.MessageConfig ? true : false>;
type _Notification = Assert<keyof Real.Notification extends keyof Shims.Notification ? true : false>;
type _Submittable = Assert<keyof Real.Submittable extends keyof Shims.Submittable ? true : false>;
type _PoolOptions = Assert<keyof Real.PoolOptions extends keyof Shims.PoolOptions ? true : false>;
type _Result = Assert<keyof Real.Result extends keyof Shims.Result ? true : false>;
type _TypeOverrides = Assert<keyof Real.TypeOverrides extends keyof Shims.TypeOverrides ? true : false>;
type _DatabaseError = Assert<keyof Real.DatabaseError extends keyof Shims.DatabaseError ? true : false>;

// and vice versa: our shim shouldn't have keys the real type doesn't
type _ClientConfig2 = Assert<keyof Shims.ClientConfig extends keyof Real.ClientConfig ? true : false>;
type _ConnectionConfig2 = Assert<keyof Shims.ConnectionConfig extends keyof Real.ConnectionConfig ? true : false>;
type _Defaults2 = Assert<keyof Shims.Defaults extends keyof Real.Defaults ? true : false>;
type _PoolConfig2 = Assert<keyof Shims.PoolConfig extends keyof Real.PoolConfig ? true : false>;
type _QueryConfig2 = Assert<keyof Shims.QueryConfig extends keyof Real.QueryConfig ? true : false>;
type _QueryArrayConfig2 = Assert<keyof Shims.QueryArrayConfig extends keyof Real.QueryArrayConfig ? true : false>;
type _CustomTypesConfig2 = Assert<keyof Shims.CustomTypesConfig extends keyof Real.CustomTypesConfig ? true : false>;
type _FieldDef2 = Assert<keyof Shims.FieldDef extends keyof Real.FieldDef ? true : false>;
type _QueryResultBase2 = Assert<keyof Shims.QueryResultBase extends keyof Real.QueryResultBase ? true : false>;
type _QueryResultRow2 = Assert<keyof Shims.QueryResultRow extends keyof Real.QueryResultRow ? true : false>;
type _QueryResult2 = Assert<keyof Shims.QueryResult extends keyof Real.QueryResult ? true : false>;
type _QueryArrayResult2 = Assert<keyof Shims.QueryArrayResult extends keyof Real.QueryArrayResult ? true : false>;
type _ResultBuilder2 = Assert<keyof Shims.ResultBuilder extends keyof Real.ResultBuilder ? true : false>;
type _QueryParse2 = Assert<keyof Shims.QueryParse extends keyof Real.QueryParse ? true : false>;
type _BindConfig2 = Assert<keyof Shims.BindConfig extends keyof Real.BindConfig ? true : false>;
type _ExecuteConfig2 = Assert<keyof Shims.ExecuteConfig extends keyof Real.ExecuteConfig ? true : false>;
type _MessageConfig2 = Assert<keyof Shims.MessageConfig extends keyof Real.MessageConfig ? true : false>;
type _Notification2 = Assert<keyof Shims.Notification extends keyof Real.Notification ? true : false>;
type _Submittable2 = Assert<keyof Shims.Submittable extends keyof Real.Submittable ? true : false>;
type _PoolOptions2 = Assert<keyof Shims.PoolOptions extends keyof Real.PoolOptions ? true : false>;
type _Result2 = Assert<keyof Shims.Result extends keyof Real.Result ? true : false>;
type _TypeOverrides2 = Assert<keyof Shims.TypeOverrides extends keyof Real.TypeOverrides ? true : false>;
type _DatabaseError2 = Assert<keyof Shims.DatabaseError extends keyof Real.DatabaseError ? true : false>;

// Usage compatibility checks:
// - inputs accepted by the library: Real -> Shim
// - outputs exposed by the library: Shim -> Real

type AssertNever<_T extends never> = void;

type MismatchedKeys<FromT, ToT, IgnoreK extends PropertyKey = never> = {
  [K in Exclude<keyof FromT, IgnoreK>]-?: K extends keyof ToT
    ? [FromT[K]] extends [ToT[K]]
      ? never
      : K
    : K;
}[Exclude<keyof FromT, IgnoreK>];

// inputs (Real -> Shim), with key-level diagnostics in error output
type _ClientConfigInputCompat = AssertNever<MismatchedKeys<Real.ClientConfig, Shims.ClientConfig>>;
type _ConnectionConfigInputCompat = AssertNever<MismatchedKeys<Real.ConnectionConfig, Shims.ConnectionConfig>>;
type _DefaultsInputCompat = AssertNever<MismatchedKeys<Real.Defaults, Shims.Defaults>>;
type _PoolConfigInputCompat = AssertNever<MismatchedKeys<Real.PoolConfig, Shims.PoolConfig>>;
type _QueryConfigInputCompat = AssertNever<MismatchedKeys<Real.QueryConfig, Shims.QueryConfig>>;
type _QueryArrayConfigInputCompat = AssertNever<MismatchedKeys<Real.QueryArrayConfig, Shims.QueryArrayConfig>>;
type _CustomTypesConfigInputCompat = AssertNever<MismatchedKeys<Real.CustomTypesConfig, Shims.CustomTypesConfig>>;
type _QueryParseInputCompat = AssertNever<MismatchedKeys<Real.QueryParse, Shims.QueryParse>>;
type _BindConfigInputCompat = AssertNever<MismatchedKeys<Real.BindConfig, Shims.BindConfig>>;
type _ExecuteConfigInputCompat = AssertNever<MismatchedKeys<Real.ExecuteConfig, Shims.ExecuteConfig>>;
type _MessageConfigInputCompat = AssertNever<MismatchedKeys<Real.MessageConfig, Shims.MessageConfig>>;
type _SubmittableInputCompat = AssertNever<MismatchedKeys<Real.Submittable, Shims.Submittable>>;

// outputs (Shim -> Real), with key-level diagnostics in error output
type _FieldDefOutputCompat = AssertNever<MismatchedKeys<Shims.FieldDef, Real.FieldDef>>;
type _QueryResultBaseOutputCompat = AssertNever<MismatchedKeys<Shims.QueryResultBase, Real.QueryResultBase>>;
type _QueryResultRowOutputCompat = AssertNever<MismatchedKeys<Shims.QueryResultRow, Real.QueryResultRow>>;
type _QueryResultOutputCompat = AssertNever<MismatchedKeys<Shims.QueryResult, Real.QueryResult>>;
type _QueryArrayResultOutputCompat = AssertNever<MismatchedKeys<Shims.QueryArrayResult, Real.QueryArrayResult>>;
type _ResultBuilderOutputCompat = AssertNever<MismatchedKeys<Shims.ResultBuilder, Real.ResultBuilder>>;
type _NotificationOutputCompat = AssertNever<MismatchedKeys<Shims.Notification, Real.Notification>>;

// class + method compatibility checks --
// constructors/statics (Real -> Shim): user code that instantiates/classes against
// real types should still type-check against shims
type _ConnectionCtorCompat = Assert<typeof Real.Connection extends typeof Shims.Connection ? true : false>;
type _ClientBaseCtorCompat = Assert<typeof Real.ClientBase extends typeof Shims.ClientBase ? true : false>;
type _ClientCtorCompat = Assert<typeof Real.Client extends typeof Shims.Client ? true : false>;
type _PoolCtorCompat = Assert<typeof Real.Pool extends typeof Shims.Pool ? true : false>;
type _QueryCtorCompat = Assert<typeof Real.Query extends typeof Shims.Query ? true : false>;
type _EventsCtorCompat = Assert<typeof Real.Events extends typeof Shims.Events ? true : false>;
type _ResultCtorCompat = Assert<typeof Real.Result extends typeof Shims.Result ? true : false>;
type _TypeOverridesCtorCompat = Assert<typeof Real.TypeOverrides extends typeof Shims.TypeOverrides ? true : false>;
type _DatabaseErrorCtorCompat = Assert<typeof Real.DatabaseError extends typeof Shims.DatabaseError ? true : false>;

// instance methods/properties: inputs use Real -> Shim and outputs use Shim -> Real
type _ConnectionInputCompat = AssertNever<MismatchedKeys<Real.Connection, Shims.Connection>>;
type _ClientBaseInputCompat = AssertNever<MismatchedKeys<Real.ClientBase, Shims.ClientBase, keyof import('events').EventEmitter>>;
type _ClientInputCompat = AssertNever<MismatchedKeys<Real.Client, Shims.Client, keyof import('events').EventEmitter>>;
type _PoolClientInputCompat = AssertNever<MismatchedKeys<Real.PoolClient, Shims.PoolClient, keyof import('events').EventEmitter>>;
type _PoolInputCompat = AssertNever<MismatchedKeys<Real.Pool, Shims.Pool, keyof import('events').EventEmitter>>;
type _QueryInputCompat = AssertNever<MismatchedKeys<Real.Query, Shims.Query>>;
type _EventsInputCompat = AssertNever<MismatchedKeys<Real.Events, Shims.Events, keyof import('events').EventEmitter>>;
type _ConnectionOutputCompat = AssertNever<MismatchedKeys<Shims.Connection, Real.Connection>>;

type FunctionKeys<T> = {
    [K in keyof T]-?: T[K] extends (...args: any[]) => any ? K : never;
  }[keyof T];

// for class outputs, check data properties only (method variance can be noisy)
type _ClientBaseOutputCompat = AssertNever<MismatchedKeys<Shims.ClientBase, Real.ClientBase, keyof import('events').EventEmitter | FunctionKeys<Shims.ClientBase>>>;
type _ClientOutputCompat = AssertNever<MismatchedKeys<Shims.Client, Real.Client, keyof import('events').EventEmitter | FunctionKeys<Shims.Client>>>;
type _PoolClientOutputCompat = AssertNever<MismatchedKeys<Shims.PoolClient, Real.PoolClient, keyof import('events').EventEmitter | FunctionKeys<Shims.PoolClient>>>;
type _PoolOutputCompat = AssertNever<MismatchedKeys<Shims.Pool, Real.Pool, keyof import('events').EventEmitter | FunctionKeys<Shims.Pool>>>;
type _QueryOutputCompat = AssertNever<MismatchedKeys<Shims.Query, Real.Query, FunctionKeys<Shims.Query>>>;
type _EventsOutputCompat = AssertNever<MismatchedKeys<Shims.Events, Real.Events, keyof import('events').EventEmitter | FunctionKeys<Shims.Events>>>;
type _ResultInputCompat = AssertNever<MismatchedKeys<Real.Result, Shims.Result, FunctionKeys<Real.Result>>>;
type _ResultOutputCompat = AssertNever<MismatchedKeys<Shims.Result, Real.Result, FunctionKeys<Shims.Result>>>;
type _TypeOverridesInputCompat = AssertNever<MismatchedKeys<Real.TypeOverrides, Shims.TypeOverrides, FunctionKeys<Real.TypeOverrides>>>;
type _TypeOverridesOutputCompat = AssertNever<MismatchedKeys<Shims.TypeOverrides, Real.TypeOverrides, FunctionKeys<Shims.TypeOverrides>>>;
type _DatabaseErrorInputCompat = AssertNever<MismatchedKeys<Real.DatabaseError, Shims.DatabaseError, keyof Error>>;
type _DatabaseErrorOutputCompat = AssertNever<MismatchedKeys<Shims.DatabaseError, Real.DatabaseError, keyof Error>>;

// value exports compatibility: Real -> Shim (consumers using real types should work with shims)
type _TypesExportCompat = Assert<typeof Real.types extends typeof Shims.types ? true : false>;
type _DefaultsExportCompat = Assert<typeof Real.defaults extends typeof Shims.defaults ? true : false>;
type _EscapeIdentifierExportCompat = Assert<typeof Real.escapeIdentifier extends typeof Shims.escapeIdentifier ? true : false>;
type _EscapeLiteralExportCompat = Assert<typeof Real.escapeLiteral extends typeof Shims.escapeLiteral ? true : false>;
type _NativeExportCompat = Assert<typeof Real.native extends typeof Shims.native ? true : false>;

// real-world usage contract checks (compile-time only):
// these mimic common app patterns to catch practical type regressions

type AppRow = { id: number; name: string };

declare const _shimPool: Shims.Pool;
declare const _shimClient: Shims.Client;
declare const _shimClientBase: Shims.ClientBase;
declare const _shimPoolClient: Shims.PoolClient;
declare const _shimQueryResult: Shims.QueryResult<AppRow>;
declare const _shimFieldDef: Shims.FieldDef;
declare const _realPool: Real.Pool;

// config compatibility: minimal + commonly used options

const _poolConfigMinimal: Shims.PoolConfig = {
  connectionString: 'postgres://user:pass@localhost:5432/db',
};
const _poolConfigFull: Shims.PoolConfig = {
  connectionString: 'postgres://user:pass@localhost:5432/db',
  ssl: { rejectUnauthorized: true },
  max: 10,
  idleTimeoutMillis: 5_000,
  allowExitOnIdle: true,
};
const _clientConfigHostPort: Shims.ClientConfig = {
  host: 'localhost',
  port: 5432,
  ssl: false,
};
const _clientConfigConnectionString: Shims.ClientConfig = {
  connectionString: 'postgres://user:pass@localhost:5432/db',
};
const _clientConfigCustomTypes: Shims.ClientConfig = {
  types: {
    getTypeParser(id, format) {
      return () => `${id}:${format ?? 'text'}`;
    },
  },
};
const _clientConfigStreamFactory: Shims.ClientConfig = {
  stream: () => undefined,
};

// connect() contract and PoolClient release()

const _shimPoolConnectPromise = _shimPool.connect();
const _realPoolConnectPromise = _realPool.connect();
type _PoolConnectReturnsPoolClient = Assert<
  Awaited<typeof _shimPoolConnectPromise> extends Shims.PoolClient ? true : false
>;
type _RealPoolConnectAcceptedByShim = Assert<
  Awaited<typeof _realPoolConnectPromise> extends Shims.PoolClient ? true : false
>;
type _PoolClientHasRelease = Assert<
  Shims.PoolClient['release'] extends (err?: Error | boolean) => void ? true : false
>;
const _clientBaseFromPoolClient: Shims.ClientBase = _shimPoolClient;

// generic query return typing

const _poolQueryResultPromise = _shimPool.query<AppRow>(
  'select 1 as id, \'neon\' as name',
);
type _PoolQueryRowsPreserveGeneric = Assert<
  Awaited<typeof _poolQueryResultPromise>['rows'][number] extends AppRow
    ? true
    : false
>;
const _clientQueryResultPromise = _shimClient.query<AppRow>(
  'select 1 as id, \'neon\' as name',
);
type _ClientQueryRowsPreserveGeneric = Assert<
  Awaited<typeof _clientQueryResultPromise>['rows'][number] extends AppRow
    ? true
    : false
>;
const _poolArrayQueryResultPromise = _shimPool.query<[number, string]>({
  text: 'select 1, \'neon\'',
  rowMode: 'array',
});
type _PoolArrayQueryRowsPreserveTuple = Assert<
  Awaited<typeof _poolArrayQueryResultPromise>['rows'][number] extends [number, string]
    ? true
    : false
>;

// prepared statement/query config usage

const _queryConfigWithValues: Shims.QueryConfig<[number, string]> = {
  name: 'get-user-by-id',
  text: 'select * from users where id = $1 and org = $2',
  values: [123, 'org_1'],
};
const _queryArrayConfig: Shims.QueryArrayConfig<[number]> = {
  text: 'select $1',
  values: [123],
  rowMode: 'array',
};

// query output shape used by app code

const _rows: AppRow[] = _shimQueryResult.rows;
const _rowCount: number | null = _shimQueryResult.rowCount;
const _command: string = _shimQueryResult.command;
const _fields: Shims.FieldDef[] = _shimQueryResult.fields;
const _fieldName: string = _shimFieldDef.name;
const _fieldDataTypeId: number = _shimFieldDef.dataTypeID;

// event callback usage patterns

_shimClientBase.on('notification', (message) => {
  const _channel: string = message.channel;
  const _processId: number = message.processId;
  const _payload: string | undefined = message.payload;
});
_shimClientBase.on('error', (err) => {
  const _error: Error = err;
});
_shimClientBase.on('end', () => {});
_shimPool.on('connect', (client) => {
  client.release();
});
_shimPool.on('acquire', (client) => {
  client.release();
});
_shimPool.on('remove', (client) => {
  client.release();
});
_shimPool.on('error', (err, client) => {
  const _error: Error = err;
  client.release();
});

// submittable passthrough support in query APIs

const _submittable: Shims.Submittable = {
  submit(_connection: Shims.Connection) {},
};
const _submittableResult = _shimPool.query(_submittable);
type _SubmittableQueryReturnsInput = Assert<
  typeof _submittableResult extends Shims.Submittable ? true : false
>;

// negative checks to ensure invalid usage still fails

// @ts-expect-error QueryArrayConfig rowMode must be "array"
const _badRowMode: Shims.QueryArrayConfig = { text: 'select 1', rowMode: 'object' };
// @ts-expect-error unknown PoolConfig property should not type-check
const _badPoolConfig: Shims.PoolConfig = { max: 1, doesNotExist: true };


// consumer checks for drizzle and Prisma

import { PrismaNeon } from '@prisma/adapter-neon';

// drizzle-style node-postgres contract subset --
// we keep this focused on the pieces Drizzle commonly relies on in practice

interface DrizzleNodePgClientLike {
  query: Shims.ClientBase['query'];
}
interface DrizzleNodePgPoolLike extends DrizzleNodePgClientLike {
  connect: Shims.Pool['connect'];
  end: Shims.Pool['end'];
}

const _drizzleClientLikeFromShimClient: DrizzleNodePgClientLike = _shimClient;
const _drizzleClientLikeFromShimPoolClient: DrizzleNodePgClientLike = _shimPoolClient;
const _drizzlePoolLikeFromShimPool: DrizzleNodePgPoolLike = _shimPool;

// node-postgres compatibility nuance: many consumers rely on the "notice" event

interface PgNoticeEventLike {
  on(event: 'notice', listener: (notice: Shims.NoticeMessage) => void): unknown;
}
const _noticeEventFromShimClient: PgNoticeEventLike = _shimClient;
const _noticeEventFromShimPoolClient: PgNoticeEventLike = _shimPoolClient;

type _ShimClientSupportsDrizzleLikeQuery = Assert<
  Shims.Client['query'] extends DrizzleNodePgClientLike['query'] ? true : false
>;
type _ShimPoolSupportsDrizzleLikeConnect = Assert<
  Shims.Pool['connect'] extends DrizzleNodePgPoolLike['connect'] ? true : false
>;

// Prisma Neon adapter should accept pg-like pool config from shims

const _shimPoolConfigForPrisma: Shims.PoolConfig = {
  connectionString: 'postgres://user:pass@localhost:5432/db',
  ssl: { rejectUnauthorized: true },
  max: 10,
};
const _prismaNeonFromShimConfig = new PrismaNeon(_shimPoolConfigForPrisma);

type _PrismaNeonCtorAcceptsShimPoolConfig = Assert<
  Shims.PoolConfig extends ConstructorParameters<typeof PrismaNeon>[0] ? true : false
>;

void _drizzleClientLikeFromShimClient;
void _drizzleClientLikeFromShimPoolClient;
void _drizzlePoolLikeFromShimPool;
void _prismaNeonFromShimConfig;
