export const jsTestomonialType3 = `
$(document).ready(function() {
        
    $('.rs-carouselTestomonialType3').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
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