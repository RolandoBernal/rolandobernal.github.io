'use strict';

$(document).ready(function() {

		var $artist = $('.artist-section');
		var $showtimes = $('.showtimes-section');
		var $purchase = $('.purchase-section');

	$( ".link-to-showtime" ).on( "click", function() {
	  console.log("You clicked artist");
		$artist.hide();
		$showtimes.show();
		$purchase.hide();
	});


	$( ".link-to-purchase" ).on( "click", function() {
	  console.log("You clicked shotimes");
		$artist.hide();
		$showtimes.hide();
		$purchase.show();
	});

	$( ".link-to-artist" ).on( "click", function() {
	  console.log("You clicked purchase");
		$artist.show();
		$showtimes.hide();
		$purchase.hide();
	});

});
