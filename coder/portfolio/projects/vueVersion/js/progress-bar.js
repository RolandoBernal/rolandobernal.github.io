$(function() {

    var $progressbars = $(".skillbar > .skillbar-bar");
    var $section = $('#techSkills');
    var $queue = $({});

    function loadDaBars() {
        $progressbars.each(function() {
            var $el = $(this);
            var origWidth = $el.width();
            $el.width(0);
            $queue.queue(function(next) {
                $el.animate({width: origWidth}, 1000, next);
            });
        });
    }

    $(document).bind('scroll', function(ev) {
        var scrollOffset = $(document).scrollTop();
        var containerOffset = $section.offset().top - window.innerHeight;
        if (scrollOffset > containerOffset) {
            loadDaBars();
            // unbind event not to load scroll again:
            $(document).unbind('scroll');
        }
    });

});


// $(document).ready(function() {
//
//     'use strict';
//
//     //---- Progress Bar Animation
//     var $progressbars = $(".meter > .skillbar-bar");
//     var $section = $('#techSkills');
//     var $queue = $({});
//
//     function loadDaBars() {
//         $progressbars.each(function() {
//             var $el = $(this);
//             var origWidth = $el.width();
//             $el.width(0);
//             $queue.queue(function(next) {
//                 // $el.animate({width: origWidth}, 1200, next);
//                 $el.animate({width:jQuery(this).attr('data-percent')}, 1200, next);
//             });
//         });
//     }
//
//     $(document).bind('scroll', function(ev) {
//         var scrollOffset = $(document).scrollTop();
//         var containerOffset = $section.offset().top - window.innerHeight;
//         if (scrollOffset > containerOffset) {
//             loadDaBars();
//             // unbind event not to load scroll again:
//             $(document).unbind('scroll');
//         }
//     });
//     //---- End of Progress Bar Animation
//
//     //Skill Bars
//     // jQuery('.skillbar').each(function(){
//     // 	jQuery(this).find('.skillbar-bar').animate({
//     // 		width:jQuery(this).attr('data-percent')
//     // 	},2000);
//     // });
//     //End of Skill Bars
//
// });
