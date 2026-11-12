/**
 * @see https://github.com/neondatabase/serverless/issues/223
 */
import { describe, expect, test } from 'vitest';
import { connectionStringFromPoolOptions } from '../../src/pool-connection-string';

describe('connectionStringFromPoolOptions', () => {
  test('forwards statement_timeout and application_name from Pool options', () => {
    const s = connectionStringFromPoolOptions({
      connectionString: 'postgresql://u:p@host.example/db',
      statement_timeout: 300_000,
      application_name: 'my-app',
    });
    const url = new URL(s.replace(/^postgresql:/, 'http:'));
    expect(url.username).toBe('u');
    expect(url.password).toBe('p');
    expect(url.hostname).toBe('host.example');
    expect(url.pathname).toBe('/db');
    expect(url.searchParams.get('statement_timeout')).toBe('300000');
    expect(url.searchParams.get('application_name')).toBe('my-app');
  });

  test('preserves options and timeouts parsed from the connection string', () => {
    const s = connectionStringFromPoolOptions({
      connectionString:
        'postgresql://u:p@host.example/db?options=-c%20search_path%3Dmyschema&idle_in_transaction_session_timeout=10000&lock_timeout=5000',
    });
    const url = new URL(s.replace(/^postgresql:/, 'http:'));
    expect(url.searchParams.get('options')).toBe('-c search_path=myschema');
    expect(url.searchParams.get('idle_in_transaction_session_timeout')).toBe(
      '10000',
    );
    expect(url.searchParams.get('lock_timeout')).toBe('5000');
  });

  test('omits false/empty startup options', () => {
    const s = connectionStringFromPoolOptions({
      user: 'u',
      password: 'p',
      host: 'host.example',
      database: 'db',
      statement_timeout: false,
      lock_timeout: false,
    });
    expect(s).toBe('postgresql://u:p@host.example/db');
  });
});
