
var navopen = false

$(window).on('load', function () {
	$('#head div.hamburger-nav').on('click', function () {
		if (navopen) {
			$('body').removeClass('scroll-block');
			$('div#nav-menu').removeClass('open-nav');
		} else {
			$('body').addClass('scroll-block')
			$('div#nav-menu').addClass('open-nav');
		}
		navopen = !navopen;
	})
})