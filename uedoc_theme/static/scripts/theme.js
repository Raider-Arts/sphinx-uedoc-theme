
var uedoc_theme = {
	styleElement: '#uedoc_theme',

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

	generateTheme: () => {
		var css = $(uedoc_theme.styleElement).html();
		var theme = localStorage.getItem("theme");

		if (!theme) {
			theme = 'default';
			localStorage.setItem('theme', theme);
		}

		var themeCss = JSON.parse(css)[theme];
		for (const color in themeCss) {
			if (themeCss.hasOwnProperty(color)) {
				const theme_color = themeCss[color];
				uedoc_theme.setThemeColor(`--clr-${color}`, theme_color);
			}
		}
	},

	registerTheme: (theme, css) => {
		localStorage.setItem('theme', theme);
		var themecss = JSON.parse($(uedoc_theme.styleElement).html());
		themecss[theme] = css;
		$(uedoc_theme.styleElement).html(JSON.stringify(themecss, null, 2));
	}
};

$(window).on('load', function () {
	uedoc_theme.generateTheme();
})