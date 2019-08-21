// scroll effect on anchor tag to id
function scroll() {
    $('a[href^="#"]').click(function () {
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $('html, body').stop().animate({
            scrollTop: position
        }, 500, 'swing');
        return false;
    });
}



function readMore() {
    $(document).ready(function () {
        //onload check
        if ($(".slick-slide").hasClass(".slick-center")) {
            $(this).find('div .slide-item-container .read-more').addClass('active');
        } else {}
    });
}




/*
================================
//Mobile Nav Menu Script
================================
*/
jQuery(document).ready(function ($) {
    $(".menu-bar").on('click', function () {
        $(".bars").toggleClass("bars-clicked");
        $("#header__menu").slideToggle(400);
    });
});




function openFooterBlock() {
    jQuery(document).ready(function ($) {
        $(".footer-block-item").on('click', function () {
            $(this).find('ul').slideToggle().toggleClass('opened');
            $(this).find('i').toggleClass('opened');
        });
    });
}



$(function () {
    scroll();
    openFooterBlock();
    //    readMore();
});


$(window).on('load resize', function () {}); // resize