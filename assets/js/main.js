var debug = false;

function debugMe(v) {
	if(debug) {
		//console.log(v);
	}
}

$(document).ready(function() {

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
	        debugMe('handheld');
	    }
	});
	jRes.addFunc({
	    breakpoint: ['desktop','laptop','tablet'],
	    enter: function() {
	        debugMe('desktop');
	    }
	});

});