"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5198],{9613:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(9496);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(r),d=l,k=m["".concat(s,".").concat(d)]||m[d]||c[d]||a;return r?n.createElement(k,o(o({ref:t},u),{},{components:r})):n.createElement(k,o({ref:t},u))}));function d(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,o=new Array(a);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var p=2;p<a;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4586:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>i,contentTitle:()=>s,metadata:()=>p,toc:()=>u,default:()=>m});var n=r(98),l=r(6862),a=(r(9496),r(9613)),o=["components"],i={id:"server",title:"pnpm server"},s=void 0,p={unversionedId:"cli/server",id:"version-6.x/cli/server",isDocsHomePage:!1,title:"pnpm server",description:"S\xfcr\xfcm 1.30.0 ve sonras\u0131nda ge\xe7erli",source:"@site/i18n/tr/docusaurus-plugin-content-docs/version-6.x/cli/server.md",sourceDirName:"cli",slug:"/cli/server",permalink:"/tr/cli/server",editUrl:"https://crowdin.com/project/pnpm/tr",tags:[],version:"6.x",frontMatter:{id:"server",title:"pnpm server"},sidebar:"version-6.x/docs",previous:{title:"pnpm recursive",permalink:"/tr/cli/recursive"},next:{title:"pnpm store",permalink:"/tr/cli/store"}},u=[{value:"Komutlar",id:"komutlar",children:[{value:"pnpm server start",id:"pnpm-server-start",children:[],level:3},{value:"pnpm server stop",id:"pnpm-server-stop",children:[],level:3},{value:"pnpm server status",id:"pnpm-server-status",children:[],level:3}],level:2},{value:"Parametreler",id:"parametreler",children:[{value:"--background",id:"--background",children:[],level:3},{value:"--network-concurrency",id:"--network-concurrency",children:[],level:3},{value:"--protocol",id:"--protocol",children:[],level:3},{value:"--port",id:"--port",children:[],level:3},{value:"--store-dir",id:"--store-dir",children:[],level:3},{value:"--no-lock",id:"--no-lock",children:[],level:3},{value:"--ignore-stop-requests",id:"--ignore-stop-requests",children:[],level:3},{value:"--ignore-upload-requests",id:"--ignore-upload-requests",children:[],level:3}],level:2}],c={toc:u};function m(e){var t=e.components,r=(0,l.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"S\xfcr\xfcm 1.30.0 ve sonras\u0131nda ge\xe7erli"),(0,a.kt)("p",null,"Manage a store server."),(0,a.kt)("h2",{id:"komutlar"},"Komutlar"),(0,a.kt)("h3",{id:"pnpm-server-start"},"pnpm server start"),(0,a.kt)("p",null,"Starts a server that performs all interactions with the store. Other commands will delegate any store-related tasks to this server."),(0,a.kt)("h3",{id:"pnpm-server-stop"},"pnpm server stop"),(0,a.kt)("p",null,"Stops the store server."),(0,a.kt)("h3",{id:"pnpm-server-status"},"pnpm server status"),(0,a.kt)("p",null,"Prints information about the running server."),(0,a.kt)("h2",{id:"parametreler"},"Parametreler"),(0,a.kt)("h3",{id:"--background"},"--background"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Varsay\u0131lan: ",(0,a.kt)("strong",{parentName:"li"},"false")),(0,a.kt)("li",{parentName:"ul"},"Tip: ",(0,a.kt)("strong",{parentName:"li"},"Boolean"))),(0,a.kt)("p",null,"Runs the server in the background, similar to daemonizing on UNIX systems."),(0,a.kt)("h3",{id:"--network-concurrency"},"--network-concurrency"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Varsay\u0131lan: ",(0,a.kt)("strong",{parentName:"li"},"null")),(0,a.kt)("li",{parentName:"ul"},"Tip: ",(0,a.kt)("strong",{parentName:"li"},"Say\u0131"))),(0,a.kt)("p",null,"The maximum number of network requests to process simultaneously."),(0,a.kt)("h3",{id:"--protocol"},"--protocol"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Varsay\u0131lan: ",(0,a.kt)("strong",{parentName:"li"},"auto")),(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("strong",{parentName:"li"},"auto"),", ",(0,a.kt)("strong",{parentName:"li"},"tcp"),", ",(0,a.kt)("strong",{parentName:"li"},"ipc"))),(0,a.kt)("p",null,"The communication protocol used by the server. When this is set to ",(0,a.kt)("inlineCode",{parentName:"p"},"auto"),", IPC is used on all systems except for Windows, which uses TCP."),(0,a.kt)("h3",{id:"--port"},"--port"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Default: ",(0,a.kt)("strong",{parentName:"li"},"5813")),(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("strong",{parentName:"li"},"port number"))),(0,a.kt)("p",null,"The port number to use when TCP is used for communication. If a port is specified and the protocol is set to ",(0,a.kt)("inlineCode",{parentName:"p"},"auto"),", regardless of system type, the protocol is automatically set to use TCP."),(0,a.kt)("h3",{id:"--store-dir"},"--store-dir"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Default: ",(0,a.kt)("strong",{parentName:"li"},"<","home",">","/.pnpm-store")),(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("strong",{parentName:"li"},"Path"))),(0,a.kt)("p",null,"S\xfcr\xfcm 1 ve sonras\u0131nda ge\xe7erli (eski ad\u0131 ",(0,a.kt)("inlineCode",{parentName:"p"},"store"),")"),(0,a.kt)("p",null,"The directory to use for the content addressable store."),(0,a.kt)("h3",{id:"--no-lock"},"--","[no-]","lock"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Varsay\u0131lan: ",(0,a.kt)("strong",{parentName:"li"},"false")),(0,a.kt)("li",{parentName:"ul"},"Tip: ",(0,a.kt)("strong",{parentName:"li"},"Boolean"))),(0,a.kt)("p",null,"Set whether to make the package store immutable to external processes while the server is running or not."),(0,a.kt)("h3",{id:"--ignore-stop-requests"},"--ignore-stop-requests"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Varsay\u0131lan: ",(0,a.kt)("strong",{parentName:"li"},"false")),(0,a.kt)("li",{parentName:"ul"},"Tip: ",(0,a.kt)("strong",{parentName:"li"},"Boolean"))),(0,a.kt)("p",null,"Prevents you from stopping the server using ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm server stop"),"."),(0,a.kt)("h3",{id:"--ignore-upload-requests"},"--ignore-upload-requests"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Varsay\u0131lan: ",(0,a.kt)("strong",{parentName:"li"},"false")),(0,a.kt)("li",{parentName:"ul"},"Tip: ",(0,a.kt)("strong",{parentName:"li"},"Boolean"))),(0,a.kt)("p",null,"Prevents creating a new side effect cache during install."))}m.isMDXComponent=!0}}]);