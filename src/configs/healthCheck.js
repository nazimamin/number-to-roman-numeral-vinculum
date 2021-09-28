import { CONSTANTS } from './constants.js';

/**
 * Configurations for express-status-monitor
 * Responsible to create a dashboard with memory/cpu/network usage and,
 * provide health checks/uptime of each configured APIs under healthChecks
 */

export const healthCheckConfigs = {
  title: `${CONSTANTS.appMonitoringTitle}`,
  path: `${CONSTANTS.apiMonitoringEndpoint}`,
  healthChecks: [
    {
      protocol: 'http',
      path: `${CONSTANTS.romanNumeralConverterEndpoint}`,
      host: `${CONSTANTS.hostname}`,
      port: `${CONSTANTS.port}`
    }
  ]
};
