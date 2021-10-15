"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7967],{9613:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(9496);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(r),f=i,m=d["".concat(p,".").concat(f)]||d[f]||s[f]||a;return r?n.createElement(m,o(o({ref:t},u),{},{components:r})):n.createElement(m,o({ref:t},u))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var l=2;l<a;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9583:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>c,contentTitle:()=>p,metadata:()=>l,toc:()=>u,default:()=>d});var n=r(98),i=r(6862),a=(r(9496),r(9613)),o=["components"],c={id:"pack",title:"pnpm pack"},p=void 0,l={unversionedId:"cli/pack",id:"cli/pack",isDocsHomePage:!1,title:"pnpm pack",description:"Create a tarball from a package.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/cli/pack.md",sourceDirName:"cli",slug:"/cli/pack",permalink:"/pt/next/cli/pack",editUrl:"https://crowdin.com/project/pnpm/pt",tags:[],version:"current",frontMatter:{id:"pack",title:"pnpm pack"},sidebar:"docs",previous:{title:"pnpm publish",permalink:"/pt/next/cli/publish"},next:{title:"pnpm recursive",permalink:"/pt/next/cli/recursive"}},u=[{value:"Options",id:"options",children:[{value:"--pack-destination &lt;dir&gt;",id:"--pack-destination-dir",children:[],level:3}],level:2}],s={toc:u};function d(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Create a tarball from a package."),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("h3",{id:"--pack-destination-dir"},"--pack-destination ","<","dir",">"),(0,a.kt)("p",null,"Directory in which ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm pack")," will save tarballs. The default is the current working directory."))}d.isMDXComponent=!0}}]);