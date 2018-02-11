$(document).ready(function(){
	$('#popup').hide();
	$('#notify').click(function(){
		$('#popup').slideDown("slow");
		$('#wrapper').fadeTo("slow", 0.09);
		$('form')[0].reset();
	})
	$('.close').click(function(){
		$('#popup').slideUp("slow");
		$('#wrapper').fadeTo("slow", 1);
	})
});

// $("#id").on("click", function () {
//     $(this).css("background-image", "url(/url/to/background/image.jpg)");
// });
