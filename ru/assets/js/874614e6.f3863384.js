"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6337],{9848:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>c});var o=t(7689);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=o.createContext({}),i=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},d=function(e){var n=i(e.components);return o.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=i(t),c=a,h=u["".concat(l,".").concat(c)]||u[c]||m[c]||r;return t?o.createElement(h,p(p({ref:n},d),{},{components:t})):o.createElement(h,p({ref:n},d))}));function c(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,p=new Array(r);p[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,p[1]=s;for(var i=2;i<r;i++)p[i]=t[i];return o.createElement.apply(null,p)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},7036:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>s,contentTitle:()=>l,metadata:()=>i,toc:()=>d,default:()=>u});var o=t(2951),a=t(9877),r=(t(7689),t(9848)),p=["components"],s={title:"\u041f\u043b\u043e\u0441\u043a\u0430\u044f \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430 node_modules \u043d\u0435 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0435\u0434\u0438\u043d\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u043c \u0441\u043f\u043e\u0441\u043e\u0431\u043e\u043c",author:"Zoltan Kochan",authorURL:"http://twitter.com/zoltankochan",authorImageURL:"https://pbs.twimg.com/profile_images/1143606083262586880/EW2GCFKK_400x400.jpg"},l=void 0,i={permalink:"/ru/blog/2020/05/27/flat-node-modules-is-not-the-only-way",editUrl:"https://crowdin.com/project/pnpm/ru",source:"@site/i18n/ru/docusaurus-plugin-content-blog/2020-05-27-flat-node-modules-is-not-the-only-way.md",title:"\u041f\u043b\u043e\u0441\u043a\u0430\u044f \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430 node_modules \u043d\u0435 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0435\u0434\u0438\u043d\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u043c \u0441\u043f\u043e\u0441\u043e\u0431\u043e\u043c",description:"\u041d\u043e\u0432\u044b\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438 pnpm \u0447\u0430\u0441\u0442\u043e \u0441\u043f\u0440\u0430\u0448\u0438\u0432\u0430\u044e\u0442 \u043c\u0435\u043d\u044f \u043e \u0441\u0442\u0440\u0430\u043d\u043d\u043e\u0439 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0435 node_modules \u043a\u043e\u0442\u043e\u0440\u0443\u044e \u0441\u043e\u0437\u0434\u0430\u0435\u0442 pnpm. \u041f\u043e\u0447\u0435\u043c\u0443 \u043e\u043d\u0430 \u043d\u0435 \u043f\u043b\u043e\u0441\u043a\u0430\u044f? \u0413\u0434\u0435 \u043d\u0430\u0445\u043e\u0434\u044f\u0442\u0441\u044f \u0432\u0441\u0435 \u043f\u043e\u0434-\u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438?",date:"2020-05-27T00:00:00.000Z",formattedDate:"27 \u043c\u0430\u044f 2020 \u0433.",tags:[],readingTime:2.69,truncated:!0,prevItem:{title:"Node-Modules configuration options with pnpm",permalink:"/ru/blog/2020/10/17/node-modules-configuration-options-with-pnpm"}},d=[],m={toc:d};function u(e){var n=e.components,t=(0,a.Z)(e,p);return(0,r.kt)("wrapper",(0,o.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u041d\u043e\u0432\u044b\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438 pnpm \u0447\u0430\u0441\u0442\u043e \u0441\u043f\u0440\u0430\u0448\u0438\u0432\u0430\u044e\u0442 \u043c\u0435\u043d\u044f \u043e \u0441\u0442\u0440\u0430\u043d\u043d\u043e\u0439 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0435 ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," \u043a\u043e\u0442\u043e\u0440\u0443\u044e \u0441\u043e\u0437\u0434\u0430\u0435\u0442 pnpm. \u041f\u043e\u0447\u0435\u043c\u0443 \u043e\u043d\u0430 \u043d\u0435 \u043f\u043b\u043e\u0441\u043a\u0430\u044f? \u0413\u0434\u0435 \u043d\u0430\u0445\u043e\u0434\u044f\u0442\u0441\u044f \u0432\u0441\u0435 \u043f\u043e\u0434-\u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438?"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u042f \u043f\u0440\u0438\u043d\u044f\u043b \u0441\u0447\u0438\u0442\u0430\u0442\u044c, \u0447\u0442\u043e \u0447\u0438\u0442\u0430\u0442\u0435\u043b\u0438 \u044d\u0442\u043e\u0439 \u0441\u0442\u0430\u0442\u044c\u0438 \u0443\u0436\u0435 \u0445\u043e\u0440\u043e\u0448\u043e \u0437\u043d\u0430\u043a\u043e\u043c\u044b \u0441 \u043f\u043b\u043e\u0441\u043a\u043e\u0439 \u043f\u043e \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0435 \u043f\u0430\u043f\u043a\u043e\u0439 ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules"),", \u0441\u043e\u0437\u0434\u0430\u0432\u0430\u0435\u043c\u043e\u0439 npm \u0438 Yarn. If you don't understand why npm 3 had to start using flat ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," in v3, you can find some prehistory in ",(0,r.kt)("a",{parentName:"p",href:"https://www.kochan.io/nodejs/why-should-we-use-pnpm.html"},"Why should we use pnpm?"),".")),(0,r.kt)("p",null,"So why is pnpm's ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," unusual? Let's create two directories and run ",(0,r.kt)("inlineCode",{parentName:"p"},"npm add express")," in one of them and ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm add express")," in the other one. Here's the top of what you get in the first directory's ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},".bin\naccepts\narray-flatten\nbody-parser\nbytes\ncontent-disposition\ncookie-signature\ncookie\ndebug\ndepd\ndestroy\nee-first\nencodeurl\nescape-html\netag\nexpress\n")),(0,r.kt)("p",null,"You can see the whole directory ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/zkochan/comparing-node-modules/tree/master/npm-example/node_modules"},"here"),"."),(0,r.kt)("p",null,"And this is what you get in the ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," created by pnpm:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},".pnpm\n.modules.yaml\nexpress\n")),(0,r.kt)("p",null,"You can check it ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/zkochan/comparing-node-modules/tree/master/pnpm5-example/node_modules"},"here"),"."),(0,r.kt)("p",null,"So where are all the dependencies? There is only one folder in the ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," called ",(0,r.kt)("inlineCode",{parentName:"p"},".pnpm")," and a symlink called ",(0,r.kt)("inlineCode",{parentName:"p"},"express"),". Well, we installed only ",(0,r.kt)("inlineCode",{parentName:"p"},"express"),", so that is the only package that your application has to have access to"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Read more about why pnpm's strictness is a good thing ",(0,r.kt)("a",{parentName:"p",href:"https://medium.com/pnpm/pnpms-strictness-helps-to-avoid-silly-bugs-9a15fb306308"},"here"))),(0,r.kt)("p",null,"Let's see what is inside ",(0,r.kt)("inlineCode",{parentName:"p"},"express"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u25be node_modules\n  \u25b8 .pnpm\n  \u25be express\n    \u25b8 lib\n      History.md\n      index.js\n      LICENSE\n      package.json\n      Readme.md\n    .modules.yaml\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"express")," has no ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules"),"? Where are all the dependencies of ",(0,r.kt)("inlineCode",{parentName:"p"},"express"),"?"),(0,r.kt)("p",null,"The trick is that ",(0,r.kt)("inlineCode",{parentName:"p"},"express")," is just a symlink. When Node.js resolves dependencies, it uses their real locations, so it does not preserve symlinks. But where is the real location of ",(0,r.kt)("inlineCode",{parentName:"p"},"express"),", you might ask?"),(0,r.kt)("p",null,"Here: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/zkochan/comparing-node-modules/tree/master/pnpm5-example/node_modules/.pnpm/express@4.17.1/node_modules/express"},"node_modules/.pnpm/express@4.17.1/node_modules/express"),"."),(0,r.kt)("p",null,"OK, so now we know the purpose of the ",(0,r.kt)("inlineCode",{parentName:"p"},".pnpm/")," folder. ",(0,r.kt)("inlineCode",{parentName:"p"},".pnpm/")," stores all the packages in a flat folder structure, so every package can be found in a folder named by this pattern:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},".pnpm/<name>@<version>/node_modules/<name>\n")),(0,r.kt)("p",null,"We call it the virtual store directory."),(0,r.kt)("p",null,"This flat structure avoids the long path issues that were caused by the nested ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," created by npm v2 but keeps packages isolated unlike the flat ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," created by npm v3,4,5,6 or Yarn v1."),(0,r.kt)("p",null,"Now let's look into the real location of ",(0,r.kt)("inlineCode",{parentName:"p"},"express"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"  \u25be express\n    \u25b8 lib\n      History.md\n      index.js\n      LICENSE\n      package.json\n      Readme.md\n")),(0,r.kt)("p",null,"Is it a scam? It still lacks ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules"),"! The second trick of pnpm's ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," structure is that the dependencies of packages are on the same directory level on which the real location of the dependent package. So dependencies of ",(0,r.kt)("inlineCode",{parentName:"p"},"express")," are not in ",(0,r.kt)("inlineCode",{parentName:"p"},".pnpm/express@4.17.1/node_modules/express/node_modules/")," but in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/zkochan/comparing-node-modules/tree/master/pnpm5-example/node_modules/.pnpm/express@4.17.1/node_modules"},".pnpm/express@4.17.1/node_modules/"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u25be node_modules\n  \u25be .pnpm\n    \u25b8 accepts@1.3.5\n    \u25b8 array-flatten@1.1.1\n    ...\n    \u25be express@4.16.3\n      \u25be node_modules\n        \u25b8 accepts\n        \u25b8 array-flatten\n        \u25b8 body-parser\n        \u25b8 content-disposition\n        ...\n        \u25b8 etag\n        \u25be express\n          \u25b8 lib\n            History.md\n            index.js\n            LICENSE\n            package.json\n            Readme.md\n")),(0,r.kt)("p",null,"All the dependencies of ",(0,r.kt)("inlineCode",{parentName:"p"},"express")," are symlinks to appropriate directories in ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules/.pnpm/"),". Placing dependencies of ",(0,r.kt)("inlineCode",{parentName:"p"},"express")," one level up allows avoiding circular symlinks."),(0,r.kt)("p",null,"So as you can see, even though pnpm's ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," structure seems unusual at first:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"it is completely Node.js compatible"),(0,r.kt)("li",{parentName:"ol"},"packages are nicely grouped with their dependencies")),(0,r.kt)("p",null,"The structure is a little bit ",(0,r.kt)("a",{parentName:"p",href:"/how-peers-are-resolved"},"more complex")," for packages with peer dependencies but the idea is the same: using symlinks to create a nesting with a flat directory structure."))}u.isMDXComponent=!0}}]);