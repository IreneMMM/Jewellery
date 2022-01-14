const swiper = document.querySelector('.swiper-container');
const nextEl = document.querySelector('.swiper-button-next');
const prevEl = document.querySelector('.swiper-button-prev');

function initSwiper(swiper) {
    /* eslint-disable-next-line */
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
