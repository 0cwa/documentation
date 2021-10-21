/*! For license information please see 6499cfb3.fbd5c05a.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{260:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return p}));var n=r(1),a=r(9),i=(r(0),r(419)),o=r(423),c={last_modified_on:"2021-10-21",title:"Meilisearch",description:"Getting started with Meilisearch and Qovery"},s={id:"using-qovery/quickstart/meilisearch",title:"Meilisearch",description:"Getting started with Meilisearch and Qovery",source:"@site/docs/using-qovery/quickstart/meilisearch.md",permalink:"/docs/using-qovery/quickstart/meilisearch",editUrl:"https://github.com/Qovery/documentation/edit/master/website/docs/using-qovery/quickstart/meilisearch.md",sidebar:"docs",previous:{title:"Strapi",permalink:"/docs/using-qovery/quickstart/strapi"},next:{title:"NodeJS",permalink:"/docs/using-qovery/quickstart/nodejs"}},u=[],l={rightToc:u};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.meilisearch.com/"}),"MeiliSearch")," is a powerful, fast, open-source, easy to use and deploy search engine. Both searching and indexing are highly customizable. Features such as typo-tolerance, filters, and synonyms are provided out-of-the-box."),Object(i.b)("p",null,"Here is a list of quickstarts for Meilisearch and Qovery"),Object(i.b)(o.a,{to:"/guides/tutorial/quickstart-meilisearch/",leftIcon:"book",mdxType:"Jump"},Object(i.b)("div",{className:"title"},"Getting started with Meilisearch on Qovery")))}p.isMDXComponent=!0},417:function(e,t,r){var n;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)&&n.length){var o=a.apply(null,n);o&&e.push(o)}else if("object"===i)for(var c in n)r.call(n,c)&&n[c]&&e.push(c)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()},419:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},p=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),m=n,d=p["".concat(o,".").concat(m)]||p[m]||f[m]||i;return r?a.a.createElement(d,c({ref:t},u,{components:r})):a.a.createElement(d,c({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var u=2;u<i;u++)o[u]=r[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},420:function(e,t,r){"use strict";var n=r(1),a=r(0),i=r.n(a),o=r(39),c=r(424),s=r(19),u=r.n(s);t.a=function(e){var t,r=e.to,s=e.href,l=r||s,p=Object(c.a)(l),f=Object(a.useRef)(!1),m=u.a.canUseIntersectionObserver;return Object(a.useEffect)((function(){return!m&&p&&window.docusaurus.prefetch(l),function(){m&&t&&t.disconnect()}}),[l,m,p]),l&&p?i.a.createElement(o.b,Object(n.a)({},e,{onMouseEnter:function(){f.current||(window.docusaurus.preload(l),f.current=!0)},innerRef:function(e){var r,n;m&&e&&p&&(r=e,n=function(){window.docusaurus.prefetch(l)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){r===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(r),t.disconnect(),n())}))}))).observe(r))},to:l})):i.a.createElement("a",Object(n.a)({},e,{href:l}))}},423:function(e,t,r){"use strict";var n=r(0),a=r.n(n),i=r(420),o=r(417),c=r.n(o);r(132);t.a=function(e){var t=e.children,r=e.className,n=e.badge,o=e.leftIcon,s=e.rightIcon,u=e.size,l=e.target,p=e.to,f=c()("jump-to","jump-to--"+u,r),m=a.a.createElement("div",{className:"jump-to--inner"},a.a.createElement("div",{className:"jump-to--inner-2"},o&&a.a.createElement("div",{className:"jump-to--left"},a.a.createElement("i",{className:"feather icon-"+o})),a.a.createElement("div",{className:"jump-to--main"},n?a.a.createElement("span",{className:"badge badge--primary badge--right"},n):"",t),a.a.createElement("div",{className:"jump-to--right"},a.a.createElement("i",{className:"feather icon-"+(s||"chevron-right")+" arrow"}))));return l?a.a.createElement("a",{href:p,target:l,className:f},m):a.a.createElement(i.a,{to:p,className:f},m)}},424:function(e,t,r){"use strict";function n(e){return!1===/^(https?:|\/\/)/.test(e)}r.d(t,"a",(function(){return n}))}}]);