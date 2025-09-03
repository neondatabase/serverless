#!/usr/bin/env node

import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const tests = [
  'test-non-local.js',
  'test-legacy-behavior.js',
  'test-neon-local-behavior.js',
  'test-comprehensive.js',
];

async function runTest(testFile) {
  return new Promise((resolve, reject) => {
    console.log(`\n${'='.repeat(60)}`);
    console.log(`🚀 Running: ${testFile}`);
    console.log(`${'='.repeat(60)}`);

    const testPath = join(__dirname, testFile);
    const child = spawn('node', [testPath], {
      stdio: 'inherit',
      cwd: __dirname,
    });

    child.on('close', (code) => {
      if (code === 0) {
        console.log(`✅ ${testFile} PASSED`);
        resolve();
      } else {
        console.log(`❌ ${testFile} FAILED (exit code: ${code})`);
        reject(new Error(`Test ${testFile} failed with exit code ${code}`));
      }
    });

    child.on('error', (err) => {
      console.log(`❌ ${testFile} ERROR: ${err.message}`);
      reject(err);
    });
  });
}

async function runAllTests() {
  console.log('🧪 Running All Custom Serverless Driver Tests');
  console.log('📋 Testing both legacy and new isNeonLocal functionality\n');

  let passed = 0;
  let failed = 0;

  for (const test of tests) {
    try {
      await runTest(test);
      passed++;
    } catch (error) {
      console.error(`\n💥 Test ${test} failed:`, error.message);
      failed++;
    }
  }

  console.log(`\n${'='.repeat(60)}`);
  console.log('📊 FINAL RESULTS');
  console.log(`${'='.repeat(60)}`);
  console.log(`✅ Passed: ${passed}/${tests.length}`);
  console.log(`❌ Failed: ${failed}/${tests.length}`);

  if (failed === 0) {
    console.log('\n🎉 ALL TESTS PASSED!');
    console.log('✅ Legacy behavior (isNeonLocal = false) works correctly');
    console.log('✅ New behavior (isNeonLocal = true) works correctly');
    console.log('✅ Auto-configuration works properly');
    console.log('✅ No breaking changes detected');
    console.log('\n📋 The isNeonLocal feature is ready for production use.');
  } else {
    console.log('\n💥 SOME TESTS FAILED!');
    console.log('🔍 Please review the test output above for details.');
    process.exit(1);
  }
}

runAllTests().catch((error) => {
  console.error('\n❌ Test runner failed:', error);
  process.exit(1);
});
