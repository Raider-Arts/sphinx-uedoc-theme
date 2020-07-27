var sideopen = false

function displayMobileSidebar() {
	if (isMobile() || $(document).width() < 1280) {
		$('#sidebar').css('left', '-300px')
		$('#sidebar').css('float', 'left')
		$('#sidebar').css('height','100%')
		$('#navigation').css('left', '0')
		$('#navigation').css('display', 'block')
	} else {
		$('#navigation').css('display', 'none')
		$('#sidebar').css('height','')
	}
	
	$('#sidebar').css('left', '-300px')
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
			$('#sidebar').css('left', '0')
		} else {
			$('#sidebar').css('left', '-300px')
			$(this).css("left", "0")
			$(this).css("transform", "translateY(0) rotate(0deg)")
		}
		sideopen = !sideopen
	})
})

$(window).on('resize', displayMobileSidebar)
