module.exports = async (page, scenario, viewport) => {
  console.log('SCENARIO > ' + scenario.label);
  await require('./click-and-hover-helper')(page, scenario);

  await page.evaluateHandle(() => {
    const toSlider = document.querySelector('#slider-1 .toSlider');
    // init 6
    // range 0-12

    toSlider.value = 9;
    toSlider.dispatchEvent(new Event('input'));
  });
}
