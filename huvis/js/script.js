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
  value.onmouseenter = function () {
    menu_in();
  };
  value.onmouseleave = function () {
    menu_out();
  };
});

$(document).ready(function () {
  $(".dropsub").hide();
  $("#gnb a").mouseover(function () {
    $(".dropsub").slideDown();
  });
  $("#gnb a").mouseleave(function () {
    $(".dropsub").hide();
  });
});

$(document).ready(function () {
  // fullpage
  $("#fullpage").fullpage({
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
    spaceBetween: 0,
    effect: "fade",
    loop: true,
    autoplay: {
      delay: 5000,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    on: {
      slideChange: function () {
        let i = this.activeIndex;
        $(".main_banner .mySwiper .swiper-slide img").removeClass("on");
        $(".main_banner .mySwiper .swiper-slide")
          .eq(i)
          .find("img")
          .addClass("on");
        $(".aniBox .sec1_Txtbox").removeClass("on");
        $(".aniBox .sec1_Txtbox").eq(i).addClass("on");
      },
    },
  });
});

$(document).ready(function () {
  $(".center").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    spaceBetween: 20,
  });
});

$(document).ready(function () {
  $(".ft_hide").hide();
  $("ft_drop li").mouseover(function () {
    $(".ft_hide").slideDown();
  });
  $("ft_drop li").mouseleave(function () {
    $(".ft_hide").hide();
  });
});

$(".back").click(function () {
  $(".sec1").animate({ scrollTop: 0 }, 400);
  return false;
});
