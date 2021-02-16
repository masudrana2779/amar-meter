$(function () {
    "use strict";
    $(document).ready(function () {
        $('.barInner').on('click',function () {
            $('.barInner').removeClass('active');
            $(this).addClass('active');
        });
    });
});