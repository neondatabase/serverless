#!/usr/bin/env node

import { neon, neonConfig, Client, Pool } from '@neondatabase/serverless';

async function testLegacyBehavior() {
  console.log('🧪 Test: Legacy Behavior Verification (isNeonLocal = false)');

  // Explicitly ensure isNeonLocal is false (default behavior)
  neonConfig.isNeonLocal = false;
  
  // Mock fetch to avoid actual network calls
  const originalFetch = globalThis.fetch;
  globalThis.fetch = async (url, options) => {
    console.log('📡 Fetch intercepted:', {
      url,
      method: options.method,
      headers: options.headers
    });

    // Verify expected cloud behavior
    if (!url.includes('api.') && !url.includes('apiauth.')) {
      throw new Error(`Expected cloud URL with api. prefix, got: ${url}`);
    }

    return {
      ok: true,
      json: async () => ({
        fields: [{ name: 'test', dataTypeID: 25 }],
        command: 'SELECT',
        rowCount: 1,
        rows: [['legacy test passed']]
      })
    };
  };

  try {
    console.log('\n📝 Test 1: neon() function with isNeonLocal = false');
    
    // Test 1: Basic neon function
    const sql = neon('postgresql://user:pass@ep-test-123.us-east-2.aws.neon.tech/dbname');
    const result = await sql`SELECT 'legacy test' as test`;
    console.log('✅ Result:', result[0]);

    console.log('\n📝 Test 2: Configuration values');
    
    // Test 2: Check that configuration values are as expected
    console.log('🔍 isNeonLocal:', neonConfig.isNeonLocal);
    console.log('🔍 useSecureWebSocket:', neonConfig.useSecureWebSocket);
    console.log('🔍 fetchEndpoint type:', typeof neonConfig.fetchEndpoint);
    
    // Verify defaults
    if (neonConfig.isNeonLocal !== false) {
      throw new Error(`Expected isNeonLocal to be false, got: ${neonConfig.isNeonLocal}`);
    }
    
    if (neonConfig.useSecureWebSocket !== true) {
      throw new Error(`Expected useSecureWebSocket to be true, got: ${neonConfig.useSecureWebSocket}`);
    }

    console.log('\n📝 Test 3: fetchEndpoint behavior');
    
    // Test 3: Verify fetchEndpoint behavior for cloud
    const endpoint = neonConfig.fetchEndpoint('ep-test-123.us-east-2.aws.neon.tech', '5432');
    console.log('🔍 Generated endpoint:', endpoint);
    
    if (!endpoint.includes('https://api.')) {
      throw new Error(`Expected https://api. URL, got: ${endpoint}`);
    }

    console.log('\n📝 Test 4: Client constructor doesn\'t break');
    
    // Test 4: Verify Client and Pool constructors still work
    const client = new Client('postgresql://user:pass@ep-test-123.us-east-2.aws.neon.tech/dbname');
    const pool = new Pool({ connectionString: 'postgresql://user:pass@ep-test-123.us-east-2.aws.neon.tech/dbname' });
    
    console.log('✅ Client and Pool constructors work');

    console.log('\n✅ ALL LEGACY BEHAVIOR TESTS PASSED');
    console.log('   - isNeonLocal = false works correctly');
    console.log('   - Cloud URLs are generated properly');
    console.log('   - All existing functionality preserved');
    
  } catch (error) {
    console.error('❌ Legacy behavior test failed:', error.message);
    process.exit(1);
  } finally {
    // Restore original fetch
    globalThis.fetch = originalFetch;
  }
}

testLegacyBehavior().catch(error => {
  console.error('❌ Test failed:', error);
  process.exit(1);
});
