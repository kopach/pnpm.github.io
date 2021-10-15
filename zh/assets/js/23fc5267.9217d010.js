"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6590],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(9496);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var a=r.createContext({}),o=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=o(e.components);return r.createElement(a.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,p=e.originalType,a=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=o(n),d=l,f=m["".concat(a,".").concat(d)]||m[d]||s[d]||p;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var p=n.length,i=new Array(p);i[0]=m;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c.mdxType="string"==typeof e?e:l,i[1]=c;for(var o=2;o<p;o++)i[o]=n[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8419:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>c,contentTitle:()=>a,metadata:()=>o,toc:()=>u,default:()=>m});var r=n(98),l=n(6862),p=(n(9496),n(9613)),i=["components"],c={id:"exec",title:"pnpm exec"},a=void 0,o={unversionedId:"cli/exec",id:"cli/exec",isDocsHomePage:!1,title:"pnpm exec",description:"\u5728\u9879\u76ee\u8303\u56f4\u5185\u6267\u884c shell \u547d\u4ee4\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/cli/exec.md",sourceDirName:"cli",slug:"/cli/exec",permalink:"/zh/next/cli/exec",editUrl:"https://crowdin.com/project/pnpm/zh-CN",tags:[],version:"current",frontMatter:{id:"exec",title:"pnpm exec"},sidebar:"docs",previous:{title:"pnpm test",permalink:"/zh/next/cli/test"},next:{title:"pnpm dlx",permalink:"/zh/next/cli/dlx"}},u=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[],level:2},{value:"\u9009\u9879",id:"\u9009\u9879",children:[{value:"--recursive, -r",id:"--recursive--r",children:[],level:3},{value:"--parallel",id:"--parallel",children:[],level:3},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",children:[],level:3}],level:2}],s={toc:u};function m(e){var t=e.components,n=(0,l.Z)(e,i);return(0,p.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"\u5728\u9879\u76ee\u8303\u56f4\u5185\u6267\u884c shell \u547d\u4ee4\u3002"),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"node_modules/.bin")," \u6dfb\u52a0\u5230 ",(0,p.kt)("inlineCode",{parentName:"p"},"PATH"),"\uff0c\u56e0\u6b64 ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm exec")," \u5141\u8bb8\u6267\u884c\u4f9d\u8d56\u9879\u7684\u547d\u4ee4\u3002"),(0,p.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,p.kt)("p",null,"\u5982\u679c\u60a8\u5c06 Jest \u4f5c\u4e3a\u9879\u76ee\u7684\u4f9d\u8d56\u9879\uff0c\u5219\u65e0\u9700\u5168\u5c40\u5b89\u88c5 Jest\uff0c\u53ea\u9700\u4f7f\u7528 ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm exec"),"\u8fd0\u884c\u5b83\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"pnpm exec jest\n")),(0,p.kt)("p",null,"\u5f53\u547d\u4ee4\u4e0e\u5185\u7f6e pnpm \u547d\u4ee4\u4e0d\u51b2\u7a81\u65f6\uff0c ",(0,p.kt)("inlineCode",{parentName:"p"},"\u6267\u884c")," \u90e8\u5206\u5b9e\u9645\u4e0a\u662f\u53ef\u9009\u7684\uff0c\u56e0\u6b64\u60a8\u4e5f\u53ef\u4ee5\u8fd0\u884c\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"pnpm jest\n")),(0,p.kt)("h2",{id:"\u9009\u9879"},"\u9009\u9879"),(0,p.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,p.kt)("p",null,"\u6dfb\u52a0\u4e8e\uff1av2.9.0"),(0,p.kt)("p",null,"\u5728\u5de5\u4f5c\u533a\u7684\u6bcf\u4e2a\u9879\u76ee\u4e2d\u6267\u884c shell \u547d\u4ee4\u3002"),(0,p.kt)("p",null,"\u5f53\u524d\u8f6f\u4ef6\u5305\u7684\u540d\u79f0\u53ef\u901a\u8fc7\u73af\u5883\u53d8\u91cf ",(0,p.kt)("inlineCode",{parentName:"p"},"PNPM_PACKAGE_NAME")," (\u7531 pnpm v2.22.0 \u63d0\u4f9b\u652f\u6301)\u3002"),(0,p.kt)("p",null,"\u793a\u4f8b\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"# \u4fee\u526a\u6240\u6709\u5305\u7684 node_modules \u5b89\u88c5\npnpm -r exec -- rm -rf node_modules\n# \u67e5\u770b\u6240\u6709\u5305\u7684\u5305\u4fe1\u606f\npnpm -r exec -- pnpm view $PNPM_PACKAGE_NAME\n")),(0,p.kt)("h3",{id:"--parallel"},"--parallel"),(0,p.kt)("p",null,"\u6dfb\u52a0\u4e8e\uff1av5.1.0"),(0,p.kt)("p",null,"\u5b8c\u5168\u5ffd\u7565\u5e76\u53d1\u548c\u62d3\u6251\u6392\u5e8f\uff0c\u5728\u6240\u6709\u5339\u914d\u7684\u5305\u4e2d\u7acb\u5373\u8fd0\u884c\u7ed9\u5b9a\u7684\u811a\u672c \u4e0e\u524d\u7f00\u6d41\u8f93\u51fa\u3002 \u8fd9\u662f\u9996\u9009\u6807\u5fd7\uff0c\u7528\u4e8e\u5728\u8bb8\u591a\u5305\u4e0a\u957f\u65f6\u95f4\u8fd0\u884c\u7684\u8fc7\u7a0b\uff0c\u4f8b\u5982\uff0c \u5197\u957f\u7684\u6784\u5efa\u8fc7\u7a0b\u3002"),(0,p.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector>"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/zh/next/filtering"},"\u4e86\u89e3\u66f4\u591a filtering.")))}m.isMDXComponent=!0}}]);