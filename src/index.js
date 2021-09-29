import express from 'express';
import expressStatus from 'express-status-monitor';
import expressPinoLogger from 'express-pino-logger';
import swaggerUi from 'swagger-ui-express';

import {
  APPLICATION_ENVS,
  healthCheckConfigs,
  logger,
  swaggerSpecs
} from '@configs';
import { romanNumeralRouter, globalRouter } from '@routes';

const app = express();

// setup logger middleware using pino logger
const pinoLoggerMiddleware = expressPinoLogger({
  logger,
  useLevel: 'http'
});

// app.use(pinoLoggerMiddleware);

// setup app monitoring using express status
app.use(
  expressStatus({
    ...healthCheckConfigs
  })
);

// Set up swagger ui
app.use(
  APPLICATION_ENVS.apiSwaggerEndpoint,
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpecs)
);

app.use(express.json());

// define the routes for REST endpoints
app.use('/', romanNumeralRouter);
app.use('*', globalRouter);

// starts up the server
app.listen(APPLICATION_ENVS.port, () =>
  console.log(`App listening on port ${APPLICATION_ENVS.port}!`)
);
