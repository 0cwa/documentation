/*! For license information please see ff91a867.c9b78d6f.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[273],{424:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return O})),a.d(t,"default",(function(){return p}));var n=a(1),r=a(9),b=(a(0),a(431)),l=a(430),c=a(437),i={last_modified_on:"2021-10-08",title:"Organization",description:"Learn how to configure Organizations on Qovery"},o={id:"using-qovery/configuration/organization",title:"Organization",description:"Learn how to configure Organizations on Qovery",source:"@site/docs/using-qovery/configuration/organization.md",permalink:"/docs/using-qovery/configuration/organization",editUrl:"https://github.com/Qovery/documentation/edit/master/website/docs/using-qovery/configuration/organization.md",sidebar:"docs",previous:{title:"Configuration",permalink:"/docs/using-qovery/configuration"},next:{title:"Project",permalink:"/docs/using-qovery/configuration/project"}},O=[{value:"Create an Organization",id:"create-an-organization",children:[{value:"How to choose between plans?",id:"how-to-choose-between-plans",children:[]}]},{value:"Connect your Cloud account",id:"connect-your-cloud-account",children:[]},{value:"Organization members",id:"organization-members",children:[{value:"Roles",id:"roles",children:[]}]},{value:"Change organization",id:"change-organization",children:[]},{value:"Delete organization",id:"delete-organization",children:[]},{value:"Billing",id:"billing",children:[]}],j={rightToc:O};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},j,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)(c.a,{name:"documentation",mdxType:"Assumptions"},Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"You have a ",Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/using-qovery/interface/"}),"created an account"),"."))),Object(b.b)("p",null,"An organization is a shared account where developers can collaborate across many projects at once. Owners and organization administrators\ncan manage:"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"cloud accounts."),Object(b.b)("li",{parentName:"ul"},"members access."),Object(b.b)("li",{parentName:"ul"},"the billing.")),Object(b.b)("h2",{id:"create-an-organization"},"Create an Organization"),Object(b.b)("p",null,"You need to create an organization the first time you use Qovery. You have to choose between the ",Object(b.b)("strong",{parentName:"p"},"Free"),", ",Object(b.b)("strong",{parentName:"p"},"Professional"),", ",Object(b.b)("strong",{parentName:"p"},"Business")," and ",Object(b.b)("strong",{parentName:"p"},"Enterprise"),"."),Object(b.b)("p",{align:"center"},Object(b.b)("img",{src:"/img/create_organization.jpg",alt:"Qovery - create an organization"})),Object(b.b)("h3",{id:"how-to-choose-between-plans"},"How to choose between plans?"),Object(b.b)("p",null,"In a nutshell:"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"Free"),", ",Object(b.b)("strong",{parentName:"li"},"Professional"),", ",Object(b.b)("strong",{parentName:"li"},"Business")," and ",Object(b.b)("strong",{parentName:"li"},"Enterprise")," plans: to deploy on your Cloud account."),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"Community"),": to get free hosting for your hobby project.")),Object(b.b)("p",null,"Get more info ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.qovery.com/pricing"}),"here"),"."),Object(b.b)("h2",{id:"connect-your-cloud-account"},"Connect your Cloud account"),Object(b.b)(l.a,{type:"info",mdxType:"Alert"},Object(b.b)("p",null,"This feature is only valid for paid plans -> ",Object(b.b)("strong",{parentName:"p"},"Free"),", ",Object(b.b)("strong",{parentName:"p"},"Professional"),", ",Object(b.b)("strong",{parentName:"p"},"Business")," and ",Object(b.b)("strong",{parentName:"p"},"Enterprise")," plans.")),Object(b.b)("p",null,"Check out ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/cloud-service-provider/"}),"this documentation")," according to the Cloud service provider that you want\nto use."),Object(b.b)("h2",{id:"organization-members"},"Organization members"),Object(b.b)("p",null,"You can invite someone to join your organization by email. Then he will get access to your projects and will be able to contribute."),Object(b.b)("p",{align:"center"},Object(b.b)("img",{src:"/img/organization_members.png",alt:"Qovery - List all members within an organization"})),Object(b.b)("h3",{id:"roles"},"Roles"),Object(b.b)("p",null,"Four roles within an organization exist:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Action"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Owner"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Admin"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Developer"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Viewer"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Read organization"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"no"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"no")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Edit organization"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"no"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"no")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Delete organization"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"no"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"no"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"no")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Manage billing"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"no"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"no")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Invite members"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"no"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"no")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Connect to Kubernetes cluster"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"no"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"no")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Read project"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Edit project"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"no")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Delete project"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"no"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"no")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Read environment"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Edit production environment"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"no"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"no")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Edit development environment"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"no")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Stop production environment"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"no"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"no")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Stop development environment"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"no")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Delete production environment"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"no"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"no")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Delete development environment"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"no")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Read application"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Edit production application"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"no"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"no")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Edit development application"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"no")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Delete production application"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"no"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"no")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Delete development application"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"no")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Connect via SSH to an application"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"no"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"no")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Read database"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"no")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Edit production database"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"no"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"no")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Edit development database"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"no")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Delete production database"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"no"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"no")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Delete development database"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"no")))),Object(b.b)("h2",{id:"change-organization"},"Change organization"),Object(b.b)("p",null,"As a user, you can have access to one or many organizations. Use the dropdown in the top right navbar to change your organization."),Object(b.b)("p",{align:"center"},Object(b.b)("img",{src:"/img/change_organization.png",alt:"Qovery - change organization"})),Object(b.b)("h2",{id:"delete-organization"},"Delete organization"),Object(b.b)(l.a,{type:"danger",mdxType:"Alert"},Object(b.b)("p",null,"This is a non-recoverable operation. By deleting your organization, all your data are deleted.")),Object(b.b)("p",null,"To delete your organization, you need to go into the ",Object(b.b)("strong",{parentName:"p"},"Danger Zone")," within your organization settings."),Object(b.b)("p",{align:"center"},Object(b.b)("img",{src:"/img/delete_organization.png",alt:"Qovery - delete organization"})),Object(b.b)("h2",{id:"billing"},"Billing"),Object(b.b)(l.a,{type:"info",mdxType:"Alert"},Object(b.b)("p",null,"To know more on how much Qovery costs - see our ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.qovery.com/pricing"}),"pricing page"),".")))}p.isMDXComponent=!0},429:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var b=typeof n;if("string"===b||"number"===b)e.push(n);else if(Array.isArray(n)&&n.length){var l=r.apply(null,n);l&&e.push(l)}else if("object"===b)for(var c in n)a.call(n,c)&&n[c]&&e.push(c)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},430:function(e,t,a){"use strict";a(433);var n=a(0),r=a.n(n),b=a(429),l=a.n(b);a(131);t.a=function(e){var t=e.children,a=e.classNames,n=e.fill,b=e.icon,c=e.type,i=null;switch(c){case"danger":i="alert-triangle";break;case"success":i="check-circle";break;case"warning":i="alert-triangle";break;default:i="info"}return r.a.createElement("div",{className:l()(a,"alert","alert--"+c,{"alert--fill":n,"alert--icon":!1!==b}),role:"alert"},!1!==b&&r.a.createElement("i",{className:l()("feather","icon-"+(b||i))}),t)}},431:function(e,t,a){"use strict";a.d(t,"a",(function(){return j})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),O=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):c({},t,{},e)),a},j=function(e){var t=O(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,l=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),j=O(a),u=n,d=j["".concat(l,".").concat(u)]||j[u]||p[u]||b;return a?r.a.createElement(d,c({ref:t},o,{components:a})):r.a.createElement(d,c({ref:t},o))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,l=new Array(b);l[0]=u;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var o=2;o<b;o++)l[o]=a[o];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},433:function(e,t,a){var n=a(12);n(n.P,"Array",{fill:a(438)}),a(74)("fill")},434:function(e,t,a){var n=a(25).f,r=Function.prototype,b=/^\s*function ([^ (]*)/;"name"in r||a(10)&&n(r,"name",{configurable:!0,get:function(){try{return(""+this).match(b)[1]}catch(e){return""}}})},437:function(e,t,a){"use strict";a(434);var n=a(0),r=a.n(n),b=a(430);t.a=function(e){var t=e.children,a=e.name;return r.a.createElement(b.a,{type:"info",fill:!0,icon:!1,rounded:!0,className:"list--icons list--icons--arrow list--tight list--indent margin-bottom--lg"},r.a.createElement("p",{class:"text--lg margin-bottom--sm",style:{marginTop:"-0.25em"}},"Before you begin, this ",a||"page"," assumes the following:"),t)}},438:function(e,t,a){"use strict";var n=a(27),r=a(75),b=a(26);e.exports=function(e){for(var t=n(this),a=b(t.length),l=arguments.length,c=r(l>1?arguments[1]:void 0,a),i=l>2?arguments[2]:void 0,o=void 0===i?a:r(i,a);o>c;)t[c++]=e;return t}}}]);