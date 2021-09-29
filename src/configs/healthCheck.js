import { APPLICATION_ENVS } from './constants.js';

/**
 * Configurations for express-status-monitor
 * Responsible to create a dashboard with memory/cpu/network usage and,
 * provide health checks/uptime of each configured APIs under healthChecks
 */

export const healthCheckConfigs = {
  title: `${APPLICATION_ENVS.appMonitoringTitle}`,
  path: `${APPLICATION_ENVS.apiMonitoringEndpoint}`,
  healthChecks: [
    {
      protocol: 'http',
      path: `${APPLICATION_ENVS.romanNumeralConverterEndpoint}?query=4`,
      host: `${APPLICATION_ENVS.hostname}`,
      port: `${APPLICATION_ENVS.port}`
    }
  ]
};
