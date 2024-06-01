module.exports = async (page, scenario, viewport) => {
  console.log('SCENARIO > ' + scenario.label);
  await require('./click-and-hover-helper')(page, scenario);

  await page.evaluateHandle(() => {
    const fromSlider = document.querySelector('#slider-2 .fromSlider');
    const toSlider = document.querySelector('#slider-2 .toSlider');

    // init 3-8
    // range 0-12

    fromSlider.value = 6;
    fromSlider.dispatchEvent(new Event('input'));
    toSlider.value = 11;
    toSlider.dispatchEvent(new Event('input'));
  });
}
