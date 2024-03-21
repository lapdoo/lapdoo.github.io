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
