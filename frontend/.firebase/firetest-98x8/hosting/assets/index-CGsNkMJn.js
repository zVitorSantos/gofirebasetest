import mo from"dotenv";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();/**
* @vue/shared v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Qn(e,t){const n=new Set(e.split(","));return s=>n.has(s)}const H={},ot=[],le=()=>{},_o=()=>!1,en=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),es=e=>e.startsWith("onUpdate:"),J=Object.assign,ts=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},bo=Object.prototype.hasOwnProperty,D=(e,t)=>bo.call(e,t),x=Array.isArray,at=e=>tn(e)==="[object Map]",Rr=e=>tn(e)==="[object Set]",O=e=>typeof e=="function",q=e=>typeof e=="string",nt=e=>typeof e=="symbol",k=e=>e!==null&&typeof e=="object",Dr=e=>(k(e)||O(e))&&O(e.then)&&O(e.catch),Pr=Object.prototype.toString,tn=e=>Pr.call(e),yo=e=>tn(e).slice(8,-1),Mr=e=>tn(e)==="[object Object]",ns=e=>q(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,_t=Qn(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),nn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},wo=/-(\w)/g,lt=nn(e=>e.replace(wo,(t,n)=>n?n.toUpperCase():"")),Io=/\B([A-Z])/g,ut=nn(e=>e.replace(Io,"-$1").toLowerCase()),Fr=nn(e=>e.charAt(0).toUpperCase()+e.slice(1)),yn=nn(e=>e?`on${Fr(e)}`:""),Be=(e,t)=>!Object.is(e,t),wn=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},$r=(e,t,n,s=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:s,value:n})},Eo=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Ms;const Br=()=>Ms||(Ms=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ss(e){if(x(e)){const t={};for(let n=0;n<e.length;n++){const s=e[n],r=q(s)?To(s):ss(s);if(r)for(const i in r)t[i]=r[i]}return t}else if(q(e)||k(e))return e}const vo=/;(?![^(]*\))/g,Ao=/:([^]+)/,So=/\/\*[^]*?\*\//g;function To(e){const t={};return e.replace(So,"").split(vo).forEach(n=>{if(n){const s=n.split(Ao);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function rs(e){let t="";if(q(e))t=e;else if(x(e))for(let n=0;n<e.length;n++){const s=rs(e[n]);s&&(t+=s+" ")}else if(k(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Co="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",xo=Qn(Co);function Nr(e){return!!e||e===""}const Fs=e=>q(e)?e:e==null?"":x(e)||k(e)&&(e.toString===Pr||!O(e.toString))?JSON.stringify(e,Lr,2):String(e),Lr=(e,t)=>t&&t.__v_isRef?Lr(e,t.value):at(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[s,r],i)=>(n[In(s,i)+" =>"]=r,n),{})}:Rr(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>In(n))}:nt(t)?In(t):k(t)&&!x(t)&&!Mr(t)?String(t):t,In=(e,t="")=>{var n;return nt(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ue;class Oo{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=ue,!t&&ue&&(this.index=(ue.scopes||(ue.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=ue;try{return ue=this,t()}finally{ue=n}}}on(){ue=this}off(){ue=this.parent}stop(t){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function Ro(e,t=ue){t&&t.active&&t.effects.push(e)}function Do(){return ue}let Je;class is{constructor(t,n,s,r){this.fn=t,this.trigger=n,this.scheduler=s,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,Ro(this,r)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,Le();for(let t=0;t<this._depsLength;t++){const n=this.deps[t];if(n.computed&&(Po(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),je()}return this._dirtyLevel>=4}set dirty(t){this._dirtyLevel=t?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let t=Re,n=Je;try{return Re=!0,Je=this,this._runnings++,$s(this),this.fn()}finally{Bs(this),this._runnings--,Je=n,Re=t}}stop(){this.active&&($s(this),Bs(this),this.onStop&&this.onStop(),this.active=!1)}}function Po(e){return e.value}function $s(e){e._trackId++,e._depsLength=0}function Bs(e){if(e.deps.length>e._depsLength){for(let t=e._depsLength;t<e.deps.length;t++)jr(e.deps[t],e);e.deps.length=e._depsLength}}function jr(e,t){const n=e.get(t);n!==void 0&&t._trackId!==n&&(e.delete(t),e.size===0&&e.cleanup())}let Re=!0,Bn=0;const Hr=[];function Le(){Hr.push(Re),Re=!1}function je(){const e=Hr.pop();Re=e===void 0?!0:e}function os(){Bn++}function as(){for(Bn--;!Bn&&Nn.length;)Nn.shift()()}function Vr(e,t,n){if(t.get(e)!==e._trackId){t.set(e,e._trackId);const s=e.deps[e._depsLength];s!==t?(s&&jr(s,e),e.deps[e._depsLength++]=t):e._depsLength++}}const Nn=[];function Ur(e,t,n){os();for(const s of e.keys()){let r;s._dirtyLevel<t&&(r??(r=e.get(s)===s._trackId))&&(s._shouldSchedule||(s._shouldSchedule=s._dirtyLevel===0),s._dirtyLevel=t),s._shouldSchedule&&(r??(r=e.get(s)===s._trackId))&&(s.trigger(),(!s._runnings||s.allowRecurse)&&s._dirtyLevel!==2&&(s._shouldSchedule=!1,s.scheduler&&Nn.push(s.scheduler)))}as()}const kr=(e,t)=>{const n=new Map;return n.cleanup=e,n.computed=t,n},Ln=new WeakMap,Ye=Symbol(""),jn=Symbol("");function se(e,t,n){if(Re&&Je){let s=Ln.get(e);s||Ln.set(e,s=new Map);let r=s.get(n);r||s.set(n,r=kr(()=>s.delete(n))),Vr(Je,r)}}function Ae(e,t,n,s,r,i){const o=Ln.get(e);if(!o)return;let a=[];if(t==="clear")a=[...o.values()];else if(n==="length"&&x(e)){const c=Number(s);o.forEach((u,h)=>{(h==="length"||!nt(h)&&h>=c)&&a.push(u)})}else switch(n!==void 0&&a.push(o.get(n)),t){case"add":x(e)?ns(n)&&a.push(o.get("length")):(a.push(o.get(Ye)),at(e)&&a.push(o.get(jn)));break;case"delete":x(e)||(a.push(o.get(Ye)),at(e)&&a.push(o.get(jn)));break;case"set":at(e)&&a.push(o.get(Ye));break}os();for(const c of a)c&&Ur(c,4);as()}const Mo=Qn("__proto__,__v_isRef,__isVue"),Wr=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(nt)),Ns=Fo();function Fo(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const s=M(this);for(let i=0,o=this.length;i<o;i++)se(s,"get",i+"");const r=s[t](...n);return r===-1||r===!1?s[t](...n.map(M)):r}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Le(),os();const s=M(this)[t].apply(this,n);return as(),je(),s}}),e}function $o(e){nt(e)||(e=String(e));const t=M(this);return se(t,"has",e),t.hasOwnProperty(e)}class zr{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,s){const r=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return i;if(n==="__v_raw")return s===(r?i?Go:Jr:i?Gr:qr).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(s)?t:void 0;const o=x(t);if(!r){if(o&&D(Ns,n))return Reflect.get(Ns,n,s);if(n==="hasOwnProperty")return $o}const a=Reflect.get(t,n,s);return(nt(n)?Wr.has(n):Mo(n))||(r||se(t,"get",n),i)?a:re(a)?o&&ns(n)?a:a.value:k(a)?r?Yr(a):fs(a):a}}class Kr extends zr{constructor(t=!1){super(!1,t)}set(t,n,s,r){let i=t[n];if(!this._isShallow){const c=vt(i);if(!Kt(s)&&!vt(s)&&(i=M(i),s=M(s)),!x(t)&&re(i)&&!re(s))return c?!1:(i.value=s,!0)}const o=x(t)&&ns(n)?Number(n)<t.length:D(t,n),a=Reflect.set(t,n,s,r);return t===M(r)&&(o?Be(s,i)&&Ae(t,"set",n,s):Ae(t,"add",n,s)),a}deleteProperty(t,n){const s=D(t,n);t[n];const r=Reflect.deleteProperty(t,n);return r&&s&&Ae(t,"delete",n,void 0),r}has(t,n){const s=Reflect.has(t,n);return(!nt(n)||!Wr.has(n))&&se(t,"has",n),s}ownKeys(t){return se(t,"iterate",x(t)?"length":Ye),Reflect.ownKeys(t)}}class Bo extends zr{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const No=new Kr,Lo=new Bo,jo=new Kr(!0);const cs=e=>e,sn=e=>Reflect.getPrototypeOf(e);function $t(e,t,n=!1,s=!1){e=e.__v_raw;const r=M(e),i=M(t);n||(Be(t,i)&&se(r,"get",t),se(r,"get",i));const{has:o}=sn(r),a=s?cs:n?ds:At;if(o.call(r,t))return a(e.get(t));if(o.call(r,i))return a(e.get(i));e!==r&&e.get(t)}function Bt(e,t=!1){const n=this.__v_raw,s=M(n),r=M(e);return t||(Be(e,r)&&se(s,"has",e),se(s,"has",r)),e===r?n.has(e):n.has(e)||n.has(r)}function Nt(e,t=!1){return e=e.__v_raw,!t&&se(M(e),"iterate",Ye),Reflect.get(e,"size",e)}function Ls(e){e=M(e);const t=M(this);return sn(t).has.call(t,e)||(t.add(e),Ae(t,"add",e,e)),this}function js(e,t){t=M(t);const n=M(this),{has:s,get:r}=sn(n);let i=s.call(n,e);i||(e=M(e),i=s.call(n,e));const o=r.call(n,e);return n.set(e,t),i?Be(t,o)&&Ae(n,"set",e,t):Ae(n,"add",e,t),this}function Hs(e){const t=M(this),{has:n,get:s}=sn(t);let r=n.call(t,e);r||(e=M(e),r=n.call(t,e)),s&&s.call(t,e);const i=t.delete(e);return r&&Ae(t,"delete",e,void 0),i}function Vs(){const e=M(this),t=e.size!==0,n=e.clear();return t&&Ae(e,"clear",void 0,void 0),n}function Lt(e,t){return function(s,r){const i=this,o=i.__v_raw,a=M(o),c=t?cs:e?ds:At;return!e&&se(a,"iterate",Ye),o.forEach((u,h)=>s.call(r,c(u),c(h),i))}}function jt(e,t,n){return function(...s){const r=this.__v_raw,i=M(r),o=at(i),a=e==="entries"||e===Symbol.iterator&&o,c=e==="keys"&&o,u=r[e](...s),h=n?cs:t?ds:At;return!t&&se(i,"iterate",c?jn:Ye),{next(){const{value:_,done:E}=u.next();return E?{value:_,done:E}:{value:a?[h(_[0]),h(_[1])]:h(_),done:E}},[Symbol.iterator](){return this}}}}function Te(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Ho(){const e={get(i){return $t(this,i)},get size(){return Nt(this)},has:Bt,add:Ls,set:js,delete:Hs,clear:Vs,forEach:Lt(!1,!1)},t={get(i){return $t(this,i,!1,!0)},get size(){return Nt(this)},has:Bt,add:Ls,set:js,delete:Hs,clear:Vs,forEach:Lt(!1,!0)},n={get(i){return $t(this,i,!0)},get size(){return Nt(this,!0)},has(i){return Bt.call(this,i,!0)},add:Te("add"),set:Te("set"),delete:Te("delete"),clear:Te("clear"),forEach:Lt(!0,!1)},s={get(i){return $t(this,i,!0,!0)},get size(){return Nt(this,!0)},has(i){return Bt.call(this,i,!0)},add:Te("add"),set:Te("set"),delete:Te("delete"),clear:Te("clear"),forEach:Lt(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=jt(i,!1,!1),n[i]=jt(i,!0,!1),t[i]=jt(i,!1,!0),s[i]=jt(i,!0,!0)}),[e,n,t,s]}const[Vo,Uo,ko,Wo]=Ho();function ls(e,t){const n=t?e?Wo:ko:e?Uo:Vo;return(s,r,i)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?s:Reflect.get(D(n,r)&&r in s?n:s,r,i)}const zo={get:ls(!1,!1)},Ko={get:ls(!1,!0)},qo={get:ls(!0,!1)};const qr=new WeakMap,Gr=new WeakMap,Jr=new WeakMap,Go=new WeakMap;function Jo(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Yo(e){return e.__v_skip||!Object.isExtensible(e)?0:Jo(yo(e))}function fs(e){return vt(e)?e:us(e,!1,No,zo,qr)}function Xo(e){return us(e,!1,jo,Ko,Gr)}function Yr(e){return us(e,!0,Lo,qo,Jr)}function us(e,t,n,s,r){if(!k(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=r.get(e);if(i)return i;const o=Yo(e);if(o===0)return e;const a=new Proxy(e,o===2?s:n);return r.set(e,a),a}function bt(e){return vt(e)?bt(e.__v_raw):!!(e&&e.__v_isReactive)}function vt(e){return!!(e&&e.__v_isReadonly)}function Kt(e){return!!(e&&e.__v_isShallow)}function Xr(e){return e?!!e.__v_raw:!1}function M(e){const t=e&&e.__v_raw;return t?M(t):e}function Zo(e){return Object.isExtensible(e)&&$r(e,"__v_skip",!0),e}const At=e=>k(e)?fs(e):e,ds=e=>k(e)?Yr(e):e;class Zr{constructor(t,n,s,r){this.getter=t,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new is(()=>t(this._value),()=>Vt(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const t=M(this);return(!t._cacheable||t.effect.dirty)&&Be(t._value,t._value=t.effect.run())&&Vt(t,4),Qr(t),t.effect._dirtyLevel>=2&&Vt(t,2),t._value}set value(t){this._setter(t)}get _dirty(){return this.effect.dirty}set _dirty(t){this.effect.dirty=t}}function Qo(e,t,n=!1){let s,r;const i=O(e);return i?(s=e,r=le):(s=e.get,r=e.set),new Zr(s,r,i||!r,n)}function Qr(e){var t;Re&&Je&&(e=M(e),Vr(Je,(t=e.dep)!=null?t:e.dep=kr(()=>e.dep=void 0,e instanceof Zr?e:void 0)))}function Vt(e,t=4,n){e=M(e);const s=e.dep;s&&Ur(s,t)}function re(e){return!!(e&&e.__v_isRef===!0)}function ea(e){return ta(e,!1)}function ta(e,t){return re(e)?e:new na(e,t)}class na{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:M(t),this._value=n?t:At(t)}get value(){return Qr(this),this._value}set value(t){const n=this.__v_isShallow||Kt(t)||vt(t);t=n?t:M(t),Be(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:At(t),Vt(this,4))}}function sa(e){return re(e)?e.value:e}const ra={get:(e,t,n)=>sa(Reflect.get(e,t,n)),set:(e,t,n,s)=>{const r=e[t];return re(r)&&!re(n)?(r.value=n,!0):Reflect.set(e,t,n,s)}};function ei(e){return bt(e)?e:new Proxy(e,ra)}/**
* @vue/runtime-core v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function De(e,t,n,s){try{return s?e(...s):e()}catch(r){rn(r,t,n)}}function pe(e,t,n,s){if(O(e)){const r=De(e,t,n,s);return r&&Dr(r)&&r.catch(i=>{rn(i,t,n)}),r}if(x(e)){const r=[];for(let i=0;i<e.length;i++)r.push(pe(e[i],t,n,s));return r}}function rn(e,t,n,s=!0){const r=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;for(;i;){const u=i.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](e,o,a)===!1)return}i=i.parent}const c=t.appContext.config.errorHandler;if(c){Le(),De(c,null,10,[e,o,a]),je();return}}ia(e,n,r,s)}function ia(e,t,n,s=!0){console.error(e)}let St=!1,Hn=!1;const X=[];let we=0;const ct=[];let Ce=null,qe=0;const ti=Promise.resolve();let hs=null;function oa(e){const t=hs||ti;return e?t.then(this?e.bind(this):e):t}function aa(e){let t=we+1,n=X.length;for(;t<n;){const s=t+n>>>1,r=X[s],i=Tt(r);i<e||i===e&&r.pre?t=s+1:n=s}return t}function ps(e){(!X.length||!X.includes(e,St&&e.allowRecurse?we+1:we))&&(e.id==null?X.push(e):X.splice(aa(e.id),0,e),ni())}function ni(){!St&&!Hn&&(Hn=!0,hs=ti.then(ri))}function ca(e){const t=X.indexOf(e);t>we&&X.splice(t,1)}function la(e){x(e)?ct.push(...e):(!Ce||!Ce.includes(e,e.allowRecurse?qe+1:qe))&&ct.push(e),ni()}function Us(e,t,n=St?we+1:0){for(;n<X.length;n++){const s=X[n];if(s&&s.pre){if(e&&s.id!==e.uid)continue;X.splice(n,1),n--,s()}}}function si(e){if(ct.length){const t=[...new Set(ct)].sort((n,s)=>Tt(n)-Tt(s));if(ct.length=0,Ce){Ce.push(...t);return}for(Ce=t,qe=0;qe<Ce.length;qe++)Ce[qe]();Ce=null,qe=0}}const Tt=e=>e.id==null?1/0:e.id,fa=(e,t)=>{const n=Tt(e)-Tt(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function ri(e){Hn=!1,St=!0,X.sort(fa);try{for(we=0;we<X.length;we++){const t=X[we];t&&t.active!==!1&&De(t,null,14)}}finally{we=0,X.length=0,si(),St=!1,hs=null,(X.length||ct.length)&&ri()}}function ua(e,t,...n){if(e.isUnmounted)return;const s=e.vnode.props||H;let r=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in s){const h=`${o==="modelValue"?"model":o}Modifiers`,{number:_,trim:E}=s[h]||H;E&&(r=n.map(A=>q(A)?A.trim():A)),_&&(r=n.map(Eo))}let a,c=s[a=yn(t)]||s[a=yn(lt(t))];!c&&i&&(c=s[a=yn(ut(t))]),c&&pe(c,e,6,r);const u=s[a+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,pe(u,e,6,r)}}function ii(e,t,n=!1){const s=t.emitsCache,r=s.get(e);if(r!==void 0)return r;const i=e.emits;let o={},a=!1;if(!O(e)){const c=u=>{const h=ii(u,t,!0);h&&(a=!0,J(o,h))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!i&&!a?(k(e)&&s.set(e,null),null):(x(i)?i.forEach(c=>o[c]=null):J(o,i),k(e)&&s.set(e,o),o)}function on(e,t){return!e||!en(t)?!1:(t=t.slice(2).replace(/Once$/,""),D(e,t[0].toLowerCase()+t.slice(1))||D(e,ut(t))||D(e,t))}let Ie=null,an=null;function qt(e){const t=Ie;return Ie=e,an=e&&e.type.__scopeId||null,t}function oi(e){an=e}function ai(){an=null}function da(e,t=Ie,n){if(!t||e._n)return e;const s=(...r)=>{s._d&&Zs(-1);const i=qt(t);let o;try{o=e(...r)}finally{qt(i),s._d&&Zs(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function En(e){const{type:t,vnode:n,proxy:s,withProxy:r,propsOptions:[i],slots:o,attrs:a,emit:c,render:u,renderCache:h,props:_,data:E,setupState:A,ctx:V,inheritAttrs:F}=e,ie=qt(e);let W,Y;try{if(n.shapeFlag&4){const z=r||s,ce=z;W=ye(u.call(ce,z,h,_,A,E,V)),Y=a}else{const z=t;W=ye(z.length>1?z(_,{attrs:a,slots:o,emit:c}):z(_,null)),Y=t.props?a:ha(a)}}catch(z){It.length=0,rn(z,e,1),W=Pe(Ct)}let B=W;if(Y&&F!==!1){const z=Object.keys(Y),{shapeFlag:ce}=B;z.length&&ce&7&&(i&&z.some(es)&&(Y=pa(Y,i)),B=ft(B,Y,!1,!0))}return n.dirs&&(B=ft(B,null,!1,!0),B.dirs=B.dirs?B.dirs.concat(n.dirs):n.dirs),n.transition&&(B.transition=n.transition),W=B,qt(ie),W}const ha=e=>{let t;for(const n in e)(n==="class"||n==="style"||en(n))&&((t||(t={}))[n]=e[n]);return t},pa=(e,t)=>{const n={};for(const s in e)(!es(s)||!(s.slice(9)in t))&&(n[s]=e[s]);return n};function ga(e,t,n){const{props:s,children:r,component:i}=e,{props:o,children:a,patchFlag:c}=t,u=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?ks(s,o,u):!!o;if(c&8){const h=t.dynamicProps;for(let _=0;_<h.length;_++){const E=h[_];if(o[E]!==s[E]&&!on(u,E))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?ks(s,o,u):!0:!!o;return!1}function ks(e,t,n){const s=Object.keys(t);if(s.length!==Object.keys(e).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(t[i]!==e[i]&&!on(n,i))return!0}return!1}function ma({vnode:e,parent:t},n){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===e&&(s.el=e.el),s===e)(e=t.vnode).el=n,t=t.parent;else break}}const _a=Symbol.for("v-ndc"),ba=e=>e.__isSuspense;function ya(e,t){t&&t.pendingBranch?x(e)?t.effects.push(...e):t.effects.push(e):la(e)}const wa=Symbol.for("v-scx"),Ia=()=>kt(wa),Ht={};function vn(e,t,n){return ci(e,t,n)}function ci(e,t,{immediate:n,deep:s,flush:r,once:i,onTrack:o,onTrigger:a}=H){if(t&&i){const P=t;t=(...Ee)=>{P(...Ee),ce()}}const c=ee,u=P=>s===!0?P:it(P,s===!1?1:void 0);let h,_=!1,E=!1;if(re(e)?(h=()=>e.value,_=Kt(e)):bt(e)?(h=()=>u(e),_=!0):x(e)?(E=!0,_=e.some(P=>bt(P)||Kt(P)),h=()=>e.map(P=>{if(re(P))return P.value;if(bt(P))return u(P);if(O(P))return De(P,c,2)})):O(e)?t?h=()=>De(e,c,2):h=()=>(A&&A(),pe(e,c,3,[V])):h=le,t&&s){const P=h;h=()=>it(P())}let A,V=P=>{A=B.onStop=()=>{De(P,c,4),A=B.onStop=void 0}},F;if(fn)if(V=le,t?n&&pe(t,c,3,[h(),E?[]:void 0,V]):h(),r==="sync"){const P=Ia();F=P.__watcherHandles||(P.__watcherHandles=[])}else return le;let ie=E?new Array(e.length).fill(Ht):Ht;const W=()=>{if(!(!B.active||!B.dirty))if(t){const P=B.run();(s||_||(E?P.some((Ee,ge)=>Be(Ee,ie[ge])):Be(P,ie)))&&(A&&A(),pe(t,c,3,[P,ie===Ht?void 0:E&&ie[0]===Ht?[]:ie,V]),ie=P)}else B.run()};W.allowRecurse=!!t;let Y;r==="sync"?Y=W:r==="post"?Y=()=>te(W,c&&c.suspense):(W.pre=!0,c&&(W.id=c.uid),Y=()=>ps(W));const B=new is(h,le,Y),z=Do(),ce=()=>{B.stop(),z&&ts(z.effects,B)};return t?n?W():ie=B.run():r==="post"?te(B.run.bind(B),c&&c.suspense):B.run(),F&&F.push(ce),ce}function Ea(e,t,n){const s=this.proxy,r=q(e)?e.includes(".")?li(s,e):()=>s[e]:e.bind(s,s);let i;O(t)?i=t:(i=t.handler,n=t);const o=Rt(this),a=ci(r,i.bind(s),n);return o(),a}function li(e,t){const n=t.split(".");return()=>{let s=e;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function it(e,t=1/0,n){if(t<=0||!k(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),t--,re(e))it(e.value,t,n);else if(x(e))for(let s=0;s<e.length;s++)it(e[s],t,n);else if(Rr(e)||at(e))e.forEach(s=>{it(s,t,n)});else if(Mr(e))for(const s in e)it(e[s],t,n);return e}function ke(e,t,n,s){const r=e.dirs,i=t&&t.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(Le(),pe(c,n,8,[e.el,a,e,t]),je())}}const Ut=e=>!!e.type.__asyncLoader,fi=e=>e.type.__isKeepAlive;function va(e,t){ui(e,"a",t)}function Aa(e,t){ui(e,"da",t)}function ui(e,t,n=ee){const s=e.__wdc||(e.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(cn(t,s,n),n){let r=n.parent;for(;r&&r.parent;)fi(r.parent.vnode)&&Sa(s,t,n,r),r=r.parent}}function Sa(e,t,n,s){const r=cn(t,e,s,!0);di(()=>{ts(s[t],r)},n)}function cn(e,t,n=ee,s=!1){if(n){const r=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;Le();const a=Rt(n),c=pe(t,n,e,o);return a(),je(),c});return s?r.unshift(i):r.push(i),i}}const Se=e=>(t,n=ee)=>(!fn||e==="sp")&&cn(e,(...s)=>t(...s),n),Ta=Se("bm"),Ca=Se("m"),xa=Se("bu"),Oa=Se("u"),Ra=Se("bum"),di=Se("um"),Da=Se("sp"),Pa=Se("rtg"),Ma=Se("rtc");function Fa(e,t=ee){cn("ec",e,t)}const Vn=e=>e?xi(e)?bs(e)||e.proxy:Vn(e.parent):null,yt=J(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Vn(e.parent),$root:e=>Vn(e.root),$emit:e=>e.emit,$options:e=>gs(e),$forceUpdate:e=>e.f||(e.f=()=>{e.effect.dirty=!0,ps(e.update)}),$nextTick:e=>e.n||(e.n=oa.bind(e.proxy)),$watch:e=>Ea.bind(e)}),An=(e,t)=>e!==H&&!e.__isScriptSetup&&D(e,t),$a={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=e;let u;if(t[0]!=="$"){const A=o[t];if(A!==void 0)switch(A){case 1:return s[t];case 2:return r[t];case 4:return n[t];case 3:return i[t]}else{if(An(s,t))return o[t]=1,s[t];if(r!==H&&D(r,t))return o[t]=2,r[t];if((u=e.propsOptions[0])&&D(u,t))return o[t]=3,i[t];if(n!==H&&D(n,t))return o[t]=4,n[t];Un&&(o[t]=0)}}const h=yt[t];let _,E;if(h)return t==="$attrs"&&se(e.attrs,"get",""),h(e);if((_=a.__cssModules)&&(_=_[t]))return _;if(n!==H&&D(n,t))return o[t]=4,n[t];if(E=c.config.globalProperties,D(E,t))return E[t]},set({_:e},t,n){const{data:s,setupState:r,ctx:i}=e;return An(r,t)?(r[t]=n,!0):s!==H&&D(s,t)?(s[t]=n,!0):D(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||e!==H&&D(e,o)||An(t,o)||(a=i[0])&&D(a,o)||D(s,o)||D(yt,o)||D(r.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:D(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Ws(e){return x(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Un=!0;function Ba(e){const t=gs(e),n=e.proxy,s=e.ctx;Un=!1,t.beforeCreate&&zs(t.beforeCreate,e,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:u,created:h,beforeMount:_,mounted:E,beforeUpdate:A,updated:V,activated:F,deactivated:ie,beforeDestroy:W,beforeUnmount:Y,destroyed:B,unmounted:z,render:ce,renderTracked:P,renderTriggered:Ee,errorCaptured:ge,serverPrefetch:mn,expose:He,inheritAttrs:dt,components:Dt,directives:Pt,filters:_n}=t;if(u&&Na(u,s,null),o)for(const U in o){const N=o[U];O(N)&&(s[U]=N.bind(n))}if(r){const U=r.call(n,n);k(U)&&(e.data=fs(U))}if(Un=!0,i)for(const U in i){const N=i[U],Ve=O(N)?N.bind(n,n):O(N.get)?N.get.bind(n,n):le,Mt=!O(N)&&O(N.set)?N.set.bind(n):le,Ue=pc({get:Ve,set:Mt});Object.defineProperty(s,U,{enumerable:!0,configurable:!0,get:()=>Ue.value,set:me=>Ue.value=me})}if(a)for(const U in a)hi(a[U],s,n,U);if(c){const U=O(c)?c.call(n):c;Reflect.ownKeys(U).forEach(N=>{ka(N,U[N])})}h&&zs(h,e,"c");function Z(U,N){x(N)?N.forEach(Ve=>U(Ve.bind(n))):N&&U(N.bind(n))}if(Z(Ta,_),Z(Ca,E),Z(xa,A),Z(Oa,V),Z(va,F),Z(Aa,ie),Z(Fa,ge),Z(Ma,P),Z(Pa,Ee),Z(Ra,Y),Z(di,z),Z(Da,mn),x(He))if(He.length){const U=e.exposed||(e.exposed={});He.forEach(N=>{Object.defineProperty(U,N,{get:()=>n[N],set:Ve=>n[N]=Ve})})}else e.exposed||(e.exposed={});ce&&e.render===le&&(e.render=ce),dt!=null&&(e.inheritAttrs=dt),Dt&&(e.components=Dt),Pt&&(e.directives=Pt)}function Na(e,t,n=le){x(e)&&(e=kn(e));for(const s in e){const r=e[s];let i;k(r)?"default"in r?i=kt(r.from||s,r.default,!0):i=kt(r.from||s):i=kt(r),re(i)?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):t[s]=i}}function zs(e,t,n){pe(x(e)?e.map(s=>s.bind(t.proxy)):e.bind(t.proxy),t,n)}function hi(e,t,n,s){const r=s.includes(".")?li(n,s):()=>n[s];if(q(e)){const i=t[e];O(i)&&vn(r,i)}else if(O(e))vn(r,e.bind(n));else if(k(e))if(x(e))e.forEach(i=>hi(i,t,n,s));else{const i=O(e.handler)?e.handler.bind(n):t[e.handler];O(i)&&vn(r,i,e)}}function gs(e){const t=e.type,{mixins:n,extends:s}=t,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,a=i.get(t);let c;return a?c=a:!r.length&&!n&&!s?c=t:(c={},r.length&&r.forEach(u=>Gt(c,u,o,!0)),Gt(c,t,o)),k(t)&&i.set(t,c),c}function Gt(e,t,n,s=!1){const{mixins:r,extends:i}=t;i&&Gt(e,i,n,!0),r&&r.forEach(o=>Gt(e,o,n,!0));for(const o in t)if(!(s&&o==="expose")){const a=La[o]||n&&n[o];e[o]=a?a(e[o],t[o]):t[o]}return e}const La={data:Ks,props:qs,emits:qs,methods:mt,computed:mt,beforeCreate:Q,created:Q,beforeMount:Q,mounted:Q,beforeUpdate:Q,updated:Q,beforeDestroy:Q,beforeUnmount:Q,destroyed:Q,unmounted:Q,activated:Q,deactivated:Q,errorCaptured:Q,serverPrefetch:Q,components:mt,directives:mt,watch:Ha,provide:Ks,inject:ja};function Ks(e,t){return t?e?function(){return J(O(e)?e.call(this,this):e,O(t)?t.call(this,this):t)}:t:e}function ja(e,t){return mt(kn(e),kn(t))}function kn(e){if(x(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Q(e,t){return e?[...new Set([].concat(e,t))]:t}function mt(e,t){return e?J(Object.create(null),e,t):t}function qs(e,t){return e?x(e)&&x(t)?[...new Set([...e,...t])]:J(Object.create(null),Ws(e),Ws(t??{})):t}function Ha(e,t){if(!e)return t;if(!t)return e;const n=J(Object.create(null),e);for(const s in t)n[s]=Q(e[s],t[s]);return n}function pi(){return{app:null,config:{isNativeTag:_o,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Va=0;function Ua(e,t){return function(s,r=null){O(s)||(s=J({},s)),r!=null&&!k(r)&&(r=null);const i=pi(),o=new WeakSet;let a=!1;const c=i.app={_uid:Va++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:gc,get config(){return i.config},set config(u){},use(u,...h){return o.has(u)||(u&&O(u.install)?(o.add(u),u.install(c,...h)):O(u)&&(o.add(u),u(c,...h))),c},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),c},component(u,h){return h?(i.components[u]=h,c):i.components[u]},directive(u,h){return h?(i.directives[u]=h,c):i.directives[u]},mount(u,h,_){if(!a){const E=Pe(s,r);return E.appContext=i,_===!0?_="svg":_===!1&&(_=void 0),h&&t?t(E,u):e(E,u,_),a=!0,c._container=u,u.__vue_app__=c,bs(E.component)||E.component.proxy}},unmount(){a&&(e(null,c._container),delete c._container.__vue_app__)},provide(u,h){return i.provides[u]=h,c},runWithContext(u){const h=wt;wt=c;try{return u()}finally{wt=h}}};return c}}let wt=null;function ka(e,t){if(ee){let n=ee.provides;const s=ee.parent&&ee.parent.provides;s===n&&(n=ee.provides=Object.create(s)),n[e]=t}}function kt(e,t,n=!1){const s=ee||Ie;if(s||wt){const r=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:wt._context.provides;if(r&&e in r)return r[e];if(arguments.length>1)return n&&O(t)?t.call(s&&s.proxy):t}}const gi={},mi=()=>Object.create(gi),_i=e=>Object.getPrototypeOf(e)===gi;function Wa(e,t,n,s=!1){const r={},i=mi();e.propsDefaults=Object.create(null),bi(e,t,r,i);for(const o in e.propsOptions[0])o in r||(r[o]=void 0);n?e.props=s?r:Xo(r):e.type.props?e.props=r:e.props=i,e.attrs=i}function za(e,t,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=e,a=M(r),[c]=e.propsOptions;let u=!1;if((s||o>0)&&!(o&16)){if(o&8){const h=e.vnode.dynamicProps;for(let _=0;_<h.length;_++){let E=h[_];if(on(e.emitsOptions,E))continue;const A=t[E];if(c)if(D(i,E))A!==i[E]&&(i[E]=A,u=!0);else{const V=lt(E);r[V]=Wn(c,a,V,A,e,!1)}else A!==i[E]&&(i[E]=A,u=!0)}}}else{bi(e,t,r,i)&&(u=!0);let h;for(const _ in a)(!t||!D(t,_)&&((h=ut(_))===_||!D(t,h)))&&(c?n&&(n[_]!==void 0||n[h]!==void 0)&&(r[_]=Wn(c,a,_,void 0,e,!0)):delete r[_]);if(i!==a)for(const _ in i)(!t||!D(t,_))&&(delete i[_],u=!0)}u&&Ae(e.attrs,"set","")}function bi(e,t,n,s){const[r,i]=e.propsOptions;let o=!1,a;if(t)for(let c in t){if(_t(c))continue;const u=t[c];let h;r&&D(r,h=lt(c))?!i||!i.includes(h)?n[h]=u:(a||(a={}))[h]=u:on(e.emitsOptions,c)||(!(c in s)||u!==s[c])&&(s[c]=u,o=!0)}if(i){const c=M(n),u=a||H;for(let h=0;h<i.length;h++){const _=i[h];n[_]=Wn(r,c,_,u[_],e,!D(u,_))}}return o}function Wn(e,t,n,s,r,i){const o=e[n];if(o!=null){const a=D(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&O(c)){const{propsDefaults:u}=r;if(n in u)s=u[n];else{const h=Rt(r);s=u[n]=c.call(null,t),h()}}else s=c}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===ut(n))&&(s=!0))}return s}function yi(e,t,n=!1){const s=t.propsCache,r=s.get(e);if(r)return r;const i=e.props,o={},a=[];let c=!1;if(!O(e)){const h=_=>{c=!0;const[E,A]=yi(_,t,!0);J(o,E),A&&a.push(...A)};!n&&t.mixins.length&&t.mixins.forEach(h),e.extends&&h(e.extends),e.mixins&&e.mixins.forEach(h)}if(!i&&!c)return k(e)&&s.set(e,ot),ot;if(x(i))for(let h=0;h<i.length;h++){const _=lt(i[h]);Gs(_)&&(o[_]=H)}else if(i)for(const h in i){const _=lt(h);if(Gs(_)){const E=i[h],A=o[_]=x(E)||O(E)?{type:E}:J({},E);if(A){const V=Xs(Boolean,A.type),F=Xs(String,A.type);A[0]=V>-1,A[1]=F<0||V<F,(V>-1||D(A,"default"))&&a.push(_)}}}const u=[o,a];return k(e)&&s.set(e,u),u}function Gs(e){return e[0]!=="$"&&!_t(e)}function Js(e){return e===null?"null":typeof e=="function"?e.name||"":typeof e=="object"&&e.constructor&&e.constructor.name||""}function Ys(e,t){return Js(e)===Js(t)}function Xs(e,t){return x(t)?t.findIndex(n=>Ys(n,e)):O(t)&&Ys(t,e)?0:-1}const wi=e=>e[0]==="_"||e==="$stable",ms=e=>x(e)?e.map(ye):[ye(e)],Ka=(e,t,n)=>{if(t._n)return t;const s=da((...r)=>ms(t(...r)),n);return s._c=!1,s},Ii=(e,t,n)=>{const s=e._ctx;for(const r in e){if(wi(r))continue;const i=e[r];if(O(i))t[r]=Ka(r,i,s);else if(i!=null){const o=ms(i);t[r]=()=>o}}},Ei=(e,t)=>{const n=ms(t);e.slots.default=()=>n},qa=(e,t)=>{const n=e.slots=mi();if(e.vnode.shapeFlag&32){const s=t._;s?(J(n,t),$r(n,"_",s,!0)):Ii(t,n)}else t&&Ei(e,t)},Ga=(e,t,n)=>{const{vnode:s,slots:r}=e;let i=!0,o=H;if(s.shapeFlag&32){const a=t._;a?n&&a===1?i=!1:(J(r,t),!n&&a===1&&delete r._):(i=!t.$stable,Ii(t,r)),o=t}else t&&(Ei(e,t),o={default:1});if(i)for(const a in r)!wi(a)&&o[a]==null&&delete r[a]};function zn(e,t,n,s,r=!1){if(x(e)){e.forEach((E,A)=>zn(E,t&&(x(t)?t[A]:t),n,s,r));return}if(Ut(s)&&!r)return;const i=s.shapeFlag&4?bs(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:c}=e,u=t&&t.r,h=a.refs===H?a.refs={}:a.refs,_=a.setupState;if(u!=null&&u!==c&&(q(u)?(h[u]=null,D(_,u)&&(_[u]=null)):re(u)&&(u.value=null)),O(c))De(c,a,12,[o,h]);else{const E=q(c),A=re(c);if(E||A){const V=()=>{if(e.f){const F=E?D(_,c)?_[c]:h[c]:c.value;r?x(F)&&ts(F,i):x(F)?F.includes(i)||F.push(i):E?(h[c]=[i],D(_,c)&&(_[c]=h[c])):(c.value=[i],e.k&&(h[e.k]=c.value))}else E?(h[c]=o,D(_,c)&&(_[c]=o)):A&&(c.value=o,e.k&&(h[e.k]=o))};o?(V.id=-1,te(V,n)):V()}}}const te=ya;function Ja(e){return Ya(e)}function Ya(e,t){const n=Br();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:u,setElementText:h,parentNode:_,nextSibling:E,setScopeId:A=le,insertStaticContent:V}=e,F=(l,f,d,p=null,g=null,y=null,I=void 0,b=null,w=!!f.dynamicChildren)=>{if(l===f)return;l&&!gt(l,f)&&(p=Ft(l),me(l,g,y,!0),l=null),f.patchFlag===-2&&(w=!1,f.dynamicChildren=null);const{type:m,ref:v,shapeFlag:T}=f;switch(m){case ln:ie(l,f,d,p);break;case Ct:W(l,f,d,p);break;case Tn:l==null&&Y(f,d,p,I);break;case de:Dt(l,f,d,p,g,y,I,b,w);break;default:T&1?ce(l,f,d,p,g,y,I,b,w):T&6?Pt(l,f,d,p,g,y,I,b,w):(T&64||T&128)&&m.process(l,f,d,p,g,y,I,b,w,ht)}v!=null&&g&&zn(v,l&&l.ref,y,f||l,!f)},ie=(l,f,d,p)=>{if(l==null)s(f.el=a(f.children),d,p);else{const g=f.el=l.el;f.children!==l.children&&u(g,f.children)}},W=(l,f,d,p)=>{l==null?s(f.el=c(f.children||""),d,p):f.el=l.el},Y=(l,f,d,p)=>{[l.el,l.anchor]=V(l.children,f,d,p,l.el,l.anchor)},B=({el:l,anchor:f},d,p)=>{let g;for(;l&&l!==f;)g=E(l),s(l,d,p),l=g;s(f,d,p)},z=({el:l,anchor:f})=>{let d;for(;l&&l!==f;)d=E(l),r(l),l=d;r(f)},ce=(l,f,d,p,g,y,I,b,w)=>{f.type==="svg"?I="svg":f.type==="math"&&(I="mathml"),l==null?P(f,d,p,g,y,I,b,w):mn(l,f,g,y,I,b,w)},P=(l,f,d,p,g,y,I,b)=>{let w,m;const{props:v,shapeFlag:T,transition:S,dirs:C}=l;if(w=l.el=o(l.type,y,v&&v.is,v),T&8?h(w,l.children):T&16&&ge(l.children,w,null,p,g,Sn(l,y),I,b),C&&ke(l,null,p,"created"),Ee(w,l,l.scopeId,I,p),v){for(const $ in v)$!=="value"&&!_t($)&&i(w,$,null,v[$],y,l.children,p,g,ve);"value"in v&&i(w,"value",null,v.value,y),(m=v.onVnodeBeforeMount)&&be(m,p,l)}C&&ke(l,null,p,"beforeMount");const R=Xa(g,S);R&&S.beforeEnter(w),s(w,f,d),((m=v&&v.onVnodeMounted)||R||C)&&te(()=>{m&&be(m,p,l),R&&S.enter(w),C&&ke(l,null,p,"mounted")},g)},Ee=(l,f,d,p,g)=>{if(d&&A(l,d),p)for(let y=0;y<p.length;y++)A(l,p[y]);if(g){let y=g.subTree;if(f===y){const I=g.vnode;Ee(l,I,I.scopeId,I.slotScopeIds,g.parent)}}},ge=(l,f,d,p,g,y,I,b,w=0)=>{for(let m=w;m<l.length;m++){const v=l[m]=b?xe(l[m]):ye(l[m]);F(null,v,f,d,p,g,y,I,b)}},mn=(l,f,d,p,g,y,I)=>{const b=f.el=l.el;let{patchFlag:w,dynamicChildren:m,dirs:v}=f;w|=l.patchFlag&16;const T=l.props||H,S=f.props||H;let C;if(d&&We(d,!1),(C=S.onVnodeBeforeUpdate)&&be(C,d,f,l),v&&ke(f,l,d,"beforeUpdate"),d&&We(d,!0),m?He(l.dynamicChildren,m,b,d,p,Sn(f,g),y):I||N(l,f,b,null,d,p,Sn(f,g),y,!1),w>0){if(w&16)dt(b,f,T,S,d,p,g);else if(w&2&&T.class!==S.class&&i(b,"class",null,S.class,g),w&4&&i(b,"style",T.style,S.style,g),w&8){const R=f.dynamicProps;for(let $=0;$<R.length;$++){const j=R[$],K=T[j],fe=S[j];(fe!==K||j==="value")&&i(b,j,K,fe,g,l.children,d,p,ve)}}w&1&&l.children!==f.children&&h(b,f.children)}else!I&&m==null&&dt(b,f,T,S,d,p,g);((C=S.onVnodeUpdated)||v)&&te(()=>{C&&be(C,d,f,l),v&&ke(f,l,d,"updated")},p)},He=(l,f,d,p,g,y,I)=>{for(let b=0;b<f.length;b++){const w=l[b],m=f[b],v=w.el&&(w.type===de||!gt(w,m)||w.shapeFlag&70)?_(w.el):d;F(w,m,v,null,p,g,y,I,!0)}},dt=(l,f,d,p,g,y,I)=>{if(d!==p){if(d!==H)for(const b in d)!_t(b)&&!(b in p)&&i(l,b,d[b],null,I,f.children,g,y,ve);for(const b in p){if(_t(b))continue;const w=p[b],m=d[b];w!==m&&b!=="value"&&i(l,b,m,w,I,f.children,g,y,ve)}"value"in p&&i(l,"value",d.value,p.value,I)}},Dt=(l,f,d,p,g,y,I,b,w)=>{const m=f.el=l?l.el:a(""),v=f.anchor=l?l.anchor:a("");let{patchFlag:T,dynamicChildren:S,slotScopeIds:C}=f;C&&(b=b?b.concat(C):C),l==null?(s(m,d,p),s(v,d,p),ge(f.children||[],d,v,g,y,I,b,w)):T>0&&T&64&&S&&l.dynamicChildren?(He(l.dynamicChildren,S,d,g,y,I,b),(f.key!=null||g&&f===g.subTree)&&vi(l,f,!0)):N(l,f,d,v,g,y,I,b,w)},Pt=(l,f,d,p,g,y,I,b,w)=>{f.slotScopeIds=b,l==null?f.shapeFlag&512?g.ctx.activate(f,d,p,I,w):_n(f,d,p,g,y,I,w):Ss(l,f,w)},_n=(l,f,d,p,g,y,I)=>{const b=l.component=cc(l,p,g);if(fi(l)&&(b.ctx.renderer=ht),lc(b),b.asyncDep){if(g&&g.registerDep(b,Z),!l.el){const w=b.subTree=Pe(Ct);W(null,w,f,d)}}else Z(b,l,f,d,g,y,I)},Ss=(l,f,d)=>{const p=f.component=l.component;if(ga(l,f,d))if(p.asyncDep&&!p.asyncResolved){U(p,f,d);return}else p.next=f,ca(p.update),p.effect.dirty=!0,p.update();else f.el=l.el,p.vnode=f},Z=(l,f,d,p,g,y,I)=>{const b=()=>{if(l.isMounted){let{next:v,bu:T,u:S,parent:C,vnode:R}=l;{const rt=Ai(l);if(rt){v&&(v.el=R.el,U(l,v,I)),rt.asyncDep.then(()=>{l.isUnmounted||b()});return}}let $=v,j;We(l,!1),v?(v.el=R.el,U(l,v,I)):v=R,T&&wn(T),(j=v.props&&v.props.onVnodeBeforeUpdate)&&be(j,C,v,R),We(l,!0);const K=En(l),fe=l.subTree;l.subTree=K,F(fe,K,_(fe.el),Ft(fe),l,g,y),v.el=K.el,$===null&&ma(l,K.el),S&&te(S,g),(j=v.props&&v.props.onVnodeUpdated)&&te(()=>be(j,C,v,R),g)}else{let v;const{el:T,props:S}=f,{bm:C,m:R,parent:$}=l,j=Ut(f);if(We(l,!1),C&&wn(C),!j&&(v=S&&S.onVnodeBeforeMount)&&be(v,$,f),We(l,!0),T&&Os){const K=()=>{l.subTree=En(l),Os(T,l.subTree,l,g,null)};j?f.type.__asyncLoader().then(()=>!l.isUnmounted&&K()):K()}else{const K=l.subTree=En(l);F(null,K,d,p,l,g,y),f.el=K.el}if(R&&te(R,g),!j&&(v=S&&S.onVnodeMounted)){const K=f;te(()=>be(v,$,K),g)}(f.shapeFlag&256||$&&Ut($.vnode)&&$.vnode.shapeFlag&256)&&l.a&&te(l.a,g),l.isMounted=!0,f=d=p=null}},w=l.effect=new is(b,le,()=>ps(m),l.scope),m=l.update=()=>{w.dirty&&w.run()};m.id=l.uid,We(l,!0),m()},U=(l,f,d)=>{f.component=l;const p=l.vnode.props;l.vnode=f,l.next=null,za(l,f.props,p,d),Ga(l,f.children,d),Le(),Us(l),je()},N=(l,f,d,p,g,y,I,b,w=!1)=>{const m=l&&l.children,v=l?l.shapeFlag:0,T=f.children,{patchFlag:S,shapeFlag:C}=f;if(S>0){if(S&128){Mt(m,T,d,p,g,y,I,b,w);return}else if(S&256){Ve(m,T,d,p,g,y,I,b,w);return}}C&8?(v&16&&ve(m,g,y),T!==m&&h(d,T)):v&16?C&16?Mt(m,T,d,p,g,y,I,b,w):ve(m,g,y,!0):(v&8&&h(d,""),C&16&&ge(T,d,p,g,y,I,b,w))},Ve=(l,f,d,p,g,y,I,b,w)=>{l=l||ot,f=f||ot;const m=l.length,v=f.length,T=Math.min(m,v);let S;for(S=0;S<T;S++){const C=f[S]=w?xe(f[S]):ye(f[S]);F(l[S],C,d,null,g,y,I,b,w)}m>v?ve(l,g,y,!0,!1,T):ge(f,d,p,g,y,I,b,w,T)},Mt=(l,f,d,p,g,y,I,b,w)=>{let m=0;const v=f.length;let T=l.length-1,S=v-1;for(;m<=T&&m<=S;){const C=l[m],R=f[m]=w?xe(f[m]):ye(f[m]);if(gt(C,R))F(C,R,d,null,g,y,I,b,w);else break;m++}for(;m<=T&&m<=S;){const C=l[T],R=f[S]=w?xe(f[S]):ye(f[S]);if(gt(C,R))F(C,R,d,null,g,y,I,b,w);else break;T--,S--}if(m>T){if(m<=S){const C=S+1,R=C<v?f[C].el:p;for(;m<=S;)F(null,f[m]=w?xe(f[m]):ye(f[m]),d,R,g,y,I,b,w),m++}}else if(m>S)for(;m<=T;)me(l[m],g,y,!0),m++;else{const C=m,R=m,$=new Map;for(m=R;m<=S;m++){const oe=f[m]=w?xe(f[m]):ye(f[m]);oe.key!=null&&$.set(oe.key,m)}let j,K=0;const fe=S-R+1;let rt=!1,Rs=0;const pt=new Array(fe);for(m=0;m<fe;m++)pt[m]=0;for(m=C;m<=T;m++){const oe=l[m];if(K>=fe){me(oe,g,y,!0);continue}let _e;if(oe.key!=null)_e=$.get(oe.key);else for(j=R;j<=S;j++)if(pt[j-R]===0&&gt(oe,f[j])){_e=j;break}_e===void 0?me(oe,g,y,!0):(pt[_e-R]=m+1,_e>=Rs?Rs=_e:rt=!0,F(oe,f[_e],d,null,g,y,I,b,w),K++)}const Ds=rt?Za(pt):ot;for(j=Ds.length-1,m=fe-1;m>=0;m--){const oe=R+m,_e=f[oe],Ps=oe+1<v?f[oe+1].el:p;pt[m]===0?F(null,_e,d,Ps,g,y,I,b,w):rt&&(j<0||m!==Ds[j]?Ue(_e,d,Ps,2):j--)}}},Ue=(l,f,d,p,g=null)=>{const{el:y,type:I,transition:b,children:w,shapeFlag:m}=l;if(m&6){Ue(l.component.subTree,f,d,p);return}if(m&128){l.suspense.move(f,d,p);return}if(m&64){I.move(l,f,d,ht);return}if(I===de){s(y,f,d);for(let T=0;T<w.length;T++)Ue(w[T],f,d,p);s(l.anchor,f,d);return}if(I===Tn){B(l,f,d);return}if(p!==2&&m&1&&b)if(p===0)b.beforeEnter(y),s(y,f,d),te(()=>b.enter(y),g);else{const{leave:T,delayLeave:S,afterLeave:C}=b,R=()=>s(y,f,d),$=()=>{T(y,()=>{R(),C&&C()})};S?S(y,R,$):$()}else s(y,f,d)},me=(l,f,d,p=!1,g=!1)=>{const{type:y,props:I,ref:b,children:w,dynamicChildren:m,shapeFlag:v,patchFlag:T,dirs:S}=l;if(b!=null&&zn(b,null,d,l,!0),v&256){f.ctx.deactivate(l);return}const C=v&1&&S,R=!Ut(l);let $;if(R&&($=I&&I.onVnodeBeforeUnmount)&&be($,f,l),v&6)go(l.component,d,p);else{if(v&128){l.suspense.unmount(d,p);return}C&&ke(l,null,f,"beforeUnmount"),v&64?l.type.remove(l,f,d,g,ht,p):m&&(y!==de||T>0&&T&64)?ve(m,f,d,!1,!0):(y===de&&T&384||!g&&v&16)&&ve(w,f,d),p&&Ts(l)}(R&&($=I&&I.onVnodeUnmounted)||C)&&te(()=>{$&&be($,f,l),C&&ke(l,null,f,"unmounted")},d)},Ts=l=>{const{type:f,el:d,anchor:p,transition:g}=l;if(f===de){po(d,p);return}if(f===Tn){z(l);return}const y=()=>{r(d),g&&!g.persisted&&g.afterLeave&&g.afterLeave()};if(l.shapeFlag&1&&g&&!g.persisted){const{leave:I,delayLeave:b}=g,w=()=>I(d,y);b?b(l.el,y,w):w()}else y()},po=(l,f)=>{let d;for(;l!==f;)d=E(l),r(l),l=d;r(f)},go=(l,f,d)=>{const{bum:p,scope:g,update:y,subTree:I,um:b}=l;p&&wn(p),g.stop(),y&&(y.active=!1,me(I,l,f,d)),b&&te(b,f),te(()=>{l.isUnmounted=!0},f),f&&f.pendingBranch&&!f.isUnmounted&&l.asyncDep&&!l.asyncResolved&&l.suspenseId===f.pendingId&&(f.deps--,f.deps===0&&f.resolve())},ve=(l,f,d,p=!1,g=!1,y=0)=>{for(let I=y;I<l.length;I++)me(l[I],f,d,p,g)},Ft=l=>l.shapeFlag&6?Ft(l.component.subTree):l.shapeFlag&128?l.suspense.next():E(l.anchor||l.el);let bn=!1;const Cs=(l,f,d)=>{l==null?f._vnode&&me(f._vnode,null,null,!0):F(f._vnode||null,l,f,null,null,null,d),bn||(bn=!0,Us(),si(),bn=!1),f._vnode=l},ht={p:F,um:me,m:Ue,r:Ts,mt:_n,mc:ge,pc:N,pbc:He,n:Ft,o:e};let xs,Os;return{render:Cs,hydrate:xs,createApp:Ua(Cs,xs)}}function Sn({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function We({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Xa(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function vi(e,t,n=!1){const s=e.children,r=t.children;if(x(s)&&x(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=xe(r[i]),a.el=o.el),n||vi(o,a)),a.type===ln&&(a.el=o.el)}}function Za(e){const t=e.slice(),n=[0];let s,r,i,o,a;const c=e.length;for(s=0;s<c;s++){const u=e[s];if(u!==0){if(r=n[n.length-1],e[r]<u){t[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,e[n[a]]<u?i=a+1:o=a;u<e[n[i]]&&(i>0&&(t[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}function Ai(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Ai(t)}const Qa=e=>e.__isTeleport,de=Symbol.for("v-fgt"),ln=Symbol.for("v-txt"),Ct=Symbol.for("v-cmt"),Tn=Symbol.for("v-stc"),It=[];let he=null;function Si(e=!1){It.push(he=e?null:[])}function ec(){It.pop(),he=It[It.length-1]||null}let xt=1;function Zs(e){xt+=e}function tc(e){return e.dynamicChildren=xt>0?he||ot:null,ec(),xt>0&&he&&he.push(e),e}function Ti(e,t,n,s,r,i){return tc(G(e,t,n,s,r,i,!0))}function nc(e){return e?e.__v_isVNode===!0:!1}function gt(e,t){return e.type===t.type&&e.key===t.key}const Ci=({key:e})=>e??null,Wt=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?q(e)||re(e)||O(e)?{i:Ie,r:e,k:t,f:!!n}:e:null);function G(e,t=null,n=null,s=0,r=null,i=e===de?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Ci(t),ref:t&&Wt(t),scopeId:an,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Ie};return a?(_s(c,n),i&128&&e.normalize(c)):n&&(c.shapeFlag|=q(n)?8:16),xt>0&&!o&&he&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&he.push(c),c}const Pe=sc;function sc(e,t=null,n=null,s=0,r=null,i=!1){if((!e||e===_a)&&(e=Ct),nc(e)){const a=ft(e,t,!0);return n&&_s(a,n),xt>0&&!i&&he&&(a.shapeFlag&6?he[he.indexOf(e)]=a:he.push(a)),a.patchFlag|=-2,a}if(hc(e)&&(e=e.__vccOpts),t){t=rc(t);let{class:a,style:c}=t;a&&!q(a)&&(t.class=rs(a)),k(c)&&(Xr(c)&&!x(c)&&(c=J({},c)),t.style=ss(c))}const o=q(e)?1:ba(e)?128:Qa(e)?64:k(e)?4:O(e)?2:0;return G(e,t,n,s,r,o,i,!0)}function rc(e){return e?Xr(e)||_i(e)?J({},e):e:null}function ft(e,t,n=!1,s=!1){const{props:r,ref:i,patchFlag:o,children:a,transition:c}=e,u=t?ic(r||{},t):r,h={__v_isVNode:!0,__v_skip:!0,type:e.type,props:u,key:u&&Ci(u),ref:t&&t.ref?n&&i?x(i)?i.concat(Wt(t)):[i,Wt(t)]:Wt(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==de?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&ft(e.ssContent),ssFallback:e.ssFallback&&ft(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&s&&(h.transition=c.clone(h)),h}function Xe(e=" ",t=0){return Pe(ln,null,e,t)}function ye(e){return e==null||typeof e=="boolean"?Pe(Ct):x(e)?Pe(de,null,e.slice()):typeof e=="object"?xe(e):Pe(ln,null,String(e))}function xe(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:ft(e)}function _s(e,t){let n=0;const{shapeFlag:s}=e;if(t==null)t=null;else if(x(t))n=16;else if(typeof t=="object")if(s&65){const r=t.default;r&&(r._c&&(r._d=!1),_s(e,r()),r._c&&(r._d=!0));return}else{n=32;const r=t._;!r&&!_i(t)?t._ctx=Ie:r===3&&Ie&&(Ie.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else O(t)?(t={default:t,_ctx:Ie},n=32):(t=String(t),s&64?(n=16,t=[Xe(t)]):n=8);e.children=t,e.shapeFlag|=n}function ic(...e){const t={};for(let n=0;n<e.length;n++){const s=e[n];for(const r in s)if(r==="class")t.class!==s.class&&(t.class=rs([t.class,s.class]));else if(r==="style")t.style=ss([t.style,s.style]);else if(en(r)){const i=t[r],o=s[r];o&&i!==o&&!(x(i)&&i.includes(o))&&(t[r]=i?[].concat(i,o):o)}else r!==""&&(t[r]=s[r])}return t}function be(e,t,n,s=null){pe(e,t,7,[n,s])}const oc=pi();let ac=0;function cc(e,t,n){const s=e.type,r=(t?t.appContext:e.appContext)||oc,i={uid:ac++,vnode:e,type:s,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Oo(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:yi(s,r),emitsOptions:ii(s,r),emit:null,emitted:null,propsDefaults:H,inheritAttrs:s.inheritAttrs,ctx:H,data:H,props:H,attrs:H,slots:H,refs:H,setupState:H,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=ua.bind(null,i),e.ce&&e.ce(i),i}let ee=null,Jt,Kn;{const e=Br(),t=(n,s)=>{let r;return(r=e[n])||(r=e[n]=[]),r.push(s),i=>{r.length>1?r.forEach(o=>o(i)):r[0](i)}};Jt=t("__VUE_INSTANCE_SETTERS__",n=>ee=n),Kn=t("__VUE_SSR_SETTERS__",n=>fn=n)}const Rt=e=>{const t=ee;return Jt(e),e.scope.on(),()=>{e.scope.off(),Jt(t)}},Qs=()=>{ee&&ee.scope.off(),Jt(null)};function xi(e){return e.vnode.shapeFlag&4}let fn=!1;function lc(e,t=!1){t&&Kn(t);const{props:n,children:s}=e.vnode,r=xi(e);Wa(e,n,r,t),qa(e,s);const i=r?fc(e,t):void 0;return t&&Kn(!1),i}function fc(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,$a);const{setup:s}=n;if(s){const r=e.setupContext=s.length>1?dc(e):null,i=Rt(e);Le();const o=De(s,e,0,[e.props,r]);if(je(),i(),Dr(o)){if(o.then(Qs,Qs),t)return o.then(a=>{er(e,a,t)}).catch(a=>{rn(a,e,0)});e.asyncDep=o}else er(e,o,t)}else Oi(e,t)}function er(e,t,n){O(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:k(t)&&(e.setupState=ei(t)),Oi(e,n)}let tr;function Oi(e,t,n){const s=e.type;if(!e.render){if(!t&&tr&&!s.render){const r=s.template||gs(e).template;if(r){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:a,compilerOptions:c}=s,u=J(J({isCustomElement:i,delimiters:a},o),c);s.render=tr(r,u)}}e.render=s.render||le}{const r=Rt(e);Le();try{Ba(e)}finally{je(),r()}}}const uc={get(e,t){return se(e,"get",""),e[t]}};function dc(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,uc),slots:e.slots,emit:e.emit,expose:t}}function bs(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(ei(Zo(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in yt)return yt[n](e)},has(t,n){return n in t||n in yt}}))}function hc(e){return O(e)&&"__vccOpts"in e}const pc=(e,t)=>Qo(e,t,fn),gc="3.4.27";/**
* @vue/runtime-dom v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const mc="http://www.w3.org/2000/svg",_c="http://www.w3.org/1998/Math/MathML",Oe=typeof document<"u"?document:null,nr=Oe&&Oe.createElement("template"),bc={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,s)=>{const r=t==="svg"?Oe.createElementNS(mc,e):t==="mathml"?Oe.createElementNS(_c,e):Oe.createElement(e,n?{is:n}:void 0);return e==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:e=>Oe.createTextNode(e),createComment:e=>Oe.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Oe.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,s,r,i){const o=n?n.previousSibling:t.lastChild;if(r&&(r===i||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{nr.innerHTML=s==="svg"?`<svg>${e}</svg>`:s==="mathml"?`<math>${e}</math>`:e;const a=nr.content;if(s==="svg"||s==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}t.insertBefore(a,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},yc=Symbol("_vtc");function wc(e,t,n){const s=e[yc];s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const sr=Symbol("_vod"),Ic=Symbol("_vsh"),Ec=Symbol(""),vc=/(^|;)\s*display\s*:/;function Ac(e,t,n){const s=e.style,r=q(n);let i=!1;if(n&&!r){if(t)if(q(t))for(const o of t.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&zt(s,a,"")}else for(const o in t)n[o]==null&&zt(s,o,"");for(const o in n)o==="display"&&(i=!0),zt(s,o,n[o])}else if(r){if(t!==n){const o=s[Ec];o&&(n+=";"+o),s.cssText=n,i=vc.test(n)}}else t&&e.removeAttribute("style");sr in e&&(e[sr]=i?s.display:"",e[Ic]&&(s.display="none"))}const rr=/\s*!important$/;function zt(e,t,n){if(x(n))n.forEach(s=>zt(e,t,s));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const s=Sc(e,t);rr.test(n)?e.setProperty(ut(s),n.replace(rr,""),"important"):e[s]=n}}const ir=["Webkit","Moz","ms"],Cn={};function Sc(e,t){const n=Cn[t];if(n)return n;let s=lt(t);if(s!=="filter"&&s in e)return Cn[t]=s;s=Fr(s);for(let r=0;r<ir.length;r++){const i=ir[r]+s;if(i in e)return Cn[t]=i}return t}const or="http://www.w3.org/1999/xlink";function Tc(e,t,n,s,r){if(s&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(or,t.slice(6,t.length)):e.setAttributeNS(or,t,n);else{const i=xo(t);n==null||i&&!Nr(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function Cc(e,t,n,s,r,i,o){if(t==="innerHTML"||t==="textContent"){s&&o(s,r,i),e[t]=n??"";return}const a=e.tagName;if(t==="value"&&a!=="PROGRESS"&&!a.includes("-")){const u=a==="OPTION"?e.getAttribute("value")||"":e.value,h=n??"";(u!==h||!("_value"in e))&&(e.value=h),n==null&&e.removeAttribute(t),e._value=n;return}let c=!1;if(n===""||n==null){const u=typeof e[t];u==="boolean"?n=Nr(n):n==null&&u==="string"?(n="",c=!0):u==="number"&&(n=0,c=!0)}try{e[t]=n}catch{}c&&e.removeAttribute(t)}function xc(e,t,n,s){e.addEventListener(t,n,s)}function Oc(e,t,n,s){e.removeEventListener(t,n,s)}const ar=Symbol("_vei");function Rc(e,t,n,s,r=null){const i=e[ar]||(e[ar]={}),o=i[t];if(s&&o)o.value=s;else{const[a,c]=Dc(t);if(s){const u=i[t]=Fc(s,r);xc(e,a,u,c)}else o&&(Oc(e,a,o,c),i[t]=void 0)}}const cr=/(?:Once|Passive|Capture)$/;function Dc(e){let t;if(cr.test(e)){t={};let s;for(;s=e.match(cr);)e=e.slice(0,e.length-s[0].length),t[s[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):ut(e.slice(2)),t]}let xn=0;const Pc=Promise.resolve(),Mc=()=>xn||(Pc.then(()=>xn=0),xn=Date.now());function Fc(e,t){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;pe($c(s,n.value),t,5,[s])};return n.value=e,n.attached=Mc(),n}function $c(e,t){if(x(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(s=>r=>!r._stopped&&s&&s(r))}else return t}const lr=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Bc=(e,t,n,s,r,i,o,a,c)=>{const u=r==="svg";t==="class"?wc(e,s,u):t==="style"?Ac(e,n,s):en(t)?es(t)||Rc(e,t,n,s,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Nc(e,t,s,u))?Cc(e,t,s,i,o,a,c):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),Tc(e,t,s,u))};function Nc(e,t,n,s){if(s)return!!(t==="innerHTML"||t==="textContent"||t in e&&lr(t)&&O(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const r=e.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return lr(t)&&q(n)?!1:t in e}const Lc=J({patchProp:Bc},bc);let fr;function jc(){return fr||(fr=Ja(Lc))}const Hc=(...e)=>{const t=jc().createApp(...e),{mount:n}=t;return t.mount=s=>{const r=Uc(s);if(!r)return;const i=t._component;!O(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,Vc(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},t};function Vc(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Uc(e){return q(e)?document.querySelector(e):e}const kc="/vite.svg",Wc="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20aria-hidden='true'%20role='img'%20class='iconify%20iconify--logos'%20width='37.07'%20height='36'%20preserveAspectRatio='xMidYMid%20meet'%20viewBox='0%200%20256%20198'%3e%3cpath%20fill='%2341B883'%20d='M204.8%200H256L128%20220.8L0%200h97.92L128%2051.2L157.44%200h47.36Z'%3e%3c/path%3e%3cpath%20fill='%2341B883'%20d='m0%200l128%20220.8L256%200h-51.2L128%20132.48L50.56%200H0Z'%3e%3c/path%3e%3cpath%20fill='%2335495E'%20d='M50.56%200L128%20133.12L204.8%200h-47.36L128%2051.2L97.92%200H50.56Z'%3e%3c/path%3e%3c/svg%3e",Ri=(e,t)=>{const n=e.__vccOpts||e;for(const[s,r]of t)n[s]=r;return n},un=e=>(oi("data-v-4b8d1567"),e=e(),ai(),e),zc={class:"card"},Kc=un(()=>G("p",null,[Xe(" Edit "),G("code",null,"components/HelloWorld.vue"),Xe(" to test HMR ")],-1)),qc=un(()=>G("p",null,[Xe(" Check out "),G("a",{href:"https://vuejs.org/guide/quick-start.html#local",target:"_blank"},"create-vue"),Xe(", the official Vue + Vite starter ")],-1)),Gc=un(()=>G("p",null,[Xe(" Install "),G("a",{href:"https://github.com/vuejs/language-tools",target:"_blank"},"Volar"),Xe(" in your IDE for a better DX ")],-1)),Jc=un(()=>G("p",{class:"read-the-docs"},"Click on the Vite and Vue logos to learn more",-1)),Yc={__name:"HelloWorld",props:{msg:String},setup(e){const t=ea(0);return(n,s)=>(Si(),Ti(de,null,[G("h1",null,Fs(e.msg),1),G("div",zc,[G("button",{type:"button",onClick:s[0]||(s[0]=r=>t.value++)},"count is "+Fs(t.value),1),Kc]),qc,Gc,Jc],64))}},Xc=Ri(Yc,[["__scopeId","data-v-4b8d1567"]]),Zc=e=>(oi("data-v-d6420450"),e=e(),ai(),e),Qc=Zc(()=>G("div",null,[G("a",{href:"https://vitejs.dev",target:"_blank"},[G("img",{src:kc,class:"logo",alt:"Vite logo"})]),G("a",{href:"https://vuejs.org/",target:"_blank"},[G("img",{src:Wc,class:"logo vue",alt:"Vue logo"})])],-1)),el={__name:"App",setup(e){return(t,n)=>(Si(),Ti(de,null,[Qc,Pe(Xc,{msg:"Vite + Vue"})],64))}},tl=Ri(el,[["__scopeId","data-v-d6420450"]]);var ur={};/**
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
 */const Di=function(e){const t=[];let n=0;for(let s=0;s<e.length;s++){let r=e.charCodeAt(s);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=r&63|128):(r&64512)===55296&&s+1<e.length&&(e.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(e.charCodeAt(++s)&1023),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=r&63|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=r&63|128)}return t},nl=function(e){const t=[];let n=0,s=0;for(;n<e.length;){const r=e[n++];if(r<128)t[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=e[n++];t[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=e[n++],o=e[n++],a=e[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;t[s++]=String.fromCharCode(55296+(c>>10)),t[s++]=String.fromCharCode(56320+(c&1023))}else{const i=e[n++],o=e[n++];t[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return t.join("")},Pi={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<e.length;r+=3){const i=e[r],o=r+1<e.length,a=o?e[r+1]:0,c=r+2<e.length,u=c?e[r+2]:0,h=i>>2,_=(i&3)<<4|a>>4;let E=(a&15)<<2|u>>6,A=u&63;c||(A=64,o||(E=64)),s.push(n[h],n[_],n[E],n[A])}return s.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Di(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):nl(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<e.length;){const i=n[e.charAt(r++)],a=r<e.length?n[e.charAt(r)]:0;++r;const u=r<e.length?n[e.charAt(r)]:64;++r;const _=r<e.length?n[e.charAt(r)]:64;if(++r,i==null||a==null||u==null||_==null)throw new sl;const E=i<<2|a>>4;if(s.push(E),u!==64){const A=a<<4&240|u>>2;if(s.push(A),_!==64){const V=u<<6&192|_;s.push(V)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class sl extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const rl=function(e){const t=Di(e);return Pi.encodeByteArray(t,!0)},Mi=function(e){return rl(e).replace(/\./g,"")},il=function(e){try{return Pi.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function ol(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const al=()=>ol().__FIREBASE_DEFAULTS__,cl=()=>{if(typeof process>"u"||typeof ur>"u")return;const e=ur.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},ll=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&il(e[1]);return t&&JSON.parse(t)},fl=()=>{try{return al()||cl()||ll()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Fi=()=>{var e;return(e=fl())===null||e===void 0?void 0:e.config};/**
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
 */class ul{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,s))}}}function dl(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function $i(){try{return typeof indexedDB=="object"}catch{return!1}}function Bi(){return new Promise((e,t)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;t(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){t(n)}})}function hl(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const pl="FirebaseError";class st extends Error{constructor(t,n,s){super(n),this.code=t,this.customData=s,this.name=pl,Object.setPrototypeOf(this,st.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,dn.prototype.create)}}class dn{constructor(t,n,s){this.service=t,this.serviceName=n,this.errors=s}create(t,...n){const s=n[0]||{},r=`${this.service}/${t}`,i=this.errors[t],o=i?gl(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new st(r,a,s)}}function gl(e,t){return e.replace(ml,(n,s)=>{const r=t[s];return r!=null?String(r):`<${s}?>`})}const ml=/\{\$([^}]+)}/g;function Yt(e,t){if(e===t)return!0;const n=Object.keys(e),s=Object.keys(t);for(const r of n){if(!s.includes(r))return!1;const i=e[r],o=t[r];if(dr(i)&&dr(o)){if(!Yt(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function dr(e){return e!==null&&typeof e=="object"}/**
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
 */const _l=1e3,bl=2,yl=4*60*60*1e3,wl=.5;function hr(e,t=_l,n=bl){const s=t*Math.pow(n,e),r=Math.round(wl*s*(Math.random()-.5)*2);return Math.min(yl,s+r)}/**
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
 */function Ni(e){return e&&e._delegate?e._delegate:e}class Ne{constructor(t,n,s){this.name=t,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Ke="[DEFAULT]";/**
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
 */class Il{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const s=new ul;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const s=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),r=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(vl(t))try{this.getOrInitializeService({instanceIdentifier:Ke})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(t=Ke){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Ke){return this.instances.has(t)}getOptions(t=Ke){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(t,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(t),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&t(o,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let s=this.instances.get(t);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:El(t),options:n}),this.instances.set(t,s),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(s,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,s)}catch{}return s||null}normalizeInstanceIdentifier(t=Ke){return this.component?this.component.multipleInstances?t:Ke:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function El(e){return e===Ke?void 0:e}function vl(e){return e.instantiationMode==="EAGER"}/**
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
 */class Al{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Il(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var L;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(L||(L={}));const Sl={debug:L.DEBUG,verbose:L.VERBOSE,info:L.INFO,warn:L.WARN,error:L.ERROR,silent:L.SILENT},Tl=L.INFO,Cl={[L.DEBUG]:"log",[L.VERBOSE]:"log",[L.INFO]:"info",[L.WARN]:"warn",[L.ERROR]:"error"},xl=(e,t,...n)=>{if(t<e.logLevel)return;const s=new Date().toISOString(),r=Cl[t];if(r)console[r](`[${s}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Li{constructor(t){this.name=t,this._logLevel=Tl,this._logHandler=xl,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in L))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Sl[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,L.DEBUG,...t),this._logHandler(this,L.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,L.VERBOSE,...t),this._logHandler(this,L.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,L.INFO,...t),this._logHandler(this,L.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,L.WARN,...t),this._logHandler(this,L.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,L.ERROR,...t),this._logHandler(this,L.ERROR,...t)}}const Ol=(e,t)=>t.some(n=>e instanceof n);let pr,gr;function Rl(){return pr||(pr=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Dl(){return gr||(gr=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ji=new WeakMap,qn=new WeakMap,Hi=new WeakMap,On=new WeakMap,ys=new WeakMap;function Pl(e){const t=new Promise((n,s)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{n(Me(e.result)),r()},o=()=>{s(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&ji.set(n,e)}).catch(()=>{}),ys.set(t,e),t}function Ml(e){if(qn.has(e))return;const t=new Promise((n,s)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)});qn.set(e,t)}let Gn={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return qn.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Hi.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Me(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Fl(e){Gn=e(Gn)}function $l(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const s=e.call(Rn(this),t,...n);return Hi.set(s,t.sort?t.sort():[t]),Me(s)}:Dl().includes(e)?function(...t){return e.apply(Rn(this),t),Me(ji.get(this))}:function(...t){return Me(e.apply(Rn(this),t))}}function Bl(e){return typeof e=="function"?$l(e):(e instanceof IDBTransaction&&Ml(e),Ol(e,Rl())?new Proxy(e,Gn):e)}function Me(e){if(e instanceof IDBRequest)return Pl(e);if(On.has(e))return On.get(e);const t=Bl(e);return t!==e&&(On.set(e,t),ys.set(t,e)),t}const Rn=e=>ys.get(e);function Vi(e,t,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(e,t),a=Me(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Me(o.result),c.oldVersion,c.newVersion,Me(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",u=>r(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const Nl=["get","getKey","getAll","getAllKeys","count"],Ll=["put","add","delete","clear"],Dn=new Map;function mr(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Dn.get(t))return Dn.get(t);const n=t.replace(/FromIndex$/,""),s=t!==n,r=Ll.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||Nl.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let u=c.store;return s&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),r&&c.done]))[0]};return Dn.set(t,i),i}Fl(e=>({...e,get:(t,n,s)=>mr(t,n)||e.get(t,n,s),has:(t,n)=>!!mr(t,n)||e.has(t,n)}));/**
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
 */class jl{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Hl(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Hl(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Jn="@firebase/app",_r="0.10.2";/**
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
 */const Ze=new Li("@firebase/app"),Vl="@firebase/app-compat",Ul="@firebase/analytics-compat",kl="@firebase/analytics",Wl="@firebase/app-check-compat",zl="@firebase/app-check",Kl="@firebase/auth",ql="@firebase/auth-compat",Gl="@firebase/database",Jl="@firebase/database-compat",Yl="@firebase/functions",Xl="@firebase/functions-compat",Zl="@firebase/installations",Ql="@firebase/installations-compat",ef="@firebase/messaging",tf="@firebase/messaging-compat",nf="@firebase/performance",sf="@firebase/performance-compat",rf="@firebase/remote-config",of="@firebase/remote-config-compat",af="@firebase/storage",cf="@firebase/storage-compat",lf="@firebase/firestore",ff="@firebase/firestore-compat",uf="firebase";/**
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
 */const Yn="[DEFAULT]",df={[Jn]:"fire-core",[Vl]:"fire-core-compat",[kl]:"fire-analytics",[Ul]:"fire-analytics-compat",[zl]:"fire-app-check",[Wl]:"fire-app-check-compat",[Kl]:"fire-auth",[ql]:"fire-auth-compat",[Gl]:"fire-rtdb",[Jl]:"fire-rtdb-compat",[Yl]:"fire-fn",[Xl]:"fire-fn-compat",[Zl]:"fire-iid",[Ql]:"fire-iid-compat",[ef]:"fire-fcm",[tf]:"fire-fcm-compat",[nf]:"fire-perf",[sf]:"fire-perf-compat",[rf]:"fire-rc",[of]:"fire-rc-compat",[af]:"fire-gcs",[cf]:"fire-gcs-compat",[lf]:"fire-fst",[ff]:"fire-fst-compat","fire-js":"fire-js",[uf]:"fire-js-all"};/**
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
 */const Xt=new Map,hf=new Map,Xn=new Map;function br(e,t){try{e.container.addComponent(t)}catch(n){Ze.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Qe(e){const t=e.name;if(Xn.has(t))return Ze.debug(`There were multiple attempts to register component ${t}.`),!1;Xn.set(t,e);for(const n of Xt.values())br(n,e);for(const n of hf.values())br(n,e);return!0}function hn(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const pf={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Fe=new dn("app","Firebase",pf);/**
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
 */class gf{constructor(t,n,s){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Ne("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Fe.create("app-deleted",{appName:this._name})}}function Ui(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const s=Object.assign({name:Yn,automaticDataCollectionEnabled:!1},t),r=s.name;if(typeof r!="string"||!r)throw Fe.create("bad-app-name",{appName:String(r)});if(n||(n=Fi()),!n)throw Fe.create("no-options");const i=Xt.get(r);if(i){if(Yt(n,i.options)&&Yt(s,i.config))return i;throw Fe.create("duplicate-app",{appName:r})}const o=new Al(r);for(const c of Xn.values())o.addComponent(c);const a=new gf(n,s,o);return Xt.set(r,a),a}function mf(e=Yn){const t=Xt.get(e);if(!t&&e===Yn&&Fi())return Ui();if(!t)throw Fe.create("no-app",{appName:e});return t}function $e(e,t,n){var s;let r=(s=df[e])!==null&&s!==void 0?s:e;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${t}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Ze.warn(a.join(" "));return}Qe(new Ne(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
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
 */const _f="firebase-heartbeat-database",bf=1,Ot="firebase-heartbeat-store";let Pn=null;function ki(){return Pn||(Pn=Vi(_f,bf,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(Ot)}catch(n){console.warn(n)}}}}).catch(e=>{throw Fe.create("idb-open",{originalErrorMessage:e.message})})),Pn}async function yf(e){try{const n=(await ki()).transaction(Ot),s=await n.objectStore(Ot).get(Wi(e));return await n.done,s}catch(t){if(t instanceof st)Ze.warn(t.message);else{const n=Fe.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Ze.warn(n.message)}}}async function yr(e,t){try{const s=(await ki()).transaction(Ot,"readwrite");await s.objectStore(Ot).put(t,Wi(e)),await s.done}catch(n){if(n instanceof st)Ze.warn(n.message);else{const s=Fe.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ze.warn(s.message)}}}function Wi(e){return`${e.name}!${e.options.appId}`}/**
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
 */const wf=1024,If=30*24*60*60*1e3;class Ef{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Af(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var t,n;const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=wr();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=If}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=wr(),{heartbeatsToSend:s,unsentEntries:r}=vf(this._heartbeatsCache.heartbeats),i=Mi(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function wr(){return new Date().toISOString().substring(0,10)}function vf(e,t=wf){const n=[];let s=e.slice();for(const r of e){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),Ir(n)>t){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Ir(n)>t){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Af{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return $i()?Bi().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await yf(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return yr(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return yr(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function Ir(e){return Mi(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function Sf(e){Qe(new Ne("platform-logger",t=>new jl(t),"PRIVATE")),Qe(new Ne("heartbeat",t=>new Ef(t),"PRIVATE")),$e(Jn,_r,e),$e(Jn,_r,"esm2017"),$e("fire-js","")}Sf("");var Tf="firebase",Cf="10.11.1";/**
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
 */$e(Tf,Cf,"app");const zi="@firebase/installations",ws="0.6.6";/**
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
 */const Ki=1e4,qi=`w:${ws}`,Gi="FIS_v2",xf="https://firebaseinstallations.googleapis.com/v1",Of=60*60*1e3,Rf="installations",Df="Installations";/**
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
 */const Pf={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},et=new dn(Rf,Df,Pf);function Ji(e){return e instanceof st&&e.code.includes("request-failed")}/**
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
 */function Yi({projectId:e}){return`${xf}/projects/${e}/installations`}function Xi(e){return{token:e.token,requestStatus:2,expiresIn:Ff(e.expiresIn),creationTime:Date.now()}}async function Zi(e,t){const s=(await t.json()).error;return et.create("request-failed",{requestName:e,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function Qi({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function Mf(e,{refreshToken:t}){const n=Qi(e);return n.append("Authorization",$f(t)),n}async function eo(e){const t=await e();return t.status>=500&&t.status<600?e():t}function Ff(e){return Number(e.replace("s","000"))}function $f(e){return`${Gi} ${e}`}/**
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
 */async function Bf({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const s=Yi(e),r=Qi(e),i=t.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&r.append("x-firebase-client",u)}const o={fid:n,authVersion:Gi,appId:e.appId,sdkVersion:qi},a={method:"POST",headers:r,body:JSON.stringify(o)},c=await eo(()=>fetch(s,a));if(c.ok){const u=await c.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:Xi(u.authToken)}}else throw await Zi("Create Installation",c)}/**
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
 */function to(e){return new Promise(t=>{setTimeout(t,e)})}/**
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
 */function Nf(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const Lf=/^[cdef][\w-]{21}$/,Zn="";function jf(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=Hf(e);return Lf.test(n)?n:Zn}catch{return Zn}}function Hf(e){return Nf(e).substr(0,22)}/**
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
 */function pn(e){return`${e.appName}!${e.appId}`}/**
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
 */const no=new Map;function so(e,t){const n=pn(e);ro(n,t),Vf(n,t)}function ro(e,t){const n=no.get(e);if(n)for(const s of n)s(t)}function Vf(e,t){const n=Uf();n&&n.postMessage({key:e,fid:t}),kf()}let Ge=null;function Uf(){return!Ge&&"BroadcastChannel"in self&&(Ge=new BroadcastChannel("[Firebase] FID Change"),Ge.onmessage=e=>{ro(e.data.key,e.data.fid)}),Ge}function kf(){no.size===0&&Ge&&(Ge.close(),Ge=null)}/**
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
 */const Wf="firebase-installations-database",zf=1,tt="firebase-installations-store";let Mn=null;function Is(){return Mn||(Mn=Vi(Wf,zf,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(tt)}}})),Mn}async function Zt(e,t){const n=pn(e),r=(await Is()).transaction(tt,"readwrite"),i=r.objectStore(tt),o=await i.get(n);return await i.put(t,n),await r.done,(!o||o.fid!==t.fid)&&so(e,t.fid),t}async function io(e){const t=pn(e),s=(await Is()).transaction(tt,"readwrite");await s.objectStore(tt).delete(t),await s.done}async function gn(e,t){const n=pn(e),r=(await Is()).transaction(tt,"readwrite"),i=r.objectStore(tt),o=await i.get(n),a=t(o);return a===void 0?await i.delete(n):await i.put(a,n),await r.done,a&&(!o||o.fid!==a.fid)&&so(e,a.fid),a}/**
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
 */async function Es(e){let t;const n=await gn(e.appConfig,s=>{const r=Kf(s),i=qf(e,r);return t=i.registrationPromise,i.installationEntry});return n.fid===Zn?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function Kf(e){const t=e||{fid:jf(),registrationStatus:0};return oo(t)}function qf(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const r=Promise.reject(et.create("app-offline"));return{installationEntry:t,registrationPromise:r}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},s=Gf(e,n);return{installationEntry:n,registrationPromise:s}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:Jf(e)}:{installationEntry:t}}async function Gf(e,t){try{const n=await Bf(e,t);return Zt(e.appConfig,n)}catch(n){throw Ji(n)&&n.customData.serverCode===409?await io(e.appConfig):await Zt(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function Jf(e){let t=await Er(e.appConfig);for(;t.registrationStatus===1;)await to(100),t=await Er(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await Es(e);return s||n}return t}function Er(e){return gn(e,t=>{if(!t)throw et.create("installation-not-found");return oo(t)})}function oo(e){return Yf(e)?{fid:e.fid,registrationStatus:0}:e}function Yf(e){return e.registrationStatus===1&&e.registrationTime+Ki<Date.now()}/**
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
 */async function Xf({appConfig:e,heartbeatServiceProvider:t},n){const s=Zf(e,n),r=Mf(e,n),i=t.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&r.append("x-firebase-client",u)}const o={installation:{sdkVersion:qi,appId:e.appId}},a={method:"POST",headers:r,body:JSON.stringify(o)},c=await eo(()=>fetch(s,a));if(c.ok){const u=await c.json();return Xi(u)}else throw await Zi("Generate Auth Token",c)}function Zf(e,{fid:t}){return`${Yi(e)}/${t}/authTokens:generate`}/**
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
 */async function vs(e,t=!1){let n;const s=await gn(e.appConfig,i=>{if(!ao(i))throw et.create("not-registered");const o=i.authToken;if(!t&&tu(o))return i;if(o.requestStatus===1)return n=Qf(e,t),i;{if(!navigator.onLine)throw et.create("app-offline");const a=su(i);return n=eu(e,a),a}});return n?await n:s.authToken}async function Qf(e,t){let n=await vr(e.appConfig);for(;n.authToken.requestStatus===1;)await to(100),n=await vr(e.appConfig);const s=n.authToken;return s.requestStatus===0?vs(e,t):s}function vr(e){return gn(e,t=>{if(!ao(t))throw et.create("not-registered");const n=t.authToken;return ru(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function eu(e,t){try{const n=await Xf(e,t),s=Object.assign(Object.assign({},t),{authToken:n});return await Zt(e.appConfig,s),n}catch(n){if(Ji(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await io(e.appConfig);else{const s=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await Zt(e.appConfig,s)}throw n}}function ao(e){return e!==void 0&&e.registrationStatus===2}function tu(e){return e.requestStatus===2&&!nu(e)}function nu(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+Of}function su(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function ru(e){return e.requestStatus===1&&e.requestTime+Ki<Date.now()}/**
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
 */async function iu(e){const t=e,{installationEntry:n,registrationPromise:s}=await Es(t);return s?s.catch(console.error):vs(t).catch(console.error),n.fid}/**
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
 */async function ou(e,t=!1){const n=e;return await au(n),(await vs(n,t)).token}async function au(e){const{registrationPromise:t}=await Es(e);t&&await t}/**
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
 */function cu(e){if(!e||!e.options)throw Fn("App Configuration");if(!e.name)throw Fn("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw Fn(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function Fn(e){return et.create("missing-app-config-values",{valueName:e})}/**
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
 */const co="installations",lu="installations-internal",fu=e=>{const t=e.getProvider("app").getImmediate(),n=cu(t),s=hn(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},uu=e=>{const t=e.getProvider("app").getImmediate(),n=hn(t,co).getImmediate();return{getId:()=>iu(n),getToken:r=>ou(n,r)}};function du(){Qe(new Ne(co,fu,"PUBLIC")),Qe(new Ne(lu,uu,"PRIVATE"))}du();$e(zi,ws);$e(zi,ws,"esm2017");/**
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
 */const Qt="analytics",hu="firebase_id",pu="origin",gu=60*1e3,mu="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",As="https://www.googletagmanager.com/gtag/js";/**
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
 */const ne=new Li("@firebase/analytics");/**
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
 */const _u={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},ae=new dn("analytics","Analytics",_u);/**
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
 */function bu(e){if(!e.startsWith(As)){const t=ae.create("invalid-gtag-resource",{gtagURL:e});return ne.warn(t.message),""}return e}function lo(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function yu(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function wu(e,t){const n=yu("firebase-js-sdk-policy",{createScriptURL:bu}),s=document.createElement("script"),r=`${As}?l=${e}&id=${t}`;s.src=n?n==null?void 0:n.createScriptURL(r):r,s.async=!0,document.head.appendChild(s)}function Iu(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function Eu(e,t,n,s,r,i){const o=s[r];try{if(o)await t[o];else{const c=(await lo(n)).find(u=>u.measurementId===r);c&&await t[c.appId]}}catch(a){ne.error(a)}e("config",r,i)}async function vu(e,t,n,s,r){try{let i=[];if(r&&r.send_to){let o=r.send_to;Array.isArray(o)||(o=[o]);const a=await lo(n);for(const c of o){const u=a.find(_=>_.measurementId===c),h=u&&t[u.appId];if(h)i.push(h);else{i=[];break}}}i.length===0&&(i=Object.values(t)),await Promise.all(i),e("event",s,r||{})}catch(i){ne.error(i)}}function Au(e,t,n,s){async function r(i,...o){try{if(i==="event"){const[a,c]=o;await vu(e,t,n,a,c)}else if(i==="config"){const[a,c]=o;await Eu(e,t,n,s,a,c)}else if(i==="consent"){const[a]=o;e("consent","update",a)}else if(i==="get"){const[a,c,u]=o;e("get",a,c,u)}else if(i==="set"){const[a]=o;e("set",a)}else e(i,...o)}catch(a){ne.error(a)}}return r}function Su(e,t,n,s,r){let i=function(...o){window[s].push(arguments)};return window[r]&&typeof window[r]=="function"&&(i=window[r]),window[r]=Au(i,e,t,n),{gtagCore:i,wrappedGtag:window[r]}}function Tu(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(As)&&n.src.includes(e))return n;return null}/**
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
 */const Cu=30,xu=1e3;class Ou{constructor(t={},n=xu){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const fo=new Ou;function Ru(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function Du(e){var t;const{appId:n,apiKey:s}=e,r={method:"GET",headers:Ru(s)},i=mu.replace("{app-id}",n),o=await fetch(i,r);if(o.status!==200&&o.status!==304){let a="";try{const c=await o.json();!((t=c.error)===null||t===void 0)&&t.message&&(a=c.error.message)}catch{}throw ae.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function Pu(e,t=fo,n){const{appId:s,apiKey:r,measurementId:i}=e.options;if(!s)throw ae.create("no-app-id");if(!r){if(i)return{measurementId:i,appId:s};throw ae.create("no-api-key")}const o=t.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new $u;return setTimeout(async()=>{a.abort()},gu),uo({appId:s,apiKey:r,measurementId:i},o,a,t)}async function uo(e,{throttleEndTimeMillis:t,backoffCount:n},s,r=fo){var i;const{appId:o,measurementId:a}=e;try{await Mu(s,t)}catch(c){if(a)return ne.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw c}try{const c=await Du(e);return r.deleteThrottleMetadata(o),c}catch(c){const u=c;if(!Fu(u)){if(r.deleteThrottleMetadata(o),a)return ne.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:a};throw c}const h=Number((i=u==null?void 0:u.customData)===null||i===void 0?void 0:i.httpStatus)===503?hr(n,r.intervalMillis,Cu):hr(n,r.intervalMillis),_={throttleEndTimeMillis:Date.now()+h,backoffCount:n+1};return r.setThrottleMetadata(o,_),ne.debug(`Calling attemptFetch again in ${h} millis`),uo(e,_,s,r)}}function Mu(e,t){return new Promise((n,s)=>{const r=Math.max(t-Date.now(),0),i=setTimeout(n,r);e.addEventListener(()=>{clearTimeout(i),s(ae.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function Fu(e){if(!(e instanceof st)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class $u{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function Bu(e,t,n,s,r){if(r&&r.global){e("event",n,s);return}else{const i=await t,o=Object.assign(Object.assign({},s),{send_to:i});e("event",n,o)}}/**
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
 */async function Nu(){if($i())try{await Bi()}catch(e){return ne.warn(ae.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return ne.warn(ae.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Lu(e,t,n,s,r,i,o){var a;const c=Pu(e);c.then(A=>{n[A.measurementId]=A.appId,e.options.measurementId&&A.measurementId!==e.options.measurementId&&ne.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${A.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(A=>ne.error(A)),t.push(c);const u=Nu().then(A=>{if(A)return s.getId()}),[h,_]=await Promise.all([c,u]);Tu(i)||wu(i,h.measurementId),r("js",new Date);const E=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return E[pu]="firebase",E.update=!0,_!=null&&(E[hu]=_),r("config",h.measurementId,E),h.measurementId}/**
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
 */class ju{constructor(t){this.app=t}_delete(){return delete Et[this.app.options.appId],Promise.resolve()}}let Et={},Ar=[];const Sr={};let $n="dataLayer",Hu="gtag",Tr,ho,Cr=!1;function Vu(){const e=[];if(dl()&&e.push("This is a browser extension environment."),hl()||e.push("Cookies are not available."),e.length>0){const t=e.map((s,r)=>`(${r+1}) ${s}`).join(" "),n=ae.create("invalid-analytics-context",{errorInfo:t});ne.warn(n.message)}}function Uu(e,t,n){Vu();const s=e.options.appId;if(!s)throw ae.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)ne.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw ae.create("no-api-key");if(Et[s]!=null)throw ae.create("already-exists",{id:s});if(!Cr){Iu($n);const{wrappedGtag:i,gtagCore:o}=Su(Et,Ar,Sr,$n,Hu);ho=i,Tr=o,Cr=!0}return Et[s]=Lu(e,Ar,Sr,t,Tr,$n,n),new ju(e)}function ku(e=mf()){e=Ni(e);const t=hn(e,Qt);return t.isInitialized()?t.getImmediate():Wu(e)}function Wu(e,t={}){const n=hn(e,Qt);if(n.isInitialized()){const r=n.getImmediate();if(Yt(t,n.getOptions()))return r;throw ae.create("already-initialized")}return n.initialize({options:t})}function zu(e,t,n,s){e=Ni(e),Bu(ho,Et[e.app.options.appId],t,n,s).catch(r=>ne.error(r))}const xr="@firebase/analytics",Or="0.10.2";function Ku(){Qe(new Ne(Qt,(t,{options:n})=>{const s=t.getProvider("app").getImmediate(),r=t.getProvider("installations-internal").getImmediate();return Uu(s,r,n)},"PUBLIC")),Qe(new Ne("analytics-internal",e,"PRIVATE")),$e(xr,Or),$e(xr,Or,"esm2017");function e(t){try{const n=t.getProvider(Qt).getImmediate();return{logEvent:(s,r,i)=>zu(n,s,r,i)}}catch(n){throw ae.create("interop-component-reg-failed",{reason:n})}}}Ku();var ze={};mo.config();const qu={apiKey:ze.VUE_APP_FIREBASE_API_KEY,authDomain:ze.VUE_APP_FIREBASE_AUTH_DOMAIN,projectId:ze.VUE_APP_FIREBASE_PROJECT_ID,storageBucket:ze.VUE_APP_FIREBASE_STORAGE_BUCKET,messagingSenderId:ze.VUE_APP_FIREBASE_MESSAGING_SENDER_ID,appId:ze.VUE_APP_FIREBASE_APP_ID,measurementId:ze.VUE_APP_FIREBASE_MEASUREMENT_ID},Gu=Ui(qu);ku(Gu);Hc(tl).mount("#app");
