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
