// Controls the animation of elements when user scrolls and said elements are on the viewport range.

$(function() {
    var $progressbars = $(".skillbar > .skillbar-bar");
    var $section = $("#techSkills");
    var $queue = $({});

    function loadDaBars() {
        $progressbars.each(function() {
            var $el = $(this);
            var origWidth = $el.width();
            $el.width(0);
            $queue.queue(function(next) {
                $el.animate({ width: origWidth }, 1000, next);
            });
        });
    }

    $(document).bind("scroll", function(ev) {
        var scrollOffset = $(document).scrollTop();
        var containerOffset = $section.offset().top - window.innerHeight;
        if (scrollOffset > containerOffset) {
            loadDaBars();
            // unbind event not to load scroll again:
            $(document).unbind("scroll");
        }
    });
});


// const $animation_elements = $(".animated");
// const $window = $(window);
// console.log("CL: ============================================");
// console.log("CL: $window :: ", $window);
// console.log("CL: ============================================");
// console.log("CL: $animation_elements :: ", $animation_elements);
// console.log("CL: ============================================");

// function check_if_in_view() {
//     const window_height = $window.height();
//     console.log("CL: window_height :: ", window_height);
//     console.log("CL: ============================================");
//     const window_top_position = $window.scrollTop();
//     console.log("CL: window_top_position :: ", window_top_position);
//     console.log("CL: ============================================");
//     const window_bottom_position = window_top_position + window_height;
//     console.log("CL: window_bottom_position :: ", window_bottom_position);
//     console.log("CL: ============================================");

//     $.each($animation_elements, function() {
//         const $element = $(this);
//         console.log("CL: $element :: ", $element);
//         console.log("CL: ============================================");
//         const element_height = $element.outerHeight();
//         console.log("CL: element_height :: ", element_height);
//         console.log("CL: ============================================");
//         const element_top_position = $element.offset().top;
//         console.log("CL: element_top_position :: ", element_top_position);
//         console.log("CL: ============================================");
//         const element_bottom_position = element_top_position + element_height;
//         console.log("CL: element_bottom_position :: ", element_bottom_position);
//         console.log("CL: ============================================");

//         //check to see if this current container is within viewport
//         if (
//             element_bottom_position >= window_top_position &&
//             element_top_position <= window_bottom_position
//         ) {
//             $element.addClass("in-view");
//         } else {
//             $element.removeClass("in-view");
//         }
//     });
// }

// $window.on("scroll resize", check_if_in_view);
// $window.trigger("scroll");
