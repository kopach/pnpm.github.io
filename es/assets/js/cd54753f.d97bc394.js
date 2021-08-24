"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[300],{9848:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>u});var a=t(7689);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),l=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},d=function(e){var n=l(e.components);return a.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=l(t),u=i,k=m["".concat(s,".").concat(u)]||m[u]||c[u]||r;return t?a.createElement(k,p(p({ref:n},d),{},{components:t})):a.createElement(k,p({ref:n},d))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,p=new Array(r);p[0]=m;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,p[1]=o;for(var l=2;l<r;l++)p[l]=t[l];return a.createElement.apply(null,p)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8893:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>o,contentTitle:()=>s,metadata:()=>l,toc:()=>d,default:()=>m});var a=t(2951),i=t(9877),r=(t(7689),t(9848)),p=["components"],o={id:"package_json",title:"package.json"},s=void 0,l={unversionedId:"package_json",id:"package_json",isDocsHomePage:!1,title:"package.json",description:"The manifest file of a package. It contains all the package's metadata, including dependencies, title, author, et cetera. This is a standard preserved across all major Node.JS package managers, including pnpm.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/package_json.md",sourceDirName:".",slug:"/package_json",permalink:"/es/next/package_json",editUrl:"https://crowdin.com/project/pnpm/es",version:"current",frontMatter:{id:"package_json",title:"package.json"},sidebar:"docs",previous:{title:"pnpm store",permalink:"/es/next/cli/store"},next:{title:".npmrc",permalink:"/es/next/npmrc"}},d=[{value:"Fields",id:"fields",children:[{value:"engines",id:"engines",children:[]},{value:"peerDependenciesMeta",id:"peerdependenciesmeta",children:[]},{value:"publishConfig",id:"publishconfig",children:[]},{value:"pnpm.overrides",id:"pnpmoverrides",children:[]},{value:"pnpm.packageExtensions",id:"pnpmpackageextensions",children:[]},{value:"pnpm.neverBuiltDependencies",id:"pnpmneverbuiltdependencies",children:[]}]}],c={toc:d};function m(e){var n=e.components,t=(0,i.Z)(e,p);return(0,r.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The manifest file of a package. It contains all the package's metadata, including dependencies, title, author, et cetera. This is a standard preserved across all major Node.JS package managers, including pnpm."),(0,r.kt)("h2",{id:"fields"},"Fields"),(0,r.kt)("h3",{id:"engines"},"engines"),(0,r.kt)("p",null,"You can specify the version of Node and pnpm that your software works on:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "engines": {\n        "node": ">=10",\n        "pnpm": ">=3"\n    }\n}\n')),(0,r.kt)("p",null,"During local development, pnpm will always fail with an error message if its version does not match the one specified in the ",(0,r.kt)("inlineCode",{parentName:"p"},"engines")," field."),(0,r.kt)("p",null,"Unless the user has set the ",(0,r.kt)("inlineCode",{parentName:"p"},"engine-strict")," config flag (see ",(0,r.kt)("a",{parentName:"p",href:"/es/next/npmrc#engine-strict"},".npmrc"),"), this field is advisory only and will only produce warnings when your package is installed as a dependency."),(0,r.kt)("h3",{id:"peerdependenciesmeta"},"peerDependenciesMeta"),(0,r.kt)("p",null,"This field lists some extra information related to the dependencies listed in the ",(0,r.kt)("inlineCode",{parentName:"p"},"peerDependencies")," field."),(0,r.kt)("h4",{id:"peerdependenciesmetaoptional"},"peerDependenciesMeta.*.optional"),(0,r.kt)("p",null,"If this is set to true, the selected peer dependency will be marked as optional by the package manager. Therefore, the consumer omitting it will no longer be reported as an error."),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "peerDependencies": {\n        "foo": "1"\n    },\n    "peerDependenciesMeta": {\n        "foo": {\n            "optional": true\n        },\n        "bar": {\n            "optional": true\n        }\n    }\n}\n')),(0,r.kt)("p",null,"Note that even though ",(0,r.kt)("inlineCode",{parentName:"p"},"bar")," was not specified in ",(0,r.kt)("inlineCode",{parentName:"p"},"peerDependencies"),", it is marked as optional. pnpm will therefore assume that any version of bar is fine. However, ",(0,r.kt)("inlineCode",{parentName:"p"},"foo")," is optional, but only to the required version specification."),(0,r.kt)("h3",{id:"publishconfig"},"publishConfig"),(0,r.kt)("p",null,"Added in: v3.4.0"),(0,r.kt)("p",null,"It is possible to override some fields in the manifest before the package is packed. The following fields may be overridden: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/stereobooster/package.json#bin"},(0,r.kt)("inlineCode",{parentName:"a"},"bin")),", ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/stereobooster/package.json#main"},(0,r.kt)("inlineCode",{parentName:"a"},"main")),", ",(0,r.kt)("a",{parentName:"p",href:"https://nodejs.org/api/esm.html#esm_package_exports"},(0,r.kt)("inlineCode",{parentName:"a"},"exports")),", ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/stereobooster/package.json#types"},(0,r.kt)("inlineCode",{parentName:"a"},"types")," or ",(0,r.kt)("inlineCode",{parentName:"a"},"typings")),", ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/stereobooster/package.json#module"},(0,r.kt)("inlineCode",{parentName:"a"},"module")),", ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/stereobooster/package.json#browser"},(0,r.kt)("inlineCode",{parentName:"a"},"browser")),", ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/stereobooster/package.json#esnext"},(0,r.kt)("inlineCode",{parentName:"a"},"esnext")),", ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/stereobooster/package.json#es2015"},(0,r.kt)("inlineCode",{parentName:"a"},"es2015")),", ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/stereobooster/package.json#unpkg-1"},(0,r.kt)("inlineCode",{parentName:"a"},"unpkg"))," and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/stereobooster/package.json#microbundle"},(0,r.kt)("inlineCode",{parentName:"a"},"umd:main")),"."),(0,r.kt)("p",null,"To override a field, add the publish version of the field to ",(0,r.kt)("inlineCode",{parentName:"p"},"publishConfig"),"."),(0,r.kt)("p",null,"For instance, the following ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "foo",\n    "version": "1.0.0",\n    "main": "src/index.ts",\n    "publishConfig": {\n        "main": "lib/index.js",\n        "typings": "lib/index.d.ts"\n    }\n}\n')),(0,r.kt)("p",null,"Will be published as:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "foo",\n    "version": "1.0.0",\n    "main": "lib/index.js",\n    "typings": "lib/index.d.ts"\n}\n')),(0,r.kt)("h4",{id:"publishconfigexecutablefiles"},"publishConfig.executableFiles"),(0,r.kt)("p",null,"Added in: v6.11.5"),(0,r.kt)("p",null,"By default, for portability reasons, no files except those listed in the bin field will be marked as executable in the resulting package archive. The ",(0,r.kt)("inlineCode",{parentName:"p"},"executableFiles")," field lets you declare additional fields that must have the executable flag (+x) set even if they aren't directly accessible through the bin field."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "publishConfig": {\n    "executableFiles": [\n      "./dist/shim.js",\n    ]\n  }\n}\n')),(0,r.kt)("h4",{id:"publishconfigdirectory"},"publishConfig.directory"),(0,r.kt)("p",null,"Added in: v6.7.0"),(0,r.kt)("p",null,"You also can use the field ",(0,r.kt)("inlineCode",{parentName:"p"},"publishConfig.directory")," to customize the published subdirectory relative to the current ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json"),"."),(0,r.kt)("p",null,"It is expected to have a modified version of the current package in the specified directory (usually using third party build tools)."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"In this example the ",(0,r.kt)("inlineCode",{parentName:"p"},'"dist"')," folder must contain a ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "foo",\n  "version": "1.0.0",\n  "publishConfig": {\n    "directory": "dist"\n  }\n}\n')),(0,r.kt)("h3",{id:"pnpmoverrides"},"pnpm.overrides"),(0,r.kt)("p",null,"Added in: v5.10.1"),(0,r.kt)("p",null,"This field allows you to instruct pnpm to override any dependency in the dependency graph. This is useful to enforce all your packages to use a single version of a dependency, backport a fix, or replace a dependency with a fork."),(0,r.kt)("p",null,"Note that the overrides field can only be set at the root of the project."),(0,r.kt)("p",null,"An example of the ",(0,r.kt)("inlineCode",{parentName:"p"},'"pnpm"."overrides"')," field:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "pnpm": {\n    "overrides": {\n      "foo": "^1.0.0",\n      "bar@^2.1.0": "3.0.0",\n      "qar@1>zoo": "2"\n    }\n  }\n}\n')),(0,r.kt)("p",null,'You may specify the package the overriden dependency belongs to by separating the package selector from the dependency selector with a ">", for example ',(0,r.kt)("inlineCode",{parentName:"p"},"qar@1>zoo")," will only override the ",(0,r.kt)("inlineCode",{parentName:"p"},"zoo")," dependency of ",(0,r.kt)("inlineCode",{parentName:"p"},"qar@1"),", not for any other dependencies."),(0,r.kt)("h3",{id:"pnpmpackageextensions"},"pnpm.packageExtensions"),(0,r.kt)("p",null,"Added in: v6.9.0"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"packageExtensions")," fields offer a way to extend the existing package definitions with additional information. For example, if ",(0,r.kt)("inlineCode",{parentName:"p"},"react-redux")," should have ",(0,r.kt)("inlineCode",{parentName:"p"},"react-dom")," in its ",(0,r.kt)("inlineCode",{parentName:"p"},"peerDependencies")," but it has not, it is possible to patch ",(0,r.kt)("inlineCode",{parentName:"p"},"react-redux")," using ",(0,r.kt)("inlineCode",{parentName:"p"},"packageExtensions"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "pnpm": {\n    "packageExtensions": {\n      "react-redux": {\n        "peerDependencies": {\n          "react-dom": "*"\n        }\n      }\n    }\n  }\n}\n')),(0,r.kt)("p",null,"The keys in ",(0,r.kt)("inlineCode",{parentName:"p"},"packageExtensions")," are package names or package names and semver ranges, so it is possible to patch only some versions of a package:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "pnpm": {\n    "packageExtensions": {\n      "react-redux@1": {\n        "peerDependencies": {\n          "react-dom": "*"\n        }\n      }\n    }\n  }\n}\n')),(0,r.kt)("p",null,"The following fields may be extended using ",(0,r.kt)("inlineCode",{parentName:"p"},"packageExtensions"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"dependencies"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"peerDependencies"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"peerDependenciesMeta"),"."),(0,r.kt)("p",null,"A bigger example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "pnpm": {\n    "packageExtensions": {\n      "express@1": {\n        "optionalDependencies": {\n          "typescript": "2"\n        }\n      },\n      "fork-ts-checker-webpack-plugin": {\n        "dependencies": {\n          "@babel/core": "1"\n        },\n        "peerDependencies": {\n          "eslint": ">= 6"\n        },\n        "peerDependenciesMeta": {\n          "eslint": {\n            "optional": true\n          }\n        }\n      }\n    }\n  }\n}\n')),(0,r.kt)("h3",{id:"pnpmneverbuiltdependencies"},"pnpm.neverBuiltDependencies"),(0,r.kt)("p",null,"Added in: v5.16.0"),(0,r.kt)("p",null,"This field allows to ignore the builds of specific dependencies."),(0,r.kt)("p",null,"An example of the ",(0,r.kt)("inlineCode",{parentName:"p"},'"pnpm"."neverBuiltDependencies"')," field:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "pnpm": {\n    "neverBuiltDependencies": ["fsevents", "level"]\n  }\n}\n')))}m.isMDXComponent=!0}}]);