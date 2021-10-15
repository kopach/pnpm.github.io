"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4942],{9613:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>c});var r=t(9496);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),m=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=m(e.components);return r.createElement(o.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},k=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),k=m(t),c=a,s=k["".concat(o,".").concat(c)]||k[c]||d[c]||i;return t?r.createElement(s,l(l({ref:n},u),{},{components:t})):r.createElement(s,l({ref:n},u))}));function c(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=k;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var m=2;m<i;m++)l[m]=t[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}k.displayName="MDXCreateElement"},2234:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>p,contentTitle:()=>o,metadata:()=>m,toc:()=>u,default:()=>k});var r=t(98),a=t(6862),i=(t(9496),t(9613)),l=["components"],p={id:"pnpm-cli",title:"pnpm CLI"},o=void 0,m={unversionedId:"pnpm-cli",id:"pnpm-cli",isDocsHomePage:!1,title:"pnpm CLI",description:"npm ve aradaki farklar",source:"@site/i18n/tr/docusaurus-plugin-content-docs/current/pnpm-cli.md",sourceDirName:".",slug:"/pnpm-cli",permalink:"/tr/next/pnpm-cli",editUrl:"https://crowdin.com/project/pnpm/tr",tags:[],version:"current",frontMatter:{id:"pnpm-cli",title:"pnpm CLI"},sidebar:"docs",previous:{title:"Kurulum",permalink:"/tr/next/installation"},next:{title:"pnpx CLI",permalink:"/tr/next/pnpx-cli"}},u=[{value:"npm ve aradaki farklar",id:"npm-ve-aradaki-farklar",children:[],level:2},{value:"Parametreler",id:"parametreler",children:[{value:"-C &lt;yol&gt;, --dir &lt;yol&gt;",id:"-c-yol---dir-yol",children:[],level:3},{value:"-w, --workspace-root",id:"-w---workspace-root",children:[],level:3}],level:2},{value:"Komutlar",id:"komutlar",children:[],level:2}],d={toc:u};function k(e){var n=e.components,t=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"npm-ve-aradaki-farklar"},"npm ve aradaki farklar"),(0,i.kt)("p",null,"npm'e k\u0131yasen pnpm, t\xfcm parametreleri g\xf6zden ge\xe7irir, do\u011frular. \xd6rne\u011fin; ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm install --foo")," komutu, ge\xe7ersiz ",(0,i.kt)("inlineCode",{parentName:"p"},"--foo")," parametresi ile \xe7al\u0131\u015ft\u0131r\u0131ld\u0131\u011f\u0131 i\xe7in, ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm install")," hata verecektir."),(0,i.kt)("p",null,"Ancak, baz\u0131 k\xfct\xfcphaneler ",(0,i.kt)("inlineCode",{parentName:"p"},"npm_config_")," ile ba\u015flayan ortam de\u011fi\u015fkeninin belirtilmesine ihtiya\xe7 duyabilir. Bu durumda \u015fu \u015fekilde \xe7\xf6z\xfcmler kullanabilirsin:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"komut \xf6ncesinde de\u011fi\u015fkeni belirtme: ",(0,i.kt)("inlineCode",{parentName:"li"},"npm_config_foo=true pnpm install")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"--config.<degisken>")," parametresi ile de\u011fi\u015fkene izin verme: ",(0,i.kt)("inlineCode",{parentName:"li"},"pnpm install --config.foo"))),(0,i.kt)("h2",{id:"parametreler"},"Parametreler"),(0,i.kt)("h3",{id:"-c-yol---dir-yol"},"-C ","<","yol",">",", --dir ","<","yol",">"),(0,i.kt)("p",null,"pnpm'i, belirtilen ",(0,i.kt)("inlineCode",{parentName:"p"},"<yol>")," konumunu taban olarak ele al\u0131p, komut sat\u0131r\u0131n\u0131n taban konumunu de\u011fi\u015ftirmeden o konum i\xe7erisindeymi\u015f gibi \xe7al\u0131\u015ft\u0131rma. Bir nevi ",(0,i.kt)("inlineCode",{parentName:"p"},"cd ./yol")," komutuna bir alternatifmi\u015f gibi bak\u0131labilir."),(0,i.kt)("h3",{id:"-w---workspace-root"},"-w, --workspace-root"),(0,i.kt)("p",null,"S\xfcr\xfcm 5.6.0 ve sonras\u0131nda ge\xe7erli"),(0,i.kt)("p",null,"Komutu, i\xe7inde bulundu\u011fun dizinde \xe7al\u0131\u015ft\u0131rmak yerine workspace'in ana dizininde \xe7al\u0131\u015ft\u0131r\u0131r."),(0,i.kt)("h2",{id:"komutlar"},"Komutlar"),(0,i.kt)("p",null,"Daha fazla bilgi almak i\xe7in, ili\u015fkili komutun d\xf6k\xfcman\u0131n\u0131 inceleyebilirsin. \u0130\u015fine yarayacak ve en yayg\u0131n kullan\u0131lan komutlar ise:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"npm komutu"),(0,i.kt)("th",{parentName:"tr",align:null},"pnpm kar\u015f\u0131l\u0131\u011f\u0131"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"npm install")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/tr/next/cli/install"},(0,i.kt)("inlineCode",{parentName:"a"},"pnpm install")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"npm i <k\xfct\xfcphane>")),(0,i.kt)("td",{parentName:"tr",align:null},"[",(0,i.kt)("inlineCode",{parentName:"td"},"pnpm add <k\xfct\xfcphane>"),"]")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"npm run <komut>")),(0,i.kt)("td",{parentName:"tr",align:null},"[",(0,i.kt)("inlineCode",{parentName:"td"},"pnpm <komut>"),"]")))),(0,i.kt)("p",null,"pnpm, bilinmeyen bir parametre ile \xe7al\u0131\u015ft\u0131r\u0131ld\u0131\u011f\u0131nda, ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," i\xe7erisindeki komutlar (scripts) aras\u0131nda o komutu bulup, \xe7al\u0131\u015ft\u0131r\u0131r. Yani ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm lint")," komutunu \xe7al\u0131\u015ft\u0131rmak, ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm run lint")," komutunu \xe7al\u0131\u015ft\u0131rmak ile ayn\u0131 anlama gelir. L\xe2kin komutlar aras\u0131nda belirtilen komut bulunmazsa e\u011fer, pnpm bu sefer o komutu, uygulama veya komut sat\u0131r\u0131 dosyas\u0131ym\u0131\u015f gibi \xe7al\u0131\u015ft\u0131rmaya \xe7al\u0131\u015f\u0131r ve bu da ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm eslint")," gibi komutlar\u0131 kullanmaya imkan sa\u011flar. (bkz. ",(0,i.kt)("a",{parentName:"p",href:"/tr/next/cli/exec"},"pnpm exec"),")"))}k.isMDXComponent=!0}}]);