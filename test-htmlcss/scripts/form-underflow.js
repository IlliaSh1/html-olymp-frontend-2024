module.exports = async (page, scenario, viewport) => {
  const containerSelector = scenario.selectors[0];

  console.log(`SCENARIO > ${ scenario.label}`);

  await page.waitForFunction(() => document.fonts.ready.then(() => true));
  await page.addScriptTag({ path: `${__dirname }/utils.js` });

  await page.evaluateHandle((containerSelector) => {
    const container = document.querySelector(containerSelector);

    findAndReplaceIncludingText(container, 'Заполните форму', 'Заполните форму.');

  }, containerSelector);
};

