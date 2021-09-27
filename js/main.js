$(document).ready(function () {
  $(".slider").slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 3,
    dots: true,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          arrows: false,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          prevArrow: "<div class='slider__arrow slider__arrow--left'></div>",
          nextArrow: "<div class='slider__arrow slider__arrow--right'></div>",
        },
      },
      {
        breakpoint: 280,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          prevArrow: "<div class='slider__arrow slider__arrow--left'></div>",
          nextArrow: "<div class='slider__arrow slider__arrow--right'></div>",
        },
      },
    ],
  });
});
