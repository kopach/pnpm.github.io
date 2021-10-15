"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8028],{2495:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"Node-Modules configuration options with pnpm","metadata":{"permalink":"/hu/blog/2020/10/17/node-modules-configuration-options-with-pnpm","editUrl":"https://crowdin.com/project/pnpm/hu","source":"@site/i18n/hu/docusaurus-plugin-content-blog/2020-10-17-node-modules-configuration-options-with-pnpm.md","title":"Node-Modules configuration options with pnpm","description":"There are many ways to create a nodemodules directory. Your goal must be to create the most strict one but if that is not possible, there are options to make a loose nodemodules as well.","date":"2020-10-17T00:00:00.000Z","formattedDate":"2020. okt\xf3ber 17.","tags":[],"readingTime":1.86,"truncated":true,"authors":[{"name":"Zoltan Kochan","url":"http://twitter.com/zoltankochan","imageURL":"https://pbs.twimg.com/profile_images/1143606083262586880/EW2GCFKK_400x400.jpg"}],"nextItem":{"title":"Flat node_modules is not the only way","permalink":"/hu/blog/2020/05/27/flat-node-modules-is-not-the-only-way"}},"content":"There are many ways to create a node_modules directory. Your goal must be to create the most strict one but if that is not possible, there are options to make a loose node_modules as well.\\n\\n\x3c!--truncate--\x3e\\n\\n## The default setup\\n\\nBy default, pnpm v5 will create a semi-strict node_modules. Semi-strict means that your application will only be able to require packages that are added as dependencies to `package.json` (with a few exceptions). However, your dependencies will be able to access any packages.\\n\\nThe default configuration looks like this:\\n\\n```ini\\n; All packages are hoisted to node_modules/.pnpm/node_modules\\nhoist-pattern[]=*\\n\\n; All types are hoisted to the root in order to make TypeScript happy\\npublic-hoist-pattern[]=*types*\\n\\n; All ESLint-related packages are hoisted to the root as well\\npublic-hoist-pattern[]=*eslint*\\n```\\n\\n## Plug\'n\'Play. The strictest configuration\\n\\npnpm supports [Yarn\'s Plug\'n\'Play](https://yarnpkg.com/features/pnp) since v5.9. With PnP, both your application and the dependencies of your application will have access only to their declared dependencies. This is even stricter then setting `hoist=false` because inside a monorepo, you\'re application will not be able to access even the dependencies of the root project.\\n\\nTo use Plug\'n\'Play, set these settings:\\n\\n```ini\\nnode-linker=pnp\\nsymlink=false\\n```\\n\\n## A strict, traditional modules directory\\n\\nIf you are not ready to use PnP yet, you can still be strict and only allow packages to access their own dependencies by setting the hoist configuration to false:\\n\\n```ini\\nhoist=false\\n```\\n\\nHowever, if some of your dependencies are trying to access packages that they don\'t have in dependencies, you have two options:\\n\\n1. Create a `pnpmfile.js` and use a [hook](/pnpmfile) to add the missing dependency to the package\'s manifest.\\n\\n2. Add a pattern to the `hoist-pattern` setting. For instance, if the not found module is `babel-core`, add the following setting to `.npmrc`:\\n\\n    ```ini\\n    hoist-pattern[]=babel-core\\n    ```\\n\\n## The worst case - hoisting to the root\\n\\nSome tools might not work even with the default configuration of pnpm, which hoists everything to the root of the virtual store and some packages to the root. In this case, you can hoist either everything or a subset of dependencies to the root of the modules directory.\\n\\nHoisting everything to the the root of node_modules:\\n\\n```ini\\nshamefully-hoist=true\\n```\\n\\nHoisting only packages that match a pattern:\\n\\n```ini\\npublic-hoist-pattern[]=babel-*\\n```"},{"id":"Flat node_modules is not the only way","metadata":{"permalink":"/hu/blog/2020/05/27/flat-node-modules-is-not-the-only-way","editUrl":"https://crowdin.com/project/pnpm/hu","source":"@site/i18n/hu/docusaurus-plugin-content-blog/2020-05-27-flat-node-modules-is-not-the-only-way.md","title":"Flat node_modules is not the only way","description":"New users of pnpm frequently ask me about the weird structure of node_modules that pnpm creates. Why is it not flat? Where are all the sub-dependencies?","date":"2020-05-27T00:00:00.000Z","formattedDate":"2020. m\xe1jus 27.","tags":[],"readingTime":2.72,"truncated":true,"authors":[{"name":"Zoltan Kochan","url":"http://twitter.com/zoltankochan","imageURL":"https://pbs.twimg.com/profile_images/1143606083262586880/EW2GCFKK_400x400.jpg"}],"prevItem":{"title":"Node-Modules configuration options with pnpm","permalink":"/hu/blog/2020/10/17/node-modules-configuration-options-with-pnpm"}},"content":"New users of pnpm frequently ask me about the weird structure of `node_modules` that pnpm creates. Why is it not flat? Where are all the sub-dependencies?\\n\\n\x3c!--truncate--\x3e\\n\\n> I am going to assume that readers of the article are already familiar with flat `node_modules` created by npm and Yarn. If you don\'t understand why npm 3 had to start using flat `node_modules` in v3, you can find some prehistory in [Why should we use pnpm?](https://www.kochan.io/nodejs/why-should-we-use-pnpm.html).\\n\\nSo why is pnpm\'s `node_modules` unusual? Let\'s create two directories and run `npm add express` in one of them and `pnpm add express` in the other one. Here\'s the top of what you get in the first directory\'s `node_modules`:\\n\\n```text\\n.bin\\naccepts\\narray-flatten\\nbody-parser\\nbytes\\ncontent-disposition\\ncookie-signature\\ncookie\\ndebug\\ndepd\\ndestroy\\nee-first\\nencodeurl\\nescape-html\\netag\\nexpress\\n```\\n\\nYou can see the whole directory [here](https://github.com/zkochan/comparing-node-modules/tree/master/npm-example/node_modules).\\n\\nAnd this is what you get in the `node_modules` created by pnpm:\\n\\n```text\\n.pnpm\\n.modules.yaml\\nexpress\\n```\\n\\nYou can check it [here](https://github.com/zkochan/comparing-node-modules/tree/master/pnpm5-example/node_modules).\\n\\nSo where are all the dependencies? There is only one folder in the `node_modules` called `.pnpm` and a symlink called `express`. Well, we installed only `express`, so that is the only package that your application has to have access to\\n\\n> Read more about why pnpm\'s strictness is a good thing [here](https://medium.com/pnpm/pnpms-strictness-helps-to-avoid-silly-bugs-9a15fb306308)\\n\\nLet\'s see what is inside `express`:\\n\\n```text\\n\u25be node_modules\\n  \u25b8 .pnpm\\n  \u25be express\\n    \u25b8 lib\\n      History.md\\n      index.js\\n      LICENSE\\n      package.json\\n      Readme.md\\n    .modules.yaml\\n```\\n\\n`express` has no `node_modules`? Where are all the dependencies of `express`?\\n\\nThe trick is that `express` is just a symlink. When Node.js resolves dependencies, it uses their real locations, so it does not preserve symlinks. But where is the real location of `express`, you might ask?\\n\\nHere: [node_modules/.pnpm/express@4.17.1/node_modules/express](https://github.com/zkochan/comparing-node-modules/tree/master/pnpm5-example/node_modules/.pnpm/express@4.17.1/node_modules/express).\\n\\nOK, so now we know the purpose of the `.pnpm/` folder. `.pnpm/` stores all the packages in a flat folder structure, so every package can be found in a folder named by this pattern:\\n\\n```text\\n.pnpm/<name>@<version>/node_modules/<name>\\n```\\n\\nWe call it the virtual store directory.\\n\\nThis flat structure avoids the long path issues that were caused by the nested `node_modules` created by npm v2 but keeps packages isolated unlike the flat `node_modules` created by npm v3,4,5,6 or Yarn v1.\\n\\nNow let\'s look into the real location of `express`:\\n\\n```text\\n  \u25be express\\n    \u25b8 lib\\n      History.md\\n      index.js\\n      LICENSE\\n      package.json\\n      Readme.md\\n```\\n\\nIs it a scam? It still lacks `node_modules`! The second trick of pnpm\'s `node_modules` structure is that the dependencies of packages are on the same directory level on which the real location of the dependent package. So dependencies of `express` are not in `.pnpm/express@4.17.1/node_modules/express/node_modules/` but in [.pnpm/express@4.17.1/node_modules/](https://github.com/zkochan/comparing-node-modules/tree/master/pnpm5-example/node_modules/.pnpm/express@4.17.1/node_modules):\\n\\n```text\\n\u25be node_modules\\n  \u25be .pnpm\\n    \u25b8 accepts@1.3.5\\n    \u25b8 array-flatten@1.1.1\\n    ...\\n    \u25be express@4.16.3\\n      \u25be node_modules\\n        \u25b8 accepts\\n        \u25b8 array-flatten\\n        \u25b8 body-parser\\n        \u25b8 content-disposition\\n        ...\\n        \u25b8 etag\\n        \u25be express\\n          \u25b8 lib\\n            History.md\\n            index.js\\n            LICENSE\\n            package.json\\n            Readme.md\\n```\\n\\nAll the dependencies of `express` are symlinks to appropriate directories in `node_modules/.pnpm/`. Placing dependencies of `express` one level up allows avoiding circular symlinks.\\n\\nSo as you can see, even though pnpm\'s `node_modules` structure seems unusual at first:\\n\\n1. it is completely Node.js compatible\\n2. packages are nicely grouped with their dependencies\\n\\nThe structure is a little bit [more complex](/how-peers-are-resolved) for packages with peer dependencies but the idea is the same: using symlinks to create a nesting with a flat directory structure."}]}')}}]);