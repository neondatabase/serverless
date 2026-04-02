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
type AssertKeys<_T extends true> = void;

type AssertNever<_T extends never> = void;
type MismatchedKeys<FromT, ToT> = {
  [K in keyof FromT]-?: K extends keyof ToT
    ? FromT[K] extends ToT[K]
      ? never
      : K
    : K;
}[keyof FromT];

// every key on Real.X must exist on Shims.X
type _ClientConfig = AssertKeys<keyof Real.ClientConfig extends keyof Shims.ClientConfig ? true : false>;
type _ConnectionConfig = AssertKeys<keyof Real.ConnectionConfig extends keyof Shims.ConnectionConfig ? true : false>;
type _Defaults = AssertKeys<keyof Real.Defaults extends keyof Shims.Defaults ? true : false>;
type _PoolConfig = AssertKeys<keyof Real.PoolConfig extends keyof Shims.PoolConfig ? true : false>;
type _QueryConfig = AssertKeys<keyof Real.QueryConfig extends keyof Shims.QueryConfig ? true : false>;
type _QueryArrayConfig = AssertKeys<keyof Real.QueryArrayConfig extends keyof Shims.QueryArrayConfig ? true : false>;
type _CustomTypesConfig = AssertKeys<keyof Real.CustomTypesConfig extends keyof Shims.CustomTypesConfig ? true : false>;
type _FieldDef = AssertKeys<keyof Real.FieldDef extends keyof Shims.FieldDef ? true : false>;
type _QueryResultBase = AssertKeys<keyof Real.QueryResultBase extends keyof Shims.QueryResultBase ? true : false>;
type _QueryResultRow = AssertKeys<keyof Real.QueryResultRow extends keyof Shims.QueryResultRow ? true : false>;
type _QueryResult = AssertKeys<keyof Real.QueryResult extends keyof Shims.QueryResult ? true : false>;
type _QueryArrayResult = AssertKeys<keyof Real.QueryArrayResult extends keyof Shims.QueryArrayResult ? true : false>;
type _ResultBuilder = AssertKeys<keyof Real.ResultBuilder extends keyof Shims.ResultBuilder ? true : false>;
type _QueryParse = AssertKeys<keyof Real.QueryParse extends keyof Shims.QueryParse ? true : false>;
type _BindConfig = AssertKeys<keyof Real.BindConfig extends keyof Shims.BindConfig ? true : false>;
type _ExecuteConfig = AssertKeys<keyof Real.ExecuteConfig extends keyof Shims.ExecuteConfig ? true : false>;
type _MessageConfig = AssertKeys<keyof Real.MessageConfig extends keyof Shims.MessageConfig ? true : false>;
type _Notification = AssertKeys<keyof Real.Notification extends keyof Shims.Notification ? true : false>;
type _Submittable = AssertKeys<keyof Real.Submittable extends keyof Shims.Submittable ? true : false>;

// And vice versa: our shim shouldn't have keys the real type doesn't
type _ClientConfig2 = AssertKeys<keyof Shims.ClientConfig extends keyof Real.ClientConfig ? true : false>;
type _ConnectionConfig2 = AssertKeys<keyof Shims.ConnectionConfig extends keyof Real.ConnectionConfig ? true : false>;
type _Defaults2 = AssertKeys<keyof Shims.Defaults extends keyof Real.Defaults ? true : false>;
type _PoolConfig2 = AssertKeys<keyof Shims.PoolConfig extends keyof Real.PoolConfig ? true : false>;
type _QueryConfig2 = AssertKeys<keyof Shims.QueryConfig extends keyof Real.QueryConfig ? true : false>;
type _QueryArrayConfig2 = AssertKeys<keyof Shims.QueryArrayConfig extends keyof Real.QueryArrayConfig ? true : false>;
type _CustomTypesConfig2 = AssertKeys<keyof Shims.CustomTypesConfig extends keyof Real.CustomTypesConfig ? true : false>;
type _FieldDef2 = AssertKeys<keyof Shims.FieldDef extends keyof Real.FieldDef ? true : false>;
type _QueryResultBase2 = AssertKeys<keyof Shims.QueryResultBase extends keyof Real.QueryResultBase ? true : false>;
type _QueryResultRow2 = AssertKeys<keyof Shims.QueryResultRow extends keyof Real.QueryResultRow ? true : false>;
type _QueryResult2 = AssertKeys<keyof Shims.QueryResult extends keyof Real.QueryResult ? true : false>;
type _QueryArrayResult2 = AssertKeys<keyof Shims.QueryArrayResult extends keyof Real.QueryArrayResult ? true : false>;
type _ResultBuilder2 = AssertKeys<keyof Shims.ResultBuilder extends keyof Real.ResultBuilder ? true : false>;
type _QueryParse2 = AssertKeys<keyof Shims.QueryParse extends keyof Real.QueryParse ? true : false>;
type _BindConfig2 = AssertKeys<keyof Shims.BindConfig extends keyof Real.BindConfig ? true : false>;
type _ExecuteConfig2 = AssertKeys<keyof Shims.ExecuteConfig extends keyof Real.ExecuteConfig ? true : false>;
type _MessageConfig2 = AssertKeys<keyof Shims.MessageConfig extends keyof Real.MessageConfig ? true : false>;
type _Notification2 = AssertKeys<keyof Shims.Notification extends keyof Real.Notification ? true : false>;
type _Submittable2 = AssertKeys<keyof Shims.Submittable extends keyof Real.Submittable ? true : false>;

// Usage compatibility checks:
// - Inputs accepted by the library: Real -> Shim
// - Outputs exposed by the library: Shim -> Real

// Inputs (Real -> Shim), with key-level diagnostics in error output.
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

// Outputs (Shim -> Real), with key-level diagnostics in error output.
type _FieldDefOutputCompat = AssertNever<MismatchedKeys<Shims.FieldDef, Real.FieldDef>>;
type _QueryResultBaseOutputCompat = AssertNever<MismatchedKeys<Shims.QueryResultBase, Real.QueryResultBase>>;
type _QueryResultRowOutputCompat = AssertNever<MismatchedKeys<Shims.QueryResultRow, Real.QueryResultRow>>;
type _QueryResultOutputCompat = AssertNever<MismatchedKeys<Shims.QueryResult, Real.QueryResult>>;
type _QueryArrayResultOutputCompat = AssertNever<MismatchedKeys<Shims.QueryArrayResult, Real.QueryArrayResult>>;
type _ResultBuilderOutputCompat = AssertNever<MismatchedKeys<Shims.ResultBuilder, Real.ResultBuilder>>;
type _NotificationOutputCompat = AssertNever<MismatchedKeys<Shims.Notification, Real.Notification>>;
