(()=>{"use strict";var e,a,f,d,b,c={},t={};function r(e){var a=t[e];if(void 0!==a)return a.exports;var f=t[e]={id:e,loaded:!1,exports:{}};return c[e].call(f.exports,f,f.exports,r),f.loaded=!0,f.exports}r.m=c,r.c=t,e=[],r.O=(a,f,d,b)=>{if(!f){var c=1/0;for(i=0;i<e.length;i++){f=e[i][0],d=e[i][1],b=e[i][2];for(var t=!0,o=0;o<f.length;o++)(!1&b||c>=b)&&Object.keys(r.O).every((e=>r.O[e](f[o])))?f.splice(o--,1):(t=!1,b<c&&(c=b));if(t){e.splice(i--,1);var n=d();void 0!==n&&(a=n)}}return a}b=b||0;for(var i=e.length;i>0&&e[i-1][2]>b;i--)e[i]=e[i-1];e[i]=[f,d,b]},r.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return r.d(a,{a:a}),a},f=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,r.t=function(e,d){if(1&d&&(e=this(e)),8&d)return e;if("object"==typeof e&&e){if(4&d&&e.__esModule)return e;if(16&d&&"function"==typeof e.then)return e}var b=Object.create(null);r.r(b);var c={};a=a||[null,f({}),f([]),f(f)];for(var t=2&d&&e;"object"==typeof t&&!~a.indexOf(t);t=f(t))Object.getOwnPropertyNames(t).forEach((a=>c[a]=()=>e[a]));return c.default=()=>e,r.d(b,c),b},r.d=(e,a)=>{for(var f in a)r.o(a,f)&&!r.o(e,f)&&Object.defineProperty(e,f,{enumerable:!0,get:a[f]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((a,f)=>(r.f[f](e,a),a)),[])),r.u=e=>"assets/js/"+({13:"90c5bef1",53:"935f2afb",86:"4066af99",145:"2c9f3711",281:"7d55b5e2",375:"3a206099",446:"9189d665",484:"1bc31c30",498:"ff75fcec",516:"6f32652b",614:"d9302ef5",661:"6422441f",695:"8c40ebfb",864:"02f9581c",876:"1fabf6b0",996:"284582ab",1010:"ca66694c",1013:"8d4d9de5",1090:"eacb4fc3",1096:"3ccefc6c",1447:"9918f286",1495:"6ba93588",1497:"b36e8a1e",1506:"f2da5b41",1514:"cb16ffb8",1870:"c40adfc5",1881:"931b0769",1898:"80de8193",1930:"2ec20889",2131:"0a77790f",2201:"63693880",2470:"aae5bef1",2531:"a9a005c2",2713:"5d4c99a4",2790:"57394ba3",2922:"f65eacb5",3067:"90b2bdcf",3085:"1f391b9e",3169:"93d1247a",3365:"9c953695",3490:"f757d4f5",3510:"7bbd1200",3547:"747877d3",3591:"0ca7c6d9",3592:"397f901d",3779:"5079cd12",3917:"4fa711aa",3946:"b984b8d5",3994:"feab161e",4125:"46d3d331",4195:"c4f5d8e4",4348:"6b5a99ac",4353:"e1ae02cf",4374:"db7d6c9d",4541:"bfc76bad",4695:"580f0f7f",4844:"560baf7e",4845:"4406d94b",4930:"fcfb0d9f",5020:"8e0cd2ff",5058:"4a5e354f",5076:"70c0a137",5096:"e19da909",5173:"4b7d277b",5185:"108dca9e",5245:"d928b34c",5255:"3b435a04",5311:"9389216e",5351:"60b1565b",5353:"0bb02649",5466:"5c23b30f",5509:"79a6852f",5520:"28f33f95",5554:"1ac135e4",5614:"d59b60cc",5668:"338d3fa8",5688:"4298c4f5",5785:"1f84e766",5877:"574d0ce0",5918:"42d3ccd1",5937:"2513ce95",5945:"89ea910b",5954:"d0801a73",5976:"b66ba5d6",6051:"fb43b91b",6126:"e440ae75",6129:"aa3a4773",6157:"bc9dff98",6201:"fb6d84aa",6238:"f0376a57",6345:"6134105f",6357:"4f735751",6445:"6834a6a4",6449:"a2fe9a4b",6455:"8bf1b516",6518:"a70c4eb2",6541:"649c46e9",6544:"316b1bd9",6591:"816162fc",6615:"c9f634a6",6681:"34c250fd",6718:"639a8f02",6768:"32027ce3",6974:"7af7e5b8",6992:"026c67d7",7023:"33beb692",7074:"de975e5e",7226:"c56f5b93",7269:"a0f00cde",7308:"6b52998c",7321:"91ed4af6",7414:"393be207",7466:"f6bdca35",7493:"b1eea551",7644:"833d543f",7728:"f4a8f7dd",7834:"c32cb622",7847:"d4854f22",7887:"0a64acd0",7918:"17896441",7961:"30996784",7969:"32d32582",8020:"5ddf4091",8098:"0a6c7d4c",8132:"01093ebb",8148:"ad77907d",8247:"bdc41217",8282:"bff9c78b",8350:"611779dc",8376:"19e357e0",8421:"7b104fd2",8482:"f9d87ba7",8536:"427a1bb7",8600:"e125b94e",8721:"9bfbb778",8820:"ebdebde0",8833:"8a7f94e0",8863:"a2936dad",8937:"1029b3d4",8991:"84b88873",8999:"f10e14a0",9049:"ea0113de",9153:"1ab29fce",9250:"7660780d",9276:"6165c96b",9317:"d6e38de2",9468:"b5ada569",9483:"617c7cfe",9490:"438f9299",9514:"1be78505",9534:"3f9b013b",9598:"ec4aa70d",9734:"18d8227e",9755:"c059c508",9771:"7b966514",9796:"0cc40a68",9806:"41b4135e",9817:"14eb3368",9974:"52d40724",9975:"7670aa81"}[e]||e)+"."+{13:"c4a163e0",53:"081e2848",86:"3db22061",145:"69dd346f",281:"478c5604",375:"792f3245",446:"2f23622e",484:"ba7afe88",498:"795b9eec",516:"6fee20bd",614:"936a2550",661:"f0074bb8",695:"62c4fde8",864:"3fcbbc3d",876:"28528cef",996:"439b17ab",1010:"639e54ef",1013:"d0f7e5f7",1090:"7d88e429",1096:"917ecf25",1447:"42a908ac",1495:"857cb501",1497:"ce489ff7",1506:"cd999bbf",1514:"25e7b904",1870:"21bf7dbf",1881:"9413c03c",1898:"7f00319c",1930:"fb892d27",2131:"fa1290ef",2201:"e3d7efe1",2470:"ca3dbf47",2531:"8eca9fd1",2666:"a14a3352",2713:"adfdf671",2790:"12c9715f",2922:"e1e94acf",3067:"a956cb62",3085:"da85b74c",3169:"69ae9cfb",3365:"8052bca7",3490:"ad590d98",3510:"b7388a63",3547:"bf4bc47b",3591:"7cfe5463",3592:"999dcd1d",3779:"ff07f770",3917:"7fa02aec",3946:"3ed39f84",3994:"0956a4a2",4125:"d37e32de",4195:"2b5cfd8d",4348:"45d35adb",4353:"0ac07624",4374:"fee948fa",4541:"ddae1df2",4695:"569ec271",4844:"318bb862",4845:"c64fa4b8",4930:"db557529",4972:"b6ce05fe",5020:"71499643",5058:"63900ee3",5076:"d652b804",5096:"126278c2",5173:"ec43ee78",5185:"af5cba8f",5245:"66b0e5cd",5255:"b1a3558d",5311:"05181920",5351:"a4a2fca5",5353:"ae3dafda",5466:"19495a46",5509:"a94a79bb",5520:"af50d3f4",5554:"cbc32720",5614:"614b7877",5668:"f0f6abf2",5688:"916f8930",5785:"12f5a939",5877:"c2203939",5918:"1b17ac49",5937:"defe794d",5945:"d07fcf7f",5954:"1b67b280",5976:"4c151619",6051:"c405a3ce",6126:"af0cd649",6129:"2cb6cc11",6157:"d56a2370",6201:"638d5f45",6238:"37f786aa",6345:"6b69d05b",6357:"1bfe7333",6445:"97fbf068",6449:"29caee4c",6455:"d5cdccbd",6518:"b0d3bf6d",6541:"f9244a59",6544:"2751f811",6591:"915f4950",6615:"4a357188",6681:"cb1395da",6718:"c2699f5d",6768:"d70c22ab",6974:"e31cc7c9",6992:"4fb4a480",7023:"6657c479",7074:"928832b0",7226:"c358936b",7269:"164ad2ab",7308:"c3407540",7321:"ec190360",7414:"bd3a82a7",7466:"7bc303e7",7493:"078d6f95",7644:"6211fe4c",7728:"7e7f4530",7834:"f1565210",7847:"c7b6fb09",7887:"ebea083b",7918:"1355db49",7961:"213cd016",7969:"dc1ddf6f",8020:"f8a31fa2",8098:"711e1aa7",8132:"e00acd5b",8148:"5e7a40df",8247:"52920920",8282:"f3d3286e",8350:"2973dd90",8376:"da323b3c",8421:"898646fb",8482:"38a91bf0",8536:"9aee63b9",8600:"804f4ea7",8721:"b8b23f5c",8820:"aba189da",8833:"5e70d38c",8863:"1d606bc8",8937:"fa59803c",8991:"f4094632",8999:"e48645d6",9049:"43712174",9153:"1d0e06fa",9250:"fb71067d",9276:"2f167be4",9317:"29c1d95a",9468:"610aa717",9483:"2d2d70d4",9490:"3d46efcc",9514:"bc32eeb9",9534:"cce10f55",9598:"b92d9145",9734:"d778939e",9755:"7fdacee3",9771:"20e08138",9796:"8a6402b3",9806:"f1d80853",9817:"d83986bf",9974:"24ab14f8",9975:"b4e9194d"}[e]+".js",r.miniCssF=e=>{},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),d={},b="book:",r.l=(e,a,f,c)=>{if(d[e])d[e].push(a);else{var t,o;if(void 0!==f)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var u=n[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==b+f){t=u;break}}t||(o=!0,(t=document.createElement("script")).charset="utf-8",t.timeout=120,r.nc&&t.setAttribute("nonce",r.nc),t.setAttribute("data-webpack",b+f),t.src=e),d[e]=[a];var l=(a,f)=>{t.onerror=t.onload=null,clearTimeout(s);var b=d[e];if(delete d[e],t.parentNode&&t.parentNode.removeChild(t),b&&b.forEach((e=>e(f))),a)return a(f)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:t}),12e4);t.onerror=l.bind(null,t.onerror),t.onload=l.bind(null,t.onload),o&&document.head.appendChild(t)}},r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.p="/book/zh-Hans/",r.gca=function(e){return e={17896441:"7918",30996784:"7961",63693880:"2201","90c5bef1":"13","935f2afb":"53","4066af99":"86","2c9f3711":"145","7d55b5e2":"281","3a206099":"375","9189d665":"446","1bc31c30":"484",ff75fcec:"498","6f32652b":"516",d9302ef5:"614","6422441f":"661","8c40ebfb":"695","02f9581c":"864","1fabf6b0":"876","284582ab":"996",ca66694c:"1010","8d4d9de5":"1013",eacb4fc3:"1090","3ccefc6c":"1096","9918f286":"1447","6ba93588":"1495",b36e8a1e:"1497",f2da5b41:"1506",cb16ffb8:"1514",c40adfc5:"1870","931b0769":"1881","80de8193":"1898","2ec20889":"1930","0a77790f":"2131",aae5bef1:"2470",a9a005c2:"2531","5d4c99a4":"2713","57394ba3":"2790",f65eacb5:"2922","90b2bdcf":"3067","1f391b9e":"3085","93d1247a":"3169","9c953695":"3365",f757d4f5:"3490","7bbd1200":"3510","747877d3":"3547","0ca7c6d9":"3591","397f901d":"3592","5079cd12":"3779","4fa711aa":"3917",b984b8d5:"3946",feab161e:"3994","46d3d331":"4125",c4f5d8e4:"4195","6b5a99ac":"4348",e1ae02cf:"4353",db7d6c9d:"4374",bfc76bad:"4541","580f0f7f":"4695","560baf7e":"4844","4406d94b":"4845",fcfb0d9f:"4930","8e0cd2ff":"5020","4a5e354f":"5058","70c0a137":"5076",e19da909:"5096","4b7d277b":"5173","108dca9e":"5185",d928b34c:"5245","3b435a04":"5255","9389216e":"5311","60b1565b":"5351","0bb02649":"5353","5c23b30f":"5466","79a6852f":"5509","28f33f95":"5520","1ac135e4":"5554",d59b60cc:"5614","338d3fa8":"5668","4298c4f5":"5688","1f84e766":"5785","574d0ce0":"5877","42d3ccd1":"5918","2513ce95":"5937","89ea910b":"5945",d0801a73:"5954",b66ba5d6:"5976",fb43b91b:"6051",e440ae75:"6126",aa3a4773:"6129",bc9dff98:"6157",fb6d84aa:"6201",f0376a57:"6238","6134105f":"6345","4f735751":"6357","6834a6a4":"6445",a2fe9a4b:"6449","8bf1b516":"6455",a70c4eb2:"6518","649c46e9":"6541","316b1bd9":"6544","816162fc":"6591",c9f634a6:"6615","34c250fd":"6681","639a8f02":"6718","32027ce3":"6768","7af7e5b8":"6974","026c67d7":"6992","33beb692":"7023",de975e5e:"7074",c56f5b93:"7226",a0f00cde:"7269","6b52998c":"7308","91ed4af6":"7321","393be207":"7414",f6bdca35:"7466",b1eea551:"7493","833d543f":"7644",f4a8f7dd:"7728",c32cb622:"7834",d4854f22:"7847","0a64acd0":"7887","32d32582":"7969","5ddf4091":"8020","0a6c7d4c":"8098","01093ebb":"8132",ad77907d:"8148",bdc41217:"8247",bff9c78b:"8282","611779dc":"8350","19e357e0":"8376","7b104fd2":"8421",f9d87ba7:"8482","427a1bb7":"8536",e125b94e:"8600","9bfbb778":"8721",ebdebde0:"8820","8a7f94e0":"8833",a2936dad:"8863","1029b3d4":"8937","84b88873":"8991",f10e14a0:"8999",ea0113de:"9049","1ab29fce":"9153","7660780d":"9250","6165c96b":"9276",d6e38de2:"9317",b5ada569:"9468","617c7cfe":"9483","438f9299":"9490","1be78505":"9514","3f9b013b":"9534",ec4aa70d:"9598","18d8227e":"9734",c059c508:"9755","7b966514":"9771","0cc40a68":"9796","41b4135e":"9806","14eb3368":"9817","52d40724":"9974","7670aa81":"9975"}[e]||e,r.p+r.u(e)},(()=>{var e={1303:0,532:0};r.f.j=(a,f)=>{var d=r.o(e,a)?e[a]:void 0;if(0!==d)if(d)f.push(d[2]);else if(/^(1303|532)$/.test(a))e[a]=0;else{var b=new Promise(((f,b)=>d=e[a]=[f,b]));f.push(d[2]=b);var c=r.p+r.u(a),t=new Error;r.l(c,(f=>{if(r.o(e,a)&&(0!==(d=e[a])&&(e[a]=void 0),d)){var b=f&&("load"===f.type?"missing":f.type),c=f&&f.target&&f.target.src;t.message="Loading chunk "+a+" failed.\n("+b+": "+c+")",t.name="ChunkLoadError",t.type=b,t.request=c,d[1](t)}}),"chunk-"+a,a)}},r.O.j=a=>0===e[a];var a=(a,f)=>{var d,b,c=f[0],t=f[1],o=f[2],n=0;if(c.some((a=>0!==e[a]))){for(d in t)r.o(t,d)&&(r.m[d]=t[d]);if(o)var i=o(r)}for(a&&a(f);n<c.length;n++)b=c[n],r.o(e,b)&&e[b]&&e[b][0](),e[b]=0;return r.O(i)},f=self.webpackChunkbook=self.webpackChunkbook||[];f.forEach(a.bind(null,0)),f.push=a.bind(null,f.push.bind(f))})()})();