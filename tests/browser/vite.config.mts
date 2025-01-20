import { defineConfig } from 'vite';

export default defineConfig({
  test: {
    browser: {
      provider: 'playwright',
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
