import { fetchHandler } from '../serverless.mjs';
export default async (request, ctx) => fetchHandler(request, process.env, ctx);

export const config = {
  runtime: 'edge',
  regions: ['fra1'],  // fra1 = Frankfurt: pick the Vercel region nearest your Neon DB
};
