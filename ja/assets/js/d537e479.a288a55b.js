(self.webpackChunk=self.webpackChunk||[]).push([[888],{9848:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>s,kt:()=>m});var a=n(7689);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),o=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=o(e.components);return a.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),k=o(n),m=r,u=k["".concat(d,".").concat(m)]||k[m]||c[m]||l;return n?a.createElement(u,i(i({ref:t},s),{},{components:n})):a.createElement(u,i({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=k;var p={};for(var d in t)hasOwnProperty.call(t,d)&&(p[d]=t[d]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var o=2;o<l;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},2509:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>p,contentTitle:()=>d,metadata:()=>o,toc:()=>s,default:()=>k});var a=n(2791),r=n(9698),l=(n(7689),n(9848)),i=["components"],p={id:"add",title:"pnpm add <pkg>",original_id:"add"},d=void 0,o={unversionedId:"cli/add",id:"version-4.x/cli/add",isDocsHomePage:!1,title:"pnpm add <pkg>",description:"\u30d1\u30c3\u30b1\u30fc\u30b8\u3068\u305d\u308c\u304c\u4f9d\u5b58\u3057\u3066\u3044\u308b\u3059\u3079\u3066\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u307e\u3059\u3002 By default, any new package is installed as a prod dependency.",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-4.x/cli/add.md",sourceDirName:"cli",slug:"/cli/add",permalink:"/ja/4.x/cli/add",editUrl:"https://crowdin.com/project/pnpm/ja",version:"4.x",frontMatter:{id:"add",title:"pnpm add <pkg>",original_id:"add"},sidebar:"version-4.x/docs",previous:{title:"\u30d5\u30a3\u30eb\u30bf\u30ea\u30f3\u30b0",permalink:"/ja/4.x/filtering"},next:{title:"pnpm install",permalink:"/ja/4.x/cli/install"}},s=[{value:"tl;dr",id:"tldr",children:[]},{value:"\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u308b\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u53d6\u5f97\u5148",id:"\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u308b\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u53d6\u5f97\u5148",children:[{value:"npm \u30ec\u30b8\u30b9\u30c8\u30ea\u304b\u3089\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",id:"npm-\u30ec\u30b8\u30b9\u30c8\u30ea\u304b\u3089\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",children:[]},{value:"\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u304b\u3089\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",id:"\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u304b\u3089\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",children:[]},{value:"\u30ed\u30fc\u30ab\u30eb\u30d5\u30a1\u30a4\u30eb\u30b7\u30b9\u30c6\u30e0\u304b\u3089\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",id:"\u30ed\u30fc\u30ab\u30eb\u30d5\u30a1\u30a4\u30eb\u30b7\u30b9\u30c6\u30e0\u304b\u3089\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",children:[]},{value:"Install from remote gzipped tarball",id:"install-from-remote-gzipped-tarball",children:[]},{value:"Git \u30ea\u30dd\u30b8\u30c8\u30ea\u304b\u3089\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",id:"git-\u30ea\u30dd\u30b8\u30c8\u30ea\u304b\u3089\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",children:[]}]},{value:"Options",id:"options",children:[{value:"--save-prod, -P",id:"--save-prod--p",children:[]},{value:"--save-dev, -D",id:"--save-dev--d",children:[]},{value:"--save-optional, -O",id:"--save-optional--o",children:[]},{value:"--save-exact, -E",id:"--save-exact--e",children:[]},{value:"--save-peer",id:"--save-peer",children:[]},{value:"--ignore-workspace-root-check, -W",id:"--ignore-workspace-root-check--w",children:[]},{value:"--global",id:"--global",children:[]},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",children:[]},{value:"--workspace",id:"--workspace",children:[]}]}],c={toc:s};function k(e){var t=e.components,p=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},c,p,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u30d1\u30c3\u30b1\u30fc\u30b8\u3068\u305d\u308c\u304c\u4f9d\u5b58\u3057\u3066\u3044\u308b\u3059\u3079\u3066\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u307e\u3059\u3002 By default, any new package is installed as a prod dependency."),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(5659).Z})),(0,l.kt)("h2",{id:"tldr"},"tl;dr"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Command"),(0,l.kt)("th",{parentName:"tr",align:null},"Meaning"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pnpm add sax")),(0,l.kt)("td",{parentName:"tr",align:null},"save to ",(0,l.kt)("inlineCode",{parentName:"td"},"dependencies"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pnpm add -D sax")),(0,l.kt)("td",{parentName:"tr",align:null},"save to ",(0,l.kt)("inlineCode",{parentName:"td"},"devDependencies"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pnpm add -O sax")),(0,l.kt)("td",{parentName:"tr",align:null},"save to ",(0,l.kt)("inlineCode",{parentName:"td"},"optionalDependencies"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pnpm add sax@next")),(0,l.kt)("td",{parentName:"tr",align:null},"Specify tag ",(0,l.kt)("inlineCode",{parentName:"td"},"next"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pnpm add sax@3.0.0")),(0,l.kt)("td",{parentName:"tr",align:null},"\u30d0\u30fc\u30b8\u30e7\u30f3 ",(0,l.kt)("inlineCode",{parentName:"td"},"3.0.0")," \u3092\u6307\u5b9a")))),(0,l.kt)("h2",{id:"\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u308b\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u53d6\u5f97\u5148"},"\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u308b\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u53d6\u5f97\u5148"),(0,l.kt)("p",null,"A package can be installed from different locations:"),(0,l.kt)("h3",{id:"npm-\u30ec\u30b8\u30b9\u30c8\u30ea\u304b\u3089\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"},"npm \u30ec\u30b8\u30b9\u30c8\u30ea\u304b\u3089\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"pnpm add package-name")," will install the latest version of ",(0,l.kt)("inlineCode",{parentName:"p"},"package-name")," from the ",(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com/"},"npm registry"),"."),(0,l.kt)("p",null,"\u307e\u305f\u3001\u6b21\u306e\u3088\u3046\u306b\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u3053\u3068\u3082\u53ef\u80fd\u3067\u3059\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"tag \u3092\u6307\u5b9a: ",(0,l.kt)("inlineCode",{parentName:"li"},"pnpm add express@nightly")),(0,l.kt)("li",{parentName:"ul"},"\u30d0\u30fc\u30b8\u30e7\u30f3\u3092\u6307\u5b9a: ",(0,l.kt)("inlineCode",{parentName:"li"},"pnpm add express@1.0.0")),(0,l.kt)("li",{parentName:"ul"},"\u30d0\u30fc\u30b8\u30e7\u30f3\u7bc4\u56f2\u3092\u6307\u5b9a: ",(0,l.kt)("inlineCode",{parentName:"li"},'pnpm add express@2 react@">=0.1.0 <0.2.0"'))),(0,l.kt)("h3",{id:"\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u304b\u3089\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"},"\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u304b\u3089\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"),(0,l.kt)("p",null,"Note that when adding dependencies and working within a ",(0,l.kt)("a",{parentName:"p",href:"/ja/4.x/workspaces"},"workspace"),", packages will be installed from the configured sources, depending on whether or not ",(0,l.kt)("a",{parentName:"p",href:"/ja/4.x/workspaces#link-workspace-packages"},(0,l.kt)("inlineCode",{parentName:"a"},"link-workspace-packages"))," is set, and use of the ",(0,l.kt)("a",{parentName:"p",href:"/ja/4.x/workspaces#workspace-ranges-workspace"},(0,l.kt)("inlineCode",{parentName:"a"},"workspace: range protocol")),"."),(0,l.kt)("h3",{id:"\u30ed\u30fc\u30ab\u30eb\u30d5\u30a1\u30a4\u30eb\u30b7\u30b9\u30c6\u30e0\u304b\u3089\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"},"\u30ed\u30fc\u30ab\u30eb\u30d5\u30a1\u30a4\u30eb\u30b7\u30b9\u30c6\u30e0\u304b\u3089\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"),(0,l.kt)("p",null,"\u30ed\u30fc\u30ab\u30eb\u30d5\u30a1\u30a4\u30eb\u30b7\u30b9\u30c6\u30e0\u304b\u3089\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u65b9\u6cd5\u306f2\u3064\u3042\u308a\u307e\u3059\u3002"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"tarball \u30d5\u30a1\u30a4\u30eb\u304b\u3089 (",(0,l.kt)("inlineCode",{parentName:"li"},".tar"),", ",(0,l.kt)("inlineCode",{parentName:"li"},".tar.gz"),", or ",(0,l.kt)("inlineCode",{parentName:"li"},".tgz"),")"),(0,l.kt)("li",{parentName:"ol"},"\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u304b\u3089")),(0,l.kt)("p",null,"Examples:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm add ./package.tgz\npnpm add ./some-directory\n")),(0,l.kt)("p",null,"When you install from a directory, a symlink will be created in the current project's ",(0,l.kt)("inlineCode",{parentName:"p"},"node_modules"),", so it is the same as running ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm link"),"."),(0,l.kt)("h3",{id:"install-from-remote-gzipped-tarball"},"Install from remote gzipped tarball"),(0,l.kt)("p",null,'The argument must start with "http://" or "https://".'),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm add https://github.com/indexzero/forever/tarball/v0.5.6\n")),(0,l.kt)("h3",{id:"git-\u30ea\u30dd\u30b8\u30c8\u30ea\u304b\u3089\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"},"Git \u30ea\u30dd\u30b8\u30c8\u30ea\u304b\u3089\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm add <git remote url>\n")),(0,l.kt)("p",null,"\u30db\u30b9\u30c8\u3055\u308c\u305f Git \u30d7\u30ed\u30d0\u30a4\u30c0\u304b\u3089\u30d1\u30c3\u30b1\u30fc\u30b8\u3092 Git \u3067\u30af\u30ed\u30fc\u30f3\u3057\u3066\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u307e\u3059\u3002"),(0,l.kt)("p",null,"\u6b21\u306e\u65b9\u6cd5\u3067 Git \u306b\u3088\u308a\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3067\u304d\u307e\u3059\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"master \u30d6\u30e9\u30f3\u30c1\u306e\u6700\u65b0\u306e\u30b3\u30df\u30c3\u30c8: ",(0,l.kt)("inlineCode",{parentName:"li"},"pnpm add kevva/is-positive")),(0,l.kt)("li",{parentName:"ul"},"\u7279\u5b9a\u306e\u30b3\u30df\u30c3\u30c8: ",(0,l.kt)("inlineCode",{parentName:"li"},"pnpm add kevva/is-positive#97edff6f525f192a3f83cea1944765f769ae2678")),(0,l.kt)("li",{parentName:"ul"},"\u7279\u5b9a\u306e\u30d6\u30e9\u30f3\u30c1: ",(0,l.kt)("inlineCode",{parentName:"li"},"pnpm add kevva/is-positive#master")),(0,l.kt)("li",{parentName:"ul"},"\u30d0\u30fc\u30b8\u30e7\u30f3\u7bc4\u56f2: ",(0,l.kt)("inlineCode",{parentName:"li"},"pnpm add kevva/is-positive#semver:^2.0.0"))),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("h3",{id:"--save-prod--p"},"--save-prod, -P"),(0,l.kt)("p",null,"This will install one or more packages in your ",(0,l.kt)("inlineCode",{parentName:"p"},"dependencies"),"."),(0,l.kt)("h3",{id:"--save-dev--d"},"--save-dev, -D"),(0,l.kt)("p",null,"Using ",(0,l.kt)("inlineCode",{parentName:"p"},"--save-dev")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"-D")," will install one or more packages in your ",(0,l.kt)("inlineCode",{parentName:"p"},"devDependencies"),"."),(0,l.kt)("h3",{id:"--save-optional--o"},"--save-optional, -O"),(0,l.kt)("p",null,"Using ",(0,l.kt)("inlineCode",{parentName:"p"},"--save-optional")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"-O")," will install one or more packages in your ",(0,l.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),"."),(0,l.kt)("h3",{id:"--save-exact--e"},"--save-exact, -E"),(0,l.kt)("p",null,"Saved dependencies will be configured with an exact version rather than using pnpm's default semver range operator."),(0,l.kt)("h3",{id:"--save-peer"},"--save-peer"),(0,l.kt)("p",null,"Added in: v3.2.0"),(0,l.kt)("p",null,"Using ",(0,l.kt)("inlineCode",{parentName:"p"},"--save-peer")," will add one or more packages to ",(0,l.kt)("inlineCode",{parentName:"p"},"peerDependencies")," and install them as dev dependencies."),(0,l.kt)("h3",{id:"--ignore-workspace-root-check--w"},"--ignore-workspace-root-check, -W"),(0,l.kt)("p",null,"\u8ffd\u52a0\u3055\u308c\u305f\u30d0\u30fc\u30b8\u30e7\u30f3\uff1av3.6.0"),(0,l.kt)("p",null,"Adding a new dependency to the root workspace package fails, unless the ",(0,l.kt)("inlineCode",{parentName:"p"},"--ignore-workspace-root-check")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"-W")," flag is used. \u4f8b: ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm add debug -W")),(0,l.kt)("h3",{id:"--global"},"--global"),(0,l.kt)("p",null,"\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u30b0\u30ed\u30fc\u30d0\u30eb\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u307e\u3059\u3002"),(0,l.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector>"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/ja/4.x/filtering"},"Read more about filtering.")),(0,l.kt)("h3",{id:"--workspace"},"--workspace"),(0,l.kt)("p",null,"Added in: v4.4.0"),(0,l.kt)("p",null,"\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u3067\u898b\u3064\u304b\u3063\u305f\u5834\u5408\u306b\u306e\u307f\u3001\u65b0\u3057\u3044\u4f9d\u5b58\u95a2\u4fc2\u3092\u8ffd\u52a0\u3057\u307e\u3059\u3002"))}k.isMDXComponent=!0},5659:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=n.p+"assets/images/pnpm-install-package-5a2978bb5d926b98518d1aa3d97b5122.svg"}}]);