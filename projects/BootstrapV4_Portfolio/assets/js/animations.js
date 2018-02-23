
// When the user scrolls down 800px from the top of the document, show the Social Media Icons
//window.onscroll = function() {scrollIconsFunction()};
//function scrollIconsFunction() {
//    if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
//        var getIcons = document.querySelectorAll('div.social-icon-fade');
//        [].slice.call(getIcons).forEach(function(icons) {
//            icons.style.visibility = "visible";
//            icons.style.opacity = "1";
//            icons.style.transform = "scale(1,1)";
//            icons.style.transition = "visibility 0.15s, opacity 0.5s ease-in, transform 0.5s ease";
//        });
//    } else {
//        var hideIcons = document.querySelectorAll('div.social-icon-fade');
//        [].slice.call(hideIcons).forEach(function(hicons) {
//            hicons.style.visibility = "hidden";
//            hicons.style.opacity = "0";
//            hicons.style.transform = "scale(0.5,0.5)";
//        });
//    }
//}

myID = document.getElementById("myID");

var myScrollFunc = function () {
  var y = window.scrollY;

  if (y >= 800) {
    myID.className = "contact-icons delay-15s show"
  } else {
    myID.className = "contact-icons delay-05s hide"
  }
};

window.addEventListener("scroll", myScrollFunc);