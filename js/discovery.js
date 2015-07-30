/*------------------------------------------------------ 
  WEBSITE LOADER            
-------------------------------------------------------*/

jQuery(window).load(function() {
        // will first fade out the loading animation
	jQuery(".status").fadeOut();
        // will fade out the whole DIV that covers the website.
	jQuery(".preloader").delay(1000).fadeOut("slow");
});

/*------------------------------------------------------ 
  Smooth Scroll    
-------------------------------------------------------*/

$('.smooth').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash,
	    $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 800, 'swing', function () {
	        window.location.hash = target;
	    });
});

 jQuery(document).ready(function($) {
/*------------------------------------------------------
  Navigation Features           
-------------------------------------------------------*/

	if ($(window).scrollTop()===0){
			$('#main-navigation').removeClass('stuck');
		}
		else{
			$('#main-navigation').addClass('stuck');    
		}

		$(window).scroll(function(){
			if ($(window).scrollTop()===0){
				$('#main-navigation').removeClass('stuck');
			}
			else{
				$('#main-navigation').addClass('stuck');    
			}
		});
		
/*------------------------------------------------------
	Adjust the #home height to be equal to the browsers height
-------------------------------------------------------*/

	$('#home').css({ 'height': $(window).height() });
	   $(window).on('resize', function() {

			$('#home').css({ 'height': $(window).height() });
			$('body').css({ 'width': $(window).width() })
	   });	

/*------------------------------------------------------
	Resume Cards Click Events
-------------------------------------------------------*/

	/*Open*/
    $(".expander").click(function(event) {
        event.preventDefault();
        $('.card-expand').css("transform", "translateY(-100%)");
		$('.card-expand').removeClass("card-hidden");
        var card = $(this).attr("href");
        $(".card-expand").not(card).css("transform", "translateY(0%)");
    });
	
	/*Close*/
    $(".card-expand i.fa").click(function(event) {
        event.preventDefault();
        var card = $(this).attr("href");
        $(".card-expand").not(card).css("transform", "translateY(0%)");
    });

/*------------------------------------------------------
	Back To Top
-------------------------------------------------------*/

	//Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});
	
	//Click event to scroll to top
	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});


/*------------------------------------------------------
	My Work Items
-------------------------------------------------------*/

	var $lightbox = $('#lightbox');
    
    $('[data-target="#lightbox"]').on('click', function(event) {
        var $img = $(this).find('img'), 
            src = $img.attr('src'),
            alt = $img.attr('alt'),
            css = {
                'maxWidth': $(window).width() - 100,
                'maxHeight': $(window).height() - 100
            };
		
		//Calls to pass the picture and title into the modal
		var captext = $(this);
		var caption = captext.data('id');
		$(".modal-caption #caption").html(caption);
		
        $lightbox.find('.close').addClass('hidden');
        $lightbox.find('img').attr('src', src);
        $lightbox.find('img').attr('alt', alt);
        $lightbox.find('img').css(css);
    });
    
    $lightbox.on('shown.bs.modal', function (e) {
        var $img = $lightbox.find('img');
            
        $lightbox.find('.modal-dialog').css({'width': $img.width()});
        $lightbox.find('.close').removeClass('hidden');
    });
/*------------------------------------------------------
	Initialize WOW Animations
-------------------------------------------------------*/

	new WOW().init();
	
});