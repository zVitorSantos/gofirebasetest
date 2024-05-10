(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();/**
* @vue/shared v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Zn(e,t){const n=new Set(e.split(","));return s=>n.has(s)}const H={},it=[],le=()=>{},go=()=>!1,Qt=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Qn=e=>e.startsWith("onUpdate:"),J=Object.assign,es=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},mo=Object.prototype.hasOwnProperty,R=(e,t)=>mo.call(e,t),x=Array.isArray,ot=e=>en(e)==="[object Map]",Or=e=>en(e)==="[object Set]",O=e=>typeof e=="function",q=e=>typeof e=="string",tt=e=>typeof e=="symbol",k=e=>e!==null&&typeof e=="object",Dr=e=>(k(e)||O(e))&&O(e.then)&&O(e.catch),Rr=Object.prototype.toString,en=e=>Rr.call(e),bo=e=>en(e).slice(8,-1),Mr=e=>en(e)==="[object Object]",ts=e=>q(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,mt=Zn(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),tn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},_o=/-(\w)/g,ct=tn(e=>e.replace(_o,(t,n)=>n?n.toUpperCase():"")),yo=/\B([A-Z])/g,ft=tn(e=>e.replace(yo,"-$1").toLowerCase()),Pr=tn(e=>e.charAt(0).toUpperCase()+e.slice(1)),_n=tn(e=>e?`on${Pr(e)}`:""),Le=(e,t)=>!Object.is(e,t),yn=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Fr=(e,t,n,s=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:s,value:n})},wo=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Ms;const $r=()=>Ms||(Ms=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ns(e){if(x(e)){const t={};for(let n=0;n<e.length;n++){const s=e[n],r=q(s)?So(s):ns(s);if(r)for(const i in r)t[i]=r[i]}return t}else if(q(e)||k(e))return e}const Io=/;(?![^(]*\))/g,vo=/:([^]+)/,Eo=/\/\*[^]*?\*\//g;function So(e){const t={};return e.replace(Eo,"").split(Io).forEach(n=>{if(n){const s=n.split(vo);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function ss(e){let t="";if(q(e))t=e;else if(x(e))for(let n=0;n<e.length;n++){const s=ss(e[n]);s&&(t+=s+" ")}else if(k(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Ao="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",To=Zn(Ao);function Lr(e){return!!e||e===""}const Ps=e=>q(e)?e:e==null?"":x(e)||k(e)&&(e.toString===Rr||!O(e.toString))?JSON.stringify(e,Nr,2):String(e),Nr=(e,t)=>t&&t.__v_isRef?Nr(e,t.value):ot(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[s,r],i)=>(n[wn(s,i)+" =>"]=r,n),{})}:Or(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>wn(n))}:tt(t)?wn(t):k(t)&&!x(t)&&!Mr(t)?String(t):t,wn=(e,t="")=>{var n;return tt(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ue;class Co{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=ue,!t&&ue&&(this.index=(ue.scopes||(ue.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=ue;try{return ue=this,t()}finally{ue=n}}}on(){ue=this}off(){ue=this.parent}stop(t){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function xo(e,t=ue){t&&t.active&&t.effects.push(e)}function Oo(){return ue}let Ge;class rs{constructor(t,n,s,r){this.fn=t,this.trigger=n,this.scheduler=s,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,xo(this,r)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,Be();for(let t=0;t<this._depsLength;t++){const n=this.deps[t];if(n.computed&&(Do(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),je()}return this._dirtyLevel>=4}set dirty(t){this._dirtyLevel=t?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let t=De,n=Ge;try{return De=!0,Ge=this,this._runnings++,Fs(this),this.fn()}finally{$s(this),this._runnings--,Ge=n,De=t}}stop(){this.active&&(Fs(this),$s(this),this.onStop&&this.onStop(),this.active=!1)}}function Do(e){return e.value}function Fs(e){e._trackId++,e._depsLength=0}function $s(e){if(e.deps.length>e._depsLength){for(let t=e._depsLength;t<e.deps.length;t++)Br(e.deps[t],e);e.deps.length=e._depsLength}}function Br(e,t){const n=e.get(t);n!==void 0&&t._trackId!==n&&(e.delete(t),e.size===0&&e.cleanup())}let De=!0,$n=0;const jr=[];function Be(){jr.push(De),De=!1}function je(){const e=jr.pop();De=e===void 0?!0:e}function is(){$n++}function os(){for($n--;!$n&&Ln.length;)Ln.shift()()}function Hr(e,t,n){if(t.get(e)!==e._trackId){t.set(e,e._trackId);const s=e.deps[e._depsLength];s!==t?(s&&Br(s,e),e.deps[e._depsLength++]=t):e._depsLength++}}const Ln=[];function Vr(e,t,n){is();for(const s of e.keys()){let r;s._dirtyLevel<t&&(r??(r=e.get(s)===s._trackId))&&(s._shouldSchedule||(s._shouldSchedule=s._dirtyLevel===0),s._dirtyLevel=t),s._shouldSchedule&&(r??(r=e.get(s)===s._trackId))&&(s.trigger(),(!s._runnings||s.allowRecurse)&&s._dirtyLevel!==2&&(s._shouldSchedule=!1,s.scheduler&&Ln.push(s.scheduler)))}os()}const Ur=(e,t)=>{const n=new Map;return n.cleanup=e,n.computed=t,n},Nn=new WeakMap,Je=Symbol(""),Bn=Symbol("");function se(e,t,n){if(De&&Ge){let s=Nn.get(e);s||Nn.set(e,s=new Map);let r=s.get(n);r||s.set(n,r=Ur(()=>s.delete(n))),Hr(Ge,r)}}function Se(e,t,n,s,r,i){const o=Nn.get(e);if(!o)return;let a=[];if(t==="clear")a=[...o.values()];else if(n==="length"&&x(e)){const c=Number(s);o.forEach((u,h)=>{(h==="length"||!tt(h)&&h>=c)&&a.push(u)})}else switch(n!==void 0&&a.push(o.get(n)),t){case"add":x(e)?ts(n)&&a.push(o.get("length")):(a.push(o.get(Je)),ot(e)&&a.push(o.get(Bn)));break;case"delete":x(e)||(a.push(o.get(Je)),ot(e)&&a.push(o.get(Bn)));break;case"set":ot(e)&&a.push(o.get(Je));break}is();for(const c of a)c&&Vr(c,4);os()}const Ro=Zn("__proto__,__v_isRef,__isVue"),kr=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(tt)),Ls=Mo();function Mo(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const s=P(this);for(let i=0,o=this.length;i<o;i++)se(s,"get",i+"");const r=s[t](...n);return r===-1||r===!1?s[t](...n.map(P)):r}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Be(),is();const s=P(this)[t].apply(this,n);return os(),je(),s}}),e}function Po(e){tt(e)||(e=String(e));const t=P(this);return se(t,"has",e),t.hasOwnProperty(e)}class zr{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,s){const r=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return i;if(n==="__v_raw")return s===(r?i?Ko:Gr:i?qr:Kr).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(s)?t:void 0;const o=x(t);if(!r){if(o&&R(Ls,n))return Reflect.get(Ls,n,s);if(n==="hasOwnProperty")return Po}const a=Reflect.get(t,n,s);return(tt(n)?kr.has(n):Ro(n))||(r||se(t,"get",n),i)?a:re(a)?o&&ts(n)?a:a.value:k(a)?r?Jr(a):ls(a):a}}class Wr extends zr{constructor(t=!1){super(!1,t)}set(t,n,s,r){let i=t[n];if(!this._isShallow){const c=vt(i);if(!Wt(s)&&!vt(s)&&(i=P(i),s=P(s)),!x(t)&&re(i)&&!re(s))return c?!1:(i.value=s,!0)}const o=x(t)&&ts(n)?Number(n)<t.length:R(t,n),a=Reflect.set(t,n,s,r);return t===P(r)&&(o?Le(s,i)&&Se(t,"set",n,s):Se(t,"add",n,s)),a}deleteProperty(t,n){const s=R(t,n);t[n];const r=Reflect.deleteProperty(t,n);return r&&s&&Se(t,"delete",n,void 0),r}has(t,n){const s=Reflect.has(t,n);return(!tt(n)||!kr.has(n))&&se(t,"has",n),s}ownKeys(t){return se(t,"iterate",x(t)?"length":Je),Reflect.ownKeys(t)}}class Fo extends zr{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const $o=new Wr,Lo=new Fo,No=new Wr(!0);const as=e=>e,nn=e=>Reflect.getPrototypeOf(e);function Ft(e,t,n=!1,s=!1){e=e.__v_raw;const r=P(e),i=P(t);n||(Le(t,i)&&se(r,"get",t),se(r,"get",i));const{has:o}=nn(r),a=s?as:n?us:Et;if(o.call(r,t))return a(e.get(t));if(o.call(r,i))return a(e.get(i));e!==r&&e.get(t)}function $t(e,t=!1){const n=this.__v_raw,s=P(n),r=P(e);return t||(Le(e,r)&&se(s,"has",e),se(s,"has",r)),e===r?n.has(e):n.has(e)||n.has(r)}function Lt(e,t=!1){return e=e.__v_raw,!t&&se(P(e),"iterate",Je),Reflect.get(e,"size",e)}function Ns(e){e=P(e);const t=P(this);return nn(t).has.call(t,e)||(t.add(e),Se(t,"add",e,e)),this}function Bs(e,t){t=P(t);const n=P(this),{has:s,get:r}=nn(n);let i=s.call(n,e);i||(e=P(e),i=s.call(n,e));const o=r.call(n,e);return n.set(e,t),i?Le(t,o)&&Se(n,"set",e,t):Se(n,"add",e,t),this}function js(e){const t=P(this),{has:n,get:s}=nn(t);let r=n.call(t,e);r||(e=P(e),r=n.call(t,e)),s&&s.call(t,e);const i=t.delete(e);return r&&Se(t,"delete",e,void 0),i}function Hs(){const e=P(this),t=e.size!==0,n=e.clear();return t&&Se(e,"clear",void 0,void 0),n}function Nt(e,t){return function(s,r){const i=this,o=i.__v_raw,a=P(o),c=t?as:e?us:Et;return!e&&se(a,"iterate",Je),o.forEach((u,h)=>s.call(r,c(u),c(h),i))}}function Bt(e,t,n){return function(...s){const r=this.__v_raw,i=P(r),o=ot(i),a=e==="entries"||e===Symbol.iterator&&o,c=e==="keys"&&o,u=r[e](...s),h=n?as:t?us:Et;return!t&&se(i,"iterate",c?Bn:Je),{next(){const{value:b,done:v}=u.next();return v?{value:b,done:v}:{value:a?[h(b[0]),h(b[1])]:h(b),done:v}},[Symbol.iterator](){return this}}}}function Te(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Bo(){const e={get(i){return Ft(this,i)},get size(){return Lt(this)},has:$t,add:Ns,set:Bs,delete:js,clear:Hs,forEach:Nt(!1,!1)},t={get(i){return Ft(this,i,!1,!0)},get size(){return Lt(this)},has:$t,add:Ns,set:Bs,delete:js,clear:Hs,forEach:Nt(!1,!0)},n={get(i){return Ft(this,i,!0)},get size(){return Lt(this,!0)},has(i){return $t.call(this,i,!0)},add:Te("add"),set:Te("set"),delete:Te("delete"),clear:Te("clear"),forEach:Nt(!0,!1)},s={get(i){return Ft(this,i,!0,!0)},get size(){return Lt(this,!0)},has(i){return $t.call(this,i,!0)},add:Te("add"),set:Te("set"),delete:Te("delete"),clear:Te("clear"),forEach:Nt(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=Bt(i,!1,!1),n[i]=Bt(i,!0,!1),t[i]=Bt(i,!1,!0),s[i]=Bt(i,!0,!0)}),[e,n,t,s]}const[jo,Ho,Vo,Uo]=Bo();function cs(e,t){const n=t?e?Uo:Vo:e?Ho:jo;return(s,r,i)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?s:Reflect.get(R(n,r)&&r in s?n:s,r,i)}const ko={get:cs(!1,!1)},zo={get:cs(!1,!0)},Wo={get:cs(!0,!1)};const Kr=new WeakMap,qr=new WeakMap,Gr=new WeakMap,Ko=new WeakMap;function qo(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Go(e){return e.__v_skip||!Object.isExtensible(e)?0:qo(bo(e))}function ls(e){return vt(e)?e:fs(e,!1,$o,ko,Kr)}function Jo(e){return fs(e,!1,No,zo,qr)}function Jr(e){return fs(e,!0,Lo,Wo,Gr)}function fs(e,t,n,s,r){if(!k(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=r.get(e);if(i)return i;const o=Go(e);if(o===0)return e;const a=new Proxy(e,o===2?s:n);return r.set(e,a),a}function bt(e){return vt(e)?bt(e.__v_raw):!!(e&&e.__v_isReactive)}function vt(e){return!!(e&&e.__v_isReadonly)}function Wt(e){return!!(e&&e.__v_isShallow)}function Yr(e){return e?!!e.__v_raw:!1}function P(e){const t=e&&e.__v_raw;return t?P(t):e}function Yo(e){return Object.isExtensible(e)&&Fr(e,"__v_skip",!0),e}const Et=e=>k(e)?ls(e):e,us=e=>k(e)?Jr(e):e;class Xr{constructor(t,n,s,r){this.getter=t,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new rs(()=>t(this._value),()=>Ht(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const t=P(this);return(!t._cacheable||t.effect.dirty)&&Le(t._value,t._value=t.effect.run())&&Ht(t,4),Zr(t),t.effect._dirtyLevel>=2&&Ht(t,2),t._value}set value(t){this._setter(t)}get _dirty(){return this.effect.dirty}set _dirty(t){this.effect.dirty=t}}function Xo(e,t,n=!1){let s,r;const i=O(e);return i?(s=e,r=le):(s=e.get,r=e.set),new Xr(s,r,i||!r,n)}function Zr(e){var t;De&&Ge&&(e=P(e),Hr(Ge,(t=e.dep)!=null?t:e.dep=Ur(()=>e.dep=void 0,e instanceof Xr?e:void 0)))}function Ht(e,t=4,n){e=P(e);const s=e.dep;s&&Vr(s,t)}function re(e){return!!(e&&e.__v_isRef===!0)}function Zo(e){return Qo(e,!1)}function Qo(e,t){return re(e)?e:new ea(e,t)}class ea{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:P(t),this._value=n?t:Et(t)}get value(){return Zr(this),this._value}set value(t){const n=this.__v_isShallow||Wt(t)||vt(t);t=n?t:P(t),Le(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:Et(t),Ht(this,4))}}function ta(e){return re(e)?e.value:e}const na={get:(e,t,n)=>ta(Reflect.get(e,t,n)),set:(e,t,n,s)=>{const r=e[t];return re(r)&&!re(n)?(r.value=n,!0):Reflect.set(e,t,n,s)}};function Qr(e){return bt(e)?e:new Proxy(e,na)}/**
* @vue/runtime-core v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Re(e,t,n,s){try{return s?e(...s):e()}catch(r){sn(r,t,n)}}function pe(e,t,n,s){if(O(e)){const r=Re(e,t,n,s);return r&&Dr(r)&&r.catch(i=>{sn(i,t,n)}),r}if(x(e)){const r=[];for(let i=0;i<e.length;i++)r.push(pe(e[i],t,n,s));return r}}function sn(e,t,n,s=!0){const r=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;for(;i;){const u=i.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](e,o,a)===!1)return}i=i.parent}const c=t.appContext.config.errorHandler;if(c){Be(),Re(c,null,10,[e,o,a]),je();return}}sa(e,n,r,s)}function sa(e,t,n,s=!0){console.error(e)}let St=!1,jn=!1;const X=[];let we=0;const at=[];let Ce=null,Ke=0;const ei=Promise.resolve();let ds=null;function ra(e){const t=ds||ei;return e?t.then(this?e.bind(this):e):t}function ia(e){let t=we+1,n=X.length;for(;t<n;){const s=t+n>>>1,r=X[s],i=At(r);i<e||i===e&&r.pre?t=s+1:n=s}return t}function hs(e){(!X.length||!X.includes(e,St&&e.allowRecurse?we+1:we))&&(e.id==null?X.push(e):X.splice(ia(e.id),0,e),ti())}function ti(){!St&&!jn&&(jn=!0,ds=ei.then(si))}function oa(e){const t=X.indexOf(e);t>we&&X.splice(t,1)}function aa(e){x(e)?at.push(...e):(!Ce||!Ce.includes(e,e.allowRecurse?Ke+1:Ke))&&at.push(e),ti()}function Vs(e,t,n=St?we+1:0){for(;n<X.length;n++){const s=X[n];if(s&&s.pre){if(e&&s.id!==e.uid)continue;X.splice(n,1),n--,s()}}}function ni(e){if(at.length){const t=[...new Set(at)].sort((n,s)=>At(n)-At(s));if(at.length=0,Ce){Ce.push(...t);return}for(Ce=t,Ke=0;Ke<Ce.length;Ke++)Ce[Ke]();Ce=null,Ke=0}}const At=e=>e.id==null?1/0:e.id,ca=(e,t)=>{const n=At(e)-At(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function si(e){jn=!1,St=!0,X.sort(ca);try{for(we=0;we<X.length;we++){const t=X[we];t&&t.active!==!1&&Re(t,null,14)}}finally{we=0,X.length=0,ni(),St=!1,ds=null,(X.length||at.length)&&si()}}function la(e,t,...n){if(e.isUnmounted)return;const s=e.vnode.props||H;let r=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in s){const h=`${o==="modelValue"?"model":o}Modifiers`,{number:b,trim:v}=s[h]||H;v&&(r=n.map(S=>q(S)?S.trim():S)),b&&(r=n.map(wo))}let a,c=s[a=_n(t)]||s[a=_n(ct(t))];!c&&i&&(c=s[a=_n(ft(t))]),c&&pe(c,e,6,r);const u=s[a+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,pe(u,e,6,r)}}function ri(e,t,n=!1){const s=t.emitsCache,r=s.get(e);if(r!==void 0)return r;const i=e.emits;let o={},a=!1;if(!O(e)){const c=u=>{const h=ri(u,t,!0);h&&(a=!0,J(o,h))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!i&&!a?(k(e)&&s.set(e,null),null):(x(i)?i.forEach(c=>o[c]=null):J(o,i),k(e)&&s.set(e,o),o)}function rn(e,t){return!e||!Qt(t)?!1:(t=t.slice(2).replace(/Once$/,""),R(e,t[0].toLowerCase()+t.slice(1))||R(e,ft(t))||R(e,t))}let Ie=null,on=null;function Kt(e){const t=Ie;return Ie=e,on=e&&e.type.__scopeId||null,t}function ii(e){on=e}function oi(){on=null}function fa(e,t=Ie,n){if(!t||e._n)return e;const s=(...r)=>{s._d&&Xs(-1);const i=Kt(t);let o;try{o=e(...r)}finally{Kt(i),s._d&&Xs(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function In(e){const{type:t,vnode:n,proxy:s,withProxy:r,propsOptions:[i],slots:o,attrs:a,emit:c,render:u,renderCache:h,props:b,data:v,setupState:S,ctx:V,inheritAttrs:F}=e,ie=Kt(e);let z,Y;try{if(n.shapeFlag&4){const W=r||s,ce=W;z=ye(u.call(ce,W,h,b,S,v,V)),Y=a}else{const W=t;z=ye(W.length>1?W(b,{attrs:a,slots:o,emit:c}):W(b,null)),Y=t.props?a:ua(a)}}catch(W){wt.length=0,sn(W,e,1),z=Me(Tt)}let L=z;if(Y&&F!==!1){const W=Object.keys(Y),{shapeFlag:ce}=L;W.length&&ce&7&&(i&&W.some(Qn)&&(Y=da(Y,i)),L=lt(L,Y,!1,!0))}return n.dirs&&(L=lt(L,null,!1,!0),L.dirs=L.dirs?L.dirs.concat(n.dirs):n.dirs),n.transition&&(L.transition=n.transition),z=L,Kt(ie),z}const ua=e=>{let t;for(const n in e)(n==="class"||n==="style"||Qt(n))&&((t||(t={}))[n]=e[n]);return t},da=(e,t)=>{const n={};for(const s in e)(!Qn(s)||!(s.slice(9)in t))&&(n[s]=e[s]);return n};function ha(e,t,n){const{props:s,children:r,component:i}=e,{props:o,children:a,patchFlag:c}=t,u=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?Us(s,o,u):!!o;if(c&8){const h=t.dynamicProps;for(let b=0;b<h.length;b++){const v=h[b];if(o[v]!==s[v]&&!rn(u,v))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Us(s,o,u):!0:!!o;return!1}function Us(e,t,n){const s=Object.keys(t);if(s.length!==Object.keys(e).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(t[i]!==e[i]&&!rn(n,i))return!0}return!1}function pa({vnode:e,parent:t},n){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===e&&(s.el=e.el),s===e)(e=t.vnode).el=n,t=t.parent;else break}}const ga=Symbol.for("v-ndc"),ma=e=>e.__isSuspense;function ba(e,t){t&&t.pendingBranch?x(e)?t.effects.push(...e):t.effects.push(e):aa(e)}const _a=Symbol.for("v-scx"),ya=()=>Ut(_a),jt={};function vn(e,t,n){return ai(e,t,n)}function ai(e,t,{immediate:n,deep:s,flush:r,once:i,onTrack:o,onTrigger:a}=H){if(t&&i){const M=t;t=(...ve)=>{M(...ve),ce()}}const c=ee,u=M=>s===!0?M:rt(M,s===!1?1:void 0);let h,b=!1,v=!1;if(re(e)?(h=()=>e.value,b=Wt(e)):bt(e)?(h=()=>u(e),b=!0):x(e)?(v=!0,b=e.some(M=>bt(M)||Wt(M)),h=()=>e.map(M=>{if(re(M))return M.value;if(bt(M))return u(M);if(O(M))return Re(M,c,2)})):O(e)?t?h=()=>Re(e,c,2):h=()=>(S&&S(),pe(e,c,3,[V])):h=le,t&&s){const M=h;h=()=>rt(M())}let S,V=M=>{S=L.onStop=()=>{Re(M,c,4),S=L.onStop=void 0}},F;if(ln)if(V=le,t?n&&pe(t,c,3,[h(),v?[]:void 0,V]):h(),r==="sync"){const M=ya();F=M.__watcherHandles||(M.__watcherHandles=[])}else return le;let ie=v?new Array(e.length).fill(jt):jt;const z=()=>{if(!(!L.active||!L.dirty))if(t){const M=L.run();(s||b||(v?M.some((ve,ge)=>Le(ve,ie[ge])):Le(M,ie)))&&(S&&S(),pe(t,c,3,[M,ie===jt?void 0:v&&ie[0]===jt?[]:ie,V]),ie=M)}else L.run()};z.allowRecurse=!!t;let Y;r==="sync"?Y=z:r==="post"?Y=()=>te(z,c&&c.suspense):(z.pre=!0,c&&(z.id=c.uid),Y=()=>hs(z));const L=new rs(h,le,Y),W=Oo(),ce=()=>{L.stop(),W&&es(W.effects,L)};return t?n?z():ie=L.run():r==="post"?te(L.run.bind(L),c&&c.suspense):L.run(),F&&F.push(ce),ce}function wa(e,t,n){const s=this.proxy,r=q(e)?e.includes(".")?ci(s,e):()=>s[e]:e.bind(s,s);let i;O(t)?i=t:(i=t.handler,n=t);const o=Ot(this),a=ai(r,i.bind(s),n);return o(),a}function ci(e,t){const n=t.split(".");return()=>{let s=e;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function rt(e,t=1/0,n){if(t<=0||!k(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),t--,re(e))rt(e.value,t,n);else if(x(e))for(let s=0;s<e.length;s++)rt(e[s],t,n);else if(Or(e)||ot(e))e.forEach(s=>{rt(s,t,n)});else if(Mr(e))for(const s in e)rt(e[s],t,n);return e}function ke(e,t,n,s){const r=e.dirs,i=t&&t.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(Be(),pe(c,n,8,[e.el,a,e,t]),je())}}const Vt=e=>!!e.type.__asyncLoader,li=e=>e.type.__isKeepAlive;function Ia(e,t){fi(e,"a",t)}function va(e,t){fi(e,"da",t)}function fi(e,t,n=ee){const s=e.__wdc||(e.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(an(t,s,n),n){let r=n.parent;for(;r&&r.parent;)li(r.parent.vnode)&&Ea(s,t,n,r),r=r.parent}}function Ea(e,t,n,s){const r=an(t,e,s,!0);ui(()=>{es(s[t],r)},n)}function an(e,t,n=ee,s=!1){if(n){const r=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;Be();const a=Ot(n),c=pe(t,n,e,o);return a(),je(),c});return s?r.unshift(i):r.push(i),i}}const Ae=e=>(t,n=ee)=>(!ln||e==="sp")&&an(e,(...s)=>t(...s),n),Sa=Ae("bm"),Aa=Ae("m"),Ta=Ae("bu"),Ca=Ae("u"),xa=Ae("bum"),ui=Ae("um"),Oa=Ae("sp"),Da=Ae("rtg"),Ra=Ae("rtc");function Ma(e,t=ee){an("ec",e,t)}const Hn=e=>e?Ci(e)?bs(e)||e.proxy:Hn(e.parent):null,_t=J(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Hn(e.parent),$root:e=>Hn(e.root),$emit:e=>e.emit,$options:e=>ps(e),$forceUpdate:e=>e.f||(e.f=()=>{e.effect.dirty=!0,hs(e.update)}),$nextTick:e=>e.n||(e.n=ra.bind(e.proxy)),$watch:e=>wa.bind(e)}),En=(e,t)=>e!==H&&!e.__isScriptSetup&&R(e,t),Pa={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=e;let u;if(t[0]!=="$"){const S=o[t];if(S!==void 0)switch(S){case 1:return s[t];case 2:return r[t];case 4:return n[t];case 3:return i[t]}else{if(En(s,t))return o[t]=1,s[t];if(r!==H&&R(r,t))return o[t]=2,r[t];if((u=e.propsOptions[0])&&R(u,t))return o[t]=3,i[t];if(n!==H&&R(n,t))return o[t]=4,n[t];Vn&&(o[t]=0)}}const h=_t[t];let b,v;if(h)return t==="$attrs"&&se(e.attrs,"get",""),h(e);if((b=a.__cssModules)&&(b=b[t]))return b;if(n!==H&&R(n,t))return o[t]=4,n[t];if(v=c.config.globalProperties,R(v,t))return v[t]},set({_:e},t,n){const{data:s,setupState:r,ctx:i}=e;return En(r,t)?(r[t]=n,!0):s!==H&&R(s,t)?(s[t]=n,!0):R(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||e!==H&&R(e,o)||En(t,o)||(a=i[0])&&R(a,o)||R(s,o)||R(_t,o)||R(r.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:R(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function ks(e){return x(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Vn=!0;function Fa(e){const t=ps(e),n=e.proxy,s=e.ctx;Vn=!1,t.beforeCreate&&zs(t.beforeCreate,e,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:u,created:h,beforeMount:b,mounted:v,beforeUpdate:S,updated:V,activated:F,deactivated:ie,beforeDestroy:z,beforeUnmount:Y,destroyed:L,unmounted:W,render:ce,renderTracked:M,renderTriggered:ve,errorCaptured:ge,serverPrefetch:gn,expose:He,inheritAttrs:ut,components:Dt,directives:Rt,filters:mn}=t;if(u&&$a(u,s,null),o)for(const U in o){const N=o[U];O(N)&&(s[U]=N.bind(n))}if(r){const U=r.call(n,n);k(U)&&(e.data=ls(U))}if(Vn=!0,i)for(const U in i){const N=i[U],Ve=O(N)?N.bind(n,n):O(N.get)?N.get.bind(n,n):le,Mt=!O(N)&&O(N.set)?N.set.bind(n):le,Ue=dc({get:Ve,set:Mt});Object.defineProperty(s,U,{enumerable:!0,configurable:!0,get:()=>Ue.value,set:me=>Ue.value=me})}if(a)for(const U in a)di(a[U],s,n,U);if(c){const U=O(c)?c.call(n):c;Reflect.ownKeys(U).forEach(N=>{Va(N,U[N])})}h&&zs(h,e,"c");function Z(U,N){x(N)?N.forEach(Ve=>U(Ve.bind(n))):N&&U(N.bind(n))}if(Z(Sa,b),Z(Aa,v),Z(Ta,S),Z(Ca,V),Z(Ia,F),Z(va,ie),Z(Ma,ge),Z(Ra,M),Z(Da,ve),Z(xa,Y),Z(ui,W),Z(Oa,gn),x(He))if(He.length){const U=e.exposed||(e.exposed={});He.forEach(N=>{Object.defineProperty(U,N,{get:()=>n[N],set:Ve=>n[N]=Ve})})}else e.exposed||(e.exposed={});ce&&e.render===le&&(e.render=ce),ut!=null&&(e.inheritAttrs=ut),Dt&&(e.components=Dt),Rt&&(e.directives=Rt)}function $a(e,t,n=le){x(e)&&(e=Un(e));for(const s in e){const r=e[s];let i;k(r)?"default"in r?i=Ut(r.from||s,r.default,!0):i=Ut(r.from||s):i=Ut(r),re(i)?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):t[s]=i}}function zs(e,t,n){pe(x(e)?e.map(s=>s.bind(t.proxy)):e.bind(t.proxy),t,n)}function di(e,t,n,s){const r=s.includes(".")?ci(n,s):()=>n[s];if(q(e)){const i=t[e];O(i)&&vn(r,i)}else if(O(e))vn(r,e.bind(n));else if(k(e))if(x(e))e.forEach(i=>di(i,t,n,s));else{const i=O(e.handler)?e.handler.bind(n):t[e.handler];O(i)&&vn(r,i,e)}}function ps(e){const t=e.type,{mixins:n,extends:s}=t,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,a=i.get(t);let c;return a?c=a:!r.length&&!n&&!s?c=t:(c={},r.length&&r.forEach(u=>qt(c,u,o,!0)),qt(c,t,o)),k(t)&&i.set(t,c),c}function qt(e,t,n,s=!1){const{mixins:r,extends:i}=t;i&&qt(e,i,n,!0),r&&r.forEach(o=>qt(e,o,n,!0));for(const o in t)if(!(s&&o==="expose")){const a=La[o]||n&&n[o];e[o]=a?a(e[o],t[o]):t[o]}return e}const La={data:Ws,props:Ks,emits:Ks,methods:gt,computed:gt,beforeCreate:Q,created:Q,beforeMount:Q,mounted:Q,beforeUpdate:Q,updated:Q,beforeDestroy:Q,beforeUnmount:Q,destroyed:Q,unmounted:Q,activated:Q,deactivated:Q,errorCaptured:Q,serverPrefetch:Q,components:gt,directives:gt,watch:Ba,provide:Ws,inject:Na};function Ws(e,t){return t?e?function(){return J(O(e)?e.call(this,this):e,O(t)?t.call(this,this):t)}:t:e}function Na(e,t){return gt(Un(e),Un(t))}function Un(e){if(x(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Q(e,t){return e?[...new Set([].concat(e,t))]:t}function gt(e,t){return e?J(Object.create(null),e,t):t}function Ks(e,t){return e?x(e)&&x(t)?[...new Set([...e,...t])]:J(Object.create(null),ks(e),ks(t??{})):t}function Ba(e,t){if(!e)return t;if(!t)return e;const n=J(Object.create(null),e);for(const s in t)n[s]=Q(e[s],t[s]);return n}function hi(){return{app:null,config:{isNativeTag:go,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ja=0;function Ha(e,t){return function(s,r=null){O(s)||(s=J({},s)),r!=null&&!k(r)&&(r=null);const i=hi(),o=new WeakSet;let a=!1;const c=i.app={_uid:ja++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:hc,get config(){return i.config},set config(u){},use(u,...h){return o.has(u)||(u&&O(u.install)?(o.add(u),u.install(c,...h)):O(u)&&(o.add(u),u(c,...h))),c},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),c},component(u,h){return h?(i.components[u]=h,c):i.components[u]},directive(u,h){return h?(i.directives[u]=h,c):i.directives[u]},mount(u,h,b){if(!a){const v=Me(s,r);return v.appContext=i,b===!0?b="svg":b===!1&&(b=void 0),h&&t?t(v,u):e(v,u,b),a=!0,c._container=u,u.__vue_app__=c,bs(v.component)||v.component.proxy}},unmount(){a&&(e(null,c._container),delete c._container.__vue_app__)},provide(u,h){return i.provides[u]=h,c},runWithContext(u){const h=yt;yt=c;try{return u()}finally{yt=h}}};return c}}let yt=null;function Va(e,t){if(ee){let n=ee.provides;const s=ee.parent&&ee.parent.provides;s===n&&(n=ee.provides=Object.create(s)),n[e]=t}}function Ut(e,t,n=!1){const s=ee||Ie;if(s||yt){const r=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:yt._context.provides;if(r&&e in r)return r[e];if(arguments.length>1)return n&&O(t)?t.call(s&&s.proxy):t}}const pi={},gi=()=>Object.create(pi),mi=e=>Object.getPrototypeOf(e)===pi;function Ua(e,t,n,s=!1){const r={},i=gi();e.propsDefaults=Object.create(null),bi(e,t,r,i);for(const o in e.propsOptions[0])o in r||(r[o]=void 0);n?e.props=s?r:Jo(r):e.type.props?e.props=r:e.props=i,e.attrs=i}function ka(e,t,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=e,a=P(r),[c]=e.propsOptions;let u=!1;if((s||o>0)&&!(o&16)){if(o&8){const h=e.vnode.dynamicProps;for(let b=0;b<h.length;b++){let v=h[b];if(rn(e.emitsOptions,v))continue;const S=t[v];if(c)if(R(i,v))S!==i[v]&&(i[v]=S,u=!0);else{const V=ct(v);r[V]=kn(c,a,V,S,e,!1)}else S!==i[v]&&(i[v]=S,u=!0)}}}else{bi(e,t,r,i)&&(u=!0);let h;for(const b in a)(!t||!R(t,b)&&((h=ft(b))===b||!R(t,h)))&&(c?n&&(n[b]!==void 0||n[h]!==void 0)&&(r[b]=kn(c,a,b,void 0,e,!0)):delete r[b]);if(i!==a)for(const b in i)(!t||!R(t,b))&&(delete i[b],u=!0)}u&&Se(e.attrs,"set","")}function bi(e,t,n,s){const[r,i]=e.propsOptions;let o=!1,a;if(t)for(let c in t){if(mt(c))continue;const u=t[c];let h;r&&R(r,h=ct(c))?!i||!i.includes(h)?n[h]=u:(a||(a={}))[h]=u:rn(e.emitsOptions,c)||(!(c in s)||u!==s[c])&&(s[c]=u,o=!0)}if(i){const c=P(n),u=a||H;for(let h=0;h<i.length;h++){const b=i[h];n[b]=kn(r,c,b,u[b],e,!R(u,b))}}return o}function kn(e,t,n,s,r,i){const o=e[n];if(o!=null){const a=R(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&O(c)){const{propsDefaults:u}=r;if(n in u)s=u[n];else{const h=Ot(r);s=u[n]=c.call(null,t),h()}}else s=c}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===ft(n))&&(s=!0))}return s}function _i(e,t,n=!1){const s=t.propsCache,r=s.get(e);if(r)return r;const i=e.props,o={},a=[];let c=!1;if(!O(e)){const h=b=>{c=!0;const[v,S]=_i(b,t,!0);J(o,v),S&&a.push(...S)};!n&&t.mixins.length&&t.mixins.forEach(h),e.extends&&h(e.extends),e.mixins&&e.mixins.forEach(h)}if(!i&&!c)return k(e)&&s.set(e,it),it;if(x(i))for(let h=0;h<i.length;h++){const b=ct(i[h]);qs(b)&&(o[b]=H)}else if(i)for(const h in i){const b=ct(h);if(qs(b)){const v=i[h],S=o[b]=x(v)||O(v)?{type:v}:J({},v);if(S){const V=Ys(Boolean,S.type),F=Ys(String,S.type);S[0]=V>-1,S[1]=F<0||V<F,(V>-1||R(S,"default"))&&a.push(b)}}}const u=[o,a];return k(e)&&s.set(e,u),u}function qs(e){return e[0]!=="$"&&!mt(e)}function Gs(e){return e===null?"null":typeof e=="function"?e.name||"":typeof e=="object"&&e.constructor&&e.constructor.name||""}function Js(e,t){return Gs(e)===Gs(t)}function Ys(e,t){return x(t)?t.findIndex(n=>Js(n,e)):O(t)&&Js(t,e)?0:-1}const yi=e=>e[0]==="_"||e==="$stable",gs=e=>x(e)?e.map(ye):[ye(e)],za=(e,t,n)=>{if(t._n)return t;const s=fa((...r)=>gs(t(...r)),n);return s._c=!1,s},wi=(e,t,n)=>{const s=e._ctx;for(const r in e){if(yi(r))continue;const i=e[r];if(O(i))t[r]=za(r,i,s);else if(i!=null){const o=gs(i);t[r]=()=>o}}},Ii=(e,t)=>{const n=gs(t);e.slots.default=()=>n},Wa=(e,t)=>{const n=e.slots=gi();if(e.vnode.shapeFlag&32){const s=t._;s?(J(n,t),Fr(n,"_",s,!0)):wi(t,n)}else t&&Ii(e,t)},Ka=(e,t,n)=>{const{vnode:s,slots:r}=e;let i=!0,o=H;if(s.shapeFlag&32){const a=t._;a?n&&a===1?i=!1:(J(r,t),!n&&a===1&&delete r._):(i=!t.$stable,wi(t,r)),o=t}else t&&(Ii(e,t),o={default:1});if(i)for(const a in r)!yi(a)&&o[a]==null&&delete r[a]};function zn(e,t,n,s,r=!1){if(x(e)){e.forEach((v,S)=>zn(v,t&&(x(t)?t[S]:t),n,s,r));return}if(Vt(s)&&!r)return;const i=s.shapeFlag&4?bs(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:c}=e,u=t&&t.r,h=a.refs===H?a.refs={}:a.refs,b=a.setupState;if(u!=null&&u!==c&&(q(u)?(h[u]=null,R(b,u)&&(b[u]=null)):re(u)&&(u.value=null)),O(c))Re(c,a,12,[o,h]);else{const v=q(c),S=re(c);if(v||S){const V=()=>{if(e.f){const F=v?R(b,c)?b[c]:h[c]:c.value;r?x(F)&&es(F,i):x(F)?F.includes(i)||F.push(i):v?(h[c]=[i],R(b,c)&&(b[c]=h[c])):(c.value=[i],e.k&&(h[e.k]=c.value))}else v?(h[c]=o,R(b,c)&&(b[c]=o)):S&&(c.value=o,e.k&&(h[e.k]=o))};o?(V.id=-1,te(V,n)):V()}}}const te=ba;function qa(e){return Ga(e)}function Ga(e,t){const n=$r();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:u,setElementText:h,parentNode:b,nextSibling:v,setScopeId:S=le,insertStaticContent:V}=e,F=(l,f,d,p=null,g=null,y=null,I=void 0,_=null,w=!!f.dynamicChildren)=>{if(l===f)return;l&&!pt(l,f)&&(p=Pt(l),me(l,g,y,!0),l=null),f.patchFlag===-2&&(w=!1,f.dynamicChildren=null);const{type:m,ref:E,shapeFlag:T}=f;switch(m){case cn:ie(l,f,d,p);break;case Tt:z(l,f,d,p);break;case An:l==null&&Y(f,d,p,I);break;case de:Dt(l,f,d,p,g,y,I,_,w);break;default:T&1?ce(l,f,d,p,g,y,I,_,w):T&6?Rt(l,f,d,p,g,y,I,_,w):(T&64||T&128)&&m.process(l,f,d,p,g,y,I,_,w,dt)}E!=null&&g&&zn(E,l&&l.ref,y,f||l,!f)},ie=(l,f,d,p)=>{if(l==null)s(f.el=a(f.children),d,p);else{const g=f.el=l.el;f.children!==l.children&&u(g,f.children)}},z=(l,f,d,p)=>{l==null?s(f.el=c(f.children||""),d,p):f.el=l.el},Y=(l,f,d,p)=>{[l.el,l.anchor]=V(l.children,f,d,p,l.el,l.anchor)},L=({el:l,anchor:f},d,p)=>{let g;for(;l&&l!==f;)g=v(l),s(l,d,p),l=g;s(f,d,p)},W=({el:l,anchor:f})=>{let d;for(;l&&l!==f;)d=v(l),r(l),l=d;r(f)},ce=(l,f,d,p,g,y,I,_,w)=>{f.type==="svg"?I="svg":f.type==="math"&&(I="mathml"),l==null?M(f,d,p,g,y,I,_,w):gn(l,f,g,y,I,_,w)},M=(l,f,d,p,g,y,I,_)=>{let w,m;const{props:E,shapeFlag:T,transition:A,dirs:C}=l;if(w=l.el=o(l.type,y,E&&E.is,E),T&8?h(w,l.children):T&16&&ge(l.children,w,null,p,g,Sn(l,y),I,_),C&&ke(l,null,p,"created"),ve(w,l,l.scopeId,I,p),E){for(const $ in E)$!=="value"&&!mt($)&&i(w,$,null,E[$],y,l.children,p,g,Ee);"value"in E&&i(w,"value",null,E.value,y),(m=E.onVnodeBeforeMount)&&_e(m,p,l)}C&&ke(l,null,p,"beforeMount");const D=Ja(g,A);D&&A.beforeEnter(w),s(w,f,d),((m=E&&E.onVnodeMounted)||D||C)&&te(()=>{m&&_e(m,p,l),D&&A.enter(w),C&&ke(l,null,p,"mounted")},g)},ve=(l,f,d,p,g)=>{if(d&&S(l,d),p)for(let y=0;y<p.length;y++)S(l,p[y]);if(g){let y=g.subTree;if(f===y){const I=g.vnode;ve(l,I,I.scopeId,I.slotScopeIds,g.parent)}}},ge=(l,f,d,p,g,y,I,_,w=0)=>{for(let m=w;m<l.length;m++){const E=l[m]=_?xe(l[m]):ye(l[m]);F(null,E,f,d,p,g,y,I,_)}},gn=(l,f,d,p,g,y,I)=>{const _=f.el=l.el;let{patchFlag:w,dynamicChildren:m,dirs:E}=f;w|=l.patchFlag&16;const T=l.props||H,A=f.props||H;let C;if(d&&ze(d,!1),(C=A.onVnodeBeforeUpdate)&&_e(C,d,f,l),E&&ke(f,l,d,"beforeUpdate"),d&&ze(d,!0),m?He(l.dynamicChildren,m,_,d,p,Sn(f,g),y):I||N(l,f,_,null,d,p,Sn(f,g),y,!1),w>0){if(w&16)ut(_,f,T,A,d,p,g);else if(w&2&&T.class!==A.class&&i(_,"class",null,A.class,g),w&4&&i(_,"style",T.style,A.style,g),w&8){const D=f.dynamicProps;for(let $=0;$<D.length;$++){const j=D[$],K=T[j],fe=A[j];(fe!==K||j==="value")&&i(_,j,K,fe,g,l.children,d,p,Ee)}}w&1&&l.children!==f.children&&h(_,f.children)}else!I&&m==null&&ut(_,f,T,A,d,p,g);((C=A.onVnodeUpdated)||E)&&te(()=>{C&&_e(C,d,f,l),E&&ke(f,l,d,"updated")},p)},He=(l,f,d,p,g,y,I)=>{for(let _=0;_<f.length;_++){const w=l[_],m=f[_],E=w.el&&(w.type===de||!pt(w,m)||w.shapeFlag&70)?b(w.el):d;F(w,m,E,null,p,g,y,I,!0)}},ut=(l,f,d,p,g,y,I)=>{if(d!==p){if(d!==H)for(const _ in d)!mt(_)&&!(_ in p)&&i(l,_,d[_],null,I,f.children,g,y,Ee);for(const _ in p){if(mt(_))continue;const w=p[_],m=d[_];w!==m&&_!=="value"&&i(l,_,m,w,I,f.children,g,y,Ee)}"value"in p&&i(l,"value",d.value,p.value,I)}},Dt=(l,f,d,p,g,y,I,_,w)=>{const m=f.el=l?l.el:a(""),E=f.anchor=l?l.anchor:a("");let{patchFlag:T,dynamicChildren:A,slotScopeIds:C}=f;C&&(_=_?_.concat(C):C),l==null?(s(m,d,p),s(E,d,p),ge(f.children||[],d,E,g,y,I,_,w)):T>0&&T&64&&A&&l.dynamicChildren?(He(l.dynamicChildren,A,d,g,y,I,_),(f.key!=null||g&&f===g.subTree)&&vi(l,f,!0)):N(l,f,d,E,g,y,I,_,w)},Rt=(l,f,d,p,g,y,I,_,w)=>{f.slotScopeIds=_,l==null?f.shapeFlag&512?g.ctx.activate(f,d,p,I,w):mn(f,d,p,g,y,I,w):Ss(l,f,w)},mn=(l,f,d,p,g,y,I)=>{const _=l.component=oc(l,p,g);if(li(l)&&(_.ctx.renderer=dt),ac(_),_.asyncDep){if(g&&g.registerDep(_,Z),!l.el){const w=_.subTree=Me(Tt);z(null,w,f,d)}}else Z(_,l,f,d,g,y,I)},Ss=(l,f,d)=>{const p=f.component=l.component;if(ha(l,f,d))if(p.asyncDep&&!p.asyncResolved){U(p,f,d);return}else p.next=f,oa(p.update),p.effect.dirty=!0,p.update();else f.el=l.el,p.vnode=f},Z=(l,f,d,p,g,y,I)=>{const _=()=>{if(l.isMounted){let{next:E,bu:T,u:A,parent:C,vnode:D}=l;{const st=Ei(l);if(st){E&&(E.el=D.el,U(l,E,I)),st.asyncDep.then(()=>{l.isUnmounted||_()});return}}let $=E,j;ze(l,!1),E?(E.el=D.el,U(l,E,I)):E=D,T&&yn(T),(j=E.props&&E.props.onVnodeBeforeUpdate)&&_e(j,C,E,D),ze(l,!0);const K=In(l),fe=l.subTree;l.subTree=K,F(fe,K,b(fe.el),Pt(fe),l,g,y),E.el=K.el,$===null&&pa(l,K.el),A&&te(A,g),(j=E.props&&E.props.onVnodeUpdated)&&te(()=>_e(j,C,E,D),g)}else{let E;const{el:T,props:A}=f,{bm:C,m:D,parent:$}=l,j=Vt(f);if(ze(l,!1),C&&yn(C),!j&&(E=A&&A.onVnodeBeforeMount)&&_e(E,$,f),ze(l,!0),T&&xs){const K=()=>{l.subTree=In(l),xs(T,l.subTree,l,g,null)};j?f.type.__asyncLoader().then(()=>!l.isUnmounted&&K()):K()}else{const K=l.subTree=In(l);F(null,K,d,p,l,g,y),f.el=K.el}if(D&&te(D,g),!j&&(E=A&&A.onVnodeMounted)){const K=f;te(()=>_e(E,$,K),g)}(f.shapeFlag&256||$&&Vt($.vnode)&&$.vnode.shapeFlag&256)&&l.a&&te(l.a,g),l.isMounted=!0,f=d=p=null}},w=l.effect=new rs(_,le,()=>hs(m),l.scope),m=l.update=()=>{w.dirty&&w.run()};m.id=l.uid,ze(l,!0),m()},U=(l,f,d)=>{f.component=l;const p=l.vnode.props;l.vnode=f,l.next=null,ka(l,f.props,p,d),Ka(l,f.children,d),Be(),Vs(l),je()},N=(l,f,d,p,g,y,I,_,w=!1)=>{const m=l&&l.children,E=l?l.shapeFlag:0,T=f.children,{patchFlag:A,shapeFlag:C}=f;if(A>0){if(A&128){Mt(m,T,d,p,g,y,I,_,w);return}else if(A&256){Ve(m,T,d,p,g,y,I,_,w);return}}C&8?(E&16&&Ee(m,g,y),T!==m&&h(d,T)):E&16?C&16?Mt(m,T,d,p,g,y,I,_,w):Ee(m,g,y,!0):(E&8&&h(d,""),C&16&&ge(T,d,p,g,y,I,_,w))},Ve=(l,f,d,p,g,y,I,_,w)=>{l=l||it,f=f||it;const m=l.length,E=f.length,T=Math.min(m,E);let A;for(A=0;A<T;A++){const C=f[A]=w?xe(f[A]):ye(f[A]);F(l[A],C,d,null,g,y,I,_,w)}m>E?Ee(l,g,y,!0,!1,T):ge(f,d,p,g,y,I,_,w,T)},Mt=(l,f,d,p,g,y,I,_,w)=>{let m=0;const E=f.length;let T=l.length-1,A=E-1;for(;m<=T&&m<=A;){const C=l[m],D=f[m]=w?xe(f[m]):ye(f[m]);if(pt(C,D))F(C,D,d,null,g,y,I,_,w);else break;m++}for(;m<=T&&m<=A;){const C=l[T],D=f[A]=w?xe(f[A]):ye(f[A]);if(pt(C,D))F(C,D,d,null,g,y,I,_,w);else break;T--,A--}if(m>T){if(m<=A){const C=A+1,D=C<E?f[C].el:p;for(;m<=A;)F(null,f[m]=w?xe(f[m]):ye(f[m]),d,D,g,y,I,_,w),m++}}else if(m>A)for(;m<=T;)me(l[m],g,y,!0),m++;else{const C=m,D=m,$=new Map;for(m=D;m<=A;m++){const oe=f[m]=w?xe(f[m]):ye(f[m]);oe.key!=null&&$.set(oe.key,m)}let j,K=0;const fe=A-D+1;let st=!1,Os=0;const ht=new Array(fe);for(m=0;m<fe;m++)ht[m]=0;for(m=C;m<=T;m++){const oe=l[m];if(K>=fe){me(oe,g,y,!0);continue}let be;if(oe.key!=null)be=$.get(oe.key);else for(j=D;j<=A;j++)if(ht[j-D]===0&&pt(oe,f[j])){be=j;break}be===void 0?me(oe,g,y,!0):(ht[be-D]=m+1,be>=Os?Os=be:st=!0,F(oe,f[be],d,null,g,y,I,_,w),K++)}const Ds=st?Ya(ht):it;for(j=Ds.length-1,m=fe-1;m>=0;m--){const oe=D+m,be=f[oe],Rs=oe+1<E?f[oe+1].el:p;ht[m]===0?F(null,be,d,Rs,g,y,I,_,w):st&&(j<0||m!==Ds[j]?Ue(be,d,Rs,2):j--)}}},Ue=(l,f,d,p,g=null)=>{const{el:y,type:I,transition:_,children:w,shapeFlag:m}=l;if(m&6){Ue(l.component.subTree,f,d,p);return}if(m&128){l.suspense.move(f,d,p);return}if(m&64){I.move(l,f,d,dt);return}if(I===de){s(y,f,d);for(let T=0;T<w.length;T++)Ue(w[T],f,d,p);s(l.anchor,f,d);return}if(I===An){L(l,f,d);return}if(p!==2&&m&1&&_)if(p===0)_.beforeEnter(y),s(y,f,d),te(()=>_.enter(y),g);else{const{leave:T,delayLeave:A,afterLeave:C}=_,D=()=>s(y,f,d),$=()=>{T(y,()=>{D(),C&&C()})};A?A(y,D,$):$()}else s(y,f,d)},me=(l,f,d,p=!1,g=!1)=>{const{type:y,props:I,ref:_,children:w,dynamicChildren:m,shapeFlag:E,patchFlag:T,dirs:A}=l;if(_!=null&&zn(_,null,d,l,!0),E&256){f.ctx.deactivate(l);return}const C=E&1&&A,D=!Vt(l);let $;if(D&&($=I&&I.onVnodeBeforeUnmount)&&_e($,f,l),E&6)po(l.component,d,p);else{if(E&128){l.suspense.unmount(d,p);return}C&&ke(l,null,f,"beforeUnmount"),E&64?l.type.remove(l,f,d,g,dt,p):m&&(y!==de||T>0&&T&64)?Ee(m,f,d,!1,!0):(y===de&&T&384||!g&&E&16)&&Ee(w,f,d),p&&As(l)}(D&&($=I&&I.onVnodeUnmounted)||C)&&te(()=>{$&&_e($,f,l),C&&ke(l,null,f,"unmounted")},d)},As=l=>{const{type:f,el:d,anchor:p,transition:g}=l;if(f===de){ho(d,p);return}if(f===An){W(l);return}const y=()=>{r(d),g&&!g.persisted&&g.afterLeave&&g.afterLeave()};if(l.shapeFlag&1&&g&&!g.persisted){const{leave:I,delayLeave:_}=g,w=()=>I(d,y);_?_(l.el,y,w):w()}else y()},ho=(l,f)=>{let d;for(;l!==f;)d=v(l),r(l),l=d;r(f)},po=(l,f,d)=>{const{bum:p,scope:g,update:y,subTree:I,um:_}=l;p&&yn(p),g.stop(),y&&(y.active=!1,me(I,l,f,d)),_&&te(_,f),te(()=>{l.isUnmounted=!0},f),f&&f.pendingBranch&&!f.isUnmounted&&l.asyncDep&&!l.asyncResolved&&l.suspenseId===f.pendingId&&(f.deps--,f.deps===0&&f.resolve())},Ee=(l,f,d,p=!1,g=!1,y=0)=>{for(let I=y;I<l.length;I++)me(l[I],f,d,p,g)},Pt=l=>l.shapeFlag&6?Pt(l.component.subTree):l.shapeFlag&128?l.suspense.next():v(l.anchor||l.el);let bn=!1;const Ts=(l,f,d)=>{l==null?f._vnode&&me(f._vnode,null,null,!0):F(f._vnode||null,l,f,null,null,null,d),bn||(bn=!0,Vs(),ni(),bn=!1),f._vnode=l},dt={p:F,um:me,m:Ue,r:As,mt:mn,mc:ge,pc:N,pbc:He,n:Pt,o:e};let Cs,xs;return{render:Ts,hydrate:Cs,createApp:Ha(Ts,Cs)}}function Sn({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function ze({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Ja(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function vi(e,t,n=!1){const s=e.children,r=t.children;if(x(s)&&x(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=xe(r[i]),a.el=o.el),n||vi(o,a)),a.type===cn&&(a.el=o.el)}}function Ya(e){const t=e.slice(),n=[0];let s,r,i,o,a;const c=e.length;for(s=0;s<c;s++){const u=e[s];if(u!==0){if(r=n[n.length-1],e[r]<u){t[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,e[n[a]]<u?i=a+1:o=a;u<e[n[i]]&&(i>0&&(t[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}function Ei(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Ei(t)}const Xa=e=>e.__isTeleport,de=Symbol.for("v-fgt"),cn=Symbol.for("v-txt"),Tt=Symbol.for("v-cmt"),An=Symbol.for("v-stc"),wt=[];let he=null;function Si(e=!1){wt.push(he=e?null:[])}function Za(){wt.pop(),he=wt[wt.length-1]||null}let Ct=1;function Xs(e){Ct+=e}function Qa(e){return e.dynamicChildren=Ct>0?he||it:null,Za(),Ct>0&&he&&he.push(e),e}function Ai(e,t,n,s,r,i){return Qa(G(e,t,n,s,r,i,!0))}function ec(e){return e?e.__v_isVNode===!0:!1}function pt(e,t){return e.type===t.type&&e.key===t.key}const Ti=({key:e})=>e??null,kt=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?q(e)||re(e)||O(e)?{i:Ie,r:e,k:t,f:!!n}:e:null);function G(e,t=null,n=null,s=0,r=null,i=e===de?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Ti(t),ref:t&&kt(t),scopeId:on,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Ie};return a?(ms(c,n),i&128&&e.normalize(c)):n&&(c.shapeFlag|=q(n)?8:16),Ct>0&&!o&&he&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&he.push(c),c}const Me=tc;function tc(e,t=null,n=null,s=0,r=null,i=!1){if((!e||e===ga)&&(e=Tt),ec(e)){const a=lt(e,t,!0);return n&&ms(a,n),Ct>0&&!i&&he&&(a.shapeFlag&6?he[he.indexOf(e)]=a:he.push(a)),a.patchFlag|=-2,a}if(uc(e)&&(e=e.__vccOpts),t){t=nc(t);let{class:a,style:c}=t;a&&!q(a)&&(t.class=ss(a)),k(c)&&(Yr(c)&&!x(c)&&(c=J({},c)),t.style=ns(c))}const o=q(e)?1:ma(e)?128:Xa(e)?64:k(e)?4:O(e)?2:0;return G(e,t,n,s,r,o,i,!0)}function nc(e){return e?Yr(e)||mi(e)?J({},e):e:null}function lt(e,t,n=!1,s=!1){const{props:r,ref:i,patchFlag:o,children:a,transition:c}=e,u=t?sc(r||{},t):r,h={__v_isVNode:!0,__v_skip:!0,type:e.type,props:u,key:u&&Ti(u),ref:t&&t.ref?n&&i?x(i)?i.concat(kt(t)):[i,kt(t)]:kt(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==de?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&lt(e.ssContent),ssFallback:e.ssFallback&&lt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&s&&(h.transition=c.clone(h)),h}function Ye(e=" ",t=0){return Me(cn,null,e,t)}function ye(e){return e==null||typeof e=="boolean"?Me(Tt):x(e)?Me(de,null,e.slice()):typeof e=="object"?xe(e):Me(cn,null,String(e))}function xe(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:lt(e)}function ms(e,t){let n=0;const{shapeFlag:s}=e;if(t==null)t=null;else if(x(t))n=16;else if(typeof t=="object")if(s&65){const r=t.default;r&&(r._c&&(r._d=!1),ms(e,r()),r._c&&(r._d=!0));return}else{n=32;const r=t._;!r&&!mi(t)?t._ctx=Ie:r===3&&Ie&&(Ie.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else O(t)?(t={default:t,_ctx:Ie},n=32):(t=String(t),s&64?(n=16,t=[Ye(t)]):n=8);e.children=t,e.shapeFlag|=n}function sc(...e){const t={};for(let n=0;n<e.length;n++){const s=e[n];for(const r in s)if(r==="class")t.class!==s.class&&(t.class=ss([t.class,s.class]));else if(r==="style")t.style=ns([t.style,s.style]);else if(Qt(r)){const i=t[r],o=s[r];o&&i!==o&&!(x(i)&&i.includes(o))&&(t[r]=i?[].concat(i,o):o)}else r!==""&&(t[r]=s[r])}return t}function _e(e,t,n,s=null){pe(e,t,7,[n,s])}const rc=hi();let ic=0;function oc(e,t,n){const s=e.type,r=(t?t.appContext:e.appContext)||rc,i={uid:ic++,vnode:e,type:s,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Co(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:_i(s,r),emitsOptions:ri(s,r),emit:null,emitted:null,propsDefaults:H,inheritAttrs:s.inheritAttrs,ctx:H,data:H,props:H,attrs:H,slots:H,refs:H,setupState:H,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=la.bind(null,i),e.ce&&e.ce(i),i}let ee=null,Gt,Wn;{const e=$r(),t=(n,s)=>{let r;return(r=e[n])||(r=e[n]=[]),r.push(s),i=>{r.length>1?r.forEach(o=>o(i)):r[0](i)}};Gt=t("__VUE_INSTANCE_SETTERS__",n=>ee=n),Wn=t("__VUE_SSR_SETTERS__",n=>ln=n)}const Ot=e=>{const t=ee;return Gt(e),e.scope.on(),()=>{e.scope.off(),Gt(t)}},Zs=()=>{ee&&ee.scope.off(),Gt(null)};function Ci(e){return e.vnode.shapeFlag&4}let ln=!1;function ac(e,t=!1){t&&Wn(t);const{props:n,children:s}=e.vnode,r=Ci(e);Ua(e,n,r,t),Wa(e,s);const i=r?cc(e,t):void 0;return t&&Wn(!1),i}function cc(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Pa);const{setup:s}=n;if(s){const r=e.setupContext=s.length>1?fc(e):null,i=Ot(e);Be();const o=Re(s,e,0,[e.props,r]);if(je(),i(),Dr(o)){if(o.then(Zs,Zs),t)return o.then(a=>{Qs(e,a,t)}).catch(a=>{sn(a,e,0)});e.asyncDep=o}else Qs(e,o,t)}else xi(e,t)}function Qs(e,t,n){O(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:k(t)&&(e.setupState=Qr(t)),xi(e,n)}let er;function xi(e,t,n){const s=e.type;if(!e.render){if(!t&&er&&!s.render){const r=s.template||ps(e).template;if(r){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:a,compilerOptions:c}=s,u=J(J({isCustomElement:i,delimiters:a},o),c);s.render=er(r,u)}}e.render=s.render||le}{const r=Ot(e);Be();try{Fa(e)}finally{je(),r()}}}const lc={get(e,t){return se(e,"get",""),e[t]}};function fc(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,lc),slots:e.slots,emit:e.emit,expose:t}}function bs(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Qr(Yo(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in _t)return _t[n](e)},has(t,n){return n in t||n in _t}}))}function uc(e){return O(e)&&"__vccOpts"in e}const dc=(e,t)=>Xo(e,t,ln),hc="3.4.27";/**
* @vue/runtime-dom v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const pc="http://www.w3.org/2000/svg",gc="http://www.w3.org/1998/Math/MathML",Oe=typeof document<"u"?document:null,tr=Oe&&Oe.createElement("template"),mc={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,s)=>{const r=t==="svg"?Oe.createElementNS(pc,e):t==="mathml"?Oe.createElementNS(gc,e):Oe.createElement(e,n?{is:n}:void 0);return e==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:e=>Oe.createTextNode(e),createComment:e=>Oe.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Oe.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,s,r,i){const o=n?n.previousSibling:t.lastChild;if(r&&(r===i||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{tr.innerHTML=s==="svg"?`<svg>${e}</svg>`:s==="mathml"?`<math>${e}</math>`:e;const a=tr.content;if(s==="svg"||s==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}t.insertBefore(a,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},bc=Symbol("_vtc");function _c(e,t,n){const s=e[bc];s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const nr=Symbol("_vod"),yc=Symbol("_vsh"),wc=Symbol(""),Ic=/(^|;)\s*display\s*:/;function vc(e,t,n){const s=e.style,r=q(n);let i=!1;if(n&&!r){if(t)if(q(t))for(const o of t.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&zt(s,a,"")}else for(const o in t)n[o]==null&&zt(s,o,"");for(const o in n)o==="display"&&(i=!0),zt(s,o,n[o])}else if(r){if(t!==n){const o=s[wc];o&&(n+=";"+o),s.cssText=n,i=Ic.test(n)}}else t&&e.removeAttribute("style");nr in e&&(e[nr]=i?s.display:"",e[yc]&&(s.display="none"))}const sr=/\s*!important$/;function zt(e,t,n){if(x(n))n.forEach(s=>zt(e,t,s));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const s=Ec(e,t);sr.test(n)?e.setProperty(ft(s),n.replace(sr,""),"important"):e[s]=n}}const rr=["Webkit","Moz","ms"],Tn={};function Ec(e,t){const n=Tn[t];if(n)return n;let s=ct(t);if(s!=="filter"&&s in e)return Tn[t]=s;s=Pr(s);for(let r=0;r<rr.length;r++){const i=rr[r]+s;if(i in e)return Tn[t]=i}return t}const ir="http://www.w3.org/1999/xlink";function Sc(e,t,n,s,r){if(s&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(ir,t.slice(6,t.length)):e.setAttributeNS(ir,t,n);else{const i=To(t);n==null||i&&!Lr(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function Ac(e,t,n,s,r,i,o){if(t==="innerHTML"||t==="textContent"){s&&o(s,r,i),e[t]=n??"";return}const a=e.tagName;if(t==="value"&&a!=="PROGRESS"&&!a.includes("-")){const u=a==="OPTION"?e.getAttribute("value")||"":e.value,h=n??"";(u!==h||!("_value"in e))&&(e.value=h),n==null&&e.removeAttribute(t),e._value=n;return}let c=!1;if(n===""||n==null){const u=typeof e[t];u==="boolean"?n=Lr(n):n==null&&u==="string"?(n="",c=!0):u==="number"&&(n=0,c=!0)}try{e[t]=n}catch{}c&&e.removeAttribute(t)}function Tc(e,t,n,s){e.addEventListener(t,n,s)}function Cc(e,t,n,s){e.removeEventListener(t,n,s)}const or=Symbol("_vei");function xc(e,t,n,s,r=null){const i=e[or]||(e[or]={}),o=i[t];if(s&&o)o.value=s;else{const[a,c]=Oc(t);if(s){const u=i[t]=Mc(s,r);Tc(e,a,u,c)}else o&&(Cc(e,a,o,c),i[t]=void 0)}}const ar=/(?:Once|Passive|Capture)$/;function Oc(e){let t;if(ar.test(e)){t={};let s;for(;s=e.match(ar);)e=e.slice(0,e.length-s[0].length),t[s[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):ft(e.slice(2)),t]}let Cn=0;const Dc=Promise.resolve(),Rc=()=>Cn||(Dc.then(()=>Cn=0),Cn=Date.now());function Mc(e,t){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;pe(Pc(s,n.value),t,5,[s])};return n.value=e,n.attached=Rc(),n}function Pc(e,t){if(x(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(s=>r=>!r._stopped&&s&&s(r))}else return t}const cr=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Fc=(e,t,n,s,r,i,o,a,c)=>{const u=r==="svg";t==="class"?_c(e,s,u):t==="style"?vc(e,n,s):Qt(t)?Qn(t)||xc(e,t,n,s,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):$c(e,t,s,u))?Ac(e,t,s,i,o,a,c):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),Sc(e,t,s,u))};function $c(e,t,n,s){if(s)return!!(t==="innerHTML"||t==="textContent"||t in e&&cr(t)&&O(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const r=e.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return cr(t)&&q(n)?!1:t in e}const Lc=J({patchProp:Fc},mc);let lr;function Nc(){return lr||(lr=qa(Lc))}const Bc=(...e)=>{const t=Nc().createApp(...e),{mount:n}=t;return t.mount=s=>{const r=Hc(s);if(!r)return;const i=t._component;!O(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,jc(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},t};function jc(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Hc(e){return q(e)?document.querySelector(e):e}const Vc="/vite.svg",Uc="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20aria-hidden='true'%20role='img'%20class='iconify%20iconify--logos'%20width='37.07'%20height='36'%20preserveAspectRatio='xMidYMid%20meet'%20viewBox='0%200%20256%20198'%3e%3cpath%20fill='%2341B883'%20d='M204.8%200H256L128%20220.8L0%200h97.92L128%2051.2L157.44%200h47.36Z'%3e%3c/path%3e%3cpath%20fill='%2341B883'%20d='m0%200l128%20220.8L256%200h-51.2L128%20132.48L50.56%200H0Z'%3e%3c/path%3e%3cpath%20fill='%2335495E'%20d='M50.56%200L128%20133.12L204.8%200h-47.36L128%2051.2L97.92%200H50.56Z'%3e%3c/path%3e%3c/svg%3e",Oi=(e,t)=>{const n=e.__vccOpts||e;for(const[s,r]of t)n[s]=r;return n},fn=e=>(ii("data-v-4b8d1567"),e=e(),oi(),e),kc={class:"card"},zc=fn(()=>G("p",null,[Ye(" Edit "),G("code",null,"components/HelloWorld.vue"),Ye(" to test HMR ")],-1)),Wc=fn(()=>G("p",null,[Ye(" Check out "),G("a",{href:"https://vuejs.org/guide/quick-start.html#local",target:"_blank"},"create-vue"),Ye(", the official Vue + Vite starter ")],-1)),Kc=fn(()=>G("p",null,[Ye(" Install "),G("a",{href:"https://github.com/vuejs/language-tools",target:"_blank"},"Volar"),Ye(" in your IDE for a better DX ")],-1)),qc=fn(()=>G("p",{class:"read-the-docs"},"Click on the Vite and Vue logos to learn more",-1)),Gc={__name:"HelloWorld",props:{msg:String},setup(e){const t=Zo(0);return(n,s)=>(Si(),Ai(de,null,[G("h1",null,Ps(e.msg),1),G("div",kc,[G("button",{type:"button",onClick:s[0]||(s[0]=r=>t.value++)},"count is "+Ps(t.value),1),zc]),Wc,Kc,qc],64))}},Jc=Oi(Gc,[["__scopeId","data-v-4b8d1567"]]),Yc=e=>(ii("data-v-d6420450"),e=e(),oi(),e),Xc=Yc(()=>G("div",null,[G("a",{href:"https://vitejs.dev",target:"_blank"},[G("img",{src:Vc,class:"logo",alt:"Vite logo"})]),G("a",{href:"https://vuejs.org/",target:"_blank"},[G("img",{src:Uc,class:"logo vue",alt:"Vue logo"})])],-1)),Zc={__name:"App",setup(e){return(t,n)=>(Si(),Ai(de,null,[Xc,Me(Jc,{msg:"Vite + Vue"})],64))}},Qc=Oi(Zc,[["__scopeId","data-v-d6420450"]]);var fr={};/**
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
 */const Di=function(e){const t=[];let n=0;for(let s=0;s<e.length;s++){let r=e.charCodeAt(s);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=r&63|128):(r&64512)===55296&&s+1<e.length&&(e.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(e.charCodeAt(++s)&1023),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=r&63|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=r&63|128)}return t},el=function(e){const t=[];let n=0,s=0;for(;n<e.length;){const r=e[n++];if(r<128)t[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=e[n++];t[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=e[n++],o=e[n++],a=e[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;t[s++]=String.fromCharCode(55296+(c>>10)),t[s++]=String.fromCharCode(56320+(c&1023))}else{const i=e[n++],o=e[n++];t[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return t.join("")},Ri={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<e.length;r+=3){const i=e[r],o=r+1<e.length,a=o?e[r+1]:0,c=r+2<e.length,u=c?e[r+2]:0,h=i>>2,b=(i&3)<<4|a>>4;let v=(a&15)<<2|u>>6,S=u&63;c||(S=64,o||(v=64)),s.push(n[h],n[b],n[v],n[S])}return s.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Di(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):el(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<e.length;){const i=n[e.charAt(r++)],a=r<e.length?n[e.charAt(r)]:0;++r;const u=r<e.length?n[e.charAt(r)]:64;++r;const b=r<e.length?n[e.charAt(r)]:64;if(++r,i==null||a==null||u==null||b==null)throw new tl;const v=i<<2|a>>4;if(s.push(v),u!==64){const S=a<<4&240|u>>2;if(s.push(S),b!==64){const V=u<<6&192|b;s.push(V)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class tl extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const nl=function(e){const t=Di(e);return Ri.encodeByteArray(t,!0)},Mi=function(e){return nl(e).replace(/\./g,"")},sl=function(e){try{return Ri.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function rl(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const il=()=>rl().__FIREBASE_DEFAULTS__,ol=()=>{if(typeof process>"u"||typeof fr>"u")return;const e=fr.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},al=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&sl(e[1]);return t&&JSON.parse(t)},cl=()=>{try{return il()||ol()||al()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Pi=()=>{var e;return(e=cl())===null||e===void 0?void 0:e.config};/**
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
 */class ll{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,s))}}}function fl(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function Fi(){try{return typeof indexedDB=="object"}catch{return!1}}function $i(){return new Promise((e,t)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;t(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){t(n)}})}function ul(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const dl="FirebaseError";class nt extends Error{constructor(t,n,s){super(n),this.code=t,this.customData=s,this.name=dl,Object.setPrototypeOf(this,nt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,un.prototype.create)}}class un{constructor(t,n,s){this.service=t,this.serviceName=n,this.errors=s}create(t,...n){const s=n[0]||{},r=`${this.service}/${t}`,i=this.errors[t],o=i?hl(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new nt(r,a,s)}}function hl(e,t){return e.replace(pl,(n,s)=>{const r=t[s];return r!=null?String(r):`<${s}?>`})}const pl=/\{\$([^}]+)}/g;function Jt(e,t){if(e===t)return!0;const n=Object.keys(e),s=Object.keys(t);for(const r of n){if(!s.includes(r))return!1;const i=e[r],o=t[r];if(ur(i)&&ur(o)){if(!Jt(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function ur(e){return e!==null&&typeof e=="object"}/**
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
 */const gl=1e3,ml=2,bl=4*60*60*1e3,_l=.5;function dr(e,t=gl,n=ml){const s=t*Math.pow(n,e),r=Math.round(_l*s*(Math.random()-.5)*2);return Math.min(bl,s+r)}/**
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
 */function Li(e){return e&&e._delegate?e._delegate:e}class Ne{constructor(t,n,s){this.name=t,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const We="[DEFAULT]";/**
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
 */class yl{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const s=new ll;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const s=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),r=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Il(t))try{this.getOrInitializeService({instanceIdentifier:We})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(t=We){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=We){return this.instances.has(t)}getOptions(t=We){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(t,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(t),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&t(o,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let s=this.instances.get(t);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:wl(t),options:n}),this.instances.set(t,s),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(s,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,s)}catch{}return s||null}normalizeInstanceIdentifier(t=We){return this.component?this.component.multipleInstances?t:We:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function wl(e){return e===We?void 0:e}function Il(e){return e.instantiationMode==="EAGER"}/**
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
 */class vl{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new yl(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var B;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(B||(B={}));const El={debug:B.DEBUG,verbose:B.VERBOSE,info:B.INFO,warn:B.WARN,error:B.ERROR,silent:B.SILENT},Sl=B.INFO,Al={[B.DEBUG]:"log",[B.VERBOSE]:"log",[B.INFO]:"info",[B.WARN]:"warn",[B.ERROR]:"error"},Tl=(e,t,...n)=>{if(t<e.logLevel)return;const s=new Date().toISOString(),r=Al[t];if(r)console[r](`[${s}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Ni{constructor(t){this.name=t,this._logLevel=Sl,this._logHandler=Tl,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in B))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?El[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,B.DEBUG,...t),this._logHandler(this,B.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,B.VERBOSE,...t),this._logHandler(this,B.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,B.INFO,...t),this._logHandler(this,B.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,B.WARN,...t),this._logHandler(this,B.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,B.ERROR,...t),this._logHandler(this,B.ERROR,...t)}}const Cl=(e,t)=>t.some(n=>e instanceof n);let hr,pr;function xl(){return hr||(hr=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ol(){return pr||(pr=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Bi=new WeakMap,Kn=new WeakMap,ji=new WeakMap,xn=new WeakMap,_s=new WeakMap;function Dl(e){const t=new Promise((n,s)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{n(Pe(e.result)),r()},o=()=>{s(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&Bi.set(n,e)}).catch(()=>{}),_s.set(t,e),t}function Rl(e){if(Kn.has(e))return;const t=new Promise((n,s)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)});Kn.set(e,t)}let qn={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Kn.get(e);if(t==="objectStoreNames")return e.objectStoreNames||ji.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Pe(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Ml(e){qn=e(qn)}function Pl(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const s=e.call(On(this),t,...n);return ji.set(s,t.sort?t.sort():[t]),Pe(s)}:Ol().includes(e)?function(...t){return e.apply(On(this),t),Pe(Bi.get(this))}:function(...t){return Pe(e.apply(On(this),t))}}function Fl(e){return typeof e=="function"?Pl(e):(e instanceof IDBTransaction&&Rl(e),Cl(e,xl())?new Proxy(e,qn):e)}function Pe(e){if(e instanceof IDBRequest)return Dl(e);if(xn.has(e))return xn.get(e);const t=Fl(e);return t!==e&&(xn.set(e,t),_s.set(t,e)),t}const On=e=>_s.get(e);function Hi(e,t,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(e,t),a=Pe(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Pe(o.result),c.oldVersion,c.newVersion,Pe(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",u=>r(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const $l=["get","getKey","getAll","getAllKeys","count"],Ll=["put","add","delete","clear"],Dn=new Map;function gr(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Dn.get(t))return Dn.get(t);const n=t.replace(/FromIndex$/,""),s=t!==n,r=Ll.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||$l.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let u=c.store;return s&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),r&&c.done]))[0]};return Dn.set(t,i),i}Ml(e=>({...e,get:(t,n,s)=>gr(t,n)||e.get(t,n,s),has:(t,n)=>!!gr(t,n)||e.has(t,n)}));/**
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
 */class Nl{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Bl(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Bl(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Gn="@firebase/app",mr="0.10.2";/**
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
 */const Xe=new Ni("@firebase/app"),jl="@firebase/app-compat",Hl="@firebase/analytics-compat",Vl="@firebase/analytics",Ul="@firebase/app-check-compat",kl="@firebase/app-check",zl="@firebase/auth",Wl="@firebase/auth-compat",Kl="@firebase/database",ql="@firebase/database-compat",Gl="@firebase/functions",Jl="@firebase/functions-compat",Yl="@firebase/installations",Xl="@firebase/installations-compat",Zl="@firebase/messaging",Ql="@firebase/messaging-compat",ef="@firebase/performance",tf="@firebase/performance-compat",nf="@firebase/remote-config",sf="@firebase/remote-config-compat",rf="@firebase/storage",of="@firebase/storage-compat",af="@firebase/firestore",cf="@firebase/firestore-compat",lf="firebase";/**
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
 */const Jn="[DEFAULT]",ff={[Gn]:"fire-core",[jl]:"fire-core-compat",[Vl]:"fire-analytics",[Hl]:"fire-analytics-compat",[kl]:"fire-app-check",[Ul]:"fire-app-check-compat",[zl]:"fire-auth",[Wl]:"fire-auth-compat",[Kl]:"fire-rtdb",[ql]:"fire-rtdb-compat",[Gl]:"fire-fn",[Jl]:"fire-fn-compat",[Yl]:"fire-iid",[Xl]:"fire-iid-compat",[Zl]:"fire-fcm",[Ql]:"fire-fcm-compat",[ef]:"fire-perf",[tf]:"fire-perf-compat",[nf]:"fire-rc",[sf]:"fire-rc-compat",[rf]:"fire-gcs",[of]:"fire-gcs-compat",[af]:"fire-fst",[cf]:"fire-fst-compat","fire-js":"fire-js",[lf]:"fire-js-all"};/**
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
 */const Yt=new Map,uf=new Map,Yn=new Map;function br(e,t){try{e.container.addComponent(t)}catch(n){Xe.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Ze(e){const t=e.name;if(Yn.has(t))return Xe.debug(`There were multiple attempts to register component ${t}.`),!1;Yn.set(t,e);for(const n of Yt.values())br(n,e);for(const n of uf.values())br(n,e);return!0}function dn(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const df={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Fe=new un("app","Firebase",df);/**
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
 */class hf{constructor(t,n,s){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Ne("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Fe.create("app-deleted",{appName:this._name})}}function Vi(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const s=Object.assign({name:Jn,automaticDataCollectionEnabled:!1},t),r=s.name;if(typeof r!="string"||!r)throw Fe.create("bad-app-name",{appName:String(r)});if(n||(n=Pi()),!n)throw Fe.create("no-options");const i=Yt.get(r);if(i){if(Jt(n,i.options)&&Jt(s,i.config))return i;throw Fe.create("duplicate-app",{appName:r})}const o=new vl(r);for(const c of Yn.values())o.addComponent(c);const a=new hf(n,s,o);return Yt.set(r,a),a}function pf(e=Jn){const t=Yt.get(e);if(!t&&e===Jn&&Pi())return Vi();if(!t)throw Fe.create("no-app",{appName:e});return t}function $e(e,t,n){var s;let r=(s=ff[e])!==null&&s!==void 0?s:e;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${t}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Xe.warn(a.join(" "));return}Ze(new Ne(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
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
 */const gf="firebase-heartbeat-database",mf=1,xt="firebase-heartbeat-store";let Rn=null;function Ui(){return Rn||(Rn=Hi(gf,mf,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(xt)}catch(n){console.warn(n)}}}}).catch(e=>{throw Fe.create("idb-open",{originalErrorMessage:e.message})})),Rn}async function bf(e){try{const n=(await Ui()).transaction(xt),s=await n.objectStore(xt).get(ki(e));return await n.done,s}catch(t){if(t instanceof nt)Xe.warn(t.message);else{const n=Fe.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Xe.warn(n.message)}}}async function _r(e,t){try{const s=(await Ui()).transaction(xt,"readwrite");await s.objectStore(xt).put(t,ki(e)),await s.done}catch(n){if(n instanceof nt)Xe.warn(n.message);else{const s=Fe.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Xe.warn(s.message)}}}function ki(e){return`${e.name}!${e.options.appId}`}/**
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
 */const _f=1024,yf=30*24*60*60*1e3;class wf{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new vf(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var t,n;const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=yr();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=yf}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=yr(),{heartbeatsToSend:s,unsentEntries:r}=If(this._heartbeatsCache.heartbeats),i=Mi(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function yr(){return new Date().toISOString().substring(0,10)}function If(e,t=_f){const n=[];let s=e.slice();for(const r of e){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),wr(n)>t){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),wr(n)>t){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class vf{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Fi()?$i().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await bf(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return _r(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return _r(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function wr(e){return Mi(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function Ef(e){Ze(new Ne("platform-logger",t=>new Nl(t),"PRIVATE")),Ze(new Ne("heartbeat",t=>new wf(t),"PRIVATE")),$e(Gn,mr,e),$e(Gn,mr,"esm2017"),$e("fire-js","")}Ef("");var Sf="firebase",Af="10.11.1";/**
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
 */$e(Sf,Af,"app");const zi="@firebase/installations",ys="0.6.6";/**
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
 */const Wi=1e4,Ki=`w:${ys}`,qi="FIS_v2",Tf="https://firebaseinstallations.googleapis.com/v1",Cf=60*60*1e3,xf="installations",Of="Installations";/**
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
 */const Df={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Qe=new un(xf,Of,Df);function Gi(e){return e instanceof nt&&e.code.includes("request-failed")}/**
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
 */function Ji({projectId:e}){return`${Tf}/projects/${e}/installations`}function Yi(e){return{token:e.token,requestStatus:2,expiresIn:Mf(e.expiresIn),creationTime:Date.now()}}async function Xi(e,t){const s=(await t.json()).error;return Qe.create("request-failed",{requestName:e,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function Zi({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function Rf(e,{refreshToken:t}){const n=Zi(e);return n.append("Authorization",Pf(t)),n}async function Qi(e){const t=await e();return t.status>=500&&t.status<600?e():t}function Mf(e){return Number(e.replace("s","000"))}function Pf(e){return`${qi} ${e}`}/**
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
 */async function Ff({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const s=Ji(e),r=Zi(e),i=t.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&r.append("x-firebase-client",u)}const o={fid:n,authVersion:qi,appId:e.appId,sdkVersion:Ki},a={method:"POST",headers:r,body:JSON.stringify(o)},c=await Qi(()=>fetch(s,a));if(c.ok){const u=await c.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:Yi(u.authToken)}}else throw await Xi("Create Installation",c)}/**
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
 */function eo(e){return new Promise(t=>{setTimeout(t,e)})}/**
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
 */function $f(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const Lf=/^[cdef][\w-]{21}$/,Xn="";function Nf(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=Bf(e);return Lf.test(n)?n:Xn}catch{return Xn}}function Bf(e){return $f(e).substr(0,22)}/**
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
 */function hn(e){return`${e.appName}!${e.appId}`}/**
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
 */const to=new Map;function no(e,t){const n=hn(e);so(n,t),jf(n,t)}function so(e,t){const n=to.get(e);if(n)for(const s of n)s(t)}function jf(e,t){const n=Hf();n&&n.postMessage({key:e,fid:t}),Vf()}let qe=null;function Hf(){return!qe&&"BroadcastChannel"in self&&(qe=new BroadcastChannel("[Firebase] FID Change"),qe.onmessage=e=>{so(e.data.key,e.data.fid)}),qe}function Vf(){to.size===0&&qe&&(qe.close(),qe=null)}/**
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
 */const Uf="firebase-installations-database",kf=1,et="firebase-installations-store";let Mn=null;function ws(){return Mn||(Mn=Hi(Uf,kf,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(et)}}})),Mn}async function Xt(e,t){const n=hn(e),r=(await ws()).transaction(et,"readwrite"),i=r.objectStore(et),o=await i.get(n);return await i.put(t,n),await r.done,(!o||o.fid!==t.fid)&&no(e,t.fid),t}async function ro(e){const t=hn(e),s=(await ws()).transaction(et,"readwrite");await s.objectStore(et).delete(t),await s.done}async function pn(e,t){const n=hn(e),r=(await ws()).transaction(et,"readwrite"),i=r.objectStore(et),o=await i.get(n),a=t(o);return a===void 0?await i.delete(n):await i.put(a,n),await r.done,a&&(!o||o.fid!==a.fid)&&no(e,a.fid),a}/**
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
 */async function Is(e){let t;const n=await pn(e.appConfig,s=>{const r=zf(s),i=Wf(e,r);return t=i.registrationPromise,i.installationEntry});return n.fid===Xn?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function zf(e){const t=e||{fid:Nf(),registrationStatus:0};return io(t)}function Wf(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const r=Promise.reject(Qe.create("app-offline"));return{installationEntry:t,registrationPromise:r}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},s=Kf(e,n);return{installationEntry:n,registrationPromise:s}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:qf(e)}:{installationEntry:t}}async function Kf(e,t){try{const n=await Ff(e,t);return Xt(e.appConfig,n)}catch(n){throw Gi(n)&&n.customData.serverCode===409?await ro(e.appConfig):await Xt(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function qf(e){let t=await Ir(e.appConfig);for(;t.registrationStatus===1;)await eo(100),t=await Ir(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await Is(e);return s||n}return t}function Ir(e){return pn(e,t=>{if(!t)throw Qe.create("installation-not-found");return io(t)})}function io(e){return Gf(e)?{fid:e.fid,registrationStatus:0}:e}function Gf(e){return e.registrationStatus===1&&e.registrationTime+Wi<Date.now()}/**
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
 */async function Jf({appConfig:e,heartbeatServiceProvider:t},n){const s=Yf(e,n),r=Rf(e,n),i=t.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&r.append("x-firebase-client",u)}const o={installation:{sdkVersion:Ki,appId:e.appId}},a={method:"POST",headers:r,body:JSON.stringify(o)},c=await Qi(()=>fetch(s,a));if(c.ok){const u=await c.json();return Yi(u)}else throw await Xi("Generate Auth Token",c)}function Yf(e,{fid:t}){return`${Ji(e)}/${t}/authTokens:generate`}/**
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
 */async function vs(e,t=!1){let n;const s=await pn(e.appConfig,i=>{if(!oo(i))throw Qe.create("not-registered");const o=i.authToken;if(!t&&Qf(o))return i;if(o.requestStatus===1)return n=Xf(e,t),i;{if(!navigator.onLine)throw Qe.create("app-offline");const a=tu(i);return n=Zf(e,a),a}});return n?await n:s.authToken}async function Xf(e,t){let n=await vr(e.appConfig);for(;n.authToken.requestStatus===1;)await eo(100),n=await vr(e.appConfig);const s=n.authToken;return s.requestStatus===0?vs(e,t):s}function vr(e){return pn(e,t=>{if(!oo(t))throw Qe.create("not-registered");const n=t.authToken;return nu(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function Zf(e,t){try{const n=await Jf(e,t),s=Object.assign(Object.assign({},t),{authToken:n});return await Xt(e.appConfig,s),n}catch(n){if(Gi(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await ro(e.appConfig);else{const s=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await Xt(e.appConfig,s)}throw n}}function oo(e){return e!==void 0&&e.registrationStatus===2}function Qf(e){return e.requestStatus===2&&!eu(e)}function eu(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+Cf}function tu(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function nu(e){return e.requestStatus===1&&e.requestTime+Wi<Date.now()}/**
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
 */async function su(e){const t=e,{installationEntry:n,registrationPromise:s}=await Is(t);return s?s.catch(console.error):vs(t).catch(console.error),n.fid}/**
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
 */async function ru(e,t=!1){const n=e;return await iu(n),(await vs(n,t)).token}async function iu(e){const{registrationPromise:t}=await Is(e);t&&await t}/**
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
 */function ou(e){if(!e||!e.options)throw Pn("App Configuration");if(!e.name)throw Pn("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw Pn(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function Pn(e){return Qe.create("missing-app-config-values",{valueName:e})}/**
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
 */const ao="installations",au="installations-internal",cu=e=>{const t=e.getProvider("app").getImmediate(),n=ou(t),s=dn(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},lu=e=>{const t=e.getProvider("app").getImmediate(),n=dn(t,ao).getImmediate();return{getId:()=>su(n),getToken:r=>ru(n,r)}};function fu(){Ze(new Ne(ao,cu,"PUBLIC")),Ze(new Ne(au,lu,"PRIVATE"))}fu();$e(zi,ys);$e(zi,ys,"esm2017");/**
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
 */const Zt="analytics",uu="firebase_id",du="origin",hu=60*1e3,pu="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Es="https://www.googletagmanager.com/gtag/js";/**
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
 */const ne=new Ni("@firebase/analytics");/**
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
 */const gu={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},ae=new un("analytics","Analytics",gu);/**
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
 */function mu(e){if(!e.startsWith(Es)){const t=ae.create("invalid-gtag-resource",{gtagURL:e});return ne.warn(t.message),""}return e}function co(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function bu(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function _u(e,t){const n=bu("firebase-js-sdk-policy",{createScriptURL:mu}),s=document.createElement("script"),r=`${Es}?l=${e}&id=${t}`;s.src=n?n==null?void 0:n.createScriptURL(r):r,s.async=!0,document.head.appendChild(s)}function yu(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function wu(e,t,n,s,r,i){const o=s[r];try{if(o)await t[o];else{const c=(await co(n)).find(u=>u.measurementId===r);c&&await t[c.appId]}}catch(a){ne.error(a)}e("config",r,i)}async function Iu(e,t,n,s,r){try{let i=[];if(r&&r.send_to){let o=r.send_to;Array.isArray(o)||(o=[o]);const a=await co(n);for(const c of o){const u=a.find(b=>b.measurementId===c),h=u&&t[u.appId];if(h)i.push(h);else{i=[];break}}}i.length===0&&(i=Object.values(t)),await Promise.all(i),e("event",s,r||{})}catch(i){ne.error(i)}}function vu(e,t,n,s){async function r(i,...o){try{if(i==="event"){const[a,c]=o;await Iu(e,t,n,a,c)}else if(i==="config"){const[a,c]=o;await wu(e,t,n,s,a,c)}else if(i==="consent"){const[a]=o;e("consent","update",a)}else if(i==="get"){const[a,c,u]=o;e("get",a,c,u)}else if(i==="set"){const[a]=o;e("set",a)}else e(i,...o)}catch(a){ne.error(a)}}return r}function Eu(e,t,n,s,r){let i=function(...o){window[s].push(arguments)};return window[r]&&typeof window[r]=="function"&&(i=window[r]),window[r]=vu(i,e,t,n),{gtagCore:i,wrappedGtag:window[r]}}function Su(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(Es)&&n.src.includes(e))return n;return null}/**
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
 */const Au=30,Tu=1e3;class Cu{constructor(t={},n=Tu){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const lo=new Cu;function xu(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function Ou(e){var t;const{appId:n,apiKey:s}=e,r={method:"GET",headers:xu(s)},i=pu.replace("{app-id}",n),o=await fetch(i,r);if(o.status!==200&&o.status!==304){let a="";try{const c=await o.json();!((t=c.error)===null||t===void 0)&&t.message&&(a=c.error.message)}catch{}throw ae.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function Du(e,t=lo,n){const{appId:s,apiKey:r,measurementId:i}=e.options;if(!s)throw ae.create("no-app-id");if(!r){if(i)return{measurementId:i,appId:s};throw ae.create("no-api-key")}const o=t.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new Pu;return setTimeout(async()=>{a.abort()},hu),fo({appId:s,apiKey:r,measurementId:i},o,a,t)}async function fo(e,{throttleEndTimeMillis:t,backoffCount:n},s,r=lo){var i;const{appId:o,measurementId:a}=e;try{await Ru(s,t)}catch(c){if(a)return ne.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw c}try{const c=await Ou(e);return r.deleteThrottleMetadata(o),c}catch(c){const u=c;if(!Mu(u)){if(r.deleteThrottleMetadata(o),a)return ne.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:a};throw c}const h=Number((i=u==null?void 0:u.customData)===null||i===void 0?void 0:i.httpStatus)===503?dr(n,r.intervalMillis,Au):dr(n,r.intervalMillis),b={throttleEndTimeMillis:Date.now()+h,backoffCount:n+1};return r.setThrottleMetadata(o,b),ne.debug(`Calling attemptFetch again in ${h} millis`),fo(e,b,s,r)}}function Ru(e,t){return new Promise((n,s)=>{const r=Math.max(t-Date.now(),0),i=setTimeout(n,r);e.addEventListener(()=>{clearTimeout(i),s(ae.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function Mu(e){if(!(e instanceof nt)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class Pu{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function Fu(e,t,n,s,r){if(r&&r.global){e("event",n,s);return}else{const i=await t,o=Object.assign(Object.assign({},s),{send_to:i});e("event",n,o)}}/**
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
 */async function $u(){if(Fi())try{await $i()}catch(e){return ne.warn(ae.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return ne.warn(ae.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Lu(e,t,n,s,r,i,o){var a;const c=Du(e);c.then(S=>{n[S.measurementId]=S.appId,e.options.measurementId&&S.measurementId!==e.options.measurementId&&ne.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${S.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(S=>ne.error(S)),t.push(c);const u=$u().then(S=>{if(S)return s.getId()}),[h,b]=await Promise.all([c,u]);Su(i)||_u(i,h.measurementId),r("js",new Date);const v=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return v[du]="firebase",v.update=!0,b!=null&&(v[uu]=b),r("config",h.measurementId,v),h.measurementId}/**
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
 */class Nu{constructor(t){this.app=t}_delete(){return delete It[this.app.options.appId],Promise.resolve()}}let It={},Er=[];const Sr={};let Fn="dataLayer",Bu="gtag",Ar,uo,Tr=!1;function ju(){const e=[];if(fl()&&e.push("This is a browser extension environment."),ul()||e.push("Cookies are not available."),e.length>0){const t=e.map((s,r)=>`(${r+1}) ${s}`).join(" "),n=ae.create("invalid-analytics-context",{errorInfo:t});ne.warn(n.message)}}function Hu(e,t,n){ju();const s=e.options.appId;if(!s)throw ae.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)ne.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw ae.create("no-api-key");if(It[s]!=null)throw ae.create("already-exists",{id:s});if(!Tr){yu(Fn);const{wrappedGtag:i,gtagCore:o}=Eu(It,Er,Sr,Fn,Bu);uo=i,Ar=o,Tr=!0}return It[s]=Lu(e,Er,Sr,t,Ar,Fn,n),new Nu(e)}function Vu(e=pf()){e=Li(e);const t=dn(e,Zt);return t.isInitialized()?t.getImmediate():Uu(e)}function Uu(e,t={}){const n=dn(e,Zt);if(n.isInitialized()){const r=n.getImmediate();if(Jt(t,n.getOptions()))return r;throw ae.create("already-initialized")}return n.initialize({options:t})}function ku(e,t,n,s){e=Li(e),Fu(uo,It[e.app.options.appId],t,n,s).catch(r=>ne.error(r))}const Cr="@firebase/analytics",xr="0.10.2";function zu(){Ze(new Ne(Zt,(t,{options:n})=>{const s=t.getProvider("app").getImmediate(),r=t.getProvider("installations-internal").getImmediate();return Hu(s,r,n)},"PUBLIC")),Ze(new Ne("analytics-internal",e,"PRIVATE")),$e(Cr,xr),$e(Cr,xr,"esm2017");function e(t){try{const n=t.getProvider(Zt).getImmediate();return{logEvent:(s,r,i)=>ku(n,s,r,i)}}catch(n){throw ae.create("interop-component-reg-failed",{reason:n})}}}zu();const Wu={apiKey:"AIzaSyD0g3wQjw73bGPpU2Id1ZrjKMtx73mo6-w",authDomain:"firetest-98x8.firebaseapp.com",projectId:"firetest-98x8",storageBucket:"firetest-98x8.appspot.com",messagingSenderId:"877385955451",appId:"1:877385955451:web:f526a642c515c39b328ade",measurementId:"G-60GCBFQD45"},Ku=Vi(Wu);Vu(Ku);Bc(Qc).mount("#app");
