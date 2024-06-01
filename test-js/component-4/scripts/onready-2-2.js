module.exports = async (page, scenario, viewport) => {
  console.log('SCENARIO > ' + scenario.label);
  await require('./click-and-hover-helper')(page, scenario);

  await page.evaluateHandle(() => {
    const toInput = document.querySelector('#slider-2 .toInput');
    const fromInput = document.querySelector('#slider-2 .fromInput');

    // init 3-8
    // range 0-12

    fromInput.value = 1;
    fromInput.dispatchEvent(new Event('input'));
    toInput.value = 4;
    toInput.dispatchEvent(new Event('input'));
  });
}
