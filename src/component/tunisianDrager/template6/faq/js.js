export const jsfaqtype6 = `
(function($) {

	// FAQ accordionfaqtype6 JS
	$('.accordionfaqtype6').find('.accordionfaqtype6-title').on('click', function(){
		// Adds activefaqtype6 Class
		$(this).toggleClass('activefaqtype6');
		// Expand or Collapse This Panel
		$(this).next().slideToggle('fast');
		// Hide The Other Panels
		$('.accordionfaqtype6-content').not($(this).next()).slideUp('fast');
		// Removes activefaqtype6 Class From Other Titles
		$('.accordionfaqtype6-title').not($(this)).removeClass('activefaqtype6');		
	});




})(jQuery);

`