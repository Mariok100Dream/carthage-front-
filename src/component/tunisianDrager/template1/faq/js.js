export const jsfaqtype1 = `
(function ($) {
 
    $(".accordionfaqtype1")
      .find(".accordionfaqtype1-title")
      .on("click", function () {
        $(this).toggleClass("activefaqtype1");
        $(this).next().slideToggle("fast");
        $(".accordionfaqtype1-content").not($(this).next()).slideUp("fast");
        $(".accordionfaqtype1-title").not($(this)).removeClass("activefaqtype1");
      });
  
    
  })(jQuery);
  
`