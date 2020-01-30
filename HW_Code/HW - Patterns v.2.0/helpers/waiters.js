// LOGGER
const log4js = require('log4js');
log4js.configure({
  appenders: {
    logFile: { type: 'datefile', filename: '../../logs/status.log' },
    errorLog: { type: 'datefile', filename: '../../logs/error.log' },
    console: { type: 'console' },
  },

  categories: {
    default: { appenders: ['logFile', 'console'], level: 'info' },
    error: { appenders: ['errorLog'], level: 'error' },
  },
});

const logger = log4js.getLogger();

// LOGGER END

const waitForVisibleElement = async (element, field, timeout = 20000) => {
  let until = await protractor.ExpectedConditions;
  await browser.wait(until.visibilityOf(element), timeout, `Waiting for ${field} visible failed`);
  await logger.info(`waitForVisibleElement: ${element}`);
};

export { waitForVisibleElement };
