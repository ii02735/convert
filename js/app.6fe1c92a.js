(function(t){function e(e){for(var n,r,l=e[0],i=e[1],c=e[2],u=0,p=[];u<l.length;u++)r=l[u],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&p.push(o[r][0]),o[r]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);d&&d(e);while(p.length)p.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,r=1;r<a.length;r++){var l=a[r];0!==o[l]&&(n=!1)}n&&(s.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},r={app:0},o={app:0},s=[];function l(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"c9c92e8c"}[t]+".js"}function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(t){var e=[],a={about:1};r[t]?e.push(r[t]):0!==r[t]&&a[t]&&e.push(r[t]=new Promise((function(e,a){for(var n="css/"+({about:"about"}[t]||t)+"."+{about:"19762ffb"}[t]+".css",o=i.p+n,s=document.getElementsByTagName("link"),l=0;l<s.length;l++){var c=s[l],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===n||u===o))return e()}var p=document.getElementsByTagName("style");for(l=0;l<p.length;l++){c=p[l],u=c.getAttribute("data-href");if(u===n||u===o)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var n=e&&e.target&&e.target.src||o,s=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=n,delete r[t],d.parentNode.removeChild(d),a(s)},d.href=o;var m=document.getElementsByTagName("head")[0];m.appendChild(d)})).then((function(){r[t]=0})));var n=o[t];if(0!==n)if(n)e.push(n[2]);else{var s=new Promise((function(e,a){n=o[t]=[e,a]}));e.push(n[2]=s);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=l(t);var p=new Error;c=function(e){u.onerror=u.onload=null,clearTimeout(d);var a=o[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;p.message="Loading chunk "+t+" failed.\n("+n+": "+r+")",p.name="ChunkLoadError",p.type=n,p.request=r,a[1](p)}o[t]=void 0}};var d=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(e)},i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var p=0;p<c.length;p++)e(c[p]);var d=u;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},"057e":function(t,e,a){},"31cd":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("AppLayout",[a("router-view")],1)],1)},o=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",[a("nav",[a("Navbar")],1),a("section",{staticClass:"container-fluid content"},[t._t("default")],2),a("footer",[a("Footer")],1)])},l=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"container-fluid mynav"},[n("nav",{staticClass:"navbar shadow-lg navbar-expand-lg navbar-dark text-left fixed-top bg-dark"},[n("article",{staticClass:"container"},[n("router-link",{staticClass:"nav-link mr-lg-5 mr-md-5",attrs:{to:{name:"home"}}},[n("div",{staticClass:"logo text-center",attrs:{"data-toggle":"collapse","data-target":".navbar-collapse.show"}},[n("img",{attrs:{width:"31.5",height:"31.5",src:a("cf05"),alt:"logo"}})])]),t._m(0),n("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarColor02"}},[n("ul",{staticClass:"navbar-nav mr-auto"},[n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{"data-toggle":"collapse","data-target":".navbar-collapse.show",to:{name:"base"}}},[t._v("Base")])],1),n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{"data-toggle":"collapse","data-target":".navbar-collapse.show",to:{name:"devise"}}},[t._v("Devise ")])],1),n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{"data-toggle":"collapse","data-target":".navbar-collapse.show",to:{name:"distance"}}},[t._v("Distance")])],1),n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{"data-toggle":"collapse","data-target":".navbar-collapse.show",to:{name:"masse"}}},[t._v("Masse")])],1),n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{"data-toggle":"collapse","data-target":".navbar-collapse.show",to:{name:"resolution"}}},[t._v("Résolution")])],1),n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{"data-toggle":"collapse","data-target":".navbar-collapse.show",to:{name:"lettre"}}},[t._v("Lettre")])],1),n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{"data-toggle":"collapse","data-target":".navbar-collapse.show",to:{name:"hash"}}},[t._v("Hash")])],1),n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{"data-toggle":"collapse","data-target":".navbar-collapse.show",to:{name:"generate-password"}}},[t._v("Générer mot de passe")])],1)]),n("ul",{staticClass:"navbar-nav ",attrs:{"data-children-count":"1"}},[n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{"data-toggle":"collapse","data-target":".navbar-collapse.show",to:{name:"me"}}},[t._v("Qui suis je ? ")])],1),n("li",{staticClass:"nav-item"},[n("a",{staticClass:"nav-link",attrs:{href:"#","data-toggle":"collapse","data-target":".navbar-collapse.show"},on:{click:t.darkThemeSwitch}},[t._v("mode ")])])])])],1)])])},c=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarColor02","aria-controls":"navbarColor02","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])}],u={name:"Index",methods:{_addDarkTheme:function(){var t=document.createElement("link");t.setAttribute("rel","stylesheet"),t.setAttribute("href","/css/darktheme.css"),t.setAttribute("id","dark-theme-style");var e=document.querySelector("head");e.append(t)},_removeDarkTheme:function(){var t=document.querySelector("#dark-theme-style"),e=t.parentNode;e.removeChild(t)},darkThemeSwitch:function(){var t=document.querySelector("#dark-theme-style");t?this._removeDarkTheme():this._addDarkTheme()}}},p=u,d=(a("d2cc"),a("2877")),m=Object(d["a"])(p,i,c,!1,null,"638b4e9f",null),v=m.exports,f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("footer",{staticClass:"page-footer font-small pt-2 container-fluid",attrs:{id:"footers"}},[a("div",{staticClass:"container text-center mt-2",attrs:{id:"fcontainer"}},[a("span",[t._v("Copyright © "+t._s((new Date).getFullYear())+" MAREGA Oumar. Tous droits réservés!")])])])])},h=[],b={name:"Footer"},g=b,y=(a("97a3"),Object(d["a"])(g,f,h,!1,null,"b603cea2",null)),k=y.exports,C={name:"AppLayout",components:{Navbar:v,Footer:k}},_=C,w=Object(d["a"])(_,s,l,!1,null,null,null),x=w.exports,j={name:"App",components:{AppLayout:x}},E=j,O=(a("034f"),Object(d["a"])(E,r,o,!1,null,null,null)),T=O.exports,A=(a("d3b7"),a("8c4f")),S=a("7bb1");n["a"].use(A["a"]),n["a"].use(S);var $=[{path:"/",name:"",component:function(){return a.e("about").then(a.bind(null,"bb51"))},children:[{path:"",name:"home",component:function(){return a.e("about").then(a.bind(null,"05e9"))}},{path:"convertisseur-base",name:"base",component:function(){return a.e("about").then(a.bind(null,"300d"))}},{path:"convertisseur-devise",name:"devise",component:function(){return a.e("about").then(a.bind(null,"4caa"))}},{path:"convertisseur-distance-km-mm",name:"distance",component:function(){return a.e("about").then(a.bind(null,"5280"))}},{path:"convertisseur-masse-kg-mg",name:"masse",component:function(){return a.e("about").then(a.bind(null,"1273"))}},{path:"convertisseur-resolution-px-rem",name:"resolution",component:function(){return a.e("about").then(a.bind(null,"3d5b"))}},{path:"convertisseur-lettre-majuscule-minuscule",name:"lettre",component:function(){return a.e("about").then(a.bind(null,"4603"))}},{path:"hash-sha-mdp-bcrypt",name:"hash",component:function(){return a.e("about").then(a.bind(null,"8e2b"))}},{path:"generer-mot-de-passe",name:"generate-password",component:function(){return a.e("about").then(a.bind(null,"05bb"))}},{path:"correcteur-orthographique-traduction",name:"reverso",component:function(){return a.e("about").then(a.bind(null,"612c"))}},{path:"oumar-marega",name:"me",component:function(){return a.e("about").then(a.bind(null,"c429"))}}]},{path:"*",redirect:"/"}],P=new A["a"]({mode:"history",base:"",routes:$});P.beforeEach((function(t,e,a){window.scrollTo(0,0),a()}));var D=P,L=(a("ab8b"),a("3e48"),a("41e9"),a("bc3a")),N=a.n(L);n["a"].prototype.$axios=N.a,n["a"].prototype.$url_devise_key="1bc7a3306ba06819c6fc",n["a"].prototype.$url_news_key="b91aaef1b9ab4235b6fe1766bff8d3e2",n["a"].prototype.$url_news="https://newsapi.org/v2/top-headlines?country=fr&category=technology&apiKey=b91aaef1b9ab4235b6fe1766bff8d3e2",n["a"].prototype.$url_devise="https://free.currconv.com/api/v7/convert",n["a"].prototype.$own_api_url="https://boiling-escarpment-06159.herokuapp.com",n["a"].config.productionTip=!1,new n["a"]({router:D,render:function(t){return t(T)}}).$mount("#app")},"85ec":function(t,e,a){},"97a3":function(t,e,a){"use strict";a("31cd")},cf05:function(t,e,a){t.exports=a.p+"img/logo.45800b8c.png"},d2cc:function(t,e,a){"use strict";a("057e")}});
//# sourceMappingURL=app.6fe1c92a.js.map