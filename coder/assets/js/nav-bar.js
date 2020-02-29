// When the user scrolls down 64px from the top of the document, change the navbar background
window.onscroll = function() {
    scrollFunction();
};
function scrollFunction() {
    if (screen.width > 992) {
        // ----
        let eleMyNavBar = document.getElementById("myNavbar");
        if (document.body.scrollTop > 64 || document.documentElement.scrollTop > 64) {
            eleMyNavBar.style.backgroundColor = "rgba(10, 21, 37, 1)";
            eleMyNavBar.classList.add("navbar-shadow");
            document.getElementById("navbarSupportedContent").classList.remove("navbar-centered");
            document.getElementById("navbarSupportedContent").classList.add("navbar-right");
            var elements = document.querySelectorAll("a.nav-link");
            [].slice.call(elements).forEach(function(elem) {
                if (elem.classList.contains("nav-link")) {
                    if (elem.classList.contains("dropdown-toggle")) {
                        elem.className = "nav-link dropdown-toggle nav-link-2";
                    } else {
                        elem.className = "nav-link nav-link-2";
                    }
                }
            });
            document.getElementById("img-featured-navbar-sm").style.visibility = "visible";
            document.getElementById("img-featured-navbar-sm").style.opacity = "1";
            document.getElementById("img-featured-navbar-sm").style.transform = "scale(1,1)";
            document.getElementById("img-featured-header").style.transform = "scale(0.5,0.5)";
            document.getElementById("img-featured-header").style.visibility = "hidden";
        } else {
            eleMyNavBar.style.backgroundColor = "transparent";
            eleMyNavBar.classList.remove("navbar-shadow");
            document.getElementById("navbarSupportedContent").classList.remove("navbar-right");
            document.getElementById("navbarSupportedContent").classList.add("navbar-centered");
            var elements = document.querySelectorAll("a.nav-link");
            [].slice.call(elements).forEach(function(elem) {
                if (elem.classList.contains("nav-link")) {
                    if (elem.classList.contains("dropdown-toggle")) {
                        elem.className = "nav-link dropdown-toggle nav-link-1";
                    } else {
                        elem.className = "nav-link nav-link-1";
                    }
                }
            });
            document.getElementById("img-featured-navbar-sm").style.transform = "scale(0.5,0.5)";
            document.getElementById("img-featured-navbar-sm").style.visibility = "hidden";
            document.getElementById("img-featured-navbar-sm").style.opacity = "0";
            document.getElementById("img-featured-header").style.visibility = "visible";
            document.getElementById("img-featured-header").style.opacity = "1";
            document.getElementById("img-featured-header").style.transform = "scale(1,1)";
        }
        // ----
    }
};
//To display the different links of the menu: Apps, Projects, Expeience, About:
function toggleFunction() {
    // Hamburguer Menu Icon
    let z = document.getElementById("nav-animated-hamburguer-icon");
    if (z.classList.contains("closed")) {
        z.className = "navbar-toggler navbar-toggler-icon open";
    } else if (z.classList.contains("open")) {
        z.className = "navbar-toggler navbar-toggler-icon closed collapsed";
    }
};
