/*! For license information please see 92c10232.3b8cb833.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[138],{289:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return d}));var o=n(1),r=n(9),a=(n(0),n(401)),i=n(410),c=n(407),l=(n(400),{last_modified_on:"2021-07-05",$schema:"/.meta/.schemas/guides.json",title:"Deploying backend and frontend apps",description:"How to deploy backend and frontend apps with Qovery",author_github:"https://github.com/pjeziorowski",tags:["type: guide","technology: qovery"]}),s={categories:[{name:"advanced",title:"Advanced",description:"Go beyond the basics, become a Qovery pro, and extract the full potential of Qovery.",permalink:"/guides/advanced"}],coverLabel:"Deploying backend and frontend apps",description:"How to deploy backend and frontend apps with Qovery",permalink:"/guides/advanced/deploy-backend-and-frontend-apps",readingTime:"3 min read",source:"@site/guides/advanced/deploy-backend-and-frontend-apps.md",tags:[{label:"type: guide",permalink:"/guides/tags/type-guide"},{label:"technology: qovery",permalink:"/guides/tags/technology-qovery"}],title:"Deploying backend and frontend apps",truncated:!1,prevItem:{title:"Deploy Spring Boot with PostgreSQL",permalink:"/guides/tutorial/deploy-spring-boot-with-postgresql"},nextItem:{title:"Getting started with Django on Qovery",permalink:"/guides/tutorial/quickstart-django"}},u=[{value:"Communicate backend applications",id:"communicate-backend-applications",children:[]},{value:"Consume your API in your frondend application",id:"consume-your-api-in-your-frondend-application",children:[]}],p={rightToc:u};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Your project grows, and you need multiple backend applications to meet your needs? Are you building a fullstack application with backend, frontend, databases or other services?\nIn this guide, you will learn how to set up multiple applications projects with Qovery."),Object(a.b)(c.a,{mdxType:"Assumptions"},Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"You have already deployed an application with Qovery"))),Object(a.b)("p",null,"What differentiates Qovery from most other similar platforms is its first-class support of microservices. At Qovery, your project can be easily\ncomposed of multiple applications. It's up to you to decide how to build your system, but Qovery enables you to easily and safely communicate between your backend applications, databases, and frontend websites."),Object(a.b)("h2",{id:"communicate-backend-applications"},"Communicate backend applications"),Object(a.b)("p",null,"If your backend is made out of more than one application, very often, they will need to communicate with each other. The following steps will show you how to set up backend microservices communication at Qovery:"),Object(a.b)(i.a,{headingDepth:3,mdxType:"Steps"},Object(a.b)("ol",null,Object(a.b)("li",null,Object(a.b)("p",null,"This guide assumes your applications are deployed. If you don't know how to deploy your app, ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/guides/getting-started/deploy-your-first-application/#step-by-step-tutorial"}),"check our guide"),".")),Object(a.b)("li",null,Object(a.b)("p",null,"Assuming you have two backend applications:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"firstapp")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"secondapp"))),Object(a.b)("p",null,"You can send requests from one application to another using values injected automatically by Qovery into your ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/environment-variable/"}),"environment variables"),". "),Object(a.b)("p",null,"Examplary Node.js code snippet:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-javascript"}),"const axios = require('axios');\nconst secondAppAddress = \"http://\" + process.env.QOVERY_FIRSTAPP_HOST\n\naxios.get(secondAppAddress + '/api/users')\n  .then(response => {\n    console.log(response.data);\n  })\n  .catch(error => {\n    console.log(error);\n  });\n")),Object(a.b)("p",null,"As you can see in the example, you can communicate with your second application using Qovery-injected ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/environment-variable/#built-in-variables"}),"built-in environment variable"),".\nThe second application does not have to be publicly accessible - your applications communicate safely inside the internal network."),Object(a.b)("p",null,"To target another application in your environment, use the built-in environment variables following this naming pattern:"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"QOVERY_YOUR_APP_NAME_HOST")," where ",Object(a.b)("inlineCode",{parentName:"p"},"YOUR_APP_NAME")," is your application name.")))),Object(a.b)("h2",{id:"consume-your-api-in-your-frondend-application"},"Consume your API in your frondend application"),Object(a.b)("p",null,"Qovery allows you to host your backend applications, databases, but also frontend apps like React/Angular/Vue SPAs or server-side rendered UIs.\nThe following steps will show you how to consume your API in your frontend application."),Object(a.b)(i.a,{headingDepth:3,mdxType:"Steps"},Object(a.b)("ol",null,Object(a.b)("li",null,Object(a.b)("p",null,"Deploy your frontend application. If you don't know how to do it, you can take a look at the guide ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://docs.qovery.com/guides/tutorial/how-to-deploy-nuxtjs/"}),"how to delpoy Nuxt.js application."))),Object(a.b)("li",null,Object(a.b)("p",null,"Expose your backend API."),Object(a.b)("p",null,"To be able to consume your API from your frontend application, your backend API needs to be exposed publicly. To do so, navigate to your backend application settings:"),Object(a.b)("p",{align:"center"},Object(a.b)("img",{src:"/img/microservices/microservices-1.png",alt:"Microservices"})),Object(a.b)("p",null,"And declare a port of your server:"),Object(a.b)("p",{align:"center"},Object(a.b)("img",{src:"/img/microservices/microservices-2.png",alt:"Microservices"})),Object(a.b)("p",null,"By default declaring a port exposes your app to public access (you can change it in port's advanced settings).")),Object(a.b)("li",null,Object(a.b)("p",null,"Setup API address in your frontend application."),Object(a.b)("p",null,"After exposing your application, you can get it's address in your frontend application using ",Object(a.b)("inlineCode",{parentName:"p"},"process.env")," as follows (Nuxt.js example):"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-javascript"}),"export default {\n  env: {\n    apiUrl: process.env.QOVERY_YOUR_APP_NAME_URL || 'http://localhost:3000'\n  }\n}\n")),Object(a.b)("p",null,"Now, you can configure your HTTP client in the frontend application to target your backend API:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-javascript"}),"import axios from 'axios'\n\nexport default axios.create({\n  baseURL: process.env.baseUrl\n})\n"))))))}d.isMDXComponent=!0},399:function(e,t,n){var o;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var a=typeof o;if("string"===a||"number"===a)e.push(o);else if(Array.isArray(o)&&o.length){var i=r.apply(null,o);i&&e.push(i)}else if("object"===a)for(var c in o)n.call(o,c)&&o[c]&&e.push(c)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(o=function(){return r}.apply(t,[]))||(e.exports=o)}()},400:function(e,t,n){"use strict";n(403);var o=n(0),r=n.n(o),a=n(399),i=n.n(a);n(131);t.a=function(e){var t=e.children,n=e.classNames,o=e.fill,a=e.icon,c=e.type,l=null;switch(c){case"danger":l="alert-triangle";break;case"success":l="check-circle";break;case"warning":l="alert-triangle";break;default:l="info"}return r.a.createElement("div",{className:i()(n,"alert","alert--"+c,{"alert--fill":o,"alert--icon":!1!==a}),role:"alert"},!1!==a&&r.a.createElement("i",{className:i()("feather","icon-"+(a||l))}),t)}},401:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=Object(o.forwardRef)((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),b=o,f=p["".concat(i,".").concat(b)]||p[b]||d[b]||a;return n?r.a.createElement(f,c({ref:t},s,{components:n})):r.a.createElement(f,c({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},403:function(e,t,n){var o=n(12);o(o.P,"Array",{fill:n(408)}),n(74)("fill")},404:function(e,t,n){var o=n(25).f,r=Function.prototype,a=/^\s*function ([^ (]*)/;"name"in r||n(10)&&o(r,"name",{configurable:!0,get:function(){try{return(""+this).match(a)[1]}catch(e){return""}}})},407:function(e,t,n){"use strict";n(404);var o=n(0),r=n.n(o),a=n(400);t.a=function(e){var t=e.children,n=e.name;return r.a.createElement(a.a,{type:"info",fill:!0,icon:!1,rounded:!0,className:"list--icons list--icons--arrow list--tight list--indent margin-bottom--lg"},r.a.createElement("p",{class:"text--lg margin-bottom--sm",style:{marginTop:"-0.25em"}},"Before you begin, this ",n||"page"," assumes the following:"),t)}},408:function(e,t,n){"use strict";var o=n(27),r=n(75),a=n(26);e.exports=function(e){for(var t=o(this),n=a(t.length),i=arguments.length,c=r(i>1?arguments[1]:void 0,n),l=i>2?arguments[2]:void 0,s=void 0===l?n:r(l,n);s>c;)t[c++]=e;return t}},409:function(e,t,n){"use strict";var o=n(412),r=n(51);function a(e,t){return t.encode?t.strict?o(e):encodeURIComponent(e):e}t.extract=function(e){return e.split("?")[1]||""},t.parse=function(e,t){var n=function(e){var t;switch(e.arrayFormat){case"index":return function(e,n,o){t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===o[e]&&(o[e]={}),o[e][t[1]]=n):o[e]=n};case"bracket":return function(e,n,o){t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==o[e]?o[e]=[].concat(o[e],n):o[e]=[n]:o[e]=n};default:return function(e,t,n){void 0!==n[e]?n[e]=[].concat(n[e],t):n[e]=t}}}(t=r({arrayFormat:"none"},t)),o=Object.create(null);return"string"!=typeof e?o:(e=e.trim().replace(/^(\?|#|&)/,""))?(e.split("&").forEach((function(e){var t=e.replace(/\+/g," ").split("="),r=t.shift(),a=t.length>0?t.join("="):void 0;a=void 0===a?null:decodeURIComponent(a),n(decodeURIComponent(r),a,o)})),Object.keys(o).sort().reduce((function(e,t){var n=o[t];return Boolean(n)&&"object"==typeof n&&!Array.isArray(n)?e[t]=function e(t){return Array.isArray(t)?t.sort():"object"==typeof t?e(Object.keys(t)).sort((function(e,t){return Number(e)-Number(t)})).map((function(e){return t[e]})):t}(n):e[t]=n,e}),Object.create(null))):o},t.stringify=function(e,t){var n=function(e){switch(e.arrayFormat){case"index":return function(t,n,o){return null===n?[a(t,e),"[",o,"]"].join(""):[a(t,e),"[",a(o,e),"]=",a(n,e)].join("")};case"bracket":return function(t,n){return null===n?a(t,e):[a(t,e),"[]=",a(n,e)].join("")};default:return function(t,n){return null===n?a(t,e):[a(t,e),"=",a(n,e)].join("")}}}(t=r({encode:!0,strict:!0,arrayFormat:"none"},t));return e?Object.keys(e).sort().map((function(o){var r=e[o];if(void 0===r)return"";if(null===r)return a(o,t);if(Array.isArray(r)){var i=[];return r.slice().forEach((function(e){void 0!==e&&i.push(n(o,e,i.length))})),i.join("&")}return a(o,t)+"="+a(r,t)})).filter((function(e){return e.length>0})).join("&"):""}},410:function(e,t,n){"use strict";var o=n(0),r=n.n(o),a=(n(399),n(409)),i=n.n(a);n(133);t.a=function(e){var t=e.children,n=e.headingDepth,a=e.hideFeedbackQuestion,c="undefined"!=typeof window?window.location:null,l={title:"Tutorial on "+c+" failed",body:"The tutorial on:\n\n"+c+"\n\nHere's what went wrong:\n\n\x3c!-- Insert command output and details. Thank you for reporting! :) --\x3e"},s="https://github.com/qovery/documentation/issues/new?"+i.a.stringify(l),u=Object(o.useState)(null),p=u[0],d=u[1];return r.a.createElement("div",{className:"steps steps--h"+n},t,!a&&!p&&r.a.createElement("div",{className:"steps--feedback"},"How was it? Did this tutorial work?\xa0\xa0",r.a.createElement("span",{className:"button button--sm button--primary",onClick:function(){return d("yes")}},"Yes"),"\xa0\xa0",r.a.createElement("a",{href:s,target:"_blank",className:"button button--sm button--primary"},"No")),"yes"==p&&r.a.createElement("div",{className:"steps--feedback steps--feedback--success"},"Thanks! If you're enjoying Qovery please consider ",r.a.createElement("a",{href:"https://github.com/qovery/documentation/",target:"_blank"},"starring our Github repo"),"."))}},412:function(e,t,n){"use strict";e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}}}]);