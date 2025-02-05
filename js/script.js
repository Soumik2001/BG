// Slider 1

var swiper = new Swiper(".mySwiper1", {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: false,
  speed: 2000,
  autoplay: {
    delay: 3000,
    pauseOnMouseEnter: true,
  },
  navigation: {
    nextEl: ".mainslider .swiper-button-next",
    prevEl: ".mainslider .swiper-button-prev",
  },
});

// Slider 2

var swiper = new Swiper(".mySwiper6", {
  speed: 2000,
  spaceBetween: 0,

  navigation: {
    nextEl: ".servicearrow .swiper-button-next",
    prevEl: ".servicearrow .swiper-button-prev",
  },
});

var swiper = new Swiper(".mySwiper3", {
  speed: 2000,
  spaceBetween: 0,
  navigation: {
    nextEl: ".sarrow .swiper-button-next",
    prevEl: ".sarrow .swiper-button-prev",
  },
});

var swiper = new Swiper(".mySwiper4", {
  speed: 2000,
  spaceBetween: 0,
  navigation: {
    nextEl: ".apprarrow .swiper-button-next",
    prevEl: ".apprarrow .swiper-button-prev",
  },
});

var swiper = new Swiper(".mySwiper5", {
  speed: 2000,
  spaceBetween: 0,

  navigation: {
    nextEl: ".blogarrow .swiper-button-next",
    prevEl: ".blogarrow .swiper-button-prev",
  },
});

var swiper = new Swiper(".mySwiper7", {
  speed: 2000,
  spaceBetween: 0,

  navigation: {
    nextEl: ".barrow .swiper-button-next",
    prevEl: ".barrow .swiper-button-prev",
  },
});
var swiper = new Swiper(".mySwiper8", {
  speed: 2000,
  spaceBetween: 0,

  navigation: {
    nextEl: ".tarrow .swiper-button-next",
    prevEl: ".tarrow .swiper-button-prev",
  },
});
var swiper = new Swiper(".mySwiper9", {
  speed: 2000,
  spaceBetween: 0,

  navigation: {
    nextEl: ".teamarrow .swiper-button-next",
    prevEl: ".teamarrow .swiper-button-prev",
  },
});

$(".nav-link").on("click", function () {
  $(".navbar-collapse").collapse("hide");
});
