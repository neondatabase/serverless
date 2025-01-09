import { defineConfig } from 'vite';

export default defineConfig({
  test: {
    browser: {
      name: 'firefox',
      provider: 'playwright',
      headless: true,
      screenshotFailures: false,
    },
  },
  server: {
    fs: {
      strict: false, // allows us to read .env.test
    },
  },
});
