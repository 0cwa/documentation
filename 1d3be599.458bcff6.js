/*! For license information please see 1d3be599.458bcff6.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{189:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return u})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return f}));var r=n(1),o=n(9),a=(n(0),n(417)),i=n(426),c=n(416),s=n(423),u=(n(421),{last_modified_on:"2021-12-20",$schema:"/.meta/.schemas/guides.json",title:"How to run commands before the application starts",description:"How to run commands before a Qovery application starts",author_github:"https://github.com/l0ck3",tags:["type: tutorial","technology: qovery"],hide_pagination:!0}),l={categories:[{name:"tutorial",title:"Tutorial",description:"Simple step-by-step tutorials.",permalink:"/guides/tutorial"}],coverLabel:"How to run commands before the application starts",description:"How to run commands before a Qovery application starts",permalink:"/guides/tutorial/how-to-run-commands-at-application-startup",readingTime:"3 min read",source:"@site/guides/tutorial/how-to-run-commands-at-application-startup.md",tags:[{label:"type: tutorial",permalink:"/guides/tags/type-tutorial"},{label:"technology: qovery",permalink:"/guides/tags/technology-qovery"}],title:"How to run commands before the application starts",truncated:!1,prevItem:{title:"How to deploy Strapi with PostgreSQL",permalink:"/guides/tutorial/how-to-deploy-strapi-with-postgresql"},nextItem:{title:"How to seed a Postgres database on a dev environment",permalink:"/guides/tutorial/data-seeding-in-postgres"}},p=[{value:"Goal",id:"goal",children:[]}],d={rightToc:p};function f(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Running your applications on Qovery is pretty straightforward, but there are many cases where you will need to run some tasks before your application starts, like running database migrations, and it might not be obvious how to do it."),Object(a.b)(s.a,{name:"guide",mdxType:"Assumptions"},Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Your app is running in Dockerfile mode."))),Object(a.b)("h2",{id:"goal"},"Goal"),Object(a.b)("p",null,"This tutorial will cover how to run tasks when your application is starting. We'll use the case of a database migration with Ruby on Rails, but the same principle can be applied for any framework or command you need to run."),Object(a.b)(i.a,{headingDepth:3,mdxType:"Steps"},Object(a.b)("ol",null,Object(a.b)("li",null,Object(a.b)("h4",{id:"add-an-entrypoint-script"},"Add an entrypoint script"),Object(a.b)("p",null,"The first thing to do is to add an entrypoint script. We'll add it to a docker directory at the project's root, but you can put it anywhere you want."),Object(a.b)("p",null,"Let's create the docker/entrypoint.sh with the following content:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),'#! /bin/sh\n\nbundle exec rails db:migrate\n\nif [[ $? != 0 ]]; then\n\necho\necho "== Failed to migrate. Running setup first."\necho\n\nbundle exec rails db:setup\n\nfi\n\n# Execute the given or default command:\n\nexec "$@"\n')),Object(a.b)("p",null,"This script will execute the Rails database migration script. If it fails because the database doesn't exist, it will run the setup command instead."),Object(a.b)("p",null,"The last line is necessary to execute the main command of your Dockerfile."),Object(a.b)(c.a,{type:"warning",mdxType:"Alert"},"These instructions will be executed on each running instances of your application. If you're running multiple instances (or autoscaling), make sure instructions in the entrypoint are idempotent.")),Object(a.b)("li",null,Object(a.b)("h4",{id:"give-execution-permission-to-the-entrypoint-script"},"Give execution permission to the entrypoint script"),Object(a.b)("p",null,"You can give execution permission to this file with the following command:"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"chmod +x docker/entrypoint.sh"))),Object(a.b)("li",null,Object(a.b)("h4",{id:"add-the-entrypoint-to-your-dockerfile"},"Add the entrypoint to your Dockerfile"),Object(a.b)("p",null,"You will now need to add an ENTRYPOINT instruction to your Dockerfile. (Make sure the entrypoint.sh file is copied to the image somewhere)"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),'# ...\n\n# Dockerfile content omitted for brevity\n\n# ...\n\nENTRYPOINT ["./docker/entrypoint.sh"]\n\nEXPOSE 3000\n\nCMD ["rails", "server", "-p", "3000", "-b", "0.0.0.0"]\n')),Object(a.b)("p",null,"You can learn more about Docker entrypoints here: ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.docker.com/engine/reference/builder/#entrypoint"}),"https://docs.docker.com/engine/reference/builder/#entrypoint"))),Object(a.b)("li",null,Object(a.b)("h4",{id:"deploy-your-application"},"Deploy your application"),Object(a.b)("p",null,"You can now commit and push your changes to your Git repository. The instructions you specified in the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"http://entrypoint.sh/"}),"entrypoint.sh")," file will be executed before the application starts.")))),Object(a.b)(c.a,{type:"info",mdxType:"Alert"},"Lifecycle hooks and shell access will shortly be available on Qovery. You'll be able to manage this more conveniently."))}f.isMDXComponent=!0},415:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)&&r.length){var i=o.apply(null,r);i&&e.push(i)}else if("object"===a)for(var c in r)n.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},416:function(e,t,n){"use strict";n(419);var r=n(0),o=n.n(r),a=n(415),i=n.n(a);n(131);t.a=function(e){var t=e.children,n=e.classNames,r=e.fill,a=e.icon,c=e.type,s=null;switch(c){case"danger":s="alert-triangle";break;case"success":s="check-circle";break;case"warning":s="alert-triangle";break;default:s="info"}return o.a.createElement("div",{className:i()(n,"alert","alert--"+c,{"alert--fill":r,"alert--icon":!1!==a}),role:"alert"},!1!==a&&o.a.createElement("i",{className:i()("feather","icon-"+(a||s))}),t)}},417:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),f=r,m=p["".concat(i,".").concat(f)]||p[f]||d[f]||a;return n?o.a.createElement(m,c({ref:t},u,{components:n})):o.a.createElement(m,c({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},418:function(e,t,n){"use strict";var r=n(1),o=n(0),a=n.n(o),i=n(39),c=n(422),s=n(19),u=n.n(s);t.a=function(e){var t,n=e.to,s=e.href,l=n||s,p=Object(c.a)(l),d=Object(o.useRef)(!1),f=u.a.canUseIntersectionObserver;return Object(o.useEffect)((function(){return!f&&p&&window.docusaurus.prefetch(l),function(){f&&t&&t.disconnect()}}),[l,f,p]),l&&p?a.a.createElement(i.b,Object(r.a)({},e,{onMouseEnter:function(){d.current||(window.docusaurus.preload(l),d.current=!0)},innerRef:function(e){var n,r;f&&e&&p&&(n=e,r=function(){window.docusaurus.prefetch(l)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){n===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(n),t.disconnect(),r())}))}))).observe(n))},to:l})):a.a.createElement("a",Object(r.a)({},e,{href:l}))}},419:function(e,t,n){var r=n(12);r(r.P,"Array",{fill:n(424)}),n(74)("fill")},420:function(e,t,n){var r=n(25).f,o=Function.prototype,a=/^\s*function ([^ (]*)/;"name"in o||n(10)&&r(o,"name",{configurable:!0,get:function(){try{return(""+this).match(a)[1]}catch(e){return""}}})},421:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(418),i=n(415),c=n.n(i);n(132);t.a=function(e){var t=e.children,n=e.className,r=e.badge,i=e.leftIcon,s=e.rightIcon,u=e.size,l=e.target,p=e.to,d=c()("jump-to","jump-to--"+u,n),f=o.a.createElement("div",{className:"jump-to--inner"},o.a.createElement("div",{className:"jump-to--inner-2"},i&&o.a.createElement("div",{className:"jump-to--left"},o.a.createElement("i",{className:"feather icon-"+i})),o.a.createElement("div",{className:"jump-to--main"},r?o.a.createElement("span",{className:"badge badge--primary badge--right"},r):"",t),o.a.createElement("div",{className:"jump-to--right"},o.a.createElement("i",{className:"feather icon-"+(s||"chevron-right")+" arrow"}))));return l?o.a.createElement("a",{href:p,target:l,className:d},f):o.a.createElement(a.a,{to:p,className:d},f)}},422:function(e,t,n){"use strict";function r(e){return!1===/^(https?:|\/\/)/.test(e)}n.d(t,"a",(function(){return r}))},423:function(e,t,n){"use strict";n(420);var r=n(0),o=n.n(r),a=n(416);t.a=function(e){var t=e.children,n=e.name;return o.a.createElement(a.a,{type:"info",fill:!0,icon:!1,rounded:!0,className:"list--icons list--icons--arrow list--tight list--indent margin-bottom--lg"},o.a.createElement("p",{class:"text--lg margin-bottom--sm",style:{marginTop:"-0.25em"}},"Before you begin, this ",n||"page"," assumes the following:"),t)}},424:function(e,t,n){"use strict";var r=n(27),o=n(75),a=n(26);e.exports=function(e){for(var t=r(this),n=a(t.length),i=arguments.length,c=o(i>1?arguments[1]:void 0,n),s=i>2?arguments[2]:void 0,u=void 0===s?n:o(s,n);u>c;)t[c++]=e;return t}},425:function(e,t,n){"use strict";var r=n(427),o=n(51);function a(e,t){return t.encode?t.strict?r(e):encodeURIComponent(e):e}t.extract=function(e){return e.split("?")[1]||""},t.parse=function(e,t){var n=function(e){var t;switch(e.arrayFormat){case"index":return function(e,n,r){t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===r[e]&&(r[e]={}),r[e][t[1]]=n):r[e]=n};case"bracket":return function(e,n,r){t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==r[e]?r[e]=[].concat(r[e],n):r[e]=[n]:r[e]=n};default:return function(e,t,n){void 0!==n[e]?n[e]=[].concat(n[e],t):n[e]=t}}}(t=o({arrayFormat:"none"},t)),r=Object.create(null);return"string"!=typeof e?r:(e=e.trim().replace(/^(\?|#|&)/,""))?(e.split("&").forEach((function(e){var t=e.replace(/\+/g," ").split("="),o=t.shift(),a=t.length>0?t.join("="):void 0;a=void 0===a?null:decodeURIComponent(a),n(decodeURIComponent(o),a,r)})),Object.keys(r).sort().reduce((function(e,t){var n=r[t];return Boolean(n)&&"object"==typeof n&&!Array.isArray(n)?e[t]=function e(t){return Array.isArray(t)?t.sort():"object"==typeof t?e(Object.keys(t)).sort((function(e,t){return Number(e)-Number(t)})).map((function(e){return t[e]})):t}(n):e[t]=n,e}),Object.create(null))):r},t.stringify=function(e,t){var n=function(e){switch(e.arrayFormat){case"index":return function(t,n,r){return null===n?[a(t,e),"[",r,"]"].join(""):[a(t,e),"[",a(r,e),"]=",a(n,e)].join("")};case"bracket":return function(t,n){return null===n?a(t,e):[a(t,e),"[]=",a(n,e)].join("")};default:return function(t,n){return null===n?a(t,e):[a(t,e),"=",a(n,e)].join("")}}}(t=o({encode:!0,strict:!0,arrayFormat:"none"},t));return e?Object.keys(e).sort().map((function(r){var o=e[r];if(void 0===o)return"";if(null===o)return a(r,t);if(Array.isArray(o)){var i=[];return o.slice().forEach((function(e){void 0!==e&&i.push(n(r,e,i.length))})),i.join("&")}return a(r,t)+"="+a(o,t)})).filter((function(e){return e.length>0})).join("&"):""}},426:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=(n(415),n(425)),i=n.n(a);n(133);t.a=function(e){var t=e.children,n=e.headingDepth,a=e.hideFeedbackQuestion,c="undefined"!=typeof window?window.location:null,s={title:"Tutorial on "+c+" failed",body:"The tutorial on:\n\n"+c+"\n\nHere's what went wrong:\n\n\x3c!-- Insert command output and details. Thank you for reporting! :) --\x3e"},u="https://github.com/qovery/documentation/issues/new?"+i.a.stringify(s),l=Object(r.useState)(null),p=l[0],d=l[1];return o.a.createElement("div",{className:"steps steps--h"+n},t,!a&&!p&&o.a.createElement("div",{className:"steps--feedback"},"How was it? Did this tutorial work?\xa0\xa0",o.a.createElement("span",{className:"button button--sm button--primary",onClick:function(){return d("yes")}},"Yes"),"\xa0\xa0",o.a.createElement("a",{href:u,target:"_blank",className:"button button--sm button--primary"},"No")),"yes"==p&&o.a.createElement("div",{className:"steps--feedback steps--feedback--success"},"Thanks! If you're enjoying Qovery please consider ",o.a.createElement("a",{href:"https://github.com/qovery/documentation/",target:"_blank"},"starring our Github repo"),"."))}},427:function(e,t,n){"use strict";e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}}}]);