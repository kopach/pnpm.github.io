"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2133],{9613:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>f});var n=t(9496);function l(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){l(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,l=function(e,r){if(null==e)return{};var t,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(l[t]=e[t]);return l}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var c=n.createContext({}),p=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},s=function(e){var r=p(e.components);return n.createElement(c.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,l=e.mdxType,i=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=p(t),f=l,v=d["".concat(c,".").concat(f)]||d[f]||u[f]||i;return t?n.createElement(v,a(a({ref:r},s),{},{components:t})):n.createElement(v,a({ref:r},s))}));function f(e,r){var t=arguments,l=r&&r.mdxType;if("string"==typeof e||l){var i=t.length,a=new Array(i);a[0]=d;var o={};for(var c in r)hasOwnProperty.call(r,c)&&(o[c]=r[c]);o.originalType=e,o.mdxType="string"==typeof e?e:l,a[1]=o;for(var p=2;p<i;p++)a[p]=t[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3113:(e,r,t)=>{t.r(r),t.d(r,{frontMatter:()=>o,contentTitle:()=>c,metadata:()=>p,toc:()=>s,default:()=>d});var n=t(98),l=t(6862),i=(t(9496),t(9613)),a=["components"],o={id:"why",title:"pnpm why"},c=void 0,p={unversionedId:"cli/why",id:"version-6.x/cli/why",isDocsHomePage:!1,title:"pnpm why",description:"Affiche tous les packages qui d\xe9pendent du package sp\xe9cifi\xe9.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-6.x/cli/why.md",sourceDirName:"cli",slug:"/cli/why",permalink:"/fr/cli/why",editUrl:"https://crowdin.com/project/pnpm/fr",tags:[],version:"6.x",frontMatter:{id:"why",title:"pnpm why"},sidebar:"version-6.x/docs",previous:{title:"pnpm outdated",permalink:"/fr/cli/outdated"},next:{title:"pnpm run",permalink:"/fr/cli/run"}},s=[{value:"Options",id:"options",children:[{value:"--recursive, -r",id:"--recursive--r",children:[],level:3},{value:"--json",id:"--json",children:[],level:3},{value:"--long",id:"--long",children:[],level:3},{value:"--parseable",id:"--parseable",children:[],level:3},{value:"--global",id:"--global",children:[],level:3},{value:"--prod, -P",id:"--prod--p",children:[],level:3},{value:"--dev, -D",id:"--dev--d",children:[],level:3},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",children:[],level:3}],level:2}],u={toc:s};function d(e){var r=e.components,t=(0,l.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Affiche tous les packages qui d\xe9pendent du package sp\xe9cifi\xe9."),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,i.kt)("p",null,"Affiche la structure de d\xe9pendance du package sp\xe9cifi\xe9 sur chaque package dans les sous-dossiers ou sur chaque package de workspace lorsqu'il est ex\xe9cut\xe9 dans un workspace."),(0,i.kt)("h3",{id:"--json"},"--json"),(0,i.kt)("p",null,"Added in: 3.7.0"),(0,i.kt)("p",null,"Affiche les informations au format JSON."),(0,i.kt)("h3",{id:"--long"},"--long"),(0,i.kt)("p",null,"Affiche la sortie d\xe9taill\xe9e."),(0,i.kt)("h3",{id:"--parseable"},"--parseable"),(0,i.kt)("p",null,"Affiche une sortie analysable au lieu d'une vue arborescente."),(0,i.kt)("h3",{id:"--global"},"--global"),(0,i.kt)("p",null,"List packages in the global install directory instead of in the current project."),(0,i.kt)("h3",{id:"--prod--p"},"--prod, -P"),(0,i.kt)("p",null,"Only display the dependency tree for packages in ",(0,i.kt)("inlineCode",{parentName:"p"},"dependencies"),"."),(0,i.kt)("h3",{id:"--dev--d"},"--dev, -D"),(0,i.kt)("p",null,"Only display the dependency tree for packages in ",(0,i.kt)("inlineCode",{parentName:"p"},"devDependencies"),"."),(0,i.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/fr/filtering"},"Read more about filtering.")))}d.isMDXComponent=!0}}]);