$(window).on('load', function () {
	console.log("Setting up splitter")
	if (!isMobile()) {
		window.Split(['#sidebar', '#document'], {
			sizes: [18, 72],
			minSize: [300, 450],
		})
	}
})