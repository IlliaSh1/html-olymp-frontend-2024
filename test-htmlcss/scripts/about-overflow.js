module.exports = async (page, scenario, viewport) => {
  const containerSelector = scenario.selectors[0];

  console.log(`SCENARIO > ${ scenario.label}`);

  await page.waitForFunction(() => document.fonts.ready.then(() => true));
  await page.addScriptTag({ path: `${__dirname }/utils.js` });

  await page.evaluateHandle((containerSelector) => {
    const container = document.querySelector(containerSelector);

    findCloneAndReplaceIncludingText(container, 'Наше кулинарное начало', 'С тех пор компания неуклонно растет и развивается. Сегодня она является одним из ведущих кулинарных заведений в городе.');
    findCloneAndReplaceIncludingText(container, 'Наше кулинарное начало', 'В 2005 году компания расширилась, открыв кулинарную школу. Школа была призвана поделиться любовью к еде с другими людьми и научить их готовить вкусные и оригинальные блюда.');
    findCloneAndReplaceIncludingText(container, 'Наше кулинарное начало', 'Ресторан быстро завоевал популярность благодаря своей изысканной кухне и гостеприимной атмосфере. Заведение стало любимым местом для гурманов со всего города.');
    findAndReplaceIncludingText(container, 'Наше кулинарное начало', 'Наша компания была основана в 2000 году двумя страстными любителями еды, которые мечтали открыть свой собственный ресторан. Они нашли подходящее место в центре города и начали работу над созданием уникального кулинарного опыта.');

    findAndReplaceIncludingText(container, 'Наша миссия', 'Как мы это делаем');
    findCloneAndReplaceIncludingText(container, 'Погрузить вас в мир', 'Мы также предлагаем различные кулинарные мероприятия, такие как мастер-классы, дегустации и вечеринки, которые помогут вам познакомиться с новыми блюдами и людьми.');
    findAndReplaceIncludingText(container, 'Погрузить вас в мир', 'Мы предлагаем широкий спектр кулинарных курсов и программ, которые подходят для всех уровней подготовки. Наши опытные инструкторы обучат вас основам кулинарии или помогут вам отточить свои навыки.');

    const list = findListByText(container, 'Как мы это делаем', 2);
    if (list) {
      cloneNodesInList(list, [1]);
    }

    findAndReplaceIncludingText(container, 'Как мы это делаем', 'Наша миссия');
    findCloneAndReplaceIncludingText(container, 'Мы также предлагаем различные', 'Мы хотим, чтобы вы научились создавать вкусные и красивые блюда, которые будут радовать вас и ваших близких. Мы хотим, чтобы вы открыли для себя новый мир возможностей и впечатлений.');
    findAndReplaceIncludingText(container, 'Мы также предлагаем различные', 'Мы хотим, чтобы вы почувствовали радость и удовлетворение от приготовления пищи.');
    findAndReplaceIncludingText(container, 'Мы предлагаем широкий спектр', 'Погрузить вас в мир гастрономии, научить создавать кулинарные шедевры и открыть секреты шеф-поваров.');

  }, containerSelector);
};
