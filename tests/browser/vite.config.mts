import { defineConfig } from 'vitest/config';
import { playwright } from '@vitest/browser-playwright';

export default defineConfig({
  test: {
    fileParallelism: false,
    browser: {
      provider: playwright(),
      headless: true,
      screenshotFailures: false,
      instances: [{ browser: 'firefox' }, { browser: 'chromium' }],
    },
  },
  server: {
    fs: {
      strict: false, // allows us to read .env.test
    },
  },
});
