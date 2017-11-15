/*!
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */


// Projects Functions
(function(){

  $('img').bind('mouseenter mouseleave', function() {
      $(this).attr({
          src: $(this).attr('mouseover-src')
          , 'mouseover-src': $(this).attr('src')
      })
  });

})();
