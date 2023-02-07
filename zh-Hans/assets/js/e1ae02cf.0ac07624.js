"use strict";(self.webpackChunkbook=self.webpackChunkbook||[]).push([[4353],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(a),d=r,h=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return a?n.createElement(h,o(o({ref:t},p),{},{components:a})):n.createElement(h,o({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},7213:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const i={sidebar_position:1},o="5.1 Introduction",s={unversionedId:"develop/javascript/intro",id:"develop/javascript/intro",title:"5.1 Introduction",description:'WebAssembly started as a "JavaScript alternative for browsers". The idea is to run high-performance applications compiled from languages like C/C++ or Rust safely in browsers. In the browser, WebAssembly runs side by side with JavaScript.',source:"@site/docs/develop/javascript/intro.md",sourceDirName:"develop/javascript",slug:"/develop/javascript/intro",permalink:"/book/zh-Hans/develop/javascript/intro",draft:!1,editUrl:"https://github.com/alabulei1/book/docs/develop/javascript/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"developSidebar",previous:{title:"Develop Wasm Apps in JavaScript",permalink:"/book/zh-Hans/category/develop-wasm-apps-in-javascript"},next:{title:"5.2 Quick Start with JavaScript on WasmEdge",permalink:"/book/zh-Hans/develop/javascript/hello_world"}},l={},c=[{value:"Why run JavaScript in WasmEdge",id:"why-run-javascript-in-wasmedge",level:2},{value:"A note on v8",id:"a-note-on-v8",level:2}],p={toc:c};function u(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"51-introduction"},"5.1 Introduction"),(0,r.kt)("p",null,'WebAssembly started as a "JavaScript alternative for browsers". The idea is to run high-performance applications compiled from languages like C/C++ or Rust safely in browsers. In the browser, WebAssembly runs side by side with JavaScript.'),(0,r.kt)("p",null,"As WebAssembly is increasingly used in the cloud, it is now a universal runtime for cloud-native applications. Compared with Linux containers, WebAssembly runtimes achieve higher performance with lower resource consumption."),(0,r.kt)("p",null,"In cloud-native use cases, developers often want to use JavaScript to write business applications. That means we must now support JavaScript in WebAssembly. Furthermore, we should support calling C/C++ or Rust functions from JavaScript in a WebAssembly runtime to take advantage of WebAssembly's computational efficiency. The WasmEdge WebAssembly runtime allows you to do exactly that."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"javascript",src:a(8521).Z,width:"424",height:"545"})),(0,r.kt)("h2",{id:"why-run-javascript-in-wasmedge"},"Why run JavaScript in WasmEdge"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Lightweight and secure JS runtime. Compared with V8 and Node.js, WasmEdge itself is a lightweight\uff0c high performance JavaScript runtime\u3002"),(0,r.kt)("li",{parentName:"ul"},"No need for Linux containers. WasmEdge could be a secure container without tons of dependencies."),(0,r.kt)("li",{parentName:"ul"},"Node.js compatible. See the status ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/WasmEdge/WasmEdge/issues/1535"},"here"),". "),(0,r.kt)("li",{parentName:"ul"},"Use Rust to implement JS APIs. See the tutorial here.")),(0,r.kt)("p",null,"In this section, we will demonstrate how to run and enhance JavaScript in WasmEdge."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"hello_world"},"Getting started")," demonstrates how to run simple JavaScript programs in WasmEdge."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"nodejs"},"Node.js compatibility")," describes Node.js APIs support in WasmEdge QuickJS."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../../category/http-service"},"Networking sockets")," shows how to create non-blocking (async) HTTP clients, including the ",(0,r.kt)("inlineCode",{parentName:"li"},"fetch")," API, and server applications in JavaScript."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"es6"},"ES6 modules")," shows how to incorporate ES6 modules in WasmEdge."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"npm"},"Node.js and NPM modules")," shows how to incorporate NPM modules in WasmEdge."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"modules"},"Built-in modules")," shows how to add JavaScript functions into the WasmEdge runtime as built-in API functions."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"rust"},"Use Rust to implement JS API")," discusses how to use Rust to implement and support a JavaScript API."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"ssr"},"React SSR")," shows example React SSR applications, including streaming SSR support.")),(0,r.kt)("h2",{id:"a-note-on-v8"},"A note on v8"),(0,r.kt)("p",null,"Now, the choice of QuickJS as our JavaScript engine might raise the question of performance. Isn't QuickJS ",(0,r.kt)("a",{parentName:"p",href:"https://bellard.org/quickjs/bench.html"},"a lot slower")," than v8 due to a lack of JIT support? Yes, but ..."),(0,r.kt)("p",null,"First of all, QuickJS is a lot smaller than v8. In fact, it only takes 1/40 (or 2.5%) of the runtime resources v8 consumes. You can run a lot more QuickJS functions than v8 functions on a single physical machine."),(0,r.kt)("p",null,"Second, for most business logic applications, raw performance is not critical. The application may have computationally intensive tasks, such as AI inference on the fly. WasmEdge allows the QuickJS applications to drop to high-performance WebAssembly for these tasks while it is not so easy with v8 to add such extensions modules."),(0,r.kt)("p",null,"Third, WasmEdge is ",(0,r.kt)("a",{parentName:"p",href:"../deploy/intro"},"itself an OCI compliant container"),".\nIt is secure by default, supports resource isolation, and can be managed by container tools to run side by side with Linux containers in a single k8s cluster."),(0,r.kt)("p",null,"Finally, v8 has a very large attack surface and requires ",(0,r.kt)("a",{parentName:"p",href:"https://blog.cloudflare.com/mitigating-spectre-and-other-security-threats-the-cloudflare-workers-security-model/"},"major efforts")," to run securely in a public cloud environment.\nIt is known that ",(0,r.kt)("a",{parentName:"p",href:"https://www.theregister.com/2021/08/06/edge_super_duper_security_mode/"},"many JavaScript security issues arise from JIT"),". Maybe turning off JIT in the cloud-native environment is not such a bad idea!"),(0,r.kt)("p",null,'In the end, running v8 in a cloud-native environment often requires a full stack of software tools consisting of "Linux container + guest OS + node or deno + v8", which makes it much heavier and slower than a simple WasmEdge + QuickJS container runtime.'))}u.isMDXComponent=!0},8521:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/javascript-62ca41fd693f78d9a03104d2ba75e49d.png"}}]);