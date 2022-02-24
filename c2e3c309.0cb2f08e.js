/*! For license information please see c2e3c309.0cb2f08e.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[212],{362:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return u}));var n=a(1),r=a(9),o=(a(0),a(433)),i=(a(432),a(439),a(437),{last_modified_on:"2021-11-19",$schema:"/.meta/.schemas/guides.json",title:"Getting started with Scala on Qovery",description:"How to quickly deploy a Scala app on Qovery",author_github:"https://github.com/pjeziorowski",tags:["type: guide","language: scala"],hide_pagination:!0}),c={categories:[{name:"tutorial",title:"Tutorial",description:"Simple step-by-step tutorials.",permalink:"/guides/tutorial"}],coverLabel:"Getting started with Scala on Qovery",description:"How to quickly deploy a Scala app on Qovery",permalink:"/guides/tutorial/quickstart-scala",readingTime:"2 min read",source:"@site/guides/tutorial/quickstart-scala.md",tags:[{label:"type: guide",permalink:"/guides/tags/type-guide"},{label:"language: scala",permalink:"/guides/tags/language-scala"}],title:"Getting started with Scala on Qovery",truncated:!1,prevItem:{title:"Getting started with Rust on Qovery",permalink:"/guides/tutorial/quickstart-rust-rocket"},nextItem:{title:"Getting started with Sinatra on Qovery",permalink:"/guides/tutorial/quickstart-sinatra"}},l=[{value:"Source Code",id:"source-code",children:[]},{value:"App Setup",id:"app-setup",children:[]},{value:"Env Vars",id:"env-vars",children:[]},{value:"Deploy",id:"deploy",children:[]},{value:"Logs",id:"logs",children:[]},{value:"Push Changes",id:"push-changes",children:[]}],s={rightToc:l};function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This tutorial will have you deploying a ",Object(o.b)("strong",{parentName:"p"},"Scala")," app in minutes."),Object(o.b)("p",null,"Scala stands for Scalable Language. It is a multi-paradigm programming language. Scala language includes features of functional programming and object-oriented programming. It is a statically typed language. Its source code is compiled into bytecode and executed by Java virtual machine. "),Object(o.b)("h2",{id:"source-code"},"Source Code"),Object(o.b)("p",null,"In the tutorial, we will use a sample application ready to be deployed on Qovery. To get the application source code, please ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Qovery/qovery-scala-sample"}),"fork this repository"),"."),Object(o.b)("h2",{id:"app-setup"},"App Setup"),Object(o.b)("p",null,"In ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://start.qovery.com"}),"Qovery Console"),", choose or create your project and environment. Then, add a new application:"),Object(o.b)("p",null,Object(o.b)("img",{src:"/img/quickstart-1.png",alt:"Scala"})),Object(o.b)("p",null,"In ",Object(o.b)("strong",{parentName:"p"},"Git Repository"),", pick the forked application source code repository."),Object(o.b)("p",null,"In the ",Object(o.b)("strong",{parentName:"p"},"Port")," section type ",Object(o.b)("strong",{parentName:"p"},"8080"),"."),Object(o.b)("p",null,"That's it, create!"),Object(o.b)("h2",{id:"env-vars"},"Env Vars"),Object(o.b)("p",null,"The last step is to add a ",Object(o.b)("strong",{parentName:"p"},"PORT")," environment variable. To do so, navigate to your application and add a new ",Object(o.b)("strong",{parentName:"p"},"PORT")," variable with value ",Object(o.b)("strong",{parentName:"p"},"8080"),":"),Object(o.b)("p",null,Object(o.b)("img",{src:"/img/quickstart-3.png",alt:"Scala"})),Object(o.b)("h2",{id:"deploy"},"Deploy"),Object(o.b)("p",null,"It's all ready. In your application's screen click on ",Object(o.b)("strong",{parentName:"p"},"Actions")," and ",Object(o.b)("strong",{parentName:"p"},"Deploy")," your application."),Object(o.b)("p",null,Object(o.b)("img",{src:"/img/quickstart-4.png",alt:"Scala"})),Object(o.b)("h2",{id:"logs"},"Logs"),Object(o.b)("p",null,"To see the progress of your deployment and the output of your application, click on ",Object(o.b)("strong",{parentName:"p"},"Show Logs")," button. You can navigate between build/deployment logs as well as your application runtime logs."),Object(o.b)("p",null,Object(o.b)("img",{src:"/img/quickstart-5.png",alt:"Scala"})),Object(o.b)("h2",{id:"push-changes"},"Push Changes"),Object(o.b)("p",null,"Now, anytime you push new changes to your repository, Qovery will automatically update your application with the latest code!"))}u.isMDXComponent=!0},431:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)&&n.length){var i=r.apply(null,n);i&&e.push(i)}else if("object"===o)for(var c in n)a.call(n,c)&&n[c]&&e.push(c)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},432:function(e,t,a){"use strict";a(435);var n=a(0),r=a.n(n),o=a(431),i=a.n(o);a(131);t.a=function(e){var t=e.children,a=e.classNames,n=e.fill,o=e.icon,c=e.type,l=null;switch(c){case"danger":l="alert-triangle";break;case"success":l="check-circle";break;case"warning":l="alert-triangle";break;default:l="info"}return r.a.createElement("div",{className:i()(a,"alert","alert--"+c,{"alert--fill":n,"alert--icon":!1!==o}),role:"alert"},!1!==o&&r.a.createElement("i",{className:i()("feather","icon-"+(o||l))}),t)}},433:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c({},t,{},e)),a},p=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(a),d=n,m=p["".concat(i,".").concat(d)]||p[d]||b[d]||o;return a?r.a.createElement(m,c({ref:t},s,{components:a})):r.a.createElement(m,c({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<o;s++)i[s]=a[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},434:function(e,t,a){"use strict";var n=a(1),r=a(0),o=a.n(r),i=a(39),c=a(438),l=a(19),s=a.n(l);t.a=function(e){var t,a=e.to,l=e.href,u=a||l,p=Object(c.a)(u),b=Object(r.useRef)(!1),d=s.a.canUseIntersectionObserver;return Object(r.useEffect)((function(){return!d&&p&&window.docusaurus.prefetch(u),function(){d&&t&&t.disconnect()}}),[u,d,p]),u&&p?o.a.createElement(i.b,Object(n.a)({},e,{onMouseEnter:function(){b.current||(window.docusaurus.preload(u),b.current=!0)},innerRef:function(e){var a,n;d&&e&&p&&(a=e,n=function(){window.docusaurus.prefetch(u)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){a===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(a),t.disconnect(),n())}))}))).observe(a))},to:u})):o.a.createElement("a",Object(n.a)({},e,{href:u}))}},435:function(e,t,a){var n=a(12);n(n.P,"Array",{fill:a(440)}),a(74)("fill")},436:function(e,t,a){var n=a(25).f,r=Function.prototype,o=/^\s*function ([^ (]*)/;"name"in r||a(10)&&n(r,"name",{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(e){return""}}})},437:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(434),i=a(431),c=a.n(i);a(132);t.a=function(e){var t=e.children,a=e.className,n=e.badge,i=e.leftIcon,l=e.rightIcon,s=e.size,u=e.target,p=e.to,b=c()("jump-to","jump-to--"+s,a),d=r.a.createElement("div",{className:"jump-to--inner"},r.a.createElement("div",{className:"jump-to--inner-2"},i&&r.a.createElement("div",{className:"jump-to--left"},r.a.createElement("i",{className:"feather icon-"+i})),r.a.createElement("div",{className:"jump-to--main"},n?r.a.createElement("span",{className:"badge badge--primary badge--right"},n):"",t),r.a.createElement("div",{className:"jump-to--right"},r.a.createElement("i",{className:"feather icon-"+(l||"chevron-right")+" arrow"}))));return u?r.a.createElement("a",{href:p,target:u,className:b},d):r.a.createElement(o.a,{to:p,className:b},d)}},438:function(e,t,a){"use strict";function n(e){return!1===/^(https?:|\/\/)/.test(e)}a.d(t,"a",(function(){return n}))},439:function(e,t,a){"use strict";a(436);var n=a(0),r=a.n(n),o=a(432);t.a=function(e){var t=e.children,a=e.name;return r.a.createElement(o.a,{type:"info",fill:!0,icon:!1,rounded:!0,className:"list--icons list--icons--arrow list--tight list--indent margin-bottom--lg"},r.a.createElement("p",{class:"text--lg margin-bottom--sm",style:{marginTop:"-0.25em"}},"Before you begin, this ",a||"page"," assumes the following:"),t)}},440:function(e,t,a){"use strict";var n=a(27),r=a(75),o=a(26);e.exports=function(e){for(var t=n(this),a=o(t.length),i=arguments.length,c=r(i>1?arguments[1]:void 0,a),l=i>2?arguments[2]:void 0,s=void 0===l?a:r(l,a);s>c;)t[c++]=e;return t}}}]);