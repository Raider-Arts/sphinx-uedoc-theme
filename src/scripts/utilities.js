import $ from 'jquery';

/**
 * Return true if the current agent is from a mobile device
 */
export function isMobile() {      
	return window.matchMedia("only screen and (max-width: 1200px)").matches;
}

/**
 * Convert a file-loader templated path ("file.ext_t") to a local path after sphinx conversion ("file.ext")
 * @param {str} path 
 */
export function retriveTemplatePath(path) {
	return '_static/js/' + path.replace(/(\_t)$/gm, '')
}

/**
 * Request the file provided in url and execute the onfilecallback if the file is found
 * @param {str} url 
 * @param {Function} onfilecallback 
 */
export function readFile(url, onfilecallback) {
	$.ajax({
		url: url,
		success: onfilecallback
	});
}

/**
 * Creates a DOM SVG Element from a string
 * @param {*} svgstr 
 */
export function loadSvgFromString(svgstr) {
	const parser = new DOMParser();
	const svg = document.importNode(parser.parseFromString(svgstr, "application/xml").documentElement, true);
	return svg
}

/**
 * Register events
 */
$(window).on('load', function () {
	$('table.highlighttable').addClass('highlight')
})

$(window).on('load', function () {
	$('div.footer button.sendto_top').on('click', function () {
		$('html,body').animate({scrollTop: '0px'}, 300);
	})
})