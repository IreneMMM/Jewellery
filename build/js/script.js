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
'use strict';
var pageHeader = document.querySelector('.page-header');
var headerToggle = document.querySelector('.page-header__toggle');

pageHeader.classList.remove('page-header--nojs');

headerToggle.addEventListener('click', function () {
  if (pageHeader.classList.contains('page-header--closed')) {
    pageHeader.classList.remove('page-header--closed');
    pageHeader.classList.add('page-header--opened');
  } else {
    pageHeader.classList.add('page-header--closed');
    pageHeader.classList.remove('page-header--opened');
  }
});
