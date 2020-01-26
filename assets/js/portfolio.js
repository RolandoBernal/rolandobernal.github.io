// Controls the Portfolio Gallery with Filtering and Animations
$(function() {
    let filterList = {
        init: function() {
            // MixItUp plugin
            // http://mixitup.io
            $("#portfoliolist").mixItUp({
                selectors: {
                    target: ".portfolio",
                    filter: ".filter"
                },
                load: {
                    filter: "*" // show all tab on first load
                }
            });
        }
    };

    // Run the show!
    filterList.init();
});
