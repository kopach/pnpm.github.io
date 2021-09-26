"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7553],{9613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),k=s(n),m=r,u=k["".concat(p,".").concat(m)]||k[m]||d[m]||i;return n?a.createElement(u,o(o({ref:t},c),{},{components:n})):a.createElement(u,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=k;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},7595:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>l,contentTitle:()=>p,metadata:()=>s,toc:()=>c,default:()=>k});var a=n(98),r=n(6862),i=(n(9496),n(9613)),o=["components"],l={id:"workspaces",title:"\u5de5\u4f5c\u7a7a\u95f4"},p=void 0,s={unversionedId:"workspaces",id:"version-6.x/workspaces",isDocsHomePage:!1,title:"\u5de5\u4f5c\u7a7a\u95f4",description:"pnpm \u5185\u7f6e\u4e86\u5bf9\u5355\u4e00\u5b58\u50a8\u5e93\uff08\u4e5f\u79f0\u4e3a\u591a\u5305\u5b58\u50a8\u5e93\u3001 \u591a\u9879\u76ee\u5b58\u50a8\u5e93\u6216\u5355\u4f53\u5b58\u50a8\u5e93\uff09\u7684\u652f\u6301\u3002 \u60a8\u53ef\u4ee5\u521b\u5efa\u4e00\u4e2a \u5de5\u4f5c\u533a\u4ee5\u5c06\u591a\u4e2a\u9879\u76ee\u5408\u5e76\u5230\u4e00\u4e2a\u5b58\u50a8\u5e93\u4e2d\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-6.x/workspaces.md",sourceDirName:".",slug:"/workspaces",permalink:"/zh/workspaces",editUrl:"https://crowdin.com/project/pnpm/zh-CN",tags:[],version:"6.x",frontMatter:{id:"workspaces",title:"\u5de5\u4f5c\u7a7a\u95f4"},sidebar:"version-6.x/docs",previous:{title:".pnpmfile.cjs",permalink:"/zh/pnpmfile"},next:{title:"\u522b\u540d",permalink:"/zh/aliases"}},c=[{value:"\u5de5\u4f5c\u7a7a\u95f4\u534f\u8bae (workspace:)",id:"\u5de5\u4f5c\u7a7a\u95f4\u534f\u8bae-workspace",children:[{value:"\u901a\u8fc7\u522b\u540d\u5f15\u7528\u5de5\u4f5c\u7a7a\u95f4\u5305",id:"\u901a\u8fc7\u522b\u540d\u5f15\u7528\u5de5\u4f5c\u7a7a\u95f4\u5305",children:[]},{value:"\u901a\u8fc7\u76f8\u5bf9\u8def\u5f84\u5f15\u7528\u5de5\u4f5c\u533a\u5305",id:"\u901a\u8fc7\u76f8\u5bf9\u8def\u5f84\u5f15\u7528\u5de5\u4f5c\u533a\u5305",children:[]},{value:"\u53d1\u5e03\u5de5\u4f5c\u7a7a\u95f4\u5305",id:"\u53d1\u5e03\u5de5\u4f5c\u7a7a\u95f4\u5305",children:[]}]},{value:"Release workflow",id:"release-workflow",children:[]},{value:"Options",id:"options",children:[{value:"link-workspace-packages",id:"link-workspace-packages",children:[]},{value:"prefer-workspace-packages",id:"prefer-workspace-packages",children:[]},{value:"shared-workspace-lockfile",id:"shared-workspace-lockfile",children:[]},{value:"save-workspace-protocol",id:"save-workspace-protocol",children:[]}]},{value:"\u6545\u969c\u6392\u67e5",id:"\u6545\u969c\u6392\u67e5",children:[]},{value:"Usage examples",id:"usage-examples",children:[]}],d={toc:c};function k(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"pnpm \u5185\u7f6e\u4e86\u5bf9\u5355\u4e00\u5b58\u50a8\u5e93\uff08\u4e5f\u79f0\u4e3a\u591a\u5305\u5b58\u50a8\u5e93\u3001 \u591a\u9879\u76ee\u5b58\u50a8\u5e93\u6216\u5355\u4f53\u5b58\u50a8\u5e93\uff09\u7684\u652f\u6301\u3002 \u60a8\u53ef\u4ee5\u521b\u5efa\u4e00\u4e2a \u5de5\u4f5c\u533a\u4ee5\u5c06\u591a\u4e2a\u9879\u76ee\u5408\u5e76\u5230\u4e00\u4e2a\u5b58\u50a8\u5e93\u4e2d\u3002"),(0,i.kt)("p",null,"\u5de5\u4f5c\u7a7a\u95f4\u7684 \u6839\u76ee\u5f55\u4e2d\u5fc5\u987b\u6709 ",(0,i.kt)("a",{parentName:"p",href:"/zh/pnpm-workspace_yaml"},(0,i.kt)("inlineCode",{parentName:"a"},"pnpm-workspace.yaml"))," \u6587\u4ef6\u3002 \u5de5\u4f5c\u7a7a\u95f4\u7684\u6839\u76ee\u5f55\u4e2d\u4e5f\u53ef\u80fd\u6709 ",(0,i.kt)("a",{parentName:"p",href:"/zh/npmrc"},(0,i.kt)("inlineCode",{parentName:"a"},".npmrc")),"\u3002"),(0,i.kt)("h2",{id:"\u5de5\u4f5c\u7a7a\u95f4\u534f\u8bae-workspace"},"\u5de5\u4f5c\u7a7a\u95f4\u534f\u8bae (workspace:)"),(0,i.kt)("p",null,"Added in: v3.7.0."),(0,i.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5982\u679c\u53ef\u7528\u7684\u8f6f\u4ef6\u5305 \u4e0e\u5df2\u58f0\u660e\u7684\u8303\u56f4\u76f8\u5339\u914d\uff0cpnpm \u5c06\u4ece\u5de5\u4f5c\u533a\u94fe\u63a5\u5305\u3002 \u4f8b\u5982\uff0c\u5982\u679c ",(0,i.kt)("inlineCode",{parentName:"p"},"bar"),"\u4e2d\u6709 ",(0,i.kt)("inlineCode",{parentName:"p"},'"foo"\uff1a"^1.0"')," \u7684\u4f9d\u8d56\u5173\u7cfb\uff0c\u5219 ",(0,i.kt)("inlineCode",{parentName:"p"},"foo@1.0")," \u94fe\u63a5\u5230 ",(0,i.kt)("inlineCode",{parentName:"p"},"bar")," \u3002 \u4f46\u662f\uff0c\u5982\u679c ",(0,i.kt)("inlineCode",{parentName:"p"},"bar")," \u5728\u4f9d\u8d56\u9879\u4e2d\u6709 ",(0,i.kt)("inlineCode",{parentName:"p"},'"foo": "2.0.0"')," \uff0c\u800c",(0,i.kt)("inlineCode",{parentName:"p"},"foo@2.0.0")," \u4e0d\u5728\u5de5\u4f5c\u533a\u4e2d\uff0c\u5219 ",(0,i.kt)("inlineCode",{parentName:"p"},"foo@2.0.0")," \u5c06\u4ece\u6ce8\u518c\u8868\u5b89\u88c5\u3002 \u8fd9\u79cd\u884c\u4e3a\u5e26\u6765\u4e86\u4e00\u4e9b\u4e0d\u786e\u5b9a\u6027\u3002"),(0,i.kt)("p",null,"\u5e78\u8fd0\u7684\u662f\uff0cpnpm \u652f\u6301 ",(0,i.kt)("inlineCode",{parentName:"p"}," workspace:")," \u534f\u8bae\u3002 \u5f53\u4f7f\u7528 \u6b64\u534f\u8bae\u65f6\uff0cpnpm \u5c06\u62d2\u7edd\u89e3\u6790\u4e3a \u672c\u5730\u5de5\u4f5c\u533a\u5305\u4ee5\u5916\u7684\u4efb\u4f55\u5185\u5bb9\u3002 \u56e0\u6b64\uff0c\u5982\u679c\u60a8\u8bbe\u7f6e ",(0,i.kt)("inlineCode",{parentName:"p"},'"foo": "workspace:2.0.0"'),"\uff0c\u8fd9\u6b21 \u5b89\u88c5\u5c06\u5931\u8d25\uff0c\u56e0\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},'"foo@2.0.0"')," \u4e0d\u5b58\u5728\u4e8e\u5de5\u4f5c\u533a\u4e2d\u3002"),(0,i.kt)("p",null,"\u5f53 ",(0,i.kt)("a",{parentName:"p",href:"#link-workspace-packages"},"link-workspace-packages")," \u9009\u9879 \u8bbe\u7f6e\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"\u65f6\uff0c\u8fd9\u4e2a\u534f\u8bae\u5c31\u683c\u5916\u6709\u7528\u3002 \u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u5982\u679c\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"workspace:")," \u534f\u8bae\uff0c\u90a3\u4e48 pnpm \u5c06\u4ec5\u4ece\u5de5\u4f5c\u7a7a\u95f4\u8f6f\u8fde\u63a5\u5305\u3002"),(0,i.kt)("h3",{id:"\u901a\u8fc7\u522b\u540d\u5f15\u7528\u5de5\u4f5c\u7a7a\u95f4\u5305"},"\u901a\u8fc7\u522b\u540d\u5f15\u7528\u5de5\u4f5c\u7a7a\u95f4\u5305"),(0,i.kt)("p",null,"\u6dfb\u52a0\u4e8e\uff1av5.12.0"),(0,i.kt)("p",null,"\u5047\u8bbe\u60a8\u5728\u5de5\u4f5c\u533a\u6709\u4e00\u4e2a\u540d\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"foo")," \u7684\u5305\u3002 \u901a\u5e38\u4f60\u4f1a\u50cf\u8fd9\u6837\u5f15\u7528\uff1a ",(0,i.kt)("inlineCode",{parentName:"p"},'"foo": "workspace:*"'),"\u3002"),(0,i.kt)("p",null,"\u5982\u679c\u8981\u4f7f\u7528\u5176\u4ed6\u522b\u540d\uff0c\u90a3\u4e48\u4ee5\u4e0b\u8bed\u6cd5\u4e5f\u5c06\u8d77\u4f5c\u7528: ",(0,i.kt)("inlineCode",{parentName:"p"},'"bar": "workspace:foo@*"'),"\u3002"),(0,i.kt)("p",null,"\u5728\u53d1\u5e03\u4e4b\u524d\uff0c\u522b\u540d\u88ab\u8f6c\u6362\u4e3a\u5e38\u89c4\u522b\u540d\u4f9d\u8d56\u9879\u3002 \u4e0a\u9762\u7684 \u793a\u4f8b\u5c06\u53d8\u4e3a\uff1a ",(0,i.kt)("inlineCode",{parentName:"p"},'"bar": "npm:foo@1.0.0"'),"\u3002"),(0,i.kt)("h3",{id:"\u901a\u8fc7\u76f8\u5bf9\u8def\u5f84\u5f15\u7528\u5de5\u4f5c\u533a\u5305"},"\u901a\u8fc7\u76f8\u5bf9\u8def\u5f84\u5f15\u7528\u5de5\u4f5c\u533a\u5305"),(0,i.kt)("p",null,"\u6dfb\u52a0\u4e8e\uff1av5.12.0"),(0,i.kt)("p",null,"\u5de5\u4f5c\u533a\u5185\u6709\u4e24\u4e2a\u8f6f\u4ef6\u5305\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"+ packages\n    + foo\n    + bar\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"bar")," \u53ef\u80fd\u6709 ",(0,i.kt)("inlineCode",{parentName:"p"},"foo")," \u5176\u4f9d\u8d56\u9879\u58f0\u660e\u4e3a\u8fd9\u6837",(0,i.kt)("inlineCode",{parentName:"p"},'"foo": "workspace:../foo"'),"\u3002 \u5728\u53d1\u5e03\u4e4b\u524d\uff0c\u8fd9\u4e9b\u89c4\u8303\u5c06\u8f6c\u6362\u4e3a\u6240\u6709\u8f6f\u4ef6\u5305\u7ba1\u7406\u5668\u652f\u6301\u7684 \u5e38\u89c4\u7248\u672c\u89c4\u8303\u3002"),(0,i.kt)("h3",{id:"\u53d1\u5e03\u5de5\u4f5c\u7a7a\u95f4\u5305"},"\u53d1\u5e03\u5de5\u4f5c\u7a7a\u95f4\u5305"),(0,i.kt)("p",null,"\u5f53\u5de5\u4f5c\u7a7a\u95f4\u5305\u6253\u5305\u5230\u5f52\u6863\uff08\u65e0\u8bba\u5b83\u662f\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm pack")," \u8fd8\u662f ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm \u53d1\u5e03"),"\u4e4b\u7c7b\u7684\u53d1\u5e03\u547d\u4ee4\u4e4b\u4e00\uff09\u65f6\uff0c\u6211\u4eec\u52a8\u6001 \u66ff\u6362\u4efb\u4f55 ",(0,i.kt)("inlineCode",{parentName:"p"},"\u5de5\u4f5c\u7a7a\u95f4:")," \u4f9d\u8d56\u5173\u7cfb:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u76ee\u6807\u5de5\u4f5c\u7a7a\u95f4\u4e2d\u7684\u5bf9\u5e94\u7248\u672c\uff08\u5982\u679c\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},"workspace:*"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"workspace:~"),", or ",(0,i.kt)("inlineCode",{parentName:"li"},"workspace:^"),"\uff09"),(0,i.kt)("li",{parentName:"ul"},"\u76f8\u5173\u7684 semver \u8303\u56f4\uff08\u5bf9\u4e8e\u4efb\u4f55\u5176\u4ed6\u8303\u56f4\u7c7b\u578b\uff09")),(0,i.kt)("p",null,"\u4f8b\u5982\uff0c\u5982\u679c\u6211\u4eec ",(0,i.kt)("inlineCode",{parentName:"p"},"foo"),"\u3001 ",(0,i.kt)("inlineCode",{parentName:"p"},"bar"),"\u3001 ",(0,i.kt)("inlineCode",{parentName:"p"},"qar"),"\u3001 ",(0,i.kt)("inlineCode",{parentName:"p"},"zoo"),"\u5e76\u4e14\u5b83\u4eec\u7684\u7248\u672c\u90fd\u662f ",(0,i.kt)("inlineCode",{parentName:"p"},"1.5.0"),"\uff0c\u5219\u5982\u4e0b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "dependencies": {\n        "foo": "workspace:*",\n        "bar": "workspace:~",\n        "qar": "workspace:^",\n        "zoo": "workspace:^1.5.0"\n    }\n}\n')),(0,i.kt)("p",null,"\u5c06\u8f6c\u5316\u4e3a\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "dependencies": {\n        "foo": "1.5.0",\n        "bar": "~1.5.0",\n        "qar": "^1.5.0",\n        "zoo": "^1.5.0"\n    }\n}\n')),(0,i.kt)("p",null,"This feature allows you to depend on your local workspace packages while still being able to publish the resulting packages to the remote registry without needing intermediary publish steps - your consumers will be able to use your published workspaces as any other package, still benefitting from the guarantees semver offers."),(0,i.kt)("h2",{id:"release-workflow"},"Release workflow"),(0,i.kt)("p",null,"Versioning packages inside a workspace is a complex task and pnpm currently does not provide a built-in solution for it. However, there are 2 well tested tools that handle versioning and support pnpm:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/atlassian/changesets"},"changesets")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://rushjs.io"},"Rush"),".")),(0,i.kt)("p",null,"For how to set up a repository using Rush, read ",(0,i.kt)("a",{parentName:"p",href:"https://rushjs.io/pages/maintainer/setup_new_repo"},"this page"),"."),(0,i.kt)("p",null,"For using Changesets with pnpm, read ",(0,i.kt)("a",{parentName:"p",href:"/zh/using-changesets"},"this guide"),"."),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("h3",{id:"link-workspace-packages"},"link-workspace-packages"),(0,i.kt)("p",null,"Added in: v2.14.0"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a ",(0,i.kt)("strong",{parentName:"li"},"true")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("strong",{parentName:"li"},"true"),", ",(0,i.kt)("strong",{parentName:"li"},"false"),", ",(0,i.kt)("strong",{parentName:"li"},"deep"))),(0,i.kt)("p",null,"If this is enabled, locally available packages are linked to ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules")," instead of being downloaded from the registry. This is very convenient in a monorepo. If you need local packages to also be linked to subdependencies, you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"deep")," setting (since v5)."),(0,i.kt)("p",null,"Else, packages are downloaded and installed from the registry. However, workspace packages can still be linked by using the ",(0,i.kt)("inlineCode",{parentName:"p"},"workspace:")," range protocol."),(0,i.kt)("h3",{id:"prefer-workspace-packages"},"prefer-workspace-packages"),(0,i.kt)("p",null,"Added in: v5.13.0"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Default: ",(0,i.kt)("strong",{parentName:"li"},"false")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("strong",{parentName:"li"},"Boolean"))),(0,i.kt)("p",null,"If this is enabled, local packages from the workspace are preferred over packages from the registry, even if there is a newer version of the package in the registry."),(0,i.kt)("p",null,"This setting is only useful if the workspace doesn't use ",(0,i.kt)("inlineCode",{parentName:"p"},"save-workspace-protocol"),"."),(0,i.kt)("h3",{id:"shared-workspace-lockfile"},"shared-workspace-lockfile"),(0,i.kt)("p",null,"Added in: v2.17.0 as ",(0,i.kt)("inlineCode",{parentName:"p"},"shared-workspace-shrinkwrap")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a ",(0,i.kt)("strong",{parentName:"li"},"true")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("strong",{parentName:"li"},"Boolean"))),(0,i.kt)("p",null,"If this is enabled, pnpm creates a single ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm-lock.yaml")," file in the root of the workspace. This also means that all dependencies of workspace packages will be in a single ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules")," (and get symlinked to their package ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules")," folder for Node's module resolution)."),(0,i.kt)("p",null,"Advantages of this option:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"every dependency is a singleton"),(0,i.kt)("li",{parentName:"ul"},"faster installations in a monorepo"),(0,i.kt)("li",{parentName:"ul"},"fewer changes in code reviews as they are all in one file")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Even though all the dependencies will be hard linked into the root ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules"),", packages will have access only to those dependencies that are declared in their ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),", so pnpm's strictness is preserved. This is a result of the aforementioned symbolic linking."))),(0,i.kt)("h3",{id:"save-workspace-protocol"},"save-workspace-protocol"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a ",(0,i.kt)("strong",{parentName:"li"},"true")),(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("strong",{parentName:"li"},"Boolean"))),(0,i.kt)("p",null,"If this is enabled, new dependencies will be added with the workspace protocol IF (and only if) they are present in the workspace."),(0,i.kt)("p",null,"You might want to change this setting to ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," if the tooling in your repository does not understand the workspace protocol (and ideally submit a PR to your tooling to get it added in the future)."),(0,i.kt)("h2",{id:"\u6545\u969c\u6392\u67e5"},"\u6545\u969c\u6392\u67e5"),(0,i.kt)("p",null,"pnpm cannot guarantee that scripts will be run in topological order if there are cycles between workspace dependencies. If pnpm detects cyclic dependencies during installation, it will produce a warning. If pnpm is able to find out which dependencies are causing the cycles, it will display them too."),(0,i.kt)("p",null,"If you see the message ",(0,i.kt)("inlineCode",{parentName:"p"},"There are cyclic workspace dependencies"),", please inspect workspace dependencies declared in ",(0,i.kt)("inlineCode",{parentName:"p"},"dependencies"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"optionalDependencies")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"devDependencies"),"."),(0,i.kt)("h2",{id:"usage-examples"},"Usage examples"),(0,i.kt)("p",null,"Here are a few open source projects that use the workspace feature of pnpm:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/vitejs/vite"},"Vite")," (as of 9/26/2021, commit ",(0,i.kt)("inlineCode",{parentName:"li"},"3e1cce01d01493d33e50966d0d0fd39a86d229f9"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/cyclejs/cyclejs"},"Cycle.js")," (as of 9/21/2021, commit ",(0,i.kt)("inlineCode",{parentName:"li"},"f2187ab6688368edb904b649bd371a658f6a8637"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/prisma/prisma"},"Prisma")," (as of 9/21/2021, commit ",(0,i.kt)("inlineCode",{parentName:"li"},"c4c83e788aa16d61bae7a6d00adc8a58b3789a06"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/verdaccio/verdaccio"},"Verdaccio")," (as of 9/21/2021, commit ",(0,i.kt)("inlineCode",{parentName:"li"},"9dbf73e955fcb70b0a623c5ab89649b95146c744"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/rollup/plugins"},"Rollup plugins")," (as of 9/21/2021, commit ",(0,i.kt)("inlineCode",{parentName:"li"},"53fb18c0c2852598200c547a0b1d745d15b5b487"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/Saul-Mirone/milkdown"},"Milkdown")," (as of 9/26/2021, commit ",(0,i.kt)("inlineCode",{parentName:"li"},"4b2e1dd6125bc2198fd1b851c4f00eda70e9b913"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/bytedance/bytemd"},"ByteMD")," (as of 2/18/2021, commit ",(0,i.kt)("inlineCode",{parentName:"li"},"36ef25f1ea1cd0b08752df5f8c832302017bb7fb"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/vueuse/vueuse"},"VueUse")," (as of 9/25/2021, commit ",(0,i.kt)("inlineCode",{parentName:"li"},"826351ba1d9c514e34426c85f3d69fb9875c7dd9"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/slidevjs/slidev"},"Slidev")," (as of 4/12/2021, commit ",(0,i.kt)("inlineCode",{parentName:"li"},"d6783323eb1ab1fc612577eb63579c8f7bc99c3a"),")")))}k.isMDXComponent=!0}}]);