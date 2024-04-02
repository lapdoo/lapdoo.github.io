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
      var totalSections = $("#fullpage").find(".section").length;
      console.log(index);
      if (index === 3 || index === 5) {
        $(".menu li a").css({ color: "#000" });
        $("#menu").css({ display: "block" });
        $("#menu li").addClass("on");
        $(".head .logo img").attr("src", "images/logo01_1_on.png");
        $(".line").css("backgroundColor", "rgba(124, 124, 124, 0.534)");
        $(".menu_btn .line").addClass("on");
        $(".info #gnb li a").css({ color: "#000" });
        $(".info #gnb a img").css({ filter: "none" });
        $(".dropsub li a").css({ color: "#000" });
        $(".cart").css({ color: "#000", border: "1px solid #ccc" });
        $(".cart img").css({
          filter:
            "invert(0%) sepia(99%) saturate(16%) hue-rotate(109deg) brightness(0%)contrast(99%)",
        });
        $(".cart").hover(
          function () {
            $(this).css({ color: "#fff" });
            $(this).find("img").css({ filter: "none" });
          },
          function () {
            $(this).css({ color: "#000" });
            $(this).find("img").css({
              filter:
                "invert(0%) sepia(99%) saturate(16%) hue-rotate(109deg) brightness(0%)contrast(99%)",
            });
          }
        );

        $("header .head .main .menu > li").hover(
          function () {
            $("header .head .main .menu > li a").css("color", "#000");
            $(this).find("a").css("color", "#fff");
            $(".head .logo img").attr("src", "images/logo01_1_on.png");
          },
          function () {
            $(".menu li a").css({ color: "#000" });
            $(".head .logo img").attr("src", "images/logo01_1_on.png");
          }
        );
      } else if (index === 7) {
        $("#menu").css({ display: "none" });
        $("header .head .main .menu > li a").css("color", "#000");
        $("header").addClass("on1");
        $(".head .logo img").attr("src", "images/logo01_1_on.png");
        $(".menu_btn .line").removeClass().addClass("on1");
        $(".menu_btn .line").addClass("on");
        $(".info #gnb li a").css({ color: "#000" });
        $(".info #gnb a img").css({ filter: "none" });
        $(".dropsub li a").css({ color: "#000" });
        $(".cart").css({ color: "#000", border: "1px solid #ccc" });
        $(".cart img").css({
          filter:
            "invert(0%) sepia(99%) saturate(16%) hue-rotate(109deg) brightness(0%)contrast(99%)",
        });
        $(".cart").hover(
          function () {
            $(this).css({ color: "#fff" });
            $(this).find("img").css({ filter: "none" });
          },
          function () {
            $(this).css({ color: "#000" });
            $(this).find("img").css({
              filter:
                "invert(0%) sepia(99%) saturate(16%) hue-rotate(109deg) brightness(0%)contrast(99%)",
            });
          }
        );
        $("header .head .main .menu > li").hover(
          function () {
            $("header .head .main .menu > li a").css("color", "#000");
            $(this).find("a").css("color", "#fff");
            $(".head .logo img").attr("src", "images/logo01_1_on.png");
          },
          function () {
            $(".menu li a").css({ color: "#000" });
            $(".head .logo img").attr("src", "images/logo01_1_on.png");
          }
        );
      } else {
        $("header .head .main .menu > li > a").css("color", "#fff");
        $("header").removeClass("on, on1");
        $("#menu").css({ display: "block" });
        $("#menu li").removeClass("on");
        $(".head .logo img").attr("src", "images/logo01_1.png");
        $(".line").css("backgroundColor", "rgba(255, 255, 255, 0.295)");
        $(".menu_btn .line").removeClass("on");
        $(".menu_btn>div").removeClass().addClass("line");
        $(".info #gnb li a").css({ color: "#fff" });
        $(".info #gnb a img").css({
          filter:
            "brightness(0) saturate(100%) invert(100%) sepia(100%) saturate(7%)hue-rotate(129deg) brightness(102%) contrast(104%)",
        });
        $(".dropsub li a").css({ color: "#fff" });
        $(".cart").css({ color: "#fff" });
        $(".cart img").css({
          filter: "none",
        });
        $(".cart").hover(
          function () {
            $(this).css({ color: "#fff" });
            $(this).find("img").css({ filter: "none" });
          },
          function () {
            $(this).css({ color: "#fff" });
            $(this).find("img").css({
              filter: "none",
            });
          }
        );
        $("header .head .main .menu > li").hover(
          function () {
            $("header .head .main .menu > li a").css("color", "#000");
            $(this).find("a").css("color", "#fff");
            $(".head .logo img").attr("src", "images/logo01_1_on.png");
          },
          function () {
            $("header .head .main .menu > li a").css("color", "#fff");
            $(".head .logo img").attr("src", "images/logo01_1.png");
          }
        );
      }
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
    centerMode: true,
    centerPadding: "20px",
    slidesToScroll: 3,
  });
});

$(".ft_drop>li").mouseenter(function () {
  $(this).find(".ft_hide").stop().slideDown(100);
});
$(".ft_drop>li").mouseleave(function () {
  $(this).find(".ft_hide").stop().slideUp(100);
});
// $(document).ready(function () {
//   $(".ft_hide").hide();
//   $(".ft_drop li").mouseenter(function () {
//     $(".ft_hide").slideDown();
//   });
//   $(".ft_drop li").mouseleave(function () {
//     $(".ft_hide").hide();
//   });
// });

$(".back").click(function () {
  $.fn.fullpage.moveTo(1, 1);
  $.fn.fullpage.setScrollingSpeed(700);
});
