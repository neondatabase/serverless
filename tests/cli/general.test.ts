import { test } from 'vitest';

test('log version', () => {
  if (typeof process !== 'undefined' && process.versions) {
    console.log(`Node v${process.versions.node}`);
  }
});
