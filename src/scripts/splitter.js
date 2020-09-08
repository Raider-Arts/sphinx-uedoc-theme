/*
*	Splitter.js
*	Hide the splitter only on mobile and when resultion is lower than 1280px
*	author: Luca Faggion
*/
import $ from 'jquery';
import { isMobile } from './utilities.js';
import Split from 'split-grid';
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
	if (!isMobile() || !$('#sidebar').get(0)) {
		$('.gutter').css('display', 'block');
		splitter = Split({
			columnGutters: [{
				track: 1,
				element: $('.gutter').get(0),
			}],
			columnMinSizes: { 0: 300 }
		})
	} else {
		$('.gutter').css('display', 'none');
	}
}

/**
 * Register events
 */
$(window).on('load', createSplitter)
$(window).on('resize', createSplitter)