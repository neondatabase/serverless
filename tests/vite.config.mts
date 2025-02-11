import { defineConfig } from 'vite';

export default defineConfig({
  test: {
    fileParallelism: false,
    setupFiles: ['tests/setup.ts'],
  },
});
