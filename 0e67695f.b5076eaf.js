/*! For license information please see 0e67695f.b5076eaf.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{170:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return u}));var n=r(1),a=r(9),o=(r(0),r(427)),i=(r(426),r(433),r(431),{last_modified_on:"2021-11-19",$schema:"/.meta/.schemas/guides.json",title:"Getting started with Laravel on Qovery",description:"How to quickly deploy a Laravel app on Qovery",author_github:"https://github.com/pjeziorowski",tags:["type: guide","framework: laravel"],hide_pagination:!0}),c={categories:[{name:"tutorial",title:"Tutorial",description:"Simple step-by-step tutorials.",permalink:"/guides/tutorial"}],coverLabel:"Getting started with Laravel on Qovery",description:"How to quickly deploy a Laravel app on Qovery",permalink:"/guides/tutorial/quickstart-laravel",readingTime:"2 min read",source:"@site/guides/tutorial/quickstart-laravel.md",tags:[{label:"type: guide",permalink:"/guides/tags/type-guide"},{label:"framework: laravel",permalink:"/guides/tags/framework-laravel"}],title:"Getting started with Laravel on Qovery",truncated:!1,prevItem:{title:"Getting started with Golang on Qovery",permalink:"/guides/tutorial/quickstart-go"},nextItem:{title:"Getting started with Meilisearch on Qovery",permalink:"/guides/tutorial/quickstart-meilisearch"}},l=[{value:"Source Code",id:"source-code",children:[]},{value:"App Setup",id:"app-setup",children:[]},{value:"Env Vars",id:"env-vars",children:[]},{value:"Deploy",id:"deploy",children:[]},{value:"Logs",id:"logs",children:[]},{value:"Push Changes",id:"push-changes",children:[]}],s={rightToc:l};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This tutorial will have you deploying a ",Object(o.b)("strong",{parentName:"p"},"Laravel")," app in minutes."),Object(o.b)("p",null,"Laravel is a free, open-source PHP web framework, created by Taylor Otwell and intended for the development of web applications following the model\u2013view\u2013controller architectural pattern and based on Symfony. "),Object(o.b)("h2",{id:"source-code"},"Source Code"),Object(o.b)("p",null,"In the tutorial, we will use a sample application ready to be deployed on Qovery. To get the application source code, please ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Qovery/qovery-php-laravel-sample"}),"fork this repository"),"."),Object(o.b)("h2",{id:"app-setup"},"App Setup"),Object(o.b)("p",null,"In ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://start.qovery.com"}),"Qovery Console"),", choose or create your project and environment. Then, add a new application:"),Object(o.b)("p",null,Object(o.b)("img",{src:"/img/quickstart-1.png",alt:"Laravel"})),Object(o.b)("p",null,"In ",Object(o.b)("strong",{parentName:"p"},"Git Repository"),", pick the forked application source code repository."),Object(o.b)("p",null,"In the ",Object(o.b)("strong",{parentName:"p"},"Port")," section type ",Object(o.b)("strong",{parentName:"p"},"6001"),"."),Object(o.b)("p",null,"That's it, create!"),Object(o.b)("h2",{id:"env-vars"},"Env Vars"),Object(o.b)("p",null,"The last step is to add a ",Object(o.b)("strong",{parentName:"p"},"PORT")," environment variable. To do so, navigate to your application and add a new ",Object(o.b)("strong",{parentName:"p"},"PORT")," variable with value ",Object(o.b)("strong",{parentName:"p"},"6001"),":"),Object(o.b)("p",null,Object(o.b)("img",{src:"/img/quickstart-3.png",alt:"Laravel"})),Object(o.b)("h2",{id:"deploy"},"Deploy"),Object(o.b)("p",null,"It's all ready. In your application's screen click on ",Object(o.b)("strong",{parentName:"p"},"Actions")," and ",Object(o.b)("strong",{parentName:"p"},"Deploy")," your application."),Object(o.b)("p",null,Object(o.b)("img",{src:"/img/quickstart-4.png",alt:"Laravel"})),Object(o.b)("h2",{id:"logs"},"Logs"),Object(o.b)("p",null,"To see the progress of your deployment and the output of your application, click on ",Object(o.b)("strong",{parentName:"p"},"Show Logs")," button. You can navigate between build/deployment logs as well as your application runtime logs."),Object(o.b)("p",null,Object(o.b)("img",{src:"/img/quickstart-5.png",alt:"Laravel"})),Object(o.b)("h2",{id:"push-changes"},"Push Changes"),Object(o.b)("p",null,"Now, anytime you push new changes to your repository, Qovery will automatically update your application with the latest code!"))}u.isMDXComponent=!0},425:function(e,t,r){var n;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)&&n.length){var i=a.apply(null,n);i&&e.push(i)}else if("object"===o)for(var c in n)r.call(n,c)&&n[c]&&e.push(c)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()},426:function(e,t,r){"use strict";r(429);var n=r(0),a=r.n(n),o=r(425),i=r.n(o);r(131);t.a=function(e){var t=e.children,r=e.classNames,n=e.fill,o=e.icon,c=e.type,l=null;switch(c){case"danger":l="alert-triangle";break;case"success":l="check-circle";break;case"warning":l="alert-triangle";break;default:l="info"}return a.a.createElement("div",{className:i()(r,"alert","alert--"+c,{"alert--fill":n,"alert--icon":!1!==o}),role:"alert"},!1!==o&&a.a.createElement("i",{className:i()("feather","icon-"+(o||l))}),t)}},427:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(r),d=n,m=p["".concat(i,".").concat(d)]||p[d]||b[d]||o;return r?a.a.createElement(m,c({ref:t},s,{components:r})):a.a.createElement(m,c({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},428:function(e,t,r){"use strict";var n=r(1),a=r(0),o=r.n(a),i=r(39),c=r(432),l=r(19),s=r.n(l);t.a=function(e){var t,r=e.to,l=e.href,u=r||l,p=Object(c.a)(u),b=Object(a.useRef)(!1),d=s.a.canUseIntersectionObserver;return Object(a.useEffect)((function(){return!d&&p&&window.docusaurus.prefetch(u),function(){d&&t&&t.disconnect()}}),[u,d,p]),u&&p?o.a.createElement(i.b,Object(n.a)({},e,{onMouseEnter:function(){b.current||(window.docusaurus.preload(u),b.current=!0)},innerRef:function(e){var r,n;d&&e&&p&&(r=e,n=function(){window.docusaurus.prefetch(u)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){r===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(r),t.disconnect(),n())}))}))).observe(r))},to:u})):o.a.createElement("a",Object(n.a)({},e,{href:u}))}},429:function(e,t,r){var n=r(12);n(n.P,"Array",{fill:r(434)}),r(74)("fill")},430:function(e,t,r){var n=r(25).f,a=Function.prototype,o=/^\s*function ([^ (]*)/;"name"in a||r(10)&&n(a,"name",{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(e){return""}}})},431:function(e,t,r){"use strict";var n=r(0),a=r.n(n),o=r(428),i=r(425),c=r.n(i);r(132);t.a=function(e){var t=e.children,r=e.className,n=e.badge,i=e.leftIcon,l=e.rightIcon,s=e.size,u=e.target,p=e.to,b=c()("jump-to","jump-to--"+s,r),d=a.a.createElement("div",{className:"jump-to--inner"},a.a.createElement("div",{className:"jump-to--inner-2"},i&&a.a.createElement("div",{className:"jump-to--left"},a.a.createElement("i",{className:"feather icon-"+i})),a.a.createElement("div",{className:"jump-to--main"},n?a.a.createElement("span",{className:"badge badge--primary badge--right"},n):"",t),a.a.createElement("div",{className:"jump-to--right"},a.a.createElement("i",{className:"feather icon-"+(l||"chevron-right")+" arrow"}))));return u?a.a.createElement("a",{href:p,target:u,className:b},d):a.a.createElement(o.a,{to:p,className:b},d)}},432:function(e,t,r){"use strict";function n(e){return!1===/^(https?:|\/\/)/.test(e)}r.d(t,"a",(function(){return n}))},433:function(e,t,r){"use strict";r(430);var n=r(0),a=r.n(n),o=r(426);t.a=function(e){var t=e.children,r=e.name;return a.a.createElement(o.a,{type:"info",fill:!0,icon:!1,rounded:!0,className:"list--icons list--icons--arrow list--tight list--indent margin-bottom--lg"},a.a.createElement("p",{class:"text--lg margin-bottom--sm",style:{marginTop:"-0.25em"}},"Before you begin, this ",r||"page"," assumes the following:"),t)}},434:function(e,t,r){"use strict";var n=r(27),a=r(75),o=r(26);e.exports=function(e){for(var t=n(this),r=o(t.length),i=arguments.length,c=a(i>1?arguments[1]:void 0,r),l=i>2?arguments[2]:void 0,s=void 0===l?r:a(l,r);s>c;)t[c++]=e;return t}}}]);