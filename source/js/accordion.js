'use strict';

(function () {
  var faqList = document.querySelector('.faq__list');
  var faqItem  = faqList.querySelectorAll('.faq__item');
  faqList.classList.remove('faq__list--nojs');

  faqItem.forEach(function (item) {
    item.addEventListener('click', function (evt) {
      evt.preventDefault();
      item.classList.toggle('faq__item--opened');
      item.blur();
    });
  });
})();