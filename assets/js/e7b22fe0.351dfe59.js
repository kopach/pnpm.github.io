"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6996],{9613:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>h});var n=a(9496);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},p=Object.keys(e);for(n=0;n<p.length;n++)a=p[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)a=p[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),m=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=m(e.components);return n.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,p=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=m(a),h=r,k=u["".concat(o,".").concat(h)]||u[h]||c[h]||p;return a?n.createElement(k,i(i({ref:t},s),{},{components:a})):n.createElement(k,i({ref:t},s))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=a.length,i=new Array(p);i[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var m=2;m<p;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},23:(e,t,a)=>{a.r(t),a.d(t,{frontMatter:()=>l,contentTitle:()=>o,metadata:()=>m,toc:()=>s,default:()=>u});var n=a(98),r=a(6862),p=(a(9496),a(9613)),i=["components"],l={},o="Community",m={type:"mdx",permalink:"/community",source:"@site/src/pages/community.md"},s=[{value:"Articles",id:"articles",children:[],level:2},{value:"Podcasts",id:"podcasts",children:[],level:2},{value:"Videos",id:"videos",children:[],level:2},{value:"Packages",id:"packages",children:[],level:2},{value:"Toolings with pnpm support",id:"toolings-with-pnpm-support",children:[],level:2}],c={toc:s};function u(e){var t=e.components,a=(0,r.Z)(e,i);return(0,p.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"community"},"Community"),(0,p.kt)("h2",{id:"articles"},"Articles"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://medium.com/pnpm/why-should-we-use-pnpm-75ca4bfe7d93"},"Why should we use pnpm?")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://medium.com/pnpm/pnpms-strictness-helps-to-avoid-silly-bugs-9a15fb306308"},"pnpm\u2019s strictness helps to avoid silly bugs")),(0,p.kt)("li",{parentName:"ul"},"01-05-2017: ",(0,p.kt)("a",{parentName:"li",href:"https://hackernoon.com/understanding-differences-between-npm-yarn-and-pnpm-31bb6b0c87b3"},"Overview of differences between npm, yarn and pnpm")),(0,p.kt)("li",{parentName:"ul"},"12-06-2017: ",(0,p.kt)("a",{parentName:"li",href:"https://intoli.com/blog/node-package-manager-benchmarks/"},"Why I still don't use Yarn")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://rushjs.io/pages/maintainer/package_managers/"},"Rush ~ NPM vs PNPM vs Yarn")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://www.justanswer.com/blog/engineering/pnpm-on-justanswer-multi-package-repository"},"Trying pnpm on the JustAnswer multi-package repository")),(0,p.kt)("li",{parentName:"ul"},"27-03-2018: ",(0,p.kt)("a",{parentName:"li",href:"https://www.telerik.com/blogs/package-manager-rumble"},"Package Manager Rumble")),(0,p.kt)("li",{parentName:"ul"},"13-06-2018: ",(0,p.kt)("a",{parentName:"li",href:"http://www.andrewconnell.com/blog/npm-yarn-pnpm-which-package-manager-should-you-use-for-sharepoint-framework-projects"},"NPM, Yarn and PNPM: Which Package Manager Should You Use for SharePoint Framework Projects?")),(0,p.kt)("li",{parentName:"ul"},"02-02-2019: ",(0,p.kt)("a",{parentName:"li",href:"https://flaviocopes.com/pnpm/"},"What is pnpm?")),(0,p.kt)("li",{parentName:"ul"},"19-05-2019: ",(0,p.kt)("a",{parentName:"li",href:"https://smddzcy.com/posts/2019-05-19/npm-vs-yarn-vs-pnpm-package-manager-comparison"},"NPM vs Yarn vs PNPM: A Package Manager Comparison")),(0,p.kt)("li",{parentName:"ul"},"03-04-2019: ",(0,p.kt)("a",{parentName:"li",href:"https://dev.to/irreverentmike/i-reclaimed-10gb-of-disk-space-from-node-modules-oal"},"I reclaimed 10GB of disk space from node_modules")),(0,p.kt)("li",{parentName:"ul"},"10-02-2019: ",(0,p.kt)("a",{parentName:"li",href:"https://www.zeptobook.com/pnpm-fast-performant-replacement-of-npm/"},"PNPM-Fast Performant Replacement Of NPM")),(0,p.kt)("li",{parentName:"ul"},"28-12-2019: ",(0,p.kt)("a",{parentName:"li",href:"https://medium.com/@MattGoldwater/an-abbreviated-history-of-javascript-package-managers-f9797be7cf0e"},"An abbreviated history of JavaScript package managers")),(0,p.kt)("li",{parentName:"ul"},"19-03-2020: ",(0,p.kt)("a",{parentName:"li",href:"https://medium.com/better-programming/the-case-for-pnpm-over-npm-or-yarn-2b221607119"},"The Case for pnpm Over npm or Yarn")),(0,p.kt)("li",{parentName:"ul"},"01-06-2020: ",(0,p.kt)("a",{parentName:"li",href:"https://www.infoq.com/news/2020/06/pnpm-javascript-package-manager/?utm_campaign=infoq_content&utm_source=twitter&utm_medium=feed&utm_term=Web-Development"},"pnpm: a Space-Efficient JavaScript Package Manager")),(0,p.kt)("li",{parentName:"ul"},"09-06-2020: ",(0,p.kt)("a",{parentName:"li",href:"https://www.takeshape.io/articles/why-we-switched-from-yarn-to-pnpm/"},"Why we switched from Yarn to pnpm ")),(0,p.kt)("li",{parentName:"ul"},"09-06-2020: ",(0,p.kt)("a",{parentName:"li",href:"https://bytesafe.dev/posts/pnpm-package-manager/"},"Using pnpm with private registries in Bytesafe")),(0,p.kt)("li",{parentName:"ul"},"12-07-2020: ",(0,p.kt)("a",{parentName:"li",href:"https://blog.ghaiklor.com/2020/07/12/mono-repository-done-right/comment-page-1/"},"Mono repository done right!")),(0,p.kt)("li",{parentName:"ul"},"27-09-2020: ",(0,p.kt)("a",{parentName:"li",href:"https://medium.com/javascript-in-plain-english/what-is-pnpm-a-space-efficient-javascript-package-manager-2876b623b81d"},"pnpm: A Space-Efficient JavaScript Package Manager")),(0,p.kt)("li",{parentName:"ul"},"23-11-2020: ",(0,p.kt)("a",{parentName:"li",href:"https://blog.nrwl.io/cleaner-eslint-config-and-pnpm-compatibility-with-nx-10-4-3f6faa3cdd19"},"Cleaner ESLint Config and Pnpm Support and more with Nx 10.4")),(0,p.kt)("li",{parentName:"ul"},"22-03-2021: ",(0,p.kt)("a",{parentName:"li",href:"https://www.seancdavis.com/blog/use-pnpm-with-netlify/"},"How to Use PNPM in Netlify Build"))),(0,p.kt)("p",null,"In German \ud83c\udde9\ud83c\uddea:"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"10-10-2019: ",(0,p.kt)("a",{parentName:"li",href:"https://www.heise.de/developer/meldung/JavaScript-Paketmanager-pnpm-4-ueberarbeitet-die-Verzeichnisstruktur-4550827.html"},"JavaScript-Paketmanager pnpm 4 \xfcberarbeitet die Verzeichnisstruktur")),(0,p.kt)("li",{parentName:"ul"},"09-10-2019: ",(0,p.kt)("a",{parentName:"li",href:"https://entwickler.de/online/javascript/pnpm-4-0-package-manager-579910357.html"},"pnpm 4.0 ver\xf6ffentlicht: Eine Alternative zu npm mit \xfcberarbeitetem Konzept"))),(0,p.kt)("p",null,"In French \ud83c\uddeb\ud83c\uddf7:"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"19-03-2021: ",(0,p.kt)("a",{parentName:"li",href:"https://medium.com/nerds-malt/migration-pnpm-chez-malt-4464e5e8069c"},"Migration PNPM chez Malt")),(0,p.kt)("li",{parentName:"ul"},"01-06-2021: ",(0,p.kt)("a",{parentName:"li",href:"https://blog.yousign.io/posts/on-a-change-notre-gestionnaire-de-dependances-front?utm_source=twitter&utm_medium=social&utm_campaign=blogep"},"On a chang\xe9 notre gestionnaire de d\xe9pendances front"))),(0,p.kt)("h2",{id:"podcasts"},"Podcasts"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://anchor.fm/opensourcedeveloperpod/episodes/Package-Management-Showdown-e4fnss"},"Package Management Showdown"))),(0,p.kt)("h2",{id:"videos"},"Videos"),(0,p.kt)("p",null,"In English \ud83c\uddec\ud83c\udde7\ud83c\uddfa\ud83c\uddf8:"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://youtu.be/7L7nBtaGAlM"},"Why I stopped using NPM for PNPM And You should too!")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://www.spjeff.com/2019/08/20/video-reduce-spfx-node-modules-from-50000-files-to-1000/"},"Reduce SPFX Node Modules from 50,000 files to 1,000"))),(0,p.kt)("p",null,"In Russian \ud83c\uddf7\ud83c\uddfa:"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=rMb4OHL9tWI&feature=youtu.be&t=2m52s"},"About pnpm v1")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://youtu.be/TIeMLwH9SEU"},"Npm v5, Yarn \u0438\u043b\u0438 pnpm, \u0447\u0442\u043e \u043a\u0440\u0443\u0447\u0435?")," - ",(0,p.kt)("a",{parentName:"li",href:"http://piterjs.org/events/16/Mike_Bashurov.pdf?utm_source=twitter.com&utm_medium=social&utm_campaign=vystupaet-maykl-bashurov--npm-v5--yarn"},"slides"))),(0,p.kt)("p",null,"In French \ud83c\uddeb\ud83c\uddf7:"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://youtu.be/0hq38OWt0EM"},"Npm, Yarn et si la v\xe9rit\xe9 \xe9tait ailleurs?")," - ",(0,p.kt)("a",{parentName:"li",href:"https://speakerdeck.com/vincent_piard/npm-yarn-et-si-la-verite-etait-ailleurs"},"slides")," - by ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/lynchmaniac"},"@lynchmaniac"))),(0,p.kt)("p",null,"In Ukrainian \ud83c\uddfa\ud83c\udde6:"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"http://bit.ly/pnpm-pr-ukr-1"},"pnpm - \u043f\u0430\u043a\u0435\u0442\u043d\u0438\u0439 \u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440 \u0434\u043b\u044f Node.js")," - by ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/zkochan"},"@zkochan"))),(0,p.kt)("h2",{id:"packages"},"Packages"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://github.com/zkochan/which-pm"},"which-pm")," - Detects what package manager was used for installation"),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://github.com/Js-Brecht/gatsby-plugin-pnpm"},"gatsby-plugin-pnpm")," - Provides PNPM compatible module resolvers to Webpack for Gatsby")),(0,p.kt)("h2",{id:"toolings-with-pnpm-support"},"Toolings with pnpm support"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://rushjs.io/"},"rush")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://github.com/atlassian/changesets"},"changesets")," - A way to manage your versioning and changelogs with a focus on monorepos."),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://nx.dev/"},"Nx")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://renovateapp.com/"},"Renovate")," - Automated dependency updates, for humans"),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://github.com/JamieMason/syncpack"},"syncpack")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://github.com/redaxmedia/handpick"},"handpick")," - Handpick conditional dependencies like a boss"),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://kretes.dev/"},"Kretes")," - A programming environment for building full-stack apps in TypeScript."),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://github.com/frontsideair/yarnhook"},"yarnhook")," - yarnhook keeps your node_modules up-to-date when your yarn.lock, package-lock.json or shrinkwrap.yaml changes due to git operations like checkout, merge, rebase, pull etc.")))}u.isMDXComponent=!0}}]);