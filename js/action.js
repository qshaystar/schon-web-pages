$(document).ready(function(){


	// mobile toggles

	var init = {

		hideNav: function() {
			if($('.nav').length>0) {
				$('.nav').slideUp();
			}
		},

		hideAccount: function() {
			if($('.account').length>0) {
				$('.account').slideUp();
			}
		},

		hideDropdown: function() {
			if($('.blog-dropdown-menu').length>0) {
				$('.blog-dropdown-menu').hide();
			}
		},

	};

	




	$('.user-toggle').click(function(e) {
		e.preventDefault();
		e.stopPropagation();

		init.hideNav();
		

		$('.account').slideToggle("slow");
	});


	$('.menu-toggle').click(function(e) {
		e.preventDefault();
		e.stopPropagation();

		init.hideDropdown();
		init.hideAccount();
		
		$('.nav').slideToggle("slow");
	});



	// dropdown menu

	$('.blog-dropdown-toggle').click(function(e) {
		$('.blog-dropdown-menu').slideToggle("slow");
	});


	// workspace slider

	 $('.slider').slick({
        dots: true,
        arrows: true,
	  	infinite: false,
	  	speed: 1000,
	  	slidesToShow: 2,
	  	slidesToScroll: 2,
	  	autoplay: true,

	  	responsive: [
	  	   {
	  	     breakpoint: 430,
	  	     settings: {
	  	       slidesToShow: 1,
	  	       slidesToScroll: 1,
	  	       infinite: true,
	  	       dots: true,
	  	       arrows: false,
	  	       autoplay: true,
	  	     }
	  	   }
	  	]   
    });
            
});