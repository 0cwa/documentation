/*! For license information please see 068975e8.c61db21e.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{158:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(1),o=n(9),a=(n(0),n(419)),c=n(423),i={last_modified_on:"2021-10-19",title:"Languages",description:"Everything you need to know to build your apps on Qovery",sidebar_label:"hidden",hide_pagination:!0},u={id:"using-qovery/languages",title:"Languages",description:"Everything you need to know to build your apps on Qovery",source:"@site/docs/using-qovery/languages.md",permalink:"/docs/using-qovery/languages",editUrl:"https://github.com/Qovery/documentation/edit/master/website/docs/using-qovery/languages.md",sidebar_label:"hidden",sidebar:"docs",previous:{title:"Scaleway (SCW)",permalink:"/docs/using-qovery/configuration/cloud-service-provider/scaleway"},next:{title:"NodeJS",permalink:"/docs/using-qovery/languages/nodejs"}},s=[],l={rightToc:s};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"In the following subsections, you'll learn all you need to know to configure your application builds on Qovery."),Object(a.b)(c.a,{to:"/docs/using-qovery/languages/go/",mdxType:"Jump"},"Go"),Object(a.b)(c.a,{to:"/docs/using-qovery/languages/java/",mdxType:"Jump"},"Java"),Object(a.b)(c.a,{to:"/docs/using-qovery/languages/nodejs/",mdxType:"Jump"},"Nodejs"),Object(a.b)(c.a,{to:"/docs/using-qovery/languages/php/",mdxType:"Jump"},"Php"),Object(a.b)(c.a,{to:"/docs/using-qovery/languages/python/",mdxType:"Jump"},"Python"),Object(a.b)(c.a,{to:"/docs/using-qovery/languages/ruby/",mdxType:"Jump"},"Ruby"))}p.isMDXComponent=!0},417:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)&&r.length){var c=o.apply(null,r);c&&e.push(c)}else if("object"===a)for(var i in r)n.call(r,i)&&r[i]&&e.push(i)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},419:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),l=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},p=function(e){var t=l(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=l(n),f=r,m=p["".concat(c,".").concat(f)]||p[f]||d[f]||a;return n?o.a.createElement(m,i({ref:t},s,{components:n})):o.a.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<a;s++)c[s]=n[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},420:function(e,t,n){"use strict";var r=n(1),o=n(0),a=n.n(o),c=n(39),i=n(424),u=n(19),s=n.n(u);t.a=function(e){var t,n=e.to,u=e.href,l=n||u,p=Object(i.a)(l),d=Object(o.useRef)(!1),f=s.a.canUseIntersectionObserver;return Object(o.useEffect)((function(){return!f&&p&&window.docusaurus.prefetch(l),function(){f&&t&&t.disconnect()}}),[l,f,p]),l&&p?a.a.createElement(c.b,Object(r.a)({},e,{onMouseEnter:function(){d.current||(window.docusaurus.preload(l),d.current=!0)},innerRef:function(e){var n,r;f&&e&&p&&(n=e,r=function(){window.docusaurus.prefetch(l)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){n===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(n),t.disconnect(),r())}))}))).observe(n))},to:l})):a.a.createElement("a",Object(r.a)({},e,{href:l}))}},423:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(420),c=n(417),i=n.n(c);n(132);t.a=function(e){var t=e.children,n=e.className,r=e.badge,c=e.leftIcon,u=e.rightIcon,s=e.size,l=e.target,p=e.to,d=i()("jump-to","jump-to--"+s,n),f=o.a.createElement("div",{className:"jump-to--inner"},o.a.createElement("div",{className:"jump-to--inner-2"},c&&o.a.createElement("div",{className:"jump-to--left"},o.a.createElement("i",{className:"feather icon-"+c})),o.a.createElement("div",{className:"jump-to--main"},r?o.a.createElement("span",{className:"badge badge--primary badge--right"},r):"",t),o.a.createElement("div",{className:"jump-to--right"},o.a.createElement("i",{className:"feather icon-"+(u||"chevron-right")+" arrow"}))));return l?o.a.createElement("a",{href:p,target:l,className:d},f):o.a.createElement(a.a,{to:p,className:d},f)}},424:function(e,t,n){"use strict";function r(e){return!1===/^(https?:|\/\/)/.test(e)}n.d(t,"a",(function(){return r}))}}]);