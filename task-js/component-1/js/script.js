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
   * Настройки аккордеона, параметры получаются из командной строки
   *
   * tabs_limit - number, максимальное количество одновременно открытых элементов,
   * по умолчанию 0 - не ограничено
   *
   * Для тестирования работы своего скрипта при разных значениях tabs_limit
   * временно переопределяйте значение переменной, хранящей этот параметр.
   * Либо можете дописыват GET-параметр с нужным значением в конец адресной строки,
   * например: ?tabs_limit=1
   */
  const settings = {
    tabsLimit: getUrlValue('tabs_limit') || 0,
  };

  /* Код компонента пишите ниже */
  class AccordionItem {
    constructor({ node, title, content, idx }) {
      this.title = title;
      this.content = content;
      this.node = node;
      this.idx = idx;
    }

    isOpened() {
      return this.node.classList.contains('accordeon-item--open');
    }

    toggle() {
      this.node.classList.toggle('accordeon-item--open');
      return this.isOpened();
    }
  }
  class Accordion {
    constructor(node, tabsLimit) {
      this.tabsLimit = tabsLimit;
      this.node = node;
      this.openedTabs = new Map();

      const tabsNodes = this.node.querySelectorAll('.accordeon-item');
      tabsNodes.forEach((curTabNode, idx) => {
        const curTab = new AccordionItem({
          idx: idx,
          node: curTabNode,
          title: curTabNode.querySelector('.accordeon-item-title'),
          content: curTabNode.querySelector('.accordeon-item-content'),
        });

        curTab.title.addEventListener('click', () => {
          const wasOpened = curTab.toggle();
          if(tabsLimit !== 0) {
            if(wasOpened) {
              this.openedTabs.set(curTab.idx, curTab);

              if (this.openedTabs.size > tabsLimit) {
                this.closeFirstOpenedTab();
              }
            } else {
              this.openedTabs.delete(curTab.idx);
            }
          }
        });
      });
    }

    closeFirstOpenedTab() {
      const firstOpenedTab = this.openedTabs.values().next().value;
      firstOpenedTab.toggle();

      this.openedTabs.delete(firstOpenedTab.idx);
    }
  }

  new Accordion(document.querySelector('.accordeon'), settings.tabsLimit);
})();
