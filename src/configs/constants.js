import { envs } from './environment';

/**
 * Constants that holds configurations such as deployment info, server, and app meta data
 *
 * Note: Ideally, we would derive configurations from a database and inject the configs context into the app module on run-time
 */

export const APPLICATION_ENVS = {
  environment: `${envs.NODE_ENV}` || process.env.NODE_ENV,
  appTitle: `${envs.APP_TITLE || 'Roman Numeral Converter'}`,
  appDescription: `${envs.APP_DESCRIPTION || 'REST API that converts a number to Roman numerals Vinculum format'}`,
  appVersion: `${envs.APP_VERSION || '1.0.0'}`,
  appMonitoringTitle: `${envs.APP_MONITORING_TITLE || 'Roman Numeral Converter Monitoring'}`,
  appLicense: `${envs.APP_LICENSE || 'MIT'}`,
  appLicenseUrl: `${envs.APP_LICENSE_URL || 'https://opensource.org/licenses/MIT'}`,

  baseUrl: `${envs.BASE_URL || './'}`,
  hostname: `${envs.HOST || 'localhost'}`,
  port: `${envs.PORT || 8080}`,

  apiMonitoringEndpoint: `${envs.API_MONITORING_ENDPOINT || '/api-monitor'}`,
  apiSwaggerEndpoint: `${envs.API_SWAGGER_ENDPOINT || '/api-docs'}`,
  romanNumeralConverterEndpoint: `${envs.ROMAN_NUMERAL_CONVERTER_ROUTE || '/romannumeral'}`,

  logLocation: `${envs.LOG_LOCATION || 'app.log'}`
};

export const LOWER_LIMIT = 1;

export const UPPER_LIMIT = 2200000000;

export const INVALID_NUMBER_HINT = `A valid parameter of type number between ${LOWER_LIMIT} and ${UPPER_LIMIT} must be supplied.`;

export const ERRORS = {
  MISSING_PARAM: {
    statusCode: 400,
    message: `Missing parameter. ${INVALID_NUMBER_HINT}`
  },
  INVALID_PARAM: {
    statusCode: 422,
    message: `Invalid parameter. ${INVALID_NUMBER_HINT}`
  },
  NOT_FOUND: {
    statusCode: 404,
    message: `Requested resource does not exist.`
  },
  INTERNAL_SERVER_ERROR: {
    statusCode: 500,
    message: `Failed to process request.`
  },
  NOT_IMPLEMENTED: {
    statusCode: 501,
    message: 'Not implemented.'
  }
};
