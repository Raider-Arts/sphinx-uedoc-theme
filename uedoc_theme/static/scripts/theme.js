
var uedoc_theme = {
	getSafeValue: (nmb) => {
		return (isNaN(nmb)) ? 0 : nmb;
	},
	
	convertToPercent: (clr) => {
		return `${clr * 100}%`;
	},
	
	getColor: (clr, type) => {
		if ($.isArray(clr)) {
			return clr.map(function (clrElem, index) {
				console.log(clrElem)
				switch (type) {
					case 'hsl':
						if (index != 0) {
							return uedoc_theme.convertToPercent(uedoc_theme.getSafeValue(clrElem));
						}
						return uedoc_theme.getSafeValue(clrElem);
					default:
						return uedoc_theme.getSafeValue(clrElem);
				}
			});
		} else {
			return uedoc_theme.getSafeValue(clr)
		}
	},

	setThemeColor: (key, clr) => {
		var color = uedoc_theme.getColor(chroma(clr).hsl(), 'hsl');
		$(':root').css(`${key}-h`, color[0]);
		$(':root').css(`${key}-s`, color[1]);
		$(':root').css(`${key}-l`, color[2]);
	},

	generateTheme: (css) => {
		var cssObj = JSON.parse(css);
		for (const color in cssObj) {
			if (cssObj.hasOwnProperty(color)) {
				const theme_color = cssObj[color];
				uedoc_theme.setThemeColor(`--clr-${color}`, theme_color);
			}
		}
	}
};

$(window).on('load', function () {
	uedoc_theme.generateTheme($('#uedoc_theme').html());
})