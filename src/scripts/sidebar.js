import $ from 'jquery';
import {isMobile} from './utilities';

var sideopen = false

/**
 * Setup the sidebar based on the screen size
 */
export function displayMobileSidebar() {
	$('#sidebar').addClass('sidebar-retracted')
	$('#navigation').css("left", "0")
	$('#navigation').css("transform", "translateY(0) rotate(0deg)")
	sideopen = false;
}

$(window).on('load', function () {
	displayMobileSidebar()
	$('#navigation').on('click', function () {
		if (!sideopen) {
			$(this).css("transform", "translateY(0) rotate(-180deg)")
			$(this).css("left", "300px")
			$('#sidebar').removeClass('sidebar-retracted')
		} else {
			$('#sidebar').addClass('sidebar-retracted')
			$(this).css("left", "0")
			$(this).css("transform", "translateY(0) rotate(0deg)")
		}
		sideopen = !sideopen
	})
})

$(window).on('resize', displayMobileSidebar)

/**
 * Setup the height size of the sidebar to always occupy the remain height of the page
 * @param {float} offset the offset to add to the calculated height
 */
export function calcSidebarHeight(offset = 0) {
	var sidebarHeight = $(window).height() - ($('#head').height() + $('div.related').height()) + offset
	if (!isMobile()) {
		$('#sidebar').css('height', String(sidebarHeight)+'px')
	} else {
		$('#sidebar').css('height', String(sidebarHeight)+'px')
	}
	if ($('div#sidebarwidgets').length == 0) {
		var slidebarWidgets = $('div.sphinxsidebarwrapper').children()
		slidebarWidgets.slice(2, slidebarWidgets.length).wrapAll("<div id='sidebarwidgets' />")
	}
	$('div#sidebarwidgets').css('height', String(sidebarHeight-($('div#navigation').height()+$('div#searchbox').height()))+'px')
}

/**
 * Set the theme sidebar height based on page state
 */
export function setSidebarHeight() {
	const windowScroll = window.scrollY;
	const headerSize = ($('#head').height() + $('div.related').height());
	if (windowScroll < headerSize) {
		calcSidebarHeight(windowScroll);
	} else {
		calcSidebarHeight(headerSize);
	}
}

$(window).on('load', () => setSidebarHeight())
$(window).on('resize', () => setSidebarHeight())
// Resize sidebar also on scroll when the header is outside the screen
$(window).on('scroll', () => setSidebarHeight())
/**
 * Setup the height size of the localtoc sidebar
 */
export function calcLocalTocMaxHeight() {
	var localtocmaxheight = String($(window).height() - 285) + 'px'
	$('div.localtocwrapper').css('max-height', localtocmaxheight)
}
$(window).on('load', calcLocalTocMaxHeight)
$(window).on('resize', calcLocalTocMaxHeight)

/**
 * Recursively traverse the unordered list of the sidebar to 
 * collapse or show the list items
 * @param {JQuery element} liElement 
 */
export function recalculate_tree_state(liElement) {
	var state = liElement.children('a').data('state')
	liElement.find('li').each(function () {
		if (!state) {
			$(this).css('display', 'block')
		} else {
			$(this).css('display', 'none')
		}
	});
	liElement.find('li').each(function () {
		recalculate_tree_state($(this))
	})
}

/**
 * function that collapse or show clicked list item children
 * of the sidebar unordered list, the current state is stored in the a element of each list item
 */
export function sidebar_item_click() {
	event.preventDefault()
	event.stopPropagation()
	var aParent = $(this).parent()
	/** change the button icon (::before pseudo element) of the list item based on the state */
	var state = aParent.data('state')
	aParent.data('state', !state)
	if (!state) {
		aParent.removeClass('sidebar-item-expanded')
		aParent.addClass('sidebar-item-collapsed')
	} else {
		aParent.addClass('sidebar-item-expanded')
		aParent.removeClass('sidebar-item-collapsed')
	}
	/** Show or hide based on the previus state */
	recalculate_tree_state(aParent.parent())
}

/**
 * Sidebar List items initialization
 */
$(window).on('load', function () {
	/** 
	 * Add some needed html DOM element to create the hover effect
	 * based on this SO solution https://stackoverflow.com/q/12013066/6791579
	 */
	$('#sidebar li a').each(function () {

		var button = $("<span> </span>").addClass("button")
		$(this).append(button)

		var wrapper = $('<div> </div>').addClass('sidebar-list-hover-wrapper')
		wrapper.css('height', String($(this).outerHeight()) + "px")
		wrapper.append($('<div> </div>').addClass('sidebar-list-hover'))
		$(this).append(wrapper)
		$(this).contents()

        .filter(function(){return this.nodeType === 3})
			.wrap('<span />');
	})

	/**
	 * Initialize the list items of the sidebar
	 */
	$('#sidebar li').each(function () {
		if ($(this).children('a').data('state') == undefined) {
			$(this).children('a').data('state', false)
		}
		var state = $(this).data('state')
		if (state) {
			$(this).removeClass('sidebar-item-expanded')
			$(this).addClass('sidebar-item-collapsed')
		} else {
			$(this).addClass('sidebar-item-expanded')
			$(this).removeClass('sidebar-item-collapsed')
		}
		if ($(this).find('li').length == 0) {
			$(this).addClass('sidebar-no-item-toggle')
		}
	})
	/**
	 * Add the onclick function to the list items
	 */
	$('#sidebar li a span.button').on('click', sidebar_item_click)
})

/** Highlight a link in the sidebar list of topics (TOC)*/
$(window).on('load', function () {
	var currpage = $('div.related li.nav-item-this').children().text()
	$('#sidebar li').each(function () {
		var hash = (window.location.hash).trim()
		var elemHash = $(this).children('a').attr('href')
		var elemTxt = $(this).children('a').text().trim()
		var selected = false
		if (hash != "") {
			if (hash === elemHash) {
				selected = true
			}
		} else if (elemTxt === currpage.trim()) {
			selected = true
		}
			
		if (selected) {
			$(this).addClass('selected-link')
		} else {
			$(this).removeClass('selected-link')
		}
	})
})

/** If we're not changing (reloading) the page just select the link we just clicked */
$(window).on('load', function () {
	$('#sidebar a.reference').on('click', function () {
		$('#sidebar li').removeClass('selected-link')
		$(this).parent().addClass('selected-link')
		return true
	})
})