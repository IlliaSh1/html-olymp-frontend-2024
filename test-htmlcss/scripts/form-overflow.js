module.exports = async (page, scenario, viewport) => {
  const containerSelector = scenario.selectors[0];

  console.log(`SCENARIO > ${ scenario.label}`);

  await page.waitForFunction(() => document.fonts.ready.then(() => true));
  await page.addScriptTag({ path: `${__dirname }/utils.js` });

  await page.evaluateHandle((containerSelector) => {
    const container = document.querySelector(containerSelector);

    findAndReplaceExactText(container, 'Задать вопрос', 'Задать вопрос нашему эксперту по кулинарии');
    findAndReplaceIncludingText(container, 'Заполните форму', 'Наши опытные операторы ответят на все ваши вопросы и помогут вам выбрать блюда, которые идеально подойдут вашему вкусу. Мы свяжемся с вами в ближайшее время и обсудим ваши пожелания.');
    const input = container.querySelector('input');
    if (input) {
      input.value = 'Арина Родионовна Пушкина';
    } else {
      throw new Error('Не найдено текстовое поле');
    }
  }, containerSelector);
};

