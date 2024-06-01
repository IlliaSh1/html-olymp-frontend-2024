module.exports = async (page, scenario, viewport) => {
  const containerSelector = scenario.selectors[0];

  console.log(`SCENARIO > ${ scenario.label}`);

  await page.waitForFunction(() => document.fonts.ready.then(() => true));
  await page.addScriptTag({ path: `${__dirname }/utils.js` });

  await page.evaluateHandle((containerSelector) => {
    const container = document.querySelector(containerSelector);

    findAndReplaceIncludingText(container, 'Правила', 'Правила пользования');
    findAndReplaceExactText(container, '8 800 725-32-32', '725-3-2');

    const links = findListByTag(container, 'a', 3);
    if (links && links.length) {
      removeNodesInList(links, 1);
    }

    const menu = findListByText(container, 'Гастротуры', 6);
    if (menu && menu.length) {
      removeNodesInList(menu, 3);
    }

  }, containerSelector);
};
