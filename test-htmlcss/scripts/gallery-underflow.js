module.exports = async (page, scenario, viewport) => {
  const containerSelector = scenario.selectors[0];

  console.log(`SCENARIO > ${ scenario.label}`);

  await page.waitForFunction(() => document.fonts.ready.then(() => true));
  await page.addScriptTag({ path: `${__dirname }/utils.js` });

  await page.evaluateHandle((containerSelector) => {
    const container = document.querySelector(containerSelector);

    findAndReplaceExactText(container, 'Фотогалерея', 'Фотогалерея. За ней располагался красивый прямоугольник окна, а в нем виднелись край небесного шатра и кусочек белеющего зимнего месяца.');

    findCloneAndReplaceIncludingText(container, 'фотографии', 'Кроме того, все участники конкурса получат призы от спонсоров и партнеров – которые ждут ваши идеи!');

  }, containerSelector);
};
