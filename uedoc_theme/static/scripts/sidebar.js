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