import './utilities'
import './localtoc';
import './sidebar';
import './splitter';
import './filter-pages';
import './nav-header';
import logo from '../images/sphinx-ue-logo.svg';
import { library, dom, config } from'@fortawesome/fontawesome-svg-core';
import { faLink, faSearch, faRss, faBars, faAngleLeft, faAngleRight, faChevronUp, faFolderOpen, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { loadSvgFromString } from './utilities'

config.searchPseudoElements = true;
config.observeMutations = true;
config.autoReplaceSvg = true;
library.add(faLink, faSearch, faRss, faBars, fab, faAngleLeft, faAngleRight, faChevronUp, faFolderOpen, faPlus, faMinus);
dom.watch(); 

$(window).on('load', function () {
	$("#logo").append(loadSvgFromString(logo))
});
