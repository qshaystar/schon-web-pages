$(document).ready(function(){

	// popup

	$('.popup-modal').fadeIn();

	$('.popup-modal .cancel').click(function(e) {
		$('.popup-modal').fadeOut();
	});


	// mobile toggles

		var init = {

		hideNav: function() {
			if($('.nav').length>0) {
				$('.nav').removeClass('show');
			}
		},

		hideAccount: function() {
			if($('.user-login').length>0) {
				$('.user-login').removeClass('show');
			}
		},

		hideDropdown: function() {
			if($('.custom-dropdown-menu').length>0) {
				$('.custom-dropdown-menu').removeClass('show');
			}
		},

		hideCategory: function() {
			if(('.product-nav-links').length>0) {
				$('.product-nav-links').removeClass('show');
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
		

		$('.user-login').toggleClass('show');
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
		init.hideCategory();
		
		$(this).find('.custom-dropdown-menu').toggleClass('show');
		
	});


	$('.category-toggle').click(function(e) {
		e.stopPropagation();

		$(this).siblings('.product-nav-links').toggleClass('show');
	});



	// search panel

	$('.search-toggle a').click(function(e) {

		$('.search-panel').fadeToggle().find('.form-control').focus();
		$('body').toggleClass('scroll-lock');
	});

	

	// search panel-close

	$('.panel-close').click(function(e) {
		e.stopPropagation();

		$('.search-panel').fadeOut();
		$('body').removeClass('scroll-lock');
		
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


	// product list arrangement

	$('.list-arrange').click(function(e) {
		$('.product').removeClass('col-md-6 col-lg-4').addClass('list-arr');
	});

	$('.grid-arrange').click(function(e) {
		$('.product').removeClass('list-arr').addClass('col-md-6 col-lg-4');
	
	});

	// sort btn dropdown

	$('.sort-btn').click(function(e) {
		$('.sort-options').slideToggle();
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


	// shopping cart delete

	var cartPage = {
		empty: function() {
			if($('.order-item').length == 0) {
				$('.order-detail .empty-cart').addClass('show');
				$('.order-head').addClass('hide');

				$('.charge-detail .charge span').text(0);
		 		$('.charge-detail .total-charge span').text(0);
			}
		},

		subtotal: function() {
			var subtotal = 0;

			
				$('.order-content').find('li').each(function() {

					var totalPrice = +$(this).find('.total-price span').text().replace(',', '.');
					
					
					subtotal = totalPrice + subtotal;
					result = subtotal.toFixed(2).replace('.', ',');
					
				});


			$('.charge-detail .charge span').text(result);
		 	$('.charge-detail .total-charge span').text(result);
		}
	}


	$('.delete').click(function(e) {

		$(this).closest('li').remove();

		cartPage.subtotal();
		cartPage.empty();
	});

	$('.order-item #qty').blur(function(e) {
		var qty = $(this).val();
		var price = $(this).closest('.order-item').data('price');

		total = qty * price;
		result = total.toFixed(2).replace('.', ',');

		$(this).closest('.order-item').attr('data-qty', qty).attr('data-total', total);

		$(this).closest('.order-item').find('.total-price span').text(result);

		cartPage.subtotal();
	});

         
});