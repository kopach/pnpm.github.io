"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3254],{9848:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(7689);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(f,a(a({ref:t},s),{},{components:n})):r.createElement(f,a({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1051:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>l,contentTitle:()=>c,metadata:()=>p,toc:()=>s,default:()=>m});var r=n(2951),o=n(9877),i=(n(7689),n(9848)),a=["components"],l={id:"git",title:"\u0420\u0430\u0431\u043e\u0442\u0430 \u0441 Git"},c=void 0,p={unversionedId:"git",id:"version-6.x/git",isDocsHomePage:!1,title:"\u0420\u0430\u0431\u043e\u0442\u0430 \u0441 Git",description:"\u041b\u043e\u043a\u0444\u0430\u0439\u043b\u044b",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-6.x/git.md",sourceDirName:".",slug:"/git",permalink:"/ru/git",editUrl:"https://crowdin.com/project/pnpm/ru",version:"6.x",frontMatter:{id:"git",title:"\u0420\u0430\u0431\u043e\u0442\u0430 \u0441 Git"},sidebar:"version-6.x/docs",previous:{title:"\u0420\u0430\u0437\u0440\u0435\u0448\u0438\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e pnpm",permalink:"/ru/only-allow-pnpm"},next:{title:"Logos",permalink:"/ru/logos"}},s=[{value:"\u041b\u043e\u043a\u0444\u0430\u0439\u043b\u044b",id:"\u043b\u043e\u043a\u0444\u0430\u0439\u043b\u044b",children:[{value:"\u041a\u043e\u043d\u0444\u043b\u0438\u043a\u0442\u044b \u0441\u043b\u0438\u044f\u043d\u0438\u044f",id:"\u043a\u043e\u043d\u0444\u043b\u0438\u043a\u0442\u044b-\u0441\u043b\u0438\u044f\u043d\u0438\u044f",children:[]}]}],u={toc:s};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u043b\u043e\u043a\u0444\u0430\u0439\u043b\u044b"},"\u041b\u043e\u043a\u0444\u0430\u0439\u043b\u044b"),(0,i.kt)("p",null,"You should always commit the lockfile (",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm-lock.yaml"),"). This is for a multitude of reasons, the primary of which being:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"it enables faster installation for CI and production environments, due to being able to skip package resolution"),(0,i.kt)("li",{parentName:"ul"},"it enforces consistent installations and resolution between development, testing, and production environments, meaning the packages used in testing and production will be exactly the same as when you developed your project")),(0,i.kt)("h3",{id:"\u043a\u043e\u043d\u0444\u043b\u0438\u043a\u0442\u044b-\u0441\u043b\u0438\u044f\u043d\u0438\u044f"},"\u041a\u043e\u043d\u0444\u043b\u0438\u043a\u0442\u044b \u0441\u043b\u0438\u044f\u043d\u0438\u044f"),(0,i.kt)("p",null,"pnpm can automatically resolve merge conflicts in ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm-lock.yaml"),". If you have conflicts, just run ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm install")," and commit the changes."),(0,i.kt)("p",null,"Be warned, however. It is advised that you review the changes prior to staging a commit, because we cannot guarantee that pnpm will choose the correct head - it instead builds with the most updated of lockfiles, which is ideal in most cases."))}m.isMDXComponent=!0}}]);