(() => {
  const filterOpenButton = document.querySelector('.filter__toggle-button--open');
  const filterCloseButton = document.querySelector('.filter__button-close');
  const filters = document.querySelector('.filter__wrapper');
  const showFilters = (evt) => {
    evt.preventDefault();
    filters.classList.add('filter__wrapper--open');
    filters.classList.remove('filter__wrapper--close');
  };
  const closeFilters = (evt) => {
    evt.preventDefault();
    filters.classList.add('filter__wrapper--close');
    filters.classList.remove('filter__wrapper--open');
  };
  filterOpenButton.addEventListener('click', showFilters);
  filterCloseButton.addEventListener('click', closeFilters);
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