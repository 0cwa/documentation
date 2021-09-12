/*! For license information please see a4a09dfe.05b8c9b8.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[126],{278:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return m}));var a=n(1),r=n(9),o=(n(0),n(357)),i=(n(362),n(356)),c=n(361),l={last_modified_on:"2021-06-30",title:"Environment",description:"Learn how to configure your Environments on Qovery"},b={id:"using-qovery/configuration/environment",title:"Environment",description:"Learn how to configure your Environments on Qovery",source:"@site/docs/using-qovery/configuration/environment.md",permalink:"/docs/using-qovery/configuration/environment",editUrl:"https://github.com/Qovery/documentation/edit/master/website/docs/using-qovery/configuration/environment.md",sidebar:"docs",previous:{title:"Project",permalink:"/docs/using-qovery/configuration/project"},next:{title:"Application",permalink:"/docs/using-qovery/configuration/application"}},s=[{value:"Create an environment",id:"create-an-environment",children:[]},{value:"Preview environment",id:"preview-environment",children:[]},{value:"Build and Deployment logs",id:"build-and-deployment-logs",children:[]},{value:"Clone environment",id:"clone-environment",children:[]},{value:"Types of environment",id:"types-of-environment",children:[]},{value:"Advanced features",id:"advanced-features",children:[{value:"Auto-startup environment",id:"auto-startup-environment",children:[]},{value:"Auto-delete environment",id:"auto-delete-environment",children:[]}]},{value:"Environment statuses",id:"environment-statuses",children:[]},{value:"Deployment rules",id:"deployment-rules",children:[]},{value:"Delete an environment",id:"delete-an-environment",children:[]}],p={rightToc:s};function m(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)(c.a,{name:"documentation",mdxType:"Assumptions"},Object(o.b)("p",null,"You have created a ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/project/"}),"Project"),".")),Object(o.b)("p",null,"An ",Object(o.b)("strong",{parentName:"p"},"Environment")," is a group of ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/application/"}),"applications")," and ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/database/"}),"databases")," running within the same namespace. A ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/project/"}),"Project")," can have multiple ",Object(o.b)("strong",{parentName:"p"},"Environments"),"."),Object(o.b)(i.a,{type:"info",mdxType:"Alert"},Object(o.b)("p",null,"Applications and databases from an Environment are isolated from other Environments.")),Object(o.b)("h2",{id:"create-an-environment"},"Create an environment"),Object(o.b)("p",null,"The first time you create a project, you need to add your first environment manually."),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/img/environment_create.png",alt:"Create an environment"})),Object(o.b)("p",null,"Give a name to your environment that is easily recognizable by anyone from your team."),Object(o.b)(i.a,{type:"info",mdxType:"Alert"},Object(o.b)("p",null,"It is good practice to use ",Object(o.b)("inlineCode",{parentName:"p"},"production"),", ",Object(o.b)("inlineCode",{parentName:"p"},"main")," or ",Object(o.b)("inlineCode",{parentName:"p"},"master"),", ",Object(o.b)("inlineCode",{parentName:"p"},"staging"),", ",Object(o.b)("inlineCode",{parentName:"p"},"dev"),", ",Object(o.b)("inlineCode",{parentName:"p"},"fix/xxx"),", ",Object(o.b)("inlineCode",{parentName:"p"},"feat/xxx"),", depending on the purpose of your environment.")),Object(o.b)("p",null,"When you start using Qovery heavily, your environment list can look like this"),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/img/environment_list.png",alt:"List of environments"})),Object(o.b)("p",null,"An Environment can be automatically created when you create Pull Requests, and Git Branches. ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"#deployment-rules"}),"See the Deployment Rule section")," below."),Object(o.b)("h2",{id:"preview-environment"},"Preview environment"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Use Preview Environment to get early feedback on your application changes.")),Object(o.b)("p",null,"The purpose of an Environment is to manage a bunch of applications that are working all together. Your production environment runs 24/7, where your other environments may not need to run all day long. E.g. you may need to run Environments to get early feedback on your application changes before the changes are merged into production. This is what we call ",Object(o.b)("strong",{parentName:"p"},"Preview Environment"),"."),Object(o.b)(i.a,{type:"info",mdxType:"Alert"},Object(o.b)("p",null,"Sometimes ",Object(o.b)("strong",{parentName:"p"},"Preview Environment")," are also known as ",Object(o.b)("strong",{parentName:"p"},"Ephemeral Environment"),", ",Object(o.b)("strong",{parentName:"p"},"Temporary Environment"),", ",Object(o.b)("strong",{parentName:"p"},"Development Environment"),".")),Object(o.b)("p",null,"Creating a ",Object(o.b)("strong",{parentName:"p"},"Preview Environment")," is similar to create a casual Environment."),Object(o.b)("h2",{id:"build-and-deployment-logs"},"Build and Deployment logs"),Object(o.b)("p",null,"Sometimes, you need to have a closer look on what is going on while an operation (see ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"#environment-statuses"}),"statuses")," below) is in progress."),Object(o.b)("div",{class:"video-container"},Object(o.b)("p",{align:"center"},Object(o.b)("iframe",{src:"https://www.loom.com/embed/245b2e7e72d548a6b412899df94e7223",width:"100%",height:"100%",frameborder:"0",webkitallowfullscreen:!0,mozallowfullscreen:!0,allowfullscreen:!0}))),Object(o.b)("p",null,"Click on the ",Object(o.b)("inlineCode",{parentName:"p"},"show logs")," button to watch your deployment logs in real-time."),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/img/environment_deployment_logs.jpg",alt:"Environment deployment logs"})),Object(o.b)("h2",{id:"clone-environment"},"Clone environment"),Object(o.b)("p",null,"Cloning an environment is possible if you want to create an Environment from another one."),Object(o.b)(i.a,{type:"warning",mdxType:"Alert"},Object(o.b)("p",null,"Data is not copied. ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://roadmap.qovery.com/"}),"Vote here")," if you need this feature.")),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/img/environment_actions_dropdown.jpg",alt:"Environment actions dropdown"})),Object(o.b)("p",null,"Environment clone is convenient for those use cases:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Make a demo without impacting the original Environment."),Object(o.b)("li",{parentName:"ul"},"Validating a feature that needs to reflect the original Environment.")),Object(o.b)("h2",{id:"types-of-environment"},"Types of environment"),Object(o.b)("p",null,"Two modes are possible for an Environment - ",Object(o.b)("inlineCode",{parentName:"p"},"production")," and ",Object(o.b)("inlineCode",{parentName:"p"},"development"),". The difference between the ",Object(o.b)("inlineCode",{parentName:"p"},"production")," and ",Object(o.b)("inlineCode",{parentName:"p"},"development")," modes are the permissions. ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/organization/#roles"}),"Read more"),"."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"mode"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"production"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"this environment mode protects from destructive actions and get access to sensitive information - only possible by an admin")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"development"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"this environment mode makes it easy to destroy an environment - possible by an admin and developer")))),Object(o.b)("p",null,"To know more about the permissions - go to the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/organization/#roles"}),"Organization configuration"),"."),Object(o.b)("p",null,"Here is the mode you should set depending on your Environment."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"environment type"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"recommended mode"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"why"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"production"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"production"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Production environment should not be stopped or deleted by anyone - so to protect it we recommend using ",Object(o.b)("inlineCode",{parentName:"td"},"production")," mode")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"staging"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"production"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Staging environment reflects how things work and is sometimes as critical as production for companies. Using ",Object(o.b)("inlineCode",{parentName:"td"},"production")," mode is then recommended.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"feature"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"development"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),'Feature environment is a working environment that could be stopped and deleted by anyone. It is not "business critical" and can be set in ',Object(o.b)("inlineCode",{parentName:"td"},"development")," mode.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"fix"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"development"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),'Fix environment is similar to a Feature environment. It is not "business critical" and can be set in ',Object(o.b)("inlineCode",{parentName:"td"},"development")," mode.")))),Object(o.b)("h2",{id:"advanced-features"},"Advanced features"),Object(o.b)("p",null,"It is possible to go beyond than the basic configuration for an Environment. Here is a list of advanced features available for your environments."),Object(o.b)("h3",{id:"auto-startup-environment"},"Auto-startup environment"),Object(o.b)(i.a,{type:"warning",mdxType:"Alert"},Object(o.b)("p",null,"This feature is coming soon")),Object(o.b)("h3",{id:"auto-delete-environment"},"Auto-delete environment"),Object(o.b)(i.a,{type:"warning",mdxType:"Alert"},Object(o.b)("p",null,"This feature is coming soon")),Object(o.b)("h2",{id:"environment-statuses"},"Environment statuses"),Object(o.b)("p",null,"An Environment is a machine-state. Here is a list of the different statuses that your Environment can get."),Object(o.b)(i.a,{type:"info",mdxType:"Alert"},Object(o.b)("p",null,"To get more details on what is going on - check out your environment ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"#build-and-deployment-logs"}),"deployment logs"),".")),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"state"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"READY"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Your environment has been initialized and is ready to received its first applications")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"QUEUED"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"A deployment task has been received and your environment is about deploying it. The task has been queued and can take some times to be processed.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"BUILDING"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The build of one or several application(s) of your environment is in progress")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"BUILD_ERROR"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Something goes wrong during the build of your applications or databases")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"BUILT"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"One or several application(s) of your environment are built")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"DEPLOYING"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The deployment of one or several application(s) of your environment is in progress")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"DEPLOYMENT_ERROR"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Something goes wrong during the deployment of your applications or databases")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"DEPLOYED"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"One or several application(s) of your environment are deployed")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"STOPPING"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The shutdown of one or several application(s) of your environment is in progress")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"STOP_ERROR"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Something goes wrong during the shutdown of your applications or databases")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"STOPPED"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"One or several application(s) of your environment are stopped")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"DELETING"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The deletion of one or several application(s) of your environment is in progress")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"DELETE_ERROR"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Something goes wrong during the deletion of your applications or databases")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"DELETED"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"One or several application(s) of your environment are deleted")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"RUNNING"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Your applications and databases are running")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"RUNNING_ERROR"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Something goes wrong during the run of your applications")))),Object(o.b)("h2",{id:"deployment-rules"},"Deployment rules"),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"Deployment Rules")," lets you configure the lifecycle of your ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/environment/"}),"Environments"),"."),Object(o.b)(i.a,{type:"info",mdxType:"Alert"},Object(o.b)("p",null,"Using ",Object(o.b)("strong",{parentName:"p"},"Deployment Rules")," is a good practice to reduce your cost up to 60%.")),Object(o.b)("p",null,"Refer to the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/deployment-rule/"}),"Deployment Rule")," documentation to know more."),Object(o.b)("h2",{id:"delete-an-environment"},"Delete an environment"),Object(o.b)(i.a,{type:"danger",mdxType:"Alert"},Object(o.b)("p",null,"This is a non-recoverable operation. By deleting your environment, all your running applications and data within the environment are deleted.")),Object(o.b)("p",null,"To delete your environment, you must go in the ",Object(o.b)("inlineCode",{parentName:"p"},"settings")," > ",Object(o.b)("inlineCode",{parentName:"p"},"general")," and delete your Environment."),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/img/environment_settings_general.png",alt:"Environment general settings"})))}m.isMDXComponent=!0},355:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var o=typeof a;if("string"===o||"number"===o)e.push(a);else if(Array.isArray(a)&&a.length){var i=r.apply(null,a);i&&e.push(i)}else if("object"===o)for(var c in a)n.call(a,c)&&a[c]&&e.push(c)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},356:function(e,t,n){"use strict";n(360);var a=n(0),r=n.n(a),o=n(355),i=n.n(o);n(132);t.a=function(e){var t=e.children,n=e.classNames,a=e.fill,o=e.icon,c=e.type,l=null;switch(c){case"danger":l="alert-triangle";break;case"success":l="check-circle";break;case"warning":l="alert-triangle";break;default:l="info"}return r.a.createElement("div",{className:i()(n,"alert","alert--"+c,{"alert--fill":a,"alert--icon":!1!==o}),role:"alert"},!1!==o&&r.a.createElement("i",{className:i()("feather","icon-"+(o||l))}),t)}},357:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),s=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=s(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),p=s(n),u=a,d=p["".concat(i,".").concat(u)]||p[u]||m[u]||o;return n?r.a.createElement(d,c({ref:t},b,{components:n})):r.a.createElement(d,c({ref:t},b))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var b=2;b<o;b++)i[b]=n[b];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},358:function(e,t,n){"use strict";var a=n(1),r=n(0),o=n.n(r),i=n(39),c=n(363),l=n(19),b=n.n(l);t.a=function(e){var t,n=e.to,l=e.href,s=n||l,p=Object(c.a)(s),m=Object(r.useRef)(!1),u=b.a.canUseIntersectionObserver;return Object(r.useEffect)((function(){return!u&&p&&window.docusaurus.prefetch(s),function(){u&&t&&t.disconnect()}}),[s,u,p]),s&&p?o.a.createElement(i.b,Object(a.a)({},e,{onMouseEnter:function(){m.current||(window.docusaurus.preload(s),m.current=!0)},innerRef:function(e){var n,a;u&&e&&p&&(n=e,a=function(){window.docusaurus.prefetch(s)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){n===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(n),t.disconnect(),a())}))}))).observe(n))},to:s})):o.a.createElement("a",Object(a.a)({},e,{href:s}))}},359:function(e,t,n){var a=n(25).f,r=Function.prototype,o=/^\s*function ([^ (]*)/;"name"in r||n(10)&&a(r,"name",{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(e){return""}}})},360:function(e,t,n){var a=n(12);a(a.P,"Array",{fill:n(365)}),n(75)("fill")},361:function(e,t,n){"use strict";n(359);var a=n(0),r=n.n(a),o=n(356);t.a=function(e){var t=e.children,n=e.name;return r.a.createElement(o.a,{type:"info",fill:!0,icon:!1,rounded:!0,className:"list--icons list--icons--arrow list--tight list--indent margin-bottom--lg"},r.a.createElement("p",{class:"text--lg margin-bottom--sm",style:{marginTop:"-0.25em"}},"Before you begin, this ",n||"page"," assumes the following:"),t)}},362:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(358),i=n(355),c=n.n(i);n(133);t.a=function(e){var t=e.children,n=e.className,a=e.badge,i=e.leftIcon,l=e.rightIcon,b=e.size,s=e.target,p=e.to,m=c()("jump-to","jump-to--"+b,n),u=r.a.createElement("div",{className:"jump-to--inner"},r.a.createElement("div",{className:"jump-to--inner-2"},i&&r.a.createElement("div",{className:"jump-to--left"},r.a.createElement("i",{className:"feather icon-"+i})),r.a.createElement("div",{className:"jump-to--main"},a?r.a.createElement("span",{className:"badge badge--primary badge--right"},a):"",t),r.a.createElement("div",{className:"jump-to--right"},r.a.createElement("i",{className:"feather icon-"+(l||"chevron-right")+" arrow"}))));return s?r.a.createElement("a",{href:p,target:s,className:m},u):r.a.createElement(o.a,{to:p,className:m},u)}},363:function(e,t,n){"use strict";function a(e){return!1===/^(https?:|\/\/)/.test(e)}n.d(t,"a",(function(){return a}))},365:function(e,t,n){"use strict";var a=n(27),r=n(76),o=n(26);e.exports=function(e){for(var t=a(this),n=o(t.length),i=arguments.length,c=r(i>1?arguments[1]:void 0,n),l=i>2?arguments[2]:void 0,b=void 0===l?n:r(l,n);b>c;)t[c++]=e;return t}}}]);