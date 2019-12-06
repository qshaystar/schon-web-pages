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
			if($('.custom-dropdown-menu').length>0) {
				$('.custom-dropdown-menu').hide();
			}
		},

		hideCart: function() {
			if($('.cart-panel').length>0) {
				$('.cart-panel').removeClass('show');
			}
		}

	};




	$('.user-toggle').click(function(e) {
		e.preventDefault();
		e.stopPropagation();

		init.hideNav();
		init.hideCart();
		

		$('.account').toggleClass('show');
	});


	$('.menu-toggle').click(function(e) {
		e.preventDefault();
		e.stopPropagation();

		init.hideDropdown();
		init.hideAccount();
		init.hideCart();
		
		$('.nav').toggleClass('show');

	});

	// cart toggle

	$('#cart').click(function(e) {
		e.preventDefault();
		e.stopPropagation();

		init.hideNav();
		init.hideAccount();

		$('.cart-panel').toggleClass('show');
	});

	$('#cart .btn').click(function(e) {
		e.stopPropagation();
	});



	// dropdown menu

	$('.custom-dropdown-toggle').click(function(e) {
	
		$(this).find('.custom-dropdown-menu').slideToggle("slow");
		
	});




	// marked menu

	$('.shopping-bag').click(function(e) {
		$(this).toggleClass('icon-red');
	});

	$('.wishlist').click(function(e) {
		$(this).children('i').toggleClass('icon-heart icon-red');
	});

	$('.eyes-on').click(function(e) {
		$(this).children('i').toggleClass('icon-red');
	});
	
	$('.compare').click(function(e) {
		$(this).children('i').toggleClass('icon-red');
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
		$('.fade-out').removeClass('in');
		$('.overlay').fadeOut();
		
		
	});



	// product detail tabs

	var pages = {

		changeTab: function(index) {
			$('.tab-link').removeClass('active').eq(index).addClass('active');
		},

		changeContent: function(index) {
			$('.intro-content').removeClass('active').eq(index).addClass('active');
		}
	}

	$('.tab-link').click(function(e) {
		var index = $(e.currentTarget).index();

		pages.changeTab(index);
		pages.changeContent(index);

	});
	
	// product detail reviews

	$('.reviews').click(function(e) {
		
		$('html,body').animate({scrollTop:$('.tabs').offset().top}, 800);
		pages.changeTab(2);
		pages.changeContent(2);
	});


            
});