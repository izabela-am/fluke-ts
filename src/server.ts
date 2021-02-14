require('dotenv').config();

import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import 'reflect-metadata';

import '@shared/infra/typeorm';
import AppError from '@shared/errors/AppError';
import routes from '@shared/infra/http/index.routes';

const app = express();

app.use(express.json());
app.use(routes);

app.use((error: Error, request: Request, response: Response, _: NextFunction) => {
  if(error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: 'error',
      message: error.message
    });
  }

  return response.status(500).json({
    status: 'error',
    message: error.message
  });
});

app.listen(3333, () => {
  console.log('Server running on port 3333');
});
