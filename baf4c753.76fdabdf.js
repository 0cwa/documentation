/*! For license information please see baf4c753.76fdabdf.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{268:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return p}));var n=r(1),o=r(9),a=(r(0),r(332)),i=r(339),c={last_modified_on:"2021-01-28",title:"Get Started",description:"Learn how to get started with Qovery Business"},l={id:"using-qovery/configuration/business/get-started",title:"Get Started",description:"Learn how to get started with Qovery Business",source:"@site/docs/using-qovery/configuration/business/get-started.md",permalink:"/docs/using-qovery/configuration/business/get-started",editUrl:"https://github.com/Qovery/documentation/edit/master/website/docs/using-qovery/configuration/business/get-started.md",sidebar:"docs",previous:{title:"Business \u2b50\ufe0f",permalink:"/docs/using-qovery/configuration/business"},next:{title:"Policy",permalink:"/docs/using-qovery/configuration/business/policy"}},s=[{value:"Install Qovery",id:"install-qovery",children:[]},{value:"What&#39;s next?",id:"whats-next",children:[]}],u={rightToc:s};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"To deploy your apps on your Cloud provider account you need to install Qovery."),Object(a.b)(i.a,{mdxType:"Assumptions"},Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"You have a ",Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/using-qovery/interface/"}),"Qovery")," account"))),Object(a.b)("h2",{id:"install-qovery"},"Install Qovery"),Object(a.b)("p",null,"In 4 steps only you can install Qovery on your Cloud provider account you only need to:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/using-qovery/configuration/business/organization/"}),"Create an Organization"),".")),Object(a.b)("p",{align:"center"},Object(a.b)("img",{src:"/img/qovery_create_organization.svg",alt:"Qovery - Create an Organization"})),Object(a.b)("ol",{start:2},Object(a.b)("li",{parentName:"ol"},"Select your Cloud provider where you want to use Qovery and insert the required Credentials.")),Object(a.b)("p",{align:"center"},Object(a.b)("img",{src:"/img/qovery_select_cloud_provider.svg",alt:"Qovery - Select your Cloud provider"})),Object(a.b)("ol",{start:3},Object(a.b)("li",{parentName:"ol"},"Select the closest region from your users to have the best latency.")),Object(a.b)("p",{align:"center"},Object(a.b)("img",{src:"/img/qovery_select_cloud_provider_region.svg",alt:"Qovery - Select your Cloud provider"})),Object(a.b)("ol",{start:4},Object(a.b)("li",{parentName:"ol"},"Congrats! Qovery will be installed within 30 minutes \ud83c\udf89.")),Object(a.b)("p",{align:"center"},Object(a.b)("img",{src:"/img/qovery_installation_waiting_state.svg",alt:"Qovery - Select your Cloud provider"})),Object(a.b)("h2",{id:"whats-next"},"What's next?"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Invite your teammates."),Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"/guides/getting-started/deploy-your-first-application/"}),"Deploy your first app")," on your Cloud provider account."),Object(a.b)("li",{parentName:"ol"},"See how to control your cost with ",Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/using-qovery/configuration/business/policy/"}),"Policies"),".")))}p.isMDXComponent=!0},331:function(e,t,r){var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a=typeof n;if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n)&&n.length){var i=o.apply(null,n);i&&e.push(i)}else if("object"===a)for(var c in n)r.call(n,c)&&n[c]&&e.push(c)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},332:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},p=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},y=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(r),y=n,f=p["".concat(i,".").concat(y)]||p[y]||b[y]||a;return r?o.a.createElement(f,c({ref:t},s,{components:r})):o.a.createElement(f,c({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=y;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}y.displayName="MDXCreateElement"},334:function(e,t,r){"use strict";r(338);var n=r(0),o=r.n(n),a=r(331),i=r.n(a);r(132);t.a=function(e){var t=e.children,r=e.classNames,n=e.fill,a=e.icon,c=e.type,l=null;switch(c){case"danger":l="alert-triangle";break;case"success":l="check-circle";break;case"warning":l="alert-triangle";break;default:l="info"}return o.a.createElement("div",{className:i()(r,"alert","alert--"+c,{"alert--fill":n,"alert--icon":!1!==a}),role:"alert"},!1!==a&&o.a.createElement("i",{className:i()("feather","icon-"+(a||l))}),t)}},337:function(e,t,r){var n=r(25).f,o=Function.prototype,a=/^\s*function ([^ (]*)/;"name"in o||r(10)&&n(o,"name",{configurable:!0,get:function(){try{return(""+this).match(a)[1]}catch(e){return""}}})},338:function(e,t,r){var n=r(12);n(n.P,"Array",{fill:r(341)}),r(75)("fill")},339:function(e,t,r){"use strict";r(337);var n=r(0),o=r.n(n),a=r(334);t.a=function(e){var t=e.children,r=e.name;return o.a.createElement(a.a,{type:"info",fill:!0,icon:!1,rounded:!0,className:"list--icons list--icons--arrow list--tight list--indent margin-bottom--lg"},o.a.createElement("p",{class:"text--lg margin-bottom--sm",style:{marginTop:"-0.25em"}},"Before you begin, this ",r||"page"," assumes the following:"),t)}},341:function(e,t,r){"use strict";var n=r(27),o=r(76),a=r(26);e.exports=function(e){for(var t=n(this),r=a(t.length),i=arguments.length,c=o(i>1?arguments[1]:void 0,r),l=i>2?arguments[2]:void 0,s=void 0===l?r:o(l,r);s>c;)t[c++]=e;return t}}}]);