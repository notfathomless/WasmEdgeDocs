"use strict";(self.webpackChunkbook=self.webpackChunkbook||[]).push([[145],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>c});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=p(a),g=o,c=d["".concat(s,".").concat(g)]||d[g]||u[g]||r;return a?n.createElement(c,i(i({ref:t},m),{},{components:a})):n.createElement(c,i({ref:t},m))}));function c(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},4777:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var n=a(7462),o=(a(7294),a(3905));const r={sidebar_position:1},i="6.1 WasmEdge Go SDK Introduction",l={unversionedId:"embed/go/intro",id:"embed/go/intro",title:"6.1 WasmEdge Go SDK Introduction",description:"The following are the guide to work with the WasmEdge Go API. You can embed the WasmEdge into your go application through the WasmEdge Go API.",source:"@site/docs/embed/go/intro.md",sourceDirName:"embed/go",slug:"/embed/go/intro",permalink:"/book/zh-Hans/embed/go/intro",draft:!1,editUrl:"https://github.com/alabulei1/book/docs/embed/go/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"embedSidebar",previous:{title:"Go SDK for Embedding Wasm Functions",permalink:"/book/zh-Hans/category/go-sdk-for-embedding-wasm-functions"},next:{title:"6.2 Embed Wasm Apps",permalink:"/book/zh-Hans/embed/go/app"}},s={},p=[{value:"Set up environment for embedding Wasm functions into your go application",id:"set-up-environment-for-embedding-wasm-functions-into-your-go-application",level:2},{value:"Install and build WasmEdge and WasmEdge Go SDK",id:"install-and-build-wasmedge-and-wasmedge-go-sdk",level:3},{value:"Build WasmEdge-go Extensions",id:"build-wasmedge-go-extensions",level:3},{value:"WasmEdge AOT Compiler in Go",id:"wasmedge-aot-compiler-in-go",level:3},{value:"toolchain for compile the source code to Wasm bytecode",id:"toolchain-for-compile-the-source-code-to-wasm-bytecode",level:3},{value:"Examples",id:"examples",level:2},{value:"API References",id:"api-references",level:2}],m={toc:p};function d(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"61-wasmedge-go-sdk-introduction"},"6.1 WasmEdge Go SDK Introduction"),(0,o.kt)("p",null,"The following are the guide to work with the WasmEdge Go API. You can embed the WasmEdge into your go application through the WasmEdge Go API."),(0,o.kt)("h2",{id:"set-up-environment-for-embedding-wasm-functions-into-your-go-application"},"Set up environment for embedding Wasm functions into your go application"),(0,o.kt)("h3",{id:"install-and-build-wasmedge-and-wasmedge-go-sdk"},"Install and build WasmEdge and WasmEdge Go SDK"),(0,o.kt)("p",null,"The WasmEdge-go requires golang version >= 1.16. Please check your golang version before installation. You can ",(0,o.kt)("a",{parentName:"p",href:"https://golang.org/dl/"},"download golang here"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ go version\ngo version go1.16.5 linux/amd64\n")),(0,o.kt)("p",null,"Meantime, please make sure you have installed ",(0,o.kt)("a",{parentName:"p",href:"/book/zh-Hans/develop/build-and-run/install"},"WasmEdge")," with the same ",(0,o.kt)("inlineCode",{parentName:"p"},"WasmEdge-go")," release version."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -sSf https://raw.githubusercontent.com/WasmEdge/WasmEdge/master/utils/install.sh | bash -s -- -v {{ wasmedge_version }}\n")),(0,o.kt)("p",null,"If you need the ",(0,o.kt)("inlineCode",{parentName:"p"},"TensorFlow")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"Image")," extension for ",(0,o.kt)("inlineCode",{parentName:"p"},"WasmEdge-go"),", please install the ",(0,o.kt)("inlineCode",{parentName:"p"},"WasmEdge")," with extensions:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -sSf https://raw.githubusercontent.com/WasmEdge/WasmEdge/master/utils/install.sh | bash -s -- -v {{ wasmedge_version }} -e tensorflow,image\n")),(0,o.kt)("p",null,"Noticed that the ",(0,o.kt)("inlineCode",{parentName:"p"},"TensorFlow")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Image")," extensions are only for the ",(0,o.kt)("inlineCode",{parentName:"p"},"Linux")," platforms."),(0,o.kt)("p",null,"Install the ",(0,o.kt)("inlineCode",{parentName:"p"},"WasmEdge-go")," package and build in your Go project directory:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"go get github.com/second-state/WasmEdge-go/wasmedge@v{{ wasmedge_version }}\ngo build\n")),(0,o.kt)("h3",{id:"build-wasmedge-go-extensions"},"Build WasmEdge-go Extensions"),(0,o.kt)("p",null,"By default, the ",(0,o.kt)("inlineCode",{parentName:"p"},"WasmEdge-go")," only turns on the basic runtime."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"WasmEdge-go")," has the following extensions:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"TensorFlow"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"This extension supports the host functions in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/second-state/WasmEdge-tensorflow"},"WasmEdge-tensorflow"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"To install the ",(0,o.kt)("inlineCode",{parentName:"p"},"tensorflow")," extension, please use the ",(0,o.kt)("inlineCode",{parentName:"p"},"-e tensorflow")," flag in the WasmEdge installer command.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"For using this extension, the tag ",(0,o.kt)("inlineCode",{parentName:"p"},"tensorflow")," when building is required:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"go build -tags tensorflow\n"))))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Image"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"This extension supports the host functions in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/second-state/WasmEdge-image"},"WasmEdge-image"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"To install the ",(0,o.kt)("inlineCode",{parentName:"p"},"image")," extension, please use the ",(0,o.kt)("inlineCode",{parentName:"p"},"-e image")," flag in the WasmEdge installer command.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"For using this extension, the tag ",(0,o.kt)("inlineCode",{parentName:"p"},"image")," when building is required:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"go build -tags image\n")))))),(0,o.kt)("p",null,"You can also turn on the multiple extensions when building:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"go build -tags image,tensorflow\n")),(0,o.kt)("p",null,"For examples, please refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/second-state/WasmEdge-go-examples/"},"example repository"),"."),(0,o.kt)("h3",{id:"wasmedge-aot-compiler-in-go"},"WasmEdge AOT Compiler in Go"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/second-state/WasmEdge-go-examples/tree/master/go_WasmAOT"},"go_WasmAOT example")," demonstrates how to compile a WASM file into a native binary (AOT compile) from within a Go application."),(0,o.kt)("h3",{id:"toolchain-for-compile-the-source-code-to-wasm-bytecode"},"toolchain for compile the source code to Wasm bytecode"),(0,o.kt)("p",null,"To embed WasmEdge into your go application and run the Wasm function, we still need language toolchain to compile the source code to Wasm bytecode."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"For Rust, please refer to ",(0,o.kt)("a",{parentName:"p",href:"/book/zh-Hans/develop/rust/setup"},"the Rust set up guide"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"For Tinygo, please refer to ",(0,o.kt)("a",{parentName:"p",href:"/book/zh-Hans/develop/go/hello_world"},"the Tinygo set up guide"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"For C, please refer to ",(0,o.kt)("a",{parentName:"p",href:"/book/zh-Hans/develop/c/hello_world"},"the C set up guide"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"For Javascript, you need to the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/second-state/wasmedge-quickjs"},"WasmEdge-QuickJS")," into your Go application. See a community example ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Edgenesis/wasm-shifu-demo"},"here"),"."))),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/book/zh-Hans/embed/go/app"},"Embed a standalone Wasm app")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/book/zh-Hans/embed/go/function"},"Embed a Wasm function")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/book/zh-Hans/embed/go/data"},"Pass complex parameters to Wasm functions")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/book/zh-Hans/embed/go/ai"},"Embed a Tensorflow inference function")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/book/zh-Hans/embed/go/data"},"Embed a bindgen function"))),(0,o.kt)("h2",{id:"api-references"},"API References"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/book/zh-Hans/embed/go/reference/0.11.2"},"v0.11.2")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/book/zh-Hans/embed/go/reference/0.10.1"},"v0.10.1")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/book/zh-Hans/embed/go/reference/0.9.1"},"v0.9.1"))))}d.isMDXComponent=!0}}]);