/*
*	Splitter.js
*	Hide the splitter only on mobile and when resultion is lower than 1280px
*	author: Luca Faggion
*/
import $ from 'jquery';
import { isMobile } from './utilities.js'
// import Split from 'split-grid';

var splitter = null

/**
 * Create the splitter and set the global variable
 * If the splitter already exist delete it
 */
export function createSplitter() {
	if (splitter) {
		splitter.destroy()
		splitter = null
	}
	if (!isMobile()) {
		try {
			splitter = window.Split(['#sidebar', '#document'], {
				sizes: [18, 100],
				minSize: [300, 450],
			})
		} catch (error) { }
	}
	console.log("Splitter initialized or created");
}

/**
 * Register events
 */
$(window).on('load', createSplitter)
$(window).on('resize', createSplitter)