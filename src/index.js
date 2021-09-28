import express from 'express';
import expressStatus from 'express-status-monitor';
import expressPinoLogger from 'express-pino-logger';
import swaggerUi from 'swagger-ui-express';

import { CONSTANTS, healthCheckConfigs, logger, swaggerSpecs } from '@configs';
import { romanNumeralRouter } from '@routes';

const app = express();

// setup logger middleware using pino logger
const pinoLoggerMiddleware = expressPinoLogger({
  logger,
  useLevel: 'http'
});

app.use(pinoLoggerMiddleware);

// setup app monitoring using express status
app.use(
  expressStatus({
    ...healthCheckConfigs
  })
);

// Set up swagger ui
app.use(
  CONSTANTS.apiSwaggerEndpoint,
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpecs)
);

app.use(express.json());

// define the routes for REST endpoints
app.use('/', romanNumeralRouter);

// starts up the server
app.listen(CONSTANTS.port, () =>
  console.log(`App listening on port ${CONSTANTS.port}!`)
);
