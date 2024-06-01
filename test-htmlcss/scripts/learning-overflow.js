module.exports = async (page, scenario, viewport) => {
  const containerSelector = scenario.selectors[0];

  console.log(`SCENARIO > ${ scenario.label}`);

  await page.waitForFunction(() => document.fonts.ready.then(() => true));
  await page.addScriptTag({ path: `${__dirname }/utils.js` });

  await page.evaluateHandle((containerSelector) => {
    const container = document.querySelector(containerSelector);
    findCloneAndReplaceIncludingText(container, 'Обучение проводится квалифицированными', 'Обучение кулинарии от шеф-поваров — это отличный способ научиться готовить вкусные и разнообразные блюда. Опытные шеф-повара могут поделиться с вами своими знаниями и навыками, а также помочь вам развить свои собственные кулинарные таланты.');
    findAndReplaceIncludingText(container, 'Изучение мировых','Обучение приготовлению вегетарианских и веганских блюд');
    findAndReplaceIncludingText(container, 'Обучение использованию','Мастер-классы по приготовлению блюд для детей');
    findAndReplaceIncludingText(container, 'Семинары по устойчивой','Приготовление блюд для праздников, торжеств или романтических ужинов');
    findAndReplaceIncludingText(container, 'Объяснение тонкостей','Блюда из сезонных продуктов, экзотических ингредиентов или продуктов, которые обычно не используются в кулинарии.');
  }, containerSelector);
};

