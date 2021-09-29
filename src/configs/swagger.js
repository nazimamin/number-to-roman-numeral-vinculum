import swaggerJsdoc from 'swagger-jsdoc';
import { APPLICATION_ENVS } from './constants';

// Configure Swagger spec definition based on https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md
// Note: apis paths must be relative to the root. Otherwise, no OpenApiSpec paths object will be generated
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: `${APPLICATION_ENVS.appTitle}`,
      version: `${APPLICATION_ENVS.appVersion}`,
      description: `${APPLICATION_ENVS.appDescription}`,
      license: {
        name: `${APPLICATION_ENVS.appLicense}`,
        url: `${APPLICATION_ENVS.appLicenseUrl}`
      }
    }
  },
  apis: ['src/routes/**/*.js']
};

export const swaggerSpecs = swaggerJsdoc(options);
