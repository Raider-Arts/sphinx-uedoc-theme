import $ from 'jquery';

var navopen = true

/**
 * Change the animate state of the nav-menu, triggering the css animation
 * @param {bool} state 
 */
export function animateNavMenu(state = false){
	if (state) {
		$('body').addClass('scroll-block')
		$('div#nav-menu').addClass('open-nav');
	} else {
		$('body').removeClass('scroll-block');
		$('div#nav-menu').removeClass('open-nav');
	}
}

/**
 * Toggle the aniamtion each time the function get executed
 */
export function toggleNavMenu() {
	animateNavMenu(navopen);
	navopen = !navopen;
}

/**
 * Position and reszize each submenus
 */
function positionSubMenu() {
	console.log('position')
	var submenus = $('.uedoc-nav-submenu');
	submenus.each((index,submenu) => {
		console.log($(submenu));
		var pos = $(submenu).parent().position();
		var size = $(submenu).parent().outerWidth();
		$(submenu).css('left', pos.left + 'px');
		$(submenu).css('width', size + 'px');
	});
}


/**
 * Register Windows Callbacks
 */

$(window).on('load', positionSubMenu)

$(window).on('load', function () {
	$('#head div.hamburger-nav').on('click', toggleNavMenu)
})

$(window).on('resize', () => {
	animateNavMenu(false)
	navopen = true;
})