(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function ir(e,t){const n=new Set(e.split(","));return r=>n.has(r)}const V={},ct=[],fe=()=>{},Co=()=>!1,sn=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),or=e=>e.startsWith("onUpdate:"),J=Object.assign,ar=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Oo=Object.prototype.hasOwnProperty,R=(e,t)=>Oo.call(e,t),O=Array.isArray,lt=e=>on(e)==="[object Map]",js=e=>on(e)==="[object Set]",D=e=>typeof e=="function",G=e=>typeof e=="string",st=e=>typeof e=="symbol",k=e=>e!==null&&typeof e=="object",Vs=e=>(k(e)||D(e))&&D(e.then)&&D(e.catch),Hs=Object.prototype.toString,on=e=>Hs.call(e),Do=e=>on(e).slice(8,-1),Us=e=>on(e)==="[object Object]",cr=e=>G(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,yt=ir(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),an=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},xo=/-(\w)/g,ut=an(e=>e.replace(xo,(t,n)=>n?n.toUpperCase():"")),Ro=/\B([A-Z])/g,ht=an(e=>e.replace(Ro,"-$1").toLowerCase()),ks=an(e=>e.charAt(0).toUpperCase()+e.slice(1)),An=an(e=>e?`on${ks(e)}`:""),Be=(e,t)=>!Object.is(e,t),Tn=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Ks=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},Po=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Hr;const Ws=()=>Hr||(Hr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function lr(e){if(O(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],s=G(r)?Fo(r):lr(r);if(s)for(const i in s)t[i]=s[i]}return t}else if(G(e)||k(e))return e}const Mo=/;(?![^(]*\))/g,No=/:([^]+)/,$o=/\/\*[^]*?\*\//g;function Fo(e){const t={};return e.replace($o,"").split(Mo).forEach(n=>{if(n){const r=n.split(No);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function fr(e){let t="";if(G(e))t=e;else if(O(e))for(let n=0;n<e.length;n++){const r=fr(e[n]);r&&(t+=r+" ")}else if(k(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Lo="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Bo=ir(Lo);function zs(e){return!!e||e===""}const Ur=e=>G(e)?e:e==null?"":O(e)||k(e)&&(e.toString===Hs||!D(e.toString))?JSON.stringify(e,qs,2):String(e),qs=(e,t)=>t&&t.__v_isRef?qs(e,t.value):lt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,s],i)=>(n[Sn(r,i)+" =>"]=s,n),{})}:js(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>Sn(n))}:st(t)?Sn(t):k(t)&&!O(t)&&!Us(t)?String(t):t,Sn=(e,t="")=>{var n;return st(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let de;class jo{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=de,!t&&de&&(this.index=(de.scopes||(de.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=de;try{return de=this,t()}finally{de=n}}}on(){de=this}off(){de=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Vo(e,t=de){t&&t.active&&t.effects.push(e)}function Ho(){return de}let Xe;class ur{constructor(t,n,r,s){this.fn=t,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,Vo(this,s)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,Ve();for(let t=0;t<this._depsLength;t++){const n=this.deps[t];if(n.computed&&(Uo(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),He()}return this._dirtyLevel>=4}set dirty(t){this._dirtyLevel=t?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let t=Pe,n=Xe;try{return Pe=!0,Xe=this,this._runnings++,kr(this),this.fn()}finally{Kr(this),this._runnings--,Xe=n,Pe=t}}stop(){this.active&&(kr(this),Kr(this),this.onStop&&this.onStop(),this.active=!1)}}function Uo(e){return e.value}function kr(e){e._trackId++,e._depsLength=0}function Kr(e){if(e.deps.length>e._depsLength){for(let t=e._depsLength;t<e.deps.length;t++)Gs(e.deps[t],e);e.deps.length=e._depsLength}}function Gs(e,t){const n=e.get(t);n!==void 0&&t._trackId!==n&&(e.delete(t),e.size===0&&e.cleanup())}let Pe=!0,Hn=0;const Ys=[];function Ve(){Ys.push(Pe),Pe=!1}function He(){const e=Ys.pop();Pe=e===void 0?!0:e}function dr(){Hn++}function hr(){for(Hn--;!Hn&&Un.length;)Un.shift()()}function Js(e,t,n){if(t.get(e)!==e._trackId){t.set(e,e._trackId);const r=e.deps[e._depsLength];r!==t?(r&&Gs(r,e),e.deps[e._depsLength++]=t):e._depsLength++}}const Un=[];function Xs(e,t,n){dr();for(const r of e.keys()){let s;r._dirtyLevel<t&&(s??(s=e.get(r)===r._trackId))&&(r._shouldSchedule||(r._shouldSchedule=r._dirtyLevel===0),r._dirtyLevel=t),r._shouldSchedule&&(s??(s=e.get(r)===r._trackId))&&(r.trigger(),(!r._runnings||r.allowRecurse)&&r._dirtyLevel!==2&&(r._shouldSchedule=!1,r.scheduler&&Un.push(r.scheduler)))}hr()}const Zs=(e,t)=>{const n=new Map;return n.cleanup=e,n.computed=t,n},kn=new WeakMap,Ze=Symbol(""),Kn=Symbol("");function se(e,t,n){if(Pe&&Xe){let r=kn.get(e);r||kn.set(e,r=new Map);let s=r.get(n);s||r.set(n,s=Zs(()=>r.delete(n))),Js(Xe,s)}}function Te(e,t,n,r,s,i){const o=kn.get(e);if(!o)return;let a=[];if(t==="clear")a=[...o.values()];else if(n==="length"&&O(e)){const c=Number(r);o.forEach((u,d)=>{(d==="length"||!st(d)&&d>=c)&&a.push(u)})}else switch(n!==void 0&&a.push(o.get(n)),t){case"add":O(e)?cr(n)&&a.push(o.get("length")):(a.push(o.get(Ze)),lt(e)&&a.push(o.get(Kn)));break;case"delete":O(e)||(a.push(o.get(Ze)),lt(e)&&a.push(o.get(Kn)));break;case"set":lt(e)&&a.push(o.get(Ze));break}dr();for(const c of a)c&&Xs(c,4);hr()}const ko=ir("__proto__,__v_isRef,__isVue"),Qs=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(st)),Wr=Ko();function Ko(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=M(this);for(let i=0,o=this.length;i<o;i++)se(r,"get",i+"");const s=r[t](...n);return s===-1||s===!1?r[t](...n.map(M)):s}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Ve(),dr();const r=M(this)[t].apply(this,n);return hr(),He(),r}}),e}function Wo(e){st(e)||(e=String(e));const t=M(this);return se(t,"has",e),t.hasOwnProperty(e)}class ei{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,r){const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?sa:si:i?ri:ni).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const o=O(t);if(!s){if(o&&R(Wr,n))return Reflect.get(Wr,n,r);if(n==="hasOwnProperty")return Wo}const a=Reflect.get(t,n,r);return(st(n)?Qs.has(n):ko(n))||(s||se(t,"get",n),i)?a:ie(a)?o&&cr(n)?a:a.value:k(a)?s?ii(a):mr(a):a}}class ti extends ei{constructor(t=!1){super(!1,t)}set(t,n,r,s){let i=t[n];if(!this._isShallow){const c=St(i);if(!Yt(r)&&!St(r)&&(i=M(i),r=M(r)),!O(t)&&ie(i)&&!ie(r))return c?!1:(i.value=r,!0)}const o=O(t)&&cr(n)?Number(n)<t.length:R(t,n),a=Reflect.set(t,n,r,s);return t===M(s)&&(o?Be(r,i)&&Te(t,"set",n,r):Te(t,"add",n,r)),a}deleteProperty(t,n){const r=R(t,n);t[n];const s=Reflect.deleteProperty(t,n);return s&&r&&Te(t,"delete",n,void 0),s}has(t,n){const r=Reflect.has(t,n);return(!st(n)||!Qs.has(n))&&se(t,"has",n),r}ownKeys(t){return se(t,"iterate",O(t)?"length":Ze),Reflect.ownKeys(t)}}class zo extends ei{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const qo=new ti,Go=new zo,Yo=new ti(!0);const pr=e=>e,cn=e=>Reflect.getPrototypeOf(e);function Bt(e,t,n=!1,r=!1){e=e.__v_raw;const s=M(e),i=M(t);n||(Be(t,i)&&se(s,"get",t),se(s,"get",i));const{has:o}=cn(s),a=r?pr:n?br:Ct;if(o.call(s,t))return a(e.get(t));if(o.call(s,i))return a(e.get(i));e!==s&&e.get(t)}function jt(e,t=!1){const n=this.__v_raw,r=M(n),s=M(e);return t||(Be(e,s)&&se(r,"has",e),se(r,"has",s)),e===s?n.has(e):n.has(e)||n.has(s)}function Vt(e,t=!1){return e=e.__v_raw,!t&&se(M(e),"iterate",Ze),Reflect.get(e,"size",e)}function zr(e){e=M(e);const t=M(this);return cn(t).has.call(t,e)||(t.add(e),Te(t,"add",e,e)),this}function qr(e,t){t=M(t);const n=M(this),{has:r,get:s}=cn(n);let i=r.call(n,e);i||(e=M(e),i=r.call(n,e));const o=s.call(n,e);return n.set(e,t),i?Be(t,o)&&Te(n,"set",e,t):Te(n,"add",e,t),this}function Gr(e){const t=M(this),{has:n,get:r}=cn(t);let s=n.call(t,e);s||(e=M(e),s=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return s&&Te(t,"delete",e,void 0),i}function Yr(){const e=M(this),t=e.size!==0,n=e.clear();return t&&Te(e,"clear",void 0,void 0),n}function Ht(e,t){return function(r,s){const i=this,o=i.__v_raw,a=M(o),c=t?pr:e?br:Ct;return!e&&se(a,"iterate",Ze),o.forEach((u,d)=>r.call(s,c(u),c(d),i))}}function Ut(e,t,n){return function(...r){const s=this.__v_raw,i=M(s),o=lt(i),a=e==="entries"||e===Symbol.iterator&&o,c=e==="keys"&&o,u=s[e](...r),d=n?pr:t?br:Ct;return!t&&se(i,"iterate",c?Kn:Ze),{next(){const{value:_,done:E}=u.next();return E?{value:_,done:E}:{value:a?[d(_[0]),d(_[1])]:d(_),done:E}},[Symbol.iterator](){return this}}}}function Oe(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Jo(){const e={get(i){return Bt(this,i)},get size(){return Vt(this)},has:jt,add:zr,set:qr,delete:Gr,clear:Yr,forEach:Ht(!1,!1)},t={get(i){return Bt(this,i,!1,!0)},get size(){return Vt(this)},has:jt,add:zr,set:qr,delete:Gr,clear:Yr,forEach:Ht(!1,!0)},n={get(i){return Bt(this,i,!0)},get size(){return Vt(this,!0)},has(i){return jt.call(this,i,!0)},add:Oe("add"),set:Oe("set"),delete:Oe("delete"),clear:Oe("clear"),forEach:Ht(!0,!1)},r={get(i){return Bt(this,i,!0,!0)},get size(){return Vt(this,!0)},has(i){return jt.call(this,i,!0)},add:Oe("add"),set:Oe("set"),delete:Oe("delete"),clear:Oe("clear"),forEach:Ht(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=Ut(i,!1,!1),n[i]=Ut(i,!0,!1),t[i]=Ut(i,!1,!0),r[i]=Ut(i,!0,!0)}),[e,n,t,r]}const[Xo,Zo,Qo,ea]=Jo();function gr(e,t){const n=t?e?ea:Qo:e?Zo:Xo;return(r,s,i)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?r:Reflect.get(R(n,s)&&s in r?n:r,s,i)}const ta={get:gr(!1,!1)},na={get:gr(!1,!0)},ra={get:gr(!0,!1)};const ni=new WeakMap,ri=new WeakMap,si=new WeakMap,sa=new WeakMap;function ia(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function oa(e){return e.__v_skip||!Object.isExtensible(e)?0:ia(Do(e))}function mr(e){return St(e)?e:_r(e,!1,qo,ta,ni)}function aa(e){return _r(e,!1,Yo,na,ri)}function ii(e){return _r(e,!0,Go,ra,si)}function _r(e,t,n,r,s){if(!k(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=s.get(e);if(i)return i;const o=oa(e);if(o===0)return e;const a=new Proxy(e,o===2?r:n);return s.set(e,a),a}function wt(e){return St(e)?wt(e.__v_raw):!!(e&&e.__v_isReactive)}function St(e){return!!(e&&e.__v_isReadonly)}function Yt(e){return!!(e&&e.__v_isShallow)}function oi(e){return e?!!e.__v_raw:!1}function M(e){const t=e&&e.__v_raw;return t?M(t):e}function ca(e){return Object.isExtensible(e)&&Ks(e,"__v_skip",!0),e}const Ct=e=>k(e)?mr(e):e,br=e=>k(e)?ii(e):e;class ai{constructor(t,n,r,s){this.getter=t,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new ur(()=>t(this._value),()=>Kt(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const t=M(this);return(!t._cacheable||t.effect.dirty)&&Be(t._value,t._value=t.effect.run())&&Kt(t,4),ci(t),t.effect._dirtyLevel>=2&&Kt(t,2),t._value}set value(t){this._setter(t)}get _dirty(){return this.effect.dirty}set _dirty(t){this.effect.dirty=t}}function la(e,t,n=!1){let r,s;const i=D(e);return i?(r=e,s=fe):(r=e.get,s=e.set),new ai(r,s,i||!s,n)}function ci(e){var t;Pe&&Xe&&(e=M(e),Js(Xe,(t=e.dep)!=null?t:e.dep=Zs(()=>e.dep=void 0,e instanceof ai?e:void 0)))}function Kt(e,t=4,n){e=M(e);const r=e.dep;r&&Xs(r,t)}function ie(e){return!!(e&&e.__v_isRef===!0)}function fa(e){return ua(e,!1)}function ua(e,t){return ie(e)?e:new da(e,t)}class da{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:M(t),this._value=n?t:Ct(t)}get value(){return ci(this),this._value}set value(t){const n=this.__v_isShallow||Yt(t)||St(t);t=n?t:M(t),Be(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:Ct(t),Kt(this,4))}}function ha(e){return ie(e)?e.value:e}const pa={get:(e,t,n)=>ha(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const s=e[t];return ie(s)&&!ie(n)?(s.value=n,!0):Reflect.set(e,t,n,r)}};function li(e){return wt(e)?e:new Proxy(e,pa)}/**
* @vue/runtime-core v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Me(e,t,n,r){try{return r?e(...r):e()}catch(s){ln(s,t,n)}}function ge(e,t,n,r){if(D(e)){const s=Me(e,t,n,r);return s&&Vs(s)&&s.catch(i=>{ln(i,t,n)}),s}if(O(e)){const s=[];for(let i=0;i<e.length;i++)s.push(ge(e[i],t,n,r));return s}}function ln(e,t,n,r=!0){const s=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;for(;i;){const u=i.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](e,o,a)===!1)return}i=i.parent}const c=t.appContext.config.errorHandler;if(c){Ve(),Me(c,null,10,[e,o,a]),He();return}}ga(e,n,s,r)}function ga(e,t,n,r=!0){console.error(e)}let Ot=!1,Wn=!1;const Z=[];let ve=0;const ft=[];let De=null,Ye=0;const fi=Promise.resolve();let yr=null;function ma(e){const t=yr||fi;return e?t.then(this?e.bind(this):e):t}function _a(e){let t=ve+1,n=Z.length;for(;t<n;){const r=t+n>>>1,s=Z[r],i=Dt(s);i<e||i===e&&s.pre?t=r+1:n=r}return t}function wr(e){(!Z.length||!Z.includes(e,Ot&&e.allowRecurse?ve+1:ve))&&(e.id==null?Z.push(e):Z.splice(_a(e.id),0,e),ui())}function ui(){!Ot&&!Wn&&(Wn=!0,yr=fi.then(hi))}function ba(e){const t=Z.indexOf(e);t>ve&&Z.splice(t,1)}function ya(e){O(e)?ft.push(...e):(!De||!De.includes(e,e.allowRecurse?Ye+1:Ye))&&ft.push(e),ui()}function Jr(e,t,n=Ot?ve+1:0){for(;n<Z.length;n++){const r=Z[n];if(r&&r.pre){if(e&&r.id!==e.uid)continue;Z.splice(n,1),n--,r()}}}function di(e){if(ft.length){const t=[...new Set(ft)].sort((n,r)=>Dt(n)-Dt(r));if(ft.length=0,De){De.push(...t);return}for(De=t,Ye=0;Ye<De.length;Ye++)De[Ye]();De=null,Ye=0}}const Dt=e=>e.id==null?1/0:e.id,wa=(e,t)=>{const n=Dt(e)-Dt(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function hi(e){Wn=!1,Ot=!0,Z.sort(wa);try{for(ve=0;ve<Z.length;ve++){const t=Z[ve];t&&t.active!==!1&&Me(t,null,14)}}finally{ve=0,Z.length=0,di(),Ot=!1,yr=null,(Z.length||ft.length)&&hi()}}function va(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||V;let s=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const d=`${o==="modelValue"?"model":o}Modifiers`,{number:_,trim:E}=r[d]||V;E&&(s=n.map(A=>G(A)?A.trim():A)),_&&(s=n.map(Po))}let a,c=r[a=An(t)]||r[a=An(ut(t))];!c&&i&&(c=r[a=An(ht(t))]),c&&ge(c,e,6,s);const u=r[a+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,ge(u,e,6,s)}}function pi(e,t,n=!1){const r=t.emitsCache,s=r.get(e);if(s!==void 0)return s;const i=e.emits;let o={},a=!1;if(!D(e)){const c=u=>{const d=pi(u,t,!0);d&&(a=!0,J(o,d))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!i&&!a?(k(e)&&r.set(e,null),null):(O(i)?i.forEach(c=>o[c]=null):J(o,i),k(e)&&r.set(e,o),o)}function fn(e,t){return!e||!sn(t)?!1:(t=t.slice(2).replace(/Once$/,""),R(e,t[0].toLowerCase()+t.slice(1))||R(e,ht(t))||R(e,t))}let Ee=null,un=null;function Jt(e){const t=Ee;return Ee=e,un=e&&e.type.__scopeId||null,t}function gi(e){un=e}function mi(){un=null}function Ea(e,t=Ee,n){if(!t||e._n)return e;const r=(...s)=>{r._d&&os(-1);const i=Jt(t);let o;try{o=e(...s)}finally{Jt(i),r._d&&os(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Cn(e){const{type:t,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:a,emit:c,render:u,renderCache:d,props:_,data:E,setupState:A,ctx:H,inheritAttrs:N}=e,oe=Jt(e);let W,X;try{if(n.shapeFlag&4){const z=s||r,le=z;W=we(u.call(le,z,d,_,A,E,H)),X=a}else{const z=t;W=we(z.length>1?z(_,{attrs:a,slots:o,emit:c}):z(_,null)),X=t.props?a:Ia(a)}}catch(z){It.length=0,ln(z,e,1),W=Ne(xt)}let F=W;if(X&&N!==!1){const z=Object.keys(X),{shapeFlag:le}=F;z.length&&le&7&&(i&&z.some(or)&&(X=Aa(X,i)),F=dt(F,X,!1,!0))}return n.dirs&&(F=dt(F,null,!1,!0),F.dirs=F.dirs?F.dirs.concat(n.dirs):n.dirs),n.transition&&(F.transition=n.transition),W=F,Jt(oe),W}const Ia=e=>{let t;for(const n in e)(n==="class"||n==="style"||sn(n))&&((t||(t={}))[n]=e[n]);return t},Aa=(e,t)=>{const n={};for(const r in e)(!or(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Ta(e,t,n){const{props:r,children:s,component:i}=e,{props:o,children:a,patchFlag:c}=t,u=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Xr(r,o,u):!!o;if(c&8){const d=t.dynamicProps;for(let _=0;_<d.length;_++){const E=d[_];if(o[E]!==r[E]&&!fn(u,E))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Xr(r,o,u):!0:!!o;return!1}function Xr(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(t[i]!==e[i]&&!fn(n,i))return!0}return!1}function Sa({vnode:e,parent:t},n){for(;t;){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r===e)(e=t.vnode).el=n,t=t.parent;else break}}const Ca=Symbol.for("v-ndc"),Oa=e=>e.__isSuspense;function Da(e,t){t&&t.pendingBranch?O(e)?t.effects.push(...e):t.effects.push(e):ya(e)}const xa=Symbol.for("v-scx"),Ra=()=>zt(xa),kt={};function On(e,t,n){return _i(e,t,n)}function _i(e,t,{immediate:n,deep:r,flush:s,once:i,onTrack:o,onTrigger:a}=V){if(t&&i){const P=t;t=(...Ie)=>{P(...Ie),le()}}const c=te,u=P=>r===!0?P:at(P,r===!1?1:void 0);let d,_=!1,E=!1;if(ie(e)?(d=()=>e.value,_=Yt(e)):wt(e)?(d=()=>u(e),_=!0):O(e)?(E=!0,_=e.some(P=>wt(P)||Yt(P)),d=()=>e.map(P=>{if(ie(P))return P.value;if(wt(P))return u(P);if(D(P))return Me(P,c,2)})):D(e)?t?d=()=>Me(e,c,2):d=()=>(A&&A(),ge(e,c,3,[H])):d=fe,t&&r){const P=d;d=()=>at(P())}let A,H=P=>{A=F.onStop=()=>{Me(P,c,4),A=F.onStop=void 0}},N;if(pn)if(H=fe,t?n&&ge(t,c,3,[d(),E?[]:void 0,H]):d(),s==="sync"){const P=Ra();N=P.__watcherHandles||(P.__watcherHandles=[])}else return fe;let oe=E?new Array(e.length).fill(kt):kt;const W=()=>{if(!(!F.active||!F.dirty))if(t){const P=F.run();(r||_||(E?P.some((Ie,me)=>Be(Ie,oe[me])):Be(P,oe)))&&(A&&A(),ge(t,c,3,[P,oe===kt?void 0:E&&oe[0]===kt?[]:oe,H]),oe=P)}else F.run()};W.allowRecurse=!!t;let X;s==="sync"?X=W:s==="post"?X=()=>ne(W,c&&c.suspense):(W.pre=!0,c&&(W.id=c.uid),X=()=>wr(W));const F=new ur(d,fe,X),z=Ho(),le=()=>{F.stop(),z&&ar(z.effects,F)};return t?n?W():oe=F.run():s==="post"?ne(F.run.bind(F),c&&c.suspense):F.run(),N&&N.push(le),le}function Pa(e,t,n){const r=this.proxy,s=G(e)?e.includes(".")?bi(r,e):()=>r[e]:e.bind(r,r);let i;D(t)?i=t:(i=t.handler,n=t);const o=Mt(this),a=_i(s,i.bind(r),n);return o(),a}function bi(e,t){const n=t.split(".");return()=>{let r=e;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function at(e,t=1/0,n){if(t<=0||!k(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),t--,ie(e))at(e.value,t,n);else if(O(e))for(let r=0;r<e.length;r++)at(e[r],t,n);else if(js(e)||lt(e))e.forEach(r=>{at(r,t,n)});else if(Us(e))for(const r in e)at(e[r],t,n);return e}function We(e,t,n,r){const s=e.dirs,i=t&&t.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(Ve(),ge(c,n,8,[e.el,a,e,t]),He())}}const Wt=e=>!!e.type.__asyncLoader,yi=e=>e.type.__isKeepAlive;function Ma(e,t){wi(e,"a",t)}function Na(e,t){wi(e,"da",t)}function wi(e,t,n=te){const r=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(dn(t,r,n),n){let s=n.parent;for(;s&&s.parent;)yi(s.parent.vnode)&&$a(r,t,n,s),s=s.parent}}function $a(e,t,n,r){const s=dn(t,e,r,!0);vi(()=>{ar(r[t],s)},n)}function dn(e,t,n=te,r=!1){if(n){const s=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;Ve();const a=Mt(n),c=ge(t,n,e,o);return a(),He(),c});return r?s.unshift(i):s.push(i),i}}const Se=e=>(t,n=te)=>(!pn||e==="sp")&&dn(e,(...r)=>t(...r),n),Fa=Se("bm"),La=Se("m"),Ba=Se("bu"),ja=Se("u"),Va=Se("bum"),vi=Se("um"),Ha=Se("sp"),Ua=Se("rtg"),ka=Se("rtc");function Ka(e,t=te){dn("ec",e,t)}const zn=e=>e?Li(e)?Ar(e)||e.proxy:zn(e.parent):null,vt=J(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>zn(e.parent),$root:e=>zn(e.root),$emit:e=>e.emit,$options:e=>vr(e),$forceUpdate:e=>e.f||(e.f=()=>{e.effect.dirty=!0,wr(e.update)}),$nextTick:e=>e.n||(e.n=ma.bind(e.proxy)),$watch:e=>Pa.bind(e)}),Dn=(e,t)=>e!==V&&!e.__isScriptSetup&&R(e,t),Wa={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=e;let u;if(t[0]!=="$"){const A=o[t];if(A!==void 0)switch(A){case 1:return r[t];case 2:return s[t];case 4:return n[t];case 3:return i[t]}else{if(Dn(r,t))return o[t]=1,r[t];if(s!==V&&R(s,t))return o[t]=2,s[t];if((u=e.propsOptions[0])&&R(u,t))return o[t]=3,i[t];if(n!==V&&R(n,t))return o[t]=4,n[t];qn&&(o[t]=0)}}const d=vt[t];let _,E;if(d)return t==="$attrs"&&se(e.attrs,"get",""),d(e);if((_=a.__cssModules)&&(_=_[t]))return _;if(n!==V&&R(n,t))return o[t]=4,n[t];if(E=c.config.globalProperties,R(E,t))return E[t]},set({_:e},t,n){const{data:r,setupState:s,ctx:i}=e;return Dn(s,t)?(s[t]=n,!0):r!==V&&R(r,t)?(r[t]=n,!0):R(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||e!==V&&R(e,o)||Dn(t,o)||(a=i[0])&&R(a,o)||R(r,o)||R(vt,o)||R(s.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:R(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Zr(e){return O(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let qn=!0;function za(e){const t=vr(e),n=e.proxy,r=e.ctx;qn=!1,t.beforeCreate&&Qr(t.beforeCreate,e,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:u,created:d,beforeMount:_,mounted:E,beforeUpdate:A,updated:H,activated:N,deactivated:oe,beforeDestroy:W,beforeUnmount:X,destroyed:F,unmounted:z,render:le,renderTracked:P,renderTriggered:Ie,errorCaptured:me,serverPrefetch:vn,expose:Ue,inheritAttrs:pt,components:Nt,directives:$t,filters:En}=t;if(u&&qa(u,r,null),o)for(const U in o){const L=o[U];D(L)&&(r[U]=L.bind(n))}if(s){const U=s.call(n,n);k(U)&&(e.data=mr(U))}if(qn=!0,i)for(const U in i){const L=i[U],ke=D(L)?L.bind(n,n):D(L.get)?L.get.bind(n,n):fe,Ft=!D(L)&&D(L.set)?L.set.bind(n):fe,Ke=Ac({get:ke,set:Ft});Object.defineProperty(r,U,{enumerable:!0,configurable:!0,get:()=>Ke.value,set:_e=>Ke.value=_e})}if(a)for(const U in a)Ei(a[U],r,n,U);if(c){const U=D(c)?c.call(n):c;Reflect.ownKeys(U).forEach(L=>{Qa(L,U[L])})}d&&Qr(d,e,"c");function Q(U,L){O(L)?L.forEach(ke=>U(ke.bind(n))):L&&U(L.bind(n))}if(Q(Fa,_),Q(La,E),Q(Ba,A),Q(ja,H),Q(Ma,N),Q(Na,oe),Q(Ka,me),Q(ka,P),Q(Ua,Ie),Q(Va,X),Q(vi,z),Q(Ha,vn),O(Ue))if(Ue.length){const U=e.exposed||(e.exposed={});Ue.forEach(L=>{Object.defineProperty(U,L,{get:()=>n[L],set:ke=>n[L]=ke})})}else e.exposed||(e.exposed={});le&&e.render===fe&&(e.render=le),pt!=null&&(e.inheritAttrs=pt),Nt&&(e.components=Nt),$t&&(e.directives=$t)}function qa(e,t,n=fe){O(e)&&(e=Gn(e));for(const r in e){const s=e[r];let i;k(s)?"default"in s?i=zt(s.from||r,s.default,!0):i=zt(s.from||r):i=zt(s),ie(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):t[r]=i}}function Qr(e,t,n){ge(O(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Ei(e,t,n,r){const s=r.includes(".")?bi(n,r):()=>n[r];if(G(e)){const i=t[e];D(i)&&On(s,i)}else if(D(e))On(s,e.bind(n));else if(k(e))if(O(e))e.forEach(i=>Ei(i,t,n,r));else{const i=D(e.handler)?e.handler.bind(n):t[e.handler];D(i)&&On(s,i,e)}}function vr(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,a=i.get(t);let c;return a?c=a:!s.length&&!n&&!r?c=t:(c={},s.length&&s.forEach(u=>Xt(c,u,o,!0)),Xt(c,t,o)),k(t)&&i.set(t,c),c}function Xt(e,t,n,r=!1){const{mixins:s,extends:i}=t;i&&Xt(e,i,n,!0),s&&s.forEach(o=>Xt(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const a=Ga[o]||n&&n[o];e[o]=a?a(e[o],t[o]):t[o]}return e}const Ga={data:es,props:ts,emits:ts,methods:bt,computed:bt,beforeCreate:ee,created:ee,beforeMount:ee,mounted:ee,beforeUpdate:ee,updated:ee,beforeDestroy:ee,beforeUnmount:ee,destroyed:ee,unmounted:ee,activated:ee,deactivated:ee,errorCaptured:ee,serverPrefetch:ee,components:bt,directives:bt,watch:Ja,provide:es,inject:Ya};function es(e,t){return t?e?function(){return J(D(e)?e.call(this,this):e,D(t)?t.call(this,this):t)}:t:e}function Ya(e,t){return bt(Gn(e),Gn(t))}function Gn(e){if(O(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ee(e,t){return e?[...new Set([].concat(e,t))]:t}function bt(e,t){return e?J(Object.create(null),e,t):t}function ts(e,t){return e?O(e)&&O(t)?[...new Set([...e,...t])]:J(Object.create(null),Zr(e),Zr(t??{})):t}function Ja(e,t){if(!e)return t;if(!t)return e;const n=J(Object.create(null),e);for(const r in t)n[r]=ee(e[r],t[r]);return n}function Ii(){return{app:null,config:{isNativeTag:Co,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Xa=0;function Za(e,t){return function(r,s=null){D(r)||(r=J({},r)),s!=null&&!k(s)&&(s=null);const i=Ii(),o=new WeakSet;let a=!1;const c=i.app={_uid:Xa++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Tc,get config(){return i.config},set config(u){},use(u,...d){return o.has(u)||(u&&D(u.install)?(o.add(u),u.install(c,...d)):D(u)&&(o.add(u),u(c,...d))),c},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),c},component(u,d){return d?(i.components[u]=d,c):i.components[u]},directive(u,d){return d?(i.directives[u]=d,c):i.directives[u]},mount(u,d,_){if(!a){const E=Ne(r,s);return E.appContext=i,_===!0?_="svg":_===!1&&(_=void 0),d&&t?t(E,u):e(E,u,_),a=!0,c._container=u,u.__vue_app__=c,Ar(E.component)||E.component.proxy}},unmount(){a&&(e(null,c._container),delete c._container.__vue_app__)},provide(u,d){return i.provides[u]=d,c},runWithContext(u){const d=Et;Et=c;try{return u()}finally{Et=d}}};return c}}let Et=null;function Qa(e,t){if(te){let n=te.provides;const r=te.parent&&te.parent.provides;r===n&&(n=te.provides=Object.create(r)),n[e]=t}}function zt(e,t,n=!1){const r=te||Ee;if(r||Et){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Et._context.provides;if(s&&e in s)return s[e];if(arguments.length>1)return n&&D(t)?t.call(r&&r.proxy):t}}const Ai={},Ti=()=>Object.create(Ai),Si=e=>Object.getPrototypeOf(e)===Ai;function ec(e,t,n,r=!1){const s={},i=Ti();e.propsDefaults=Object.create(null),Ci(e,t,s,i);for(const o in e.propsOptions[0])o in s||(s[o]=void 0);n?e.props=r?s:aa(s):e.type.props?e.props=s:e.props=i,e.attrs=i}function tc(e,t,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=e,a=M(s),[c]=e.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=e.vnode.dynamicProps;for(let _=0;_<d.length;_++){let E=d[_];if(fn(e.emitsOptions,E))continue;const A=t[E];if(c)if(R(i,E))A!==i[E]&&(i[E]=A,u=!0);else{const H=ut(E);s[H]=Yn(c,a,H,A,e,!1)}else A!==i[E]&&(i[E]=A,u=!0)}}}else{Ci(e,t,s,i)&&(u=!0);let d;for(const _ in a)(!t||!R(t,_)&&((d=ht(_))===_||!R(t,d)))&&(c?n&&(n[_]!==void 0||n[d]!==void 0)&&(s[_]=Yn(c,a,_,void 0,e,!0)):delete s[_]);if(i!==a)for(const _ in i)(!t||!R(t,_))&&(delete i[_],u=!0)}u&&Te(e.attrs,"set","")}function Ci(e,t,n,r){const[s,i]=e.propsOptions;let o=!1,a;if(t)for(let c in t){if(yt(c))continue;const u=t[c];let d;s&&R(s,d=ut(c))?!i||!i.includes(d)?n[d]=u:(a||(a={}))[d]=u:fn(e.emitsOptions,c)||(!(c in r)||u!==r[c])&&(r[c]=u,o=!0)}if(i){const c=M(n),u=a||V;for(let d=0;d<i.length;d++){const _=i[d];n[_]=Yn(s,c,_,u[_],e,!R(u,_))}}return o}function Yn(e,t,n,r,s,i){const o=e[n];if(o!=null){const a=R(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&D(c)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const d=Mt(s);r=u[n]=c.call(null,t),d()}}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===ht(n))&&(r=!0))}return r}function Oi(e,t,n=!1){const r=t.propsCache,s=r.get(e);if(s)return s;const i=e.props,o={},a=[];let c=!1;if(!D(e)){const d=_=>{c=!0;const[E,A]=Oi(_,t,!0);J(o,E),A&&a.push(...A)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!i&&!c)return k(e)&&r.set(e,ct),ct;if(O(i))for(let d=0;d<i.length;d++){const _=ut(i[d]);ns(_)&&(o[_]=V)}else if(i)for(const d in i){const _=ut(d);if(ns(_)){const E=i[d],A=o[_]=O(E)||D(E)?{type:E}:J({},E);if(A){const H=is(Boolean,A.type),N=is(String,A.type);A[0]=H>-1,A[1]=N<0||H<N,(H>-1||R(A,"default"))&&a.push(_)}}}const u=[o,a];return k(e)&&r.set(e,u),u}function ns(e){return e[0]!=="$"&&!yt(e)}function rs(e){return e===null?"null":typeof e=="function"?e.name||"":typeof e=="object"&&e.constructor&&e.constructor.name||""}function ss(e,t){return rs(e)===rs(t)}function is(e,t){return O(t)?t.findIndex(n=>ss(n,e)):D(t)&&ss(t,e)?0:-1}const Di=e=>e[0]==="_"||e==="$stable",Er=e=>O(e)?e.map(we):[we(e)],nc=(e,t,n)=>{if(t._n)return t;const r=Ea((...s)=>Er(t(...s)),n);return r._c=!1,r},xi=(e,t,n)=>{const r=e._ctx;for(const s in e){if(Di(s))continue;const i=e[s];if(D(i))t[s]=nc(s,i,r);else if(i!=null){const o=Er(i);t[s]=()=>o}}},Ri=(e,t)=>{const n=Er(t);e.slots.default=()=>n},rc=(e,t)=>{const n=e.slots=Ti();if(e.vnode.shapeFlag&32){const r=t._;r?(J(n,t),Ks(n,"_",r,!0)):xi(t,n)}else t&&Ri(e,t)},sc=(e,t,n)=>{const{vnode:r,slots:s}=e;let i=!0,o=V;if(r.shapeFlag&32){const a=t._;a?n&&a===1?i=!1:(J(s,t),!n&&a===1&&delete s._):(i=!t.$stable,xi(t,s)),o=t}else t&&(Ri(e,t),o={default:1});if(i)for(const a in s)!Di(a)&&o[a]==null&&delete s[a]};function Jn(e,t,n,r,s=!1){if(O(e)){e.forEach((E,A)=>Jn(E,t&&(O(t)?t[A]:t),n,r,s));return}if(Wt(r)&&!s)return;const i=r.shapeFlag&4?Ar(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=e,u=t&&t.r,d=a.refs===V?a.refs={}:a.refs,_=a.setupState;if(u!=null&&u!==c&&(G(u)?(d[u]=null,R(_,u)&&(_[u]=null)):ie(u)&&(u.value=null)),D(c))Me(c,a,12,[o,d]);else{const E=G(c),A=ie(c);if(E||A){const H=()=>{if(e.f){const N=E?R(_,c)?_[c]:d[c]:c.value;s?O(N)&&ar(N,i):O(N)?N.includes(i)||N.push(i):E?(d[c]=[i],R(_,c)&&(_[c]=d[c])):(c.value=[i],e.k&&(d[e.k]=c.value))}else E?(d[c]=o,R(_,c)&&(_[c]=o)):A&&(c.value=o,e.k&&(d[e.k]=o))};o?(H.id=-1,ne(H,n)):H()}}}const ne=Da;function ic(e){return oc(e)}function oc(e,t){const n=Ws();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:u,setElementText:d,parentNode:_,nextSibling:E,setScopeId:A=fe,insertStaticContent:H}=e,N=(l,f,h,p=null,g=null,y=null,v=void 0,b=null,w=!!f.dynamicChildren)=>{if(l===f)return;l&&!_t(l,f)&&(p=Lt(l),_e(l,g,y,!0),l=null),f.patchFlag===-2&&(w=!1,f.dynamicChildren=null);const{type:m,ref:I,shapeFlag:S}=f;switch(m){case hn:oe(l,f,h,p);break;case xt:W(l,f,h,p);break;case Rn:l==null&&X(f,h,p,v);break;case he:Nt(l,f,h,p,g,y,v,b,w);break;default:S&1?le(l,f,h,p,g,y,v,b,w):S&6?$t(l,f,h,p,g,y,v,b,w):(S&64||S&128)&&m.process(l,f,h,p,g,y,v,b,w,gt)}I!=null&&g&&Jn(I,l&&l.ref,y,f||l,!f)},oe=(l,f,h,p)=>{if(l==null)r(f.el=a(f.children),h,p);else{const g=f.el=l.el;f.children!==l.children&&u(g,f.children)}},W=(l,f,h,p)=>{l==null?r(f.el=c(f.children||""),h,p):f.el=l.el},X=(l,f,h,p)=>{[l.el,l.anchor]=H(l.children,f,h,p,l.el,l.anchor)},F=({el:l,anchor:f},h,p)=>{let g;for(;l&&l!==f;)g=E(l),r(l,h,p),l=g;r(f,h,p)},z=({el:l,anchor:f})=>{let h;for(;l&&l!==f;)h=E(l),s(l),l=h;s(f)},le=(l,f,h,p,g,y,v,b,w)=>{f.type==="svg"?v="svg":f.type==="math"&&(v="mathml"),l==null?P(f,h,p,g,y,v,b,w):vn(l,f,g,y,v,b,w)},P=(l,f,h,p,g,y,v,b)=>{let w,m;const{props:I,shapeFlag:S,transition:T,dirs:C}=l;if(w=l.el=o(l.type,y,I&&I.is,I),S&8?d(w,l.children):S&16&&me(l.children,w,null,p,g,xn(l,y),v,b),C&&We(l,null,p,"created"),Ie(w,l,l.scopeId,v,p),I){for(const $ in I)$!=="value"&&!yt($)&&i(w,$,null,I[$],y,l.children,p,g,Ae);"value"in I&&i(w,"value",null,I.value,y),(m=I.onVnodeBeforeMount)&&ye(m,p,l)}C&&We(l,null,p,"beforeMount");const x=ac(g,T);x&&T.beforeEnter(w),r(w,f,h),((m=I&&I.onVnodeMounted)||x||C)&&ne(()=>{m&&ye(m,p,l),x&&T.enter(w),C&&We(l,null,p,"mounted")},g)},Ie=(l,f,h,p,g)=>{if(h&&A(l,h),p)for(let y=0;y<p.length;y++)A(l,p[y]);if(g){let y=g.subTree;if(f===y){const v=g.vnode;Ie(l,v,v.scopeId,v.slotScopeIds,g.parent)}}},me=(l,f,h,p,g,y,v,b,w=0)=>{for(let m=w;m<l.length;m++){const I=l[m]=b?xe(l[m]):we(l[m]);N(null,I,f,h,p,g,y,v,b)}},vn=(l,f,h,p,g,y,v)=>{const b=f.el=l.el;let{patchFlag:w,dynamicChildren:m,dirs:I}=f;w|=l.patchFlag&16;const S=l.props||V,T=f.props||V;let C;if(h&&ze(h,!1),(C=T.onVnodeBeforeUpdate)&&ye(C,h,f,l),I&&We(f,l,h,"beforeUpdate"),h&&ze(h,!0),m?Ue(l.dynamicChildren,m,b,h,p,xn(f,g),y):v||L(l,f,b,null,h,p,xn(f,g),y,!1),w>0){if(w&16)pt(b,f,S,T,h,p,g);else if(w&2&&S.class!==T.class&&i(b,"class",null,T.class,g),w&4&&i(b,"style",S.style,T.style,g),w&8){const x=f.dynamicProps;for(let $=0;$<x.length;$++){const j=x[$],q=S[j],ue=T[j];(ue!==q||j==="value")&&i(b,j,q,ue,g,l.children,h,p,Ae)}}w&1&&l.children!==f.children&&d(b,f.children)}else!v&&m==null&&pt(b,f,S,T,h,p,g);((C=T.onVnodeUpdated)||I)&&ne(()=>{C&&ye(C,h,f,l),I&&We(f,l,h,"updated")},p)},Ue=(l,f,h,p,g,y,v)=>{for(let b=0;b<f.length;b++){const w=l[b],m=f[b],I=w.el&&(w.type===he||!_t(w,m)||w.shapeFlag&70)?_(w.el):h;N(w,m,I,null,p,g,y,v,!0)}},pt=(l,f,h,p,g,y,v)=>{if(h!==p){if(h!==V)for(const b in h)!yt(b)&&!(b in p)&&i(l,b,h[b],null,v,f.children,g,y,Ae);for(const b in p){if(yt(b))continue;const w=p[b],m=h[b];w!==m&&b!=="value"&&i(l,b,m,w,v,f.children,g,y,Ae)}"value"in p&&i(l,"value",h.value,p.value,v)}},Nt=(l,f,h,p,g,y,v,b,w)=>{const m=f.el=l?l.el:a(""),I=f.anchor=l?l.anchor:a("");let{patchFlag:S,dynamicChildren:T,slotScopeIds:C}=f;C&&(b=b?b.concat(C):C),l==null?(r(m,h,p),r(I,h,p),me(f.children||[],h,I,g,y,v,b,w)):S>0&&S&64&&T&&l.dynamicChildren?(Ue(l.dynamicChildren,T,h,g,y,v,b),(f.key!=null||g&&f===g.subTree)&&Pi(l,f,!0)):L(l,f,h,I,g,y,v,b,w)},$t=(l,f,h,p,g,y,v,b,w)=>{f.slotScopeIds=b,l==null?f.shapeFlag&512?g.ctx.activate(f,h,p,v,w):En(f,h,p,g,y,v,w):Mr(l,f,w)},En=(l,f,h,p,g,y,v)=>{const b=l.component=bc(l,p,g);if(yi(l)&&(b.ctx.renderer=gt),yc(b),b.asyncDep){if(g&&g.registerDep(b,Q),!l.el){const w=b.subTree=Ne(xt);W(null,w,f,h)}}else Q(b,l,f,h,g,y,v)},Mr=(l,f,h)=>{const p=f.component=l.component;if(Ta(l,f,h))if(p.asyncDep&&!p.asyncResolved){U(p,f,h);return}else p.next=f,ba(p.update),p.effect.dirty=!0,p.update();else f.el=l.el,p.vnode=f},Q=(l,f,h,p,g,y,v)=>{const b=()=>{if(l.isMounted){let{next:I,bu:S,u:T,parent:C,vnode:x}=l;{const ot=Mi(l);if(ot){I&&(I.el=x.el,U(l,I,v)),ot.asyncDep.then(()=>{l.isUnmounted||b()});return}}let $=I,j;ze(l,!1),I?(I.el=x.el,U(l,I,v)):I=x,S&&Tn(S),(j=I.props&&I.props.onVnodeBeforeUpdate)&&ye(j,C,I,x),ze(l,!0);const q=Cn(l),ue=l.subTree;l.subTree=q,N(ue,q,_(ue.el),Lt(ue),l,g,y),I.el=q.el,$===null&&Sa(l,q.el),T&&ne(T,g),(j=I.props&&I.props.onVnodeUpdated)&&ne(()=>ye(j,C,I,x),g)}else{let I;const{el:S,props:T}=f,{bm:C,m:x,parent:$}=l,j=Wt(f);if(ze(l,!1),C&&Tn(C),!j&&(I=T&&T.onVnodeBeforeMount)&&ye(I,$,f),ze(l,!0),S&&Lr){const q=()=>{l.subTree=Cn(l),Lr(S,l.subTree,l,g,null)};j?f.type.__asyncLoader().then(()=>!l.isUnmounted&&q()):q()}else{const q=l.subTree=Cn(l);N(null,q,h,p,l,g,y),f.el=q.el}if(x&&ne(x,g),!j&&(I=T&&T.onVnodeMounted)){const q=f;ne(()=>ye(I,$,q),g)}(f.shapeFlag&256||$&&Wt($.vnode)&&$.vnode.shapeFlag&256)&&l.a&&ne(l.a,g),l.isMounted=!0,f=h=p=null}},w=l.effect=new ur(b,fe,()=>wr(m),l.scope),m=l.update=()=>{w.dirty&&w.run()};m.id=l.uid,ze(l,!0),m()},U=(l,f,h)=>{f.component=l;const p=l.vnode.props;l.vnode=f,l.next=null,tc(l,f.props,p,h),sc(l,f.children,h),Ve(),Jr(l),He()},L=(l,f,h,p,g,y,v,b,w=!1)=>{const m=l&&l.children,I=l?l.shapeFlag:0,S=f.children,{patchFlag:T,shapeFlag:C}=f;if(T>0){if(T&128){Ft(m,S,h,p,g,y,v,b,w);return}else if(T&256){ke(m,S,h,p,g,y,v,b,w);return}}C&8?(I&16&&Ae(m,g,y),S!==m&&d(h,S)):I&16?C&16?Ft(m,S,h,p,g,y,v,b,w):Ae(m,g,y,!0):(I&8&&d(h,""),C&16&&me(S,h,p,g,y,v,b,w))},ke=(l,f,h,p,g,y,v,b,w)=>{l=l||ct,f=f||ct;const m=l.length,I=f.length,S=Math.min(m,I);let T;for(T=0;T<S;T++){const C=f[T]=w?xe(f[T]):we(f[T]);N(l[T],C,h,null,g,y,v,b,w)}m>I?Ae(l,g,y,!0,!1,S):me(f,h,p,g,y,v,b,w,S)},Ft=(l,f,h,p,g,y,v,b,w)=>{let m=0;const I=f.length;let S=l.length-1,T=I-1;for(;m<=S&&m<=T;){const C=l[m],x=f[m]=w?xe(f[m]):we(f[m]);if(_t(C,x))N(C,x,h,null,g,y,v,b,w);else break;m++}for(;m<=S&&m<=T;){const C=l[S],x=f[T]=w?xe(f[T]):we(f[T]);if(_t(C,x))N(C,x,h,null,g,y,v,b,w);else break;S--,T--}if(m>S){if(m<=T){const C=T+1,x=C<I?f[C].el:p;for(;m<=T;)N(null,f[m]=w?xe(f[m]):we(f[m]),h,x,g,y,v,b,w),m++}}else if(m>T)for(;m<=S;)_e(l[m],g,y,!0),m++;else{const C=m,x=m,$=new Map;for(m=x;m<=T;m++){const ae=f[m]=w?xe(f[m]):we(f[m]);ae.key!=null&&$.set(ae.key,m)}let j,q=0;const ue=T-x+1;let ot=!1,Br=0;const mt=new Array(ue);for(m=0;m<ue;m++)mt[m]=0;for(m=C;m<=S;m++){const ae=l[m];if(q>=ue){_e(ae,g,y,!0);continue}let be;if(ae.key!=null)be=$.get(ae.key);else for(j=x;j<=T;j++)if(mt[j-x]===0&&_t(ae,f[j])){be=j;break}be===void 0?_e(ae,g,y,!0):(mt[be-x]=m+1,be>=Br?Br=be:ot=!0,N(ae,f[be],h,null,g,y,v,b,w),q++)}const jr=ot?cc(mt):ct;for(j=jr.length-1,m=ue-1;m>=0;m--){const ae=x+m,be=f[ae],Vr=ae+1<I?f[ae+1].el:p;mt[m]===0?N(null,be,h,Vr,g,y,v,b,w):ot&&(j<0||m!==jr[j]?Ke(be,h,Vr,2):j--)}}},Ke=(l,f,h,p,g=null)=>{const{el:y,type:v,transition:b,children:w,shapeFlag:m}=l;if(m&6){Ke(l.component.subTree,f,h,p);return}if(m&128){l.suspense.move(f,h,p);return}if(m&64){v.move(l,f,h,gt);return}if(v===he){r(y,f,h);for(let S=0;S<w.length;S++)Ke(w[S],f,h,p);r(l.anchor,f,h);return}if(v===Rn){F(l,f,h);return}if(p!==2&&m&1&&b)if(p===0)b.beforeEnter(y),r(y,f,h),ne(()=>b.enter(y),g);else{const{leave:S,delayLeave:T,afterLeave:C}=b,x=()=>r(y,f,h),$=()=>{S(y,()=>{x(),C&&C()})};T?T(y,x,$):$()}else r(y,f,h)},_e=(l,f,h,p=!1,g=!1)=>{const{type:y,props:v,ref:b,children:w,dynamicChildren:m,shapeFlag:I,patchFlag:S,dirs:T}=l;if(b!=null&&Jn(b,null,h,l,!0),I&256){f.ctx.deactivate(l);return}const C=I&1&&T,x=!Wt(l);let $;if(x&&($=v&&v.onVnodeBeforeUnmount)&&ye($,f,l),I&6)So(l.component,h,p);else{if(I&128){l.suspense.unmount(h,p);return}C&&We(l,null,f,"beforeUnmount"),I&64?l.type.remove(l,f,h,g,gt,p):m&&(y!==he||S>0&&S&64)?Ae(m,f,h,!1,!0):(y===he&&S&384||!g&&I&16)&&Ae(w,f,h),p&&Nr(l)}(x&&($=v&&v.onVnodeUnmounted)||C)&&ne(()=>{$&&ye($,f,l),C&&We(l,null,f,"unmounted")},h)},Nr=l=>{const{type:f,el:h,anchor:p,transition:g}=l;if(f===he){To(h,p);return}if(f===Rn){z(l);return}const y=()=>{s(h),g&&!g.persisted&&g.afterLeave&&g.afterLeave()};if(l.shapeFlag&1&&g&&!g.persisted){const{leave:v,delayLeave:b}=g,w=()=>v(h,y);b?b(l.el,y,w):w()}else y()},To=(l,f)=>{let h;for(;l!==f;)h=E(l),s(l),l=h;s(f)},So=(l,f,h)=>{const{bum:p,scope:g,update:y,subTree:v,um:b}=l;p&&Tn(p),g.stop(),y&&(y.active=!1,_e(v,l,f,h)),b&&ne(b,f),ne(()=>{l.isUnmounted=!0},f),f&&f.pendingBranch&&!f.isUnmounted&&l.asyncDep&&!l.asyncResolved&&l.suspenseId===f.pendingId&&(f.deps--,f.deps===0&&f.resolve())},Ae=(l,f,h,p=!1,g=!1,y=0)=>{for(let v=y;v<l.length;v++)_e(l[v],f,h,p,g)},Lt=l=>l.shapeFlag&6?Lt(l.component.subTree):l.shapeFlag&128?l.suspense.next():E(l.anchor||l.el);let In=!1;const $r=(l,f,h)=>{l==null?f._vnode&&_e(f._vnode,null,null,!0):N(f._vnode||null,l,f,null,null,null,h),In||(In=!0,Jr(),di(),In=!1),f._vnode=l},gt={p:N,um:_e,m:Ke,r:Nr,mt:En,mc:me,pc:L,pbc:Ue,n:Lt,o:e};let Fr,Lr;return{render:$r,hydrate:Fr,createApp:Za($r,Fr)}}function xn({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function ze({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function ac(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Pi(e,t,n=!1){const r=e.children,s=t.children;if(O(r)&&O(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=xe(s[i]),a.el=o.el),n||Pi(o,a)),a.type===hn&&(a.el=o.el)}}function cc(e){const t=e.slice(),n=[0];let r,s,i,o,a;const c=e.length;for(r=0;r<c;r++){const u=e[r];if(u!==0){if(s=n[n.length-1],e[s]<u){t[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,e[n[a]]<u?i=a+1:o=a;u<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}function Mi(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Mi(t)}const lc=e=>e.__isTeleport,he=Symbol.for("v-fgt"),hn=Symbol.for("v-txt"),xt=Symbol.for("v-cmt"),Rn=Symbol.for("v-stc"),It=[];let pe=null;function Ni(e=!1){It.push(pe=e?null:[])}function fc(){It.pop(),pe=It[It.length-1]||null}let Rt=1;function os(e){Rt+=e}function uc(e){return e.dynamicChildren=Rt>0?pe||ct:null,fc(),Rt>0&&pe&&pe.push(e),e}function $i(e,t,n,r,s,i){return uc(Y(e,t,n,r,s,i,!0))}function dc(e){return e?e.__v_isVNode===!0:!1}function _t(e,t){return e.type===t.type&&e.key===t.key}const Fi=({key:e})=>e??null,qt=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?G(e)||ie(e)||D(e)?{i:Ee,r:e,k:t,f:!!n}:e:null);function Y(e,t=null,n=null,r=0,s=null,i=e===he?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Fi(t),ref:t&&qt(t),scopeId:un,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Ee};return a?(Ir(c,n),i&128&&e.normalize(c)):n&&(c.shapeFlag|=G(n)?8:16),Rt>0&&!o&&pe&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&pe.push(c),c}const Ne=hc;function hc(e,t=null,n=null,r=0,s=null,i=!1){if((!e||e===Ca)&&(e=xt),dc(e)){const a=dt(e,t,!0);return n&&Ir(a,n),Rt>0&&!i&&pe&&(a.shapeFlag&6?pe[pe.indexOf(e)]=a:pe.push(a)),a.patchFlag|=-2,a}if(Ic(e)&&(e=e.__vccOpts),t){t=pc(t);let{class:a,style:c}=t;a&&!G(a)&&(t.class=fr(a)),k(c)&&(oi(c)&&!O(c)&&(c=J({},c)),t.style=lr(c))}const o=G(e)?1:Oa(e)?128:lc(e)?64:k(e)?4:D(e)?2:0;return Y(e,t,n,r,s,o,i,!0)}function pc(e){return e?oi(e)||Si(e)?J({},e):e:null}function dt(e,t,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:a,transition:c}=e,u=t?gc(s||{},t):s,d={__v_isVNode:!0,__v_skip:!0,type:e.type,props:u,key:u&&Fi(u),ref:t&&t.ref?n&&i?O(i)?i.concat(qt(t)):[i,qt(t)]:qt(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==he?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&dt(e.ssContent),ssFallback:e.ssFallback&&dt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&r&&(d.transition=c.clone(d)),d}function Qe(e=" ",t=0){return Ne(hn,null,e,t)}function we(e){return e==null||typeof e=="boolean"?Ne(xt):O(e)?Ne(he,null,e.slice()):typeof e=="object"?xe(e):Ne(hn,null,String(e))}function xe(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:dt(e)}function Ir(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(O(t))n=16;else if(typeof t=="object")if(r&65){const s=t.default;s&&(s._c&&(s._d=!1),Ir(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!Si(t)?t._ctx=Ee:s===3&&Ee&&(Ee.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else D(t)?(t={default:t,_ctx:Ee},n=32):(t=String(t),r&64?(n=16,t=[Qe(t)]):n=8);e.children=t,e.shapeFlag|=n}function gc(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const s in r)if(s==="class")t.class!==r.class&&(t.class=fr([t.class,r.class]));else if(s==="style")t.style=lr([t.style,r.style]);else if(sn(s)){const i=t[s],o=r[s];o&&i!==o&&!(O(i)&&i.includes(o))&&(t[s]=i?[].concat(i,o):o)}else s!==""&&(t[s]=r[s])}return t}function ye(e,t,n,r=null){ge(e,t,7,[n,r])}const mc=Ii();let _c=0;function bc(e,t,n){const r=e.type,s=(t?t.appContext:e.appContext)||mc,i={uid:_c++,vnode:e,type:r,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new jo(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Oi(r,s),emitsOptions:pi(r,s),emit:null,emitted:null,propsDefaults:V,inheritAttrs:r.inheritAttrs,ctx:V,data:V,props:V,attrs:V,slots:V,refs:V,setupState:V,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=va.bind(null,i),e.ce&&e.ce(i),i}let te=null,Zt,Xn;{const e=Ws(),t=(n,r)=>{let s;return(s=e[n])||(s=e[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Zt=t("__VUE_INSTANCE_SETTERS__",n=>te=n),Xn=t("__VUE_SSR_SETTERS__",n=>pn=n)}const Mt=e=>{const t=te;return Zt(e),e.scope.on(),()=>{e.scope.off(),Zt(t)}},as=()=>{te&&te.scope.off(),Zt(null)};function Li(e){return e.vnode.shapeFlag&4}let pn=!1;function yc(e,t=!1){t&&Xn(t);const{props:n,children:r}=e.vnode,s=Li(e);ec(e,n,s,t),rc(e,r);const i=s?wc(e,t):void 0;return t&&Xn(!1),i}function wc(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Wa);const{setup:r}=n;if(r){const s=e.setupContext=r.length>1?Ec(e):null,i=Mt(e);Ve();const o=Me(r,e,0,[e.props,s]);if(He(),i(),Vs(o)){if(o.then(as,as),t)return o.then(a=>{cs(e,a,t)}).catch(a=>{ln(a,e,0)});e.asyncDep=o}else cs(e,o,t)}else Bi(e,t)}function cs(e,t,n){D(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:k(t)&&(e.setupState=li(t)),Bi(e,n)}let ls;function Bi(e,t,n){const r=e.type;if(!e.render){if(!t&&ls&&!r.render){const s=r.template||vr(e).template;if(s){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:a,compilerOptions:c}=r,u=J(J({isCustomElement:i,delimiters:a},o),c);r.render=ls(s,u)}}e.render=r.render||fe}{const s=Mt(e);Ve();try{za(e)}finally{He(),s()}}}const vc={get(e,t){return se(e,"get",""),e[t]}};function Ec(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,vc),slots:e.slots,emit:e.emit,expose:t}}function Ar(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(li(ca(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in vt)return vt[n](e)},has(t,n){return n in t||n in vt}}))}function Ic(e){return D(e)&&"__vccOpts"in e}const Ac=(e,t)=>la(e,t,pn),Tc="3.4.27";/**
* @vue/runtime-dom v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Sc="http://www.w3.org/2000/svg",Cc="http://www.w3.org/1998/Math/MathML",Re=typeof document<"u"?document:null,fs=Re&&Re.createElement("template"),Oc={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const s=t==="svg"?Re.createElementNS(Sc,e):t==="mathml"?Re.createElementNS(Cc,e):Re.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:e=>Re.createTextNode(e),createComment:e=>Re.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Re.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,s,i){const o=n?n.previousSibling:t.lastChild;if(s&&(s===i||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{fs.innerHTML=r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e;const a=fs.content;if(r==="svg"||r==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}t.insertBefore(a,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Dc=Symbol("_vtc");function xc(e,t,n){const r=e[Dc];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const us=Symbol("_vod"),Rc=Symbol("_vsh"),Pc=Symbol(""),Mc=/(^|;)\s*display\s*:/;function Nc(e,t,n){const r=e.style,s=G(n);let i=!1;if(n&&!s){if(t)if(G(t))for(const o of t.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Gt(r,a,"")}else for(const o in t)n[o]==null&&Gt(r,o,"");for(const o in n)o==="display"&&(i=!0),Gt(r,o,n[o])}else if(s){if(t!==n){const o=r[Pc];o&&(n+=";"+o),r.cssText=n,i=Mc.test(n)}}else t&&e.removeAttribute("style");us in e&&(e[us]=i?r.display:"",e[Rc]&&(r.display="none"))}const ds=/\s*!important$/;function Gt(e,t,n){if(O(n))n.forEach(r=>Gt(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=$c(e,t);ds.test(n)?e.setProperty(ht(r),n.replace(ds,""),"important"):e[r]=n}}const hs=["Webkit","Moz","ms"],Pn={};function $c(e,t){const n=Pn[t];if(n)return n;let r=ut(t);if(r!=="filter"&&r in e)return Pn[t]=r;r=ks(r);for(let s=0;s<hs.length;s++){const i=hs[s]+r;if(i in e)return Pn[t]=i}return t}const ps="http://www.w3.org/1999/xlink";function Fc(e,t,n,r,s){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(ps,t.slice(6,t.length)):e.setAttributeNS(ps,t,n);else{const i=Bo(t);n==null||i&&!zs(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function Lc(e,t,n,r,s,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,s,i),e[t]=n??"";return}const a=e.tagName;if(t==="value"&&a!=="PROGRESS"&&!a.includes("-")){const u=a==="OPTION"?e.getAttribute("value")||"":e.value,d=n??"";(u!==d||!("_value"in e))&&(e.value=d),n==null&&e.removeAttribute(t),e._value=n;return}let c=!1;if(n===""||n==null){const u=typeof e[t];u==="boolean"?n=zs(n):n==null&&u==="string"?(n="",c=!0):u==="number"&&(n=0,c=!0)}try{e[t]=n}catch{}c&&e.removeAttribute(t)}function Bc(e,t,n,r){e.addEventListener(t,n,r)}function jc(e,t,n,r){e.removeEventListener(t,n,r)}const gs=Symbol("_vei");function Vc(e,t,n,r,s=null){const i=e[gs]||(e[gs]={}),o=i[t];if(r&&o)o.value=r;else{const[a,c]=Hc(t);if(r){const u=i[t]=Kc(r,s);Bc(e,a,u,c)}else o&&(jc(e,a,o,c),i[t]=void 0)}}const ms=/(?:Once|Passive|Capture)$/;function Hc(e){let t;if(ms.test(e)){t={};let r;for(;r=e.match(ms);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):ht(e.slice(2)),t]}let Mn=0;const Uc=Promise.resolve(),kc=()=>Mn||(Uc.then(()=>Mn=0),Mn=Date.now());function Kc(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;ge(Wc(r,n.value),t,5,[r])};return n.value=e,n.attached=kc(),n}function Wc(e,t){if(O(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>s=>!s._stopped&&r&&r(s))}else return t}const _s=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,zc=(e,t,n,r,s,i,o,a,c)=>{const u=s==="svg";t==="class"?xc(e,r,u):t==="style"?Nc(e,n,r):sn(t)?or(t)||Vc(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):qc(e,t,r,u))?Lc(e,t,r,i,o,a,c):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Fc(e,t,r,u))};function qc(e,t,n,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in e&&_s(t)&&D(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=e.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return _s(t)&&G(n)?!1:t in e}const Gc=J({patchProp:zc},Oc);let bs;function Yc(){return bs||(bs=ic(Gc))}const Jc=(...e)=>{const t=Yc().createApp(...e),{mount:n}=t;return t.mount=r=>{const s=Zc(r);if(!s)return;const i=t._component;!D(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,Xc(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t};function Xc(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Zc(e){return G(e)?document.querySelector(e):e}const Qc="/vite.svg",el="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20aria-hidden='true'%20role='img'%20class='iconify%20iconify--logos'%20width='37.07'%20height='36'%20preserveAspectRatio='xMidYMid%20meet'%20viewBox='0%200%20256%20198'%3e%3cpath%20fill='%2341B883'%20d='M204.8%200H256L128%20220.8L0%200h97.92L128%2051.2L157.44%200h47.36Z'%3e%3c/path%3e%3cpath%20fill='%2341B883'%20d='m0%200l128%20220.8L256%200h-51.2L128%20132.48L50.56%200H0Z'%3e%3c/path%3e%3cpath%20fill='%2335495E'%20d='M50.56%200L128%20133.12L204.8%200h-47.36L128%2051.2L97.92%200H50.56Z'%3e%3c/path%3e%3c/svg%3e",ji=(e,t)=>{const n=e.__vccOpts||e;for(const[r,s]of t)n[r]=s;return n},gn=e=>(gi("data-v-4b8d1567"),e=e(),mi(),e),tl={class:"card"},nl=gn(()=>Y("p",null,[Qe(" Edit "),Y("code",null,"components/HelloWorld.vue"),Qe(" to test HMR ")],-1)),rl=gn(()=>Y("p",null,[Qe(" Check out "),Y("a",{href:"https://vuejs.org/guide/quick-start.html#local",target:"_blank"},"create-vue"),Qe(", the official Vue + Vite starter ")],-1)),sl=gn(()=>Y("p",null,[Qe(" Install "),Y("a",{href:"https://github.com/vuejs/language-tools",target:"_blank"},"Volar"),Qe(" in your IDE for a better DX ")],-1)),il=gn(()=>Y("p",{class:"read-the-docs"},"Click on the Vite and Vue logos to learn more",-1)),ol={__name:"HelloWorld",props:{msg:String},setup(e){const t=fa(0);return(n,r)=>(Ni(),$i(he,null,[Y("h1",null,Ur(e.msg),1),Y("div",tl,[Y("button",{type:"button",onClick:r[0]||(r[0]=s=>t.value++)},"count is "+Ur(t.value),1),nl]),rl,sl,il],64))}},al=ji(ol,[["__scopeId","data-v-4b8d1567"]]),cl=e=>(gi("data-v-d6420450"),e=e(),mi(),e),ll=cl(()=>Y("div",null,[Y("a",{href:"https://vitejs.dev",target:"_blank"},[Y("img",{src:Qc,class:"logo",alt:"Vite logo"})]),Y("a",{href:"https://vuejs.org/",target:"_blank"},[Y("img",{src:el,class:"logo vue",alt:"Vue logo"})])],-1)),fl={__name:"App",setup(e){return(t,n)=>(Ni(),$i(he,null,[ll,Ne(al,{msg:"Vite + Vue"})],64))}},ul=ji(fl,[["__scopeId","data-v-d6420450"]]);var ys={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vi=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=s&63|128):(s&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=s&63|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=s&63|128)}return t},dl=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const s=e[n++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=e[n++];t[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=e[n++],o=e[n++],a=e[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(c&1023))}else{const i=e[n++],o=e[n++];t[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return t.join("")},Hi={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<e.length;s+=3){const i=e[s],o=s+1<e.length,a=o?e[s+1]:0,c=s+2<e.length,u=c?e[s+2]:0,d=i>>2,_=(i&3)<<4|a>>4;let E=(a&15)<<2|u>>6,A=u&63;c||(A=64,o||(E=64)),r.push(n[d],n[_],n[E],n[A])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Vi(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):dl(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<e.length;){const i=n[e.charAt(s++)],a=s<e.length?n[e.charAt(s)]:0;++s;const u=s<e.length?n[e.charAt(s)]:64;++s;const _=s<e.length?n[e.charAt(s)]:64;if(++s,i==null||a==null||u==null||_==null)throw new hl;const E=i<<2|a>>4;if(r.push(E),u!==64){const A=a<<4&240|u>>2;if(r.push(A),_!==64){const H=u<<6&192|_;r.push(H)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class hl extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const pl=function(e){const t=Vi(e);return Hi.encodeByteArray(t,!0)},Ui=function(e){return pl(e).replace(/\./g,"")},gl=function(e){try{return Hi.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ml(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _l=()=>ml().__FIREBASE_DEFAULTS__,bl=()=>{if(typeof process>"u"||typeof ys>"u")return;const e=ys.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},yl=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&gl(e[1]);return t&&JSON.parse(t)},wl=()=>{try{return _l()||bl()||yl()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},ki=()=>{var e;return(e=wl())===null||e===void 0?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}function El(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function Ki(){try{return typeof indexedDB=="object"}catch{return!1}}function Wi(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;t(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){t(n)}})}function Il(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Al="FirebaseError";class it extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=Al,Object.setPrototypeOf(this,it.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,mn.prototype.create)}}class mn{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},s=`${this.service}/${t}`,i=this.errors[t],o=i?Tl(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new it(s,a,r)}}function Tl(e,t){return e.replace(Sl,(n,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const Sl=/\{\$([^}]+)}/g;function Qt(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const s of n){if(!r.includes(s))return!1;const i=e[s],o=t[s];if(ws(i)&&ws(o)){if(!Qt(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function ws(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cl=1e3,Ol=2,Dl=4*60*60*1e3,xl=.5;function vs(e,t=Cl,n=Ol){const r=t*Math.pow(n,e),s=Math.round(xl*r*(Math.random()-.5)*2);return Math.min(Dl,r+s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zi(e){return e&&e._delegate?e._delegate:e}class je{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ge="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new vl;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Ml(t))try{this.getOrInitializeService({instanceIdentifier:Ge})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(t=Ge){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Ge){return this.instances.has(t)}getOptions(t=Ge){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(t,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(t),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&t(o,s),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Pl(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Ge){return this.component?this.component.multipleInstances?t:Ge:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Pl(e){return e===Ge?void 0:e}function Ml(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Rl(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var B;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(B||(B={}));const $l={debug:B.DEBUG,verbose:B.VERBOSE,info:B.INFO,warn:B.WARN,error:B.ERROR,silent:B.SILENT},Fl=B.INFO,Ll={[B.DEBUG]:"log",[B.VERBOSE]:"log",[B.INFO]:"info",[B.WARN]:"warn",[B.ERROR]:"error"},Bl=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),s=Ll[t];if(s)console[s](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class qi{constructor(t){this.name=t,this._logLevel=Fl,this._logHandler=Bl,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in B))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?$l[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,B.DEBUG,...t),this._logHandler(this,B.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,B.VERBOSE,...t),this._logHandler(this,B.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,B.INFO,...t),this._logHandler(this,B.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,B.WARN,...t),this._logHandler(this,B.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,B.ERROR,...t),this._logHandler(this,B.ERROR,...t)}}const jl=(e,t)=>t.some(n=>e instanceof n);let Es,Is;function Vl(){return Es||(Es=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Hl(){return Is||(Is=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Gi=new WeakMap,Zn=new WeakMap,Yi=new WeakMap,Nn=new WeakMap,Tr=new WeakMap;function Ul(e){const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{n($e(e.result)),s()},o=()=>{r(e.error),s()};e.addEventListener("success",i),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&Gi.set(n,e)}).catch(()=>{}),Tr.set(t,e),t}function kl(e){if(Zn.has(e))return;const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)});Zn.set(e,t)}let Qn={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Zn.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Yi.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return $e(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Kl(e){Qn=e(Qn)}function Wl(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call($n(this),t,...n);return Yi.set(r,t.sort?t.sort():[t]),$e(r)}:Hl().includes(e)?function(...t){return e.apply($n(this),t),$e(Gi.get(this))}:function(...t){return $e(e.apply($n(this),t))}}function zl(e){return typeof e=="function"?Wl(e):(e instanceof IDBTransaction&&kl(e),jl(e,Vl())?new Proxy(e,Qn):e)}function $e(e){if(e instanceof IDBRequest)return Ul(e);if(Nn.has(e))return Nn.get(e);const t=zl(e);return t!==e&&(Nn.set(e,t),Tr.set(t,e)),t}const $n=e=>Tr.get(e);function Ji(e,t,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(e,t),a=$e(o);return r&&o.addEventListener("upgradeneeded",c=>{r($e(o.result),c.oldVersion,c.newVersion,$e(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const ql=["get","getKey","getAll","getAllKeys","count"],Gl=["put","add","delete","clear"],Fn=new Map;function As(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Fn.get(t))return Fn.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=Gl.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||ql.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),s&&c.done]))[0]};return Fn.set(t,i),i}Kl(e=>({...e,get:(t,n,r)=>As(t,n)||e.get(t,n,r),has:(t,n)=>!!As(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Jl(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Jl(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const er="@firebase/app",Ts="0.10.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const et=new qi("@firebase/app"),Xl="@firebase/app-compat",Zl="@firebase/analytics-compat",Ql="@firebase/analytics",ef="@firebase/app-check-compat",tf="@firebase/app-check",nf="@firebase/auth",rf="@firebase/auth-compat",sf="@firebase/database",of="@firebase/database-compat",af="@firebase/functions",cf="@firebase/functions-compat",lf="@firebase/installations",ff="@firebase/installations-compat",uf="@firebase/messaging",df="@firebase/messaging-compat",hf="@firebase/performance",pf="@firebase/performance-compat",gf="@firebase/remote-config",mf="@firebase/remote-config-compat",_f="@firebase/storage",bf="@firebase/storage-compat",yf="@firebase/firestore",wf="@firebase/firestore-compat",vf="firebase";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tr="[DEFAULT]",Ef={[er]:"fire-core",[Xl]:"fire-core-compat",[Ql]:"fire-analytics",[Zl]:"fire-analytics-compat",[tf]:"fire-app-check",[ef]:"fire-app-check-compat",[nf]:"fire-auth",[rf]:"fire-auth-compat",[sf]:"fire-rtdb",[of]:"fire-rtdb-compat",[af]:"fire-fn",[cf]:"fire-fn-compat",[lf]:"fire-iid",[ff]:"fire-iid-compat",[uf]:"fire-fcm",[df]:"fire-fcm-compat",[hf]:"fire-perf",[pf]:"fire-perf-compat",[gf]:"fire-rc",[mf]:"fire-rc-compat",[_f]:"fire-gcs",[bf]:"fire-gcs-compat",[yf]:"fire-fst",[wf]:"fire-fst-compat","fire-js":"fire-js",[vf]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const en=new Map,If=new Map,nr=new Map;function Ss(e,t){try{e.container.addComponent(t)}catch(n){et.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function tt(e){const t=e.name;if(nr.has(t))return et.debug(`There were multiple attempts to register component ${t}.`),!1;nr.set(t,e);for(const n of en.values())Ss(n,e);for(const n of If.values())Ss(n,e);return!0}function _n(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Af={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Fe=new mn("app","Firebase",Af);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tf{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new je("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Fe.create("app-deleted",{appName:this._name})}}function Xi(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:tr,automaticDataCollectionEnabled:!1},t),s=r.name;if(typeof s!="string"||!s)throw Fe.create("bad-app-name",{appName:String(s)});if(n||(n=ki()),!n)throw Fe.create("no-options");const i=en.get(s);if(i){if(Qt(n,i.options)&&Qt(r,i.config))return i;throw Fe.create("duplicate-app",{appName:s})}const o=new Nl(s);for(const c of nr.values())o.addComponent(c);const a=new Tf(n,r,o);return en.set(s,a),a}function Sf(e=tr){const t=en.get(e);if(!t&&e===tr&&ki())return Xi();if(!t)throw Fe.create("no-app",{appName:e});return t}function Le(e,t,n){var r;let s=(r=Ef[e])!==null&&r!==void 0?r:e;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${t}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),et.warn(a.join(" "));return}tt(new je(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cf="firebase-heartbeat-database",Of=1,Pt="firebase-heartbeat-store";let Ln=null;function Zi(){return Ln||(Ln=Ji(Cf,Of,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(Pt)}catch(n){console.warn(n)}}}}).catch(e=>{throw Fe.create("idb-open",{originalErrorMessage:e.message})})),Ln}async function Df(e){try{const n=(await Zi()).transaction(Pt),r=await n.objectStore(Pt).get(Qi(e));return await n.done,r}catch(t){if(t instanceof it)et.warn(t.message);else{const n=Fe.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});et.warn(n.message)}}}async function Cs(e,t){try{const r=(await Zi()).transaction(Pt,"readwrite");await r.objectStore(Pt).put(t,Qi(e)),await r.done}catch(n){if(n instanceof it)et.warn(n.message);else{const r=Fe.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});et.warn(r.message)}}}function Qi(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xf=1024,Rf=30*24*60*60*1e3;class Pf{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Nf(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Os();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Rf}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Os(),{heartbeatsToSend:r,unsentEntries:s}=Mf(this._heartbeatsCache.heartbeats),i=Ui(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Os(){return new Date().toISOString().substring(0,10)}function Mf(e,t=xf){const n=[];let r=e.slice();for(const s of e){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Ds(n)>t){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Ds(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Nf{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ki()?Wi().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Df(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Cs(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Cs(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function Ds(e){return Ui(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $f(e){tt(new je("platform-logger",t=>new Yl(t),"PRIVATE")),tt(new je("heartbeat",t=>new Pf(t),"PRIVATE")),Le(er,Ts,e),Le(er,Ts,"esm2017"),Le("fire-js","")}$f("");var Ff="firebase",Lf="10.11.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Le(Ff,Lf,"app");const eo="@firebase/installations",Sr="0.6.6";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const to=1e4,no=`w:${Sr}`,ro="FIS_v2",Bf="https://firebaseinstallations.googleapis.com/v1",jf=60*60*1e3,Vf="installations",Hf="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uf={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},nt=new mn(Vf,Hf,Uf);function so(e){return e instanceof it&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function io({projectId:e}){return`${Bf}/projects/${e}/installations`}function oo(e){return{token:e.token,requestStatus:2,expiresIn:Kf(e.expiresIn),creationTime:Date.now()}}async function ao(e,t){const r=(await t.json()).error;return nt.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function co({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function kf(e,{refreshToken:t}){const n=co(e);return n.append("Authorization",Wf(t)),n}async function lo(e){const t=await e();return t.status>=500&&t.status<600?e():t}function Kf(e){return Number(e.replace("s","000"))}function Wf(e){return`${ro} ${e}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zf({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=io(e),s=co(e),i=t.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&s.append("x-firebase-client",u)}const o={fid:n,authVersion:ro,appId:e.appId,sdkVersion:no},a={method:"POST",headers:s,body:JSON.stringify(o)},c=await lo(()=>fetch(r,a));if(c.ok){const u=await c.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:oo(u.authToken)}}else throw await ao("Create Installation",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fo(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qf(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gf=/^[cdef][\w-]{21}$/,rr="";function Yf(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=Jf(e);return Gf.test(n)?n:rr}catch{return rr}}function Jf(e){return qf(e).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bn(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uo=new Map;function ho(e,t){const n=bn(e);po(n,t),Xf(n,t)}function po(e,t){const n=uo.get(e);if(n)for(const r of n)r(t)}function Xf(e,t){const n=Zf();n&&n.postMessage({key:e,fid:t}),Qf()}let Je=null;function Zf(){return!Je&&"BroadcastChannel"in self&&(Je=new BroadcastChannel("[Firebase] FID Change"),Je.onmessage=e=>{po(e.data.key,e.data.fid)}),Je}function Qf(){uo.size===0&&Je&&(Je.close(),Je=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eu="firebase-installations-database",tu=1,rt="firebase-installations-store";let Bn=null;function Cr(){return Bn||(Bn=Ji(eu,tu,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(rt)}}})),Bn}async function tn(e,t){const n=bn(e),s=(await Cr()).transaction(rt,"readwrite"),i=s.objectStore(rt),o=await i.get(n);return await i.put(t,n),await s.done,(!o||o.fid!==t.fid)&&ho(e,t.fid),t}async function go(e){const t=bn(e),r=(await Cr()).transaction(rt,"readwrite");await r.objectStore(rt).delete(t),await r.done}async function yn(e,t){const n=bn(e),s=(await Cr()).transaction(rt,"readwrite"),i=s.objectStore(rt),o=await i.get(n),a=t(o);return a===void 0?await i.delete(n):await i.put(a,n),await s.done,a&&(!o||o.fid!==a.fid)&&ho(e,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Or(e){let t;const n=await yn(e.appConfig,r=>{const s=nu(r),i=ru(e,s);return t=i.registrationPromise,i.installationEntry});return n.fid===rr?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function nu(e){const t=e||{fid:Yf(),registrationStatus:0};return mo(t)}function ru(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(nt.create("app-offline"));return{installationEntry:t,registrationPromise:s}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=su(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:iu(e)}:{installationEntry:t}}async function su(e,t){try{const n=await zf(e,t);return tn(e.appConfig,n)}catch(n){throw so(n)&&n.customData.serverCode===409?await go(e.appConfig):await tn(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function iu(e){let t=await xs(e.appConfig);for(;t.registrationStatus===1;)await fo(100),t=await xs(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Or(e);return r||n}return t}function xs(e){return yn(e,t=>{if(!t)throw nt.create("installation-not-found");return mo(t)})}function mo(e){return ou(e)?{fid:e.fid,registrationStatus:0}:e}function ou(e){return e.registrationStatus===1&&e.registrationTime+to<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function au({appConfig:e,heartbeatServiceProvider:t},n){const r=cu(e,n),s=kf(e,n),i=t.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&s.append("x-firebase-client",u)}const o={installation:{sdkVersion:no,appId:e.appId}},a={method:"POST",headers:s,body:JSON.stringify(o)},c=await lo(()=>fetch(r,a));if(c.ok){const u=await c.json();return oo(u)}else throw await ao("Generate Auth Token",c)}function cu(e,{fid:t}){return`${io(e)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dr(e,t=!1){let n;const r=await yn(e.appConfig,i=>{if(!_o(i))throw nt.create("not-registered");const o=i.authToken;if(!t&&uu(o))return i;if(o.requestStatus===1)return n=lu(e,t),i;{if(!navigator.onLine)throw nt.create("app-offline");const a=hu(i);return n=fu(e,a),a}});return n?await n:r.authToken}async function lu(e,t){let n=await Rs(e.appConfig);for(;n.authToken.requestStatus===1;)await fo(100),n=await Rs(e.appConfig);const r=n.authToken;return r.requestStatus===0?Dr(e,t):r}function Rs(e){return yn(e,t=>{if(!_o(t))throw nt.create("not-registered");const n=t.authToken;return pu(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function fu(e,t){try{const n=await au(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await tn(e.appConfig,r),n}catch(n){if(so(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await go(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await tn(e.appConfig,r)}throw n}}function _o(e){return e!==void 0&&e.registrationStatus===2}function uu(e){return e.requestStatus===2&&!du(e)}function du(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+jf}function hu(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function pu(e){return e.requestStatus===1&&e.requestTime+to<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gu(e){const t=e,{installationEntry:n,registrationPromise:r}=await Or(t);return r?r.catch(console.error):Dr(t).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mu(e,t=!1){const n=e;return await _u(n),(await Dr(n,t)).token}async function _u(e){const{registrationPromise:t}=await Or(e);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bu(e){if(!e||!e.options)throw jn("App Configuration");if(!e.name)throw jn("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw jn(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function jn(e){return nt.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bo="installations",yu="installations-internal",wu=e=>{const t=e.getProvider("app").getImmediate(),n=bu(t),r=_n(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},vu=e=>{const t=e.getProvider("app").getImmediate(),n=_n(t,bo).getImmediate();return{getId:()=>gu(n),getToken:s=>mu(n,s)}};function Eu(){tt(new je(bo,wu,"PUBLIC")),tt(new je(yu,vu,"PRIVATE"))}Eu();Le(eo,Sr);Le(eo,Sr,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nn="analytics",Iu="firebase_id",Au="origin",Tu=60*1e3,Su="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",xr="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const re=new qi("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cu={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},ce=new mn("analytics","Analytics",Cu);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ou(e){if(!e.startsWith(xr)){const t=ce.create("invalid-gtag-resource",{gtagURL:e});return re.warn(t.message),""}return e}function yo(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function Du(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function xu(e,t){const n=Du("firebase-js-sdk-policy",{createScriptURL:Ou}),r=document.createElement("script"),s=`${xr}?l=${e}&id=${t}`;r.src=n?n==null?void 0:n.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function Ru(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function Pu(e,t,n,r,s,i){const o=r[s];try{if(o)await t[o];else{const c=(await yo(n)).find(u=>u.measurementId===s);c&&await t[c.appId]}}catch(a){re.error(a)}e("config",s,i)}async function Mu(e,t,n,r,s){try{let i=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const a=await yo(n);for(const c of o){const u=a.find(_=>_.measurementId===c),d=u&&t[u.appId];if(d)i.push(d);else{i=[];break}}}i.length===0&&(i=Object.values(t)),await Promise.all(i),e("event",r,s||{})}catch(i){re.error(i)}}function Nu(e,t,n,r){async function s(i,...o){try{if(i==="event"){const[a,c]=o;await Mu(e,t,n,a,c)}else if(i==="config"){const[a,c]=o;await Pu(e,t,n,r,a,c)}else if(i==="consent"){const[a]=o;e("consent","update",a)}else if(i==="get"){const[a,c,u]=o;e("get",a,c,u)}else if(i==="set"){const[a]=o;e("set",a)}else e(i,...o)}catch(a){re.error(a)}}return s}function $u(e,t,n,r,s){let i=function(...o){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=Nu(i,e,t,n),{gtagCore:i,wrappedGtag:window[s]}}function Fu(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(xr)&&n.src.includes(e))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lu=30,Bu=1e3;class ju{constructor(t={},n=Bu){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const wo=new ju;function Vu(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function Hu(e){var t;const{appId:n,apiKey:r}=e,s={method:"GET",headers:Vu(r)},i=Su.replace("{app-id}",n),o=await fetch(i,s);if(o.status!==200&&o.status!==304){let a="";try{const c=await o.json();!((t=c.error)===null||t===void 0)&&t.message&&(a=c.error.message)}catch{}throw ce.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function Uu(e,t=wo,n){const{appId:r,apiKey:s,measurementId:i}=e.options;if(!r)throw ce.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw ce.create("no-api-key")}const o=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new Wu;return setTimeout(async()=>{a.abort()},Tu),vo({appId:r,apiKey:s,measurementId:i},o,a,t)}async function vo(e,{throttleEndTimeMillis:t,backoffCount:n},r,s=wo){var i;const{appId:o,measurementId:a}=e;try{await ku(r,t)}catch(c){if(a)return re.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw c}try{const c=await Hu(e);return s.deleteThrottleMetadata(o),c}catch(c){const u=c;if(!Ku(u)){if(s.deleteThrottleMetadata(o),a)return re.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:a};throw c}const d=Number((i=u==null?void 0:u.customData)===null||i===void 0?void 0:i.httpStatus)===503?vs(n,s.intervalMillis,Lu):vs(n,s.intervalMillis),_={throttleEndTimeMillis:Date.now()+d,backoffCount:n+1};return s.setThrottleMetadata(o,_),re.debug(`Calling attemptFetch again in ${d} millis`),vo(e,_,r,s)}}function ku(e,t){return new Promise((n,r)=>{const s=Math.max(t-Date.now(),0),i=setTimeout(n,s);e.addEventListener(()=>{clearTimeout(i),r(ce.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function Ku(e){if(!(e instanceof it)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class Wu{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function zu(e,t,n,r,s){if(s&&s.global){e("event",n,r);return}else{const i=await t,o=Object.assign(Object.assign({},r),{send_to:i});e("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qu(){if(Ki())try{await Wi()}catch(e){return re.warn(ce.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return re.warn(ce.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Gu(e,t,n,r,s,i,o){var a;const c=Uu(e);c.then(A=>{n[A.measurementId]=A.appId,e.options.measurementId&&A.measurementId!==e.options.measurementId&&re.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${A.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(A=>re.error(A)),t.push(c);const u=qu().then(A=>{if(A)return r.getId()}),[d,_]=await Promise.all([c,u]);Fu(i)||xu(i,d.measurementId),s("js",new Date);const E=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return E[Au]="firebase",E.update=!0,_!=null&&(E[Iu]=_),s("config",d.measurementId,E),d.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yu{constructor(t){this.app=t}_delete(){return delete At[this.app.options.appId],Promise.resolve()}}let At={},Ps=[];const Ms={};let Vn="dataLayer",Ju="gtag",Ns,Eo,$s=!1;function Xu(){const e=[];if(El()&&e.push("This is a browser extension environment."),Il()||e.push("Cookies are not available."),e.length>0){const t=e.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=ce.create("invalid-analytics-context",{errorInfo:t});re.warn(n.message)}}function Zu(e,t,n){Xu();const r=e.options.appId;if(!r)throw ce.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)re.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw ce.create("no-api-key");if(At[r]!=null)throw ce.create("already-exists",{id:r});if(!$s){Ru(Vn);const{wrappedGtag:i,gtagCore:o}=$u(At,Ps,Ms,Vn,Ju);Eo=i,Ns=o,$s=!0}return At[r]=Gu(e,Ps,Ms,t,Ns,Vn,n),new Yu(e)}function Qu(e=Sf()){e=zi(e);const t=_n(e,nn);return t.isInitialized()?t.getImmediate():ed(e)}function ed(e,t={}){const n=_n(e,nn);if(n.isInitialized()){const s=n.getImmediate();if(Qt(t,n.getOptions()))return s;throw ce.create("already-initialized")}return n.initialize({options:t})}function td(e,t,n,r){e=zi(e),zu(Eo,At[e.app.options.appId],t,n,r).catch(s=>re.error(s))}const Fs="@firebase/analytics",Ls="0.10.2";function nd(){tt(new je(nn,(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),s=t.getProvider("installations-internal").getImmediate();return Zu(r,s,n)},"PUBLIC")),tt(new je("analytics-internal",e,"PRIVATE")),Le(Fs,Ls),Le(Fs,Ls,"esm2017");function e(t){try{const n=t.getProvider(nn).getImmediate();return{logEvent:(r,s,i)=>td(n,r,s,i)}}catch(n){throw ce.create("interop-component-reg-failed",{reason:n})}}}nd();function rd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function sd(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function r(){return this instanceof r?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var s=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,s.get?s:{enumerable:!0,get:function(){return e[r]}})}),n}var Ce={exports:{}};const id={},od=Object.freeze(Object.defineProperty({__proto__:null,default:id},Symbol.toStringTag,{value:"Module"})),wn=sd(od),ad="dotenv",cd="16.4.5",ld="Loads environment variables from .env file",fd="lib/main.js",ud="lib/main.d.ts",dd={".":{types:"./lib/main.d.ts",require:"./lib/main.js",default:"./lib/main.js"},"./config":"./config.js","./config.js":"./config.js","./lib/env-options":"./lib/env-options.js","./lib/env-options.js":"./lib/env-options.js","./lib/cli-options":"./lib/cli-options.js","./lib/cli-options.js":"./lib/cli-options.js","./package.json":"./package.json"},hd={"dts-check":"tsc --project tests/types/tsconfig.json",lint:"standard","lint-readme":"standard-markdown",pretest:"npm run lint && npm run dts-check",test:"tap tests/*.js --100 -Rspec","test:coverage":"tap --coverage-report=lcov",prerelease:"npm test",release:"standard-version"},pd={type:"git",url:"git://github.com/motdotla/dotenv.git"},gd="https://dotenvx.com",md=["dotenv","env",".env","environment","variables","config","settings"],_d="README.md",bd="BSD-2-Clause",yd={"@definitelytyped/dtslint":"^0.0.133","@types/node":"^18.11.3",decache:"^4.6.1",sinon:"^14.0.1",standard:"^17.0.0","standard-markdown":"^7.1.0","standard-version":"^9.5.0",tap:"^16.3.0",tar:"^6.1.11",typescript:"^4.8.4"},wd={node:">=12"},vd={fs:!1},Ed={name:ad,version:cd,description:ld,main:fd,types:ud,exports:dd,scripts:hd,repository:pd,funding:gd,keywords:md,readmeFilename:_d,license:bd,devDependencies:yd,engines:wd,browser:vd};var Tt={};const sr=wn,Rr=wn,Id=wn,Ad=wn,Td=Ed,Pr=Td.version,Sd=/(?:^|^)\s*(?:export\s+)?([\w.-]+)(?:\s*=\s*?|:\s+?)(\s*'(?:\\'|[^'])*'|\s*"(?:\\"|[^"])*"|\s*`(?:\\`|[^`])*`|[^#\r\n]+)?\s*(?:#.*)?(?:$|$)/mg;function Cd(e){const t={};let n=e.toString();n=n.replace(/\r\n?/mg,`
`);let r;for(;(r=Sd.exec(n))!=null;){const s=r[1];let i=r[2]||"";i=i.trim();const o=i[0];i=i.replace(/^(['"`])([\s\S]*)\1$/mg,"$2"),o==='"'&&(i=i.replace(/\\n/g,`
`),i=i.replace(/\\r/g,"\r")),t[s]=i}return t}function Od(e){const t=Ao(e),n=K.configDotenv({path:t});if(!n.parsed){const o=new Error(`MISSING_DATA: Cannot parse ${t} for an unknown reason`);throw o.code="MISSING_DATA",o}const r=Io(e).split(","),s=r.length;let i;for(let o=0;o<s;o++)try{const a=r[o].trim(),c=Rd(n,a);i=K.decrypt(c.ciphertext,c.key);break}catch(a){if(o+1>=s)throw a}return K.parse(i)}function Dd(e){console.log(`[dotenv@${Pr}][INFO] ${e}`)}function xd(e){console.log(`[dotenv@${Pr}][WARN] ${e}`)}function rn(e){console.log(`[dotenv@${Pr}][DEBUG] ${e}`)}function Io(e){return e&&e.DOTENV_KEY&&e.DOTENV_KEY.length>0?e.DOTENV_KEY:Tt.DOTENV_KEY&&Tt.DOTENV_KEY.length>0?Tt.DOTENV_KEY:""}function Rd(e,t){let n;try{n=new URL(t)}catch(a){if(a.code==="ERR_INVALID_URL"){const c=new Error("INVALID_DOTENV_KEY: Wrong format. Must be in valid uri format like dotenv://:key_1234@dotenvx.com/vault/.env.vault?environment=development");throw c.code="INVALID_DOTENV_KEY",c}throw a}const r=n.password;if(!r){const a=new Error("INVALID_DOTENV_KEY: Missing key part");throw a.code="INVALID_DOTENV_KEY",a}const s=n.searchParams.get("environment");if(!s){const a=new Error("INVALID_DOTENV_KEY: Missing environment part");throw a.code="INVALID_DOTENV_KEY",a}const i=`DOTENV_VAULT_${s.toUpperCase()}`,o=e.parsed[i];if(!o){const a=new Error(`NOT_FOUND_DOTENV_ENVIRONMENT: Cannot locate environment ${i} in your .env.vault file.`);throw a.code="NOT_FOUND_DOTENV_ENVIRONMENT",a}return{ciphertext:o,key:r}}function Ao(e){let t=null;if(e&&e.path&&e.path.length>0)if(Array.isArray(e.path))for(const n of e.path)sr.existsSync(n)&&(t=n.endsWith(".vault")?n:`${n}.vault`);else t=e.path.endsWith(".vault")?e.path:`${e.path}.vault`;else t=Rr.resolve(process.cwd(),".env.vault");return sr.existsSync(t)?t:null}function Bs(e){return e[0]==="~"?Rr.join(Id.homedir(),e.slice(1)):e}function Pd(e){Dd("Loading env from encrypted .env.vault");const t=K._parseVault(e);let n=Tt;return e&&e.processEnv!=null&&(n=e.processEnv),K.populate(n,t,e),{parsed:t}}function Md(e){const t=Rr.resolve(process.cwd(),".env");let n="utf8";const r=!!(e&&e.debug);e&&e.encoding?n=e.encoding:r&&rn("No encoding is specified. UTF-8 is used by default");let s=[t];if(e&&e.path)if(!Array.isArray(e.path))s=[Bs(e.path)];else{s=[];for(const c of e.path)s.push(Bs(c))}let i;const o={};for(const c of s)try{const u=K.parse(sr.readFileSync(c,{encoding:n}));K.populate(o,u,e)}catch(u){r&&rn(`Failed to load ${c} ${u.message}`),i=u}let a=Tt;return e&&e.processEnv!=null&&(a=e.processEnv),K.populate(a,o,e),i?{parsed:o,error:i}:{parsed:o}}function Nd(e){if(Io(e).length===0)return K.configDotenv(e);const t=Ao(e);return t?K._configVault(e):(xd(`You set DOTENV_KEY but you are missing a .env.vault file at ${t}. Did you forget to build it?`),K.configDotenv(e))}function $d(e,t){const n=Buffer.from(t.slice(-64),"hex");let r=Buffer.from(e,"base64");const s=r.subarray(0,12),i=r.subarray(-16);r=r.subarray(12,-16);try{const o=Ad.createDecipheriv("aes-256-gcm",n,s);return o.setAuthTag(i),`${o.update(r)}${o.final()}`}catch(o){const a=o instanceof RangeError,c=o.message==="Invalid key length",u=o.message==="Unsupported state or unable to authenticate data";if(a||c){const d=new Error("INVALID_DOTENV_KEY: It must be 64 characters long (or more)");throw d.code="INVALID_DOTENV_KEY",d}else if(u){const d=new Error("DECRYPTION_FAILED: Please check your DOTENV_KEY");throw d.code="DECRYPTION_FAILED",d}else throw o}}function Fd(e,t,n={}){const r=!!(n&&n.debug),s=!!(n&&n.override);if(typeof t!="object"){const i=new Error("OBJECT_REQUIRED: Please check the processEnv argument being passed to populate");throw i.code="OBJECT_REQUIRED",i}for(const i of Object.keys(t))Object.prototype.hasOwnProperty.call(e,i)?(s===!0&&(e[i]=t[i]),r&&rn(s===!0?`"${i}" is already defined and WAS overwritten`:`"${i}" is already defined and was NOT overwritten`)):e[i]=t[i]}const K={configDotenv:Md,_configVault:Pd,_parseVault:Od,config:Nd,decrypt:$d,parse:Cd,populate:Fd};Ce.exports.configDotenv=K.configDotenv;Ce.exports._configVault=K._configVault;Ce.exports._parseVault=K._parseVault;Ce.exports.config=K.config;Ce.exports.decrypt=K.decrypt;Ce.exports.parse=K.parse;Ce.exports.populate=K.populate;Ce.exports=K;var Ld=Ce.exports;const Bd=rd(Ld);var qe={};Bd.config();const jd={apiKey:qe.VUE_APP_FIREBASE_API_KEY,authDomain:qe.VUE_APP_FIREBASE_AUTH_DOMAIN,projectId:qe.VUE_APP_FIREBASE_PROJECT_ID,storageBucket:qe.VUE_APP_FIREBASE_STORAGE_BUCKET,messagingSenderId:qe.VUE_APP_FIREBASE_MESSAGING_SENDER_ID,appId:qe.VUE_APP_FIREBASE_APP_ID,measurementId:qe.VUE_APP_FIREBASE_MEASUREMENT_ID},Vd=Xi(jd);Qu(Vd);Jc(ul).mount("#app");
