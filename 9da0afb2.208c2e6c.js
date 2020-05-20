/*! For license information please see 9da0afb2.208c2e6c.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{224:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return p}));var r=t(1),o=t(9),i=(t(0),t(281)),a=t(280),c={last_modified_on:"2020-05-13",title:"Regions",description:"Learn how to configure Regions on Qovery"},l={id:"using-qovery/configuration/regions",title:"Regions",description:"Learn how to configure Regions on Qovery",source:"@site/docs/using-qovery/configuration/regions.md",permalink:"/docs/using-qovery/configuration/regions",editUrl:"https://github.com/Qovery/documentation/edit/master/website/docs/using-qovery/configuration/regions.md",sidebar:"docs",previous:{title:"Configuration",permalink:"/docs/using-qovery/configuration"},next:{title:"Databases",permalink:"/docs/using-qovery/configuration/databases"}},s=[{value:"Configuration",id:"configuration",children:[]},{value:"Region",id:"region",children:[{value:"Community plan",id:"community-plan",children:[]},{value:"Enterprise plan",id:"enterprise-plan",children:[]}]},{value:"FAQ",id:"faq",children:[{value:"How to choose a region?",id:"how-to-choose-a-region",children:[]},{value:"Migrate between regions",id:"migrate-between-regions",children:[]}]}],u={rightToc:s};function p(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Qovery is available in a number of different Regions. Each region is a self-contained copy of Qovery in a single datacenter. When you first create an ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/main-concepts/environment/"}),"environment")," you can specify which region it should be in."),Object(i.b)(a.a,{type:"info",mdxType:"Alert"},Object(i.b)("p",null,"Each environment can be assigned to a different region")),Object(i.b)("h2",{id:"configuration"},"Configuration"),Object(i.b)("p",null,"To specify the region you want to use you need to modify your ",Object(i.b)("inlineCode",{parentName:"p"},".qovery.yml")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml",metastring:'title=".qovery.yml" {4}',title:'".qovery.yml"',"{4}":!0}),"application:\n  name: jhipster-sample-app\n  project: jhipster-sample-app\n  cloud_region: aws/us-west-2\n  publicly_accessible: true\nrouters:\n  - name: main\n    routes:\n      - application_name: jhipster-sample-app\n        paths:\n          - /*\n")),Object(i.b)("p",null,"The format used is ",Object(i.b)("inlineCode",{parentName:"p"},"{cloud_provider}/{cloud_provider_sregion}")),Object(i.b)("p",null,"If you use a non supported region you will have an error from the linter:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash",metastring:'title="non-existing region"',title:'"non-existing','region"':!0}),"ERROR:   aws/fake-region is not a valid region\nSOLUTION: Valid cloud regions: aws/us-east-2, aws/us-west-2, aws/eu-west-3\n\nTotal errors found: 1\n")),Object(i.b)("h2",{id:"region"},"Region"),Object(i.b)("h3",{id:"community-plan"},"Community plan"),Object(i.b)("p",null,"The following regions are available:"),Object(i.b)(a.a,{type:"info",mdxType:"Alert"},Object(i.b)("p",null,"More regions will come in the near future")),Object(i.b)("h4",{id:"aws"},"AWS"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"eu-west-3 (Paris, France)"),Object(i.b)("li",{parentName:"ul"},"us-east-2 (Ohio, United States)"),Object(i.b)("li",{parentName:"ul"},"us-west-2 (Oregon, United States)")),Object(i.b)("p",null,"Do you want to speed up the support of a specific AWS region? ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://discord.qovery.com"}),"Tell us")),Object(i.b)("h3",{id:"enterprise-plan"},"Enterprise plan"),Object(i.b)("p",null,"With the enterprise plan, Qovery can be deployed on any region supported by AWS, GCP, and Azure - on your own Cloud provider account."),Object(i.b)("h2",{id:"faq"},"FAQ"),Object(i.b)("h3",{id:"how-to-choose-a-region"},"How to choose a region?"),Object(i.b)("p",null,"Different datacenters are located in different geographic areas, and you may want to keep your site physically close to the bulk of your user base for reduced latency."),Object(i.b)("h3",{id:"migrate-between-regions"},"Migrate between regions"),Object(i.b)("p",null,"You can't migrate an environment from one region to another after it is created."))}p.isMDXComponent=!0},279:function(e,n,t){var r;!function(){"use strict";var t={}.hasOwnProperty;function o(){for(var e=[],n=0;n<arguments.length;n++){var r=arguments[n];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)&&r.length){var a=o.apply(null,r);a&&e.push(a)}else if("object"===i)for(var c in r)t.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(n,[]))||(e.exports=r)}()},280:function(e,n,t){"use strict";t(283);var r=t(0),o=t.n(r),i=t(279),a=t.n(i);t(131);n.a=function(e){var n=e.children,t=e.classNames,r=e.fill,i=e.icon,c=e.type,l=null;switch(c){case"danger":l="alert-triangle";break;case"success":l="check-circle";break;case"warning":l="alert-triangle";break;default:l="info"}return o.a.createElement("div",{className:a()(t,"alert","alert--"+c,{"alert--fill":r,"alert--icon":!1!==i}),role:"alert"},!1!==i&&o.a.createElement("i",{className:a()("feather","icon-"+(i||l))}),n)}},281:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return d}));var r=t(0),o=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),u=function(e){var n=o.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c({},n,{},e)),t},p=function(e){var n=u(e.components);return o.a.createElement(s.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},f=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(t),f=r,d=p["".concat(a,".").concat(f)]||p[f]||b[f]||i;return t?o.a.createElement(d,c({ref:n},s,{components:t})):o.a.createElement(d,c({ref:n},s))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=f;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var s=2;s<i;s++)a[s]=t[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},283:function(e,n,t){var r=t(12);r(r.P,"Array",{fill:t(284)}),t(75)("fill")},284:function(e,n,t){"use strict";var r=t(25),o=t(76),i=t(24);e.exports=function(e){for(var n=r(this),t=i(n.length),a=arguments.length,c=o(a>1?arguments[1]:void 0,t),l=a>2?arguments[2]:void 0,s=void 0===l?t:o(l,t);s>c;)n[c++]=e;return n}}}]);