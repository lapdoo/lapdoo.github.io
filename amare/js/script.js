var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 1,
  spaceBetween: 20,
  effect: "fade",
  loop: true,
  autoplay: {
    delay: 5000,
    pauseOnMouseEnter: true,
  },
});
var swiper2 = new Swiper(".mySwiper2", {
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  slidesPerView: 1,
  spaceBetween: 20,
  effect: "fade",
  loop: true,
  autoplay: {
    delay: 6000,
    pauseOnMouseEnter: true,
  },
  on: {
    slideChange: function () {
      let i = this.activeIndex;
      console.log(i);
      $(".innerWrap .inner").eq(i).find(".rightImg").addClass("on");
    },
  },
});
var swiper3 = new Swiper(".mySwiper3", {
  // If we need pagination
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 1,
  spaceBetween: 20,
  effect: "fade",
  loop: true,
  autoplay: {
    delay: 5000,
    pauseOnMouseEnter: true,
  },
});
