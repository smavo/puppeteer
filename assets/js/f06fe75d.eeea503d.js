"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[35019],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,p=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),f=l(r),m=o,y=f["".concat(i,".").concat(m)]||f[m]||u[m]||p;return r?n.createElement(y,a(a({ref:t},c),{},{components:r})):n.createElement(y,a({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var p=r.length,a=new Array(p);a[0]=f;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<p;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},23598:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>f,frontMatter:()=>a,metadata:()=>i,toc:()=>c});r(67294);var n=r(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const a={sidebar_label:"HTTPResponse.ok"},s="HTTPResponse.ok() method",i={unversionedId:"api/puppeteer.httpresponse.ok",id:"api/puppeteer.httpresponse.ok",title:"HTTPResponse.ok() method",description:"Signature:",source:"@site/../docs/api/puppeteer.httpresponse.ok.md",sourceDirName:"api",slug:"/api/puppeteer.httpresponse.ok",permalink:"/next/api/puppeteer.httpresponse.ok",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"HTTPResponse.ok"},sidebar:"sidebar",previous:{title:"HTTPResponse.json",permalink:"/next/api/puppeteer.httpresponse.json"},next:{title:"HTTPResponse.remoteAddress",permalink:"/next/api/puppeteer.httpresponse.remoteaddress"}},l={},c=[{value:"Signature:",id:"signature",level:4}],u={toc:c};function f(e){var{components:t}=e,r=p(e,["components"]);return(0,n.kt)("wrapper",o({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",o({},{id:"httpresponseok-method"}),"HTTPResponse.ok() method"),(0,n.kt)("h4",o({},{id:"signature"}),"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-typescript"}),"class HTTPResponse {\n  ok(): boolean;\n}\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns:")),(0,n.kt)("p",null,"boolean"),(0,n.kt)("p",null,"True if the response was successful (status in the range 200-299)."))}f.isMDXComponent=!0}}]);