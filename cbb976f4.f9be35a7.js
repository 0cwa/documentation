/*! For license information please see cbb976f4.f9be35a7.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[203],{354:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(1),r=n(9),i=(n(0),n(411)),o=(n(410),n(417),n(415),{last_modified_on:"2021-11-30",$schema:"/.meta/.schemas/guides.json",title:"Using Amazon SQS and Lambda on Qovery",description:"How to integrate Amazon SQS and Lambda on Qover",author_github:"https://github.com/pjeziorowski",tags:["type: tutorial","cloud_provider: aws"],hide_pagination:!0}),s={categories:[{name:"tutorial",title:"Tutorial",description:"Simple step-by-step tutorials.",permalink:"/guides/tutorial"}],coverLabel:"Using Amazon SQS and Lambda on Qovery",description:"How to integrate Amazon SQS and Lambda on Qover",permalink:"/guides/tutorial/aws-sqs-lambda-with-qovery",readingTime:"5 min read",source:"@site/guides/tutorial/aws-sqs-lambda-with-qovery.md",tags:[{label:"type: tutorial",permalink:"/guides/tags/type-tutorial"},{label:"cloud_provider: aws",permalink:"/guides/tags/cloud-provider-aws"}],title:"Using Amazon SQS and Lambda on Qovery",truncated:!1,prevItem:{title:"URL Shortener API with Kotlin (Part 1/2)",permalink:"/guides/tutorial/url-shortener-api-with-kotlin"},nextItem:{title:"Working with Git Submodules",permalink:"/guides/tutorial/working-with-git-submodules"}},c=[{value:"Goal",id:"goal",children:[]},{value:"Configure SQS",id:"configure-sqs",children:[]},{value:"Create Message Producer",id:"create-message-producer",children:[]},{value:"Create Lambda Consumers",id:"create-lambda-consumers",children:[]},{value:"Create Lambda Trigger",id:"create-lambda-trigger",children:[]},{value:"Configure Permissions",id:"configure-permissions",children:[]},{value:"Test Lambda as an SQS Consumer Flow",id:"test-lambda-as-an-sqs-consumer-flow",children:[]},{value:"Conclusions",id:"conclusions",children:[]}],l={rightToc:c};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Message queuing service enables you to decouple and scale microservices, distributed systems, and serverless applications. In this guide, we'll show you how to leverage a queue system (",Object(i.b)("inlineCode",{parentName:"p"},"Amazon SQS"),") to build a highly scalable backend."),Object(i.b)("p",null,"Using Amazon SQS eliminates the complexity and overhead associated with managing and operating message-oriented middleware and empowers developers to focus on differentiating work. With SQS, you can send, store, and receive messages between software components at any volume without losing messages or requiring other services to be available."),Object(i.b)("h2",{id:"goal"},"Goal"),Object(i.b)("p",null,"In this guide, we'll create a backend microservice that sends messages on an event queue. Additionally, we'll go through two ways of consuming and processing those messages:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"We will use ",Object(i.b)("inlineCode",{parentName:"li"},"AWS Lambda")," to process events from the queue in a serverless way"),Object(i.b)("li",{parentName:"ul"},"We will use Qovery-managed backend application workers to process events from the queue")),Object(i.b)("p",{align:"center"},Object(i.b)("img",{src:"/img/aws-sqs-lambda-with-qovery/1.png",alt:"AWS SQS Lambda"})),Object(i.b)("p",null,"As for now, Qovery does not natively integrate with AWS Lambda and SQS, but the integration part is quite easy, and we will go through it in the following steps."),Object(i.b)("p",null,"The backend application and workers servers that consume messages from the queue will be fully managed and deployed by Qovery."),Object(i.b)("p",null,"Let's get started."),Object(i.b)("h2",{id:"configure-sqs"},"Configure SQS"),Object(i.b)("p",null,"Open ",Object(i.b)("inlineCode",{parentName:"p"},"Amazon SQS")," service in AWS Console and click on ",Object(i.b)("inlineCode",{parentName:"p"},"Create Queue")),Object(i.b)("p",{align:"center"},Object(i.b)("img",{src:"/img/aws-sqs-lambda-with-qovery/2.png",alt:"AWS SQS Lambda"})),Object(i.b)("p",null,"We will use the ",Object(i.b)("inlineCode",{parentName:"p"},"Standard")," queue and leave all the settings in defaults for now. Type in the name of the queue and click ",Object(i.b)("inlineCode",{parentName:"p"},"Create"),"."),Object(i.b)("p",{align:"center"},Object(i.b)("img",{src:"/img/aws-sqs-lambda-with-qovery/3.png",alt:"AWS SQS Lambda"})),Object(i.b)("h2",{id:"create-message-producer"},"Create Message Producer"),Object(i.b)("p",null,"In this step, we will deploy an app that pushes messages to the SQS queue. The source code of the app is available ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/Qovery/aws-sqs-example/blob/main/index.js"}),"here"),"."),Object(i.b)("p",null,"The source code of the app is simple - it's a web server that sends messages to the SQS queue each time someone hits its API endpoint:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"const command = new SendMessageCommand({});\n\nclient.send(command).then(\n  (data) => {\n    console.log(data);\n    res.end('Success');\n    // process data.\n  },\n  (error) => {\n    console.error(error);\n    res.end('Error');\n    // error handling.\n  }\n);\n")),Object(i.b)("p",null,"To deploy the app on Qovery, all you need to do is to fork the repository from above and create a new app adding port ",Object(i.b)("inlineCode",{parentName:"p"},"3000"),":"),Object(i.b)("p",{align:"center"},Object(i.b)("img",{src:"/img/aws-sqs-lambda-with-qovery/4.png",alt:"AWS SQS Lambda"})),Object(i.b)("p",null,"Afterwards, we need to add two environment variables:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"accessKeyId")," - your AWS access key ID"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"secretAccessKey")," - your AWS secret access key")),Object(i.b)("p",null,"You can add them in ",Object(i.b)("inlineCode",{parentName:"p"},"Environment Variebles")," ",Object(i.b)("inlineCode",{parentName:"p"},"Secret")," section in your application settings:"),Object(i.b)("p",{align:"center"},Object(i.b)("img",{src:"/img/aws-sqs-lambda-with-qovery/5.png",alt:"AWS SQS Lambda"})),Object(i.b)("p",{align:"center"},Object(i.b)("img",{src:"/img/aws-sqs-lambda-with-qovery/6.png",alt:"AWS SQS Lambda"})),Object(i.b)("p",null,"After all the setup is all done, click the ",Object(i.b)("inlineCode",{parentName:"p"},"Deploy")," button - the application will be shortly deployed."),Object(i.b)("h2",{id:"create-lambda-consumers"},"Create Lambda Consumers"),Object(i.b)("p",null,"In AWS Console, open ",Object(i.b)("inlineCode",{parentName:"p"},"AWS Lambda")," panel."),Object(i.b)("p",{align:"center"},Object(i.b)("img",{src:"/img/aws-sqs-lambda-with-qovery/7.png",alt:"AWS SQS Lambda"})),Object(i.b)("p",null,"For the sake of the guide, we will use a simple ",Object(i.b)("inlineCode",{parentName:"p"},"hello-world")," lambda from AWS serverless app repository."),Object(i.b)("p",null,"Browse the app repository and pick the ",Object(i.b)("inlineCode",{parentName:"p"},"hello-world")," function as shown in the screenshot above, and deploy the function"),Object(i.b)("p",{align:"center"},Object(i.b)("img",{src:"/img/aws-sqs-lambda-with-qovery/8.png",alt:"AWS SQS Lambda"})),Object(i.b)("h2",{id:"create-lambda-trigger"},"Create Lambda Trigger"),Object(i.b)("p",null,"To make our Lambdas consume messages from SQS, we will need to add a ",Object(i.b)("inlineCode",{parentName:"p"},"Lambda Trigger")," in the SQS configuration."),Object(i.b)("p",{align:"center"},Object(i.b)("img",{src:"/img/aws-sqs-lambda-with-qovery/9.png",alt:"AWS SQS Lambda"})),Object(i.b)("p",null,"Click on ",Object(i.b)("inlineCode",{parentName:"p"},"Configure Lambda Function Trigger")," as shown in the screenshot above and select your lambda function from the dropdown, then save the changes:"),Object(i.b)("p",{align:"center"},Object(i.b)("img",{src:"/img/aws-sqs-lambda-with-qovery/10.png",alt:"AWS SQS Lambda"})),Object(i.b)("h2",{id:"configure-permissions"},"Configure Permissions"),Object(i.b)("p",null,"Let's now grant our Lambda functions access to the SQS queue we created before."),Object(i.b)("p",null,"In our lambda view, click on ",Object(i.b)("inlineCode",{parentName:"p"},"Configure"),":"),Object(i.b)("p",{align:"center"},Object(i.b)("img",{src:"/img/aws-sqs-lambda-with-qovery/11.png",alt:"AWS SQS Lambda"})),Object(i.b)("p",null,"Then, click on a role in ",Object(i.b)("inlineCode",{parentName:"p"},"Execution role")," to get redirected to a view where we can alter our Lambda permissions."),Object(i.b)("p",null,"In the role summary screen, click on ",Object(i.b)("inlineCode",{parentName:"p"},"Edit policy")," next to ",Object(i.b)("inlineCode",{parentName:"p"},"helloWorldrolePolicy")),Object(i.b)("p",{align:"center"},Object(i.b)("img",{src:"/img/aws-sqs-lambda-with-qovery/12.png",alt:"AWS SQS Lambda"})),Object(i.b)("p",null,"In the ",Object(i.b)("inlineCode",{parentName:"p"},"SQS")," section, grant permissions to all Read/Write options in the ",Object(i.b)("inlineCode",{parentName:"p"},"Actions")," ",Object(i.b)("inlineCode",{parentName:"p"},"Access level")," and accept the changes:"),Object(i.b)("p",{align:"center"},Object(i.b)("img",{src:"/img/aws-sqs-lambda-with-qovery/13.png",alt:"AWS SQS Lambda"})),Object(i.b)("h2",{id:"test-lambda-as-an-sqs-consumer-flow"},"Test Lambda as an SQS Consumer Flow"),Object(i.b)("p",null,"To push messages to our SQS queue from the backend app deployed on Qovery, click on the ",Object(i.b)("inlineCode",{parentName:"p"},"Open")," button in the application we deployed in the previous step. It will redirect you to the API endpoint exposed by the backend app - the logic inside the application is made so that it sends messages to the SQS queue."),Object(i.b)("p",{align:"center"},Object(i.b)("img",{src:"/img/aws-sqs-lambda-with-qovery/14.png",alt:"AWS SQS Lambda"})),Object(i.b)("p",null,"Now, in the ",Object(i.b)("inlineCode",{parentName:"p"},"Monitoring")," section of SQS in AWS Console, we will see messages received on metrics charts:"),Object(i.b)("p",{align:"center"},Object(i.b)("img",{src:"/img/aws-sqs-lambda-with-qovery/15.png",alt:"AWS SQS Lambda"})),Object(i.b)("p",null,"To validate that our consumer Lambdas processed the messages, navigate to your lambda ",Object(i.b)("inlineCode",{parentName:"p"},"Monitor")," panel:"),Object(i.b)("p",{align:"center"},Object(i.b)("img",{src:"/img/aws-sqs-lambda-with-qovery/16.png",alt:"AWS SQS Lambda"})),Object(i.b)("p",null,"In the ",Object(i.b)("inlineCode",{parentName:"p"},"Invocations")," chart, you'll notice that our Lambda was triggered several times by the messages sent over the SQS."),Object(i.b)("h2",{id:"conclusions"},"Conclusions"),Object(i.b)("p",null,"In this part of the tutorial, we learned how to send messages over from an application deployed on Qovery to SQS and consume them from serverless Lambda functions. In the next part, we will create a scalable group of worker applications deployed by Qovery that consume messages from the same Queue."))}b.isMDXComponent=!0},409:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var i=typeof a;if("string"===i||"number"===i)e.push(a);else if(Array.isArray(a)&&a.length){var o=r.apply(null,a);o&&e.push(o)}else if("object"===i)for(var s in a)n.call(a,s)&&a[s]&&e.push(s)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},410:function(e,t,n){"use strict";n(413);var a=n(0),r=n.n(a),i=n(409),o=n.n(i);n(131);t.a=function(e){var t=e.children,n=e.classNames,a=e.fill,i=e.icon,s=e.type,c=null;switch(s){case"danger":c="alert-triangle";break;case"success":c="check-circle";break;case"warning":c="alert-triangle";break;default:c="info"}return r.a.createElement("div",{className:o()(n,"alert","alert--"+s,{"alert--fill":a,"alert--icon":!1!==i}),role:"alert"},!1!==i&&r.a.createElement("i",{className:o()("feather","icon-"+(i||c))}),t)}},411:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return p}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),b=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},u=function(e){var t=b(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=b(n),m=a,p=u["".concat(o,".").concat(m)]||u[m]||d[m]||i;return n?r.a.createElement(p,s({ref:t},l,{components:n})):r.a.createElement(p,s({ref:t},l))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},412:function(e,t,n){"use strict";var a=n(1),r=n(0),i=n.n(r),o=n(39),s=n(416),c=n(19),l=n.n(c);t.a=function(e){var t,n=e.to,c=e.href,b=n||c,u=Object(s.a)(b),d=Object(r.useRef)(!1),m=l.a.canUseIntersectionObserver;return Object(r.useEffect)((function(){return!m&&u&&window.docusaurus.prefetch(b),function(){m&&t&&t.disconnect()}}),[b,m,u]),b&&u?i.a.createElement(o.b,Object(a.a)({},e,{onMouseEnter:function(){d.current||(window.docusaurus.preload(b),d.current=!0)},innerRef:function(e){var n,a;m&&e&&u&&(n=e,a=function(){window.docusaurus.prefetch(b)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){n===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(n),t.disconnect(),a())}))}))).observe(n))},to:b})):i.a.createElement("a",Object(a.a)({},e,{href:b}))}},413:function(e,t,n){var a=n(12);a(a.P,"Array",{fill:n(418)}),n(74)("fill")},414:function(e,t,n){var a=n(25).f,r=Function.prototype,i=/^\s*function ([^ (]*)/;"name"in r||n(10)&&a(r,"name",{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(e){return""}}})},415:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(412),o=n(409),s=n.n(o);n(132);t.a=function(e){var t=e.children,n=e.className,a=e.badge,o=e.leftIcon,c=e.rightIcon,l=e.size,b=e.target,u=e.to,d=s()("jump-to","jump-to--"+l,n),m=r.a.createElement("div",{className:"jump-to--inner"},r.a.createElement("div",{className:"jump-to--inner-2"},o&&r.a.createElement("div",{className:"jump-to--left"},r.a.createElement("i",{className:"feather icon-"+o})),r.a.createElement("div",{className:"jump-to--main"},a?r.a.createElement("span",{className:"badge badge--primary badge--right"},a):"",t),r.a.createElement("div",{className:"jump-to--right"},r.a.createElement("i",{className:"feather icon-"+(c||"chevron-right")+" arrow"}))));return b?r.a.createElement("a",{href:u,target:b,className:d},m):r.a.createElement(i.a,{to:u,className:d},m)}},416:function(e,t,n){"use strict";function a(e){return!1===/^(https?:|\/\/)/.test(e)}n.d(t,"a",(function(){return a}))},417:function(e,t,n){"use strict";n(414);var a=n(0),r=n.n(a),i=n(410);t.a=function(e){var t=e.children,n=e.name;return r.a.createElement(i.a,{type:"info",fill:!0,icon:!1,rounded:!0,className:"list--icons list--icons--arrow list--tight list--indent margin-bottom--lg"},r.a.createElement("p",{class:"text--lg margin-bottom--sm",style:{marginTop:"-0.25em"}},"Before you begin, this ",n||"page"," assumes the following:"),t)}},418:function(e,t,n){"use strict";var a=n(27),r=n(75),i=n(26);e.exports=function(e){for(var t=a(this),n=i(t.length),o=arguments.length,s=r(o>1?arguments[1]:void 0,n),c=o>2?arguments[2]:void 0,l=void 0===c?n:r(c,n);l>s;)t[s++]=e;return t}}}]);