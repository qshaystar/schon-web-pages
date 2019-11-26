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

	 $('.slider').slick({
        dots: true,
        arrows: true,
	  	infinite: false,
	  	speed: 1000,
	  	slidesToShow: 2,
	  	slidesToScroll: 2,
	  	// autoplay: true,

	  	responsive: [
	  	   {
	  	     breakpoint: 420,
	  	     settings: {
	  	       slidesToShow: 1,
	  	       slidesToScroll: 1,
	  	       infinite: true,
	  	       dots: true,
	  	       arrows: false,
	  	       // autoplay: true,
	  	     }
	  	   }
	  	]   
    });
            
});