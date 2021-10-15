"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[276],{9613:(e,r,n)=>{n.d(r,{Zo:()=>s,kt:()=>m});var t=n(9496);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=t.createContext({}),c=function(e){var r=t.useContext(p),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},s=function(e){var r=c(e.components);return t.createElement(p.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},u=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||i;return n?t.createElement(f,a(a({ref:r},s),{},{components:n})):t.createElement(f,a({ref:r},s))}));function m(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var l={};for(var p in r)hasOwnProperty.call(r,p)&&(l[p]=r[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4307:(e,r,n)=>{n.r(r),n.d(r,{frontMatter:()=>l,contentTitle:()=>p,metadata:()=>c,toc:()=>s,default:()=>u});var t=n(98),o=n(6862),i=(n(9496),n(9613)),a=["components"],l={id:"errors",title:"Codici di errore"},p=void 0,c={unversionedId:"errors",id:"version-6.x/errors",isDocsHomePage:!1,title:"Codici di errore",description:"ERRPNPMUNEXPECTED_STORE",source:"@site/i18n/it/docusaurus-plugin-content-docs/version-6.x/errors.md",sourceDirName:".",slug:"/errors",permalink:"/it/errors",editUrl:"https://crowdin.com/project/pnpm/it",tags:[],version:"6.x",frontMatter:{id:"errors",title:"Codici di errore"},sidebar:"version-6.x/docs",previous:{title:"Lavorare con Git",permalink:"/it/git"},next:{title:"Loghi",permalink:"/it/logos"}},s=[{value:"ERR_PNPM_UNEXPECTED_STORE",id:"err_pnpm_unexpected_store",children:[],level:2},{value:"ERR_PNPM_NO_MATCHING_VERSION_INSIDE_WORKSPACE",id:"err_pnpm_no_matching_version_inside_workspace",children:[],level:2}],d={toc:s};function u(e){var r=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,t.Z)({},d,n,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"err_pnpm_unexpected_store"},"ERR_PNPM_UNEXPECTED_STORE"),(0,i.kt)("p",null,"\xc8 presente una cartella dei moduli ed \xe8 collegata a una cartella dell'archivio diversa."),(0,i.kt)("p",null,"Se hai modificato intenzionalmente la cartella dell'archiviio, esegui ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm install")," e pnpm reinstaller\xe0 le dipendenze utilizzando il nuovo archivio."),(0,i.kt)("h2",{id:"err_pnpm_no_matching_version_inside_workspace"},"ERR_PNPM_NO_MATCHING_VERSION_INSIDE_WORKSPACE"),(0,i.kt)("p",null,"Un progetto ha una dipendenza dallo spazio di lavoro che non esiste nello spazio di lavoro."),(0,i.kt)("p",null,"Ad esempio, il pacchetto ",(0,i.kt)("inlineCode",{parentName:"p"},"foo")," ha ",(0,i.kt)("inlineCode",{parentName:"p"},"bar@1.0.0")," nelle dipendenze (",(0,i.kt)("inlineCode",{parentName:"p"},"dependencies"),"):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "foo",\n  "version": "1.0.0",\n  "dependencies": {\n    "bar": "workspace:1.0.0"\n  }\n}\n')),(0,i.kt)("p",null,"Tuttavia, c'\xe8 solo ",(0,i.kt)("inlineCode",{parentName:"p"},"bar@2.0.0")," nell'area di lavoro, quindi ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm install")," fallir\xe0."),(0,i.kt)("p",null,"Per correggere questo errore, tutte le dipendenze che utilizzano il ",(0,i.kt)("a",{parentName:"p",href:"/it/workspaces#workspace-protocol-workspace"},"protocollo dello spazio di lavoro")," devono essere aggiornate per utilizzare le versioni dei pacchetti presenti nell'area di lavoro. Questa operazione pu\xf2 essere eseguita manualmente o utilizzando il comando ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm -r update"),"."))}u.isMDXComponent=!0}}]);