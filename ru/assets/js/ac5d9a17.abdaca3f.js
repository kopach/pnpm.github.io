"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9817],{9613:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(9496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=c(r),m=o,f=d["".concat(i,".").concat(m)]||d[m]||s[m]||l;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,a=new Array(l);a[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var c=2;c<l;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1546:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>p,contentTitle:()=>i,metadata:()=>c,toc:()=>u,default:()=>d});var n=r(98),o=r(6862),l=(r(9496),r(9613)),a=["components"],p={id:"store",title:"pnpm store"},i=void 0,c={unversionedId:"cli/store",id:"cli/store",isDocsHomePage:!1,title:"pnpm store",description:"\u0423\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0435\u043c \u043f\u0430\u043a\u0435\u0442\u043e\u0432.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/cli/store.md",sourceDirName:"cli",slug:"/cli/store",permalink:"/ru/next/cli/store",editUrl:"https://crowdin.com/project/pnpm/ru",tags:[],version:"current",frontMatter:{id:"store",title:"pnpm store"},sidebar:"docs",previous:{title:"pnpm server",permalink:"/ru/next/cli/server"},next:{title:"pnpm root",permalink:"/ru/next/cli/root"}},u=[{value:"\u041a\u043e\u043c\u0430\u043d\u0434\u044b",id:"\u043a\u043e\u043c\u0430\u043d\u0434\u044b",children:[{value:"status",id:"status",children:[],level:3},{value:"add",id:"add",children:[],level:3},{value:"prune",id:"prune",children:[],level:3},{value:"path",id:"path",children:[],level:3}],level:2}],s={toc:u};function d(e){var t=e.components,r=(0,o.Z)(e,a);return(0,l.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u0423\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0435\u043c \u043f\u0430\u043a\u0435\u0442\u043e\u0432."),(0,l.kt)("h2",{id:"\u043a\u043e\u043c\u0430\u043d\u0434\u044b"},"\u041a\u043e\u043c\u0430\u043d\u0434\u044b"),(0,l.kt)("h3",{id:"status"},"status"),(0,l.kt)("p",null,"\u041f\u0440\u043e\u0432\u0435\u0440\u044f\u0435\u0442 \u043d\u0430\u043b\u0438\u0447\u0438\u0435 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u043d\u044b\u0445 \u043f\u0430\u043a\u0435\u0442\u043e\u0432 \u0432 \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0435."),(0,l.kt)("p",null,"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u043a\u043e\u0434 \u0432\u044b\u0445\u043e\u0434\u0430 0, \u0435\u0441\u043b\u0438 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u0435 \u043f\u0430\u043a\u0435\u0442\u0430 \u043e\u0441\u0442\u0430\u043b\u043e\u0441\u044c \u0442\u0430\u043a\u0438\u043c \u0436\u0435, \u043a\u0430\u043a\u0438\u043c \u043e\u043d\u043e \u0431\u044b\u043b\u043e \u0432\u043e \u0432\u0440\u0435\u043c\u044f \u0440\u0430\u0441\u043f\u0430\u043a\u043e\u0432\u043a\u0438."),(0,l.kt)("h3",{id:"add"},"add"),(0,l.kt)("p",null,"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043e \u0432: v2.12.0"),(0,l.kt)("p",null,"\u0424\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0439 \u044d\u043a\u0432\u0438\u0432\u0430\u043b\u0435\u043d\u0442 \u043a ",(0,l.kt)("a",{parentName:"p",href:"/ru/next/cli/add"},(0,l.kt)("inlineCode",{parentName:"a"},"pnpm add")),", \u0437\u0430 \u0438\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435\u043c \u0442\u043e\u0433\u043e, \u0447\u0442\u043e \u044d\u0442\u0430 \u043a\u043e\u043c\u0430\u043d\u0434\u0430 \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u0442 \u043d\u043e\u0432\u044b\u0435 \u043f\u0430\u043a\u0435\u0442\u044b \u043d\u0430\u043f\u0440\u044f\u043c\u0443\u044e \u0432 \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0435, \u043d\u0435 \u0438\u0437\u043c\u0435\u043d\u044f\u044f \u043d\u0438\u043a\u0430\u043a\u0438\u0445 \u043f\u0440\u043e\u0435\u043a\u0442\u043e\u0432 \u0438\u043b\u0438 \u0444\u0430\u0439\u043b\u043e\u0432 \u0432\u043d\u0435 \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0430."),(0,l.kt)("h3",{id:"prune"},"prune"),(0,l.kt)("p",null,"\u0423\u0434\u0430\u043b\u044f\u0435\u0442 \u0431\u0435\u0441\u0445\u043e\u0437\u043d\u044b\u0435 \u043f\u0430\u043a\u0435\u0442\u044b \u0438\u0437 \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0430."),(0,l.kt)("p",null,"\u0421\u043e\u043a\u0440\u0430\u0449\u0435\u043d\u0438\u0435 \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0430 \u0441\u044d\u043a\u043e\u043d\u043e\u043c\u0438\u0442 \u043c\u0435\u0441\u0442\u043e \u043d\u0430 \u0434\u0438\u0441\u043a\u0435, \u043e\u0434\u043d\u0430\u043a\u043e \u043c\u043e\u0436\u0435\u0442 \u0437\u0430\u043c\u0435\u0434\u043b\u0438\u0442\u044c \u043f\u043e\u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u043f\u0430\u043a\u0435\u0442\u043e\u0432, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442 \u0437\u0430\u0442\u0440\u043e\u043d\u0443\u0442\u044b\u0435 \u043f\u0440\u0438 \u0441\u043e\u043a\u0440\u0430\u0449\u0435\u043d\u0438\u0438 \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0430 \u043f\u0430\u043a\u0435\u0442\u044b \u043a\u0430\u043a \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438. \u0412 \u043b\u044e\u0431\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435, \u044d\u0442\u043e \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u0430\u044f \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u044f, \u043e\u0434\u043d\u0430\u043a\u043e \u043e\u043d\u0430 \u043d\u0435 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u0442\u0441\u044f, \u0435\u0441\u043b\u0438 \u0443 \u0432\u0430\u0441 \u043e\u0441\u0442\u0430\u043b\u0438\u0441\u044c \u0431\u0435\u0441\u0445\u043e\u0437\u043d\u044b\u043c\u0438 \u043f\u0430\u043a\u0435\u0442\u044b \u043a\u0430\u043a \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u0434\u0440\u0443\u0433\u043e\u0433\u043e \u043f\u0430\u043a\u0435\u0442\u0430, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0432\u044b \u0441\u043e\u0431\u0438\u0440\u0430\u0435\u0442\u0435\u0441\u044c \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u0441\u043d\u043e\u0432\u0430."),(0,l.kt)("p",null,"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043f\u0440\u043e\u0447\u0438\u0442\u0430\u0439\u0442\u0435 ",(0,l.kt)("a",{parentName:"p",href:"/ru/next/faq#what-does-pnpm-store-prune-do-is-it-harmful"}," FAQ")," \u0434\u043b\u044f \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0439 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 \u043e \u043f\u0430\u043a\u0435\u0442\u0430\u0445 \u0431\u0435\u0437 \u0441\u0441\u044b\u043b\u043e\u043a (\u0431\u0435\u0441\u0445\u043e\u0437\u043d\u044b\u0445) \u0438 \u043e \u043b\u0443\u0447\u0448\u0438\u0445 \u043f\u0440\u0430\u043a\u0442\u0438\u043a\u0430\u0445 \u0438 \u043f\u043e\u0434\u0445\u043e\u0434\u0430\u0445."),(0,l.kt)("p",null,"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435, \u0447\u0442\u043e \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 \u044d\u0442\u043e\u0439 \u043a\u043e\u043c\u0430\u043d\u0434\u044b \u0437\u0430\u043f\u0440\u0435\u0449\u0435\u043d\u043e, \u0435\u0441\u043b\u0438 \u0437\u0430\u043f\u0443\u0449\u0435\u043d ",(0,l.kt)("a",{parentName:"p",href:"/ru/next/cli/server"},"\u0441\u0435\u0440\u0432\u0435\u0440 \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0430"),"."),(0,l.kt)("h3",{id:"path"},"path"),(0,l.kt)("p",null,"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043e \u0432: v6.10.0"),(0,l.kt)("p",null,"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u043f\u0443\u0442\u044c \u043a \u0430\u043a\u0442\u0438\u0432\u043d\u043e\u043c\u0443 \u043a\u0430\u0442\u0430\u043b\u043e\u0433\u0443 \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0430."))}d.isMDXComponent=!0}}]);