/*! For license information please see 473bf321.2c7b7349.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{231:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return p}));var n=r(1),a=r(9),o=(r(0),r(430)),c=r(434),i={last_modified_on:"2021-10-21",title:"Rust",description:"Getting started with Rust and Qovery"},s={id:"using-qovery/quickstart/rust",title:"Rust",description:"Getting started with Rust and Qovery",source:"@site/docs/using-qovery/quickstart/rust.md",permalink:"/docs/using-qovery/quickstart/rust",editUrl:"https://github.com/Qovery/documentation/edit/master/website/docs/using-qovery/quickstart/rust.md",sidebar:"docs",previous:{title:"NodeJS",permalink:"/docs/using-qovery/quickstart/nodejs"},next:{title:"Spring",permalink:"/docs/using-qovery/quickstart/spring"}},u=[],l={rightToc:u};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.rust-lang.org/"}),"Rust")," is a multi-paradigm, high-level, general-purpose programming language designed for performance and safety, especially safe concurrency. Rust is syntactically similar to C++, but can guarantee memory safety by using a borrow checker to validate references."),Object(o.b)("p",null,"Here is a list of quickstarts for Rust and Qovery"),Object(o.b)(c.a,{to:"/guides/tutorial/quickstart-rust-rocket/",leftIcon:"book",mdxType:"Jump"},Object(o.b)("div",{className:"title"},"Getting started with Rocket on Qovery")))}p.isMDXComponent=!0},428:function(e,t,r){var n;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)&&n.length){var c=a.apply(null,n);c&&e.push(c)}else if("object"===o)for(var i in n)r.call(n,i)&&n[i]&&e.push(i)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()},430:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i({},t,{},e)),r},p=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),m=n,d=p["".concat(c,".").concat(m)]||p[m]||f[m]||o;return r?a.a.createElement(d,i({ref:t},u,{components:r})):a.a.createElement(d,i({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var u=2;u<o;u++)c[u]=r[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},431:function(e,t,r){"use strict";var n=r(1),a=r(0),o=r.n(a),c=r(39),i=r(435),s=r(19),u=r.n(s);t.a=function(e){var t,r=e.to,s=e.href,l=r||s,p=Object(i.a)(l),f=Object(a.useRef)(!1),m=u.a.canUseIntersectionObserver;return Object(a.useEffect)((function(){return!m&&p&&window.docusaurus.prefetch(l),function(){m&&t&&t.disconnect()}}),[l,m,p]),l&&p?o.a.createElement(c.b,Object(n.a)({},e,{onMouseEnter:function(){f.current||(window.docusaurus.preload(l),f.current=!0)},innerRef:function(e){var r,n;m&&e&&p&&(r=e,n=function(){window.docusaurus.prefetch(l)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){r===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(r),t.disconnect(),n())}))}))).observe(r))},to:l})):o.a.createElement("a",Object(n.a)({},e,{href:l}))}},434:function(e,t,r){"use strict";var n=r(0),a=r.n(n),o=r(431),c=r(428),i=r.n(c);r(132);t.a=function(e){var t=e.children,r=e.className,n=e.badge,c=e.leftIcon,s=e.rightIcon,u=e.size,l=e.target,p=e.to,f=i()("jump-to","jump-to--"+u,r),m=a.a.createElement("div",{className:"jump-to--inner"},a.a.createElement("div",{className:"jump-to--inner-2"},c&&a.a.createElement("div",{className:"jump-to--left"},a.a.createElement("i",{className:"feather icon-"+c})),a.a.createElement("div",{className:"jump-to--main"},n?a.a.createElement("span",{className:"badge badge--primary badge--right"},n):"",t),a.a.createElement("div",{className:"jump-to--right"},a.a.createElement("i",{className:"feather icon-"+(s||"chevron-right")+" arrow"}))));return l?a.a.createElement("a",{href:p,target:l,className:f},m):a.a.createElement(o.a,{to:p,className:f},m)}},435:function(e,t,r){"use strict";function n(e){return!1===/^(https?:|\/\/)/.test(e)}r.d(t,"a",(function(){return n}))}}]);