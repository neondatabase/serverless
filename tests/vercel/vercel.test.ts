import { expect, test, beforeAll, afterAll } from 'vitest';
import fs from 'fs/promises';
import { Vercel } from '@vercel/sdk';

const projectName = 'neon-serverless-tests-project';
const vercel = new Vercel({
  bearerToken: process.env.VITE_VERCEL_TOKEN,
});

test(
  'Vercel functions (Edge and Node) should respond with queried values',
  { timeout: 90000 }, // 90-sec timeout since deploying to Vercel can take time
  async () => {
    // create project
    try {
      await vercel.projects.createProject({
        requestBody: { name: projectName },
      });
    } catch (e) {
      // http status 409 Conflict just means we created the project before, which is fine
      if (e.statusCode !== 409) throw e;
    }

    // update project to remove signed-in requirement for production deploy links
    await vercel.projects.updateProject({
      idOrName: projectName,
      requestBody: {
        ssoProtection: { deploymentType: 'preview' }, // i.e. NOT production
      },
    });

    // set environment variable(s)
    await vercel.projects.createProjectEnv({
      idOrName: projectName,
      upsert: 'true',
      requestBody: [
        {
          key: 'DATABASE_URL',
          value: process.env.VITE_NEON_DB_POOLER_URL!,
          type: 'encrypted',
          target: ['production'],
        },
      ],
    });

    // deploy
    const utf8 = { encoding: 'utf-8' } as const;
    const moment = Date.now(); // used for double-checking we're fetching from this new deployment

    const packageSrc = await fs.readFile('dist/npm/index.mjs', utf8);
    const fnRawSrc = await fs.readFile('tests/vercel/function.mjs', utf8);
    const fnSrc = fnRawSrc + `\nconst moment = ${moment};`;

    const edgeSrc = fnSrc + "\nexport const config = { runtime: 'edge' };";
    const nodeSrc = fnSrc; // specifying `runtime: "nodejs"` causes an error

    const createDeploymentResponse = await vercel.deployments.createDeployment({
      requestBody: {
        project: projectName,
        target: 'production',
        name: 'neon-serverless-tests-deployment',
        projectSettings: {
          rootDirectory: 'public',
          sourceFilesOutsideRootDirectory: true,
        },
        files: [
          {
            file: 'public/api/edge.mjs',
            data: edgeSrc,
            ...utf8,
          },
          {
            file: 'public/api/node.mjs',
            data: nodeSrc,
            ...utf8,
          },
          {
            file: 'neondatabase-serverless.mjs',
            data: packageSrc,
            ...utf8,
          },
        ],
      },
    });

    const deploymentId = createDeploymentResponse.id;

    // await deployment
    let status, host;
    do {
      await new Promise((resolve) => setTimeout(resolve, 2000)); // wait 2 seconds between checks
      const statusResponse = await vercel.deployments.getDeployment({
        idOrUrl: deploymentId,
      });
      status = statusResponse.status;
      host = statusResponse.url;
    } while (
      status === 'QUEUED' ||
      status === 'BUILDING' ||
      status === 'INITIALIZING'
    );

    if (status !== 'READY') {
      throw new Error(`Unexpected deployment status: ${status}`);
    }

    console.log(`Vercel deployment: ${host}`);

    // fetches
    for (const runtime of ['edge', 'node']) {
      const url = `https://${host}/api/${runtime}`;
      const fetchResponse = await fetch(url);
      const fetchJson = await fetchResponse.json();
      expect(fetchJson).toStrictEqual({
        clientRows: [{ clientstr: 'client' }],
        poolRows: [{ poolstr: 'pool' }],
        poolClientRows: [{ poolclientstr: 'poolclient' }],
        fetchRows: [{ fetchstr: 'fetch' }],
        moment, // a definition for this variable is appended on deploy
      });
    }
  },
);
