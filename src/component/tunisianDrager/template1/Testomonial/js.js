export const jsTestomonialType1 = `
$(document).ready(function() {

    $('.as-carouselTestominialType1').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    speed: 400,
    autoplay: true,  
    autoplaySpeed: 5000,
    easing: 'linear',
    fade: false,
    pauseOnHover: true, 
    swipe: true,
    prevArrow: $('.prev'),
       nextArrow: $('.next'),
       responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
    });
    });
`