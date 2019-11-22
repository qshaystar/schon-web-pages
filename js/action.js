$(document).ready(function(){

	$('.user-toggle').click(function(e) {
		e.preventDefault();
		e.stopPropagation();

		if($('.nav').length>0) {
			$('.nav').slideUp().addClass('.account');
		}
		
		
		$('.account').slideToggle("slow");
	});

	$('.menu-toggle').click(function(e) {
		e.preventDefault();
		e.stopPropagation();

		if($('.account').length>0) {
			$('.account').slideUp().addClass('.nav');
		}
		
		$('.nav').slideToggle("slow");
	});
});