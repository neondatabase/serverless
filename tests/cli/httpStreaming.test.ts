import { encode } from 'cbor-x';
import { afterEach, beforeEach, expect, test, vi } from 'vitest';
import { neon, neonConfig } from '@neondatabase/serverless';

const connectionString = 'postgres://user@example.com/database';

const fields = [
  {
    name: 'answer',
    dataTypeID: 23,
    tableID: 0,
    columnID: 0,
    dataTypeSize: 4,
    dataTypeModifier: -1,
    format: 'text',
  },
];

const labelFields = [
  {
    name: 'label',
    dataTypeID: 25,
    tableID: 0,
    columnID: 0,
    dataTypeSize: -1,
    dataTypeModifier: -1,
    format: 'text',
  },
];

const successMessages = [
  { type: 'columns', columns: fields },
  { type: 'row', row: ['42'] },
  { type: 'query', query: { command: 'SELECT', rowCount: 1 } },
  { type: 'end', status: 'ok' },
];

const batchMessages = [
  { type: 'columns', columns: fields },
  { type: 'row', row: ['42'] },
  { type: 'row', row: ['43'] },
  { type: 'query', query: { command: 'SELECT', rowCount: 2 } },
  { type: 'columns', columns: labelFields },
  { type: 'row', row: ['hello'] },
  { type: 'row', row: ['world'] },
  { type: 'query', query: { command: 'SELECT', rowCount: 2 } },
  { type: 'end', status: 'ok' },
];

let previousFetchEndpoint: typeof neonConfig.fetchEndpoint;
let previousFetchFunction: typeof neonConfig.fetchFunction;

beforeEach(() => {
  previousFetchEndpoint = neonConfig.fetchEndpoint;
  previousFetchFunction = neonConfig.fetchFunction;
  neonConfig.fetchEndpoint = 'https://example.com/sql';
});

afterEach(() => {
  neonConfig.fetchEndpoint = previousFetchEndpoint;
  neonConfig.fetchFunction = previousFetchFunction;
});

function cborSequence(messages: unknown[]) {
  const encoded = messages.map((message) => encode(message));
  const result = new Uint8Array(
    encoded.reduce((length, message) => length + message.byteLength, 0),
  );
  let offset = 0;
  for (const message of encoded) {
    result.set(message, offset);
    offset += message.byteLength;
  }
  return result;
}

function mockResponse(body: BodyInit, expectedAccept: string) {
  const fetchFunction = vi.fn(async (_url, init) => {
    expect(init?.headers).toMatchObject({ Accept: expectedAccept });
    return new Response(body, { status: 200 });
  });
  neonConfig.fetchFunction = fetchFunction as any;
  return fetchFunction;
}

test('uses the legacy JSON protocol by default', async () => {
  const fetchFunction = mockResponse(
    JSON.stringify({
      fields,
      rows: [['42']],
      command: 'SELECT',
      rowCount: 1,
    }),
    'application/json',
  );

  const sql = neon(connectionString);
  await expect(sql`SELECT 42 AS answer`).resolves.toStrictEqual([
    { answer: 42 },
  ]);
  expect(fetchFunction).toHaveBeenCalledOnce();
});

test.each([
  {
    responseFormat: 'jsonl' as const,
    accept: 'application/vnd.neon.sql.v1+json',
    body: successMessages.map((message) => JSON.stringify(message)).join('\n'),
  },
  {
    responseFormat: 'cbor-seq' as const,
    accept: 'application/vnd.neon.sql.v1+cbor',
    body: cborSequence(successMessages),
  },
])(
  'decodes $responseFormat responses',
  async ({ responseFormat, accept, body }) => {
    mockResponse(body, accept);

    const sql = neon(connectionString, { responseFormat, fullResults: true });
    await expect(sql`SELECT 42 AS answer`).resolves.toMatchObject({
      fields,
      rows: [{ answer: 42 }],
      command: 'SELECT',
      rowCount: 1,
    });
  },
);

test('allows a streaming format per query', async () => {
  mockResponse(
    successMessages.map((message) => JSON.stringify(message)).join('\n'),
    'application/vnd.neon.sql.v1+json',
  );

  const sql = neon(connectionString);
  await expect(
    sql.query('SELECT 42 AS answer', [], { responseFormat: 'jsonl' }),
  ).resolves.toStrictEqual([{ answer: 42 }]);
});

test('returns terminal streamed errors as database errors', async () => {
  mockResponse(
    cborSequence([
      {
        type: 'end',
        status: 'error',
        error: { message: 'division by zero', code: '22012' },
      },
    ]),
    'application/vnd.neon.sql.v1+cbor',
  );

  const sql = neon(connectionString, { responseFormat: 'cbor-seq' });
  const error = await sql`SELECT 1 / 0`.catch((error) => error);
  expect(error).toBeInstanceOf(Error);
  expect(error).toMatchObject({ message: 'division by zero', code: '22012' });
});

test.each([
  {
    responseFormat: 'jsonl' as const,
    accept: 'application/vnd.neon.sql.v1+json',
    body: JSON.stringify(successMessages[0]),
  },
  {
    responseFormat: 'cbor-seq' as const,
    accept: 'application/vnd.neon.sql.v1+cbor',
    body: cborSequence([successMessages[0]]),
  },
])(
  'rejects $responseFormat responses without a terminal message',
  async ({ responseFormat, accept, body }) => {
    mockResponse(body, accept);

    const sql = neon(connectionString, { responseFormat });
    await expect(sql`SELECT 42 AS answer`).rejects.toThrow(
      'streamed response ended without a terminal message',
    );
  },
);

test.each([
  {
    responseFormat: 'jsonl' as const,
    accept: 'application/vnd.neon.sql.v1+json',
    body: successMessages
      .map((message) => JSON.stringify(message))
      .join('\n')
      .slice(0, -1),
  },
  {
    responseFormat: 'cbor-seq' as const,
    accept: 'application/vnd.neon.sql.v1+cbor',
    body: cborSequence(successMessages).slice(0, -1),
  },
])(
  'rejects torn $responseFormat messages',
  async ({ responseFormat, accept, body }) => {
    mockResponse(body, accept);

    const sql = neon(connectionString, { responseFormat });
    await expect(sql`SELECT 42 AS answer`).rejects.toThrow();
  },
);

test.each([
  {
    responseFormat: 'jsonl' as const,
    accept: 'application/vnd.neon.sql.v1+json',
    body: batchMessages.map((message) => JSON.stringify(message)).join('\n'),
  },
  {
    responseFormat: 'cbor-seq' as const,
    accept: 'application/vnd.neon.sql.v1+cbor',
    body: cborSequence(batchMessages),
  },
])(
  'decodes $responseFormat transactions',
  async ({ responseFormat, accept, body }) => {
    mockResponse(body, accept);

    const sql = neon(connectionString, { responseFormat });
    await expect(
      sql.transaction([sql`SELECT 42 AS answer`, sql`SELECT 'hello' AS label`]),
    ).resolves.toStrictEqual([
      [{ answer: 42 }, { answer: 43 }],
      [{ label: 'hello' }, { label: 'world' }],
    ]);
  },
);
