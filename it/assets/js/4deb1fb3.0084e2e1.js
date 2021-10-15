"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9458],{9613:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>v});var i=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=i.createContext({}),s=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),c=s(n),v=r,m=c["".concat(p,".").concat(v)]||c[v]||u[v]||o;return n?i.createElement(m,l(l({ref:t},d),{},{components:n})):i.createElement(m,l({ref:t},d))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=c;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:r,l[1]=a;for(var s=2;s<o;s++)l[s]=n[s];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},651:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>a,contentTitle:()=>p,metadata:()=>s,toc:()=>d,default:()=>c});var i=n(98),r=n(6862),o=(n(9496),n(9613)),l=["components"],a={id:"audit",title:"pnpm audit"},p=void 0,s={unversionedId:"cli/audit",id:"version-6.x/cli/audit",isDocsHomePage:!1,title:"pnpm audit",description:"Aggiunto nella versione: v4.3.0",source:"@site/i18n/it/docusaurus-plugin-content-docs/version-6.x/cli/audit.md",sourceDirName:"cli",slug:"/cli/audit",permalink:"/it/cli/audit",editUrl:"https://crowdin.com/project/pnpm/it",tags:[],version:"6.x",frontMatter:{id:"audit",title:"pnpm audit"},sidebar:"version-6.x/docs",previous:{title:"pnpm install-test",permalink:"/it/cli/install-test"},next:{title:"pnpm list",permalink:"/it/cli/list"}},d=[{value:"Opzioni",id:"opzioni",children:[{value:"--audit-livello &lt;gravit\xe0&gt;",id:"--audit-livello-gravit\xe0",children:[],level:3},{value:"--fix",id:"--fix",children:[],level:3},{value:"--json",id:"--json",children:[],level:3},{value:"--dev, -D",id:"--dev--d",children:[],level:3},{value:"--prod, -P",id:"--prod--p",children:[],level:3},{value:"--no-optional",id:"--no-optional",children:[],level:3},{value:"--ignore-registry-errors",id:"--ignore-registry-errors",children:[],level:3}],level:2}],u={toc:d};function c(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Aggiunto nella versione: v4.3.0"),(0,o.kt)("p",null,"Verifica la presenza di problemi di sicurezza noti con i pacchetti installati."),(0,o.kt)("p",null,"Se vengono rilevati problemi di sicurezza, prova ad aggiornare le tue dipendenze tramite ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm update"),". Se un semplice aggiornamento non risolve tutti i problemi, usa le ",(0,o.kt)("a",{parentName:"p",href:"/it/package_json#pnpmoverrides"},"sostituzioni")," per forzare versioni che non sono vulnerabili. Ad esempio, se ",(0,o.kt)("inlineCode",{parentName:"p"},"lodash@<2.1.0")," \xe8 vulnerabile, usa questo override per forzare ",(0,o.kt)("inlineCode",{parentName:"p"},"lodash@^2.1.0"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="package.json"',title:'"package.json"'},'{\n    "pnpm": {\n        "overrides": {\n            "lodash@<2.1.0": "^2.1.0"\n        }\n    }\n}\n')),(0,o.kt)("p",null,"In alternativa, esegui ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm audit --fix"),"."),(0,o.kt)("h2",{id:"opzioni"},"Opzioni"),(0,o.kt)("h3",{id:"--audit-livello-gravit\xe0"},"--audit-livello ","<","gravit\xe0",">"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Tipo: ",(0,o.kt)("strong",{parentName:"li"},"low"),", ",(0,o.kt)("strong",{parentName:"li"},"moderate"),", ",(0,o.kt)("strong",{parentName:"li"},"high"),", ",(0,o.kt)("strong",{parentName:"li"},"critical")),(0,o.kt)("li",{parentName:"ul"},"Predefinito: ",(0,o.kt)("strong",{parentName:"li"},"low"))),(0,o.kt)("p",null,"Stampa solo avvisi con gravit\xe0 maggiore o uguale a ",(0,o.kt)("inlineCode",{parentName:"p"},"<gravit\xe0>"),"."),(0,o.kt)("h3",{id:"--fix"},"--fix"),(0,o.kt)("p",null,"Aggiunto nella versione: v6.11.0"),(0,o.kt)("p",null,"Aggiungi sostituzioni al ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," per forzare versioni non vulnerabili delle dipendenze."),(0,o.kt)("h3",{id:"--json"},"--json"),(0,o.kt)("p",null,"Rapporto di audit in uscita in formato JSON."),(0,o.kt)("h3",{id:"--dev--d"},"--dev, -D"),(0,o.kt)("p",null,"Controlla solo le dipendenze di sviluppo."),(0,o.kt)("h3",{id:"--prod--p"},"--prod, -P"),(0,o.kt)("p",null,"Controlla solo le dipendenze di produzione."),(0,o.kt)("h3",{id:"--no-optional"},"--no-optional"),(0,o.kt)("p",null,"Non controllare le dipendenze opzionali (",(0,o.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),")."),(0,o.kt)("h3",{id:"--ignore-registry-errors"},"--ignore-registry-errors"),(0,o.kt)("p",null,"Aggiunto nella versione: v6.7.1"),(0,o.kt)("p",null,"Se il registro risponde con un codice di stato diverso da 200, il processo dovrebbe terminare con 0. Quindi il processo fallir\xe0 solo se il registro risponde effettivamente con successo con le vulnerabilit\xe0 trovate."))}c.isMDXComponent=!0}}]);