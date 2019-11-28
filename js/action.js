$(document).ready(function(){


	// mobile toggles

<<<<<<< HEAD
	

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
=======
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
>>>>>>> master
	});


	// dropdown menu

	$('.blog-dropdown-toggle').click(function(e) {
		$('.blog-dropdown-menu').slideToggle("slow");
	});


	


            
});