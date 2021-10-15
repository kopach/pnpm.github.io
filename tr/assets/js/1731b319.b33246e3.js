"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8303],{9613:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>k});var r=t(9496);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),u=c(t),k=i,s=u["".concat(p,".").concat(k)]||u[k]||m[k]||l;return t?r.createElement(s,o(o({ref:n},d),{},{components:t})):r.createElement(s,o({ref:n},d))}));function k(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,o=new Array(l);o[0]=u;var a={};for(var p in n)hasOwnProperty.call(n,p)&&(a[p]=n[p]);a.originalType=e,a.mdxType="string"==typeof e?e:i,o[1]=a;for(var c=2;c<l;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},6431:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>a,contentTitle:()=>p,metadata:()=>c,toc:()=>d,default:()=>u});var r=t(98),i=t(6862),l=(t(9496),t(9613)),o=["components"],a={id:"link",title:"pnpm link"},p=void 0,c={unversionedId:"cli/link",id:"cli/link",isDocsHomePage:!1,title:"pnpm link",description:"Ayr\u0131ca: ln",source:"@site/i18n/tr/docusaurus-plugin-content-docs/current/cli/link.md",sourceDirName:"cli",slug:"/cli/link",permalink:"/tr/next/cli/link",editUrl:"https://crowdin.com/project/pnpm/tr",tags:[],version:"current",frontMatter:{id:"link",title:"pnpm link"},sidebar:"docs",previous:{title:"pnpm remove",permalink:"/tr/next/cli/remove"},next:{title:"pnpm unlink",permalink:"/tr/next/cli/unlink"}},d=[{value:"Parametreler",id:"parametreler",children:[{value:"--dir &lt;konum/dizin&gt;, -C",id:"--dir-konumdizin--c",children:[],level:3},{value:"<code>pnpm link &lt;dir&gt;</code>",id:"pnpm-link-dir",children:[],level:3},{value:"<code>pnpm link --global</code>",id:"pnpm-link---global",children:[],level:3},{value:"<code>pnpm link --global &lt;pkg&gt;</code>",id:"pnpm-link---global-pkg",children:[],level:3}],level:2}],m={toc:d};function u(e){var n=e.components,t=(0,i.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Ayr\u0131ca: ",(0,l.kt)("inlineCode",{parentName:"p"},"ln")),(0,l.kt)("p",null,"\u0130\xe7erisinde bulundu\u011fun paketi/projeyi, global bi\xe7imde veya belirtilen konumdan eri\u015filebilmesini sa\u011flar."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"pnpm link <dir>\npnpm link --global\npnpm link --global <pkg>\n")),(0,l.kt)("h2",{id:"parametreler"},"Parametreler"),(0,l.kt)("h3",{id:"--dir-konumdizin--c"},"--dir ","<","konum/dizin",">",", -C"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Varsay\u0131lan"),": \u0130\xe7erisinde olunan ge\xe7erli dizin"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Tip"),": String (metin, konum)")),(0,l.kt)("p",null,"Link konumunu, ",(0,l.kt)("inlineCode",{parentName:"p"},"<konum/dizin>")," olarak de\u011fi\u015ftirir."),(0,l.kt)("h3",{id:"pnpm-link-dir"},(0,l.kt)("inlineCode",{parentName:"h3"},"pnpm link <dir>")),(0,l.kt)("p",null,"Links package from ",(0,l.kt)("inlineCode",{parentName:"p"},"<dir>")," folder to node_modules of package from where you executing this command or specified via ",(0,l.kt)("inlineCode",{parentName:"p"},"--dir")," option."),(0,l.kt)("h3",{id:"pnpm-link---global"},(0,l.kt)("inlineCode",{parentName:"h3"},"pnpm link --global")),(0,l.kt)("p",null,"Links package from location where this command was executed or specified via ",(0,l.kt)("inlineCode",{parentName:"p"},"--dir")," option to global ",(0,l.kt)("inlineCode",{parentName:"p"},"node_modules"),", so it can be referred from another package with ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm link --global <pkg>"),"."),(0,l.kt)("h3",{id:"pnpm-link---global-pkg"},(0,l.kt)("inlineCode",{parentName:"h3"},"pnpm link --global <pkg>")),(0,l.kt)("p",null,"Links the specified package (",(0,l.kt)("inlineCode",{parentName:"p"},"<pkg>"),") from global ",(0,l.kt)("inlineCode",{parentName:"p"},"node_modules")," to the ",(0,l.kt)("inlineCode",{parentName:"p"},"node_nodules")," of package from where this command was executed or specified via ",(0,l.kt)("inlineCode",{parentName:"p"},"--dir")," option."))}u.isMDXComponent=!0}}]);