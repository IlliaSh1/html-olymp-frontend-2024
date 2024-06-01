module.exports = async (page, scenario, viewport) => {
  const containerSelector = scenario.selectors[0];

  console.log(`SCENARIO > ${ scenario.label}`);

  await page.waitForFunction(() => document.fonts.ready.then(() => true));
  await page.addScriptTag({ path: `${__dirname }/utils.js` });

  await page.evaluateHandle((containerSelector) => {
    const container = document.querySelector(containerSelector);

    findAndReplaceIncludingText(container, 'Правила', 'Правила пользования сайтом были разработаны для обеспечения безопасного, позитивного и продуктивного опыта для всех пользователей. Они устанавливают правила поведения для пользователей и определяют, что разрешено, а что запрещено на сайте.');
    findAndReplaceExactText(container, '8 800 725-32-32', '8 800 725-32-32 звоните в любое время мы на связи 24 часа 7 дней в неделю кроме выходных и праздников');

    const menu = findListByText(container, 'Гастротуры', 6);
    if (menu && menu.length) {
      cloneNodesInList(menu, [5, 4, 3, 2]);
    }

    const links = findListByTag(container, 'a', 3);
    if (links && links.length) {
      cloneNodesInList(links, [2, 2, 1, 1, 0, 0]);
    }

  }, containerSelector);
};
