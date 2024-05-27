// doc: https://swiperjs.com/swiper-api#parameters

const swiper = new Swiper('.swiper', {
  loop: true,

  pagination: {
    clickable: true,
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const swiper1 = new Swiper('.swiper', {
  loop: true,

  pagination: {
    clickable: true,
    el: '.swiper-pagination',
  },
   
});


