/*! For license information please see 0578cd49.1766069f.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{157:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return b}));var r=n(1),a=n(9),o=(n(0),n(419)),i=n(418),c=n(428),s={last_modified_on:"2021-07-07",$schema:"/.meta/.schemas/guides.json",title:"Environment variables",description:"How to manage environment variables in your projects and applications",series_position:4,author_github:"https://github.com/evoxmusic",tags:["type: guide","technology: qovery"]},l={categories:[{name:"getting-started",title:"Getting Started",description:"Take Qovery from zero to production in under 10 minutes.",permalink:"/guides/getting-started"}],coverLabel:"Environment variables",description:"How to manage environment variables in your projects and applications",permalink:"/guides/getting-started/managing-environment-variables",readingTime:"2 min read",seriesPosition:4,source:"@site/guides/getting-started/managing-environment-variables.md",tags:[{label:"type: guide",permalink:"/guides/tags/type-guide"},{label:"technology: qovery",permalink:"/guides/tags/technology-qovery"}],title:"Environment variables",truncated:!1,prevItem:{title:"Custom domain",permalink:"/guides/getting-started/setting-custom-domain"},nextItem:{title:"Debugging",permalink:"/guides/getting-started/debugging"}},u=[{value:"Tutorial",id:"tutorial",children:[{value:"Create an environment variable",id:"create-an-environment-variable",children:[]},{value:"Use the environment variable in the app",id:"use-the-environment-variable-in-the-app",children:[]}]}],p={rightToc:u};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Sometimes you need to pass data to your application. E.g: API key, credentials, debug parameters. For this reason, Qovery allows you to\nsecurely pass your data by using ",Object(o.b)("em",{parentName:"p"},"Environment Variables"),"."),Object(o.b)(i.a,{type:"info",mdxType:"Alert"},Object(o.b)("p",null,"Do you need to keep secure your environment variable? Use ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/secret/"}),"Secret")," instead of ",Object(o.b)("strong",{parentName:"p"},"Environment\nVariable"),".")),Object(o.b)("p",null,"Here is a short video to show how to use environment variables."),Object(o.b)("div",{class:"video-container"},Object(o.b)("p",{align:"center"},Object(o.b)("iframe",{src:"https://www.loom.com/embed/4a8000605cd842519a32eb96feecda61",width:"100%",height:"100%",frameborder:"0",webkitallowfullscreen:!0,mozallowfullscreen:!0,allowfullscreen:!0}))),Object(o.b)("h2",{id:"tutorial"},"Tutorial"),Object(o.b)("p",null,"Here is an example on how to pass an environment variable to a NodeJS app."),Object(o.b)(i.a,{type:"info",mdxType:"Alert"},Object(o.b)("p",null,"Steps are similar for Secrets.")),Object(o.b)("p",null,"Let's first create a new Node.js application that uses environment variables."),Object(o.b)(c.a,{headingDepth:3,mdxType:"Steps"},Object(o.b)("ol",null,Object(o.b)("li",null,Object(o.b)("h3",{id:"create-an-environment-variable"},"Create an environment variable"),Object(o.b)("p",null,"Let's say that we pass an environment variable ",Object(o.b)("inlineCode",{parentName:"p"},"ENABLE_DEBUG")," that turns on the debug info from the app."),Object(o.b)("p",null,"Click on the ",Object(o.b)("inlineCode",{parentName:"p"},"environment variables")," tab inside your app view."),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/img/environment_variables.png",alt:"List environment variables"})),Object(o.b)("p",null,'Click on "create", and then add the ',Object(o.b)("inlineCode",{parentName:"p"},"ENABLE_DEBUG")," variable with a boolean value."),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/img/create_environment_variable.png",alt:"Create environment variable"}))),Object(o.b)("li",null,Object(o.b)("h3",{id:"use-the-environment-variable-in-the-app"},"Use the environment variable in the app"),Object(o.b)("p",null,"Create ",Object(o.b)("inlineCode",{parentName:"p"},"app.js")," file - a simple Node.js HTTP server application:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript",metastring:'title="app.js" {6-10}',title:'"app.js"',"{6-10}":!0}),"const http = require('http');\n\nconst hostname = '0.0.0.0';\nconst port = 3333;\n\nconst enableDebug = process.env.ENABLE_DEBUG\n\nif (enableDebug) {\n  console.log(\"debug mode enabled\");\n}\n\nconst server = http.createServer((req, res) => {\n  res.statusCode = 200;\n  res.setHeader('Content-Type', 'text/plain');\n  res.end(\"hello world\");\n});\n\nserver.listen(port, hostname, () => {\n  console.log(`Server running at http://${hostname}:${port}/`);\n});\n")),Object(o.b)("p",null,"As you can see, to get access to your environment variable you just need to use process.env.",Object(o.b)("inlineCode",{parentName:"p"},"ENABLE_DEBUG"),". Environment variables are\ninjected at the build and run time.")))),Object(o.b)("p",null,"This guide was an introduction on how to use the Environment Variables. To know more\nabout ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/environment-variable/"}),"Environment Variables")," and ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/secret/"}),"Secrets"),",\ngo to our ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/"}),"detailed documentation"),"."))}b.isMDXComponent=!0},417:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var i=a.apply(null,r);i&&e.push(i)}else if("object"===o)for(var c in r)n.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},418:function(e,t,n){"use strict";n(421);var r=n(0),a=n.n(r),o=n(417),i=n.n(o);n(131);t.a=function(e){var t=e.children,n=e.classNames,r=e.fill,o=e.icon,c=e.type,s=null;switch(c){case"danger":s="alert-triangle";break;case"success":s="check-circle";break;case"warning":s="alert-triangle";break;default:s="info"}return a.a.createElement("div",{className:i()(n,"alert","alert--"+c,{"alert--fill":r,"alert--icon":!1!==o}),role:"alert"},!1!==o&&a.a.createElement("i",{className:i()("feather","icon-"+(o||s))}),t)}},419:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,m=p["".concat(i,".").concat(d)]||p[d]||b[d]||o;return n?a.a.createElement(m,c({ref:t},l,{components:n})):a.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},421:function(e,t,n){var r=n(12);r(r.P,"Array",{fill:n(426)}),n(74)("fill")},426:function(e,t,n){"use strict";var r=n(27),a=n(75),o=n(26);e.exports=function(e){for(var t=r(this),n=o(t.length),i=arguments.length,c=a(i>1?arguments[1]:void 0,n),s=i>2?arguments[2]:void 0,l=void 0===s?n:a(s,n);l>c;)t[c++]=e;return t}},427:function(e,t,n){"use strict";var r=n(430),a=n(51);function o(e,t){return t.encode?t.strict?r(e):encodeURIComponent(e):e}t.extract=function(e){return e.split("?")[1]||""},t.parse=function(e,t){var n=function(e){var t;switch(e.arrayFormat){case"index":return function(e,n,r){t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===r[e]&&(r[e]={}),r[e][t[1]]=n):r[e]=n};case"bracket":return function(e,n,r){t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==r[e]?r[e]=[].concat(r[e],n):r[e]=[n]:r[e]=n};default:return function(e,t,n){void 0!==n[e]?n[e]=[].concat(n[e],t):n[e]=t}}}(t=a({arrayFormat:"none"},t)),r=Object.create(null);return"string"!=typeof e?r:(e=e.trim().replace(/^(\?|#|&)/,""))?(e.split("&").forEach((function(e){var t=e.replace(/\+/g," ").split("="),a=t.shift(),o=t.length>0?t.join("="):void 0;o=void 0===o?null:decodeURIComponent(o),n(decodeURIComponent(a),o,r)})),Object.keys(r).sort().reduce((function(e,t){var n=r[t];return Boolean(n)&&"object"==typeof n&&!Array.isArray(n)?e[t]=function e(t){return Array.isArray(t)?t.sort():"object"==typeof t?e(Object.keys(t)).sort((function(e,t){return Number(e)-Number(t)})).map((function(e){return t[e]})):t}(n):e[t]=n,e}),Object.create(null))):r},t.stringify=function(e,t){var n=function(e){switch(e.arrayFormat){case"index":return function(t,n,r){return null===n?[o(t,e),"[",r,"]"].join(""):[o(t,e),"[",o(r,e),"]=",o(n,e)].join("")};case"bracket":return function(t,n){return null===n?o(t,e):[o(t,e),"[]=",o(n,e)].join("")};default:return function(t,n){return null===n?o(t,e):[o(t,e),"=",o(n,e)].join("")}}}(t=a({encode:!0,strict:!0,arrayFormat:"none"},t));return e?Object.keys(e).sort().map((function(r){var a=e[r];if(void 0===a)return"";if(null===a)return o(r,t);if(Array.isArray(a)){var i=[];return a.slice().forEach((function(e){void 0!==e&&i.push(n(r,e,i.length))})),i.join("&")}return o(r,t)+"="+o(a,t)})).filter((function(e){return e.length>0})).join("&"):""}},428:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=(n(417),n(427)),i=n.n(o);n(133);t.a=function(e){var t=e.children,n=e.headingDepth,o=e.hideFeedbackQuestion,c="undefined"!=typeof window?window.location:null,s={title:"Tutorial on "+c+" failed",body:"The tutorial on:\n\n"+c+"\n\nHere's what went wrong:\n\n\x3c!-- Insert command output and details. Thank you for reporting! :) --\x3e"},l="https://github.com/qovery/documentation/issues/new?"+i.a.stringify(s),u=Object(r.useState)(null),p=u[0],b=u[1];return a.a.createElement("div",{className:"steps steps--h"+n},t,!o&&!p&&a.a.createElement("div",{className:"steps--feedback"},"How was it? Did this tutorial work?\xa0\xa0",a.a.createElement("span",{className:"button button--sm button--primary",onClick:function(){return b("yes")}},"Yes"),"\xa0\xa0",a.a.createElement("a",{href:l,target:"_blank",className:"button button--sm button--primary"},"No")),"yes"==p&&a.a.createElement("div",{className:"steps--feedback steps--feedback--success"},"Thanks! If you're enjoying Qovery please consider ",a.a.createElement("a",{href:"https://github.com/qovery/documentation/",target:"_blank"},"starring our Github repo"),"."))}},430:function(e,t,n){"use strict";e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}}}]);