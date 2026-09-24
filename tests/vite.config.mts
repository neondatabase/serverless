import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    fileParallelism: false,
    setupFiles: ['tests/setup.ts'],
    testTimeout: 10000, // 10 seconds
  },
});
