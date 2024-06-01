module.exports = async (page, scenario, viewport) => {
  console.log('SCENARIO > ' + scenario.label);
  await require('./click-and-hover-helper')(page, scenario);

  await page.evaluateHandle(() => {
    const toSlider = document.querySelector('#slider-3 .toSlider');

    // init 3-6
    // diff 2-4
    // range 0-12
    // правый тянет левый
    toSlider.value = 12;
    toSlider.dispatchEvent(new Event('input'));
  });
}
