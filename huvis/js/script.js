let gnb = document.querySelectorAll(".menu>li");
let gnba = document.querySelectorAll(".menu>li>a");
let sub = document.querySelectorAll(".sub");
function menu_in() {
  document.querySelector("header").classList.add("on");
  gnba.forEach(function (value, index) {
    value.classList.add("on");
  });
  document.querySelector(".logo img").src = "images/logo01_1_on.png";

  sub.forEach(function (value, index) {
    value.classList.add("on");
  });
  document.querySelector(".info").classList.add("on");
}
function menu_out() {
  document.querySelector("header").classList.remove("on");
  gnba.forEach(function (value, index) {
    value.classList.remove("on");
  });
  document.querySelector(".logo img").src = "images/logo01_1.png";

  sub.forEach(function (value, index) {
    value.classList.remove("on");
  });
  document.querySelector(".info").classList.remove("on");
}
gnb.forEach(function (value, index) {
  value.onmouseover = function () {
    menu_in();
  };
  value.onmouseleave = function () {
    menu_out();
  };
  document.querySelector(".info").onmouseenter = menu_in;
  document.querySelector(".info").onmouseleave = menu_out;
});

$(document).ready(function () {
  // fullpage
  $("#fullpage").fullpage({
    sectionsColor: ["#1A9C56", "#FFFCF5", "#7BAABE"],
    anchors: ["sec1", "sec2", "sec3", "sec4", "sec5", "sec6"],
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
  var swiper = new Swiper(".sec1 .mySwiper", {
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
      clickable: true,
    },
    // on: {
    //   slideChange: function () {
    //     let i = this.activeIndex;
    //     console.log(i);
    //     $(".innerWrap .inner p").removeClass("on");
    //     $(".innerWrap .inner").eq(i).find("p").addClass("on");
    //   },
    // },
  });
});

// $(document).ready(function () {
//   $(".center").slick({
//     centerMode: true,
//     centerPadding: "60px",
//     slidesToShow: 3,
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           arrows: false,
//           centerMode: true,
//           centerPadding: "40px",
//           slidesToShow: 3,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           arrows: false,
//           centerMode: true,
//           centerPadding: "40px",
//           slidesToShow: 1,
//         },
//       },
//     ],
//   });
// });
