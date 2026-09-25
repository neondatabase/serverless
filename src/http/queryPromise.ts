import type { HTTPQueryOptions, ParameterizedQuery } from './types';
import type { SqlTemplate } from './sqlTemplate';

export interface NeonQueryPromise<
  ArrayMode extends boolean,
  FullResults extends boolean,
  T = any,
> extends Promise<T> {}

export class NeonQueryPromise<
  ArrayMode extends boolean,
  FullResults extends boolean,
  T = any,
> {
  constructor(
    public execute: (
      queryData:
        SqlTemplate | ParameterizedQuery | (SqlTemplate | ParameterizedQuery)[],
      opts?:
        | HTTPQueryOptions<ArrayMode, FullResults>
        | HTTPQueryOptions<ArrayMode, FullResults>[],
    ) => Promise<T>,
    public queryData: SqlTemplate | ParameterizedQuery,
    public opts?: HTTPQueryOptions<ArrayMode, FullResults>,
  ) {}

  then<TResult1 = T, TResult2 = never>(
    resolve?:
      ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
    reject?:
      ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
  ): Promise<TResult1 | TResult2> {
    return this.execute(this.queryData, this.opts).then(resolve, reject);
  }
  catch<TResult = never>(
    reject?:
      ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
  ): Promise<T | TResult> {
    return this.execute(this.queryData, this.opts).catch(reject);
  }
  finally(finallyFn?: (() => void) | undefined | null): Promise<T> {
    return this.execute(this.queryData, this.opts).finally(finallyFn);
  }
}
