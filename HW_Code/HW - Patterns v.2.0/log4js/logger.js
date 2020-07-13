// LOGGER
const log4js = require('log4js');
log4js.configure({
  appenders: {
    logFile: { type: 'datefile', filename: 'statistic/logs/status.log' }, // path from root folder
    errorLog: { type: 'datefile', filename: 'statistic/logs/error.log' },
    console: { type: 'console' },
  },

  categories: {
    default: { appenders: ['logFile', 'console'], level: 'info' },
    error: { appenders: ['errorLog'], level: 'error' },
  },
});
const logger = log4js.getLogger();
export { logger };

// LOGGER END
