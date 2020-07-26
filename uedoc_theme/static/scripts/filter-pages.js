var filterPages = function () {
	var input = $(this).val()
	$('#uedoc-localtoc  li').each(function () {
		var txtValue = $(this).text()
		console.log(txtValue)
		if (txtValue) {
			if (txtValue.toUpperCase().indexOf(input.toUpperCase()) > -1) {
				$(this).css('display', '');
			} else {
				$(this).css('display', 'none');
			}
		}
	})
}

$(window).on('load', function () {
	console.log('test')
	console.log($('#uedoc-filter'))
	$('#uedoc-filter').on('input', filterPages)
	$('#uedoc-filter').on('propertychange', filterPages)
})
