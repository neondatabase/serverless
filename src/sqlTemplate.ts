import { NeonQueryPromise } from './httpQuery';

export class SqlTemplate {
  constructor(
    public strings: ReadonlyArray<string>,
    public values: any[],
  ) {}

  toParameterizedQuery(result = { query: '', params: [] as any[] }) {
    const { strings, values } = this;

    for (let i = 0, len = strings.length; i < len; i++) {
      result.query += strings[i];
      if (i < values.length) {
        const value = values[i];

        if (value instanceof UnsafeRawSql) {
          result.query += value.sql;
        } else if (value instanceof NeonQueryPromise) {
          if (value.queryData instanceof SqlTemplate)
            value.queryData.toParameterizedQuery(result); // recursively
          else if (value.queryData.params?.length)
            throw new Error('This query is not composable');
          else result.query += value.queryData.query;
        } else {
          const { params } = result;
          params.push(value);
          result.query += '$' + params.length;
          // via http/JSON, Postgres can't tell that a hex-escape string like
          // '\x00ff' represents binary data without a little help, so ...
          const isBinary = value instanceof Buffer || ArrayBuffer.isView(value);
          if (isBinary) result.query += '::bytea';
        }
      }
    }
    return result;
  }
}

export class UnsafeRawSql {
  constructor(public sql: string) {}
}
