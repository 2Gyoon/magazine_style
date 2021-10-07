const swiper = new Swiper('.swiper-container', {
  navigation: {
    nextEl: '.btn--next',
    prevEl: '.btn--prev'
  },
  allowTouchMove: false


});

const prev = document.querySelector('.btn--prev');
const next = document.querySelector('.btn--next');
const last = document.querySelector('.swiper-slide:nth-child(3)');
const first = document.querySelector('.swiper-slide:nth-child(1)');

next.addEventListener('click', function () {
  if (prev.style.display == "none") {
    prev.style.display = "flex"
  }
  if (last.classList.contains('swiper-slide-active') === true) {
    next.style.display = "none"
  }
})
prev.addEventListener('click', function () {
  if (next.style.display == "none") {
    next.style.display = "flex"
  }
  if (first.classList.contains('swiper-slide-active') === true) {
    prev.style.display = "none"
  }
})