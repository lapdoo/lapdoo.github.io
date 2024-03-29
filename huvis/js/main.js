$("#fullpage").fullpage({
  sectionsColor: [
    "#1bbc9b",
    "#4BBFC3",
    "#7BAABE",
    "#ccc",
    "#ccddff",
    "#fd0",
    "#f00",
  ],
  anchors: [
    "firstPage",
    "secondPage",
    "3rdPage",
    "4thpage",
    "5thpage",
    "6thpage",
    "7thpage",
  ],
  menu: "#menu",
  scrollingSpeed: 1000,

  // 마지막 슬라이드 도달시 콜백
  afterLoad: function (anchorLink, index) {
    var totalSections = $("#fullpage").find(".section").length;
    if (index === totalSections) {
      // 여기에 마지막 페이지에 도달했을 때 실행할 코드를 넣어주세요.
      console.log("마지막 페이지에 도달했습니다.");
      $("#menu").css({ display: "none" });
    } else {
      $("#menu").css({ display: "block" });
    }
  },
});

var swiper = new Swiper(".mySwiper", {
  effect: "fade",
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  on: {
    slideChange: function () {
      let i = this.activeIndex;
      $(".visual .mySwiper .swiper-slide img").removeClass("on");
      $(".visual .mySwiper .swiper-slide").eq(i).find("img").addClass("on");
      $(".txtBox .inner").removeClass("on");
      $(".txtBox .inner").eq(i).addClass("on");
    },
  },
});
