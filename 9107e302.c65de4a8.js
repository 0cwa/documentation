/*! For license information please see 9107e302.c65de4a8.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[144],{295:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return u}));var a=t(1),r=t(9),o=(t(0),t(421)),i=(t(420),t(427),t(425),{last_modified_on:"2021-12-28",$schema:"/.meta/.schemas/guides.json",title:"How to seed a Postgres database on a dev environment",description:"How to automatically inject data into your development Postgres databases",author_github:"https://github.com/pjeziorowski",tags:["type: tutorial","technology: qovery"],hide_pagination:!0}),c={categories:[{name:"tutorial",title:"Tutorial",description:"Simple step-by-step tutorials.",permalink:"/guides/tutorial"}],coverLabel:"How to seed a Postgres database on a dev environment",description:"How to automatically inject data into your development Postgres databases",permalink:"/guides/tutorial/data-seeding-in-postgres",readingTime:"4 min read",source:"@site/guides/tutorial/data-seeding-in-postgres.md",tags:[{label:"type: tutorial",permalink:"/guides/tags/type-tutorial"},{label:"technology: qovery",permalink:"/guides/tags/technology-qovery"}],title:"How to seed a Postgres database on a dev environment",truncated:!1,prevItem:{title:"How to run commands before the application starts",permalink:"/guides/tutorial/how-to-run-commands-at-application-startup"},nextItem:{title:"How to use CloudFront with a React frontend application on Qovery",permalink:"/guides/tutorial/how-to-use-cloudfront-with-react-frontend-application-on-qovery"}},s=[{value:"Seeding SQL",id:"seeding-sql",children:[]},{value:"Migration Script",id:"migration-script",children:[]},{value:"Seeding",id:"seeding",children:[]},{value:"Example",id:"example",children:[{value:"Clone Environment",id:"clone-environment",children:[]},{value:"Preview Environment",id:"preview-environment",children:[]}]}],l={rightToc:s};function u(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The goal of this article is to go through the process of seeding data into development environments on Qovery. Seeding the data into dev environments may help you set up clean development environments and thus speed up the development lifecycle in your team. It can be extremely useful for cloning and creating new environments or using the ",Object(o.b)("inlineCode",{parentName:"p"},"Preview Environment")," feature on Qovery."),Object(o.b)("p",null,"In this guide, we\u2019ll use a ",Object(o.b)("inlineCode",{parentName:"p"},"Node.js")," backend and ",Object(o.b)("inlineCode",{parentName:"p"},"Postgres")," database."),Object(o.b)("h2",{id:"seeding-sql"},"Seeding SQL"),Object(o.b)("p",null,"In the first step, let\u2019s create an idempotent script that will seed our development databases. During the development process, we should expect that the state of the database will be synced with the content of this script."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),"DROP TABLE IF EXISTS _USER;\n\nCREATE TABLE _USER(\n  ID INT PRIMARY KEY NOT NULL,\n  FIRST_NAME VARCHAR(255) NOT NULL,\n  LAST_NAME VARCHAR(50) NOT NULL\n);\n\nINSERT INTO _USER (ID, FIRST_NAME, LAST_NAME)\nVALUES (1, 'John', 'Doe');\n\nINSERT INTO _USER (ID, FIRST_NAME, LAST_NAME)\nVALUES (2, 'Alice', 'Wonderland');\n")),Object(o.b)("p",null,"The example above contains only a single table - the SQL script is specific to your application, so you\u2019ll have to create your own that reflects the schema and database state you would expect in the dev environment."),Object(o.b)("p",null,"Keep in mind that the script should be idempotent as there are chances it will be executed more than once against a single database during your development process."),Object(o.b)("h2",{id:"migration-script"},"Migration Script"),Object(o.b)("p",null,"In the next step, we\u2019ll create a script that will be used to connect to the database and seed the data."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"const fs = require('fs')\nconst { Pool } = require('pg')\n\nrequire(\"dotenv\").config()\nconst databaseUrl = process.env.DATABASE_URL || 'postgresql://localhost:5432/test';\nconst pool = new Pool({\n    connectionString: databaseUrl,\n})\n\nif (process.env.NODE_ENV !== 'production') {\n    const seedQuery = fs.readFileSync('db/seeding.sql', { encoding: 'utf8' })\n    pool.query(seedQuery, (err, res) => {\n        console.log(err, res)\n        console.log('Seeding Completed!')\n        pool.end()\n    })\n}\n")),Object(o.b)("p",null,"The script connects to our Postgres instance, reads the seeding SQL, and makes the required updates. It does it only for non-prod environments thanks to the ",Object(o.b)("inlineCode",{parentName:"p"},"NODE_ENV")," environment variable."),Object(o.b)("p",null,"To make our life easier, we can declare the seeding command in our ",Object(o.b)("inlineCode",{parentName:"p"},"package.json"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),'...\n"seed": "node db/index.js"\n...\n')),Object(o.b)("h2",{id:"seeding"},"Seeding"),Object(o.b)("p",null,"To seed the data, we\u2019ll use ",Object(o.b)("inlineCode",{parentName:"p"},"ENTRYPOINT")," in our ",Object(o.b)("inlineCode",{parentName:"p"},"Dockerfile"),". For more details, you can read our guide - ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.notion.so/How-to-run-DB-migration-commands-845d3d9d7d3c40819c29ce3ea5fb52fb"}),"https://www.notion.so/qovery/How-to-run-DB-migration-commands-845d3d9d7d3c40819c29ce3ea5fb52fb#7840a5aeea414bbfbe5929f1f32c1e95"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-docker"}),'FROM node:16\n\n# Create app directory\nWORKDIR /usr/src/app\n\n# Install app dependencies\n# A wildcard is used to ensure both package.json AND package-lock.json are copied\n# where available (npm@5+)\nCOPY package*.json ./\n\nRUN npm install\n# If you are building your code for production\n# RUN npm ci --only=production\n\n# Bundle app source\nCOPY . .\n\nEXPOSE 3000\n\nENTRYPOINT ["./entrypoint.sh"]\n\nCMD [ "node", "bin/www" ]\n\n')),Object(o.b)("p",null,"Add ",Object(o.b)("inlineCode",{parentName:"p"},"entrypoint.sh")," file to be executed on each environment where the app container runs:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'#! /bin/sh\n\nnode db/index.js\n\n# Execute the given or default command:\n\nexec "$@"\n')),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("p",null,"The following examples will show the application of seeding the data in dev environments after cloning an environment and using the Preview Environment feature."),Object(o.b)("h3",{id:"clone-environment"},"Clone Environment"),Object(o.b)("p",null,"Clone environment feature allows you to make a complete clone of a chosen environment, including its all applications, services, and their configs. In the example we will clone a new environment and have our seed data injected automatically."),Object(o.b)("p",null,"First, we make a clone of our production environment:"),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/img/seed-postgres/1.png",alt:"Seeding Postgres Database"})),Object(o.b)("p",null,"Then, we deploy the new environment:"),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/img/seed-postgres/2.png",alt:"Seeding Postgres Database"})),Object(o.b)("p",null,"After navigating to deployment logs, we will notice our seed data inserts logged:"),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/img/seed-postgres/3.png",alt:"Seeding Postgres Database"})),Object(o.b)("h3",{id:"preview-environment"},"Preview Environment"),Object(o.b)("p",null,"Preview Environment feature allows you to automatically create new development environments to validate new changes before merging them to your production branch."),Object(o.b)("p",null,"First, we open a pull request:"),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/img/seed-postgres/4.png",alt:"Seeding Postgres Database"})),Object(o.b)("p",null,"Then, in list of environments, we get a new environment automatically created for the pull request:"),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/img/seed-postgres/5.png",alt:"Seeding Postgres Database"})),Object(o.b)("p",null,"When you open the logs of the deployment, you\u2019ll see the seed data injection logs:"),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/img/seed-postgres/6.png",alt:"Seeding Postgres Database"})))}u.isMDXComponent=!0},419:function(e,n,t){var a;!function(){"use strict";var t={}.hasOwnProperty;function r(){for(var e=[],n=0;n<arguments.length;n++){var a=arguments[n];if(a){var o=typeof a;if("string"===o||"number"===o)e.push(a);else if(Array.isArray(a)&&a.length){var i=r.apply(null,a);i&&e.push(i)}else if("object"===o)for(var c in a)t.call(a,c)&&a[c]&&e.push(c)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(n,[]))||(e.exports=a)}()},420:function(e,n,t){"use strict";t(423);var a=t(0),r=t.n(a),o=t(419),i=t.n(o);t(131);n.a=function(e){var n=e.children,t=e.classNames,a=e.fill,o=e.icon,c=e.type,s=null;switch(c){case"danger":s="alert-triangle";break;case"success":s="check-circle";break;case"warning":s="alert-triangle";break;default:s="info"}return r.a.createElement("div",{className:i()(t,"alert","alert--"+c,{"alert--fill":a,"alert--icon":!1!==o}),role:"alert"},!1!==o&&r.a.createElement("i",{className:i()("feather","icon-"+(o||s))}),n)}},421:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var a=t(0),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=r.a.createContext({}),u=function(e){var n=r.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c({},n,{},e)),t},p=function(e){var n=u(e.components);return r.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},b=Object(a.forwardRef)((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(t),b=a,m=p["".concat(i,".").concat(b)]||p[b]||d[b]||o;return t?r.a.createElement(m,c({ref:n},l,{components:t})):r.a.createElement(m,c({ref:n},l))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=b;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=t[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},422:function(e,n,t){"use strict";var a=t(1),r=t(0),o=t.n(r),i=t(39),c=t(426),s=t(19),l=t.n(s);n.a=function(e){var n,t=e.to,s=e.href,u=t||s,p=Object(c.a)(u),d=Object(r.useRef)(!1),b=l.a.canUseIntersectionObserver;return Object(r.useEffect)((function(){return!b&&p&&window.docusaurus.prefetch(u),function(){b&&n&&n.disconnect()}}),[u,b,p]),u&&p?o.a.createElement(i.b,Object(a.a)({},e,{onMouseEnter:function(){d.current||(window.docusaurus.preload(u),d.current=!0)},innerRef:function(e){var t,a;b&&e&&p&&(t=e,a=function(){window.docusaurus.prefetch(u)},(n=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(t),n.disconnect(),a())}))}))).observe(t))},to:u})):o.a.createElement("a",Object(a.a)({},e,{href:u}))}},423:function(e,n,t){var a=t(12);a(a.P,"Array",{fill:t(428)}),t(74)("fill")},424:function(e,n,t){var a=t(25).f,r=Function.prototype,o=/^\s*function ([^ (]*)/;"name"in r||t(10)&&a(r,"name",{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(e){return""}}})},425:function(e,n,t){"use strict";var a=t(0),r=t.n(a),o=t(422),i=t(419),c=t.n(i);t(132);n.a=function(e){var n=e.children,t=e.className,a=e.badge,i=e.leftIcon,s=e.rightIcon,l=e.size,u=e.target,p=e.to,d=c()("jump-to","jump-to--"+l,t),b=r.a.createElement("div",{className:"jump-to--inner"},r.a.createElement("div",{className:"jump-to--inner-2"},i&&r.a.createElement("div",{className:"jump-to--left"},r.a.createElement("i",{className:"feather icon-"+i})),r.a.createElement("div",{className:"jump-to--main"},a?r.a.createElement("span",{className:"badge badge--primary badge--right"},a):"",n),r.a.createElement("div",{className:"jump-to--right"},r.a.createElement("i",{className:"feather icon-"+(s||"chevron-right")+" arrow"}))));return u?r.a.createElement("a",{href:p,target:u,className:d},b):r.a.createElement(o.a,{to:p,className:d},b)}},426:function(e,n,t){"use strict";function a(e){return!1===/^(https?:|\/\/)/.test(e)}t.d(n,"a",(function(){return a}))},427:function(e,n,t){"use strict";t(424);var a=t(0),r=t.n(a),o=t(420);n.a=function(e){var n=e.children,t=e.name;return r.a.createElement(o.a,{type:"info",fill:!0,icon:!1,rounded:!0,className:"list--icons list--icons--arrow list--tight list--indent margin-bottom--lg"},r.a.createElement("p",{class:"text--lg margin-bottom--sm",style:{marginTop:"-0.25em"}},"Before you begin, this ",t||"page"," assumes the following:"),n)}},428:function(e,n,t){"use strict";var a=t(27),r=t(75),o=t(26);e.exports=function(e){for(var n=a(this),t=o(n.length),i=arguments.length,c=r(i>1?arguments[1]:void 0,t),s=i>2?arguments[2]:void 0,l=void 0===s?t:r(s,t);l>c;)n[c++]=e;return n}}}]);