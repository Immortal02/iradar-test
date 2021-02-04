import express from 'express';
import { json, urlencoded } from 'body-parser';
import cors from 'cors';
import conditionRouter from './condition/router';

export function configureApp() {
  const app = express();
  app.use(cors());
  app.use(json());
  app.use(urlencoded({ extended: true }));

  app.get('/', (req, res) => {
    res.send('home');
  });

  app.use('/api', conditionRouter)

  return app;
}