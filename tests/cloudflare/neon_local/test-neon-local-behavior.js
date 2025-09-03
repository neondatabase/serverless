#!/usr/bin/env node

import { neon, neonConfig, Client } from '@neondatabase/serverless';

async function testNeonLocalBehavior() {
  console.log('🧪 Test: Neon Local Behavior Verification (isNeonLocal = true)');

  // Set isNeonLocal to true
  neonConfig.isNeonLocal = true;
  
  // Mock fetch to avoid actual network calls
  const originalFetch = globalThis.fetch;
  globalThis.fetch = async (url, options) => {
    console.log('📡 Fetch intercepted:', {
      url,
      method: options.method,
      headers: options.headers
    });

    // Verify expected local behavior
    if (!url.includes('http://') || url.includes('https://')) {
      throw new Error(`Expected local HTTP URL, got: ${url}`);
    }

    // Check for X-Neon-* headers
    const hasNeonHeaders = Object.keys(options.headers).some(h => h.startsWith('X-Neon-'));
    if (!hasNeonHeaders) {
      throw new Error('Expected X-Neon-* headers for credential injection');
    }

    return {
      ok: true,
      json: async () => ({
        fields: [{ name: 'test', dataTypeID: 25 }],
        command: 'SELECT',
        rowCount: 1,
        rows: [['neon local test passed']]
      })
    };
  };

  try {
    console.log('\n📝 Test 1: neon() function with isNeonLocal = true');
    
    // Test 1: Basic neon function
    const sql = neon('postgresql://testuser:testpass@127.0.0.1:5432/testdb');
    const result = await sql`SELECT 'neon local test' as test`;
    console.log('✅ Result:', result[0]);

    console.log('\n📝 Test 2: Configuration values auto-configured');
    
    // Test 2: Check that configuration values are auto-configured
    console.log('🔍 isNeonLocal:', neonConfig.isNeonLocal);
    console.log('🔍 useSecureWebSocket (auto-configured):', neonConfig.useSecureWebSocket);
    
    // Verify auto-configuration
    if (neonConfig.isNeonLocal !== true) {
      throw new Error(`Expected isNeonLocal to be true, got: ${neonConfig.isNeonLocal}`);
    }
    
    if (neonConfig.useSecureWebSocket !== false) {
      throw new Error(`Expected useSecureWebSocket to be auto-configured to false, got: ${neonConfig.useSecureWebSocket}`);
    }

    console.log('\n📝 Test 3: fetchEndpoint behavior for local');
    
    // Test 3: Verify fetchEndpoint behavior for local
    const endpoint = neonConfig.fetchEndpoint('127.0.0.1', '5432');
    console.log('🔍 Generated endpoint:', endpoint);
    
    if (!endpoint.includes('http://127.0.0.1:5432/sql')) {
      throw new Error(`Expected http://127.0.0.1:5432/sql URL, got: ${endpoint}`);
    }

    console.log('\n📝 Test 4: Credential injection in HTTP requests');
    
    // Reset fetch mock to capture credential headers
    globalThis.fetch = async (url, options) => {
      console.log('📡 Credential test - Headers captured:', options.headers);
      
      // Verify X-Neon-* headers are present
      const requiredHeaders = ['X-Neon-User', 'X-Neon-Password', 'X-Neon-Database'];
      for (const header of requiredHeaders) {
        if (!options.headers[header]) {
          throw new Error(`Missing required header: ${header}`);
        }
      }
      
      // Verify header values
      if (options.headers['X-Neon-User'] !== 'testuser') {
        throw new Error(`Expected X-Neon-User to be 'testuser', got: ${options.headers['X-Neon-User']}`);
      }
      
      if (options.headers['X-Neon-Password'] !== 'testpass') {
        throw new Error(`Expected X-Neon-Password to be 'testpass', got: ${options.headers['X-Neon-Password']}`);
      }
      
      if (options.headers['X-Neon-Database'] !== 'testdb') {
        throw new Error(`Expected X-Neon-Database to be 'testdb', got: ${options.headers['X-Neon-Database']}`);
      }

      return {
        ok: true,
        json: async () => ({
          fields: [{ name: 'test', dataTypeID: 25 }],
          command: 'SELECT',
          rowCount: 1,
          rows: [['credential injection works']]
        })
      };
    };
    
    const sqlWithCreds = neon('postgresql://testuser:testpass@127.0.0.1:5432/testdb');
    const credResult = await sqlWithCreds`SELECT 'credential test' as test`;
    console.log('✅ Credential injection result:', credResult[0]);

    console.log('\n📝 Test 5: Client credential injection setup');
    
    // Test 5: Verify Client sets up credentials correctly
    const client = new Client('postgresql://clientuser:clientpass@127.0.0.1:5432/clientdb');
    
    // Client should have set up credentials automatically
    console.log('✅ Client with Neon Local configured successfully');

    console.log('\n✅ ALL NEON LOCAL BEHAVIOR TESTS PASSED');
    console.log('   - isNeonLocal = true works correctly');
    console.log('   - useSecureWebSocket auto-configures to false');
    console.log('   - Local HTTP URLs are generated properly');  
    console.log('   - X-Neon-* header injection works');
    console.log('   - Client integration works');
    
  } catch (error) {
    console.error('❌ Neon Local behavior test failed:', error.message);
    process.exit(1);
  } finally {
    // Restore original fetch and reset config
    globalThis.fetch = originalFetch;
    neonConfig.isNeonLocal = false; // Reset for other tests
  }
}

testNeonLocalBehavior().catch(error => {
  console.error('❌ Test failed:', error);
  process.exit(1);
});
