(self.webpackChunk=self.webpackChunk||[]).push([[2471],{9848:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>s,kt:()=>d});var r=n(7689);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),m=l(n),d=o,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(f,p(p({ref:t},s),{},{components:n})):r.createElement(f,p({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,p=new Array(i);p[0]=m;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,p[1]=a;for(var l=2;l<i;l++)p[l]=n[l];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8209:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>a,contentTitle:()=>c,metadata:()=>l,toc:()=>s,default:()=>m});var r=n(2791),o=n(9698),i=(n(7689),n(9848)),p=["components"],a={id:"completion",title:"\u547d\u4ee4\u884c tab \u81ea\u52a8\u8865\u5168\u3002",original_id:"completion"},c=void 0,l={unversionedId:"completion",id:"version-4.x/completion",isDocsHomePage:!1,title:"\u547d\u4ee4\u884c tab \u81ea\u52a8\u8865\u5168\u3002",description:"Added in: v4.9.0",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-4.x/completion.md",sourceDirName:".",slug:"/completion",permalink:"/zh/4.x/completion",editUrl:"https://crowdin.com/project/pnpm/zh-CN",version:"4.x",frontMatter:{id:"completion",title:"\u547d\u4ee4\u884c tab \u81ea\u52a8\u8865\u5168\u3002",original_id:"completion"},sidebar:"version-4.x/docs",previous:{title:"\u522b\u540d",permalink:"/zh/4.x/aliases"},next:{title:"\u6301\u7eed\u96c6\u6210",permalink:"/zh/4.x/continuous-integration"}},s=[],u={toc:s};function m(e){var t=e.components,n=(0,o.Z)(e,p);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Added in: v4.9.0"),(0,i.kt)("p",null,"pnpm supports command line tab-completion for Bash, Zsh, and Fish shells."),(0,i.kt)("p",null,"To setup autocompletion, run ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm install-completion"),"."),(0,i.kt)("p",null,"To see examples of completion, read ",(0,i.kt)("a",{parentName:"p",href:"https://medium.com/pnpm/pnpm-v4-9-comes-with-command-completion-a411715260b4"},"this article"),"."))}m.isMDXComponent=!0}}]);