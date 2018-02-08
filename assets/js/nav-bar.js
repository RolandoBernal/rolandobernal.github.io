// When the user scrolls down 64px from the top of the document, change the navbar background

window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 64 || document.documentElement.scrollTop > 64) {
        document.getElementById("navbar").style.visibility = "hidden";
        document.getElementById("navbar-sm").style.visibility = "visible";
        document.getElementById("navbar-sm").style.background = "rgba(10, 21, 37, 0.90)";
        document.getElementById("img-featured-navbar-sm").style.visibility = "visible";
        //document.getElementById("img-featured-navbar-sm").style.display = "inline-block";
        document.getElementById("img-featured-navbar-sm").style.opacity = "1";
        document.getElementById("img-featured-navbar-sm").style.transform = "scale(1,1)";
        document.getElementById("img-featured-header").style.transform = "scale(0.5,0.5)";
        document.getElementById("img-featured-header").style.visibility = "hidden";
    } else {
        document.getElementById("navbar").style.visibility = "visible";
        document.getElementById("navbar").style.background = "transparent";
        document.getElementById("navbar-sm").style.visibility = "hidden";
        document.getElementById("img-featured-navbar-sm").style.transform = "scale(0.5,0.5)";
        document.getElementById("img-featured-navbar-sm").style.visibility = "hidden";
        //document.getElementById("img-featured-navbar-sm").style.display = "none";
        document.getElementById("img-featured-navbar-sm").style.opacity = "0";
        document.getElementById("img-featured-header").style.visibility = "visible";
        document.getElementById("img-featured-header").style.opacity = "1";
        document.getElementById("img-featured-header").style.transform = "scale(1,1)";
    }
}
function toggleFunction() {
    var x = document.getElementById("navbar-mobile");
    if (x.className === "navbar-mob") {
        x.className += " responsive";
    } else {
        x.className = "navbar-mob";
    }
    var y = document.getElementById("nav-links");
    if (y.className === "navbar-links") {
        y.className += " responsive";
    } else {
        y.className = "navbar-links";
    }
}