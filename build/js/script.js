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
    const filterItem = filterList.querySelectorAll('.filter__item');

    filterToggle.forEach(function (item) {
      item.addEventListener('click', function (evt) {
        evt.preventDefault();
        item.closest('.filter__item').classList.toggle('filter__item--active');   
      });
    });
  }
})();

const pageHeader = document.querySelector('.page-header');
const headerToggle = document.querySelector('.page-header__toggle');

pageHeader.classList.remove('page-header--nojs');

headerToggle.addEventListener('click', function () {
  if (pageHeader.classList.contains('page-header--closed')) {
    pageHeader.classList.remove('page-header--closed');
    pageHeader.classList.add('page-header--opened');
    document.body.classList.add('page-no-scroll');
  } else {
    pageHeader.classList.add('page-header--closed');
    pageHeader.classList.remove('page-header--opened');
    document.body.classList.remove('page-no-scroll');
  }
});

'use strict';

(function () {
  const KEYCODE = {
    esc: 27
  };
  const page = document.querySelector('html');
  const buttonLogin = document.querySelector('.page-header__login');

  const modal = document.querySelector('.login');
  const close = modal.querySelector('.login__close-button');
  const overlay = modal.querySelector('.overlay');
  const form = modal.querySelector('.login-form');
  const userMale = modal.querySelector('input[type="email"]');
  const password = modal.querySelector('input[password]');
  let isStorageSupport = true;
  const storage = '';

  try {
    storage = localStorage.getItem('userMale');
  } catch (err) {
    isStorageSupport = false;
  }

  const openmodal = function () {
    modal.classList.add('login--opened');
    overlay.classList.add('overlay--show');
    page.classList.add('page--disabled');
  };

  const closemodal = function () {
    modal.classList.remove('login--opened');
    overlay.classList.remove('overlay--show');
    page.classList.remove('page--disabled');
  };

  const closeOnOverlay = function (evt) {
    evt.preventDefault();
    closePopup();
    overlay.removeEventListener('click', closeOnOverlay);
  }

  if (buttonLogin) {
    buttonLogin.addEventListener('click', function (evt) {
      evt.preventDefault();
      openmodal();

      if (storage) {
        userMale.value = storage;
        password.focus();
      } else {
        userMale.focus();
      }
      overlay.addEventListener('click', closeOnOverlay);
    });
  }

  if (close) {
    close.addEventListener('click', function (evt) {
      evt.preventDefault();
      closemodal();
    });
  }

  if (form) {
    form.addEventListener('submit', () => {
      if (isStorageSupport) {
        if (userMale.value) {
          localStorage.setItem('userMale', userMale.value);
        }

      }
    });
  }
  if (window) {
    window.addEventListener('keydown', function (evt) {
      if (evt.keyCode === KEYCODE.esc) {
        evt.preventDefault();
        if (modal.classList.contains('login--opened')) {
          closemodal();
        }
      }
    });
  }

  if (modal) {
    modal.addEventListener('click', function (evt) {
      if (evt.target === modal) {
        closemodal();
      }
    });
  }
})();

const swiper = document.querySelector('.swiper-container');
const nextEl = document.querySelector('.swiper-button-next');
const prevEl = document.querySelector('.swiper-button-prev');

function initSwiper(swiper) {
  return new Swiper(swiper, {
    speed: 700,
    direction: 'horizontal',
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    uniqueNavElements: true,
    spaceBetween: 30,

    breakpoints: {
      0: {
        grabCursor: true,
        slidesPerView: 2,
        slidesPerGroup: 2,
        simulateTouch: true,
        pagination: {
          type: 'fraction',
          renderFraction: function (currentClass, totalClass, index, total) {
            return `<span class='swiper-pagination-bullet ${currentClass}'>${index}
                    </span> <span> of </span> <span class='swiper-pagination-bullet ${totalClass}'> ${total}</span>`;
          },
        },
      },

      768: {
        grabCursor: true,
        slidesPerView: 2,
        slidesPerGroup: 2,
        simulateTouch: true,
        pagination: {
          type: 'bullets',
          renderBullet: function (index) {
            return `<span class='swiper-pagination-bullet'>${
                  index + 1
                }</span>`;
          },
        },
      },

      1024: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        simulateTouch: false,
        allowTouchMove: false,
        pagination: {
          type: 'bullets',
          renderBullet: function (index) {
            return `<span class='swiper-pagination-bullet'>${
                  index + 1
                }</span>`;
          },
        },
      },
    },
  });
}

initSwiper(swiper);
