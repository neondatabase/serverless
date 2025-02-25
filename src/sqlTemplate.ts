// @ts-ignore -- this isn't officially exported by pg
import { prepareValue } from 'pg/lib/utils';
import { encodeBuffersAsBytea } from './httpQuery';

export class SqlTemplate {
  constructor(
    public strings: ReadonlyArray<string>,
    public values: any[],
  ) {}

  compile(query = { query: '', params: [] as any[] }) {
    const { strings, values } = this;
    for (let i = 0, len = strings.length; i < len; i++) {
      query.query += strings[i];
      if (i < values.length) {
        const param = values[i];
        if (param instanceof SqlTemplate) {
          param.compile(query);
        } else {
          const { params } = query;
          const preparedParam = encodeBuffersAsBytea(prepareValue(param));
          params.push(preparedParam);
          query.query += '$' + params.length;
        }
      }
    }
    return query;
  }
}
