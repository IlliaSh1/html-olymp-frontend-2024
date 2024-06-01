module.exports = async (page, scenario, viewport) => {
  console.log('SCENARIO > ' + scenario.label);
  await require('./click-and-hover-helper')(page, scenario);

  await page.evaluateHandle(() => {
    const fromSlider = document.querySelector('#slider-3 .fromSlider');

    // init 3-6
    // diff 2-4
    // range 0-12
    // левый тянем в крайнее правое
    fromSlider.value = 11;
    fromSlider.dispatchEvent(new Event('input'));
  });
}
