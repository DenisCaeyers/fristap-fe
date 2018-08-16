jQuery(document).ready(function () {
    var window_width = jQuery(window).width();

    if (window_width < 768) {
        jQuery(".sidebar").unstick();
    } else {
        make_sticky();
    }

    jQuery(window).resize(function () {
        window_width = jQuery(window).width();
        if (window_width < 768) {
            jQuery(".sidebar").unstick();
        } else {
            make_sticky();
        }

    });

    function make_sticky() {
        $(".sidebar").sticky({ topSpacing: 60 });
    }

});