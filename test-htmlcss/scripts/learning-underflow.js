module.exports = async (page, scenario, viewport) => {
  const containerSelector = scenario.selectors[0];

  console.log(`SCENARIO > ${ scenario.label}`);

  await page.waitForFunction(() => document.fonts.ready.then(() => true));
  await page.addScriptTag({ path: `${__dirname }/utils.js` });

  await page.evaluateHandle((containerSelector) => {
    const container = document.querySelector(containerSelector);

    findAndReplaceIncludingText(container, 'Обучение проводится', 'Обучение проводится поварами, имеющими опыт');

    const list = findListByText(container, 'Обучение использованию кулинарного оборудования', 4);
    if (list) {
      list[0].remove();
    }

  }, containerSelector);
};
