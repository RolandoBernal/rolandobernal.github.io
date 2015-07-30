/*------------------------------------------------------
	Owl Carousel
-------------------------------------------------------*/
$(document).ready(function() {

  $("#references-carousel").owlCarousel({
	items : 1,
    itemsCustom : false,
    itemsDesktop : [1199,1],
    itemsDesktopSmall : [980,1],
    itemsTablet: [768,1],
    itemsTabletSmall: false,
    itemsMobile : [479,1],
    singleItem : false,
    itemsScaleUp : false,
  });

  $("#quotes-carousel").owlCarousel({
    items : 1,
    itemsCustom : false,
    itemsDesktop : [1199,1],
    itemsDesktopSmall : [980,1],
    itemsTablet: [768,1],
    itemsTabletSmall: false,
    itemsMobile : [479,1],
    singleItem : false,
    itemsScaleUp : false,
  });

  $("#experience-carousel").owlCarousel({
	items : 3,
    itemsCustom : false,
    itemsDesktop : [1199,3],
    itemsDesktopSmall : [980,3],
    itemsTablet: [768,1],
    itemsTabletSmall: false,
    itemsMobile : [479,1],
    singleItem : false,
    itemsScaleUp : false,
  });

});
