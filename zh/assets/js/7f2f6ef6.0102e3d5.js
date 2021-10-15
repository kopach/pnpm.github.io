"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7163],{9613:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var r=t(9496);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},p=Object.keys(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var a=r.createContext({}),l=function(e){var n=r.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(a.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,p=e.originalType,a=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=l(t),f=o,d=s["".concat(a,".").concat(f)]||s[f]||m[f]||p;return t?r.createElement(d,i(i({ref:n},u),{},{components:t})):r.createElement(d,i({ref:n},u))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var p=t.length,i=new Array(p);i[0]=s;var c={};for(var a in n)hasOwnProperty.call(n,a)&&(c[a]=n[a]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<p;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},9433:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>c,contentTitle:()=>a,metadata:()=>l,toc:()=>u,default:()=>s});var r=t(98),o=t(6862),p=(t(9496),t(9613)),i=["components"],c={id:"configuring",title:"\u914d\u7f6e"},a=void 0,l={unversionedId:"configuring",id:"configuring",isDocsHomePage:!1,title:"\u914d\u7f6e",description:"pnpm \u4f7f\u7528 npm \u7684\u914d\u7f6e \u683c\u5f0f\u3002 \u56e0\u6b64\uff0c\u60a8\u8bbe\u7f6e\u914d\u7f6e\u7684\u65b9\u5f0f\u5e94\u8be5\u4e0e npm \u76f8\u540c\u3002 \u4f8b\u5982\uff0c",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/configuring.md",sourceDirName:".",slug:"/configuring",permalink:"/zh/next/configuring",editUrl:"https://crowdin.com/project/pnpm/zh-CN",tags:[],version:"current",frontMatter:{id:"configuring",title:"\u914d\u7f6e"},sidebar:"docs",previous:{title:"pnpx CLI",permalink:"/zh/next/pnpx-cli"},next:{title:"\u8fc7\u6ee4",permalink:"/zh/next/filtering"}},u=[],m={toc:u};function s(e){var n=e.components,t=(0,o.Z)(e,i);return(0,p.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"pnpm \u4f7f\u7528 ",(0,p.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/misc/config"},"npm \u7684\u914d\u7f6e")," \u683c\u5f0f\u3002 \u56e0\u6b64\uff0c\u60a8\u8bbe\u7f6e\u914d\u7f6e\u7684\u65b9\u5f0f\u5e94\u8be5\u4e0e npm \u76f8\u540c\u3002 \u4f8b\u5982\uff0c"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"pnpm config set store-dir /path/to/.pnpm-store\n")),(0,p.kt)("p",null,"\u5982\u679c\u6ca1\u6709\u914d\u7f6e store \uff0c\u90a3\u4e48pnpm \u5c06\u81ea\u52a8\u5728\u540c\u4e00\u78c1\u76d8\u4e0a\u521b\u5efa store\u3002 \u5982\u679c\u60a8\u9700\u8981 pnpm \u8de8\u8d8a\u591a\u4e2a\u786c\u76d8\u6216\u6587\u4ef6\u7cfb\u7edf\uff0c\u8bf7\u9605\u8bfb ",(0,p.kt)("a",{parentName:"p",href:"/zh/next/faq#does-pnpm-work-across-multiple-hard-drives-or-filesystems"},"\u5e38\u89c1\u95ee\u9898")),(0,p.kt)("p",null,"\u6b64\u5916\uff0cpnpm \u4f7f\u7528\u4e0e npm \u76f8\u540c\u7684\u914d\u7f6e\u8fdb\u884c\u5b89\u88c5\u3002 \u5982\u679c\u60a8\u6709\u4e00\u4e2a\u79c1\u6709\u6e90\u5e76\u4e14 npm \u88ab\u914d\u7f6e\u4f7f\u7528\u5b83\uff0c pnpm \u5e94\u8be5\u4e0d\u9700\u8981\u989d\u5916\u7684\u914d\u7f6e\u4e5f\u80fd\u591f\u6388\u6743\u8bf7\u6c42\u3002"),(0,p.kt)("p",null,"\u9664\u4e86\u8fd9\u4e9b\u9009\u9879\u5916\uff0c pnpm \u4e5f\u5141\u8bb8\u60a8\u4f7f\u7528\u6240\u6709\u6807\u8bb0\u4e3a\u4f5c\u9009\u9879\u7684\u53c2\u6570(\u4f8b\u5982 ",(0,p.kt)("inlineCode",{parentName:"p"},"--filter")," \u6216 ",(0,p.kt)("inlineCode",{parentName:"p"},"--workspace concurrency"),") \uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"workspace-concurrency = 1\nfilter = @my-scope/*\n")),(0,p.kt)("p",null,"\u66f4\u591a\u4fe1\u606f\u8bf7\u53c2\u9605 ",(0,p.kt)("a",{parentName:"p",href:"/zh/next/cli/config"},(0,p.kt)("inlineCode",{parentName:"a"},"config")," \u547d\u4ee4"),"\u3002"))}s.isMDXComponent=!0}}]);