"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3587],{9613:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>v});var n=t(9496);function l(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){l(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,l=function(e,r){if(null==e)return{};var t,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(l[t]=e[t]);return l}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var p=n.createContext({}),c=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(p.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},s=n.forwardRef((function(e,r){var t=e.components,l=e.mdxType,o=e.originalType,p=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),s=c(t),v=l,m=s["".concat(p,".").concat(v)]||s[v]||d[v]||o;return t?n.createElement(m,i(i({ref:r},u),{},{components:t})):n.createElement(m,i({ref:r},u))}));function v(e,r){var t=arguments,l=r&&r.mdxType;if("string"==typeof e||l){var o=t.length,i=new Array(o);i[0]=s;var a={};for(var p in r)hasOwnProperty.call(r,p)&&(a[p]=r[p]);a.originalType=e,a.mdxType="string"==typeof e?e:l,i[1]=a;for(var c=2;c<o;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}s.displayName="MDXCreateElement"},3152:(e,r,t)=>{t.r(r),t.d(r,{frontMatter:()=>a,contentTitle:()=>p,metadata:()=>c,toc:()=>u,default:()=>s});var n=t(98),l=t(6862),o=(t(9496),t(9613)),i=["components"],a={id:"remove",title:"pnpm remove"},p=void 0,c={unversionedId:"cli/remove",id:"version-5.x/cli/remove",isDocsHomePage:!1,title:"pnpm remove",description:"\u0423\u0434\u0430\u043b\u044f\u0435\u0442 \u043f\u0430\u043a\u0435\u0442\u044b \u0438\u0437 node_modules \u0438 \u0438\u0437 package.json \u043f\u0440\u043e\u0435\u043a\u0442\u0430.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-5.x/cli/remove.md",sourceDirName:"cli",slug:"/cli/remove",permalink:"/ru/5.x/cli/remove",editUrl:"https://crowdin.com/project/pnpm/ru",tags:[],version:"5.x",frontMatter:{id:"remove",title:"pnpm remove"},sidebar:"version-5.x/docs",previous:{title:"pnpm update",permalink:"/ru/5.x/cli/update"},next:{title:"pnpm link",permalink:"/ru/5.x/cli/link"}},u=[{value:"\u041e\u043f\u0446\u0438\u0438",id:"\u043e\u043f\u0446\u0438\u0438",children:[{value:"--recursive, -r",id:"--recursive--r",children:[],level:3},{value:"--global",id:"--global",children:[],level:3},{value:"--save-dev, -D",id:"--save-dev--d",children:[],level:3},{value:"--save-optional, -O",id:"--save-optional--o",children:[],level:3},{value:"--save-prod, -P",id:"--save-prod--p",children:[],level:3},{value:"--filter &lt;\u0441\u0435\u043b\u0435\u043a\u0442\u043e\u0440 \u043f\u0430\u043a\u0435\u0442\u0430&gt;",id:"--filter-\u0441\u0435\u043b\u0435\u043a\u0442\u043e\u0440-\u043f\u0430\u043a\u0435\u0442\u0430",children:[],level:3}],level:2}],d={toc:u};function s(e){var r=e.components,t=(0,l.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u0423\u0434\u0430\u043b\u044f\u0435\u0442 \u043f\u0430\u043a\u0435\u0442\u044b \u0438\u0437 ",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules")," \u0438 \u0438\u0437 ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," \u043f\u0440\u043e\u0435\u043a\u0442\u0430."),(0,o.kt)("p",null,"\u0410\u043b\u0438\u0430\u0441\u044b: rm, uninstall, un"),(0,o.kt)("h2",{id:"\u043e\u043f\u0446\u0438\u0438"},"\u041e\u043f\u0446\u0438\u0438"),(0,o.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,o.kt)("p",null,"\u041a\u043e\u0433\u0434\u0430 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0432 ",(0,o.kt)("a",{parentName:"p",href:"/ru/5.x/workspaces"},"\u0432\u043e\u0440\u043a\u0441\u043f\u0435\u0439\u0441\u0435"),", \u0443\u0434\u0430\u043b\u044f\u0435\u0442 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442(\u044c/\u0438) \u0438\u0437 \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u043f\u0430\u043a\u0435\u0442\u0430 \u0432\u043e\u0440\u043a\u0441\u043f\u0435\u0439\u0441\u0430."),(0,o.kt)("p",null,"\u041a\u043e\u0433\u0434\u0430 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u043d\u0435 \u0432 \u0432\u043e\u0440\u043a\u0441\u043f\u0435\u0439\u0441\u0435, \u0443\u0434\u0430\u043b\u044f\u0435\u0442 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442(\u044c/\u0438) \u0438\u0437 \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u043f\u0430\u043a\u0435\u0442\u0430 \u043d\u0430\u0439\u0434\u0435\u043d\u043d\u043e\u0433\u043e \u0432 \u043f\u043e\u0434\u043f\u0430\u043f\u043a\u0430\u0445."),(0,o.kt)("h3",{id:"--global"},"--global"),(0,o.kt)("p",null,"\u0423\u0434\u0430\u043b\u044f\u0435\u0442 \u0433\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u043e \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u044b\u0439 \u043f\u0430\u043a\u0435\u0442."),(0,o.kt)("h3",{id:"--save-dev--d"},"--save-dev, -D"),(0,o.kt)("p",null,"\u0423\u0434\u0430\u043b\u044f\u0435\u0442 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 ",(0,o.kt)("inlineCode",{parentName:"p"},"devDependencies"),"."),(0,o.kt)("h3",{id:"--save-optional--o"},"--save-optional, -O"),(0,o.kt)("p",null,"\u0423\u0434\u0430\u043b\u044f\u0435\u0442 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 ",(0,o.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),"."),(0,o.kt)("h3",{id:"--save-prod--p"},"--save-prod, -P"),(0,o.kt)("p",null,"\u0423\u0434\u0430\u043b\u044f\u0435\u0442 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 ",(0,o.kt)("inlineCode",{parentName:"p"},"dependencies"),"."),(0,o.kt)("h3",{id:"--filter-\u0441\u0435\u043b\u0435\u043a\u0442\u043e\u0440-\u043f\u0430\u043a\u0435\u0442\u0430"},"--filter ","<","\u0441\u0435\u043b\u0435\u043a\u0442\u043e\u0440 \u043f\u0430\u043a\u0435\u0442\u0430",">"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/ru/5.x/filtering"},"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435 \u043e \u0444\u0438\u043b\u044c\u0442\u0440\u0430\u0446\u0438\u0438.")))}s.isMDXComponent=!0}}]);