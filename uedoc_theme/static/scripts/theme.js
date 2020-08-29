
var docTheme = {
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
				switch (type) {
					case 'hsl':
						if (index != 0) {
							return docTheme.convertToPercent(docTheme.getSafeValue(clrElem));
						}
						return docTheme.getSafeValue(clrElem);
					default:
						return docTheme.getSafeValue(clrElem);
				}
			});
		} else {
			return docTheme.getSafeValue(clr)
		}
	},

	setThemeColor: (key, clr) => {
		if (key != 'override') {
			var color = docTheme.getColor(chroma(clr).hsl(), 'hsl');
			$(':root').css(`--clr-${key}-h`, color[0]);
			$(':root').css(`--clr-${key}-s`, color[1]);
			$(':root').css(`--clr-${key}-l`, color[2]);
		}else{
			for (const overrideKey in clr) {
				if (clr.hasOwnProperty(overrideKey)) {
					$(':root').css(overrideKey, clr[overrideKey])
				}
			}
		}
	},

	generateTheme: (css) => {
		var css = $(docTheme.styleElement).html();
		var theme = localStorage.getItem("theme");

		if (!theme) {
			theme = 'default';
			localStorage.setItem('theme', theme);
		}

		var themeCss = JSON.parse(css)[theme];
		for (const color in themeCss) {
			if (themeCss.hasOwnProperty(color)) {
				docTheme.setThemeColor(color, themeCss[color]);
			}
		}
		$('body').css('visibility', 'visible');
	},

	registerTheme: (theme, css) => {
		var themecss = JSON.parse($(docTheme.styleElement).html());
		themecss[theme] = css;
		$(docTheme.styleElement).html(JSON.stringify(themecss, null, 2));
	},

	switchTheme: (theme) => {
		localStorage.setItem('theme', theme);
		docTheme.generateTheme();
	},

	renderWith: (css) => {
		docTheme.registerTheme('render', css);
		docTheme.switchTheme('render');
		docTheme.generateTheme();
	}
};

$(window).on('load', function () {
	// docTheme.registerTheme('newdefault', {
	// 	"background": "#0aaff0", 
	// 	"primary": "hsl(0,0%, 16%)", 
	// 	"secondary": "#0aaff0"
	// })
	docTheme.switchTheme('default');
	docTheme.generateTheme();
})