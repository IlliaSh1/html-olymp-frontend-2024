module.exports = async (page, scenario, viewport) => {
  console.log('SCENARIO > ' + scenario.label);
  await require('./click-and-hover-helper')(page, scenario);

  await page.evaluateHandle(() => {
    const toInput = document.querySelector('#slider-1 .toInput');
    // init 6
    // range 0-12

    toInput.value = 2;
    toInput.dispatchEvent(new Event('input'));
  });
}
