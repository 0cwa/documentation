/*! For license information please see 55af4c9e.c7bdbb5a.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{247:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(1),o=n(9),i=(n(0),n(430)),a=n(439),c={last_modified_on:"2021-09-06",$schema:"/.meta/.schemas/guides.json",title:"How to use Github Organizations with Qovery",description:"How to configure Github and Qovery to use your Github Organization repositories with Qovery",author_github:"https://github.com/pjeziorowski",tags:["type: tutorial","technology: qovery"],hide_pagination:!0},u={categories:[{name:"tutorial",title:"Tutorial",description:"Simple step-by-step tutorials.",permalink:"/guides/tutorial"}],coverLabel:"How to use Github Organizations with Qovery",description:"How to configure Github and Qovery to use your Github Organization repositories with Qovery",permalink:"/guides/tutorial/github-organization-repository-access",readingTime:"1 min read",source:"@site/guides/tutorial/github-organization-repository-access.md",tags:[{label:"type: tutorial",permalink:"/guides/tags/type-tutorial"},{label:"technology: qovery",permalink:"/guides/tags/technology-qovery"}],title:"How to use Github Organizations with Qovery",truncated:!1,prevItem:{title:"How to use CloudFront with a React frontend application on Qovery",permalink:"/guides/tutorial/how-to-use-cloudfront-with-react-frontend-application-on-qovery"},nextItem:{title:"How to use the Qovery API",permalink:"/guides/tutorial/how-to-use-the-qovery-api"}},s=[],l={rightToc:s};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"When you create a new application, you need to connect it to a Git repository.\nIf your code is stored in a Github Organization, Qovery needs privileges to access your Organization's repositories\nin order to run deployments."),Object(i.b)("p",{align:"center"},Object(i.b)("img",{src:"/img/github-org-access-1.png",alt:"Github Organization"})),Object(i.b)("p",null,"If Organization repositories are missing in the repository selector, you will need to grant Qovery access to your organization."),Object(i.b)(a.a,{headingDepth:3,mdxType:"Steps"},Object(i.b)("ol",null,Object(i.b)("li",null,Object(i.b)("p",null,"Navigate to ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/settings/connections/applications/f54d3da8bad40800b3bf"}),"Qovery Github Application"))),Object(i.b)("li",null,Object(i.b)("p",null,"Make sure Qovery has access to the organization you want to use (grant permissions if necessary)"),Object(i.b)("p",{align:"center"},Object(i.b)("img",{src:"/img/github-org-access-2.png",alt:"Github Organization"}))))),Object(i.b)("p",null,"After following the steps from above, you should be able to select your organization repositories in Qovery Console while creating an application."))}p.isMDXComponent=!0},428:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)&&r.length){var a=o.apply(null,r);a&&e.push(a)}else if("object"===i)for(var c in r)n.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},430:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return y}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),l=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=l(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=l(n),b=r,y=p["".concat(a,".").concat(b)]||p[b]||f[b]||i;return n?o.a.createElement(y,c({ref:t},s,{components:n})):o.a.createElement(y,c({ref:t},s))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=b;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},438:function(e,t,n){"use strict";var r=n(440),o=n(51);function i(e,t){return t.encode?t.strict?r(e):encodeURIComponent(e):e}t.extract=function(e){return e.split("?")[1]||""},t.parse=function(e,t){var n=function(e){var t;switch(e.arrayFormat){case"index":return function(e,n,r){t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===r[e]&&(r[e]={}),r[e][t[1]]=n):r[e]=n};case"bracket":return function(e,n,r){t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==r[e]?r[e]=[].concat(r[e],n):r[e]=[n]:r[e]=n};default:return function(e,t,n){void 0!==n[e]?n[e]=[].concat(n[e],t):n[e]=t}}}(t=o({arrayFormat:"none"},t)),r=Object.create(null);return"string"!=typeof e?r:(e=e.trim().replace(/^(\?|#|&)/,""))?(e.split("&").forEach((function(e){var t=e.replace(/\+/g," ").split("="),o=t.shift(),i=t.length>0?t.join("="):void 0;i=void 0===i?null:decodeURIComponent(i),n(decodeURIComponent(o),i,r)})),Object.keys(r).sort().reduce((function(e,t){var n=r[t];return Boolean(n)&&"object"==typeof n&&!Array.isArray(n)?e[t]=function e(t){return Array.isArray(t)?t.sort():"object"==typeof t?e(Object.keys(t)).sort((function(e,t){return Number(e)-Number(t)})).map((function(e){return t[e]})):t}(n):e[t]=n,e}),Object.create(null))):r},t.stringify=function(e,t){var n=function(e){switch(e.arrayFormat){case"index":return function(t,n,r){return null===n?[i(t,e),"[",r,"]"].join(""):[i(t,e),"[",i(r,e),"]=",i(n,e)].join("")};case"bracket":return function(t,n){return null===n?i(t,e):[i(t,e),"[]=",i(n,e)].join("")};default:return function(t,n){return null===n?i(t,e):[i(t,e),"=",i(n,e)].join("")}}}(t=o({encode:!0,strict:!0,arrayFormat:"none"},t));return e?Object.keys(e).sort().map((function(r){var o=e[r];if(void 0===o)return"";if(null===o)return i(r,t);if(Array.isArray(o)){var a=[];return o.slice().forEach((function(e){void 0!==e&&a.push(n(r,e,a.length))})),a.join("&")}return i(r,t)+"="+i(o,t)})).filter((function(e){return e.length>0})).join("&"):""}},439:function(e,t,n){"use strict";var r=n(0),o=n.n(r),i=(n(428),n(438)),a=n.n(i);n(133);t.a=function(e){var t=e.children,n=e.headingDepth,i=e.hideFeedbackQuestion,c="undefined"!=typeof window?window.location:null,u={title:"Tutorial on "+c+" failed",body:"The tutorial on:\n\n"+c+"\n\nHere's what went wrong:\n\n\x3c!-- Insert command output and details. Thank you for reporting! :) --\x3e"},s="https://github.com/qovery/documentation/issues/new?"+a.a.stringify(u),l=Object(r.useState)(null),p=l[0],f=l[1];return o.a.createElement("div",{className:"steps steps--h"+n},t,!i&&!p&&o.a.createElement("div",{className:"steps--feedback"},"How was it? Did this tutorial work?\xa0\xa0",o.a.createElement("span",{className:"button button--sm button--primary",onClick:function(){return f("yes")}},"Yes"),"\xa0\xa0",o.a.createElement("a",{href:s,target:"_blank",className:"button button--sm button--primary"},"No")),"yes"==p&&o.a.createElement("div",{className:"steps--feedback steps--feedback--success"},"Thanks! If you're enjoying Qovery please consider ",o.a.createElement("a",{href:"https://github.com/qovery/documentation/",target:"_blank"},"starring our Github repo"),"."))}},440:function(e,t,n){"use strict";e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}}}]);