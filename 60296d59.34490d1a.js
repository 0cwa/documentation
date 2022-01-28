(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{259:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return u})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return m})),n.d(t,"default",(function(){return d}));var a=n(1),o=n(9),r=(n(0),n(431)),l=n(443),i=n(444),c=n(430),s=n(437),u=(n(435),{last_modified_on:"2021-12-28",$schema:"/.meta/.schemas/guides.json",title:"Import your environment variables with the Qovery CLI",description:"How to import your environment variables and secrets from your dotenv file with the Qovery CLI",author_github:"https://github.com/evoxmusic",tags:["type: tutorial","technology: qovery"],hide_pagination:!0}),b={categories:[{name:"tutorial",title:"Tutorial",description:"Simple step-by-step tutorials.",permalink:"/guides/tutorial"}],coverLabel:"Import your environment variables with the Qovery CLI",description:"How to import your environment variables and secrets from your dotenv file with the Qovery CLI",permalink:"/guides/tutorial/import-your-environment-variables-with-the-qovery-cli",readingTime:"4 min read",source:"@site/guides/tutorial/import-your-environment-variables-with-the-qovery-cli.md",tags:[{label:"type: tutorial",permalink:"/guides/tags/type-tutorial"},{label:"technology: qovery",permalink:"/guides/tags/technology-qovery"}],title:"Import your environment variables with the Qovery CLI",truncated:!1,prevItem:{title:"How to write a Dockerfile",permalink:"/guides/tutorial/how-to-write-a-dockerfile"},nextItem:{title:"Kubernetes observability and monitoring with Datadog",permalink:"/guides/tutorial/kubernetes-observability-and-monitoring-with-datadog"}},m=[{value:"Install Qovery CLI",id:"install-qovery-cli",children:[]},{value:"Set your context",id:"set-your-context",children:[]},{value:"Import",id:"import",children:[{value:"Environment Variables",id:"environment-variables",children:[]},{value:"Secrets",id:"secrets",children:[]}]},{value:"Check",id:"check",children:[]}],p={rightToc:m};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)(c.a,{type:"info",mdxType:"Alert"},Object(r.b)("p",null,"The web console will integrate the dotenv file import feature for Q1 2022.")),Object(r.b)("p",null,"When dealing with dozens of environment variables, it can be tedious to import them one by one. This is where the Qovery CLI with the env vars import feature helps. In this tutorial, you will learn how to import your environment variables and secrets via the Qovery CLI."),Object(r.b)(s.a,{mdxType:"Assumptions"},Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Your dotenv (",Object(r.b)("inlineCode",{parentName:"li"},".env"),") file is ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://smartmob-rfc.readthedocs.io/en/latest/2-dotenv.html"}),"compliant to the following specs")),Object(r.b)("li",{parentName:"ul"},"You have created your application in Qovery"))),Object(r.b)("h2",{id:"install-qovery-cli"},"Install Qovery CLI"),Object(r.b)(l.a,{centered:!0,className:"rounded",defaultValue:"linux",placeholder:"Select your OS",select:!1,size:null,values:[{group:"Platforms",label:"Linux",value:"linux"},{group:"Platforms",label:"MacOS",value:"macos"},{group:"Platforms",label:"Windows",value:"windows"}],mdxType:"Tabs"},Object(r.b)(i.a,{value:"linux",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# Download and install Qovery CLI on every Linux distribution\n$ curl -s https://get.qovery.com | sudo bash\n"))),Object(r.b)(i.a,{value:"macos",mdxType:"TabItem"},Object(r.b)(l.a,{centered:!0,className:"rounded",defaultValue:"homebrew",values:[{label:"Homebrew",value:"homebrew"},{label:"Manual",value:"manual"}],mdxType:"Tabs"},Object(r.b)(i.a,{value:"homebrew",mdxType:"TabItem"},Object(r.b)("p",null,"The common solution to install a command line binary on the MacOS is to use ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://brew.sh/"}),"Homebrew"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# Add Qovery brew repository\n$ brew tap Qovery/qovery-cli\n\n# Install the CLI\n$ brew install qovery-cli\n"))),Object(r.b)(i.a,{value:"manual",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# Install the Qovery CLI on MacOS manually\n$ curl -s https://get.qovery.com | bash\n"))))),Object(r.b)(i.a,{value:"windows",mdxType:"TabItem"},Object(r.b)(l.a,{centered:!0,className:"rounded",defaultValue:"scoop",values:[{label:"Scoop",value:"scoop"},{label:"Manual",value:"manual"}],mdxType:"Tabs"},Object(r.b)(i.a,{value:"scoop",mdxType:"TabItem"},Object(r.b)("p",null,"The classic way to install binaries on Windows is to use ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://scoop.sh/"}),"Scoop"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# Add Qovery bucket\n$ scoop bucket add qovery https://github.com/Qovery/scoop-qovery-cli\n\n# Install the CLI\n$ scoop install qovery-cli\n"))),Object(r.b)(i.a,{value:"manual",mdxType:"TabItem"},Object(r.b)("p",null,"Install the Qovery CLI on Windows manually by downloading the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/Qovery/qovery-cli/releases"}),"latest realease"),", and uncompress its content to\n",Object(r.b)("inlineCode",{parentName:"p"},"C:\\Windows"),"."))))),Object(r.b)("h2",{id:"set-your-context"},"Set your context"),Object(r.b)("p",null,"Once you are authenticated with ",Object(r.b)("inlineCode",{parentName:"p"},"qovery auth"),", you must choose the application where you want to set the environment variables with the command ",Object(r.b)("inlineCode",{parentName:"p"},"qovery context set"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash",metastring:'title="connect to qovery"',title:'"connect',to:!0,'qovery"':!0}),"$ qovery auth\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash",metastring:'title="set the context"',title:'"set',the:!0,'context"':!0}),"~/Desktop $ qovery context set\nQovery: Current context:\nOrganization | Qovery Community\nProject      | posthog\nEnvironment  | prod\nApplication  | proxy\n\nQovery: Select new context\nOrganization:\n\u2714 Qovery Realm\nProject:\n\u2714 Posthog\nEnvironment:\n\u2714 prod\nApplication:\n\u2714 nginx-proxy\n\nQovery: New context:\nOrganization | Qovery Realm\nProject      | Posthog\nEnvironment  | prod\nApplication  | nginx-proxy\n")),Object(r.b)("h2",{id:"import"},"Import"),Object(r.b)("p",null,"With Qovery, you make the distinction between Environment Variables and Secrets. Basically, the value of a Secret is encrypted and cannot be revealed."),Object(r.b)("p",null,"Let's say that we have the following dotenv file ",Object(r.b)("inlineCode",{parentName:"p"},".env.development")," that we want to import:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-text",metastring:"title=.env.development",title:".env.development"}),"STRAPI_API_KEY=x.xxyyyzzz\nCOLOR_BACKGROUND=fff\nAUTH0_API_KEY_SECRET=0xb33f\nAPI_URL=https://api.mytld.com\n")),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"STRAPI_API_KEY")," and ",Object(r.b)("inlineCode",{parentName:"p"},"AUTH0_API_KEY_SECRET")," are Secrets. ",Object(r.b)("inlineCode",{parentName:"p"},"COLOR_BACKGROUND")," and ",Object(r.b)("inlineCode",{parentName:"p"},"API_URL")," are Environment Variables."),Object(r.b)("h3",{id:"environment-variables"},"Environment Variables"),Object(r.b)(c.a,{type:"info",mdxType:"Alert"},Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/environment-variable/"}),"Check out the documentation")," to learn more on how Environment Variables works.")),Object(r.b)("p",null,"To import the Environment Variables from this file we run the command ",Object(r.b)("inlineCode",{parentName:"p"},"qovery env import <dotenv file>")," and we select the environment variables to import:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ qovery env import .env.development\n\nQovery: dot env file to import: '.env.development'\n? Do you want to import Environment Variables or Secrets? Environment Variables\n? What environment variables do you want to import?  [Use arrows to move, space to select, <right> to all, <left> to none, type to filter]\n  [x]  COLOR_BACKGROUND=fff\n  [ ]  AUTH0_API_KEY_SECRET=0xb33f\n> [x]  API_URL=https://api.mytld.com\n  [ ]  STRAPI_API_KEY=x.xxyyyzzz\n")),Object(r.b)("p",null,"Once validated you will see the following import validation:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"? What environment variables do you want to import? COLOR_BACKGROUND=fff, API_URL=https://api.mytld.com\nQovery: \u2705 Environment Variables successfully imported!\n")),Object(r.b)("p",null,"If during the import something goes wrong, you will see the errors and why it failed."),Object(r.b)("h3",{id:"secrets"},"Secrets"),Object(r.b)(c.a,{type:"info",mdxType:"Alert"},Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/secret/"}),"Check out the documentation")," to learn more on how Secrets works.")),Object(r.b)("p",null,"To import the Secrets, you need to run the same command ",Object(r.b)("inlineCode",{parentName:"p"},"qovery env import <dotenv file>")," and select the secrets to import."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ qovery env import .env.development\n\nQovery: dot env file to import: '.env.development'\n? Do you want to import Environment Variables or Secrets? Secrets\n? What environment variables do you want to import?  [Use arrows to move, space to select, <right> to all, <left> to none, type to filter]\n  [ ]  COLOR_BACKGROUND=fff\n  [x]  AUTH0_API_KEY_SECRET=0xb33f\n  [ ]  API_URL=https://api.mytld.com\n> [x]  STRAPI_API_KEY=x.xxyyyzzz\n")),Object(r.b)("p",null,"Once validated you will see the following import validation:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"? What environment variables do you want to import? STRAPI_API_KEY=x.xxyyyzzz, AUTH0_API_KEY_SECRET=0xb33\nQovery: \u2705 Secrets successfully imported!\n")),Object(r.b)("h2",{id:"check"},"Check"),Object(r.b)("p",null,"Open your environment variables console to check that everything has been set correctly."))}d.isMDXComponent=!0},430:function(e,t,n){"use strict";n(433);var a=n(0),o=n.n(a),r=n(429),l=n.n(r);n(131);t.a=function(e){var t=e.children,n=e.classNames,a=e.fill,r=e.icon,i=e.type,c=null;switch(i){case"danger":c="alert-triangle";break;case"success":c="check-circle";break;case"warning":c="alert-triangle";break;default:c="info"}return o.a.createElement("div",{className:l()(n,"alert","alert--"+i,{"alert--fill":a,"alert--icon":!1!==r}),role:"alert"},!1!==r&&o.a.createElement("i",{className:l()("feather","icon-"+(r||c))}),t)}},432:function(e,t,n){"use strict";var a=n(1),o=n(0),r=n.n(o),l=n(39),i=n(436),c=n(19),s=n.n(c);t.a=function(e){var t,n=e.to,c=e.href,u=n||c,b=Object(i.a)(u),m=Object(o.useRef)(!1),p=s.a.canUseIntersectionObserver;return Object(o.useEffect)((function(){return!p&&b&&window.docusaurus.prefetch(u),function(){p&&t&&t.disconnect()}}),[u,p,b]),u&&b?r.a.createElement(l.b,Object(a.a)({},e,{onMouseEnter:function(){m.current||(window.docusaurus.preload(u),m.current=!0)},innerRef:function(e){var n,a;p&&e&&b&&(n=e,a=function(){window.docusaurus.prefetch(u)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){n===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(n),t.disconnect(),a())}))}))).observe(n))},to:u})):r.a.createElement("a",Object(a.a)({},e,{href:u}))}},434:function(e,t,n){var a=n(25).f,o=Function.prototype,r=/^\s*function ([^ (]*)/;"name"in o||n(10)&&a(o,"name",{configurable:!0,get:function(){try{return(""+this).match(r)[1]}catch(e){return""}}})},435:function(e,t,n){"use strict";var a=n(0),o=n.n(a),r=n(432),l=n(429),i=n.n(l);n(132);t.a=function(e){var t=e.children,n=e.className,a=e.badge,l=e.leftIcon,c=e.rightIcon,s=e.size,u=e.target,b=e.to,m=i()("jump-to","jump-to--"+s,n),p=o.a.createElement("div",{className:"jump-to--inner"},o.a.createElement("div",{className:"jump-to--inner-2"},l&&o.a.createElement("div",{className:"jump-to--left"},o.a.createElement("i",{className:"feather icon-"+l})),o.a.createElement("div",{className:"jump-to--main"},a?o.a.createElement("span",{className:"badge badge--primary badge--right"},a):"",t),o.a.createElement("div",{className:"jump-to--right"},o.a.createElement("i",{className:"feather icon-"+(c||"chevron-right")+" arrow"}))));return u?o.a.createElement("a",{href:b,target:u,className:m},p):o.a.createElement(r.a,{to:b,className:m},p)}},436:function(e,t,n){"use strict";function a(e){return!1===/^(https?:|\/\/)/.test(e)}n.d(t,"a",(function(){return a}))},437:function(e,t,n){"use strict";n(434);var a=n(0),o=n.n(a),r=n(430);t.a=function(e){var t=e.children,n=e.name;return o.a.createElement(r.a,{type:"info",fill:!0,icon:!1,rounded:!0,className:"list--icons list--icons--arrow list--tight list--indent margin-bottom--lg"},o.a.createElement("p",{class:"text--lg margin-bottom--sm",style:{marginTop:"-0.25em"}},"Before you begin, this ",n||"page"," assumes the following:"),t)}},443:function(e,t,n){"use strict";var a=n(1),o=(n(446),n(445),n(52),n(28),n(21),n(20),n(0)),r=n.n(o),l=n(449),i=n(429),c=n.n(i),s=n(439),u=n.n(s),b=n(448),m=37,p=39;function d(e){var t=e.block,n=e.centered,a=e.changeSelectedValue,o=e.className,l=e.handleKeydown,i=e.style,s=e.values,u=e.selectedValue,b=e.tabRefs;return r.a.createElement("div",{className:n?"tabs--centered":null},r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:c()("tabs",o,{"tabs--block":t}),style:i},s.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":u===t,className:c()("tab-item",{"tab-item--active":u===t}),key:t,ref:function(e){return b.push(e)},onKeyDown:function(e){return l(b,e.target,e)},onFocus:function(){return a(t)},onClick:function(){return a(t)}},n)}))))}function v(e){var t=e.placeholder,n=e.selectedValue,a=e.changeSelectedValue,o=e.size,i=e.values,c=i;if(c[0].group){var s=_.groupBy(c,"group");c=Object.keys(s).map((function(e){return{label:e,options:s[e]}}))}return r.a.createElement(l.a,{className:"react-select-container react-select--"+o,classNamePrefix:"react-select",options:c,isClearable:n,placeholder:t,value:i.find((function(e){return e.value==n})),onChange:function(e){return a(e?e.value:null)}})}t.a=function(e){e.block,e.centered;var t=e.children,n=e.defaultValue,l=e.groupId,i=e.label,c=e.placeholder,s=e.select,h=e.size,y=(e.style,e.values),f=e.urlKey,O=Object(b.a)(),g=O.tabGroupChoices,j=O.setTabGroupChoices,w=Object(o.useState)(n),N=w[0],x=w[1];if(null!=l){var E=g[l];null!=E&&E!==N&&x(E)}var I=function(e){x(e),null!=l&&j(l,e)},C=[],T=function(e,t,n){switch(n.keyCode){case p:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case m:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}};return Object(o.useEffect)((function(){if("undefined"!=typeof window&&window.location&&f){var e=u.a.parse(window.location.search);e[f]&&x(e[f])}}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"margin-bottom--"+(h||"md")},i&&r.a.createElement("div",{className:"margin-vert--sm"},i),y.length>1&&(s?r.a.createElement(v,Object(a.a)({changeSelectedValue:I,handleKeydown:T,placeholder:c,selectedValue:N,size:h,tabRefs:C},e)):r.a.createElement(d,Object(a.a)({changeSelectedValue:I,handleKeydown:T,selectedValue:N,tabRefs:C},e)))),o.Children.toArray(t).filter((function(e){return e.props.value===N}))[0])}},444:function(e,t,n){"use strict";var a=n(0),o=n.n(a);t.a=function(e){return o.a.createElement(o.a.Fragment,null,e.children)}}}]);