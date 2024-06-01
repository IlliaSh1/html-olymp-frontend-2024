(function() {
  /**
   * Служебная функция для считывания параметров из адресной строки
   * и определения конфигурации компонента
   * @param  {string} name - имя параметра
   * @return {number} - значение параметра в адресной строке
   */
  const getUrlValue = (name) => {
    const urlParams = new URLSearchParams(window.location.search);
    return parseInt(urlParams.get(name), 10);
  };

  /**
   * Настройки слайдера, параметры получаются из командной строки
   * pagination - boolean, отображает пагинацию
   * loop - boolean, зацикливает слайдер
   *
   * Для тестирования работы своего скрипта при разных значениях параметров временно
   * переопределяйте значение переменных, хранящих эти параметр.
   * Либо можете дописыват гет-параметры с нужным значением в конец адресной строки,
   * например: ?pagination=1&loop=0
   */
  const settings = {
    pagination: !!getUrlValue('pagination'),
    loop: !!getUrlValue('loop'),
  };

  /* Код компонента пишите ниже */

  class SliderItem {
    constructor({ node, idx, }) {
      this.node = node;
      this.idx = idx;
    }

    isCurrent() {
      return this.node.classList.contains('slider-item--current');
    }

    toggle() {
      this.node.classList.toggle('slider-item--current');
      return this.isCurrent();
    }
  }
  class Slider {
    constructor(node, pagination, loop) {
      this.node = node;
      // Settings
      this.pagination = pagination;
      if(this.pagination) {
        this.node.querySelector('.slider-pagination').classList.add('slider-pagination--shown');
      }
      this.loop = loop;
      if (this.loop) {
        this.node.querySelector('.slider-toggle--prev').disabled = false;
      }

      // State
      this.openedSlide = 0;

      // Btns
      this.btnNext = this.node.querySelector('.slider-toggle--next');
      this.btnNext.addEventListener('click', () => {

        this.openNextSlide();
      });
      this.btnPrev = this.node.querySelector('.slider-toggle--prev');
      this.btnPrev.addEventListener('click', () => {

        this.openPrevSlide();
      });

      // Slides
      this.slides = [];

      const slidesNodes = this.node.querySelectorAll('.slider-item');
      slidesNodes.forEach((curSlideNode, idx) => {
        const curSlide = new SliderItem({
          idx: idx,
          node: curSlideNode,
          // title: curSlideNode.querySelector('.accordeon-item-title'),
          // content: curSlideNode.querySelector('.accordeon-item-content'),
        });

        this.slides.push(curSlide);
      });

      // Pagination
      if(this.pagination) {
        const paginationNode = this.node.querySelector('.slider-pagination');
        this.paginationItems = paginationNode.querySelectorAll('.slider-pagination-item');

        this.paginationItems.forEach((curPaginationItem, idx) => {
          curPaginationItem.addEventListener('click', () => {
            this.openNthSlide(idx);
          });
        });
      }
    }


    openNthSlide(idx) {
      if(this.openedSlide === idx) {
        return;
      }

      this.slides[this.openedSlide].toggle();
      this.slides[idx].toggle();


      this.paginationItems[this.openedSlide].disabled = false;
      this.paginationItems[idx].disabled = true;

      this.openedSlide = idx;


      this.updateSliderBtnsState();
    }

    updateSliderBtnsState() {
      if(this.loop === true) {
        return;
      }

      if(this.openedSlide === 0) {
        this.btnPrev.disabled = true;
      } else {
        this.btnPrev.disabled = false;
      }

      if(this.openedSlide === this.slides.length - 1) {
        this.btnNext.disabled = true;
      } else {
        this.btnNext.disabled = false;
      }
    }

    openNextSlide() {
      this.slides[this.openedSlide].toggle();
      if(this.pagination) {
        this.paginationItems[this.openedSlide].disabled = false;
      }
      this.openedSlide++;
      this.openedSlide %= this.slides.length;
      if(this.pagination) {
        this.paginationItems[this.openedSlide].disabled = true;
      }

      this.slides[this.openedSlide].toggle();

      this.updateSliderBtnsState();
    }

    openPrevSlide() {

      this.slides[this.openedSlide].toggle();
      if(this.pagination) {
        this.paginationItems[this.openedSlide].disabled = false;
      }
      this.openedSlide--;
      if (this.openedSlide < 0) {
        this.openedSlide = this.slides.length - 1;
      }
      if(this.pagination) {
        this.paginationItems[this.openedSlide].disabled = true;
      }

      this.slides[this.openedSlide].toggle();
      this.updateSliderBtnsState();
    }
  }

  new Slider(document.querySelector('#slider'), settings.pagination, settings.loop);
})();
