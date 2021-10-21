(window.webpackJsonp=window.webpackJsonp||[]).push([[165],{316:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return u})),a.d(t,"metadata",(function(){return d})),a.d(t,"rightToc",(function(){return m})),a.d(t,"default",(function(){return h}));var n=a(1),o=a(9),r=(a(0),a(419)),l=a(423),i=a(428),c=a(431),s=a(432),b=a(425),p=a(418),u={last_modified_on:"2021-09-04",$schema:"/.meta/.schemas/guides.json",title:"Deploy Gin with PostgreSQL",description:"How to deploy a Gin application with the PostgreSQL database with Qovery",author_github:"https://github.com/pjeziorowski",tags:["type: tutorial","framework: gin","language: go","database: postgresql"],hide_pagination:!0},d={categories:[{name:"tutorial",title:"Tutorial",description:"Simple step-by-step tutorials.",permalink:"/guides/tutorial"}],coverLabel:"Deploy Gin with PostgreSQL",description:"How to deploy a Gin application with the PostgreSQL database with Qovery",permalink:"/guides/tutorial/deploy-gin-with-postgresql",readingTime:"6 min read",source:"@site/guides/tutorial/deploy-gin-with-postgresql.md",tags:[{label:"type: tutorial",permalink:"/guides/tags/type-tutorial"},{label:"framework: gin",permalink:"/guides/tags/framework-gin"},{label:"language: go",permalink:"/guides/tags/language-go"},{label:"database: postgresql",permalink:"/guides/tags/database-postgresql"}],title:"Deploy Gin with PostgreSQL",truncated:!1,prevItem:{title:"Deploy Django with PostgreSQL",permalink:"/guides/tutorial/deploy-django-with-postgresql"},nextItem:{title:"Deploy JHipster with PostgreSQL",permalink:"/guides/tutorial/deploy-jhipster-with-postgresql"}},m=[{value:"Steps to deploy Gin with Qovery",id:"steps-to-deploy-gin-with-qovery",children:[{value:"Install Qovery CLI",id:"install-qovery-cli",children:[]},{value:"Sign up",id:"sign-up",children:[]}]},{value:"Gin application",id:"gin-application",children:[{value:"Gin sample application",id:"gin-sample-application",children:[]},{value:"Create a new project",id:"create-a-new-project",children:[]},{value:"Create a new environment",id:"create-a-new-environment",children:[]},{value:"Create a new application",id:"create-a-new-application",children:[]},{value:"Select application port",id:"select-application-port",children:[]},{value:"Use Dockerfile",id:"use-dockerfile",children:[]}]},{value:"PostgreSQL",id:"postgresql",children:[{value:"Deploy a PostgreSQL database",id:"deploy-a-postgresql-database",children:[]},{value:"Connect your Gin application to PostgreSQL",id:"connect-your-gin-application-to-postgresql",children:[]}]},{value:"Deploy your application",id:"deploy-your-application",children:[]},{value:"Trigger a new deployment",id:"trigger-a-new-deployment",children:[]},{value:"Conclusion",id:"conclusion",children:[]}],g={rightToc:m};function h(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},g,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"This tutorial show you how to deploy your ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/gin-gonic/gin"}),"Gin")," application with ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.postgresql.org"}),"PostgreSQL")," database. Let's go!"),Object(r.b)(b.a,{name:"guide",mdxType:"Assumptions"},Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Your Operating System is macOS / Windows / Linux"),Object(r.b)("li",{parentName:"ul"},"You have a ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com"}),"Github")," or ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://gitlab.com"}),"Gitlab")," account"))),Object(r.b)("h2",{id:"steps-to-deploy-gin-with-qovery"},"Steps to deploy Gin with Qovery"),Object(r.b)(c.a,{centered:!0,className:"rounded",defaultValue:"web",placeholder:"Select your interface",select:!1,size:null,values:[{group:"Interfaces",label:"Web",value:"web"},{group:"Interfaces",label:"CLI",value:"cli"}],mdxType:"Tabs"},Object(r.b)(s.a,{value:"web",mdxType:"TabItem"},Object(r.b)("li",null,Object(r.b)("p",null,"Sign in to the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://start.qovery.com"}),"Qovery web interface"),"."),Object(r.b)("p",{align:"center"},Object(r.b)("a",{href:"https://start.qovery.com"},Object(r.b)("img",{src:"/img/qovery_signup.svg",alt:"Qovery Sign-up page"}))))),Object(r.b)(s.a,{value:"cli",mdxType:"TabItem"},Object(r.b)("li",null,Object(r.b)("h3",{id:"install-qovery-cli"},"Install Qovery CLI"),Object(r.b)(c.a,{centered:!0,className:"rounded",defaultValue:"linux",placeholder:"Select your OS",select:!1,size:null,values:[{group:"Platforms",label:"Linux",value:"linux"},{group:"Platforms",label:"MacOS",value:"macos"},{group:"Platforms",label:"Windows",value:"windows"}],mdxType:"Tabs"},Object(r.b)(s.a,{value:"linux",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# Download and install Qovery CLI on every Linux distribution\n$ curl -s https://get.qovery.com | sudo bash\n"))),Object(r.b)(s.a,{value:"macos",mdxType:"TabItem"},Object(r.b)(c.a,{centered:!0,className:"rounded",defaultValue:"homebrew",values:[{label:"Homebrew",value:"homebrew"},{label:"Manual",value:"manual"}],mdxType:"Tabs"},Object(r.b)(s.a,{value:"homebrew",mdxType:"TabItem"},Object(r.b)("p",null,"The common solution to install a command line binary on the MacOS is to use ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://brew.sh/"}),"Homebrew"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# Add Qovery brew repository\n$ brew tap Qovery/qovery-cli\n\n# Install the CLI\n$ brew install qovery-cli\n"))),Object(r.b)(s.a,{value:"manual",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# Install the Qovery CLI on MacOS manually\n$ curl -s https://get.qovery.com | bash\n"))))),Object(r.b)(s.a,{value:"windows",mdxType:"TabItem"},Object(r.b)(c.a,{centered:!0,className:"rounded",defaultValue:"scoop",values:[{label:"Scoop",value:"scoop"},{label:"Manual",value:"manual"}],mdxType:"Tabs"},Object(r.b)(s.a,{value:"scoop",mdxType:"TabItem"},Object(r.b)("p",null,"The classic way to install binaries on Windows is to use ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://scoop.sh/"}),"Scoop"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# Add Qovery bucket\n$ scoop bucket add qovery https://github.com/Qovery/scoop-qovery-cli\n\n# Install the CLI\n$ scoop install qovery-cli\n"))),Object(r.b)(s.a,{value:"manual",mdxType:"TabItem"},Object(r.b)("p",null,"Install the Qovery CLI on Windows manually by downloading the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Qovery/qovery-cli/releases"}),"latest realease"),", and uncompress its content to\n",Object(r.b)("inlineCode",{parentName:"p"},"C:\\Windows"),".")))))),Object(r.b)("li",null,Object(r.b)("h3",{id:"sign-up"},"Sign up"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# Sign up and sign in command\n$ qovery auth\n")),Object(r.b)(p.a,{type:"info",mdxType:"Alert"},Object(r.b)("p",null,"If you are using an environment without access to GUI or a browser, you can use headless authentication instead:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# Sign up and sign in command\n$ qovery auth --headless\n"))),Object(r.b)("p",null,"Your browser window with sign-in options will open."),Object(r.b)("p",{align:"center"},Object(r.b)("img",{src:"/img/qovery_signup.svg",alt:"Qovery Sign-up page"})),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/apps/qovery/installations/new"}),"Click here")," to authorize Qovery to clone and build your applications."),Object(r.b)("p",{align:"center"},Object(r.b)("img",{src:"/img/github_signup.svg",alt:"Connect Github"})),Object(r.b)("p",null,"Congratulations, you are logged-in.")))),Object(r.b)("h2",{id:"gin-application"},"Gin application"),Object(r.b)("h3",{id:"gin-sample-application"},"Gin sample application"),Object(r.b)("p",null,"Get a copy of the sample source code of ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Qovery/simple-example-gin-with-postgresql"}),"Gin sample project")," by forking it."),Object(r.b)("p",null,"To deploy your Gin application connected to a ",Object(r.b)("strong",{parentName:"p"},"PostgreSQL"),", you can use our sample code and follow the configuration steps."),Object(r.b)("p",null,"In this example we are using ",Object(r.b)("strong",{parentName:"p"},"PostgreSQL")," ",Object(r.b)("strong",{parentName:"p"},"v11.5"),"."),Object(r.b)(i.a,{headingDepth:3,mdxType:"Steps"},Object(r.b)("ol",null,Object(r.b)("li",null,Object(r.b)("h3",{id:"create-a-new-project"},"Create a new project"),Object(r.b)("p",{align:"center"},Object(r.b)("img",{src:"/img/heroku/heroku-2.png",alt:"Migrate from Heroku"}))),Object(r.b)("li",null,Object(r.b)("h3",{id:"create-a-new-environment"},"Create a new environment"),Object(r.b)("p",{align:"center"},Object(r.b)("img",{src:"/img/heroku/heroku-3.png",alt:"Migrate from Heroku"}))),Object(r.b)("li",null,Object(r.b)("h3",{id:"create-a-new-application"},"Create a new application"),Object(r.b)("p",null,"To follow the guide, ",Object(r.b)("a",{href:"urls.sample_gin_with_postgresql"},"you can fork and use our repository")),Object(r.b)("p",null,"Use the forked repository (and branch ",Object(r.b)("strong",{parentName:"p"},"master"),") while creating the application in the repository field:"),Object(r.b)("p",{align:"center"},Object(r.b)("img",{src:"/img/rust/rust.png",alt:"Migrate from Heroku"}))),Object(r.b)("li",null,Object(r.b)("h3",{id:"select-application-port"},"Select application port"),Object(r.b)("p",null,"After the application is created: "),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Navigate application settings"),Object(r.b)("li",{parentName:"ul"},"Select ",Object(r.b)("strong",{parentName:"li"},"Port")),Object(r.b)("li",{parentName:"ul"},"Add port ",Object(r.b)("strong",{parentName:"li"}," 8080 "))),Object(r.b)("p",{align:"left"},Object(r.b)("img",{src:"/img/micro/micros-1.png",alt:"Port"}))),Object(r.b)("li",null,Object(r.b)("h3",{id:"use-dockerfile"},"Use Dockerfile"),Object(r.b)("p",null,"In the settings ",Object(r.b)("strong",{parentName:"p"},"General")," section, set ",Object(r.b)("strong",{parentName:"p"},"Build Mode"),' to Dockerfile and set Dockerfile path as "Dockerfile". Then ',Object(r.b)("strong",{parentName:"p"},"save")," your change.")))),Object(r.b)("h2",{id:"postgresql"},"PostgreSQL"),Object(r.b)(i.a,{headingDepth:3,mdxType:"Steps"},Object(r.b)("ol",null,Object(r.b)("li",null,Object(r.b)("h3",{id:"deploy-a-postgresql-database"},"Deploy a PostgreSQL database"),Object(r.b)("p",null,"In your environment view, click on ",Object(r.b)("strong",{parentName:"p"},"Add")," and ",Object(r.b)("strong",{parentName:"p"},"Database")," buttons:"),Object(r.b)("p",{align:"center"},Object(r.b)("img",{src:"/img/template-add-db.png",alt:"Template DB Gin"})),Object(r.b)("p",null,"In the popup window while adding a database, choose your name, select ",Object(r.b)("strong",{parentName:"p"},"PostgreSQL")," and ",Object(r.b)("strong",{parentName:"p"},"11.5")," version."),Object(r.b)("p",{align:"center"},Object(r.b)("img",{src:"/img/template-db.png",alt:"Template DB"})),Object(r.b)("p",null,"In the end, click on your added database - in the new screen you'll be able to find the ",Object(r.b)("strong",{parentName:"p"},"Deploy")," button:"),Object(r.b)("p",{align:"center"},Object(r.b)("img",{src:"/img/template-deploy-db.png",alt:"Template DB"})),Object(r.b)(p.a,{type:"info",mdxType:"Alert"},Object(r.b)("p",null,"To learn how to add a PostgreSQL database in more details, you can ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/guides/getting-started/create-a-database/"}),"follow this guide"),"."))),Object(r.b)("li",null,Object(r.b)("h3",{id:"connect-your-gin-application-to-postgresql"},"Connect your Gin application to PostgreSQL"),Object(r.b)("p",null,"Credentials of your PostgreSQL database are available via ",Object(r.b)("strong",{parentName:"p"},"Environment Variables")," and ",Object(r.b)("strong",{parentName:"p"},"Secrets"),". Qovery injects environment vars at the runtime."),Object(r.b)("p",null,"You can learn more about environment variables and secrets ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/environment-variable/"}),"here"),"."),Object(r.b)("p",null,"To list all the environment variables available to your Gin application, you can open ",Object(r.b)("strong",{parentName:"p"},"Environment Variables")," and ",Object(r.b)("strong",{parentName:"p"},"Secret")," tabs in your application window:"),Object(r.b)("p",{align:"center"},Object(r.b)("img",{src:"/img/configuration/variables/secret-2.png",alt:"Secret"})),Object(r.b)(p.a,{type:"info",mdxType:"Alert"},Object(r.b)("p",null,"In the ",Object(r.b)("strong",{parentName:"p"},"Secrets")," section, you'll see all names of injected database secrets, including those for the previously created PostgreSQL database.\nTo connect the Gin app to the PostgreSQL database, you need to setup the application to use those secrets."),Object(r.b)("p",null,"All you have to do is to open and edit ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Qovery/simple-example-gin-with-postgresql/blob/master/db/db.go"}),"database configuration file")," in your forked repository.\nReplace all the ",Object(r.b)("strong",{parentName:"p"},"QOVERY_DATABASE_XXX")," variables with values you have in your own environment. Those variable keys contain your database ID, this is why you need to update the file."),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"TIP: you could also make use of ",Object(r.b)("strong",{parentName:"em"},"Variable Aliases")," to change the name of used environment variables in your Gin application. ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/using-qovery/configuration/secret/#alias-secret"}),"Learn more here"),".")))))),Object(r.b)("h2",{id:"deploy-your-application"},"Deploy your application"),Object(r.b)("p",null,"All you have to do now is to navigate to your application and click ",Object(r.b)("strong",{parentName:"p"},"Deploy")," button"),Object(r.b)("p",{align:"center"},Object(r.b)("img",{src:"/img/heroku/heroku-1.png",alt:"Deploy App"})),Object(r.b)("p",null,"That's it. Watch the status and wait till the app is deployed."),Object(r.b)("p",null,"Congratulations! Your environment with ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/gin-gonic/gin"}),"Gin")," application and ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.postgresql.org"}),"PostgreSQL")," database should be in progress."),Object(r.b)("h2",{id:"trigger-a-new-deployment"},"Trigger a new deployment"),Object(r.b)("p",null,"Now, you can play with the sample Gin application and commit & push your changes. Qovery detects your actions and triggers new builds and application deployments. Any change you make will be reflected in your deployed application automatically."),Object(r.b)("h2",{id:"conclusion"},"Conclusion"),Object(r.b)("p",null,"Congratulations! Now, you know how to deploy your Gin app with PostgreSQL in just a few steps."),Object(r.b)("p",null,"Do you have any feedback about this tutorial? Let us know what you think on ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://discord.qovery.com"}),"Discord"),", and join our wonderful dev community of +5500 devs."),Object(r.b)(l.a,{to:"/guides/tutorial/",mdxType:"Jump"},"Tutorial"))}h.isMDXComponent=!0},418:function(e,t,a){"use strict";a(421);var n=a(0),o=a.n(n),r=a(417),l=a.n(r);a(131);t.a=function(e){var t=e.children,a=e.classNames,n=e.fill,r=e.icon,i=e.type,c=null;switch(i){case"danger":c="alert-triangle";break;case"success":c="check-circle";break;case"warning":c="alert-triangle";break;default:c="info"}return o.a.createElement("div",{className:l()(a,"alert","alert--"+i,{"alert--fill":n,"alert--icon":!1!==r}),role:"alert"},!1!==r&&o.a.createElement("i",{className:l()("feather","icon-"+(r||c))}),t)}},420:function(e,t,a){"use strict";var n=a(1),o=a(0),r=a.n(o),l=a(39),i=a(424),c=a(19),s=a.n(c);t.a=function(e){var t,a=e.to,c=e.href,b=a||c,p=Object(i.a)(b),u=Object(o.useRef)(!1),d=s.a.canUseIntersectionObserver;return Object(o.useEffect)((function(){return!d&&p&&window.docusaurus.prefetch(b),function(){d&&t&&t.disconnect()}}),[b,d,p]),b&&p?r.a.createElement(l.b,Object(n.a)({},e,{onMouseEnter:function(){u.current||(window.docusaurus.preload(b),u.current=!0)},innerRef:function(e){var a,n;d&&e&&p&&(a=e,n=function(){window.docusaurus.prefetch(b)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){a===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(a),t.disconnect(),n())}))}))).observe(a))},to:b})):r.a.createElement("a",Object(n.a)({},e,{href:b}))}},422:function(e,t,a){var n=a(25).f,o=Function.prototype,r=/^\s*function ([^ (]*)/;"name"in o||a(10)&&n(o,"name",{configurable:!0,get:function(){try{return(""+this).match(r)[1]}catch(e){return""}}})},423:function(e,t,a){"use strict";var n=a(0),o=a.n(n),r=a(420),l=a(417),i=a.n(l);a(132);t.a=function(e){var t=e.children,a=e.className,n=e.badge,l=e.leftIcon,c=e.rightIcon,s=e.size,b=e.target,p=e.to,u=i()("jump-to","jump-to--"+s,a),d=o.a.createElement("div",{className:"jump-to--inner"},o.a.createElement("div",{className:"jump-to--inner-2"},l&&o.a.createElement("div",{className:"jump-to--left"},o.a.createElement("i",{className:"feather icon-"+l})),o.a.createElement("div",{className:"jump-to--main"},n?o.a.createElement("span",{className:"badge badge--primary badge--right"},n):"",t),o.a.createElement("div",{className:"jump-to--right"},o.a.createElement("i",{className:"feather icon-"+(c||"chevron-right")+" arrow"}))));return b?o.a.createElement("a",{href:p,target:b,className:u},d):o.a.createElement(r.a,{to:p,className:u},d)}},424:function(e,t,a){"use strict";function n(e){return!1===/^(https?:|\/\/)/.test(e)}a.d(t,"a",(function(){return n}))},425:function(e,t,a){"use strict";a(422);var n=a(0),o=a.n(n),r=a(418);t.a=function(e){var t=e.children,a=e.name;return o.a.createElement(r.a,{type:"info",fill:!0,icon:!1,rounded:!0,className:"list--icons list--icons--arrow list--tight list--indent margin-bottom--lg"},o.a.createElement("p",{class:"text--lg margin-bottom--sm",style:{marginTop:"-0.25em"}},"Before you begin, this ",a||"page"," assumes the following:"),t)}},428:function(e,t,a){"use strict";var n=a(0),o=a.n(n),r=(a(417),a(427)),l=a.n(r);a(133);t.a=function(e){var t=e.children,a=e.headingDepth,r=e.hideFeedbackQuestion,i="undefined"!=typeof window?window.location:null,c={title:"Tutorial on "+i+" failed",body:"The tutorial on:\n\n"+i+"\n\nHere's what went wrong:\n\n\x3c!-- Insert command output and details. Thank you for reporting! :) --\x3e"},s="https://github.com/qovery/documentation/issues/new?"+l.a.stringify(c),b=Object(n.useState)(null),p=b[0],u=b[1];return o.a.createElement("div",{className:"steps steps--h"+a},t,!r&&!p&&o.a.createElement("div",{className:"steps--feedback"},"How was it? Did this tutorial work?\xa0\xa0",o.a.createElement("span",{className:"button button--sm button--primary",onClick:function(){return u("yes")}},"Yes"),"\xa0\xa0",o.a.createElement("a",{href:s,target:"_blank",className:"button button--sm button--primary"},"No")),"yes"==p&&o.a.createElement("div",{className:"steps--feedback steps--feedback--success"},"Thanks! If you're enjoying Qovery please consider ",o.a.createElement("a",{href:"https://github.com/qovery/documentation/",target:"_blank"},"starring our Github repo"),"."))}},431:function(e,t,a){"use strict";var n=a(1),o=(a(435),a(433),a(52),a(28),a(21),a(20),a(0)),r=a.n(o),l=a(437),i=a(417),c=a.n(i),s=a(427),b=a.n(s),p=a(436),u=37,d=39;function m(e){var t=e.block,a=e.centered,n=e.changeSelectedValue,o=e.className,l=e.handleKeydown,i=e.style,s=e.values,b=e.selectedValue,p=e.tabRefs;return r.a.createElement("div",{className:a?"tabs--centered":null},r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:c()("tabs",o,{"tabs--block":t}),style:i},s.map((function(e){var t=e.value,a=e.label;return r.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":b===t,className:c()("tab-item",{"tab-item--active":b===t}),key:t,ref:function(e){return p.push(e)},onKeyDown:function(e){return l(p,e.target,e)},onFocus:function(){return n(t)},onClick:function(){return n(t)}},a)}))))}function g(e){var t=e.placeholder,a=e.selectedValue,n=e.changeSelectedValue,o=e.size,i=e.values,c=i;if(c[0].group){var s=_.groupBy(c,"group");c=Object.keys(s).map((function(e){return{label:e,options:s[e]}}))}return r.a.createElement(l.a,{className:"react-select-container react-select--"+o,classNamePrefix:"react-select",options:c,isClearable:a,placeholder:t,value:i.find((function(e){return e.value==a})),onChange:function(e){return n(e?e.value:null)}})}t.a=function(e){e.block,e.centered;var t=e.children,a=e.defaultValue,l=e.groupId,i=e.label,c=e.placeholder,s=e.select,h=e.size,j=(e.style,e.values),y=e.urlKey,O=Object(p.a)(),f=O.tabGroupChoices,v=O.setTabGroupChoices,w=Object(o.useState)(a),N=w[0],k=w[1];if(null!=l){var T=f[l];null!=T&&T!==N&&k(T)}var S=function(e){k(e),null!=l&&v(l,e)},Q=[],I=function(e,t,a){switch(a.keyCode){case d:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case u:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}};return Object(o.useEffect)((function(){if("undefined"!=typeof window&&window.location&&y){var e=b.a.parse(window.location.search);e[y]&&k(e[y])}}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"margin-bottom--"+(h||"md")},i&&r.a.createElement("div",{className:"margin-vert--sm"},i),j.length>1&&(s?r.a.createElement(g,Object(n.a)({changeSelectedValue:S,handleKeydown:I,placeholder:c,selectedValue:N,size:h,tabRefs:Q},e)):r.a.createElement(m,Object(n.a)({changeSelectedValue:S,handleKeydown:I,selectedValue:N,tabRefs:Q},e)))),o.Children.toArray(t).filter((function(e){return e.props.value===N}))[0])}},432:function(e,t,a){"use strict";var n=a(0),o=a.n(n);t.a=function(e){return o.a.createElement(o.a.Fragment,null,e.children)}}}]);