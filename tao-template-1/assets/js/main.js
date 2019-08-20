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
        } else {
        }
    });
}

$(function () {
    scroll();
    readMore();
});


$(window).on('load resize', function () {}); // resize
