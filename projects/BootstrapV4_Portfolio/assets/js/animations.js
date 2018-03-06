
// When the user scrolls down 800px from the top of the document, show the Social Media Icons

myID = document.getElementById("myID");

var myScrollFunc = function () {
  var y = window.scrollY;

  if (y >= 500) {
    myID.className = "contact-icons delay-15s show"
  } else {
    myID.className = "contact-icons delay-05s hide"
  }
};

window.addEventListener("scroll", myScrollFunc);