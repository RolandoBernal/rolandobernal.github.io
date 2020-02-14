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
