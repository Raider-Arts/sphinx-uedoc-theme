import './utilities'
import './localtoc';
import './sidebar';
import './splitter';
import './filter-pages';
import './nav-header';
import { library, dom, config } from'@fortawesome/fontawesome-svg-core';
import { faLink, faSearch, faRss, faBars } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

config.searchPseudoElements = true;
config.observeMutations = true;
config.autoReplaceSvg = true;
library.add(faLink, faSearch, faRss, faBars, fab);
dom.watch(); 