#!/usr/bin/env node

// Test: Cloudflare Worker HTTP Pattern with Neon Local
import { neon, neonConfig } from '@neondatabase/serverless';

async function testCloudflareHttpPattern() {
  console.log('🧪 Test: Cloudflare Worker HTTP Pattern with Neon Local');

  try {
    // Configure for Neon Local (what you would do in a Cloudflare Worker)
    neonConfig.isNeonLocal = true;

    console.log('  📋 Configuration (as in Cloudflare Worker):');
    console.log('    isNeonLocal:', neonConfig.isNeonLocal);
    console.log('    useSecureWebSocket:', neonConfig.useSecureWebSocket);
    console.log(
      '    Generated endpoint:',
      neonConfig.fetchEndpoint('localhost', '5432'),
    );

    // Test 1: Basic query (most common Cloudflare Worker pattern)
    console.log('\n  📡 Test 1: Basic SQL query via HTTP');
    const sql = neon('postgresql://neon:npg@localhost:5432/neondb');

    const result1 = await sql`
      SELECT 
        'Cloudflare Worker' as platform,
        'Neon Local Proxy' as proxy_type,
        'HTTP Transport' as transport,
        NOW() as timestamp
    `;

    console.log('  ✅ Basic Query:', result1[0]);

    // Test 2: Query with parameters (common pattern)
    console.log('\n  📡 Test 2: Parameterized query');
    const userId = 42;
    const userName = 'CloudflareUser';

    const result2 = await sql`
      SELECT 
        ${userId} as user_id,
        ${userName} as user_name,
        'Parameter injection works' as message,
        NOW() as created_at
    `;

    console.log('  ✅ Parameterized Query:', result2[0]);

    // Test 3: Multiple queries (transaction-like pattern)
    console.log('\n  📡 Test 3: Multiple queries');
    const results = await Promise.all([
      sql`SELECT 'Query 1' as query_name, 1 as query_id`,
      sql`SELECT 'Query 2' as query_name, 2 as query_id`,
      sql`SELECT 'Query 3' as query_name, 3 as query_id`,
    ]);

    console.log('  ✅ Multiple Queries:');
    results.forEach((result, index) => {
      console.log(`    Query ${index + 1}:`, result[0]);
    });

    // Test 4: Error handling (important for production)
    console.log('\n  📡 Test 4: Error handling');
    try {
      await sql`SELECT * FROM nonexistent_table`;
    } catch (error) {
      console.log('  ✅ Error handling works:', error.message.split('\n')[0]);
    }

    console.log('\n✅ PASS - Cloudflare Worker HTTP Pattern Test');
    console.log('  🎉 All HTTP patterns work correctly:');
    console.log('    - Basic queries');
    console.log('    - Parameterized queries');
    console.log('    - Concurrent queries');
    console.log('    - Error handling');
    console.log('  📊 Neon Local proxy successfully routes HTTP requests');

    return true;
  } catch (error) {
    console.log('❌ FAIL - Cloudflare Worker HTTP Pattern Test');
    console.log('  Error:', error.message);

    console.log('\n  💡 This test requires:');
    console.log('    - Neon Local container running (docker-compose up)');
    console.log('    - Valid NEON_API_KEY and NEON_PROJECT_ID configured');
    return false;
  }
}

async function printCloudflareWorkerExample() {
  console.log('\n🚀 Production Cloudflare Worker Example:');
  console.log(`
// wrangler.toml (for local development)
name = "my-app"
main = "src/index.js"

# For local development with Neon Local
[env.development]
compatibility_date = "2023-10-30"

// src/index.js - Your Cloudflare Worker
import { neon, neonConfig } from '@neondatabase/serverless';

export default {
  async fetch(request, env, ctx) {
    // Only enable for local development
    if (env.ENVIRONMENT === 'development') {
      neonConfig.isNeonLocal = true;
    }
    
    // Connection string - use localhost for local dev, cloud for prod
    const databaseUrl = env.ENVIRONMENT === 'development' 
      ? 'postgresql://neon:npg@localhost:5432/neondb'
      : env.DATABASE_URL; // Cloud connection string from env vars
    
    const sql = neon(databaseUrl);
    
    // Your application logic
    const users = await sql\`
      SELECT id, name, email 
      FROM users 
      WHERE active = true
      ORDER BY created_at DESC
      LIMIT 10
    \`;
    
    return Response.json({ users });
  }
};

// For local development:
// 1. Start Neon Local: docker-compose up
// 2. Run Cloudflare Worker locally: wrangler dev
// 3. Your Worker connects to localhost:5432 (Neon Local)
// 4. Neon Local routes to your cloud database
// 5. No connection string changes needed between environments!
  `);
}

// Run tests if this file is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  testCloudflareHttpPattern()
    .then((success) => {
      if (success) {
        printCloudflareWorkerExample();
        process.exit(0);
      } else {
        process.exit(1);
      }
    })
    .catch((error) => {
      console.error('❌ Test failed:', error);
      process.exit(1);
    });
}

export { testCloudflareHttpPattern };
