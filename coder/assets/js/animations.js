// When the user scrolls down 100px from the top of the document, show the Social Media Icons

myID = document.getElementById("myID");

var myScrollFunc = function () {
    var y = window.scrollY;

    if (y >= 100) {
        myID.className = "contact-icons delay-15s show";
    } else {
        myID.className = "contact-icons delay-05s hide";
    }
};
window.addEventListener("scroll", myScrollFunc);



// When the user hovers over the Learn More button, show the shadow animation for said button
// Vanilla JS solution:
function myOverFunction() {
    document.getElementById("learnMore").className += " dropshadowboxes-lifted-both dropshadowboxes-effect-default";
}
function myLeaveFunction() {
    document.getElementById("learnMore").className = "dropshadowboxes-drop-shadow dropshadowboxes-rounded-corners dropshadowboxes-inside-and-outside-shadow";
}


// jQuery solution:

// $("#learnMore").hover(
//     function() {
//         $(this).addClass("dropshadowboxes-drop-shadow dropshadowboxes-rounded-corners dropshadowboxes-inside-and-outside-shadow dropshadowboxes-lifted-both dropshadowboxes-effect-default");
//     },
//     function() {
//         $(this).removeClass("dropshadowboxes-drop-shadow dropshadowboxes-rounded-corners dropshadowboxes-inside-and-outside-shadow dropshadowboxes-lifted-both dropshadowboxes-effect-default");
//     }
// );
