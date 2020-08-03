
$(window).on('load', function () {

	var sections = $('div.section')
	sections = sections.toArray()
	sections.shift()
	sections = $(sections)

	var localtoc = $('div#uedoc-localtoc li')
	console.log(localtoc)

	$(window).on('scroll', function () {
		var top = -1;
		var topmost = undefined
		sections.each(function () {
			// console.log(top)
			var topOffset = $(this).offset().top - $(window).scrollTop()
			if (top == -1 || top > Math.abs(topOffset)) {
				top =  Math.abs(topOffset)
				topmost = $(this)
			}
		})
		localtoc.each(function () {
			var toctext = $($(this).children().get(0)).attr('href')
			toctext = toctext.substr(1)
			if (topmost.attr('id') == toctext) {
				console.log(topmost.attr('id'))
				console.log(toctext)
				$(this).addClass('current-reading')
			} else {
				$(this).removeClass('current-reading')
			}
		})
	})
})
