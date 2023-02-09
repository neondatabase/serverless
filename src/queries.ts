export interface Query {
  sql: string;
  test: (rows: any[]) => boolean,
}

export const queries: Query[] = [{
  sql: 'SELECT * FROM employees LIMIT 10',
  test: (rows) => rows.length >= 0,
}];
