import $ from 'jquery';

/**
 * Filter the ul list of the sidebar
 */
function filterPages() {
	var input = $(this).val()
	$('#uedoc-globaltoc li').each(function () {
		var txtValue = $(this).text()
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
	$('#uedoc-filter').on('input', filterPages)
	$('#uedoc-filter').on('propertychange', filterPages)
})
