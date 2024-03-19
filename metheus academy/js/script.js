var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  effect: "fade",
  loop: true,
  autoplay: {
    delay: 5000,
    pauseOnMouseEnter: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});
