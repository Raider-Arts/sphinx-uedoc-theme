!function(t){var e={};function i(n){if(e[n])return e[n].exports;var a=e[n]={i:n,l:!1,exports:{}};return t[n].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="_static/",i(i.s=3)}([function(t,e){t.exports=jQuery},function(t,e){var i=!1;$(window).on("load",(function(){$("#head div.hamburger-nav").on("click",(function(){i?($("body").removeClass("scroll-block"),$("div#nav-menu").removeClass("open-nav")):($("body").addClass("scroll-block"),$("div#nav-menu").addClass("open-nav")),i=!i}))}))},function(t,e,i){},function(t,e,i){"use strict";i.r(e);var n=i(0),a=i.n(n);function o(){return window.matchMedia("only screen and (max-width: 1200px)").matches}a()(window).on("load",(function(){a()("table.highlighttable").addClass("highlight")})),a()(window).on("load",(function(){a()("div.footer button.sendto_top").on("click",(function(){a()("html,body").animate({scrollTop:"0px"},300)}))})),a()(window).on("load",(function(){var t=a()("div.section");(t=t.toArray()).shift(),t=a()(t);var e=a()("div#uedoc-localtoc li"),i=a()("div#localtoc div.localtocwrapper");a()(window).on("scroll",(function(){var n=-1,o=void 0;t.each((function(){var t=a()(this).offset().top-a()(window).scrollTop();(-1==n||n>Math.abs(t))&&(n=Math.abs(t),o=a()(this))})),e.each((function(){var t=a()(a()(this).children().get(0)).attr("href");t=t.substr(1),o.attr("id")==t?(function(t,e,i=0){return t.height()+t.scrollTop()-i<e.position().top}(i,a()(this),50)&&i.stop(!0,!1).animate({scrollTop:a()(this).position().top},200),a()(this).addClass("current-reading")):a()(this).removeClass("current-reading")}))}))}));var s=!1;function r(){o()?a()("#navigation").css("display","block"):a()("#navigation").css("display","none"),a()("#sidebar").addClass("sidebar-retracted"),a()("#navigation").css("left","0"),a()("#navigation").css("transform","translateY(0) rotate(0deg)"),s=!1}function d(t=0){var e=a()(window).height()-(a()("#head").height()+a()("div.related").height())+t;if(o(),a()("#sidebar").css("height",String(e)+"px"),0==a()("div#sidebarwidgets").length){var i=a()("div.sphinxsidebarwrapper").children();i.slice(2,i.length).wrapAll("<div id='sidebarwidgets' />")}a()("div#sidebarwidgets").css("height",String(e-(a()("div#navigation").height()+a()("div#searchbox").height()))+"px")}function l(){var t=String(a()(window).height()-285)+"px";a()("div.localtocwrapper").css("max-height",t)}function c(){event.preventDefault(),event.stopPropagation(),aParent=a()(this).parent();var t=aParent.data("state");aParent.data("state",!t),t?(aParent.addClass("sidebar-item-expanded"),aParent.removeClass("sidebar-item-collapsed")):(aParent.removeClass("sidebar-item-expanded"),aParent.addClass("sidebar-item-collapsed")),function t(e){var i=e.children("a").data("state");e.find("li").each((function(){i?a()(this).css("display","none"):a()(this).css("display","block")})),e.find("li").each((function(){t(a()(this))}))}(aParent.parent())}a()(window).on("load",(function(){r(),a()("#navigation").click((function(){s?(a()("#sidebar").addClass("sidebar-retracted"),a()(this).css("left","0"),a()(this).css("transform","translateY(0) rotate(0deg)")):(a()(this).css("transform","translateY(0) rotate(-180deg)"),a()(this).css("left","300px"),a()("#sidebar").removeClass("sidebar-retracted")),s=!s}))})),a()(window).on("resize",r),a()(window).on("load",()=>d()),a()(window).on("resize",()=>d()),a()(window).on("scroll",(function(t){const e=window.scrollY,i=a()("#head").height()+a()("div.related").height();d(e<i?e:i)})),a()(window).on("load",l),a()(window).on("resize",l),a()(window).on("load",(function(){a()("#sidebar li a").each((function(){var t=a()("<span> </span>").addClass("button");a()(this).append(t);var e=a()("<div> </div>").addClass("sidebar-list-hover-wrapper");e.css("height",String(a()(this).outerHeight())+"px"),e.append(a()("<div> </div>").addClass("sidebar-list-hover")),a()(this).append(e),a()(this).contents().filter((function(){return 3===this.nodeType})).wrap("<span />")})),a()("#sidebar li").each((function(){null==a()(this).children("a").data("state")&&a()(this).children("a").data("state",!1),a()(this).data("state")?(a()(this).removeClass("sidebar-item-expanded"),a()(this).addClass("sidebar-item-collapsed")):(a()(this).addClass("sidebar-item-expanded"),a()(this).removeClass("sidebar-item-collapsed")),0==a()(this).find("li").length&&a()(this).addClass("sidebar-no-item-toggle")})),a()("#sidebar li a span.button").on("click",c)})),a()(window).on("load",(function(){var t=a()("div.related li.nav-item-this").children().text();a()("#sidebar li").each((function(){var e=window.location.hash.trim(),i=a()(this).children("a").attr("href"),n=a()(this).children("a").text().trim(),o=!1;""!=e?e===i&&(o=!0):n===t.trim()&&(o=!0),o?a()(this).addClass("selected-link"):a()(this).removeClass("selected-link")}))})),a()(window).on("load",(function(){a()("#sidebar a.reference").on("click",(function(){return a()("#sidebar li").removeClass("selected-link"),a()(this).parent().addClass("selected-link"),!0}))}));var h=null;function u(){if(h&&(h.destroy(),h=null),!o())try{h=window.Split(["#sidebar","#document"],{sizes:[18,100],minSize:[300,450]})}catch(t){}}function p(){var t=a()(this).val();a()("#uedoc-globaltoc li").each((function(){var e=a()(this).text();e&&(e.toUpperCase().indexOf(t.toUpperCase())>-1?a()(this).css("display",""):a()(this).css("display","none"))}))}a()(window).on("load",u),a()(window).on("resize",u),a()(window).on("load",(function(){a()("#uedoc-filter").on("input",p),a()("#uedoc-filter").on("propertychange",p)}));i(1),i(2)}]);