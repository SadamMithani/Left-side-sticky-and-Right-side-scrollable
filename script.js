jQuery('#ug1.answer').addClass('active');
	jQuery.fn.isInViewport = function() {
        var elementTop = jQuery(this).offset().top;
        var viewportTop = jQuery(window).scrollTop();
        return elementTop <= viewportTop+209;
	};
	
	jQuery(window).scroll(function(){
		jQuery('.answer').each(function(i){
			if(jQuery(this).isInViewport()) {
				jQuery('.question.active').removeClass('active');
				jQuery('.question').eq(i).addClass('active');
			}
		});
	});
    