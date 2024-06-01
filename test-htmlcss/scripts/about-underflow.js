module.exports = async (page, scenario, viewport) => {
  const containerSelector = scenario.selectors[0];

  console.log(`SCENARIO > ${ scenario.label}`);

  await page.waitForFunction(() => document.fonts.ready.then(() => true));
  await page.addScriptTag({ path: `${__dirname }/utils.js` });

  await page.evaluateHandle(({containerSelector, viewport}) => {
    const container = document.querySelector(containerSelector);

    findAndReplaceIncludingText(container, 'Наше кулинарное начало', 'Наше кулинарное начало — в 2000 году мы открыли свой первый ресторан со всем миром.');
    findCloneAndReplaceIncludingText(container, 'Погрузить вас в мир', 'Погрузить вас в мир');
    const list = findListByText(container, 'Наша миссия', 2);
    if (list) {
      removeNodesInList(list, 1);
    }

    const sizes = {
      desktop: {width: 687, height: 658},
      tablet: {width: 489, height: 658},
      mobile: {width: 375, height: 658},
    };

    const img = container.querySelector('img');
    if (img) {
      const picture = img.parentNode;
      const imgPath = '../test-htmlcss/images';

      img.setAttribute('src', `${imgPath}/cooking-${viewport.label}.jpg`);
      if (sizes[viewport.label]) {
        if (img.hasAttribute('width')) {
            img.setAttribute('width', sizes[viewport.label].width);
        }
        if (img.hasAttribute('height')) {
            img.setAttribute('height', sizes[viewport.label].height);
        }
      }
      if (img.hasAttribute('srcset')) {
          img.setAttribute('srcset', `${imgPath}/cooking-${viewport.label}@2x.jpg 2x`);
      }
      if (picture.tagName === 'PICTURE') {
        const sources = picture.querySelectorAll('source');
        sources.forEach((source) => picture.removeChild(source));
      }
    } else {
      throw new Error('Не найдено изображение для тестирования переполнения. Оно должно быть вставлено в контент.')
    }

  }, {containerSelector, viewport});
};
