//Student Profile Functions
(function(){

  $('img').bind('mouseenter mouseleave', function() {
      $(this).attr({
          src: $(this).attr('mouseover-src')
          , 'mouseover-src': $(this).attr('src')
      })
  });

})();
