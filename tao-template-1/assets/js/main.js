// scroll effect on anchor tag to id
function scroll() {
	$('a[href^="#"]').click(function(){
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top;
		$('html, body').stop().animate({ scrollTop: position }, 500, 'swing');
		return false;
	});
}

$(function(){
	scroll();
});


$(window).on('load resize', function(){
}); // resize