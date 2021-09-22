(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{262:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return u})),a.d(t,"metadata",(function(){return b})),a.d(t,"rightToc",(function(){return p})),a.d(t,"default",(function(){return d}));var n=a(1),o=a(9),r=(a(0),a(366)),i=a(378),l=a(379),c=a(365),s=(a(370),a(371)),u={last_modified_on:"2021-09-22",$schema:"/.meta/.schemas/guides.json",title:"How to use the Qovery API",description:"This tutorial will show you how to use the Qovery API and create your own integrations",author_github:"https://github.com/Aggis15",tags:["type: tutorial","technology: qovery"],hide_pagination:!0},b={categories:[{name:"tutorial",title:"Tutorial",description:"Simple step-by-step tutorials.",permalink:"/guides/tutorial"}],coverLabel:"How to use the Qovery API",description:"This tutorial will show you how to use the Qovery API and create your own integrations",permalink:"/guides/tutorial/how-to-use-the-qovery-api",readingTime:"6 min read",source:"@site/guides/tutorial/how-to-use-the-qovery-api.md",tags:[{label:"type: tutorial",permalink:"/guides/tags/type-tutorial"},{label:"technology: qovery",permalink:"/guides/tags/technology-qovery"}],title:"How to use the Qovery API",truncated:!1,prevItem:{title:"How to use Github Organizations with Qovery",permalink:"/guides/tutorial/github-organization-repository-access"},nextItem:{title:"How to write a Dockerfile",permalink:"/guides/tutorial/how-to-write-a-dockerfile"}},p=[{value:"Getting an authorization key",id:"getting-an-authorization-key",children:[{value:"Install Qovery CLI",id:"install-qovery-cli",children:[]},{value:"Sign up",id:"sign-up",children:[]},{value:"Getting our token",id:"getting-our-token",children:[]}]},{value:"Using the API",id:"using-the-api",children:[{value:"Getting the needed IDs",id:"getting-the-needed-ids",children:[]},{value:"Receiving the output",id:"receiving-the-output",children:[]}]},{value:"Common mistakes",id:"common-mistakes",children:[{value:"Wrong token",id:"wrong-token",children:[]},{value:"Wrong IDs",id:"wrong-ids",children:[]}]},{value:"Conclusion",id:"conclusion",children:[]}],h={rightToc:p};function d(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},h,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)(c.a,{type:"info",mdxType:"Alert"},Object(r.b)("p",null,"Important note: this tutorial is a temporary workaround to consume the Qovery API - an official way will be provided soon.")),Object(r.b)("p",null,"The Qovery API can be used to create personal integrations that will help you manage your projects on Qovery. They work just like normal HTTP requests and require a bit of knowledge working with APIs."),Object(r.b)("p",null,"Let's get started!!"),Object(r.b)("h2",{id:"getting-an-authorization-key"},"Getting an authorization key"),Object(r.b)(c.a,{mdxType:"Alert"},Object(r.b)("p",null,"The Qovery API works by using authorization keys. Currently, it is only possible to get a key by monitoring your network traffic (nothing to be afraid of, everything will be explained below) and getting one from there. You will also need to change the key rather frequently as that changes everytime. The Qovery team is working on improving this process!")),Object(r.b)("p",null,"1) Head on to the Qovery console."),Object(r.b)(i.a,{centered:!0,className:"rounded",defaultValue:"web",placeholder:"Select your interface",select:!1,size:null,values:[{group:"Interfaces",label:"Web",value:"web"},{group:"Interfaces",label:"CLI",value:"cli"}],mdxType:"Tabs"},Object(r.b)(l.a,{value:"web",mdxType:"TabItem"},Object(r.b)("li",null,Object(r.b)("p",null,"Sign in to the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://start.qovery.com"}),"Qovery web interface"),"."),Object(r.b)("p",{align:"center"},Object(r.b)("a",{href:"https://start.qovery.com"},Object(r.b)("img",{src:"/img/qovery_signup.svg",alt:"Qovery Sign-up page"}))))),Object(r.b)(l.a,{value:"cli",mdxType:"TabItem"},Object(r.b)("li",null,Object(r.b)("h3",{id:"install-qovery-cli"},"Install Qovery CLI"),Object(r.b)(i.a,{centered:!0,className:"rounded",defaultValue:"linux",placeholder:"Select your OS",select:!1,size:null,values:[{group:"Platforms",label:"Linux",value:"linux"},{group:"Platforms",label:"MacOS",value:"macos"},{group:"Platforms",label:"Windows",value:"windows"}],mdxType:"Tabs"},Object(r.b)(l.a,{value:"linux",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# Download and install Qovery CLI on every Linux distribution\n$ curl -s https://get.qovery.com | sudo bash\n"))),Object(r.b)(l.a,{value:"macos",mdxType:"TabItem"},Object(r.b)(i.a,{centered:!0,className:"rounded",defaultValue:"homebrew",values:[{label:"Homebrew",value:"homebrew"},{label:"Manual",value:"manual"}],mdxType:"Tabs"},Object(r.b)(l.a,{value:"homebrew",mdxType:"TabItem"},Object(r.b)("p",null,"The common solution to install a command line binary on the MacOS is to use ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://brew.sh/"}),"Homebrew"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# Add Qovery brew repository\n$ brew tap Qovery/qovery-cli\n\n# Install the CLI\n$ brew install qovery-cli\n"))),Object(r.b)(l.a,{value:"manual",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# Install the Qovery CLI on MacOS manually\n$ curl -s https://get.qovery.com | bash\n"))))),Object(r.b)(l.a,{value:"windows",mdxType:"TabItem"},Object(r.b)(i.a,{centered:!0,className:"rounded",defaultValue:"scoop",values:[{label:"Scoop",value:"scoop"},{label:"Manual",value:"manual"}],mdxType:"Tabs"},Object(r.b)(l.a,{value:"scoop",mdxType:"TabItem"},Object(r.b)("p",null,"The classic way to install binaries on Windows is to use ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://scoop.sh/"}),"Scoop"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# Add Qovery bucket\n$ scoop bucket add qovery https://github.com/Qovery/scoop-qovery-cli\n\n# Install the CLI\n$ scoop install qovery-cli\n"))),Object(r.b)(l.a,{value:"manual",mdxType:"TabItem"},Object(r.b)("p",null,"Install the Qovery CLI on Windows manually by downloading the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Qovery/qovery-cli/releases"}),"latest realease"),", and uncompress its content to\n",Object(r.b)("inlineCode",{parentName:"p"},"C:\\Windows"),".")))))),Object(r.b)("li",null,Object(r.b)("h3",{id:"sign-up"},"Sign up"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# Sign up and sign in command\n$ qovery auth\n")),Object(r.b)(c.a,{type:"info",mdxType:"Alert"},Object(r.b)("p",null,"If you are using an environment without access to GUI or a browser, you can use headless authentication instead:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# Sign up and sign in command\n$ qovery auth --headless\n"))),Object(r.b)("p",null,"Your browser window with sign-in options will open."),Object(r.b)("p",{align:"center"},Object(r.b)("img",{src:"/img/qovery_signup.svg",alt:"Qovery Sign-up page"})),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/apps/qovery/installations/new"}),"Click here")," to authorize Qovery to clone and build your applications."),Object(r.b)("p",{align:"center"},Object(r.b)("img",{src:"/img/github_signup.svg",alt:"Connect Github"})),Object(r.b)("p",null,"Congratulations, you are logged-in.")))),Object(r.b)("p",null,"2) Head to any project."),Object(r.b)("h3",{id:"getting-our-token"},"Getting our token"),Object(r.b)("p",null,"3) Open your browser developer console. Usually this is as simple as clicking CTRL + Shift + I"),Object(r.b)("p",null,"4) Head to the network tab, then click on the network tab."),Object(r.b)("p",null,"5) Now, refresh your page, and look for a random request (usually from api.qovery.com), then click on it to inspect it's body. Once you do, you'll see that it has a header as a token."),Object(r.b)("p",{align:"center"},Object(r.b)("img",{src:"/img/Network_Tab_API_Guide.png",alt:"Network Tab"})),Object(r.b)("p",null,"6) Copy the token, then move to the next section."),Object(r.b)(c.a,{type:"warning",mdxType:"Alert"},Object(r.b)("p",null,"Make sure not to leak this token anywhere, or else unauthorized users can have access to your account, something you do not want. Additionally, you must copy your token every time you try to use the API as it changes every once in a while. This will be changed in the future, along with the way you are provided with the token (Console panel).")),Object(r.b)("h2",{id:"using-the-api"},"Using the API"),Object(r.b)(c.a,{type:"info",mdxType:"Alert"},Object(r.b)("p",null,"This part of the tutorial will be showing off a few out of the hundreds of functions of the Qovery API. All the endpoints work the same way, so there is no point outlining all of them here. For all the endpoints, you can click ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://api-doc.qovery.com"}),"here")," to learn more.")),Object(r.b)("p",null,"In order to use the API, you can use any available websites/tools, like ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.postman.com/"}),"Postman")," or the programming language of your choice along with the appropriate library to make HTTP requests (eg. requests for Python)."),Object(r.b)("p",null,"For this demo, I will be using Postman as it's my go-to for using and testing APIs. The point of this tutorial isn't about Postman, so I will not be going in depth about how to use it. You can check out their learning center ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://learning.postman.com/docs/getting-started/introduction/"}),"here")," to learn more."),Object(r.b)("p",null,"Below, I will be trying to learn more about my application using the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://api-doc.qovery.com/#tag/Application-Main-Calls"}),"Get Application by ID")," endpoint."),Object(r.b)("p",null,"1) Grab the token you copied before, and paste it in the authorization tab in the collection menu (refer above to the learning center)."),Object(r.b)("p",null,"2) Create a new request, then grab the URL from the API website. For this request, we need to get our application ID."),Object(r.b)("h3",{id:"getting-the-needed-ids"},"Getting the needed IDs"),Object(r.b)("p",null,"2.1) Go to your application in the console, and look at the URL. It should look something like this:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"https://console.qovery.com/platform/organization/xxx/projects/xxx/environments/xxx/applications/xxx/summary\n")),Object(r.b)("p",null,'2.2) You must copy the ID that\'s right next to the "applications/" part.'),Object(r.b)("p",null,'2.3) Paste that ID where it is needed. In this case, remove "{applicationId}" and paste it there.'),Object(r.b)(c.a,{mdxType:"Alert"},Object(r.b)("p",null,"With this method, you can also grab your organization ID, project ID and environment ID as well.")),Object(r.b)("h3",{id:"receiving-the-output"},"Receiving the output"),Object(r.b)("p",null,"3) If everything was done correctly, Postman (or the tool you are using) should output all the information regarding your application."),Object(r.b)("p",{align:"center"},Object(r.b)("img",{src:"/img/API_Request_Result_API_Guide.png",alt:"Final Result"})),Object(r.b)("h2",{id:"common-mistakes"},"Common mistakes"),Object(r.b)("h3",{id:"wrong-token"},"Wrong token"),Object(r.b)("p",null,"Make sure you are copying the token correctly every time. Do note that you must copy it every time you are making a request as the token gets refreshed as noted above. Refer to the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"#getting-an-authorization-key"}),"getting an autorization key")," section of this tutorial."),Object(r.b)("h3",{id:"wrong-ids"},"Wrong IDs"),Object(r.b)("p",null,'Make sure you are copying the correct IDs you need. For example, if you need your organization ID, copy the ID that is next to the "/organization" URI. For more infomation, refer to the ',Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"#getting-the-needed-ids"}),"getting the needed IDs")," section."),Object(r.b)("h2",{id:"conclusion"},"Conclusion"),Object(r.b)("p",null,"Congratulations! You now know everything you need to know regarding the Qovery API and how to use it! Should you run into any issues, feel free to join the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://discord.qovery.com"}),"Qovery Discord server")," and ask for help there!"),Object(r.b)(s.a,{to:"/guides/tutorial/",mdxType:"Jump"},"Tutorial"))}d.isMDXComponent=!0},365:function(e,t,a){"use strict";a(369);var n=a(0),o=a.n(n),r=a(364),i=a.n(r);a(131);t.a=function(e){var t=e.children,a=e.classNames,n=e.fill,r=e.icon,l=e.type,c=null;switch(l){case"danger":c="alert-triangle";break;case"success":c="check-circle";break;case"warning":c="alert-triangle";break;default:c="info"}return o.a.createElement("div",{className:i()(a,"alert","alert--"+l,{"alert--fill":n,"alert--icon":!1!==r}),role:"alert"},!1!==r&&o.a.createElement("i",{className:i()("feather","icon-"+(r||c))}),t)}},367:function(e,t,a){"use strict";var n=a(1),o=a(0),r=a.n(o),i=a(39),l=a(372),c=a(19),s=a.n(c);t.a=function(e){var t,a=e.to,c=e.href,u=a||c,b=Object(l.a)(u),p=Object(o.useRef)(!1),h=s.a.canUseIntersectionObserver;return Object(o.useEffect)((function(){return!h&&b&&window.docusaurus.prefetch(u),function(){h&&t&&t.disconnect()}}),[u,h,b]),u&&b?r.a.createElement(i.b,Object(n.a)({},e,{onMouseEnter:function(){p.current||(window.docusaurus.preload(u),p.current=!0)},innerRef:function(e){var a,n;h&&e&&b&&(a=e,n=function(){window.docusaurus.prefetch(u)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){a===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(a),t.disconnect(),n())}))}))).observe(a))},to:u})):r.a.createElement("a",Object(n.a)({},e,{href:u}))}},368:function(e,t,a){var n=a(25).f,o=Function.prototype,r=/^\s*function ([^ (]*)/;"name"in o||a(10)&&n(o,"name",{configurable:!0,get:function(){try{return(""+this).match(r)[1]}catch(e){return""}}})},370:function(e,t,a){"use strict";a(368);var n=a(0),o=a.n(n),r=a(365);t.a=function(e){var t=e.children,a=e.name;return o.a.createElement(r.a,{type:"info",fill:!0,icon:!1,rounded:!0,className:"list--icons list--icons--arrow list--tight list--indent margin-bottom--lg"},o.a.createElement("p",{class:"text--lg margin-bottom--sm",style:{marginTop:"-0.25em"}},"Before you begin, this ",a||"page"," assumes the following:"),t)}},371:function(e,t,a){"use strict";var n=a(0),o=a.n(n),r=a(367),i=a(364),l=a.n(i);a(132);t.a=function(e){var t=e.children,a=e.className,n=e.badge,i=e.leftIcon,c=e.rightIcon,s=e.size,u=e.target,b=e.to,p=l()("jump-to","jump-to--"+s,a),h=o.a.createElement("div",{className:"jump-to--inner"},o.a.createElement("div",{className:"jump-to--inner-2"},i&&o.a.createElement("div",{className:"jump-to--left"},o.a.createElement("i",{className:"feather icon-"+i})),o.a.createElement("div",{className:"jump-to--main"},n?o.a.createElement("span",{className:"badge badge--primary badge--right"},n):"",t),o.a.createElement("div",{className:"jump-to--right"},o.a.createElement("i",{className:"feather icon-"+(c||"chevron-right")+" arrow"}))));return u?o.a.createElement("a",{href:b,target:u,className:p},h):o.a.createElement(r.a,{to:b,className:p},h)}},372:function(e,t,a){"use strict";function n(e){return!1===/^(https?:|\/\/)/.test(e)}a.d(t,"a",(function(){return n}))},378:function(e,t,a){"use strict";var n=a(1),o=(a(382),a(380),a(52),a(28),a(21),a(20),a(0)),r=a.n(o),i=a(384),l=a(364),c=a.n(l),s=a(373),u=a.n(s),b=a(383),p=37,h=39;function d(e){var t=e.block,a=e.centered,n=e.changeSelectedValue,o=e.className,i=e.handleKeydown,l=e.style,s=e.values,u=e.selectedValue,b=e.tabRefs;return r.a.createElement("div",{className:a?"tabs--centered":null},r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:c()("tabs",o,{"tabs--block":t}),style:l},s.map((function(e){var t=e.value,a=e.label;return r.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":u===t,className:c()("tab-item",{"tab-item--active":u===t}),key:t,ref:function(e){return b.push(e)},onKeyDown:function(e){return i(b,e.target,e)},onFocus:function(){return n(t)},onClick:function(){return n(t)}},a)}))))}function m(e){var t=e.placeholder,a=e.selectedValue,n=e.changeSelectedValue,o=e.size,l=e.values,c=l;if(c[0].group){var s=_.groupBy(c,"group");c=Object.keys(s).map((function(e){return{label:e,options:s[e]}}))}return r.a.createElement(i.a,{className:"react-select-container react-select--"+o,classNamePrefix:"react-select",options:c,isClearable:a,placeholder:t,value:l.find((function(e){return e.value==a})),onChange:function(e){return n(e?e.value:null)}})}t.a=function(e){e.block,e.centered;var t=e.children,a=e.defaultValue,i=e.groupId,l=e.label,c=e.placeholder,s=e.select,g=e.size,y=(e.style,e.values),v=e.urlKey,f=Object(b.a)(),j=f.tabGroupChoices,O=f.setTabGroupChoices,w=Object(o.useState)(a),k=w[0],I=w[1];if(null!=i){var T=j[i];null!=T&&T!==k&&I(T)}var N=function(e){I(e),null!=i&&O(i,e)},x=[],q=function(e,t,a){switch(a.keyCode){case h:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case p:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}};return Object(o.useEffect)((function(){if("undefined"!=typeof window&&window.location&&v){var e=u.a.parse(window.location.search);e[v]&&I(e[v])}}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"margin-bottom--"+(g||"md")},l&&r.a.createElement("div",{className:"margin-vert--sm"},l),y.length>1&&(s?r.a.createElement(m,Object(n.a)({changeSelectedValue:N,handleKeydown:q,placeholder:c,selectedValue:k,size:g,tabRefs:x},e)):r.a.createElement(d,Object(n.a)({changeSelectedValue:N,handleKeydown:q,selectedValue:k,tabRefs:x},e)))),o.Children.toArray(t).filter((function(e){return e.props.value===k}))[0])}},379:function(e,t,a){"use strict";var n=a(0),o=a.n(n);t.a=function(e){return o.a.createElement(o.a.Fragment,null,e.children)}}}]);