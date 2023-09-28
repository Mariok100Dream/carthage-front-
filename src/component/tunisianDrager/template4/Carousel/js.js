export const jsCarouselType4 = `
(function ($) {

 

    $(".home-sliderCarouselType4").owlCarousel({
      animateOut: "animate__animated animate__slideOutDown",
      animateIn: "animate__animated animate__slideInDown",
      items: 1,
      loop: true,
      autoplay: false,
      dots: false,
      nav: true,
      navText: [
        "<i class='fa fa-arrow-left'></i>",
        "<i class='fa fa-arrow-right'></i>",
      ],
      autoHeight: true,
      autoplaySpeed: 800,
      mouseDrag: false,
      autoplayHoverPause: true,
      responsive: {
        0: { items: 1 },
        576: { items: 1 },
        768: { items: 1 },
        1200: { items: 1 },
      },
    });
  
  
  })(jQuery);
  
  
`