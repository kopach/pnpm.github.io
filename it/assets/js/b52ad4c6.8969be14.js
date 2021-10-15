"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7845],{9613:(e,t,i)=>{i.d(t,{Zo:()=>s,kt:()=>m});var n=i(9496);function l(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){l(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function r(e,t){if(null==e)return{};var i,n,l=function(e,t){if(null==e)return{};var i,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(l[i]=e[i]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(l[i]=e[i])}return l}var p=n.createContext({}),c=function(e){var t=n.useContext(p),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var i=e.components,l=e.mdxType,o=e.originalType,p=e.parentName,s=r(e,["components","mdxType","originalType","parentName"]),u=c(i),m=l,g=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return i?n.createElement(g,a(a({ref:t},s),{},{components:i})):n.createElement(g,a({ref:t},s))}));function m(e,t){var i=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=i.length,a=new Array(o);a[0]=u;var r={};for(var p in t)hasOwnProperty.call(t,p)&&(r[p]=t[p]);r.originalType=e,r.mdxType="string"==typeof e?e:l,a[1]=r;for(var c=2;c<o;c++)a[c]=i[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,i)}u.displayName="MDXCreateElement"},8642:(e,t,i)=>{i.r(t),i.d(t,{frontMatter:()=>r,contentTitle:()=>p,metadata:()=>c,toc:()=>s,default:()=>u});var n=i(98),l=i(6862),o=(i(9496),i(9613)),a=["components"],r={id:"filtering",title:"Filtraggio"},p=void 0,c={unversionedId:"filtering",id:"version-6.x/filtering",isDocsHomePage:!1,title:"Filtraggio",description:"Aggiunto nella versione: v2.13.0",source:"@site/i18n/it/docusaurus-plugin-content-docs/version-6.x/filtering.md",sourceDirName:".",slug:"/filtering",permalink:"/it/filtering",editUrl:"https://crowdin.com/project/pnpm/it",tags:[],version:"6.x",frontMatter:{id:"filtering",title:"Filtraggio"},sidebar:"version-6.x/docs",previous:{title:"Configurazione",permalink:"/it/configuring"},next:{title:"pnpm add <pkg>",permalink:"/it/cli/add"}},s=[{value:"--filter &lt;nome_pacchetto&gt;",id:"--filter-nome_pacchetto",children:[],level:2},{value:"--filter &lt;nome_pacchetto&gt;...",id:"--filter-nome_pacchetto-1",children:[],level:2},{value:"--filter &lt;nome_pacchetto&gt;^...",id:"--filter-nome_pacchetto-2",children:[],level:2},{value:"--filter ...&lt;nome_pacchetto&gt;",id:"--filter-nome_pacchetto-3",children:[],level:2},{value:"--filter &quot;...^&lt;nome_pacchetto&gt;&quot;",id:"--filter-nome_pacchetto-4",children:[],level:2},{value:"--filter ./&lt;cartella&gt;",id:"--filter-cartella",children:[],level:2},{value:"--filter {&lt;cartella&gt;}",id:"--filter-cartella-1",children:[],level:2},{value:"--filter &quot;<dopo>&quot;",id:"--filter-dopo",children:[],level:2},{value:"Molteplicit\xe0",id:"molteplicit\xe0",children:[],level:2},{value:"Esclusione",id:"esclusione",children:[],level:2},{value:"--filter-prod &lt;modello_filtro&gt;",id:"--filter-prod-modello_filtro",children:[],level:2},{value:"--test-pattern &lt;glob&gt;",id:"--test-pattern-glob",children:[],level:2},{value:"--changed-files-ignore-pattern &lt;glob&gt;",id:"--changed-files-ignore-pattern-glob",children:[],level:2}],d={toc:s};function u(e){var t=e.components,i=(0,l.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Aggiunto nella versione: v2.13.0"),(0,o.kt)("p",null,"Il filtraggio consente di limitare i comandi a specifici sottoinsiemi di pacchetti."),(0,o.kt)("p",null,"pnpm supporta una ricca sintassi di selettori per la selezione dei pacchetti per nome o per relazione."),(0,o.kt)("p",null,"I selettori possono essere specificati tramite il flag ",(0,o.kt)("inlineCode",{parentName:"p"},"--filter"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm <comando> --filter <selettore_pacchetto>\n")),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("a",{parentName:"p",href:"https://medium.com/pnpm/pnpm-vs-lerna-filtering-in-a-multi-package-repository-1f68bc644d6a"},"Un articolo che confronta il filtraggio di Lerna con pnpm")))),(0,o.kt)("h2",{id:"--filter-nome_pacchetto"},"--filter ","<","nome_pacchetto>"),(0,o.kt)("p",null,"Aggiunto nella versione: v2.13.0"),(0,o.kt)("p",null,"Per selezionare un pacchetto esatto, \xe8 sufficiente specificare il suo nome (",(0,o.kt)("inlineCode",{parentName:"p"},"@scope/pkg"),") o utilizzare un modello per selezionare un insieme di pacchetti (",(0,o.kt)("inlineCode",{parentName:"p"},"@scope/*"),")."),(0,o.kt)("p",null,"Esempi:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm test --filter "@babel/core"\npnpm test --filter "@babel/*"\npnpm test --filter "*core"\n')),(0,o.kt)("h2",{id:"--filter-nome_pacchetto-1"},"--filter ","<","nome_pacchetto>..."),(0,o.kt)("p",null,"Aggiunto nella versione: v2.13.0"),(0,o.kt)("p",null,"Per selezionare un pacchetto e le sue dipendenze (dirette e non dirette), aggiungi il suffisso del nome del pacchetto con i puntini di sospensione: ",(0,o.kt)("inlineCode",{parentName:"p"},"<package_name>..."),". Ad esempio, il prossimo comando eseguir\xe0 i test di ",(0,o.kt)("inlineCode",{parentName:"p"},"foo")," e tutte le sue dipendenze:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm test --filter foo...\n")),(0,o.kt)("p",null,"Puoi usare uno schema per selezionare un set di pacchetti radice:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm test --filter "@babel/preset-*..."\n')),(0,o.kt)("h2",{id:"--filter-nome_pacchetto-2"},"--filter ","<","nome_pacchetto>^..."),(0,o.kt)("p",null,"Aggiunto nella versione: v4.4.0"),(0,o.kt)("p",null,"Per selezionare SOLO le dipendenze di un pacchetto (sia diretto che non diretto), aggiungi al nome il suffisso con i suddetti puntini di sospensione preceduti da un gallone. Ad esempio, il prossimo comando eseguir\xe0 i test per tutte le dipendenze di ",(0,o.kt)("inlineCode",{parentName:"p"},"foo"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm test --filter "foo^..."\n')),(0,o.kt)("h2",{id:"--filter-nome_pacchetto-3"},"--filter ...","<","nome_pacchetto>"),(0,o.kt)("p",null,"Aggiunto nella versione: v2.14.0"),(0,o.kt)("p",null,"Per selezionare un pacchetto e i suoi pacchetti dipendenti (dirette e non dirette), aggiungi il prefisso del nome del pacchetto con i puntini di sospensione: ",(0,o.kt)("inlineCode",{parentName:"p"},"<package_name>..."),". Ad esempio, questo eseguir\xe0 i test di ",(0,o.kt)("inlineCode",{parentName:"p"},"foo")," e tutti i pacchetti dipendenti da esso:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm test --filter ...foo\n")),(0,o.kt)("h2",{id:"--filter-nome_pacchetto-4"},'--filter "...^',"<",'nome_pacchetto>"'),(0,o.kt)("p",null,"Aggiunto nella versione: v4.4.0"),(0,o.kt)("p",null,"Per selezionare SOLO i dipendenti di un pacchetto (sia diretti che non diretti), prefissare il nome del pacchetto con un'ellissi seguita da un gallone. Ad esempio, questo eseguir\xe0 i test per tutti i pacchetti dipendenti da ",(0,o.kt)("inlineCode",{parentName:"p"},"foo"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},'pnpm test --filter "...^foo"\n')),(0,o.kt)("h2",{id:"--filter-cartella"},"--filter ./","<","cartella>"),(0,o.kt)("p",null,"Aggiunto nella versione: v2.15.0"),(0,o.kt)("p",null,"Per selezionare solo i pacchetti nella cartella specificata, \xe8 possibile specificare qualsiasi percorso relativo, tipicamente in formato POSIX."),(0,o.kt)("h2",{id:"--filter-cartella-1"},"--filter {","<","cartella>}"),(0,o.kt)("p",null,"Aggiunto nella versione: v4.7.0"),(0,o.kt)("p",null,"Include tutti i progetti che si trovano nella cartella specificata."),(0,o.kt)("p",null,"Pu\xf2 essere utilizzato con gli operatori puntini di sospensione e gallone per selezionare anche dipendenti/dipendenze:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm <cmd> --filter ...{<cartella>}\npnpm <cmd> --filter {<cartella>}...\npnpm <cmd> --filter ...{<cartella>}...\n")),(0,o.kt)("p",null,"Pu\xf2 anche essere combinato con ",(0,o.kt)("inlineCode",{parentName:"p"},"[<dopo>]"),". Ad esempio, per selezionare tutti i progetti modificati all'interno di una cartella:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm <cmd> --filter "{pacchetti}[origin/master]"\npnpm <cmd> --filter "...{pacchetti}[origin/master]"\npnpm <cmd> --filter "{pacchetti}[origin/master]..."\npnpm <cmd> --filter "...{pacchetti}[origin/master]..."\n')),(0,o.kt)("p",null,"Oppure puoi selezionare tutti i pacchetti da una cartella con nomi che corrispondono al modello:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},'pnpm <cmd> --filter "@babel/*{componenti}"\npnpm <cmd> --filter "@babel/*{componenti}[origine/master]"\npnpm <cmd> --filter "...@babel/*{componenti}[origine/master] "\n')),(0,o.kt)("h2",{id:"--filter-dopo"},'--filter "',"[<","dopo>]",'"'),(0,o.kt)("p",null,"Aggiunto nella versione: v4.6.0"),(0,o.kt)("p",null,"Seleziona tutti i pacchetti modificati dopo il commit/branch specificato. Pu\xf2 avere il suffisso o il prefisso ",(0,o.kt)("inlineCode",{parentName:"p"},"...")," per includere dipendenze/dipendenti."),(0,o.kt)("p",null,"Ad esempio, il comando successivo eseguir\xe0 i test in tutti i pacchetti modificati dopo ",(0,o.kt)("inlineCode",{parentName:"p"},"master")," e su tutti i pacchetti dipendenti:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm test --filter "...[origin/master]"\n')),(0,o.kt)("h2",{id:"molteplicit\xe0"},"Molteplicit\xe0"),(0,o.kt)("p",null,"Quando i pacchetti vengono filtrati, viene preso ogni pacchetto che corrisponde ad almeno uno dei selettori. Puoi usare tutti i filtri che vuoi:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm test --filter ...foo --filter bar --filter baz...\n")),(0,o.kt)("h2",{id:"esclusione"},"Esclusione"),(0,o.kt)("p",null,"Aggiunto nella versione: v5.8.0"),(0,o.kt)("p",null,'Tutti i selettori di filtro possono funzionare come operatori di esclusione quando hanno uno "!" iniziale. In zsh (e possibilmente in altre shell), dovrebbe essere effettuato l\'escaping di "!": ',(0,o.kt)("inlineCode",{parentName:"p"},"\\!"),"."),(0,o.kt)("p",null,"Ad esempio, questo eseguir\xe0 un comando in tutti i progetti tranne ",(0,o.kt)("inlineCode",{parentName:"p"},"foo"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm <cmd> --filter=!foo\n")),(0,o.kt)("p",null,"E questo eseguir\xe0 un comando in tutti i progetti che non si trovano nella cartella ",(0,o.kt)("inlineCode",{parentName:"p"},"lib"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm <cmd> --filter=!./lib\n")),(0,o.kt)("h2",{id:"--filter-prod-modello_filtro"},"--filter-prod ","<","modello_filtro>"),(0,o.kt)("p",null,"Aggiunto nella versione: v6.2.0"),(0,o.kt)("p",null,"Agisce allo stesso modo di ",(0,o.kt)("inlineCode",{parentName:"p"},"--filter")," ma omette le dipendenze di sviluppo (",(0,o.kt)("inlineCode",{parentName:"p"},"devDependencies"),") quando si selezionano i progetti di dipendenza dallo spazio di lavoro."),(0,o.kt)("h2",{id:"--test-pattern-glob"},"--test-pattern ","<","glob>"),(0,o.kt)("p",null,"Aggiunto nella versione: v5.14.0"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"test-pattern")," consente di rilevare se i file modificati sono correlati ai test. Se lo sono, i pacchetti dipendenti di tali pacchetti modificati non sono inclusi."),(0,o.kt)("p",null,'Questa opzione \xe8 utile con il filtro "modificato da". Ad esempio, il prossimo comando eseguir\xe0 i test in tutti i pacchetti modificati e, se le modifiche sono nel del pacchetto, i test verranno eseguiti anche nei pacchetti dipendenti:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm --filter="...[origin/master]" --test-pattern="test/*" test\n')),(0,o.kt)("h2",{id:"--changed-files-ignore-pattern-glob"},"--changed-files-ignore-pattern ","<","glob>"),(0,o.kt)("p",null,"Aggiunto nella versione: v6.16.0"),(0,o.kt)("p",null,"Consente di ignorare i file modificati dai modelli glob durante il filtraggio per i progetti modificati dal commit/ramo specificato."),(0,o.kt)("p",null,"Esempio di utilizzo:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm --filter="...[origin/master]" --changed-files-ignore-pattern="**/README.md" run build\n')))}u.isMDXComponent=!0}}]);