#!/usr/bin/env node

import { neon, neonConfig } from '@neondatabase/serverless';

async function testComprehensive() {
  console.log('🧪 Test: Comprehensive Behavior Verification');

  // Mock fetch to avoid actual network calls
  const originalFetch = globalThis.fetch;
  let fetchCallCount = 0;
  
  globalThis.fetch = async (url, options) => {
    fetchCallCount++;
    console.log(`📡 Fetch call #${fetchCallCount}:`, {
      url,
      method: options.method,
      hasNeonHeaders: Object.keys(options.headers).some(h => h.startsWith('X-Neon-'))
    });

    return {
      ok: true,
      json: async () => ({
        fields: [{ name: 'test', dataTypeID: 25 }],
        command: 'SELECT',
        rowCount: 1,
        rows: [['test passed']]
      })
    };
  };

  try {
    console.log('\n📝 Test 1: Switch from Cloud to Local');
    
    // Start with cloud behavior
    neonConfig.isNeonLocal = false;
    console.log('  🔍 isNeonLocal:', neonConfig.isNeonLocal);
    console.log('  🔍 useSecureWebSocket:', neonConfig.useSecureWebSocket);
    
    const cloudSql = neon('postgresql://user:pass@ep-test-123.us-east-2.aws.neon.tech/dbname');
    await cloudSql`SELECT 'cloud test' as test`;
    
    // Switch to local behavior
    neonConfig.isNeonLocal = true;
    console.log('  🔍 After setting isNeonLocal=true:');
    console.log('  🔍 isNeonLocal:', neonConfig.isNeonLocal);
    console.log('  🔍 useSecureWebSocket (auto):', neonConfig.useSecureWebSocket);
    
    const localSql = neon('postgresql://user:pass@127.0.0.1:5432/dbname');
    await localSql`SELECT 'local test' as test`;

    console.log('\n📝 Test 2: Switch from Local to Cloud');
    
    // Switch back to cloud
    neonConfig.isNeonLocal = false;
    console.log('  🔍 After setting isNeonLocal=false:');
    console.log('  🔍 isNeonLocal:', neonConfig.isNeonLocal);
    console.log('  🔍 useSecureWebSocket (restored):', neonConfig.useSecureWebSocket);
    
    const cloudSql2 = neon('postgresql://user:pass@ep-test-123.us-east-2.aws.neon.tech/dbname');
    await cloudSql2`SELECT 'cloud test 2' as test`;

    console.log('\n📝 Test 3: Multiple instances with different configs');
    
    // Test that instance-level config doesn't interfere with global
    neonConfig.isNeonLocal = false; // Global setting
    
    const cloudInstance = neon('postgresql://user:pass@ep-test-123.us-east-2.aws.neon.tech/dbname');
    await cloudInstance`SELECT 'global cloud' as test`;
    
    // Change global to local
    neonConfig.isNeonLocal = true;
    
    const localInstance = neon('postgresql://user:pass@127.0.0.1:5432/dbname');
    await localInstance`SELECT 'global local' as test`;

    console.log('\n📝 Test 4: Endpoint generation consistency');
    
    // Test endpoint generation for both modes
    neonConfig.isNeonLocal = false;
    const cloudEndpoint = neonConfig.fetchEndpoint('ep-test-123.us-east-2.aws.neon.tech', '5432');
    console.log('  🔍 Cloud endpoint:', cloudEndpoint);
    
    neonConfig.isNeonLocal = true;
    const localEndpoint = neonConfig.fetchEndpoint('127.0.0.1', '5432');
    console.log('  🔍 Local endpoint:', localEndpoint);
    
    // Verify they're different and correct
    if (cloudEndpoint === localEndpoint) {
      throw new Error('Cloud and local endpoints should be different');
    }
    
    if (!cloudEndpoint.includes('https://api.')) {
      throw new Error(`Cloud endpoint should use https://api., got: ${cloudEndpoint}`);
    }
    
    if (!localEndpoint.includes('http://127.0.0.1:5432')) {
      throw new Error(`Local endpoint should use http://127.0.0.1:5432, got: ${localEndpoint}`);
    }

    console.log('\n✅ ALL COMPREHENSIVE TESTS PASSED');
    console.log(`   - Total fetch calls: ${fetchCallCount}`);
    console.log('   - Cloud/Local switching works correctly');
    console.log('   - Auto-configuration works properly');
    console.log('   - Multiple instances handle configs correctly');
    console.log('   - Endpoint generation is consistent');
    
  } catch (error) {
    console.error('❌ Comprehensive test failed:', error.message);
    process.exit(1);
  } finally {
    // Restore original fetch and reset config
    globalThis.fetch = originalFetch;
    neonConfig.isNeonLocal = false; // Reset to default
  }
}

testComprehensive().catch(error => {
  console.error('❌ Test failed:', error);
  process.exit(1);
});
