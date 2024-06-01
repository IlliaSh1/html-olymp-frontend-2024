(function() {
  /**
   * Служебная функция для заполнения диапазона слайдера цветом.
   * @param {number} from - начальное значение в %% диапазона.
   * @param {number} to - конечное значение в %% диапазона.
   * @param {HTMLElement} controlSlider - Элемент управления слайдером
   */
  const fillSlider = (from, to, controlSlider) => {
    const sliderColor = '#ffffff';
    const rangeColor = '#25daa5';
    controlSlider.style.background = `linear-gradient(
      to right,
      ${sliderColor} 0%,
      ${sliderColor} ${from}%,
      ${rangeColor} ${from}%,
      ${rangeColor} ${to}%,
      ${sliderColor} ${to}%,
      ${sliderColor} 100%)`;
  };

  /* Код компонента пишите ниже */

  class Slider {
    constructor(node) {
      this.node = node;

      this.hasDouble = this.node.getAttribute('data-range');

      this.toInput = this.node.querySelector('.toInput');
      this.fromInput = this.node.querySelector('.fromInput');
      this.toSlider = this.node.querySelector('.toSlider');
      this.fromSlider = this.node.querySelector('.fromSlider');
      if(!this.hasDouble) {
        this.fromInput.closest('.form_control_container').hidden = true;
        this.fromSlider.hidden = true;
        this.toSlider.style.background = '#ffffff';

      }
      this.minDiff = this.node.getAttribute('data-min-diff');
      this.maxDiff = this.node.getAttribute('data-max-diff');
      // this.maxV = this

      this.toInput.addEventListener('input', () => {
        this.setToValue(this.toInput.value);
      });
      this.toSlider.addEventListener('input', () => {
        this.setToValue(this.toSlider.value);
      });

      if(this.hasDouble) {
        this.fromInput.addEventListener('input', () => {
          this.setFromValue(this.fromInput.value);
        });
        this.fromSlider.addEventListener('input', () => {
          this.setFromValue(this.fromSlider.value);
        });
      }
    }

    setGreenInterval() {
      const toVal = this.toSlider.value;
      const fromVal = this.fromSlider.value;
      fillSlider(fromVal * 100 / 12, toVal * 100 / 12, this.node.querySelector('.toSlider'));
    }

    setToValue(value) {
      this.toSlider.value = value;
      this.toInput.value = value;
      if (this.hasDouble) {
        const range = this.toSlider.value - this.fromSlider.value;

        if(range < this.minDiff) {
          if(this.fromInput.value <= 0) {
            this.fromSlider.value = 0;
            this.fromInput.value = 0;

            this.toSlider.value = this.minDiff;
            this.toInput.value = this.minDiff;
          } else {
            this.fromSlider.value = this.toSlider.value - this.minDiff;
            this.fromInput.value = this.fromSlider.value;
          }
        }
        if(range > this.maxDiff) {
          if(this.toInput.value >= 12) {
            this.toSlider.value = 12;
            this.toInput.value = 12;
            this.fromSlider.value = 12 - this.maxDiff;
            this.fromInput.value = 12 - this.maxDiff;
          } else {
            this.fromSlider.value = this.toSlider.value - this.maxDiff;
            this.fromInput.value = this.fromSlider.value;
          }
        }
        this.setGreenInterval();
      }
    }

    setFromValue(value) {
      this.fromSlider.value = value;
      this.fromInput.value = value;
      if (this.hasDouble) {

        const range = this.toSlider.value - this.fromSlider.value;

        if(range < this.minDiff) {
          if(this.toInput.value >= 12) {

            this.toSlider.value = 12;
            this.toInput.value = 12;
            this.fromSlider.value = 12 - this.minDiff;
            this.fromInput.value = 12 - this.minDiff;
          } else {
            this.toSlider.value = Number(this.fromSlider.value) + Number(this.minDiff);
            this.toInput.value = this.toSlider.value;
          }
        }
        if(range > this.maxDiff) {
          if(this.fromInput.value <= 0) {
            this.fromSlider.value = 0;
            this.fromInput.value = 0;

            this.toSlider.value = this.maxDiff;
            this.toInput.value = this.maxDiff;
          } else {
            this.toSlider.value = Number(this.fromSlider.value) + Number(this.maxDiff);
            this.toInput.value = this.toSlider.value;
          }
        }
        this.setGreenInterval();
      }
    }
  }

  const sliderNodes = document.querySelectorAll('.range_container');
  sliderNodes.forEach((node) => new Slider(node));
})();
