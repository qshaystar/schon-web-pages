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


	// mobile product slide menu

	$('.open-filter').click(function(e) {
		$('.slide-menu').addClass('width');
		$('body').css('background-color', 'rgba(0,0,0,0.4)');
		$('.gray-bg').css('background-color', 'rgba(0,0,0,0.2)');
	});

	$('.menu-close').click(function(e) {
		$('.slide-menu').removeClass('width');
		$('body').css('background-color', 'white');
		$('.gray-bg').css('background-color', '#f6f6f6');
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