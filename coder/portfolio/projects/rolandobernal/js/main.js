$(document).ready(function() {

    'use strict';


    //---- Progress Bar Animation
    $("[data-progress-animation]").each(function() {
        var $this = $(this);
        $this.appear(function() {
            var delay = ($this.attr("data-appear-animation-delay") ? $this.attr("data-appear-animation-delay") : 1);
            if (delay > 1) $this.css("animation-delay", delay + "ms");
            setTimeout(function() {
                $this.animate({
                    width: $this.attr("data-progress-animation")
                }, 800);
            }, delay);
        }, {
            accX: 0,
            accY: -50
        });
    });


    //ProgressBar
    $("[data-appear-progress-animation]").each(function() {
        var $this = $(this);

        $this.appear(function() {
            var delay = ($this.attr("data-appear-animation-delay") ? $this.attr("data-appear-animation-delay") : 1);

            if (delay > 1) $this.css("animation-delay", delay + "ms");
            $this.addClass($this.attr("data-appear-animation"));

            setTimeout(function() {
                $this.animate({
                    width: $this.attr("data-appear-progress-animation")
                }, 1500, "easeOutQuad", function() {
                    $this.find(".progress-bar-tooltip").animate({
                        opacity: 1
                    }, 500, "easeOutQuad");
                });
            }, delay);
        }, {
            accX: 0,
            accY: -50
        });
    });
    //End ProgressBar

});




