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
var MainSwiper = new Swiper(".left_con .mySwiper2", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
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
});

gsap.to(".txt_img", {
  rotate: 70,
  scrollTrigger: {
    trigger: "#Scon",
    scrub: true,
    start: "-40%",
    end: "100% 80%",
  },
});

let txt = gsap.timeline();

txt
  .to(
    ".bot_txt p:first-of-type",
    {
      y: 0,
      opacity: 1,
    },
    "same"
  )
  .to(
    ".bot_txt p:nth-of-type(2)",
    {
      y: 0,
      opacity: 1,
    },
    "same"
  )
  .to(
    ".bot_txt p:nth-of-type(3)",
    {
      y: 0,
      opacity: 1,
      duration: 1,
    },
    "same"
  )
  .to(
    ".bot_txt p:last-of-type",
    {
      y: 0,
      opacity: 1,
    },
    "same"
  );
ScrollTrigger.create({
  animation: txt,
  trigger: ".bot_con",
  scrub: true,
  start: "-70%",
  end: "50% 80%",
});

var SubSwiper = new Swiper(".right_con .mySwiper2", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
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
      $(".innerWrap .inner p").removeClass("on");
      $(".innerWrap .inner").eq(i).find("p").addClass("on");
    },
  },
});

MainSwiper.controller.control = SubSwiper;
SubSwiper.controller.control = MainSwiper;

var swiper3 = new Swiper(".BottomImg .mySwiper3", {
  // If we need pagination
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
  slidesPerView: 1,
  spaceBetween: 20,
  effect: "fade",
  loop: true,
  autoplay: {
    delay: 5000,
    pauseOnMouseEnter: true,
  },
  on: {
    slideChange: function () {
      let t = this.activeIndex;
      console.log(t);
      $(".bot_con .in_txt div").removeClass("on");
      $(".bot_con .in_txt").eq(t).find("div").addClass("on");
    },
  },
});
