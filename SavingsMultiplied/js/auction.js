'use strict';

jQuery(document).ready(function($) { // Begins jQuery




		  $.ajax({ // Go get the data
						  url : "https://fiery-torch-1175.firebaseio.com/.json",
						  dataType : "jsonp",
						  success : function(data) {
								  console.log(data);
									for (var i = 0; i <= data.length - 1; i++) {

											$("#imagesDiv").append("<div class='col-md-3'>" + "<img src=" + data[i].image + " width='110' height='90'><br><br>" + data[i].title + "<br>" + data[i].price + "<br>" + data[i].seller + "<br>" + data[i].endDate + "</div>");

											// Appending HTML to our DOM elements
											// $("#mySMImage").append("<img src="+ data[i].image + " width='110' height='90'>");
											// $("#title").append(data[i].title);
											// $("#price").append(data[i].price);
											// $("#seller").append(data[i].seller);
											// $("#endDate").append(data[i].endDate + "<br>");

											 //  console.log(data[i].title);
											 //  console.log(data[i].price);
											 //  console.log(data[i].seller);
											 //  console.log(data[i].endDate);
											 //  console.log(data[i].image);



									}; // end of for loop

						  } // end of success
		  }); // end of ajax



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






