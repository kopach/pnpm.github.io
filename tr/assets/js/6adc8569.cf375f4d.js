"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6899],{9613:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var o=r(9496);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),p=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return o.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(r),d=n,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||a;return r?o.createElement(f,i(i({ref:t},s),{},{components:r})):o.createElement(f,i({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8963:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>l,contentTitle:()=>c,metadata:()=>p,assets:()=>s,toc:()=>u,default:()=>d});var o=r(98),n=r(6862),a=(r(9496),r(9613)),i=["components"],l={title:"Node-Modules configuration options with pnpm",author:"Zoltan Kochan",authorURL:"http://twitter.com/zoltankochan",authorImageURL:"https://pbs.twimg.com/profile_images/1143606083262586880/EW2GCFKK_400x400.jpg"},c=void 0,p={permalink:"/tr/blog/2020/10/17/node-modules-configuration-options-with-pnpm",editUrl:"https://crowdin.com/project/pnpm/tr",source:"@site/i18n/tr/docusaurus-plugin-content-blog/2020-10-17-node-modules-configuration-options-with-pnpm.md",title:"Node-Modules configuration options with pnpm",description:"There are many ways to create a nodemodules directory. Your goal must be to create the most strict one but if that is not possible, there are options to make a loose nodemodules as well.",date:"2020-10-17T00:00:00.000Z",formattedDate:"17 Ekim 2020",tags:[],readingTime:1.86,truncated:!0,authors:[{name:"Zoltan Kochan",url:"http://twitter.com/zoltankochan",imageURL:"https://pbs.twimg.com/profile_images/1143606083262586880/EW2GCFKK_400x400.jpg"}],nextItem:{title:"D\xfcz, klasik node_modules yap\u0131s\u0131 art\u0131k tek yol de\u011fil",permalink:"/tr/blog/2020/05/27/flat-node-modules-is-not-the-only-way"}},s={authorsImageUrls:[void 0]},u=[],m={toc:u};function d(e){var t=e.components,r=(0,n.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"There are many ways to create a node_modules directory. Your goal must be to create the most strict one but if that is not possible, there are options to make a loose node_modules as well."))}d.isMDXComponent=!0}}]);