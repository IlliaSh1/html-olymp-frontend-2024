module.exports = async (page, scenario, viewport) => {
  const containerSelector = scenario.selectors[0];

  console.log(`SCENARIO > ${ scenario.label}`);

  await page.waitForFunction(() => document.fonts.ready.then(() => true));
  await page.addScriptTag({ path: `${__dirname }/utils.js` });

  await page.evaluateHandle((containerSelector) => {
    const container = document.querySelector(containerSelector);

    findAndReplaceExactText(container, 'Контакты', 'Все контакты интересующей вас организации');
    findAndReplaceIncludingText(container, 'Свяжитесь', 'Свяжитесь с нами любым удобным для Вас способом, и мы ответим на Ваши вопросы.');
    findCloneAndReplaceIncludingText(container, 'Свяжитесь', 'Обещаем, что ответ будет получен в самые кратчайшие сроки. Вместе мы сделаем мир лучше!');

    findAndReplaceIncludingText(container, 'Москва', 'г. Москва, пр-т Вкуса, д. 14, в подворотне второй поворот налево далее по лестнице на чердак');

    const list = findListByText(container, 'Телефон', 3);
    if (list && list.length) {
      cloneNodesInList(list, [0]);
    }

  }, containerSelector);
};
