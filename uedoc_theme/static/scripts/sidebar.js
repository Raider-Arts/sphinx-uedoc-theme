var sideopen = false

function displayMobileSidebar() {
	if (isMobile()) {
		$('#navigation').css('left', '0')
		$('#navigation').css('display', 'block')
	} else {
		$('#navigation').css('display', 'none')
		$('#sidebar').removeClass('sidebar-retracted')
	}
	
	$('#sidebar').addClass('sidebar-retracted')
	$('#navigation').css("left", "0")
	$('#navigation').css("transform", "translateY(0) rotate(0deg)")
	sideopen = false;
}

$(window).on('load', function () {
	displayMobileSidebar()
	$('#navigation').click(function () {
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

function calcSidebarHeight() {
	var sidebarHeight = String($(window).height() - ($('#head').height() + $('div.related').height())) + 'px'
	if (!isMobile()) {
		$('#sidebar').css('height', sidebarHeight)
	} else {
		$('div.sphinxsidebar').css('height', sidebarHeight)
	}
}
$(window).on('load', calcSidebarHeight)
$(window).on('resize', calcSidebarHeight)

function calcLocalTocMaxHeight() {
	var localtocmaxheight = String($(window).height() - 285) + 'px'
	$('div.localtocwrapper').css('max-height', localtocmaxheight)
}
$(window).on('load', calcLocalTocMaxHeight)
$(window).on('resize', calcLocalTocMaxHeight)

function recalculate_tree_state(liElement) {
	// console.log(liElement)
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
 * of the sidebar unordered list
 */
function sidebar_item_click() {
	event.preventDefault()
	event.stopPropagation()
	aParent = $(this).parent()
	// /** if not present initialize the current state */
	// if (aParent.data('state') == undefined) {
	// 	aParent.data('state', false)
	// }
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

		var wrapper = $('<div> </div>').addClass('sidebar-list-hover-wrapper');
		wrapper.css('height', String($(this).outerHeight()) + "px");
		wrapper.append($('<div> </div>').addClass('sidebar-list-hover'));
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
		console.log($(this).find('li').length)
		var state = $(this).data('state')
		if (state) {
			$(this).removeClass('sidebar-item-expanded')
			$(this).addClass('sidebar-item-collapsed')
		} else {
			$(this).addClass('sidebar-item-expanded')
			$(this).removeClass('sidebar-item-collapsed')
		}
		if ($(this).find('li').length == 0) {
			$(this).addClass('sidebar-no-item-toggle');
		}
	})
	/**
	 * Add the onclick function to the list items
	 */
	$('#sidebar li a span.button').on('click', sidebar_item_click);
})



