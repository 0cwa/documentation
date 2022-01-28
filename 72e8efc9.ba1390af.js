/*! For license information please see 72e8efc9.ba1390af.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[124],{274:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return u})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return p}));var n=r(1),a=r(9),o=(r(0),r(431)),c=r(435),i={last_modified_on:"2021-10-09",title:"Infrastructure as Code",description:"How to use infrastructure as code (IaC) with Qovery",sidebar_label:"hidden",hide_pagination:!0},u={id:"devops/infrastructure-as-code",title:"Infrastructure as Code",description:"How to use infrastructure as code (IaC) with Qovery",source:"@site/docs/devops/infrastructure-as-code.md",permalink:"/docs/devops/infrastructure-as-code",editUrl:"https://github.com/Qovery/documentation/edit/master/website/docs/devops/infrastructure-as-code.md",sidebar_label:"hidden",sidebar:"docs",previous:{title:"Introduction",permalink:"/docs/devops/qovery-for-devops-introduction"},next:{title:"Terraform",permalink:"/docs/devops/infrastructure-as-code/terraform"}},s=[],f={rightToc:s};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},f,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Qovery is fully configurable by using Terraform or the language of your choice via our REST API. This is the best way to programmatically configure your infrastructure and do whatever you need."),Object(o.b)(c.a,{to:"/docs/devops/infrastructure-as-code/rest-api/",mdxType:"Jump"},"Rest api"),Object(o.b)(c.a,{to:"/docs/devops/infrastructure-as-code/terraform/",mdxType:"Jump"},"Terraform"))}p.isMDXComponent=!0},429:function(e,t,r){var n;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)&&n.length){var c=a.apply(null,n);c&&e.push(c)}else if("object"===o)for(var i in n)r.call(n,i)&&n[i]&&e.push(i)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()},431:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),f=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i({},t,{},e)),r},p=function(e){var t=f(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=f(r),d=n,m=p["".concat(c,".").concat(d)]||p[d]||l[d]||o;return r?a.a.createElement(m,i({ref:t},s,{components:r})):a.a.createElement(m,i({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var s=2;s<o;s++)c[s]=r[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},432:function(e,t,r){"use strict";var n=r(1),a=r(0),o=r.n(a),c=r(39),i=r(436),u=r(19),s=r.n(u);t.a=function(e){var t,r=e.to,u=e.href,f=r||u,p=Object(i.a)(f),l=Object(a.useRef)(!1),d=s.a.canUseIntersectionObserver;return Object(a.useEffect)((function(){return!d&&p&&window.docusaurus.prefetch(f),function(){d&&t&&t.disconnect()}}),[f,d,p]),f&&p?o.a.createElement(c.b,Object(n.a)({},e,{onMouseEnter:function(){l.current||(window.docusaurus.preload(f),l.current=!0)},innerRef:function(e){var r,n;d&&e&&p&&(r=e,n=function(){window.docusaurus.prefetch(f)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){r===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(r),t.disconnect(),n())}))}))).observe(r))},to:f})):o.a.createElement("a",Object(n.a)({},e,{href:f}))}},435:function(e,t,r){"use strict";var n=r(0),a=r.n(n),o=r(432),c=r(429),i=r.n(c);r(132);t.a=function(e){var t=e.children,r=e.className,n=e.badge,c=e.leftIcon,u=e.rightIcon,s=e.size,f=e.target,p=e.to,l=i()("jump-to","jump-to--"+s,r),d=a.a.createElement("div",{className:"jump-to--inner"},a.a.createElement("div",{className:"jump-to--inner-2"},c&&a.a.createElement("div",{className:"jump-to--left"},a.a.createElement("i",{className:"feather icon-"+c})),a.a.createElement("div",{className:"jump-to--main"},n?a.a.createElement("span",{className:"badge badge--primary badge--right"},n):"",t),a.a.createElement("div",{className:"jump-to--right"},a.a.createElement("i",{className:"feather icon-"+(u||"chevron-right")+" arrow"}))));return f?a.a.createElement("a",{href:p,target:f,className:l},d):a.a.createElement(o.a,{to:p,className:l},d)}},436:function(e,t,r){"use strict";function n(e){return!1===/^(https?:|\/\/)/.test(e)}r.d(t,"a",(function(){return n}))}}]);