$(document).ready(function(){



	// workspace slider

	 $('.space-carousel').slick({
        dots: true,
        arrows: true,
	  	infinite: false,
	  	speed: 1000,
	  	slidesToShow: 2,
	  	slidesToScroll: 2,
	  	autoplay: true,

	  	responsive: [
	  	   {
	  	     breakpoint: 450,
	  	     settings: {
	  	       slidesToShow: 1,
	  	       slidesToScroll: 1,
	  	       infinite: true,
	  	       dots: false,
	  	       arrows: true,
	  	       autoplay: true,
	  	     }
	  	   }
	  	]   
    });
            
});