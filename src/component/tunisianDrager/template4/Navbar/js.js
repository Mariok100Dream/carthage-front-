export const js_navbar_type4 = `

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
						jQuery('.in-header-NavbarType3-section').addClass('sticky-on')
					} else {
						jQuery('.in-header-NavbarType3-section').removeClass('sticky-on')
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
				$('.open_mobile_menuNavbarType4').on("click", function() {
					$('.mobile_menuNavbarType4_wrap').toggleClass("mobile_menuNavbarType4_on");
				});
				$('.open_mobile_menuNavbarType4').on('click', function () {
					$('body').toggleClass('mobile_menuNavbarType4_overlay_on');
				});
				if($('.mobile_menuNavbarType4 li.dropdownNavbarType4 ul').length){
					$('.mobile_menuNavbarType4 li.dropdownNavbarType4').append('<div class="dropdownNavbarType4-btn"><span class="fa fa-arrow-right"></span></div>');
					$('.mobile_menuNavbarType4 li.dropdownNavbarType4 .dropdownNavbarType4-btn').on('click', function() {
						$(this).prev('ul').slideToggle(500);
					});
				}
				$(".dropdownNavbarType4-btn").on("click", function () {
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