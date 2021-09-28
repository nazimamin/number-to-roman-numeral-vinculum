import swaggerJsdoc from 'swagger-jsdoc';
import { CONSTANTS } from './constants';

// Configure Swagger spec definition based on https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md
// Note: apis paths must be relative to the root. Otherwise, no OpenApiSpec paths object will be generated
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: `${CONSTANTS.appTitle}`,
      version: `${CONSTANTS.appVersion}`,
      description: `${CONSTANTS.appDescription}`,
      license: {
        name: `${CONSTANTS.appLicense}`,
        url: `${CONSTANTS.appLicenseUrl}`
      }
    }
  },
  apis: ['src/routes/**/*.js']
};

export const swaggerSpecs = swaggerJsdoc(options);
