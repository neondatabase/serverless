import { config } from 'dotenv';
import { defineConfig, env } from 'prisma/config';

config({ path: '.env.test' });

export default defineConfig({
  schema: './tests/packages/prisma/schema.prisma',
  datasource: {
    url: env('VITE_NEON_DB_URL'),
  },
});
