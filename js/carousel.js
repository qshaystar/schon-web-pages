$(document).ready(function(){



	// workspace carousel

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
	  	     breakpoint: 480,
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


	// porduct carousel

	 $('.porduct-carousel').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  fade: true,
	  asNavFor: '.carousel-nav'

	});
	$('.carousel-nav').slick({
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  asNavFor: '.porduct-carousel',
	  arrows: true,
	  centerMode: true,
	  focusOnSelect: true,


	  responsive: [
	  	   {
	  	     breakpoint: 480,
	  	     settings: {     
	  	       slidesToShow: 2,       
	  	     }
	  	   }
	  	]   
	});
            
});