/**
 * Return true if the current agent is from a mobile device
 */
function isMobile() {      
	return window.matchMedia("only screen and (max-width: 1280px)").matches;
}

$(window).on('load', function () {
	$('table.highlighttable').addClass('highlight')
})

$(window).on('load', function () {
	$('div.footer button.sendto_top').on('click', function () {
		console.log("CLICKED MUDDA")
		$('html,body').animate({scrollTop: '0px'}, 300);
	})
})