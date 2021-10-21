(window.webpackJsonp=window.webpackJsonp||[]).push([[229],{380:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return u})),t.d(n,"default",(function(){return p}));var r=t(1),o=t(9),a=(t(0),t(419)),i={last_modified_on:"2021-10-19",title:"NodeJS",description:"Learn how to build your NodeJS application with Buildpacks on Qovery"},c={id:"using-qovery/languages/nodejs",title:"NodeJS",description:"Learn how to build your NodeJS application with Buildpacks on Qovery",source:"@site/docs/using-qovery/languages/nodejs.md",permalink:"/docs/using-qovery/languages/nodejs",editUrl:"https://github.com/Qovery/documentation/edit/master/website/docs/using-qovery/languages/nodejs.md",sidebar:"docs",previous:{title:"Languages",permalink:"/docs/using-qovery/languages"},next:{title:"Java",permalink:"/docs/using-qovery/languages/java"}},u=[],l={rightToc:u};function p(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/heroku/nodejs-npm-buildpack"}),"NodeJS buildpack")," detects\nif your build is Node by looking for a ",Object(a.b)("inlineCode",{parentName:"p"},"package.json")," file. If found, the build\nwill execute the following NPM (or Yarn) commands."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"npm install\nnpm build\n")),Object(a.b)("p",null,"If no Procfile is found, a web process will be started with ",Object(a.b)("inlineCode",{parentName:"p"},"npm start"),"\n."),Object(a.b)("p",null,"You can customize the node version using the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.npmjs.com/cli/v7/configuring-npm/package-json#engines"}),"engines field")," of your ",Object(a.b)("inlineCode",{parentName:"p"},"package.json"),". For example"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "engines": {\n    "node": ">=0.10.3 <15"\n  }\n}\n')))}p.isMDXComponent=!0},419:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return f}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),p=function(e){var n=o.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c({},n,{},e)),t},s=function(e){var n=p(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),s=p(t),b=r,f=s["".concat(i,".").concat(b)]||s[b]||d[b]||a;return t?o.a.createElement(f,c({ref:n},l,{components:t})):o.a.createElement(f,c({ref:n},l))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=b;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=t[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);