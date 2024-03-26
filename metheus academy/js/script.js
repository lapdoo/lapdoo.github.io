$(document).scroll(function (e) {
  var scrollAmount = $(window).scrollTop();
  var documentHeight = $(document).height();
  var windowHeight = $(window).height();
  var scrollPercent = (scrollAmount / (documentHeight - windowHeight)) * 100;
  var roundScroll = Math.round(scrollPercent);

  $(".progress-bar").css("width", scrollPercent + "%");
  $(".percent").text(roundScroll);
});

$(window).on("scroll", function () {
  if ($(window).scrollTop()) {
    $(".head").addClass("active");
  } else {
    $(".head").removeClass("active");
  }
});

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
    clickable: true,
  },
});

$(window).on("load", function () {
  setFlowBanner();
});

function setFlowBanner() {
  const $wrap = $(".flow_banner");
  const $list = $(".flow_banner .list");
  let wrapWidth = ""; //$wrap의 가로 크기
  let listWidth = ""; //$list의 가로 크기
  const speed = 50; //1초에 몇픽셀 이동하는지 설정

  //리스트 복제
  let $clone = $list.clone();
  $wrap.append($clone);
  flowBannerAct();

  //반응형 :: 디바이스가 변경 될 때마다 배너 롤링 초기화
  let oldWChk =
    window.innerWidth > 1279 ? "pc" : window.innerWidth > 767 ? "ta" : "mo";
  $(window).on("resize", function () {
    let newWChk =
      window.innerWidth > 1279 ? "pc" : window.innerWidth > 767 ? "ta" : "mo";
    if (newWChk != oldWChk) {
      oldWChk = newWChk;
      flowBannerAct();
    }
  });

  //배너 실행 함수
  function flowBannerAct() {
    //배너 롤링 초기화
    if (wrapWidth != "") {
      $wrap.find(".list").css({
        animation: "none",
      });
      $wrap.find(".list").slice(2).remove();
    }
    wrapWidth = $wrap.width();
    listWidth = $list.width();

    //무한 반복을 위해 리스트를 복제 후 배너에 추가
    if (listWidth < wrapWidth) {
      const listCount = Math.ceil((wrapWidth * 2) / listWidth);
      for (let i = 2; i < listCount; i++) {
        $clone = $clone.clone();
        $wrap.append($clone);
      }
    }
    $wrap.find(".list").css({
      animation: `${listWidth / speed}s linear infinite flowRolling`,
    });
  }
}

var swiper2 = new Swiper(".mySwiper2", {
  slidesPerView: 1,
  spaceBetween: 20,
  effect: "fade",
  loop: true,
  autoplay: {
    delay: 3000,
    pauseOnMouseEnter: true,
  },
});

$(".class_btn p").click(function () {
  let i = $(this).index();
  $(".class_btn p span").css("backgroundColor", "#f3f3f3");
  $(this).find("span").css("backgroundColor", "#000");
  $(".class_btn_show ul").css("display", "none");
  $(".class_btn_show ul").eq(i).css("display", "block");
});

$(".Topmove").click(function () {
  $("html, body").animate({ scrollTop: 0 }, 400);
  return false;
});

let Tani = gsap.timeline();

Tani.fromTo(
  ".up",
  {
    y: -200,
    stagger: 1,
  },
  {
    y: 0,
    stagger: 1,
  },
  "same"
)
  .fromTo(
    ".down",
    {
      y: 200,
      stagger: 1,
    },
    {
      y: 0,
      stagger: 1,
    },
    "same"
  )
  .from(".R_line", {
    y: -200,
    height: 600,
    stagger: 2,
  });
ScrollTrigger.create({
  animation: Tani,
  trigger: ".head6",
  start: "top 30%",
  end: "60% 50%",
  scrub: 2,
  markers: true,
  // pin: true,
});
