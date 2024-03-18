$(document).ready(function () {
  // fullpage
  $("#fullpage").fullpage({
    sectionsColor: [
      "#1a9c56",
      "#fffcf5",
      "#fffcf5",
      "#fffcf5",
      "#1a9c56",
      "#DB7220",
    ],
    anchors: ["sec1", "sec2", "sec3", "sec4", "sec5", "sec6"],
    menu: "#menu",
    scrollingSpeed: 1000,
    onLeave: function (origin, destination, direction) {
      $("#fullpage").on("scroll touchmove mousewheel", function (event) {
        event.preventDefault();
        event.stopPropagation();
        return false;
      });
      if (swiper) {
        swiper.mousewheel.disable();
      }
      if (swiper2) {
        swiper2.mousewheel.disable();
      }
    },
    afterLoad: function (anchorLink, index) {
      $("#fullpage").off("scroll mousewheel");
      if (
        !$(".fp-completely .mySwiper").length > 0 ||
        !$(".fp-completely .mySwiper2").length > 0
      )
        $("#fullpage").off("touchmove");
      if (swiper) {
        swiper.mousewheel.enable();
      }
      if (swiper2) {
        swiper2.mousewheel.enable();
      }
    },
  });
  $(".gif a").click(function (e) {
    e.preventDefault();
    $(this).find("img").attr("src", "images/cat_ani.gif");
    $(".sec3 .con_box .timeline .img_gsap img").addClass("on");
    $(".sec3 .con_box .timeline .img_gsap .line").addClass("on");
  });
  // swiper
  var length = $(".sec4 .swiper-slide").length;
  var length1 = $(".sec5 .swiper-slide").length;

  var swiper = new Swiper(".mySwiper", {
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
        if (this.activeIndex != 0 && idx != length)
          $.fn.fullpage.setAllowScrolling(false);
        if (length == 2 && idx == 0) $.fn.fullpage.setAllowScrolling(false);
      },
      slideChangeTransitionEnd: function () {
        var idx = this.activeIndex;
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

  var swiper2 = new Swiper(".mySwiper2", {
    direction: "vertical",
    slidesPerView: 1,
    mousewheel: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    mousewheel: true,
    on: {
      slideChange: function () {
        var idx = this.activeIndex;
        if (this.activeIndex != 0 && idx != length1)
          $.fn.fullpage.setAllowScrolling(false);
        if (length1 == 2 && idx == 0) $.fn.fullpage.setAllowScrolling(false);
      },
      slideChangeTransitionEnd: function () {
        var idx = this.activeIndex;
        if (idx == 0 || idx >= length1 - 1)
          $.fn.fullpage.setAllowScrolling(true);
      },
      touchMove: function (e) {
        var startY = e.touches.startY;
        setTimeout(function () {
          if (startY > e.touches.currentY) swiper2.slideNext();
          else swiper2.slidePrev();
        }, 100);
      },
    },
  });
});
