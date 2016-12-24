!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var r in n)("object"==typeof exports?exports:e)[r]=n[r]}}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return e[r].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";function r(e){return f.init(e)}var i=this&&this.e||function(e,t){function n(){this.constructor=e}for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r]);e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)},o=n(2),s=n(3),c=n(4),u=function(){function e(){var e=this;e.t=new o.tsMap,e.n=new o.tsMap,e.r=new o.tsMap,e.i=[],e.o=["change","delete","upsert","drop","select","error"],e.s=new o.tsMap,e.s.set("*",new o.tsMap),e.o.forEach(function(t){e.s.get("*").set(t,[])}),e.u=new o.tsMap,e.a=[]}return e.prototype.init=function(e){return e&&(this.f=e),this},e.prototype.connect=function(e){var t=this;return t.l=e||new c.someSQL_MemDB,new a(t,function(e,n){t.l.connect(t.r,t.t,t.n,t.u,e,n)})},e.prototype.on=function(e,t){var n=this,r=n.f;return n.s.get(r)||n.o.forEach(function(e){n.s.get(r).set(e,[])}),e.split(" ").forEach(function(e){n.o.indexOf(e)!=-1&&n.s.get(r).get(e).push(t)}),n},e.prototype.off=function(e){return this.s.forEach(function(t){t.forEach(function(t){t.filter(function(t){return t!=e})})}),this},e.prototype.alwaysApplyFilter=function(e){return this.a.indexOf(e)==-1&&this.a.push(e),this},e.prototype.model=function(e){var t=this,n=t.f;return t.s.set(n,new o.tsMap),t.s.get(n).set("*",[]),t.o.forEach(function(e){t.s.get(n).set(e,[])}),t.r.set(n,e),t.n.set(n,[]),t.t.set(n,[]),this},e.prototype.views=function(e){return this.n.set(this.f,e),this},e.prototype.getView=function(e,t){var n,r=this,i=r.f;if(r.n.get(i).forEach(function(t){t.name==e&&(n=t)}),!n)throw Error("View does not exist");return r._=e,n.call.apply(r,[r.h(n.args,t)])},e.prototype.h=function(e,t){var n=this,r=(n.f,{});return e.forEach(function(e){var i=e.split(":");i.length>1?r[i[0]]=n.d(i[1],t[i[0]]):r[i[0]]=t[i[0]]}),r},e.prototype.d=function(e,t){switch(["string","int","float","array","map","bool"].indexOf(e)){case 0:return String(t);case 1:return parseInt(t);case 2:return parseFloat(t);case 3:case 4:return JSON.parse(JSON.stringify(t));case 5:return 1==t;default:return""}},e.prototype.actions=function(e){return this.t.set(this.f,e),this},e.prototype.doAction=function(e,t){var n=this,r=n.f,i=n.t.get(r).reduce(function(t,n){return void 0!=t?t:n.name==e?n:void 0});if(!i)throw Error("Action does not exist");return n._=e,i.call.apply(n,[n.h(i.args,t)])},e.prototype.addFilter=function(e,t){return this.u.set(e,t),this},e.prototype.query=function(e,t){this.i=[];var n=e.toLowerCase();return["select","upsert","delete","drop"].indexOf(n)!=-1&&this.i.push(new o.tsMap([["type",n],["args",t]])),this},e.prototype.where=function(e){return this.y("where",e)},e.prototype.orderBy=function(e){return this.y("orderby",e)},e.prototype.limit=function(e){return this.y("limit",e)},e.prototype.offset=function(e){return this.y("offset",e)},e.prototype.filter=function(e,t){return this.y("filter-"+e,t)},e.prototype.y=function(e,t){return this.i.push(new o.tsMap([["type",e],["args",t]])),this},e.prototype.exec=function(){var e=this,t=e.f;e.g=e.i.map(function(e){switch(e.get("type")){case"select":return[e.get("type")];case"delete":case"upsert":case"drop":return[e.get("type"),"change"];default:return[]}}).reduce(function(e,t){return e.concat(t)});var n=function(n){e.g.forEach(function(r){e.s.get(t).get(r).concat(e.s.get(t).get("*")).forEach(function(t){n.name=r,n.actionOrView=e._,t.apply(e,[n])})}),e._=void 0};return new a(e,function(r,i){var o=function(r,i,o){e.a.length&&1!=o&&(r=e.a.reduce(function(t,n,i){return e.u.get(e.a[i]).apply(e,[r])},r)),n({table:t,query:e.i.map(function(e){return e.toJSON()}),time:(new Date).getTime(),result:r}),i(r)};e.l.exec(t,e.i,e._,function(e){o(e,r,!1)},function(t){e.g=["error"],o(t,i,!0)})})},e.prototype.custom=function(e,t){var n=this;return new a(n,function(r,i){n.l.custom?n.l.custom.apply(n,[e,t,r,i]):r()})},e.prototype.loadJS=function(e){var t=this;return s.tsPromise.all(e.map(function(e){return t.init(t.f).query("upsert",e).exec()}))},e.prototype.loadCSV=function(e){var t=this,n=[];return new a(t,function(r,i){s.tsPromise.all(e.split("\n").map(function(e,r){return new a(t,function(i,o){if(0==r)n=e.split(","),i();else{var s={},c=e.match(/(".*?"|[^",\s]+)(?=\s*,|\s*$)/g).map(function(e){return e.replace(/^"(.+(?="$))"$/,"$1")});n.forEach(function(e,t){0!=c[t].indexOf("{")&&0!=c[t].indexOf("[")||(c[t]=JSON.parse(c[t].replace(/'/g,'"'))),s[e]=c[t]}),t.init(t.f).query("upsert",c).exec().then(function(){i()})}})})).then(function(){r()})})},e.prototype.toCSV=function(e){var t=this;return new a(t,function(n,r){t.exec().then(function(r){var i=t.i.filter(function(e){return"select"==e.get("type")}).map(function(e){return e.get("args")?e.get("args").map(function(e){return t.r.get(t.f).filter(function(t){return t.key==e})[0]}):t.r.get(t.f)})[0];e&&r.unshift(i.map(function(e){return e.key})),n(r.map(function(t,n){return e&&0==n?t:i.filter(function(e){return!!t[e.key]}).map(function(e){switch(e.type){case"map":return'"'+JSON.stringify(t[e.key]).replace(/"/g,"'")+'"';case"array":return'"'+JSON.stringify(t[e.key]).replace(/"/g,"'")+'"';default:return JSON.stringify(t[e.key])}}).join(",")}).join("\n"))})})},e.uuid=function(e){return e?e:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0,n="x"==e?t:3&t|8;return n.toString(16)})}()},e.hash=function(e){for(var t=5381,n=0;n<e.length;n++){var r=e.charCodeAt(n);t=(t<<5)+t+r}return String(t)},e}();t.someSQL_Instance=u;var a=function(e){function t(t,n){var r=e.call(this,n)||this;return r.scope=t,r}return i(t,e),t.prototype.then=function(e,n){var r=this;return new t(r.scope,function(t,i){r.done(function(n){if("function"==typeof e)try{n=e.apply(r.scope,[n])}catch(e){return void i(e)}t(n)},function(e){if("function"==typeof n){try{e=n.apply(r.scope,[e])}catch(e){return void i(e)}t(e)}else i(e)})})},t}(s.tsPromise),f=new u;t.someSQL=r},function(e,t){"use strict";var n=function(){function e(e){var t=this;t.v=[],t.x=[],t.b=[],t.length=0,e&&e.forEach(function(e,n){t.set(e[0],e[1])})}return e.prototype.fromJSON=function(e){for(var t in e)e.hasOwnProperty(t)&&this.set(t,e[t])},e.prototype.toJSON=function(){var e={},t=this;return t.keys().forEach(function(n){e[String(n)]=t.get(n)}),e},e.prototype.entries=function(){return[].slice.call(this.v)},e.prototype.keys=function(){return[].slice.call(this.x)},e.prototype.values=function(){return[].slice.call(this.b)},e.prototype.has=function(e){return this.x.indexOf(e)>-1},e.prototype.get=function(e){var t=this.x.indexOf(e);return t>-1?this.b[t]:void 0},e.prototype.set=function(e,t){var n=this,r=this.x.indexOf(e);r>-1?(n.v[r][1]=t,n.b[r]=t):(n.v.push([e,t]),n.x.push(e),n.b.push(t)),n.length=n.size()},e.prototype.size=function(){return this.v.length},e.prototype.clear=function(){var e=this;e.x.length=e.b.length=e.v.length=0,e.length=e.size()},e.prototype.delete=function(e){var t=this,n=t.x.indexOf(e);return n>-1&&(t.x.splice(n,1),t.b.splice(n,1),t.v.splice(n,1),t.length=t.size(),!0)},e.prototype.forEach=function(e){var t=this;t.x.forEach(function(n){e(t.get(n),n)})},e.prototype.map=function(e){var t=this;return this.x.map(function(n){return e(t.get(n),n)})},e.prototype.filter=function(e){var t=this;return t.x.forEach(function(n){0==e(t.get(n),n)&&t.delete(n)}),this},e.prototype.clone=function(){return new e(JSON.parse(JSON.stringify(this.v)))},e}();t.tsMap=n},function(e,t){"use strict";var n=function(){function e(e){this.s=[],this.w=!1,this.k=!1,this.O=!1,e(this.T.bind(this),this.S.bind(this))}return e.resolve=function(t){return new e(function(e){e(t)})},e.reject=function(t){return new e(function(e,n){n(t)})},e.race=function(t){var n=!1;return new e(function(e,r){t.forEach(function(t){t.then(function(t){n||(e(t),n=!0)}).catch(function(e){r(e),n=!0})})})},e.chain=function(t){var n,r=0,i=[],o=function(e){r==t.length?n(i):e.then(function(e){i.push(e),r++,o(t[r])})};return new e(function(e){n=e,o(t[r])})},e.all=function(t){return new e(function(e,n){var r=t.length,i=[],o=!1;t.forEach(function(t,s){t.then(function(t){o||(r--,i[s]=t,0==r&&e(i))}).catch(function(e){n(e),o=!0})})})},e.prototype.done=function(e,t){this.O?setTimeout(this.M.bind(this,e,t),0):this.s.push({onSuccess:e,onFail:t})},e.prototype.then=function(t,n){var r=this;return new e(function(e,i){r.done(function(n){if("function"==typeof t)try{n=t(n)}catch(e){return void i(e)}e(n)},function(t){if("function"==typeof n){try{t=n(t)}catch(e){return void i(e)}e(t)}else i(t)})})},e.prototype.catch=function(e){return this.then(null,e)},e.prototype.M=function(e,t){this.w?t(this.F):e(this.F)},e.prototype.T=function(t){this.k||(this.k=!0,t instanceof e?t.done(this.K.bind(this),function(e){this.w=!0,this.K(e)}.bind(this)):this.K(t))},e.prototype.S=function(e){this.k||(this.k=!0,this.w=!0,this.K(e))},e.prototype.K=function(e){this.O=!0,this.F=e,setTimeout(this.s.forEach.bind(this.s,function(e){this.M(e.onSuccess,e.onFail)},this),0)},e}();t.tsPromise=n},function(e,t,n){"use strict";var r=n(1),i=n(3),o=n(2),s=function(){function e(){var e=this;e.u=new o.tsMap,e.N=new o.tsMap,e.J=new o.tsMap,e.I=new o.tsMap,e.q=new o.tsMap,e.C()}return e.prototype.connect=function(e,t,n,r,i){var o=this;e.forEach(function(e,t){o.j(t,e)}),r.forEach(function(e,t){o.u.set(t,e)}),i()},e.prototype.j=function(e,t){this.I.set(e,new o.tsMap),this.J.set(e,new o.tsMap),this.N.set(e,new c(t))},e.prototype.exec=function(e,t,n,o,s){var c=this;c.f=e,c.A=[],c.V=null,c.L=r.someSQL_Instance.hash(JSON.stringify(t)),c.q.set(c.L,t),i.tsPromise.all(t.map(function(e){return new i.tsPromise(function(t,n){c.i(e,t)})})).then(function(){c.P(o)})},e.prototype.i=function(e,t){["upsert","select","delete","drop"].indexOf(e.get("type"))!=-1?this.V=e:this.A.push(e),t()},e.prototype.C=function(){var e=this,t=e.u;t.set("sum",function(t){return t.map(function(t){return t[e.V.get("args")[0]]}).reduce(function(e,t){return e+t},0)}),t.set("first",function(e){return e[0]}),t.set("last",function(e){return e.pop()}),t.set("min",function(t){return t.map(function(t){return t[e.V.get("args")[0]]}).sort(function(e,t){return e<t?-1:1})[0]}),t.set("max",function(t){return t.map(function(t){return t[e.V.get("args")[0]]}).sort(function(e,t){return e>t?-1:1})[0]}),t.set("average",function(t){return e.Q("sum",t)/t.length}),t.set("count",function(e){return e.length})},e.prototype.Q=function(e,t,n){return this.u.get(e).apply(this,[t,n])},e.prototype.W=function(e){var t=this,n=t.A.filter(function(e){return 0==e.get("type").indexOf("filter-")});return n.length?n.reduce(function(e,r,i){return t.Q(n[i].get("type").replace("filter-",""),e,n[i].get("args"))},e):e},e.prototype.z=function(e){var t=this;e.forEach(function(e){t.J.get(t.f).forEach(function(e,n){e.indexOf(n)!=-1&&(t.J.get(t.f).delete(n),t.I.get(t.f).delete(n))})})},e.prototype.P=function(e){var t,n=this,r=n.A.filter(function(e){return"where"==e.get("type")}),i=r.length?r[0].get("args"):void 0,s=n.V.get("args"),c=n.N.get(n.f),u=0;switch(n.V.get("type")){case"upsert":if(i){t=n.R(c,i);var a=[];t.$(function(e,t){for(var n in s)c.B(t)[n]=s[n];a.push(t),u++}),n.z(a)}else c.D(s),u++,n.I.set(n.f,new o.tsMap),n.J.set(n.f,new o.tsMap);e(u+" row(s) upserted");break;case"select":if(n.I.get(n.f).has(n.L))return void e(n.I.get(n.f).get(n.L));t=i?n.R(c,i):c.G();var f=["ordr","ofs","lmt","clms"],l=function(e){return n.A.filter(function(t){return t.get("type")==e}).pop()},p=f.reduce(function(e,t,n){switch(f[n]){case"ordr":if(l("orderby")){var r=new o.tsMap;return r.fromJSON(l("orderby").get("args")),e.sort(function(e,t){return r.keys().reduce(function(n,i,o){var s=r.keys()[o];return e[s]==t[s]?0+n:(e[s]>t[s]?1:-1)*("asc"==r.get(s)?1:-1)+n},0)})}case"ofs":if(l("offset")){var i=l("offset").get("args");return e.filter(function(e,t){return t>=i})}case"lmt":if(l("limit")){var u=l("limit").get("args");return e.filter(function(e,t){return t<u})}case"clms":if(s){var a=c.X.map(function(e){return e.key}).filter(function(e){return s.indexOf(e)==-1});return e.map(function(e){return a.forEach(function(t){return delete e[t]}),e})}default:return e}},t.H),_=n.W(p);n.I.get(n.f).set(n.L,_),n.J.get(n.f).set(n.L,p.map(function(e){return e[t.U]})),e(_);break;case"delete":if(i){var h=[],d=n.R(c,i);d.$(function(e,t){c.Y(t),h.push(t)}),n.z(h),e(d.length+" row(s) deleted")}else n.j(n.f,n.N.get(n.f).X),e("Table dropped.");break;case"drop":n.j(n.f,n.N.get(n.f).X),e("Table dropped.")}},e.prototype.R=function(e,t){var n=this;if(t&&t.length){if("string"==typeof t[0])return n.Z(e.G(),t);var r=0,i=null;return t.map(function(t){return n.Z(e.G(),t)}).reduce(function(e,n,o){if(0==o)return n;if(0==r)return i=t[o],r=1,e;if(1==r)switch(r=0,i){case"and":return e.ee("inner",n);case"or":return e.ee("outer",n);default:return e}})}return e.G()},e.prototype.Z=function(e,t){var n=this,r=t[0],i=t[1],o=t[2];return e.te(function(e){return 0==n.ne(o,i,e[r])})},e.prototype.ne=function(e,t,n){switch(t){case"=":return n==e?0:1;case">":return n>e?0:1;case"<":return n<e?0:1;case"<=":return n<=e?0:1;case">=":return n>=e?0:1;case"IN":return e.indexOf(n)==-1?1:0;case"NOT IN":return e.indexOf(n)==-1?0:1;case"REGEX":case"LIKE":return n.search(e)==-1?1:0;default:return 0}},e}();t.someSQL_MemDB=s;var c=function(){function e(e,t,n){var r=this;r.X=e,r.re=t||[],r.H=n||[],r.ie=1,r.length=0,r.U=r.X.reduce(function(e,t){return t.props&&t.props.indexOf("pk")!=-1?(r.oe=t.type,t.key):e},"")}return e.se=function(e){return JSON.parse(JSON.stringify(e))},e.prototype.B=function(e){return this.H[this.re.indexOf(e)]},e.prototype.ce=function(e,t){this.H[this.re.indexOf(e)]=t},e.prototype.D=function(e){var t=this;if(e[t.U])t.ce(e[t.U],e);else{switch(t.oe){case"int":e[t.U]=t.ie,t.ie++;break;case"uuid":e[t.U]=r.someSQL_Instance.uuid()}t.re.push(e[t.U]),t.H.push(e),t.length=t.re.length}},e.prototype.te=function(e){var t=this;return t.re.forEach(function(n){e.apply(t,[t.B(n),n])||t.Y(n)}),t.length=t.re.length,this},e.prototype.$=function(e){var t=this;return t.re.forEach(function(n){e.apply(t,[t.B(n),n])}),t},e.prototype.ue=function(e){var t=this,n=[],r=-1;return t.re.sort(function(r,i){var o=e.apply(t,[t.B(r),t.B(i)]);return n.push(o),o}),t.H.sort(function(e,t){return r++,n[r]}),t},e.prototype.ee=function(e,t,n,r){var i=this,o=[];o=n?n:[i.U,t.U];var s=[this,t];return"inner"==e&&s.sort(function(e,t){return e.length>t.length?-1:1}),s[0].$(function(t,n){var r;if(s[1].$(function(e,n){void 0==r&&t[o[0]]==e[o[1]]&&(r=e)}),void 0==r)switch(e){case"inner":s[0].Y(n);break;case"outer":s[1].D(r)}}),"outer"==e&&s[0].ue(function(e,t){return e[s[0].U]>t[s[0].U]?1:-1}),s[0]},e.prototype.Y=function(e){var t=this,n=t.re.indexOf(e);t.re.splice(n,1),t.H.splice(n,1),t.length=t.re.length},e.prototype.G=function(){var t=new e(this.X,e.se(this.re),e.se(this.H));return t.ie=this.ie,t.length=this.length,t},e}()}])});