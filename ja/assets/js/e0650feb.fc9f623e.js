"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5118],{9848:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7689);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=l(n),f=o,d=s["".concat(i,".").concat(f)]||s[f]||m[f]||a;return n?r.createElement(d,p(p({ref:t},u),{},{components:n})):r.createElement(d,p({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,p=new Array(a);p[0]=s;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,p[1]=c;for(var l=2;l<a;l++)p[l]=n[l];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},2591:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>c,contentTitle:()=>i,metadata:()=>l,toc:()=>u,default:()=>s});var r=n(2951),o=n(9877),a=(n(7689),n(9848)),p=["components"],c={title:"\u30d5\u30e9\u30c3\u30c8\u306a node_modules \u304c\u552f\u4e00\u306e\u65b9\u6cd5\u3067\u306f\u3042\u308a\u307e\u305b\u3093",author:"Zoltan Kochan",authorURL:"http://twitter.com/zoltankochan",authorImageURL:"https://pbs.twimg.com/profile_images/1143606083262586880/EW2GCFKK_400x400.jpg"},i=void 0,l={permalink:"/ja/blog/2020/05/27/flat-node-modules-is-not-the-only-way",editUrl:"https://crowdin.com/project/pnpm/ja",source:"@site/i18n/ja/docusaurus-plugin-content-blog/2020-05-27-flat-node-modules-is-not-the-only-way.md",title:"\u30d5\u30e9\u30c3\u30c8\u306a node_modules \u304c\u552f\u4e00\u306e\u65b9\u6cd5\u3067\u306f\u3042\u308a\u307e\u305b\u3093",description:"pnpm \u306e\u65b0\u898f\u30e6\u30fc\u30b6\u30fc\u304b\u3089\u3001pnpm \u304c\u751f\u6210\u3059\u308b node_modules \u306e\u5947\u5999\u306a\u69cb\u9020\u306b\u3064\u3044\u3066\u3088\u304f\u805e\u304b\u308c\u307e\u3059\u3002 \u306a\u305c\u5e73\u5766\u306a\u69cb\u9020\u3092\u4f7f\u7528\u3057\u306a\u3044\u306e\u3067\u3057\u3087\u3046\u304b\u3002 \u4f9d\u5b58\u306e\u3055\u3089\u306b\u305d\u306e\u4f9d\u5b58\u306f\u3069\u3053\u306b\u3042\u308b\u306e\u3067\u3057\u3087\u3046\u304b\u3002",date:"2020-05-27T00:00:00.000Z",formattedDate:"2020\u5e745\u670827\u65e5",tags:[],readingTime:1.15,truncated:!0,prevItem:{title:"pnpm \u3067\u306e\u30ce\u30fc\u30c9\u30e2\u30b8\u30e5\u30fc\u30eb\u306b\u95a2\u3059\u308b\u30aa\u30d7\u30b7\u30e7\u30f3\u8a2d\u5b9a",permalink:"/ja/blog/2020/10/17/node-modules-configuration-options-with-pnpm"}},u=[],m={toc:u};function s(e){var t=e.components,n=(0,o.Z)(e,p);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"pnpm \u306e\u65b0\u898f\u30e6\u30fc\u30b6\u30fc\u304b\u3089\u3001pnpm \u304c\u751f\u6210\u3059\u308b ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules")," \u306e\u5947\u5999\u306a\u69cb\u9020\u306b\u3064\u3044\u3066\u3088\u304f\u805e\u304b\u308c\u307e\u3059\u3002 \u306a\u305c\u5e73\u5766\u306a\u69cb\u9020\u3092\u4f7f\u7528\u3057\u306a\u3044\u306e\u3067\u3057\u3087\u3046\u304b\u3002 \u4f9d\u5b58\u306e\u3055\u3089\u306b\u305d\u306e\u4f9d\u5b58\u306f\u3069\u3053\u306b\u3042\u308b\u306e\u3067\u3057\u3087\u3046\u304b\u3002"))}s.isMDXComponent=!0}}]);