(self.webpackChunk=self.webpackChunk||[]).push([[1853],{9848:(e,t,a)=>{"use strict";a.d(t,{Zo:()=>s,kt:()=>k});var n=a(7689);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=n.createContext({}),d=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=d(e.components);return n.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=d(a),k=l,u=c["".concat(o,".").concat(k)]||c[k]||m[k]||r;return a?n.createElement(u,i(i({ref:t},s),{},{components:a})):n.createElement(u,i({ref:t},s))}));function k(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=c;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:l,i[1]=p;for(var d=2;d<r;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5902:(e,t,a)=>{"use strict";a.r(t),a.d(t,{frontMatter:()=>p,contentTitle:()=>o,metadata:()=>d,toc:()=>s,default:()=>c});var n=a(2791),l=a(9698),r=(a(7689),a(9848)),i=["components"],p={id:"add",title:"pnpm add <pkg>"},o=void 0,d={unversionedId:"cli/add",id:"version-5.x/cli/add",isDocsHomePage:!1,title:"pnpm add <pkg>",description:"Telep\xedt egy csomagot, valamint minden olyan csomagot, amely f\xfcgg\u0151s\xe9ge az adott csomagnak. Alap\xe9rtelmez\xe9sn\xe9l fogva, minden \xfaj csomag production f\xfcgg\u0151s\xe9gk\xe9nt ker\xfcl telep\xedt\xe9sre.",source:"@site/i18n/hu/docusaurus-plugin-content-docs/version-5.x/cli/add.md",sourceDirName:"cli",slug:"/cli/add",permalink:"/hu/5.x/cli/add",editUrl:"https://crowdin.com/project/pnpm/hu",version:"5.x",frontMatter:{id:"add",title:"pnpm add <pkg>"},sidebar:"version-5.x/docs",previous:{title:"Sz\u0171r\xe9s",permalink:"/hu/5.x/filtering"},next:{title:"pnpm install",permalink:"/hu/5.x/cli/install"}},s=[{value:"TL;DR",id:"tldr",children:[]},{value:"T\xe1mogatott csomag forr\xe1sok",id:"t\xe1mogatott-csomag-forr\xe1sok",children:[{value:"Telep\xedt\xe9s az npm b\xe1zisb\xf3l",id:"telep\xedt\xe9s-az-npm-b\xe1zisb\xf3l",children:[]},{value:"Telep\xedt\xe9s a workspaceb\u0151l",id:"telep\xedt\xe9s-a-workspaceb\u0151l",children:[]},{value:"Telep\xedt\xe9s helyi f\xe1jlrendszerb\u0151l",id:"telep\xedt\xe9s-helyi-f\xe1jlrendszerb\u0151l",children:[]},{value:"Telep\xedt\xe9s t\xe1voli tarballb\xf3l",id:"telep\xedt\xe9s-t\xe1voli-tarballb\xf3l",children:[]},{value:"Telep\xedt\xe9s a Git t\xe1rh\xe1zb\xf3l",id:"telep\xedt\xe9s-a-git-t\xe1rh\xe1zb\xf3l",children:[]}]},{value:"Options",id:"options",children:[{value:"--save-prod, -P",id:"--save-prod--p",children:[]},{value:"--save-dev, -D",id:"--save-dev--d",children:[]},{value:"--save-optional, -O",id:"--save-optional--o",children:[]},{value:"--save-exact, -E",id:"--save-exact--e",children:[]},{value:"--save-peer",id:"--save-peer",children:[]},{value:"--ignore-workspace-root-check, -W",id:"--ignore-workspace-root-check--w",children:[]},{value:"--global",id:"--global",children:[]},{value:"--workspace",id:"--workspace",children:[]},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",children:[]}]}],m={toc:s};function c(e){var t=e.components,a=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Telep\xedt egy csomagot, valamint minden olyan csomagot, amely f\xfcgg\u0151s\xe9ge az adott csomagnak. Alap\xe9rtelmez\xe9sn\xe9l fogva, minden \xfaj csomag production f\xfcgg\u0151s\xe9gk\xe9nt ker\xfcl telep\xedt\xe9sre."),(0,r.kt)("h2",{id:"tldr"},"TL;DR"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Command"),(0,r.kt)("th",{parentName:"tr",align:null},"Meaning"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pnpm add sax")),(0,r.kt)("td",{parentName:"tr",align:null},"Save to ",(0,r.kt)("inlineCode",{parentName:"td"},"dependencies"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pnpm add -D sax")),(0,r.kt)("td",{parentName:"tr",align:null},"Save to ",(0,r.kt)("inlineCode",{parentName:"td"},"devDependencies"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pnpm add -O sax")),(0,r.kt)("td",{parentName:"tr",align:null},"Save to ",(0,r.kt)("inlineCode",{parentName:"td"},"optionalDependencies"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pnpm add sax@next")),(0,r.kt)("td",{parentName:"tr",align:null},"Install from the ",(0,r.kt)("inlineCode",{parentName:"td"},"next")," tag")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pnpm add sax@3.0.0")),(0,r.kt)("td",{parentName:"tr",align:null},"Specify version ",(0,r.kt)("inlineCode",{parentName:"td"},"3.0.0"))))),(0,r.kt)("h2",{id:"t\xe1mogatott-csomag-forr\xe1sok"},"T\xe1mogatott csomag forr\xe1sok"),(0,r.kt)("h3",{id:"telep\xedt\xe9s-az-npm-b\xe1zisb\xf3l"},"Telep\xedt\xe9s az npm b\xe1zisb\xf3l"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"pnpm add csomagn\xe9v")," a ",(0,r.kt)("inlineCode",{parentName:"p"},"csomagn\xe9v")," leg\xfajabb verzi\xf3j\xe1t telep\xedti az ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/"},"npm registryb\u0151l"),". To install a package from another registry, you can use the tarball link (see ",(0,r.kt)("a",{parentName:"p",href:"#install-from-remote-tarball"},"the corresponding guide"),")."),(0,r.kt)("p",null,"You may also install packages by:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"tag: ",(0,r.kt)("inlineCode",{parentName:"li"},"pnpm add express@nightly")),(0,r.kt)("li",{parentName:"ul"},"version: ",(0,r.kt)("inlineCode",{parentName:"li"},"pnpm add express@1.0.0")),(0,r.kt)("li",{parentName:"ul"},"version range: ",(0,r.kt)("inlineCode",{parentName:"li"},'pnpm add express@2 react@">=0.1.0 <0.2.0"'))),(0,r.kt)("h3",{id:"telep\xedt\xe9s-a-workspaceb\u0151l"},"Telep\xedt\xe9s a workspaceb\u0151l"),(0,r.kt)("p",null,"Note that when adding dependencies and working within a ",(0,r.kt)("a",{parentName:"p",href:"/hu/5.x/workspaces"},"workspace"),", packages will be installed from the configured sources, depending on whether or not ",(0,r.kt)("a",{parentName:"p",href:"/hu/5.x/workspaces#link-workspace-packages"},(0,r.kt)("inlineCode",{parentName:"a"},"link-workspace-packages"))," is set, and use of the ",(0,r.kt)("a",{parentName:"p",href:"/hu/5.x/workspaces#workspace-ranges-workspace"},(0,r.kt)("inlineCode",{parentName:"a"},"workspace: range protocol")),"."),(0,r.kt)("h3",{id:"telep\xedt\xe9s-helyi-f\xe1jlrendszerb\u0151l"},"Telep\xedt\xe9s helyi f\xe1jlrendszerb\u0151l"),(0,r.kt)("p",null,"There are two ways to install from the local file system:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"from a tarball file (",(0,r.kt)("inlineCode",{parentName:"li"},".tar"),", ",(0,r.kt)("inlineCode",{parentName:"li"},".tar.gz"),", or ",(0,r.kt)("inlineCode",{parentName:"li"},".tgz"),")"),(0,r.kt)("li",{parentName:"ol"},"from a directory")),(0,r.kt)("p",null,"Examples:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm add ./package.tar.gz\npnpm add ./some-directory\n")),(0,r.kt)("p",null,"When you install from a directory, a symlink will be created in the current project's ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules"),", so it is the same as running ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm link"),"."),(0,r.kt)("h3",{id:"telep\xedt\xe9s-t\xe1voli-tarballb\xf3l"},"Telep\xedt\xe9s t\xe1voli tarballb\xf3l"),(0,r.kt)("p",null,'The argument must be a fetchable URL starting with "http://" or "https://".'),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm add https://github.com/indexzero/forever/tarball/v0.5.6\n")),(0,r.kt)("h3",{id:"telep\xedt\xe9s-a-git-t\xe1rh\xe1zb\xf3l"},"Telep\xedt\xe9s a Git t\xe1rh\xe1zb\xf3l"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm add <git remote url>\n")),(0,r.kt)("p",null,"Installs the package from the hosted Git provider, cloning it with Git. You can use a protocol for certain Git providers. For example, ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm add github:user/repo")),(0,r.kt)("p",null,"You may install from Git by:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"latest commit from master: ",(0,r.kt)("inlineCode",{parentName:"li"},"pnpm add kevva/is-positive")),(0,r.kt)("li",{parentName:"ul"},"commit: ",(0,r.kt)("inlineCode",{parentName:"li"},"pnpm add kevva/is-positive#97edff6f525f192a3f83cea1944765f769ae2678")),(0,r.kt)("li",{parentName:"ul"},"branch: ",(0,r.kt)("inlineCode",{parentName:"li"},"pnpm add kevva/is-positive#master")),(0,r.kt)("li",{parentName:"ul"},"version range: ",(0,r.kt)("inlineCode",{parentName:"li"},"pnpm add kevva/is-positive#semver:^2.0.0"))),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("h3",{id:"--save-prod--p"},"--save-prod, -P"),(0,r.kt)("p",null,"Telep\xedtse a megadott csomagokat a szok\xe1sos ",(0,r.kt)("inlineCode",{parentName:"p"},"dependencies")," mez\u0151be."),(0,r.kt)("h3",{id:"--save-dev--d"},"--save-dev, -D"),(0,r.kt)("p",null,"Telep\xedtse a megadott csomagokat mint ",(0,r.kt)("inlineCode",{parentName:"p"},"devDependencies"),"."),(0,r.kt)("h3",{id:"--save-optional--o"},"--save-optional, -O"),(0,r.kt)("p",null,"Telep\xedtse a megadott csomagokat mint ",(0,r.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),"."),(0,r.kt)("h3",{id:"--save-exact--e"},"--save-exact, -E"),(0,r.kt)("p",null,"Saved dependencies will be configured with an exact version rather than using pnpm's default semver range operator."),(0,r.kt)("h3",{id:"--save-peer"},"--save-peer"),(0,r.kt)("p",null,"Added in: v3.2.0"),(0,r.kt)("p",null,"Using ",(0,r.kt)("inlineCode",{parentName:"p"},"--save-peer")," will add one or more packages to ",(0,r.kt)("inlineCode",{parentName:"p"},"peerDependencies")," and install them as dev dependencies."),(0,r.kt)("h3",{id:"--ignore-workspace-root-check--w"},"--ignore-workspace-root-check, -W"),(0,r.kt)("p",null,"Added in: v3.6.0"),(0,r.kt)("p",null,"Adding a new dependency to the root workspace package fails, unless the ",(0,r.kt)("inlineCode",{parentName:"p"},"--ignore-workspace-root-check")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"-W")," flag is used."),(0,r.kt)("p",null,"For instance, ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm add debug -W"),"."),(0,r.kt)("h3",{id:"--global"},"--global"),(0,r.kt)("p",null,"Csomag telep\xedt\xe9se glob\xe1lisan."),(0,r.kt)("h3",{id:"--workspace"},"--workspace"),(0,r.kt)("p",null,"Added in: v4.4.0"),(0,r.kt)("p",null,"Csak van a f\xfcgg\u0151s\xe9g telep\xedtve, ha megtal\xe1lhat\xf3 a workspace-ben."),(0,r.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/hu/5.x/filtering"},"Read more about filtering.")))}c.isMDXComponent=!0}}]);