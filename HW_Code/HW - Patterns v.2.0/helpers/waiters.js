import { logger } from '../log4js/logger';

const waitForVisibleElement = async (element, field, timeout = 20000) => {
  let until = await protractor.ExpectedConditions;
  await browser.wait(until.visibilityOf(element), timeout, `Waiting for ${field} visible failed`);
  await logger.info(`waitForVisibleElement: ${element}`);
};

export { waitForVisibleElement };
