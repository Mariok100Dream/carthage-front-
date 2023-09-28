export const jsCarouselType5 = `
(function ($) {

        $('.slider-owlCarouselType5').owlCarousel({
            loop:true,
            nav:true,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            smartSpeed: 2500,
            navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
            responsive:{
                0:{
                    items:1
                },
                768:{
                    items:1
                },
                1000:{
                    items:1
                }
            }
        });
    
    
    
    })(jQuery);	
`