(function () {
  const filterOpenButton = document.querySelector('.filter__toggle-button--open');
  const filterCloseButton = document.querySelector('.filter__button-close');
  const filters = document.querySelector('.filter__wrapper');
  const page = document.querySelector('body');

  const showFilters = (evt) => {
    evt.preventDefault();
    page.classList.add('page--disabled');
    filters.classList.add('filter__wrapper--open');
    filters.classList.remove('filter__wrapper--close');
  };

  const closeFilters = (evt) => {
    evt.preventDefault();
    page.classList.remove('page--disabled');
    filters.classList.add('filter__wrapper--close');
    filters.classList.remove('filter__wrapper--open');
  };

  if (filterOpenButton) {
    filterOpenButton.addEventListener('click', showFilters);
  }
  if (filterCloseButton) {
    filterCloseButton.addEventListener('click', closeFilters);
  }

})();

(() => {
  const filtersForm = document.querySelector('.filter__form');
  const clearFormButton = document.querySelector('.filter__reset');

  if (clearFormButton) {
    clearFormButton.addEventListener('click', () => {
      filtersForm.reset();
    });
  }
})();

(function () {
  const filterList = document.querySelector('.filter__list');

  if (filterList) {
    const filterToggle = filterList.querySelectorAll('.filter__toggle');

    filterToggle.forEach(function (item) {
      item.addEventListener('click', function (evt) {
        evt.preventDefault();
        item.classList.toggle('filter__toggle--active');
      });
    });
  }
})();
