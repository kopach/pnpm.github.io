"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5360],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,p=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(i,".").concat(m)]||d[m]||s[m]||p;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=n.length,l=new Array(p);l[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<p;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3321:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>o,contentTitle:()=>i,metadata:()=>c,toc:()=>u,default:()=>d});var r=n(98),a=n(6862),p=(n(9496),n(9613)),l=["components"],o={id:"dlx",title:"pnpm dlx"},i=void 0,c={unversionedId:"cli/dlx",id:"version-6.x/cli/dlx",isDocsHomePage:!1,title:"pnpm dlx",description:"Ajout\xe9 dans version: v6.13.0",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-6.x/cli/dlx.md",sourceDirName:"cli",slug:"/cli/dlx",permalink:"/fr/cli/dlx",editUrl:"https://crowdin.com/project/pnpm/fr",tags:[],version:"6.x",frontMatter:{id:"dlx",title:"pnpm dlx"},sidebar:"version-6.x/docs",previous:{title:"pnpm exec",permalink:"/fr/cli/exec"},next:{title:"pnpm create",permalink:"/fr/cli/create"}},u=[{value:"Options",id:"options",children:[{value:"--package &lt;nom&gt;",id:"--package-nom",children:[],level:3},{value:"--silent, -s",id:"--silent--s",children:[],level:3}],level:2}],s={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,p.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"Ajout\xe9 dans version: v6.13.0"),(0,p.kt)("p",null,"R\xe9cup\xe8re un package du registre sans l'installer en tant que d\xe9pendance, le charge, et ex\xe9cute le binaire de commande par d\xe9faut qu'il expose."),(0,p.kt)("p",null,"For example, to use ",(0,p.kt)("inlineCode",{parentName:"p"},"create-react-app")," anywhere to bootstrap a react app without needing to install it under another project, you can run:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"pnpm dlx create-react-app ./my-app\n")),(0,p.kt)("p",null,"Cela r\xe9cup\xe9rera ",(0,p.kt)("inlineCode",{parentName:"p"},"create-react-app")," du registre et l'ex\xe9cutera avec les arguments donn\xe9s."),(0,p.kt)("h2",{id:"options"},"Options"),(0,p.kt)("h3",{id:"--package-nom"},"--package ","<","nom",">"),(0,p.kt)("p",null,"Le package \xe0 installer avant d'ex\xe9cuter la commande."),(0,p.kt)("p",null,"Example:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"pnpm --package=@pnpm/meta-updater dlx meta-updater --help\npnpm --package=@pnpm/meta-updater@0 dlx meta-updater --help\n")),(0,p.kt)("p",null,"Depuis la version 6.14.5, plusieurs packages peuvent \xeatre fournis pour l'installation:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"pnpm --package=yo --package=generator-webapp dlx yo webapp --skip-install\n")),(0,p.kt)("h3",{id:"--silent--s"},"--silent, -s"),(0,p.kt)("p",null,"Added in: v6.17.0"),(0,p.kt)("p",null,"Only the output of the executed command is printed."))}d.isMDXComponent=!0}}]);