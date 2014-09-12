'use strict';

$(document).ready(function () {
    function resizeContent() {
        $('iframe').height($(window).height());
    }

    resizeContent();

    $(window).resize(function() {
        resizeContent();
    });

});