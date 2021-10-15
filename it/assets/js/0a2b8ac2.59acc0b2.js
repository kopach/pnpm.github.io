"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3674],{2549:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"Opzioni di configurazione di Node-Modules con pnpm","metadata":{"permalink":"/it/blog/2020/10/17/node-modules-configuration-options-with-pnpm","editUrl":"https://crowdin.com/project/pnpm/it","source":"@site/i18n/it/docusaurus-plugin-content-blog/2020-10-17-node-modules-configuration-options-with-pnpm.md","title":"Opzioni di configurazione di Node-Modules con pnpm","description":"Esistono molti modi per creare una cartella nodemodules. Il tuo obiettivo deve essere quello di creare la pi\xf9 rigorosa, ma se ci\xf2 non \xe8 possibile, ci sono anche opzioni per creare una cartella nodemodules sciolta.","date":"2020-10-17T00:00:00.000Z","formattedDate":"17 ottobre 2020","tags":[],"readingTime":1.855,"truncated":true,"authors":[{"name":"Zoltan Kochan","url":"http://twitter.com/zoltankochan","imageURL":"https://pbs.twimg.com/profile_images/1143606083262586880/EW2GCFKK_400x400.jpg"}],"nextItem":{"title":"La node_modules flat non \xe8 l\'unico modo","permalink":"/it/blog/2020/05/27/flat-node-modules-is-not-the-only-way"}},"content":"Esistono molti modi per creare una cartella node_modules. Il tuo obiettivo deve essere quello di creare la pi\xf9 rigorosa, ma se ci\xf2 non \xe8 possibile, ci sono anche opzioni per creare una cartella node_modules sciolta.\\n\\n\x3c!--truncate--\x3e\\n\\n## Configurazione predefinita\\n\\nPer impostazione predefinita, pnpm v5 crea una cartella node_modules semi-rigorosa. Semi-rigorosa significa che la tua applicazione sar\xe0 in grado di utilizzare solo i pacchetti che sono stati aggiunti come dipendenze in `package.json` (con alcune eccezioni). Tuttavia, le tue dipendenze saranno in grado di accedere a qualsiasi pacchetto.\\n\\nLa configurazione predefinita \xe8 simile a questa:\\n\\n```ini\\n; Tutti i pacchetti vengono installati in node_modules/.pnpm/node_modules\\nhoist-pattern[]=*\\n\\n; Tutti i tipi vengono installati alla radice per rendere felice TypeScript\\npublic-hoist-pattern[]=*types*\\n\\n; Tutti i pacchetti relativi a ESLint vengono installati alla radice anch\'essi\\npublic-hoist-pattern[]=*eslint*\\n```\\n\\n## Plug\'n\'Play. La configurazione pi\xf9 rigorosa\\n\\npnpm supporta il [Plug\'n\'Play di Yarn](https://yarnpkg.com/features/pnp) dalla versione v5.9. Con PnP, sia la tua applicazione che le dipendenze della tua applicazione avranno accesso solo alle loro dipendenze dichiarate. Questo \xe8 ancora pi\xf9 rigoroso dell\'impostazione `hoist=false` perch\xe9 all\'interno di un monorepo, la tua applicazione non sar\xe0 in grado di accedere nemmeno alle dipendenze del progetto root.\\n\\nPer utilizzare Plug\'n\'Play, imposta queste impostazioni:\\n\\n```ini\\nnode-linker=pnp\\nsymlink=false\\n```\\n\\n## Una cartella di moduli rigorosa e tradizionale\\n\\nSe non sei ancora pronto per utilizzare PnP, puoi comunque essere rigoroso e consentire solo ai pacchetti di accedere alle proprie dipendenze impostando la configurazione dell\'hoist su false:\\n\\n```ini\\nhoist=false\\n```\\n\\nTuttavia, se alcune delle tue dipendenze stanno tentando di accedere a pacchetti che non hanno nelle dipendenze, hai due opzioni:\\n\\n1. Crea un `pnpmfile.js` e usa un [hook](/pnpmfile) per aggiungere la dipendenza mancante al manifest del pacchetto.\\n\\n2. Aggiungi un modello all\'impostazione `hoist-pattern`. Ad esempio, se il modulo non trovato \xe8 `babel-core`, aggiungi la seguente impostazione a `.npmrc`:\\n\\n    ```ini\\n    hoist-pattern[]=babel-core\\n    ```\\n\\n## Il caso peggiore - installazione alla radice\\n\\nAlcuni strumenti potrebbero non funzionare anche con la configurazione predefinita di pnpm, che installa tutto alla radice dell\'archivio virtuale e alcuni pacchetti alla radice. In questo caso, puoi installare tutto o un sottoinsieme di dipendenze alla radice della cartella dei moduli.\\n\\nInstalla tutto alla radice di node_modules:\\n\\n```ini\\nshamefully-hoist=true\\n```\\n\\nInstalla solo i pacchetti che corrispondono a un modello:\\n\\n```ini\\npublic-hoist-pattern[]=babel-*\\n```"},{"id":"La node_modules flat non \xe8 l\'unico modo","metadata":{"permalink":"/it/blog/2020/05/27/flat-node-modules-is-not-the-only-way","editUrl":"https://crowdin.com/project/pnpm/it","source":"@site/i18n/it/docusaurus-plugin-content-blog/2020-05-27-flat-node-modules-is-not-the-only-way.md","title":"La node_modules flat non \xe8 l\'unico modo","description":"I nuovi utenti di pnpm mi chiedono spesso della strana struttura di node_modules che crea pnpm. Perch\xe9 non \xe8 piatta? Dove sono tutte le dipendenze secondarie?","date":"2020-05-27T00:00:00.000Z","formattedDate":"27 maggio 2020","tags":[],"readingTime":2.73,"truncated":true,"authors":[{"name":"Zoltan Kochan","url":"http://twitter.com/zoltankochan","imageURL":"https://pbs.twimg.com/profile_images/1143606083262586880/EW2GCFKK_400x400.jpg"}],"prevItem":{"title":"Opzioni di configurazione di Node-Modules con pnpm","permalink":"/it/blog/2020/10/17/node-modules-configuration-options-with-pnpm"}},"content":"I nuovi utenti di pnpm mi chiedono spesso della strana struttura di `node_modules` che crea pnpm. Perch\xe9 non \xe8 piatta? Dove sono tutte le dipendenze secondarie?\\n\\n\x3c!--truncate--\x3e\\n\\n> Presumo che i lettori dell\'articolo abbiano gi\xe0 familiarit\xe0 con la cartella `node_modules` piatta creata da npm e Yarn. Se non capisci perch\xe9 npm 3 ha dovuto iniziare a utilizzare `node_modules` flat nella v3, puoi trovare un po\' di preistoria in [Perch\xe9 dovremmo usare pnpm?](https://www.kochan.io/nodejs/why-should-we-use-pnpm.html).\\n\\nPerch\xe9 allora `node_modules` di pnpm \xe8 insolito? Creiamo due cartelle ed eseguiamo `npm add express` in una di esse e `pnpm add express` nell\'altra. Ecco la parte superiore di ci\xf2 che si ottiene in `node_modules` della prima cartella:\\n\\n```text\\n.bin\\naccepts\\narray-flatten\\nbody-parser\\nbytes\\ncontent-disposition\\ncookie-signature\\ncookie\\ndebug\\ndepd\\ndestroy\\nee-first\\nencodeurl\\nescape-html\\netag\\nexpress\\n```\\n\\nPuoi vedere l\'intera cartella [qui](https://github.com/zkochan/comparing-node-modules/tree/master/npm-example/node_modules).\\n\\nE questo \xe8 ci\xf2 che ottieni in `node_modules` creato da pnpm:\\n\\n```text\\n.pnpm\\n.modules.yaml\\nexpress\\n```\\n\\nPuoi controllarlo [qui](https://github.com/zkochan/comparing-node-modules/tree/master/pnpm5-example/node_modules).\\n\\nAllora, dove sono tutte le dipendenze? C\'\xe8 solo una cartella in `node_modules` chiamata `.pnpm` e un collegamento simbolico chiamato `express`. Bene, abbiamo installato solo `express`, quindi questo \xe8 l\'unico pacchetto a cui la tua applicazione deve avere accesso\\n\\n> Leggi di pi\xf9 sul perch\xe9 la severit\xe0 di pnpm \xe8 una buona cosa [qui](https://medium.com/pnpm/pnpms-strictness-helps-to-avoid-silly-bugs-9a15fb306308)\\n\\nVediamo cosa c\'\xe8 dentro `express`:\\n\\n```text\\n\u25be node_modules\\n  \u25b8 .pnpm\\n  \u25be express\\n    \u25b8 lib\\n      History.md\\n      index.js\\n      LICENSE\\n      package.json\\n      Readme.md\\n    .modules.yaml\\n```\\n\\n`express` non ha `node_modules`? Dove sono tutte le dipendenze di `express`?\\n\\nIl trucco \xe8 che `express` \xe8 solo un collegamento simbolico. Quando Node.js risolve le dipendenze, utilizza le loro posizioni reali, quindi non conserva i collegamenti simbolici. Ma dov\'\xe8 la vera posizione di `express`, si potrebbe chiedere?\\n\\nQui: [node_modules/.pnpm/express@4.17.1/node_modules/express](https://github.com/zkochan/comparing-node-modules/tree/master/pnpm5-example/node_modules/.pnpm/express@4.17.1/node_modules/express).\\n\\nOK, ora conosciamo lo scopo della cartella `.pnpm/`. `.pnpm/` memorizza tutti i pacchetti in una struttura di cartelle piatte, quindi ogni pacchetto pu\xf2 essere trovato in una cartella denominata con questo modello:\\n\\n```text\\n.pnpm/<name>@<version>/node_modules/<name>\\n```\\n\\nLa chiamiamo cartella dell\'archivio virtuale.\\n\\nQuesta struttura piatta evita i problemi di percorso lunghi che sono stati causati dai `node_modules` annidati creati da npm v2 ma mantiene i pacchetti isolati a differenza dei `node_modules` piatti creati da npm v3,4,5,6 o yarn v1.\\n\\nOra diamo un\'occhiata alla vera posizione di `express`:\\n\\n```text\\n  \u25be express\\n    \u25b8 lib\\n      History.md\\n      index.js\\n      LICENSE\\n      package.json\\n      Readme.md\\n```\\n\\n\xc8 una truffa? Manca ancora la cartella `node_modules`! Il secondo trucco della struttura `node_modules` di pnpm \xe8 che le dipendenze dei pacchetti sono sullo stesso livello di cartella su cui si trova la posizione reale del pacchetto dipendente. Quindi le dipendenze di `express` non sono in `.pnpm/express@4.17.1/node_modules/express/node_modules/` ma in [.pnpm/express@4.17.1/node_modules/](https://github.com/zkochan/comparing-node-modules/tree/master/pnpm5-example/node_modules/.pnpm/express@4.17.1/node_modules):\\n\\n```text\\n\u25be node_modules\\n  \u25be .pnpm\\n    \u25b8 accepts@1.3.5\\n    \u25b8 array-flatten@1.1.1\\n    ...\\n    \u25be express@4.16.3\\n      \u25be node_modules\\n        \u25b8 accepts\\n        \u25b8 array-flatten\\n        \u25b8 body-parser\\n        \u25b8 content-disposition\\n        ...\\n        \u25b8 etag\\n        \u25be express\\n          \u25b8 lib\\n            History.md\\n            index.js\\n            LICENSE\\n            package.json\\n            Readme.md\\n```\\n\\nTutte le dipendenze di `express` sono collegamenti simbolici a cartelle appropriate in `node_modules/.pnpm/`. Posizionare le dipendenze di `express` un livello in alto permette di evitare i collegamenti simbolici circolari.\\n\\nQuindi, come puoi vedere, anche se la struttura `node_modules` di pnpm sembra inizialmente inusuale:\\n\\n1. \xe8 completamente compatibile con Node.js\\n2. i pacchetti sono ben raggruppati con le loro dipendenze\\n\\nLa struttura \xe8 un po\' [pi\xf9 complessa](/how-peers-are-resolved) per i pacchetti con dipendenze peer ma l\'idea \xe8 la stessa: usare collegamenti simbolici per creare un annidamento con una struttura di cartelle piatta."}]}')}}]);