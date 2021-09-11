"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7093],{9613:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>k});var i=t(9496);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=i.createContext({}),s=function(e){var n=i.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=s(e.components);return i.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),m=s(t),k=a,u=m["".concat(p,".").concat(k)]||m[k]||c[k]||l;return t?i.createElement(u,o(o({ref:n},d),{},{components:t})):i.createElement(u,o({ref:n},d))}));function k(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=m;var r={};for(var p in n)hasOwnProperty.call(n,p)&&(r[p]=n[p]);r.originalType=e,r.mdxType="string"==typeof e?e:a,o[1]=r;for(var s=2;s<l;s++)o[s]=t[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7378:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>r,contentTitle:()=>p,metadata:()=>s,toc:()=>d,default:()=>m});var i=t(98),a=t(6862),l=(t(9496),t(9613)),o=["components"],r={id:"pnpmfile",title:"pnpmfile.js"},p=void 0,s={unversionedId:"pnpmfile",id:"version-5.x/pnpmfile",isDocsHomePage:!1,title:"pnpmfile.js",description:"pnpm ti consente di agganciarti direttamente al processo di installazione tramite funzioni speciali (hook). Hooks can be declared in a file called pnpmfile.js.",source:"@site/i18n/it/docusaurus-plugin-content-docs/version-5.x/pnpmfile.md",sourceDirName:".",slug:"/pnpmfile",permalink:"/it/5.x/pnpmfile",editUrl:"https://crowdin.com/project/pnpm/it",tags:[],version:"5.x",frontMatter:{id:"pnpmfile",title:"pnpmfile.js"},sidebar:"version-5.x/docs",previous:{title:"pnpm-workspace.yaml",permalink:"/it/5.x/pnpm-workspace_yaml"},next:{title:"Workspace",permalink:"/it/5.x/workspaces"}},d=[{value:"Hooks",id:"hooks",children:[{value:"TL;DR",id:"tldr",children:[]},{value:"<code>hooks.readPackage(pkg, context): pkg</code>",id:"hooksreadpackagepkg-context-pkg",children:[]},{value:"<code>hooks.afterAllResolved(lockfile, context): lockfile</code>",id:"hooksafterallresolvedlockfile-context-lockfile",children:[]}]},{value:"Configurazione correlata",id:"configurazione-correlata",children:[{value:"ignore-pnpmfile",id:"ignore-pnpmfile",children:[]},{value:"pnpmfile",id:"pnpmfile",children:[]},{value:"global-pnpmfile",id:"global-pnpmfile",children:[]}]}],c={toc:d};function m(e){var n=e.components,t=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,i.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"pnpm ti consente di agganciarti direttamente al processo di installazione tramite funzioni speciali (hook). Hooks can be declared in a file called ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpmfile.js"),"."),(0,l.kt)("p",null,"By default, ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpmfile.js")," should be located in the same directory as the lockfile. For instance, in a ",(0,l.kt)("a",{parentName:"p",href:"/it/5.x/workspaces"},"workspace")," with a shared lockfile, ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpmfile.js")," should be in the root of the monorepo."),(0,l.kt)("h2",{id:"hooks"},"Hooks"),(0,l.kt)("h3",{id:"tldr"},"TL;DR"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Funzione hook"),(0,l.kt)("th",{parentName:"tr",align:null},"Processo"),(0,l.kt)("th",{parentName:"tr",align:null},"Utilizzi"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"hooks.readPackage(pkg, context): pkg")),(0,l.kt)("td",{parentName:"tr",align:null},"Chiamato dopo che pnpm ha analizzato il manifesto del pacchetto della dipendenza"),(0,l.kt)("td",{parentName:"tr",align:null},"Ti permette di mutare il ",(0,l.kt)("inlineCode",{parentName:"td"},"package.json")," di una dipendenza")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"hooks.afterAllResolved(lockfile, context): lockfile")),(0,l.kt)("td",{parentName:"tr",align:null},"Chiamato dopo che le dipendenze sono state risolte."),(0,l.kt)("td",{parentName:"tr",align:null},"Consente di modificare il file di blocco.")))),(0,l.kt)("h3",{id:"hooksreadpackagepkg-context-pkg"},(0,l.kt)("inlineCode",{parentName:"h3"},"hooks.readPackage(pkg, context): pkg")),(0,l.kt)("p",null,"Consente di modificare ",(0,l.kt)("inlineCode",{parentName:"p"},"package.json")," di una dipendenza dopo l'analisi e prima della risoluzione. Queste mutazioni non vengono salvate nel filesystem, tuttavia, interessano ci\xf2 viene risolto nel file di blocco e quindi ci\xf2 che viene installato."),(0,l.kt)("p",null,"Nota che dovrai eliminare ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm-lock.yaml")," se hai gi\xe0 risolto la dipendenza che desideri modificare."),(0,l.kt)("h4",{id:"argomenti"},"Argomenti"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"pkg")," - Il manifesto del pacchetto. La risposta dal registro o il contenuto di ",(0,l.kt)("inlineCode",{parentName:"li"},"package.json"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"contesto")," - Oggetto contesto per il passaggio. Il metodo ",(0,l.kt)("inlineCode",{parentName:"li"},"#log(msg)")," consente di utilizzare un registro di debug per il passaggio.")),(0,l.kt)("h4",{id:"utilizzo"},"Utilizzo"),(0,l.kt)("p",null,"Example ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpmfile.js")," (changes the dependencies of a dependency):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"function readPackage(pkg, context) {\n  // Override the manifest of foo@1.x after downloading it from the registry\n  if (pkg.name === 'foo' && pkg.version.startsWith('1.')) {\n    // Replace bar@x.x.x with bar@2.0.0\n    pkg.dependencies = {\n      ...pkg.dependencies,\n      bar: '^2.0.0'\n    }\n    context.log('bar@1 => bar@2 in dependencies of foo')\n  }\n\n  // This will change any packages using baz@x.x.x to use baz@1.2.3\n  if (pkg.dependencies.baz) {\n    pkg.dependencies.baz = '1.2.3';\n  }\n\n  return pkg\n}\n\nmodule.exports = {\n  hooks: {\n    readPackage\n  }\n}\n")),(0,l.kt)("h4",{id:"limitazioni-conosciute"},"Limitazioni conosciute"),(0,l.kt)("p",null,"Rimozione del campo ",(0,l.kt)("inlineCode",{parentName:"p"},"scripts")," da una dipendenza del manifesto tramite ",(0,l.kt)("inlineCode",{parentName:"p"},"readPackage")," sar\xe0 impedir\xe0 a pnpm di costruire la dipendenza. Quando si crea una dipendenza, pnpm legge il ",(0,l.kt)("inlineCode",{parentName:"p"},"package.json")," del pacchetto dall'archivio del pacchetto, che non \xe8 interessato dall'hook. Per ignorare la compilazione di un pacchetto, utilizzare il campo ",(0,l.kt)("a",{parentName:"p",href:"/it/5.x/package_json#pnpmneverbuiltdependencies"},"pnpm.neverBuiltDependencies"),"."),(0,l.kt)("h3",{id:"hooksafterallresolvedlockfile-context-lockfile"},(0,l.kt)("inlineCode",{parentName:"h3"},"hooks.afterAllResolved(lockfile, context): lockfile")),(0,l.kt)("p",null,"Aggiunto nella versione: v1.41.0"),(0,l.kt)("p",null,"Consente di modificare l'output del file di blocco prima che venga serializzato."),(0,l.kt)("h4",{id:"argomenti-1"},"Argomenti"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"lockfile")," - L'oggetto risoluzioni lockfile serializzato su ",(0,l.kt)("inlineCode",{parentName:"li"},"pnpm-lock.yaml"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"contesto")," - Oggetto contesto per il passaggio. Il metodo ",(0,l.kt)("inlineCode",{parentName:"li"},"#log(msg)")," consente di utilizzare un registro di debug per il passaggio.")),(0,l.kt)("h4",{id:"esempio-di-utilizzo"},"Esempio di utilizzo"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="pnpmfile.js"',title:'"pnpmfile.js"'},"function afterAllResolved(lockfile, context) {\n  // ...\n  return lockfile\n}\n\nmodule.exports = {\n  hooks: {\n    afterAllResolved\n  }\n}\n")),(0,l.kt)("h4",{id:"limitazioni-note"},"Limitazioni note"),(0,l.kt)("p",null,"Non ce ne sono: tutto ci\xf2 che pu\xf2 essere fatto con il file di blocco pu\xf2 essere modificato tramite questa funzione e puoi persino estendere la funzionalit\xe0 del file di blocco."),(0,l.kt)("h2",{id:"configurazione-correlata"},"Configurazione correlata"),(0,l.kt)("h3",{id:"ignore-pnpmfile"},"ignore-pnpmfile"),(0,l.kt)("p",null,"Added in: v1.25.0"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Predefinito: ",(0,l.kt)("strong",{parentName:"li"},"false")),(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("strong",{parentName:"li"},"Boolean"))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"pnpmfile.js")," will be ignored. Utile insieme a ",(0,l.kt)("inlineCode",{parentName:"p"},"--ignore-script")," quando si si desidera assicurarsi che nessuno script venga eseguito durante l'installazione."),(0,l.kt)("h3",{id:"pnpmfile"},"pnpmfile"),(0,l.kt)("p",null,"Aggiunto nella versione: v1.39.0"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Default: ",(0,l.kt)("strong",{parentName:"li"},"pnpmfile.js")),(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("strong",{parentName:"li"},"path")),(0,l.kt)("li",{parentName:"ul"},"Example: ",(0,l.kt)("strong",{parentName:"li"},".pnpm/pnpmfile.js"))),(0,l.kt)("p",null,"La posizione del file pnpm locale."),(0,l.kt)("h3",{id:"global-pnpmfile"},"global-pnpmfile"),(0,l.kt)("p",null,"Aggiunto nella versione: v1.39.0"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Default: ",(0,l.kt)("strong",{parentName:"li"},"null")),(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("strong",{parentName:"li"},"path")),(0,l.kt)("li",{parentName:"ul"},"Example: ",(0,l.kt)("strong",{parentName:"li"},"~/.pnpm/global_pnpmfile.js"))),(0,l.kt)("p",null,"La posizione di un file pnpm globale. Un file pnpm globale viene utilizzato da tutti i progetti durante l'installazione."),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Si consiglia di utilizzare file pnpm locali. Usa un pnpmfile globale solo se usi pnpm su progetti che non usano pnpm come gestore di pacchetti principale."))))}m.isMDXComponent=!0}}]);