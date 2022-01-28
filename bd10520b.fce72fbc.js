/*! For license information please see bd10520b.fce72fbc.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[204],{354:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return d}));var r=n(1),o=n(9),a=(n(0),n(431)),c=n(430),i=(n(435),n(437)),l={last_modified_on:"2021-12-13",title:"Project",description:"Learn how to configure your Projects on Qovery"},s={id:"using-qovery/configuration/project",title:"Project",description:"Learn how to configure your Projects on Qovery",source:"@site/docs/using-qovery/configuration/project.md",permalink:"/docs/using-qovery/configuration/project",editUrl:"https://github.com/Qovery/documentation/edit/master/website/docs/using-qovery/configuration/project.md",sidebar:"docs",previous:{title:"Organization",permalink:"/docs/using-qovery/configuration/organization"},next:{title:"Environment",permalink:"/docs/using-qovery/configuration/environment"}},u=[{value:"Create a project",id:"create-a-project",children:[{value:"Demo project",id:"demo-project",children:[]}]},{value:"Edit project general settings",id:"edit-project-general-settings",children:[]},{value:"Delete a project",id:"delete-a-project",children:[]},{value:"Deployment rules",id:"deployment-rules",children:[]},{value:"Addons",id:"addons",children:[]}],p={rightToc:u};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"A project allows you to group a set of applications and their dependencies (databases & other services)."),Object(a.b)(i.a,{name:"documentation",mdxType:"Assumptions"},Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"You have created an ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/using-qovery/configuration/organization/"}),"Organization")))),Object(a.b)("h2",{id:"create-a-project"},"Create a project"),Object(a.b)("p",{align:"center"},Object(a.b)("img",{src:"/img/qovery_empty_state_project_list.png",alt:"Qovery - project list with empty state"})),Object(a.b)("p",null,"To create a project you simply need to provide a name. It is also possible to provide a description afterwards."),Object(a.b)("h3",{id:"demo-project"},"Demo project"),Object(a.b)("p",null,"If you have no project to deploy but still want to give a try to Qovery, you can create a demo project."),Object(a.b)("h2",{id:"edit-project-general-settings"},"Edit project general settings"),Object(a.b)("p",null,"General settings of a project can be updated in the settings panel. You can access to it by clicking on the ",Object(a.b)("inlineCode",{parentName:"p"},"SETTINGS")," button. "),Object(a.b)("p",{align:"center"},Object(a.b)("img",{src:"/img/project-setting-button.png",alt:"Project settings button"})),Object(a.b)("p",null,"On the ",Object(a.b)("inlineCode",{parentName:"p"},"General")," tab, you will be able to update the name and the description of your project. "),Object(a.b)("p",{align:"center"},Object(a.b)("img",{src:"/img/project-setting-panel.png",alt:"Project settings button"})),Object(a.b)("h2",{id:"delete-a-project"},"Delete a project"),Object(a.b)(c.a,{type:"danger",mdxType:"Alert"},Object(a.b)("p",null,"This is a non-recoverable operation. By deleting your project, all your running applications and data within the project are deleted.")),Object(a.b)("p",{align:"center"},Object(a.b)("img",{src:"/img/delete_project.png",alt:"Qovery - delete a project"})),Object(a.b)("h2",{id:"deployment-rules"},"Deployment rules"),Object(a.b)("p",null,"The ",Object(a.b)("strong",{parentName:"p"},"Deployment Rules")," lets you configure the lifecycle of your ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/environment/"}),"Environments"),"."),Object(a.b)(c.a,{type:"info",mdxType:"Alert"},Object(a.b)("p",null,"Using ",Object(a.b)("strong",{parentName:"p"},"Deployment Rules")," is a good practice to reduce your cost up to 60%.")),Object(a.b)("p",null,"Refer to the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/deployment-rule/"}),"Deployment Rule")," documentation to know more."),Object(a.b)("h2",{id:"addons"},"Addons"),Object(a.b)("p",null,"TODO"))}d.isMDXComponent=!0},429:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)&&r.length){var c=o.apply(null,r);c&&e.push(c)}else if("object"===a)for(var i in r)n.call(r,i)&&r[i]&&e.push(i)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},430:function(e,t,n){"use strict";n(433);var r=n(0),o=n.n(r),a=n(429),c=n.n(a);n(131);t.a=function(e){var t=e.children,n=e.classNames,r=e.fill,a=e.icon,i=e.type,l=null;switch(i){case"danger":l="alert-triangle";break;case"success":l="check-circle";break;case"warning":l="alert-triangle";break;default:l="info"}return o.a.createElement("div",{className:c()(n,"alert","alert--"+i,{"alert--fill":r,"alert--icon":!1!==a}),role:"alert"},!1!==a&&o.a.createElement("i",{className:c()("feather","icon-"+(a||l))}),t)}},431:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},p=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),b=r,f=p["".concat(c,".").concat(b)]||p[b]||d[b]||a;return n?o.a.createElement(f,i({ref:t},s,{components:n})):o.a.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=b;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<a;s++)c[s]=n[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},432:function(e,t,n){"use strict";var r=n(1),o=n(0),a=n.n(o),c=n(39),i=n(436),l=n(19),s=n.n(l);t.a=function(e){var t,n=e.to,l=e.href,u=n||l,p=Object(i.a)(u),d=Object(o.useRef)(!1),b=s.a.canUseIntersectionObserver;return Object(o.useEffect)((function(){return!b&&p&&window.docusaurus.prefetch(u),function(){b&&t&&t.disconnect()}}),[u,b,p]),u&&p?a.a.createElement(c.b,Object(r.a)({},e,{onMouseEnter:function(){d.current||(window.docusaurus.preload(u),d.current=!0)},innerRef:function(e){var n,r;b&&e&&p&&(n=e,r=function(){window.docusaurus.prefetch(u)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){n===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(n),t.disconnect(),r())}))}))).observe(n))},to:u})):a.a.createElement("a",Object(r.a)({},e,{href:u}))}},433:function(e,t,n){var r=n(12);r(r.P,"Array",{fill:n(438)}),n(74)("fill")},434:function(e,t,n){var r=n(25).f,o=Function.prototype,a=/^\s*function ([^ (]*)/;"name"in o||n(10)&&r(o,"name",{configurable:!0,get:function(){try{return(""+this).match(a)[1]}catch(e){return""}}})},435:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(432),c=n(429),i=n.n(c);n(132);t.a=function(e){var t=e.children,n=e.className,r=e.badge,c=e.leftIcon,l=e.rightIcon,s=e.size,u=e.target,p=e.to,d=i()("jump-to","jump-to--"+s,n),b=o.a.createElement("div",{className:"jump-to--inner"},o.a.createElement("div",{className:"jump-to--inner-2"},c&&o.a.createElement("div",{className:"jump-to--left"},o.a.createElement("i",{className:"feather icon-"+c})),o.a.createElement("div",{className:"jump-to--main"},r?o.a.createElement("span",{className:"badge badge--primary badge--right"},r):"",t),o.a.createElement("div",{className:"jump-to--right"},o.a.createElement("i",{className:"feather icon-"+(l||"chevron-right")+" arrow"}))));return u?o.a.createElement("a",{href:p,target:u,className:d},b):o.a.createElement(a.a,{to:p,className:d},b)}},436:function(e,t,n){"use strict";function r(e){return!1===/^(https?:|\/\/)/.test(e)}n.d(t,"a",(function(){return r}))},437:function(e,t,n){"use strict";n(434);var r=n(0),o=n.n(r),a=n(430);t.a=function(e){var t=e.children,n=e.name;return o.a.createElement(a.a,{type:"info",fill:!0,icon:!1,rounded:!0,className:"list--icons list--icons--arrow list--tight list--indent margin-bottom--lg"},o.a.createElement("p",{class:"text--lg margin-bottom--sm",style:{marginTop:"-0.25em"}},"Before you begin, this ",n||"page"," assumes the following:"),t)}},438:function(e,t,n){"use strict";var r=n(27),o=n(75),a=n(26);e.exports=function(e){for(var t=r(this),n=a(t.length),c=arguments.length,i=o(c>1?arguments[1]:void 0,n),l=c>2?arguments[2]:void 0,s=void 0===l?n:o(l,n);s>i;)t[i++]=e;return t}}}]);