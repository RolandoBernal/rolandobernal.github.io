// When the user scrolls down 64px from the top of the document, change the navbar background

$(document).ready(function() {

    'use strict';

    window.onscroll = function() {scrollFunction()};
    function scrollFunction() {
        if (document.body.scrollTop > 64 || document.documentElement.scrollTop > 64) {
            document.getElementById("navbar").style.background = "rgba(10, 21, 37, 0.85)";
            //document.getElementById("img-featured-navbar").style.display = "inline-block";
            document.getElementById("img-featured-navbar").style.visibility = "visible";
            document.getElementById("img-featured-navbar").style.opacity = "1";
            document.getElementById("img-featured-navbar").style.transform = "scale(1,1)";
            document.getElementById("img-featured-header").style.transform = "scale(0.5,0.5)";
            document.getElementById("img-featured-header").style.visibility = "hidden";
        } else {
            document.getElementById("navbar").style.background = "transparent";
            //document.getElementById("img-featured-navbar").style.display = "none";
            document.getElementById("img-featured-navbar").style.transform = "scale(0.5,0.5)";
            document.getElementById("img-featured-navbar").style.visibility = "hidden";
            document.getElementById("img-featured-navbar").style.opacity = "0";
            //document.getElementById("img-featured-header").style.display = "initial";
            document.getElementById("img-featured-header").style.visibility = "visible";
            document.getElementById("img-featured-header").style.opacity = "1";
            document.getElementById("img-featured-header").style.transform = "scale(1,1)";
        }
    }


});