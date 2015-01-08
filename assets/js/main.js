// @codekit-prepend "vendor/jRespond.js"
// @codekit-prepend "vendor/jquery.magnific-popup.js"
// @codekit-prepend "vendor/owl.carousel.js"

(function(contra, $, undefined) {

	var mediaLinks = function() {
        var $jsMediaLink = $('.js_mediaLink');
        if ($jsMediaLink.length) {
            $jsMediaLink.magnificPopup({
                type: 'iframe'
            });
        }
    };
	var jRespondInit = function() {

		var jRes = jRespond([
		    {
		        label: 'handheld',
		        enter: 0,
		        exit: 767
		    },{
		        label: 'tablet',
		        enter: 768,
		        exit: 979
		    },{
		        label: 'laptop',
		        enter: 980,
		        exit: 1199
		    },{
		        label: 'desktop',
		        enter: 1200,
		        exit: 10000
		    }
		]);

		jRes.addFunc({
		    breakpoint: 'handheld',
		    enter: function() {
		        
		    }
		});
		jRes.addFunc({
		    breakpoint: ['desktop','laptop','tablet'],
		    enter: function() {
		        
		    }
		});

	};

	contra.init = function() {
        mediaLinks();
        jRespondInit();
    };

})(window.contra = window.contra || {}, jQuery);

jQuery(document).ready(function () {
    window.contra.init();
});