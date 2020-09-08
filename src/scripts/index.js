import './utilities'
import './localtoc';
import './sidebar';
import './splitter';
import './filter-pages';
import './nav-header';
import '@fortawesome/fontawesome-free/css/all.css';
import { library, dom } from'@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fas, fab, far);
dom.watch(); 