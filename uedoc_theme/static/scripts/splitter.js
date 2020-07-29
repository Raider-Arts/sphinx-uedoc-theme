/*
*	Splitter.js
*	Hide the splitter only on mobile and when resultion is lower than 1280px
*	author: Luca Faggion
*/

var splitter = null

/**
 * Create the splitter and set the global variable
 * If the splitter already exist delete it
 */
function createSplitter() {
	if (splitter) {
		splitter.destroy()
		splitter = null
	}
	if (!isMobile()) {
		splitter = window.Split(['#sidebar', '#document'], {
			sizes: [18, 100],
			minSize: [300, 450],
		})
	}	
}
$(window).on('load', createSplitter)
$(window).on('resize', createSplitter)