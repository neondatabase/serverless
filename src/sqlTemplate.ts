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
          param.compile(query); // from sql.unsafe()
        } else if (param && param[Symbol.toStringTag] === 'NeonQueryPromise') {
          if (param.query instanceof SqlTemplate) param.query.compile(query);
          else throw new Error('Only sql`...` template queries are composable');
        } else {
          const { params } = query;
          params.push(param);
          query.query += '$' + params.length;
        }
      }
    }
    return query;
  }
}
