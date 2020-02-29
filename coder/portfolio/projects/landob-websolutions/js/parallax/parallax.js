/*------------------------------------------------------ 
  Parallax Background Effect        
-------------------------------------------------------*/

$(document).ready(function(){
	
	$window = $(window);
                
   $('section[data-type="background"]').each(function(){
     var $bgobj = $(this); // assigning the object
                    
		$(window).scroll(function() {
                    
		// Scroll speed = var speed
		// yPos negative = scroll UP								
		var yPos = -($window.scrollTop() / $bgobj.data('speed')); 
		
		// Coordinate calculations
		var coords = '50% '+ yPos + 'px';

		// Background movement
		$bgobj.css({ backgroundPosition: coords });		
		
		});

 });	

}); 

/*------------------------------------------------------ 
  Render HTML for IE
-------------------------------------------------------*/
document.createElement("article");
document.createElement("section");