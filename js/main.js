"use strict"

//------------------------------------------------------------------------Меню-Бургер

const burgerMenu = document.querySelector('.header__burger');
const menuBody= document.querySelector('.menu');
if(burgerMenu) {
    burgerMenu.addEventListener("click", function (e) {
      document.body.classList.toggle('_lock');
      menuBody.classList.toggle('_active');
    });
}

//------------------------------------------------------------------------Меню-Бургер

//------------------------------------------------------------------------Swiper
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  speed: 2000,
  spaceBetween: 5,
});
//------------------------------------------------------------------------Swiper