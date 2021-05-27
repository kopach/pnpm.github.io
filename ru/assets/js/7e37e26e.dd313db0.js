(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{184:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return c})),r.d(n,"metadata",(function(){return i})),r.d(n,"toc",(function(){return p})),r.d(n,"default",(function(){return u}));var t=r(3),o=r(8),a=(r(0),r(318)),c={id:"remove",title:"pnpm remove"},i={unversionedId:"cli/remove",id:"cli/remove",isDocsHomePage:!1,title:"pnpm remove",description:"\u0423\u0434\u0430\u043b\u044f\u0435\u0442 \u043f\u0430\u043a\u0435\u0442\u044b \u0438\u0437 node_modules \u0438 \u0438\u0437 package.json \u043f\u0440\u043e\u0435\u043a\u0442\u0430.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/cli/remove.md",slug:"/cli/remove",permalink:"/ru/next/cli/remove",editUrl:"https://crowdin.com/project/pnpm/ru",version:"current",sidebar:"docs",previous:{title:"pnpm update",permalink:"/ru/next/cli/update"},next:{title:"pnpm link",permalink:"/ru/next/cli/link"}},p=[{value:"Options",id:"options",children:[{value:"--recursive, -r",id:"--recursive--r",children:[]},{value:"--global",id:"--global",children:[]},{value:"--save-dev, -D",id:"--save-dev--d",children:[]},{value:"--save-optional, -O",id:"--save-optional--o",children:[]},{value:"--save-prod, -P",id:"--save-prod--p",children:[]},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",children:[]}]}],l={toc:p};function u(e){var n=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(t.a)({},l,r,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"\u0423\u0434\u0430\u043b\u044f\u0435\u0442 \u043f\u0430\u043a\u0435\u0442\u044b \u0438\u0437 ",Object(a.b)("inlineCode",{parentName:"p"},"node_modules")," \u0438 \u0438\u0437 ",Object(a.b)("inlineCode",{parentName:"p"},"package.json")," \u043f\u0440\u043e\u0435\u043a\u0442\u0430."),Object(a.b)("p",null,"Aliases: rm, uninstall, un"),Object(a.b)("h2",{id:"options"},"Options"),Object(a.b)("h3",{id:"--recursive--r"},"--recursive, -r"),Object(a.b)("p",null,"When used inside a ",Object(a.b)("a",{parentName:"p",href:"/ru/next/workspaces"},"workspace"),", removes a dependency (or dependencies) from every workspace package."),Object(a.b)("p",null,"When used not inside a workspace, removes a dependency (or dependencies) from every package found in subdirectories."),Object(a.b)("h3",{id:"--global"},"--global"),Object(a.b)("p",null,"Remove a global package."),Object(a.b)("h3",{id:"--save-dev--d"},"--save-dev, -D"),Object(a.b)("p",null,"Only remove the dependency from ",Object(a.b)("inlineCode",{parentName:"p"},"devDependencies"),"."),Object(a.b)("h3",{id:"--save-optional--o"},"--save-optional, -O"),Object(a.b)("p",null,"Only remove the dependency from ",Object(a.b)("inlineCode",{parentName:"p"},"optionalDependencies"),"."),Object(a.b)("h3",{id:"--save-prod--p"},"--save-prod, -P"),Object(a.b)("p",null,"Only remove the dependency from ",Object(a.b)("inlineCode",{parentName:"p"},"dependencies"),"."),Object(a.b)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"/ru/next/filtering"},"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435 \u043e \u0444\u0438\u043b\u044c\u0442\u0440\u0430\u0446\u0438\u0438.")))}u.isMDXComponent=!0},318:function(e,n,r){"use strict";r.d(n,"a",(function(){return d})),r.d(n,"b",(function(){return m}));var t=r(0),o=r.n(t);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function c(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?c(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function p(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),u=function(e){var n=o.a.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},d=function(e){var n=u(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=o.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,a=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=u(r),b=t,m=d["".concat(c,".").concat(b)]||d[b]||s[b]||a;return r?o.a.createElement(m,i(i({ref:n},l),{},{components:r})):o.a.createElement(m,i({ref:n},l))}));function m(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var a=r.length,c=new Array(a);c[0]=b;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:t,c[1]=i;for(var l=2;l<a;l++)c[l]=r[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);