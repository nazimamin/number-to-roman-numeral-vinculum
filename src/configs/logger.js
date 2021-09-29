/**
 * Configurations for log levels using the pino library
 * Responsible to log all the requests with a unique trace Id that can be used to debug issues in production/development
 */

import pino from 'pino';
import { APPLICATION_ENVS } from './constants';

const isDevEnv = APPLICATION_ENVS.environment === 'development';

// Custom log levels. By default we'll always log http requests
const levels = {
  http: 10,
  debug: 20,
  info: 30,
  warn: 40,
  error: 50
};

// Create a pino instance and override it's default configs
// In production instead of writing log to the console directly, we will write to a file
export const logger = pino(
  {
    customLevels: levels,
    useOnlyCustomLevels: true,
    level: 'http',
    prettyPrint: isDevEnv // only prettify logs in dev environment for easier read
  },
  isDevEnv ? null : APPLICATION_ENVS.logLocation // only write to file in production
);
