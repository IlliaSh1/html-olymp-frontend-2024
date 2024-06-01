module.exports = async (page, scenario, viewport) => {
  console.log('SCENARIO > ' + scenario.label);
  await require('./click-and-hover-helper')(page, scenario);

  await page.evaluateHandle(() => {
    const toSlider = document.querySelector('#slider-3 .toSlider');
    const fromSlider = document.querySelector('#slider-3 .fromSlider');

    // init 3-6
    // diff 2-4
    // range 0-12

    fromSlider.value = 4;
    fromSlider.dispatchEvent(new Event('input'));
    toSlider.value = 7;
    toSlider.dispatchEvent(new Event('input'));
  });
}
