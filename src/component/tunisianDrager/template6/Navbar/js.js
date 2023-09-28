export const jsnavbartype6 = `

(function() {

	"use strict";

	var Insurin = {
		init: function() {
			this.Basic.init();  
		},

		Basic: {
			init: function() {

			
			
				this.StickyHeader();
				this.MobileMenu();
				
				
				
				
			},
			
			
			StickyHeader: function (){
				jQuery(window).on('scroll', function() {
					if (jQuery(window).scrollTop() > 250) {
						jQuery('.in-header-sectionNavbarType6').addClass('sticky-on')
					} else {
						jQuery('.in-header-sectionNavbarType6').removeClass('sticky-on')
					}
				});
				jQuery(document).ready(function (o) {
					0 < o(".navSidebar-button").length &&
					o(".navSidebar-button").on("click", function (e) {
						e.preventDefault(), e.stopPropagation(), o(".info-group").addClass("isActive");
					}),
					0 < o(".close-side-widget").length &&
					o(".close-side-widget").on("click", function (e) {
						e.preventDefault(), o(".info-group").removeClass("isActive");
					}),
					o(".xs-sidebar-widget").on("click", function (e) {
						e.stopPropagation();
					})
				});
				
			},
			MobileMenu: function (){
				$('.open_mobile_menuNavbarType6NavbarType6').on("click", function() {
					$('.mobile_menuNavbarType6_wrapNavbarType6').toggleClass("mobile_menuNavbarType6_on");
				});
				$('.open_mobile_menuNavbarType6NavbarType6').on('click', function () {
					$('body').toggleClass('mobile_menuNavbarType6_overlayNavbarType6_on');
				});
				if($('.mobile_menuNavbarType6 li.dropdownNavbarType6 ul').length){
					$('.mobile_menuNavbarType6 li.dropdownNavbarType6').append('<div class="dropdownNavbarType6-btn"><span class="fa fa-arrow-right"></span></div>');
					$('.mobile_menuNavbarType6 li.dropdownNavbarType6 .dropdownNavbarType6-btn').on('click', function() {
						$(this).prev('ul').slideToggle(500);
					});
				}
				$(".dropdownNavbarType6-btn").on("click", function () {
					$(this).toggleClass("toggle-open");
				});
			},
			scrollTop: function (){
				$(window).on("scroll", function() {
					if ($(this).scrollTop() > 200) {
						$('.scrollup').fadeIn();
					} else {
						$('.scrollup').fadeOut();
					}
				});

				$('.scrollup').on("click", function()  {
					$("html, body").animate({
						scrollTop: 0
					}, 800);
					return false;
				});
				jQuery('.video_box').magnificPopup({
					disableOn: 200,
					type: 'iframe',
					mainClass: 'mfp-fade',
					removalDelay: 160,
					preloader: false,
					fixedContentPos: false,
				});
				$('.zoom-gallery').magnificPopup({
					delegate: 'a',
					type: 'image',
					closeOnContentClick: false,
					closeBtnInside: false,
					mainClass: 'mfp-with-zoom mfp-img-mobile',
					gallery: {
						enabled: true
					},
					zoom: {
						enabled: true,
						duration: 300, 
						opener: function(element) {
							return element.find('img');
						}
					}
				});
			},
			counterUp: function (){
				$('.counter').counterUp({
					delay: 15,
					time: 1500,
				});
			},
			searchPopUp: function (){
				$('.search-btn').on('click', function() {
					$('.search-body').toggleClass('search-open');
				});
			},
		
		
	}
}
jQuery(document).ready(function (){
	Insurin.init();
});

})();

`