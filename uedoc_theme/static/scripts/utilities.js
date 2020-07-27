/**
 * Return true if the current agent is from a mobile device
 */
function isMobile() {      
	return window.matchMedia("only screen and (max-width: 1280px)").matches;
}
