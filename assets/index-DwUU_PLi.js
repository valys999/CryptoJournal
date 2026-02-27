var Gy=Object.defineProperty;var Yy=(n,t,e)=>t in n?Gy(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var $=(n,t,e)=>Yy(n,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();const Xy=()=>{};var zh={};/**
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
 */const zp=function(n){const t=[];let e=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);i<128?t[e++]=i:i<2048?(t[e++]=i>>6|192,t[e++]=i&63|128):(i&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++s)&1023),t[e++]=i>>18|240,t[e++]=i>>12&63|128,t[e++]=i>>6&63|128,t[e++]=i&63|128):(t[e++]=i>>12|224,t[e++]=i>>6&63|128,t[e++]=i&63|128)}return t},Qy=function(n){const t=[];let e=0,s=0;for(;e<n.length;){const i=n[e++];if(i<128)t[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=n[e++];t[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=n[e++],o=n[e++],a=n[e++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;t[s++]=String.fromCharCode(55296+(l>>10)),t[s++]=String.fromCharCode(56320+(l&1023))}else{const r=n[e++],o=n[e++];t[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return t.join("")},jp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<n.length;i+=3){const r=n[i],o=i+1<n.length,a=o?n[i+1]:0,l=i+2<n.length,u=l?n[i+2]:0,h=r>>2,d=(r&3)<<4|a>>4;let p=(a&15)<<2|u>>6,_=u&63;l||(_=64,o||(p=64)),s.push(e[h],e[d],e[p],e[_])}return s.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(zp(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):Qy(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<n.length;){const r=e[n.charAt(i++)],a=i<n.length?e[n.charAt(i)]:0;++i;const u=i<n.length?e[n.charAt(i)]:64;++i;const d=i<n.length?e[n.charAt(i)]:64;if(++i,r==null||a==null||u==null||d==null)throw new Jy;const p=r<<2|a>>4;if(s.push(p),u!==64){const _=a<<4&240|u>>2;if(s.push(_),d!==64){const v=u<<6&192|d;s.push(v)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Jy extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Zy=function(n){const t=zp(n);return jp.encodeByteArray(t,!0)},Xo=function(n){return Zy(n).replace(/\./g,"")},Hp=function(n){try{return jp.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function tb(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const eb=()=>tb().__FIREBASE_DEFAULTS__,nb=()=>{if(typeof process>"u"||typeof zh>"u")return;const n=zh.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},sb=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&Hp(n[1]);return t&&JSON.parse(t)},Pa=()=>{try{return Xy()||eb()||nb()||sb()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},qp=n=>{var t,e;return(e=(t=Pa())==null?void 0:t.emulatorHosts)==null?void 0:e[n]},Wp=n=>{const t=qp(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const s=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),s]:[t.substring(0,e),s]},Kp=()=>{var n;return(n=Pa())==null?void 0:n.config},Gp=n=>{var t;return(t=Pa())==null?void 0:t[`_${n}`]};/**
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
 */class ib{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,s)=>{e?this.reject(e):this.resolve(s),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,s))}}}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function us(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Rc(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function Yp(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},s=t||"demo-project",i=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Xo(JSON.stringify(e)),Xo(JSON.stringify(o)),""].join(".")}const rr={};function rb(){const n={prod:[],emulator:[]};for(const t of Object.keys(rr))rr[t]?n.emulator.push(t):n.prod.push(t);return n}function ob(n){let t=document.getElementById(n),e=!1;return t||(t=document.createElement("div"),t.setAttribute("id",n),e=!0),{created:e,element:t}}let jh=!1;function Cc(n,t){if(typeof window>"u"||typeof document>"u"||!us(window.location.host)||rr[n]===t||rr[n]||jh)return;rr[n]=t;function e(p){return`__firebase__banner__${p}`}const s="__firebase__banner",r=rb().prod.length>0;function o(){const p=document.getElementById(s);p&&p.remove()}function a(p){p.style.display="flex",p.style.background="#7faaf0",p.style.position="fixed",p.style.bottom="5px",p.style.left="5px",p.style.padding=".5em",p.style.borderRadius="5px",p.style.alignItems="center"}function l(p,_){p.setAttribute("width","24"),p.setAttribute("id",_),p.setAttribute("height","24"),p.setAttribute("viewBox","0 0 24 24"),p.setAttribute("fill","none"),p.style.marginLeft="-6px"}function u(){const p=document.createElement("span");return p.style.cursor="pointer",p.style.marginLeft="16px",p.style.fontSize="24px",p.innerHTML=" &times;",p.onclick=()=>{jh=!0,o()},p}function h(p,_){p.setAttribute("id",_),p.innerText="Learn more",p.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",p.setAttribute("target","__blank"),p.style.paddingLeft="5px",p.style.textDecoration="underline"}function d(){const p=ob(s),_=e("text"),v=document.getElementById(_)||document.createElement("span"),E=e("learnmore"),w=document.getElementById(E)||document.createElement("a"),P=e("preprendIcon"),R=document.getElementById(P)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(p.created){const k=p.element;a(k),h(w,E);const C=u();l(R,P),k.append(R,v,w,C),document.body.appendChild(k)}r?(v.innerText="Preview backend disconnected.",R.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(R.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,v.innerText="Preview backend running in this workspace."),v.setAttribute("id",_)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",d):d()}/**
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
 */function pe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ab(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(pe())}function lb(){var t;const n=(t=Pa())==null?void 0:t.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function cb(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function ub(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function hb(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function db(){const n=pe();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function fb(){return!lb()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function pb(){try{return typeof indexedDB=="object"}catch{return!1}}function gb(){return new Promise((n,t)=>{try{let e=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),e||self.indexedDB.deleteDatabase(s),n(!0)},i.onupgradeneeded=()=>{e=!1},i.onerror=()=>{var r;t(((r=i.error)==null?void 0:r.message)||"")}}catch(e){t(e)}})}/**
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
 */const mb="FirebaseError";class dn extends Error{constructor(t,e,s){super(e),this.code=t,this.customData=s,this.name=mb,Object.setPrototypeOf(this,dn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Vr.prototype.create)}}class Vr{constructor(t,e,s){this.service=t,this.serviceName=e,this.errors=s}create(t,...e){const s=e[0]||{},i=`${this.service}/${t}`,r=this.errors[t],o=r?_b(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new dn(i,a,s)}}function _b(n,t){return n.replace(yb,(e,s)=>{const i=t[s];return i!=null?String(i):`<${s}?>`})}const yb=/\{\$([^}]+)}/g;function bb(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}function Rs(n,t){if(n===t)return!0;const e=Object.keys(n),s=Object.keys(t);for(const i of e){if(!s.includes(i))return!1;const r=n[i],o=t[i];if(Hh(r)&&Hh(o)){if(!Rs(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!e.includes(i))return!1;return!0}function Hh(n){return n!==null&&typeof n=="object"}/**
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
 */function Fr(n){const t=[];for(const[e,s]of Object.entries(n))Array.isArray(s)?s.forEach(i=>{t.push(encodeURIComponent(e)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(e)+"="+encodeURIComponent(s));return t.length?"&"+t.join("&"):""}function vb(n,t){const e=new wb(n,t);return e.subscribe.bind(e)}class wb{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then(()=>{t(this)}).catch(s=>{this.error(s)})}next(t){this.forEachObserver(e=>{e.next(t)})}error(t){this.forEachObserver(e=>{e.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,e,s){let i;if(t===void 0&&e===void 0&&s===void 0)throw new Error("Missing Observer.");Eb(t,["next","error","complete"])?i=t:i={next:t,error:e,complete:s},i.next===void 0&&(i.next=_l),i.error===void 0&&(i.error=_l),i.complete===void 0&&(i.complete=_l);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{e(this.observers[t])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Eb(n,t){if(typeof n!="object"||n===null)return!1;for(const e of t)if(e in n&&typeof n[e]=="function")return!0;return!1}function _l(){}/**
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
 */function oe(n){return n&&n._delegate?n._delegate:n}class ns{constructor(t,e,s){this.name=t,this.instanceFactory=e,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const bs="[DEFAULT]";/**
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
 */class Tb{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const s=new ib;if(this.instancesDeferred.set(e,s),this.isInitialized(e)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:e});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){const e=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(t==null?void 0:t.optional)??!1;if(this.isInitialized(e)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:e})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Sb(t))try{this.getOrInitializeService({instanceIdentifier:bs})}catch{}for(const[e,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(e);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(t=bs){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=bs){return this.instances.has(t)}getOptions(t=bs){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:e});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(t,e){const s=this.normalizeInstanceIdentifier(e),i=this.onInitCallbacks.get(s)??new Set;i.add(t),this.onInitCallbacks.set(s,i);const r=this.instances.get(s);return r&&t(r,s),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const s=this.onInitCallbacks.get(e);if(s)for(const i of s)try{i(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let s=this.instances.get(t);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Ib(t),options:e}),this.instances.set(t,s),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(s,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,s)}catch{}return s||null}normalizeInstanceIdentifier(t=bs){return this.component?this.component.multipleInstances?t:bs:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ib(n){return n===bs?void 0:n}function Sb(n){return n.instantiationMode==="EAGER"}/**
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
 */class xb{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Tb(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var lt;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(lt||(lt={}));const Ab={debug:lt.DEBUG,verbose:lt.VERBOSE,info:lt.INFO,warn:lt.WARN,error:lt.ERROR,silent:lt.SILENT},Pb=lt.INFO,kb={[lt.DEBUG]:"log",[lt.VERBOSE]:"log",[lt.INFO]:"info",[lt.WARN]:"warn",[lt.ERROR]:"error"},Rb=(n,t,...e)=>{if(t<n.logLevel)return;const s=new Date().toISOString(),i=kb[t];if(i)console[i](`[${s}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Dc{constructor(t){this.name=t,this._logLevel=Pb,this._logHandler=Rb,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in lt))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Ab[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,lt.DEBUG,...t),this._logHandler(this,lt.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,lt.VERBOSE,...t),this._logHandler(this,lt.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,lt.INFO,...t),this._logHandler(this,lt.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,lt.WARN,...t),this._logHandler(this,lt.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,lt.ERROR,...t),this._logHandler(this,lt.ERROR,...t)}}const Cb=(n,t)=>t.some(e=>n instanceof e);let qh,Wh;function Db(){return qh||(qh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Mb(){return Wh||(Wh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Xp=new WeakMap,Gl=new WeakMap,Qp=new WeakMap,yl=new WeakMap,Mc=new WeakMap;function Ob(n){const t=new Promise((e,s)=>{const i=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{e(Xn(n.result)),i()},o=()=>{s(n.error),i()};n.addEventListener("success",r),n.addEventListener("error",o)});return t.then(e=>{e instanceof IDBCursor&&Xp.set(e,n)}).catch(()=>{}),Mc.set(t,n),t}function Lb(n){if(Gl.has(n))return;const t=new Promise((e,s)=>{const i=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{e(),i()},o=()=>{s(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});Gl.set(n,t)}let Yl={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return Gl.get(n);if(t==="objectStoreNames")return n.objectStoreNames||Qp.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return Xn(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function Nb(n){Yl=n(Yl)}function Vb(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const s=n.call(bl(this),t,...e);return Qp.set(s,t.sort?t.sort():[t]),Xn(s)}:Mb().includes(n)?function(...t){return n.apply(bl(this),t),Xn(Xp.get(this))}:function(...t){return Xn(n.apply(bl(this),t))}}function Fb(n){return typeof n=="function"?Vb(n):(n instanceof IDBTransaction&&Lb(n),Cb(n,Db())?new Proxy(n,Yl):n)}function Xn(n){if(n instanceof IDBRequest)return Ob(n);if(yl.has(n))return yl.get(n);const t=Fb(n);return t!==n&&(yl.set(n,t),Mc.set(t,n)),t}const bl=n=>Mc.get(n);function Ub(n,t,{blocked:e,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(n,t),a=Xn(o);return s&&o.addEventListener("upgradeneeded",l=>{s(Xn(o.result),l.oldVersion,l.newVersion,Xn(o.transaction),l)}),e&&o.addEventListener("blocked",l=>e(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const Bb=["get","getKey","getAll","getAllKeys","count"],$b=["put","add","delete","clear"],vl=new Map;function Kh(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(vl.get(t))return vl.get(t);const e=t.replace(/FromIndex$/,""),s=t!==e,i=$b.includes(e);if(!(e in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Bb.includes(e)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return s&&(u=u.index(a.shift())),(await Promise.all([u[e](...a),i&&l.done]))[0]};return vl.set(t,r),r}Nb(n=>({...n,get:(t,e,s)=>Kh(t,e)||n.get(t,e,s),has:(t,e)=>!!Kh(t,e)||n.has(t,e)}));/**
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
 */class zb{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(jb(e)){const s=e.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(e=>e).join(" ")}}function jb(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Xl="@firebase/app",Gh="0.14.8";/**
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
 */const xn=new Dc("@firebase/app"),Hb="@firebase/app-compat",qb="@firebase/analytics-compat",Wb="@firebase/analytics",Kb="@firebase/app-check-compat",Gb="@firebase/app-check",Yb="@firebase/auth",Xb="@firebase/auth-compat",Qb="@firebase/database",Jb="@firebase/data-connect",Zb="@firebase/database-compat",tv="@firebase/functions",ev="@firebase/functions-compat",nv="@firebase/installations",sv="@firebase/installations-compat",iv="@firebase/messaging",rv="@firebase/messaging-compat",ov="@firebase/performance",av="@firebase/performance-compat",lv="@firebase/remote-config",cv="@firebase/remote-config-compat",uv="@firebase/storage",hv="@firebase/storage-compat",dv="@firebase/firestore",fv="@firebase/ai",pv="@firebase/firestore-compat",gv="firebase",mv="12.9.0";/**
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
 */const Ql="[DEFAULT]",_v={[Xl]:"fire-core",[Hb]:"fire-core-compat",[Wb]:"fire-analytics",[qb]:"fire-analytics-compat",[Gb]:"fire-app-check",[Kb]:"fire-app-check-compat",[Yb]:"fire-auth",[Xb]:"fire-auth-compat",[Qb]:"fire-rtdb",[Jb]:"fire-data-connect",[Zb]:"fire-rtdb-compat",[tv]:"fire-fn",[ev]:"fire-fn-compat",[nv]:"fire-iid",[sv]:"fire-iid-compat",[iv]:"fire-fcm",[rv]:"fire-fcm-compat",[ov]:"fire-perf",[av]:"fire-perf-compat",[lv]:"fire-rc",[cv]:"fire-rc-compat",[uv]:"fire-gcs",[hv]:"fire-gcs-compat",[dv]:"fire-fst",[pv]:"fire-fst-compat",[fv]:"fire-vertex","fire-js":"fire-js",[gv]:"fire-js-all"};/**
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
 */const Qo=new Map,yv=new Map,Jl=new Map;function Yh(n,t){try{n.container.addComponent(t)}catch(e){xn.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function Cs(n){const t=n.name;if(Jl.has(t))return xn.debug(`There were multiple attempts to register component ${t}.`),!1;Jl.set(t,n);for(const e of Qo.values())Yh(e,n);for(const e of yv.values())Yh(e,n);return!0}function ka(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function Le(n){return n==null?!1:n.settings!==void 0}/**
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
 */const bv={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Qn=new Vr("app","Firebase",bv);/**
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
 */class vv{constructor(t,e,s){this._isDeleted=!1,this._options={...t},this._config={...e},this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new ns("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Qn.create("app-deleted",{appName:this._name})}}/**
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
 */const Bs=mv;function Jp(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const s={name:Ql,automaticDataCollectionEnabled:!0,...t},i=s.name;if(typeof i!="string"||!i)throw Qn.create("bad-app-name",{appName:String(i)});if(e||(e=Kp()),!e)throw Qn.create("no-options");const r=Qo.get(i);if(r){if(Rs(e,r.options)&&Rs(s,r.config))return r;throw Qn.create("duplicate-app",{appName:i})}const o=new xb(i);for(const l of Jl.values())o.addComponent(l);const a=new vv(e,s,o);return Qo.set(i,a),a}function Oc(n=Ql){const t=Qo.get(n);if(!t&&n===Ql&&Kp())return Jp();if(!t)throw Qn.create("no-app",{appName:n});return t}function tn(n,t,e){let s=_v[n]??n;e&&(s+=`-${e}`);const i=s.match(/\s|\//),r=t.match(/\s|\//);if(i||r){const o=[`Unable to register library "${s}" with version "${t}":`];i&&o.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&r&&o.push("and"),r&&o.push(`version name "${t}" contains illegal characters (whitespace or "/")`),xn.warn(o.join(" "));return}Cs(new ns(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
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
 */const wv="firebase-heartbeat-database",Ev=1,br="firebase-heartbeat-store";let wl=null;function Zp(){return wl||(wl=Ub(wv,Ev,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(br)}catch(e){console.warn(e)}}}}).catch(n=>{throw Qn.create("idb-open",{originalErrorMessage:n.message})})),wl}async function Tv(n){try{const e=(await Zp()).transaction(br),s=await e.objectStore(br).get(tg(n));return await e.done,s}catch(t){if(t instanceof dn)xn.warn(t.message);else{const e=Qn.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});xn.warn(e.message)}}}async function Xh(n,t){try{const s=(await Zp()).transaction(br,"readwrite");await s.objectStore(br).put(t,tg(n)),await s.done}catch(e){if(e instanceof dn)xn.warn(e.message);else{const s=Qn.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});xn.warn(s.message)}}}function tg(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Iv=1024,Sv=30;class xv{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Pv(e),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var t,e;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Qh();if(((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats.length>Sv){const o=kv(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){xn.warn(s)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Qh(),{heartbeatsToSend:s,unsentEntries:i}=Av(this._heartbeatsCache.heartbeats),r=Xo(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(e){return xn.warn(e),""}}}function Qh(){return new Date().toISOString().substring(0,10)}function Av(n,t=Iv){const e=[];let s=n.slice();for(const i of n){const r=e.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Jh(e)>t){r.dates.pop();break}}else if(e.push({agent:i.agent,dates:[i.date]}),Jh(e)>t){e.pop();break}s=s.slice(1)}return{heartbeatsToSend:e,unsentEntries:s}}class Pv{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return pb()?gb().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await Tv(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const s=await this.read();return Xh(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const s=await this.read();return Xh(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function Jh(n){return Xo(JSON.stringify({version:2,heartbeats:n})).length}function kv(n){if(n.length===0)return-1;let t=0,e=n[0].date;for(let s=1;s<n.length;s++)n[s].date<e&&(e=n[s].date,t=s);return t}/**
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
 */function Rv(n){Cs(new ns("platform-logger",t=>new zb(t),"PRIVATE")),Cs(new ns("heartbeat",t=>new xv(t),"PRIVATE")),tn(Xl,Gh,n),tn(Xl,Gh,"esm2020"),tn("fire-js","")}Rv("");var Cv="firebase",Dv="12.9.0";/**
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
 */tn(Cv,Dv,"app");function eg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Mv=eg,ng=new Vr("auth","Firebase",eg());/**
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
 */const Jo=new Dc("@firebase/auth");function Ov(n,...t){Jo.logLevel<=lt.WARN&&Jo.warn(`Auth (${Bs}): ${n}`,...t)}function Co(n,...t){Jo.logLevel<=lt.ERROR&&Jo.error(`Auth (${Bs}): ${n}`,...t)}/**
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
 */function an(n,...t){throw Nc(n,...t)}function qe(n,...t){return Nc(n,...t)}function Lc(n,t,e){const s={...Mv(),[t]:e};return new Vr("auth","Firebase",s).create(t,{appName:n.name})}function Ss(n){return Lc(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Lv(n,t,e){const s=e;if(!(t instanceof s))throw s.name!==t.constructor.name&&an(n,"argument-error"),Lc(n,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Nc(n,...t){if(typeof n!="string"){const e=t[0],s=[...t.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(e,...s)}return ng.create(n,...t)}function X(n,t,...e){if(!n)throw Nc(t,...e)}function wn(n){const t="INTERNAL ASSERTION FAILED: "+n;throw Co(t),new Error(t)}function An(n,t){n||wn(t)}/**
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
 */function Zl(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function Nv(){return Zh()==="http:"||Zh()==="https:"}function Zh(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
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
 */function Vv(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Nv()||ub()||"connection"in navigator)?navigator.onLine:!0}function Fv(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Ur{constructor(t,e){this.shortDelay=t,this.longDelay=e,An(e>t,"Short delay should be less than long delay!"),this.isMobile=ab()||hb()}get(){return Vv()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Vc(n,t){An(n.emulator,"Emulator should always be set here");const{url:e}=n.emulator;return t?`${e}${t.startsWith("/")?t.slice(1):t}`:e}/**
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
 */class sg{static initialize(t,e,s){this.fetchImpl=t,e&&(this.headersImpl=e),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;wn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;wn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;wn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Uv={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Bv=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],$v=new Ur(3e4,6e4);function Fc(n,t){return n.tenantId&&!t.tenantId?{...t,tenantId:n.tenantId}:t}async function Ei(n,t,e,s,i={}){return ig(n,i,async()=>{let r={},o={};s&&(t==="GET"?o=s:r={body:JSON.stringify(s)});const a=Fr({key:n.config.apiKey,...o}).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const u={method:t,headers:l,...r};return cb()||(u.referrerPolicy="no-referrer"),n.emulatorConfig&&us(n.emulatorConfig.host)&&(u.credentials="include"),sg.fetch()(await rg(n,n.config.apiHost,e,a),u)})}async function ig(n,t,e){n._canInitEmulator=!1;const s={...Uv,...t};try{const i=new jv(n),r=await Promise.race([e(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw ao(n,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ao(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw ao(n,"email-already-in-use",o);if(l==="USER_DISABLED")throw ao(n,"user-disabled",o);const h=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Lc(n,h,u);an(n,h)}}catch(i){if(i instanceof dn)throw i;an(n,"network-request-failed",{message:String(i)})}}async function zv(n,t,e,s,i={}){const r=await Ei(n,t,e,s,i);return"mfaPendingCredential"in r&&an(n,"multi-factor-auth-required",{_serverResponse:r}),r}async function rg(n,t,e,s){const i=`${t}${e}?${s}`,r=n,o=r.config.emulator?Vc(n.config,i):`${n.config.apiScheme}://${i}`;return Bv.includes(e)&&(await r._persistenceManagerAvailable,r._getPersistenceType()==="COOKIE")?r._getPersistence()._getFinalTarget(o).toString():o}class jv{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((e,s)=>{this.timer=setTimeout(()=>s(qe(this.auth,"network-request-failed")),$v.get())})}}function ao(n,t,e){const s={appName:n.name};e.email&&(s.email=e.email),e.phoneNumber&&(s.phoneNumber=e.phoneNumber);const i=qe(n,t,s);return i.customData._tokenResponse=e,i}/**
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
 */async function Hv(n,t){return Ei(n,"POST","/v1/accounts:delete",t)}async function Zo(n,t){return Ei(n,"POST","/v1/accounts:lookup",t)}/**
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
 */function or(n){if(n)try{const t=new Date(Number(n));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function qv(n,t=!1){const e=oe(n),s=await e.getIdToken(t),i=Uc(s);X(i&&i.exp&&i.auth_time&&i.iat,e.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:or(El(i.auth_time)),issuedAtTime:or(El(i.iat)),expirationTime:or(El(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function El(n){return Number(n)*1e3}function Uc(n){const[t,e,s]=n.split(".");if(t===void 0||e===void 0||s===void 0)return Co("JWT malformed, contained fewer than 3 sections"),null;try{const i=Hp(e);return i?JSON.parse(i):(Co("Failed to decode base64 JWT payload"),null)}catch(i){return Co("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function td(n){const t=Uc(n);return X(t,"internal-error"),X(typeof t.exp<"u","internal-error"),X(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function vr(n,t,e=!1){if(e)return t;try{return await t}catch(s){throw s instanceof dn&&Wv(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function Wv({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class Kv{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){if(t){const e=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),e}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class tc{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=or(this.lastLoginAt),this.creationTime=or(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ta(n){var d;const t=n.auth,e=await n.getIdToken(),s=await vr(n,Zo(t,{idToken:e}));X(s==null?void 0:s.users.length,t,"internal-error");const i=s.users[0];n._notifyReloadListener(i);const r=(d=i.providerUserInfo)!=null&&d.length?og(i.providerUserInfo):[],o=Yv(n.providerData,r),a=n.isAnonymous,l=!(n.email&&i.passwordHash)&&!(o!=null&&o.length),u=a?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new tc(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(n,h)}async function Gv(n){const t=oe(n);await ta(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function Yv(n,t){return[...n.filter(s=>!t.some(i=>i.providerId===s.providerId)),...t]}function og(n){return n.map(({providerId:t,...e})=>({providerId:t,uid:e.rawId||"",displayName:e.displayName||null,email:e.email||null,phoneNumber:e.phoneNumber||null,photoURL:e.photoUrl||null}))}/**
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
 */async function Xv(n,t){const e=await ig(n,{},async()=>{const s=Fr({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:r}=n.config,o=await rg(n,i,"/v1/token",`key=${r}`),a=await n._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:a,body:s};return n.emulatorConfig&&us(n.emulatorConfig.host)&&(l.credentials="include"),sg.fetch()(o,l)});return{accessToken:e.access_token,expiresIn:e.expires_in,refreshToken:e.refresh_token}}async function Qv(n,t){return Ei(n,"POST","/v2/accounts:revokeToken",Fc(n,t))}/**
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
 */class ii{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){X(t.idToken,"internal-error"),X(typeof t.idToken<"u","internal-error"),X(typeof t.refreshToken<"u","internal-error");const e="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):td(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}updateFromIdToken(t){X(t.length!==0,"internal-error");const e=td(t);this.updateTokensAndExpiration(t,null,e)}async getToken(t,e=!1){return!e&&this.accessToken&&!this.isExpired?this.accessToken:(X(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:s,refreshToken:i,expiresIn:r}=await Xv(t,e);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(t,e,s){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(t,e){const{refreshToken:s,accessToken:i,expirationTime:r}=e,o=new ii;return s&&(X(typeof s=="string","internal-error",{appName:t}),o.refreshToken=s),i&&(X(typeof i=="string","internal-error",{appName:t}),o.accessToken=i),r&&(X(typeof r=="number","internal-error",{appName:t}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new ii,this.toJSON())}_performRefresh(){return wn("not implemented")}}/**
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
 */function Fn(n,t){X(typeof n=="string"||typeof n>"u","internal-error",{appName:t})}class $e{constructor({uid:t,auth:e,stsTokenManager:s,...i}){this.providerId="firebase",this.proactiveRefresh=new Kv(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=e,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new tc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(t){const e=await vr(this,this.stsTokenManager.getToken(this.auth,t));return X(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return qv(this,t)}reload(){return Gv(this)}_assign(t){this!==t&&(X(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(e=>({...e})),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const e=new $e({...this,auth:t,stsTokenManager:this.stsTokenManager._clone()});return e.metadata._copy(this.metadata),e}_onReload(t){X(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let s=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),s=!0),e&&await ta(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Le(this.auth.app))return Promise.reject(Ss(this.auth));const t=await this.getIdToken();return await vr(this,Hv(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>({...t})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){const s=e.displayName??void 0,i=e.email??void 0,r=e.phoneNumber??void 0,o=e.photoURL??void 0,a=e.tenantId??void 0,l=e._redirectEventId??void 0,u=e.createdAt??void 0,h=e.lastLoginAt??void 0,{uid:d,emailVerified:p,isAnonymous:_,providerData:v,stsTokenManager:E}=e;X(d&&E,t,"internal-error");const w=ii.fromJSON(this.name,E);X(typeof d=="string",t,"internal-error"),Fn(s,t.name),Fn(i,t.name),X(typeof p=="boolean",t,"internal-error"),X(typeof _=="boolean",t,"internal-error"),Fn(r,t.name),Fn(o,t.name),Fn(a,t.name),Fn(l,t.name),Fn(u,t.name),Fn(h,t.name);const P=new $e({uid:d,auth:t,email:i,emailVerified:p,displayName:s,isAnonymous:_,photoURL:o,phoneNumber:r,tenantId:a,stsTokenManager:w,createdAt:u,lastLoginAt:h});return v&&Array.isArray(v)&&(P.providerData=v.map(R=>({...R}))),l&&(P._redirectEventId=l),P}static async _fromIdTokenResponse(t,e,s=!1){const i=new ii;i.updateFromServerResponse(e);const r=new $e({uid:e.localId,auth:t,stsTokenManager:i,isAnonymous:s});return await ta(r),r}static async _fromGetAccountInfoResponse(t,e,s){const i=e.users[0];X(i.localId!==void 0,"internal-error");const r=i.providerUserInfo!==void 0?og(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(r!=null&&r.length),a=new ii;a.updateFromIdToken(s);const l=new $e({uid:i.localId,auth:t,stsTokenManager:a,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:r,metadata:new tc(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(r!=null&&r.length)};return Object.assign(l,u),l}}/**
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
 */const ed=new Map;function En(n){An(n instanceof Function,"Expected a class definition");let t=ed.get(n);return t?(An(t instanceof n,"Instance stored in cache mismatched with class"),t):(t=new n,ed.set(n,t),t)}/**
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
 */class ag{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return e===void 0?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}ag.type="NONE";const nd=ag;/**
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
 */function Do(n,t,e){return`firebase:${n}:${t}:${e}`}class ri{constructor(t,e,s){this.persistence=t,this.auth=e,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=Do(this.userKey,i.apiKey,r),this.fullPersistenceKey=Do("persistence",i.apiKey,r),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if(typeof t=="string"){const e=await Zo(this.auth,{idToken:t}).catch(()=>{});return e?$e._fromGetAccountInfoResponse(this.auth,e,t):null}return $e._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,e)return this.setCurrentUser(e)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,s="authUser"){if(!e.length)return new ri(En(nd),t,s);const i=(await Promise.all(e.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let r=i[0]||En(nd);const o=Do(s,t.config.apiKey,t.name);let a=null;for(const u of e)try{const h=await u._get(o);if(h){let d;if(typeof h=="string"){const p=await Zo(t,{idToken:h}).catch(()=>{});if(!p)break;d=await $e._fromGetAccountInfoResponse(t,p,h)}else d=$e._fromJSON(t,h);u!==r&&(a=d),r=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new ri(r,t,s):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(e.map(async u=>{if(u!==r)try{await u._remove(o)}catch{}})),new ri(r,t,s))}}/**
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
 */function sd(n){const t=n.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(hg(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(lg(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(fg(t))return"Blackberry";if(pg(t))return"Webos";if(cg(t))return"Safari";if((t.includes("chrome/")||ug(t))&&!t.includes("edge/"))return"Chrome";if(dg(t))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(e);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function lg(n=pe()){return/firefox\//i.test(n)}function cg(n=pe()){const t=n.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function ug(n=pe()){return/crios\//i.test(n)}function hg(n=pe()){return/iemobile/i.test(n)}function dg(n=pe()){return/android/i.test(n)}function fg(n=pe()){return/blackberry/i.test(n)}function pg(n=pe()){return/webos/i.test(n)}function Bc(n=pe()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Jv(n=pe()){var t;return Bc(n)&&!!((t=window.navigator)!=null&&t.standalone)}function Zv(){return db()&&document.documentMode===10}function gg(n=pe()){return Bc(n)||dg(n)||pg(n)||fg(n)||/windows phone/i.test(n)||hg(n)}/**
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
 */function mg(n,t=[]){let e;switch(n){case"Browser":e=sd(pe());break;case"Worker":e=`${sd(pe())}-${n}`;break;default:e=n}const s=t.length?t.join(","):"FirebaseCore-web";return`${e}/JsCore/${Bs}/${s}`}/**
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
 */class tw{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,e){const s=r=>new Promise((o,a)=>{try{const l=t(r);o(l)}catch(l){a(l)}});s.onAbort=e,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const e=[];try{for(const s of this.queue)await s(t),s.onAbort&&e.push(s.onAbort)}catch(s){e.reverse();for(const i of e)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */async function ew(n,t={}){return Ei(n,"GET","/v2/passwordPolicy",Fc(n,t))}/**
 * @license
 * Copyright 2023 Google LLC
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
 */const nw=6;class sw{constructor(t){var s;const e=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=e.minPasswordLength??nw,e.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=e.maxPasswordLength),e.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=e.containsLowercaseCharacter),e.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=e.containsUppercaseCharacter),e.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=e.containsNumericCharacter),e.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=e.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((s=t.allowedNonAlphanumericCharacters)==null?void 0:s.join(""))??"",this.forceUpgradeOnSignin=t.forceUpgradeOnSignin??!1,this.schemaVersion=t.schemaVersion}validatePassword(t){const e={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,e),this.validatePasswordCharacterOptions(t,e),e.isValid&&(e.isValid=e.meetsMinPasswordLength??!0),e.isValid&&(e.isValid=e.meetsMaxPasswordLength??!0),e.isValid&&(e.isValid=e.containsLowercaseLetter??!0),e.isValid&&(e.isValid=e.containsUppercaseLetter??!0),e.isValid&&(e.isValid=e.containsNumericCharacter??!0),e.isValid&&(e.isValid=e.containsNonAlphanumericCharacter??!0),e}validatePasswordLengthOptions(t,e){const s=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;s&&(e.meetsMinPasswordLength=t.length>=s),i&&(e.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,e){this.updatePasswordCharacterOptionsStatuses(e,!1,!1,!1,!1);let s;for(let i=0;i<t.length;i++)s=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(e,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(t,e,s,i,r){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=e)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=r))}}/**
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
 */class iw{constructor(t,e,s,i){this.app=t,this.heartbeatServiceProvider=e,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new id(this),this.idTokenSubscription=new id(this),this.beforeStateQueue=new tw(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ng,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(r=>this._resolvePersistenceManagerAvailable=r)}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=En(e)),this._initializationPromise=this.queue(async()=>{var s,i,r;if(!this._deleted&&(this.persistenceManager=await ri.create(this,t),(s=this._resolvePersistenceManagerAvailable)==null||s.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(e),this.lastNotifiedUid=((r=this.currentUser)==null?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const e=await Zo(this,{idToken:t}),s=await $e._fromGetAccountInfoResponse(this,e,t);await this.directlySetCurrentUser(s)}catch(e){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",e),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var r;if(Le(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const e=await this.assertedPersistence.getCurrentUser();let s=e,i=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(r=this.redirectUser)==null?void 0:r._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(t);(!o||o===a)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=e,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return X(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await ta(t)}catch(e){if((e==null?void 0:e.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=Fv()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(Le(this.app))return Promise.reject(Ss(this));const e=t?oe(t):null;return e&&X(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&X(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return Le(this.app)?Promise.reject(Ss(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return Le(this.app)?Promise.reject(Ss(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(En(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const e=this._getPasswordPolicyInternal();return e.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):e.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await ew(this),e=new sw(t);this.tenantId===null?this._projectPasswordPolicy=e:this._tenantPasswordPolicies[this.tenantId]=e}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new Vr("auth","Firebase",t())}onAuthStateChanged(t,e,s){return this.registerStateListener(this.authStateSubscription,t,e,s)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,s){return this.registerStateListener(this.idTokenSubscription,t,e,s)}authStateReady(){return new Promise((t,e)=>{if(this.currentUser)t();else{const s=this.onAuthStateChanged(()=>{s(),t()},e)}})}async revokeAccessToken(t){if(this.currentUser){const e=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:e};this.tenantId!=null&&(s.tenantId=this.tenantId),await Qv(this,s)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)==null?void 0:t.toJSON()}}async _setRedirectUser(t,e){const s=await this.getOrInitRedirectPersistenceManager(e);return t===null?s.removeCurrentUser():s.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&En(t)||this._popupRedirectResolver;X(e,this,"argument-error"),this.redirectPersistenceManager=await ri.create(this,[En(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,s;return this._isInitialized&&await this.queue(async()=>{}),((e=this._currentUser)==null?void 0:e._redirectEventId)===t?this._currentUser:((s=this.redirectUser)==null?void 0:s._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const t=((e=this.currentUser)==null?void 0:e.uid)??null;this.lastNotifiedUid!==t&&(this.lastNotifiedUid=t,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,s,i){if(this._deleted)return()=>{};const r=typeof e=="function"?e:e.next.bind(e);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(X(a,this,"internal-error"),a.then(()=>{o||r(this.currentUser)}),typeof e=="function"){const l=t.addObserver(e,s,i);return()=>{o=!0,l()}}else{const l=t.addObserver(e);return()=>{o=!0,l()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return X(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=mg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const e=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());e&&(t["X-Firebase-Client"]=e);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;if(Le(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:e.getToken());return t!=null&&t.error&&Ov(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Ra(n){return oe(n)}class id{constructor(t){this.auth=t,this.observer=null,this.addObserver=vb(e=>this.observer=e)}get next(){return X(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let $c={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function rw(n){$c=n}function ow(n){return $c.loadJS(n)}function aw(){return $c.gapiScript}function lw(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
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
 */function cw(n,t){const e=ka(n,"auth");if(e.isInitialized()){const i=e.getImmediate(),r=e.getOptions();if(Rs(r,t??{}))return i;an(i,"already-initialized")}return e.initialize({options:t})}function uw(n,t){const e=(t==null?void 0:t.persistence)||[],s=(Array.isArray(e)?e:[e]).map(En);t!=null&&t.errorMap&&n._updateErrorMap(t.errorMap),n._initializeWithPersistence(s,t==null?void 0:t.popupRedirectResolver)}function hw(n,t,e){const s=Ra(n);X(/^https?:\/\//.test(t),s,"invalid-emulator-scheme");const i=!1,r=_g(t),{host:o,port:a}=dw(t),l=a===null?"":`:${a}`,u={url:`${r}//${o}${l}/`},h=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!s._canInitEmulator){X(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),X(Rs(u,s.config.emulator)&&Rs(h,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=u,s.emulatorConfig=h,s.settings.appVerificationDisabledForTesting=!0,us(o)?(Rc(`${r}//${o}${l}`),Cc("Auth",!0)):fw()}function _g(n){const t=n.indexOf(":");return t<0?"":n.substr(0,t+1)}function dw(n){const t=_g(n),e=/(\/\/)?([^?#/]+)/.exec(n.substr(t.length));if(!e)return{host:"",port:null};const s=e[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:rd(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:rd(o)}}}function rd(n){if(!n)return null;const t=Number(n);return isNaN(t)?null:t}function fw(){function n(){const t=document.createElement("p"),e=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",e.position="fixed",e.width="100%",e.backgroundColor="#ffffff",e.border=".1em solid #000000",e.color="#b50000",e.bottom="0px",e.left="0px",e.margin="0px",e.zIndex="10000",e.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class yg{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return wn("not implemented")}_getIdTokenResponse(t){return wn("not implemented")}_linkToIdToken(t,e){return wn("not implemented")}_getReauthenticationResolver(t){return wn("not implemented")}}/**
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
 */async function oi(n,t){return zv(n,"POST","/v1/accounts:signInWithIdp",Fc(n,t))}/**
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
 */const pw="http://localhost";class Ds extends yg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new Ds(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):an("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e=typeof t=="string"?JSON.parse(t):t,{providerId:s,signInMethod:i,...r}=e;if(!s||!i)return null;const o=new Ds(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(t){const e=this.buildRequest();return oi(t,e)}_linkToIdToken(t,e){const s=this.buildRequest();return s.idToken=e,oi(t,s)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,oi(t,e)}buildRequest(){const t={requestUri:pw,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e.id_token=this.idToken),this.accessToken&&(e.access_token=this.accessToken),this.secret&&(e.oauth_token_secret=this.secret),e.providerId=this.providerId,this.nonce&&!this.pendingToken&&(e.nonce=this.nonce),t.postBody=Fr(e)}return t}}/**
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
 */class zc{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Br extends zc{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class Un extends Br{constructor(){super("facebook.com")}static credential(t){return Ds._fromParams({providerId:Un.PROVIDER_ID,signInMethod:Un.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Un.credentialFromTaggedObject(t)}static credentialFromError(t){return Un.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Un.credential(t.oauthAccessToken)}catch{return null}}}Un.FACEBOOK_SIGN_IN_METHOD="facebook.com";Un.PROVIDER_ID="facebook.com";/**
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
 */class vn extends Br{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return Ds._fromParams({providerId:vn.PROVIDER_ID,signInMethod:vn.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return vn.credentialFromTaggedObject(t)}static credentialFromError(t){return vn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:s}=t;if(!e&&!s)return null;try{return vn.credential(e,s)}catch{return null}}}vn.GOOGLE_SIGN_IN_METHOD="google.com";vn.PROVIDER_ID="google.com";/**
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
 */class Bn extends Br{constructor(){super("github.com")}static credential(t){return Ds._fromParams({providerId:Bn.PROVIDER_ID,signInMethod:Bn.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Bn.credentialFromTaggedObject(t)}static credentialFromError(t){return Bn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Bn.credential(t.oauthAccessToken)}catch{return null}}}Bn.GITHUB_SIGN_IN_METHOD="github.com";Bn.PROVIDER_ID="github.com";/**
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
 */class $n extends Br{constructor(){super("twitter.com")}static credential(t,e){return Ds._fromParams({providerId:$n.PROVIDER_ID,signInMethod:$n.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return $n.credentialFromTaggedObject(t)}static credentialFromError(t){return $n.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:s}=t;if(!e||!s)return null;try{return $n.credential(e,s)}catch{return null}}}$n.TWITTER_SIGN_IN_METHOD="twitter.com";$n.PROVIDER_ID="twitter.com";/**
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
 */class fi{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,s,i=!1){const r=await $e._fromIdTokenResponse(t,s,i),o=od(s);return new fi({user:r,providerId:o,_tokenResponse:s,operationType:e})}static async _forOperation(t,e,s){await t._updateTokensIfNecessary(s,!0);const i=od(s);return new fi({user:t,providerId:i,_tokenResponse:s,operationType:e})}}function od(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class ea extends dn{constructor(t,e,s,i){super(e.code,e.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,ea.prototype),this.customData={appName:t.name,tenantId:t.tenantId??void 0,_serverResponse:e.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(t,e,s,i){return new ea(t,e,s,i)}}function bg(n,t,e,s){return(t==="reauthenticate"?e._getReauthenticationResolver(n):e._getIdTokenResponse(n)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?ea._fromErrorAndOperation(n,r,t,s):r})}async function gw(n,t,e=!1){const s=await vr(n,t._linkToIdToken(n.auth,await n.getIdToken()),e);return fi._forOperation(n,"link",s)}/**
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
 */async function mw(n,t,e=!1){const{auth:s}=n;if(Le(s.app))return Promise.reject(Ss(s));const i="reauthenticate";try{const r=await vr(n,bg(s,i,t,n),e);X(r.idToken,s,"internal-error");const o=Uc(r.idToken);X(o,s,"internal-error");const{sub:a}=o;return X(n.uid===a,s,"user-mismatch"),fi._forOperation(n,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&an(s,"user-mismatch"),r}}/**
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
 */async function _w(n,t,e=!1){if(Le(n.app))return Promise.reject(Ss(n));const s="signIn",i=await bg(n,s,t),r=await fi._fromIdTokenResponse(n,s,i);return e||await n._updateCurrentUser(r.user),r}function yw(n,t,e,s){return oe(n).onIdTokenChanged(t,e,s)}function bw(n,t,e){return oe(n).beforeAuthStateChanged(t,e)}function vw(n,t,e,s){return oe(n).onAuthStateChanged(t,e,s)}function ww(n){return oe(n).signOut()}const na="__sak";/**
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
 */class vg{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(na,"1"),this.storage.removeItem(na),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Ew=1e3,Tw=10;class wg extends vg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=gg(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const s=this.storage.getItem(e),i=this.localCache[e];s!==i&&t(e,i,s)}}onStorageEvent(t,e=!1){if(!t.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=t.key;e?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(s);!e&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);Zv()&&r!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,Tw):i()}notifyListeners(t,e){this.localCache[t]=e;const s=this.listeners[t];if(s)for(const i of Array.from(s))i(e&&JSON.parse(e))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,e,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:s}),!0)})},Ew)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}wg.type="LOCAL";const Iw=wg;/**
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
 */class Eg extends vg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,e){}_removeListener(t,e){}}Eg.type="SESSION";const Tg=Eg;/**
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
 */function Sw(n){return Promise.all(n.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(e){return{fulfilled:!1,reason:e}}}))}/**
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
 */class Ca{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find(i=>i.isListeningto(t));if(e)return e;const s=new Ca(t);return this.receivers.push(s),s}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:s,eventType:i,data:r}=e.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;e.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async u=>u(e.origin,r)),l=await Sw(a);e.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:l})}_subscribe(t,e){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),(!e||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ca.receivers=[];/**
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
 */function jc(n="",t=10){let e="";for(let s=0;s<t;s++)e+=Math.floor(Math.random()*10);return n+e}/**
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
 */class xw{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const u=jc("",20);i.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(d){const p=d;if(p.data.eventId===u)switch(p.data.status){case"ack":clearTimeout(h),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(p.data.response);break;default:clearTimeout(h),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:u,data:e},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function en(){return window}function Aw(n){en().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */function Ig(){return typeof en().WorkerGlobalScope<"u"&&typeof en().importScripts=="function"}async function Pw(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function kw(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function Rw(){return Ig()?self:null}/**
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
 */const Sg="firebaseLocalStorageDb",Cw=1,sa="firebaseLocalStorage",xg="fbase_key";class $r{constructor(t){this.request=t}toPromise(){return new Promise((t,e)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{e(this.request.error)})})}}function Da(n,t){return n.transaction([sa],t?"readwrite":"readonly").objectStore(sa)}function Dw(){const n=indexedDB.deleteDatabase(Sg);return new $r(n).toPromise()}function ec(){const n=indexedDB.open(Sg,Cw);return new Promise((t,e)=>{n.addEventListener("error",()=>{e(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(sa,{keyPath:xg})}catch(i){e(i)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(sa)?t(s):(s.close(),await Dw(),t(await ec()))})})}async function ad(n,t,e){const s=Da(n,!0).put({[xg]:t,value:e});return new $r(s).toPromise()}async function Mw(n,t){const e=Da(n,!1).get(t),s=await new $r(e).toPromise();return s===void 0?null:s.value}function ld(n,t){const e=Da(n,!0).delete(t);return new $r(e).toPromise()}const Ow=800,Lw=3;class Ag{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ec(),this.db)}async _withRetries(t){let e=0;for(;;)try{const s=await this._openDb();return await t(s)}catch(s){if(e++>Lw)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ig()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ca._getInstance(Rw()),this.receiver._subscribe("keyChanged",async(t,e)=>({keyProcessed:(await this._poll()).includes(e.key)})),this.receiver._subscribe("ping",async(t,e)=>["keyChanged"])}async initializeSender(){var e,s;if(this.activeServiceWorker=await Pw(),!this.activeServiceWorker)return;this.sender=new xw(this.activeServiceWorker);const t=await this.sender._send("ping",{},800);t&&(e=t[0])!=null&&e.fulfilled&&(s=t[0])!=null&&s.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||kw()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await ec();return await ad(t,na,"1"),await ld(t,na),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite(async()=>(await this._withRetries(s=>ad(s,t,e)),this.localCache[t]=e,this.notifyServiceWorker(t)))}async _get(t){const e=await this._withRetries(s=>Mw(s,t));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(e=>ld(e,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const r=Da(i,!1).getAll();return new $r(r).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const e=[],s=new Set;if(t.length!==0)for(const{fbase_key:i,value:r}of t)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),e.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),e.push(i));return e}notifyListeners(t,e){this.localCache[t]=e;const s=this.listeners[t];if(s)for(const i of Array.from(s))i(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Ow)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ag.type="LOCAL";const Nw=Ag;new Ur(3e4,6e4);/**
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
 */function Pg(n,t){return t?En(t):(X(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Hc extends yg{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return oi(t,this._buildIdpRequest())}_linkToIdToken(t,e){return oi(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return oi(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function Vw(n){return _w(n.auth,new Hc(n),n.bypassAuthState)}function Fw(n){const{auth:t,user:e}=n;return X(e,t,"internal-error"),mw(e,new Hc(n),n.bypassAuthState)}async function Uw(n){const{auth:t,user:e}=n;return X(e,t,"internal-error"),gw(e,new Hc(n),n.bypassAuthState)}/**
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
 */class kg{constructor(t,e,s,i,r=!1){this.auth=t,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise(async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(t){const{urlResponse:e,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=t;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:e,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return Vw;case"linkViaPopup":case"linkViaRedirect":return Uw;case"reauthViaPopup":case"reauthViaRedirect":return Fw;default:an(this.auth,"internal-error")}}resolve(t){An(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){An(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Bw=new Ur(2e3,1e4);async function $w(n,t,e){if(Le(n.app))return Promise.reject(qe(n,"operation-not-supported-in-this-environment"));const s=Ra(n);Lv(n,t,zc);const i=Pg(s,e);return new Es(s,"signInViaPopup",t,i).executeNotNull()}class Es extends kg{constructor(t,e,s,i,r){super(t,e,i,r),this.provider=s,this.authWindow=null,this.pollId=null,Es.currentPopupAction&&Es.currentPopupAction.cancel(),Es.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return X(t,this.auth,"internal-error"),t}async onExecution(){An(this.filter.length===1,"Popup operations only handle one event");const t=jc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(qe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)==null?void 0:t.associatedEvent)||null}cancel(){this.reject(qe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Es.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,s;if((s=(e=this.authWindow)==null?void 0:e.window)!=null&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(qe(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,Bw.get())};t()}}Es.currentPopupAction=null;/**
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
 */const zw="pendingRedirect",Mo=new Map;class jw extends kg{constructor(t,e,s=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,s),this.eventId=null}async execute(){let t=Mo.get(this.auth._key());if(!t){try{const s=await Hw(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(s)}catch(e){t=()=>Promise.reject(e)}Mo.set(this.auth._key(),t)}return this.bypassAuthState||Mo.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Hw(n,t){const e=Kw(t),s=Ww(n);if(!await s._isAvailable())return!1;const i=await s._get(e)==="true";return await s._remove(e),i}function qw(n,t){Mo.set(n._key(),t)}function Ww(n){return En(n._redirectPersistence)}function Kw(n){return Do(zw,n.config.apiKey,n.name)}async function Gw(n,t,e=!1){if(Le(n.app))return Promise.reject(Ss(n));const s=Ra(n),i=Pg(s,t),o=await new jw(s,i,e).execute();return o&&!e&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,t)),o}/**
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
 */const Yw=600*1e3;class Xw{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(t,s)&&(e=!0,this.sendToConsumer(t,s),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!Qw(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var s;if(t.error&&!Rg(t)){const i=((s=t.error.code)==null?void 0:s.split("auth/")[1])||"internal-error";e.onError(qe(this.auth,i))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const s=e.eventId===null||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&s}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=Yw&&this.cachedEventUids.clear(),this.cachedEventUids.has(cd(t))}saveEventToCache(t){this.cachedEventUids.add(cd(t)),this.lastProcessedEventTime=Date.now()}}function cd(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(t=>t).join("-")}function Rg({type:n,error:t}){return n==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function Qw(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Rg(n);default:return!1}}/**
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
 */async function Jw(n,t={}){return Ei(n,"GET","/v1/projects",t)}/**
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
 */const Zw=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,t0=/^https?/;async function e0(n){if(n.config.emulator)return;const{authorizedDomains:t}=await Jw(n);for(const e of t)try{if(n0(e))return}catch{}an(n,"unauthorized-domain")}function n0(n){const t=Zl(),{protocol:e,hostname:s}=new URL(t);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&s===""?e==="chrome-extension:"&&n.replace("chrome-extension://","")===t.replace("chrome-extension://",""):e==="chrome-extension:"&&o.hostname===s}if(!t0.test(e))return!1;if(Zw.test(n))return s===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const s0=new Ur(3e4,6e4);function ud(){const n=en().___jsl;if(n!=null&&n.H){for(const t of Object.keys(n.H))if(n.H[t].r=n.H[t].r||[],n.H[t].L=n.H[t].L||[],n.H[t].r=[...n.H[t].L],n.CP)for(let e=0;e<n.CP.length;e++)n.CP[e]=null}}function i0(n){return new Promise((t,e)=>{var i,r,o;function s(){ud(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{ud(),e(qe(n,"network-request-failed"))},timeout:s0.get()})}if((r=(i=en().gapi)==null?void 0:i.iframes)!=null&&r.Iframe)t(gapi.iframes.getContext());else if((o=en().gapi)!=null&&o.load)s();else{const a=lw("iframefcb");return en()[a]=()=>{gapi.load?s():e(qe(n,"network-request-failed"))},ow(`${aw()}?onload=${a}`).catch(l=>e(l))}}).catch(t=>{throw Oo=null,t})}let Oo=null;function r0(n){return Oo=Oo||i0(n),Oo}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const o0=new Ur(5e3,15e3),a0="__/auth/iframe",l0="emulator/auth/iframe",c0={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},u0=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function h0(n){const t=n.config;X(t.authDomain,n,"auth-domain-config-required");const e=t.emulator?Vc(t,l0):`https://${n.config.authDomain}/${a0}`,s={apiKey:t.apiKey,appName:n.name,v:Bs},i=u0.get(n.config.apiHost);i&&(s.eid=i);const r=n._getFrameworks();return r.length&&(s.fw=r.join(",")),`${e}?${Fr(s).slice(1)}`}async function d0(n){const t=await r0(n),e=en().gapi;return X(e,n,"internal-error"),t.open({where:document.body,url:h0(n),messageHandlersFilter:e.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:c0,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=qe(n,"network-request-failed"),a=en().setTimeout(()=>{r(o)},o0.get());function l(){en().clearTimeout(a),i(s)}s.ping(l).then(l,()=>{r(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const f0={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},p0=500,g0=600,m0="_blank",_0="http://localhost";class hd{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function y0(n,t,e,s=p0,i=g0){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l={...f0,width:s.toString(),height:i.toString(),top:r,left:o},u=pe().toLowerCase();e&&(a=ug(u)?m0:e),lg(u)&&(t=t||_0,l.scrollbars="yes");const h=Object.entries(l).reduce((p,[_,v])=>`${p}${_}=${v},`,"");if(Jv(u)&&a!=="_self")return b0(t||"",a),new hd(null);const d=window.open(t||"",a,h);X(d,n,"popup-blocked");try{d.focus()}catch{}return new hd(d)}function b0(n,t){const e=document.createElement("a");e.href=n,e.target=t;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),e.dispatchEvent(s)}/**
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
 */const v0="__/auth/handler",w0="emulator/auth/handler",E0=encodeURIComponent("fac");async function dd(n,t,e,s,i,r){X(n.config.authDomain,n,"auth-domain-config-required"),X(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:e,redirectUrl:s,v:Bs,eventId:i};if(t instanceof zc){t.setDefaultLanguage(n.languageCode),o.providerId=t.providerId||"",bb(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[h,d]of Object.entries({}))o[h]=d}if(t instanceof Br){const h=t.getScopes().filter(d=>d!=="");h.length>0&&(o.scopes=h.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const l=await n._getAppCheckToken(),u=l?`#${E0}=${encodeURIComponent(l)}`:"";return`${T0(n)}?${Fr(a).slice(1)}${u}`}function T0({config:n}){return n.emulator?Vc(n,w0):`https://${n.authDomain}/${v0}`}/**
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
 */const Tl="webStorageSupport";class I0{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Tg,this._completeRedirectFn=Gw,this._overrideRedirectResult=qw}async _openPopup(t,e,s,i){var o;An((o=this.eventManagers[t._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const r=await dd(t,e,s,Zl(),i);return y0(t,r,jc())}async _openRedirect(t,e,s,i){await this._originValidation(t);const r=await dd(t,e,s,Zl(),i);return Aw(r),new Promise(()=>{})}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:i,promise:r}=this.eventManagers[e];return i?Promise.resolve(i):(An(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(t);return this.eventManagers[e]={promise:s},s.catch(()=>{delete this.eventManagers[e]}),s}async initAndGetManager(t){const e=await d0(t),s=new Xw(t);return e.register("authEvent",i=>(X(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:s},this.iframes[t._key()]=e,s}_isIframeWebStorageSupported(t,e){this.iframes[t._key()].send(Tl,{type:Tl},i=>{var o;const r=(o=i==null?void 0:i[0])==null?void 0:o[Tl];r!==void 0&&e(!!r),an(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=e0(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return gg()||cg()||Bc()}}const S0=I0;var fd="@firebase/auth",pd="1.12.0";/**
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
 */class x0{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)==null?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged(s=>{t((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){X(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function A0(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function P0(n){Cs(new ns("auth",(t,{options:e})=>{const s=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),r=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;X(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const l={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:mg(n)},u=new iw(s,i,r,l);return uw(u,e),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,s)=>{t.getProvider("auth-internal").initialize()})),Cs(new ns("auth-internal",t=>{const e=Ra(t.getProvider("auth").getImmediate());return(s=>new x0(s))(e)},"PRIVATE").setInstantiationMode("EXPLICIT")),tn(fd,pd,A0(n)),tn(fd,pd,"esm2020")}/**
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
 */const k0=300,R0=Gp("authIdTokenMaxAge")||k0;let gd=null;const C0=n=>async t=>{const e=t&&await t.getIdTokenResult(),s=e&&(new Date().getTime()-Date.parse(e.issuedAtTime))/1e3;if(s&&s>R0)return;const i=e==null?void 0:e.token;gd!==i&&(gd=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function D0(n=Oc()){const t=ka(n,"auth");if(t.isInitialized())return t.getImmediate();const e=cw(n,{popupRedirectResolver:S0,persistence:[Nw,Iw,Tg]}),s=Gp("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(s,location.origin);if(location.origin===r.origin){const o=C0(r.toString());bw(e,o,()=>o(e.currentUser)),yw(e,a=>o(a))}}const i=qp("auth");return i&&hw(e,`http://${i}`),e}function M0(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}rw({loadJS(n){return new Promise((t,e)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=t,s.onerror=i=>{const r=qe("internal-error");r.customData=i,e(r)},s.type="text/javascript",s.charset="UTF-8",M0().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});P0("Browser");var md=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Jn,Cg;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(S,g){function y(){}y.prototype=g.prototype,S.F=g.prototype,S.prototype=new y,S.prototype.constructor=S,S.D=function(b,T,A){for(var x=Array(arguments.length-2),W=2;W<arguments.length;W++)x[W-2]=arguments[W];return g.prototype[T].apply(b,x)}}function e(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}t(s,e),s.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(S,g,y){y||(y=0);const b=Array(16);if(typeof g=="string")for(var T=0;T<16;++T)b[T]=g.charCodeAt(y++)|g.charCodeAt(y++)<<8|g.charCodeAt(y++)<<16|g.charCodeAt(y++)<<24;else for(T=0;T<16;++T)b[T]=g[y++]|g[y++]<<8|g[y++]<<16|g[y++]<<24;g=S.g[0],y=S.g[1],T=S.g[2];let A=S.g[3],x;x=g+(A^y&(T^A))+b[0]+3614090360&4294967295,g=y+(x<<7&4294967295|x>>>25),x=A+(T^g&(y^T))+b[1]+3905402710&4294967295,A=g+(x<<12&4294967295|x>>>20),x=T+(y^A&(g^y))+b[2]+606105819&4294967295,T=A+(x<<17&4294967295|x>>>15),x=y+(g^T&(A^g))+b[3]+3250441966&4294967295,y=T+(x<<22&4294967295|x>>>10),x=g+(A^y&(T^A))+b[4]+4118548399&4294967295,g=y+(x<<7&4294967295|x>>>25),x=A+(T^g&(y^T))+b[5]+1200080426&4294967295,A=g+(x<<12&4294967295|x>>>20),x=T+(y^A&(g^y))+b[6]+2821735955&4294967295,T=A+(x<<17&4294967295|x>>>15),x=y+(g^T&(A^g))+b[7]+4249261313&4294967295,y=T+(x<<22&4294967295|x>>>10),x=g+(A^y&(T^A))+b[8]+1770035416&4294967295,g=y+(x<<7&4294967295|x>>>25),x=A+(T^g&(y^T))+b[9]+2336552879&4294967295,A=g+(x<<12&4294967295|x>>>20),x=T+(y^A&(g^y))+b[10]+4294925233&4294967295,T=A+(x<<17&4294967295|x>>>15),x=y+(g^T&(A^g))+b[11]+2304563134&4294967295,y=T+(x<<22&4294967295|x>>>10),x=g+(A^y&(T^A))+b[12]+1804603682&4294967295,g=y+(x<<7&4294967295|x>>>25),x=A+(T^g&(y^T))+b[13]+4254626195&4294967295,A=g+(x<<12&4294967295|x>>>20),x=T+(y^A&(g^y))+b[14]+2792965006&4294967295,T=A+(x<<17&4294967295|x>>>15),x=y+(g^T&(A^g))+b[15]+1236535329&4294967295,y=T+(x<<22&4294967295|x>>>10),x=g+(T^A&(y^T))+b[1]+4129170786&4294967295,g=y+(x<<5&4294967295|x>>>27),x=A+(y^T&(g^y))+b[6]+3225465664&4294967295,A=g+(x<<9&4294967295|x>>>23),x=T+(g^y&(A^g))+b[11]+643717713&4294967295,T=A+(x<<14&4294967295|x>>>18),x=y+(A^g&(T^A))+b[0]+3921069994&4294967295,y=T+(x<<20&4294967295|x>>>12),x=g+(T^A&(y^T))+b[5]+3593408605&4294967295,g=y+(x<<5&4294967295|x>>>27),x=A+(y^T&(g^y))+b[10]+38016083&4294967295,A=g+(x<<9&4294967295|x>>>23),x=T+(g^y&(A^g))+b[15]+3634488961&4294967295,T=A+(x<<14&4294967295|x>>>18),x=y+(A^g&(T^A))+b[4]+3889429448&4294967295,y=T+(x<<20&4294967295|x>>>12),x=g+(T^A&(y^T))+b[9]+568446438&4294967295,g=y+(x<<5&4294967295|x>>>27),x=A+(y^T&(g^y))+b[14]+3275163606&4294967295,A=g+(x<<9&4294967295|x>>>23),x=T+(g^y&(A^g))+b[3]+4107603335&4294967295,T=A+(x<<14&4294967295|x>>>18),x=y+(A^g&(T^A))+b[8]+1163531501&4294967295,y=T+(x<<20&4294967295|x>>>12),x=g+(T^A&(y^T))+b[13]+2850285829&4294967295,g=y+(x<<5&4294967295|x>>>27),x=A+(y^T&(g^y))+b[2]+4243563512&4294967295,A=g+(x<<9&4294967295|x>>>23),x=T+(g^y&(A^g))+b[7]+1735328473&4294967295,T=A+(x<<14&4294967295|x>>>18),x=y+(A^g&(T^A))+b[12]+2368359562&4294967295,y=T+(x<<20&4294967295|x>>>12),x=g+(y^T^A)+b[5]+4294588738&4294967295,g=y+(x<<4&4294967295|x>>>28),x=A+(g^y^T)+b[8]+2272392833&4294967295,A=g+(x<<11&4294967295|x>>>21),x=T+(A^g^y)+b[11]+1839030562&4294967295,T=A+(x<<16&4294967295|x>>>16),x=y+(T^A^g)+b[14]+4259657740&4294967295,y=T+(x<<23&4294967295|x>>>9),x=g+(y^T^A)+b[1]+2763975236&4294967295,g=y+(x<<4&4294967295|x>>>28),x=A+(g^y^T)+b[4]+1272893353&4294967295,A=g+(x<<11&4294967295|x>>>21),x=T+(A^g^y)+b[7]+4139469664&4294967295,T=A+(x<<16&4294967295|x>>>16),x=y+(T^A^g)+b[10]+3200236656&4294967295,y=T+(x<<23&4294967295|x>>>9),x=g+(y^T^A)+b[13]+681279174&4294967295,g=y+(x<<4&4294967295|x>>>28),x=A+(g^y^T)+b[0]+3936430074&4294967295,A=g+(x<<11&4294967295|x>>>21),x=T+(A^g^y)+b[3]+3572445317&4294967295,T=A+(x<<16&4294967295|x>>>16),x=y+(T^A^g)+b[6]+76029189&4294967295,y=T+(x<<23&4294967295|x>>>9),x=g+(y^T^A)+b[9]+3654602809&4294967295,g=y+(x<<4&4294967295|x>>>28),x=A+(g^y^T)+b[12]+3873151461&4294967295,A=g+(x<<11&4294967295|x>>>21),x=T+(A^g^y)+b[15]+530742520&4294967295,T=A+(x<<16&4294967295|x>>>16),x=y+(T^A^g)+b[2]+3299628645&4294967295,y=T+(x<<23&4294967295|x>>>9),x=g+(T^(y|~A))+b[0]+4096336452&4294967295,g=y+(x<<6&4294967295|x>>>26),x=A+(y^(g|~T))+b[7]+1126891415&4294967295,A=g+(x<<10&4294967295|x>>>22),x=T+(g^(A|~y))+b[14]+2878612391&4294967295,T=A+(x<<15&4294967295|x>>>17),x=y+(A^(T|~g))+b[5]+4237533241&4294967295,y=T+(x<<21&4294967295|x>>>11),x=g+(T^(y|~A))+b[12]+1700485571&4294967295,g=y+(x<<6&4294967295|x>>>26),x=A+(y^(g|~T))+b[3]+2399980690&4294967295,A=g+(x<<10&4294967295|x>>>22),x=T+(g^(A|~y))+b[10]+4293915773&4294967295,T=A+(x<<15&4294967295|x>>>17),x=y+(A^(T|~g))+b[1]+2240044497&4294967295,y=T+(x<<21&4294967295|x>>>11),x=g+(T^(y|~A))+b[8]+1873313359&4294967295,g=y+(x<<6&4294967295|x>>>26),x=A+(y^(g|~T))+b[15]+4264355552&4294967295,A=g+(x<<10&4294967295|x>>>22),x=T+(g^(A|~y))+b[6]+2734768916&4294967295,T=A+(x<<15&4294967295|x>>>17),x=y+(A^(T|~g))+b[13]+1309151649&4294967295,y=T+(x<<21&4294967295|x>>>11),x=g+(T^(y|~A))+b[4]+4149444226&4294967295,g=y+(x<<6&4294967295|x>>>26),x=A+(y^(g|~T))+b[11]+3174756917&4294967295,A=g+(x<<10&4294967295|x>>>22),x=T+(g^(A|~y))+b[2]+718787259&4294967295,T=A+(x<<15&4294967295|x>>>17),x=y+(A^(T|~g))+b[9]+3951481745&4294967295,S.g[0]=S.g[0]+g&4294967295,S.g[1]=S.g[1]+(T+(x<<21&4294967295|x>>>11))&4294967295,S.g[2]=S.g[2]+T&4294967295,S.g[3]=S.g[3]+A&4294967295}s.prototype.v=function(S,g){g===void 0&&(g=S.length);const y=g-this.blockSize,b=this.C;let T=this.h,A=0;for(;A<g;){if(T==0)for(;A<=y;)i(this,S,A),A+=this.blockSize;if(typeof S=="string"){for(;A<g;)if(b[T++]=S.charCodeAt(A++),T==this.blockSize){i(this,b),T=0;break}}else for(;A<g;)if(b[T++]=S[A++],T==this.blockSize){i(this,b),T=0;break}}this.h=T,this.o+=g},s.prototype.A=function(){var S=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);S[0]=128;for(var g=1;g<S.length-8;++g)S[g]=0;g=this.o*8;for(var y=S.length-8;y<S.length;++y)S[y]=g&255,g/=256;for(this.v(S),S=Array(16),g=0,y=0;y<4;++y)for(let b=0;b<32;b+=8)S[g++]=this.g[y]>>>b&255;return S};function r(S,g){var y=a;return Object.prototype.hasOwnProperty.call(y,S)?y[S]:y[S]=g(S)}function o(S,g){this.h=g;const y=[];let b=!0;for(let T=S.length-1;T>=0;T--){const A=S[T]|0;b&&A==g||(y[T]=A,b=!1)}this.g=y}var a={};function l(S){return-128<=S&&S<128?r(S,function(g){return new o([g|0],g<0?-1:0)}):new o([S|0],S<0?-1:0)}function u(S){if(isNaN(S)||!isFinite(S))return d;if(S<0)return w(u(-S));const g=[];let y=1;for(let b=0;S>=y;b++)g[b]=S/y|0,y*=4294967296;return new o(g,0)}function h(S,g){if(S.length==0)throw Error("number format error: empty string");if(g=g||10,g<2||36<g)throw Error("radix out of range: "+g);if(S.charAt(0)=="-")return w(h(S.substring(1),g));if(S.indexOf("-")>=0)throw Error('number format error: interior "-" character');const y=u(Math.pow(g,8));let b=d;for(let A=0;A<S.length;A+=8){var T=Math.min(8,S.length-A);const x=parseInt(S.substring(A,A+T),g);T<8?(T=u(Math.pow(g,T)),b=b.j(T).add(u(x))):(b=b.j(y),b=b.add(u(x)))}return b}var d=l(0),p=l(1),_=l(16777216);n=o.prototype,n.m=function(){if(E(this))return-w(this).m();let S=0,g=1;for(let y=0;y<this.g.length;y++){const b=this.i(y);S+=(b>=0?b:4294967296+b)*g,g*=4294967296}return S},n.toString=function(S){if(S=S||10,S<2||36<S)throw Error("radix out of range: "+S);if(v(this))return"0";if(E(this))return"-"+w(this).toString(S);const g=u(Math.pow(S,6));var y=this;let b="";for(;;){const T=C(y,g).g;y=P(y,T.j(g));let A=((y.g.length>0?y.g[0]:y.h)>>>0).toString(S);if(y=T,v(y))return A+b;for(;A.length<6;)A="0"+A;b=A+b}},n.i=function(S){return S<0?0:S<this.g.length?this.g[S]:this.h};function v(S){if(S.h!=0)return!1;for(let g=0;g<S.g.length;g++)if(S.g[g]!=0)return!1;return!0}function E(S){return S.h==-1}n.l=function(S){return S=P(this,S),E(S)?-1:v(S)?0:1};function w(S){const g=S.g.length,y=[];for(let b=0;b<g;b++)y[b]=~S.g[b];return new o(y,~S.h).add(p)}n.abs=function(){return E(this)?w(this):this},n.add=function(S){const g=Math.max(this.g.length,S.g.length),y=[];let b=0;for(let T=0;T<=g;T++){let A=b+(this.i(T)&65535)+(S.i(T)&65535),x=(A>>>16)+(this.i(T)>>>16)+(S.i(T)>>>16);b=x>>>16,A&=65535,x&=65535,y[T]=x<<16|A}return new o(y,y[y.length-1]&-2147483648?-1:0)};function P(S,g){return S.add(w(g))}n.j=function(S){if(v(this)||v(S))return d;if(E(this))return E(S)?w(this).j(w(S)):w(w(this).j(S));if(E(S))return w(this.j(w(S)));if(this.l(_)<0&&S.l(_)<0)return u(this.m()*S.m());const g=this.g.length+S.g.length,y=[];for(var b=0;b<2*g;b++)y[b]=0;for(b=0;b<this.g.length;b++)for(let T=0;T<S.g.length;T++){const A=this.i(b)>>>16,x=this.i(b)&65535,W=S.i(T)>>>16,K=S.i(T)&65535;y[2*b+2*T]+=x*K,R(y,2*b+2*T),y[2*b+2*T+1]+=A*K,R(y,2*b+2*T+1),y[2*b+2*T+1]+=x*W,R(y,2*b+2*T+1),y[2*b+2*T+2]+=A*W,R(y,2*b+2*T+2)}for(S=0;S<g;S++)y[S]=y[2*S+1]<<16|y[2*S];for(S=g;S<2*g;S++)y[S]=0;return new o(y,0)};function R(S,g){for(;(S[g]&65535)!=S[g];)S[g+1]+=S[g]>>>16,S[g]&=65535,g++}function k(S,g){this.g=S,this.h=g}function C(S,g){if(v(g))throw Error("division by zero");if(v(S))return new k(d,d);if(E(S))return g=C(w(S),g),new k(w(g.g),w(g.h));if(E(g))return g=C(S,w(g)),new k(w(g.g),g.h);if(S.g.length>30){if(E(S)||E(g))throw Error("slowDivide_ only works with positive integers.");for(var y=p,b=g;b.l(S)<=0;)y=M(y),b=M(b);var T=L(y,1),A=L(b,1);for(b=L(b,2),y=L(y,2);!v(b);){var x=A.add(b);x.l(S)<=0&&(T=T.add(y),A=x),b=L(b,1),y=L(y,1)}return g=P(S,T.j(g)),new k(T,g)}for(T=d;S.l(g)>=0;){for(y=Math.max(1,Math.floor(S.m()/g.m())),b=Math.ceil(Math.log(y)/Math.LN2),b=b<=48?1:Math.pow(2,b-48),A=u(y),x=A.j(g);E(x)||x.l(S)>0;)y-=b,A=u(y),x=A.j(g);v(A)&&(A=p),T=T.add(A),S=P(S,x)}return new k(T,S)}n.B=function(S){return C(this,S).h},n.and=function(S){const g=Math.max(this.g.length,S.g.length),y=[];for(let b=0;b<g;b++)y[b]=this.i(b)&S.i(b);return new o(y,this.h&S.h)},n.or=function(S){const g=Math.max(this.g.length,S.g.length),y=[];for(let b=0;b<g;b++)y[b]=this.i(b)|S.i(b);return new o(y,this.h|S.h)},n.xor=function(S){const g=Math.max(this.g.length,S.g.length),y=[];for(let b=0;b<g;b++)y[b]=this.i(b)^S.i(b);return new o(y,this.h^S.h)};function M(S){const g=S.g.length+1,y=[];for(let b=0;b<g;b++)y[b]=S.i(b)<<1|S.i(b-1)>>>31;return new o(y,S.h)}function L(S,g){const y=g>>5;g%=32;const b=S.g.length-y,T=[];for(let A=0;A<b;A++)T[A]=g>0?S.i(A+y)>>>g|S.i(A+y+1)<<32-g:S.i(A+y);return new o(T,S.h)}s.prototype.digest=s.prototype.A,s.prototype.reset=s.prototype.u,s.prototype.update=s.prototype.v,Cg=s,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=h,Jn=o}).apply(typeof md<"u"?md:typeof self<"u"?self:typeof window<"u"?window:{});var lo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Dg,Xi,Mg,Lo,nc,Og,Lg,Ng;(function(){var n,t=Object.defineProperty;function e(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof lo=="object"&&lo];for(var f=0;f<c.length;++f){var m=c[f];if(m&&m.Math==Math)return m}throw Error("Cannot find global object")}var s=e(this);function i(c,f){if(f)t:{var m=s;c=c.split(".");for(var I=0;I<c.length-1;I++){var D=c[I];if(!(D in m))break t;m=m[D]}c=c[c.length-1],I=m[c],f=f(I),f!=I&&f!=null&&t(m,c,{configurable:!0,writable:!0,value:f})}}i("Symbol.dispose",function(c){return c||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(c){return c||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(c){return c||function(f){var m=[],I;for(I in f)Object.prototype.hasOwnProperty.call(f,I)&&m.push([I,f[I]]);return m}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var r=r||{},o=this||self;function a(c){var f=typeof c;return f=="object"&&c!=null||f=="function"}function l(c,f,m){return c.call.apply(c.bind,arguments)}function u(c,f,m){return u=l,u.apply(null,arguments)}function h(c,f){var m=Array.prototype.slice.call(arguments,1);return function(){var I=m.slice();return I.push.apply(I,arguments),c.apply(this,I)}}function d(c,f){function m(){}m.prototype=f.prototype,c.Z=f.prototype,c.prototype=new m,c.prototype.constructor=c,c.Ob=function(I,D,O){for(var F=Array(arguments.length-2),nt=2;nt<arguments.length;nt++)F[nt-2]=arguments[nt];return f.prototype[D].apply(I,F)}}var p=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?c=>c&&AsyncContext.Snapshot.wrap(c):c=>c;function _(c){const f=c.length;if(f>0){const m=Array(f);for(let I=0;I<f;I++)m[I]=c[I];return m}return[]}function v(c,f){for(let I=1;I<arguments.length;I++){const D=arguments[I];var m=typeof D;if(m=m!="object"?m:D?Array.isArray(D)?"array":m:"null",m=="array"||m=="object"&&typeof D.length=="number"){m=c.length||0;const O=D.length||0;c.length=m+O;for(let F=0;F<O;F++)c[m+F]=D[F]}else c.push(D)}}class E{constructor(f,m){this.i=f,this.j=m,this.h=0,this.g=null}get(){let f;return this.h>0?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function w(c){o.setTimeout(()=>{throw c},0)}function P(){var c=S;let f=null;return c.g&&(f=c.g,c.g=c.g.next,c.g||(c.h=null),f.next=null),f}class R{constructor(){this.h=this.g=null}add(f,m){const I=k.get();I.set(f,m),this.h?this.h.next=I:this.g=I,this.h=I}}var k=new E(()=>new C,c=>c.reset());class C{constructor(){this.next=this.g=this.h=null}set(f,m){this.h=f,this.g=m,this.next=null}reset(){this.next=this.g=this.h=null}}let M,L=!1,S=new R,g=()=>{const c=Promise.resolve(void 0);M=()=>{c.then(y)}};function y(){for(var c;c=P();){try{c.h.call(c.g)}catch(m){w(m)}var f=k;f.j(c),f.h<100&&(f.h++,c.next=f.g,f.g=c)}L=!1}function b(){this.u=this.u,this.C=this.C}b.prototype.u=!1,b.prototype.dispose=function(){this.u||(this.u=!0,this.N())},b.prototype[Symbol.dispose]=function(){this.dispose()},b.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function T(c,f){this.type=c,this.g=this.target=f,this.defaultPrevented=!1}T.prototype.h=function(){this.defaultPrevented=!0};var A=(function(){if(!o.addEventListener||!Object.defineProperty)return!1;var c=!1,f=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const m=()=>{};o.addEventListener("test",m,f),o.removeEventListener("test",m,f)}catch{}return c})();function x(c){return/^[\s\xa0]*$/.test(c)}function W(c,f){T.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c&&this.init(c,f)}d(W,T),W.prototype.init=function(c,f){const m=this.type=c.type,I=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;this.target=c.target||c.srcElement,this.g=f,f=c.relatedTarget,f||(m=="mouseover"?f=c.fromElement:m=="mouseout"&&(f=c.toElement)),this.relatedTarget=f,I?(this.clientX=I.clientX!==void 0?I.clientX:I.pageX,this.clientY=I.clientY!==void 0?I.clientY:I.pageY,this.screenX=I.screenX||0,this.screenY=I.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=c.pointerType,this.state=c.state,this.i=c,c.defaultPrevented&&W.Z.h.call(this)},W.prototype.h=function(){W.Z.h.call(this);const c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var K="closure_listenable_"+(Math.random()*1e6|0),it=0;function j(c,f,m,I,D){this.listener=c,this.proxy=null,this.src=f,this.type=m,this.capture=!!I,this.ha=D,this.key=++it,this.da=this.fa=!1}function rt(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function B(c,f,m){for(const I in c)f.call(m,c[I],I,c)}function Pt(c,f){for(const m in c)f.call(void 0,c[m],m,c)}function Y(c){const f={};for(const m in c)f[m]=c[m];return f}const Q="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function z(c,f){let m,I;for(let D=1;D<arguments.length;D++){I=arguments[D];for(m in I)c[m]=I[m];for(let O=0;O<Q.length;O++)m=Q[O],Object.prototype.hasOwnProperty.call(I,m)&&(c[m]=I[m])}}function mt(c){this.src=c,this.g={},this.h=0}mt.prototype.add=function(c,f,m,I,D){const O=c.toString();c=this.g[O],c||(c=this.g[O]=[],this.h++);const F=wt(c,f,I,D);return F>-1?(f=c[F],m||(f.fa=!1)):(f=new j(f,this.src,O,!!I,D),f.fa=m,c.push(f)),f};function yt(c,f){const m=f.type;if(m in c.g){var I=c.g[m],D=Array.prototype.indexOf.call(I,f,void 0),O;(O=D>=0)&&Array.prototype.splice.call(I,D,1),O&&(rt(f),c.g[m].length==0&&(delete c.g[m],c.h--))}}function wt(c,f,m,I){for(let D=0;D<c.length;++D){const O=c[D];if(!O.da&&O.listener==f&&O.capture==!!m&&O.ha==I)return D}return-1}var le="closure_lm_"+(Math.random()*1e6|0),ot={};function ft(c,f,m,I,D){if(Array.isArray(f)){for(let O=0;O<f.length;O++)ft(c,f[O],m,I,D);return null}return m=gt(m),c&&c[K]?c.J(f,m,a(I)?!!I.capture:!1,D):Dt(c,f,m,!1,I,D)}function Dt(c,f,m,I,D,O){if(!f)throw Error("Invalid event type");const F=a(D)?!!D.capture:!!D;let nt=tt(c);if(nt||(c[le]=nt=new mt(c)),m=nt.add(f,m,I,F,O),m.proxy)return m;if(I=at(),m.proxy=I,I.src=c,I.listener=m,c.addEventListener)A||(D=F),D===void 0&&(D=!1),c.addEventListener(f.toString(),I,D);else if(c.attachEvent)c.attachEvent(It(f.toString()),I);else if(c.addListener&&c.removeListener)c.addListener(I);else throw Error("addEventListener and attachEvent are unavailable.");return m}function at(){function c(m){return f.call(c.src,c.listener,m)}const f=bt;return c}function Tt(c,f,m,I,D){if(Array.isArray(f))for(var O=0;O<f.length;O++)Tt(c,f[O],m,I,D);else I=a(I)?!!I.capture:!!I,m=gt(m),c&&c[K]?(c=c.i,O=String(f).toString(),O in c.g&&(f=c.g[O],m=wt(f,m,I,D),m>-1&&(rt(f[m]),Array.prototype.splice.call(f,m,1),f.length==0&&(delete c.g[O],c.h--)))):c&&(c=tt(c))&&(f=c.g[f.toString()],c=-1,f&&(c=wt(f,m,I,D)),(m=c>-1?f[c]:null)&&Nt(m))}function Nt(c){if(typeof c!="number"&&c&&!c.da){var f=c.src;if(f&&f[K])yt(f.i,c);else{var m=c.type,I=c.proxy;f.removeEventListener?f.removeEventListener(m,I,c.capture):f.detachEvent?f.detachEvent(It(m),I):f.addListener&&f.removeListener&&f.removeListener(I),(m=tt(f))?(yt(m,c),m.h==0&&(m.src=null,f[le]=null)):rt(c)}}}function It(c){return c in ot?ot[c]:ot[c]="on"+c}function bt(c,f){if(c.da)c=!0;else{f=new W(f,this);const m=c.listener,I=c.ha||c.src;c.fa&&Nt(c),c=m.call(I,f)}return c}function tt(c){return c=c[le],c instanceof mt?c:null}var Ht="__closure_events_fn_"+(Math.random()*1e9>>>0);function gt(c){return typeof c=="function"?c:(c[Ht]||(c[Ht]=function(f){return c.handleEvent(f)}),c[Ht])}function et(){b.call(this),this.i=new mt(this),this.M=this,this.G=null}d(et,b),et.prototype[K]=!0,et.prototype.removeEventListener=function(c,f,m,I){Tt(this,c,f,m,I)};function dt(c,f){var m,I=c.G;if(I)for(m=[];I;I=I.G)m.push(I);if(c=c.M,I=f.type||f,typeof f=="string")f=new T(f,c);else if(f instanceof T)f.target=f.target||c;else{var D=f;f=new T(I,c),z(f,D)}D=!0;let O,F;if(m)for(F=m.length-1;F>=0;F--)O=f.g=m[F],D=Ue(O,I,!0,f)&&D;if(O=f.g=c,D=Ue(O,I,!0,f)&&D,D=Ue(O,I,!1,f)&&D,m)for(F=0;F<m.length;F++)O=f.g=m[F],D=Ue(O,I,!1,f)&&D}et.prototype.N=function(){if(et.Z.N.call(this),this.i){var c=this.i;for(const f in c.g){const m=c.g[f];for(let I=0;I<m.length;I++)rt(m[I]);delete c.g[f],c.h--}}this.G=null},et.prototype.J=function(c,f,m,I){return this.i.add(String(c),f,!1,m,I)},et.prototype.K=function(c,f,m,I){return this.i.add(String(c),f,!0,m,I)};function Ue(c,f,m,I){if(f=c.i.g[String(f)],!f)return!0;f=f.concat();let D=!0;for(let O=0;O<f.length;++O){const F=f[O];if(F&&!F.da&&F.capture==m){const nt=F.listener,Kt=F.ha||F.src;F.fa&&yt(c.i,F),D=nt.call(Kt,I)!==!1&&D}}return D&&!I.defaultPrevented}function De(c,f){if(typeof c!="function")if(c&&typeof c.handleEvent=="function")c=u(c.handleEvent,c);else throw Error("Invalid listener argument");return Number(f)>2147483647?-1:o.setTimeout(c,f||0)}function Cn(c){c.g=De(()=>{c.g=null,c.i&&(c.i=!1,Cn(c))},c.l);const f=c.h;c.h=null,c.m.apply(null,f)}class Zt extends b{constructor(f,m){super(),this.m=f,this.l=m,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:Cn(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ce(c){b.call(this),this.h=c,this.g={}}d(ce,b);var $t=[];function se(c){B(c.g,function(f,m){this.g.hasOwnProperty(m)&&Nt(f)},c),c.g={}}ce.prototype.N=function(){ce.Z.N.call(this),se(this)},ce.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ie=o.JSON.stringify,Pi=o.JSON.parse,Yr=class{stringify(c){return o.JSON.stringify(c,void 0)}parse(c){return o.JSON.parse(c,void 0)}};function fn(){}function Se(){}var Be={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Ws(){T.call(this,"d")}d(Ws,T);function nl(){T.call(this,"c")}d(nl,T);var hs={},Zu=null;function Xr(){return Zu=Zu||new et}hs.Ia="serverreachability";function th(c){T.call(this,hs.Ia,c)}d(th,T);function ki(c){const f=Xr();dt(f,new th(f))}hs.STAT_EVENT="statevent";function eh(c,f){T.call(this,hs.STAT_EVENT,c),this.stat=f}d(eh,T);function me(c){const f=Xr();dt(f,new eh(f,c))}hs.Ja="timingevent";function nh(c,f){T.call(this,hs.Ja,c),this.size=f}d(nh,T);function Ri(c,f){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){c()},f)}function Ci(){this.g=!0}Ci.prototype.ua=function(){this.g=!1};function xy(c,f,m,I,D,O){c.info(function(){if(c.g)if(O){var F="",nt=O.split("&");for(let St=0;St<nt.length;St++){var Kt=nt[St].split("=");if(Kt.length>1){const te=Kt[0];Kt=Kt[1];const Ye=te.split("_");F=Ye.length>=2&&Ye[1]=="type"?F+(te+"="+Kt+"&"):F+(te+"=redacted&")}}}else F=null;else F=O;return"XMLHTTP REQ ("+I+") [attempt "+D+"]: "+f+`
`+m+`
`+F})}function Ay(c,f,m,I,D,O,F){c.info(function(){return"XMLHTTP RESP ("+I+") [ attempt "+D+"]: "+f+`
`+m+`
`+O+" "+F})}function Ks(c,f,m,I){c.info(function(){return"XMLHTTP TEXT ("+f+"): "+ky(c,m)+(I?" "+I:"")})}function Py(c,f){c.info(function(){return"TIMEOUT: "+f})}Ci.prototype.info=function(){};function ky(c,f){if(!c.g)return f;if(!f)return null;try{const O=JSON.parse(f);if(O){for(c=0;c<O.length;c++)if(Array.isArray(O[c])){var m=O[c];if(!(m.length<2)){var I=m[1];if(Array.isArray(I)&&!(I.length<1)){var D=I[0];if(D!="noop"&&D!="stop"&&D!="close")for(let F=1;F<I.length;F++)I[F]=""}}}}return Ie(O)}catch{return f}}var Qr={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},sh={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},ih;function sl(){}d(sl,fn),sl.prototype.g=function(){return new XMLHttpRequest},ih=new sl;function Di(c){return encodeURIComponent(String(c))}function Ry(c){var f=1;c=c.split(":");const m=[];for(;f>0&&c.length;)m.push(c.shift()),f--;return c.length&&m.push(c.join(":")),m}function Dn(c,f,m,I){this.j=c,this.i=f,this.l=m,this.S=I||1,this.V=new ce(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new rh}function rh(){this.i=null,this.g="",this.h=!1}var oh={},il={};function rl(c,f,m){c.M=1,c.A=Zr(Ge(f)),c.u=m,c.R=!0,ah(c,null)}function ah(c,f){c.F=Date.now(),Jr(c),c.B=Ge(c.A);var m=c.B,I=c.S;Array.isArray(I)||(I=[String(I)]),vh(m.i,"t",I),c.C=0,m=c.j.L,c.h=new rh,c.g=Fh(c.j,m?f:null,!c.u),c.P>0&&(c.O=new Zt(u(c.Y,c,c.g),c.P)),f=c.V,m=c.g,I=c.ba;var D="readystatechange";Array.isArray(D)||(D&&($t[0]=D.toString()),D=$t);for(let O=0;O<D.length;O++){const F=ft(m,D[O],I||f.handleEvent,!1,f.h||f);if(!F)break;f.g[F.key]=F}f=c.J?Y(c.J):{},c.u?(c.v||(c.v="POST"),f["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.B,c.v,c.u,f)):(c.v="GET",c.g.ea(c.B,c.v,null,f)),ki(),xy(c.i,c.v,c.B,c.l,c.S,c.u)}Dn.prototype.ba=function(c){c=c.target;const f=this.O;f&&Ln(c)==3?f.j():this.Y(c)},Dn.prototype.Y=function(c){try{if(c==this.g)t:{const nt=Ln(this.g),Kt=this.g.ya(),St=this.g.ca();if(!(nt<3)&&(nt!=3||this.g&&(this.h.h||this.g.la()||Ah(this.g)))){this.K||nt!=4||Kt==7||(Kt==8||St<=0?ki(3):ki(2)),ol(this);var f=this.g.ca();this.X=f;var m=Cy(this);if(this.o=f==200,Ay(this.i,this.v,this.B,this.l,this.S,nt,f),this.o){if(this.U&&!this.L){e:{if(this.g){var I,D=this.g;if((I=D.g?D.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!x(I)){var O=I;break e}}O=null}if(c=O)Ks(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,al(this,c);else{this.o=!1,this.m=3,me(12),ds(this),Mi(this);break t}}if(this.R){c=!0;let te;for(;!this.K&&this.C<m.length;)if(te=Dy(this,m),te==il){nt==4&&(this.m=4,me(14),c=!1),Ks(this.i,this.l,null,"[Incomplete Response]");break}else if(te==oh){this.m=4,me(15),Ks(this.i,this.l,m,"[Invalid Chunk]"),c=!1;break}else Ks(this.i,this.l,te,null),al(this,te);if(lh(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),nt!=4||m.length!=0||this.h.h||(this.m=1,me(16),c=!1),this.o=this.o&&c,!c)Ks(this.i,this.l,m,"[Invalid Chunked Response]"),ds(this),Mi(this);else if(m.length>0&&!this.W){this.W=!0;var F=this.j;F.g==this&&F.aa&&!F.P&&(F.j.info("Great, no buffering proxy detected. Bytes received: "+m.length),gl(F),F.P=!0,me(11))}}else Ks(this.i,this.l,m,null),al(this,m);nt==4&&ds(this),this.o&&!this.K&&(nt==4?Oh(this.j,this):(this.o=!1,Jr(this)))}else Wy(this.g),f==400&&m.indexOf("Unknown SID")>0?(this.m=3,me(12)):(this.m=0,me(13)),ds(this),Mi(this)}}}catch{}finally{}};function Cy(c){if(!lh(c))return c.g.la();const f=Ah(c.g);if(f==="")return"";let m="";const I=f.length,D=Ln(c.g)==4;if(!c.h.i){if(typeof TextDecoder>"u")return ds(c),Mi(c),"";c.h.i=new o.TextDecoder}for(let O=0;O<I;O++)c.h.h=!0,m+=c.h.i.decode(f[O],{stream:!(D&&O==I-1)});return f.length=0,c.h.g+=m,c.C=0,c.h.g}function lh(c){return c.g?c.v=="GET"&&c.M!=2&&c.j.Aa:!1}function Dy(c,f){var m=c.C,I=f.indexOf(`
`,m);return I==-1?il:(m=Number(f.substring(m,I)),isNaN(m)?oh:(I+=1,I+m>f.length?il:(f=f.slice(I,I+m),c.C=I+m,f)))}Dn.prototype.cancel=function(){this.K=!0,ds(this)};function Jr(c){c.T=Date.now()+c.H,ch(c,c.H)}function ch(c,f){if(c.D!=null)throw Error("WatchDog timer not null");c.D=Ri(u(c.aa,c),f)}function ol(c){c.D&&(o.clearTimeout(c.D),c.D=null)}Dn.prototype.aa=function(){this.D=null;const c=Date.now();c-this.T>=0?(Py(this.i,this.B),this.M!=2&&(ki(),me(17)),ds(this),this.m=2,Mi(this)):ch(this,this.T-c)};function Mi(c){c.j.I==0||c.K||Oh(c.j,c)}function ds(c){ol(c);var f=c.O;f&&typeof f.dispose=="function"&&f.dispose(),c.O=null,se(c.V),c.g&&(f=c.g,c.g=null,f.abort(),f.dispose())}function al(c,f){try{var m=c.j;if(m.I!=0&&(m.g==c||ll(m.h,c))){if(!c.L&&ll(m.h,c)&&m.I==3){try{var I=m.Ba.g.parse(f)}catch{I=null}if(Array.isArray(I)&&I.length==3){var D=I;if(D[0]==0){t:if(!m.v){if(m.g)if(m.g.F+3e3<c.F)io(m),no(m);else break t;pl(m),me(18)}}else m.xa=D[1],0<m.xa-m.K&&D[2]<37500&&m.F&&m.A==0&&!m.C&&(m.C=Ri(u(m.Va,m),6e3));dh(m.h)<=1&&m.ta&&(m.ta=void 0)}else ps(m,11)}else if((c.L||m.g==c)&&io(m),!x(f))for(D=m.Ba.g.parse(f),f=0;f<D.length;f++){let St=D[f];const te=St[0];if(!(te<=m.K))if(m.K=te,St=St[1],m.I==2)if(St[0]=="c"){m.M=St[1],m.ba=St[2];const Ye=St[3];Ye!=null&&(m.ka=Ye,m.j.info("VER="+m.ka));const gs=St[4];gs!=null&&(m.za=gs,m.j.info("SVER="+m.za));const Nn=St[5];Nn!=null&&typeof Nn=="number"&&Nn>0&&(I=1.5*Nn,m.O=I,m.j.info("backChannelRequestTimeoutMs_="+I)),I=m;const Vn=c.g;if(Vn){const oo=Vn.g?Vn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(oo){var O=I.h;O.g||oo.indexOf("spdy")==-1&&oo.indexOf("quic")==-1&&oo.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&(cl(O,O.h),O.h=null))}if(I.G){const ml=Vn.g?Vn.g.getResponseHeader("X-HTTP-Session-Id"):null;ml&&(I.wa=ml,kt(I.J,I.G,ml))}}m.I=3,m.l&&m.l.ra(),m.aa&&(m.T=Date.now()-c.F,m.j.info("Handshake RTT: "+m.T+"ms")),I=m;var F=c;if(I.na=Vh(I,I.L?I.ba:null,I.W),F.L){fh(I.h,F);var nt=F,Kt=I.O;Kt&&(nt.H=Kt),nt.D&&(ol(nt),Jr(nt)),I.g=F}else Dh(I);m.i.length>0&&so(m)}else St[0]!="stop"&&St[0]!="close"||ps(m,7);else m.I==3&&(St[0]=="stop"||St[0]=="close"?St[0]=="stop"?ps(m,7):fl(m):St[0]!="noop"&&m.l&&m.l.qa(St),m.A=0)}}ki(4)}catch{}}var My=class{constructor(c,f){this.g=c,this.map=f}};function uh(c){this.l=c||10,o.PerformanceNavigationTiming?(c=o.performance.getEntriesByType("navigation"),c=c.length>0&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function hh(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function dh(c){return c.h?1:c.g?c.g.size:0}function ll(c,f){return c.h?c.h==f:c.g?c.g.has(f):!1}function cl(c,f){c.g?c.g.add(f):c.h=f}function fh(c,f){c.h&&c.h==f?c.h=null:c.g&&c.g.has(f)&&c.g.delete(f)}uh.prototype.cancel=function(){if(this.i=ph(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function ph(c){if(c.h!=null)return c.i.concat(c.h.G);if(c.g!=null&&c.g.size!==0){let f=c.i;for(const m of c.g.values())f=f.concat(m.G);return f}return _(c.i)}var gh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Oy(c,f){if(c){c=c.split("&");for(let m=0;m<c.length;m++){const I=c[m].indexOf("=");let D,O=null;I>=0?(D=c[m].substring(0,I),O=c[m].substring(I+1)):D=c[m],f(D,O?decodeURIComponent(O.replace(/\+/g," ")):"")}}}function Mn(c){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let f;c instanceof Mn?(this.l=c.l,Oi(this,c.j),this.o=c.o,this.g=c.g,Li(this,c.u),this.h=c.h,ul(this,wh(c.i)),this.m=c.m):c&&(f=String(c).match(gh))?(this.l=!1,Oi(this,f[1]||"",!0),this.o=Ni(f[2]||""),this.g=Ni(f[3]||"",!0),Li(this,f[4]),this.h=Ni(f[5]||"",!0),ul(this,f[6]||"",!0),this.m=Ni(f[7]||"")):(this.l=!1,this.i=new Fi(null,this.l))}Mn.prototype.toString=function(){const c=[];var f=this.j;f&&c.push(Vi(f,mh,!0),":");var m=this.g;return(m||f=="file")&&(c.push("//"),(f=this.o)&&c.push(Vi(f,mh,!0),"@"),c.push(Di(m).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),m=this.u,m!=null&&c.push(":",String(m))),(m=this.h)&&(this.g&&m.charAt(0)!="/"&&c.push("/"),c.push(Vi(m,m.charAt(0)=="/"?Vy:Ny,!0))),(m=this.i.toString())&&c.push("?",m),(m=this.m)&&c.push("#",Vi(m,Uy)),c.join("")},Mn.prototype.resolve=function(c){const f=Ge(this);let m=!!c.j;m?Oi(f,c.j):m=!!c.o,m?f.o=c.o:m=!!c.g,m?f.g=c.g:m=c.u!=null;var I=c.h;if(m)Li(f,c.u);else if(m=!!c.h){if(I.charAt(0)!="/")if(this.g&&!this.h)I="/"+I;else{var D=f.h.lastIndexOf("/");D!=-1&&(I=f.h.slice(0,D+1)+I)}if(D=I,D==".."||D==".")I="";else if(D.indexOf("./")!=-1||D.indexOf("/.")!=-1){I=D.lastIndexOf("/",0)==0,D=D.split("/");const O=[];for(let F=0;F<D.length;){const nt=D[F++];nt=="."?I&&F==D.length&&O.push(""):nt==".."?((O.length>1||O.length==1&&O[0]!="")&&O.pop(),I&&F==D.length&&O.push("")):(O.push(nt),I=!0)}I=O.join("/")}else I=D}return m?f.h=I:m=c.i.toString()!=="",m?ul(f,wh(c.i)):m=!!c.m,m&&(f.m=c.m),f};function Ge(c){return new Mn(c)}function Oi(c,f,m){c.j=m?Ni(f,!0):f,c.j&&(c.j=c.j.replace(/:$/,""))}function Li(c,f){if(f){if(f=Number(f),isNaN(f)||f<0)throw Error("Bad port number "+f);c.u=f}else c.u=null}function ul(c,f,m){f instanceof Fi?(c.i=f,By(c.i,c.l)):(m||(f=Vi(f,Fy)),c.i=new Fi(f,c.l))}function kt(c,f,m){c.i.set(f,m)}function Zr(c){return kt(c,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),c}function Ni(c,f){return c?f?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function Vi(c,f,m){return typeof c=="string"?(c=encodeURI(c).replace(f,Ly),m&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function Ly(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var mh=/[#\/\?@]/g,Ny=/[#\?:]/g,Vy=/[#\?]/g,Fy=/[#\?@]/g,Uy=/#/g;function Fi(c,f){this.h=this.g=null,this.i=c||null,this.j=!!f}function fs(c){c.g||(c.g=new Map,c.h=0,c.i&&Oy(c.i,function(f,m){c.add(decodeURIComponent(f.replace(/\+/g," ")),m)}))}n=Fi.prototype,n.add=function(c,f){fs(this),this.i=null,c=Gs(this,c);let m=this.g.get(c);return m||this.g.set(c,m=[]),m.push(f),this.h+=1,this};function _h(c,f){fs(c),f=Gs(c,f),c.g.has(f)&&(c.i=null,c.h-=c.g.get(f).length,c.g.delete(f))}function yh(c,f){return fs(c),f=Gs(c,f),c.g.has(f)}n.forEach=function(c,f){fs(this),this.g.forEach(function(m,I){m.forEach(function(D){c.call(f,D,I,this)},this)},this)};function bh(c,f){fs(c);let m=[];if(typeof f=="string")yh(c,f)&&(m=m.concat(c.g.get(Gs(c,f))));else for(c=Array.from(c.g.values()),f=0;f<c.length;f++)m=m.concat(c[f]);return m}n.set=function(c,f){return fs(this),this.i=null,c=Gs(this,c),yh(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[f]),this.h+=1,this},n.get=function(c,f){return c?(c=bh(this,c),c.length>0?String(c[0]):f):f};function vh(c,f,m){_h(c,f),m.length>0&&(c.i=null,c.g.set(Gs(c,f),_(m)),c.h+=m.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],f=Array.from(this.g.keys());for(let I=0;I<f.length;I++){var m=f[I];const D=Di(m);m=bh(this,m);for(let O=0;O<m.length;O++){let F=D;m[O]!==""&&(F+="="+Di(m[O])),c.push(F)}}return this.i=c.join("&")};function wh(c){const f=new Fi;return f.i=c.i,c.g&&(f.g=new Map(c.g),f.h=c.h),f}function Gs(c,f){return f=String(f),c.j&&(f=f.toLowerCase()),f}function By(c,f){f&&!c.j&&(fs(c),c.i=null,c.g.forEach(function(m,I){const D=I.toLowerCase();I!=D&&(_h(this,I),vh(this,D,m))},c)),c.j=f}function $y(c,f){const m=new Ci;if(o.Image){const I=new Image;I.onload=h(On,m,"TestLoadImage: loaded",!0,f,I),I.onerror=h(On,m,"TestLoadImage: error",!1,f,I),I.onabort=h(On,m,"TestLoadImage: abort",!1,f,I),I.ontimeout=h(On,m,"TestLoadImage: timeout",!1,f,I),o.setTimeout(function(){I.ontimeout&&I.ontimeout()},1e4),I.src=c}else f(!1)}function zy(c,f){const m=new Ci,I=new AbortController,D=setTimeout(()=>{I.abort(),On(m,"TestPingServer: timeout",!1,f)},1e4);fetch(c,{signal:I.signal}).then(O=>{clearTimeout(D),O.ok?On(m,"TestPingServer: ok",!0,f):On(m,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(D),On(m,"TestPingServer: error",!1,f)})}function On(c,f,m,I,D){try{D&&(D.onload=null,D.onerror=null,D.onabort=null,D.ontimeout=null),I(m)}catch{}}function jy(){this.g=new Yr}function hl(c){this.i=c.Sb||null,this.h=c.ab||!1}d(hl,fn),hl.prototype.g=function(){return new to(this.i,this.h)};function to(c,f){et.call(this),this.H=c,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}d(to,et),n=to.prototype,n.open=function(c,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=c,this.D=f,this.readyState=1,Bi(this)},n.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const f={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};c&&(f.body=c),(this.H||o).fetch(new Request(this.D,f)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Ui(this)),this.readyState=0},n.Pa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,Bi(this)),this.g&&(this.readyState=3,Bi(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Eh(this)}else c.text().then(this.Oa.bind(this),this.ga.bind(this))};function Eh(c){c.j.read().then(c.Ma.bind(c)).catch(c.ga.bind(c))}n.Ma=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var f=c.value?c.value:new Uint8Array(0);(f=this.B.decode(f,{stream:!c.done}))&&(this.response=this.responseText+=f)}c.done?Ui(this):Bi(this),this.readyState==3&&Eh(this)}},n.Oa=function(c){this.g&&(this.response=this.responseText=c,Ui(this))},n.Na=function(c){this.g&&(this.response=c,Ui(this))},n.ga=function(){this.g&&Ui(this)};function Ui(c){c.readyState=4,c.l=null,c.j=null,c.B=null,Bi(c)}n.setRequestHeader=function(c,f){this.A.append(c,f)},n.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],f=this.h.entries();for(var m=f.next();!m.done;)m=m.value,c.push(m[0]+": "+m[1]),m=f.next();return c.join(`\r
`)};function Bi(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(to.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function Th(c){let f="";return B(c,function(m,I){f+=I,f+=":",f+=m,f+=`\r
`}),f}function dl(c,f,m){t:{for(I in m){var I=!1;break t}I=!0}I||(m=Th(m),typeof c=="string"?m!=null&&Di(m):kt(c,f,m))}function Vt(c){et.call(this),this.headers=new Map,this.L=c||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}d(Vt,et);var Hy=/^https?$/i,qy=["POST","PUT"];n=Vt.prototype,n.Fa=function(c){this.H=c},n.ea=function(c,f,m,I){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);f=f?f.toUpperCase():"GET",this.D=c,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():ih.g(),this.g.onreadystatechange=p(u(this.Ca,this));try{this.B=!0,this.g.open(f,String(c),!0),this.B=!1}catch(O){Ih(this,O);return}if(c=m||"",m=new Map(this.headers),I)if(Object.getPrototypeOf(I)===Object.prototype)for(var D in I)m.set(D,I[D]);else if(typeof I.keys=="function"&&typeof I.get=="function")for(const O of I.keys())m.set(O,I.get(O));else throw Error("Unknown input type for opt_headers: "+String(I));I=Array.from(m.keys()).find(O=>O.toLowerCase()=="content-type"),D=o.FormData&&c instanceof o.FormData,!(Array.prototype.indexOf.call(qy,f,void 0)>=0)||I||D||m.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,F]of m)this.g.setRequestHeader(O,F);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(c),this.v=!1}catch(O){Ih(this,O)}};function Ih(c,f){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=f,c.o=5,Sh(c),eo(c)}function Sh(c){c.A||(c.A=!0,dt(c,"complete"),dt(c,"error"))}n.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=c||7,dt(this,"complete"),dt(this,"abort"),eo(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),eo(this,!0)),Vt.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?xh(this):this.Xa())},n.Xa=function(){xh(this)};function xh(c){if(c.h&&typeof r<"u"){if(c.v&&Ln(c)==4)setTimeout(c.Ca.bind(c),0);else if(dt(c,"readystatechange"),Ln(c)==4){c.h=!1;try{const O=c.ca();t:switch(O){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break t;default:f=!1}var m;if(!(m=f)){var I;if(I=O===0){let F=String(c.D).match(gh)[1]||null;!F&&o.self&&o.self.location&&(F=o.self.location.protocol.slice(0,-1)),I=!Hy.test(F?F.toLowerCase():"")}m=I}if(m)dt(c,"complete"),dt(c,"success");else{c.o=6;try{var D=Ln(c)>2?c.g.statusText:""}catch{D=""}c.l=D+" ["+c.ca()+"]",Sh(c)}}finally{eo(c)}}}}function eo(c,f){if(c.g){c.m&&(clearTimeout(c.m),c.m=null);const m=c.g;c.g=null,f||dt(c,"ready");try{m.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function Ln(c){return c.g?c.g.readyState:0}n.ca=function(){try{return Ln(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(c){if(this.g){var f=this.g.responseText;return c&&f.indexOf(c)==0&&(f=f.substring(c.length)),Pi(f)}};function Ah(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.F){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function Wy(c){const f={};c=(c.g&&Ln(c)>=2&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let I=0;I<c.length;I++){if(x(c[I]))continue;var m=Ry(c[I]);const D=m[0];if(m=m[1],typeof m!="string")continue;m=m.trim();const O=f[D]||[];f[D]=O,O.push(m)}Pt(f,function(I){return I.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function $i(c,f,m){return m&&m.internalChannelParams&&m.internalChannelParams[c]||f}function Ph(c){this.za=0,this.i=[],this.j=new Ci,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=$i("failFast",!1,c),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=$i("baseRetryDelayMs",5e3,c),this.Za=$i("retryDelaySeedMs",1e4,c),this.Ta=$i("forwardChannelMaxRetries",2,c),this.va=$i("forwardChannelRequestTimeoutMs",2e4,c),this.ma=c&&c.xmlHttpFactory||void 0,this.Ua=c&&c.Rb||void 0,this.Aa=c&&c.useFetchStreams||!1,this.O=void 0,this.L=c&&c.supportsCrossDomainXhr||!1,this.M="",this.h=new uh(c&&c.concurrentRequestLimit),this.Ba=new jy,this.S=c&&c.fastHandshake||!1,this.R=c&&c.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=c&&c.Pb||!1,c&&c.ua&&this.j.ua(),c&&c.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&c&&c.detectBufferingProxy||!1,this.ia=void 0,c&&c.longPollingTimeout&&c.longPollingTimeout>0&&(this.ia=c.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=Ph.prototype,n.ka=8,n.I=1,n.connect=function(c,f,m,I){me(0),this.W=c,this.H=f||{},m&&I!==void 0&&(this.H.OSID=m,this.H.OAID=I),this.F=this.X,this.J=Vh(this,null,this.W),so(this)};function fl(c){if(kh(c),c.I==3){var f=c.V++,m=Ge(c.J);if(kt(m,"SID",c.M),kt(m,"RID",f),kt(m,"TYPE","terminate"),zi(c,m),f=new Dn(c,c.j,f),f.M=2,f.A=Zr(Ge(m)),m=!1,o.navigator&&o.navigator.sendBeacon)try{m=o.navigator.sendBeacon(f.A.toString(),"")}catch{}!m&&o.Image&&(new Image().src=f.A,m=!0),m||(f.g=Fh(f.j,null),f.g.ea(f.A)),f.F=Date.now(),Jr(f)}Nh(c)}function no(c){c.g&&(gl(c),c.g.cancel(),c.g=null)}function kh(c){no(c),c.v&&(o.clearTimeout(c.v),c.v=null),io(c),c.h.cancel(),c.m&&(typeof c.m=="number"&&o.clearTimeout(c.m),c.m=null)}function so(c){if(!hh(c.h)&&!c.m){c.m=!0;var f=c.Ea;M||g(),L||(M(),L=!0),S.add(f,c),c.D=0}}function Ky(c,f){return dh(c.h)>=c.h.j-(c.m?1:0)?!1:c.m?(c.i=f.G.concat(c.i),!0):c.I==1||c.I==2||c.D>=(c.Sa?0:c.Ta)?!1:(c.m=Ri(u(c.Ea,c,f),Lh(c,c.D)),c.D++,!0)}n.Ea=function(c){if(this.m)if(this.m=null,this.I==1){if(!c){this.V=Math.floor(Math.random()*1e5),c=this.V++;const D=new Dn(this,this.j,c);let O=this.o;if(this.U&&(O?(O=Y(O),z(O,this.U)):O=this.U),this.u!==null||this.R||(D.J=O,O=null),this.S)t:{for(var f=0,m=0;m<this.i.length;m++){e:{var I=this.i[m];if("__data__"in I.map&&(I=I.map.__data__,typeof I=="string")){I=I.length;break e}I=void 0}if(I===void 0)break;if(f+=I,f>4096){f=m;break t}if(f===4096||m===this.i.length-1){f=m+1;break t}}f=1e3}else f=1e3;f=Ch(this,D,f),m=Ge(this.J),kt(m,"RID",c),kt(m,"CVER",22),this.G&&kt(m,"X-HTTP-Session-Id",this.G),zi(this,m),O&&(this.R?f="headers="+Di(Th(O))+"&"+f:this.u&&dl(m,this.u,O)),cl(this.h,D),this.Ra&&kt(m,"TYPE","init"),this.S?(kt(m,"$req",f),kt(m,"SID","null"),D.U=!0,rl(D,m,null)):rl(D,m,f),this.I=2}}else this.I==3&&(c?Rh(this,c):this.i.length==0||hh(this.h)||Rh(this))};function Rh(c,f){var m;f?m=f.l:m=c.V++;const I=Ge(c.J);kt(I,"SID",c.M),kt(I,"RID",m),kt(I,"AID",c.K),zi(c,I),c.u&&c.o&&dl(I,c.u,c.o),m=new Dn(c,c.j,m,c.D+1),c.u===null&&(m.J=c.o),f&&(c.i=f.G.concat(c.i)),f=Ch(c,m,1e3),m.H=Math.round(c.va*.5)+Math.round(c.va*.5*Math.random()),cl(c.h,m),rl(m,I,f)}function zi(c,f){c.H&&B(c.H,function(m,I){kt(f,I,m)}),c.l&&B({},function(m,I){kt(f,I,m)})}function Ch(c,f,m){m=Math.min(c.i.length,m);const I=c.l?u(c.l.Ka,c.l,c):null;t:{var D=c.i;let nt=-1;for(;;){const Kt=["count="+m];nt==-1?m>0?(nt=D[0].g,Kt.push("ofs="+nt)):nt=0:Kt.push("ofs="+nt);let St=!0;for(let te=0;te<m;te++){var O=D[te].g;const Ye=D[te].map;if(O-=nt,O<0)nt=Math.max(0,D[te].g-100),St=!1;else try{O="req"+O+"_"||"";try{var F=Ye instanceof Map?Ye:Object.entries(Ye);for(const[gs,Nn]of F){let Vn=Nn;a(Nn)&&(Vn=Ie(Nn)),Kt.push(O+gs+"="+encodeURIComponent(Vn))}}catch(gs){throw Kt.push(O+"type="+encodeURIComponent("_badmap")),gs}}catch{I&&I(Ye)}}if(St){F=Kt.join("&");break t}}F=void 0}return c=c.i.splice(0,m),f.G=c,F}function Dh(c){if(!c.g&&!c.v){c.Y=1;var f=c.Da;M||g(),L||(M(),L=!0),S.add(f,c),c.A=0}}function pl(c){return c.g||c.v||c.A>=3?!1:(c.Y++,c.v=Ri(u(c.Da,c),Lh(c,c.A)),c.A++,!0)}n.Da=function(){if(this.v=null,Mh(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var c=4*this.T;this.j.info("BP detection timer enabled: "+c),this.B=Ri(u(this.Wa,this),c)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,me(10),no(this),Mh(this))};function gl(c){c.B!=null&&(o.clearTimeout(c.B),c.B=null)}function Mh(c){c.g=new Dn(c,c.j,"rpc",c.Y),c.u===null&&(c.g.J=c.o),c.g.P=0;var f=Ge(c.na);kt(f,"RID","rpc"),kt(f,"SID",c.M),kt(f,"AID",c.K),kt(f,"CI",c.F?"0":"1"),!c.F&&c.ia&&kt(f,"TO",c.ia),kt(f,"TYPE","xmlhttp"),zi(c,f),c.u&&c.o&&dl(f,c.u,c.o),c.O&&(c.g.H=c.O);var m=c.g;c=c.ba,m.M=1,m.A=Zr(Ge(f)),m.u=null,m.R=!0,ah(m,c)}n.Va=function(){this.C!=null&&(this.C=null,no(this),pl(this),me(19))};function io(c){c.C!=null&&(o.clearTimeout(c.C),c.C=null)}function Oh(c,f){var m=null;if(c.g==f){io(c),gl(c),c.g=null;var I=2}else if(ll(c.h,f))m=f.G,fh(c.h,f),I=1;else return;if(c.I!=0){if(f.o)if(I==1){m=f.u?f.u.length:0,f=Date.now()-f.F;var D=c.D;I=Xr(),dt(I,new nh(I,m)),so(c)}else Dh(c);else if(D=f.m,D==3||D==0&&f.X>0||!(I==1&&Ky(c,f)||I==2&&pl(c)))switch(m&&m.length>0&&(f=c.h,f.i=f.i.concat(m)),D){case 1:ps(c,5);break;case 4:ps(c,10);break;case 3:ps(c,6);break;default:ps(c,2)}}}function Lh(c,f){let m=c.Qa+Math.floor(Math.random()*c.Za);return c.isActive()||(m*=2),m*f}function ps(c,f){if(c.j.info("Error code "+f),f==2){var m=u(c.bb,c),I=c.Ua;const D=!I;I=new Mn(I||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Oi(I,"https"),Zr(I),D?$y(I.toString(),m):zy(I.toString(),m)}else me(2);c.I=0,c.l&&c.l.pa(f),Nh(c),kh(c)}n.bb=function(c){c?(this.j.info("Successfully pinged google.com"),me(2)):(this.j.info("Failed to ping google.com"),me(1))};function Nh(c){if(c.I=0,c.ja=[],c.l){const f=ph(c.h);(f.length!=0||c.i.length!=0)&&(v(c.ja,f),v(c.ja,c.i),c.h.i.length=0,_(c.i),c.i.length=0),c.l.oa()}}function Vh(c,f,m){var I=m instanceof Mn?Ge(m):new Mn(m);if(I.g!="")f&&(I.g=f+"."+I.g),Li(I,I.u);else{var D=o.location;I=D.protocol,f=f?f+"."+D.hostname:D.hostname,D=+D.port;const O=new Mn(null);I&&Oi(O,I),f&&(O.g=f),D&&Li(O,D),m&&(O.h=m),I=O}return m=c.G,f=c.wa,m&&f&&kt(I,m,f),kt(I,"VER",c.ka),zi(c,I),I}function Fh(c,f,m){if(f&&!c.L)throw Error("Can't create secondary domain capable XhrIo object.");return f=c.Aa&&!c.ma?new Vt(new hl({ab:m})):new Vt(c.ma),f.Fa(c.L),f}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Uh(){}n=Uh.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function ro(){}ro.prototype.g=function(c,f){return new xe(c,f)};function xe(c,f){et.call(this),this.g=new Ph(f),this.l=c,this.h=f&&f.messageUrlParams||null,c=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(c?c["X-WebChannel-Content-Type"]=f.messageContentType:c={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.sa&&(c?c["X-WebChannel-Client-Profile"]=f.sa:c={"X-WebChannel-Client-Profile":f.sa}),this.g.U=c,(c=f&&f.Qb)&&!x(c)&&(this.g.u=c),this.A=f&&f.supportsCrossDomainXhr||!1,this.v=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!x(f)&&(this.g.G=f,c=this.h,c!==null&&f in c&&(c=this.h,f in c&&delete c[f])),this.j=new Ys(this)}d(xe,et),xe.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},xe.prototype.close=function(){fl(this.g)},xe.prototype.o=function(c){var f=this.g;if(typeof c=="string"){var m={};m.__data__=c,c=m}else this.v&&(m={},m.__data__=Ie(c),c=m);f.i.push(new My(f.Ya++,c)),f.I==3&&so(f)},xe.prototype.N=function(){this.g.l=null,delete this.j,fl(this.g),delete this.g,xe.Z.N.call(this)};function Bh(c){Ws.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var f=c.__sm__;if(f){t:{for(const m in f){c=m;break t}c=void 0}(this.i=c)&&(c=this.i,f=f!==null&&c in f?f[c]:void 0),this.data=f}else this.data=c}d(Bh,Ws);function $h(){nl.call(this),this.status=1}d($h,nl);function Ys(c){this.g=c}d(Ys,Uh),Ys.prototype.ra=function(){dt(this.g,"a")},Ys.prototype.qa=function(c){dt(this.g,new Bh(c))},Ys.prototype.pa=function(c){dt(this.g,new $h)},Ys.prototype.oa=function(){dt(this.g,"b")},ro.prototype.createWebChannel=ro.prototype.g,xe.prototype.send=xe.prototype.o,xe.prototype.open=xe.prototype.m,xe.prototype.close=xe.prototype.close,Ng=function(){return new ro},Lg=function(){return Xr()},Og=hs,nc={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Qr.NO_ERROR=0,Qr.TIMEOUT=8,Qr.HTTP_ERROR=6,Lo=Qr,sh.COMPLETE="complete",Mg=sh,Se.EventType=Be,Be.OPEN="a",Be.CLOSE="b",Be.ERROR="c",Be.MESSAGE="d",et.prototype.listen=et.prototype.J,Xi=Se,Vt.prototype.listenOnce=Vt.prototype.K,Vt.prototype.getLastError=Vt.prototype.Ha,Vt.prototype.getLastErrorCode=Vt.prototype.ya,Vt.prototype.getStatus=Vt.prototype.ca,Vt.prototype.getResponseJson=Vt.prototype.La,Vt.prototype.getResponseText=Vt.prototype.la,Vt.prototype.send=Vt.prototype.ea,Vt.prototype.setWithCredentials=Vt.prototype.Fa,Dg=Vt}).apply(typeof lo<"u"?lo:typeof self<"u"?self:typeof window<"u"?window:{});/**
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
 */class he{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}he.UNAUTHENTICATED=new he(null),he.GOOGLE_CREDENTIALS=new he("google-credentials-uid"),he.FIRST_PARTY=new he("first-party-uid"),he.MOCK_USER=new he("mock-user");/**
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
 */let Ti="12.9.0";function O0(n){Ti=n}/**
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
 *//**
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
 */const Ms=new Dc("@firebase/firestore");function Js(){return Ms.logLevel}function U(n,...t){if(Ms.logLevel<=lt.DEBUG){const e=t.map(qc);Ms.debug(`Firestore (${Ti}): ${n}`,...e)}}function Pn(n,...t){if(Ms.logLevel<=lt.ERROR){const e=t.map(qc);Ms.error(`Firestore (${Ti}): ${n}`,...e)}}function Os(n,...t){if(Ms.logLevel<=lt.WARN){const e=t.map(qc);Ms.warn(`Firestore (${Ti}): ${n}`,...e)}}function qc(n){if(typeof n=="string")return n;try{return(function(e){return JSON.stringify(e)})(n)}catch{return n}}/**
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
 */function G(n,t,e){let s="Unexpected state";typeof t=="string"?s=t:e=t,Vg(n,s,e)}function Vg(n,t,e){let s=`FIRESTORE (${Ti}) INTERNAL ASSERTION FAILED: ${t} (ID: ${n.toString(16)})`;if(e!==void 0)try{s+=" CONTEXT: "+JSON.stringify(e)}catch{s+=" CONTEXT: "+e}throw Pn(s),new Error(s)}function vt(n,t,e,s){let i="Unexpected state";typeof e=="string"?i=e:s=e,n||Vg(t,i,s)}function Z(n,t){return n}/**
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
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class H extends dn{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Zn{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}/**
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
 */class Fg{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class L0{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(he.UNAUTHENTICATED)))}shutdown(){}}class N0{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class V0{constructor(t){this.t=t,this.currentUser=he.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){vt(this.o===void 0,42304);let s=this.i;const i=l=>this.i!==s?(s=this.i,e(l)):Promise.resolve();let r=new Zn;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Zn,t.enqueueRetryable((()=>i(this.currentUser)))};const o=()=>{const l=r;t.enqueueRetryable((async()=>{await l.promise,await i(this.currentUser)}))},a=l=>{U("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit((l=>a(l))),setTimeout((()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(U("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Zn)}}),0),o()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((s=>this.i!==t?(U("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(vt(typeof s.accessToken=="string",31837,{l:s}),new Fg(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return vt(t===null||typeof t=="string",2055,{h:t}),new he(t)}}class F0{constructor(t,e,s){this.P=t,this.T=e,this.I=s,this.type="FirstParty",this.user=he.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const t=this.A();return t&&this.R.set("Authorization",t),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class U0{constructor(t,e,s){this.P=t,this.T=e,this.I=s}getToken(){return Promise.resolve(new F0(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable((()=>e(he.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class _d{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class B0{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Le(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){vt(this.o===void 0,3512);const s=r=>{r.error!=null&&U("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.m;return this.m=r.token,U("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?e(r.token):Promise.resolve()};this.o=r=>{t.enqueueRetryable((()=>s(r)))};const i=r=>{U("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((r=>i(r))),setTimeout((()=>{if(!this.appCheck){const r=this.V.getImmediate({optional:!0});r?i(r):U("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new _d(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((e=>e?(vt(typeof e.token=="string",44558,{tokenResult:e}),this.m=e.token,new _d(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function $0(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let s=0;s<n;s++)e[s]=Math.floor(256*Math.random());return e}/**
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
 */class Wc{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const i=$0(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<e&&(s+=t.charAt(i[r]%62))}return s}}function ct(n,t){return n<t?-1:n>t?1:0}function sc(n,t){const e=Math.min(n.length,t.length);for(let s=0;s<e;s++){const i=n.charAt(s),r=t.charAt(s);if(i!==r)return Il(i)===Il(r)?ct(i,r):Il(i)?1:-1}return ct(n.length,t.length)}const z0=55296,j0=57343;function Il(n){const t=n.charCodeAt(0);return t>=z0&&t<=j0}function pi(n,t,e){return n.length===t.length&&n.every(((s,i)=>e(s,t[i])))}/**
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
 */const yd="__name__";class Ze{constructor(t,e,s){e===void 0?e=0:e>t.length&&G(637,{offset:e,range:t.length}),s===void 0?s=t.length-e:s>t.length-e&&G(1746,{length:s,range:t.length-e}),this.segments=t,this.offset=e,this.len=s}get length(){return this.len}isEqual(t){return Ze.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Ze?t.forEach((s=>{e.push(s)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,s=this.limit();e<s;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const s=Math.min(t.length,e.length);for(let i=0;i<s;i++){const r=Ze.compareSegments(t.get(i),e.get(i));if(r!==0)return r}return ct(t.length,e.length)}static compareSegments(t,e){const s=Ze.isNumericId(t),i=Ze.isNumericId(e);return s&&!i?-1:!s&&i?1:s&&i?Ze.extractNumericId(t).compare(Ze.extractNumericId(e)):sc(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return Jn.fromString(t.substring(4,t.length-2))}}class Mt extends Ze{construct(t,e,s){return new Mt(t,e,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const s of t){if(s.indexOf("//")>=0)throw new H(V.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);e.push(...s.split("/").filter((i=>i.length>0)))}return new Mt(e)}static emptyPath(){return new Mt([])}}const H0=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class re extends Ze{construct(t,e,s){return new re(t,e,s)}static isValidIdentifier(t){return H0.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),re.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===yd}static keyField(){return new re([yd])}static fromServerFormat(t){const e=[];let s="",i=0;const r=()=>{if(s.length===0)throw new H(V.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(s),s=""};let o=!1;for(;i<t.length;){const a=t[i];if(a==="\\"){if(i+1===t.length)throw new H(V.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const l=t[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new H(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);s+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new H(V.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new re(e)}static emptyPath(){return new re([])}}/**
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
 */class q{constructor(t){this.path=t}static fromPath(t){return new q(Mt.fromString(t))}static fromName(t){return new q(Mt.fromString(t).popFirst(5))}static empty(){return new q(Mt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Mt.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return Mt.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new q(new Mt(t.slice()))}}/**
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
 */function q0(n,t,e){if(!e)throw new H(V.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function W0(n,t,e,s){if(t===!0&&s===!0)throw new H(V.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function bd(n){if(!q.isDocumentKey(n))throw new H(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Ug(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Kc(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=(function(s){return s.constructor?s.constructor.name:null})(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":G(12329,{type:typeof n})}function wr(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new H(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Kc(n);throw new H(V.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function Wt(n,t){const e={typeString:n};return t&&(e.value=t),e}function zr(n,t){if(!Ug(n))throw new H(V.INVALID_ARGUMENT,"JSON must be an object");let e;for(const s in t)if(t[s]){const i=t[s].typeString,r="value"in t[s]?{value:t[s].value}:void 0;if(!(s in n)){e=`JSON missing required field: '${s}'`;break}const o=n[s];if(i&&typeof o!==i){e=`JSON field '${s}' must be a ${i}.`;break}if(r!==void 0&&o!==r.value){e=`Expected '${s}' field to equal '${r.value}'`;break}}if(e)throw new H(V.INVALID_ARGUMENT,e);return!0}/**
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
 */const vd=-62135596800,wd=1e6;class Ct{static now(){return Ct.fromMillis(Date.now())}static fromDate(t){return Ct.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),s=Math.floor((t-1e3*e)*wd);return new Ct(e,s)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new H(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new H(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<vd)throw new H(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new H(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/wd}_compareTo(t){return this.seconds===t.seconds?ct(this.nanoseconds,t.nanoseconds):ct(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ct._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(zr(t,Ct._jsonSchema))return new Ct(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-vd;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ct._jsonSchemaVersion="firestore/timestamp/1.0",Ct._jsonSchema={type:Wt("string",Ct._jsonSchemaVersion),seconds:Wt("number"),nanoseconds:Wt("number")};/**
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
 */class J{static fromTimestamp(t){return new J(t)}static min(){return new J(new Ct(0,0))}static max(){return new J(new Ct(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Er=-1;function K0(n,t){const e=n.toTimestamp().seconds,s=n.toTimestamp().nanoseconds+1,i=J.fromTimestamp(s===1e9?new Ct(e+1,0):new Ct(e,s));return new ss(i,q.empty(),t)}function G0(n){return new ss(n.readTime,n.key,Er)}class ss{constructor(t,e,s){this.readTime=t,this.documentKey=e,this.largestBatchId=s}static min(){return new ss(J.min(),q.empty(),Er)}static max(){return new ss(J.max(),q.empty(),Er)}}function Y0(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=q.comparator(n.documentKey,t.documentKey),e!==0?e:ct(n.largestBatchId,t.largestBatchId))}/**
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
 */const X0="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Q0{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}/**
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
 */async function Ii(n){if(n.code!==V.FAILED_PRECONDITION||n.message!==X0)throw n;U("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class N{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&G(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new N(((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(t,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(e,r).next(s,i)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof N?e:N.resolve(e)}catch(e){return N.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):N.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):N.reject(e)}static resolve(t){return new N(((e,s)=>{e(t)}))}static reject(t){return new N(((e,s)=>{s(t)}))}static waitFor(t){return new N(((e,s)=>{let i=0,r=0,o=!1;t.forEach((a=>{++i,a.next((()=>{++r,o&&r===i&&e()}),(l=>s(l)))})),o=!0,r===i&&e()}))}static or(t){let e=N.resolve(!1);for(const s of t)e=e.next((i=>i?N.resolve(i):s()));return e}static forEach(t,e){const s=[];return t.forEach(((i,r)=>{s.push(e.call(this,i,r))})),this.waitFor(s)}static mapArray(t,e){return new N(((s,i)=>{const r=t.length,o=new Array(r);let a=0;for(let l=0;l<r;l++){const u=l;e(t[u]).next((h=>{o[u]=h,++a,a===r&&s(o)}),(h=>i(h)))}}))}static doWhile(t,e){return new N(((s,i)=>{const r=()=>{t()===!0?e().next((()=>{r()}),i):s()};r()}))}}function J0(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function Si(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class Ma{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>e.writeSequenceNumber(s))}ae(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ue&&this.ue(t),t}}Ma.ce=-1;/**
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
 */const Gc=-1;function Oa(n){return n==null}function ia(n){return n===0&&1/n==-1/0}function Z0(n){return typeof n=="number"&&Number.isInteger(n)&&!ia(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const Bg="";function tE(n){let t="";for(let e=0;e<n.length;e++)t.length>0&&(t=Ed(t)),t=eE(n.get(e),t);return Ed(t)}function eE(n,t){let e=t;const s=n.length;for(let i=0;i<s;i++){const r=n.charAt(i);switch(r){case"\0":e+="";break;case Bg:e+="";break;default:e+=r}}return e}function Ed(n){return n+Bg+""}/**
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
 */function Td(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function $s(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function $g(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
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
 */class Lt{constructor(t,e){this.comparator=t,this.root=e||ie.EMPTY}insert(t,e){return new Lt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,ie.BLACK,null,null))}remove(t){return new Lt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,ie.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const s=this.comparator(t,e.key);if(s===0)return e.value;s<0?e=e.left:s>0&&(e=e.right)}return null}indexOf(t){let e=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(t,s.key);if(i===0)return e+s.left.size;i<0?s=s.left:(e+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,s)=>(t(e,s),!1)))}toString(){const t=[];return this.inorderTraversal(((e,s)=>(t.push(`${e}:${s}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new co(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new co(this.root,t,this.comparator,!1)}getReverseIterator(){return new co(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new co(this.root,t,this.comparator,!0)}}class co{constructor(t,e,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!t.isEmpty();)if(r=e?s(t.key,e):1,e&&i&&(r*=-1),r<0)t=this.isReverse?t.left:t.right;else{if(r===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class ie{constructor(t,e,s,i,r){this.key=t,this.value=e,this.color=s??ie.RED,this.left=i??ie.EMPTY,this.right=r??ie.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,s,i,r){return new ie(t??this.key,e??this.value,s??this.color,i??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,s){let i=this;const r=s(t,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(t,e,s),null):r===0?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ie.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let s,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),e(t,i.key)===0){if(i.right.isEmpty())return ie.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,ie.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,ie.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw G(43730,{key:this.key,value:this.value});if(this.right.isRed())throw G(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw G(27949);return t+(this.isRed()?0:1)}}ie.EMPTY=null,ie.RED=!0,ie.BLACK=!1;ie.EMPTY=new class{constructor(){this.size=0}get key(){throw G(57766)}get value(){throw G(16141)}get color(){throw G(16727)}get left(){throw G(29726)}get right(){throw G(36894)}copy(t,e,s,i,r){return this}insert(t,e,s){return new ie(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Jt{constructor(t){this.comparator=t,this.data=new Lt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,s)=>(t(e),!1)))}forEachInRange(t,e){const s=this.data.getIteratorFrom(t[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let s;for(s=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();s.hasNext();)if(!t(s.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Id(this.data.getIterator())}getIteratorFrom(t){return new Id(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((s=>{e=e.add(s)})),e}isEqual(t){if(!(t instanceof Jt)||this.size!==t.size)return!1;const e=this.data.getIterator(),s=t.data.getIterator();for(;e.hasNext();){const i=e.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new Jt(this.comparator);return e.data=t,e}}class Id{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class ze{constructor(t){this.fields=t,t.sort(re.comparator)}static empty(){return new ze([])}unionWith(t){let e=new Jt(re.comparator);for(const s of this.fields)e=e.add(s);for(const s of t)e=e.add(s);return new ze(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return pi(this.fields,t.fields,((e,s)=>e.isEqual(s)))}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class zg extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ae{constructor(t){this.binaryString=t}static fromBase64String(t){const e=(function(i){try{return atob(i)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new zg("Invalid base64 string: "+r):r}})(t);return new ae(e)}static fromUint8Array(t){const e=(function(i){let r="";for(let o=0;o<i.length;++o)r+=String.fromCharCode(i[o]);return r})(t);return new ae(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(e){return btoa(e)})(this.binaryString)}toUint8Array(){return(function(e){const s=new Uint8Array(e.length);for(let i=0;i<e.length;i++)s[i]=e.charCodeAt(i);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return ct(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}ae.EMPTY_BYTE_STRING=new ae("");const nE=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function is(n){if(vt(!!n,39018),typeof n=="string"){let t=0;const e=nE.exec(n);if(vt(!!e,46558,{timestamp:n}),e[1]){let i=e[1];i=(i+"000000000").substr(0,9),t=Number(i)}const s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:zt(n.seconds),nanos:zt(n.nanos)}}function zt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function rs(n){return typeof n=="string"?ae.fromBase64String(n):ae.fromUint8Array(n)}/**
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
 */const jg="server_timestamp",Hg="__type__",qg="__previous_value__",Wg="__local_write_time__";function Yc(n){var e,s;return((s=(((e=n==null?void 0:n.mapValue)==null?void 0:e.fields)||{})[Hg])==null?void 0:s.stringValue)===jg}function La(n){const t=n.mapValue.fields[qg];return Yc(t)?La(t):t}function Tr(n){const t=is(n.mapValue.fields[Wg].timestampValue);return new Ct(t.seconds,t.nanos)}/**
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
 */class sE{constructor(t,e,s,i,r,o,a,l,u,h,d){this.databaseId=t,this.appId=e,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u,this.isUsingEmulator=h,this.apiKey=d}}const ra="(default)";class Ir{constructor(t,e){this.projectId=t,this.database=e||ra}static empty(){return new Ir("","")}get isDefaultDatabase(){return this.database===ra}isEqual(t){return t instanceof Ir&&t.projectId===this.projectId&&t.database===this.database}}function iE(n,t){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new H(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ir(n.options.projectId,t)}/**
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
 */const Kg="__type__",rE="__max__",uo={mapValue:{}},Gg="__vector__",oa="value";function os(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Yc(n)?4:aE(n)?9007199254740991:oE(n)?10:11:G(28295,{value:n})}function ln(n,t){if(n===t)return!0;const e=os(n);if(e!==os(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return Tr(n).isEqual(Tr(t));case 3:return(function(i,r){if(typeof i.timestampValue=="string"&&typeof r.timestampValue=="string"&&i.timestampValue.length===r.timestampValue.length)return i.timestampValue===r.timestampValue;const o=is(i.timestampValue),a=is(r.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos})(n,t);case 5:return n.stringValue===t.stringValue;case 6:return(function(i,r){return rs(i.bytesValue).isEqual(rs(r.bytesValue))})(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return(function(i,r){return zt(i.geoPointValue.latitude)===zt(r.geoPointValue.latitude)&&zt(i.geoPointValue.longitude)===zt(r.geoPointValue.longitude)})(n,t);case 2:return(function(i,r){if("integerValue"in i&&"integerValue"in r)return zt(i.integerValue)===zt(r.integerValue);if("doubleValue"in i&&"doubleValue"in r){const o=zt(i.doubleValue),a=zt(r.doubleValue);return o===a?ia(o)===ia(a):isNaN(o)&&isNaN(a)}return!1})(n,t);case 9:return pi(n.arrayValue.values||[],t.arrayValue.values||[],ln);case 10:case 11:return(function(i,r){const o=i.mapValue.fields||{},a=r.mapValue.fields||{};if(Td(o)!==Td(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!ln(o[l],a[l])))return!1;return!0})(n,t);default:return G(52216,{left:n})}}function Sr(n,t){return(n.values||[]).find((e=>ln(e,t)))!==void 0}function gi(n,t){if(n===t)return 0;const e=os(n),s=os(t);if(e!==s)return ct(e,s);switch(e){case 0:case 9007199254740991:return 0;case 1:return ct(n.booleanValue,t.booleanValue);case 2:return(function(r,o){const a=zt(r.integerValue||r.doubleValue),l=zt(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1})(n,t);case 3:return Sd(n.timestampValue,t.timestampValue);case 4:return Sd(Tr(n),Tr(t));case 5:return sc(n.stringValue,t.stringValue);case 6:return(function(r,o){const a=rs(r),l=rs(o);return a.compareTo(l)})(n.bytesValue,t.bytesValue);case 7:return(function(r,o){const a=r.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const h=ct(a[u],l[u]);if(h!==0)return h}return ct(a.length,l.length)})(n.referenceValue,t.referenceValue);case 8:return(function(r,o){const a=ct(zt(r.latitude),zt(o.latitude));return a!==0?a:ct(zt(r.longitude),zt(o.longitude))})(n.geoPointValue,t.geoPointValue);case 9:return xd(n.arrayValue,t.arrayValue);case 10:return(function(r,o){var p,_,v,E;const a=r.fields||{},l=o.fields||{},u=(p=a[oa])==null?void 0:p.arrayValue,h=(_=l[oa])==null?void 0:_.arrayValue,d=ct(((v=u==null?void 0:u.values)==null?void 0:v.length)||0,((E=h==null?void 0:h.values)==null?void 0:E.length)||0);return d!==0?d:xd(u,h)})(n.mapValue,t.mapValue);case 11:return(function(r,o){if(r===uo.mapValue&&o===uo.mapValue)return 0;if(r===uo.mapValue)return 1;if(o===uo.mapValue)return-1;const a=r.fields||{},l=Object.keys(a),u=o.fields||{},h=Object.keys(u);l.sort(),h.sort();for(let d=0;d<l.length&&d<h.length;++d){const p=sc(l[d],h[d]);if(p!==0)return p;const _=gi(a[l[d]],u[h[d]]);if(_!==0)return _}return ct(l.length,h.length)})(n.mapValue,t.mapValue);default:throw G(23264,{he:e})}}function Sd(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return ct(n,t);const e=is(n),s=is(t),i=ct(e.seconds,s.seconds);return i!==0?i:ct(e.nanos,s.nanos)}function xd(n,t){const e=n.values||[],s=t.values||[];for(let i=0;i<e.length&&i<s.length;++i){const r=gi(e[i],s[i]);if(r)return r}return ct(e.length,s.length)}function mi(n){return ic(n)}function ic(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(e){const s=is(e);return`time(${s.seconds},${s.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(e){return rs(e).toBase64()})(n.bytesValue):"referenceValue"in n?(function(e){return q.fromName(e).toString()})(n.referenceValue):"geoPointValue"in n?(function(e){return`geo(${e.latitude},${e.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(e){let s="[",i=!0;for(const r of e.values||[])i?i=!1:s+=",",s+=ic(r);return s+"]"})(n.arrayValue):"mapValue"in n?(function(e){const s=Object.keys(e.fields||{}).sort();let i="{",r=!0;for(const o of s)r?r=!1:i+=",",i+=`${o}:${ic(e.fields[o])}`;return i+"}"})(n.mapValue):G(61005,{value:n})}function No(n){switch(os(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=La(n);return t?16+No(t):16;case 5:return 2*n.stringValue.length;case 6:return rs(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((i,r)=>i+No(r)),0)})(n.arrayValue);case 10:case 11:return(function(s){let i=0;return $s(s.fields,((r,o)=>{i+=r.length+No(o)})),i})(n.mapValue);default:throw G(13486,{value:n})}}function rc(n){return!!n&&"integerValue"in n}function Xc(n){return!!n&&"arrayValue"in n}function Ad(n){return!!n&&"nullValue"in n}function Pd(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Vo(n){return!!n&&"mapValue"in n}function oE(n){var e,s;return((s=(((e=n==null?void 0:n.mapValue)==null?void 0:e.fields)||{})[Kg])==null?void 0:s.stringValue)===Gg}function ar(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const t={mapValue:{fields:{}}};return $s(n.mapValue.fields,((e,s)=>t.mapValue.fields[e]=ar(s))),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=ar(n.arrayValue.values[e]);return t}return{...n}}function aE(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===rE}/**
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
 */class Ne{constructor(t){this.value=t}static empty(){return new Ne({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let s=0;s<t.length-1;++s)if(e=(e.mapValue.fields||{})[t.get(s)],!Vo(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=ar(e)}setAll(t){let e=re.emptyPath(),s={},i=[];t.forEach(((o,a)=>{if(!e.isImmediateParentOf(a)){const l=this.getFieldsMap(e);this.applyChanges(l,s,i),s={},i=[],e=a.popLast()}o?s[a.lastSegment()]=ar(o):i.push(a.lastSegment())}));const r=this.getFieldsMap(e);this.applyChanges(r,s,i)}delete(t){const e=this.field(t.popLast());Vo(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return ln(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let s=0;s<t.length;++s){let i=e.mapValue.fields[t.get(s)];Vo(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(s)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,s){$s(e,((i,r)=>t[i]=r));for(const i of s)delete t[i]}clone(){return new Ne(ar(this.value))}}function Yg(n){const t=[];return $s(n.fields,((e,s)=>{const i=new re([e]);if(Vo(s)){const r=Yg(s.mapValue).fields;if(r.length===0)t.push(i);else for(const o of r)t.push(i.child(o))}else t.push(i)})),new ze(t)}/**
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
 */class de{constructor(t,e,s,i,r,o,a){this.key=t,this.documentType=e,this.version=s,this.readTime=i,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(t){return new de(t,0,J.min(),J.min(),J.min(),Ne.empty(),0)}static newFoundDocument(t,e,s,i){return new de(t,1,e,J.min(),s,i,0)}static newNoDocument(t,e){return new de(t,2,e,J.min(),J.min(),Ne.empty(),0)}static newUnknownDocument(t,e){return new de(t,3,e,J.min(),J.min(),Ne.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(J.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Ne.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Ne.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=J.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof de&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new de(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class aa{constructor(t,e){this.position=t,this.inclusive=e}}function kd(n,t,e){let s=0;for(let i=0;i<n.position.length;i++){const r=t[i],o=n.position[i];if(r.field.isKeyField()?s=q.comparator(q.fromName(o.referenceValue),e.key):s=gi(o,e.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function Rd(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!ln(n.position[e],t.position[e]))return!1;return!0}/**
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
 */class la{constructor(t,e="asc"){this.field=t,this.dir=e}}function lE(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
 */class Xg{}class Yt extends Xg{constructor(t,e,s){super(),this.field=t,this.op=e,this.value=s}static create(t,e,s){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,s):new uE(t,e,s):e==="array-contains"?new fE(t,s):e==="in"?new pE(t,s):e==="not-in"?new gE(t,s):e==="array-contains-any"?new mE(t,s):new Yt(t,e,s)}static createKeyFieldInFilter(t,e,s){return e==="in"?new hE(t,s):new dE(t,s)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&e.nullValue===void 0&&this.matchesComparison(gi(e,this.value)):e!==null&&os(this.value)===os(e)&&this.matchesComparison(gi(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return G(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class cn extends Xg{constructor(t,e){super(),this.filters=t,this.op=e,this.Pe=null}static create(t,e){return new cn(t,e)}matches(t){return Qg(this)?this.filters.find((e=>!e.matches(t)))===void 0:this.filters.find((e=>e.matches(t)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Qg(n){return n.op==="and"}function Jg(n){return cE(n)&&Qg(n)}function cE(n){for(const t of n.filters)if(t instanceof cn)return!1;return!0}function oc(n){if(n instanceof Yt)return n.field.canonicalString()+n.op.toString()+mi(n.value);if(Jg(n))return n.filters.map((t=>oc(t))).join(",");{const t=n.filters.map((e=>oc(e))).join(",");return`${n.op}(${t})`}}function Zg(n,t){return n instanceof Yt?(function(s,i){return i instanceof Yt&&s.op===i.op&&s.field.isEqual(i.field)&&ln(s.value,i.value)})(n,t):n instanceof cn?(function(s,i){return i instanceof cn&&s.op===i.op&&s.filters.length===i.filters.length?s.filters.reduce(((r,o,a)=>r&&Zg(o,i.filters[a])),!0):!1})(n,t):void G(19439)}function tm(n){return n instanceof Yt?(function(e){return`${e.field.canonicalString()} ${e.op} ${mi(e.value)}`})(n):n instanceof cn?(function(e){return e.op.toString()+" {"+e.getFilters().map(tm).join(" ,")+"}"})(n):"Filter"}class uE extends Yt{constructor(t,e,s){super(t,e,s),this.key=q.fromName(s.referenceValue)}matches(t){const e=q.comparator(t.key,this.key);return this.matchesComparison(e)}}class hE extends Yt{constructor(t,e){super(t,"in",e),this.keys=em("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class dE extends Yt{constructor(t,e){super(t,"not-in",e),this.keys=em("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function em(n,t){var e;return(((e=t.arrayValue)==null?void 0:e.values)||[]).map((s=>q.fromName(s.referenceValue)))}class fE extends Yt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Xc(e)&&Sr(e.arrayValue,this.value)}}class pE extends Yt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&Sr(this.value.arrayValue,e)}}class gE extends Yt{constructor(t,e){super(t,"not-in",e)}matches(t){if(Sr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&e.nullValue===void 0&&!Sr(this.value.arrayValue,e)}}class mE extends Yt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Xc(e)||!e.arrayValue.values)&&e.arrayValue.values.some((s=>Sr(this.value.arrayValue,s)))}}/**
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
 */class _E{constructor(t,e=null,s=[],i=[],r=null,o=null,a=null){this.path=t,this.collectionGroup=e,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this.Te=null}}function Cd(n,t=null,e=[],s=[],i=null,r=null,o=null){return new _E(n,t,e,s,i,r,o)}function Qc(n){const t=Z(n);if(t.Te===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((s=>oc(s))).join(","),e+="|ob:",e+=t.orderBy.map((s=>(function(r){return r.field.canonicalString()+r.dir})(s))).join(","),Oa(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((s=>mi(s))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((s=>mi(s))).join(",")),t.Te=e}return t.Te}function Jc(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!lE(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!Zg(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!Rd(n.startAt,t.startAt)&&Rd(n.endAt,t.endAt)}function ac(n){return q.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Na{constructor(t,e=null,s=[],i=[],r=null,o="F",a=null,l=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=l,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function yE(n,t,e,s,i,r,o,a){return new Na(n,t,e,s,i,r,o,a)}function Zc(n){return new Na(n)}function Dd(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function bE(n){return q.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function vE(n){return n.collectionGroup!==null}function lr(n){const t=Z(n);if(t.Ie===null){t.Ie=[];const e=new Set;for(const r of t.explicitOrderBy)t.Ie.push(r),e.add(r.field.canonicalString());const s=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Jt(re.comparator);return o.filters.forEach((l=>{l.getFlattenedFilters().forEach((u=>{u.isInequality()&&(a=a.add(u.field))}))})),a})(t).forEach((r=>{e.has(r.canonicalString())||r.isKeyField()||t.Ie.push(new la(r,s))})),e.has(re.keyField().canonicalString())||t.Ie.push(new la(re.keyField(),s))}return t.Ie}function nn(n){const t=Z(n);return t.Ee||(t.Ee=wE(t,lr(n))),t.Ee}function wE(n,t){if(n.limitType==="F")return Cd(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map((i=>{const r=i.dir==="desc"?"asc":"desc";return new la(i.field,r)}));const e=n.endAt?new aa(n.endAt.position,n.endAt.inclusive):null,s=n.startAt?new aa(n.startAt.position,n.startAt.inclusive):null;return Cd(n.path,n.collectionGroup,t,n.filters,n.limit,e,s)}}function lc(n,t,e){return new Na(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function Va(n,t){return Jc(nn(n),nn(t))&&n.limitType===t.limitType}function nm(n){return`${Qc(nn(n))}|lt:${n.limitType}`}function Zs(n){return`Query(target=${(function(e){let s=e.path.canonicalString();return e.collectionGroup!==null&&(s+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(s+=`, filters: [${e.filters.map((i=>tm(i))).join(", ")}]`),Oa(e.limit)||(s+=", limit: "+e.limit),e.orderBy.length>0&&(s+=`, orderBy: [${e.orderBy.map((i=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(i))).join(", ")}]`),e.startAt&&(s+=", startAt: ",s+=e.startAt.inclusive?"b:":"a:",s+=e.startAt.position.map((i=>mi(i))).join(",")),e.endAt&&(s+=", endAt: ",s+=e.endAt.inclusive?"a:":"b:",s+=e.endAt.position.map((i=>mi(i))).join(",")),`Target(${s})`})(nn(n))}; limitType=${n.limitType})`}function Fa(n,t){return t.isFoundDocument()&&(function(s,i){const r=i.key.path;return s.collectionGroup!==null?i.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(r):q.isDocumentKey(s.path)?s.path.isEqual(r):s.path.isImmediateParentOf(r)})(n,t)&&(function(s,i){for(const r of lr(s))if(!r.field.isKeyField()&&i.data.field(r.field)===null)return!1;return!0})(n,t)&&(function(s,i){for(const r of s.filters)if(!r.matches(i))return!1;return!0})(n,t)&&(function(s,i){return!(s.startAt&&!(function(o,a,l){const u=kd(o,a,l);return o.inclusive?u<=0:u<0})(s.startAt,lr(s),i)||s.endAt&&!(function(o,a,l){const u=kd(o,a,l);return o.inclusive?u>=0:u>0})(s.endAt,lr(s),i))})(n,t)}function EE(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function sm(n){return(t,e)=>{let s=!1;for(const i of lr(n)){const r=TE(i,t,e);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function TE(n,t,e){const s=n.field.isKeyField()?q.comparator(t.key,e.key):(function(r,o,a){const l=o.data.field(r),u=a.data.field(r);return l!==null&&u!==null?gi(l,u):G(42886)})(n.field,t,e);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return G(19790,{direction:n.dir})}}/**
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
 */class zs{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),s=this.inner[e];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,t))return r}}has(t){return this.get(t)!==void 0}set(t,e){const s=this.mapKeyFn(t),i=this.inner[s];if(i===void 0)return this.inner[s]=[[t,e]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],t))return void(i[r]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),s=this.inner[e];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return s.length===1?delete this.inner[e]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(t){$s(this.inner,((e,s)=>{for(const[i,r]of s)t(i,r)}))}isEmpty(){return $g(this.inner)}size(){return this.innerSize}}/**
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
 */const IE=new Lt(q.comparator);function kn(){return IE}const im=new Lt(q.comparator);function Qi(...n){let t=im;for(const e of n)t=t.insert(e.key,e);return t}function rm(n){let t=im;return n.forEach(((e,s)=>t=t.insert(e,s.overlayedDocument))),t}function Ts(){return cr()}function om(){return cr()}function cr(){return new zs((n=>n.toString()),((n,t)=>n.isEqual(t)))}const SE=new Lt(q.comparator),xE=new Jt(q.comparator);function ut(...n){let t=xE;for(const e of n)t=t.add(e);return t}const AE=new Jt(ct);function PE(){return AE}/**
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
 */function tu(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ia(t)?"-0":t}}function am(n){return{integerValue:""+n}}function kE(n,t){return Z0(t)?am(t):tu(n,t)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class Ua{constructor(){this._=void 0}}function RE(n,t,e){return n instanceof ca?(function(i,r){const o={fields:{[Hg]:{stringValue:jg},[Wg]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return r&&Yc(r)&&(r=La(r)),r&&(o.fields[qg]=r),{mapValue:o}})(e,t):n instanceof xr?cm(n,t):n instanceof Ar?um(n,t):(function(i,r){const o=lm(i,r),a=Md(o)+Md(i.Ae);return rc(o)&&rc(i.Ae)?am(a):tu(i.serializer,a)})(n,t)}function CE(n,t,e){return n instanceof xr?cm(n,t):n instanceof Ar?um(n,t):e}function lm(n,t){return n instanceof ua?(function(s){return rc(s)||(function(r){return!!r&&"doubleValue"in r})(s)})(t)?t:{integerValue:0}:null}class ca extends Ua{}class xr extends Ua{constructor(t){super(),this.elements=t}}function cm(n,t){const e=hm(t);for(const s of n.elements)e.some((i=>ln(i,s)))||e.push(s);return{arrayValue:{values:e}}}class Ar extends Ua{constructor(t){super(),this.elements=t}}function um(n,t){let e=hm(t);for(const s of n.elements)e=e.filter((i=>!ln(i,s)));return{arrayValue:{values:e}}}class ua extends Ua{constructor(t,e){super(),this.serializer=t,this.Ae=e}}function Md(n){return zt(n.integerValue||n.doubleValue)}function hm(n){return Xc(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function DE(n,t){return n.field.isEqual(t.field)&&(function(s,i){return s instanceof xr&&i instanceof xr||s instanceof Ar&&i instanceof Ar?pi(s.elements,i.elements,ln):s instanceof ua&&i instanceof ua?ln(s.Ae,i.Ae):s instanceof ca&&i instanceof ca})(n.transform,t.transform)}class ME{constructor(t,e){this.version=t,this.transformResults=e}}class Sn{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Sn}static exists(t){return new Sn(void 0,t)}static updateTime(t){return new Sn(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Fo(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class Ba{}function dm(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new pm(n.key,Sn.none()):new jr(n.key,n.data,Sn.none());{const e=n.data,s=Ne.empty();let i=new Jt(re.comparator);for(let r of t.fields)if(!i.has(r)){let o=e.field(r);o===null&&r.length>1&&(r=r.popLast(),o=e.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new js(n.key,s,new ze(i.toArray()),Sn.none())}}function OE(n,t,e){n instanceof jr?(function(i,r,o){const a=i.value.clone(),l=Ld(i.fieldTransforms,r,o.transformResults);a.setAll(l),r.convertToFoundDocument(o.version,a).setHasCommittedMutations()})(n,t,e):n instanceof js?(function(i,r,o){if(!Fo(i.precondition,r))return void r.convertToUnknownDocument(o.version);const a=Ld(i.fieldTransforms,r,o.transformResults),l=r.data;l.setAll(fm(i)),l.setAll(a),r.convertToFoundDocument(o.version,l).setHasCommittedMutations()})(n,t,e):(function(i,r,o){r.convertToNoDocument(o.version).setHasCommittedMutations()})(0,t,e)}function ur(n,t,e,s){return n instanceof jr?(function(r,o,a,l){if(!Fo(r.precondition,o))return a;const u=r.value.clone(),h=Nd(r.fieldTransforms,l,o);return u.setAll(h),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null})(n,t,e,s):n instanceof js?(function(r,o,a,l){if(!Fo(r.precondition,o))return a;const u=Nd(r.fieldTransforms,l,o),h=o.data;return h.setAll(fm(r)),h.setAll(u),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map((d=>d.field)))})(n,t,e,s):(function(r,o,a){return Fo(r.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a})(n,t,e)}function LE(n,t){let e=null;for(const s of n.fieldTransforms){const i=t.data.field(s.field),r=lm(s.transform,i||null);r!=null&&(e===null&&(e=Ne.empty()),e.set(s.field,r))}return e||null}function Od(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!(function(s,i){return s===void 0&&i===void 0||!(!s||!i)&&pi(s,i,((r,o)=>DE(r,o)))})(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class jr extends Ba{constructor(t,e,s,i=[]){super(),this.key=t,this.value=e,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class js extends Ba{constructor(t,e,s,i,r=[]){super(),this.key=t,this.data=e,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function fm(n){const t=new Map;return n.fieldMask.fields.forEach((e=>{if(!e.isEmpty()){const s=n.data.field(e);t.set(e,s)}})),t}function Ld(n,t,e){const s=new Map;vt(n.length===e.length,32656,{Ve:e.length,de:n.length});for(let i=0;i<e.length;i++){const r=n[i],o=r.transform,a=t.data.field(r.field);s.set(r.field,CE(o,a,e[i]))}return s}function Nd(n,t,e){const s=new Map;for(const i of n){const r=i.transform,o=e.data.field(i.field);s.set(i.field,RE(r,o,t))}return s}class pm extends Ba{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class NE extends Ba{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class VE{constructor(t,e,s,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(t,e){const s=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(t.key)&&OE(r,t,s[i])}}applyToLocalView(t,e){for(const s of this.baseMutations)s.key.isEqual(t.key)&&(e=ur(s,t,e,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(t.key)&&(e=ur(s,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const s=om();return this.mutations.forEach((i=>{const r=t.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=e.has(i.key)?null:a;const l=dm(o,a);l!==null&&s.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(J.min())})),s}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),ut())}isEqual(t){return this.batchId===t.batchId&&pi(this.mutations,t.mutations,((e,s)=>Od(e,s)))&&pi(this.baseMutations,t.baseMutations,((e,s)=>Od(e,s)))}}class eu{constructor(t,e,s,i){this.batch=t,this.commitVersion=e,this.mutationResults=s,this.docVersions=i}static from(t,e,s){vt(t.mutations.length===s.length,58842,{me:t.mutations.length,fe:s.length});let i=(function(){return SE})();const r=t.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new eu(t,e,s,i)}}/**
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
 */class FE{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class UE{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
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
 */var qt,pt;function BE(n){switch(n){case V.OK:return G(64938);case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0;default:return G(15467,{code:n})}}function gm(n){if(n===void 0)return Pn("GRPC error has no .code"),V.UNKNOWN;switch(n){case qt.OK:return V.OK;case qt.CANCELLED:return V.CANCELLED;case qt.UNKNOWN:return V.UNKNOWN;case qt.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case qt.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case qt.INTERNAL:return V.INTERNAL;case qt.UNAVAILABLE:return V.UNAVAILABLE;case qt.UNAUTHENTICATED:return V.UNAUTHENTICATED;case qt.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case qt.NOT_FOUND:return V.NOT_FOUND;case qt.ALREADY_EXISTS:return V.ALREADY_EXISTS;case qt.PERMISSION_DENIED:return V.PERMISSION_DENIED;case qt.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case qt.ABORTED:return V.ABORTED;case qt.OUT_OF_RANGE:return V.OUT_OF_RANGE;case qt.UNIMPLEMENTED:return V.UNIMPLEMENTED;case qt.DATA_LOSS:return V.DATA_LOSS;default:return G(39323,{code:n})}}(pt=qt||(qt={}))[pt.OK=0]="OK",pt[pt.CANCELLED=1]="CANCELLED",pt[pt.UNKNOWN=2]="UNKNOWN",pt[pt.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",pt[pt.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",pt[pt.NOT_FOUND=5]="NOT_FOUND",pt[pt.ALREADY_EXISTS=6]="ALREADY_EXISTS",pt[pt.PERMISSION_DENIED=7]="PERMISSION_DENIED",pt[pt.UNAUTHENTICATED=16]="UNAUTHENTICATED",pt[pt.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",pt[pt.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",pt[pt.ABORTED=10]="ABORTED",pt[pt.OUT_OF_RANGE=11]="OUT_OF_RANGE",pt[pt.UNIMPLEMENTED=12]="UNIMPLEMENTED",pt[pt.INTERNAL=13]="INTERNAL",pt[pt.UNAVAILABLE=14]="UNAVAILABLE",pt[pt.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
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
 */function $E(){return new TextEncoder}/**
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
 */const zE=new Jn([4294967295,4294967295],0);function Vd(n){const t=$E().encode(n),e=new Cg;return e.update(t),new Uint8Array(e.digest())}function Fd(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),s=t.getUint32(4,!0),i=t.getUint32(8,!0),r=t.getUint32(12,!0);return[new Jn([e,s],0),new Jn([i,r],0)]}class nu{constructor(t,e,s){if(this.bitmap=t,this.padding=e,this.hashCount=s,e<0||e>=8)throw new Ji(`Invalid padding: ${e}`);if(s<0)throw new Ji(`Invalid hash count: ${s}`);if(t.length>0&&this.hashCount===0)throw new Ji(`Invalid hash count: ${s}`);if(t.length===0&&e!==0)throw new Ji(`Invalid padding when bitmap length is 0: ${e}`);this.ge=8*t.length-e,this.pe=Jn.fromNumber(this.ge)}ye(t,e,s){let i=t.add(e.multiply(Jn.fromNumber(s)));return i.compare(zE)===1&&(i=new Jn([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.ge===0)return!1;const e=Vd(t),[s,i]=Fd(e);for(let r=0;r<this.hashCount;r++){const o=this.ye(s,i,r);if(!this.we(o))return!1}return!0}static create(t,e,s){const i=t%8==0?0:8-t%8,r=new Uint8Array(Math.ceil(t/8)),o=new nu(r,i,e);return s.forEach((a=>o.insert(a))),o}insert(t){if(this.ge===0)return;const e=Vd(t),[s,i]=Fd(e);for(let r=0;r<this.hashCount;r++){const o=this.ye(s,i,r);this.be(o)}}be(t){const e=Math.floor(t/8),s=t%8;this.bitmap[e]|=1<<s}}class Ji extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class $a{constructor(t,e,s,i,r){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(t,e,s){const i=new Map;return i.set(t,Hr.createSynthesizedTargetChangeForCurrentChange(t,e,s)),new $a(J.min(),i,new Lt(ct),kn(),ut())}}class Hr{constructor(t,e,s,i,r){this.resumeToken=t,this.current=e,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(t,e,s){return new Hr(s,e,ut(),ut(),ut())}}/**
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
 */class Uo{constructor(t,e,s,i){this.Se=t,this.removedTargetIds=e,this.key=s,this.De=i}}class mm{constructor(t,e){this.targetId=t,this.Ce=e}}class _m{constructor(t,e,s=ae.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=s,this.cause=i}}class Ud{constructor(){this.ve=0,this.Fe=Bd(),this.Me=ae.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(t){t.approximateByteSize()>0&&(this.Oe=!0,this.Me=t)}ke(){let t=ut(),e=ut(),s=ut();return this.Fe.forEach(((i,r)=>{switch(r){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:s=s.add(i);break;default:G(38017,{changeType:r})}})),new Hr(this.Me,this.xe,t,e,s)}Ke(){this.Oe=!1,this.Fe=Bd()}qe(t,e){this.Oe=!0,this.Fe=this.Fe.insert(t,e)}Ue(t){this.Oe=!0,this.Fe=this.Fe.remove(t)}$e(){this.ve+=1}We(){this.ve-=1,vt(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class jE{constructor(t){this.Ge=t,this.ze=new Map,this.je=kn(),this.He=ho(),this.Je=ho(),this.Ze=new Lt(ct)}Xe(t){for(const e of t.Se)t.De&&t.De.isFoundDocument()?this.Ye(e,t.De):this.et(e,t.key,t.De);for(const e of t.removedTargetIds)this.et(e,t.key,t.De)}tt(t){this.forEachTarget(t,(e=>{const s=this.nt(e);switch(t.state){case 0:this.rt(e)&&s.Le(t.resumeToken);break;case 1:s.We(),s.Ne||s.Ke(),s.Le(t.resumeToken);break;case 2:s.We(),s.Ne||this.removeTarget(e);break;case 3:this.rt(e)&&(s.Qe(),s.Le(t.resumeToken));break;case 4:this.rt(e)&&(this.it(e),s.Le(t.resumeToken));break;default:G(56790,{state:t.state})}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.ze.forEach(((s,i)=>{this.rt(i)&&e(i)}))}st(t){const e=t.targetId,s=t.Ce.count,i=this.ot(e);if(i){const r=i.target;if(ac(r))if(s===0){const o=new q(r.path);this.et(e,o,de.newNoDocument(o,J.min()))}else vt(s===1,20013,{expectedCount:s});else{const o=this._t(e);if(o!==s){const a=this.ut(t),l=a?this.ct(a,t,o):1;if(l!==0){this.it(e);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(e,u)}}}}}ut(t){const e=t.Ce.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:s="",padding:i=0},hashCount:r=0}=e;let o,a;try{o=rs(s).toUint8Array()}catch(l){if(l instanceof zg)return Os("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new nu(o,i,r)}catch(l){return Os(l instanceof Ji?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.ge===0?null:a}ct(t,e,s){return e.Ce.count===s-this.Pt(t,e.targetId)?0:2}Pt(t,e){const s=this.Ge.getRemoteKeysForTarget(e);let i=0;return s.forEach((r=>{const o=this.Ge.ht(),a=`projects/${o.projectId}/databases/${o.database}/documents/${r.path.canonicalString()}`;t.mightContain(a)||(this.et(e,r,null),i++)})),i}Tt(t){const e=new Map;this.ze.forEach(((r,o)=>{const a=this.ot(o);if(a){if(r.current&&ac(a.target)){const l=new q(a.target.path);this.It(l).has(o)||this.Et(o,l)||this.et(o,l,de.newNoDocument(l,t))}r.Be&&(e.set(o,r.ke()),r.Ke())}}));let s=ut();this.Je.forEach(((r,o)=>{let a=!0;o.forEachWhile((l=>{const u=this.ot(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)})),a&&(s=s.add(r))})),this.je.forEach(((r,o)=>o.setReadTime(t)));const i=new $a(t,e,this.Ze,this.je,s);return this.je=kn(),this.He=ho(),this.Je=ho(),this.Ze=new Lt(ct),i}Ye(t,e){if(!this.rt(t))return;const s=this.Et(t,e.key)?2:0;this.nt(t).qe(e.key,s),this.je=this.je.insert(e.key,e),this.He=this.He.insert(e.key,this.It(e.key).add(t)),this.Je=this.Je.insert(e.key,this.Rt(e.key).add(t))}et(t,e,s){if(!this.rt(t))return;const i=this.nt(t);this.Et(t,e)?i.qe(e,1):i.Ue(e),this.Je=this.Je.insert(e,this.Rt(e).delete(t)),this.Je=this.Je.insert(e,this.Rt(e).add(t)),s&&(this.je=this.je.insert(e,s))}removeTarget(t){this.ze.delete(t)}_t(t){const e=this.nt(t).ke();return this.Ge.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}$e(t){this.nt(t).$e()}nt(t){let e=this.ze.get(t);return e||(e=new Ud,this.ze.set(t,e)),e}Rt(t){let e=this.Je.get(t);return e||(e=new Jt(ct),this.Je=this.Je.insert(t,e)),e}It(t){let e=this.He.get(t);return e||(e=new Jt(ct),this.He=this.He.insert(t,e)),e}rt(t){const e=this.ot(t)!==null;return e||U("WatchChangeAggregator","Detected inactive target",t),e}ot(t){const e=this.ze.get(t);return e&&e.Ne?null:this.Ge.At(t)}it(t){this.ze.set(t,new Ud),this.Ge.getRemoteKeysForTarget(t).forEach((e=>{this.et(t,e,null)}))}Et(t,e){return this.Ge.getRemoteKeysForTarget(t).has(e)}}function ho(){return new Lt(q.comparator)}function Bd(){return new Lt(q.comparator)}const HE={asc:"ASCENDING",desc:"DESCENDING"},qE={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},WE={and:"AND",or:"OR"};class KE{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function cc(n,t){return n.useProto3Json||Oa(t)?t:{value:t}}function ha(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function ym(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function GE(n,t){return ha(n,t.toTimestamp())}function sn(n){return vt(!!n,49232),J.fromTimestamp((function(e){const s=is(e);return new Ct(s.seconds,s.nanos)})(n))}function su(n,t){return uc(n,t).canonicalString()}function uc(n,t){const e=(function(i){return new Mt(["projects",i.projectId,"databases",i.database])})(n).child("documents");return t===void 0?e:e.child(t)}function bm(n){const t=Mt.fromString(n);return vt(Im(t),10190,{key:t.toString()}),t}function hc(n,t){return su(n.databaseId,t.path)}function Sl(n,t){const e=bm(t);if(e.get(1)!==n.databaseId.projectId)throw new H(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new H(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new q(wm(e))}function vm(n,t){return su(n.databaseId,t)}function YE(n){const t=bm(n);return t.length===4?Mt.emptyPath():wm(t)}function dc(n){return new Mt(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function wm(n){return vt(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function $d(n,t,e){return{name:hc(n,t),fields:e.value.mapValue.fields}}function XE(n,t){let e;if("targetChange"in t){t.targetChange;const s=(function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:G(39313,{state:u})})(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],r=(function(u,h){return u.useProto3Json?(vt(h===void 0||typeof h=="string",58123),ae.fromBase64String(h||"")):(vt(h===void 0||h instanceof Buffer||h instanceof Uint8Array,16193),ae.fromUint8Array(h||new Uint8Array))})(n,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&(function(u){const h=u.code===void 0?V.UNKNOWN:gm(u.code);return new H(h,u.message||"")})(o);e=new _m(s,i,r,a||null)}else if("documentChange"in t){t.documentChange;const s=t.documentChange;s.document,s.document.name,s.document.updateTime;const i=Sl(n,s.document.name),r=sn(s.document.updateTime),o=s.document.createTime?sn(s.document.createTime):J.min(),a=new Ne({mapValue:{fields:s.document.fields}}),l=de.newFoundDocument(i,r,o,a),u=s.targetIds||[],h=s.removedTargetIds||[];e=new Uo(u,h,l.key,l)}else if("documentDelete"in t){t.documentDelete;const s=t.documentDelete;s.document;const i=Sl(n,s.document),r=s.readTime?sn(s.readTime):J.min(),o=de.newNoDocument(i,r),a=s.removedTargetIds||[];e=new Uo([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const s=t.documentRemove;s.document;const i=Sl(n,s.document),r=s.removedTargetIds||[];e=new Uo([],r,i,null)}else{if(!("filter"in t))return G(11601,{Vt:t});{t.filter;const s=t.filter;s.targetId;const{count:i=0,unchangedNames:r}=s,o=new UE(i,r),a=s.targetId;e=new mm(a,o)}}return e}function QE(n,t){let e;if(t instanceof jr)e={update:$d(n,t.key,t.value)};else if(t instanceof pm)e={delete:hc(n,t.key)};else if(t instanceof js)e={update:$d(n,t.key,t.data),updateMask:oT(t.fieldMask)};else{if(!(t instanceof NE))return G(16599,{dt:t.type});e={verify:hc(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map((s=>(function(r,o){const a=o.transform;if(a instanceof ca)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof xr)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Ar)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof ua)return{fieldPath:o.field.canonicalString(),increment:a.Ae};throw G(20930,{transform:o.transform})})(0,s)))),t.precondition.isNone||(e.currentDocument=(function(i,r){return r.updateTime!==void 0?{updateTime:GE(i,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:G(27497)})(n,t.precondition)),e}function JE(n,t){return n&&n.length>0?(vt(t!==void 0,14353),n.map((e=>(function(i,r){let o=i.updateTime?sn(i.updateTime):sn(r);return o.isEqual(J.min())&&(o=sn(r)),new ME(o,i.transformResults||[])})(e,t)))):[]}function ZE(n,t){return{documents:[vm(n,t.path)]}}function tT(n,t){const e={structuredQuery:{}},s=t.path;let i;t.collectionGroup!==null?(i=s,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=s.popLast(),e.structuredQuery.from=[{collectionId:s.lastSegment()}]),e.parent=vm(n,i);const r=(function(u){if(u.length!==0)return Tm(cn.create(u,"and"))})(t.filters);r&&(e.structuredQuery.where=r);const o=(function(u){if(u.length!==0)return u.map((h=>(function(p){return{field:ti(p.field),direction:sT(p.dir)}})(h)))})(t.orderBy);o&&(e.structuredQuery.orderBy=o);const a=cc(n,t.limit);return a!==null&&(e.structuredQuery.limit=a),t.startAt&&(e.structuredQuery.startAt=(function(u){return{before:u.inclusive,values:u.position}})(t.startAt)),t.endAt&&(e.structuredQuery.endAt=(function(u){return{before:!u.inclusive,values:u.position}})(t.endAt)),{ft:e,parent:i}}function eT(n){let t=YE(n.parent);const e=n.structuredQuery,s=e.from?e.from.length:0;let i=null;if(s>0){vt(s===1,65062);const h=e.from[0];h.allDescendants?i=h.collectionId:t=t.child(h.collectionId)}let r=[];e.where&&(r=(function(d){const p=Em(d);return p instanceof cn&&Jg(p)?p.getFilters():[p]})(e.where));let o=[];e.orderBy&&(o=(function(d){return d.map((p=>(function(v){return new la(ei(v.field),(function(w){switch(w){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(v.direction))})(p)))})(e.orderBy));let a=null;e.limit&&(a=(function(d){let p;return p=typeof d=="object"?d.value:d,Oa(p)?null:p})(e.limit));let l=null;e.startAt&&(l=(function(d){const p=!!d.before,_=d.values||[];return new aa(_,p)})(e.startAt));let u=null;return e.endAt&&(u=(function(d){const p=!d.before,_=d.values||[];return new aa(_,p)})(e.endAt)),yE(t,i,o,r,a,"F",l,u)}function nT(n,t){const e=(function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return G(28987,{purpose:i})}})(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Em(n){return n.unaryFilter!==void 0?(function(e){switch(e.unaryFilter.op){case"IS_NAN":const s=ei(e.unaryFilter.field);return Yt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const i=ei(e.unaryFilter.field);return Yt.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=ei(e.unaryFilter.field);return Yt.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ei(e.unaryFilter.field);return Yt.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return G(61313);default:return G(60726)}})(n):n.fieldFilter!==void 0?(function(e){return Yt.create(ei(e.fieldFilter.field),(function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return G(58110);default:return G(50506)}})(e.fieldFilter.op),e.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(e){return cn.create(e.compositeFilter.filters.map((s=>Em(s))),(function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return G(1026)}})(e.compositeFilter.op))})(n):G(30097,{filter:n})}function sT(n){return HE[n]}function iT(n){return qE[n]}function rT(n){return WE[n]}function ti(n){return{fieldPath:n.canonicalString()}}function ei(n){return re.fromServerFormat(n.fieldPath)}function Tm(n){return n instanceof Yt?(function(e){if(e.op==="=="){if(Pd(e.value))return{unaryFilter:{field:ti(e.field),op:"IS_NAN"}};if(Ad(e.value))return{unaryFilter:{field:ti(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Pd(e.value))return{unaryFilter:{field:ti(e.field),op:"IS_NOT_NAN"}};if(Ad(e.value))return{unaryFilter:{field:ti(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ti(e.field),op:iT(e.op),value:e.value}}})(n):n instanceof cn?(function(e){const s=e.getFilters().map((i=>Tm(i)));return s.length===1?s[0]:{compositeFilter:{op:rT(e.op),filters:s}}})(n):G(54877,{filter:n})}function oT(n){const t=[];return n.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function Im(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}function Sm(n){return!!n&&typeof n._toProto=="function"&&n._protoValueType==="ProtoValue"}/**
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
 */class jn{constructor(t,e,s,i,r=J.min(),o=J.min(),a=ae.EMPTY_BYTE_STRING,l=null){this.target=t,this.targetId=e,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(t){return new jn(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new jn(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new jn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new jn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class aT{constructor(t){this.yt=t}}function lT(n){const t=eT({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?lc(t,t.limit,"L"):t}/**
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
 */class cT{constructor(){this.Sn=new uT}addToCollectionParentIndex(t,e){return this.Sn.add(e),N.resolve()}getCollectionParents(t,e){return N.resolve(this.Sn.getEntries(e))}addFieldIndex(t,e){return N.resolve()}deleteFieldIndex(t,e){return N.resolve()}deleteAllFieldIndexes(t){return N.resolve()}createTargetIndexes(t,e){return N.resolve()}getDocumentsMatchingTarget(t,e){return N.resolve(null)}getIndexType(t,e){return N.resolve(0)}getFieldIndexes(t,e){return N.resolve([])}getNextCollectionGroupToUpdate(t){return N.resolve(null)}getMinOffset(t,e){return N.resolve(ss.min())}getMinOffsetFromCollectionGroup(t,e){return N.resolve(ss.min())}updateCollectionGroup(t,e,s){return N.resolve()}updateIndexEntries(t,e){return N.resolve()}}class uT{constructor(){this.index={}}add(t){const e=t.lastSegment(),s=t.popLast(),i=this.index[e]||new Jt(Mt.comparator),r=!i.has(s);return this.index[e]=i.add(s),r}has(t){const e=t.lastSegment(),s=t.popLast(),i=this.index[e];return i&&i.has(s)}getEntries(t){return(this.index[t]||new Jt(Mt.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
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
 */const zd={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},xm=41943040;class ve{static withCacheSize(t){return new ve(t,ve.DEFAULT_COLLECTION_PERCENTILE,ve.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,s){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=s}}/**
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
 */ve.DEFAULT_COLLECTION_PERCENTILE=10,ve.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ve.DEFAULT=new ve(xm,ve.DEFAULT_COLLECTION_PERCENTILE,ve.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ve.DISABLED=new ve(-1,0,0);/**
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
 */class _i{constructor(t){this.sr=t}next(){return this.sr+=2,this.sr}static _r(){return new _i(0)}static ar(){return new _i(-1)}}/**
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
 */const jd="LruGarbageCollector",hT=1048576;function Hd([n,t],[e,s]){const i=ct(n,e);return i===0?ct(t,s):i}class dT{constructor(t){this.Pr=t,this.buffer=new Jt(Hd),this.Tr=0}Ir(){return++this.Tr}Er(t){const e=[t,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(e);else{const s=this.buffer.last();Hd(e,s)<0&&(this.buffer=this.buffer.delete(s).add(e))}}get maxValue(){return this.buffer.last()[0]}}class fT{constructor(t,e,s){this.garbageCollector=t,this.asyncQueue=e,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(t){U(jd,`Garbage collection scheduled in ${t}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){Si(e)?U(jd,"Ignoring IndexedDB error during garbage collection: ",e):await Ii(e)}await this.Ar(3e5)}))}}class pT{constructor(t,e){this.Vr=t,this.params=e}calculateTargetCount(t,e){return this.Vr.dr(t).next((s=>Math.floor(e/100*s)))}nthSequenceNumber(t,e){if(e===0)return N.resolve(Ma.ce);const s=new dT(e);return this.Vr.forEachTarget(t,(i=>s.Er(i.sequenceNumber))).next((()=>this.Vr.mr(t,(i=>s.Er(i))))).next((()=>s.maxValue))}removeTargets(t,e,s){return this.Vr.removeTargets(t,e,s)}removeOrphanedDocuments(t,e){return this.Vr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(U("LruGarbageCollector","Garbage collection skipped; disabled"),N.resolve(zd)):this.getCacheSize(t).next((s=>s<this.params.cacheSizeCollectionThreshold?(U("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),zd):this.gr(t,e)))}getCacheSize(t){return this.Vr.getCacheSize(t)}gr(t,e){let s,i,r,o,a,l,u;const h=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next((d=>(d>this.params.maximumSequenceNumbersToCollect?(U("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${d}`),i=this.params.maximumSequenceNumbersToCollect):i=d,o=Date.now(),this.nthSequenceNumber(t,i)))).next((d=>(s=d,a=Date.now(),this.removeTargets(t,s,e)))).next((d=>(r=d,l=Date.now(),this.removeOrphanedDocuments(t,s)))).next((d=>(u=Date.now(),Js()<=lt.DEBUG&&U("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${r} targets in `+(l-a)+`ms
	Removed ${d} documents in `+(u-l)+`ms
Total Duration: ${u-h}ms`),N.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:r,documentsRemoved:d}))))}}function gT(n,t){return new pT(n,t)}/**
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
 */class mT{constructor(){this.changes=new zs((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,de.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const s=this.changes.get(e);return s!==void 0?N.resolve(s):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 *//**
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
 */class _T{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
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
 */class yT{constructor(t,e,s,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=s,this.indexManager=i}getDocument(t,e){let s=null;return this.documentOverlayCache.getOverlay(t,e).next((i=>(s=i,this.remoteDocumentCache.getEntry(t,e)))).next((i=>(s!==null&&ur(s.mutation,i,ze.empty(),Ct.now()),i)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((s=>this.getLocalViewOfDocuments(t,s,ut()).next((()=>s))))}getLocalViewOfDocuments(t,e,s=ut()){const i=Ts();return this.populateOverlays(t,i,e).next((()=>this.computeViews(t,e,i,s).next((r=>{let o=Qi();return r.forEach(((a,l)=>{o=o.insert(a,l.overlayedDocument)})),o}))))}getOverlayedDocuments(t,e){const s=Ts();return this.populateOverlays(t,s,e).next((()=>this.computeViews(t,e,s,ut())))}populateOverlays(t,e,s){const i=[];return s.forEach((r=>{e.has(r)||i.push(r)})),this.documentOverlayCache.getOverlays(t,i).next((r=>{r.forEach(((o,a)=>{e.set(o,a)}))}))}computeViews(t,e,s,i){let r=kn();const o=cr(),a=(function(){return cr()})();return e.forEach(((l,u)=>{const h=s.get(u.key);i.has(u.key)&&(h===void 0||h.mutation instanceof js)?r=r.insert(u.key,u):h!==void 0?(o.set(u.key,h.mutation.getFieldMask()),ur(h.mutation,u,h.mutation.getFieldMask(),Ct.now())):o.set(u.key,ze.empty())})),this.recalculateAndSaveOverlays(t,r).next((l=>(l.forEach(((u,h)=>o.set(u,h))),e.forEach(((u,h)=>a.set(u,new _T(h,o.get(u)??null)))),a)))}recalculateAndSaveOverlays(t,e){const s=cr();let i=new Lt(((o,a)=>o-a)),r=ut();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((o=>{for(const a of o)a.keys().forEach((l=>{const u=e.get(l);if(u===null)return;let h=s.get(l)||ze.empty();h=a.applyToLocalView(u,h),s.set(l,h);const d=(i.get(a.batchId)||ut()).add(l);i=i.insert(a.batchId,d)}))})).next((()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,h=l.value,d=om();h.forEach((p=>{if(!r.has(p)){const _=dm(e.get(p),s.get(p));_!==null&&d.set(p,_),r=r.add(p)}})),o.push(this.documentOverlayCache.saveOverlays(t,u,d))}return N.waitFor(o)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((s=>this.recalculateAndSaveOverlays(t,s)))}getDocumentsMatchingQuery(t,e,s,i){return bE(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):vE(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,s,i):this.getDocumentsMatchingCollectionQuery(t,e,s,i)}getNextDocuments(t,e,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,s,i).next((r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,s.largestBatchId,i-r.size):N.resolve(Ts());let a=Er,l=r;return o.next((u=>N.forEach(u,((h,d)=>(a<d.largestBatchId&&(a=d.largestBatchId),r.get(h)?N.resolve():this.remoteDocumentCache.getEntry(t,h).next((p=>{l=l.insert(h,p)}))))).next((()=>this.populateOverlays(t,u,r))).next((()=>this.computeViews(t,l,u,ut()))).next((h=>({batchId:a,changes:rm(h)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new q(e)).next((s=>{let i=Qi();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i}))}getDocumentsMatchingCollectionGroupQuery(t,e,s,i){const r=e.collectionGroup;let o=Qi();return this.indexManager.getCollectionParents(t,r).next((a=>N.forEach(a,(l=>{const u=(function(d,p){return new Na(p,null,d.explicitOrderBy.slice(),d.filters.slice(),d.limit,d.limitType,d.startAt,d.endAt)})(e,l.child(r));return this.getDocumentsMatchingCollectionQuery(t,u,s,i).next((h=>{h.forEach(((d,p)=>{o=o.insert(d,p)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(t,e,s,i){let r;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,s.largestBatchId).next((o=>(r=o,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,s,r,i)))).next((o=>{r.forEach(((l,u)=>{const h=u.getKey();o.get(h)===null&&(o=o.insert(h,de.newInvalidDocument(h)))}));let a=Qi();return o.forEach(((l,u)=>{const h=r.get(l);h!==void 0&&ur(h.mutation,u,ze.empty(),Ct.now()),Fa(e,u)&&(a=a.insert(l,u))})),a}))}}/**
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
 */class bT{constructor(t){this.serializer=t,this.Nr=new Map,this.Br=new Map}getBundleMetadata(t,e){return N.resolve(this.Nr.get(e))}saveBundleMetadata(t,e){return this.Nr.set(e.id,(function(i){return{id:i.id,version:i.version,createTime:sn(i.createTime)}})(e)),N.resolve()}getNamedQuery(t,e){return N.resolve(this.Br.get(e))}saveNamedQuery(t,e){return this.Br.set(e.name,(function(i){return{name:i.name,query:lT(i.bundledQuery),readTime:sn(i.readTime)}})(e)),N.resolve()}}/**
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
 */class vT{constructor(){this.overlays=new Lt(q.comparator),this.Lr=new Map}getOverlay(t,e){return N.resolve(this.overlays.get(e))}getOverlays(t,e){const s=Ts();return N.forEach(e,(i=>this.getOverlay(t,i).next((r=>{r!==null&&s.set(i,r)})))).next((()=>s))}saveOverlays(t,e,s){return s.forEach(((i,r)=>{this.bt(t,e,r)})),N.resolve()}removeOverlaysForBatchId(t,e,s){const i=this.Lr.get(s);return i!==void 0&&(i.forEach((r=>this.overlays=this.overlays.remove(r))),this.Lr.delete(s)),N.resolve()}getOverlaysForCollection(t,e,s){const i=Ts(),r=e.length+1,o=new q(e.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!e.isPrefixOf(u.path))break;u.path.length===r&&l.largestBatchId>s&&i.set(l.getKey(),l)}return N.resolve(i)}getOverlaysForCollectionGroup(t,e,s,i){let r=new Lt(((u,h)=>u-h));const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===e&&u.largestBatchId>s){let h=r.get(u.largestBatchId);h===null&&(h=Ts(),r=r.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const a=Ts(),l=r.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach(((u,h)=>a.set(u,h))),!(a.size()>=i)););return N.resolve(a)}bt(t,e,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.Lr.get(i.largestBatchId).delete(s.key);this.Lr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new FE(e,s));let r=this.Lr.get(e);r===void 0&&(r=ut(),this.Lr.set(e,r)),this.Lr.set(e,r.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class wT{constructor(){this.sessionToken=ae.EMPTY_BYTE_STRING}getSessionToken(t){return N.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,N.resolve()}}/**
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
 */class iu{constructor(){this.kr=new Jt(ee.Kr),this.qr=new Jt(ee.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(t,e){const s=new ee(t,e);this.kr=this.kr.add(s),this.qr=this.qr.add(s)}$r(t,e){t.forEach((s=>this.addReference(s,e)))}removeReference(t,e){this.Wr(new ee(t,e))}Qr(t,e){t.forEach((s=>this.removeReference(s,e)))}Gr(t){const e=new q(new Mt([])),s=new ee(e,t),i=new ee(e,t+1),r=[];return this.qr.forEachInRange([s,i],(o=>{this.Wr(o),r.push(o.key)})),r}zr(){this.kr.forEach((t=>this.Wr(t)))}Wr(t){this.kr=this.kr.delete(t),this.qr=this.qr.delete(t)}jr(t){const e=new q(new Mt([])),s=new ee(e,t),i=new ee(e,t+1);let r=ut();return this.qr.forEachInRange([s,i],(o=>{r=r.add(o.key)})),r}containsKey(t){const e=new ee(t,0),s=this.kr.firstAfterOrEqual(e);return s!==null&&t.isEqual(s.key)}}class ee{constructor(t,e){this.key=t,this.Hr=e}static Kr(t,e){return q.comparator(t.key,e.key)||ct(t.Hr,e.Hr)}static Ur(t,e){return ct(t.Hr,e.Hr)||q.comparator(t.key,e.key)}}/**
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
 */class ET{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Yn=1,this.Jr=new Jt(ee.Kr)}checkEmpty(t){return N.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,s,i){const r=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new VE(r,e,s,i);this.mutationQueue.push(o);for(const a of i)this.Jr=this.Jr.add(new ee(a.key,r)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return N.resolve(o)}lookupMutationBatch(t,e){return N.resolve(this.Zr(e))}getNextMutationBatchAfterBatchId(t,e){const s=e+1,i=this.Xr(s),r=i<0?0:i;return N.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return N.resolve(this.mutationQueue.length===0?Gc:this.Yn-1)}getAllMutationBatches(t){return N.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const s=new ee(e,0),i=new ee(e,Number.POSITIVE_INFINITY),r=[];return this.Jr.forEachInRange([s,i],(o=>{const a=this.Zr(o.Hr);r.push(a)})),N.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(t,e){let s=new Jt(ct);return e.forEach((i=>{const r=new ee(i,0),o=new ee(i,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([r,o],(a=>{s=s.add(a.Hr)}))})),N.resolve(this.Yr(s))}getAllMutationBatchesAffectingQuery(t,e){const s=e.path,i=s.length+1;let r=s;q.isDocumentKey(r)||(r=r.child(""));const o=new ee(new q(r),0);let a=new Jt(ct);return this.Jr.forEachWhile((l=>{const u=l.key.path;return!!s.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.Hr)),!0)}),o),N.resolve(this.Yr(a))}Yr(t){const e=[];return t.forEach((s=>{const i=this.Zr(s);i!==null&&e.push(i)})),e}removeMutationBatch(t,e){vt(this.ei(e.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Jr;return N.forEach(e.mutations,(i=>{const r=new ee(i.key,e.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)})).next((()=>{this.Jr=s}))}nr(t){}containsKey(t,e){const s=new ee(e,0),i=this.Jr.firstAfterOrEqual(s);return N.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,N.resolve()}ei(t,e){return this.Xr(t)}Xr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Zr(t){const e=this.Xr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
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
 */class TT{constructor(t){this.ti=t,this.docs=(function(){return new Lt(q.comparator)})(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const s=e.key,i=this.docs.get(s),r=i?i.size:0,o=this.ti(e);return this.docs=this.docs.insert(s,{document:e.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(t,s.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const s=this.docs.get(e);return N.resolve(s?s.document.mutableCopy():de.newInvalidDocument(e))}getEntries(t,e){let s=kn();return e.forEach((i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():de.newInvalidDocument(i))})),N.resolve(s)}getDocumentsMatchingQuery(t,e,s,i){let r=kn();const o=e.path,a=new q(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:h}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||Y0(G0(h),s)<=0||(i.has(h.key)||Fa(e,h))&&(r=r.insert(h.key,h.mutableCopy()))}return N.resolve(r)}getAllFromCollectionGroup(t,e,s,i){G(9500)}ni(t,e){return N.forEach(this.docs,(s=>e(s)))}newChangeBuffer(t){return new IT(this)}getSize(t){return N.resolve(this.size)}}class IT extends mT{constructor(t){super(),this.Mr=t}applyChanges(t){const e=[];return this.changes.forEach(((s,i)=>{i.isValidDocument()?e.push(this.Mr.addEntry(t,i)):this.Mr.removeEntry(s)})),N.waitFor(e)}getFromCache(t,e){return this.Mr.getEntry(t,e)}getAllFromCache(t,e){return this.Mr.getEntries(t,e)}}/**
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
 */class ST{constructor(t){this.persistence=t,this.ri=new zs((e=>Qc(e)),Jc),this.lastRemoteSnapshotVersion=J.min(),this.highestTargetId=0,this.ii=0,this.si=new iu,this.targetCount=0,this.oi=_i._r()}forEachTarget(t,e){return this.ri.forEach(((s,i)=>e(i))),N.resolve()}getLastRemoteSnapshotVersion(t){return N.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return N.resolve(this.ii)}allocateTargetId(t){return this.highestTargetId=this.oi.next(),N.resolve(this.highestTargetId)}setTargetsMetadata(t,e,s){return s&&(this.lastRemoteSnapshotVersion=s),e>this.ii&&(this.ii=e),N.resolve()}lr(t){this.ri.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.oi=new _i(e),this.highestTargetId=e),t.sequenceNumber>this.ii&&(this.ii=t.sequenceNumber)}addTargetData(t,e){return this.lr(e),this.targetCount+=1,N.resolve()}updateTargetData(t,e){return this.lr(e),N.resolve()}removeTargetData(t,e){return this.ri.delete(e.target),this.si.Gr(e.targetId),this.targetCount-=1,N.resolve()}removeTargets(t,e,s){let i=0;const r=[];return this.ri.forEach(((o,a)=>{a.sequenceNumber<=e&&s.get(a.targetId)===null&&(this.ri.delete(o),r.push(this.removeMatchingKeysForTargetId(t,a.targetId)),i++)})),N.waitFor(r).next((()=>i))}getTargetCount(t){return N.resolve(this.targetCount)}getTargetData(t,e){const s=this.ri.get(e)||null;return N.resolve(s)}addMatchingKeys(t,e,s){return this.si.$r(e,s),N.resolve()}removeMatchingKeys(t,e,s){this.si.Qr(e,s);const i=this.persistence.referenceDelegate,r=[];return i&&e.forEach((o=>{r.push(i.markPotentiallyOrphaned(t,o))})),N.waitFor(r)}removeMatchingKeysForTargetId(t,e){return this.si.Gr(e),N.resolve()}getMatchingKeysForTargetId(t,e){const s=this.si.jr(e);return N.resolve(s)}containsKey(t,e){return N.resolve(this.si.containsKey(e))}}/**
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
 */class Am{constructor(t,e){this._i={},this.overlays={},this.ai=new Ma(0),this.ui=!1,this.ui=!0,this.ci=new wT,this.referenceDelegate=t(this),this.li=new ST(this),this.indexManager=new cT,this.remoteDocumentCache=(function(i){return new TT(i)})((s=>this.referenceDelegate.hi(s))),this.serializer=new aT(e),this.Pi=new bT(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new vT,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let s=this._i[t.toKey()];return s||(s=new ET(e,this.referenceDelegate),this._i[t.toKey()]=s),s}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(t,e,s){U("MemoryPersistence","Starting transaction:",t);const i=new xT(this.ai.next());return this.referenceDelegate.Ti(),s(i).next((r=>this.referenceDelegate.Ii(i).next((()=>r)))).toPromise().then((r=>(i.raiseOnCommittedEvent(),r)))}Ei(t,e){return N.or(Object.values(this._i).map((s=>()=>s.containsKey(t,e))))}}class xT extends Q0{constructor(t){super(),this.currentSequenceNumber=t}}class ru{constructor(t){this.persistence=t,this.Ri=new iu,this.Ai=null}static Vi(t){return new ru(t)}get di(){if(this.Ai)return this.Ai;throw G(60996)}addReference(t,e,s){return this.Ri.addReference(s,e),this.di.delete(s.toString()),N.resolve()}removeReference(t,e,s){return this.Ri.removeReference(s,e),this.di.add(s.toString()),N.resolve()}markPotentiallyOrphaned(t,e){return this.di.add(e.toString()),N.resolve()}removeTarget(t,e){this.Ri.Gr(e.targetId).forEach((i=>this.di.add(i.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(t,e.targetId).next((i=>{i.forEach((r=>this.di.add(r.toString())))})).next((()=>s.removeTargetData(t,e)))}Ti(){this.Ai=new Set}Ii(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return N.forEach(this.di,(s=>{const i=q.fromPath(s);return this.mi(t,i).next((r=>{r||e.removeEntry(i,J.min())}))})).next((()=>(this.Ai=null,e.apply(t))))}updateLimboDocument(t,e){return this.mi(t,e).next((s=>{s?this.di.delete(e.toString()):this.di.add(e.toString())}))}hi(t){return 0}mi(t,e){return N.or([()=>N.resolve(this.Ri.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ei(t,e)])}}class da{constructor(t,e){this.persistence=t,this.fi=new zs((s=>tE(s.path)),((s,i)=>s.isEqual(i))),this.garbageCollector=gT(this,e)}static Vi(t,e){return new da(t,e)}Ti(){}Ii(t){return N.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}dr(t){const e=this.pr(t);return this.persistence.getTargetCache().getTargetCount(t).next((s=>e.next((i=>s+i))))}pr(t){let e=0;return this.mr(t,(s=>{e++})).next((()=>e))}mr(t,e){return N.forEach(this.fi,((s,i)=>this.wr(t,s,i).next((r=>r?N.resolve():e(i)))))}removeTargets(t,e,s){return this.persistence.getTargetCache().removeTargets(t,e,s)}removeOrphanedDocuments(t,e){let s=0;const i=this.persistence.getRemoteDocumentCache(),r=i.newChangeBuffer();return i.ni(t,(o=>this.wr(t,o,e).next((a=>{a||(s++,r.removeEntry(o,J.min()))})))).next((()=>r.apply(t))).next((()=>s))}markPotentiallyOrphaned(t,e){return this.fi.set(e,t.currentSequenceNumber),N.resolve()}removeTarget(t,e){const s=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,s)}addReference(t,e,s){return this.fi.set(s,t.currentSequenceNumber),N.resolve()}removeReference(t,e,s){return this.fi.set(s,t.currentSequenceNumber),N.resolve()}updateLimboDocument(t,e){return this.fi.set(e,t.currentSequenceNumber),N.resolve()}hi(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=No(t.data.value)),e}wr(t,e,s){return N.or([()=>this.persistence.Ei(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const i=this.fi.get(e);return N.resolve(i!==void 0&&i>s)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
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
 */class ou{constructor(t,e,s,i){this.targetId=t,this.fromCache=e,this.Ts=s,this.Is=i}static Es(t,e){let s=ut(),i=ut();for(const r of e.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new ou(t,e.fromCache,s,i)}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class AT{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class PT{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=(function(){return fb()?8:J0(pe())>0?6:4})()}initialize(t,e){this.fs=t,this.indexManager=e,this.Rs=!0}getDocumentsMatchingQuery(t,e,s,i){const r={result:null};return this.gs(t,e).next((o=>{r.result=o})).next((()=>{if(!r.result)return this.ps(t,e,i,s).next((o=>{r.result=o}))})).next((()=>{if(r.result)return;const o=new AT;return this.ys(t,e,o).next((a=>{if(r.result=a,this.As)return this.ws(t,e,o,a.size)}))})).next((()=>r.result))}ws(t,e,s,i){return s.documentReadCount<this.Vs?(Js()<=lt.DEBUG&&U("QueryEngine","SDK will not create cache indexes for query:",Zs(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),N.resolve()):(Js()<=lt.DEBUG&&U("QueryEngine","Query:",Zs(e),"scans",s.documentReadCount,"local documents and returns",i,"documents as results."),s.documentReadCount>this.ds*i?(Js()<=lt.DEBUG&&U("QueryEngine","The SDK decides to create cache indexes for query:",Zs(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,nn(e))):N.resolve())}gs(t,e){if(Dd(e))return N.resolve(null);let s=nn(e);return this.indexManager.getIndexType(t,s).next((i=>i===0?null:(e.limit!==null&&i===1&&(e=lc(e,null,"F"),s=nn(e)),this.indexManager.getDocumentsMatchingTarget(t,s).next((r=>{const o=ut(...r);return this.fs.getDocuments(t,o).next((a=>this.indexManager.getMinOffset(t,s).next((l=>{const u=this.bs(e,a);return this.Ss(e,u,o,l.readTime)?this.gs(t,lc(e,null,"F")):this.Ds(t,u,e,l)}))))})))))}ps(t,e,s,i){return Dd(e)||i.isEqual(J.min())?N.resolve(null):this.fs.getDocuments(t,s).next((r=>{const o=this.bs(e,r);return this.Ss(e,o,s,i)?N.resolve(null):(Js()<=lt.DEBUG&&U("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Zs(e)),this.Ds(t,o,e,K0(i,Er)).next((a=>a)))}))}bs(t,e){let s=new Jt(sm(t));return e.forEach(((i,r)=>{Fa(t,r)&&(s=s.add(r))})),s}Ss(t,e,s,i){if(t.limit===null)return!1;if(s.size!==e.size)return!0;const r=t.limitType==="F"?e.last():e.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}ys(t,e,s){return Js()<=lt.DEBUG&&U("QueryEngine","Using full collection scan to execute query:",Zs(e)),this.fs.getDocumentsMatchingQuery(t,e,ss.min(),s)}Ds(t,e,s,i){return this.fs.getDocumentsMatchingQuery(t,s,i).next((r=>(e.forEach((o=>{r=r.insert(o.key,o)})),r)))}}/**
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
 */const au="LocalStore",kT=3e8;class RT{constructor(t,e,s,i){this.persistence=t,this.Cs=e,this.serializer=i,this.vs=new Lt(ct),this.Fs=new zs((r=>Qc(r)),Jc),this.Ms=new Map,this.xs=t.getRemoteDocumentCache(),this.li=t.getTargetCache(),this.Pi=t.getBundleCache(),this.Os(s)}Os(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new yT(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.vs)))}}function CT(n,t,e,s){return new RT(n,t,e,s)}async function Pm(n,t){const e=Z(n);return await e.persistence.runTransaction("Handle user change","readonly",(s=>{let i;return e.mutationQueue.getAllMutationBatches(s).next((r=>(i=r,e.Os(t),e.mutationQueue.getAllMutationBatches(s)))).next((r=>{const o=[],a=[];let l=ut();for(const u of i){o.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}for(const u of r){a.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}return e.localDocuments.getDocuments(s,l).next((u=>({Ns:u,removedBatchIds:o,addedBatchIds:a})))}))}))}function DT(n,t){const e=Z(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const i=t.batch.keys(),r=e.xs.newChangeBuffer({trackRemovals:!0});return(function(a,l,u,h){const d=u.batch,p=d.keys();let _=N.resolve();return p.forEach((v=>{_=_.next((()=>h.getEntry(l,v))).next((E=>{const w=u.docVersions.get(v);vt(w!==null,48541),E.version.compareTo(w)<0&&(d.applyToRemoteDocument(E,u),E.isValidDocument()&&(E.setReadTime(u.commitVersion),h.addEntry(E)))}))})),_.next((()=>a.mutationQueue.removeMutationBatch(l,d)))})(e,s,t,r).next((()=>r.apply(s))).next((()=>e.mutationQueue.performConsistencyCheck(s))).next((()=>e.documentOverlayCache.removeOverlaysForBatchId(s,i,t.batch.batchId))).next((()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(a){let l=ut();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l})(t)))).next((()=>e.localDocuments.getDocuments(s,i)))}))}function km(n){const t=Z(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.li.getLastRemoteSnapshotVersion(e)))}function MT(n,t){const e=Z(n),s=t.snapshotVersion;let i=e.vs;return e.persistence.runTransaction("Apply remote event","readwrite-primary",(r=>{const o=e.xs.newChangeBuffer({trackRemovals:!0});i=e.vs;const a=[];t.targetChanges.forEach(((h,d)=>{const p=i.get(d);if(!p)return;a.push(e.li.removeMatchingKeys(r,h.removedDocuments,d).next((()=>e.li.addMatchingKeys(r,h.addedDocuments,d))));let _=p.withSequenceNumber(r.currentSequenceNumber);t.targetMismatches.get(d)!==null?_=_.withResumeToken(ae.EMPTY_BYTE_STRING,J.min()).withLastLimboFreeSnapshotVersion(J.min()):h.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(h.resumeToken,s)),i=i.insert(d,_),(function(E,w,P){return E.resumeToken.approximateByteSize()===0||w.snapshotVersion.toMicroseconds()-E.snapshotVersion.toMicroseconds()>=kT?!0:P.addedDocuments.size+P.modifiedDocuments.size+P.removedDocuments.size>0})(p,_,h)&&a.push(e.li.updateTargetData(r,_))}));let l=kn(),u=ut();if(t.documentUpdates.forEach((h=>{t.resolvedLimboDocuments.has(h)&&a.push(e.persistence.referenceDelegate.updateLimboDocument(r,h))})),a.push(OT(r,o,t.documentUpdates).next((h=>{l=h.Bs,u=h.Ls}))),!s.isEqual(J.min())){const h=e.li.getLastRemoteSnapshotVersion(r).next((d=>e.li.setTargetsMetadata(r,r.currentSequenceNumber,s)));a.push(h)}return N.waitFor(a).next((()=>o.apply(r))).next((()=>e.localDocuments.getLocalViewOfDocuments(r,l,u))).next((()=>l))})).then((r=>(e.vs=i,r)))}function OT(n,t,e){let s=ut(),i=ut();return e.forEach((r=>s=s.add(r))),t.getEntries(n,s).next((r=>{let o=kn();return e.forEach(((a,l)=>{const u=r.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(J.min())?(t.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(t.addEntry(l),o=o.insert(a,l)):U(au,"Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)})),{Bs:o,Ls:i}}))}function LT(n,t){const e=Z(n);return e.persistence.runTransaction("Get next mutation batch","readonly",(s=>(t===void 0&&(t=Gc),e.mutationQueue.getNextMutationBatchAfterBatchId(s,t))))}function NT(n,t){const e=Z(n);return e.persistence.runTransaction("Allocate target","readwrite",(s=>{let i;return e.li.getTargetData(s,t).next((r=>r?(i=r,N.resolve(i)):e.li.allocateTargetId(s).next((o=>(i=new jn(t,o,"TargetPurposeListen",s.currentSequenceNumber),e.li.addTargetData(s,i).next((()=>i)))))))})).then((s=>{const i=e.vs.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(e.vs=e.vs.insert(s.targetId,s),e.Fs.set(t,s.targetId)),s}))}async function fc(n,t,e){const s=Z(n),i=s.vs.get(t),r=e?"readwrite":"readwrite-primary";try{e||await s.persistence.runTransaction("Release target",r,(o=>s.persistence.referenceDelegate.removeTarget(o,i)))}catch(o){if(!Si(o))throw o;U(au,`Failed to update sequence numbers for target ${t}: ${o}`)}s.vs=s.vs.remove(t),s.Fs.delete(i.target)}function qd(n,t,e){const s=Z(n);let i=J.min(),r=ut();return s.persistence.runTransaction("Execute query","readwrite",(o=>(function(l,u,h){const d=Z(l),p=d.Fs.get(h);return p!==void 0?N.resolve(d.vs.get(p)):d.li.getTargetData(u,h)})(s,o,nn(t)).next((a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.li.getMatchingKeysForTargetId(o,a.targetId).next((l=>{r=l}))})).next((()=>s.Cs.getDocumentsMatchingQuery(o,t,e?i:J.min(),e?r:ut()))).next((a=>(VT(s,EE(t),a),{documents:a,ks:r})))))}function VT(n,t,e){let s=n.Ms.get(t)||J.min();e.forEach(((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)})),n.Ms.set(t,s)}class Wd{constructor(){this.activeTargetIds=PE()}Qs(t){this.activeTargetIds=this.activeTargetIds.add(t)}Gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Ws(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class FT{constructor(){this.vo=new Wd,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,s){}addLocalQueryTarget(t,e=!0){return e&&this.vo.Qs(t),this.Fo[t]||"not-current"}updateQueryState(t,e,s){this.Fo[t]=e}removeLocalQueryTarget(t){this.vo.Gs(t)}isLocalQueryTarget(t){return this.vo.activeTargetIds.has(t)}clearQueryState(t){delete this.Fo[t]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(t){return this.vo.activeTargetIds.has(t)}start(){return this.vo=new Wd,Promise.resolve()}handleUserChange(t,e,s){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class UT{Mo(t){}shutdown(){}}/**
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
 */const Kd="ConnectivityMonitor";class Gd{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(t){this.Lo.push(t)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){U(Kd,"Network connectivity changed: AVAILABLE");for(const t of this.Lo)t(0)}Bo(){U(Kd,"Network connectivity changed: UNAVAILABLE");for(const t of this.Lo)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */let fo=null;function pc(){return fo===null?fo=(function(){return 268435456+Math.round(2147483648*Math.random())})():fo++,"0x"+fo.toString(16)}/**
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
 */const xl="RestConnection",BT={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class $T{get Ko(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.qo=e+"://"+t.host,this.Uo=`projects/${s}/databases/${i}`,this.$o=this.databaseId.database===ra?`project_id=${s}`:`project_id=${s}&database_id=${i}`}Wo(t,e,s,i,r){const o=pc(),a=this.Qo(t,e.toUriEncodedString());U(xl,`Sending RPC '${t}' ${o}:`,a,s);const l={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(l,i,r);const{host:u}=new URL(a),h=us(u);return this.zo(t,a,l,s,h).then((d=>(U(xl,`Received RPC '${t}' ${o}: `,d),d)),(d=>{throw Os(xl,`RPC '${t}' ${o} failed with error: `,d,"url: ",a,"request:",s),d}))}jo(t,e,s,i,r,o){return this.Wo(t,e,s,i,r)}Go(t,e,s){t["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Ti})(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((i,r)=>t[r]=i)),s&&s.headers.forEach(((i,r)=>t[r]=i))}Qo(t,e){const s=BT[t];let i=`${this.qo}/v1/${e}:${s}`;return this.databaseInfo.apiKey&&(i=`${i}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),i}terminate(){}}/**
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
 */class zT{constructor(t){this.Ho=t.Ho,this.Jo=t.Jo}Zo(t){this.Xo=t}Yo(t){this.e_=t}t_(t){this.n_=t}onMessage(t){this.r_=t}close(){this.Jo()}send(t){this.Ho(t)}i_(){this.Xo()}s_(){this.e_()}o_(t){this.n_(t)}__(t){this.r_(t)}}/**
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
 */const ue="WebChannelConnection",ji=(n,t,e)=>{n.listen(t,(s=>{try{e(s)}catch(i){setTimeout((()=>{throw i}),0)}}))};class ai extends $T{constructor(t){super(t),this.a_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}static u_(){if(!ai.c_){const t=Lg();ji(t,Og.STAT_EVENT,(e=>{e.stat===nc.PROXY?U(ue,"STAT_EVENT: detected buffering proxy"):e.stat===nc.NOPROXY&&U(ue,"STAT_EVENT: detected no buffering proxy")})),ai.c_=!0}}zo(t,e,s,i,r){const o=pc();return new Promise(((a,l)=>{const u=new Dg;u.setWithCredentials(!0),u.listenOnce(Mg.COMPLETE,(()=>{try{switch(u.getLastErrorCode()){case Lo.NO_ERROR:const d=u.getResponseJson();U(ue,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(d)),a(d);break;case Lo.TIMEOUT:U(ue,`RPC '${t}' ${o} timed out`),l(new H(V.DEADLINE_EXCEEDED,"Request time out"));break;case Lo.HTTP_ERROR:const p=u.getStatus();if(U(ue,`RPC '${t}' ${o} failed with status:`,p,"response text:",u.getResponseText()),p>0){let _=u.getResponseJson();Array.isArray(_)&&(_=_[0]);const v=_==null?void 0:_.error;if(v&&v.status&&v.message){const E=(function(P){const R=P.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(R)>=0?R:V.UNKNOWN})(v.status);l(new H(E,v.message))}else l(new H(V.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new H(V.UNAVAILABLE,"Connection failed."));break;default:G(9055,{l_:t,streamId:o,h_:u.getLastErrorCode(),P_:u.getLastError()})}}finally{U(ue,`RPC '${t}' ${o} completed.`)}}));const h=JSON.stringify(i);U(ue,`RPC '${t}' ${o} sending request:`,i),u.send(e,"POST",h,s,15)}))}T_(t,e,s){const i=pc(),r=[this.qo,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=this.createWebChannelTransport(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(a.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(a.useFetchStreams=!0),this.Go(a.initMessageHeaders,e,s),a.encodeInitMessageHeaders=!0;const u=r.join("");U(ue,`Creating RPC '${t}' stream ${i}: ${u}`,a);const h=o.createWebChannel(u,a);this.I_(h);let d=!1,p=!1;const _=new zT({Ho:v=>{p?U(ue,`Not sending because RPC '${t}' stream ${i} is closed:`,v):(d||(U(ue,`Opening RPC '${t}' stream ${i} transport.`),h.open(),d=!0),U(ue,`RPC '${t}' stream ${i} sending:`,v),h.send(v))},Jo:()=>h.close()});return ji(h,Xi.EventType.OPEN,(()=>{p||(U(ue,`RPC '${t}' stream ${i} transport opened.`),_.i_())})),ji(h,Xi.EventType.CLOSE,(()=>{p||(p=!0,U(ue,`RPC '${t}' stream ${i} transport closed`),_.o_(),this.E_(h))})),ji(h,Xi.EventType.ERROR,(v=>{p||(p=!0,Os(ue,`RPC '${t}' stream ${i} transport errored. Name:`,v.name,"Message:",v.message),_.o_(new H(V.UNAVAILABLE,"The operation could not be completed")))})),ji(h,Xi.EventType.MESSAGE,(v=>{var E;if(!p){const w=v.data[0];vt(!!w,16349);const P=w,R=(P==null?void 0:P.error)||((E=P[0])==null?void 0:E.error);if(R){U(ue,`RPC '${t}' stream ${i} received error:`,R);const k=R.status;let C=(function(S){const g=qt[S];if(g!==void 0)return gm(g)})(k),M=R.message;k==="NOT_FOUND"&&M.includes("database")&&M.includes("does not exist")&&M.includes(this.databaseId.database)&&Os(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),C===void 0&&(C=V.INTERNAL,M="Unknown error status: "+k+" with message "+R.message),p=!0,_.o_(new H(C,M)),h.close()}else U(ue,`RPC '${t}' stream ${i} received:`,w),_.__(w)}})),ai.u_(),setTimeout((()=>{_.s_()}),0),_}terminate(){this.a_.forEach((t=>t.close())),this.a_=[]}I_(t){this.a_.push(t)}E_(t){this.a_=this.a_.filter((e=>e===t))}Go(t,e,s){super.Go(t,e,s),this.databaseInfo.apiKey&&(t["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return Ng()}}/**
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
 */function jT(n){return new ai(n)}function Al(){return typeof document<"u"?document:null}/**
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
 */function za(n){return new KE(n,!0)}/**
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
 */ai.c_=!1;class Rm{constructor(t,e,s=1e3,i=1.5,r=6e4){this.Ci=t,this.timerId=e,this.R_=s,this.A_=i,this.V_=r,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(t){this.cancel();const e=Math.floor(this.d_+this.y_()),s=Math.max(0,Date.now()-this.f_),i=Math.max(0,e-s);i>0&&U("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.d_} ms, delay with jitter: ${e} ms, last attempt: ${s} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,i,(()=>(this.f_=Date.now(),t()))),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
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
 */const Yd="PersistentStream";class Cm{constructor(t,e,s,i,r,o,a,l){this.Ci=t,this.b_=s,this.S_=i,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Rm(t,e)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.b_,6e4,(()=>this.k_())))}K_(t){this.q_(),this.stream.send(t)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,e){this.q_(),this.U_(),this.M_.cancel(),this.D_++,t!==4?this.M_.reset():e&&e.code===V.RESOURCE_EXHAUSTED?(Pn(e.toString()),Pn("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):e&&e.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.t_(e)}W_(){}auth(){this.state=1;const t=this.Q_(this.D_),e=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,i])=>{this.D_===e&&this.G_(s,i)}),(s=>{t((()=>{const i=new H(V.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(i)}))}))}G_(t,e){const s=this.Q_(this.D_);this.stream=this.j_(t,e),this.stream.Zo((()=>{s((()=>this.listener.Zo()))})),this.stream.Yo((()=>{s((()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.S_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.Yo())))})),this.stream.t_((i=>{s((()=>this.z_(i)))})),this.stream.onMessage((i=>{s((()=>++this.F_==1?this.H_(i):this.onNext(i)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(t){return U(Yd,`close with error: ${t}`),this.stream=null,this.close(4,t)}Q_(t){return e=>{this.Ci.enqueueAndForget((()=>this.D_===t?e():(U(Yd,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class HT extends Cm{constructor(t,e,s,i,r,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,s,i,o),this.serializer=r}j_(t,e){return this.connection.T_("Listen",t,e)}H_(t){return this.onNext(t)}onNext(t){this.M_.reset();const e=XE(this.serializer,t),s=(function(r){if(!("targetChange"in r))return J.min();const o=r.targetChange;return o.targetIds&&o.targetIds.length?J.min():o.readTime?sn(o.readTime):J.min()})(t);return this.listener.J_(e,s)}Z_(t){const e={};e.database=dc(this.serializer),e.addTarget=(function(r,o){let a;const l=o.target;if(a=ac(l)?{documents:ZE(r,l)}:{query:tT(r,l).ft},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=ym(r,o.resumeToken);const u=cc(r,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(J.min())>0){a.readTime=ha(r,o.snapshotVersion.toTimestamp());const u=cc(r,o.expectedCount);u!==null&&(a.expectedCount=u)}return a})(this.serializer,t);const s=nT(this.serializer,t);s&&(e.labels=s),this.K_(e)}X_(t){const e={};e.database=dc(this.serializer),e.removeTarget=t,this.K_(e)}}class qT extends Cm{constructor(t,e,s,i,r,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,s,i,o),this.serializer=r}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(t,e){return this.connection.T_("Write",t,e)}H_(t){return vt(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,vt(!t.writeResults||t.writeResults.length===0,55816),this.listener.ta()}onNext(t){vt(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.M_.reset();const e=JE(t.writeResults,t.commitTime),s=sn(t.commitTime);return this.listener.na(s,e)}ra(){const t={};t.database=dc(this.serializer),this.K_(t)}ea(t){const e={streamToken:this.lastStreamToken,writes:t.map((s=>QE(this.serializer,s)))};this.K_(e)}}/**
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
 */class WT{}class KT extends WT{constructor(t,e,s,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=s,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new H(V.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(t,e,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,o])=>this.connection.Wo(t,uc(e,s),i,r,o))).catch((r=>{throw r.name==="FirebaseError"?(r.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new H(V.UNKNOWN,r.toString())}))}jo(t,e,s,i,r){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,a])=>this.connection.jo(t,uc(e,s),i,o,a,r))).catch((o=>{throw o.name==="FirebaseError"?(o.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new H(V.UNKNOWN,o.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}function GT(n,t,e,s){return new KT(n,t,e,s)}class YT{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(t){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ca("Offline")))}set(t){this.Pa(),this.oa=0,t==="Online"&&(this.aa=!1),this.ca(t)}ca(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}la(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Pn(e),this.aa=!1):U("OnlineStateTracker",e)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const Ls="RemoteStore";class XT{constructor(t,e,s,i,r){this.localStore=t,this.datastore=e,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.Ra=[],this.Aa=r,this.Aa.Mo((o=>{s.enqueueAndForget((async()=>{Hs(this)&&(U(Ls,"Restarting streams for network reachability change."),await(async function(l){const u=Z(l);u.Ea.add(4),await qr(u),u.Va.set("Unknown"),u.Ea.delete(4),await ja(u)})(this))}))})),this.Va=new YT(s,i)}}async function ja(n){if(Hs(n))for(const t of n.Ra)await t(!0)}async function qr(n){for(const t of n.Ra)await t(!1)}function Dm(n,t){const e=Z(n);e.Ia.has(t.targetId)||(e.Ia.set(t.targetId,t),hu(e)?uu(e):xi(e).O_()&&cu(e,t))}function lu(n,t){const e=Z(n),s=xi(e);e.Ia.delete(t),s.O_()&&Mm(e,t),e.Ia.size===0&&(s.O_()?s.L_():Hs(e)&&e.Va.set("Unknown"))}function cu(n,t){if(n.da.$e(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(J.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}xi(n).Z_(t)}function Mm(n,t){n.da.$e(t),xi(n).X_(t)}function uu(n){n.da=new jE({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),At:t=>n.Ia.get(t)||null,ht:()=>n.datastore.serializer.databaseId}),xi(n).start(),n.Va.ua()}function hu(n){return Hs(n)&&!xi(n).x_()&&n.Ia.size>0}function Hs(n){return Z(n).Ea.size===0}function Om(n){n.da=void 0}async function QT(n){n.Va.set("Online")}async function JT(n){n.Ia.forEach(((t,e)=>{cu(n,t)}))}async function ZT(n,t){Om(n),hu(n)?(n.Va.ha(t),uu(n)):n.Va.set("Unknown")}async function tI(n,t,e){if(n.Va.set("Online"),t instanceof _m&&t.state===2&&t.cause)try{await(async function(i,r){const o=r.cause;for(const a of r.targetIds)i.Ia.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.Ia.delete(a),i.da.removeTarget(a))})(n,t)}catch(s){U(Ls,"Failed to remove targets %s: %s ",t.targetIds.join(","),s),await fa(n,s)}else if(t instanceof Uo?n.da.Xe(t):t instanceof mm?n.da.st(t):n.da.tt(t),!e.isEqual(J.min()))try{const s=await km(n.localStore);e.compareTo(s)>=0&&await(function(r,o){const a=r.da.Tt(o);return a.targetChanges.forEach(((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const h=r.Ia.get(u);h&&r.Ia.set(u,h.withResumeToken(l.resumeToken,o))}})),a.targetMismatches.forEach(((l,u)=>{const h=r.Ia.get(l);if(!h)return;r.Ia.set(l,h.withResumeToken(ae.EMPTY_BYTE_STRING,h.snapshotVersion)),Mm(r,l);const d=new jn(h.target,l,u,h.sequenceNumber);cu(r,d)})),r.remoteSyncer.applyRemoteEvent(a)})(n,e)}catch(s){U(Ls,"Failed to raise snapshot:",s),await fa(n,s)}}async function fa(n,t,e){if(!Si(t))throw t;n.Ea.add(1),await qr(n),n.Va.set("Offline"),e||(e=()=>km(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{U(Ls,"Retrying IndexedDB access"),await e(),n.Ea.delete(1),await ja(n)}))}function Lm(n,t){return t().catch((e=>fa(n,e,t)))}async function Ha(n){const t=Z(n),e=as(t);let s=t.Ta.length>0?t.Ta[t.Ta.length-1].batchId:Gc;for(;eI(t);)try{const i=await LT(t.localStore,s);if(i===null){t.Ta.length===0&&e.L_();break}s=i.batchId,nI(t,i)}catch(i){await fa(t,i)}Nm(t)&&Vm(t)}function eI(n){return Hs(n)&&n.Ta.length<10}function nI(n,t){n.Ta.push(t);const e=as(n);e.O_()&&e.Y_&&e.ea(t.mutations)}function Nm(n){return Hs(n)&&!as(n).x_()&&n.Ta.length>0}function Vm(n){as(n).start()}async function sI(n){as(n).ra()}async function iI(n){const t=as(n);for(const e of n.Ta)t.ea(e.mutations)}async function rI(n,t,e){const s=n.Ta.shift(),i=eu.from(s,t,e);await Lm(n,(()=>n.remoteSyncer.applySuccessfulWrite(i))),await Ha(n)}async function oI(n,t){t&&as(n).Y_&&await(async function(s,i){if((function(o){return BE(o)&&o!==V.ABORTED})(i.code)){const r=s.Ta.shift();as(s).B_(),await Lm(s,(()=>s.remoteSyncer.rejectFailedWrite(r.batchId,i))),await Ha(s)}})(n,t),Nm(n)&&Vm(n)}async function Xd(n,t){const e=Z(n);e.asyncQueue.verifyOperationInProgress(),U(Ls,"RemoteStore received new credentials");const s=Hs(e);e.Ea.add(3),await qr(e),s&&e.Va.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.Ea.delete(3),await ja(e)}async function aI(n,t){const e=Z(n);t?(e.Ea.delete(2),await ja(e)):t||(e.Ea.add(2),await qr(e),e.Va.set("Unknown"))}function xi(n){return n.ma||(n.ma=(function(e,s,i){const r=Z(e);return r.sa(),new HT(s,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,i)})(n.datastore,n.asyncQueue,{Zo:QT.bind(null,n),Yo:JT.bind(null,n),t_:ZT.bind(null,n),J_:tI.bind(null,n)}),n.Ra.push((async t=>{t?(n.ma.B_(),hu(n)?uu(n):n.Va.set("Unknown")):(await n.ma.stop(),Om(n))}))),n.ma}function as(n){return n.fa||(n.fa=(function(e,s,i){const r=Z(e);return r.sa(),new qT(s,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,i)})(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),Yo:sI.bind(null,n),t_:oI.bind(null,n),ta:iI.bind(null,n),na:rI.bind(null,n)}),n.Ra.push((async t=>{t?(n.fa.B_(),await Ha(n)):(await n.fa.stop(),n.Ta.length>0&&(U(Ls,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))}))),n.fa}/**
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
 */class du{constructor(t,e,s,i,r){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new Zn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,e,s,i,r){const o=Date.now()+s,a=new du(t,e,o,i,r);return a.start(s),a}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new H(V.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function fu(n,t){if(Pn("AsyncQueue",`${t}: ${n}`),Si(n))return new H(V.UNAVAILABLE,`${t}: ${n}`);throw n}/**
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
 */class li{static emptySet(t){return new li(t.comparator)}constructor(t){this.comparator=t?(e,s)=>t(e,s)||q.comparator(e.key,s.key):(e,s)=>q.comparator(e.key,s.key),this.keyedMap=Qi(),this.sortedSet=new Lt(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,s)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof li)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),s=t.sortedSet.getIterator();for(;e.hasNext();){const i=e.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const s=new li;return s.comparator=this.comparator,s.keyedMap=t,s.sortedSet=e,s}}/**
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
 */class Qd{constructor(){this.ga=new Lt(q.comparator)}track(t){const e=t.doc.key,s=this.ga.get(e);s?t.type!==0&&s.type===3?this.ga=this.ga.insert(e,t):t.type===3&&s.type!==1?this.ga=this.ga.insert(e,{type:s.type,doc:t.doc}):t.type===2&&s.type===2?this.ga=this.ga.insert(e,{type:2,doc:t.doc}):t.type===2&&s.type===0?this.ga=this.ga.insert(e,{type:0,doc:t.doc}):t.type===1&&s.type===0?this.ga=this.ga.remove(e):t.type===1&&s.type===2?this.ga=this.ga.insert(e,{type:1,doc:s.doc}):t.type===0&&s.type===1?this.ga=this.ga.insert(e,{type:2,doc:t.doc}):G(63341,{Vt:t,pa:s}):this.ga=this.ga.insert(e,t)}ya(){const t=[];return this.ga.inorderTraversal(((e,s)=>{t.push(s)})),t}}class yi{constructor(t,e,s,i,r,o,a,l,u){this.query=t,this.docs=e,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(t,e,s,i,r){const o=[];return e.forEach((a=>{o.push({type:0,doc:a})})),new yi(t,e,li.emptySet(e),o,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Va(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,s=t.docChanges;if(e.length!==s.length)return!1;for(let i=0;i<e.length;i++)if(e[i].type!==s[i].type||!e[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
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
 */class lI{constructor(){this.wa=void 0,this.ba=[]}Sa(){return this.ba.some((t=>t.Da()))}}class cI{constructor(){this.queries=Jd(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(e,s){const i=Z(e),r=i.queries;i.queries=Jd(),r.forEach(((o,a)=>{for(const l of a.ba)l.onError(s)}))})(this,new H(V.ABORTED,"Firestore shutting down"))}}function Jd(){return new zs((n=>nm(n)),Va)}async function uI(n,t){const e=Z(n);let s=3;const i=t.query;let r=e.queries.get(i);r?!r.Sa()&&t.Da()&&(s=2):(r=new lI,s=t.Da()?0:1);try{switch(s){case 0:r.wa=await e.onListen(i,!0);break;case 1:r.wa=await e.onListen(i,!1);break;case 2:await e.onFirstRemoteStoreListen(i)}}catch(o){const a=fu(o,`Initialization of query '${Zs(t.query)}' failed`);return void t.onError(a)}e.queries.set(i,r),r.ba.push(t),t.va(e.onlineState),r.wa&&t.Fa(r.wa)&&pu(e)}async function hI(n,t){const e=Z(n),s=t.query;let i=3;const r=e.queries.get(s);if(r){const o=r.ba.indexOf(t);o>=0&&(r.ba.splice(o,1),r.ba.length===0?i=t.Da()?0:1:!r.Sa()&&t.Da()&&(i=2))}switch(i){case 0:return e.queries.delete(s),e.onUnlisten(s,!0);case 1:return e.queries.delete(s),e.onUnlisten(s,!1);case 2:return e.onLastRemoteStoreUnlisten(s);default:return}}function dI(n,t){const e=Z(n);let s=!1;for(const i of t){const r=i.query,o=e.queries.get(r);if(o){for(const a of o.ba)a.Fa(i)&&(s=!0);o.wa=i}}s&&pu(e)}function fI(n,t,e){const s=Z(n),i=s.queries.get(t);if(i)for(const r of i.ba)r.onError(e);s.queries.delete(t)}function pu(n){n.Ca.forEach((t=>{t.next()}))}var gc,Zd;(Zd=gc||(gc={})).Ma="default",Zd.Cache="cache";class pI{constructor(t,e,s){this.query=t,this.xa=e,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(t){if(!this.options.includeMetadataChanges){const s=[];for(const i of t.docChanges)i.type!==3&&s.push(i);t=new yi(t.query,t.docs,t.oldDocs,s,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Oa?this.Ba(t)&&(this.xa.next(t),e=!0):this.La(t,this.onlineState)&&(this.ka(t),e=!0),this.Na=t,e}onError(t){this.xa.error(t)}va(t){this.onlineState=t;let e=!1;return this.Na&&!this.Oa&&this.La(this.Na,t)&&(this.ka(this.Na),e=!0),e}La(t,e){if(!t.fromCache||!this.Da())return!0;const s=e!=="Offline";return(!this.options.Ka||!s)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}Ba(t){if(t.docChanges.length>0)return!0;const e=this.Na&&this.Na.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}ka(t){t=yi.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Oa=!0,this.xa.next(t)}Da(){return this.options.source!==gc.Cache}}/**
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
 */class Fm{constructor(t){this.key=t}}class Um{constructor(t){this.key=t}}class gI{constructor(t,e){this.query=t,this.Za=e,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=ut(),this.mutatedKeys=ut(),this.eu=sm(t),this.tu=new li(this.eu)}get nu(){return this.Za}ru(t,e){const s=e?e.iu:new Qd,i=e?e.tu:this.tu;let r=e?e.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal(((h,d)=>{const p=i.get(h),_=Fa(this.query,d)?d:null,v=!!p&&this.mutatedKeys.has(p.key),E=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let w=!1;p&&_?p.data.isEqual(_.data)?v!==E&&(s.track({type:3,doc:_}),w=!0):this.su(p,_)||(s.track({type:2,doc:_}),w=!0,(l&&this.eu(_,l)>0||u&&this.eu(_,u)<0)&&(a=!0)):!p&&_?(s.track({type:0,doc:_}),w=!0):p&&!_&&(s.track({type:1,doc:p}),w=!0,(l||u)&&(a=!0)),w&&(_?(o=o.add(_),r=E?r.add(h):r.delete(h)):(o=o.delete(h),r=r.delete(h)))})),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),r=r.delete(h.key),s.track({type:1,doc:h})}return{tu:o,iu:s,Ss:a,mutatedKeys:r}}su(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,s,i){const r=this.tu;this.tu=t.tu,this.mutatedKeys=t.mutatedKeys;const o=t.iu.ya();o.sort(((h,d)=>(function(_,v){const E=w=>{switch(w){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return G(20277,{Vt:w})}};return E(_)-E(v)})(h.type,d.type)||this.eu(h.doc,d.doc))),this.ou(s),i=i??!1;const a=e&&!i?this._u():[],l=this.Ya.size===0&&this.current&&!i?1:0,u=l!==this.Xa;return this.Xa=l,o.length!==0||u?{snapshot:new yi(this.query,t.tu,r,o,t.mutatedKeys,l===0,u,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:a}:{au:a}}va(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Qd,mutatedKeys:this.mutatedKeys,Ss:!1},!1)):{au:[]}}uu(t){return!this.Za.has(t)&&!!this.tu.has(t)&&!this.tu.get(t).hasLocalMutations}ou(t){t&&(t.addedDocuments.forEach((e=>this.Za=this.Za.add(e))),t.modifiedDocuments.forEach((e=>{})),t.removedDocuments.forEach((e=>this.Za=this.Za.delete(e))),this.current=t.current)}_u(){if(!this.current)return[];const t=this.Ya;this.Ya=ut(),this.tu.forEach((s=>{this.uu(s.key)&&(this.Ya=this.Ya.add(s.key))}));const e=[];return t.forEach((s=>{this.Ya.has(s)||e.push(new Um(s))})),this.Ya.forEach((s=>{t.has(s)||e.push(new Fm(s))})),e}cu(t){this.Za=t.ks,this.Ya=ut();const e=this.ru(t.documents);return this.applyChanges(e,!0)}lu(){return yi.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const gu="SyncEngine";class mI{constructor(t,e,s){this.query=t,this.targetId=e,this.view=s}}class _I{constructor(t){this.key=t,this.hu=!1}}class yI{constructor(t,e,s,i,r,o){this.localStore=t,this.remoteStore=e,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new zs((a=>nm(a)),Va),this.Iu=new Map,this.Eu=new Set,this.Ru=new Lt(q.comparator),this.Au=new Map,this.Vu=new iu,this.du={},this.mu=new Map,this.fu=_i.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function bI(n,t,e=!0){const s=qm(n);let i;const r=s.Tu.get(t);return r?(s.sharedClientState.addLocalQueryTarget(r.targetId),i=r.view.lu()):i=await Bm(s,t,e,!0),i}async function vI(n,t){const e=qm(n);await Bm(e,t,!0,!1)}async function Bm(n,t,e,s){const i=await NT(n.localStore,nn(t)),r=i.targetId,o=n.sharedClientState.addLocalQueryTarget(r,e);let a;return s&&(a=await wI(n,t,r,o==="current",i.resumeToken)),n.isPrimaryClient&&e&&Dm(n.remoteStore,i),a}async function wI(n,t,e,s,i){n.pu=(d,p,_)=>(async function(E,w,P,R){let k=w.view.ru(P);k.Ss&&(k=await qd(E.localStore,w.query,!1).then((({documents:S})=>w.view.ru(S,k))));const C=R&&R.targetChanges.get(w.targetId),M=R&&R.targetMismatches.get(w.targetId)!=null,L=w.view.applyChanges(k,E.isPrimaryClient,C,M);return ef(E,w.targetId,L.au),L.snapshot})(n,d,p,_);const r=await qd(n.localStore,t,!0),o=new gI(t,r.ks),a=o.ru(r.documents),l=Hr.createSynthesizedTargetChangeForCurrentChange(e,s&&n.onlineState!=="Offline",i),u=o.applyChanges(a,n.isPrimaryClient,l);ef(n,e,u.au);const h=new mI(t,e,o);return n.Tu.set(t,h),n.Iu.has(e)?n.Iu.get(e).push(t):n.Iu.set(e,[t]),u.snapshot}async function EI(n,t,e){const s=Z(n),i=s.Tu.get(t),r=s.Iu.get(i.targetId);if(r.length>1)return s.Iu.set(i.targetId,r.filter((o=>!Va(o,t)))),void s.Tu.delete(t);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(i.targetId),s.sharedClientState.isActiveQueryTarget(i.targetId)||await fc(s.localStore,i.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(i.targetId),e&&lu(s.remoteStore,i.targetId),mc(s,i.targetId)})).catch(Ii)):(mc(s,i.targetId),await fc(s.localStore,i.targetId,!0))}async function TI(n,t){const e=Z(n),s=e.Tu.get(t),i=e.Iu.get(s.targetId);e.isPrimaryClient&&i.length===1&&(e.sharedClientState.removeLocalQueryTarget(s.targetId),lu(e.remoteStore,s.targetId))}async function II(n,t,e){const s=CI(n);try{const i=await(function(o,a){const l=Z(o),u=Ct.now(),h=a.reduce(((_,v)=>_.add(v.key)),ut());let d,p;return l.persistence.runTransaction("Locally write mutations","readwrite",(_=>{let v=kn(),E=ut();return l.xs.getEntries(_,h).next((w=>{v=w,v.forEach(((P,R)=>{R.isValidDocument()||(E=E.add(P))}))})).next((()=>l.localDocuments.getOverlayedDocuments(_,v))).next((w=>{d=w;const P=[];for(const R of a){const k=LE(R,d.get(R.key).overlayedDocument);k!=null&&P.push(new js(R.key,k,Yg(k.value.mapValue),Sn.exists(!0)))}return l.mutationQueue.addMutationBatch(_,u,P,a)})).next((w=>{p=w;const P=w.applyToLocalDocumentSet(d,E);return l.documentOverlayCache.saveOverlays(_,w.batchId,P)}))})).then((()=>({batchId:p.batchId,changes:rm(d)})))})(s.localStore,t);s.sharedClientState.addPendingMutation(i.batchId),(function(o,a,l){let u=o.du[o.currentUser.toKey()];u||(u=new Lt(ct)),u=u.insert(a,l),o.du[o.currentUser.toKey()]=u})(s,i.batchId,e),await Wr(s,i.changes),await Ha(s.remoteStore)}catch(i){const r=fu(i,"Failed to persist write");e.reject(r)}}async function $m(n,t){const e=Z(n);try{const s=await MT(e.localStore,t);t.targetChanges.forEach(((i,r)=>{const o=e.Au.get(r);o&&(vt(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?o.hu=!0:i.modifiedDocuments.size>0?vt(o.hu,14607):i.removedDocuments.size>0&&(vt(o.hu,42227),o.hu=!1))})),await Wr(e,s,t)}catch(s){await Ii(s)}}function tf(n,t,e){const s=Z(n);if(s.isPrimaryClient&&e===0||!s.isPrimaryClient&&e===1){const i=[];s.Tu.forEach(((r,o)=>{const a=o.view.va(t);a.snapshot&&i.push(a.snapshot)})),(function(o,a){const l=Z(o);l.onlineState=a;let u=!1;l.queries.forEach(((h,d)=>{for(const p of d.ba)p.va(a)&&(u=!0)})),u&&pu(l)})(s.eventManager,t),i.length&&s.Pu.J_(i),s.onlineState=t,s.isPrimaryClient&&s.sharedClientState.setOnlineState(t)}}async function SI(n,t,e){const s=Z(n);s.sharedClientState.updateQueryState(t,"rejected",e);const i=s.Au.get(t),r=i&&i.key;if(r){let o=new Lt(q.comparator);o=o.insert(r,de.newNoDocument(r,J.min()));const a=ut().add(r),l=new $a(J.min(),new Map,new Lt(ct),o,a);await $m(s,l),s.Ru=s.Ru.remove(r),s.Au.delete(t),mu(s)}else await fc(s.localStore,t,!1).then((()=>mc(s,t,e))).catch(Ii)}async function xI(n,t){const e=Z(n),s=t.batch.batchId;try{const i=await DT(e.localStore,t);jm(e,s,null),zm(e,s),e.sharedClientState.updateMutationState(s,"acknowledged"),await Wr(e,i)}catch(i){await Ii(i)}}async function AI(n,t,e){const s=Z(n);try{const i=await(function(o,a){const l=Z(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",(u=>{let h;return l.mutationQueue.lookupMutationBatch(u,a).next((d=>(vt(d!==null,37113),h=d.keys(),l.mutationQueue.removeMutationBatch(u,d)))).next((()=>l.mutationQueue.performConsistencyCheck(u))).next((()=>l.documentOverlayCache.removeOverlaysForBatchId(u,h,a))).next((()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,h))).next((()=>l.localDocuments.getDocuments(u,h)))}))})(s.localStore,t);jm(s,t,e),zm(s,t),s.sharedClientState.updateMutationState(t,"rejected",e),await Wr(s,i)}catch(i){await Ii(i)}}function zm(n,t){(n.mu.get(t)||[]).forEach((e=>{e.resolve()})),n.mu.delete(t)}function jm(n,t,e){const s=Z(n);let i=s.du[s.currentUser.toKey()];if(i){const r=i.get(t);r&&(e?r.reject(e):r.resolve(),i=i.remove(t)),s.du[s.currentUser.toKey()]=i}}function mc(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const s of n.Iu.get(t))n.Tu.delete(s),e&&n.Pu.yu(s,e);n.Iu.delete(t),n.isPrimaryClient&&n.Vu.Gr(t).forEach((s=>{n.Vu.containsKey(s)||Hm(n,s)}))}function Hm(n,t){n.Eu.delete(t.path.canonicalString());const e=n.Ru.get(t);e!==null&&(lu(n.remoteStore,e),n.Ru=n.Ru.remove(t),n.Au.delete(e),mu(n))}function ef(n,t,e){for(const s of e)s instanceof Fm?(n.Vu.addReference(s.key,t),PI(n,s)):s instanceof Um?(U(gu,"Document no longer in limbo: "+s.key),n.Vu.removeReference(s.key,t),n.Vu.containsKey(s.key)||Hm(n,s.key)):G(19791,{wu:s})}function PI(n,t){const e=t.key,s=e.path.canonicalString();n.Ru.get(e)||n.Eu.has(s)||(U(gu,"New document in limbo: "+e),n.Eu.add(s),mu(n))}function mu(n){for(;n.Eu.size>0&&n.Ru.size<n.maxConcurrentLimboResolutions;){const t=n.Eu.values().next().value;n.Eu.delete(t);const e=new q(Mt.fromString(t)),s=n.fu.next();n.Au.set(s,new _I(e)),n.Ru=n.Ru.insert(e,s),Dm(n.remoteStore,new jn(nn(Zc(e.path)),s,"TargetPurposeLimboResolution",Ma.ce))}}async function Wr(n,t,e){const s=Z(n),i=[],r=[],o=[];s.Tu.isEmpty()||(s.Tu.forEach(((a,l)=>{o.push(s.pu(l,t,e).then((u=>{var h;if((u||e)&&s.isPrimaryClient){const d=u?!u.fromCache:(h=e==null?void 0:e.targetChanges.get(l.targetId))==null?void 0:h.current;s.sharedClientState.updateQueryState(l.targetId,d?"current":"not-current")}if(u){i.push(u);const d=ou.Es(l.targetId,u);r.push(d)}})))})),await Promise.all(o),s.Pu.J_(i),await(async function(l,u){const h=Z(l);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",(d=>N.forEach(u,(p=>N.forEach(p.Ts,(_=>h.persistence.referenceDelegate.addReference(d,p.targetId,_))).next((()=>N.forEach(p.Is,(_=>h.persistence.referenceDelegate.removeReference(d,p.targetId,_)))))))))}catch(d){if(!Si(d))throw d;U(au,"Failed to update sequence numbers: "+d)}for(const d of u){const p=d.targetId;if(!d.fromCache){const _=h.vs.get(p),v=_.snapshotVersion,E=_.withLastLimboFreeSnapshotVersion(v);h.vs=h.vs.insert(p,E)}}})(s.localStore,r))}async function kI(n,t){const e=Z(n);if(!e.currentUser.isEqual(t)){U(gu,"User change. New user:",t.toKey());const s=await Pm(e.localStore,t);e.currentUser=t,(function(r,o){r.mu.forEach((a=>{a.forEach((l=>{l.reject(new H(V.CANCELLED,o))}))})),r.mu.clear()})(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,s.removedBatchIds,s.addedBatchIds),await Wr(e,s.Ns)}}function RI(n,t){const e=Z(n),s=e.Au.get(t);if(s&&s.hu)return ut().add(s.key);{let i=ut();const r=e.Iu.get(t);if(!r)return i;for(const o of r){const a=e.Tu.get(o);i=i.unionWith(a.view.nu)}return i}}function qm(n){const t=Z(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=$m.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=RI.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=SI.bind(null,t),t.Pu.J_=dI.bind(null,t.eventManager),t.Pu.yu=fI.bind(null,t.eventManager),t}function CI(n){const t=Z(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=xI.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=AI.bind(null,t),t}class pa{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=za(t.databaseInfo.databaseId),this.sharedClientState=this.Du(t),this.persistence=this.Cu(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Fu(t,this.localStore),this.indexBackfillerScheduler=this.Mu(t,this.localStore)}Fu(t,e){return null}Mu(t,e){return null}vu(t){return CT(this.persistence,new PT,t.initialUser,this.serializer)}Cu(t){return new Am(ru.Vi,this.serializer)}Du(t){return new FT}async terminate(){var t,e;(t=this.gcScheduler)==null||t.stop(),(e=this.indexBackfillerScheduler)==null||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}pa.provider={build:()=>new pa};class DI extends pa{constructor(t){super(),this.cacheSizeBytes=t}Fu(t,e){vt(this.persistence.referenceDelegate instanceof da,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new fT(s,t.asyncQueue,e)}Cu(t){const e=this.cacheSizeBytes!==void 0?ve.withCacheSize(this.cacheSizeBytes):ve.DEFAULT;return new Am((s=>da.Vi(s,e)),this.serializer)}}class _c{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>tf(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=kI.bind(null,this.syncEngine),await aI(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return(function(){return new cI})()}createDatastore(t){const e=za(t.databaseInfo.databaseId),s=jT(t.databaseInfo);return GT(t.authCredentials,t.appCheckCredentials,s,e)}createRemoteStore(t){return(function(s,i,r,o,a){return new XT(s,i,r,o,a)})(this.localStore,this.datastore,t.asyncQueue,(e=>tf(this.syncEngine,e,0)),(function(){return Gd.v()?new Gd:new UT})())}createSyncEngine(t,e){return(function(i,r,o,a,l,u,h){const d=new yI(i,r,o,a,l,u);return h&&(d.gu=!0),d})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await(async function(i){const r=Z(i);U(Ls,"RemoteStore shutting down."),r.Ea.add(5),await qr(r),r.Aa.shutdown(),r.Va.set("Unknown")})(this.remoteStore),(t=this.datastore)==null||t.terminate(),(e=this.eventManager)==null||e.terminate()}}_c.provider={build:()=>new _c};/**
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
 *//**
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
 */class MI{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ou(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ou(this.observer.error,t):Pn("Uncaught Error in snapshot listener:",t.toString()))}Nu(){this.muted=!0}Ou(t,e){setTimeout((()=>{this.muted||t(e)}),0)}}/**
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
 */const ls="FirestoreClient";class OI{constructor(t,e,s,i,r){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=s,this._databaseInfo=i,this.user=he.UNAUTHENTICATED,this.clientId=Wc.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=r,this.authCredentials.start(s,(async o=>{U(ls,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(s,(o=>(U(ls,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Zn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const s=fu(e,"Failed to shutdown persistence");t.reject(s)}})),t.promise}}async function Pl(n,t){n.asyncQueue.verifyOperationInProgress(),U(ls,"Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let s=e.initialUser;n.setCredentialChangeListener((async i=>{s.isEqual(i)||(await Pm(t.localStore,i),s=i)})),t.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=t}async function nf(n,t){n.asyncQueue.verifyOperationInProgress();const e=await LI(n);U(ls,"Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener((s=>Xd(t.remoteStore,s))),n.setAppCheckTokenChangeListener(((s,i)=>Xd(t.remoteStore,i))),n._onlineComponents=t}async function LI(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){U(ls,"Using user provided OfflineComponentProvider");try{await Pl(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!(function(i){return i.name==="FirebaseError"?i.code===V.FAILED_PRECONDITION||i.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11})(e))throw e;Os("Error using user provided cache. Falling back to memory cache: "+e),await Pl(n,new pa)}}else U(ls,"Using default OfflineComponentProvider"),await Pl(n,new DI(void 0));return n._offlineComponents}async function Wm(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(U(ls,"Using user provided OnlineComponentProvider"),await nf(n,n._uninitializedComponentsProvider._online)):(U(ls,"Using default OnlineComponentProvider"),await nf(n,new _c))),n._onlineComponents}function NI(n){return Wm(n).then((t=>t.syncEngine))}async function VI(n){const t=await Wm(n),e=t.eventManager;return e.onListen=bI.bind(null,t.syncEngine),e.onUnlisten=EI.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=vI.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=TI.bind(null,t.syncEngine),e}function FI(n,t,e={}){const s=new Zn;return n.asyncQueue.enqueueAndForget((async()=>(function(r,o,a,l,u){const h=new MI({next:p=>{h.Nu(),o.enqueueAndForget((()=>hI(r,d)));const _=p.docs.has(a);!_&&p.fromCache?u.reject(new H(V.UNAVAILABLE,"Failed to get document because the client is offline.")):_&&p.fromCache&&l&&l.source==="server"?u.reject(new H(V.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(p)},error:p=>u.reject(p)}),d=new pI(Zc(a.path),h,{includeMetadataChanges:!0,Ka:!0});return uI(r,d)})(await VI(n),n.asyncQueue,t,e,s))),s.promise}function UI(n,t){const e=new Zn;return n.asyncQueue.enqueueAndForget((async()=>II(await NI(n),t,e))),e.promise}/**
 * @license
 * Copyright 2023 Google LLC
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
 */function Km(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
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
 */const BI="ComponentProvider",sf=new Map;function $I(n,t,e,s,i){return new sE(n,t,e,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,Km(i.experimentalLongPollingOptions),i.useFetchStreams,i.isUsingEmulator,s)}/**
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
 */const Gm="firestore.googleapis.com",rf=!0;class of{constructor(t){if(t.host===void 0){if(t.ssl!==void 0)throw new H(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Gm,this.ssl=rf}else this.host=t.host,this.ssl=t.ssl??rf;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=xm;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<hT)throw new H(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}W0("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Km(t.experimentalLongPollingOptions??{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new H(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new H(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new H(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(function(s,i){return s.timeoutSeconds===i.timeoutSeconds})(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class _u{constructor(t,e,s,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new of({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new H(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new H(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new of(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new L0;switch(s.type){case"firstParty":return new U0(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new H(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(e){const s=sf.get(e);s&&(U(BI,"Removing Datastore"),sf.delete(e),s.terminate())})(this),Promise.resolve()}}function zI(n,t,e,s={}){var u;n=wr(n,_u);const i=us(t),r=n._getSettings(),o={...r,emulatorOptions:n._getEmulatorOptions()},a=`${t}:${e}`;i&&(Rc(`https://${a}`),Cc("Firestore",!0)),r.host!==Gm&&r.host!==a&&Os("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...r,host:a,ssl:i,emulatorOptions:s};if(!Rs(l,o)&&(n._setSettings(l),s.mockUserToken)){let h,d;if(typeof s.mockUserToken=="string")h=s.mockUserToken,d=he.MOCK_USER;else{h=Yp(s.mockUserToken,(u=n._app)==null?void 0:u.options.projectId);const p=s.mockUserToken.sub||s.mockUserToken.user_id;if(!p)throw new H(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");d=new he(p)}n._authCredentials=new N0(new Fg(h,d))}}/**
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
 */class yu{constructor(t,e,s){this.converter=e,this._query=s,this.type="query",this.firestore=t}withConverter(t){return new yu(this.firestore,t,this._query)}}class ne{constructor(t,e,s){this.converter=e,this._key=s,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Pr(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new ne(this.firestore,t,this._key)}toJSON(){return{type:ne._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,e,s){if(zr(e,ne._jsonSchema))return new ne(t,s||null,new q(Mt.fromString(e.referencePath)))}}ne._jsonSchemaVersion="firestore/documentReference/1.0",ne._jsonSchema={type:Wt("string",ne._jsonSchemaVersion),referencePath:Wt("string")};class Pr extends yu{constructor(t,e,s){super(t,e,Zc(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new ne(this.firestore,null,new q(t))}withConverter(t){return new Pr(this.firestore,t,this._path)}}function jI(n,t,...e){if(n=oe(n),arguments.length===1&&(t=Wc.newId()),q0("doc","path",t),n instanceof _u){const s=Mt.fromString(t,...e);return bd(s),new ne(n,null,new q(s))}{if(!(n instanceof ne||n instanceof Pr))throw new H(V.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(Mt.fromString(t,...e));return bd(s),new ne(n.firestore,n instanceof Pr?n.converter:null,new q(s))}}/**
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
 */const af="AsyncQueue";class lf{constructor(t=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Rm(this,"async_queue_retry"),this._c=()=>{const s=Al();s&&U(af,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=t;const e=Al();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.uc(),this.cc(t)}enterRestrictedMode(t){if(!this.ec){this.ec=!0,this.sc=t||!1;const e=Al();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this._c)}}enqueue(t){if(this.uc(),this.ec)return new Promise((()=>{}));const e=new Zn;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Yu.push(t),this.lc())))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(t){if(!Si(t))throw t;U(af,"Operation failed with retryable error: "+t)}this.Yu.length>0&&this.M_.p_((()=>this.lc()))}}cc(t){const e=this.ac.then((()=>(this.rc=!0,t().catch((s=>{throw this.nc=s,this.rc=!1,Pn("INTERNAL UNHANDLED ERROR: ",cf(s)),s})).then((s=>(this.rc=!1,s))))));return this.ac=e,e}enqueueAfterDelay(t,e,s){this.uc(),this.oc.indexOf(t)>-1&&(e=0);const i=du.createAndSchedule(this,t,e,s,(r=>this.hc(r)));return this.tc.push(i),i}uc(){this.nc&&G(47125,{Pc:cf(this.nc)})}verifyOperationInProgress(){}async Tc(){let t;do t=this.ac,await t;while(t!==this.ac)}Ic(t){for(const e of this.tc)if(e.timerId===t)return!0;return!1}Ec(t){return this.Tc().then((()=>{this.tc.sort(((e,s)=>e.targetTimeMs-s.targetTimeMs));for(const e of this.tc)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Tc()}))}Rc(t){this.oc.push(t)}hc(t){const e=this.tc.indexOf(t);this.tc.splice(e,1)}}function cf(n){let t=n.message||"";return n.stack&&(t=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),t}class bu extends _u{constructor(t,e,s,i){super(t,e,s,i),this.type="firestore",this._queue=new lf,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new lf(t),this._firestoreClient=void 0,await t}}}function HI(n,t){const e=typeof n=="object"?n:Oc(),s=typeof n=="string"?n:ra,i=ka(e,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=Wp("firestore");r&&zI(i,...r)}return i}function Ym(n){if(n._terminated)throw new H(V.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||qI(n),n._firestoreClient}function qI(n){var s,i,r,o;const t=n._freezeSettings(),e=$I(n._databaseId,((s=n._app)==null?void 0:s.options.appId)||"",n._persistenceKey,(i=n._app)==null?void 0:i.options.apiKey,t);n._componentsProvider||(r=t.localCache)!=null&&r._offlineComponentProvider&&((o=t.localCache)!=null&&o._onlineComponentProvider)&&(n._componentsProvider={_offline:t.localCache._offlineComponentProvider,_online:t.localCache._onlineComponentProvider}),n._firestoreClient=new OI(n._authCredentials,n._appCheckCredentials,n._queue,e,n._componentsProvider&&(function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}})(n._componentsProvider))}/**
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
 */class Ve{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Ve(ae.fromBase64String(t))}catch(e){throw new H(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Ve(ae.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:Ve._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(zr(t,Ve._jsonSchema))return Ve.fromBase64String(t.bytes)}}Ve._jsonSchemaVersion="firestore/bytes/1.0",Ve._jsonSchema={type:Wt("string",Ve._jsonSchemaVersion),bytes:Wt("string")};/**
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
 */class Xm{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new H(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new re(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class Qm{constructor(t){this._methodName=t}}/**
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
 */class rn{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new H(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new H(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return ct(this._lat,t._lat)||ct(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:rn._jsonSchemaVersion}}static fromJSON(t){if(zr(t,rn._jsonSchema))return new rn(t.latitude,t.longitude)}}rn._jsonSchemaVersion="firestore/geoPoint/1.0",rn._jsonSchema={type:Wt("string",rn._jsonSchemaVersion),latitude:Wt("number"),longitude:Wt("number")};/**
 * @license
 * Copyright 2024 Google LLC
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
 */class We{constructor(t){this._values=(t||[]).map((e=>e))}toArray(){return this._values.map((t=>t))}isEqual(t){return(function(s,i){if(s.length!==i.length)return!1;for(let r=0;r<s.length;++r)if(s[r]!==i[r])return!1;return!0})(this._values,t._values)}toJSON(){return{type:We._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(zr(t,We._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every((e=>typeof e=="number")))return new We(t.vectorValues);throw new H(V.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}We._jsonSchemaVersion="firestore/vectorValue/1.0",We._jsonSchema={type:Wt("string",We._jsonSchemaVersion),vectorValues:Wt("object")};/**
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
 */const WI=/^__.*__$/;class KI{constructor(t,e,s){this.data=t,this.fieldMask=e,this.fieldTransforms=s}toMutation(t,e){return this.fieldMask!==null?new js(t,this.data,this.fieldMask,e,this.fieldTransforms):new jr(t,this.data,e,this.fieldTransforms)}}function Jm(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw G(40011,{dataSource:n})}}class vu{constructor(t,e,s,i,r,o){this.settings=t,this.databaseId=e,this.serializer=s,this.ignoreUndefinedProperties=i,r===void 0&&this.validatePath(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(t){return new vu({...this.settings,...t},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(t){var i;const e=(i=this.path)==null?void 0:i.child(t),s=this.contextWith({path:e,arrayElement:!1});return s.validatePathSegment(t),s}childContextForFieldPath(t){var i;const e=(i=this.path)==null?void 0:i.child(t),s=this.contextWith({path:e,arrayElement:!1});return s.validatePath(),s}childContextForArray(t){return this.contextWith({path:void 0,arrayElement:!0})}createError(t){return ga(t,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(t){return this.fieldMask.find((e=>t.isPrefixOf(e)))!==void 0||this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))!==void 0}validatePath(){if(this.path)for(let t=0;t<this.path.length;t++)this.validatePathSegment(this.path.get(t))}validatePathSegment(t){if(t.length===0)throw this.createError("Document fields must not be empty");if(Jm(this.dataSource)&&WI.test(t))throw this.createError('Document fields cannot begin and end with "__"')}}class GI{constructor(t,e,s){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=s||za(t)}createContext(t,e,s,i=!1){return new vu({dataSource:t,methodName:e,targetDoc:s,path:re.emptyPath(),arrayElement:!1,hasConverter:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function YI(n){const t=n._freezeSettings(),e=za(n._databaseId);return new GI(n._databaseId,!!t.ignoreUndefinedProperties,e)}function XI(n,t,e,s,i,r={}){const o=n.createContext(r.merge||r.mergeFields?2:0,t,e,i);n_("Data must be an object, but it was:",o,s);const a=t_(s,o);let l,u;if(r.merge)l=new ze(o.fieldMask),u=o.fieldTransforms;else if(r.mergeFields){const h=[];for(const d of r.mergeFields){const p=wu(t,d,e);if(!o.contains(p))throw new H(V.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);ZI(h,p)||h.push(p)}l=new ze(h),u=o.fieldTransforms.filter((d=>l.covers(d.field)))}else l=null,u=o.fieldTransforms;return new KI(new Ne(a),l,u)}function Zm(n,t){if(e_(n=oe(n)))return n_("Unsupported field value:",t,n),t_(n,t);if(n instanceof Qm)return(function(s,i){if(!Jm(i.dataSource))throw i.createError(`${s._methodName}() can only be used with update() and set()`);if(!i.path)throw i.createError(`${s._methodName}() is not currently supported inside arrays`);const r=s._toFieldTransform(i);r&&i.fieldTransforms.push(r)})(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.arrayElement&&t.dataSource!==4)throw t.createError("Nested arrays are not supported");return(function(s,i){const r=[];let o=0;for(const a of s){let l=Zm(a,i.childContextForArray(o));l==null&&(l={nullValue:"NULL_VALUE"}),r.push(l),o++}return{arrayValue:{values:r}}})(n,t)}return(function(s,i){if((s=oe(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return kE(i.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const r=Ct.fromDate(s);return{timestampValue:ha(i.serializer,r)}}if(s instanceof Ct){const r=new Ct(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:ha(i.serializer,r)}}if(s instanceof rn)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Ve)return{bytesValue:ym(i.serializer,s._byteString)};if(s instanceof ne){const r=i.databaseId,o=s.firestore._databaseId;if(!o.isEqual(r))throw i.createError(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:su(s.firestore._databaseId||i.databaseId,s._key.path)}}if(s instanceof We)return(function(o,a){const l=o instanceof We?o.toArray():o;return{mapValue:{fields:{[Kg]:{stringValue:Gg},[oa]:{arrayValue:{values:l.map((h=>{if(typeof h!="number")throw a.createError("VectorValues must only contain numeric values.");return tu(a.serializer,h)}))}}}}}})(s,i);if(Sm(s))return s._toProto(i.serializer);throw i.createError(`Unsupported field value: ${Kc(s)}`)})(n,t)}function t_(n,t){const e={};return $g(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):$s(n,((s,i)=>{const r=Zm(i,t.childContextForField(s));r!=null&&(e[s]=r)})),{mapValue:{fields:e}}}function e_(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Ct||n instanceof rn||n instanceof Ve||n instanceof ne||n instanceof Qm||n instanceof We||Sm(n))}function n_(n,t,e){if(!e_(e)||!Ug(e)){const s=Kc(e);throw s==="an object"?t.createError(n+" a custom object"):t.createError(n+" "+s)}}function wu(n,t,e){if((t=oe(t))instanceof Xm)return t._internalPath;if(typeof t=="string")return JI(n,t);throw ga("Field path arguments must be of type string or ",n,!1,void 0,e)}const QI=new RegExp("[~\\*/\\[\\]]");function JI(n,t,e){if(t.search(QI)>=0)throw ga(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new Xm(...t.split("."))._internalPath}catch{throw ga(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function ga(n,t,e,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${t}() called with invalid data`;e&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(r||o)&&(l+=" (found",r&&(l+=` in field ${s}`),o&&(l+=` in document ${i}`),l+=")"),new H(V.INVALID_ARGUMENT,a+n+l)}function ZI(n,t){return n.some((e=>e.isEqual(t)))}/**
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
 */class tS{convertValue(t,e="none"){switch(os(t)){case 0:return null;case 1:return t.booleanValue;case 2:return zt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(rs(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw G(62114,{value:t})}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const s={};return $s(t,((i,r)=>{s[i]=this.convertValue(r,e)})),s}convertVectorValue(t){var s,i,r;const e=(r=(i=(s=t.fields)==null?void 0:s[oa].arrayValue)==null?void 0:i.values)==null?void 0:r.map((o=>zt(o.doubleValue)));return new We(e)}convertGeoPoint(t){return new rn(zt(t.latitude),zt(t.longitude))}convertArray(t,e){return(t.values||[]).map((s=>this.convertValue(s,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const s=La(t);return s==null?null:this.convertValue(s,e);case"estimate":return this.convertTimestamp(Tr(t));default:return null}}convertTimestamp(t){const e=is(t);return new Ct(e.seconds,e.nanos)}convertDocumentKey(t,e){const s=Mt.fromString(t);vt(Im(s),9688,{name:t});const i=new Ir(s.get(1),s.get(3)),r=new q(s.popFirst(5));return i.isEqual(e)||Pn(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),r}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class eS extends tS{constructor(t){super(),this.firestore=t}convertBytes(t){return new Ve(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new ne(this.firestore,null,e)}}const uf="@firebase/firestore",hf="4.11.0";/**
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
 */class s_{constructor(t,e,s,i,r){this._firestore=t,this._userDataWriter=e,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new ne(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new nS(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var t;return((t=this._document)==null?void 0:t.data.clone().value.mapValue.fields)??void 0}get(t){if(this._document){const e=this._document.data.field(wu("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class nS extends s_{data(){return super.data()}}function sS(n,t,e){let s;return s=n?e&&(e.merge||e.mergeFields)?n.toFirestore(t,e):n.toFirestore(t):t,s}class Zi{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class xs extends s_{constructor(t,e,s,i,r,o){super(t,e,s,i,o),this._firestore=t,this._firestoreImpl=t,this.metadata=r}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Bo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const s=this._document.data.field(wu("DocumentSnapshot.get",t));if(s!==null)return this._userDataWriter.convertValue(s,e.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new H(V.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,e={};return e.type=xs._jsonSchemaVersion,e.bundle="",e.bundleSource="DocumentSnapshot",e.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?e:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),e.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),e)}}xs._jsonSchemaVersion="firestore/documentSnapshot/1.0",xs._jsonSchema={type:Wt("string",xs._jsonSchemaVersion),bundleSource:Wt("string","DocumentSnapshot"),bundleName:Wt("string"),bundle:Wt("string")};class Bo extends xs{data(t={}){return super.data(t)}}class hr{constructor(t,e,s,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new Zi(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach((s=>{t.call(e,new Bo(this._firestore,this._userDataWriter,s.key,s,new Zi(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new H(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=(function(i,r){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map((a=>{const l=new Bo(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Zi(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}}))}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter((a=>r||a.type!==3)).map((a=>{const l=new Bo(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Zi(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,h=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:iS(a.type),doc:l,oldIndex:u,newIndex:h}}))}})(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new H(V.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=hr._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=Wc.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const e=[],s=[],i=[];return this.docs.forEach((r=>{r._document!==null&&(e.push(r._document),s.push(this._userDataWriter.convertObjectMap(r._document.data.value.mapValue.fields,"previous")),i.push(r.ref.path))})),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function iS(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return G(61501,{type:n})}}/**
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
 */hr._jsonSchemaVersion="firestore/querySnapshot/1.0",hr._jsonSchema={type:Wt("string",hr._jsonSchemaVersion),bundleSource:Wt("string","QuerySnapshot"),bundleName:Wt("string"),bundle:Wt("string")};/**
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
 */function rS(n){n=wr(n,ne);const t=wr(n.firestore,bu),e=Ym(t);return FI(e,n._key).then((s=>lS(t,n,s)))}function oS(n,t,e){n=wr(n,ne);const s=wr(n.firestore,bu),i=sS(n.converter,t,e),r=YI(s);return aS(s,[XI(r,"setDoc",n._key,i,n.converter!==null,e).toMutation(n._key,Sn.none())])}function aS(n,t){const e=Ym(n);return UI(e,t)}function lS(n,t,e){const s=e.docs.get(t._key),i=new eS(n);return new xs(n,i,t._key,s,new Zi(e.hasPendingWrites,e.fromCache),t.converter)}(function(t,e=!0){O0(Bs),Cs(new ns("firestore",((s,{instanceIdentifier:i,options:r})=>{const o=s.getProvider("app").getImmediate(),a=new bu(new V0(s.getProvider("auth-internal")),new B0(o,s.getProvider("app-check-internal")),iE(o,i),o);return r={useFetchStreams:e,...r},a._setSettings(r),a}),"PUBLIC").setMultipleInstances(!0)),tn(uf,hf,t),tn(uf,hf,"esm2020")})();/**
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
 */const i_="firebasestorage.googleapis.com",r_="storageBucket",cS=120*1e3,uS=600*1e3;/**
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
 */class Bt extends dn{constructor(t,e,s=0){super(kl(t),`Firebase Storage: ${e} (${kl(t)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Bt.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return kl(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ut;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ut||(Ut={}));function kl(n){return"storage/"+n}function Eu(){const n="An unknown error occurred, please check the error payload for server response.";return new Bt(Ut.UNKNOWN,n)}function hS(n){return new Bt(Ut.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function dS(n){return new Bt(Ut.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function fS(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Bt(Ut.UNAUTHENTICATED,n)}function pS(){return new Bt(Ut.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function gS(n){return new Bt(Ut.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function mS(){return new Bt(Ut.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function _S(){return new Bt(Ut.CANCELED,"User canceled the upload/download.")}function yS(n){return new Bt(Ut.INVALID_URL,"Invalid URL '"+n+"'.")}function bS(n){return new Bt(Ut.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function vS(){return new Bt(Ut.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+r_+"' property when initializing the app?")}function wS(){return new Bt(Ut.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function ES(){return new Bt(Ut.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function TS(n){return new Bt(Ut.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function yc(n){return new Bt(Ut.INVALID_ARGUMENT,n)}function o_(){return new Bt(Ut.APP_DELETED,"The Firebase app was deleted.")}function IS(n){return new Bt(Ut.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function dr(n,t){return new Bt(Ut.INVALID_FORMAT,"String does not match format '"+n+"': "+t)}function Hi(n){throw new Bt(Ut.INTERNAL_ERROR,"Internal error: "+n)}/**
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
 */class Re{constructor(t,e){this.bucket=t,this.path_=e}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,e){let s;try{s=Re.makeFromUrl(t,e)}catch{return new Re(t,"")}if(s.path==="")return s;throw bS(t)}static makeFromUrl(t,e){let s=null;const i="([A-Za-z0-9.\\-_]+)";function r(C){C.path.charAt(C.path.length-1)==="/"&&(C.path_=C.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function u(C){C.path_=decodeURIComponent(C.path)}const h="v[A-Za-z0-9_]+",d=e.replace(/[.]/g,"\\."),p="(/([^?#]*).*)?$",_=new RegExp(`^https?://${d}/${h}/b/${i}/o${p}`,"i"),v={bucket:1,path:3},E=e===i_?"(?:storage.googleapis.com|storage.cloud.google.com)":e,w="([^?#]*)",P=new RegExp(`^https?://${E}/${i}/${w}`,"i"),k=[{regex:a,indices:l,postModify:r},{regex:_,indices:v,postModify:u},{regex:P,indices:{bucket:1,path:2},postModify:u}];for(let C=0;C<k.length;C++){const M=k[C],L=M.regex.exec(t);if(L){const S=L[M.indices.bucket];let g=L[M.indices.path];g||(g=""),s=new Re(S,g),M.postModify(s);break}}if(s==null)throw yS(t);return s}}class SS{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
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
 */function xS(n,t,e){let s=1,i=null,r=null,o=!1,a=0;function l(){return a===2}let u=!1;function h(...w){u||(u=!0,t.apply(null,w))}function d(w){i=setTimeout(()=>{i=null,n(_,l())},w)}function p(){r&&clearTimeout(r)}function _(w,...P){if(u){p();return}if(w){p(),h.call(null,w,...P);return}if(l()||o){p(),h.call(null,w,...P);return}s<64&&(s*=2);let k;a===1?(a=2,k=0):k=(s+Math.random())*1e3,d(k)}let v=!1;function E(w){v||(v=!0,p(),!u&&(i!==null?(w||(a=2),clearTimeout(i),d(0)):w||(a=1)))}return d(0),r=setTimeout(()=>{o=!0,E(!0)},e),E}function AS(n){n(!1)}/**
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
 */function PS(n){return n!==void 0}function kS(n){return typeof n=="object"&&!Array.isArray(n)}function Tu(n){return typeof n=="string"||n instanceof String}function df(n){return Iu()&&n instanceof Blob}function Iu(){return typeof Blob<"u"}function ff(n,t,e,s){if(s<t)throw yc(`Invalid value for '${n}'. Expected ${t} or greater.`);if(s>e)throw yc(`Invalid value for '${n}'. Expected ${e} or less.`)}/**
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
 */function qa(n,t,e){let s=t;return e==null&&(s=`https://${t}`),`${e}://${s}/v0${n}`}function a_(n){const t=encodeURIComponent;let e="?";for(const s in n)if(n.hasOwnProperty(s)){const i=t(s)+"="+t(n[s]);e=e+i+"&"}return e=e.slice(0,-1),e}var As;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(As||(As={}));/**
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
 */function RS(n,t){const e=n>=500&&n<600,i=[408,429].indexOf(n)!==-1,r=t.indexOf(n)!==-1;return e||i||r}/**
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
 */class CS{constructor(t,e,s,i,r,o,a,l,u,h,d,p=!0,_=!1){this.url_=t,this.method_=e,this.headers_=s,this.body_=i,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=h,this.connectionFactory_=d,this.retry=p,this.isUsingEmulator=_,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((v,E)=>{this.resolve_=v,this.reject_=E,this.start_()})}start_(){const t=(s,i)=>{if(i){s(!1,new po(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const a=r.getErrorCode()===As.NO_ERROR,l=r.getStatus();if(!a||RS(l,this.additionalRetryCodes_)&&this.retry){const h=r.getErrorCode()===As.ABORT;s(!1,new po(!1,null,h));return}const u=this.successCodes_.indexOf(l)!==-1;s(!0,new po(u,r))})},e=(s,i)=>{const r=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());PS(l)?r(l):r()}catch(l){o(l)}else if(a!==null){const l=Eu();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?o_():_S();o(l)}else{const l=mS();o(l)}};this.canceled_?e(!1,new po(!1,null,!0)):this.backoffId_=xS(t,e,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&AS(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class po{constructor(t,e,s){this.wasSuccessCode=t,this.connection=e,this.canceled=!!s}}function DS(n,t){t!==null&&t.length>0&&(n.Authorization="Firebase "+t)}function MS(n,t){n["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function OS(n,t){t&&(n["X-Firebase-GMPID"]=t)}function LS(n,t){t!==null&&(n["X-Firebase-AppCheck"]=t)}function NS(n,t,e,s,i,r,o=!0,a=!1){const l=a_(n.urlParams),u=n.url+l,h=Object.assign({},n.headers);return OS(h,t),DS(h,e),MS(h,r),LS(h,s),new CS(u,n.method,h,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,i,o,a)}/**
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
 */function VS(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function FS(...n){const t=VS();if(t!==void 0){const e=new t;for(let s=0;s<n.length;s++)e.append(n[s]);return e.getBlob()}else{if(Iu())return new Blob(n);throw new Bt(Ut.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function US(n,t,e){return n.webkitSlice?n.webkitSlice(t,e):n.mozSlice?n.mozSlice(t,e):n.slice?n.slice(t,e):null}/**
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
 */function BS(n){if(typeof atob>"u")throw TS("base-64");return atob(n)}/**
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
 */const je={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Rl{constructor(t,e){this.data=t,this.contentType=e||null}}function l_(n,t){switch(n){case je.RAW:return new Rl(c_(t));case je.BASE64:case je.BASE64URL:return new Rl(u_(n,t));case je.DATA_URL:return new Rl(zS(t),jS(t))}throw Eu()}function c_(n){const t=[];for(let e=0;e<n.length;e++){let s=n.charCodeAt(e);if(s<=127)t.push(s);else if(s<=2047)t.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(e<n.length-1&&(n.charCodeAt(e+1)&64512)===56320))t.push(239,191,189);else{const r=s,o=n.charCodeAt(++e);s=65536|(r&1023)<<10|o&1023,t.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?t.push(239,191,189):t.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(t)}function $S(n){let t;try{t=decodeURIComponent(n)}catch{throw dr(je.DATA_URL,"Malformed data URL.")}return c_(t)}function u_(n,t){switch(n){case je.BASE64:{const i=t.indexOf("-")!==-1,r=t.indexOf("_")!==-1;if(i||r)throw dr(n,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case je.BASE64URL:{const i=t.indexOf("+")!==-1,r=t.indexOf("/")!==-1;if(i||r)throw dr(n,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let e;try{e=BS(t)}catch(i){throw i.message.includes("polyfill")?i:dr(n,"Invalid character found")}const s=new Uint8Array(e.length);for(let i=0;i<e.length;i++)s[i]=e.charCodeAt(i);return s}class h_{constructor(t){this.base64=!1,this.contentType=null;const e=t.match(/^data:([^,]+)?,/);if(e===null)throw dr(je.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=e[1]||null;s!=null&&(this.base64=HS(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=t.substring(t.indexOf(",")+1)}}function zS(n){const t=new h_(n);return t.base64?u_(je.BASE64,t.rest):$S(t.rest)}function jS(n){return new h_(n).contentType}function HS(n,t){return n.length>=t.length?n.substring(n.length-t.length)===t:!1}/**
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
 */class zn{constructor(t,e){let s=0,i="";df(t)?(this.data_=t,s=t.size,i=t.type):t instanceof ArrayBuffer?(e?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),s=this.data_.length):t instanceof Uint8Array&&(e?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),s=t.length),this.size_=s,this.type_=i}size(){return this.size_}type(){return this.type_}slice(t,e){if(df(this.data_)){const s=this.data_,i=US(s,t,e);return i===null?null:new zn(i)}else{const s=new Uint8Array(this.data_.buffer,t,e-t);return new zn(s,!0)}}static getBlob(...t){if(Iu()){const e=t.map(s=>s instanceof zn?s.data_:s);return new zn(FS.apply(null,e))}else{const e=t.map(o=>Tu(o)?l_(je.RAW,o).data:o.data_);let s=0;e.forEach(o=>{s+=o.byteLength});const i=new Uint8Array(s);let r=0;return e.forEach(o=>{for(let a=0;a<o.length;a++)i[r++]=o[a]}),new zn(i,!0)}}uploadData(){return this.data_}}/**
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
 */function d_(n){let t;try{t=JSON.parse(n)}catch{return null}return kS(t)?t:null}/**
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
 */function qS(n){if(n.length===0)return null;const t=n.lastIndexOf("/");return t===-1?"":n.slice(0,t)}function WS(n,t){const e=t.split("/").filter(s=>s.length>0).join("/");return n.length===0?e:n+"/"+e}function f_(n){const t=n.lastIndexOf("/",n.length-2);return t===-1?n:n.slice(t+1)}/**
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
 */function KS(n,t){return t}class _e{constructor(t,e,s,i){this.server=t,this.local=e||t,this.writable=!!s,this.xform=i||KS}}let go=null;function GS(n){return!Tu(n)||n.length<2?n:f_(n)}function p_(){if(go)return go;const n=[];n.push(new _e("bucket")),n.push(new _e("generation")),n.push(new _e("metageneration")),n.push(new _e("name","fullPath",!0));function t(r,o){return GS(o)}const e=new _e("name");e.xform=t,n.push(e);function s(r,o){return o!==void 0?Number(o):o}const i=new _e("size");return i.xform=s,n.push(i),n.push(new _e("timeCreated")),n.push(new _e("updated")),n.push(new _e("md5Hash",null,!0)),n.push(new _e("cacheControl",null,!0)),n.push(new _e("contentDisposition",null,!0)),n.push(new _e("contentEncoding",null,!0)),n.push(new _e("contentLanguage",null,!0)),n.push(new _e("contentType",null,!0)),n.push(new _e("metadata","customMetadata",!0)),go=n,go}function YS(n,t){function e(){const s=n.bucket,i=n.fullPath,r=new Re(s,i);return t._makeStorageReference(r)}Object.defineProperty(n,"ref",{get:e})}function XS(n,t,e){const s={};s.type="file";const i=e.length;for(let r=0;r<i;r++){const o=e[r];s[o.local]=o.xform(s,t[o.server])}return YS(s,n),s}function g_(n,t,e){const s=d_(t);return s===null?null:XS(n,s,e)}function QS(n,t,e,s){const i=d_(t);if(i===null||!Tu(i.downloadTokens))return null;const r=i.downloadTokens;if(r.length===0)return null;const o=encodeURIComponent;return r.split(",").map(u=>{const h=n.bucket,d=n.fullPath,p="/b/"+o(h)+"/o/"+o(d),_=qa(p,e,s),v=a_({alt:"media",token:u});return _+v})[0]}function JS(n,t){const e={},s=t.length;for(let i=0;i<s;i++){const r=t[i];r.writable&&(e[r.server]=n[r.local])}return JSON.stringify(e)}class Su{constructor(t,e,s,i){this.url=t,this.method=e,this.handler=s,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function m_(n){if(!n)throw Eu()}function ZS(n,t){function e(s,i){const r=g_(n,i,t);return m_(r!==null),r}return e}function tx(n,t){function e(s,i){const r=g_(n,i,t);return m_(r!==null),QS(r,i,n.host,n._protocol)}return e}function __(n){function t(e,s){let i;return e.getStatus()===401?e.getErrorText().includes("Firebase App Check token is invalid")?i=pS():i=fS():e.getStatus()===402?i=dS(n.bucket):e.getStatus()===403?i=gS(n.path):i=s,i.status=e.getStatus(),i.serverResponse=s.serverResponse,i}return t}function y_(n){const t=__(n);function e(s,i){let r=t(s,i);return s.getStatus()===404&&(r=hS(n.path)),r.serverResponse=i.serverResponse,r}return e}function ex(n,t,e){const s=t.fullServerUrl(),i=qa(s,n.host,n._protocol),r="GET",o=n.maxOperationRetryTime,a=new Su(i,r,tx(n,e),o);return a.errorHandler=y_(t),a}function nx(n,t){const e=t.fullServerUrl(),s=qa(e,n.host,n._protocol),i="DELETE",r=n.maxOperationRetryTime;function o(l,u){}const a=new Su(s,i,o,r);return a.successCodes=[200,204],a.errorHandler=y_(t),a}function sx(n,t){return n&&n.contentType||t&&t.type()||"application/octet-stream"}function ix(n,t,e){const s=Object.assign({},e);return s.fullPath=n.path,s.size=t.size(),s.contentType||(s.contentType=sx(null,t)),s}function rx(n,t,e,s,i){const r=t.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let k="";for(let C=0;C<2;C++)k=k+Math.random().toString().slice(2);return k}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const u=ix(t,s,i),h=JS(u,e),d="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+h+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,p=`\r
--`+l+"--",_=zn.getBlob(d,s,p);if(_===null)throw wS();const v={name:u.fullPath},E=qa(r,n.host,n._protocol),w="POST",P=n.maxUploadRetryTime,R=new Su(E,w,ZS(n,e),P);return R.urlParams=v,R.headers=o,R.body=_.uploadData(),R.errorHandler=__(t),R}class ox{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=As.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=As.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=As.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,e,s,i,r){if(this.sent_)throw Hi("cannot .send() more than once");if(us(t)&&s&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(e,t,!0),r!==void 0)for(const o in r)r.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,r[o].toString());return i!==void 0?this.xhr_.send(i):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Hi("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Hi("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Hi("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Hi("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",t)}}class ax extends ox{initXhr(){this.xhr_.responseType="text"}}function xu(){return new ax}/**
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
 */class Ns{constructor(t,e){this._service=t,e instanceof Re?this._location=e:this._location=Re.makeFromUrl(e,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,e){return new Ns(t,e)}get root(){const t=new Re(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return f_(this._location.path)}get storage(){return this._service}get parent(){const t=qS(this._location.path);if(t===null)return null;const e=new Re(this._location.bucket,t);return new Ns(this._service,e)}_throwIfRoot(t){if(this._location.path==="")throw IS(t)}}function lx(n,t,e){n._throwIfRoot("uploadBytes");const s=rx(n.storage,n._location,p_(),new zn(t,!0),e);return n.storage.makeRequestWithTokens(s,xu).then(i=>({metadata:i,ref:n}))}function cx(n,t,e=je.RAW,s){n._throwIfRoot("uploadString");const i=l_(e,t),r={...s};return r.contentType==null&&i.contentType!=null&&(r.contentType=i.contentType),lx(n,i.data,r)}function ux(n){n._throwIfRoot("getDownloadURL");const t=ex(n.storage,n._location,p_());return n.storage.makeRequestWithTokens(t,xu).then(e=>{if(e===null)throw ES();return e})}function hx(n){n._throwIfRoot("deleteObject");const t=nx(n.storage,n._location);return n.storage.makeRequestWithTokens(t,xu)}function dx(n,t){const e=WS(n._location.path,t),s=new Re(n._location.bucket,e);return new Ns(n.storage,s)}/**
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
 */function fx(n){return/^[A-Za-z]+:\/\//.test(n)}function px(n,t){return new Ns(n,t)}function b_(n,t){if(n instanceof Au){const e=n;if(e._bucket==null)throw vS();const s=new Ns(e,e._bucket);return t!=null?b_(s,t):s}else return t!==void 0?dx(n,t):n}function gx(n,t){if(t&&fx(t)){if(n instanceof Au)return px(n,t);throw yc("To use ref(service, url), the first argument must be a Storage instance.")}else return b_(n,t)}function pf(n,t){const e=t==null?void 0:t[r_];return e==null?null:Re.makeFromBucketSpec(e,n)}function mx(n,t,e,s={}){n.host=`${t}:${e}`;const i=us(t);i&&(Rc(`https://${n.host}/b`),Cc("Storage",!0)),n._isUsingEmulator=!0,n._protocol=i?"https":"http";const{mockUserToken:r}=s;r&&(n._overrideAuthToken=typeof r=="string"?r:Yp(r,n.app.options.projectId))}class Au{constructor(t,e,s,i,r,o=!1){this.app=t,this._authProvider=e,this._appCheckProvider=s,this._url=i,this._firebaseVersion=r,this._isUsingEmulator=o,this._bucket=null,this._host=i_,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=cS,this._maxUploadRetryTime=uS,this._requests=new Set,i!=null?this._bucket=Re.makeFromBucketSpec(i,this._host):this._bucket=pf(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=Re.makeFromBucketSpec(this._url,t):this._bucket=pf(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){ff("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){ff("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();if(e!==null)return e.accessToken}return null}async _getAppCheckToken(){if(Le(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new Ns(this,t)}_makeRequest(t,e,s,i,r=!0){if(this._deleted)return new SS(o_());{const o=NS(t,this._appId,s,i,e,this._firebaseVersion,r,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(t,e){const[s,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,e,s,i).getPromise()}}const gf="@firebase/storage",mf="0.14.0";/**
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
 */const v_="storage";function _x(n,t,e,s){return n=oe(n),cx(n,t,e,s)}function w_(n){return n=oe(n),ux(n)}function yx(n){return n=oe(n),hx(n)}function Pu(n,t){return n=oe(n),gx(n,t)}function bx(n=Oc(),t){n=oe(n);const s=ka(n,v_).getImmediate({identifier:t}),i=Wp("storage");return i&&vx(s,...i),s}function vx(n,t,e,s={}){mx(n,t,e,s)}function wx(n,{instanceIdentifier:t}){const e=n.getProvider("app").getImmediate(),s=n.getProvider("auth-internal"),i=n.getProvider("app-check-internal");return new Au(e,s,i,t,Bs)}function Ex(){Cs(new ns(v_,wx,"PUBLIC").setMultipleInstances(!0)),tn(gf,mf,""),tn(gf,mf,"esm2020")}Ex();const Tx={apiKey:"AIzaSyAJMG0ma7PWBytkea1Vj2cwmdSJm42GFkE",authDomain:"cryptojournal-b7438.firebaseapp.com",projectId:"cryptojournal-b7438",storageBucket:"cryptojournal-b7438.firebasestorage.app",messagingSenderId:"413410672987",appId:"1:413410672987:web:b60d93c2d083aab6469a7e"},ku=Jp(Tx),Ru=D0(ku),Ix=HI(ku),Cu=bx(ku),Sx=new vn;function xx(){return $w(Ru,Sx)}function Ax(){return ww(Ru)}function Px(n){return vw(Ru,n)}function E_(n){return jI(Ix,"users",n)}async function kx(n,t){await oS(E_(n),t,{merge:!0})}async function Rx(n){const t=await rS(E_(n));return t.exists()?t.data():null}async function Cx(n,t,e){const s=Pu(Cu,`users/${n}/images/${t}`);return await _x(s,e,"data_url"),await w_(s)}async function Dx(n,t){try{const e=Pu(Cu,`users/${n}/images/${t}`);return await w_(e)}catch{return null}}async function Mx(n,t){try{const e=Pu(Cu,`users/${n}/images/${t}`);await yx(e)}catch{}}const T_="cj_trades",I_="cj_strategies",S_="cj_tags",Ox="CryptoJournalDB",Lx=1,un="images";let Ce=null;function _f(n){Ce=n}function Nx(){return Ce}function Wa(n){localStorage.setItem(T_,JSON.stringify(n))}function Ka(){try{const n=localStorage.getItem(T_);return n?JSON.parse(n):[]}catch{return[]}}function fr(n){localStorage.setItem(I_,JSON.stringify(n))}function Hn(){try{const n=localStorage.getItem(I_);return n?JSON.parse(n):["Breakout","Mean Reversion","Trend Following","Scalp","News/Event","Range Trading","Momentum","DCA"]}catch{return["Breakout","Mean Reversion","Trend Following","Scalp"]}}function ma(n){localStorage.setItem(S_,JSON.stringify(n))}function ci(){try{const n=localStorage.getItem(S_);return n?JSON.parse(n):["Plan followed","FOMO","Overtrading","Revenge trade","Good execution","Stop moved","Profit taken too early"]}catch{return[]}}async function Du(){if(!Ce)return;const n=Ka(),t=Hn(),e=ci();console.log(`[SYNC] Uploading to cloud: ${n.length} trades, ${t.length} strategies, ${e.length} tags`),await kx(Ce,{trades:n,strategies:t,tags:e,lastSync:new Date().toISOString()}),console.log("[SYNC] Upload complete")}async function Vx(){if(!Ce)return console.log("[SYNC] No user, skipping download"),!1;console.log("[SYNC] Downloading from cloud for uid:",Ce);const n=await Rx(Ce);return n?(console.log(`[SYNC] Cloud data found: ${(n.trades||[]).length} trades, lastSync: ${n.lastSync}`),n.trades&&Wa(n.trades),n.strategies&&fr(n.strategies),n.tags&&ma(n.tags),!0):(console.log("[SYNC] No cloud data found"),!1)}let mo=null;function Ga(){return new Promise((n,t)=>{if(mo)return n(mo);const e=indexedDB.open(Ox,Lx);e.onerror=()=>t(e.error),e.onsuccess=()=>{mo=e.result,n(mo)},e.onupgradeneeded=s=>{const i=s.target.result;i.objectStoreNames.contains(un)||i.createObjectStore(un,{keyPath:"id"})}})}async function Mu(n,t){const e=await Ga();if(await new Promise((s,i)=>{const r=e.transaction(un,"readwrite");r.objectStore(un).put({id:n,dataUrl:t}),r.oncomplete=()=>s(),r.onerror=()=>i(r.error)}),Ce)try{await Cx(Ce,n,t),console.log(`[IMG] Uploaded to cloud: ${n}`)}catch(s){console.warn(`[IMG] Cloud upload failed for ${n}:`,s.message)}}async function x_(n){const t=await Ga(),e=await new Promise((s,i)=>{const o=t.transaction(un,"readonly").objectStore(un).get(n);o.onsuccess=()=>{var a;return s(((a=o.result)==null?void 0:a.dataUrl)||null)},o.onerror=()=>i(o.error)});if(e)return e;if(Ce)try{const s=await Dx(Ce,n);if(s)return console.log(`[IMG] Loaded from cloud: ${n}`),s}catch(s){console.warn(`[IMG] Cloud load failed for ${n}:`,s.message)}return null}async function Fx(n){const t=await Ga();if(await new Promise((e,s)=>{const i=t.transaction(un,"readwrite");i.objectStore(un).delete(n),i.oncomplete=()=>e(),i.onerror=()=>s(i.error)}),Ce)try{await Mx(Ce,n),console.log(`[IMG] Deleted from cloud: ${n}`)}catch(e){console.warn(`[IMG] Cloud delete failed for ${n}:`,e.message)}}async function Ux(){const n=await Ga();return new Promise((t,e)=>{const i=n.transaction(un,"readonly").objectStore(un).getAll();i.onsuccess=()=>t(i.result||[]),i.onerror=()=>e(i.error)})}async function Bx(){const n=Ka(),t=Hn(),e=ci(),s=await Ux();return{trades:n,strategies:t,tags:e,images:s,exportDate:new Date().toISOString()}}async function $x(n){if(n.trades&&Wa(n.trades),n.strategies&&fr(n.strategies),n.tags&&ma(n.tags),n.images)for(const t of n.images)await Mu(t.id,t.dataUrl);await Du()}function zx(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var $o={exports:{}};/* @license
Papa Parse
v5.5.3
https://github.com/mholt/PapaParse
License: MIT
*/var jx=$o.exports,yf;function Hx(){return yf||(yf=1,(function(n,t){((e,s)=>{n.exports=s()})(jx,function e(){var s=typeof self<"u"?self:typeof window<"u"?window:s!==void 0?s:{},i,r=!s.document&&!!s.postMessage,o=s.IS_PAPA_WORKER||!1,a={},l=0,u={};function h(g){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},(function(y){var b=M(y);b.chunkSize=parseInt(b.chunkSize),y.step||y.chunk||(b.chunkSize=null),this._handle=new E(b),(this._handle.streamer=this)._config=b}).call(this,g),this.parseChunk=function(y,b){var T=parseInt(this._config.skipFirstNLines)||0;if(this.isFirstChunk&&0<T){let x=this._config.newline;x||(A=this._config.quoteChar||'"',x=this._handle.guessLineEndings(y,A)),y=[...y.split(x).slice(T)].join(x)}this.isFirstChunk&&S(this._config.beforeFirstChunk)&&(A=this._config.beforeFirstChunk(y))!==void 0&&(y=A),this.isFirstChunk=!1,this._halted=!1;var T=this._partialLine+y,A=(this._partialLine="",this._handle.parse(T,this._baseIndex,!this._finished));if(!this._handle.paused()&&!this._handle.aborted()){if(y=A.meta.cursor,T=(this._finished||(this._partialLine=T.substring(y-this._baseIndex),this._baseIndex=y),A&&A.data&&(this._rowCount+=A.data.length),this._finished||this._config.preview&&this._rowCount>=this._config.preview),o)s.postMessage({results:A,workerId:u.WORKER_ID,finished:T});else if(S(this._config.chunk)&&!b){if(this._config.chunk(A,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);this._completeResults=A=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(A.data),this._completeResults.errors=this._completeResults.errors.concat(A.errors),this._completeResults.meta=A.meta),this._completed||!T||!S(this._config.complete)||A&&A.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),T||A&&A.meta.paused||this._nextChunk(),A}this._halted=!0},this._sendError=function(y){S(this._config.error)?this._config.error(y):o&&this._config.error&&s.postMessage({workerId:u.WORKER_ID,error:y,finished:!1})}}function d(g){var y;(g=g||{}).chunkSize||(g.chunkSize=u.RemoteChunkSize),h.call(this,g),this._nextChunk=r?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(b){this._input=b,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(y=new XMLHttpRequest,this._config.withCredentials&&(y.withCredentials=this._config.withCredentials),r||(y.onload=L(this._chunkLoaded,this),y.onerror=L(this._chunkError,this)),y.open(this._config.downloadRequestBody?"POST":"GET",this._input,!r),this._config.downloadRequestHeaders){var b,T=this._config.downloadRequestHeaders;for(b in T)y.setRequestHeader(b,T[b])}var A;this._config.chunkSize&&(A=this._start+this._config.chunkSize-1,y.setRequestHeader("Range","bytes="+this._start+"-"+A));try{y.send(this._config.downloadRequestBody)}catch(x){this._chunkError(x.message)}r&&y.status===0&&this._chunkError()}},this._chunkLoaded=function(){y.readyState===4&&(y.status<200||400<=y.status?this._chunkError():(this._start+=this._config.chunkSize||y.responseText.length,this._finished=!this._config.chunkSize||this._start>=(b=>(b=b.getResponseHeader("Content-Range"))!==null?parseInt(b.substring(b.lastIndexOf("/")+1)):-1)(y),this.parseChunk(y.responseText)))},this._chunkError=function(b){b=y.statusText||b,this._sendError(new Error(b))}}function p(g){(g=g||{}).chunkSize||(g.chunkSize=u.LocalChunkSize),h.call(this,g);var y,b,T=typeof FileReader<"u";this.stream=function(A){this._input=A,b=A.slice||A.webkitSlice||A.mozSlice,T?((y=new FileReader).onload=L(this._chunkLoaded,this),y.onerror=L(this._chunkError,this)):y=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var A=this._input,x=(this._config.chunkSize&&(x=Math.min(this._start+this._config.chunkSize,this._input.size),A=b.call(A,this._start,x)),y.readAsText(A,this._config.encoding));T||this._chunkLoaded({target:{result:x}})},this._chunkLoaded=function(A){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(A.target.result)},this._chunkError=function(){this._sendError(y.error)}}function _(g){var y;h.call(this,g=g||{}),this.stream=function(b){return y=b,this._nextChunk()},this._nextChunk=function(){var b,T;if(!this._finished)return b=this._config.chunkSize,y=b?(T=y.substring(0,b),y.substring(b)):(T=y,""),this._finished=!y,this.parseChunk(T)}}function v(g){h.call(this,g=g||{});var y=[],b=!0,T=!1;this.pause=function(){h.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){h.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(A){this._input=A,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){T&&y.length===1&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),y.length?this.parseChunk(y.shift()):b=!0},this._streamData=L(function(A){try{y.push(typeof A=="string"?A:A.toString(this._config.encoding)),b&&(b=!1,this._checkIsFinished(),this.parseChunk(y.shift()))}catch(x){this._streamError(x)}},this),this._streamError=L(function(A){this._streamCleanUp(),this._sendError(A)},this),this._streamEnd=L(function(){this._streamCleanUp(),T=!0,this._streamData("")},this),this._streamCleanUp=L(function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)},this)}function E(g){var y,b,T,A,x=Math.pow(2,53),W=-x,K=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,it=/^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,j=this,rt=0,B=0,Pt=!1,Y=!1,Q=[],z={data:[],errors:[],meta:{}};function mt(ot){return g.skipEmptyLines==="greedy"?ot.join("").trim()==="":ot.length===1&&ot[0].length===0}function yt(){if(z&&T&&(le("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+u.DefaultDelimiter+"'"),T=!1),g.skipEmptyLines&&(z.data=z.data.filter(function(Tt){return!mt(Tt)})),wt()){let Tt=function(Nt,It){S(g.transformHeader)&&(Nt=g.transformHeader(Nt,It)),Q.push(Nt)};var at=Tt;if(z)if(Array.isArray(z.data[0])){for(var ot=0;wt()&&ot<z.data.length;ot++)z.data[ot].forEach(Tt);z.data.splice(0,1)}else z.data.forEach(Tt)}function ft(Tt,Nt){for(var It=g.header?{}:[],bt=0;bt<Tt.length;bt++){var tt=bt,Ht=Tt[bt],Ht=((gt,et)=>(dt=>(g.dynamicTypingFunction&&g.dynamicTyping[dt]===void 0&&(g.dynamicTyping[dt]=g.dynamicTypingFunction(dt)),(g.dynamicTyping[dt]||g.dynamicTyping)===!0))(gt)?et==="true"||et==="TRUE"||et!=="false"&&et!=="FALSE"&&((dt=>{if(K.test(dt)&&(dt=parseFloat(dt),W<dt&&dt<x))return 1})(et)?parseFloat(et):it.test(et)?new Date(et):et===""?null:et):et)(tt=g.header?bt>=Q.length?"__parsed_extra":Q[bt]:tt,Ht=g.transform?g.transform(Ht,tt):Ht);tt==="__parsed_extra"?(It[tt]=It[tt]||[],It[tt].push(Ht)):It[tt]=Ht}return g.header&&(bt>Q.length?le("FieldMismatch","TooManyFields","Too many fields: expected "+Q.length+" fields but parsed "+bt,B+Nt):bt<Q.length&&le("FieldMismatch","TooFewFields","Too few fields: expected "+Q.length+" fields but parsed "+bt,B+Nt)),It}var Dt;z&&(g.header||g.dynamicTyping||g.transform)&&(Dt=1,!z.data.length||Array.isArray(z.data[0])?(z.data=z.data.map(ft),Dt=z.data.length):z.data=ft(z.data,0),g.header&&z.meta&&(z.meta.fields=Q),B+=Dt)}function wt(){return g.header&&Q.length===0}function le(ot,ft,Dt,at){ot={type:ot,code:ft,message:Dt},at!==void 0&&(ot.row=at),z.errors.push(ot)}S(g.step)&&(A=g.step,g.step=function(ot){z=ot,wt()?yt():(yt(),z.data.length!==0&&(rt+=ot.data.length,g.preview&&rt>g.preview?b.abort():(z.data=z.data[0],A(z,j))))}),this.parse=function(ot,ft,Dt){var at=g.quoteChar||'"',at=(g.newline||(g.newline=this.guessLineEndings(ot,at)),T=!1,g.delimiter?S(g.delimiter)&&(g.delimiter=g.delimiter(ot),z.meta.delimiter=g.delimiter):((at=((Tt,Nt,It,bt,tt)=>{var Ht,gt,et,dt;tt=tt||[",","	","|",";",u.RECORD_SEP,u.UNIT_SEP];for(var Ue=0;Ue<tt.length;Ue++){for(var De,Cn=tt[Ue],Zt=0,ce=0,$t=0,se=(et=void 0,new P({comments:bt,delimiter:Cn,newline:Nt,preview:10}).parse(Tt)),Ie=0;Ie<se.data.length;Ie++)It&&mt(se.data[Ie])?$t++:(De=se.data[Ie].length,ce+=De,et===void 0?et=De:0<De&&(Zt+=Math.abs(De-et),et=De));0<se.data.length&&(ce/=se.data.length-$t),(gt===void 0||Zt<=gt)&&(dt===void 0||dt<ce)&&1.99<ce&&(gt=Zt,Ht=Cn,dt=ce)}return{successful:!!(g.delimiter=Ht),bestDelimiter:Ht}})(ot,g.newline,g.skipEmptyLines,g.comments,g.delimitersToGuess)).successful?g.delimiter=at.bestDelimiter:(T=!0,g.delimiter=u.DefaultDelimiter),z.meta.delimiter=g.delimiter),M(g));return g.preview&&g.header&&at.preview++,y=ot,b=new P(at),z=b.parse(y,ft,Dt),yt(),Pt?{meta:{paused:!0}}:z||{meta:{paused:!1}}},this.paused=function(){return Pt},this.pause=function(){Pt=!0,b.abort(),y=S(g.chunk)?"":y.substring(b.getCharIndex())},this.resume=function(){j.streamer._halted?(Pt=!1,j.streamer.parseChunk(y,!0)):setTimeout(j.resume,3)},this.aborted=function(){return Y},this.abort=function(){Y=!0,b.abort(),z.meta.aborted=!0,S(g.complete)&&g.complete(z),y=""},this.guessLineEndings=function(Tt,at){Tt=Tt.substring(0,1048576);var at=new RegExp(w(at)+"([^]*?)"+w(at),"gm"),Dt=(Tt=Tt.replace(at,"")).split("\r"),at=Tt.split(`
`),Tt=1<at.length&&at[0].length<Dt[0].length;if(Dt.length===1||Tt)return`
`;for(var Nt=0,It=0;It<Dt.length;It++)Dt[It][0]===`
`&&Nt++;return Nt>=Dt.length/2?`\r
`:"\r"}}function w(g){return g.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function P(g){var y=(g=g||{}).delimiter,b=g.newline,T=g.comments,A=g.step,x=g.preview,W=g.fastMode,K=null,it=!1,j=g.quoteChar==null?'"':g.quoteChar,rt=j;if(g.escapeChar!==void 0&&(rt=g.escapeChar),(typeof y!="string"||-1<u.BAD_DELIMITERS.indexOf(y))&&(y=","),T===y)throw new Error("Comment character same as delimiter");T===!0?T="#":(typeof T!="string"||-1<u.BAD_DELIMITERS.indexOf(T))&&(T=!1),b!==`
`&&b!=="\r"&&b!==`\r
`&&(b=`
`);var B=0,Pt=!1;this.parse=function(Y,Q,z){if(typeof Y!="string")throw new Error("Input must be a string");var mt=Y.length,yt=y.length,wt=b.length,le=T.length,ot=S(A),ft=[],Dt=[],at=[],Tt=B=0;if(!Y)return Zt();if(W||W!==!1&&Y.indexOf(j)===-1){for(var Nt=Y.split(b),It=0;It<Nt.length;It++){if(at=Nt[It],B+=at.length,It!==Nt.length-1)B+=b.length;else if(z)return Zt();if(!T||at.substring(0,le)!==T){if(ot){if(ft=[],dt(at.split(y)),ce(),Pt)return Zt()}else dt(at.split(y));if(x&&x<=It)return ft=ft.slice(0,x),Zt(!0)}}return Zt()}for(var bt=Y.indexOf(y,B),tt=Y.indexOf(b,B),Ht=new RegExp(w(rt)+w(j),"g"),gt=Y.indexOf(j,B);;)if(Y[B]===j)for(gt=B,B++;;){if((gt=Y.indexOf(j,gt+1))===-1)return z||Dt.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:ft.length,index:B}),De();if(gt===mt-1)return De(Y.substring(B,gt).replace(Ht,j));if(j===rt&&Y[gt+1]===rt)gt++;else if(j===rt||gt===0||Y[gt-1]!==rt){bt!==-1&&bt<gt+1&&(bt=Y.indexOf(y,gt+1));var et=Ue((tt=tt!==-1&&tt<gt+1?Y.indexOf(b,gt+1):tt)===-1?bt:Math.min(bt,tt));if(Y.substr(gt+1+et,yt)===y){at.push(Y.substring(B,gt).replace(Ht,j)),Y[B=gt+1+et+yt]!==j&&(gt=Y.indexOf(j,B)),bt=Y.indexOf(y,B),tt=Y.indexOf(b,B);break}if(et=Ue(tt),Y.substring(gt+1+et,gt+1+et+wt)===b){if(at.push(Y.substring(B,gt).replace(Ht,j)),Cn(gt+1+et+wt),bt=Y.indexOf(y,B),gt=Y.indexOf(j,B),ot&&(ce(),Pt))return Zt();if(x&&ft.length>=x)return Zt(!0);break}Dt.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:ft.length,index:B}),gt++}}else if(T&&at.length===0&&Y.substring(B,B+le)===T){if(tt===-1)return Zt();B=tt+wt,tt=Y.indexOf(b,B),bt=Y.indexOf(y,B)}else if(bt!==-1&&(bt<tt||tt===-1))at.push(Y.substring(B,bt)),B=bt+yt,bt=Y.indexOf(y,B);else{if(tt===-1)break;if(at.push(Y.substring(B,tt)),Cn(tt+wt),ot&&(ce(),Pt))return Zt();if(x&&ft.length>=x)return Zt(!0)}return De();function dt($t){ft.push($t),Tt=B}function Ue($t){var se=0;return se=$t!==-1&&($t=Y.substring(gt+1,$t))&&$t.trim()===""?$t.length:se}function De($t){return z||($t===void 0&&($t=Y.substring(B)),at.push($t),B=mt,dt(at),ot&&ce()),Zt()}function Cn($t){B=$t,dt(at),at=[],tt=Y.indexOf(b,B)}function Zt($t){if(g.header&&!Q&&ft.length&&!it){var se=ft[0],Ie=Object.create(null),Pi=new Set(se);let Yr=!1;for(let fn=0;fn<se.length;fn++){let Se=se[fn];if(Ie[Se=S(g.transformHeader)?g.transformHeader(Se,fn):Se]){let Be,Ws=Ie[Se];for(;Be=Se+"_"+Ws,Ws++,Pi.has(Be););Pi.add(Be),se[fn]=Be,Ie[Se]++,Yr=!0,(K=K===null?{}:K)[Be]=Se}else Ie[Se]=1,se[fn]=Se;Pi.add(Se)}Yr&&console.warn("Duplicate headers found and renamed."),it=!0}return{data:ft,errors:Dt,meta:{delimiter:y,linebreak:b,aborted:Pt,truncated:!!$t,cursor:Tt+(Q||0),renamedHeaders:K}}}function ce(){A(Zt()),ft=[],Dt=[]}},this.abort=function(){Pt=!0},this.getCharIndex=function(){return B}}function R(g){var y=g.data,b=a[y.workerId],T=!1;if(y.error)b.userError(y.error,y.file);else if(y.results&&y.results.data){var A={abort:function(){T=!0,k(y.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:C,resume:C};if(S(b.userStep)){for(var x=0;x<y.results.data.length&&(b.userStep({data:y.results.data[x],errors:y.results.errors,meta:y.results.meta},A),!T);x++);delete y.results}else S(b.userChunk)&&(b.userChunk(y.results,A,y.file),delete y.results)}y.finished&&!T&&k(y.workerId,y.results)}function k(g,y){var b=a[g];S(b.userComplete)&&b.userComplete(y),b.terminate(),delete a[g]}function C(){throw new Error("Not implemented.")}function M(g){if(typeof g!="object"||g===null)return g;var y,b=Array.isArray(g)?[]:{};for(y in g)b[y]=M(g[y]);return b}function L(g,y){return function(){g.apply(y,arguments)}}function S(g){return typeof g=="function"}return u.parse=function(g,y){var b=(y=y||{}).dynamicTyping||!1;if(S(b)&&(y.dynamicTypingFunction=b,b={}),y.dynamicTyping=b,y.transform=!!S(y.transform)&&y.transform,!y.worker||!u.WORKERS_SUPPORTED)return b=null,u.NODE_STREAM_INPUT,typeof g=="string"?(g=(T=>T.charCodeAt(0)!==65279?T:T.slice(1))(g),b=new(y.download?d:_)(y)):g.readable===!0&&S(g.read)&&S(g.on)?b=new v(y):(s.File&&g instanceof File||g instanceof Object)&&(b=new p(y)),b.stream(g);(b=(()=>{var T;return!!u.WORKERS_SUPPORTED&&(T=(()=>{var A=s.URL||s.webkitURL||null,x=e.toString();return u.BLOB_URL||(u.BLOB_URL=A.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ","(",x,")();"],{type:"text/javascript"})))})(),(T=new s.Worker(T)).onmessage=R,T.id=l++,a[T.id]=T)})()).userStep=y.step,b.userChunk=y.chunk,b.userComplete=y.complete,b.userError=y.error,y.step=S(y.step),y.chunk=S(y.chunk),y.complete=S(y.complete),y.error=S(y.error),delete y.worker,b.postMessage({input:g,config:y,workerId:b.id})},u.unparse=function(g,y){var b=!1,T=!0,A=",",x=`\r
`,W='"',K=W+W,it=!1,j=null,rt=!1,B=((()=>{if(typeof y=="object"){if(typeof y.delimiter!="string"||u.BAD_DELIMITERS.filter(function(Q){return y.delimiter.indexOf(Q)!==-1}).length||(A=y.delimiter),typeof y.quotes!="boolean"&&typeof y.quotes!="function"&&!Array.isArray(y.quotes)||(b=y.quotes),typeof y.skipEmptyLines!="boolean"&&typeof y.skipEmptyLines!="string"||(it=y.skipEmptyLines),typeof y.newline=="string"&&(x=y.newline),typeof y.quoteChar=="string"&&(W=y.quoteChar),typeof y.header=="boolean"&&(T=y.header),Array.isArray(y.columns)){if(y.columns.length===0)throw new Error("Option columns is empty");j=y.columns}y.escapeChar!==void 0&&(K=y.escapeChar+W),y.escapeFormulae instanceof RegExp?rt=y.escapeFormulae:typeof y.escapeFormulae=="boolean"&&y.escapeFormulae&&(rt=/^[=+\-@\t\r].*$/)}})(),new RegExp(w(W),"g"));if(typeof g=="string"&&(g=JSON.parse(g)),Array.isArray(g)){if(!g.length||Array.isArray(g[0]))return Pt(null,g,it);if(typeof g[0]=="object")return Pt(j||Object.keys(g[0]),g,it)}else if(typeof g=="object")return typeof g.data=="string"&&(g.data=JSON.parse(g.data)),Array.isArray(g.data)&&(g.fields||(g.fields=g.meta&&g.meta.fields||j),g.fields||(g.fields=Array.isArray(g.data[0])?g.fields:typeof g.data[0]=="object"?Object.keys(g.data[0]):[]),Array.isArray(g.data[0])||typeof g.data[0]=="object"||(g.data=[g.data])),Pt(g.fields||[],g.data||[],it);throw new Error("Unable to serialize unrecognized input");function Pt(Q,z,mt){var yt="",wt=(typeof Q=="string"&&(Q=JSON.parse(Q)),typeof z=="string"&&(z=JSON.parse(z)),Array.isArray(Q)&&0<Q.length),le=!Array.isArray(z[0]);if(wt&&T){for(var ot=0;ot<Q.length;ot++)0<ot&&(yt+=A),yt+=Y(Q[ot],ot);0<z.length&&(yt+=x)}for(var ft=0;ft<z.length;ft++){var Dt=(wt?Q:z[ft]).length,at=!1,Tt=wt?Object.keys(z[ft]).length===0:z[ft].length===0;if(mt&&!wt&&(at=mt==="greedy"?z[ft].join("").trim()==="":z[ft].length===1&&z[ft][0].length===0),mt==="greedy"&&wt){for(var Nt=[],It=0;It<Dt;It++){var bt=le?Q[It]:It;Nt.push(z[ft][bt])}at=Nt.join("").trim()===""}if(!at){for(var tt=0;tt<Dt;tt++){0<tt&&!Tt&&(yt+=A);var Ht=wt&&le?Q[tt]:tt;yt+=Y(z[ft][Ht],tt)}ft<z.length-1&&(!mt||0<Dt&&!Tt)&&(yt+=x)}}return yt}function Y(Q,z){var mt,yt;return Q==null?"":Q.constructor===Date?JSON.stringify(Q).slice(1,25):(yt=!1,rt&&typeof Q=="string"&&rt.test(Q)&&(Q="'"+Q,yt=!0),mt=Q.toString().replace(B,K),(yt=yt||b===!0||typeof b=="function"&&b(Q,z)||Array.isArray(b)&&b[z]||((wt,le)=>{for(var ot=0;ot<le.length;ot++)if(-1<wt.indexOf(le[ot]))return!0;return!1})(mt,u.BAD_DELIMITERS)||-1<mt.indexOf(A)||mt.charAt(0)===" "||mt.charAt(mt.length-1)===" ")?W+mt+W:mt)}},u.RECORD_SEP="",u.UNIT_SEP="",u.BYTE_ORDER_MARK="\uFEFF",u.BAD_DELIMITERS=["\r",`
`,'"',u.BYTE_ORDER_MARK],u.WORKERS_SUPPORTED=!r&&!!s.Worker,u.NODE_STREAM_INPUT=1,u.LocalChunkSize=10485760,u.RemoteChunkSize=5242880,u.DefaultDelimiter=",",u.Parser=P,u.ParserHandle=E,u.NetworkStreamer=d,u.FileStreamer=p,u.StringStreamer=_,u.ReadableStreamStreamer=v,s.jQuery&&((i=s.jQuery).fn.parse=function(g){var y=g.config||{},b=[];return this.each(function(x){if(!(i(this).prop("tagName").toUpperCase()==="INPUT"&&i(this).attr("type").toLowerCase()==="file"&&s.FileReader)||!this.files||this.files.length===0)return!0;for(var W=0;W<this.files.length;W++)b.push({file:this.files[W],inputElem:this,instanceConfig:i.extend({},y)})}),T(),this;function T(){if(b.length===0)S(g.complete)&&g.complete();else{var x,W,K,it,j=b[0];if(S(g.before)){var rt=g.before(j.file,j.inputElem);if(typeof rt=="object"){if(rt.action==="abort")return x="AbortError",W=j.file,K=j.inputElem,it=rt.reason,void(S(g.error)&&g.error({name:x},W,K,it));if(rt.action==="skip")return void A();typeof rt.config=="object"&&(j.instanceConfig=i.extend(j.instanceConfig,rt.config))}else if(rt==="skip")return void A()}var B=j.instanceConfig.complete;j.instanceConfig.complete=function(Pt){S(B)&&B(Pt,j.file,j.inputElem),A()},u.parse(j.file,j.instanceConfig)}}function A(){b.splice(0,1),T()}}),o&&(s.onmessage=function(g){g=g.data,u.WORKER_ID===void 0&&g&&(u.WORKER_ID=g.workerId),typeof g.input=="string"?s.postMessage({workerId:u.WORKER_ID,results:u.parse(g.input,g.config),finished:!0}):(s.File&&g.input instanceof File||g.input instanceof Object)&&(g=u.parse(g.input,g.config))&&s.postMessage({workerId:u.WORKER_ID,results:g,finished:!0})}),(d.prototype=Object.create(h.prototype)).constructor=d,(p.prototype=Object.create(h.prototype)).constructor=p,(_.prototype=Object.create(_.prototype)).constructor=_,(v.prototype=Object.create(h.prototype)).constructor=v,u})})($o)),$o.exports}var qx=Hx();const Wx=zx(qx);function Kx(n){return new Promise((t,e)=>{Wx.parse(n,{header:!0,skipEmptyLines:!0,dynamicTyping:!1,complete(s){s.errors.length>0&&console.warn("CSV parse warnings:",s.errors);try{const i=s.data.filter(o=>o.time&&o.coin).map(o=>Gx(o)),r=Yx(i);t(r)}catch(i){e(i)}},error(s){e(s)}})})}function Gx(n){const t=(n.dir||"").trim(),e=/long/i.test(t),s=/short/i.test(t),i=/open/i.test(t),r=/close/i.test(t);return{time:Jx(n.time),coin:(n.coin||"").trim().toUpperCase(),direction:e?"Long":s?"Short":t,action:i?"Open":r?"Close":"Unknown",dirRaw:t,price:be(n.px),size:be(n.sz),notional:be(n.ntl),fee:be(n.fee),closedPnl:be(n.closedPnl)}}function Yx(n){n.sort((s,i)=>s.time.localeCompare(i.time));const t={},e=[];for(const s of n){const i=`${s.coin}_${s.direction}`;if(s.action==="Open")t[i]||(t[i]=[]),t[i].push(s);else if(s.action==="Close")if(t[i]&&t[i].length>0){const r=t[i].shift();e.push(Xx(r,s))}else e.push(Cl(s,!0));else e.push(Cl(s,s.closedPnl!==0))}for(const s of Object.values(t))for(const i of s)e.push(Cl(i,!1));return e.sort((s,i)=>i.time.localeCompare(s.time)),e}function Xx(n,t){return{id:A_(n.time,n.coin,n.direction,n.price),time:n.time,exitTime:t.time,coin:n.coin,direction:n.direction,entryPrice:n.price,exitPrice:t.price,size:n.size,notional:n.notional,fee:n.fee+t.fee,closedPnl:t.closedPnl,status:"Completed",risk:0,strategy:"",notes:"",tags:[],images:[],mae:null,mfe:null,source:"csv"}}function Cl(n,t){return{id:A_(n.time,n.coin,n.direction,n.price),time:n.time,exitTime:t?n.time:null,coin:n.coin,direction:n.direction,entryPrice:t?0:n.price,exitPrice:t?n.price:null,size:n.size,notional:n.notional,fee:n.fee,closedPnl:n.closedPnl,status:t?"Completed":"Active",risk:0,strategy:"",notes:"",tags:[],images:[],mae:null,mfe:null,source:"csv"}}function Qx(n){const t=be(n.entryPrice),e=n.exitPrice!=null&&n.exitPrice!==""&&be(n.exitPrice)!==0?be(n.exitPrice):null,s=be(n.size),i=be(n.fee),r=n.direction||"Long";let o=0;return e&&t&&s&&(o=r==="Long"?(e-t)*s-i:(t-e)*s-i),be(n.closedPnl)&&(o=be(n.closedPnl)),{id:"manual_"+Date.now()+"_"+Math.random().toString(36).slice(2,8),time:n.time||new Date().toISOString(),exitTime:e?n.exitTime||n.time||new Date().toISOString():null,coin:(n.coin||"").toUpperCase(),direction:r,entryPrice:t,exitPrice:e,size:s,notional:t*s,fee:i,closedPnl:o,status:e?"Completed":"Active",risk:n.risk||0,strategy:n.strategy||"",notes:n.notes||"",tags:n.tags||[],images:n.images||[],mae:n.mae!=null?be(n.mae):null,mfe:n.mfe!=null?be(n.mfe):null,source:"manual"}}function A_(n,t,e,s){const i=`${n}_${t}_${e}_${s}`;let r=0;for(let o=0;o<i.length;o++){const a=i.charCodeAt(o);r=(r<<5)-r+a,r=r&r}return"hl_"+Math.abs(r).toString(36)}function Jx(n){if(!n)return new Date().toISOString();const t=new Date(n.trim());return isNaN(t.getTime())?new Date().toISOString():t.toISOString()}function be(n){if(n==null||n==="")return 0;const t=parseFloat(String(n).replace(/,/g,""));return isNaN(t)?0:t}function Zx(n,t){const e=new Set(n.map(i=>i.id)),s=t.filter(i=>!e.has(i.id));return[...n,...s]}function tA(n){return n.map(t=>(t.entryPrice===void 0&&t.price!==void 0&&(t={...t,entryPrice:t.action==="Open"?t.price:0,exitPrice:t.action==="Close"?t.price:null,exitTime:t.action==="Close"?t.time:null,status:t.action==="Close"||t.closedPnl!==0?"Completed":"Active"}),t.legs&&t.legs.length>0&&(t.legs.filter(e=>e.type==="entry"),t.legs.filter(e=>e.type==="exit"),t={...t},delete t.legs,delete t.remainingSize,delete t._tradeId),t.status===void 0&&(t.status=t.exitPrice?"Completed":"Active"),t.notional===void 0&&(t.notional=(t.entryPrice||0)*(t.size||0)),t))}function P_(n){const t=n.filter(k=>k.closedPnl!==0||k.action==="Close"),e=t.filter(k=>k.closedPnl>0),s=t.filter(k=>k.closedPnl<0),i=t.reduce((k,C)=>k+C.closedPnl,0),r=n.reduce((k,C)=>k+Math.abs(C.fee),0),o=i,a=e.length?e.reduce((k,C)=>k+C.closedPnl,0)/e.length:0,l=s.length?Math.abs(s.reduce((k,C)=>k+C.closedPnl,0)/s.length):0,u=e.reduce((k,C)=>k+C.closedPnl,0),h=Math.abs(s.reduce((k,C)=>k+C.closedPnl,0)),d=h>0?u/h:u>0?1/0:0,p=t.length?Math.max(...t.map(k=>k.closedPnl)):0,_=t.length?Math.min(...t.map(k=>k.closedPnl)):0,v=t.length?e.length/t.length*100:0,E=t.filter(k=>k.mae!=null&&k.mae!==0),w=t.filter(k=>k.mfe!=null&&k.mfe!==0),P=E.length?E.reduce((k,C)=>k+C.mae,0)/E.length:null,R=w.length?w.reduce((k,C)=>k+C.mfe,0)/w.length:null;return{totalTrades:n.length,closingTrades:t.length,wins:e.length,losses:s.length,totalPnl:i,totalFees:r,netPnl:o,winRate:v,avgWin:a,avgLoss:l,profitFactor:d,bestTrade:p,worstTrade:_,avgMae:P,avgMfe:R}}function Ou(n,t){const e={};n.forEach(i=>{const r=t(i);r&&(e[r]||(e[r]=[]),e[r].push(i))});const s={};for(const[i,r]of Object.entries(e))s[i]=P_(r);return s}function eA(n){return Ou(n,t=>t.coin)}function nA(n){return Ou(n,t=>t.strategy||null)}function sA(n){return Ou(n,t=>t.risk>0?`Risk ${t.risk}`:null)}function Lu(n){const t=n.filter(s=>s.closedPnl!==0||s.action==="Close"),e={};return t.forEach(s=>{const i=s.time.slice(0,10);e[i]||(e[i]={date:i,pnl:0,trades:0,fees:0}),e[i].pnl+=s.closedPnl,e[i].trades+=1,e[i].fees+=Math.abs(s.fee)}),Object.values(e).sort((s,i)=>s.date.localeCompare(i.date))}function iA(n){const t=Lu(n);let e=0;return t.map(s=>(e+=s.pnl,{date:s.date,equity:e}))}function rA(n){const t=n.filter(s=>s.closedPnl!==0||s.action==="Close"),e={};return t.forEach(s=>{e[s.coin]||(e[s.coin]=0),e[s.coin]+=s.closedPnl}),Object.entries(e).map(([s,i])=>({coin:s,pnl:i})).sort((s,i)=>i.pnl-s.pnl)}function oA(n){const t=n.filter(s=>s.strategy&&(s.closedPnl!==0||s.action==="Close")),e={};return t.forEach(s=>{e[s.strategy]||(e[s.strategy]=0),e[s.strategy]+=s.closedPnl}),Object.entries(e).map(([s,i])=>({strategy:s,pnl:i})).sort((s,i)=>i.pnl-s.pnl)}function aA(n){return n.filter(t=>t.mae!=null&&t.mfe!=null&&(t.mae!==0||t.mfe!==0)).map(t=>({mae:t.mae,mfe:t.mfe,pnl:t.closedPnl,coin:t.coin,isWin:t.closedPnl>0}))}function lA(n){const t=Lu(n),e={};return t.forEach(s=>{e[s.date]=s}),e}function Gt(n){return n==null?"-":(n>0?"+":n<0?"-":"")+"$"+Math.abs(n).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})}function si(n){return n==null?"-":n.toFixed(1)+"%"}function cA(n){if(!n)return"-";const t=new Date(n);return t.toLocaleDateString("en-US",{day:"2-digit",month:"2-digit",year:"numeric"})+" "+t.toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit"})}function uA(n,t){const e=P_(n);t.innerHTML=`
    <div class="page-header">
      <div>
        <h2 class="page-title">Dashboard</h2>
        <p class="page-subtitle">Trading performance overview</p>
      </div>
    </div>

    ${n.length===0?hA():dA(e,n)}
  `}function hA(){return`
    <div class="empty-state">
      <div class="empty-state-icon">📊</div>
      <h3 class="empty-state-title">No trades imported</h3>
      <p class="empty-state-text">Import a CSV from Hyperliquid or add a manual trade to see the dashboard.</p>
    </div>
  `}function dA(n,t){const e=t.filter(i=>i.status==="Active"),s=e.reduce((i,r)=>{const o=r.remainingSize!=null?r.remainingSize:r.size;return i+(r.entryPrice||0)*o},0);return`
    <div class="kpi-grid">
      ${pn("Invested Now","$"+s.toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2}),"neutral",`${e.length} active trades`,"stagger-1")}
      ${pn("Total P&L",Gt(n.totalPnl),n.totalPnl>=0?"profit":"loss",`${n.closingTrades} closing trades`,"stagger-2")}
      ${pn("Net P&L",Gt(n.netPnl),n.netPnl>=0?"profit":"loss",`Fees: ${Gt(-n.totalFees)}`,"stagger-3")}
      ${pn("Win Rate",si(n.winRate),n.winRate>=50?"profit":"loss",`${n.wins}W / ${n.losses}L`,"stagger-4")}
      ${pn("Profit Factor",n.profitFactor===1/0?"∞":n.profitFactor.toFixed(2),n.profitFactor>=1?"profit":"loss","","stagger-5")}
      ${pn("Avg Win",Gt(n.avgWin),"profit","","stagger-6")}
      ${pn("Avg Loss",Gt(-n.avgLoss),"loss","","stagger-7")}
      ${pn("Best Trade",Gt(n.bestTrade),"profit","","stagger-8")}
      ${pn("Worst Trade",Gt(n.worstTrade),"loss","","")}
    </div>

    <!-- Charts rendered by charts.js -->
    <div class="chart-grid">
      <div class="chart-card chart-card-full animate-in">
        <div class="chart-card-title">Equity Curve</div>
        <div class="chart-wrapper"><canvas id="chart-equity"></canvas></div>
      </div>
      <div class="chart-card animate-in">
        <div class="chart-card-title">Daily P&L</div>
        <div class="chart-wrapper"><canvas id="chart-daily"></canvas></div>
      </div>
      <div class="chart-card animate-in">
        <div class="chart-card-title">P&L per Coin</div>
        <div class="chart-wrapper"><canvas id="chart-coins"></canvas></div>
      </div>
      <div class="chart-card animate-in">
        <div class="chart-card-title">P&L per Strategy</div>
        <div class="chart-wrapper"><canvas id="chart-strategies"></canvas></div>
      </div>
      <div class="chart-card animate-in">
        <div class="chart-card-title">MAE% vs MFE%</div>
        <div class="chart-wrapper"><canvas id="chart-maemfe"></canvas></div>
      </div>
    </div>
  `}function pn(n,t,e,s,i){return`
    <div class="kpi-card animate-in ${i}">
      <div class="kpi-label">${n}</div>
      <div class="kpi-value ${e}">${t}</div>
      ${s?`<div class="kpi-sub">${s}</div>`:""}
    </div>
  `}const Dl=25;let Oe=1,kr="time",ui="desc",Ft={coin:"",direction:"",strategy:"",dateFrom:"",dateTo:""};function Ya(n,t,e){const s=Hn(),i=[...new Set(n.map(u=>u.coin))].sort(),r=gA(n),o=mA(r),a=Math.max(1,Math.ceil(o.length/Dl));Oe>a&&(Oe=a);const l=o.slice((Oe-1)*Dl,Oe*Dl);t.innerHTML=`
    <div class="page-header">
      <div>
        <h2 class="page-title">Trades</h2>
        <p class="page-subtitle">${n.length} total trades • ${r.length} filtered</p>
      </div>
    </div>

    <div class="filters-bar">
      <div class="filter-group">
        <label class="filter-label">Coin</label>
        <select id="filter-coin" class="input filter-input">
          <option value="">All</option>
          ${i.map(u=>`<option value="${u}" ${Ft.coin===u?"selected":""}>${u}</option>`).join("")}
        </select>
      </div>
      <div class="filter-group">
        <label class="filter-label">Direction</label>
        <select id="filter-dir" class="input filter-input">
          <option value="">All</option>
          <option value="Long" ${Ft.direction==="Long"?"selected":""}>Long</option>
          <option value="Short" ${Ft.direction==="Short"?"selected":""}>Short</option>
        </select>
      </div>
      <div class="filter-group">
        <label class="filter-label">Strategy</label>
        <select id="filter-strategy" class="input filter-input">
          <option value="">All</option>
          ${s.map(u=>`<option value="${u}" ${Ft.strategy===u?"selected":""}>${u}</option>`).join("")}
        </select>
      </div>
      <div class="filter-group">
        <label class="filter-label">From</label>
        <input type="date" id="filter-from" class="input filter-input" value="${Ft.dateFrom}" />
      </div>
      <div class="filter-group">
        <label class="filter-label">To</label>
        <input type="date" id="filter-to" class="input filter-input" value="${Ft.dateTo}" />
      </div>
      <button id="btn-clear-filters" class="btn btn-ghost btn-sm">✕ Reset</button>
    </div>

    <div class="table-container">
      <table class="data-table" id="trade-table">
        <thead>
          <tr>
            ${Ae("time","Data")}
            ${Ae("coin","Coin")}
            ${Ae("direction","Dir")}
            ${Ae("status","Status")}
            ${Ae("entryPrice","Entry")}
            ${Ae("exitPrice","Exit")}
            ${Ae("size","Size")}
            ${Ae("fee","Fee")}
            ${Ae("closedPnl","P&L")}
            ${Ae("strategy","Strategy")}
            <th>Tags</th>
            ${Ae("risk","Risk")}
            ${Ae("mae","MAE%")}
            ${Ae("mfe","MFE%")}
            <th>📷</th>
          </tr>
        </thead>
        <tbody>
          ${l.length===0?'<tr><td colspan="15" class="text-center text-muted" style="padding:2rem">No trades found</td></tr>':""}
          ${l.map(u=>fA(u)).join("")}
        </tbody>
      </table>
    </div>

    ${pA(Oe,a,r.length)}
  `,_A(t,n,e),yA(t,n,e),bA(t,n,e),vA(t,n,e),wA(t,l)}function Ae(n,t){const e=kr===n;return`<th data-sort="${n}" class="${e?"sorted":""}">${t} <span class="sort-indicator">${e?ui==="asc"?"↑":"↓":"↕"}</span></th>`}function fA(n){const t=n.closedPnl>0?"cell-profit":n.closedPnl<0?"cell-loss":"",e=n.direction==="Long"?"long":n.direction==="Short"?"short":"",s=n.status==="Active",i=n.entryPrice||0,r=n.exitPrice,o=n.risk>0?"★".repeat(n.risk)+"☆".repeat(5-n.risk):'<span class="text-muted">—</span>';return`
    <tr data-id="${n.id}" class="${s?"row-active":""} row-clickable">
      <td>${cA(n.time)}</td>
      <td class="cell-coin">${n.coin}</td>
      <td><span class="cell-dir ${e}">${n.direction}</span></td>
      <td>${s?'<span class="status-badge status-active"><span class="status-dot"></span> Active</span>':'<span class="status-badge status-completed">✓ Completed</span>'}</td>
      <td>$${i.toLocaleString("en-US",{minimumFractionDigits:2})}</td>
      <td>${r!=null?"$"+r.toLocaleString("en-US",{minimumFractionDigits:2}):'<span class="text-muted">—</span>'}</td>
      <td>${n.size}</td>
      <td class="text-muted">$${Math.abs(n.fee).toFixed(2)}</td>
      <td class="${t}">${s?'<span class="text-muted">—</span>':Gt(n.closedPnl)}</td>
      <td>${n.strategy?`<span class="strategy-badge">${n.strategy}</span>`:""}</td>
      <td>${(n.tags||[]).length>0?n.tags.map(a=>`<span class="tag-badge">${a}</span>`).join(""):""}</td>
      <td><span class="risk-stars" style="font-size:0.75rem;">${o}</span></td>
      <td class="text-muted">${n.mae!=null?n.mae+"%":"—"}</td>
      <td class="text-muted">${n.mfe!=null?n.mfe+"%":"—"}</td>
      <td><div class="image-thumbs" data-trade-id="${n.id}" style="display:flex; gap:3px;">${(n.images||[]).length>0?'<span class="text-muted" style="font-size:0.7rem">⏳</span>':""}</div></td>
    </tr>
  `}function pA(n,t,e){if(t<=1)return"";let s="";for(let i=1;i<=t;i++)i===1||i===t||i>=n-2&&i<=n+2?s+=`<button class="pagination-btn ${i===n?"active":""}" data-page="${i}">${i}</button>`:(i===n-3||i===n+3)&&(s+='<span class="pagination-info">...</span>');return`
    <div class="pagination">
      <button class="pagination-btn" data-page="${n-1}" ${n<=1?"disabled":""}>‹</button>
      ${s}
      <button class="pagination-btn" data-page="${n+1}" ${n>=t?"disabled":""}>›</button>
      <span class="pagination-info">${e} trade-uri</span>
    </div>
  `}function gA(n){return n.filter(t=>!(Ft.coin&&t.coin!==Ft.coin||Ft.direction&&t.direction!==Ft.direction||Ft.strategy&&t.strategy!==Ft.strategy||Ft.dateFrom&&t.time<Ft.dateFrom||Ft.dateTo&&t.time>Ft.dateTo+"T23:59:59"))}function mA(n){const t=[...n];return t.sort((e,s)=>{let i=e[kr],r=s[kr];if(typeof i=="string"){const o=i.localeCompare(r);return ui==="asc"?o:-o}return ui==="asc"?i-r:r-i}),t}function _A(n,t,e){var i,r,o,a,l,u;const s=()=>Ya(t,n,e);(i=n.querySelector("#filter-coin"))==null||i.addEventListener("change",h=>{Ft.coin=h.target.value,Oe=1,s()}),(r=n.querySelector("#filter-dir"))==null||r.addEventListener("change",h=>{Ft.direction=h.target.value,Oe=1,s()}),(o=n.querySelector("#filter-strategy"))==null||o.addEventListener("change",h=>{Ft.strategy=h.target.value,Oe=1,s()}),(a=n.querySelector("#filter-from"))==null||a.addEventListener("change",h=>{Ft.dateFrom=h.target.value,Oe=1,s()}),(l=n.querySelector("#filter-to"))==null||l.addEventListener("change",h=>{Ft.dateTo=h.target.value,Oe=1,s()}),(u=n.querySelector("#btn-clear-filters"))==null||u.addEventListener("click",()=>{Ft={coin:"",direction:"",strategy:"",dateFrom:"",dateTo:""},Oe=1,s()})}function yA(n,t,e){n.querySelectorAll("th[data-sort]").forEach(s=>{s.addEventListener("click",()=>{const i=s.dataset.sort;kr===i?ui=ui==="asc"?"desc":"asc":(kr=i,ui="desc"),Ya(t,n,e)})})}function bA(n,t,e){n.querySelectorAll(".pagination-btn[data-page]").forEach(s=>{s.addEventListener("click",()=>{const i=parseInt(s.dataset.page);!isNaN(i)&&i>=1&&(Oe=i,Ya(t,n,e))})})}function vA(n,t,e){n.querySelectorAll("tr[data-id]").forEach(s=>{s.addEventListener("click",()=>{const i=t.find(r=>r.id===s.dataset.id);i&&e&&e(i)})})}async function wA(n,t){for(const e of t){if(!e.images||e.images.length===0)continue;const s=n.querySelector(`.image-thumbs[data-trade-id="${e.id}"]`);if(!s)continue;const i=[];for(const a of e.images){const l=await x_(a);l&&i.push(l)}let r="";i.slice(0,2).forEach(a=>{r+=`<img src="${a}" class="image-thumb" data-full-src="${a}" alt="Screenshot" />`}),i.length>2&&(r+=`<span class="image-thumb-more" style="font-size:0.7rem; align-self:center; cursor:pointer; color:var(--text-muted);">+${i.length-2}</span>`),s.innerHTML=r,s.querySelectorAll(".image-thumb").forEach((a,l)=>{a.addEventListener("click",u=>{u.stopPropagation(),window.openLightbox&&window.openLightbox(i,l)})});const o=s.querySelector(".image-thumb-more");o&&o.addEventListener("click",a=>{a.stopPropagation(),window.openLightbox&&window.openLightbox(i,2)})}}function EA(n,t,e){const s=Hn(),i=ci();t.innerHTML=`
    <div class="modal-header">
      <h3 class="modal-title">➕ Add Manual Trade</h3>
      <button class="modal-close" id="modal-close">&times;</button>
    </div>
    <div class="modal-body">
      <!-- Basic info -->
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">Date & Time</label>
          <input type="datetime-local" id="trade-time" class="input" value="${TA()}" />
        </div>
        <div class="form-group">
          <label class="form-label">Coin</label>
          <input type="text" id="trade-coin" class="input" placeholder="BTC, ETH, SOL..." />
        </div>
      </div>

      <div class="form-row">
        <div class="form-group">
          <label class="form-label">Direction</label>
          <select id="trade-direction" class="input">
            <option value="Long">Long</option>
            <option value="Short">Short</option>
          </select>
        </div>
        <div class="form-group">
          <label class="form-label">Size</label>
          <input type="number" step="0.0001" id="trade-size" class="input" placeholder="0.0" />
        </div>
      </div>

      <div class="form-row">
        <div class="form-group">
          <label class="form-label">Entry Price <span style="color:var(--color-profit)">*</span></label>
          <input type="number" step="0.01" id="trade-entry-price" class="input" placeholder="Entry price" />
        </div>
        <div class="form-group">
          <label class="form-label">Exit Price</label>
          <input type="number" step="0.01" id="trade-exit-price" class="input" placeholder="Exit price" />
        </div>
      </div>

      <div class="form-row-3">
        <div class="form-group">
          <label class="form-label">Fee</label>
          <input type="number" step="0.01" id="trade-fee" class="input" placeholder="0.00" />
        </div>
        <div class="form-group">
          <label class="form-label">P&L (Closed)</label>
          <input type="number" step="0.01" id="trade-pnl" class="input" placeholder="0.00" />
        </div>
        <div class="form-group">
          <label class="form-label">Value <span class="text-muted">(auto)</span></label>
          <input type="number" step="0.01" id="trade-notional" class="input" placeholder="auto" />
        </div>
      </div>

      <hr style="border-color: var(--border-subtle); margin: 1.25rem 0;" />

      <!-- Annotations -->
      <div class="form-group">
        <label class="form-label">Risk Level</label>
        <div id="risk-selector">
          ${[1,2,3,4,5].map(P=>`
            <button class="risk-star-btn" data-risk="${P}" style="
              background: none; border: none; font-size: 1.5rem; cursor: pointer;
              color: #374151; transition: color 150ms ease;
            ">★</button>
          `).join("")}
        </div>
      </div>

      <div class="form-group">
        <label class="form-label">Strategy</label>
        <select id="trade-strategy" class="input">
          <option value="">— Select —</option>
          ${s.map(P=>`<option value="${P}">${P}</option>`).join("")}
        </select>
      </div>

      <div class="form-row">
        <div class="form-group">
          <label class="form-label">MAE%</label>
          <input type="number" step="0.01" id="trade-mae" class="input" placeholder="ex: -2.5" />
        </div>
        <div class="form-group">
          <label class="form-label">MFE%</label>
          <input type="number" step="0.01" id="trade-mfe" class="input" placeholder="ex: 5.3" />
        </div>
      </div>

      <div class="form-group">
        <label class="form-label">Tags</label>
        <div id="tags-container" style="display:flex; flex-wrap:wrap; gap:0.5rem;">
          ${i.map(P=>`
            <button class="tag-toggle-btn" data-tag="${P}" style="
              padding: 0.3rem 0.7rem; border-radius: var(--radius-sm); border: 1px solid var(--border-medium);
              background: transparent; color: var(--text-secondary); font-size: 0.8rem;
              cursor: pointer; font-family: inherit; transition: all 150ms ease;
            ">${P}</button>
          `).join("")}
        </div>
      </div>

      <div class="form-group">
        <label class="form-label">Notes</label>
        <textarea id="trade-notes" class="input" rows="3" placeholder="Observations, reasoning..."></textarea>
      </div>

      <div class="form-group">
        <label class="form-label">Screenshots</label>
        <div id="trade-img-gallery" style="display:flex; flex-wrap:wrap; gap:0.35rem; margin-bottom:0.5rem;"></div>
        <label class="btn btn-secondary btn-sm" style="cursor:pointer; display:inline-flex; align-items:center; gap:0.35rem;">📷 Add photos<input type="file" accept="image/*" id="trade-img-upload" style="display:none" multiple /></label>
      </div>
    </div>
    <div class="modal-footer">
      <button class="btn btn-ghost" id="modal-cancel">Cancel</button>
      <button class="btn btn-primary" id="modal-save">➕ Add Trade</button>
    </div>
  `,n.classList.remove("hidden");let r=0,o=[],a=[];t.querySelector("#trade-img-upload").addEventListener("change",P=>{const R=t.querySelector("#trade-img-gallery");Array.from(P.target.files).forEach(k=>{const C=new FileReader;C.onload=M=>{const L="img_"+Date.now()+"_"+Math.random().toString(36).slice(2,6);a.push({id:L,dataUrl:M.target.result});const S=document.createElement("img");S.src=M.target.result,S.style.cssText="width:48px;height:48px;object-fit:cover;border-radius:4px;border:1px solid var(--border-subtle);",R.appendChild(S)},C.readAsDataURL(k)})});const l=()=>{n.classList.add("hidden")};t.querySelector("#modal-close").addEventListener("click",l),t.querySelector("#modal-cancel").addEventListener("click",l),n.addEventListener("click",P=>{P.target===n&&l()});const u=t.querySelector("#trade-entry-price"),h=t.querySelector("#trade-exit-price"),d=t.querySelector("#trade-size"),p=t.querySelector("#trade-notional"),_=t.querySelector("#trade-fee"),v=t.querySelector("#trade-direction"),E=t.querySelector("#trade-pnl");function w(){const P=parseFloat(u.value)||0,R=parseFloat(h.value)||0,k=parseFloat(d.value)||0,C=parseFloat(_.value)||0;if(P&&k&&!p.value&&(p.placeholder=(P*k).toFixed(2)),P>0&&R>0&&k>0){const L=v.value==="Long"?(R-P)*k:(P-R)*k;E.value=(L-C).toFixed(2)}}u.addEventListener("input",w),h.addEventListener("input",w),d.addEventListener("input",w),_.addEventListener("input",w),v.addEventListener("change",w),t.querySelectorAll(".risk-star-btn").forEach(P=>{P.addEventListener("click",()=>{r=parseInt(P.dataset.risk),t.querySelectorAll(".risk-star-btn").forEach(R=>{R.style.color=parseInt(R.dataset.risk)<=r?"#f59e0b":"#374151"})})}),t.querySelectorAll(".tag-toggle-btn").forEach(P=>{P.addEventListener("click",()=>{const R=P.dataset.tag;o.includes(R)?(o=o.filter(k=>k!==R),P.style.background="transparent",P.style.color="var(--text-secondary)",P.style.borderColor="var(--border-medium)"):(o.push(R),P.style.background="var(--accent-glow)",P.style.color="var(--accent-primary)",P.style.borderColor="var(--accent-primary)")})}),t.querySelector("#modal-save").addEventListener("click",async()=>{const P=t.querySelector("#trade-coin").value.trim();if(!P){alert("Please fill in the coin!");return}for(const C of a)await Mu(C.id,C.dataUrl);const R=t.querySelector("#trade-time").value,k=Qx({time:R?new Date(R).toISOString():new Date().toISOString(),coin:P,direction:t.querySelector("#trade-direction").value,entryPrice:t.querySelector("#trade-entry-price").value,exitPrice:t.querySelector("#trade-exit-price").value||null,size:t.querySelector("#trade-size").value,notional:t.querySelector("#trade-notional").value,fee:t.querySelector("#trade-fee").value,closedPnl:t.querySelector("#trade-pnl").value,risk:r,strategy:t.querySelector("#trade-strategy").value,notes:t.querySelector("#trade-notes").value,tags:o,images:a.map(C=>C.id),mae:t.querySelector("#trade-mae").value||null,mfe:t.querySelector("#trade-mfe").value||null});e(k),l()})}function TA(){const n=new Date,t=n.getTimezoneOffset();return new Date(n.getTime()-t*60*1e3).toISOString().slice(0,16)}function bf(n){if(!n)return"";const t=new Date(n),e=t.getTimezoneOffset();return new Date(t.getTime()-e*60*1e3).toISOString().slice(0,16)}function IA(n,t,e,s,i){let r=n.risk||0,o=[...n.tags||[]];function a(){const v=Hn(),E=ci();t.innerHTML=`
    <div class="page-header" style="margin-bottom:1.5rem;">
      <div style="display:flex; align-items:center; gap:1rem; flex-wrap:wrap;">
        <button class="btn btn-ghost btn-sm" id="btn-back">← Back</button>
        <div style="flex:1">
          <h2 class="page-title" style="display:flex; align-items:center; gap:0.5rem;">
            ${n.coin} ${n.direction}
            <span class="status-badge ${n.status==="Active"?"status-active":"status-completed"}" style="font-size:0.75rem;">
              ${n.status==="Active"?'<span class="status-dot"></span> Active':"✓ Completed"}
            </span>
          </h2>
        </div>
        <span id="autosave-status" style="font-size:0.75rem; color:var(--text-muted); display:flex; align-items:center; gap:0.25rem;">✅ Saved</span>
      </div>
    </div>

    <!-- Trade Data -->
    <div class="card" style="margin-bottom:1.5rem; padding:1.25rem;">
      <h3 style="margin:0 0 1rem; font-size:1rem;">📊 Trade Data</h3>
      <div class="detail-grid">
        <div class="form-group">
          <label class="form-label">Coin</label>
          <input type="text" id="ed-coin" class="input" value="${n.coin}" />
        </div>
        <div class="form-group">
          <label class="form-label">Direction</label>
          <select id="ed-direction" class="input">
            <option value="Long" ${n.direction==="Long"?"selected":""}>Long</option>
            <option value="Short" ${n.direction==="Short"?"selected":""}>Short</option>
          </select>
        </div>
        <div class="form-group">
          <label class="form-label">Entry Price</label>
          <input type="number" step="0.01" id="ed-entry" class="input" value="${n.entryPrice||""}" />
        </div>
        <div class="form-group">
          <label class="form-label">Exit Price</label>
          <input type="number" step="0.01" id="ed-exit" class="input" value="${n.exitPrice||""}" placeholder="— active —" />
        </div>
        <div class="form-group">
          <label class="form-label">Size</label>
          <input type="number" step="0.0001" id="ed-size" class="input" value="${n.size||""}" />
        </div>
        <div class="form-group">
          <label class="form-label">Fee</label>
          <input type="number" step="0.01" id="ed-fee" class="input" value="${n.fee||0}" />
        </div>
        <div class="form-group">
          <label class="form-label">Data Deschidere</label>
          <input type="datetime-local" id="ed-time" class="input" value="${bf(n.time)}" />
        </div>
        <div class="form-group">
          <label class="form-label">Data Închidere</label>
          <input type="datetime-local" id="ed-exit-time" class="input" value="${bf(n.exitTime)}" />
        </div>
      </div>
      <div id="pnl-preview" style="margin-top:0.75rem; padding:0.75rem; background:var(--bg-surface); border-radius:var(--radius-md); display:flex; align-items:center; gap:0.5rem;">
        <span class="form-label" style="font-size:0.7rem; margin:0;">CALCULATED P&L</span>
        <strong id="pnl-value" style="font-size:1.1rem;">—</strong>
      </div>
    </div>

    <div class="card" style="margin-bottom:1.5rem; padding:1.25rem;">
      <h3 style="margin:0 0 1rem; font-size:1rem;">📝 Annotations</h3>
      <div class="detail-grid">
        <div class="form-group">
          <label class="form-label">Risk Level</label>
          <div id="risk-selector" style="display:flex; align-items:center; gap:4px; padding:0.5rem 0;">
            ${[1,2,3,4,5].map(w=>`
              <button class="risk-star-btn" data-risk="${w}" style="
                background:none; border:none; font-size:1.5rem; cursor:pointer; padding:0;
                color:${r>=w?"#f59e0b":"#374151"}; transition:color 150ms ease;
              ">★</button>
            `).join("")}
            <button class="btn btn-ghost btn-sm" id="risk-clear" style="margin-left:0.5rem; font-size:0.7rem; padding:0.15rem 0.4rem;">✕</button>
          </div>
        </div>
        <div class="form-group">
          <label class="form-label">Strategy</label>
          <select id="ed-strategy" class="input">
            <option value="">— None —</option>
            ${v.map(w=>`<option value="${w}" ${n.strategy===w?"selected":""}>${w}</option>`).join("")}
            ${n.strategy&&!v.includes(n.strategy)?`<option value="${n.strategy}" selected>${n.strategy}</option>`:""}
          </select>
          <div style="display:flex; gap:0.35rem; align-items:center; margin-top:0.4rem;">
            <input type="text" id="new-strategy-input" class="input" placeholder="New strategy..." style="flex:1; padding:0.4rem 0.6rem; font-size:0.85rem;" />
            <button class="btn btn-secondary btn-sm" id="btn-add-strategy" style="padding:0.4rem 0.65rem; font-size:0.8rem; white-space:nowrap;">+ Add</button>
            <button class="btn btn-danger btn-sm" id="btn-delete-strategy" style="padding:0.4rem 0.65rem; font-size:0.8rem;">🗑️</button>
          </div>
        </div>
        <div class="form-group">
          <label class="form-label">MAE%</label>
          <input type="number" step="0.01" id="ed-mae" class="input" value="${n.mae!=null?n.mae:""}" placeholder="-2.5" />
        </div>
        <div class="form-group">
          <label class="form-label">MFE%</label>
          <input type="number" step="0.01" id="ed-mfe" class="input" value="${n.mfe!=null?n.mfe:""}" placeholder="5.0" />
        </div>
      </div>

      <!-- Tags -->
      <div class="form-group" style="margin-top:0.5rem;">
        <label class="form-label">Tags</label>
        <div id="tag-selector" style="display:flex; flex-wrap:wrap; gap:0.4rem; margin-bottom:0.5rem;">
          ${E.map(w=>`
            <span style="display:inline-flex; align-items:center;">
              <button class="tag-toggle-btn ${o.includes(w)?"active":""}" data-tag="${w}" style="
                display:inline-block; padding:0.4rem 0.65rem; border-radius:var(--radius-sm) 0 0 var(--radius-sm);
                border:1px solid ${o.includes(w)?"var(--accent-primary)":"var(--border-subtle)"};
                border-right:none;
                background:${o.includes(w)?"var(--accent-glow)":"transparent"};
                color:${o.includes(w)?"var(--accent-primary)":"var(--text-secondary)"};
                cursor:pointer; font-size:0.85rem; transition:all 150ms ease;
              ">${w}</button><button class="tag-delete-btn" data-tag="${w}" title="Remove from list" style="
                padding:0.4rem 0.4rem; border-radius:0 var(--radius-sm) var(--radius-sm) 0;
                border:1px solid ${o.includes(w)?"var(--accent-primary)":"var(--border-subtle)"};
                background:${o.includes(w)?"var(--accent-glow)":"transparent"};
                color:var(--text-muted); cursor:pointer; font-size:0.7rem; transition:all 150ms ease;
              ">✕</button>
            </span>
          `).join("")}
        </div>
        <div style="display:flex; gap:0.4rem; align-items:center;">
          <input type="text" id="new-tag-input" class="input" placeholder="New tag..." style="max-width:200px; padding:0.4rem 0.6rem; font-size:0.85rem;" />
          <button class="btn btn-secondary btn-sm" id="btn-add-tag" style="padding:0.4rem 0.65rem; font-size:0.8rem;">+ Add</button>
        </div>
      </div>
    </div>

    <!-- Notes -->
    <div class="card" style="margin-bottom:1.5rem; padding:1.25rem;">
      <h3 style="margin:0 0 0.75rem; font-size:1rem;">📋 Notes</h3>
      <textarea id="ed-notes" class="input" rows="4" placeholder="Adaugă notițe despre trade..." style="width:100%; resize:vertical; font-size:0.85rem;">${n.notes||""}</textarea>
    </div>

    <!-- Images -->
    <div class="card" style="margin-bottom:1.5rem; padding:1.25rem;">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.75rem;">
        <h3 style="margin:0; font-size:1rem;">📷 Screenshots (${(n.images||[]).length})</h3>
        <label class="btn btn-secondary btn-sm" style="cursor:pointer; display:inline-flex; align-items:center; gap:0.35rem;">
          📷 Add Image
          <input type="file" accept="image/*" id="detail-image-upload" style="display:none" multiple />
        </label>
      </div>
      <div id="trade-gallery" style="display:flex; flex-wrap:wrap; gap:0.5rem;"></div>
      ${(n.images||[]).length===0?'<p class="text-muted" style="font-size:0.85rem; margin:0;">No screenshots yet.</p>':""}
    </div>

    <!-- Actions -->
    <div style="display:flex; gap:0.75rem; flex-wrap:wrap;">
      <button class="btn btn-ghost btn-sm" id="btn-back-bottom">← Back to Trades</button>
      <div style="flex:1"></div>
      <button class="btn btn-danger btn-sm" id="btn-delete-trade">🗑️ Delete</button>
    </div>
    `,p(),_(),l()}function l(){var C,M,L,S,g;const v=parseFloat((C=t.querySelector("#ed-entry"))==null?void 0:C.value)||0,E=parseFloat((M=t.querySelector("#ed-exit"))==null?void 0:M.value)||0,w=parseFloat((L=t.querySelector("#ed-size"))==null?void 0:L.value)||0,P=parseFloat((S=t.querySelector("#ed-fee"))==null?void 0:S.value)||0,R=((g=t.querySelector("#ed-direction"))==null?void 0:g.value)||"Long",k=t.querySelector("#pnl-value");if(k)if(E>0&&v>0&&w>0){const y=R==="Long"?(E-v)*w-P:(v-E)*w-P;k.style.color=y>=0?"var(--color-profit)":"var(--color-loss)",k.textContent=(y>=0?"+":"")+"$"+Math.abs(y).toFixed(2)}else k.style.color="var(--text-muted)",k.textContent="—"}function u(){const v=t.querySelector("#ed-direction").value,E=parseFloat(t.querySelector("#ed-entry").value)||0,w=t.querySelector("#ed-exit").value,P=w&&parseFloat(w)>0?parseFloat(w):null,R=parseFloat(t.querySelector("#ed-size").value)||0,k=parseFloat(t.querySelector("#ed-fee").value)||0,C=t.querySelector("#ed-time").value,M=t.querySelector("#ed-exit-time").value;let L=0;P&&E&&R&&(L=v==="Long"?(P-E)*R-k:(E-P)*R-k);const S={coin:(t.querySelector("#ed-coin").value||n.coin).toUpperCase(),direction:v,time:C?new Date(C).toISOString():n.time,exitTime:P?M?new Date(M).toISOString():n.exitTime||new Date().toISOString():null,entryPrice:E,exitPrice:P,size:R,fee:k,closedPnl:L,notional:E*R,status:P?"Completed":"Active",risk:r,strategy:t.querySelector("#ed-strategy").value,mae:t.querySelector("#ed-mae").value?parseFloat(t.querySelector("#ed-mae").value):null,mfe:t.querySelector("#ed-mfe").value?parseFloat(t.querySelector("#ed-mfe").value):null,notes:t.querySelector("#ed-notes").value,tags:o,images:n.images||[]};Object.assign(n,S),s(n.id,S);const g=S.strategy;if(g){const y=Hn();y.includes(g)||(y.push(g),fr(y))}return S}let h=null;function d(){const v=t.querySelector("#autosave-status");v&&(v.textContent="⏳ Saving...",v.style.color="var(--accent-primary)"),clearTimeout(h),h=setTimeout(()=>{u(),v&&(v.textContent="✅ Saved",v.style.color="var(--text-muted)")},800)}function p(){var w,P,R,k,C,M,L,S,g,y;(w=t.querySelector("#btn-back"))==null||w.addEventListener("click",e),(P=t.querySelector("#btn-back-bottom"))==null||P.addEventListener("click",e),(R=t.querySelector("#btn-save-all"))==null||R.addEventListener("click",()=>{clearTimeout(h),u();const b=t.querySelector("#autosave-status");b&&(b.textContent="✅ Saved!",b.style.color="var(--text-muted)")}),(k=t.querySelector("#btn-delete-trade"))==null||k.addEventListener("click",()=>{confirm(`Sigur vrei să ștergi trade-ul ${n.coin} ${n.direction}?`)&&(i(n.id),e())}),["#ed-coin","#ed-entry","#ed-exit","#ed-size","#ed-fee","#ed-direction","#ed-time","#ed-exit-time","#ed-strategy","#ed-mae","#ed-mfe","#ed-notes"].forEach(b=>{var T,A;(T=t.querySelector(b))==null||T.addEventListener("input",()=>{l(),d()}),(A=t.querySelector(b))==null||A.addEventListener("change",()=>{l(),d()})}),t.querySelectorAll(".risk-star-btn").forEach(b=>{b.addEventListener("click",()=>{r=parseInt(b.dataset.risk),t.querySelectorAll(".risk-star-btn").forEach(T=>{T.style.color=parseInt(T.dataset.risk)<=r?"#f59e0b":"#374151"}),d()})}),(C=t.querySelector("#risk-clear"))==null||C.addEventListener("click",()=>{r=0,t.querySelectorAll(".risk-star-btn").forEach(b=>{b.style.color="#374151"}),d()});const v=()=>{const T=(t.querySelector("#new-strategy-input").value||"").trim();if(!T)return;const A=Hn();A.includes(T)||(A.push(T),fr(A)),n.strategy=T,a()};(M=t.querySelector("#btn-add-strategy"))==null||M.addEventListener("click",v),(L=t.querySelector("#new-strategy-input"))==null||L.addEventListener("keydown",b=>{b.key==="Enter"&&(b.preventDefault(),v())}),(S=t.querySelector("#btn-delete-strategy"))==null||S.addEventListener("click",()=>{const b=t.querySelector("#ed-strategy").value;if(!b)return;const T=Hn().filter(A=>A!==b);fr(T),n.strategy="",a()}),t.querySelectorAll(".tag-toggle-btn").forEach(b=>{b.addEventListener("click",()=>{const T=b.dataset.tag;o.includes(T)?o=o.filter(A=>A!==T):o.push(T),d(),a()})}),t.querySelectorAll(".tag-delete-btn").forEach(b=>{b.addEventListener("click",T=>{T.stopPropagation();const A=b.dataset.tag,x=ci().filter(W=>W!==A);ma(x),a()})});const E=()=>{const T=(t.querySelector("#new-tag-input").value||"").trim();if(!T)return;const A=ci();A.includes(T)||(A.push(T),ma(A)),o.includes(T)||o.push(T),a()};(g=t.querySelector("#btn-add-tag"))==null||g.addEventListener("click",E),(y=t.querySelector("#new-tag-input"))==null||y.addEventListener("keydown",b=>{b.key==="Enter"&&(b.preventDefault(),E())})}async function _(){var P;const v=t.querySelector("#trade-gallery");if(!v)return;const E=[];for(const R of n.images||[]){const k=await x_(R),C=document.createElement("div");if(C.style.cssText="position:relative; width:80px; height:80px;",k){const M=E.length;E.push(k),C.innerHTML=`
          <img src="${k}" style="width:100%; height:100%; object-fit:cover; border-radius:6px; border:1px solid var(--border-subtle); cursor:pointer;" />
          <button class="img-delete-btn" data-img-id="${R}" style="position:absolute; top:-6px; right:-6px; width:20px; height:20px; border-radius:50%; background:var(--color-loss); color:white; border:none; cursor:pointer; font-size:0.65rem; display:flex; align-items:center; justify-content:center;">✕</button>
        `,C.querySelector("img").addEventListener("click",()=>{window.openLightbox&&window.openLightbox(E,M)})}else C.innerHTML=`
          <div style="width:100%; height:100%; border-radius:6px; border:1px dashed var(--border-subtle); display:flex; flex-direction:column; align-items:center; justify-content:center; background:var(--bg-surface); color:var(--text-muted); font-size:0.55rem; text-align:center; gap:2px;">
            <span style="font-size:1.2rem;">📷</span>
            <span>Not synced</span>
          </div>
          <button class="img-delete-btn" data-img-id="${R}" style="position:absolute; top:-6px; right:-6px; width:20px; height:20px; border-radius:50%; background:var(--color-loss); color:white; border:none; cursor:pointer; font-size:0.65rem; display:flex; align-items:center; justify-content:center;">✕</button>
        `;(P=C.querySelector(".img-delete-btn"))==null||P.addEventListener("click",async M=>{M.stopPropagation();const L=M.currentTarget.dataset.imgId;await Fx(L),n.images=(n.images||[]).filter(S=>S!==L),s(n.id,{images:n.images}),a()}),v.appendChild(C)}const w=t.querySelector("#detail-image-upload");w&&w.addEventListener("change",R=>{Array.from(R.target.files).forEach(k=>{const C=new FileReader;C.onload=async M=>{const L="img_"+Date.now()+"_"+Math.random().toString(36).slice(2,6);await Mu(L,M.target.result),n.images||(n.images=[]),n.images.push(L),s(n.id,{images:n.images}),a()},C.readAsDataURL(k)})})}a()}/*!
 * @kurkle/color v0.3.4
 * https://github.com/kurkle/color#readme
 * (c) 2024 Jukka Kurkela
 * Released under the MIT License
 */function Kr(n){return n+.5|0}const qn=(n,t,e)=>Math.max(Math.min(n,e),t);function tr(n){return qn(Kr(n*2.55),0,255)}function ts(n){return qn(Kr(n*255),0,255)}function yn(n){return qn(Kr(n/2.55)/100,0,1)}function vf(n){return qn(Kr(n*100),0,100)}const Me={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},bc=[..."0123456789ABCDEF"],SA=n=>bc[n&15],xA=n=>bc[(n&240)>>4]+bc[n&15],_o=n=>(n&240)>>4===(n&15),AA=n=>_o(n.r)&&_o(n.g)&&_o(n.b)&&_o(n.a);function PA(n){var t=n.length,e;return n[0]==="#"&&(t===4||t===5?e={r:255&Me[n[1]]*17,g:255&Me[n[2]]*17,b:255&Me[n[3]]*17,a:t===5?Me[n[4]]*17:255}:(t===7||t===9)&&(e={r:Me[n[1]]<<4|Me[n[2]],g:Me[n[3]]<<4|Me[n[4]],b:Me[n[5]]<<4|Me[n[6]],a:t===9?Me[n[7]]<<4|Me[n[8]]:255})),e}const kA=(n,t)=>n<255?t(n):"";function RA(n){var t=AA(n)?SA:xA;return n?"#"+t(n.r)+t(n.g)+t(n.b)+kA(n.a,t):void 0}const CA=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function k_(n,t,e){const s=t*Math.min(e,1-e),i=(r,o=(r+n/30)%12)=>e-s*Math.max(Math.min(o-3,9-o,1),-1);return[i(0),i(8),i(4)]}function DA(n,t,e){const s=(i,r=(i+n/60)%6)=>e-e*t*Math.max(Math.min(r,4-r,1),0);return[s(5),s(3),s(1)]}function MA(n,t,e){const s=k_(n,1,.5);let i;for(t+e>1&&(i=1/(t+e),t*=i,e*=i),i=0;i<3;i++)s[i]*=1-t-e,s[i]+=t;return s}function OA(n,t,e,s,i){return n===i?(t-e)/s+(t<e?6:0):t===i?(e-n)/s+2:(n-t)/s+4}function Nu(n){const e=n.r/255,s=n.g/255,i=n.b/255,r=Math.max(e,s,i),o=Math.min(e,s,i),a=(r+o)/2;let l,u,h;return r!==o&&(h=r-o,u=a>.5?h/(2-r-o):h/(r+o),l=OA(e,s,i,h,r),l=l*60+.5),[l|0,u||0,a]}function Vu(n,t,e,s){return(Array.isArray(t)?n(t[0],t[1],t[2]):n(t,e,s)).map(ts)}function Fu(n,t,e){return Vu(k_,n,t,e)}function LA(n,t,e){return Vu(MA,n,t,e)}function NA(n,t,e){return Vu(DA,n,t,e)}function R_(n){return(n%360+360)%360}function VA(n){const t=CA.exec(n);let e=255,s;if(!t)return;t[5]!==s&&(e=t[6]?tr(+t[5]):ts(+t[5]));const i=R_(+t[2]),r=+t[3]/100,o=+t[4]/100;return t[1]==="hwb"?s=LA(i,r,o):t[1]==="hsv"?s=NA(i,r,o):s=Fu(i,r,o),{r:s[0],g:s[1],b:s[2],a:e}}function FA(n,t){var e=Nu(n);e[0]=R_(e[0]+t),e=Fu(e),n.r=e[0],n.g=e[1],n.b=e[2]}function UA(n){if(!n)return;const t=Nu(n),e=t[0],s=vf(t[1]),i=vf(t[2]);return n.a<255?`hsla(${e}, ${s}%, ${i}%, ${yn(n.a)})`:`hsl(${e}, ${s}%, ${i}%)`}const wf={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},Ef={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"};function BA(){const n={},t=Object.keys(Ef),e=Object.keys(wf);let s,i,r,o,a;for(s=0;s<t.length;s++){for(o=a=t[s],i=0;i<e.length;i++)r=e[i],a=a.replace(r,wf[r]);r=parseInt(Ef[o],16),n[a]=[r>>16&255,r>>8&255,r&255]}return n}let yo;function $A(n){yo||(yo=BA(),yo.transparent=[0,0,0,0]);const t=yo[n.toLowerCase()];return t&&{r:t[0],g:t[1],b:t[2],a:t.length===4?t[3]:255}}const zA=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;function jA(n){const t=zA.exec(n);let e=255,s,i,r;if(t){if(t[7]!==s){const o=+t[7];e=t[8]?tr(o):qn(o*255,0,255)}return s=+t[1],i=+t[3],r=+t[5],s=255&(t[2]?tr(s):qn(s,0,255)),i=255&(t[4]?tr(i):qn(i,0,255)),r=255&(t[6]?tr(r):qn(r,0,255)),{r:s,g:i,b:r,a:e}}}function HA(n){return n&&(n.a<255?`rgba(${n.r}, ${n.g}, ${n.b}, ${yn(n.a)})`:`rgb(${n.r}, ${n.g}, ${n.b})`)}const Ml=n=>n<=.0031308?n*12.92:Math.pow(n,1/2.4)*1.055-.055,Xs=n=>n<=.04045?n/12.92:Math.pow((n+.055)/1.055,2.4);function qA(n,t,e){const s=Xs(yn(n.r)),i=Xs(yn(n.g)),r=Xs(yn(n.b));return{r:ts(Ml(s+e*(Xs(yn(t.r))-s))),g:ts(Ml(i+e*(Xs(yn(t.g))-i))),b:ts(Ml(r+e*(Xs(yn(t.b))-r))),a:n.a+e*(t.a-n.a)}}function bo(n,t,e){if(n){let s=Nu(n);s[t]=Math.max(0,Math.min(s[t]+s[t]*e,t===0?360:1)),s=Fu(s),n.r=s[0],n.g=s[1],n.b=s[2]}}function C_(n,t){return n&&Object.assign(t||{},n)}function Tf(n){var t={r:0,g:0,b:0,a:255};return Array.isArray(n)?n.length>=3&&(t={r:n[0],g:n[1],b:n[2],a:255},n.length>3&&(t.a=ts(n[3]))):(t=C_(n,{r:0,g:0,b:0,a:1}),t.a=ts(t.a)),t}function WA(n){return n.charAt(0)==="r"?jA(n):VA(n)}class Rr{constructor(t){if(t instanceof Rr)return t;const e=typeof t;let s;e==="object"?s=Tf(t):e==="string"&&(s=PA(t)||$A(t)||WA(t)),this._rgb=s,this._valid=!!s}get valid(){return this._valid}get rgb(){var t=C_(this._rgb);return t&&(t.a=yn(t.a)),t}set rgb(t){this._rgb=Tf(t)}rgbString(){return this._valid?HA(this._rgb):void 0}hexString(){return this._valid?RA(this._rgb):void 0}hslString(){return this._valid?UA(this._rgb):void 0}mix(t,e){if(t){const s=this.rgb,i=t.rgb;let r;const o=e===r?.5:e,a=2*o-1,l=s.a-i.a,u=((a*l===-1?a:(a+l)/(1+a*l))+1)/2;r=1-u,s.r=255&u*s.r+r*i.r+.5,s.g=255&u*s.g+r*i.g+.5,s.b=255&u*s.b+r*i.b+.5,s.a=o*s.a+(1-o)*i.a,this.rgb=s}return this}interpolate(t,e){return t&&(this._rgb=qA(this._rgb,t._rgb,e)),this}clone(){return new Rr(this.rgb)}alpha(t){return this._rgb.a=ts(t),this}clearer(t){const e=this._rgb;return e.a*=1-t,this}greyscale(){const t=this._rgb,e=Kr(t.r*.3+t.g*.59+t.b*.11);return t.r=t.g=t.b=e,this}opaquer(t){const e=this._rgb;return e.a*=1+t,this}negate(){const t=this._rgb;return t.r=255-t.r,t.g=255-t.g,t.b=255-t.b,this}lighten(t){return bo(this._rgb,2,t),this}darken(t){return bo(this._rgb,2,-t),this}saturate(t){return bo(this._rgb,1,t),this}desaturate(t){return bo(this._rgb,1,-t),this}rotate(t){return FA(this._rgb,t),this}}/*!
 * Chart.js v4.5.1
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */function gn(){}const KA=(()=>{let n=0;return()=>n++})();function _t(n){return n==null}function Xt(n){if(Array.isArray&&Array.isArray(n))return!0;const t=Object.prototype.toString.call(n);return t.slice(0,7)==="[object"&&t.slice(-6)==="Array]"}function ht(n){return n!==null&&Object.prototype.toString.call(n)==="[object Object]"}function ge(n){return(typeof n=="number"||n instanceof Number)&&isFinite(+n)}function Xe(n,t){return ge(n)?n:t}function st(n,t){return typeof n>"u"?t:n}const GA=(n,t)=>typeof n=="string"&&n.endsWith("%")?parseFloat(n)/100:+n/t,D_=(n,t)=>typeof n=="string"&&n.endsWith("%")?parseFloat(n)/100*t:+n;function Rt(n,t,e){if(n&&typeof n.call=="function")return n.apply(e,t)}function Et(n,t,e,s){let i,r,o;if(Xt(n))for(r=n.length,i=0;i<r;i++)t.call(e,n[i],i);else if(ht(n))for(o=Object.keys(n),r=o.length,i=0;i<r;i++)t.call(e,n[o[i]],o[i])}function _a(n,t){let e,s,i,r;if(!n||!t||n.length!==t.length)return!1;for(e=0,s=n.length;e<s;++e)if(i=n[e],r=t[e],i.datasetIndex!==r.datasetIndex||i.index!==r.index)return!1;return!0}function ya(n){if(Xt(n))return n.map(ya);if(ht(n)){const t=Object.create(null),e=Object.keys(n),s=e.length;let i=0;for(;i<s;++i)t[e[i]]=ya(n[e[i]]);return t}return n}function M_(n){return["__proto__","prototype","constructor"].indexOf(n)===-1}function YA(n,t,e,s){if(!M_(n))return;const i=t[n],r=e[n];ht(i)&&ht(r)?Cr(i,r,s):t[n]=ya(r)}function Cr(n,t,e){const s=Xt(t)?t:[t],i=s.length;if(!ht(n))return n;e=e||{};const r=e.merger||YA;let o;for(let a=0;a<i;++a){if(o=s[a],!ht(o))continue;const l=Object.keys(o);for(let u=0,h=l.length;u<h;++u)r(l[u],n,o,e)}return n}function pr(n,t){return Cr(n,t,{merger:XA})}function XA(n,t,e){if(!M_(n))return;const s=t[n],i=e[n];ht(s)&&ht(i)?pr(s,i):Object.prototype.hasOwnProperty.call(t,n)||(t[n]=ya(i))}const If={"":n=>n,x:n=>n.x,y:n=>n.y};function QA(n){const t=n.split("."),e=[];let s="";for(const i of t)s+=i,s.endsWith("\\")?s=s.slice(0,-1)+".":(e.push(s),s="");return e}function JA(n){const t=QA(n);return e=>{for(const s of t){if(s==="")break;e=e&&e[s]}return e}}function Vs(n,t){return(If[t]||(If[t]=JA(t)))(n)}function Uu(n){return n.charAt(0).toUpperCase()+n.slice(1)}const Dr=n=>typeof n<"u",cs=n=>typeof n=="function",Sf=(n,t)=>{if(n.size!==t.size)return!1;for(const e of n)if(!t.has(e))return!1;return!0};function ZA(n){return n.type==="mouseup"||n.type==="click"||n.type==="contextmenu"}const At=Math.PI,Ot=2*At,tP=Ot+At,ba=Number.POSITIVE_INFINITY,eP=At/180,Qt=At/2,ms=At/4,xf=At*2/3,O_=Math.log10,on=Math.sign;function gr(n,t,e){return Math.abs(n-t)<e}function Af(n){const t=Math.round(n);n=gr(n,t,n/1e3)?t:n;const e=Math.pow(10,Math.floor(O_(n))),s=n/e;return(s<=1?1:s<=2?2:s<=5?5:10)*e}function nP(n){const t=[],e=Math.sqrt(n);let s;for(s=1;s<e;s++)n%s===0&&(t.push(s),t.push(n/s));return e===(e|0)&&t.push(e),t.sort((i,r)=>i-r).pop(),t}function sP(n){return typeof n=="symbol"||typeof n=="object"&&n!==null&&!(Symbol.toPrimitive in n||"toString"in n||"valueOf"in n)}function bi(n){return!sP(n)&&!isNaN(parseFloat(n))&&isFinite(n)}function iP(n,t){const e=Math.round(n);return e-t<=n&&e+t>=n}function rP(n,t,e){let s,i,r;for(s=0,i=n.length;s<i;s++)r=n[s][e],isNaN(r)||(t.min=Math.min(t.min,r),t.max=Math.max(t.max,r))}function Tn(n){return n*(At/180)}function oP(n){return n*(180/At)}function Pf(n){if(!ge(n))return;let t=1,e=0;for(;Math.round(n*t)/t!==n;)t*=10,e++;return e}function L_(n,t){const e=t.x-n.x,s=t.y-n.y,i=Math.sqrt(e*e+s*s);let r=Math.atan2(s,e);return r<-.5*At&&(r+=Ot),{angle:r,distance:i}}function vc(n,t){return Math.sqrt(Math.pow(t.x-n.x,2)+Math.pow(t.y-n.y,2))}function aP(n,t){return(n-t+tP)%Ot-At}function ke(n){return(n%Ot+Ot)%Ot}function Mr(n,t,e,s){const i=ke(n),r=ke(t),o=ke(e),a=ke(r-i),l=ke(o-i),u=ke(i-r),h=ke(i-o);return i===r||i===o||s&&r===o||a>l&&u<h}function fe(n,t,e){return Math.max(t,Math.min(e,n))}function lP(n){return fe(n,-32768,32767)}function In(n,t,e,s=1e-6){return n>=Math.min(t,e)-s&&n<=Math.max(t,e)+s}function Bu(n,t,e){e=e||(o=>n[o]<t);let s=n.length-1,i=0,r;for(;s-i>1;)r=i+s>>1,e(r)?i=r:s=r;return{lo:i,hi:s}}const Is=(n,t,e,s)=>Bu(n,e,s?i=>{const r=n[i][t];return r<e||r===e&&n[i+1][t]===e}:i=>n[i][t]<e),cP=(n,t,e)=>Bu(n,e,s=>n[s][t]>=e);function uP(n,t,e){let s=0,i=n.length;for(;s<i&&n[s]<t;)s++;for(;i>s&&n[i-1]>e;)i--;return s>0||i<n.length?n.slice(s,i):n}const N_=["push","pop","shift","splice","unshift"];function hP(n,t){if(n._chartjs){n._chartjs.listeners.push(t);return}Object.defineProperty(n,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[t]}}),N_.forEach(e=>{const s="_onData"+Uu(e),i=n[e];Object.defineProperty(n,e,{configurable:!0,enumerable:!1,value(...r){const o=i.apply(this,r);return n._chartjs.listeners.forEach(a=>{typeof a[s]=="function"&&a[s](...r)}),o}})})}function kf(n,t){const e=n._chartjs;if(!e)return;const s=e.listeners,i=s.indexOf(t);i!==-1&&s.splice(i,1),!(s.length>0)&&(N_.forEach(r=>{delete n[r]}),delete n._chartjs)}function V_(n){const t=new Set(n);return t.size===n.length?n:Array.from(t)}const F_=(function(){return typeof window>"u"?function(n){return n()}:window.requestAnimationFrame})();function U_(n,t){let e=[],s=!1;return function(...i){e=i,s||(s=!0,F_.call(window,()=>{s=!1,n.apply(t,e)}))}}function dP(n,t){let e;return function(...s){return t?(clearTimeout(e),e=setTimeout(n,t,s)):n.apply(this,s),t}}const B_=n=>n==="start"?"left":n==="end"?"right":"center",Pe=(n,t,e)=>n==="start"?t:n==="end"?e:(t+e)/2,fP=(n,t,e,s)=>n===(s?"left":"right")?e:n==="center"?(t+e)/2:t;function $_(n,t,e){const s=t.length;let i=0,r=s;if(n._sorted){const{iScale:o,vScale:a,_parsed:l}=n,u=n.dataset&&n.dataset.options?n.dataset.options.spanGaps:null,h=o.axis,{min:d,max:p,minDefined:_,maxDefined:v}=o.getUserBounds();if(_){if(i=Math.min(Is(l,h,d).lo,e?s:Is(t,h,o.getPixelForValue(d)).lo),u){const E=l.slice(0,i+1).reverse().findIndex(w=>!_t(w[a.axis]));i-=Math.max(0,E)}i=fe(i,0,s-1)}if(v){let E=Math.max(Is(l,o.axis,p,!0).hi+1,e?0:Is(t,h,o.getPixelForValue(p),!0).hi+1);if(u){const w=l.slice(E-1).findIndex(P=>!_t(P[a.axis]));E+=Math.max(0,w)}r=fe(E,i,s)-i}else r=s-i}return{start:i,count:r}}function z_(n){const{xScale:t,yScale:e,_scaleRanges:s}=n,i={xmin:t.min,xmax:t.max,ymin:e.min,ymax:e.max};if(!s)return n._scaleRanges=i,!0;const r=s.xmin!==t.min||s.xmax!==t.max||s.ymin!==e.min||s.ymax!==e.max;return Object.assign(s,i),r}const vo=n=>n===0||n===1,Rf=(n,t,e)=>-(Math.pow(2,10*(n-=1))*Math.sin((n-t)*Ot/e)),Cf=(n,t,e)=>Math.pow(2,-10*n)*Math.sin((n-t)*Ot/e)+1,mr={linear:n=>n,easeInQuad:n=>n*n,easeOutQuad:n=>-n*(n-2),easeInOutQuad:n=>(n/=.5)<1?.5*n*n:-.5*(--n*(n-2)-1),easeInCubic:n=>n*n*n,easeOutCubic:n=>(n-=1)*n*n+1,easeInOutCubic:n=>(n/=.5)<1?.5*n*n*n:.5*((n-=2)*n*n+2),easeInQuart:n=>n*n*n*n,easeOutQuart:n=>-((n-=1)*n*n*n-1),easeInOutQuart:n=>(n/=.5)<1?.5*n*n*n*n:-.5*((n-=2)*n*n*n-2),easeInQuint:n=>n*n*n*n*n,easeOutQuint:n=>(n-=1)*n*n*n*n+1,easeInOutQuint:n=>(n/=.5)<1?.5*n*n*n*n*n:.5*((n-=2)*n*n*n*n+2),easeInSine:n=>-Math.cos(n*Qt)+1,easeOutSine:n=>Math.sin(n*Qt),easeInOutSine:n=>-.5*(Math.cos(At*n)-1),easeInExpo:n=>n===0?0:Math.pow(2,10*(n-1)),easeOutExpo:n=>n===1?1:-Math.pow(2,-10*n)+1,easeInOutExpo:n=>vo(n)?n:n<.5?.5*Math.pow(2,10*(n*2-1)):.5*(-Math.pow(2,-10*(n*2-1))+2),easeInCirc:n=>n>=1?n:-(Math.sqrt(1-n*n)-1),easeOutCirc:n=>Math.sqrt(1-(n-=1)*n),easeInOutCirc:n=>(n/=.5)<1?-.5*(Math.sqrt(1-n*n)-1):.5*(Math.sqrt(1-(n-=2)*n)+1),easeInElastic:n=>vo(n)?n:Rf(n,.075,.3),easeOutElastic:n=>vo(n)?n:Cf(n,.075,.3),easeInOutElastic(n){return vo(n)?n:n<.5?.5*Rf(n*2,.1125,.45):.5+.5*Cf(n*2-1,.1125,.45)},easeInBack(n){return n*n*((1.70158+1)*n-1.70158)},easeOutBack(n){return(n-=1)*n*((1.70158+1)*n+1.70158)+1},easeInOutBack(n){let t=1.70158;return(n/=.5)<1?.5*(n*n*(((t*=1.525)+1)*n-t)):.5*((n-=2)*n*(((t*=1.525)+1)*n+t)+2)},easeInBounce:n=>1-mr.easeOutBounce(1-n),easeOutBounce(n){return n<1/2.75?7.5625*n*n:n<2/2.75?7.5625*(n-=1.5/2.75)*n+.75:n<2.5/2.75?7.5625*(n-=2.25/2.75)*n+.9375:7.5625*(n-=2.625/2.75)*n+.984375},easeInOutBounce:n=>n<.5?mr.easeInBounce(n*2)*.5:mr.easeOutBounce(n*2-1)*.5+.5};function $u(n){if(n&&typeof n=="object"){const t=n.toString();return t==="[object CanvasPattern]"||t==="[object CanvasGradient]"}return!1}function Df(n){return $u(n)?n:new Rr(n)}function Ol(n){return $u(n)?n:new Rr(n).saturate(.5).darken(.1).hexString()}const pP=["x","y","borderWidth","radius","tension"],gP=["color","borderColor","backgroundColor"];function mP(n){n.set("animation",{delay:void 0,duration:1e3,easing:"easeOutQuart",fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0}),n.describe("animation",{_fallback:!1,_indexable:!1,_scriptable:t=>t!=="onProgress"&&t!=="onComplete"&&t!=="fn"}),n.set("animations",{colors:{type:"color",properties:gP},numbers:{type:"number",properties:pP}}),n.describe("animations",{_fallback:"animation"}),n.set("transitions",{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:"transparent"},visible:{type:"boolean",duration:0}}},hide:{animations:{colors:{to:"transparent"},visible:{type:"boolean",easing:"linear",fn:t=>t|0}}}})}function _P(n){n.set("layout",{autoPadding:!0,padding:{top:0,right:0,bottom:0,left:0}})}const Mf=new Map;function yP(n,t){t=t||{};const e=n+JSON.stringify(t);let s=Mf.get(e);return s||(s=new Intl.NumberFormat(n,t),Mf.set(e,s)),s}function zu(n,t,e){return yP(t,e).format(n)}const bP={values(n){return Xt(n)?n:""+n},numeric(n,t,e){if(n===0)return"0";const s=this.chart.options.locale;let i,r=n;if(e.length>1){const u=Math.max(Math.abs(e[0].value),Math.abs(e[e.length-1].value));(u<1e-4||u>1e15)&&(i="scientific"),r=vP(n,e)}const o=O_(Math.abs(r)),a=isNaN(o)?1:Math.max(Math.min(-1*Math.floor(o),20),0),l={notation:i,minimumFractionDigits:a,maximumFractionDigits:a};return Object.assign(l,this.options.ticks.format),zu(n,s,l)}};function vP(n,t){let e=t.length>3?t[2].value-t[1].value:t[1].value-t[0].value;return Math.abs(e)>=1&&n!==Math.floor(n)&&(e=n-Math.floor(n)),e}var j_={formatters:bP};function wP(n){n.set("scale",{display:!0,offset:!1,reverse:!1,beginAtZero:!1,bounds:"ticks",clip:!0,grace:0,grid:{display:!0,lineWidth:1,drawOnChartArea:!0,drawTicks:!0,tickLength:8,tickWidth:(t,e)=>e.lineWidth,tickColor:(t,e)=>e.color,offset:!1},border:{display:!0,dash:[],dashOffset:0,width:1},title:{display:!1,text:"",padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:!1,textStrokeWidth:0,textStrokeColor:"",padding:3,display:!0,autoSkip:!0,autoSkipPadding:3,labelOffset:0,callback:j_.formatters.values,minor:{},major:{},align:"center",crossAlign:"near",showLabelBackdrop:!1,backdropColor:"rgba(255, 255, 255, 0.75)",backdropPadding:2}}),n.route("scale.ticks","color","","color"),n.route("scale.grid","color","","borderColor"),n.route("scale.border","color","","borderColor"),n.route("scale.title","color","","color"),n.describe("scale",{_fallback:!1,_scriptable:t=>!t.startsWith("before")&&!t.startsWith("after")&&t!=="callback"&&t!=="parser",_indexable:t=>t!=="borderDash"&&t!=="tickBorderDash"&&t!=="dash"}),n.describe("scales",{_fallback:"scale"}),n.describe("scale.ticks",{_scriptable:t=>t!=="backdropPadding"&&t!=="callback",_indexable:t=>t!=="backdropPadding"})}const Fs=Object.create(null),wc=Object.create(null);function _r(n,t){if(!t)return n;const e=t.split(".");for(let s=0,i=e.length;s<i;++s){const r=e[s];n=n[r]||(n[r]=Object.create(null))}return n}function Ll(n,t,e){return typeof t=="string"?Cr(_r(n,t),e):Cr(_r(n,""),t)}class EP{constructor(t,e){this.animation=void 0,this.backgroundColor="rgba(0,0,0,0.1)",this.borderColor="rgba(0,0,0,0.1)",this.color="#666",this.datasets={},this.devicePixelRatio=s=>s.chart.platform.getDevicePixelRatio(),this.elements={},this.events=["mousemove","mouseout","click","touchstart","touchmove"],this.font={family:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",size:12,style:"normal",lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(s,i)=>Ol(i.backgroundColor),this.hoverBorderColor=(s,i)=>Ol(i.borderColor),this.hoverColor=(s,i)=>Ol(i.color),this.indexAxis="x",this.interaction={mode:"nearest",intersect:!0,includeInvisible:!1},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(t),this.apply(e)}set(t,e){return Ll(this,t,e)}get(t){return _r(this,t)}describe(t,e){return Ll(wc,t,e)}override(t,e){return Ll(Fs,t,e)}route(t,e,s,i){const r=_r(this,t),o=_r(this,s),a="_"+e;Object.defineProperties(r,{[a]:{value:r[e],writable:!0},[e]:{enumerable:!0,get(){const l=this[a],u=o[i];return ht(l)?Object.assign({},u,l):st(l,u)},set(l){this[a]=l}}})}apply(t){t.forEach(e=>e(this))}}var jt=new EP({_scriptable:n=>!n.startsWith("on"),_indexable:n=>n!=="events",hover:{_fallback:"interaction"},interaction:{_scriptable:!1,_indexable:!1}},[mP,_P,wP]);function TP(n){return!n||_t(n.size)||_t(n.family)?null:(n.style?n.style+" ":"")+(n.weight?n.weight+" ":"")+n.size+"px "+n.family}function Of(n,t,e,s,i){let r=t[i];return r||(r=t[i]=n.measureText(i).width,e.push(i)),r>s&&(s=r),s}function _s(n,t,e){const s=n.currentDevicePixelRatio,i=e!==0?Math.max(e/2,.5):0;return Math.round((t-i)*s)/s+i}function Lf(n,t){!t&&!n||(t=t||n.getContext("2d"),t.save(),t.resetTransform(),t.clearRect(0,0,n.width,n.height),t.restore())}function Ec(n,t,e,s){H_(n,t,e,s,null)}function H_(n,t,e,s,i){let r,o,a,l,u,h,d,p;const _=t.pointStyle,v=t.rotation,E=t.radius;let w=(v||0)*eP;if(_&&typeof _=="object"&&(r=_.toString(),r==="[object HTMLImageElement]"||r==="[object HTMLCanvasElement]")){n.save(),n.translate(e,s),n.rotate(w),n.drawImage(_,-_.width/2,-_.height/2,_.width,_.height),n.restore();return}if(!(isNaN(E)||E<=0)){switch(n.beginPath(),_){default:i?n.ellipse(e,s,i/2,E,0,0,Ot):n.arc(e,s,E,0,Ot),n.closePath();break;case"triangle":h=i?i/2:E,n.moveTo(e+Math.sin(w)*h,s-Math.cos(w)*E),w+=xf,n.lineTo(e+Math.sin(w)*h,s-Math.cos(w)*E),w+=xf,n.lineTo(e+Math.sin(w)*h,s-Math.cos(w)*E),n.closePath();break;case"rectRounded":u=E*.516,l=E-u,o=Math.cos(w+ms)*l,d=Math.cos(w+ms)*(i?i/2-u:l),a=Math.sin(w+ms)*l,p=Math.sin(w+ms)*(i?i/2-u:l),n.arc(e-d,s-a,u,w-At,w-Qt),n.arc(e+p,s-o,u,w-Qt,w),n.arc(e+d,s+a,u,w,w+Qt),n.arc(e-p,s+o,u,w+Qt,w+At),n.closePath();break;case"rect":if(!v){l=Math.SQRT1_2*E,h=i?i/2:l,n.rect(e-h,s-l,2*h,2*l);break}w+=ms;case"rectRot":d=Math.cos(w)*(i?i/2:E),o=Math.cos(w)*E,a=Math.sin(w)*E,p=Math.sin(w)*(i?i/2:E),n.moveTo(e-d,s-a),n.lineTo(e+p,s-o),n.lineTo(e+d,s+a),n.lineTo(e-p,s+o),n.closePath();break;case"crossRot":w+=ms;case"cross":d=Math.cos(w)*(i?i/2:E),o=Math.cos(w)*E,a=Math.sin(w)*E,p=Math.sin(w)*(i?i/2:E),n.moveTo(e-d,s-a),n.lineTo(e+d,s+a),n.moveTo(e+p,s-o),n.lineTo(e-p,s+o);break;case"star":d=Math.cos(w)*(i?i/2:E),o=Math.cos(w)*E,a=Math.sin(w)*E,p=Math.sin(w)*(i?i/2:E),n.moveTo(e-d,s-a),n.lineTo(e+d,s+a),n.moveTo(e+p,s-o),n.lineTo(e-p,s+o),w+=ms,d=Math.cos(w)*(i?i/2:E),o=Math.cos(w)*E,a=Math.sin(w)*E,p=Math.sin(w)*(i?i/2:E),n.moveTo(e-d,s-a),n.lineTo(e+d,s+a),n.moveTo(e+p,s-o),n.lineTo(e-p,s+o);break;case"line":o=i?i/2:Math.cos(w)*E,a=Math.sin(w)*E,n.moveTo(e-o,s-a),n.lineTo(e+o,s+a);break;case"dash":n.moveTo(e,s),n.lineTo(e+Math.cos(w)*(i?i/2:E),s+Math.sin(w)*E);break;case!1:n.closePath();break}n.fill(),t.borderWidth>0&&n.stroke()}}function Or(n,t,e){return e=e||.5,!t||n&&n.x>t.left-e&&n.x<t.right+e&&n.y>t.top-e&&n.y<t.bottom+e}function Xa(n,t){n.save(),n.beginPath(),n.rect(t.left,t.top,t.right-t.left,t.bottom-t.top),n.clip()}function Qa(n){n.restore()}function IP(n,t,e,s,i){if(!t)return n.lineTo(e.x,e.y);if(i==="middle"){const r=(t.x+e.x)/2;n.lineTo(r,t.y),n.lineTo(r,e.y)}else i==="after"!=!!s?n.lineTo(t.x,e.y):n.lineTo(e.x,t.y);n.lineTo(e.x,e.y)}function SP(n,t,e,s){if(!t)return n.lineTo(e.x,e.y);n.bezierCurveTo(s?t.cp1x:t.cp2x,s?t.cp1y:t.cp2y,s?e.cp2x:e.cp1x,s?e.cp2y:e.cp1y,e.x,e.y)}function xP(n,t){t.translation&&n.translate(t.translation[0],t.translation[1]),_t(t.rotation)||n.rotate(t.rotation),t.color&&(n.fillStyle=t.color),t.textAlign&&(n.textAlign=t.textAlign),t.textBaseline&&(n.textBaseline=t.textBaseline)}function AP(n,t,e,s,i){if(i.strikethrough||i.underline){const r=n.measureText(s),o=t-r.actualBoundingBoxLeft,a=t+r.actualBoundingBoxRight,l=e-r.actualBoundingBoxAscent,u=e+r.actualBoundingBoxDescent,h=i.strikethrough?(l+u)/2:u;n.strokeStyle=n.fillStyle,n.beginPath(),n.lineWidth=i.decorationWidth||2,n.moveTo(o,h),n.lineTo(a,h),n.stroke()}}function PP(n,t){const e=n.fillStyle;n.fillStyle=t.color,n.fillRect(t.left,t.top,t.width,t.height),n.fillStyle=e}function va(n,t,e,s,i,r={}){const o=Xt(t)?t:[t],a=r.strokeWidth>0&&r.strokeColor!=="";let l,u;for(n.save(),n.font=i.string,xP(n,r),l=0;l<o.length;++l)u=o[l],r.backdrop&&PP(n,r.backdrop),a&&(r.strokeColor&&(n.strokeStyle=r.strokeColor),_t(r.strokeWidth)||(n.lineWidth=r.strokeWidth),n.strokeText(u,e,s,r.maxWidth)),n.fillText(u,e,s,r.maxWidth),AP(n,e,s,u,r),s+=Number(i.lineHeight);n.restore()}function wa(n,t){const{x:e,y:s,w:i,h:r,radius:o}=t;n.arc(e+o.topLeft,s+o.topLeft,o.topLeft,1.5*At,At,!0),n.lineTo(e,s+r-o.bottomLeft),n.arc(e+o.bottomLeft,s+r-o.bottomLeft,o.bottomLeft,At,Qt,!0),n.lineTo(e+i-o.bottomRight,s+r),n.arc(e+i-o.bottomRight,s+r-o.bottomRight,o.bottomRight,Qt,0,!0),n.lineTo(e+i,s+o.topRight),n.arc(e+i-o.topRight,s+o.topRight,o.topRight,0,-Qt,!0),n.lineTo(e+o.topLeft,s)}const kP=/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,RP=/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;function CP(n,t){const e=(""+n).match(kP);if(!e||e[1]==="normal")return t*1.2;switch(n=+e[2],e[3]){case"px":return n;case"%":n/=100;break}return t*n}const DP=n=>+n||0;function ju(n,t){const e={},s=ht(t),i=s?Object.keys(t):t,r=ht(n)?s?o=>st(n[o],n[t[o]]):o=>n[o]:()=>n;for(const o of i)e[o]=DP(r(o));return e}function q_(n){return ju(n,{top:"y",right:"x",bottom:"y",left:"x"})}function hi(n){return ju(n,["topLeft","topRight","bottomLeft","bottomRight"])}function Ke(n){const t=q_(n);return t.width=t.left+t.right,t.height=t.top+t.bottom,t}function Ee(n,t){n=n||{},t=t||jt.font;let e=st(n.size,t.size);typeof e=="string"&&(e=parseInt(e,10));let s=st(n.style,t.style);s&&!(""+s).match(RP)&&(console.warn('Invalid font style specified: "'+s+'"'),s=void 0);const i={family:st(n.family,t.family),lineHeight:CP(st(n.lineHeight,t.lineHeight),e),size:e,style:s,weight:st(n.weight,t.weight),string:""};return i.string=TP(i),i}function wo(n,t,e,s){let i,r,o;for(i=0,r=n.length;i<r;++i)if(o=n[i],o!==void 0&&o!==void 0)return o}function MP(n,t,e){const{min:s,max:i}=n,r=D_(t,(i-s)/2),o=(a,l)=>e&&a===0?0:a+l;return{min:o(s,-Math.abs(r)),max:o(i,r)}}function qs(n,t){return Object.assign(Object.create(n),t)}function Hu(n,t=[""],e,s,i=()=>n[0]){const r=e||n;typeof s>"u"&&(s=Y_("_fallback",n));const o={[Symbol.toStringTag]:"Object",_cacheable:!0,_scopes:n,_rootScopes:r,_fallback:s,_getTarget:i,override:a=>Hu([a,...n],t,r,s)};return new Proxy(o,{deleteProperty(a,l){return delete a[l],delete a._keys,delete n[0][l],!0},get(a,l){return K_(a,l,()=>$P(l,t,n,a))},getOwnPropertyDescriptor(a,l){return Reflect.getOwnPropertyDescriptor(a._scopes[0],l)},getPrototypeOf(){return Reflect.getPrototypeOf(n[0])},has(a,l){return Vf(a).includes(l)},ownKeys(a){return Vf(a)},set(a,l,u){const h=a._storage||(a._storage=i());return a[l]=h[l]=u,delete a._keys,!0}})}function vi(n,t,e,s){const i={_cacheable:!1,_proxy:n,_context:t,_subProxy:e,_stack:new Set,_descriptors:W_(n,s),setContext:r=>vi(n,r,e,s),override:r=>vi(n.override(r),t,e,s)};return new Proxy(i,{deleteProperty(r,o){return delete r[o],delete n[o],!0},get(r,o,a){return K_(r,o,()=>LP(r,o,a))},getOwnPropertyDescriptor(r,o){return r._descriptors.allKeys?Reflect.has(n,o)?{enumerable:!0,configurable:!0}:void 0:Reflect.getOwnPropertyDescriptor(n,o)},getPrototypeOf(){return Reflect.getPrototypeOf(n)},has(r,o){return Reflect.has(n,o)},ownKeys(){return Reflect.ownKeys(n)},set(r,o,a){return n[o]=a,delete r[o],!0}})}function W_(n,t={scriptable:!0,indexable:!0}){const{_scriptable:e=t.scriptable,_indexable:s=t.indexable,_allKeys:i=t.allKeys}=n;return{allKeys:i,scriptable:e,indexable:s,isScriptable:cs(e)?e:()=>e,isIndexable:cs(s)?s:()=>s}}const OP=(n,t)=>n?n+Uu(t):t,qu=(n,t)=>ht(t)&&n!=="adapters"&&(Object.getPrototypeOf(t)===null||t.constructor===Object);function K_(n,t,e){if(Object.prototype.hasOwnProperty.call(n,t)||t==="constructor")return n[t];const s=e();return n[t]=s,s}function LP(n,t,e){const{_proxy:s,_context:i,_subProxy:r,_descriptors:o}=n;let a=s[t];return cs(a)&&o.isScriptable(t)&&(a=NP(t,a,n,e)),Xt(a)&&a.length&&(a=VP(t,a,n,o.isIndexable)),qu(t,a)&&(a=vi(a,i,r&&r[t],o)),a}function NP(n,t,e,s){const{_proxy:i,_context:r,_subProxy:o,_stack:a}=e;if(a.has(n))throw new Error("Recursion detected: "+Array.from(a).join("->")+"->"+n);a.add(n);let l=t(r,o||s);return a.delete(n),qu(n,l)&&(l=Wu(i._scopes,i,n,l)),l}function VP(n,t,e,s){const{_proxy:i,_context:r,_subProxy:o,_descriptors:a}=e;if(typeof r.index<"u"&&s(n))return t[r.index%t.length];if(ht(t[0])){const l=t,u=i._scopes.filter(h=>h!==l);t=[];for(const h of l){const d=Wu(u,i,n,h);t.push(vi(d,r,o&&o[n],a))}}return t}function G_(n,t,e){return cs(n)?n(t,e):n}const FP=(n,t)=>n===!0?t:typeof n=="string"?Vs(t,n):void 0;function UP(n,t,e,s,i){for(const r of t){const o=FP(e,r);if(o){n.add(o);const a=G_(o._fallback,e,i);if(typeof a<"u"&&a!==e&&a!==s)return a}else if(o===!1&&typeof s<"u"&&e!==s)return null}return!1}function Wu(n,t,e,s){const i=t._rootScopes,r=G_(t._fallback,e,s),o=[...n,...i],a=new Set;a.add(s);let l=Nf(a,o,e,r||e,s);return l===null||typeof r<"u"&&r!==e&&(l=Nf(a,o,r,l,s),l===null)?!1:Hu(Array.from(a),[""],i,r,()=>BP(t,e,s))}function Nf(n,t,e,s,i){for(;e;)e=UP(n,t,e,s,i);return e}function BP(n,t,e){const s=n._getTarget();t in s||(s[t]={});const i=s[t];return Xt(i)&&ht(e)?e:i||{}}function $P(n,t,e,s){let i;for(const r of t)if(i=Y_(OP(r,n),e),typeof i<"u")return qu(n,i)?Wu(e,s,n,i):i}function Y_(n,t){for(const e of t){if(!e)continue;const s=e[n];if(typeof s<"u")return s}}function Vf(n){let t=n._keys;return t||(t=n._keys=zP(n._scopes)),t}function zP(n){const t=new Set;for(const e of n)for(const s of Object.keys(e).filter(i=>!i.startsWith("_")))t.add(s);return Array.from(t)}const jP=Number.EPSILON||1e-14,wi=(n,t)=>t<n.length&&!n[t].skip&&n[t],X_=n=>n==="x"?"y":"x";function HP(n,t,e,s){const i=n.skip?t:n,r=t,o=e.skip?t:e,a=vc(r,i),l=vc(o,r);let u=a/(a+l),h=l/(a+l);u=isNaN(u)?0:u,h=isNaN(h)?0:h;const d=s*u,p=s*h;return{previous:{x:r.x-d*(o.x-i.x),y:r.y-d*(o.y-i.y)},next:{x:r.x+p*(o.x-i.x),y:r.y+p*(o.y-i.y)}}}function qP(n,t,e){const s=n.length;let i,r,o,a,l,u=wi(n,0);for(let h=0;h<s-1;++h)if(l=u,u=wi(n,h+1),!(!l||!u)){if(gr(t[h],0,jP)){e[h]=e[h+1]=0;continue}i=e[h]/t[h],r=e[h+1]/t[h],a=Math.pow(i,2)+Math.pow(r,2),!(a<=9)&&(o=3/Math.sqrt(a),e[h]=i*o*t[h],e[h+1]=r*o*t[h])}}function WP(n,t,e="x"){const s=X_(e),i=n.length;let r,o,a,l=wi(n,0);for(let u=0;u<i;++u){if(o=a,a=l,l=wi(n,u+1),!a)continue;const h=a[e],d=a[s];o&&(r=(h-o[e])/3,a[`cp1${e}`]=h-r,a[`cp1${s}`]=d-r*t[u]),l&&(r=(l[e]-h)/3,a[`cp2${e}`]=h+r,a[`cp2${s}`]=d+r*t[u])}}function KP(n,t="x"){const e=X_(t),s=n.length,i=Array(s).fill(0),r=Array(s);let o,a,l,u=wi(n,0);for(o=0;o<s;++o)if(a=l,l=u,u=wi(n,o+1),!!l){if(u){const h=u[t]-l[t];i[o]=h!==0?(u[e]-l[e])/h:0}r[o]=a?u?on(i[o-1])!==on(i[o])?0:(i[o-1]+i[o])/2:i[o-1]:i[o]}qP(n,i,r),WP(n,r,t)}function Eo(n,t,e){return Math.max(Math.min(n,e),t)}function GP(n,t){let e,s,i,r,o,a=Or(n[0],t);for(e=0,s=n.length;e<s;++e)o=r,r=a,a=e<s-1&&Or(n[e+1],t),r&&(i=n[e],o&&(i.cp1x=Eo(i.cp1x,t.left,t.right),i.cp1y=Eo(i.cp1y,t.top,t.bottom)),a&&(i.cp2x=Eo(i.cp2x,t.left,t.right),i.cp2y=Eo(i.cp2y,t.top,t.bottom)))}function YP(n,t,e,s,i){let r,o,a,l;if(t.spanGaps&&(n=n.filter(u=>!u.skip)),t.cubicInterpolationMode==="monotone")KP(n,i);else{let u=s?n[n.length-1]:n[0];for(r=0,o=n.length;r<o;++r)a=n[r],l=HP(u,a,n[Math.min(r+1,o-(s?0:1))%o],t.tension),a.cp1x=l.previous.x,a.cp1y=l.previous.y,a.cp2x=l.next.x,a.cp2y=l.next.y,u=a}t.capBezierPoints&&GP(n,e)}function Ku(){return typeof window<"u"&&typeof document<"u"}function Gu(n){let t=n.parentNode;return t&&t.toString()==="[object ShadowRoot]"&&(t=t.host),t}function Ea(n,t,e){let s;return typeof n=="string"?(s=parseInt(n,10),n.indexOf("%")!==-1&&(s=s/100*t.parentNode[e])):s=n,s}const Ja=n=>n.ownerDocument.defaultView.getComputedStyle(n,null);function XP(n,t){return Ja(n).getPropertyValue(t)}const QP=["top","right","bottom","left"];function Ps(n,t,e){const s={};e=e?"-"+e:"";for(let i=0;i<4;i++){const r=QP[i];s[r]=parseFloat(n[t+"-"+r+e])||0}return s.width=s.left+s.right,s.height=s.top+s.bottom,s}const JP=(n,t,e)=>(n>0||t>0)&&(!e||!e.shadowRoot);function ZP(n,t){const e=n.touches,s=e&&e.length?e[0]:n,{offsetX:i,offsetY:r}=s;let o=!1,a,l;if(JP(i,r,n.target))a=i,l=r;else{const u=t.getBoundingClientRect();a=s.clientX-u.left,l=s.clientY-u.top,o=!0}return{x:a,y:l,box:o}}function vs(n,t){if("native"in n)return n;const{canvas:e,currentDevicePixelRatio:s}=t,i=Ja(e),r=i.boxSizing==="border-box",o=Ps(i,"padding"),a=Ps(i,"border","width"),{x:l,y:u,box:h}=ZP(n,e),d=o.left+(h&&a.left),p=o.top+(h&&a.top);let{width:_,height:v}=t;return r&&(_-=o.width+a.width,v-=o.height+a.height),{x:Math.round((l-d)/_*e.width/s),y:Math.round((u-p)/v*e.height/s)}}function tk(n,t,e){let s,i;if(t===void 0||e===void 0){const r=n&&Gu(n);if(!r)t=n.clientWidth,e=n.clientHeight;else{const o=r.getBoundingClientRect(),a=Ja(r),l=Ps(a,"border","width"),u=Ps(a,"padding");t=o.width-u.width-l.width,e=o.height-u.height-l.height,s=Ea(a.maxWidth,r,"clientWidth"),i=Ea(a.maxHeight,r,"clientHeight")}}return{width:t,height:e,maxWidth:s||ba,maxHeight:i||ba}}const Wn=n=>Math.round(n*10)/10;function ek(n,t,e,s){const i=Ja(n),r=Ps(i,"margin"),o=Ea(i.maxWidth,n,"clientWidth")||ba,a=Ea(i.maxHeight,n,"clientHeight")||ba,l=tk(n,t,e);let{width:u,height:h}=l;if(i.boxSizing==="content-box"){const p=Ps(i,"border","width"),_=Ps(i,"padding");u-=_.width+p.width,h-=_.height+p.height}return u=Math.max(0,u-r.width),h=Math.max(0,s?u/s:h-r.height),u=Wn(Math.min(u,o,l.maxWidth)),h=Wn(Math.min(h,a,l.maxHeight)),u&&!h&&(h=Wn(u/2)),(t!==void 0||e!==void 0)&&s&&l.height&&h>l.height&&(h=l.height,u=Wn(Math.floor(h*s))),{width:u,height:h}}function Ff(n,t,e){const s=t||1,i=Wn(n.height*s),r=Wn(n.width*s);n.height=Wn(n.height),n.width=Wn(n.width);const o=n.canvas;return o.style&&(e||!o.style.height&&!o.style.width)&&(o.style.height=`${n.height}px`,o.style.width=`${n.width}px`),n.currentDevicePixelRatio!==s||o.height!==i||o.width!==r?(n.currentDevicePixelRatio=s,o.height=i,o.width=r,n.ctx.setTransform(s,0,0,s,0,0),!0):!1}const nk=(function(){let n=!1;try{const t={get passive(){return n=!0,!1}};Ku()&&(window.addEventListener("test",null,t),window.removeEventListener("test",null,t))}catch{}return n})();function Uf(n,t){const e=XP(n,t),s=e&&e.match(/^(\d+)(\.\d+)?px$/);return s?+s[1]:void 0}function ws(n,t,e,s){return{x:n.x+e*(t.x-n.x),y:n.y+e*(t.y-n.y)}}function sk(n,t,e,s){return{x:n.x+e*(t.x-n.x),y:s==="middle"?e<.5?n.y:t.y:s==="after"?e<1?n.y:t.y:e>0?t.y:n.y}}function ik(n,t,e,s){const i={x:n.cp2x,y:n.cp2y},r={x:t.cp1x,y:t.cp1y},o=ws(n,i,e),a=ws(i,r,e),l=ws(r,t,e),u=ws(o,a,e),h=ws(a,l,e);return ws(u,h,e)}const rk=function(n,t){return{x(e){return n+n+t-e},setWidth(e){t=e},textAlign(e){return e==="center"?e:e==="right"?"left":"right"},xPlus(e,s){return e-s},leftForLtr(e,s){return e-s}}},ok=function(){return{x(n){return n},setWidth(n){},textAlign(n){return n},xPlus(n,t){return n+t},leftForLtr(n,t){return n}}};function di(n,t,e){return n?rk(t,e):ok()}function Q_(n,t){let e,s;(t==="ltr"||t==="rtl")&&(e=n.canvas.style,s=[e.getPropertyValue("direction"),e.getPropertyPriority("direction")],e.setProperty("direction",t,"important"),n.prevTextDirection=s)}function J_(n,t){t!==void 0&&(delete n.prevTextDirection,n.canvas.style.setProperty("direction",t[0],t[1]))}function Z_(n){return n==="angle"?{between:Mr,compare:aP,normalize:ke}:{between:In,compare:(t,e)=>t-e,normalize:t=>t}}function Bf({start:n,end:t,count:e,loop:s,style:i}){return{start:n%e,end:t%e,loop:s&&(t-n+1)%e===0,style:i}}function ak(n,t,e){const{property:s,start:i,end:r}=e,{between:o,normalize:a}=Z_(s),l=t.length;let{start:u,end:h,loop:d}=n,p,_;if(d){for(u+=l,h+=l,p=0,_=l;p<_&&o(a(t[u%l][s]),i,r);++p)u--,h--;u%=l,h%=l}return h<u&&(h+=l),{start:u,end:h,loop:d,style:n.style}}function ty(n,t,e){if(!e)return[n];const{property:s,start:i,end:r}=e,o=t.length,{compare:a,between:l,normalize:u}=Z_(s),{start:h,end:d,loop:p,style:_}=ak(n,t,e),v=[];let E=!1,w=null,P,R,k;const C=()=>l(i,k,P)&&a(i,k)!==0,M=()=>a(r,P)===0||l(r,k,P),L=()=>E||C(),S=()=>!E||M();for(let g=h,y=h;g<=d;++g)R=t[g%o],!R.skip&&(P=u(R[s]),P!==k&&(E=l(P,i,r),w===null&&L()&&(w=a(P,i)===0?g:y),w!==null&&S()&&(v.push(Bf({start:w,end:g,loop:p,count:o,style:_})),w=null),y=g,k=P));return w!==null&&v.push(Bf({start:w,end:d,loop:p,count:o,style:_})),v}function ey(n,t){const e=[],s=n.segments;for(let i=0;i<s.length;i++){const r=ty(s[i],n.points,t);r.length&&e.push(...r)}return e}function lk(n,t,e,s){let i=0,r=t-1;if(e&&!s)for(;i<t&&!n[i].skip;)i++;for(;i<t&&n[i].skip;)i++;for(i%=t,e&&(r+=i);r>i&&n[r%t].skip;)r--;return r%=t,{start:i,end:r}}function ck(n,t,e,s){const i=n.length,r=[];let o=t,a=n[t],l;for(l=t+1;l<=e;++l){const u=n[l%i];u.skip||u.stop?a.skip||(s=!1,r.push({start:t%i,end:(l-1)%i,loop:s}),t=o=u.stop?l:null):(o=l,a.skip&&(t=l)),a=u}return o!==null&&r.push({start:t%i,end:o%i,loop:s}),r}function uk(n,t){const e=n.points,s=n.options.spanGaps,i=e.length;if(!i)return[];const r=!!n._loop,{start:o,end:a}=lk(e,i,r,s);if(s===!0)return $f(n,[{start:o,end:a,loop:r}],e,t);const l=a<o?a+i:a,u=!!n._fullLoop&&o===0&&a===i-1;return $f(n,ck(e,o,l,u),e,t)}function $f(n,t,e,s){return!s||!s.setContext||!e?t:hk(n,t,e,s)}function hk(n,t,e,s){const i=n._chart.getContext(),r=zf(n.options),{_datasetIndex:o,options:{spanGaps:a}}=n,l=e.length,u=[];let h=r,d=t[0].start,p=d;function _(v,E,w,P){const R=a?-1:1;if(v!==E){for(v+=l;e[v%l].skip;)v-=R;for(;e[E%l].skip;)E+=R;v%l!==E%l&&(u.push({start:v%l,end:E%l,loop:w,style:P}),h=P,d=E%l)}}for(const v of t){d=a?d:v.start;let E=e[d%l],w;for(p=d+1;p<=v.end;p++){const P=e[p%l];w=zf(s.setContext(qs(i,{type:"segment",p0:E,p1:P,p0DataIndex:(p-1)%l,p1DataIndex:p%l,datasetIndex:o}))),dk(w,h)&&_(d,p-1,v.loop,h),E=P,h=w}d<p-1&&_(d,p-1,v.loop,h)}return u}function zf(n){return{backgroundColor:n.backgroundColor,borderCapStyle:n.borderCapStyle,borderDash:n.borderDash,borderDashOffset:n.borderDashOffset,borderJoinStyle:n.borderJoinStyle,borderWidth:n.borderWidth,borderColor:n.borderColor}}function dk(n,t){if(!t)return!1;const e=[],s=function(i,r){return $u(r)?(e.includes(r)||e.push(r),e.indexOf(r)):r};return JSON.stringify(n,s)!==JSON.stringify(t,s)}function To(n,t,e){return n.options.clip?n[e]:t[e]}function fk(n,t){const{xScale:e,yScale:s}=n;return e&&s?{left:To(e,t,"left"),right:To(e,t,"right"),top:To(s,t,"top"),bottom:To(s,t,"bottom")}:t}function ny(n,t){const e=t._clip;if(e.disabled)return!1;const s=fk(t,n.chartArea);return{left:e.left===!1?0:s.left-(e.left===!0?0:e.left),right:e.right===!1?n.width:s.right+(e.right===!0?0:e.right),top:e.top===!1?0:s.top-(e.top===!0?0:e.top),bottom:e.bottom===!1?n.height:s.bottom+(e.bottom===!0?0:e.bottom)}}/*!
 * Chart.js v4.5.1
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */class pk{constructor(){this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}_notify(t,e,s,i){const r=e.listeners[i],o=e.duration;r.forEach(a=>a({chart:t,initial:e.initial,numSteps:o,currentStep:Math.min(s-e.start,o)}))}_refresh(){this._request||(this._running=!0,this._request=F_.call(window,()=>{this._update(),this._request=null,this._running&&this._refresh()}))}_update(t=Date.now()){let e=0;this._charts.forEach((s,i)=>{if(!s.running||!s.items.length)return;const r=s.items;let o=r.length-1,a=!1,l;for(;o>=0;--o)l=r[o],l._active?(l._total>s.duration&&(s.duration=l._total),l.tick(t),a=!0):(r[o]=r[r.length-1],r.pop());a&&(i.draw(),this._notify(i,s,t,"progress")),r.length||(s.running=!1,this._notify(i,s,t,"complete"),s.initial=!1),e+=r.length}),this._lastDate=t,e===0&&(this._running=!1)}_getAnims(t){const e=this._charts;let s=e.get(t);return s||(s={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},e.set(t,s)),s}listen(t,e,s){this._getAnims(t).listeners[e].push(s)}add(t,e){!e||!e.length||this._getAnims(t).items.push(...e)}has(t){return this._getAnims(t).items.length>0}start(t){const e=this._charts.get(t);e&&(e.running=!0,e.start=Date.now(),e.duration=e.items.reduce((s,i)=>Math.max(s,i._duration),0),this._refresh())}running(t){if(!this._running)return!1;const e=this._charts.get(t);return!(!e||!e.running||!e.items.length)}stop(t){const e=this._charts.get(t);if(!e||!e.items.length)return;const s=e.items;let i=s.length-1;for(;i>=0;--i)s[i].cancel();e.items=[],this._notify(t,e,Date.now(),"complete")}remove(t){return this._charts.delete(t)}}var mn=new pk;const jf="transparent",gk={boolean(n,t,e){return e>.5?t:n},color(n,t,e){const s=Df(n||jf),i=s.valid&&Df(t||jf);return i&&i.valid?i.mix(s,e).hexString():t},number(n,t,e){return n+(t-n)*e}};class mk{constructor(t,e,s,i){const r=e[s];i=wo([t.to,i,r,t.from]);const o=wo([t.from,r,i]);this._active=!0,this._fn=t.fn||gk[t.type||typeof o],this._easing=mr[t.easing]||mr.linear,this._start=Math.floor(Date.now()+(t.delay||0)),this._duration=this._total=Math.floor(t.duration),this._loop=!!t.loop,this._target=e,this._prop=s,this._from=o,this._to=i,this._promises=void 0}active(){return this._active}update(t,e,s){if(this._active){this._notify(!1);const i=this._target[this._prop],r=s-this._start,o=this._duration-r;this._start=s,this._duration=Math.floor(Math.max(o,t.duration)),this._total+=r,this._loop=!!t.loop,this._to=wo([t.to,e,i,t.from]),this._from=wo([t.from,i,e])}}cancel(){this._active&&(this.tick(Date.now()),this._active=!1,this._notify(!1))}tick(t){const e=t-this._start,s=this._duration,i=this._prop,r=this._from,o=this._loop,a=this._to;let l;if(this._active=r!==a&&(o||e<s),!this._active){this._target[i]=a,this._notify(!0);return}if(e<0){this._target[i]=r;return}l=e/s%2,l=o&&l>1?2-l:l,l=this._easing(Math.min(1,Math.max(0,l))),this._target[i]=this._fn(r,a,l)}wait(){const t=this._promises||(this._promises=[]);return new Promise((e,s)=>{t.push({res:e,rej:s})})}_notify(t){const e=t?"res":"rej",s=this._promises||[];for(let i=0;i<s.length;i++)s[i][e]()}}class sy{constructor(t,e){this._chart=t,this._properties=new Map,this.configure(e)}configure(t){if(!ht(t))return;const e=Object.keys(jt.animation),s=this._properties;Object.getOwnPropertyNames(t).forEach(i=>{const r=t[i];if(!ht(r))return;const o={};for(const a of e)o[a]=r[a];(Xt(r.properties)&&r.properties||[i]).forEach(a=>{(a===i||!s.has(a))&&s.set(a,o)})})}_animateOptions(t,e){const s=e.options,i=yk(t,s);if(!i)return[];const r=this._createAnimations(i,s);return s.$shared&&_k(t.options.$animations,s).then(()=>{t.options=s},()=>{}),r}_createAnimations(t,e){const s=this._properties,i=[],r=t.$animations||(t.$animations={}),o=Object.keys(e),a=Date.now();let l;for(l=o.length-1;l>=0;--l){const u=o[l];if(u.charAt(0)==="$")continue;if(u==="options"){i.push(...this._animateOptions(t,e));continue}const h=e[u];let d=r[u];const p=s.get(u);if(d)if(p&&d.active()){d.update(p,h,a);continue}else d.cancel();if(!p||!p.duration){t[u]=h;continue}r[u]=d=new mk(p,t,u,h),i.push(d)}return i}update(t,e){if(this._properties.size===0){Object.assign(t,e);return}const s=this._createAnimations(t,e);if(s.length)return mn.add(this._chart,s),!0}}function _k(n,t){const e=[],s=Object.keys(t);for(let i=0;i<s.length;i++){const r=n[s[i]];r&&r.active()&&e.push(r.wait())}return Promise.all(e)}function yk(n,t){if(!t)return;let e=n.options;if(!e){n.options=t;return}return e.$shared&&(n.options=e=Object.assign({},e,{$shared:!1,$animations:{}})),e}function Hf(n,t){const e=n&&n.options||{},s=e.reverse,i=e.min===void 0?t:0,r=e.max===void 0?t:0;return{start:s?r:i,end:s?i:r}}function bk(n,t,e){if(e===!1)return!1;const s=Hf(n,e),i=Hf(t,e);return{top:i.end,right:s.end,bottom:i.start,left:s.start}}function vk(n){let t,e,s,i;return ht(n)?(t=n.top,e=n.right,s=n.bottom,i=n.left):t=e=s=i=n,{top:t,right:e,bottom:s,left:i,disabled:n===!1}}function iy(n,t){const e=[],s=n._getSortedDatasetMetas(t);let i,r;for(i=0,r=s.length;i<r;++i)e.push(s[i].index);return e}function qf(n,t,e,s={}){const i=n.keys,r=s.mode==="single";let o,a,l,u;if(t===null)return;let h=!1;for(o=0,a=i.length;o<a;++o){if(l=+i[o],l===e){if(h=!0,s.all)continue;break}u=n.values[l],ge(u)&&(r||t===0||on(t)===on(u))&&(t+=u)}return!h&&!s.all?0:t}function wk(n,t){const{iScale:e,vScale:s}=t,i=e.axis==="x"?"x":"y",r=s.axis==="x"?"x":"y",o=Object.keys(n),a=new Array(o.length);let l,u,h;for(l=0,u=o.length;l<u;++l)h=o[l],a[l]={[i]:h,[r]:n[h]};return a}function Nl(n,t){const e=n&&n.options.stacked;return e||e===void 0&&t.stack!==void 0}function Ek(n,t,e){return`${n.id}.${t.id}.${e.stack||e.type}`}function Tk(n){const{min:t,max:e,minDefined:s,maxDefined:i}=n.getUserBounds();return{min:s?t:Number.NEGATIVE_INFINITY,max:i?e:Number.POSITIVE_INFINITY}}function Ik(n,t,e){const s=n[t]||(n[t]={});return s[e]||(s[e]={})}function Wf(n,t,e,s){for(const i of t.getMatchingVisibleMetas(s).reverse()){const r=n[i.index];if(e&&r>0||!e&&r<0)return i.index}return null}function Kf(n,t){const{chart:e,_cachedMeta:s}=n,i=e._stacks||(e._stacks={}),{iScale:r,vScale:o,index:a}=s,l=r.axis,u=o.axis,h=Ek(r,o,s),d=t.length;let p;for(let _=0;_<d;++_){const v=t[_],{[l]:E,[u]:w}=v,P=v._stacks||(v._stacks={});p=P[u]=Ik(i,h,E),p[a]=w,p._top=Wf(p,o,!0,s.type),p._bottom=Wf(p,o,!1,s.type);const R=p._visualValues||(p._visualValues={});R[a]=w}}function Vl(n,t){const e=n.scales;return Object.keys(e).filter(s=>e[s].axis===t).shift()}function Sk(n,t){return qs(n,{active:!1,dataset:void 0,datasetIndex:t,index:t,mode:"default",type:"dataset"})}function xk(n,t,e){return qs(n,{active:!1,dataIndex:t,parsed:void 0,raw:void 0,element:e,index:t,mode:"default",type:"data"})}function qi(n,t){const e=n.controller.index,s=n.vScale&&n.vScale.axis;if(s){t=t||n._parsed;for(const i of t){const r=i._stacks;if(!r||r[s]===void 0||r[s][e]===void 0)return;delete r[s][e],r[s]._visualValues!==void 0&&r[s]._visualValues[e]!==void 0&&delete r[s]._visualValues[e]}}}const Fl=n=>n==="reset"||n==="none",Gf=(n,t)=>t?n:Object.assign({},n),Ak=(n,t,e)=>n&&!t.hidden&&t._stacked&&{keys:iy(e,!0),values:null};class es{constructor(t,e){this.chart=t,this._ctx=t.ctx,this.index=e,this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=!1,this._data=void 0,this._objectData=void 0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=!1,this.supportsDecimation=!1,this.$context=void 0,this._syncList=[],this.datasetElementType=new.target.datasetElementType,this.dataElementType=new.target.dataElementType,this.initialize()}initialize(){const t=this._cachedMeta;this.configure(),this.linkScales(),t._stacked=Nl(t.vScale,t),this.addElements(),this.options.fill&&!this.chart.isPluginEnabled("filler")&&console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options")}updateIndex(t){this.index!==t&&qi(this._cachedMeta),this.index=t}linkScales(){const t=this.chart,e=this._cachedMeta,s=this.getDataset(),i=(d,p,_,v)=>d==="x"?p:d==="r"?v:_,r=e.xAxisID=st(s.xAxisID,Vl(t,"x")),o=e.yAxisID=st(s.yAxisID,Vl(t,"y")),a=e.rAxisID=st(s.rAxisID,Vl(t,"r")),l=e.indexAxis,u=e.iAxisID=i(l,r,o,a),h=e.vAxisID=i(l,o,r,a);e.xScale=this.getScaleForId(r),e.yScale=this.getScaleForId(o),e.rScale=this.getScaleForId(a),e.iScale=this.getScaleForId(u),e.vScale=this.getScaleForId(h)}getDataset(){return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(t){return this.chart.scales[t]}_getOtherScale(t){const e=this._cachedMeta;return t===e.iScale?e.vScale:e.iScale}reset(){this._update("reset")}_destroy(){const t=this._cachedMeta;this._data&&kf(this._data,this),t._stacked&&qi(t)}_dataCheck(){const t=this.getDataset(),e=t.data||(t.data=[]),s=this._data;if(ht(e)){const i=this._cachedMeta;this._data=wk(e,i)}else if(s!==e){if(s){kf(s,this);const i=this._cachedMeta;qi(i),i._parsed=[]}e&&Object.isExtensible(e)&&hP(e,this),this._syncList=[],this._data=e}}addElements(){const t=this._cachedMeta;this._dataCheck(),this.datasetElementType&&(t.dataset=new this.datasetElementType)}buildOrUpdateElements(t){const e=this._cachedMeta,s=this.getDataset();let i=!1;this._dataCheck();const r=e._stacked;e._stacked=Nl(e.vScale,e),e.stack!==s.stack&&(i=!0,qi(e),e.stack=s.stack),this._resyncElements(t),(i||r!==e._stacked)&&(Kf(this,e._parsed),e._stacked=Nl(e.vScale,e))}configure(){const t=this.chart.config,e=t.datasetScopeKeys(this._type),s=t.getOptionScopes(this.getDataset(),e,!0);this.options=t.createResolver(s,this.getContext()),this._parsing=this.options.parsing,this._cachedDataOpts={}}parse(t,e){const{_cachedMeta:s,_data:i}=this,{iScale:r,_stacked:o}=s,a=r.axis;let l=t===0&&e===i.length?!0:s._sorted,u=t>0&&s._parsed[t-1],h,d,p;if(this._parsing===!1)s._parsed=i,s._sorted=!0,p=i;else{Xt(i[t])?p=this.parseArrayData(s,i,t,e):ht(i[t])?p=this.parseObjectData(s,i,t,e):p=this.parsePrimitiveData(s,i,t,e);const _=()=>d[a]===null||u&&d[a]<u[a];for(h=0;h<e;++h)s._parsed[h+t]=d=p[h],l&&(_()&&(l=!1),u=d);s._sorted=l}o&&Kf(this,p)}parsePrimitiveData(t,e,s,i){const{iScale:r,vScale:o}=t,a=r.axis,l=o.axis,u=r.getLabels(),h=r===o,d=new Array(i);let p,_,v;for(p=0,_=i;p<_;++p)v=p+s,d[p]={[a]:h||r.parse(u[v],v),[l]:o.parse(e[v],v)};return d}parseArrayData(t,e,s,i){const{xScale:r,yScale:o}=t,a=new Array(i);let l,u,h,d;for(l=0,u=i;l<u;++l)h=l+s,d=e[h],a[l]={x:r.parse(d[0],h),y:o.parse(d[1],h)};return a}parseObjectData(t,e,s,i){const{xScale:r,yScale:o}=t,{xAxisKey:a="x",yAxisKey:l="y"}=this._parsing,u=new Array(i);let h,d,p,_;for(h=0,d=i;h<d;++h)p=h+s,_=e[p],u[h]={x:r.parse(Vs(_,a),p),y:o.parse(Vs(_,l),p)};return u}getParsed(t){return this._cachedMeta._parsed[t]}getDataElement(t){return this._cachedMeta.data[t]}applyStack(t,e,s){const i=this.chart,r=this._cachedMeta,o=e[t.axis],a={keys:iy(i,!0),values:e._stacks[t.axis]._visualValues};return qf(a,o,r.index,{mode:s})}updateRangeFromParsed(t,e,s,i){const r=s[e.axis];let o=r===null?NaN:r;const a=i&&s._stacks[e.axis];i&&a&&(i.values=a,o=qf(i,r,this._cachedMeta.index)),t.min=Math.min(t.min,o),t.max=Math.max(t.max,o)}getMinMax(t,e){const s=this._cachedMeta,i=s._parsed,r=s._sorted&&t===s.iScale,o=i.length,a=this._getOtherScale(t),l=Ak(e,s,this.chart),u={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY},{min:h,max:d}=Tk(a);let p,_;function v(){_=i[p];const E=_[a.axis];return!ge(_[t.axis])||h>E||d<E}for(p=0;p<o&&!(!v()&&(this.updateRangeFromParsed(u,t,_,l),r));++p);if(r){for(p=o-1;p>=0;--p)if(!v()){this.updateRangeFromParsed(u,t,_,l);break}}return u}getAllParsedValues(t){const e=this._cachedMeta._parsed,s=[];let i,r,o;for(i=0,r=e.length;i<r;++i)o=e[i][t.axis],ge(o)&&s.push(o);return s}getMaxOverflow(){return!1}getLabelAndValue(t){const e=this._cachedMeta,s=e.iScale,i=e.vScale,r=this.getParsed(t);return{label:s?""+s.getLabelForValue(r[s.axis]):"",value:i?""+i.getLabelForValue(r[i.axis]):""}}_update(t){const e=this._cachedMeta;this.update(t||"default"),e._clip=vk(st(this.options.clip,bk(e.xScale,e.yScale,this.getMaxOverflow())))}update(t){}draw(){const t=this._ctx,e=this.chart,s=this._cachedMeta,i=s.data||[],r=e.chartArea,o=[],a=this._drawStart||0,l=this._drawCount||i.length-a,u=this.options.drawActiveElementsOnTop;let h;for(s.dataset&&s.dataset.draw(t,r,a,l),h=a;h<a+l;++h){const d=i[h];d.hidden||(d.active&&u?o.push(d):d.draw(t,r))}for(h=0;h<o.length;++h)o[h].draw(t,r)}getStyle(t,e){const s=e?"active":"default";return t===void 0&&this._cachedMeta.dataset?this.resolveDatasetElementOptions(s):this.resolveDataElementOptions(t||0,s)}getContext(t,e,s){const i=this.getDataset();let r;if(t>=0&&t<this._cachedMeta.data.length){const o=this._cachedMeta.data[t];r=o.$context||(o.$context=xk(this.getContext(),t,o)),r.parsed=this.getParsed(t),r.raw=i.data[t],r.index=r.dataIndex=t}else r=this.$context||(this.$context=Sk(this.chart.getContext(),this.index)),r.dataset=i,r.index=r.datasetIndex=this.index;return r.active=!!e,r.mode=s,r}resolveDatasetElementOptions(t){return this._resolveElementOptions(this.datasetElementType.id,t)}resolveDataElementOptions(t,e){return this._resolveElementOptions(this.dataElementType.id,e,t)}_resolveElementOptions(t,e="default",s){const i=e==="active",r=this._cachedDataOpts,o=t+"-"+e,a=r[o],l=this.enableOptionSharing&&Dr(s);if(a)return Gf(a,l);const u=this.chart.config,h=u.datasetElementScopeKeys(this._type,t),d=i?[`${t}Hover`,"hover",t,""]:[t,""],p=u.getOptionScopes(this.getDataset(),h),_=Object.keys(jt.elements[t]),v=()=>this.getContext(s,i,e),E=u.resolveNamedOptions(p,_,v,d);return E.$shared&&(E.$shared=l,r[o]=Object.freeze(Gf(E,l))),E}_resolveAnimations(t,e,s){const i=this.chart,r=this._cachedDataOpts,o=`animation-${e}`,a=r[o];if(a)return a;let l;if(i.options.animation!==!1){const h=this.chart.config,d=h.datasetAnimationScopeKeys(this._type,e),p=h.getOptionScopes(this.getDataset(),d);l=h.createResolver(p,this.getContext(t,s,e))}const u=new sy(i,l&&l.animations);return l&&l._cacheable&&(r[o]=Object.freeze(u)),u}getSharedOptions(t){if(t.$shared)return this._sharedOptions||(this._sharedOptions=Object.assign({},t))}includeOptions(t,e){return!e||Fl(t)||this.chart._animationsDisabled}_getSharedOptions(t,e){const s=this.resolveDataElementOptions(t,e),i=this._sharedOptions,r=this.getSharedOptions(s),o=this.includeOptions(e,r)||r!==i;return this.updateSharedOptions(r,e,s),{sharedOptions:r,includeOptions:o}}updateElement(t,e,s,i){Fl(i)?Object.assign(t,s):this._resolveAnimations(e,i).update(t,s)}updateSharedOptions(t,e,s){t&&!Fl(e)&&this._resolveAnimations(void 0,e).update(t,s)}_setStyle(t,e,s,i){t.active=i;const r=this.getStyle(e,i);this._resolveAnimations(e,s,i).update(t,{options:!i&&this.getSharedOptions(r)||r})}removeHoverStyle(t,e,s){this._setStyle(t,s,"active",!1)}setHoverStyle(t,e,s){this._setStyle(t,s,"active",!0)}_removeDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!1)}_setDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!0)}_resyncElements(t){const e=this._data,s=this._cachedMeta.data;for(const[a,l,u]of this._syncList)this[a](l,u);this._syncList=[];const i=s.length,r=e.length,o=Math.min(r,i);o&&this.parse(0,o),r>i?this._insertElements(i,r-i,t):r<i&&this._removeElements(r,i-r)}_insertElements(t,e,s=!0){const i=this._cachedMeta,r=i.data,o=t+e;let a;const l=u=>{for(u.length+=e,a=u.length-1;a>=o;a--)u[a]=u[a-e]};for(l(r),a=t;a<o;++a)r[a]=new this.dataElementType;this._parsing&&l(i._parsed),this.parse(t,e),s&&this.updateElements(r,t,e,"reset")}updateElements(t,e,s,i){}_removeElements(t,e){const s=this._cachedMeta;if(this._parsing){const i=s._parsed.splice(t,e);s._stacked&&qi(s,i)}s.data.splice(t,e)}_sync(t){if(this._parsing)this._syncList.push(t);else{const[e,s,i]=t;this[e](s,i)}this.chart._dataChanges.push([this.index,...t])}_onDataPush(){const t=arguments.length;this._sync(["_insertElements",this.getDataset().data.length-t,t])}_onDataPop(){this._sync(["_removeElements",this._cachedMeta.data.length-1,1])}_onDataShift(){this._sync(["_removeElements",0,1])}_onDataSplice(t,e){e&&this._sync(["_removeElements",t,e]);const s=arguments.length-2;s&&this._sync(["_insertElements",t,s])}_onDataUnshift(){this._sync(["_insertElements",0,arguments.length])}}$(es,"defaults",{}),$(es,"datasetElementType",null),$(es,"dataElementType",null);function Pk(n,t){if(!n._cache.$bar){const e=n.getMatchingVisibleMetas(t);let s=[];for(let i=0,r=e.length;i<r;i++)s=s.concat(e[i].controller.getAllParsedValues(n));n._cache.$bar=V_(s.sort((i,r)=>i-r))}return n._cache.$bar}function kk(n){const t=n.iScale,e=Pk(t,n.type);let s=t._length,i,r,o,a;const l=()=>{o===32767||o===-32768||(Dr(a)&&(s=Math.min(s,Math.abs(o-a)||s)),a=o)};for(i=0,r=e.length;i<r;++i)o=t.getPixelForValue(e[i]),l();for(a=void 0,i=0,r=t.ticks.length;i<r;++i)o=t.getPixelForTick(i),l();return s}function Rk(n,t,e,s){const i=e.barThickness;let r,o;return _t(i)?(r=t.min*e.categoryPercentage,o=e.barPercentage):(r=i*s,o=1),{chunk:r/s,ratio:o,start:t.pixels[n]-r/2}}function Ck(n,t,e,s){const i=t.pixels,r=i[n];let o=n>0?i[n-1]:null,a=n<i.length-1?i[n+1]:null;const l=e.categoryPercentage;o===null&&(o=r-(a===null?t.end-t.start:a-r)),a===null&&(a=r+r-o);const u=r-(r-Math.min(o,a))/2*l;return{chunk:Math.abs(a-o)/2*l/s,ratio:e.barPercentage,start:u}}function Dk(n,t,e,s){const i=e.parse(n[0],s),r=e.parse(n[1],s),o=Math.min(i,r),a=Math.max(i,r);let l=o,u=a;Math.abs(o)>Math.abs(a)&&(l=a,u=o),t[e.axis]=u,t._custom={barStart:l,barEnd:u,start:i,end:r,min:o,max:a}}function ry(n,t,e,s){return Xt(n)?Dk(n,t,e,s):t[e.axis]=e.parse(n,s),t}function Yf(n,t,e,s){const i=n.iScale,r=n.vScale,o=i.getLabels(),a=i===r,l=[];let u,h,d,p;for(u=e,h=e+s;u<h;++u)p=t[u],d={},d[i.axis]=a||i.parse(o[u],u),l.push(ry(p,d,r,u));return l}function Ul(n){return n&&n.barStart!==void 0&&n.barEnd!==void 0}function Mk(n,t,e){return n!==0?on(n):(t.isHorizontal()?1:-1)*(t.min>=e?1:-1)}function Ok(n){let t,e,s,i,r;return n.horizontal?(t=n.base>n.x,e="left",s="right"):(t=n.base<n.y,e="bottom",s="top"),t?(i="end",r="start"):(i="start",r="end"),{start:e,end:s,reverse:t,top:i,bottom:r}}function Lk(n,t,e,s){let i=t.borderSkipped;const r={};if(!i){n.borderSkipped=r;return}if(i===!0){n.borderSkipped={top:!0,right:!0,bottom:!0,left:!0};return}const{start:o,end:a,reverse:l,top:u,bottom:h}=Ok(n);i==="middle"&&e&&(n.enableBorderRadius=!0,(e._top||0)===s?i=u:(e._bottom||0)===s?i=h:(r[Xf(h,o,a,l)]=!0,i=u)),r[Xf(i,o,a,l)]=!0,n.borderSkipped=r}function Xf(n,t,e,s){return s?(n=Nk(n,t,e),n=Qf(n,e,t)):n=Qf(n,t,e),n}function Nk(n,t,e){return n===t?e:n===e?t:n}function Qf(n,t,e){return n==="start"?t:n==="end"?e:n}function Vk(n,{inflateAmount:t},e){n.inflateAmount=t==="auto"?e===1?.33:0:t}class zo extends es{parsePrimitiveData(t,e,s,i){return Yf(t,e,s,i)}parseArrayData(t,e,s,i){return Yf(t,e,s,i)}parseObjectData(t,e,s,i){const{iScale:r,vScale:o}=t,{xAxisKey:a="x",yAxisKey:l="y"}=this._parsing,u=r.axis==="x"?a:l,h=o.axis==="x"?a:l,d=[];let p,_,v,E;for(p=s,_=s+i;p<_;++p)E=e[p],v={},v[r.axis]=r.parse(Vs(E,u),p),d.push(ry(Vs(E,h),v,o,p));return d}updateRangeFromParsed(t,e,s,i){super.updateRangeFromParsed(t,e,s,i);const r=s._custom;r&&e===this._cachedMeta.vScale&&(t.min=Math.min(t.min,r.min),t.max=Math.max(t.max,r.max))}getMaxOverflow(){return 0}getLabelAndValue(t){const e=this._cachedMeta,{iScale:s,vScale:i}=e,r=this.getParsed(t),o=r._custom,a=Ul(o)?"["+o.start+", "+o.end+"]":""+i.getLabelForValue(r[i.axis]);return{label:""+s.getLabelForValue(r[s.axis]),value:a}}initialize(){this.enableOptionSharing=!0,super.initialize();const t=this._cachedMeta;t.stack=this.getDataset().stack}update(t){const e=this._cachedMeta;this.updateElements(e.data,0,e.data.length,t)}updateElements(t,e,s,i){const r=i==="reset",{index:o,_cachedMeta:{vScale:a}}=this,l=a.getBasePixel(),u=a.isHorizontal(),h=this._getRuler(),{sharedOptions:d,includeOptions:p}=this._getSharedOptions(e,i);for(let _=e;_<e+s;_++){const v=this.getParsed(_),E=r||_t(v[a.axis])?{base:l,head:l}:this._calculateBarValuePixels(_),w=this._calculateBarIndexPixels(_,h),P=(v._stacks||{})[a.axis],R={horizontal:u,base:E.base,enableBorderRadius:!P||Ul(v._custom)||o===P._top||o===P._bottom,x:u?E.head:w.center,y:u?w.center:E.head,height:u?w.size:Math.abs(E.size),width:u?Math.abs(E.size):w.size};p&&(R.options=d||this.resolveDataElementOptions(_,t[_].active?"active":i));const k=R.options||t[_].options;Lk(R,k,P,o),Vk(R,k,h.ratio),this.updateElement(t[_],_,R,i)}}_getStacks(t,e){const{iScale:s}=this._cachedMeta,i=s.getMatchingVisibleMetas(this._type).filter(h=>h.controller.options.grouped),r=s.options.stacked,o=[],a=this._cachedMeta.controller.getParsed(e),l=a&&a[s.axis],u=h=>{const d=h._parsed.find(_=>_[s.axis]===l),p=d&&d[h.vScale.axis];if(_t(p)||isNaN(p))return!0};for(const h of i)if(!(e!==void 0&&u(h))&&((r===!1||o.indexOf(h.stack)===-1||r===void 0&&h.stack===void 0)&&o.push(h.stack),h.index===t))break;return o.length||o.push(void 0),o}_getStackCount(t){return this._getStacks(void 0,t).length}_getAxisCount(){return this._getAxis().length}getFirstScaleIdForIndexAxis(){const t=this.chart.scales,e=this.chart.options.indexAxis;return Object.keys(t).filter(s=>t[s].axis===e).shift()}_getAxis(){const t={},e=this.getFirstScaleIdForIndexAxis();for(const s of this.chart.data.datasets)t[st(this.chart.options.indexAxis==="x"?s.xAxisID:s.yAxisID,e)]=!0;return Object.keys(t)}_getStackIndex(t,e,s){const i=this._getStacks(t,s),r=e!==void 0?i.indexOf(e):-1;return r===-1?i.length-1:r}_getRuler(){const t=this.options,e=this._cachedMeta,s=e.iScale,i=[];let r,o;for(r=0,o=e.data.length;r<o;++r)i.push(s.getPixelForValue(this.getParsed(r)[s.axis],r));const a=t.barThickness;return{min:a||kk(e),pixels:i,start:s._startPixel,end:s._endPixel,stackCount:this._getStackCount(),scale:s,grouped:t.grouped,ratio:a?1:t.categoryPercentage*t.barPercentage}}_calculateBarValuePixels(t){const{_cachedMeta:{vScale:e,_stacked:s,index:i},options:{base:r,minBarLength:o}}=this,a=r||0,l=this.getParsed(t),u=l._custom,h=Ul(u);let d=l[e.axis],p=0,_=s?this.applyStack(e,l,s):d,v,E;_!==d&&(p=_-d,_=d),h&&(d=u.barStart,_=u.barEnd-u.barStart,d!==0&&on(d)!==on(u.barEnd)&&(p=0),p+=d);const w=!_t(r)&&!h?r:p;let P=e.getPixelForValue(w);if(this.chart.getDataVisibility(t)?v=e.getPixelForValue(p+_):v=P,E=v-P,Math.abs(E)<o){E=Mk(E,e,a)*o,d===a&&(P-=E/2);const R=e.getPixelForDecimal(0),k=e.getPixelForDecimal(1),C=Math.min(R,k),M=Math.max(R,k);P=Math.max(Math.min(P,M),C),v=P+E,s&&!h&&(l._stacks[e.axis]._visualValues[i]=e.getValueForPixel(v)-e.getValueForPixel(P))}if(P===e.getPixelForValue(a)){const R=on(E)*e.getLineWidthForValue(a)/2;P+=R,E-=R}return{size:E,base:P,head:v,center:v+E/2}}_calculateBarIndexPixels(t,e){const s=e.scale,i=this.options,r=i.skipNull,o=st(i.maxBarThickness,1/0);let a,l;const u=this._getAxisCount();if(e.grouped){const h=r?this._getStackCount(t):e.stackCount,d=i.barThickness==="flex"?Ck(t,e,i,h*u):Rk(t,e,i,h*u),p=this.chart.options.indexAxis==="x"?this.getDataset().xAxisID:this.getDataset().yAxisID,_=this._getAxis().indexOf(st(p,this.getFirstScaleIdForIndexAxis())),v=this._getStackIndex(this.index,this._cachedMeta.stack,r?t:void 0)+_;a=d.start+d.chunk*v+d.chunk/2,l=Math.min(o,d.chunk*d.ratio)}else a=s.getPixelForValue(this.getParsed(t)[s.axis],t),l=Math.min(o,e.min*e.ratio);return{base:a-l/2,head:a+l/2,center:a,size:l}}draw(){const t=this._cachedMeta,e=t.vScale,s=t.data,i=s.length;let r=0;for(;r<i;++r)this.getParsed(r)[e.axis]!==null&&!s[r].hidden&&s[r].draw(this._ctx)}}$(zo,"id","bar"),$(zo,"defaults",{datasetElementType:!1,dataElementType:"bar",categoryPercentage:.8,barPercentage:.9,grouped:!0,animations:{numbers:{type:"number",properties:["x","y","base","width","height"]}}}),$(zo,"overrides",{scales:{_index_:{type:"category",offset:!0,grid:{offset:!0}},_value_:{type:"linear",beginAtZero:!0}}});function Fk(n,t,e){let s=1,i=1,r=0,o=0;if(t<Ot){const a=n,l=a+t,u=Math.cos(a),h=Math.sin(a),d=Math.cos(l),p=Math.sin(l),_=(k,C,M)=>Mr(k,a,l,!0)?1:Math.max(C,C*e,M,M*e),v=(k,C,M)=>Mr(k,a,l,!0)?-1:Math.min(C,C*e,M,M*e),E=_(0,u,d),w=_(Qt,h,p),P=v(At,u,d),R=v(At+Qt,h,p);s=(E-P)/2,i=(w-R)/2,r=-(E+P)/2,o=-(w+R)/2}return{ratioX:s,ratioY:i,offsetX:r,offsetY:o}}class er extends es{constructor(t,e){super(t,e),this.enableOptionSharing=!0,this.innerRadius=void 0,this.outerRadius=void 0,this.offsetX=void 0,this.offsetY=void 0}linkScales(){}parse(t,e){const s=this.getDataset().data,i=this._cachedMeta;if(this._parsing===!1)i._parsed=s;else{let r=l=>+s[l];if(ht(s[t])){const{key:l="value"}=this._parsing;r=u=>+Vs(s[u],l)}let o,a;for(o=t,a=t+e;o<a;++o)i._parsed[o]=r(o)}}_getRotation(){return Tn(this.options.rotation-90)}_getCircumference(){return Tn(this.options.circumference)}_getRotationExtents(){let t=Ot,e=-Ot;for(let s=0;s<this.chart.data.datasets.length;++s)if(this.chart.isDatasetVisible(s)&&this.chart.getDatasetMeta(s).type===this._type){const i=this.chart.getDatasetMeta(s).controller,r=i._getRotation(),o=i._getCircumference();t=Math.min(t,r),e=Math.max(e,r+o)}return{rotation:t,circumference:e-t}}update(t){const e=this.chart,{chartArea:s}=e,i=this._cachedMeta,r=i.data,o=this.getMaxBorderWidth()+this.getMaxOffset(r)+this.options.spacing,a=Math.max((Math.min(s.width,s.height)-o)/2,0),l=Math.min(GA(this.options.cutout,a),1),u=this._getRingWeight(this.index),{circumference:h,rotation:d}=this._getRotationExtents(),{ratioX:p,ratioY:_,offsetX:v,offsetY:E}=Fk(d,h,l),w=(s.width-o)/p,P=(s.height-o)/_,R=Math.max(Math.min(w,P)/2,0),k=D_(this.options.radius,R),C=Math.max(k*l,0),M=(k-C)/this._getVisibleDatasetWeightTotal();this.offsetX=v*k,this.offsetY=E*k,i.total=this.calculateTotal(),this.outerRadius=k-M*this._getRingWeightOffset(this.index),this.innerRadius=Math.max(this.outerRadius-M*u,0),this.updateElements(r,0,r.length,t)}_circumference(t,e){const s=this.options,i=this._cachedMeta,r=this._getCircumference();return e&&s.animation.animateRotate||!this.chart.getDataVisibility(t)||i._parsed[t]===null||i.data[t].hidden?0:this.calculateCircumference(i._parsed[t]*r/Ot)}updateElements(t,e,s,i){const r=i==="reset",o=this.chart,a=o.chartArea,u=o.options.animation,h=(a.left+a.right)/2,d=(a.top+a.bottom)/2,p=r&&u.animateScale,_=p?0:this.innerRadius,v=p?0:this.outerRadius,{sharedOptions:E,includeOptions:w}=this._getSharedOptions(e,i);let P=this._getRotation(),R;for(R=0;R<e;++R)P+=this._circumference(R,r);for(R=e;R<e+s;++R){const k=this._circumference(R,r),C=t[R],M={x:h+this.offsetX,y:d+this.offsetY,startAngle:P,endAngle:P+k,circumference:k,outerRadius:v,innerRadius:_};w&&(M.options=E||this.resolveDataElementOptions(R,C.active?"active":i)),P+=k,this.updateElement(C,R,M,i)}}calculateTotal(){const t=this._cachedMeta,e=t.data;let s=0,i;for(i=0;i<e.length;i++){const r=t._parsed[i];r!==null&&!isNaN(r)&&this.chart.getDataVisibility(i)&&!e[i].hidden&&(s+=Math.abs(r))}return s}calculateCircumference(t){const e=this._cachedMeta.total;return e>0&&!isNaN(t)?Ot*(Math.abs(t)/e):0}getLabelAndValue(t){const e=this._cachedMeta,s=this.chart,i=s.data.labels||[],r=zu(e._parsed[t],s.options.locale);return{label:i[t]||"",value:r}}getMaxBorderWidth(t){let e=0;const s=this.chart;let i,r,o,a,l;if(!t){for(i=0,r=s.data.datasets.length;i<r;++i)if(s.isDatasetVisible(i)){o=s.getDatasetMeta(i),t=o.data,a=o.controller;break}}if(!t)return 0;for(i=0,r=t.length;i<r;++i)l=a.resolveDataElementOptions(i),l.borderAlign!=="inner"&&(e=Math.max(e,l.borderWidth||0,l.hoverBorderWidth||0));return e}getMaxOffset(t){let e=0;for(let s=0,i=t.length;s<i;++s){const r=this.resolveDataElementOptions(s);e=Math.max(e,r.offset||0,r.hoverOffset||0)}return e}_getRingWeightOffset(t){let e=0;for(let s=0;s<t;++s)this.chart.isDatasetVisible(s)&&(e+=this._getRingWeight(s));return e}_getRingWeight(t){return Math.max(st(this.chart.data.datasets[t].weight,1),0)}_getVisibleDatasetWeightTotal(){return this._getRingWeightOffset(this.chart.data.datasets.length)||1}}$(er,"id","doughnut"),$(er,"defaults",{datasetElementType:!1,dataElementType:"arc",animation:{animateRotate:!0,animateScale:!1},animations:{numbers:{type:"number",properties:["circumference","endAngle","innerRadius","outerRadius","startAngle","x","y","offset","borderWidth","spacing"]}},cutout:"50%",rotation:0,circumference:360,radius:"100%",spacing:0,indexAxis:"r"}),$(er,"descriptors",{_scriptable:t=>t!=="spacing",_indexable:t=>t!=="spacing"&&!t.startsWith("borderDash")&&!t.startsWith("hoverBorderDash")}),$(er,"overrides",{aspectRatio:1,plugins:{legend:{labels:{generateLabels(t){const e=t.data,{labels:{pointStyle:s,textAlign:i,color:r,useBorderRadius:o,borderRadius:a}}=t.legend.options;return e.labels.length&&e.datasets.length?e.labels.map((l,u)=>{const d=t.getDatasetMeta(0).controller.getStyle(u);return{text:l,fillStyle:d.backgroundColor,fontColor:r,hidden:!t.getDataVisibility(u),lineDash:d.borderDash,lineDashOffset:d.borderDashOffset,lineJoin:d.borderJoinStyle,lineWidth:d.borderWidth,strokeStyle:d.borderColor,textAlign:i,pointStyle:s,borderRadius:o&&(a||d.borderRadius),index:u}}):[]}},onClick(t,e,s){s.chart.toggleDataVisibility(e.index),s.chart.update()}}}});class jo extends es{initialize(){this.enableOptionSharing=!0,this.supportsDecimation=!0,super.initialize()}update(t){const e=this._cachedMeta,{dataset:s,data:i=[],_dataset:r}=e,o=this.chart._animationsDisabled;let{start:a,count:l}=$_(e,i,o);this._drawStart=a,this._drawCount=l,z_(e)&&(a=0,l=i.length),s._chart=this.chart,s._datasetIndex=this.index,s._decimated=!!r._decimated,s.points=i;const u=this.resolveDatasetElementOptions(t);this.options.showLine||(u.borderWidth=0),u.segment=this.options.segment,this.updateElement(s,void 0,{animated:!o,options:u},t),this.updateElements(i,a,l,t)}updateElements(t,e,s,i){const r=i==="reset",{iScale:o,vScale:a,_stacked:l,_dataset:u}=this._cachedMeta,{sharedOptions:h,includeOptions:d}=this._getSharedOptions(e,i),p=o.axis,_=a.axis,{spanGaps:v,segment:E}=this.options,w=bi(v)?v:Number.POSITIVE_INFINITY,P=this.chart._animationsDisabled||r||i==="none",R=e+s,k=t.length;let C=e>0&&this.getParsed(e-1);for(let M=0;M<k;++M){const L=t[M],S=P?L:{};if(M<e||M>=R){S.skip=!0;continue}const g=this.getParsed(M),y=_t(g[_]),b=S[p]=o.getPixelForValue(g[p],M),T=S[_]=r||y?a.getBasePixel():a.getPixelForValue(l?this.applyStack(a,g,l):g[_],M);S.skip=isNaN(b)||isNaN(T)||y,S.stop=M>0&&Math.abs(g[p]-C[p])>w,E&&(S.parsed=g,S.raw=u.data[M]),d&&(S.options=h||this.resolveDataElementOptions(M,L.active?"active":i)),P||this.updateElement(L,M,S,i),C=g}}getMaxOverflow(){const t=this._cachedMeta,e=t.dataset,s=e.options&&e.options.borderWidth||0,i=t.data||[];if(!i.length)return s;const r=i[0].size(this.resolveDataElementOptions(0)),o=i[i.length-1].size(this.resolveDataElementOptions(i.length-1));return Math.max(s,r,o)/2}draw(){const t=this._cachedMeta;t.dataset.updateControlPoints(this.chart.chartArea,t.iScale.axis),super.draw()}}$(jo,"id","line"),$(jo,"defaults",{datasetElementType:"line",dataElementType:"point",showLine:!0,spanGaps:!1}),$(jo,"overrides",{scales:{_index_:{type:"category"},_value_:{type:"linear"}}});class Ho extends es{getLabelAndValue(t){const e=this._cachedMeta,s=this.chart.data.labels||[],{xScale:i,yScale:r}=e,o=this.getParsed(t),a=i.getLabelForValue(o.x),l=r.getLabelForValue(o.y);return{label:s[t]||"",value:"("+a+", "+l+")"}}update(t){const e=this._cachedMeta,{data:s=[]}=e,i=this.chart._animationsDisabled;let{start:r,count:o}=$_(e,s,i);if(this._drawStart=r,this._drawCount=o,z_(e)&&(r=0,o=s.length),this.options.showLine){this.datasetElementType||this.addElements();const{dataset:a,_dataset:l}=e;a._chart=this.chart,a._datasetIndex=this.index,a._decimated=!!l._decimated,a.points=s;const u=this.resolveDatasetElementOptions(t);u.segment=this.options.segment,this.updateElement(a,void 0,{animated:!i,options:u},t)}else this.datasetElementType&&(delete e.dataset,this.datasetElementType=!1);this.updateElements(s,r,o,t)}addElements(){const{showLine:t}=this.options;!this.datasetElementType&&t&&(this.datasetElementType=this.chart.registry.getElement("line")),super.addElements()}updateElements(t,e,s,i){const r=i==="reset",{iScale:o,vScale:a,_stacked:l,_dataset:u}=this._cachedMeta,h=this.resolveDataElementOptions(e,i),d=this.getSharedOptions(h),p=this.includeOptions(i,d),_=o.axis,v=a.axis,{spanGaps:E,segment:w}=this.options,P=bi(E)?E:Number.POSITIVE_INFINITY,R=this.chart._animationsDisabled||r||i==="none";let k=e>0&&this.getParsed(e-1);for(let C=e;C<e+s;++C){const M=t[C],L=this.getParsed(C),S=R?M:{},g=_t(L[v]),y=S[_]=o.getPixelForValue(L[_],C),b=S[v]=r||g?a.getBasePixel():a.getPixelForValue(l?this.applyStack(a,L,l):L[v],C);S.skip=isNaN(y)||isNaN(b)||g,S.stop=C>0&&Math.abs(L[_]-k[_])>P,w&&(S.parsed=L,S.raw=u.data[C]),p&&(S.options=d||this.resolveDataElementOptions(C,M.active?"active":i)),R||this.updateElement(M,C,S,i),k=L}this.updateSharedOptions(d,i,h)}getMaxOverflow(){const t=this._cachedMeta,e=t.data||[];if(!this.options.showLine){let a=0;for(let l=e.length-1;l>=0;--l)a=Math.max(a,e[l].size(this.resolveDataElementOptions(l))/2);return a>0&&a}const s=t.dataset,i=s.options&&s.options.borderWidth||0;if(!e.length)return i;const r=e[0].size(this.resolveDataElementOptions(0)),o=e[e.length-1].size(this.resolveDataElementOptions(e.length-1));return Math.max(i,r,o)/2}}$(Ho,"id","scatter"),$(Ho,"defaults",{datasetElementType:!1,dataElementType:"point",showLine:!1,fill:!1}),$(Ho,"overrides",{interaction:{mode:"point"},scales:{x:{type:"linear"},y:{type:"linear"}}});function ys(){throw new Error("This method is not implemented: Check that a complete date adapter is provided.")}class Yu{constructor(t){$(this,"options");this.options=t||{}}static override(t){Object.assign(Yu.prototype,t)}init(){}formats(){return ys()}parse(){return ys()}format(){return ys()}add(){return ys()}diff(){return ys()}startOf(){return ys()}endOf(){return ys()}}var Uk={_date:Yu};function Bk(n,t,e,s){const{controller:i,data:r,_sorted:o}=n,a=i._cachedMeta.iScale,l=n.dataset&&n.dataset.options?n.dataset.options.spanGaps:null;if(a&&t===a.axis&&t!=="r"&&o&&r.length){const u=a._reversePixels?cP:Is;if(s){if(i._sharedOptions){const h=r[0],d=typeof h.getRange=="function"&&h.getRange(t);if(d){const p=u(r,t,e-d),_=u(r,t,e+d);return{lo:p.lo,hi:_.hi}}}}else{const h=u(r,t,e);if(l){const{vScale:d}=i._cachedMeta,{_parsed:p}=n,_=p.slice(0,h.lo+1).reverse().findIndex(E=>!_t(E[d.axis]));h.lo-=Math.max(0,_);const v=p.slice(h.hi).findIndex(E=>!_t(E[d.axis]));h.hi+=Math.max(0,v)}return h}}return{lo:0,hi:r.length-1}}function Za(n,t,e,s,i){const r=n.getSortedVisibleDatasetMetas(),o=e[t];for(let a=0,l=r.length;a<l;++a){const{index:u,data:h}=r[a],{lo:d,hi:p}=Bk(r[a],t,o,i);for(let _=d;_<=p;++_){const v=h[_];v.skip||s(v,u,_)}}}function $k(n){const t=n.indexOf("x")!==-1,e=n.indexOf("y")!==-1;return function(s,i){const r=t?Math.abs(s.x-i.x):0,o=e?Math.abs(s.y-i.y):0;return Math.sqrt(Math.pow(r,2)+Math.pow(o,2))}}function Bl(n,t,e,s,i){const r=[];return!i&&!n.isPointInArea(t)||Za(n,e,t,function(a,l,u){!i&&!Or(a,n.chartArea,0)||a.inRange(t.x,t.y,s)&&r.push({element:a,datasetIndex:l,index:u})},!0),r}function zk(n,t,e,s){let i=[];function r(o,a,l){const{startAngle:u,endAngle:h}=o.getProps(["startAngle","endAngle"],s),{angle:d}=L_(o,{x:t.x,y:t.y});Mr(d,u,h)&&i.push({element:o,datasetIndex:a,index:l})}return Za(n,e,t,r),i}function jk(n,t,e,s,i,r){let o=[];const a=$k(e);let l=Number.POSITIVE_INFINITY;function u(h,d,p){const _=h.inRange(t.x,t.y,i);if(s&&!_)return;const v=h.getCenterPoint(i);if(!(!!r||n.isPointInArea(v))&&!_)return;const w=a(t,v);w<l?(o=[{element:h,datasetIndex:d,index:p}],l=w):w===l&&o.push({element:h,datasetIndex:d,index:p})}return Za(n,e,t,u),o}function $l(n,t,e,s,i,r){return!r&&!n.isPointInArea(t)?[]:e==="r"&&!s?zk(n,t,e,i):jk(n,t,e,s,i,r)}function Jf(n,t,e,s,i){const r=[],o=e==="x"?"inXRange":"inYRange";let a=!1;return Za(n,e,t,(l,u,h)=>{l[o]&&l[o](t[e],i)&&(r.push({element:l,datasetIndex:u,index:h}),a=a||l.inRange(t.x,t.y,i))}),s&&!a?[]:r}var Hk={modes:{index(n,t,e,s){const i=vs(t,n),r=e.axis||"x",o=e.includeInvisible||!1,a=e.intersect?Bl(n,i,r,s,o):$l(n,i,r,!1,s,o),l=[];return a.length?(n.getSortedVisibleDatasetMetas().forEach(u=>{const h=a[0].index,d=u.data[h];d&&!d.skip&&l.push({element:d,datasetIndex:u.index,index:h})}),l):[]},dataset(n,t,e,s){const i=vs(t,n),r=e.axis||"xy",o=e.includeInvisible||!1;let a=e.intersect?Bl(n,i,r,s,o):$l(n,i,r,!1,s,o);if(a.length>0){const l=a[0].datasetIndex,u=n.getDatasetMeta(l).data;a=[];for(let h=0;h<u.length;++h)a.push({element:u[h],datasetIndex:l,index:h})}return a},point(n,t,e,s){const i=vs(t,n),r=e.axis||"xy",o=e.includeInvisible||!1;return Bl(n,i,r,s,o)},nearest(n,t,e,s){const i=vs(t,n),r=e.axis||"xy",o=e.includeInvisible||!1;return $l(n,i,r,e.intersect,s,o)},x(n,t,e,s){const i=vs(t,n);return Jf(n,i,"x",e.intersect,s)},y(n,t,e,s){const i=vs(t,n);return Jf(n,i,"y",e.intersect,s)}}};const oy=["left","top","right","bottom"];function Wi(n,t){return n.filter(e=>e.pos===t)}function Zf(n,t){return n.filter(e=>oy.indexOf(e.pos)===-1&&e.box.axis===t)}function Ki(n,t){return n.sort((e,s)=>{const i=t?s:e,r=t?e:s;return i.weight===r.weight?i.index-r.index:i.weight-r.weight})}function qk(n){const t=[];let e,s,i,r,o,a;for(e=0,s=(n||[]).length;e<s;++e)i=n[e],{position:r,options:{stack:o,stackWeight:a=1}}=i,t.push({index:e,box:i,pos:r,horizontal:i.isHorizontal(),weight:i.weight,stack:o&&r+o,stackWeight:a});return t}function Wk(n){const t={};for(const e of n){const{stack:s,pos:i,stackWeight:r}=e;if(!s||!oy.includes(i))continue;const o=t[s]||(t[s]={count:0,placed:0,weight:0,size:0});o.count++,o.weight+=r}return t}function Kk(n,t){const e=Wk(n),{vBoxMaxWidth:s,hBoxMaxHeight:i}=t;let r,o,a;for(r=0,o=n.length;r<o;++r){a=n[r];const{fullSize:l}=a.box,u=e[a.stack],h=u&&a.stackWeight/u.weight;a.horizontal?(a.width=h?h*s:l&&t.availableWidth,a.height=i):(a.width=s,a.height=h?h*i:l&&t.availableHeight)}return e}function Gk(n){const t=qk(n),e=Ki(t.filter(u=>u.box.fullSize),!0),s=Ki(Wi(t,"left"),!0),i=Ki(Wi(t,"right")),r=Ki(Wi(t,"top"),!0),o=Ki(Wi(t,"bottom")),a=Zf(t,"x"),l=Zf(t,"y");return{fullSize:e,leftAndTop:s.concat(r),rightAndBottom:i.concat(l).concat(o).concat(a),chartArea:Wi(t,"chartArea"),vertical:s.concat(i).concat(l),horizontal:r.concat(o).concat(a)}}function tp(n,t,e,s){return Math.max(n[e],t[e])+Math.max(n[s],t[s])}function ay(n,t){n.top=Math.max(n.top,t.top),n.left=Math.max(n.left,t.left),n.bottom=Math.max(n.bottom,t.bottom),n.right=Math.max(n.right,t.right)}function Yk(n,t,e,s){const{pos:i,box:r}=e,o=n.maxPadding;if(!ht(i)){e.size&&(n[i]-=e.size);const d=s[e.stack]||{size:0,count:1};d.size=Math.max(d.size,e.horizontal?r.height:r.width),e.size=d.size/d.count,n[i]+=e.size}r.getPadding&&ay(o,r.getPadding());const a=Math.max(0,t.outerWidth-tp(o,n,"left","right")),l=Math.max(0,t.outerHeight-tp(o,n,"top","bottom")),u=a!==n.w,h=l!==n.h;return n.w=a,n.h=l,e.horizontal?{same:u,other:h}:{same:h,other:u}}function Xk(n){const t=n.maxPadding;function e(s){const i=Math.max(t[s]-n[s],0);return n[s]+=i,i}n.y+=e("top"),n.x+=e("left"),e("right"),e("bottom")}function Qk(n,t){const e=t.maxPadding;function s(i){const r={left:0,top:0,right:0,bottom:0};return i.forEach(o=>{r[o]=Math.max(t[o],e[o])}),r}return s(n?["left","right"]:["top","bottom"])}function nr(n,t,e,s){const i=[];let r,o,a,l,u,h;for(r=0,o=n.length,u=0;r<o;++r){a=n[r],l=a.box,l.update(a.width||t.w,a.height||t.h,Qk(a.horizontal,t));const{same:d,other:p}=Yk(t,e,a,s);u|=d&&i.length,h=h||p,l.fullSize||i.push(a)}return u&&nr(i,t,e,s)||h}function Io(n,t,e,s,i){n.top=e,n.left=t,n.right=t+s,n.bottom=e+i,n.width=s,n.height=i}function ep(n,t,e,s){const i=e.padding;let{x:r,y:o}=t;for(const a of n){const l=a.box,u=s[a.stack]||{placed:0,weight:1},h=a.stackWeight/u.weight||1;if(a.horizontal){const d=t.w*h,p=u.size||l.height;Dr(u.start)&&(o=u.start),l.fullSize?Io(l,i.left,o,e.outerWidth-i.right-i.left,p):Io(l,t.left+u.placed,o,d,p),u.start=o,u.placed+=d,o=l.bottom}else{const d=t.h*h,p=u.size||l.width;Dr(u.start)&&(r=u.start),l.fullSize?Io(l,r,i.top,p,e.outerHeight-i.bottom-i.top):Io(l,r,t.top+u.placed,p,d),u.start=r,u.placed+=d,r=l.right}}t.x=r,t.y=o}var Kn={addBox(n,t){n.boxes||(n.boxes=[]),t.fullSize=t.fullSize||!1,t.position=t.position||"top",t.weight=t.weight||0,t._layers=t._layers||function(){return[{z:0,draw(e){t.draw(e)}}]},n.boxes.push(t)},removeBox(n,t){const e=n.boxes?n.boxes.indexOf(t):-1;e!==-1&&n.boxes.splice(e,1)},configure(n,t,e){t.fullSize=e.fullSize,t.position=e.position,t.weight=e.weight},update(n,t,e,s){if(!n)return;const i=Ke(n.options.layout.padding),r=Math.max(t-i.width,0),o=Math.max(e-i.height,0),a=Gk(n.boxes),l=a.vertical,u=a.horizontal;Et(n.boxes,E=>{typeof E.beforeLayout=="function"&&E.beforeLayout()});const h=l.reduce((E,w)=>w.box.options&&w.box.options.display===!1?E:E+1,0)||1,d=Object.freeze({outerWidth:t,outerHeight:e,padding:i,availableWidth:r,availableHeight:o,vBoxMaxWidth:r/2/h,hBoxMaxHeight:o/2}),p=Object.assign({},i);ay(p,Ke(s));const _=Object.assign({maxPadding:p,w:r,h:o,x:i.left,y:i.top},i),v=Kk(l.concat(u),d);nr(a.fullSize,_,d,v),nr(l,_,d,v),nr(u,_,d,v)&&nr(l,_,d,v),Xk(_),ep(a.leftAndTop,_,d,v),_.x+=_.w,_.y+=_.h,ep(a.rightAndBottom,_,d,v),n.chartArea={left:_.left,top:_.top,right:_.left+_.w,bottom:_.top+_.h,height:_.h,width:_.w},Et(a.chartArea,E=>{const w=E.box;Object.assign(w,n.chartArea),w.update(_.w,_.h,{left:0,top:0,right:0,bottom:0})})}};class ly{acquireContext(t,e){}releaseContext(t){return!1}addEventListener(t,e,s){}removeEventListener(t,e,s){}getDevicePixelRatio(){return 1}getMaximumSize(t,e,s,i){return e=Math.max(0,e||t.width),s=s||t.height,{width:e,height:Math.max(0,i?Math.floor(e/i):s)}}isAttached(t){return!0}updateConfig(t){}}class Jk extends ly{acquireContext(t){return t&&t.getContext&&t.getContext("2d")||null}updateConfig(t){t.options.animation=!1}}const qo="$chartjs",Zk={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"},np=n=>n===null||n==="";function tR(n,t){const e=n.style,s=n.getAttribute("height"),i=n.getAttribute("width");if(n[qo]={initial:{height:s,width:i,style:{display:e.display,height:e.height,width:e.width}}},e.display=e.display||"block",e.boxSizing=e.boxSizing||"border-box",np(i)){const r=Uf(n,"width");r!==void 0&&(n.width=r)}if(np(s))if(n.style.height==="")n.height=n.width/(t||2);else{const r=Uf(n,"height");r!==void 0&&(n.height=r)}return n}const cy=nk?{passive:!0}:!1;function eR(n,t,e){n&&n.addEventListener(t,e,cy)}function nR(n,t,e){n&&n.canvas&&n.canvas.removeEventListener(t,e,cy)}function sR(n,t){const e=Zk[n.type]||n.type,{x:s,y:i}=vs(n,t);return{type:e,chart:t,native:n,x:s!==void 0?s:null,y:i!==void 0?i:null}}function Ta(n,t){for(const e of n)if(e===t||e.contains(t))return!0}function iR(n,t,e){const s=n.canvas,i=new MutationObserver(r=>{let o=!1;for(const a of r)o=o||Ta(a.addedNodes,s),o=o&&!Ta(a.removedNodes,s);o&&e()});return i.observe(document,{childList:!0,subtree:!0}),i}function rR(n,t,e){const s=n.canvas,i=new MutationObserver(r=>{let o=!1;for(const a of r)o=o||Ta(a.removedNodes,s),o=o&&!Ta(a.addedNodes,s);o&&e()});return i.observe(document,{childList:!0,subtree:!0}),i}const Lr=new Map;let sp=0;function uy(){const n=window.devicePixelRatio;n!==sp&&(sp=n,Lr.forEach((t,e)=>{e.currentDevicePixelRatio!==n&&t()}))}function oR(n,t){Lr.size||window.addEventListener("resize",uy),Lr.set(n,t)}function aR(n){Lr.delete(n),Lr.size||window.removeEventListener("resize",uy)}function lR(n,t,e){const s=n.canvas,i=s&&Gu(s);if(!i)return;const r=U_((a,l)=>{const u=i.clientWidth;e(a,l),u<i.clientWidth&&e()},window),o=new ResizeObserver(a=>{const l=a[0],u=l.contentRect.width,h=l.contentRect.height;u===0&&h===0||r(u,h)});return o.observe(i),oR(n,r),o}function zl(n,t,e){e&&e.disconnect(),t==="resize"&&aR(n)}function cR(n,t,e){const s=n.canvas,i=U_(r=>{n.ctx!==null&&e(sR(r,n))},n);return eR(s,t,i),i}class uR extends ly{acquireContext(t,e){const s=t&&t.getContext&&t.getContext("2d");return s&&s.canvas===t?(tR(t,e),s):null}releaseContext(t){const e=t.canvas;if(!e[qo])return!1;const s=e[qo].initial;["height","width"].forEach(r=>{const o=s[r];_t(o)?e.removeAttribute(r):e.setAttribute(r,o)});const i=s.style||{};return Object.keys(i).forEach(r=>{e.style[r]=i[r]}),e.width=e.width,delete e[qo],!0}addEventListener(t,e,s){this.removeEventListener(t,e);const i=t.$proxies||(t.$proxies={}),o={attach:iR,detach:rR,resize:lR}[e]||cR;i[e]=o(t,e,s)}removeEventListener(t,e){const s=t.$proxies||(t.$proxies={}),i=s[e];if(!i)return;({attach:zl,detach:zl,resize:zl}[e]||nR)(t,e,i),s[e]=void 0}getDevicePixelRatio(){return window.devicePixelRatio}getMaximumSize(t,e,s,i){return ek(t,e,s,i)}isAttached(t){const e=t&&Gu(t);return!!(e&&e.isConnected)}}function hR(n){return!Ku()||typeof OffscreenCanvas<"u"&&n instanceof OffscreenCanvas?Jk:uR}class hn{constructor(){$(this,"x");$(this,"y");$(this,"active",!1);$(this,"options");$(this,"$animations")}tooltipPosition(t){const{x:e,y:s}=this.getProps(["x","y"],t);return{x:e,y:s}}hasValue(){return bi(this.x)&&bi(this.y)}getProps(t,e){const s=this.$animations;if(!e||!s)return this;const i={};return t.forEach(r=>{i[r]=s[r]&&s[r].active()?s[r]._to:this[r]}),i}}$(hn,"defaults",{}),$(hn,"defaultRoutes");function dR(n,t){const e=n.options.ticks,s=fR(n),i=Math.min(e.maxTicksLimit||s,s),r=e.major.enabled?gR(t):[],o=r.length,a=r[0],l=r[o-1],u=[];if(o>i)return mR(t,u,r,o/i),u;const h=pR(r,t,i);if(o>0){let d,p;const _=o>1?Math.round((l-a)/(o-1)):null;for(So(t,u,h,_t(_)?0:a-_,a),d=0,p=o-1;d<p;d++)So(t,u,h,r[d],r[d+1]);return So(t,u,h,l,_t(_)?t.length:l+_),u}return So(t,u,h),u}function fR(n){const t=n.options.offset,e=n._tickSize(),s=n._length/e+(t?0:1),i=n._maxLength/e;return Math.floor(Math.min(s,i))}function pR(n,t,e){const s=_R(n),i=t.length/e;if(!s)return Math.max(i,1);const r=nP(s);for(let o=0,a=r.length-1;o<a;o++){const l=r[o];if(l>i)return l}return Math.max(i,1)}function gR(n){const t=[];let e,s;for(e=0,s=n.length;e<s;e++)n[e].major&&t.push(e);return t}function mR(n,t,e,s){let i=0,r=e[0],o;for(s=Math.ceil(s),o=0;o<n.length;o++)o===r&&(t.push(n[o]),i++,r=e[i*s])}function So(n,t,e,s,i){const r=st(s,0),o=Math.min(st(i,n.length),n.length);let a=0,l,u,h;for(e=Math.ceil(e),i&&(l=i-s,e=l/Math.floor(l/e)),h=r;h<0;)a++,h=Math.round(r+a*e);for(u=Math.max(r,0);u<o;u++)u===h&&(t.push(n[u]),a++,h=Math.round(r+a*e))}function _R(n){const t=n.length;let e,s;if(t<2)return!1;for(s=n[0],e=1;e<t;++e)if(n[e]-n[e-1]!==s)return!1;return s}const yR=n=>n==="left"?"right":n==="right"?"left":n,ip=(n,t,e)=>t==="top"||t==="left"?n[t]+e:n[t]-e,rp=(n,t)=>Math.min(t||n,n);function op(n,t){const e=[],s=n.length/t,i=n.length;let r=0;for(;r<i;r+=s)e.push(n[Math.floor(r)]);return e}function bR(n,t,e){const s=n.ticks.length,i=Math.min(t,s-1),r=n._startPixel,o=n._endPixel,a=1e-6;let l=n.getPixelForTick(i),u;if(!(e&&(s===1?u=Math.max(l-r,o-l):t===0?u=(n.getPixelForTick(1)-l)/2:u=(l-n.getPixelForTick(i-1))/2,l+=i<t?u:-u,l<r-a||l>o+a)))return l}function vR(n,t){Et(n,e=>{const s=e.gc,i=s.length/2;let r;if(i>t){for(r=0;r<i;++r)delete e.data[s[r]];s.splice(0,i)}})}function Gi(n){return n.drawTicks?n.tickLength:0}function ap(n,t){if(!n.display)return 0;const e=Ee(n.font,t),s=Ke(n.padding);return(Xt(n.text)?n.text.length:1)*e.lineHeight+s.height}function wR(n,t){return qs(n,{scale:t,type:"scale"})}function ER(n,t,e){return qs(n,{tick:e,index:t,type:"tick"})}function TR(n,t,e){let s=B_(n);return(e&&t!=="right"||!e&&t==="right")&&(s=yR(s)),s}function IR(n,t,e,s){const{top:i,left:r,bottom:o,right:a,chart:l}=n,{chartArea:u,scales:h}=l;let d=0,p,_,v;const E=o-i,w=a-r;if(n.isHorizontal()){if(_=Pe(s,r,a),ht(e)){const P=Object.keys(e)[0],R=e[P];v=h[P].getPixelForValue(R)+E-t}else e==="center"?v=(u.bottom+u.top)/2+E-t:v=ip(n,e,t);p=a-r}else{if(ht(e)){const P=Object.keys(e)[0],R=e[P];_=h[P].getPixelForValue(R)-w+t}else e==="center"?_=(u.left+u.right)/2-w+t:_=ip(n,e,t);v=Pe(s,o,i),d=e==="left"?-Qt:Qt}return{titleX:_,titleY:v,maxWidth:p,rotation:d}}class Ai extends hn{constructor(t){super(),this.id=t.id,this.type=t.type,this.options=void 0,this.ctx=t.ctx,this.chart=t.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void 0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache={},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=!1,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void 0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=!1,this.$context=void 0}init(t){this.options=t.setContext(this.getContext()),this.axis=t.axis,this._userMin=this.parse(t.min),this._userMax=this.parse(t.max),this._suggestedMin=this.parse(t.suggestedMin),this._suggestedMax=this.parse(t.suggestedMax)}parse(t,e){return t}getUserBounds(){let{_userMin:t,_userMax:e,_suggestedMin:s,_suggestedMax:i}=this;return t=Xe(t,Number.POSITIVE_INFINITY),e=Xe(e,Number.NEGATIVE_INFINITY),s=Xe(s,Number.POSITIVE_INFINITY),i=Xe(i,Number.NEGATIVE_INFINITY),{min:Xe(t,s),max:Xe(e,i),minDefined:ge(t),maxDefined:ge(e)}}getMinMax(t){let{min:e,max:s,minDefined:i,maxDefined:r}=this.getUserBounds(),o;if(i&&r)return{min:e,max:s};const a=this.getMatchingVisibleMetas();for(let l=0,u=a.length;l<u;++l)o=a[l].controller.getMinMax(this,t),i||(e=Math.min(e,o.min)),r||(s=Math.max(s,o.max));return e=r&&e>s?s:e,s=i&&e>s?e:s,{min:Xe(e,Xe(s,e)),max:Xe(s,Xe(e,s))}}getPadding(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}}getTicks(){return this.ticks}getLabels(){const t=this.chart.data;return this.options.labels||(this.isHorizontal()?t.xLabels:t.yLabels)||t.labels||[]}getLabelItems(t=this.chart.chartArea){return this._labelItems||(this._labelItems=this._computeLabelItems(t))}beforeLayout(){this._cache={},this._dataLimitsCached=!1}beforeUpdate(){Rt(this.options.beforeUpdate,[this])}update(t,e,s){const{beginAtZero:i,grace:r,ticks:o}=this.options,a=o.sampleSize;this.beforeUpdate(),this.maxWidth=t,this.maxHeight=e,this._margins=s=Object.assign({left:0,right:0,top:0,bottom:0},s),this.ticks=null,this._labelSizes=null,this._gridLineItems=null,this._labelItems=null,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this._maxLength=this.isHorizontal()?this.width+s.left+s.right:this.height+s.top+s.bottom,this._dataLimitsCached||(this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this._range=MP(this,r,i),this._dataLimitsCached=!0),this.beforeBuildTicks(),this.ticks=this.buildTicks()||[],this.afterBuildTicks();const l=a<this.ticks.length;this._convertTicksToLabels(l?op(this.ticks,a):this.ticks),this.configure(),this.beforeCalculateLabelRotation(),this.calculateLabelRotation(),this.afterCalculateLabelRotation(),o.display&&(o.autoSkip||o.source==="auto")&&(this.ticks=dR(this,this.ticks),this._labelSizes=null,this.afterAutoSkip()),l&&this._convertTicksToLabels(this.ticks),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate()}configure(){let t=this.options.reverse,e,s;this.isHorizontal()?(e=this.left,s=this.right):(e=this.top,s=this.bottom,t=!t),this._startPixel=e,this._endPixel=s,this._reversePixels=t,this._length=s-e,this._alignToPixels=this.options.alignToPixels}afterUpdate(){Rt(this.options.afterUpdate,[this])}beforeSetDimensions(){Rt(this.options.beforeSetDimensions,[this])}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0}afterSetDimensions(){Rt(this.options.afterSetDimensions,[this])}_callHooks(t){this.chart.notifyPlugins(t,this.getContext()),Rt(this.options[t],[this])}beforeDataLimits(){this._callHooks("beforeDataLimits")}determineDataLimits(){}afterDataLimits(){this._callHooks("afterDataLimits")}beforeBuildTicks(){this._callHooks("beforeBuildTicks")}buildTicks(){return[]}afterBuildTicks(){this._callHooks("afterBuildTicks")}beforeTickToLabelConversion(){Rt(this.options.beforeTickToLabelConversion,[this])}generateTickLabels(t){const e=this.options.ticks;let s,i,r;for(s=0,i=t.length;s<i;s++)r=t[s],r.label=Rt(e.callback,[r.value,s,t],this)}afterTickToLabelConversion(){Rt(this.options.afterTickToLabelConversion,[this])}beforeCalculateLabelRotation(){Rt(this.options.beforeCalculateLabelRotation,[this])}calculateLabelRotation(){const t=this.options,e=t.ticks,s=rp(this.ticks.length,t.ticks.maxTicksLimit),i=e.minRotation||0,r=e.maxRotation;let o=i,a,l,u;if(!this._isVisible()||!e.display||i>=r||s<=1||!this.isHorizontal()){this.labelRotation=i;return}const h=this._getLabelSizes(),d=h.widest.width,p=h.highest.height,_=fe(this.chart.width-d,0,this.maxWidth);a=t.offset?this.maxWidth/s:_/(s-1),d+6>a&&(a=_/(s-(t.offset?.5:1)),l=this.maxHeight-Gi(t.grid)-e.padding-ap(t.title,this.chart.options.font),u=Math.sqrt(d*d+p*p),o=oP(Math.min(Math.asin(fe((h.highest.height+6)/a,-1,1)),Math.asin(fe(l/u,-1,1))-Math.asin(fe(p/u,-1,1)))),o=Math.max(i,Math.min(r,o))),this.labelRotation=o}afterCalculateLabelRotation(){Rt(this.options.afterCalculateLabelRotation,[this])}afterAutoSkip(){}beforeFit(){Rt(this.options.beforeFit,[this])}fit(){const t={width:0,height:0},{chart:e,options:{ticks:s,title:i,grid:r}}=this,o=this._isVisible(),a=this.isHorizontal();if(o){const l=ap(i,e.options.font);if(a?(t.width=this.maxWidth,t.height=Gi(r)+l):(t.height=this.maxHeight,t.width=Gi(r)+l),s.display&&this.ticks.length){const{first:u,last:h,widest:d,highest:p}=this._getLabelSizes(),_=s.padding*2,v=Tn(this.labelRotation),E=Math.cos(v),w=Math.sin(v);if(a){const P=s.mirror?0:w*d.width+E*p.height;t.height=Math.min(this.maxHeight,t.height+P+_)}else{const P=s.mirror?0:E*d.width+w*p.height;t.width=Math.min(this.maxWidth,t.width+P+_)}this._calculatePadding(u,h,w,E)}}this._handleMargins(),a?(this.width=this._length=e.width-this._margins.left-this._margins.right,this.height=t.height):(this.width=t.width,this.height=this._length=e.height-this._margins.top-this._margins.bottom)}_calculatePadding(t,e,s,i){const{ticks:{align:r,padding:o},position:a}=this.options,l=this.labelRotation!==0,u=a!=="top"&&this.axis==="x";if(this.isHorizontal()){const h=this.getPixelForTick(0)-this.left,d=this.right-this.getPixelForTick(this.ticks.length-1);let p=0,_=0;l?u?(p=i*t.width,_=s*e.height):(p=s*t.height,_=i*e.width):r==="start"?_=e.width:r==="end"?p=t.width:r!=="inner"&&(p=t.width/2,_=e.width/2),this.paddingLeft=Math.max((p-h+o)*this.width/(this.width-h),0),this.paddingRight=Math.max((_-d+o)*this.width/(this.width-d),0)}else{let h=e.height/2,d=t.height/2;r==="start"?(h=0,d=t.height):r==="end"&&(h=e.height,d=0),this.paddingTop=h+o,this.paddingBottom=d+o}}_handleMargins(){this._margins&&(this._margins.left=Math.max(this.paddingLeft,this._margins.left),this._margins.top=Math.max(this.paddingTop,this._margins.top),this._margins.right=Math.max(this.paddingRight,this._margins.right),this._margins.bottom=Math.max(this.paddingBottom,this._margins.bottom))}afterFit(){Rt(this.options.afterFit,[this])}isHorizontal(){const{axis:t,position:e}=this.options;return e==="top"||e==="bottom"||t==="x"}isFullSize(){return this.options.fullSize}_convertTicksToLabels(t){this.beforeTickToLabelConversion(),this.generateTickLabels(t);let e,s;for(e=0,s=t.length;e<s;e++)_t(t[e].label)&&(t.splice(e,1),s--,e--);this.afterTickToLabelConversion()}_getLabelSizes(){let t=this._labelSizes;if(!t){const e=this.options.ticks.sampleSize;let s=this.ticks;e<s.length&&(s=op(s,e)),this._labelSizes=t=this._computeLabelSizes(s,s.length,this.options.ticks.maxTicksLimit)}return t}_computeLabelSizes(t,e,s){const{ctx:i,_longestTextCache:r}=this,o=[],a=[],l=Math.floor(e/rp(e,s));let u=0,h=0,d,p,_,v,E,w,P,R,k,C,M;for(d=0;d<e;d+=l){if(v=t[d].label,E=this._resolveTickFontOptions(d),i.font=w=E.string,P=r[w]=r[w]||{data:{},gc:[]},R=E.lineHeight,k=C=0,!_t(v)&&!Xt(v))k=Of(i,P.data,P.gc,k,v),C=R;else if(Xt(v))for(p=0,_=v.length;p<_;++p)M=v[p],!_t(M)&&!Xt(M)&&(k=Of(i,P.data,P.gc,k,M),C+=R);o.push(k),a.push(C),u=Math.max(k,u),h=Math.max(C,h)}vR(r,e);const L=o.indexOf(u),S=a.indexOf(h),g=y=>({width:o[y]||0,height:a[y]||0});return{first:g(0),last:g(e-1),widest:g(L),highest:g(S),widths:o,heights:a}}getLabelForValue(t){return t}getPixelForValue(t,e){return NaN}getValueForPixel(t){}getPixelForTick(t){const e=this.ticks;return t<0||t>e.length-1?null:this.getPixelForValue(e[t].value)}getPixelForDecimal(t){this._reversePixels&&(t=1-t);const e=this._startPixel+t*this._length;return lP(this._alignToPixels?_s(this.chart,e,0):e)}getDecimalForPixel(t){const e=(t-this._startPixel)/this._length;return this._reversePixels?1-e:e}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue(){const{min:t,max:e}=this;return t<0&&e<0?e:t>0&&e>0?t:0}getContext(t){const e=this.ticks||[];if(t>=0&&t<e.length){const s=e[t];return s.$context||(s.$context=ER(this.getContext(),t,s))}return this.$context||(this.$context=wR(this.chart.getContext(),this))}_tickSize(){const t=this.options.ticks,e=Tn(this.labelRotation),s=Math.abs(Math.cos(e)),i=Math.abs(Math.sin(e)),r=this._getLabelSizes(),o=t.autoSkipPadding||0,a=r?r.widest.width+o:0,l=r?r.highest.height+o:0;return this.isHorizontal()?l*s>a*i?a/s:l/i:l*i<a*s?l/s:a/i}_isVisible(){const t=this.options.display;return t!=="auto"?!!t:this.getMatchingVisibleMetas().length>0}_computeGridLineItems(t){const e=this.axis,s=this.chart,i=this.options,{grid:r,position:o,border:a}=i,l=r.offset,u=this.isHorizontal(),d=this.ticks.length+(l?1:0),p=Gi(r),_=[],v=a.setContext(this.getContext()),E=v.display?v.width:0,w=E/2,P=function(it){return _s(s,it,E)};let R,k,C,M,L,S,g,y,b,T,A,x;if(o==="top")R=P(this.bottom),S=this.bottom-p,y=R-w,T=P(t.top)+w,x=t.bottom;else if(o==="bottom")R=P(this.top),T=t.top,x=P(t.bottom)-w,S=R+w,y=this.top+p;else if(o==="left")R=P(this.right),L=this.right-p,g=R-w,b=P(t.left)+w,A=t.right;else if(o==="right")R=P(this.left),b=t.left,A=P(t.right)-w,L=R+w,g=this.left+p;else if(e==="x"){if(o==="center")R=P((t.top+t.bottom)/2+.5);else if(ht(o)){const it=Object.keys(o)[0],j=o[it];R=P(this.chart.scales[it].getPixelForValue(j))}T=t.top,x=t.bottom,S=R+w,y=S+p}else if(e==="y"){if(o==="center")R=P((t.left+t.right)/2);else if(ht(o)){const it=Object.keys(o)[0],j=o[it];R=P(this.chart.scales[it].getPixelForValue(j))}L=R-w,g=L-p,b=t.left,A=t.right}const W=st(i.ticks.maxTicksLimit,d),K=Math.max(1,Math.ceil(d/W));for(k=0;k<d;k+=K){const it=this.getContext(k),j=r.setContext(it),rt=a.setContext(it),B=j.lineWidth,Pt=j.color,Y=rt.dash||[],Q=rt.dashOffset,z=j.tickWidth,mt=j.tickColor,yt=j.tickBorderDash||[],wt=j.tickBorderDashOffset;C=bR(this,k,l),C!==void 0&&(M=_s(s,C,B),u?L=g=b=A=M:S=y=T=x=M,_.push({tx1:L,ty1:S,tx2:g,ty2:y,x1:b,y1:T,x2:A,y2:x,width:B,color:Pt,borderDash:Y,borderDashOffset:Q,tickWidth:z,tickColor:mt,tickBorderDash:yt,tickBorderDashOffset:wt}))}return this._ticksLength=d,this._borderValue=R,_}_computeLabelItems(t){const e=this.axis,s=this.options,{position:i,ticks:r}=s,o=this.isHorizontal(),a=this.ticks,{align:l,crossAlign:u,padding:h,mirror:d}=r,p=Gi(s.grid),_=p+h,v=d?-h:_,E=-Tn(this.labelRotation),w=[];let P,R,k,C,M,L,S,g,y,b,T,A,x="middle";if(i==="top")L=this.bottom-v,S=this._getXAxisLabelAlignment();else if(i==="bottom")L=this.top+v,S=this._getXAxisLabelAlignment();else if(i==="left"){const K=this._getYAxisLabelAlignment(p);S=K.textAlign,M=K.x}else if(i==="right"){const K=this._getYAxisLabelAlignment(p);S=K.textAlign,M=K.x}else if(e==="x"){if(i==="center")L=(t.top+t.bottom)/2+_;else if(ht(i)){const K=Object.keys(i)[0],it=i[K];L=this.chart.scales[K].getPixelForValue(it)+_}S=this._getXAxisLabelAlignment()}else if(e==="y"){if(i==="center")M=(t.left+t.right)/2-_;else if(ht(i)){const K=Object.keys(i)[0],it=i[K];M=this.chart.scales[K].getPixelForValue(it)}S=this._getYAxisLabelAlignment(p).textAlign}e==="y"&&(l==="start"?x="top":l==="end"&&(x="bottom"));const W=this._getLabelSizes();for(P=0,R=a.length;P<R;++P){k=a[P],C=k.label;const K=r.setContext(this.getContext(P));g=this.getPixelForTick(P)+r.labelOffset,y=this._resolveTickFontOptions(P),b=y.lineHeight,T=Xt(C)?C.length:1;const it=T/2,j=K.color,rt=K.textStrokeColor,B=K.textStrokeWidth;let Pt=S;o?(M=g,S==="inner"&&(P===R-1?Pt=this.options.reverse?"left":"right":P===0?Pt=this.options.reverse?"right":"left":Pt="center"),i==="top"?u==="near"||E!==0?A=-T*b+b/2:u==="center"?A=-W.highest.height/2-it*b+b:A=-W.highest.height+b/2:u==="near"||E!==0?A=b/2:u==="center"?A=W.highest.height/2-it*b:A=W.highest.height-T*b,d&&(A*=-1),E!==0&&!K.showLabelBackdrop&&(M+=b/2*Math.sin(E))):(L=g,A=(1-T)*b/2);let Y;if(K.showLabelBackdrop){const Q=Ke(K.backdropPadding),z=W.heights[P],mt=W.widths[P];let yt=A-Q.top,wt=0-Q.left;switch(x){case"middle":yt-=z/2;break;case"bottom":yt-=z;break}switch(S){case"center":wt-=mt/2;break;case"right":wt-=mt;break;case"inner":P===R-1?wt-=mt:P>0&&(wt-=mt/2);break}Y={left:wt,top:yt,width:mt+Q.width,height:z+Q.height,color:K.backdropColor}}w.push({label:C,font:y,textOffset:A,options:{rotation:E,color:j,strokeColor:rt,strokeWidth:B,textAlign:Pt,textBaseline:x,translation:[M,L],backdrop:Y}})}return w}_getXAxisLabelAlignment(){const{position:t,ticks:e}=this.options;if(-Tn(this.labelRotation))return t==="top"?"left":"right";let i="center";return e.align==="start"?i="left":e.align==="end"?i="right":e.align==="inner"&&(i="inner"),i}_getYAxisLabelAlignment(t){const{position:e,ticks:{crossAlign:s,mirror:i,padding:r}}=this.options,o=this._getLabelSizes(),a=t+r,l=o.widest.width;let u,h;return e==="left"?i?(h=this.right+r,s==="near"?u="left":s==="center"?(u="center",h+=l/2):(u="right",h+=l)):(h=this.right-a,s==="near"?u="right":s==="center"?(u="center",h-=l/2):(u="left",h=this.left)):e==="right"?i?(h=this.left+r,s==="near"?u="right":s==="center"?(u="center",h-=l/2):(u="left",h-=l)):(h=this.left+a,s==="near"?u="left":s==="center"?(u="center",h+=l/2):(u="right",h=this.right)):u="right",{textAlign:u,x:h}}_computeLabelArea(){if(this.options.ticks.mirror)return;const t=this.chart,e=this.options.position;if(e==="left"||e==="right")return{top:0,left:this.left,bottom:t.height,right:this.right};if(e==="top"||e==="bottom")return{top:this.top,left:0,bottom:this.bottom,right:t.width}}drawBackground(){const{ctx:t,options:{backgroundColor:e},left:s,top:i,width:r,height:o}=this;e&&(t.save(),t.fillStyle=e,t.fillRect(s,i,r,o),t.restore())}getLineWidthForValue(t){const e=this.options.grid;if(!this._isVisible()||!e.display)return 0;const i=this.ticks.findIndex(r=>r.value===t);return i>=0?e.setContext(this.getContext(i)).lineWidth:0}drawGrid(t){const e=this.options.grid,s=this.ctx,i=this._gridLineItems||(this._gridLineItems=this._computeGridLineItems(t));let r,o;const a=(l,u,h)=>{!h.width||!h.color||(s.save(),s.lineWidth=h.width,s.strokeStyle=h.color,s.setLineDash(h.borderDash||[]),s.lineDashOffset=h.borderDashOffset,s.beginPath(),s.moveTo(l.x,l.y),s.lineTo(u.x,u.y),s.stroke(),s.restore())};if(e.display)for(r=0,o=i.length;r<o;++r){const l=i[r];e.drawOnChartArea&&a({x:l.x1,y:l.y1},{x:l.x2,y:l.y2},l),e.drawTicks&&a({x:l.tx1,y:l.ty1},{x:l.tx2,y:l.ty2},{color:l.tickColor,width:l.tickWidth,borderDash:l.tickBorderDash,borderDashOffset:l.tickBorderDashOffset})}}drawBorder(){const{chart:t,ctx:e,options:{border:s,grid:i}}=this,r=s.setContext(this.getContext()),o=s.display?r.width:0;if(!o)return;const a=i.setContext(this.getContext(0)).lineWidth,l=this._borderValue;let u,h,d,p;this.isHorizontal()?(u=_s(t,this.left,o)-o/2,h=_s(t,this.right,a)+a/2,d=p=l):(d=_s(t,this.top,o)-o/2,p=_s(t,this.bottom,a)+a/2,u=h=l),e.save(),e.lineWidth=r.width,e.strokeStyle=r.color,e.beginPath(),e.moveTo(u,d),e.lineTo(h,p),e.stroke(),e.restore()}drawLabels(t){if(!this.options.ticks.display)return;const s=this.ctx,i=this._computeLabelArea();i&&Xa(s,i);const r=this.getLabelItems(t);for(const o of r){const a=o.options,l=o.font,u=o.label,h=o.textOffset;va(s,u,0,h,l,a)}i&&Qa(s)}drawTitle(){const{ctx:t,options:{position:e,title:s,reverse:i}}=this;if(!s.display)return;const r=Ee(s.font),o=Ke(s.padding),a=s.align;let l=r.lineHeight/2;e==="bottom"||e==="center"||ht(e)?(l+=o.bottom,Xt(s.text)&&(l+=r.lineHeight*(s.text.length-1))):l+=o.top;const{titleX:u,titleY:h,maxWidth:d,rotation:p}=IR(this,l,e,a);va(t,s.text,0,0,r,{color:s.color,maxWidth:d,rotation:p,textAlign:TR(a,e,i),textBaseline:"middle",translation:[u,h]})}draw(t){this._isVisible()&&(this.drawBackground(),this.drawGrid(t),this.drawBorder(),this.drawTitle(),this.drawLabels(t))}_layers(){const t=this.options,e=t.ticks&&t.ticks.z||0,s=st(t.grid&&t.grid.z,-1),i=st(t.border&&t.border.z,0);return!this._isVisible()||this.draw!==Ai.prototype.draw?[{z:e,draw:r=>{this.draw(r)}}]:[{z:s,draw:r=>{this.drawBackground(),this.drawGrid(r),this.drawTitle()}},{z:i,draw:()=>{this.drawBorder()}},{z:e,draw:r=>{this.drawLabels(r)}}]}getMatchingVisibleMetas(t){const e=this.chart.getSortedVisibleDatasetMetas(),s=this.axis+"AxisID",i=[];let r,o;for(r=0,o=e.length;r<o;++r){const a=e[r];a[s]===this.id&&(!t||a.type===t)&&i.push(a)}return i}_resolveTickFontOptions(t){const e=this.options.ticks.setContext(this.getContext(t));return Ee(e.font)}_maxDigits(){const t=this._resolveTickFontOptions(0).lineHeight;return(this.isHorizontal()?this.width:this.height)/t}}class xo{constructor(t,e,s){this.type=t,this.scope=e,this.override=s,this.items=Object.create(null)}isForType(t){return Object.prototype.isPrototypeOf.call(this.type.prototype,t.prototype)}register(t){const e=Object.getPrototypeOf(t);let s;AR(e)&&(s=this.register(e));const i=this.items,r=t.id,o=this.scope+"."+r;if(!r)throw new Error("class does not have id: "+t);return r in i||(i[r]=t,SR(t,o,s),this.override&&jt.override(t.id,t.overrides)),o}get(t){return this.items[t]}unregister(t){const e=this.items,s=t.id,i=this.scope;s in e&&delete e[s],i&&s in jt[i]&&(delete jt[i][s],this.override&&delete Fs[s])}}function SR(n,t,e){const s=Cr(Object.create(null),[e?jt.get(e):{},jt.get(t),n.defaults]);jt.set(t,s),n.defaultRoutes&&xR(t,n.defaultRoutes),n.descriptors&&jt.describe(t,n.descriptors)}function xR(n,t){Object.keys(t).forEach(e=>{const s=e.split("."),i=s.pop(),r=[n].concat(s).join("."),o=t[e].split("."),a=o.pop(),l=o.join(".");jt.route(r,i,l,a)})}function AR(n){return"id"in n&&"defaults"in n}class PR{constructor(){this.controllers=new xo(es,"datasets",!0),this.elements=new xo(hn,"elements"),this.plugins=new xo(Object,"plugins"),this.scales=new xo(Ai,"scales"),this._typedRegistries=[this.controllers,this.scales,this.elements]}add(...t){this._each("register",t)}remove(...t){this._each("unregister",t)}addControllers(...t){this._each("register",t,this.controllers)}addElements(...t){this._each("register",t,this.elements)}addPlugins(...t){this._each("register",t,this.plugins)}addScales(...t){this._each("register",t,this.scales)}getController(t){return this._get(t,this.controllers,"controller")}getElement(t){return this._get(t,this.elements,"element")}getPlugin(t){return this._get(t,this.plugins,"plugin")}getScale(t){return this._get(t,this.scales,"scale")}removeControllers(...t){this._each("unregister",t,this.controllers)}removeElements(...t){this._each("unregister",t,this.elements)}removePlugins(...t){this._each("unregister",t,this.plugins)}removeScales(...t){this._each("unregister",t,this.scales)}_each(t,e,s){[...e].forEach(i=>{const r=s||this._getRegistryForType(i);s||r.isForType(i)||r===this.plugins&&i.id?this._exec(t,r,i):Et(i,o=>{const a=s||this._getRegistryForType(o);this._exec(t,a,o)})})}_exec(t,e,s){const i=Uu(t);Rt(s["before"+i],[],s),e[t](s),Rt(s["after"+i],[],s)}_getRegistryForType(t){for(let e=0;e<this._typedRegistries.length;e++){const s=this._typedRegistries[e];if(s.isForType(t))return s}return this.plugins}_get(t,e,s){const i=e.get(t);if(i===void 0)throw new Error('"'+t+'" is not a registered '+s+".");return i}}var Je=new PR;class kR{constructor(){this._init=void 0}notify(t,e,s,i){if(e==="beforeInit"&&(this._init=this._createDescriptors(t,!0),this._notify(this._init,t,"install")),this._init===void 0)return;const r=i?this._descriptors(t).filter(i):this._descriptors(t),o=this._notify(r,t,e,s);return e==="afterDestroy"&&(this._notify(r,t,"stop"),this._notify(this._init,t,"uninstall"),this._init=void 0),o}_notify(t,e,s,i){i=i||{};for(const r of t){const o=r.plugin,a=o[s],l=[e,i,r.options];if(Rt(a,l,o)===!1&&i.cancelable)return!1}return!0}invalidate(){_t(this._cache)||(this._oldCache=this._cache,this._cache=void 0)}_descriptors(t){if(this._cache)return this._cache;const e=this._cache=this._createDescriptors(t);return this._notifyStateChanges(t),e}_createDescriptors(t,e){const s=t&&t.config,i=st(s.options&&s.options.plugins,{}),r=RR(s);return i===!1&&!e?[]:DR(t,r,i,e)}_notifyStateChanges(t){const e=this._oldCache||[],s=this._cache,i=(r,o)=>r.filter(a=>!o.some(l=>a.plugin.id===l.plugin.id));this._notify(i(e,s),t,"stop"),this._notify(i(s,e),t,"start")}}function RR(n){const t={},e=[],s=Object.keys(Je.plugins.items);for(let r=0;r<s.length;r++)e.push(Je.getPlugin(s[r]));const i=n.plugins||[];for(let r=0;r<i.length;r++){const o=i[r];e.indexOf(o)===-1&&(e.push(o),t[o.id]=!0)}return{plugins:e,localIds:t}}function CR(n,t){return!t&&n===!1?null:n===!0?{}:n}function DR(n,{plugins:t,localIds:e},s,i){const r=[],o=n.getContext();for(const a of t){const l=a.id,u=CR(s[l],i);u!==null&&r.push({plugin:a,options:MR(n.config,{plugin:a,local:e[l]},u,o)})}return r}function MR(n,{plugin:t,local:e},s,i){const r=n.pluginScopeKeys(t),o=n.getOptionScopes(s,r);return e&&t.defaults&&o.push(t.defaults),n.createResolver(o,i,[""],{scriptable:!1,indexable:!1,allKeys:!0})}function Tc(n,t){const e=jt.datasets[n]||{};return((t.datasets||{})[n]||{}).indexAxis||t.indexAxis||e.indexAxis||"x"}function OR(n,t){let e=n;return n==="_index_"?e=t:n==="_value_"&&(e=t==="x"?"y":"x"),e}function LR(n,t){return n===t?"_index_":"_value_"}function lp(n){if(n==="x"||n==="y"||n==="r")return n}function NR(n){if(n==="top"||n==="bottom")return"x";if(n==="left"||n==="right")return"y"}function Ic(n,...t){if(lp(n))return n;for(const e of t){const s=e.axis||NR(e.position)||n.length>1&&lp(n[0].toLowerCase());if(s)return s}throw new Error(`Cannot determine type of '${n}' axis. Please provide 'axis' or 'position' option.`)}function cp(n,t,e){if(e[t+"AxisID"]===n)return{axis:t}}function VR(n,t){if(t.data&&t.data.datasets){const e=t.data.datasets.filter(s=>s.xAxisID===n||s.yAxisID===n);if(e.length)return cp(n,"x",e[0])||cp(n,"y",e[0])}return{}}function FR(n,t){const e=Fs[n.type]||{scales:{}},s=t.scales||{},i=Tc(n.type,t),r=Object.create(null);return Object.keys(s).forEach(o=>{const a=s[o];if(!ht(a))return console.error(`Invalid scale configuration for scale: ${o}`);if(a._proxy)return console.warn(`Ignoring resolver passed as options for scale: ${o}`);const l=Ic(o,a,VR(o,n),jt.scales[a.type]),u=LR(l,i),h=e.scales||{};r[o]=pr(Object.create(null),[{axis:l},a,h[l],h[u]])}),n.data.datasets.forEach(o=>{const a=o.type||n.type,l=o.indexAxis||Tc(a,t),h=(Fs[a]||{}).scales||{};Object.keys(h).forEach(d=>{const p=OR(d,l),_=o[p+"AxisID"]||p;r[_]=r[_]||Object.create(null),pr(r[_],[{axis:p},s[_],h[d]])})}),Object.keys(r).forEach(o=>{const a=r[o];pr(a,[jt.scales[a.type],jt.scale])}),r}function hy(n){const t=n.options||(n.options={});t.plugins=st(t.plugins,{}),t.scales=FR(n,t)}function dy(n){return n=n||{},n.datasets=n.datasets||[],n.labels=n.labels||[],n}function UR(n){return n=n||{},n.data=dy(n.data),hy(n),n}const up=new Map,fy=new Set;function Ao(n,t){let e=up.get(n);return e||(e=t(),up.set(n,e),fy.add(e)),e}const Yi=(n,t,e)=>{const s=Vs(t,e);s!==void 0&&n.add(s)};class BR{constructor(t){this._config=UR(t),this._scopeCache=new Map,this._resolverCache=new Map}get platform(){return this._config.platform}get type(){return this._config.type}set type(t){this._config.type=t}get data(){return this._config.data}set data(t){this._config.data=dy(t)}get options(){return this._config.options}set options(t){this._config.options=t}get plugins(){return this._config.plugins}update(){const t=this._config;this.clearCache(),hy(t)}clearCache(){this._scopeCache.clear(),this._resolverCache.clear()}datasetScopeKeys(t){return Ao(t,()=>[[`datasets.${t}`,""]])}datasetAnimationScopeKeys(t,e){return Ao(`${t}.transition.${e}`,()=>[[`datasets.${t}.transitions.${e}`,`transitions.${e}`],[`datasets.${t}`,""]])}datasetElementScopeKeys(t,e){return Ao(`${t}-${e}`,()=>[[`datasets.${t}.elements.${e}`,`datasets.${t}`,`elements.${e}`,""]])}pluginScopeKeys(t){const e=t.id,s=this.type;return Ao(`${s}-plugin-${e}`,()=>[[`plugins.${e}`,...t.additionalOptionScopes||[]]])}_cachedScopes(t,e){const s=this._scopeCache;let i=s.get(t);return(!i||e)&&(i=new Map,s.set(t,i)),i}getOptionScopes(t,e,s){const{options:i,type:r}=this,o=this._cachedScopes(t,s),a=o.get(e);if(a)return a;const l=new Set;e.forEach(h=>{t&&(l.add(t),h.forEach(d=>Yi(l,t,d))),h.forEach(d=>Yi(l,i,d)),h.forEach(d=>Yi(l,Fs[r]||{},d)),h.forEach(d=>Yi(l,jt,d)),h.forEach(d=>Yi(l,wc,d))});const u=Array.from(l);return u.length===0&&u.push(Object.create(null)),fy.has(e)&&o.set(e,u),u}chartOptionScopes(){const{options:t,type:e}=this;return[t,Fs[e]||{},jt.datasets[e]||{},{type:e},jt,wc]}resolveNamedOptions(t,e,s,i=[""]){const r={$shared:!0},{resolver:o,subPrefixes:a}=hp(this._resolverCache,t,i);let l=o;if(zR(o,e)){r.$shared=!1,s=cs(s)?s():s;const u=this.createResolver(t,s,a);l=vi(o,s,u)}for(const u of e)r[u]=l[u];return r}createResolver(t,e,s=[""],i){const{resolver:r}=hp(this._resolverCache,t,s);return ht(e)?vi(r,e,void 0,i):r}}function hp(n,t,e){let s=n.get(t);s||(s=new Map,n.set(t,s));const i=e.join();let r=s.get(i);return r||(r={resolver:Hu(t,e),subPrefixes:e.filter(a=>!a.toLowerCase().includes("hover"))},s.set(i,r)),r}const $R=n=>ht(n)&&Object.getOwnPropertyNames(n).some(t=>cs(n[t]));function zR(n,t){const{isScriptable:e,isIndexable:s}=W_(n);for(const i of t){const r=e(i),o=s(i),a=(o||r)&&n[i];if(r&&(cs(a)||$R(a))||o&&Xt(a))return!0}return!1}var jR="4.5.1";const HR=["top","bottom","left","right","chartArea"];function dp(n,t){return n==="top"||n==="bottom"||HR.indexOf(n)===-1&&t==="x"}function fp(n,t){return function(e,s){return e[n]===s[n]?e[t]-s[t]:e[n]-s[n]}}function pp(n){const t=n.chart,e=t.options.animation;t.notifyPlugins("afterRender"),Rt(e&&e.onComplete,[n],t)}function qR(n){const t=n.chart,e=t.options.animation;Rt(e&&e.onProgress,[n],t)}function py(n){return Ku()&&typeof n=="string"?n=document.getElementById(n):n&&n.length&&(n=n[0]),n&&n.canvas&&(n=n.canvas),n}const Wo={},gp=n=>{const t=py(n);return Object.values(Wo).filter(e=>e.canvas===t).pop()};function WR(n,t,e){const s=Object.keys(n);for(const i of s){const r=+i;if(r>=t){const o=n[i];delete n[i],(e>0||r>t)&&(n[r+e]=o)}}}function KR(n,t,e,s){return!e||n.type==="mouseout"?null:s?t:n}class bn{static register(...t){Je.add(...t),mp()}static unregister(...t){Je.remove(...t),mp()}constructor(t,e){const s=this.config=new BR(e),i=py(t),r=gp(i);if(r)throw new Error("Canvas is already in use. Chart with ID '"+r.id+"' must be destroyed before the canvas with ID '"+r.canvas.id+"' can be reused.");const o=s.createResolver(s.chartOptionScopes(),this.getContext());this.platform=new(s.platform||hR(i)),this.platform.updateConfig(s);const a=this.platform.acquireContext(i,o.aspectRatio),l=a&&a.canvas,u=l&&l.height,h=l&&l.width;if(this.id=KA(),this.ctx=a,this.canvas=l,this.width=h,this.height=u,this._options=o,this._aspectRatio=this.aspectRatio,this._layers=[],this._metasets=[],this._stacks=void 0,this.boxes=[],this.currentDevicePixelRatio=void 0,this.chartArea=void 0,this._active=[],this._lastEvent=void 0,this._listeners={},this._responsiveListeners=void 0,this._sortedMetasets=[],this.scales={},this._plugins=new kR,this.$proxies={},this._hiddenIndices={},this.attached=!1,this._animationsDisabled=void 0,this.$context=void 0,this._doResize=dP(d=>this.update(d),o.resizeDelay||0),this._dataChanges=[],Wo[this.id]=this,!a||!l){console.error("Failed to create chart: can't acquire context from the given item");return}mn.listen(this,"complete",pp),mn.listen(this,"progress",qR),this._initialize(),this.attached&&this.update()}get aspectRatio(){const{options:{aspectRatio:t,maintainAspectRatio:e},width:s,height:i,_aspectRatio:r}=this;return _t(t)?e&&r?r:i?s/i:null:t}get data(){return this.config.data}set data(t){this.config.data=t}get options(){return this._options}set options(t){this.config.options=t}get registry(){return Je}_initialize(){return this.notifyPlugins("beforeInit"),this.options.responsive?this.resize():Ff(this,this.options.devicePixelRatio),this.bindEvents(),this.notifyPlugins("afterInit"),this}clear(){return Lf(this.canvas,this.ctx),this}stop(){return mn.stop(this),this}resize(t,e){mn.running(this)?this._resizeBeforeDraw={width:t,height:e}:this._resize(t,e)}_resize(t,e){const s=this.options,i=this.canvas,r=s.maintainAspectRatio&&this.aspectRatio,o=this.platform.getMaximumSize(i,t,e,r),a=s.devicePixelRatio||this.platform.getDevicePixelRatio(),l=this.width?"resize":"attach";this.width=o.width,this.height=o.height,this._aspectRatio=this.aspectRatio,Ff(this,a,!0)&&(this.notifyPlugins("resize",{size:o}),Rt(s.onResize,[this,o],this),this.attached&&this._doResize(l)&&this.render())}ensureScalesHaveIDs(){const e=this.options.scales||{};Et(e,(s,i)=>{s.id=i})}buildOrUpdateScales(){const t=this.options,e=t.scales,s=this.scales,i=Object.keys(s).reduce((o,a)=>(o[a]=!1,o),{});let r=[];e&&(r=r.concat(Object.keys(e).map(o=>{const a=e[o],l=Ic(o,a),u=l==="r",h=l==="x";return{options:a,dposition:u?"chartArea":h?"bottom":"left",dtype:u?"radialLinear":h?"category":"linear"}}))),Et(r,o=>{const a=o.options,l=a.id,u=Ic(l,a),h=st(a.type,o.dtype);(a.position===void 0||dp(a.position,u)!==dp(o.dposition))&&(a.position=o.dposition),i[l]=!0;let d=null;if(l in s&&s[l].type===h)d=s[l];else{const p=Je.getScale(h);d=new p({id:l,type:h,ctx:this.ctx,chart:this}),s[d.id]=d}d.init(a,t)}),Et(i,(o,a)=>{o||delete s[a]}),Et(s,o=>{Kn.configure(this,o,o.options),Kn.addBox(this,o)})}_updateMetasets(){const t=this._metasets,e=this.data.datasets.length,s=t.length;if(t.sort((i,r)=>i.index-r.index),s>e){for(let i=e;i<s;++i)this._destroyDatasetMeta(i);t.splice(e,s-e)}this._sortedMetasets=t.slice(0).sort(fp("order","index"))}_removeUnreferencedMetasets(){const{_metasets:t,data:{datasets:e}}=this;t.length>e.length&&delete this._stacks,t.forEach((s,i)=>{e.filter(r=>r===s._dataset).length===0&&this._destroyDatasetMeta(i)})}buildOrUpdateControllers(){const t=[],e=this.data.datasets;let s,i;for(this._removeUnreferencedMetasets(),s=0,i=e.length;s<i;s++){const r=e[s];let o=this.getDatasetMeta(s);const a=r.type||this.config.type;if(o.type&&o.type!==a&&(this._destroyDatasetMeta(s),o=this.getDatasetMeta(s)),o.type=a,o.indexAxis=r.indexAxis||Tc(a,this.options),o.order=r.order||0,o.index=s,o.label=""+r.label,o.visible=this.isDatasetVisible(s),o.controller)o.controller.updateIndex(s),o.controller.linkScales();else{const l=Je.getController(a),{datasetElementType:u,dataElementType:h}=jt.datasets[a];Object.assign(l,{dataElementType:Je.getElement(h),datasetElementType:u&&Je.getElement(u)}),o.controller=new l(this,s),t.push(o.controller)}}return this._updateMetasets(),t}_resetElements(){Et(this.data.datasets,(t,e)=>{this.getDatasetMeta(e).controller.reset()},this)}reset(){this._resetElements(),this.notifyPlugins("reset")}update(t){const e=this.config;e.update();const s=this._options=e.createResolver(e.chartOptionScopes(),this.getContext()),i=this._animationsDisabled=!s.animation;if(this._updateScales(),this._checkEventBindings(),this._updateHiddenIndices(),this._plugins.invalidate(),this.notifyPlugins("beforeUpdate",{mode:t,cancelable:!0})===!1)return;const r=this.buildOrUpdateControllers();this.notifyPlugins("beforeElementsUpdate");let o=0;for(let u=0,h=this.data.datasets.length;u<h;u++){const{controller:d}=this.getDatasetMeta(u),p=!i&&r.indexOf(d)===-1;d.buildOrUpdateElements(p),o=Math.max(+d.getMaxOverflow(),o)}o=this._minPadding=s.layout.autoPadding?o:0,this._updateLayout(o),i||Et(r,u=>{u.reset()}),this._updateDatasets(t),this.notifyPlugins("afterUpdate",{mode:t}),this._layers.sort(fp("z","_idx"));const{_active:a,_lastEvent:l}=this;l?this._eventHandler(l,!0):a.length&&this._updateHoverStyles(a,a,!0),this.render()}_updateScales(){Et(this.scales,t=>{Kn.removeBox(this,t)}),this.ensureScalesHaveIDs(),this.buildOrUpdateScales()}_checkEventBindings(){const t=this.options,e=new Set(Object.keys(this._listeners)),s=new Set(t.events);(!Sf(e,s)||!!this._responsiveListeners!==t.responsive)&&(this.unbindEvents(),this.bindEvents())}_updateHiddenIndices(){const{_hiddenIndices:t}=this,e=this._getUniformDataChanges()||[];for(const{method:s,start:i,count:r}of e){const o=s==="_removeElements"?-r:r;WR(t,i,o)}}_getUniformDataChanges(){const t=this._dataChanges;if(!t||!t.length)return;this._dataChanges=[];const e=this.data.datasets.length,s=r=>new Set(t.filter(o=>o[0]===r).map((o,a)=>a+","+o.splice(1).join(","))),i=s(0);for(let r=1;r<e;r++)if(!Sf(i,s(r)))return;return Array.from(i).map(r=>r.split(",")).map(r=>({method:r[1],start:+r[2],count:+r[3]}))}_updateLayout(t){if(this.notifyPlugins("beforeLayout",{cancelable:!0})===!1)return;Kn.update(this,this.width,this.height,t);const e=this.chartArea,s=e.width<=0||e.height<=0;this._layers=[],Et(this.boxes,i=>{s&&i.position==="chartArea"||(i.configure&&i.configure(),this._layers.push(...i._layers()))},this),this._layers.forEach((i,r)=>{i._idx=r}),this.notifyPlugins("afterLayout")}_updateDatasets(t){if(this.notifyPlugins("beforeDatasetsUpdate",{mode:t,cancelable:!0})!==!1){for(let e=0,s=this.data.datasets.length;e<s;++e)this.getDatasetMeta(e).controller.configure();for(let e=0,s=this.data.datasets.length;e<s;++e)this._updateDataset(e,cs(t)?t({datasetIndex:e}):t);this.notifyPlugins("afterDatasetsUpdate",{mode:t})}}_updateDataset(t,e){const s=this.getDatasetMeta(t),i={meta:s,index:t,mode:e,cancelable:!0};this.notifyPlugins("beforeDatasetUpdate",i)!==!1&&(s.controller._update(e),i.cancelable=!1,this.notifyPlugins("afterDatasetUpdate",i))}render(){this.notifyPlugins("beforeRender",{cancelable:!0})!==!1&&(mn.has(this)?this.attached&&!mn.running(this)&&mn.start(this):(this.draw(),pp({chart:this})))}draw(){let t;if(this._resizeBeforeDraw){const{width:s,height:i}=this._resizeBeforeDraw;this._resizeBeforeDraw=null,this._resize(s,i)}if(this.clear(),this.width<=0||this.height<=0||this.notifyPlugins("beforeDraw",{cancelable:!0})===!1)return;const e=this._layers;for(t=0;t<e.length&&e[t].z<=0;++t)e[t].draw(this.chartArea);for(this._drawDatasets();t<e.length;++t)e[t].draw(this.chartArea);this.notifyPlugins("afterDraw")}_getSortedDatasetMetas(t){const e=this._sortedMetasets,s=[];let i,r;for(i=0,r=e.length;i<r;++i){const o=e[i];(!t||o.visible)&&s.push(o)}return s}getSortedVisibleDatasetMetas(){return this._getSortedDatasetMetas(!0)}_drawDatasets(){if(this.notifyPlugins("beforeDatasetsDraw",{cancelable:!0})===!1)return;const t=this.getSortedVisibleDatasetMetas();for(let e=t.length-1;e>=0;--e)this._drawDataset(t[e]);this.notifyPlugins("afterDatasetsDraw")}_drawDataset(t){const e=this.ctx,s={meta:t,index:t.index,cancelable:!0},i=ny(this,t);this.notifyPlugins("beforeDatasetDraw",s)!==!1&&(i&&Xa(e,i),t.controller.draw(),i&&Qa(e),s.cancelable=!1,this.notifyPlugins("afterDatasetDraw",s))}isPointInArea(t){return Or(t,this.chartArea,this._minPadding)}getElementsAtEventForMode(t,e,s,i){const r=Hk.modes[e];return typeof r=="function"?r(this,t,s,i):[]}getDatasetMeta(t){const e=this.data.datasets[t],s=this._metasets;let i=s.filter(r=>r&&r._dataset===e).pop();return i||(i={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:e&&e.order||0,index:t,_dataset:e,_parsed:[],_sorted:!1},s.push(i)),i}getContext(){return this.$context||(this.$context=qs(null,{chart:this,type:"chart"}))}getVisibleDatasetCount(){return this.getSortedVisibleDatasetMetas().length}isDatasetVisible(t){const e=this.data.datasets[t];if(!e)return!1;const s=this.getDatasetMeta(t);return typeof s.hidden=="boolean"?!s.hidden:!e.hidden}setDatasetVisibility(t,e){const s=this.getDatasetMeta(t);s.hidden=!e}toggleDataVisibility(t){this._hiddenIndices[t]=!this._hiddenIndices[t]}getDataVisibility(t){return!this._hiddenIndices[t]}_updateVisibility(t,e,s){const i=s?"show":"hide",r=this.getDatasetMeta(t),o=r.controller._resolveAnimations(void 0,i);Dr(e)?(r.data[e].hidden=!s,this.update()):(this.setDatasetVisibility(t,s),o.update(r,{visible:s}),this.update(a=>a.datasetIndex===t?i:void 0))}hide(t,e){this._updateVisibility(t,e,!1)}show(t,e){this._updateVisibility(t,e,!0)}_destroyDatasetMeta(t){const e=this._metasets[t];e&&e.controller&&e.controller._destroy(),delete this._metasets[t]}_stop(){let t,e;for(this.stop(),mn.remove(this),t=0,e=this.data.datasets.length;t<e;++t)this._destroyDatasetMeta(t)}destroy(){this.notifyPlugins("beforeDestroy");const{canvas:t,ctx:e}=this;this._stop(),this.config.clearCache(),t&&(this.unbindEvents(),Lf(t,e),this.platform.releaseContext(e),this.canvas=null,this.ctx=null),delete Wo[this.id],this.notifyPlugins("afterDestroy")}toBase64Image(...t){return this.canvas.toDataURL(...t)}bindEvents(){this.bindUserEvents(),this.options.responsive?this.bindResponsiveEvents():this.attached=!0}bindUserEvents(){const t=this._listeners,e=this.platform,s=(r,o)=>{e.addEventListener(this,r,o),t[r]=o},i=(r,o,a)=>{r.offsetX=o,r.offsetY=a,this._eventHandler(r)};Et(this.options.events,r=>s(r,i))}bindResponsiveEvents(){this._responsiveListeners||(this._responsiveListeners={});const t=this._responsiveListeners,e=this.platform,s=(l,u)=>{e.addEventListener(this,l,u),t[l]=u},i=(l,u)=>{t[l]&&(e.removeEventListener(this,l,u),delete t[l])},r=(l,u)=>{this.canvas&&this.resize(l,u)};let o;const a=()=>{i("attach",a),this.attached=!0,this.resize(),s("resize",r),s("detach",o)};o=()=>{this.attached=!1,i("resize",r),this._stop(),this._resize(0,0),s("attach",a)},e.isAttached(this.canvas)?a():o()}unbindEvents(){Et(this._listeners,(t,e)=>{this.platform.removeEventListener(this,e,t)}),this._listeners={},Et(this._responsiveListeners,(t,e)=>{this.platform.removeEventListener(this,e,t)}),this._responsiveListeners=void 0}updateHoverStyle(t,e,s){const i=s?"set":"remove";let r,o,a,l;for(e==="dataset"&&(r=this.getDatasetMeta(t[0].datasetIndex),r.controller["_"+i+"DatasetHoverStyle"]()),a=0,l=t.length;a<l;++a){o=t[a];const u=o&&this.getDatasetMeta(o.datasetIndex).controller;u&&u[i+"HoverStyle"](o.element,o.datasetIndex,o.index)}}getActiveElements(){return this._active||[]}setActiveElements(t){const e=this._active||[],s=t.map(({datasetIndex:r,index:o})=>{const a=this.getDatasetMeta(r);if(!a)throw new Error("No dataset found at index "+r);return{datasetIndex:r,element:a.data[o],index:o}});!_a(s,e)&&(this._active=s,this._lastEvent=null,this._updateHoverStyles(s,e))}notifyPlugins(t,e,s){return this._plugins.notify(this,t,e,s)}isPluginEnabled(t){return this._plugins._cache.filter(e=>e.plugin.id===t).length===1}_updateHoverStyles(t,e,s){const i=this.options.hover,r=(l,u)=>l.filter(h=>!u.some(d=>h.datasetIndex===d.datasetIndex&&h.index===d.index)),o=r(e,t),a=s?t:r(t,e);o.length&&this.updateHoverStyle(o,i.mode,!1),a.length&&i.mode&&this.updateHoverStyle(a,i.mode,!0)}_eventHandler(t,e){const s={event:t,replay:e,cancelable:!0,inChartArea:this.isPointInArea(t)},i=o=>(o.options.events||this.options.events).includes(t.native.type);if(this.notifyPlugins("beforeEvent",s,i)===!1)return;const r=this._handleEvent(t,e,s.inChartArea);return s.cancelable=!1,this.notifyPlugins("afterEvent",s,i),(r||s.changed)&&this.render(),this}_handleEvent(t,e,s){const{_active:i=[],options:r}=this,o=e,a=this._getActiveElements(t,i,s,o),l=ZA(t),u=KR(t,this._lastEvent,s,l);s&&(this._lastEvent=null,Rt(r.onHover,[t,a,this],this),l&&Rt(r.onClick,[t,a,this],this));const h=!_a(a,i);return(h||e)&&(this._active=a,this._updateHoverStyles(a,i,e)),this._lastEvent=u,h}_getActiveElements(t,e,s,i){if(t.type==="mouseout")return[];if(!s)return e;const r=this.options.hover;return this.getElementsAtEventForMode(t,r.mode,r,i)}}$(bn,"defaults",jt),$(bn,"instances",Wo),$(bn,"overrides",Fs),$(bn,"registry",Je),$(bn,"version",jR),$(bn,"getChart",gp);function mp(){return Et(bn.instances,n=>n._plugins.invalidate())}function GR(n,t,e){const{startAngle:s,x:i,y:r,outerRadius:o,innerRadius:a,options:l}=t,{borderWidth:u,borderJoinStyle:h}=l,d=Math.min(u/o,ke(s-e));if(n.beginPath(),n.arc(i,r,o-u/2,s+d/2,e-d/2),a>0){const p=Math.min(u/a,ke(s-e));n.arc(i,r,a+u/2,e-p/2,s+p/2,!0)}else{const p=Math.min(u/2,o*ke(s-e));if(h==="round")n.arc(i,r,p,e-At/2,s+At/2,!0);else if(h==="bevel"){const _=2*p*p,v=-_*Math.cos(e+At/2)+i,E=-_*Math.sin(e+At/2)+r,w=_*Math.cos(s+At/2)+i,P=_*Math.sin(s+At/2)+r;n.lineTo(v,E),n.lineTo(w,P)}}n.closePath(),n.moveTo(0,0),n.rect(0,0,n.canvas.width,n.canvas.height),n.clip("evenodd")}function YR(n,t,e){const{startAngle:s,pixelMargin:i,x:r,y:o,outerRadius:a,innerRadius:l}=t;let u=i/a;n.beginPath(),n.arc(r,o,a,s-u,e+u),l>i?(u=i/l,n.arc(r,o,l,e+u,s-u,!0)):n.arc(r,o,i,e+Qt,s-Qt),n.closePath(),n.clip()}function XR(n){return ju(n,["outerStart","outerEnd","innerStart","innerEnd"])}function QR(n,t,e,s){const i=XR(n.options.borderRadius),r=(e-t)/2,o=Math.min(r,s*t/2),a=l=>{const u=(e-Math.min(r,l))*s/2;return fe(l,0,Math.min(r,u))};return{outerStart:a(i.outerStart),outerEnd:a(i.outerEnd),innerStart:fe(i.innerStart,0,o),innerEnd:fe(i.innerEnd,0,o)}}function Qs(n,t,e,s){return{x:e+n*Math.cos(t),y:s+n*Math.sin(t)}}function Ia(n,t,e,s,i,r){const{x:o,y:a,startAngle:l,pixelMargin:u,innerRadius:h}=t,d=Math.max(t.outerRadius+s+e-u,0),p=h>0?h+s+e+u:0;let _=0;const v=i-l;if(s){const K=h>0?h-s:0,it=d>0?d-s:0,j=(K+it)/2,rt=j!==0?v*j/(j+s):v;_=(v-rt)/2}const E=Math.max(.001,v*d-e/At)/d,w=(v-E)/2,P=l+w+_,R=i-w-_,{outerStart:k,outerEnd:C,innerStart:M,innerEnd:L}=QR(t,p,d,R-P),S=d-k,g=d-C,y=P+k/S,b=R-C/g,T=p+M,A=p+L,x=P+M/T,W=R-L/A;if(n.beginPath(),r){const K=(y+b)/2;if(n.arc(o,a,d,y,K),n.arc(o,a,d,K,b),C>0){const B=Qs(g,b,o,a);n.arc(B.x,B.y,C,b,R+Qt)}const it=Qs(A,R,o,a);if(n.lineTo(it.x,it.y),L>0){const B=Qs(A,W,o,a);n.arc(B.x,B.y,L,R+Qt,W+Math.PI)}const j=(R-L/p+(P+M/p))/2;if(n.arc(o,a,p,R-L/p,j,!0),n.arc(o,a,p,j,P+M/p,!0),M>0){const B=Qs(T,x,o,a);n.arc(B.x,B.y,M,x+Math.PI,P-Qt)}const rt=Qs(S,P,o,a);if(n.lineTo(rt.x,rt.y),k>0){const B=Qs(S,y,o,a);n.arc(B.x,B.y,k,P-Qt,y)}}else{n.moveTo(o,a);const K=Math.cos(y)*d+o,it=Math.sin(y)*d+a;n.lineTo(K,it);const j=Math.cos(b)*d+o,rt=Math.sin(b)*d+a;n.lineTo(j,rt)}n.closePath()}function JR(n,t,e,s,i){const{fullCircles:r,startAngle:o,circumference:a}=t;let l=t.endAngle;if(r){Ia(n,t,e,s,l,i);for(let u=0;u<r;++u)n.fill();isNaN(a)||(l=o+(a%Ot||Ot))}return Ia(n,t,e,s,l,i),n.fill(),l}function ZR(n,t,e,s,i){const{fullCircles:r,startAngle:o,circumference:a,options:l}=t,{borderWidth:u,borderJoinStyle:h,borderDash:d,borderDashOffset:p,borderRadius:_}=l,v=l.borderAlign==="inner";if(!u)return;n.setLineDash(d||[]),n.lineDashOffset=p,v?(n.lineWidth=u*2,n.lineJoin=h||"round"):(n.lineWidth=u,n.lineJoin=h||"bevel");let E=t.endAngle;if(r){Ia(n,t,e,s,E,i);for(let w=0;w<r;++w)n.stroke();isNaN(a)||(E=o+(a%Ot||Ot))}v&&YR(n,t,E),l.selfJoin&&E-o>=At&&_===0&&h!=="miter"&&GR(n,t,E),r||(Ia(n,t,e,s,E,i),n.stroke())}class sr extends hn{constructor(e){super();$(this,"circumference");$(this,"endAngle");$(this,"fullCircles");$(this,"innerRadius");$(this,"outerRadius");$(this,"pixelMargin");$(this,"startAngle");this.options=void 0,this.circumference=void 0,this.startAngle=void 0,this.endAngle=void 0,this.innerRadius=void 0,this.outerRadius=void 0,this.pixelMargin=0,this.fullCircles=0,e&&Object.assign(this,e)}inRange(e,s,i){const r=this.getProps(["x","y"],i),{angle:o,distance:a}=L_(r,{x:e,y:s}),{startAngle:l,endAngle:u,innerRadius:h,outerRadius:d,circumference:p}=this.getProps(["startAngle","endAngle","innerRadius","outerRadius","circumference"],i),_=(this.options.spacing+this.options.borderWidth)/2,v=st(p,u-l),E=Mr(o,l,u)&&l!==u,w=v>=Ot||E,P=In(a,h+_,d+_);return w&&P}getCenterPoint(e){const{x:s,y:i,startAngle:r,endAngle:o,innerRadius:a,outerRadius:l}=this.getProps(["x","y","startAngle","endAngle","innerRadius","outerRadius"],e),{offset:u,spacing:h}=this.options,d=(r+o)/2,p=(a+l+h+u)/2;return{x:s+Math.cos(d)*p,y:i+Math.sin(d)*p}}tooltipPosition(e){return this.getCenterPoint(e)}draw(e){const{options:s,circumference:i}=this,r=(s.offset||0)/4,o=(s.spacing||0)/2,a=s.circular;if(this.pixelMargin=s.borderAlign==="inner"?.33:0,this.fullCircles=i>Ot?Math.floor(i/Ot):0,i===0||this.innerRadius<0||this.outerRadius<0)return;e.save();const l=(this.startAngle+this.endAngle)/2;e.translate(Math.cos(l)*r,Math.sin(l)*r);const u=1-Math.sin(Math.min(At,i||0)),h=r*u;e.fillStyle=s.backgroundColor,e.strokeStyle=s.borderColor,JR(e,this,h,o,a),ZR(e,this,h,o,a),e.restore()}}$(sr,"id","arc"),$(sr,"defaults",{borderAlign:"center",borderColor:"#fff",borderDash:[],borderDashOffset:0,borderJoinStyle:void 0,borderRadius:0,borderWidth:2,offset:0,spacing:0,angle:void 0,circular:!0,selfJoin:!1}),$(sr,"defaultRoutes",{backgroundColor:"backgroundColor"}),$(sr,"descriptors",{_scriptable:!0,_indexable:e=>e!=="borderDash"});function gy(n,t,e=t){n.lineCap=st(e.borderCapStyle,t.borderCapStyle),n.setLineDash(st(e.borderDash,t.borderDash)),n.lineDashOffset=st(e.borderDashOffset,t.borderDashOffset),n.lineJoin=st(e.borderJoinStyle,t.borderJoinStyle),n.lineWidth=st(e.borderWidth,t.borderWidth),n.strokeStyle=st(e.borderColor,t.borderColor)}function tC(n,t,e){n.lineTo(e.x,e.y)}function eC(n){return n.stepped?IP:n.tension||n.cubicInterpolationMode==="monotone"?SP:tC}function my(n,t,e={}){const s=n.length,{start:i=0,end:r=s-1}=e,{start:o,end:a}=t,l=Math.max(i,o),u=Math.min(r,a),h=i<o&&r<o||i>a&&r>a;return{count:s,start:l,loop:t.loop,ilen:u<l&&!h?s+u-l:u-l}}function nC(n,t,e,s){const{points:i,options:r}=t,{count:o,start:a,loop:l,ilen:u}=my(i,e,s),h=eC(r);let{move:d=!0,reverse:p}=s||{},_,v,E;for(_=0;_<=u;++_)v=i[(a+(p?u-_:_))%o],!v.skip&&(d?(n.moveTo(v.x,v.y),d=!1):h(n,E,v,p,r.stepped),E=v);return l&&(v=i[(a+(p?u:0))%o],h(n,E,v,p,r.stepped)),!!l}function sC(n,t,e,s){const i=t.points,{count:r,start:o,ilen:a}=my(i,e,s),{move:l=!0,reverse:u}=s||{};let h=0,d=0,p,_,v,E,w,P;const R=C=>(o+(u?a-C:C))%r,k=()=>{E!==w&&(n.lineTo(h,w),n.lineTo(h,E),n.lineTo(h,P))};for(l&&(_=i[R(0)],n.moveTo(_.x,_.y)),p=0;p<=a;++p){if(_=i[R(p)],_.skip)continue;const C=_.x,M=_.y,L=C|0;L===v?(M<E?E=M:M>w&&(w=M),h=(d*h+C)/++d):(k(),n.lineTo(C,M),v=L,d=0,E=w=M),P=M}k()}function Sc(n){const t=n.options,e=t.borderDash&&t.borderDash.length;return!n._decimated&&!n._loop&&!t.tension&&t.cubicInterpolationMode!=="monotone"&&!t.stepped&&!e?sC:nC}function iC(n){return n.stepped?sk:n.tension||n.cubicInterpolationMode==="monotone"?ik:ws}function rC(n,t,e,s){let i=t._path;i||(i=t._path=new Path2D,t.path(i,e,s)&&i.closePath()),gy(n,t.options),n.stroke(i)}function oC(n,t,e,s){const{segments:i,options:r}=t,o=Sc(t);for(const a of i)gy(n,r,a.style),n.beginPath(),o(n,t,a,{start:e,end:e+s-1})&&n.closePath(),n.stroke()}const aC=typeof Path2D=="function";function lC(n,t,e,s){aC&&!t.options.segment?rC(n,t,e,s):oC(n,t,e,s)}class Gn extends hn{constructor(t){super(),this.animated=!0,this.options=void 0,this._chart=void 0,this._loop=void 0,this._fullLoop=void 0,this._path=void 0,this._points=void 0,this._segments=void 0,this._decimated=!1,this._pointsUpdated=!1,this._datasetIndex=void 0,t&&Object.assign(this,t)}updateControlPoints(t,e){const s=this.options;if((s.tension||s.cubicInterpolationMode==="monotone")&&!s.stepped&&!this._pointsUpdated){const i=s.spanGaps?this._loop:this._fullLoop;YP(this._points,s,t,i,e),this._pointsUpdated=!0}}set points(t){this._points=t,delete this._segments,delete this._path,this._pointsUpdated=!1}get points(){return this._points}get segments(){return this._segments||(this._segments=uk(this,this.options.segment))}first(){const t=this.segments,e=this.points;return t.length&&e[t[0].start]}last(){const t=this.segments,e=this.points,s=t.length;return s&&e[t[s-1].end]}interpolate(t,e){const s=this.options,i=t[e],r=this.points,o=ey(this,{property:e,start:i,end:i});if(!o.length)return;const a=[],l=iC(s);let u,h;for(u=0,h=o.length;u<h;++u){const{start:d,end:p}=o[u],_=r[d],v=r[p];if(_===v){a.push(_);continue}const E=Math.abs((i-_[e])/(v[e]-_[e])),w=l(_,v,E,s.stepped);w[e]=t[e],a.push(w)}return a.length===1?a[0]:a}pathSegment(t,e,s){return Sc(this)(t,this,e,s)}path(t,e,s){const i=this.segments,r=Sc(this);let o=this._loop;e=e||0,s=s||this.points.length-e;for(const a of i)o&=r(t,this,a,{start:e,end:e+s-1});return!!o}draw(t,e,s,i){const r=this.options||{};(this.points||[]).length&&r.borderWidth&&(t.save(),lC(t,this,s,i),t.restore()),this.animated&&(this._pointsUpdated=!1,this._path=void 0)}}$(Gn,"id","line"),$(Gn,"defaults",{borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderWidth:3,capBezierPoints:!0,cubicInterpolationMode:"default",fill:!1,spanGaps:!1,stepped:!1,tension:0}),$(Gn,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"}),$(Gn,"descriptors",{_scriptable:!0,_indexable:t=>t!=="borderDash"&&t!=="fill"});function _p(n,t,e,s){const i=n.options,{[e]:r}=n.getProps([e],s);return Math.abs(t-r)<i.radius+i.hitRadius}class Ko extends hn{constructor(e){super();$(this,"parsed");$(this,"skip");$(this,"stop");this.options=void 0,this.parsed=void 0,this.skip=void 0,this.stop=void 0,e&&Object.assign(this,e)}inRange(e,s,i){const r=this.options,{x:o,y:a}=this.getProps(["x","y"],i);return Math.pow(e-o,2)+Math.pow(s-a,2)<Math.pow(r.hitRadius+r.radius,2)}inXRange(e,s){return _p(this,e,"x",s)}inYRange(e,s){return _p(this,e,"y",s)}getCenterPoint(e){const{x:s,y:i}=this.getProps(["x","y"],e);return{x:s,y:i}}size(e){e=e||this.options||{};let s=e.radius||0;s=Math.max(s,s&&e.hoverRadius||0);const i=s&&e.borderWidth||0;return(s+i)*2}draw(e,s){const i=this.options;this.skip||i.radius<.1||!Or(this,s,this.size(i)/2)||(e.strokeStyle=i.borderColor,e.lineWidth=i.borderWidth,e.fillStyle=i.backgroundColor,Ec(e,i,this.x,this.y))}getRange(){const e=this.options||{};return e.radius+e.hitRadius}}$(Ko,"id","point"),$(Ko,"defaults",{borderWidth:1,hitRadius:1,hoverBorderWidth:1,hoverRadius:4,pointStyle:"circle",radius:3,rotation:0}),$(Ko,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});function _y(n,t){const{x:e,y:s,base:i,width:r,height:o}=n.getProps(["x","y","base","width","height"],t);let a,l,u,h,d;return n.horizontal?(d=o/2,a=Math.min(e,i),l=Math.max(e,i),u=s-d,h=s+d):(d=r/2,a=e-d,l=e+d,u=Math.min(s,i),h=Math.max(s,i)),{left:a,top:u,right:l,bottom:h}}function Yn(n,t,e,s){return n?0:fe(t,e,s)}function cC(n,t,e){const s=n.options.borderWidth,i=n.borderSkipped,r=q_(s);return{t:Yn(i.top,r.top,0,e),r:Yn(i.right,r.right,0,t),b:Yn(i.bottom,r.bottom,0,e),l:Yn(i.left,r.left,0,t)}}function uC(n,t,e){const{enableBorderRadius:s}=n.getProps(["enableBorderRadius"]),i=n.options.borderRadius,r=hi(i),o=Math.min(t,e),a=n.borderSkipped,l=s||ht(i);return{topLeft:Yn(!l||a.top||a.left,r.topLeft,0,o),topRight:Yn(!l||a.top||a.right,r.topRight,0,o),bottomLeft:Yn(!l||a.bottom||a.left,r.bottomLeft,0,o),bottomRight:Yn(!l||a.bottom||a.right,r.bottomRight,0,o)}}function hC(n){const t=_y(n),e=t.right-t.left,s=t.bottom-t.top,i=cC(n,e/2,s/2),r=uC(n,e/2,s/2);return{outer:{x:t.left,y:t.top,w:e,h:s,radius:r},inner:{x:t.left+i.l,y:t.top+i.t,w:e-i.l-i.r,h:s-i.t-i.b,radius:{topLeft:Math.max(0,r.topLeft-Math.max(i.t,i.l)),topRight:Math.max(0,r.topRight-Math.max(i.t,i.r)),bottomLeft:Math.max(0,r.bottomLeft-Math.max(i.b,i.l)),bottomRight:Math.max(0,r.bottomRight-Math.max(i.b,i.r))}}}}function jl(n,t,e,s){const i=t===null,r=e===null,a=n&&!(i&&r)&&_y(n,s);return a&&(i||In(t,a.left,a.right))&&(r||In(e,a.top,a.bottom))}function dC(n){return n.topLeft||n.topRight||n.bottomLeft||n.bottomRight}function fC(n,t){n.rect(t.x,t.y,t.w,t.h)}function Hl(n,t,e={}){const s=n.x!==e.x?-t:0,i=n.y!==e.y?-t:0,r=(n.x+n.w!==e.x+e.w?t:0)-s,o=(n.y+n.h!==e.y+e.h?t:0)-i;return{x:n.x+s,y:n.y+i,w:n.w+r,h:n.h+o,radius:n.radius}}class Go extends hn{constructor(t){super(),this.options=void 0,this.horizontal=void 0,this.base=void 0,this.width=void 0,this.height=void 0,this.inflateAmount=void 0,t&&Object.assign(this,t)}draw(t){const{inflateAmount:e,options:{borderColor:s,backgroundColor:i}}=this,{inner:r,outer:o}=hC(this),a=dC(o.radius)?wa:fC;t.save(),(o.w!==r.w||o.h!==r.h)&&(t.beginPath(),a(t,Hl(o,e,r)),t.clip(),a(t,Hl(r,-e,o)),t.fillStyle=s,t.fill("evenodd")),t.beginPath(),a(t,Hl(r,e)),t.fillStyle=i,t.fill(),t.restore()}inRange(t,e,s){return jl(this,t,e,s)}inXRange(t,e){return jl(this,t,null,e)}inYRange(t,e){return jl(this,null,t,e)}getCenterPoint(t){const{x:e,y:s,base:i,horizontal:r}=this.getProps(["x","y","base","horizontal"],t);return{x:r?(e+i)/2:e,y:r?s:(s+i)/2}}getRange(t){return t==="x"?this.width/2:this.height/2}}$(Go,"id","bar"),$(Go,"defaults",{borderSkipped:"start",borderWidth:0,borderRadius:0,inflateAmount:"auto",pointStyle:void 0}),$(Go,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});function pC(n,t,e){const s=n.segments,i=n.points,r=t.points,o=[];for(const a of s){let{start:l,end:u}=a;u=tl(l,u,i);const h=xc(e,i[l],i[u],a.loop);if(!t.segments){o.push({source:a,target:h,start:i[l],end:i[u]});continue}const d=ey(t,h);for(const p of d){const _=xc(e,r[p.start],r[p.end],p.loop),v=ty(a,i,_);for(const E of v)o.push({source:E,target:p,start:{[e]:yp(h,_,"start",Math.max)},end:{[e]:yp(h,_,"end",Math.min)}})}}return o}function xc(n,t,e,s){if(s)return;let i=t[n],r=e[n];return n==="angle"&&(i=ke(i),r=ke(r)),{property:n,start:i,end:r}}function gC(n,t){const{x:e=null,y:s=null}=n||{},i=t.points,r=[];return t.segments.forEach(({start:o,end:a})=>{a=tl(o,a,i);const l=i[o],u=i[a];s!==null?(r.push({x:l.x,y:s}),r.push({x:u.x,y:s})):e!==null&&(r.push({x:e,y:l.y}),r.push({x:e,y:u.y}))}),r}function tl(n,t,e){for(;t>n;t--){const s=e[t];if(!isNaN(s.x)&&!isNaN(s.y))break}return t}function yp(n,t,e,s){return n&&t?s(n[e],t[e]):n?n[e]:t?t[e]:0}function yy(n,t){let e=[],s=!1;return Xt(n)?(s=!0,e=n):e=gC(n,t),e.length?new Gn({points:e,options:{tension:0},_loop:s,_fullLoop:s}):null}function bp(n){return n&&n.fill!==!1}function mC(n,t,e){let i=n[t].fill;const r=[t];let o;if(!e)return i;for(;i!==!1&&r.indexOf(i)===-1;){if(!ge(i))return i;if(o=n[i],!o)return!1;if(o.visible)return i;r.push(i),i=o.fill}return!1}function _C(n,t,e){const s=wC(n);if(ht(s))return isNaN(s.value)?!1:s;let i=parseFloat(s);return ge(i)&&Math.floor(i)===i?yC(s[0],t,i,e):["origin","start","end","stack","shape"].indexOf(s)>=0&&s}function yC(n,t,e,s){return(n==="-"||n==="+")&&(e=t+e),e===t||e<0||e>=s?!1:e}function bC(n,t){let e=null;return n==="start"?e=t.bottom:n==="end"?e=t.top:ht(n)?e=t.getPixelForValue(n.value):t.getBasePixel&&(e=t.getBasePixel()),e}function vC(n,t,e){let s;return n==="start"?s=e:n==="end"?s=t.options.reverse?t.min:t.max:ht(n)?s=n.value:s=t.getBaseValue(),s}function wC(n){const t=n.options,e=t.fill;let s=st(e&&e.target,e);return s===void 0&&(s=!!t.backgroundColor),s===!1||s===null?!1:s===!0?"origin":s}function EC(n){const{scale:t,index:e,line:s}=n,i=[],r=s.segments,o=s.points,a=TC(t,e);a.push(yy({x:null,y:t.bottom},s));for(let l=0;l<r.length;l++){const u=r[l];for(let h=u.start;h<=u.end;h++)IC(i,o[h],a)}return new Gn({points:i,options:{}})}function TC(n,t){const e=[],s=n.getMatchingVisibleMetas("line");for(let i=0;i<s.length;i++){const r=s[i];if(r.index===t)break;r.hidden||e.unshift(r.dataset)}return e}function IC(n,t,e){const s=[];for(let i=0;i<e.length;i++){const r=e[i],{first:o,last:a,point:l}=SC(r,t,"x");if(!(!l||o&&a)){if(o)s.unshift(l);else if(n.push(l),!a)break}}n.push(...s)}function SC(n,t,e){const s=n.interpolate(t,e);if(!s)return{};const i=s[e],r=n.segments,o=n.points;let a=!1,l=!1;for(let u=0;u<r.length;u++){const h=r[u],d=o[h.start][e],p=o[h.end][e];if(In(i,d,p)){a=i===d,l=i===p;break}}return{first:a,last:l,point:s}}class by{constructor(t){this.x=t.x,this.y=t.y,this.radius=t.radius}pathSegment(t,e,s){const{x:i,y:r,radius:o}=this;return e=e||{start:0,end:Ot},t.arc(i,r,o,e.end,e.start,!0),!s.bounds}interpolate(t){const{x:e,y:s,radius:i}=this,r=t.angle;return{x:e+Math.cos(r)*i,y:s+Math.sin(r)*i,angle:r}}}function xC(n){const{chart:t,fill:e,line:s}=n;if(ge(e))return AC(t,e);if(e==="stack")return EC(n);if(e==="shape")return!0;const i=PC(n);return i instanceof by?i:yy(i,s)}function AC(n,t){const e=n.getDatasetMeta(t);return e&&n.isDatasetVisible(t)?e.dataset:null}function PC(n){return(n.scale||{}).getPointPositionForValue?RC(n):kC(n)}function kC(n){const{scale:t={},fill:e}=n,s=bC(e,t);if(ge(s)){const i=t.isHorizontal();return{x:i?s:null,y:i?null:s}}return null}function RC(n){const{scale:t,fill:e}=n,s=t.options,i=t.getLabels().length,r=s.reverse?t.max:t.min,o=vC(e,t,r),a=[];if(s.grid.circular){const l=t.getPointPositionForValue(0,r);return new by({x:l.x,y:l.y,radius:t.getDistanceFromCenterForValue(o)})}for(let l=0;l<i;++l)a.push(t.getPointPositionForValue(l,o));return a}function ql(n,t,e){const s=xC(t),{chart:i,index:r,line:o,scale:a,axis:l}=t,u=o.options,h=u.fill,d=u.backgroundColor,{above:p=d,below:_=d}=h||{},v=i.getDatasetMeta(r),E=ny(i,v);s&&o.points.length&&(Xa(n,e),CC(n,{line:o,target:s,above:p,below:_,area:e,scale:a,axis:l,clip:E}),Qa(n))}function CC(n,t){const{line:e,target:s,above:i,below:r,area:o,scale:a,clip:l}=t,u=e._loop?"angle":t.axis;n.save();let h=r;r!==i&&(u==="x"?(vp(n,s,o.top),Wl(n,{line:e,target:s,color:i,scale:a,property:u,clip:l}),n.restore(),n.save(),vp(n,s,o.bottom)):u==="y"&&(wp(n,s,o.left),Wl(n,{line:e,target:s,color:r,scale:a,property:u,clip:l}),n.restore(),n.save(),wp(n,s,o.right),h=i)),Wl(n,{line:e,target:s,color:h,scale:a,property:u,clip:l}),n.restore()}function vp(n,t,e){const{segments:s,points:i}=t;let r=!0,o=!1;n.beginPath();for(const a of s){const{start:l,end:u}=a,h=i[l],d=i[tl(l,u,i)];r?(n.moveTo(h.x,h.y),r=!1):(n.lineTo(h.x,e),n.lineTo(h.x,h.y)),o=!!t.pathSegment(n,a,{move:o}),o?n.closePath():n.lineTo(d.x,e)}n.lineTo(t.first().x,e),n.closePath(),n.clip()}function wp(n,t,e){const{segments:s,points:i}=t;let r=!0,o=!1;n.beginPath();for(const a of s){const{start:l,end:u}=a,h=i[l],d=i[tl(l,u,i)];r?(n.moveTo(h.x,h.y),r=!1):(n.lineTo(e,h.y),n.lineTo(h.x,h.y)),o=!!t.pathSegment(n,a,{move:o}),o?n.closePath():n.lineTo(e,d.y)}n.lineTo(e,t.first().y),n.closePath(),n.clip()}function Wl(n,t){const{line:e,target:s,property:i,color:r,scale:o,clip:a}=t,l=pC(e,s,i);for(const{source:u,target:h,start:d,end:p}of l){const{style:{backgroundColor:_=r}={}}=u,v=s!==!0;n.save(),n.fillStyle=_,DC(n,o,a,v&&xc(i,d,p)),n.beginPath();const E=!!e.pathSegment(n,u);let w;if(v){E?n.closePath():Ep(n,s,p,i);const P=!!s.pathSegment(n,h,{move:E,reverse:!0});w=E&&P,w||Ep(n,s,d,i)}n.closePath(),n.fill(w?"evenodd":"nonzero"),n.restore()}}function DC(n,t,e,s){const i=t.chart.chartArea,{property:r,start:o,end:a}=s||{};if(r==="x"||r==="y"){let l,u,h,d;r==="x"?(l=o,u=i.top,h=a,d=i.bottom):(l=i.left,u=o,h=i.right,d=a),n.beginPath(),e&&(l=Math.max(l,e.left),h=Math.min(h,e.right),u=Math.max(u,e.top),d=Math.min(d,e.bottom)),n.rect(l,u,h-l,d-u),n.clip()}}function Ep(n,t,e,s){const i=t.interpolate(e,s);i&&n.lineTo(i.x,i.y)}var MC={id:"filler",afterDatasetsUpdate(n,t,e){const s=(n.data.datasets||[]).length,i=[];let r,o,a,l;for(o=0;o<s;++o)r=n.getDatasetMeta(o),a=r.dataset,l=null,a&&a.options&&a instanceof Gn&&(l={visible:n.isDatasetVisible(o),index:o,fill:_C(a,o,s),chart:n,axis:r.controller.options.indexAxis,scale:r.vScale,line:a}),r.$filler=l,i.push(l);for(o=0;o<s;++o)l=i[o],!(!l||l.fill===!1)&&(l.fill=mC(i,o,e.propagate))},beforeDraw(n,t,e){const s=e.drawTime==="beforeDraw",i=n.getSortedVisibleDatasetMetas(),r=n.chartArea;for(let o=i.length-1;o>=0;--o){const a=i[o].$filler;a&&(a.line.updateControlPoints(r,a.axis),s&&a.fill&&ql(n.ctx,a,r))}},beforeDatasetsDraw(n,t,e){if(e.drawTime!=="beforeDatasetsDraw")return;const s=n.getSortedVisibleDatasetMetas();for(let i=s.length-1;i>=0;--i){const r=s[i].$filler;bp(r)&&ql(n.ctx,r,n.chartArea)}},beforeDatasetDraw(n,t,e){const s=t.meta.$filler;!bp(s)||e.drawTime!=="beforeDatasetDraw"||ql(n.ctx,s,n.chartArea)},defaults:{propagate:!0,drawTime:"beforeDatasetDraw"}};const Tp=(n,t)=>{let{boxHeight:e=t,boxWidth:s=t}=n;return n.usePointStyle&&(e=Math.min(e,t),s=n.pointStyleWidth||Math.min(s,t)),{boxWidth:s,boxHeight:e,itemHeight:Math.max(t,e)}},OC=(n,t)=>n!==null&&t!==null&&n.datasetIndex===t.datasetIndex&&n.index===t.index;class Ip extends hn{constructor(t){super(),this._added=!1,this.legendHitBoxes=[],this._hoveredItem=null,this.doughnutMode=!1,this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this.legendItems=void 0,this.columnSizes=void 0,this.lineWidths=void 0,this.maxHeight=void 0,this.maxWidth=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.height=void 0,this.width=void 0,this._margins=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,e,s){this.maxWidth=t,this.maxHeight=e,this._margins=s,this.setDimensions(),this.buildLabels(),this.fit()}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=this._margins.left,this.right=this.width):(this.height=this.maxHeight,this.top=this._margins.top,this.bottom=this.height)}buildLabels(){const t=this.options.labels||{};let e=Rt(t.generateLabels,[this.chart],this)||[];t.filter&&(e=e.filter(s=>t.filter(s,this.chart.data))),t.sort&&(e=e.sort((s,i)=>t.sort(s,i,this.chart.data))),this.options.reverse&&e.reverse(),this.legendItems=e}fit(){const{options:t,ctx:e}=this;if(!t.display){this.width=this.height=0;return}const s=t.labels,i=Ee(s.font),r=i.size,o=this._computeTitleHeight(),{boxWidth:a,itemHeight:l}=Tp(s,r);let u,h;e.font=i.string,this.isHorizontal()?(u=this.maxWidth,h=this._fitRows(o,r,a,l)+10):(h=this.maxHeight,u=this._fitCols(o,i,a,l)+10),this.width=Math.min(u,t.maxWidth||this.maxWidth),this.height=Math.min(h,t.maxHeight||this.maxHeight)}_fitRows(t,e,s,i){const{ctx:r,maxWidth:o,options:{labels:{padding:a}}}=this,l=this.legendHitBoxes=[],u=this.lineWidths=[0],h=i+a;let d=t;r.textAlign="left",r.textBaseline="middle";let p=-1,_=-h;return this.legendItems.forEach((v,E)=>{const w=s+e/2+r.measureText(v.text).width;(E===0||u[u.length-1]+w+2*a>o)&&(d+=h,u[u.length-(E>0?0:1)]=0,_+=h,p++),l[E]={left:0,top:_,row:p,width:w,height:i},u[u.length-1]+=w+a}),d}_fitCols(t,e,s,i){const{ctx:r,maxHeight:o,options:{labels:{padding:a}}}=this,l=this.legendHitBoxes=[],u=this.columnSizes=[],h=o-t;let d=a,p=0,_=0,v=0,E=0;return this.legendItems.forEach((w,P)=>{const{itemWidth:R,itemHeight:k}=LC(s,e,r,w,i);P>0&&_+k+2*a>h&&(d+=p+a,u.push({width:p,height:_}),v+=p+a,E++,p=_=0),l[P]={left:v,top:_,col:E,width:R,height:k},p=Math.max(p,R),_+=k+a}),d+=p,u.push({width:p,height:_}),d}adjustHitBoxes(){if(!this.options.display)return;const t=this._computeTitleHeight(),{legendHitBoxes:e,options:{align:s,labels:{padding:i},rtl:r}}=this,o=di(r,this.left,this.width);if(this.isHorizontal()){let a=0,l=Pe(s,this.left+i,this.right-this.lineWidths[a]);for(const u of e)a!==u.row&&(a=u.row,l=Pe(s,this.left+i,this.right-this.lineWidths[a])),u.top+=this.top+t+i,u.left=o.leftForLtr(o.x(l),u.width),l+=u.width+i}else{let a=0,l=Pe(s,this.top+t+i,this.bottom-this.columnSizes[a].height);for(const u of e)u.col!==a&&(a=u.col,l=Pe(s,this.top+t+i,this.bottom-this.columnSizes[a].height)),u.top=l,u.left+=this.left+i,u.left=o.leftForLtr(o.x(u.left),u.width),l+=u.height+i}}isHorizontal(){return this.options.position==="top"||this.options.position==="bottom"}draw(){if(this.options.display){const t=this.ctx;Xa(t,this),this._draw(),Qa(t)}}_draw(){const{options:t,columnSizes:e,lineWidths:s,ctx:i}=this,{align:r,labels:o}=t,a=jt.color,l=di(t.rtl,this.left,this.width),u=Ee(o.font),{padding:h}=o,d=u.size,p=d/2;let _;this.drawTitle(),i.textAlign=l.textAlign("left"),i.textBaseline="middle",i.lineWidth=.5,i.font=u.string;const{boxWidth:v,boxHeight:E,itemHeight:w}=Tp(o,d),P=function(L,S,g){if(isNaN(v)||v<=0||isNaN(E)||E<0)return;i.save();const y=st(g.lineWidth,1);if(i.fillStyle=st(g.fillStyle,a),i.lineCap=st(g.lineCap,"butt"),i.lineDashOffset=st(g.lineDashOffset,0),i.lineJoin=st(g.lineJoin,"miter"),i.lineWidth=y,i.strokeStyle=st(g.strokeStyle,a),i.setLineDash(st(g.lineDash,[])),o.usePointStyle){const b={radius:E*Math.SQRT2/2,pointStyle:g.pointStyle,rotation:g.rotation,borderWidth:y},T=l.xPlus(L,v/2),A=S+p;H_(i,b,T,A,o.pointStyleWidth&&v)}else{const b=S+Math.max((d-E)/2,0),T=l.leftForLtr(L,v),A=hi(g.borderRadius);i.beginPath(),Object.values(A).some(x=>x!==0)?wa(i,{x:T,y:b,w:v,h:E,radius:A}):i.rect(T,b,v,E),i.fill(),y!==0&&i.stroke()}i.restore()},R=function(L,S,g){va(i,g.text,L,S+w/2,u,{strikethrough:g.hidden,textAlign:l.textAlign(g.textAlign)})},k=this.isHorizontal(),C=this._computeTitleHeight();k?_={x:Pe(r,this.left+h,this.right-s[0]),y:this.top+h+C,line:0}:_={x:this.left+h,y:Pe(r,this.top+C+h,this.bottom-e[0].height),line:0},Q_(this.ctx,t.textDirection);const M=w+h;this.legendItems.forEach((L,S)=>{i.strokeStyle=L.fontColor,i.fillStyle=L.fontColor;const g=i.measureText(L.text).width,y=l.textAlign(L.textAlign||(L.textAlign=o.textAlign)),b=v+p+g;let T=_.x,A=_.y;l.setWidth(this.width),k?S>0&&T+b+h>this.right&&(A=_.y+=M,_.line++,T=_.x=Pe(r,this.left+h,this.right-s[_.line])):S>0&&A+M>this.bottom&&(T=_.x=T+e[_.line].width+h,_.line++,A=_.y=Pe(r,this.top+C+h,this.bottom-e[_.line].height));const x=l.x(T);if(P(x,A,L),T=fP(y,T+v+p,k?T+b:this.right,t.rtl),R(l.x(T),A,L),k)_.x+=b+h;else if(typeof L.text!="string"){const W=u.lineHeight;_.y+=vy(L,W)+h}else _.y+=M}),J_(this.ctx,t.textDirection)}drawTitle(){const t=this.options,e=t.title,s=Ee(e.font),i=Ke(e.padding);if(!e.display)return;const r=di(t.rtl,this.left,this.width),o=this.ctx,a=e.position,l=s.size/2,u=i.top+l;let h,d=this.left,p=this.width;if(this.isHorizontal())p=Math.max(...this.lineWidths),h=this.top+u,d=Pe(t.align,d,this.right-p);else{const v=this.columnSizes.reduce((E,w)=>Math.max(E,w.height),0);h=u+Pe(t.align,this.top,this.bottom-v-t.labels.padding-this._computeTitleHeight())}const _=Pe(a,d,d+p);o.textAlign=r.textAlign(B_(a)),o.textBaseline="middle",o.strokeStyle=e.color,o.fillStyle=e.color,o.font=s.string,va(o,e.text,_,h,s)}_computeTitleHeight(){const t=this.options.title,e=Ee(t.font),s=Ke(t.padding);return t.display?e.lineHeight+s.height:0}_getLegendItemAt(t,e){let s,i,r;if(In(t,this.left,this.right)&&In(e,this.top,this.bottom)){for(r=this.legendHitBoxes,s=0;s<r.length;++s)if(i=r[s],In(t,i.left,i.left+i.width)&&In(e,i.top,i.top+i.height))return this.legendItems[s]}return null}handleEvent(t){const e=this.options;if(!FC(t.type,e))return;const s=this._getLegendItemAt(t.x,t.y);if(t.type==="mousemove"||t.type==="mouseout"){const i=this._hoveredItem,r=OC(i,s);i&&!r&&Rt(e.onLeave,[t,i,this],this),this._hoveredItem=s,s&&!r&&Rt(e.onHover,[t,s,this],this)}else s&&Rt(e.onClick,[t,s,this],this)}}function LC(n,t,e,s,i){const r=NC(s,n,t,e),o=VC(i,s,t.lineHeight);return{itemWidth:r,itemHeight:o}}function NC(n,t,e,s){let i=n.text;return i&&typeof i!="string"&&(i=i.reduce((r,o)=>r.length>o.length?r:o)),t+e.size/2+s.measureText(i).width}function VC(n,t,e){let s=n;return typeof t.text!="string"&&(s=vy(t,e)),s}function vy(n,t){const e=n.text?n.text.length:0;return t*e}function FC(n,t){return!!((n==="mousemove"||n==="mouseout")&&(t.onHover||t.onLeave)||t.onClick&&(n==="click"||n==="mouseup"))}var UC={id:"legend",_element:Ip,start(n,t,e){const s=n.legend=new Ip({ctx:n.ctx,options:e,chart:n});Kn.configure(n,s,e),Kn.addBox(n,s)},stop(n){Kn.removeBox(n,n.legend),delete n.legend},beforeUpdate(n,t,e){const s=n.legend;Kn.configure(n,s,e),s.options=e},afterUpdate(n){const t=n.legend;t.buildLabels(),t.adjustHitBoxes()},afterEvent(n,t){t.replay||n.legend.handleEvent(t.event)},defaults:{display:!0,position:"top",align:"center",fullSize:!0,reverse:!1,weight:1e3,onClick(n,t,e){const s=t.datasetIndex,i=e.chart;i.isDatasetVisible(s)?(i.hide(s),t.hidden=!0):(i.show(s),t.hidden=!1)},onHover:null,onLeave:null,labels:{color:n=>n.chart.options.color,boxWidth:40,padding:10,generateLabels(n){const t=n.data.datasets,{labels:{usePointStyle:e,pointStyle:s,textAlign:i,color:r,useBorderRadius:o,borderRadius:a}}=n.legend.options;return n._getSortedDatasetMetas().map(l=>{const u=l.controller.getStyle(e?0:void 0),h=Ke(u.borderWidth);return{text:t[l.index].label,fillStyle:u.backgroundColor,fontColor:r,hidden:!l.visible,lineCap:u.borderCapStyle,lineDash:u.borderDash,lineDashOffset:u.borderDashOffset,lineJoin:u.borderJoinStyle,lineWidth:(h.width+h.height)/4,strokeStyle:u.borderColor,pointStyle:s||u.pointStyle,rotation:u.rotation,textAlign:i||u.textAlign,borderRadius:o&&(a||u.borderRadius),datasetIndex:l.index}},this)}},title:{color:n=>n.chart.options.color,display:!1,position:"center",text:""}},descriptors:{_scriptable:n=>!n.startsWith("on"),labels:{_scriptable:n=>!["generateLabels","filter","sort"].includes(n)}}};const ir={average(n){if(!n.length)return!1;let t,e,s=new Set,i=0,r=0;for(t=0,e=n.length;t<e;++t){const a=n[t].element;if(a&&a.hasValue()){const l=a.tooltipPosition();s.add(l.x),i+=l.y,++r}}return r===0||s.size===0?!1:{x:[...s].reduce((a,l)=>a+l)/s.size,y:i/r}},nearest(n,t){if(!n.length)return!1;let e=t.x,s=t.y,i=Number.POSITIVE_INFINITY,r,o,a;for(r=0,o=n.length;r<o;++r){const l=n[r].element;if(l&&l.hasValue()){const u=l.getCenterPoint(),h=vc(t,u);h<i&&(i=h,a=l)}}if(a){const l=a.tooltipPosition();e=l.x,s=l.y}return{x:e,y:s}}};function Qe(n,t){return t&&(Xt(t)?Array.prototype.push.apply(n,t):n.push(t)),n}function _n(n){return(typeof n=="string"||n instanceof String)&&n.indexOf(`
`)>-1?n.split(`
`):n}function BC(n,t){const{element:e,datasetIndex:s,index:i}=t,r=n.getDatasetMeta(s).controller,{label:o,value:a}=r.getLabelAndValue(i);return{chart:n,label:o,parsed:r.getParsed(i),raw:n.data.datasets[s].data[i],formattedValue:a,dataset:r.getDataset(),dataIndex:i,datasetIndex:s,element:e}}function Sp(n,t){const e=n.chart.ctx,{body:s,footer:i,title:r}=n,{boxWidth:o,boxHeight:a}=t,l=Ee(t.bodyFont),u=Ee(t.titleFont),h=Ee(t.footerFont),d=r.length,p=i.length,_=s.length,v=Ke(t.padding);let E=v.height,w=0,P=s.reduce((C,M)=>C+M.before.length+M.lines.length+M.after.length,0);if(P+=n.beforeBody.length+n.afterBody.length,d&&(E+=d*u.lineHeight+(d-1)*t.titleSpacing+t.titleMarginBottom),P){const C=t.displayColors?Math.max(a,l.lineHeight):l.lineHeight;E+=_*C+(P-_)*l.lineHeight+(P-1)*t.bodySpacing}p&&(E+=t.footerMarginTop+p*h.lineHeight+(p-1)*t.footerSpacing);let R=0;const k=function(C){w=Math.max(w,e.measureText(C).width+R)};return e.save(),e.font=u.string,Et(n.title,k),e.font=l.string,Et(n.beforeBody.concat(n.afterBody),k),R=t.displayColors?o+2+t.boxPadding:0,Et(s,C=>{Et(C.before,k),Et(C.lines,k),Et(C.after,k)}),R=0,e.font=h.string,Et(n.footer,k),e.restore(),w+=v.width,{width:w,height:E}}function $C(n,t){const{y:e,height:s}=t;return e<s/2?"top":e>n.height-s/2?"bottom":"center"}function zC(n,t,e,s){const{x:i,width:r}=s,o=e.caretSize+e.caretPadding;if(n==="left"&&i+r+o>t.width||n==="right"&&i-r-o<0)return!0}function jC(n,t,e,s){const{x:i,width:r}=e,{width:o,chartArea:{left:a,right:l}}=n;let u="center";return s==="center"?u=i<=(a+l)/2?"left":"right":i<=r/2?u="left":i>=o-r/2&&(u="right"),zC(u,n,t,e)&&(u="center"),u}function xp(n,t,e){const s=e.yAlign||t.yAlign||$C(n,e);return{xAlign:e.xAlign||t.xAlign||jC(n,t,e,s),yAlign:s}}function HC(n,t){let{x:e,width:s}=n;return t==="right"?e-=s:t==="center"&&(e-=s/2),e}function qC(n,t,e){let{y:s,height:i}=n;return t==="top"?s+=e:t==="bottom"?s-=i+e:s-=i/2,s}function Ap(n,t,e,s){const{caretSize:i,caretPadding:r,cornerRadius:o}=n,{xAlign:a,yAlign:l}=e,u=i+r,{topLeft:h,topRight:d,bottomLeft:p,bottomRight:_}=hi(o);let v=HC(t,a);const E=qC(t,l,u);return l==="center"?a==="left"?v+=u:a==="right"&&(v-=u):a==="left"?v-=Math.max(h,p)+i:a==="right"&&(v+=Math.max(d,_)+i),{x:fe(v,0,s.width-t.width),y:fe(E,0,s.height-t.height)}}function Po(n,t,e){const s=Ke(e.padding);return t==="center"?n.x+n.width/2:t==="right"?n.x+n.width-s.right:n.x+s.left}function Pp(n){return Qe([],_n(n))}function WC(n,t,e){return qs(n,{tooltip:t,tooltipItems:e,type:"tooltip"})}function kp(n,t){const e=t&&t.dataset&&t.dataset.tooltip&&t.dataset.tooltip.callbacks;return e?n.override(e):n}const wy={beforeTitle:gn,title(n){if(n.length>0){const t=n[0],e=t.chart.data.labels,s=e?e.length:0;if(this&&this.options&&this.options.mode==="dataset")return t.dataset.label||"";if(t.label)return t.label;if(s>0&&t.dataIndex<s)return e[t.dataIndex]}return""},afterTitle:gn,beforeBody:gn,beforeLabel:gn,label(n){if(this&&this.options&&this.options.mode==="dataset")return n.label+": "+n.formattedValue||n.formattedValue;let t=n.dataset.label||"";t&&(t+=": ");const e=n.formattedValue;return _t(e)||(t+=e),t},labelColor(n){const e=n.chart.getDatasetMeta(n.datasetIndex).controller.getStyle(n.dataIndex);return{borderColor:e.borderColor,backgroundColor:e.backgroundColor,borderWidth:e.borderWidth,borderDash:e.borderDash,borderDashOffset:e.borderDashOffset,borderRadius:0}},labelTextColor(){return this.options.bodyColor},labelPointStyle(n){const e=n.chart.getDatasetMeta(n.datasetIndex).controller.getStyle(n.dataIndex);return{pointStyle:e.pointStyle,rotation:e.rotation}},afterLabel:gn,afterBody:gn,beforeFooter:gn,footer:gn,afterFooter:gn};function ye(n,t,e,s){const i=n[t].call(e,s);return typeof i>"u"?wy[t].call(e,s):i}class Ac extends hn{constructor(t){super(),this.opacity=0,this._active=[],this._eventPosition=void 0,this._size=void 0,this._cachedAnimations=void 0,this._tooltipItems=[],this.$animations=void 0,this.$context=void 0,this.chart=t.chart,this.options=t.options,this.dataPoints=void 0,this.title=void 0,this.beforeBody=void 0,this.body=void 0,this.afterBody=void 0,this.footer=void 0,this.xAlign=void 0,this.yAlign=void 0,this.x=void 0,this.y=void 0,this.height=void 0,this.width=void 0,this.caretX=void 0,this.caretY=void 0,this.labelColors=void 0,this.labelPointStyles=void 0,this.labelTextColors=void 0}initialize(t){this.options=t,this._cachedAnimations=void 0,this.$context=void 0}_resolveAnimations(){const t=this._cachedAnimations;if(t)return t;const e=this.chart,s=this.options.setContext(this.getContext()),i=s.enabled&&e.options.animation&&s.animations,r=new sy(this.chart,i);return i._cacheable&&(this._cachedAnimations=Object.freeze(r)),r}getContext(){return this.$context||(this.$context=WC(this.chart.getContext(),this,this._tooltipItems))}getTitle(t,e){const{callbacks:s}=e,i=ye(s,"beforeTitle",this,t),r=ye(s,"title",this,t),o=ye(s,"afterTitle",this,t);let a=[];return a=Qe(a,_n(i)),a=Qe(a,_n(r)),a=Qe(a,_n(o)),a}getBeforeBody(t,e){return Pp(ye(e.callbacks,"beforeBody",this,t))}getBody(t,e){const{callbacks:s}=e,i=[];return Et(t,r=>{const o={before:[],lines:[],after:[]},a=kp(s,r);Qe(o.before,_n(ye(a,"beforeLabel",this,r))),Qe(o.lines,ye(a,"label",this,r)),Qe(o.after,_n(ye(a,"afterLabel",this,r))),i.push(o)}),i}getAfterBody(t,e){return Pp(ye(e.callbacks,"afterBody",this,t))}getFooter(t,e){const{callbacks:s}=e,i=ye(s,"beforeFooter",this,t),r=ye(s,"footer",this,t),o=ye(s,"afterFooter",this,t);let a=[];return a=Qe(a,_n(i)),a=Qe(a,_n(r)),a=Qe(a,_n(o)),a}_createItems(t){const e=this._active,s=this.chart.data,i=[],r=[],o=[];let a=[],l,u;for(l=0,u=e.length;l<u;++l)a.push(BC(this.chart,e[l]));return t.filter&&(a=a.filter((h,d,p)=>t.filter(h,d,p,s))),t.itemSort&&(a=a.sort((h,d)=>t.itemSort(h,d,s))),Et(a,h=>{const d=kp(t.callbacks,h);i.push(ye(d,"labelColor",this,h)),r.push(ye(d,"labelPointStyle",this,h)),o.push(ye(d,"labelTextColor",this,h))}),this.labelColors=i,this.labelPointStyles=r,this.labelTextColors=o,this.dataPoints=a,a}update(t,e){const s=this.options.setContext(this.getContext()),i=this._active;let r,o=[];if(!i.length)this.opacity!==0&&(r={opacity:0});else{const a=ir[s.position].call(this,i,this._eventPosition);o=this._createItems(s),this.title=this.getTitle(o,s),this.beforeBody=this.getBeforeBody(o,s),this.body=this.getBody(o,s),this.afterBody=this.getAfterBody(o,s),this.footer=this.getFooter(o,s);const l=this._size=Sp(this,s),u=Object.assign({},a,l),h=xp(this.chart,s,u),d=Ap(s,u,h,this.chart);this.xAlign=h.xAlign,this.yAlign=h.yAlign,r={opacity:1,x:d.x,y:d.y,width:l.width,height:l.height,caretX:a.x,caretY:a.y}}this._tooltipItems=o,this.$context=void 0,r&&this._resolveAnimations().update(this,r),t&&s.external&&s.external.call(this,{chart:this.chart,tooltip:this,replay:e})}drawCaret(t,e,s,i){const r=this.getCaretPosition(t,s,i);e.lineTo(r.x1,r.y1),e.lineTo(r.x2,r.y2),e.lineTo(r.x3,r.y3)}getCaretPosition(t,e,s){const{xAlign:i,yAlign:r}=this,{caretSize:o,cornerRadius:a}=s,{topLeft:l,topRight:u,bottomLeft:h,bottomRight:d}=hi(a),{x:p,y:_}=t,{width:v,height:E}=e;let w,P,R,k,C,M;return r==="center"?(C=_+E/2,i==="left"?(w=p,P=w-o,k=C+o,M=C-o):(w=p+v,P=w+o,k=C-o,M=C+o),R=w):(i==="left"?P=p+Math.max(l,h)+o:i==="right"?P=p+v-Math.max(u,d)-o:P=this.caretX,r==="top"?(k=_,C=k-o,w=P-o,R=P+o):(k=_+E,C=k+o,w=P+o,R=P-o),M=k),{x1:w,x2:P,x3:R,y1:k,y2:C,y3:M}}drawTitle(t,e,s){const i=this.title,r=i.length;let o,a,l;if(r){const u=di(s.rtl,this.x,this.width);for(t.x=Po(this,s.titleAlign,s),e.textAlign=u.textAlign(s.titleAlign),e.textBaseline="middle",o=Ee(s.titleFont),a=s.titleSpacing,e.fillStyle=s.titleColor,e.font=o.string,l=0;l<r;++l)e.fillText(i[l],u.x(t.x),t.y+o.lineHeight/2),t.y+=o.lineHeight+a,l+1===r&&(t.y+=s.titleMarginBottom-a)}}_drawColorBox(t,e,s,i,r){const o=this.labelColors[s],a=this.labelPointStyles[s],{boxHeight:l,boxWidth:u}=r,h=Ee(r.bodyFont),d=Po(this,"left",r),p=i.x(d),_=l<h.lineHeight?(h.lineHeight-l)/2:0,v=e.y+_;if(r.usePointStyle){const E={radius:Math.min(u,l)/2,pointStyle:a.pointStyle,rotation:a.rotation,borderWidth:1},w=i.leftForLtr(p,u)+u/2,P=v+l/2;t.strokeStyle=r.multiKeyBackground,t.fillStyle=r.multiKeyBackground,Ec(t,E,w,P),t.strokeStyle=o.borderColor,t.fillStyle=o.backgroundColor,Ec(t,E,w,P)}else{t.lineWidth=ht(o.borderWidth)?Math.max(...Object.values(o.borderWidth)):o.borderWidth||1,t.strokeStyle=o.borderColor,t.setLineDash(o.borderDash||[]),t.lineDashOffset=o.borderDashOffset||0;const E=i.leftForLtr(p,u),w=i.leftForLtr(i.xPlus(p,1),u-2),P=hi(o.borderRadius);Object.values(P).some(R=>R!==0)?(t.beginPath(),t.fillStyle=r.multiKeyBackground,wa(t,{x:E,y:v,w:u,h:l,radius:P}),t.fill(),t.stroke(),t.fillStyle=o.backgroundColor,t.beginPath(),wa(t,{x:w,y:v+1,w:u-2,h:l-2,radius:P}),t.fill()):(t.fillStyle=r.multiKeyBackground,t.fillRect(E,v,u,l),t.strokeRect(E,v,u,l),t.fillStyle=o.backgroundColor,t.fillRect(w,v+1,u-2,l-2))}t.fillStyle=this.labelTextColors[s]}drawBody(t,e,s){const{body:i}=this,{bodySpacing:r,bodyAlign:o,displayColors:a,boxHeight:l,boxWidth:u,boxPadding:h}=s,d=Ee(s.bodyFont);let p=d.lineHeight,_=0;const v=di(s.rtl,this.x,this.width),E=function(g){e.fillText(g,v.x(t.x+_),t.y+p/2),t.y+=p+r},w=v.textAlign(o);let P,R,k,C,M,L,S;for(e.textAlign=o,e.textBaseline="middle",e.font=d.string,t.x=Po(this,w,s),e.fillStyle=s.bodyColor,Et(this.beforeBody,E),_=a&&w!=="right"?o==="center"?u/2+h:u+2+h:0,C=0,L=i.length;C<L;++C){for(P=i[C],R=this.labelTextColors[C],e.fillStyle=R,Et(P.before,E),k=P.lines,a&&k.length&&(this._drawColorBox(e,t,C,v,s),p=Math.max(d.lineHeight,l)),M=0,S=k.length;M<S;++M)E(k[M]),p=d.lineHeight;Et(P.after,E)}_=0,p=d.lineHeight,Et(this.afterBody,E),t.y-=r}drawFooter(t,e,s){const i=this.footer,r=i.length;let o,a;if(r){const l=di(s.rtl,this.x,this.width);for(t.x=Po(this,s.footerAlign,s),t.y+=s.footerMarginTop,e.textAlign=l.textAlign(s.footerAlign),e.textBaseline="middle",o=Ee(s.footerFont),e.fillStyle=s.footerColor,e.font=o.string,a=0;a<r;++a)e.fillText(i[a],l.x(t.x),t.y+o.lineHeight/2),t.y+=o.lineHeight+s.footerSpacing}}drawBackground(t,e,s,i){const{xAlign:r,yAlign:o}=this,{x:a,y:l}=t,{width:u,height:h}=s,{topLeft:d,topRight:p,bottomLeft:_,bottomRight:v}=hi(i.cornerRadius);e.fillStyle=i.backgroundColor,e.strokeStyle=i.borderColor,e.lineWidth=i.borderWidth,e.beginPath(),e.moveTo(a+d,l),o==="top"&&this.drawCaret(t,e,s,i),e.lineTo(a+u-p,l),e.quadraticCurveTo(a+u,l,a+u,l+p),o==="center"&&r==="right"&&this.drawCaret(t,e,s,i),e.lineTo(a+u,l+h-v),e.quadraticCurveTo(a+u,l+h,a+u-v,l+h),o==="bottom"&&this.drawCaret(t,e,s,i),e.lineTo(a+_,l+h),e.quadraticCurveTo(a,l+h,a,l+h-_),o==="center"&&r==="left"&&this.drawCaret(t,e,s,i),e.lineTo(a,l+d),e.quadraticCurveTo(a,l,a+d,l),e.closePath(),e.fill(),i.borderWidth>0&&e.stroke()}_updateAnimationTarget(t){const e=this.chart,s=this.$animations,i=s&&s.x,r=s&&s.y;if(i||r){const o=ir[t.position].call(this,this._active,this._eventPosition);if(!o)return;const a=this._size=Sp(this,t),l=Object.assign({},o,this._size),u=xp(e,t,l),h=Ap(t,l,u,e);(i._to!==h.x||r._to!==h.y)&&(this.xAlign=u.xAlign,this.yAlign=u.yAlign,this.width=a.width,this.height=a.height,this.caretX=o.x,this.caretY=o.y,this._resolveAnimations().update(this,h))}}_willRender(){return!!this.opacity}draw(t){const e=this.options.setContext(this.getContext());let s=this.opacity;if(!s)return;this._updateAnimationTarget(e);const i={width:this.width,height:this.height},r={x:this.x,y:this.y};s=Math.abs(s)<.001?0:s;const o=Ke(e.padding),a=this.title.length||this.beforeBody.length||this.body.length||this.afterBody.length||this.footer.length;e.enabled&&a&&(t.save(),t.globalAlpha=s,this.drawBackground(r,t,i,e),Q_(t,e.textDirection),r.y+=o.top,this.drawTitle(r,t,e),this.drawBody(r,t,e),this.drawFooter(r,t,e),J_(t,e.textDirection),t.restore())}getActiveElements(){return this._active||[]}setActiveElements(t,e){const s=this._active,i=t.map(({datasetIndex:a,index:l})=>{const u=this.chart.getDatasetMeta(a);if(!u)throw new Error("Cannot find a dataset at index "+a);return{datasetIndex:a,element:u.data[l],index:l}}),r=!_a(s,i),o=this._positionChanged(i,e);(r||o)&&(this._active=i,this._eventPosition=e,this._ignoreReplayEvents=!0,this.update(!0))}handleEvent(t,e,s=!0){if(e&&this._ignoreReplayEvents)return!1;this._ignoreReplayEvents=!1;const i=this.options,r=this._active||[],o=this._getActiveElements(t,r,e,s),a=this._positionChanged(o,t),l=e||!_a(o,r)||a;return l&&(this._active=o,(i.enabled||i.external)&&(this._eventPosition={x:t.x,y:t.y},this.update(!0,e))),l}_getActiveElements(t,e,s,i){const r=this.options;if(t.type==="mouseout")return[];if(!i)return e.filter(a=>this.chart.data.datasets[a.datasetIndex]&&this.chart.getDatasetMeta(a.datasetIndex).controller.getParsed(a.index)!==void 0);const o=this.chart.getElementsAtEventForMode(t,r.mode,r,s);return r.reverse&&o.reverse(),o}_positionChanged(t,e){const{caretX:s,caretY:i,options:r}=this,o=ir[r.position].call(this,t,e);return o!==!1&&(s!==o.x||i!==o.y)}}$(Ac,"positioners",ir);var KC={id:"tooltip",_element:Ac,positioners:ir,afterInit(n,t,e){e&&(n.tooltip=new Ac({chart:n,options:e}))},beforeUpdate(n,t,e){n.tooltip&&n.tooltip.initialize(e)},reset(n,t,e){n.tooltip&&n.tooltip.initialize(e)},afterDraw(n){const t=n.tooltip;if(t&&t._willRender()){const e={tooltip:t};if(n.notifyPlugins("beforeTooltipDraw",{...e,cancelable:!0})===!1)return;t.draw(n.ctx),n.notifyPlugins("afterTooltipDraw",e)}},afterEvent(n,t){if(n.tooltip){const e=t.replay;n.tooltip.handleEvent(t.event,e,t.inChartArea)&&(t.changed=!0)}},defaults:{enabled:!0,external:null,position:"average",backgroundColor:"rgba(0,0,0,0.8)",titleColor:"#fff",titleFont:{weight:"bold"},titleSpacing:2,titleMarginBottom:6,titleAlign:"left",bodyColor:"#fff",bodySpacing:2,bodyFont:{},bodyAlign:"left",footerColor:"#fff",footerSpacing:2,footerMarginTop:6,footerFont:{weight:"bold"},footerAlign:"left",padding:6,caretPadding:2,caretSize:5,cornerRadius:6,boxHeight:(n,t)=>t.bodyFont.size,boxWidth:(n,t)=>t.bodyFont.size,multiKeyBackground:"#fff",displayColors:!0,boxPadding:0,borderColor:"rgba(0,0,0,0)",borderWidth:0,animation:{duration:400,easing:"easeOutQuart"},animations:{numbers:{type:"number",properties:["x","y","width","height","caretX","caretY"]},opacity:{easing:"linear",duration:200}},callbacks:wy},defaultRoutes:{bodyFont:"font",footerFont:"font",titleFont:"font"},descriptors:{_scriptable:n=>n!=="filter"&&n!=="itemSort"&&n!=="external",_indexable:!1,callbacks:{_scriptable:!1,_indexable:!1},animation:{_fallback:!1},animations:{_fallback:"animation"}},additionalOptionScopes:["interaction"]};const GC=(n,t,e,s)=>(typeof t=="string"?(e=n.push(t)-1,s.unshift({index:e,label:t})):isNaN(t)&&(e=null),e);function YC(n,t,e,s){const i=n.indexOf(t);if(i===-1)return GC(n,t,e,s);const r=n.lastIndexOf(t);return i!==r?e:i}const XC=(n,t)=>n===null?null:fe(Math.round(n),0,t);function Rp(n){const t=this.getLabels();return n>=0&&n<t.length?t[n]:n}class Pc extends Ai{constructor(t){super(t),this._startValue=void 0,this._valueRange=0,this._addedLabels=[]}init(t){const e=this._addedLabels;if(e.length){const s=this.getLabels();for(const{index:i,label:r}of e)s[i]===r&&s.splice(i,1);this._addedLabels=[]}super.init(t)}parse(t,e){if(_t(t))return null;const s=this.getLabels();return e=isFinite(e)&&s[e]===t?e:YC(s,t,st(e,t),this._addedLabels),XC(e,s.length-1)}determineDataLimits(){const{minDefined:t,maxDefined:e}=this.getUserBounds();let{min:s,max:i}=this.getMinMax(!0);this.options.bounds==="ticks"&&(t||(s=0),e||(i=this.getLabels().length-1)),this.min=s,this.max=i}buildTicks(){const t=this.min,e=this.max,s=this.options.offset,i=[];let r=this.getLabels();r=t===0&&e===r.length-1?r:r.slice(t,e+1),this._valueRange=Math.max(r.length-(s?0:1),1),this._startValue=this.min-(s?.5:0);for(let o=t;o<=e;o++)i.push({value:o});return i}getLabelForValue(t){return Rp.call(this,t)}configure(){super.configure(),this.isHorizontal()||(this._reversePixels=!this._reversePixels)}getPixelForValue(t){return typeof t!="number"&&(t=this.parse(t)),t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getPixelForTick(t){const e=this.ticks;return t<0||t>e.length-1?null:this.getPixelForValue(e[t].value)}getValueForPixel(t){return Math.round(this._startValue+this.getDecimalForPixel(t)*this._valueRange)}getBasePixel(){return this.bottom}}$(Pc,"id","category"),$(Pc,"defaults",{ticks:{callback:Rp}});function QC(n,t){const e=[],{bounds:i,step:r,min:o,max:a,precision:l,count:u,maxTicks:h,maxDigits:d,includeBounds:p}=n,_=r||1,v=h-1,{min:E,max:w}=t,P=!_t(o),R=!_t(a),k=!_t(u),C=(w-E)/(d+1);let M=Af((w-E)/v/_)*_,L,S,g,y;if(M<1e-14&&!P&&!R)return[{value:E},{value:w}];y=Math.ceil(w/M)-Math.floor(E/M),y>v&&(M=Af(y*M/v/_)*_),_t(l)||(L=Math.pow(10,l),M=Math.ceil(M*L)/L),i==="ticks"?(S=Math.floor(E/M)*M,g=Math.ceil(w/M)*M):(S=E,g=w),P&&R&&r&&iP((a-o)/r,M/1e3)?(y=Math.round(Math.min((a-o)/M,h)),M=(a-o)/y,S=o,g=a):k?(S=P?o:S,g=R?a:g,y=u-1,M=(g-S)/y):(y=(g-S)/M,gr(y,Math.round(y),M/1e3)?y=Math.round(y):y=Math.ceil(y));const b=Math.max(Pf(M),Pf(S));L=Math.pow(10,_t(l)?b:l),S=Math.round(S*L)/L,g=Math.round(g*L)/L;let T=0;for(P&&(p&&S!==o?(e.push({value:o}),S<o&&T++,gr(Math.round((S+T*M)*L)/L,o,Cp(o,C,n))&&T++):S<o&&T++);T<y;++T){const A=Math.round((S+T*M)*L)/L;if(R&&A>a)break;e.push({value:A})}return R&&p&&g!==a?e.length&&gr(e[e.length-1].value,a,Cp(a,C,n))?e[e.length-1].value=a:e.push({value:a}):(!R||g===a)&&e.push({value:g}),e}function Cp(n,t,{horizontal:e,minRotation:s}){const i=Tn(s),r=(e?Math.sin(i):Math.cos(i))||.001,o=.75*t*(""+n).length;return Math.min(t/r,o)}class JC extends Ai{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}parse(t,e){return _t(t)||(typeof t=="number"||t instanceof Number)&&!isFinite(+t)?null:+t}handleTickRangeOptions(){const{beginAtZero:t}=this.options,{minDefined:e,maxDefined:s}=this.getUserBounds();let{min:i,max:r}=this;const o=l=>i=e?i:l,a=l=>r=s?r:l;if(t){const l=on(i),u=on(r);l<0&&u<0?a(0):l>0&&u>0&&o(0)}if(i===r){let l=r===0?1:Math.abs(r*.05);a(r+l),t||o(i-l)}this.min=i,this.max=r}getTickLimit(){const t=this.options.ticks;let{maxTicksLimit:e,stepSize:s}=t,i;return s?(i=Math.ceil(this.max/s)-Math.floor(this.min/s)+1,i>1e3&&(console.warn(`scales.${this.id}.ticks.stepSize: ${s} would result generating up to ${i} ticks. Limiting to 1000.`),i=1e3)):(i=this.computeTickLimit(),e=e||11),e&&(i=Math.min(e,i)),i}computeTickLimit(){return Number.POSITIVE_INFINITY}buildTicks(){const t=this.options,e=t.ticks;let s=this.getTickLimit();s=Math.max(2,s);const i={maxTicks:s,bounds:t.bounds,min:t.min,max:t.max,precision:e.precision,step:e.stepSize,count:e.count,maxDigits:this._maxDigits(),horizontal:this.isHorizontal(),minRotation:e.minRotation||0,includeBounds:e.includeBounds!==!1},r=this._range||this,o=QC(i,r);return t.bounds==="ticks"&&rP(o,this,"value"),t.reverse?(o.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),o}configure(){const t=this.ticks;let e=this.min,s=this.max;if(super.configure(),this.options.offset&&t.length){const i=(s-e)/Math.max(t.length-1,1)/2;e-=i,s+=i}this._startValue=e,this._endValue=s,this._valueRange=s-e}getLabelForValue(t){return zu(t,this.chart.options.locale,this.options.ticks.format)}}class kc extends JC{determineDataLimits(){const{min:t,max:e}=this.getMinMax(!0);this.min=ge(t)?t:0,this.max=ge(e)?e:1,this.handleTickRangeOptions()}computeTickLimit(){const t=this.isHorizontal(),e=t?this.width:this.height,s=Tn(this.options.ticks.minRotation),i=(t?Math.sin(s):Math.cos(s))||.001,r=this._resolveTickFontOptions(0);return Math.ceil(e/Math.min(40,r.lineHeight/i))}getPixelForValue(t){return t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getValueForPixel(t){return this._startValue+this.getDecimalForPixel(t)*this._valueRange}}$(kc,"id","linear"),$(kc,"defaults",{ticks:{callback:j_.formatters.numeric}});const el={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},we=Object.keys(el);function Dp(n,t){return n-t}function Mp(n,t){if(_t(t))return null;const e=n._adapter,{parser:s,round:i,isoWeekday:r}=n._parseOpts;let o=t;return typeof s=="function"&&(o=s(o)),ge(o)||(o=typeof s=="string"?e.parse(o,s):e.parse(o)),o===null?null:(i&&(o=i==="week"&&(bi(r)||r===!0)?e.startOf(o,"isoWeek",r):e.startOf(o,i)),+o)}function Op(n,t,e,s){const i=we.length;for(let r=we.indexOf(n);r<i-1;++r){const o=el[we[r]],a=o.steps?o.steps:Number.MAX_SAFE_INTEGER;if(o.common&&Math.ceil((e-t)/(a*o.size))<=s)return we[r]}return we[i-1]}function ZC(n,t,e,s,i){for(let r=we.length-1;r>=we.indexOf(e);r--){const o=we[r];if(el[o].common&&n._adapter.diff(i,s,o)>=t-1)return o}return we[e?we.indexOf(e):0]}function t1(n){for(let t=we.indexOf(n)+1,e=we.length;t<e;++t)if(el[we[t]].common)return we[t]}function Lp(n,t,e){if(!e)n[t]=!0;else if(e.length){const{lo:s,hi:i}=Bu(e,t),r=e[s]>=t?e[s]:e[i];n[r]=!0}}function e1(n,t,e,s){const i=n._adapter,r=+i.startOf(t[0].value,s),o=t[t.length-1].value;let a,l;for(a=r;a<=o;a=+i.add(a,1,s))l=e[a],l>=0&&(t[l].major=!0);return t}function Np(n,t,e){const s=[],i={},r=t.length;let o,a;for(o=0;o<r;++o)a=t[o],i[a]=o,s.push({value:a,major:!1});return r===0||!e?s:e1(n,s,i,e)}class Sa extends Ai{constructor(t){super(t),this._cache={data:[],labels:[],all:[]},this._unit="day",this._majorUnit=void 0,this._offsets={},this._normalized=!1,this._parseOpts=void 0}init(t,e={}){const s=t.time||(t.time={}),i=this._adapter=new Uk._date(t.adapters.date);i.init(e),pr(s.displayFormats,i.formats()),this._parseOpts={parser:s.parser,round:s.round,isoWeekday:s.isoWeekday},super.init(t),this._normalized=e.normalized}parse(t,e){return t===void 0?null:Mp(this,t)}beforeLayout(){super.beforeLayout(),this._cache={data:[],labels:[],all:[]}}determineDataLimits(){const t=this.options,e=this._adapter,s=t.time.unit||"day";let{min:i,max:r,minDefined:o,maxDefined:a}=this.getUserBounds();function l(u){!o&&!isNaN(u.min)&&(i=Math.min(i,u.min)),!a&&!isNaN(u.max)&&(r=Math.max(r,u.max))}(!o||!a)&&(l(this._getLabelBounds()),(t.bounds!=="ticks"||t.ticks.source!=="labels")&&l(this.getMinMax(!1))),i=ge(i)&&!isNaN(i)?i:+e.startOf(Date.now(),s),r=ge(r)&&!isNaN(r)?r:+e.endOf(Date.now(),s)+1,this.min=Math.min(i,r-1),this.max=Math.max(i+1,r)}_getLabelBounds(){const t=this.getLabelTimestamps();let e=Number.POSITIVE_INFINITY,s=Number.NEGATIVE_INFINITY;return t.length&&(e=t[0],s=t[t.length-1]),{min:e,max:s}}buildTicks(){const t=this.options,e=t.time,s=t.ticks,i=s.source==="labels"?this.getLabelTimestamps():this._generate();t.bounds==="ticks"&&i.length&&(this.min=this._userMin||i[0],this.max=this._userMax||i[i.length-1]);const r=this.min,o=this.max,a=uP(i,r,o);return this._unit=e.unit||(s.autoSkip?Op(e.minUnit,this.min,this.max,this._getLabelCapacity(r)):ZC(this,a.length,e.minUnit,this.min,this.max)),this._majorUnit=!s.major.enabled||this._unit==="year"?void 0:t1(this._unit),this.initOffsets(i),t.reverse&&a.reverse(),Np(this,a,this._majorUnit)}afterAutoSkip(){this.options.offsetAfterAutoskip&&this.initOffsets(this.ticks.map(t=>+t.value))}initOffsets(t=[]){let e=0,s=0,i,r;this.options.offset&&t.length&&(i=this.getDecimalForValue(t[0]),t.length===1?e=1-i:e=(this.getDecimalForValue(t[1])-i)/2,r=this.getDecimalForValue(t[t.length-1]),t.length===1?s=r:s=(r-this.getDecimalForValue(t[t.length-2]))/2);const o=t.length<3?.5:.25;e=fe(e,0,o),s=fe(s,0,o),this._offsets={start:e,end:s,factor:1/(e+1+s)}}_generate(){const t=this._adapter,e=this.min,s=this.max,i=this.options,r=i.time,o=r.unit||Op(r.minUnit,e,s,this._getLabelCapacity(e)),a=st(i.ticks.stepSize,1),l=o==="week"?r.isoWeekday:!1,u=bi(l)||l===!0,h={};let d=e,p,_;if(u&&(d=+t.startOf(d,"isoWeek",l)),d=+t.startOf(d,u?"day":o),t.diff(s,e,o)>1e5*a)throw new Error(e+" and "+s+" are too far apart with stepSize of "+a+" "+o);const v=i.ticks.source==="data"&&this.getDataTimestamps();for(p=d,_=0;p<s;p=+t.add(p,a,o),_++)Lp(h,p,v);return(p===s||i.bounds==="ticks"||_===1)&&Lp(h,p,v),Object.keys(h).sort(Dp).map(E=>+E)}getLabelForValue(t){const e=this._adapter,s=this.options.time;return s.tooltipFormat?e.format(t,s.tooltipFormat):e.format(t,s.displayFormats.datetime)}format(t,e){const i=this.options.time.displayFormats,r=this._unit,o=e||i[r];return this._adapter.format(t,o)}_tickFormatFunction(t,e,s,i){const r=this.options,o=r.ticks.callback;if(o)return Rt(o,[t,e,s],this);const a=r.time.displayFormats,l=this._unit,u=this._majorUnit,h=l&&a[l],d=u&&a[u],p=s[e],_=u&&d&&p&&p.major;return this._adapter.format(t,i||(_?d:h))}generateTickLabels(t){let e,s,i;for(e=0,s=t.length;e<s;++e)i=t[e],i.label=this._tickFormatFunction(i.value,e,t)}getDecimalForValue(t){return t===null?NaN:(t-this.min)/(this.max-this.min)}getPixelForValue(t){const e=this._offsets,s=this.getDecimalForValue(t);return this.getPixelForDecimal((e.start+s)*e.factor)}getValueForPixel(t){const e=this._offsets,s=this.getDecimalForPixel(t)/e.factor-e.end;return this.min+s*(this.max-this.min)}_getLabelSize(t){const e=this.options.ticks,s=this.ctx.measureText(t).width,i=Tn(this.isHorizontal()?e.maxRotation:e.minRotation),r=Math.cos(i),o=Math.sin(i),a=this._resolveTickFontOptions(0).size;return{w:s*r+a*o,h:s*o+a*r}}_getLabelCapacity(t){const e=this.options.time,s=e.displayFormats,i=s[e.unit]||s.millisecond,r=this._tickFormatFunction(t,0,Np(this,[t],this._majorUnit),i),o=this._getLabelSize(r),a=Math.floor(this.isHorizontal()?this.width/o.w:this.height/o.h)-1;return a>0?a:1}getDataTimestamps(){let t=this._cache.data||[],e,s;if(t.length)return t;const i=this.getMatchingVisibleMetas();if(this._normalized&&i.length)return this._cache.data=i[0].controller.getAllParsedValues(this);for(e=0,s=i.length;e<s;++e)t=t.concat(i[e].controller.getAllParsedValues(this));return this._cache.data=this.normalize(t)}getLabelTimestamps(){const t=this._cache.labels||[];let e,s;if(t.length)return t;const i=this.getLabels();for(e=0,s=i.length;e<s;++e)t.push(Mp(this,i[e]));return this._cache.labels=this._normalized?t:this.normalize(t)}normalize(t){return V_(t.sort(Dp))}}$(Sa,"id","time"),$(Sa,"defaults",{bounds:"data",adapters:{},time:{parser:!1,unit:!1,round:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{}},ticks:{source:"auto",callback:!1,major:{enabled:!1}}});function ko(n,t,e){let s=0,i=n.length-1,r,o,a,l;e?(t>=n[s].pos&&t<=n[i].pos&&({lo:s,hi:i}=Is(n,"pos",t)),{pos:r,time:a}=n[s],{pos:o,time:l}=n[i]):(t>=n[s].time&&t<=n[i].time&&({lo:s,hi:i}=Is(n,"time",t)),{time:r,pos:a}=n[s],{time:o,pos:l}=n[i]);const u=o-r;return u?a+(l-a)*(t-r)/u:a}class Vp extends Sa{constructor(t){super(t),this._table=[],this._minPos=void 0,this._tableRange=void 0}initOffsets(){const t=this._getTimestampsForTable(),e=this._table=this.buildLookupTable(t);this._minPos=ko(e,this.min),this._tableRange=ko(e,this.max)-this._minPos,super.initOffsets(t)}buildLookupTable(t){const{min:e,max:s}=this,i=[],r=[];let o,a,l,u,h;for(o=0,a=t.length;o<a;++o)u=t[o],u>=e&&u<=s&&i.push(u);if(i.length<2)return[{time:e,pos:0},{time:s,pos:1}];for(o=0,a=i.length;o<a;++o)h=i[o+1],l=i[o-1],u=i[o],Math.round((h+l)/2)!==u&&r.push({time:u,pos:o/(a-1)});return r}_generate(){const t=this.min,e=this.max;let s=super.getDataTimestamps();return(!s.includes(t)||!s.length)&&s.splice(0,0,t),(!s.includes(e)||s.length===1)&&s.push(e),s.sort((i,r)=>i-r)}_getTimestampsForTable(){let t=this._cache.all||[];if(t.length)return t;const e=this.getDataTimestamps(),s=this.getLabelTimestamps();return e.length&&s.length?t=this.normalize(e.concat(s)):t=e.length?e:s,t=this._cache.all=t,t}getDecimalForValue(t){return(ko(this._table,t)-this._minPos)/this._tableRange}getValueForPixel(t){const e=this._offsets,s=this.getDecimalForPixel(t)/e.factor-e.end;return ko(this._table,s*this._tableRange+this._minPos,!0)}}$(Vp,"id","timeseries"),$(Vp,"defaults",Sa.defaults);bn.register(jo,zo,er,Ho,Gn,Go,Ko,sr,Pc,kc,MC,UC,KC);const Ro={};function Gr(n,t){const e=document.getElementById(n);if(!e)return null;Ro[n]&&Ro[n].destroy();const s=e.getContext("2d");return Ro[n]=new bn(s,t),Ro[n]}const Fp="rgba(148, 163, 184, 0.08)",yr="#64748b",ks="Inter, sans-serif",Te={x:{grid:{color:Fp,drawBorder:!1},ticks:{color:yr,font:{family:ks,size:11}}},y:{grid:{color:Fp,drawBorder:!1},ticks:{color:yr,font:{family:ks,size:11}}}},Rn={legend:{display:!1},tooltip:{backgroundColor:"rgba(17, 24, 39, 0.95)",titleFont:{family:ks,size:12},bodyFont:{family:ks,size:12},padding:10,cornerRadius:8,borderColor:"rgba(148, 163, 184, 0.2)",borderWidth:1}};function n1(n){n.length&&Gr("chart-equity",{type:"line",data:{labels:n.map(t=>t.date),datasets:[{label:"Equity",data:n.map(t=>t.equity),borderColor:"#818cf8",backgroundColor:"rgba(129, 140, 248, 0.1)",fill:!0,borderWidth:2,tension:.3,pointRadius:0,pointHoverRadius:4,pointHoverBackgroundColor:"#818cf8"}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{...Rn,tooltip:{...Rn.tooltip,callbacks:{label:t=>`P&L: $${t.parsed.y.toFixed(2)}`}}},scales:{...Te,y:{...Te.y,ticks:{...Te.y.ticks,callback:t=>"$"+t.toLocaleString()}}}}})}function s1(n){n.length&&Gr("chart-daily",{type:"bar",data:{labels:n.map(t=>t.date),datasets:[{label:"P&L",data:n.map(t=>t.pnl),backgroundColor:n.map(t=>t.pnl>=0?"rgba(34, 197, 94, 0.7)":"rgba(239, 68, 68, 0.7)"),borderColor:n.map(t=>t.pnl>=0?"#22c55e":"#ef4444"),borderWidth:1,borderRadius:4}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{...Rn,tooltip:{...Rn.tooltip,callbacks:{label:t=>`P&L: $${t.parsed.y.toFixed(2)}`}}},scales:{...Te,y:{...Te.y,ticks:{...Te.y.ticks,callback:t=>"$"+t.toLocaleString()}}}}})}function i1(n){n.length&&Gr("chart-coins",{type:"bar",data:{labels:n.map(t=>t.coin),datasets:[{label:"P&L",data:n.map(t=>t.pnl),backgroundColor:n.map(t=>t.pnl>=0?"rgba(34, 197, 94, 0.7)":"rgba(239, 68, 68, 0.7)"),borderColor:n.map(t=>t.pnl>=0?"#22c55e":"#ef4444"),borderWidth:1,borderRadius:4}]},options:{indexAxis:"y",responsive:!0,maintainAspectRatio:!1,plugins:{...Rn,tooltip:{...Rn.tooltip,callbacks:{label:t=>`P&L: $${t.parsed.x.toFixed(2)}`}}},scales:{x:{...Te.x,ticks:{...Te.x.ticks,callback:t=>"$"+t.toLocaleString()}},y:Te.y}}})}function r1(n){n.length&&Gr("chart-strategies",{type:"bar",data:{labels:n.map(t=>t.strategy),datasets:[{label:"P&L",data:n.map(t=>t.pnl),backgroundColor:n.map(t=>t.pnl>=0?"rgba(34, 197, 94, 0.7)":"rgba(239, 68, 68, 0.7)"),borderColor:n.map(t=>t.pnl>=0?"#22c55e":"#ef4444"),borderWidth:1,borderRadius:4}]},options:{indexAxis:"y",responsive:!0,maintainAspectRatio:!1,plugins:Rn,scales:{x:{...Te.x,ticks:{...Te.x.ticks,callback:t=>"$"+t.toLocaleString()}},y:Te.y}}})}function o1(n){if(!n.length)return;const t=n.filter(s=>s.isWin),e=n.filter(s=>!s.isWin);Gr("chart-maemfe",{type:"scatter",data:{datasets:[{label:"Wins",data:t.map(s=>({x:s.mae,y:s.mfe})),backgroundColor:"rgba(34, 197, 94, 0.6)",borderColor:"#22c55e",pointRadius:6,pointHoverRadius:8},{label:"Losses",data:e.map(s=>({x:s.mae,y:s.mfe})),backgroundColor:"rgba(239, 68, 68, 0.6)",borderColor:"#ef4444",pointRadius:6,pointHoverRadius:8}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{...Rn,legend:{display:!0,labels:{color:yr,font:{family:ks}}},tooltip:{...Rn.tooltip,callbacks:{label:s=>`MAE: ${s.parsed.x}% | MFE: ${s.parsed.y}%`}}},scales:{x:{...Te.x,title:{display:!0,text:"MAE%",color:yr,font:{family:ks}}},y:{...Te.y,title:{display:!0,text:"MFE%",color:yr,font:{family:ks}}}}}})}function a1(n,t,e,s,i){requestAnimationFrame(()=>{n1(n),s1(t),i1(e),r1(s),o1(i)})}function l1(n,t,e){t.innerHTML=`
    <div class="modal-header">
      <h3 class="modal-title">📥 Import CSV — Hyperliquid</h3>
      <button class="modal-close" id="modal-close">&times;</button>
    </div>
    <div class="modal-body">
      <div class="upload-zone" id="upload-zone">
        <div class="upload-zone-icon">📄</div>
        <p class="upload-zone-text">
          Drop the CSV file here or <strong>click to select</strong>
        </p>
        <p class="text-muted" style="font-size:0.8rem; margin-top:0.5rem">Accepted format: CSV export from Hyperliquid</p>
        <input type="file" id="csv-input" accept=".csv" style="display:none" />
      </div>
      <div id="upload-status" style="margin-top:1rem"></div>
      <div id="upload-preview" style="margin-top:1rem"></div>
    </div>
    <div class="modal-footer">
      <button class="btn btn-ghost" id="modal-cancel">Cancel</button>
      <button class="btn btn-primary hidden" id="modal-import">📥 Import Trades</button>
    </div>
  `,n.classList.remove("hidden");let s=[];const i=()=>{n.classList.add("hidden")};t.querySelector("#modal-close").addEventListener("click",i),t.querySelector("#modal-cancel").addEventListener("click",i),n.addEventListener("click",d=>{d.target===n&&i()});const r=t.querySelector("#upload-zone"),o=t.querySelector("#csv-input"),a=t.querySelector("#upload-status"),l=t.querySelector("#upload-preview"),u=t.querySelector("#modal-import");r.addEventListener("click",()=>o.click()),r.addEventListener("dragover",d=>{d.preventDefault(),r.classList.add("drag-over")}),r.addEventListener("dragleave",()=>r.classList.remove("drag-over")),r.addEventListener("drop",d=>{d.preventDefault(),r.classList.remove("drag-over"),d.dataTransfer.files.length&&h(d.dataTransfer.files[0])}),o.addEventListener("change",d=>{d.target.files.length&&h(d.target.files[0])});async function h(d){if(!d.name.endsWith(".csv")){a.innerHTML='<span class="text-loss">❌ File must be a .csv</span>';return}a.innerHTML='<span class="text-muted">⏳ Parsing...</span>';try{s=await Kx(d),a.innerHTML=`<span class="text-profit">✅ ${s.length} trades found</span>`;const p=s.slice(0,5);l.innerHTML=`
        <div style="font-size:0.8rem; color: var(--text-muted); margin-bottom:0.5rem">Preview (primele ${Math.min(5,s.length)}):</div>
        <div class="table-container" style="max-height:200px; overflow-y:auto">
          <table class="data-table">
            <thead>
              <tr><th>Date</th><th>Coin</th><th>Dir</th><th>Price</th><th>P&L</th></tr>
            </thead>
            <tbody>
              ${p.map(_=>`
                <tr>
                  <td>${new Date(_.time).toLocaleString("en-US")}</td>
                  <td class="cell-coin">${_.coin}</td>
                  <td><span class="cell-dir ${_.direction==="Long"?"long":"short"}">${_.direction}</span></td>
                  <td>$${_.price.toFixed(2)}</td>
                  <td class="${_.closedPnl>=0?"cell-profit":"cell-loss"}">${_.closedPnl>=0?"+":""}$${_.closedPnl.toFixed(2)}</td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      `,u.classList.remove("hidden")}catch(p){a.innerHTML=`<span class="text-loss">❌ Eroare la parsare: ${p.message}</span>`,console.error(p)}}u.addEventListener("click",()=>{s.length>0&&(e(s),i())})}function c1(n,t){if(n.length===0){t.innerHTML=`
      <div class="page-header">
        <div>
          <h2 class="page-title">Insights</h2>
          <p class="page-subtitle">Performance per strategy, risk and coin</p>
        </div>
      </div>
      <div class="empty-state">
        <div class="empty-state-icon">🔍</div>
        <h3 class="empty-state-title">No trades to analyze</h3>
        <p class="empty-state-text">Import trades and add strategies and risk levels to see the analysis.</p>
      </div>
    `;return}const e=eA(n),s=nA(n),i=sA(n);t.innerHTML=`
    <div class="page-header">
      <div>
        <h2 class="page-title">Insights</h2>
        <p class="page-subtitle">Performance per strategy, risk and coin</p>
      </div>
    </div>

    <div class="insights-grid">
      <!-- Per Strategy -->
      <div class="card animate-in">
        <div class="chart-card-title">📊 Performance per Strategy</div>
        ${Object.keys(s).length===0?'<p class="text-muted" style="padding:1rem">Add strategies to your trades to see the analysis.</p>':Kl(s)}
      </div>

      <!-- Per Risk -->
      <div class="card animate-in">
        <div class="chart-card-title">⚡ Performance per Risk Level</div>
        ${Object.keys(i).length===0?'<p class="text-muted" style="padding:1rem">Add risk levels to your trades to see the analysis.</p>':Kl(i)}
      </div>

      <!-- Per Coin -->
      <div class="card animate-in">
        <div class="chart-card-title">🪙 Performance per Coin</div>
        ${Kl(e)}
      </div>

      <!-- Top/Bottom trades -->
      <div class="card animate-in">
        <div class="chart-card-title">🏆 Top 5 Trades</div>
        ${Up(n,"top")}
      </div>

      <div class="card animate-in">
        <div class="chart-card-title">💀 Worst 5 Trades</div>
        ${Up(n,"bottom")}
      </div>

      <!-- Key Insights -->
      <div class="card animate-in">
        <div class="chart-card-title">💡 Insights</div>
        ${u1(n,s,i,e)}
      </div>
    </div>
  `}function Kl(n){const t=Object.entries(n);return t.length===0?'<p class="text-muted">No data.</p>':`
    <table class="insight-table">
      <thead>
        <tr>
          <th>Group</th>
          <th>Trades</th>
          <th>P&L</th>
          <th>Win Rate</th>
          <th>Profit Factor</th>
          <th>Avg Win</th>
          <th>Avg Loss</th>
        </tr>
      </thead>
      <tbody>
        ${t.map(([e,s])=>`
          <tr>
            <td class="fw-bold">${e}</td>
            <td>${s.closingTrades}</td>
            <td class="${s.totalPnl>=0?"text-profit":"text-loss"} fw-bold">${Gt(s.totalPnl)}</td>
            <td class="${s.winRate>=50?"text-profit":"text-loss"}">${si(s.winRate)}</td>
            <td>${s.profitFactor===1/0?"∞":s.profitFactor.toFixed(2)}</td>
            <td class="text-profit">${Gt(s.avgWin)}</td>
            <td class="text-loss">${Gt(-s.avgLoss)}</td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  `}function Up(n,t){return`
    <table class="insight-table">
      <thead>
        <tr><th>Date</th><th>Coin</th><th>Dir</th><th>P&L</th><th>Strategy</th></tr>
      </thead>
      <tbody>
        ${[...n.filter(r=>r.closedPnl!==0||r.action==="Close")].sort((r,o)=>t==="top"?o.closedPnl-r.closedPnl:r.closedPnl-o.closedPnl).slice(0,5).map(r=>`
          <tr>
            <td>${new Date(r.time).toLocaleDateString("en-US")}</td>
            <td class="cell-coin">${r.coin}</td>
            <td><span class="cell-dir ${r.direction==="Long"?"long":"short"}">${r.direction}</span></td>
            <td class="${r.closedPnl>=0?"text-profit":"text-loss"} fw-bold">${Gt(r.closedPnl)}</td>
            <td>${r.strategy?`<span class="strategy-badge">${r.strategy}</span>`:"-"}</td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  `}function u1(n,t,e,s){const i=[],r=Object.entries(s||{});if(r.length>0){const _=r.reduce((E,w)=>E[1].totalPnl>w[1].totalPnl?E:w),v=r.reduce((E,w)=>E[1].totalPnl<w[1].totalPnl?E:w);i.push(`🪙 <strong>Most profitable coin</strong>: ${_[0]} (${Gt(_[1].totalPnl)}, ${si(_[1].winRate)} win rate, ${_[1].closingTrades} trades)`),v[0]!==_[0]&&i.push(`📉 <strong>Weakest coin</strong>: ${v[0]} (${Gt(v[1].totalPnl)}, ${si(v[1].winRate)} win rate, ${v[1].closingTrades} trades)`)}const o=Object.entries(t);if(o.length>0){const _=o.reduce((E,w)=>E[1].totalPnl>w[1].totalPnl?E:w),v=o.reduce((E,w)=>E[1].totalPnl<w[1].totalPnl?E:w);i.push(`✅ <strong>Best strategy</strong>: ${_[0]} (${Gt(_[1].totalPnl)}, ${si(_[1].winRate)} win rate)`),v[0]!==_[0]&&i.push(`❌ <strong>Worst strategy</strong>: ${v[0]} (${Gt(v[1].totalPnl)}, ${si(v[1].winRate)} win rate)`)}const a=Object.entries(e);if(a.length>0){const _=a.reduce((v,E)=>v[1].profitFactor>E[1].profitFactor?v:E);i.push(`⚡ <strong>Best risk/reward ratio</strong>: ${_[0]} (PF: ${_[1].profitFactor===1/0?"∞":_[1].profitFactor.toFixed(2)})`)}const l=[...n].filter(_=>_.closedPnl!==0).sort((_,v)=>_.time.localeCompare(v.time));let u=0,h=0,d=0,p=0;return l.forEach(_=>{_.closedPnl>0?(d++,p=0,u=Math.max(u,d)):(p++,d=0,h=Math.max(h,p))}),i.push(`🔥 <strong>Max win streak</strong>: ${u} consecutive trades`),i.push(`💀 <strong>Max loss streak</strong>: ${h} consecutive trades`),`
    <div style="display:flex; flex-direction:column; gap:0.75rem; padding:0.5rem 0">
      ${i.map(_=>`<div style="font-size:0.9rem; line-height:1.5">${_}</div>`).join("")}
    </div>
  `}function h1(n,t){const e=lA(n);if(n.length===0){t.innerHTML=`
      <div class="page-header">
        <div>
          <h2 class="page-title">Calendar</h2>
          <p class="page-subtitle">Daily P&L Heatmap</p>
        </div>
      </div>
      <div class="empty-state">
        <div class="empty-state-icon">📅</div>
        <h3 class="empty-state-title">No trades</h3>
        <p class="empty-state-text">Import trades to see the P&L calendar.</p>
      </div>
    `;return}const s=Object.keys(e).sort(),i=new Date(s[0]),r=new Date(s[s.length-1]),o=Object.values(e).map(h=>Math.abs(h.pnl)),a=Math.max(...o,1),l=[],u=new Date(i.getFullYear(),i.getMonth(),1);for(;u<=r;)l.push(new Date(u)),u.setMonth(u.getMonth()+1);t.innerHTML=`
    <div class="page-header">
      <div>
        <h2 class="page-title">Calendar</h2>
        <p class="page-subtitle">Daily P&L Heatmap — ${s.length} active days</p>
      </div>
    </div>
    <div class="card">
      ${l.map(h=>d1(h,e,a)).join("")}
    </div>
  `,t.querySelectorAll(".calendar-cell.has-data").forEach(h=>{h.style.cursor="pointer",h.addEventListener("click",()=>{const d=h.dataset.date;d&&f1(d,n)})})}function d1(n,t,e){const s=n.getFullYear(),i=n.getMonth(),r=n.toLocaleDateString("en-US",{month:"long",year:"numeric"}),o=new Date(s,i,1),a=new Date(s,i+1,0),l=(o.getDay()+6)%7,u=["M","Tu","W","Th","F","Sa","Su"];let h="";h+=u.map(d=>`<div class="calendar-header-cell">${d}</div>`).join("");for(let d=0;d<l;d++)h+='<div class="calendar-cell empty"></div>';for(let d=1;d<=a.getDate();d++){const p=`${s}-${String(i+1).padStart(2,"0")}-${String(d).padStart(2,"0")}`,_=t[p];if(_){const v=p1(_.pnl,e),E=_.pnl>=0?`cal-profit-${v}`:`cal-loss-${v}`;h+=`
        <div class="calendar-cell has-data ${E}" data-date="${p}" title="${p}: ${Gt(_.pnl)} (${_.trades} trades)">
          <span class="calendar-day">${d}</span>
          <span class="calendar-pnl ${_.pnl>=0?"text-profit":"text-loss"}">${g1(_.pnl)}</span>
        </div>
      `}else h+=`
        <div class="calendar-cell">
          <span class="calendar-day">${d}</span>
        </div>
      `}return`
    <div class="calendar-month-header">${r}</div>
    <div class="calendar-grid">${h}</div>
  `}function f1(n,t,e){const s=t.filter(u=>!!(u.time&&u.time.slice(0,10)===n||u.exitTime&&u.exitTime.slice(0,10)===n)),i=[];s.forEach(u=>{const h=u.closedPnl>0?"cell-profit":u.closedPnl<0?"cell-loss":"",d=u.direction==="Long"?"long":"short",p=u.status==="Completed";i.push(`
      <tr>
        <td>${new Date(u.time).toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit"})}</td>
        <td class="cell-coin">${u.coin}</td>
        <td><span class="cell-dir ${d}">${u.direction}</span></td>
        <td><span class="status-badge ${p?"status-completed":"status-active"}" style="font-size:0.7rem">${p?"✓ Completed":"Active"}</span></td>
        <td>$${(u.entryPrice||0).toLocaleString("en-US",{minimumFractionDigits:2})}</td>
        <td>${u.size}</td>
        <td class="${h}" style="font-weight:600">${p?Gt(u.closedPnl):'<span class="text-muted">—</span>'}</td>
        <td>${u.strategy?`<span class="strategy-badge">${u.strategy}</span>`:""}</td>
      </tr>
    `)});const r=s.reduce((u,h)=>u+(h.closedPnl||0),0),o=r>=0?"cell-profit":"cell-loss",a=new Date(n).toLocaleDateString("en-US",{weekday:"long",day:"numeric",month:"long",year:"numeric"}),l=document.createElement("div");l.style.cssText="position:fixed; inset:0; background:rgba(0,0,0,0.5); z-index:500; display:flex; align-items:center; justify-content:center; padding:1rem;",l.innerHTML=`
        <div style="background:var(--bg-card); border-radius:var(--radius-lg); padding:1.5rem; width:700px; max-width:95vw; border:1px solid var(--border-medium); max-height:85vh; overflow-y:auto;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1rem;">
                <div>
                    <h3 style="margin:0; font-size:1.1rem;">📅 ${a}</h3>
                    <p style="margin:0.25rem 0 0; font-size:0.85rem; color:var(--text-muted);">${s.length} trades • Total: <strong class="${o}">${Gt(r)}</strong></p>
                </div>
                <button id="day-detail-close" style="background:none; border:none; font-size:1.5rem; cursor:pointer; color:var(--text-secondary);">✕</button>
            </div>
            <div class="table-container">
                <table class="data-table">
                    <thead><tr>
                        <th>Ora</th>
                        <th>Coin</th>
                        <th>Dir</th>
                        <th>Status</th>
                        <th>Entry</th>
                        <th>Size</th>
                        <th>P&L</th>
                        <th>Strategy</th>
                    </tr></thead>
                    <tbody>
                        ${i.length>0?i.join(""):'<tr><td colspan="8" style="text-align:center; padding:1.5rem; color:var(--text-muted)">No trades</td></tr>'}
                    </tbody>
                </table>
            </div>
        </div>
    `,document.body.appendChild(l),l.querySelector("#day-detail-close").addEventListener("click",()=>l.remove()),l.addEventListener("click",u=>{u.target===l&&l.remove()})}function p1(n,t){const e=Math.abs(n)/t;return e<.15?1:e<.35?2:e<.65?3:4}function g1(n){return Math.abs(n)>=1e3?(n>=0?"+":"")+(n/1e3).toFixed(1)+"k":(n>=0?"+":"")+n.toFixed(0)}let xt=[],xa="dashboard";async function Aa(n){Wa(n);const t=document.getElementById("sync-status");t&&(t.textContent="☁️ Syncing...");try{await Du(),t&&(t.textContent="☁️ Synced")}catch(e){console.warn("Cloud sync failed:",e),t&&(t.textContent="⚠️ Offline")}}const ni=document.getElementById("main-content"),Ey=document.getElementById("modal-overlay"),Ty=document.getElementById("modal-container");document.querySelectorAll(".nav-link").forEach(n=>{n.addEventListener("click",t=>{t.preventDefault();const e=n.dataset.page;e&&Yo(e)})});function Yo(n,t=!0){var e;xa=n,document.querySelectorAll(".nav-link").forEach(s=>s.classList.remove("active")),(e=document.querySelector(`[data-page="${n}"]`))==null||e.classList.add("active"),t&&history.pushState({page:n},"",`#${n}`),Us()}window.addEventListener("popstate",n=>{if(n.state&&n.state.page==="trade-detail"&&n.state.tradeId){const t=xt.find(e=>e.id===n.state.tradeId);t?Iy(t,!1):Yo("trades",!1)}else n.state&&n.state.page?Yo(n.state.page,!1):Yo("dashboard",!1)});history.replaceState({page:xa},"",`#${xa}`);function Us(){if(!Nx()){ni.innerHTML=`
        <div class="empty-state" style="margin-top:4rem;">
          <div class="empty-state-icon" style="font-size:3rem;">🔐</div>
          <h3 class="empty-state-title">Welcome to CryptoJournal</h3>
          <p class="empty-state-text">Sign in with Google to access your trading journal.<br>Your data is synced securely in the cloud.</p>
        </div>
      `;return}switch(xa){case"dashboard":if(uA(xt,ni),xt.length>0){const n=iA(xt),t=Lu(xt),e=rA(xt),s=oA(xt),i=aA(xt);a1(n,t,e,s,i)}break;case"trades":Ya(xt,ni,Iy);break;case"insights":c1(xt,ni);break;case"calendar":h1(xt,ni);break}}function Iy(n,t=!0){t&&history.pushState({page:"trade-detail",tradeId:n.id},"",`#trade/${n.id}`),IA(n,ni,()=>{history.back()},(e,s)=>{xt=xt.map(i=>i.id===e?{...i,...s}:i),Aa(xt)},e=>{xt=xt.filter(s=>s.id!==e),Aa(xt)})}function m1(n){xt=Zx(xt,n),Aa(xt),Us()}function _1(n){xt.push(n),Aa(xt),Us()}document.getElementById("btn-import-csv").addEventListener("click",()=>{l1(Ey,Ty,m1)});document.getElementById("btn-add-trade").addEventListener("click",()=>{EA(Ey,Ty,_1)});document.getElementById("btn-export-data").addEventListener("click",async()=>{try{const n=await Bx(),t=JSON.stringify(n,null,2),e=new Blob([t],{type:"application/json"}),s=URL.createObjectURL(e),i=document.createElement("a");i.href=s,i.download=`crypto-journal-backup-${new Date().toISOString().slice(0,10)}.json`,i.click(),URL.revokeObjectURL(s)}catch(n){console.error("Export failed:",n),alert("Export error: "+n.message)}});document.getElementById("btn-import-data").addEventListener("click",()=>{const n=document.createElement("input");n.type="file",n.accept=".json",n.addEventListener("change",async t=>{var s;const e=t.target.files[0];if(e)try{const i=await e.text(),r=JSON.parse(i);await $x(r),xt=Ka(),Us(),alert(`✅ Backup imported! (${((s=r.trades)==null?void 0:s.length)||0} trades)`)}catch(i){console.error("Import failed:",i),alert("Import error: "+i.message)}}),n.click()});let Fe=[],He=0;function Nr(){const n=document.getElementById("lightbox"),t=document.getElementById("lightbox-img"),e=document.getElementById("lightbox-counter"),s=document.getElementById("lightbox-prev"),i=document.getElementById("lightbox-next");t.src=Fe[He],e.textContent=Fe.length>1?`${He+1} / ${Fe.length}`:"",s.style.display=Fe.length>1?"flex":"none",i.style.display=Fe.length>1?"flex":"none",n.classList.remove("hidden")}window.openLightbox=function(n,t=0){Fe=n,He=t,Nr()};document.getElementById("lightbox-close").addEventListener("click",()=>{document.getElementById("lightbox").classList.add("hidden")});document.getElementById("lightbox").addEventListener("click",n=>{n.target===n.currentTarget&&n.currentTarget.classList.add("hidden")});document.getElementById("lightbox-prev").addEventListener("click",n=>{n.stopPropagation(),He=(He-1+Fe.length)%Fe.length,Nr()});document.getElementById("lightbox-next").addEventListener("click",n=>{n.stopPropagation(),He=(He+1)%Fe.length,Nr()});document.addEventListener("keydown",n=>{const t=document.getElementById("lightbox");t.classList.contains("hidden")||(n.key==="ArrowLeft"&&(He=(He-1+Fe.length)%Fe.length,Nr()),n.key==="ArrowRight"&&(He=(He+1)%Fe.length,Nr()),n.key==="Escape"&&t.classList.add("hidden"))});const Xu=document.getElementById("hamburger"),Sy=document.getElementById("sidebar"),Qu=document.getElementById("sidebar-backdrop");function y1(){Sy.classList.toggle("open"),Xu.classList.toggle("open"),Qu.classList.toggle("open")}function Ju(){Sy.classList.remove("open"),Xu.classList.remove("open"),Qu.classList.remove("open")}Xu.addEventListener("click",y1);Qu.addEventListener("click",Ju);document.querySelectorAll(".nav-link").forEach(n=>{n.addEventListener("click",Ju)});["btn-import-csv","btn-add-trade","btn-export-data","btn-import-data"].forEach(n=>{var t;(t=document.getElementById(n))==null||t.addEventListener("click",Ju)});const Bp=document.getElementById("auth-logged-out"),$p=document.getElementById("auth-logged-in"),b1=document.getElementById("auth-avatar"),v1=document.getElementById("auth-name");document.getElementById("btn-google-login").addEventListener("click",async()=>{try{await xx()}catch(n){n.code!=="auth/popup-closed-by-user"&&(console.error("Login failed:",n),alert("Login failed: "+n.message))}});document.getElementById("btn-logout").addEventListener("click",async()=>{await Ax()});Px(async n=>{if(n){_f(n.uid),Bp.classList.add("hidden"),$p.classList.remove("hidden"),b1.src=n.photoURL||"",v1.textContent=n.displayName||n.email;const t=document.getElementById("sync-status");t.textContent="☁️ Loading...";try{await Vx()?(xt=tA(Ka()),Us(),t.textContent=`☁️ ${xt.length} trades synced`):(await Du(),t.textContent=`☁️ ${xt.length} trades synced`)}catch(e){console.error("[SYNC] Error:",e),t.textContent="⚠️ Sync error"}}else _f(null),Bp.classList.remove("hidden"),$p.classList.add("hidden"),Wa([]),xt=[],Us()});Us();
