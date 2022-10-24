"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[82980],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=s(n),g=a,m=c["".concat(l,".").concat(g)]||c[g]||d[g]||o;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},35123:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>u});n(67294);var r=n(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const i={},p="Debugging",l={unversionedId:"guides/debugging",id:"version-19.1.1/guides/debugging",title:"Debugging",description:"Debugging with Puppeteer can be an arduous task. There is no single method for",source:"@site/versioned_docs/version-19.1.1/guides/debugging.md",sourceDirName:"guides",slug:"/guides/debugging",permalink:"/guides/debugging",draft:!1,tags:[],version:"19.1.1",frontMatter:{},sidebar:"sidebar",previous:{title:"Configuring Puppeteer",permalink:"/guides/configuring-puppeteer"},next:{title:"Docker",permalink:"/guides/docker"}},s={},u=[{value:"Background",id:"background",level:2},{value:"Debugging methods for all situations",id:"debugging-methods-for-all-situations",level:2},{value:"Turn off <code>headless</code>",id:"turn-off-headless",level:3},{value:"Puppeteer &quot;slow-mo&quot;",id:"puppeteer-slow-mo",level:3},{value:"Debugging methods for client code",id:"debugging-methods-for-client-code",level:2},{value:"Capture <code>console.*</code> output",id:"capture-console-output",level:3},{value:"Use the debugger in the browser",id:"use-the-debugger-in-the-browser",level:3},{value:"Debugging methods for server code",id:"debugging-methods-for-server-code",level:2},{value:"Use the debugger in Node.js (Chrome/Chromium-only)",id:"use-the-debugger-in-nodejs-chromechromium-only",level:3},{value:"Use ndb",id:"use-ndb",level:3},{value:"Log DevTools protocol traffic",id:"log-devtools-protocol-traffic",level:3}],d={toc:u};function c(e){var{components:t}=e,n=o(e,["components"]);return(0,r.kt)("wrapper",a({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",a({},{id:"debugging"}),"Debugging"),(0,r.kt)("p",null,"Debugging with Puppeteer can be an arduous task. There is no ",(0,r.kt)("em",{parentName:"p"},"single")," method for\ndebugging all possible issues since Puppeteer touches many distinct components\nof a browser such as network requests and Web APIs. On a high note, Puppeteer\nprovides ",(0,r.kt)("em",{parentName:"p"},"several")," methods for debugging which hopefully does cover all possible\nissues."),(0,r.kt)("h2",a({},{id:"background"}),"Background"),(0,r.kt)("p",null,"In general, there are two possible sources of an issue: Code running on Node.js\n(which we call ",(0,r.kt)("em",{parentName:"p"},"server code"),"), and\n",(0,r.kt)("a",a({parentName:"p"},{href:"%5B%60Page.evaluate()%60%5D(../api/puppeteer.page.evaluate)"}),"code running in the browser"),"\n(which we call ",(0,r.kt)("em",{parentName:"p"},"client code"),"). There is also a third possible source being the\nbrowser itself (which we call ",(0,r.kt)("em",{parentName:"p"},"internal code"),"), but if you suspect this is the\nsource ",(0,r.kt)("strong",{parentName:"p"},"after attempting the methods below"),", we suggest\n",(0,r.kt)("a",a({parentName:"p"},{href:"https://github.com/puppeteer/puppeteer/issues"}),"searching existing issues"),"\nbefore\n",(0,r.kt)("a",a({parentName:"p"},{href:"https://github.com/puppeteer/puppeteer/issues/new/choose"}),"filing an issue"),"."),(0,r.kt)("h2",a({},{id:"debugging-methods-for-all-situations"}),"Debugging methods for all situations"),(0,r.kt)("p",null,"These methods can be used to debug any situation. These should be used as a\nquick sanity check before diving into more complex methods."),(0,r.kt)("h3",a({},{id:"turn-off-headless"}),"Turn off ",(0,r.kt)("a",a({parentName:"h3"},{href:"../api/puppeteer.browserlaunchargumentoptions.headless"}),(0,r.kt)("inlineCode",{parentName:"a"},"headless"))),(0,r.kt)("p",null,"Sometimes it's useful to see what the browser is displaying. Instead of\nlaunching in\n",(0,r.kt)("a",a({parentName:"p"},{href:"../api/puppeteer.browserlaunchargumentoptions.headless"}),(0,r.kt)("inlineCode",{parentName:"a"},"headless")),"\nmode, launch a full version of the browser with\n",(0,r.kt)("a",a({parentName:"p"},{href:"../api/puppeteer.browserlaunchargumentoptions.headless"}),(0,r.kt)("inlineCode",{parentName:"a"},"headless")),"\nset to ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-ts"}),"const browser = await puppeteer.launch({headless: false});\n")),(0,r.kt)("h3",a({},{id:"puppeteer-slow-mo"}),'Puppeteer "slow-mo"'),(0,r.kt)("p",null,"The ",(0,r.kt)("a",a({parentName:"p"},{href:"../api/puppeteer.browserconnectoptions.slowmo"}),(0,r.kt)("inlineCode",{parentName:"a"},"slowMo")),"\noption slows down Puppeteer operations by a specified amount of milliseconds.\nIt's another way to help see what's going on."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-ts"}),"const browser = await puppeteer.launch({\n  headless: false,\n  slowMo: 250, // slow down by 250ms\n});\n")),(0,r.kt)("h2",a({},{id:"debugging-methods-for-client-code"}),"Debugging methods for client code"),(0,r.kt)("h3",a({},{id:"capture-console-output"}),"Capture ",(0,r.kt)("inlineCode",{parentName:"h3"},"console.*")," output"),(0,r.kt)("p",null,"Since client code runs in the browser, doing ",(0,r.kt)("inlineCode",{parentName:"p"},"console.*")," in client code will not\ndirectly log to Node.js. However, you can\n",(0,r.kt)("a",a({parentName:"p"},{href:"../api/puppeteer.page.on"}),"listen")," for the\n",(0,r.kt)("a",a({parentName:"p"},{href:"../api/puppeteer.pageeventobject.console"}),(0,r.kt)("inlineCode",{parentName:"a"},"console"))," event which\nreturns a payload with the logged text."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-ts"}),"page.on('console', msg => console.log('PAGE LOG:', msg.text()));\n\nawait page.evaluate(() => console.log(`url is ${location.href}`));\n")),(0,r.kt)("h3",a({},{id:"use-the-debugger-in-the-browser"}),"Use the debugger in the browser"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Set\n",(0,r.kt)("a",a({parentName:"p"},{href:"../api/puppeteer.browserlaunchargumentoptions.devtools"}),(0,r.kt)("inlineCode",{parentName:"a"},"devtools")),"\nto ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," when launching Puppeteer:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",a({parentName:"pre"},{className:"language-ts"}),"const browser = await puppeteer.launch({devtools: true});\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add ",(0,r.kt)("inlineCode",{parentName:"p"},"debugger")," inside any client code you want debugged. For example,"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",a({parentName:"pre"},{className:"language-ts"}),"await page.evaluate(() => {\n  debugger;\n});\n")),(0,r.kt)("p",{parentName:"li"},"The Browser will now stop in the location the ",(0,r.kt)("inlineCode",{parentName:"p"},"debugger")," word is found in\ndebug mode."))),(0,r.kt)("h2",a({},{id:"debugging-methods-for-server-code"}),"Debugging methods for server code"),(0,r.kt)("h3",a({},{id:"use-the-debugger-in-nodejs-chromechromium-only"}),"Use the debugger in Node.js (Chrome/Chromium-only)"),(0,r.kt)("p",null,"Since server code intermingles with client code, this method of debugging is\nclosely tied with the browser. For example, you can step over\n",(0,r.kt)("inlineCode",{parentName:"p"},"await page.click()")," in the server script and see the click happen in the\nbrowser."),(0,r.kt)("p",null,"Note that you won't be able to run ",(0,r.kt)("inlineCode",{parentName:"p"},"await page.click()")," in DevTools console due\nto this\n",(0,r.kt)("a",a({parentName:"p"},{href:"https://bugs.chromium.org/p/chromium/issues/detail?id=833928"}),"Chromium bug"),", so\nif you want to try something out, you have to add it to your test file."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Set\n",(0,r.kt)("a",a({parentName:"p"},{href:"../api/puppeteer.browserlaunchargumentoptions.headless"}),(0,r.kt)("inlineCode",{parentName:"a"},"headless")),"\nto ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add ",(0,r.kt)("inlineCode",{parentName:"p"},"debugger")," to any server code you want debugged. For example,"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",a({parentName:"pre"},{className:"language-ts"}),"debugger;\nawait page.click('a[target=_blank]');\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run your server code with ",(0,r.kt)("inlineCode",{parentName:"p"},"--inspect-brk"),". For example,"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",a({parentName:"pre"},{className:"language-sh"}),"node --inspect-brk path/to/script.js\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the opened Chrome/Chromium browser, open ",(0,r.kt)("inlineCode",{parentName:"p"},"chrome://inspect/#devices")," and\nclick ",(0,r.kt)("inlineCode",{parentName:"p"},"inspect"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the newly opened test browser, press ",(0,r.kt)("inlineCode",{parentName:"p"},"F8")," to resume test execution.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Now your ",(0,r.kt)("inlineCode",{parentName:"p"},"debugger")," statement will be hit and you can debug in the test\nbrowser."))),(0,r.kt)("h3",a({},{id:"use-ndb"}),"Use ",(0,r.kt)("a",a({parentName:"h3"},{href:"https://github.com/GoogleChromeLabs/ndb"}),"ndb")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Install ",(0,r.kt)("inlineCode",{parentName:"p"},"ndb"),":"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",a({parentName:"pre"},{className:"language-sh"}),"npm install -g ndb\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add ",(0,r.kt)("inlineCode",{parentName:"p"},"debugger")," to any server code you want debugged. For example,"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",a({parentName:"pre"},{className:"language-ts"}),"debugger;\nawait page.click('a[target=_blank]');\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add ",(0,r.kt)("inlineCode",{parentName:"p"},"ndb")," before your test command. For example,"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",a({parentName:"pre"},{className:"language-sh"}),"ndb node path/to/script.js\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Debug your test inside chromium like a boss!"))),(0,r.kt)("h3",a({},{id:"log-devtools-protocol-traffic"}),"Log DevTools protocol traffic"),(0,r.kt)("p",null,"If all else fails, it's possible there may be an issue between Puppeteer and the\nDevTools protocol. You can debug this by setting the ",(0,r.kt)("inlineCode",{parentName:"p"},"DEBUG")," environment\nvariable before running your script. This will log internal traffic via\n",(0,r.kt)("a",a({parentName:"p"},{href:"https://github.com/visionmedia/debug"}),(0,r.kt)("inlineCode",{parentName:"a"},"debug"))," under the ",(0,r.kt)("inlineCode",{parentName:"p"},"puppeteer")," namespace."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-sh"}),'# Basic verbose logging\nenv DEBUG="puppeteer:*" node script.js\n\n# Protocol traffic can be rather noisy. This example filters out all Network domain messages\nenv DEBUG="puppeteer:*" env DEBUG_COLORS=true node script.js 2>&1 | grep -v \'"Network\'\n')))}c.isMDXComponent=!0}}]);