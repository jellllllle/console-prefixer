"use strict";function consolePrefixer(e){e||(e={});var o=e.prefixes||{},r={};return[["debug"],["dir","log","group","groupCollapsed","trace"],["info"],["warn"],["error"]].forEach((function(l,n){for(var s=0,i=l;s<i.length;s++){var t=i[s],c=o[t]||e.defaultPrefix;if(!e.logLevel||n>=e.logLevel)if(c){var f=c.text||"",u=f&&c.style?c.style:"";r[t]=console[t].bind(console,"%c"+f,u)}else r[t]=console[t].bind(console);else r[t]=function(){}}})),r.groupEnd=console.groupEnd,r}Object.defineProperty(exports,"__esModule",{value:!0}),exports.consolePrefixer=void 0,exports.consolePrefixer=consolePrefixer;