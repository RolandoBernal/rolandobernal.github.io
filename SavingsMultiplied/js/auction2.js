'use strict';

var sortByPrice = {};

jQuery(document).ready(function($) { // Begins jQuery




		  $.ajax({ // Go get the data
						  url : "https://fiery-torch-1175.firebaseio.com/.json",
						  dataType : "jsonp",
						  success : function(data) {
								  console.log(data);
									for (var i = 0; i <= data.length - 1; i++) {

										$("#imagesDiv").append("<div class='col-md-3'>" + "<img src=" + data[i].image + " width='110' height='90'><br><br>" + data[i].title + "<br>" + data[i].price + "<br>" + data[i].seller + "<br>" + "Time remaining: 10 days.</div>");



									}; // end of for loop

						  } // end of success
		  }); // end of ajax


			sortByPrice.outputUpdate = function(price, id){
				$('#js-' + id).val(price);
			}



}); // Ends jQuery


								 //  $.each([ 52, 97 ], function( index, value ) {
  							// 		alert( index + ": " + value );
									// });

/*
'use strict';

$(document).ready(function() {

   $.ajax({
       url: "https://savingsmultipliedssh.firebaseio.com/items.json",
       dataType: "jsonp",
       success: function(data){
           console.log(data);
         for (var i = 0; i < data.length; i++) {
           // console.log(data);
           // console.log(data[0].title);
           $("#majorDiv").append("<div class='col-md-4'>" + data[i].price + "</div>");
     }
   }
 })
});
*/





