// Controls the Opening/Closing of the Menu and its Animations
$(document).ready(function() {
    "use strict";
    $(".toggle-menu-item").on("click", function(e) {
        e.stopPropagation();
        // console.log("menu item clicked");
        $("#checkboxid").is(":checked");
        $("#checkboxid").prop("checked", true); // Checks the box
        $("#checkboxid").prop("checked", false); // Unchecks the box
    });
});
