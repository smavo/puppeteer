"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[42],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},p=Object.keys(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),s=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,p=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=s(r),g=n,d=m["".concat(l,".").concat(g)]||m[g]||c[g]||p;return r?a.createElement(d,i(i({ref:t},u),{},{components:r})):a.createElement(d,i({ref:t},u))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=r.length,i=new Array(p);i[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var s=2;s<p;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},20565:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>u});r(67294);var a=r(3905);function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},n.apply(this,arguments)}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},p=Object.keys(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}const i={sidebar_label:"Page.setViewport"},o="Page.setViewport() method",l={unversionedId:"api/puppeteer.page.setviewport",id:"api/puppeteer.page.setviewport",title:"Page.setViewport() method",description:"page.setViewport will resize the page. A lot of websites don't expect phones to change size, so you should set the viewport before navigating to the page.",source:"@site/../docs/api/puppeteer.page.setviewport.md",sourceDirName:"api",slug:"/api/puppeteer.page.setviewport",permalink:"/next/api/puppeteer.page.setviewport",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Page.setViewport"},sidebar:"sidebar",previous:{title:"Page.setUserAgent",permalink:"/next/api/puppeteer.page.setuseragent"},next:{title:"Page.tap",permalink:"/next/api/puppeteer.page.tap"}},s={},u=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Example",id:"example",level:2}],c={toc:u};function m(e){var{components:t}=e,r=p(e,["components"]);return(0,a.kt)("wrapper",n({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",n({},{id:"pagesetviewport-method"}),"Page.setViewport() method"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"page.setViewport")," will resize the page. A lot of websites don't expect phones to change size, so you should set the viewport before navigating to the page."),(0,a.kt)("p",null,"In the case of multiple pages in a single browser, each page can have its own viewport size."),(0,a.kt)("h4",n({},{id:"signature"}),"Signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",n({parentName:"pre"},{className:"language-typescript"}),"class Page {\n  setViewport(viewport: Viewport): Promise<void>;\n}\n")),(0,a.kt)("h2",n({},{id:"parameters"}),"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Parameter"),(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"viewport"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/next/api/puppeteer.viewport"}),"Viewport")),(0,a.kt)("td",n({parentName:"tr"},{align:null}))))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")),(0,a.kt)("p",null,"Promise","<","void",">"),(0,a.kt)("h2",n({},{id:"remarks"}),"Remarks"),(0,a.kt)("p",null,"Argument viewport have following properties:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"width"),": page width in pixels. required")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"height"),": page height in pixels. required")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"deviceScaleFactor"),": Specify device scale factor (can be thought of as DPR). Defaults to ",(0,a.kt)("inlineCode",{parentName:"p"},"1"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"isMobile"),": Whether the meta viewport tag is taken into account. Defaults to ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"hasTouch"),": Specifies if viewport supports touch events. Defaults to ",(0,a.kt)("inlineCode",{parentName:"p"},"false"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"isLandScape"),": Specifies if viewport is in landscape mode. Defaults to false."))),(0,a.kt)("p",null,"NOTE: in certain cases, setting viewport will reload the page in order to set the isMobile or hasTouch properties."),(0,a.kt)("h2",n({},{id:"example"}),"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",n({parentName:"pre"},{className:"language-ts"}),"const page = await browser.newPage();\nawait page.setViewport({\n  width: 640,\n  height: 480,\n  deviceScaleFactor: 1,\n});\nawait page.goto('https://example.com');\n")))}m.isMDXComponent=!0}}]);