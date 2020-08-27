function generateTheme(css) {
	var cssObj = JSON.parse(css);
	var clr_background = chroma(cssObj['background']).hsl();
	document.documentElement.style.setProperty('--clr-background-h', clr_background[0]);
	document.documentElement.style.setProperty('--clr-background-s', clr_background[1]*100+'%');
	document.documentElement.style.setProperty('--clr-background-l',clr_background[2]*100+'%');
	// document.documentElement.style.setProperty('--clr-background-hsl', clr_background[0] + ',' + clr_background[1]*100+'%' + ',' + clr_background[2]*100+'%');
}

$(window).on('load', function () {
	console.log($('#uedoc_theme').html())
	generateTheme($('#uedoc_theme').html())
})