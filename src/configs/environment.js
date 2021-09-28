// Utility to easily read all the environment variables from .env file on run-time

import dotenv from 'dotenv';

const loadedEnvs = dotenv.config();

if (loadedEnvs.error) {
  throw loadedEnvs.error;
}

export const { parsed: envs } = loadedEnvs;
