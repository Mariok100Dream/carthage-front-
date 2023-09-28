export const js_navbartype5 = `

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
						jQuery('.in-header-sectionNavbarType5').addClass('sticky-on')
					} else {
						jQuery('.in-header-sectionNavbarType5').removeClass('sticky-on')
					}
				});
				jQuery(document).ready(function (o) {
					0 < o(".navSidebar-buttonNavbarType5").length &&
					o(".navSidebar-buttonNavbarType5").on("click", function (e) {
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
				$('.open_mobile_menuNavbarType5').on("click", function() {
					$('.mobile_menuNavbarType5_wrap').toggleClass("mobile_menuNavbarType5_on");
				});
				$('.open_mobile_menuNavbarType5').on('click', function () {
					$('body').toggleClass('mobile_menuNavbarType5_overlay_on');
				});
				if($('.mobile_menuNavbarType5 li.dropdownNavbarType5 ul').length){
					$('.mobile_menuNavbarType5 li.dropdownNavbarType5').append('<div class="dropdownNavbarType5-btn"><span class="fa fa-arrow-right"></span></div>');
					$('.mobile_menuNavbarType5 li.dropdownNavbarType5 .dropdownNavbarType5-btn').on('click', function() {
						$(this).prev('ul').slideToggle(500);
					});
				}
				$(".dropdownNavbarType5-btn").on("click", function () {
					$(this).toggleClass("toggle-open");
				});
			},
		
		
	
	}
}
jQuery(document).ready(function (){
	Insurin.init();
});

})();

`