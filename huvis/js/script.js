$(document).ready(function () {
  // fullpage
  $("#fullpage").fullpage({
    sectionsColor: ["#1A9C56", "#FFFCF5", "#7BAABE"],
    anchors: ["sec1", "sec2", "sec3"],
    menu: "#menu",
    scrollingSpeed: 1000,
    onLeave: function (origin, destination, direction) {
      // 빠른전환으로 이벤트중복시 fullpage와 swiper전환시점 분리막기
      $("#fullpage").on("scroll touchmove mousewheel", function (event) {
        event.preventDefault();
        event.stopPropagation();
        return false;
      });
      swiper.mousewheel.disable();
    },
    afterLoad: function (anchorLink, index) {
      // 전환이 끝난후 이벤트풀기
      $("#fullpage").off("scroll mousewheel");
      if (!$(".fp-completely .swiper-wrapper").length > 0)
        $("#fullpage").off("touchmove"); // 모바일분기
      if (swiper) swiper.mousewheel.enable();
      // 슬라이드 섹션을 벗어나면 휠풀어주기
    },
  });

  // swiper
  var length = $(".sec2 .swiper-slide").length;
  var swiper = new Swiper(".swiper-container", {
    slidesPerView: 1,
    spaceBetween: 0,
    freeMode: false,
    speed: 1000,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    mousewheel: true,
    on: {
      slideChange: function () {
        var idx = this.activeIndex;
        // 처음과 마지막 슬라이드가 아닐경우 fullpage전환 막기
        if (this.activeIndex != 0 && idx != length)
          $.fn.fullpage.setAllowScrolling(false);
        if (length == 2 && idx == 0) $.fn.fullpage.setAllowScrolling(false); //슬라이드가 2개밖에 없을때
      },
      slideChangeTransitionEnd: function () {
        var idx = this.activeIndex;
        // 처음과 마지막 슬라이드일 경우 fullpage전환 풀기
        if (idx == 0 || idx >= length - 1)
          $.fn.fullpage.setAllowScrolling(true);
      },
      touchMove: function (e) {
        var startY = e.touches.startY;
        setTimeout(function () {
          if (startY > e.touches.currentY) swiper.slideNext();
          else swiper.slidePrev();
        }, 100);
      },
    },
  });
});

// let gnb = document.querySelectorAll(".menu>li");
// let gnba = document.querySelectorAll(".menu>li>a");
// let sub = document.querySelectorAll(".sub");
// function menu_in() {
//   document.querySelector("header").classList.add("on");
//   gnba.forEach(function (value, index) {
//     value.classList.add("on");
//   });
//   document.querySelector(".logo img").src = "images/logo01_1_on.png";

//   sub.forEach(function (value, index) {
//     value.classList.add("on");
//   });
//   document.querySelector(".info").classList.add("on");
// }
// function menu_out() {
//   document.querySelector("header").classList.remove("on");
//   gnba.forEach(function (value, index) {
//     value.classList.remove("on");
//   });
//   document.querySelector(".logo img").src = "images/logo01_1.png";

//   sub.forEach(function (value, index) {
//     value.classList.remove("on");
//   });
//   document.querySelector(".info").classList.remove("on");
// }
// gnb.forEach(function (value, index) {
//   value.onmouseover = function () {
//     menu_in();
//   };
//   value.onmouseleave = function () {
//     menu_out();
//   };
//   document.querySelector(".info").onmouseenter = menu_in;
//   document.querySelector(".info").onmouseleave = menu_out;
// });

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  effect: "fade",
  autoplay: {
    delay: 6000,
    pauseOnMouseEnter: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
