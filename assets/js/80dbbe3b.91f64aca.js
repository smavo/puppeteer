"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6476],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>b});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),u=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},l=function(e){var r=u(e.components);return n.createElement(s.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),f=u(t),b=o,m=f["".concat(s,".").concat(b)]||f[b]||c[b]||a;return t?n.createElement(m,p(p({ref:r},l),{},{components:t})):n.createElement(m,p({ref:r},l))}));function b(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,p=new Array(a);p[0]=f;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,p[1]=i;for(var u=2;u<a;u++)p[u]=t[u];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},68184:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>i,default:()=>f,frontMatter:()=>p,metadata:()=>s,toc:()=>l});t(67294);var n=t(3905);function o(){return o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},o.apply(this,arguments)}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const p={sidebar_label:"HTTPRequest.abortErrorReason"},i="HTTPRequest.abortErrorReason() method",s={unversionedId:"api/puppeteer.httprequest.aborterrorreason",id:"version-19.2.2/api/puppeteer.httprequest.aborterrorreason",title:"HTTPRequest.abortErrorReason() method",description:"Signature:",source:"@site/versioned_docs/version-19.2.2/api/puppeteer.httprequest.aborterrorreason.md",sourceDirName:"api",slug:"/api/puppeteer.httprequest.aborterrorreason",permalink:"/api/puppeteer.httprequest.aborterrorreason",draft:!1,tags:[],version:"19.2.2",frontMatter:{sidebar_label:"HTTPRequest.abortErrorReason"},sidebar:"api",previous:{title:"HTTPRequest.abort",permalink:"/api/puppeteer.httprequest.abort"},next:{title:"HTTPRequest.client",permalink:"/api/puppeteer.httprequest.client"}},u={},l=[{value:"Signature:",id:"signature",level:4}],c={toc:l};function f(e){var{components:r}=e,t=a(e,["components"]);return(0,n.kt)("wrapper",o({},c,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",o({},{id:"httprequestaborterrorreason-method"}),"HTTPRequest.abortErrorReason() method"),(0,n.kt)("h4",o({},{id:"signature"}),"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-typescript"}),"class HTTPRequest {\n  abortErrorReason(): Protocol.Network.ErrorReason | null;\n}\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns:")),(0,n.kt)("p",null,"Protocol.Network.ErrorReason ","|"," null"),(0,n.kt)("p",null,"the most recent reason for aborting the request"))}f.isMDXComponent=!0}}]);