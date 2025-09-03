#!/usr/bin/env node

import { neon, neonConfig } from '@neondatabase/serverless';
import WebSocket from 'ws';

// Custom WebSocket class for debugging
class DebugWebSocket extends WebSocket {
  constructor(url, options) {
    console.log('🔍 Creating WebSocket connection:', {
      url,
      headers: options?.headers,
    });
    super(url, options);

    this.addEventListener('open', () => {
      console.log('🔍 WebSocket opened');
    });

    this.addEventListener('error', (error) => {
      console.log('🔍 WebSocket error:', error);
    });

    this.addEventListener('close', (event) => {
      console.log('🔍 WebSocket closed:', {
        code: event.code,
        reason: event.reason || 'none',
      });
    });

    this.addEventListener('message', (event) => {
      console.log('🔍 WebSocket message:', event.data);
    });
  }
}

async function testNonLocal() {
  console.log('🧪 Test: Non-Neon Local Functionality');

  // Reset Neon Local config
  neonConfig.isNeonLocal = false;
  neonConfig.useSecureWebSocket = true;
  neonConfig.webSocketConstructor = DebugWebSocket;

  // Mock the fetch function to verify HTTP requests
  const originalFetch = globalThis.fetch;
  globalThis.fetch = async (url, options) => {
    console.log('📡 HTTP Request:', {
      url,
      method: options.method,
      headers: options.headers,
    });

    // Return a mock response
    return {
      ok: true,
      json: async () => ({
        fields: [{ name: 'version', dataTypeID: 25 }],
        command: 'SELECT',
        rowCount: 1,
        rows: [['PostgreSQL 17.5']],
      }),
    };
  };

  try {
    // Test 1: Regular WebSocket connection
    console.log('\n📝 Test 1: Regular WebSocket Connection');
    const sql1 = neon(
      'postgresql://user:pass@ep-test-123.us-east-2.aws.neon.tech/dbname',
    );
    const result1 = await sql1`SELECT version() as version`;
    console.log('📥 Result:', result1[0]);

    // Test 2: TLS over WebSocket
    console.log('\n📝 Test 2: TLS over WebSocket');
    neonConfig.forceDisablePgSSL = false;
    const sql2 = neon(
      'postgresql://user:pass@ep-test-123.us-east-2.aws.neon.tech/dbname?sslmode=require',
    );
    const result2 = await sql2`SELECT version() as version`;
    console.log('📥 Result:', result2[0]);

    // Test 3: HTTP queries
    console.log('\n📝 Test 3: HTTP Queries');
    neonConfig.poolQueryViaFetch = true;
    const sql3 = neon(
      'postgresql://user:pass@ep-test-123.us-east-2.aws.neon.tech/dbname',
    );
    const result3 = await sql3`SELECT version() as version`;
    console.log('📥 Result:', result3[0]);
  } catch (err) {
    console.error('❌ Error:', err);
    if (err.message) {
      console.error('Error message:', err.message);
    }
    if (err.stack) {
      console.error('Stack trace:', err.stack);
    }
    process.exit(1);
  } finally {
    // Restore original fetch
    globalThis.fetch = originalFetch;
  }
}

// Run test if this file is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  testNonLocal().catch((error) => {
    console.error('❌ Test failed:', error);
    process.exit(1);
  });
}
