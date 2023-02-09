export interface Query {
  sql: string;
  test: (rows: any[]) => boolean,
}

export const queries: Query[] = [{
  sql: 'SELECT * FROM employees LIMIT 10',
  test: (rows) => rows.length > 1 && typeof rows[0].first_name === 'string',
},
{
  sql: 'SELECT now()',
  test: (rows) => /^2\d\d\d-\d\d-\d\dT\d\d:\d\d:\d\d.\d+Z$/.test(rows[0].now.toISOString()),
}];
