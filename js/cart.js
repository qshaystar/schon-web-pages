$(document).ready(function(){



	var panel = {

		showMessage: function() {
			$('.addToCart-msg').stop().fadeIn('slow').delay(2000).fadeOut(500);
		},

		totalAmount: function() {
			var total = 0;
			var result = 0;
			
			$('.cart-items').find('li').each(function() {

				var unitPrice = $(this).data('price');
				var qty = $(this).data('qty');
				var price = unitPrice * qty;

				total = price + total;
				result = total.toFixed(2).replace('.',',');
				
			}).closest('#cart').find('.cart-total').text(result);
			
		},

		totalQty: function() {
			var totalQty = 0;

			$('.cart-items').find('li').each(function() {

				var qty = $(this).data('qty');

				totalQty = qty + totalQty;
				
			}).closest('#cart').find('.qty').text(totalQty);
		},

		emptyCart: function() {
			if($('.cart-item').length == 0) {
				$('.cart-active').addClass('hide');
				$('.cart-panel .empty-cart').addClass('show');

				$('#cart').find('.qty').text('0');
				$('#cart').find('.cart-total').text('0');
			}
		},

		removeEmptyCart: function() {
			if($('.cart-item').length == 0) {
				$('.cart-active').removeClass('hide');
				$('.cart-panel .empty-cart').removeClass('show');
			}
		},

	}





	// cart-add

	var source = $('#cart-template').html();
	var itemTemplate = Handlebars.compile(source);

	$('.shopping-bag').click(function(e) {
		
		panel.showMessage();
		panel.removeEmptyCart();

		var itemName = $(this).closest('.thumbnail').siblings('.desc').find('.product-name').text();
		var itemPriceData = $(this).closest('.thumbnail').siblings('.desc').find('.price').data('price');
		var itemPrice = itemPriceData.replace('.',',');
		var itemImg = $(this).closest('.thumbnail').find('img').attr('src');

		item = {
			itemName: itemName,
			itemPrice: itemPrice,
			itemPriceData: itemPriceData,
			itemImg: itemImg,
			itemQty: 1,
		}

		var cartItem = itemTemplate(item);
		$('.cart-items').append(cartItem);

		panel.totalAmount();
		panel.totalQty();
	});

	$('.add-to-cart').click(function(e) {
		panel.showMessage();
		panel.removeEmptyCart();

		var itemName = $(this).closest('.product-detail').find('.product-title').text();
		var itemPriceData = $(this).closest('.product-detail').find('.price').data('price');
		var itemPrice = itemPriceData.replace('.',',');
		var itemQty = $(this).closest('.product-detail').find('#qty').val();
		var itemImg = $(this).closest('.product-detail').find('.product-images').eq(0).find('img').attr('src');

		item = {
			itemName: itemName,
			itemPrice: itemPrice,
			itemPriceData: itemPriceData,
			itemImg: itemImg,
			itemQty: itemQty,
		}

		var cartItem = itemTemplate(item);
		$('.cart-items').append(cartItem);

		panel.totalAmount();
		panel.totalQty();


	});

	// cart-delete

	$('.cart-items').on('click', '.remove', function(e) {

		e.stopPropagation();
		$(this).closest('.cart-item').remove();


		panel.totalAmount();
		panel.totalQty();
		panel.emptyCart();
	});



            
});