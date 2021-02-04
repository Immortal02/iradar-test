// import { Context } from 'aws-lambda';
// import { createServer, proxy } from 'aws-serverless-express';
// import { configureApp } from './app';

// const app = configureApp();
// const server = createServer(app);
// export const handler = (event: any, context: Context) => { proxy(server, event, context) }

import { Handler } from 'aws-lambda';
import serverless from 'serverless-http';
import { configureApp } from './app';

const app = configureApp();
export const handler: Handler = serverless(app);