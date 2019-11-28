$(document).ready(function(){


	// mobile toggles

		var init = {

		hideNav: function() {
			if($('.nav').length>0) {
				$('.nav').removeClass('show');
			}
		},

		hideAccount: function() {
			if($('.account').length>0) {
				$('.account').removeClass('show');
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
		

		$('.account').toggleClass('show');
	});


	$('.menu-toggle').click(function(e) {
		e.preventDefault();
		e.stopPropagation();

		init.hideDropdown();
		init.hideAccount();
		
		$('.nav').toggleClass('show');

	});

	

	// mobile product slide menu

	$('.open-filter').click(function(e) {
		$('.slide-right').addClass('width');
		$('.fade-out').addClass('in');
		$('.overlay').fadeIn();
		
	});


	$('.open-categories').click(function(e) {
		$('.slide-left').addClass('width');
		$('.fade-out').addClass('in');
		$('.overlay').fadeIn();
		
	});


	$('.menu-close').click(function(e) {
		$('.slide-menu').removeClass('width');
		$('.fade-out').stop().removeClass('in');
		$('.overlay').fadeOut();
		
		
	});


	// dropdown menu

	$('.blog-dropdown-toggle').click(function(e) {
		$('.blog-dropdown-menu').slideToggle("slow");
	});


	


            
});