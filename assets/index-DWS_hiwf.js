var Z_=Object.defineProperty;var ty=(n,t,e)=>t in n?Z_(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var $=(n,t,e)=>ty(n,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();const ey=()=>{};var ph={};/**
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
 */const cp=function(n){const t=[];let e=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);i<128?t[e++]=i:i<2048?(t[e++]=i>>6|192,t[e++]=i&63|128):(i&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++s)&1023),t[e++]=i>>18|240,t[e++]=i>>12&63|128,t[e++]=i>>6&63|128,t[e++]=i&63|128):(t[e++]=i>>12|224,t[e++]=i>>6&63|128,t[e++]=i&63|128)}return t},ny=function(n){const t=[];let e=0,s=0;for(;e<n.length;){const i=n[e++];if(i<128)t[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=n[e++];t[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=n[e++],o=n[e++],a=n[e++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;t[s++]=String.fromCharCode(55296+(l>>10)),t[s++]=String.fromCharCode(56320+(l&1023))}else{const r=n[e++],o=n[e++];t[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return t.join("")},up={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<n.length;i+=3){const r=n[i],o=i+1<n.length,a=o?n[i+1]:0,l=i+2<n.length,u=l?n[i+2]:0,h=r>>2,d=(r&3)<<4|a>>4;let p=(a&15)<<2|u>>6,y=u&63;l||(y=64,o||(p=64)),s.push(e[h],e[d],e[p],e[y])}return s.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(cp(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):ny(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<n.length;){const r=e[n.charAt(i++)],a=i<n.length?e[n.charAt(i)]:0;++i;const u=i<n.length?e[n.charAt(i)]:64;++i;const d=i<n.length?e[n.charAt(i)]:64;if(++i,r==null||a==null||u==null||d==null)throw new sy;const p=r<<2|a>>4;if(s.push(p),u!==64){const y=a<<4&240|u>>2;if(s.push(y),d!==64){const E=u<<6&192|d;s.push(E)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class sy extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const iy=function(n){const t=cp(n);return up.encodeByteArray(t,!0)},Fo=function(n){return iy(n).replace(/\./g,"")},hp=function(n){try{return up.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function ry(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const oy=()=>ry().__FIREBASE_DEFAULTS__,ay=()=>{if(typeof process>"u"||typeof ph>"u")return;const n=ph.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},ly=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&hp(n[1]);return t&&JSON.parse(t)},ma=()=>{try{return ey()||oy()||ay()||ly()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},dp=n=>{var t,e;return(e=(t=ma())==null?void 0:t.emulatorHosts)==null?void 0:e[n]},cy=n=>{const t=dp(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const s=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),s]:[t.substring(0,e),s]},fp=()=>{var n;return(n=ma())==null?void 0:n.config},pp=n=>{var t;return(t=ma())==null?void 0:t[`_${n}`]};/**
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
 */class uy{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,s)=>{e?this.reject(e):this.resolve(s),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,s))}}}/**
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
 */function di(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function gp(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function hy(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},s=t||"demo-project",i=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Fo(JSON.stringify(e)),Fo(JSON.stringify(o)),""].join(".")}const Qi={};function dy(){const n={prod:[],emulator:[]};for(const t of Object.keys(Qi))Qi[t]?n.emulator.push(t):n.prod.push(t);return n}function fy(n){let t=document.getElementById(n),e=!1;return t||(t=document.createElement("div"),t.setAttribute("id",n),e=!0),{created:e,element:t}}let gh=!1;function mp(n,t){if(typeof window>"u"||typeof document>"u"||!di(window.location.host)||Qi[n]===t||Qi[n]||gh)return;Qi[n]=t;function e(p){return`__firebase__banner__${p}`}const s="__firebase__banner",r=dy().prod.length>0;function o(){const p=document.getElementById(s);p&&p.remove()}function a(p){p.style.display="flex",p.style.background="#7faaf0",p.style.position="fixed",p.style.bottom="5px",p.style.left="5px",p.style.padding=".5em",p.style.borderRadius="5px",p.style.alignItems="center"}function l(p,y){p.setAttribute("width","24"),p.setAttribute("id",y),p.setAttribute("height","24"),p.setAttribute("viewBox","0 0 24 24"),p.setAttribute("fill","none"),p.style.marginLeft="-6px"}function u(){const p=document.createElement("span");return p.style.cursor="pointer",p.style.marginLeft="16px",p.style.fontSize="24px",p.innerHTML=" &times;",p.onclick=()=>{gh=!0,o()},p}function h(p,y){p.setAttribute("id",y),p.innerText="Learn more",p.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",p.setAttribute("target","__blank"),p.style.paddingLeft="5px",p.style.textDecoration="underline"}function d(){const p=fy(s),y=e("text"),E=document.getElementById(y)||document.createElement("span"),w=e("learnmore"),I=document.getElementById(w)||document.createElement("a"),P=e("preprendIcon"),k=document.getElementById(P)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(p.created){const R=p.element;a(R),h(I,w);const D=u();l(k,P),R.append(k,E,I,D),document.body.appendChild(R)}r?(E.innerText="Preview backend disconnected.",k.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(k.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,E.innerText="Preview backend running in this workspace."),E.setAttribute("id",y)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",d):d()}/**
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
 */function he(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function py(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(he())}function gy(){var t;const n=(t=ma())==null?void 0:t.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function my(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function _y(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function yy(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function by(){const n=he();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function vy(){return!gy()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Ey(){try{return typeof indexedDB=="object"}catch{return!1}}function wy(){return new Promise((n,t)=>{try{let e=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),e||self.indexedDB.deleteDatabase(s),n(!0)},i.onupgradeneeded=()=>{e=!1},i.onerror=()=>{var r;t(((r=i.error)==null?void 0:r.message)||"")}}catch(e){t(e)}})}/**
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
 */const Ty="FirebaseError";class Tn extends Error{constructor(t,e,s){super(e),this.code=t,this.customData=s,this.name=Ty,Object.setPrototypeOf(this,Tn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ar.prototype.create)}}class Ar{constructor(t,e,s){this.service=t,this.serviceName=e,this.errors=s}create(t,...e){const s=e[0]||{},i=`${this.service}/${t}`,r=this.errors[t],o=r?Iy(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Tn(i,a,s)}}function Iy(n,t){return n.replace(Sy,(e,s)=>{const i=t[s];return i!=null?String(i):`<${s}?>`})}const Sy=/\{\$([^}]+)}/g;function xy(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}function Es(n,t){if(n===t)return!0;const e=Object.keys(n),s=Object.keys(t);for(const i of e){if(!s.includes(i))return!1;const r=n[i],o=t[i];if(mh(r)&&mh(o)){if(!Es(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!e.includes(i))return!1;return!0}function mh(n){return n!==null&&typeof n=="object"}/**
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
 */function Pr(n){const t=[];for(const[e,s]of Object.entries(n))Array.isArray(s)?s.forEach(i=>{t.push(encodeURIComponent(e)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(e)+"="+encodeURIComponent(s));return t.length?"&"+t.join("&"):""}function Ay(n,t){const e=new Py(n,t);return e.subscribe.bind(e)}class Py{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then(()=>{t(this)}).catch(s=>{this.error(s)})}next(t){this.forEachObserver(e=>{e.next(t)})}error(t){this.forEachObserver(e=>{e.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,e,s){let i;if(t===void 0&&e===void 0&&s===void 0)throw new Error("Missing Observer.");ky(t,["next","error","complete"])?i=t:i={next:t,error:e,complete:s},i.next===void 0&&(i.next=sl),i.error===void 0&&(i.error=sl),i.complete===void 0&&(i.complete=sl);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{e(this.observers[t])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ky(n,t){if(typeof n!="object"||n===null)return!1;for(const e of t)if(e in n&&typeof n[e]=="function")return!0;return!1}function sl(){}/**
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
 */function De(n){return n&&n._delegate?n._delegate:n}class ws{constructor(t,e,s){this.name=t,this.instanceFactory=e,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const us="[DEFAULT]";/**
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
 */class Ry{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const s=new uy;if(this.instancesDeferred.set(e,s),this.isInitialized(e)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:e});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){const e=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(t==null?void 0:t.optional)??!1;if(this.isInitialized(e)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:e})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Dy(t))try{this.getOrInitializeService({instanceIdentifier:us})}catch{}for(const[e,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(e);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(t=us){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=us){return this.instances.has(t)}getOptions(t=us){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:e});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(t,e){const s=this.normalizeInstanceIdentifier(e),i=this.onInitCallbacks.get(s)??new Set;i.add(t),this.onInitCallbacks.set(s,i);const r=this.instances.get(s);return r&&t(r,s),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const s=this.onInitCallbacks.get(e);if(s)for(const i of s)try{i(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let s=this.instances.get(t);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Cy(t),options:e}),this.instances.set(t,s),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(s,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,s)}catch{}return s||null}normalizeInstanceIdentifier(t=us){return this.component?this.component.multipleInstances?t:us:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Cy(n){return n===us?void 0:n}function Dy(n){return n.instantiationMode==="EAGER"}/**
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
 */class My{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Ry(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var lt;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(lt||(lt={}));const Oy={debug:lt.DEBUG,verbose:lt.VERBOSE,info:lt.INFO,warn:lt.WARN,error:lt.ERROR,silent:lt.SILENT},Ly=lt.INFO,Vy={[lt.DEBUG]:"log",[lt.VERBOSE]:"log",[lt.INFO]:"info",[lt.WARN]:"warn",[lt.ERROR]:"error"},Ny=(n,t,...e)=>{if(t<n.logLevel)return;const s=new Date().toISOString(),i=Vy[t];if(i)console[i](`[${s}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class fc{constructor(t){this.name=t,this._logLevel=Ly,this._logHandler=Ny,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in lt))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Oy[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,lt.DEBUG,...t),this._logHandler(this,lt.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,lt.VERBOSE,...t),this._logHandler(this,lt.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,lt.INFO,...t),this._logHandler(this,lt.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,lt.WARN,...t),this._logHandler(this,lt.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,lt.ERROR,...t),this._logHandler(this,lt.ERROR,...t)}}const Fy=(n,t)=>t.some(e=>n instanceof e);let _h,yh;function Uy(){return _h||(_h=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function By(){return yh||(yh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const _p=new WeakMap,Dl=new WeakMap,yp=new WeakMap,il=new WeakMap,pc=new WeakMap;function $y(n){const t=new Promise((e,s)=>{const i=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{e(zn(n.result)),i()},o=()=>{s(n.error),i()};n.addEventListener("success",r),n.addEventListener("error",o)});return t.then(e=>{e instanceof IDBCursor&&_p.set(e,n)}).catch(()=>{}),pc.set(t,n),t}function zy(n){if(Dl.has(n))return;const t=new Promise((e,s)=>{const i=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{e(),i()},o=()=>{s(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});Dl.set(n,t)}let Ml={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return Dl.get(n);if(t==="objectStoreNames")return n.objectStoreNames||yp.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return zn(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function jy(n){Ml=n(Ml)}function Hy(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const s=n.call(rl(this),t,...e);return yp.set(s,t.sort?t.sort():[t]),zn(s)}:By().includes(n)?function(...t){return n.apply(rl(this),t),zn(_p.get(this))}:function(...t){return zn(n.apply(rl(this),t))}}function Wy(n){return typeof n=="function"?Hy(n):(n instanceof IDBTransaction&&zy(n),Fy(n,Uy())?new Proxy(n,Ml):n)}function zn(n){if(n instanceof IDBRequest)return $y(n);if(il.has(n))return il.get(n);const t=Wy(n);return t!==n&&(il.set(n,t),pc.set(t,n)),t}const rl=n=>pc.get(n);function qy(n,t,{blocked:e,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(n,t),a=zn(o);return s&&o.addEventListener("upgradeneeded",l=>{s(zn(o.result),l.oldVersion,l.newVersion,zn(o.transaction),l)}),e&&o.addEventListener("blocked",l=>e(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const Ky=["get","getKey","getAll","getAllKeys","count"],Gy=["put","add","delete","clear"],ol=new Map;function bh(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(ol.get(t))return ol.get(t);const e=t.replace(/FromIndex$/,""),s=t!==e,i=Gy.includes(e);if(!(e in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Ky.includes(e)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return s&&(u=u.index(a.shift())),(await Promise.all([u[e](...a),i&&l.done]))[0]};return ol.set(t,r),r}jy(n=>({...n,get:(t,e,s)=>bh(t,e)||n.get(t,e,s),has:(t,e)=>!!bh(t,e)||n.has(t,e)}));/**
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
 */class Yy{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(Qy(e)){const s=e.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(e=>e).join(" ")}}function Qy(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Ol="@firebase/app",vh="0.14.8";/**
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
 */const yn=new fc("@firebase/app"),Xy="@firebase/app-compat",Jy="@firebase/analytics-compat",Zy="@firebase/analytics",tb="@firebase/app-check-compat",eb="@firebase/app-check",nb="@firebase/auth",sb="@firebase/auth-compat",ib="@firebase/database",rb="@firebase/data-connect",ob="@firebase/database-compat",ab="@firebase/functions",lb="@firebase/functions-compat",cb="@firebase/installations",ub="@firebase/installations-compat",hb="@firebase/messaging",db="@firebase/messaging-compat",fb="@firebase/performance",pb="@firebase/performance-compat",gb="@firebase/remote-config",mb="@firebase/remote-config-compat",_b="@firebase/storage",yb="@firebase/storage-compat",bb="@firebase/firestore",vb="@firebase/ai",Eb="@firebase/firestore-compat",wb="firebase",Tb="12.9.0";/**
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
 */const Ll="[DEFAULT]",Ib={[Ol]:"fire-core",[Xy]:"fire-core-compat",[Zy]:"fire-analytics",[Jy]:"fire-analytics-compat",[eb]:"fire-app-check",[tb]:"fire-app-check-compat",[nb]:"fire-auth",[sb]:"fire-auth-compat",[ib]:"fire-rtdb",[rb]:"fire-data-connect",[ob]:"fire-rtdb-compat",[ab]:"fire-fn",[lb]:"fire-fn-compat",[cb]:"fire-iid",[ub]:"fire-iid-compat",[hb]:"fire-fcm",[db]:"fire-fcm-compat",[fb]:"fire-perf",[pb]:"fire-perf-compat",[gb]:"fire-rc",[mb]:"fire-rc-compat",[_b]:"fire-gcs",[yb]:"fire-gcs-compat",[bb]:"fire-fst",[Eb]:"fire-fst-compat",[vb]:"fire-vertex","fire-js":"fire-js",[wb]:"fire-js-all"};/**
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
 */const Uo=new Map,Sb=new Map,Vl=new Map;function Eh(n,t){try{n.container.addComponent(t)}catch(e){yn.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function ni(n){const t=n.name;if(Vl.has(t))return yn.debug(`There were multiple attempts to register component ${t}.`),!1;Vl.set(t,n);for(const e of Uo.values())Eh(e,n);for(const e of Sb.values())Eh(e,n);return!0}function gc(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function Le(n){return n==null?!1:n.settings!==void 0}/**
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
 */const xb={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},jn=new Ar("app","Firebase",xb);/**
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
 */class Ab{constructor(t,e,s){this._isDeleted=!1,this._options={...t},this._config={...e},this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new ws("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw jn.create("app-deleted",{appName:this._name})}}/**
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
 */const fi=Tb;function bp(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const s={name:Ll,automaticDataCollectionEnabled:!0,...t},i=s.name;if(typeof i!="string"||!i)throw jn.create("bad-app-name",{appName:String(i)});if(e||(e=fp()),!e)throw jn.create("no-options");const r=Uo.get(i);if(r){if(Es(e,r.options)&&Es(s,r.config))return r;throw jn.create("duplicate-app",{appName:i})}const o=new My(i);for(const l of Vl.values())o.addComponent(l);const a=new Ab(e,s,o);return Uo.set(i,a),a}function vp(n=Ll){const t=Uo.get(n);if(!t&&n===Ll&&fp())return bp();if(!t)throw jn.create("no-app",{appName:n});return t}function Hn(n,t,e){let s=Ib[n]??n;e&&(s+=`-${e}`);const i=s.match(/\s|\//),r=t.match(/\s|\//);if(i||r){const o=[`Unable to register library "${s}" with version "${t}":`];i&&o.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&r&&o.push("and"),r&&o.push(`version name "${t}" contains illegal characters (whitespace or "/")`),yn.warn(o.join(" "));return}ni(new ws(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
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
 */const Pb="firebase-heartbeat-database",kb=1,cr="firebase-heartbeat-store";let al=null;function Ep(){return al||(al=qy(Pb,kb,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(cr)}catch(e){console.warn(e)}}}}).catch(n=>{throw jn.create("idb-open",{originalErrorMessage:n.message})})),al}async function Rb(n){try{const e=(await Ep()).transaction(cr),s=await e.objectStore(cr).get(wp(n));return await e.done,s}catch(t){if(t instanceof Tn)yn.warn(t.message);else{const e=jn.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});yn.warn(e.message)}}}async function wh(n,t){try{const s=(await Ep()).transaction(cr,"readwrite");await s.objectStore(cr).put(t,wp(n)),await s.done}catch(e){if(e instanceof Tn)yn.warn(e.message);else{const s=jn.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});yn.warn(s.message)}}}function wp(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Cb=1024,Db=30;class Mb{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Lb(e),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var t,e;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Th();if(((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats.length>Db){const o=Vb(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){yn.warn(s)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Th(),{heartbeatsToSend:s,unsentEntries:i}=Ob(this._heartbeatsCache.heartbeats),r=Fo(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(e){return yn.warn(e),""}}}function Th(){return new Date().toISOString().substring(0,10)}function Ob(n,t=Cb){const e=[];let s=n.slice();for(const i of n){const r=e.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Ih(e)>t){r.dates.pop();break}}else if(e.push({agent:i.agent,dates:[i.date]}),Ih(e)>t){e.pop();break}s=s.slice(1)}return{heartbeatsToSend:e,unsentEntries:s}}class Lb{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ey()?wy().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await Rb(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const s=await this.read();return wh(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const s=await this.read();return wh(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function Ih(n){return Fo(JSON.stringify({version:2,heartbeats:n})).length}function Vb(n){if(n.length===0)return-1;let t=0,e=n[0].date;for(let s=1;s<n.length;s++)n[s].date<e&&(e=n[s].date,t=s);return t}/**
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
 */function Nb(n){ni(new ws("platform-logger",t=>new Yy(t),"PRIVATE")),ni(new ws("heartbeat",t=>new Mb(t),"PRIVATE")),Hn(Ol,vh,n),Hn(Ol,vh,"esm2020"),Hn("fire-js","")}Nb("");var Fb="firebase",Ub="12.9.0";/**
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
 */Hn(Fb,Ub,"app");function Tp(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Bb=Tp,Ip=new Ar("auth","Firebase",Tp());/**
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
 */const Bo=new fc("@firebase/auth");function $b(n,...t){Bo.logLevel<=lt.WARN&&Bo.warn(`Auth (${fi}): ${n}`,...t)}function bo(n,...t){Bo.logLevel<=lt.ERROR&&Bo.error(`Auth (${fi}): ${n}`,...t)}/**
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
 */function Ze(n,...t){throw _c(n,...t)}function Ue(n,...t){return _c(n,...t)}function mc(n,t,e){const s={...Bb(),[t]:e};return new Ar("auth","Firebase",s).create(t,{appName:n.name})}function ms(n){return mc(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function zb(n,t,e){const s=e;if(!(t instanceof s))throw s.name!==t.constructor.name&&Ze(n,"argument-error"),mc(n,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function _c(n,...t){if(typeof n!="string"){const e=t[0],s=[...t.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(e,...s)}return Ip.create(n,...t)}function Q(n,t,...e){if(!n)throw _c(t,...e)}function fn(n){const t="INTERNAL ASSERTION FAILED: "+n;throw bo(t),new Error(t)}function bn(n,t){n||fn(t)}/**
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
 */function Nl(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function jb(){return Sh()==="http:"||Sh()==="https:"}function Sh(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
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
 */function Hb(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(jb()||_y()||"connection"in navigator)?navigator.onLine:!0}function Wb(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class kr{constructor(t,e){this.shortDelay=t,this.longDelay=e,bn(e>t,"Short delay should be less than long delay!"),this.isMobile=py()||yy()}get(){return Hb()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function yc(n,t){bn(n.emulator,"Emulator should always be set here");const{url:e}=n.emulator;return t?`${e}${t.startsWith("/")?t.slice(1):t}`:e}/**
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
 */class Sp{static initialize(t,e,s){this.fetchImpl=t,e&&(this.headersImpl=e),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;fn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;fn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;fn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const qb={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Kb=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Gb=new kr(3e4,6e4);function bc(n,t){return n.tenantId&&!t.tenantId?{...t,tenantId:n.tenantId}:t}async function pi(n,t,e,s,i={}){return xp(n,i,async()=>{let r={},o={};s&&(t==="GET"?o=s:r={body:JSON.stringify(s)});const a=Pr({key:n.config.apiKey,...o}).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const u={method:t,headers:l,...r};return my()||(u.referrerPolicy="no-referrer"),n.emulatorConfig&&di(n.emulatorConfig.host)&&(u.credentials="include"),Sp.fetch()(await Ap(n,n.config.apiHost,e,a),u)})}async function xp(n,t,e){n._canInitEmulator=!1;const s={...qb,...t};try{const i=new Qb(n),r=await Promise.race([e(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Xr(n,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Xr(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Xr(n,"email-already-in-use",o);if(l==="USER_DISABLED")throw Xr(n,"user-disabled",o);const h=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw mc(n,h,u);Ze(n,h)}}catch(i){if(i instanceof Tn)throw i;Ze(n,"network-request-failed",{message:String(i)})}}async function Yb(n,t,e,s,i={}){const r=await pi(n,t,e,s,i);return"mfaPendingCredential"in r&&Ze(n,"multi-factor-auth-required",{_serverResponse:r}),r}async function Ap(n,t,e,s){const i=`${t}${e}?${s}`,r=n,o=r.config.emulator?yc(n.config,i):`${n.config.apiScheme}://${i}`;return Kb.includes(e)&&(await r._persistenceManagerAvailable,r._getPersistenceType()==="COOKIE")?r._getPersistence()._getFinalTarget(o).toString():o}class Qb{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((e,s)=>{this.timer=setTimeout(()=>s(Ue(this.auth,"network-request-failed")),Gb.get())})}}function Xr(n,t,e){const s={appName:n.name};e.email&&(s.email=e.email),e.phoneNumber&&(s.phoneNumber=e.phoneNumber);const i=Ue(n,t,s);return i.customData._tokenResponse=e,i}/**
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
 */async function Xb(n,t){return pi(n,"POST","/v1/accounts:delete",t)}async function $o(n,t){return pi(n,"POST","/v1/accounts:lookup",t)}/**
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
 */function Xi(n){if(n)try{const t=new Date(Number(n));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function Jb(n,t=!1){const e=De(n),s=await e.getIdToken(t),i=vc(s);Q(i&&i.exp&&i.auth_time&&i.iat,e.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:Xi(ll(i.auth_time)),issuedAtTime:Xi(ll(i.iat)),expirationTime:Xi(ll(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function ll(n){return Number(n)*1e3}function vc(n){const[t,e,s]=n.split(".");if(t===void 0||e===void 0||s===void 0)return bo("JWT malformed, contained fewer than 3 sections"),null;try{const i=hp(e);return i?JSON.parse(i):(bo("Failed to decode base64 JWT payload"),null)}catch(i){return bo("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function xh(n){const t=vc(n);return Q(t,"internal-error"),Q(typeof t.exp<"u","internal-error"),Q(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function ur(n,t,e=!1){if(e)return t;try{return await t}catch(s){throw s instanceof Tn&&Zb(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function Zb({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class tv{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){if(t){const e=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),e}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Fl{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=Xi(this.lastLoginAt),this.creationTime=Xi(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function zo(n){var d;const t=n.auth,e=await n.getIdToken(),s=await ur(n,$o(t,{idToken:e}));Q(s==null?void 0:s.users.length,t,"internal-error");const i=s.users[0];n._notifyReloadListener(i);const r=(d=i.providerUserInfo)!=null&&d.length?Pp(i.providerUserInfo):[],o=nv(n.providerData,r),a=n.isAnonymous,l=!(n.email&&i.passwordHash)&&!(o!=null&&o.length),u=a?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Fl(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(n,h)}async function ev(n){const t=De(n);await zo(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function nv(n,t){return[...n.filter(s=>!t.some(i=>i.providerId===s.providerId)),...t]}function Pp(n){return n.map(({providerId:t,...e})=>({providerId:t,uid:e.rawId||"",displayName:e.displayName||null,email:e.email||null,phoneNumber:e.phoneNumber||null,photoURL:e.photoUrl||null}))}/**
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
 */async function sv(n,t){const e=await xp(n,{},async()=>{const s=Pr({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:r}=n.config,o=await Ap(n,i,"/v1/token",`key=${r}`),a=await n._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:a,body:s};return n.emulatorConfig&&di(n.emulatorConfig.host)&&(l.credentials="include"),Sp.fetch()(o,l)});return{accessToken:e.access_token,expiresIn:e.expires_in,refreshToken:e.refresh_token}}async function iv(n,t){return pi(n,"POST","/v2/accounts:revokeToken",bc(n,t))}/**
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
 */class Ks{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){Q(t.idToken,"internal-error"),Q(typeof t.idToken<"u","internal-error"),Q(typeof t.refreshToken<"u","internal-error");const e="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):xh(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}updateFromIdToken(t){Q(t.length!==0,"internal-error");const e=xh(t);this.updateTokensAndExpiration(t,null,e)}async getToken(t,e=!1){return!e&&this.accessToken&&!this.isExpired?this.accessToken:(Q(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:s,refreshToken:i,expiresIn:r}=await sv(t,e);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(t,e,s){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(t,e){const{refreshToken:s,accessToken:i,expirationTime:r}=e,o=new Ks;return s&&(Q(typeof s=="string","internal-error",{appName:t}),o.refreshToken=s),i&&(Q(typeof i=="string","internal-error",{appName:t}),o.accessToken=i),r&&(Q(typeof r=="number","internal-error",{appName:t}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Ks,this.toJSON())}_performRefresh(){return fn("not implemented")}}/**
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
 */function Cn(n,t){Q(typeof n=="string"||typeof n>"u","internal-error",{appName:t})}class Ve{constructor({uid:t,auth:e,stsTokenManager:s,...i}){this.providerId="firebase",this.proactiveRefresh=new tv(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=e,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Fl(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(t){const e=await ur(this,this.stsTokenManager.getToken(this.auth,t));return Q(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return Jb(this,t)}reload(){return ev(this)}_assign(t){this!==t&&(Q(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(e=>({...e})),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const e=new Ve({...this,auth:t,stsTokenManager:this.stsTokenManager._clone()});return e.metadata._copy(this.metadata),e}_onReload(t){Q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let s=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),s=!0),e&&await zo(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Le(this.auth.app))return Promise.reject(ms(this.auth));const t=await this.getIdToken();return await ur(this,Xb(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>({...t})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){const s=e.displayName??void 0,i=e.email??void 0,r=e.phoneNumber??void 0,o=e.photoURL??void 0,a=e.tenantId??void 0,l=e._redirectEventId??void 0,u=e.createdAt??void 0,h=e.lastLoginAt??void 0,{uid:d,emailVerified:p,isAnonymous:y,providerData:E,stsTokenManager:w}=e;Q(d&&w,t,"internal-error");const I=Ks.fromJSON(this.name,w);Q(typeof d=="string",t,"internal-error"),Cn(s,t.name),Cn(i,t.name),Q(typeof p=="boolean",t,"internal-error"),Q(typeof y=="boolean",t,"internal-error"),Cn(r,t.name),Cn(o,t.name),Cn(a,t.name),Cn(l,t.name),Cn(u,t.name),Cn(h,t.name);const P=new Ve({uid:d,auth:t,email:i,emailVerified:p,displayName:s,isAnonymous:y,photoURL:o,phoneNumber:r,tenantId:a,stsTokenManager:I,createdAt:u,lastLoginAt:h});return E&&Array.isArray(E)&&(P.providerData=E.map(k=>({...k}))),l&&(P._redirectEventId=l),P}static async _fromIdTokenResponse(t,e,s=!1){const i=new Ks;i.updateFromServerResponse(e);const r=new Ve({uid:e.localId,auth:t,stsTokenManager:i,isAnonymous:s});return await zo(r),r}static async _fromGetAccountInfoResponse(t,e,s){const i=e.users[0];Q(i.localId!==void 0,"internal-error");const r=i.providerUserInfo!==void 0?Pp(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(r!=null&&r.length),a=new Ks;a.updateFromIdToken(s);const l=new Ve({uid:i.localId,auth:t,stsTokenManager:a,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:r,metadata:new Fl(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(r!=null&&r.length)};return Object.assign(l,u),l}}/**
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
 */const Ah=new Map;function pn(n){bn(n instanceof Function,"Expected a class definition");let t=Ah.get(n);return t?(bn(t instanceof n,"Instance stored in cache mismatched with class"),t):(t=new n,Ah.set(n,t),t)}/**
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
 */class kp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return e===void 0?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}kp.type="NONE";const Ph=kp;/**
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
 */function vo(n,t,e){return`firebase:${n}:${t}:${e}`}class Gs{constructor(t,e,s){this.persistence=t,this.auth=e,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=vo(this.userKey,i.apiKey,r),this.fullPersistenceKey=vo("persistence",i.apiKey,r),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if(typeof t=="string"){const e=await $o(this.auth,{idToken:t}).catch(()=>{});return e?Ve._fromGetAccountInfoResponse(this.auth,e,t):null}return Ve._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,e)return this.setCurrentUser(e)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,s="authUser"){if(!e.length)return new Gs(pn(Ph),t,s);const i=(await Promise.all(e.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let r=i[0]||pn(Ph);const o=vo(s,t.config.apiKey,t.name);let a=null;for(const u of e)try{const h=await u._get(o);if(h){let d;if(typeof h=="string"){const p=await $o(t,{idToken:h}).catch(()=>{});if(!p)break;d=await Ve._fromGetAccountInfoResponse(t,p,h)}else d=Ve._fromJSON(t,h);u!==r&&(a=d),r=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new Gs(r,t,s):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(e.map(async u=>{if(u!==r)try{await u._remove(o)}catch{}})),new Gs(r,t,s))}}/**
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
 */function kh(n){const t=n.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Mp(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Rp(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Lp(t))return"Blackberry";if(Vp(t))return"Webos";if(Cp(t))return"Safari";if((t.includes("chrome/")||Dp(t))&&!t.includes("edge/"))return"Chrome";if(Op(t))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(e);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Rp(n=he()){return/firefox\//i.test(n)}function Cp(n=he()){const t=n.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Dp(n=he()){return/crios\//i.test(n)}function Mp(n=he()){return/iemobile/i.test(n)}function Op(n=he()){return/android/i.test(n)}function Lp(n=he()){return/blackberry/i.test(n)}function Vp(n=he()){return/webos/i.test(n)}function Ec(n=he()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function rv(n=he()){var t;return Ec(n)&&!!((t=window.navigator)!=null&&t.standalone)}function ov(){return by()&&document.documentMode===10}function Np(n=he()){return Ec(n)||Op(n)||Vp(n)||Lp(n)||/windows phone/i.test(n)||Mp(n)}/**
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
 */function Fp(n,t=[]){let e;switch(n){case"Browser":e=kh(he());break;case"Worker":e=`${kh(he())}-${n}`;break;default:e=n}const s=t.length?t.join(","):"FirebaseCore-web";return`${e}/JsCore/${fi}/${s}`}/**
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
 */class av{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,e){const s=r=>new Promise((o,a)=>{try{const l=t(r);o(l)}catch(l){a(l)}});s.onAbort=e,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const e=[];try{for(const s of this.queue)await s(t),s.onAbort&&e.push(s.onAbort)}catch(s){e.reverse();for(const i of e)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function lv(n,t={}){return pi(n,"GET","/v2/passwordPolicy",bc(n,t))}/**
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
 */const cv=6;class uv{constructor(t){var s;const e=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=e.minPasswordLength??cv,e.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=e.maxPasswordLength),e.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=e.containsLowercaseCharacter),e.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=e.containsUppercaseCharacter),e.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=e.containsNumericCharacter),e.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=e.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((s=t.allowedNonAlphanumericCharacters)==null?void 0:s.join(""))??"",this.forceUpgradeOnSignin=t.forceUpgradeOnSignin??!1,this.schemaVersion=t.schemaVersion}validatePassword(t){const e={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,e),this.validatePasswordCharacterOptions(t,e),e.isValid&&(e.isValid=e.meetsMinPasswordLength??!0),e.isValid&&(e.isValid=e.meetsMaxPasswordLength??!0),e.isValid&&(e.isValid=e.containsLowercaseLetter??!0),e.isValid&&(e.isValid=e.containsUppercaseLetter??!0),e.isValid&&(e.isValid=e.containsNumericCharacter??!0),e.isValid&&(e.isValid=e.containsNonAlphanumericCharacter??!0),e}validatePasswordLengthOptions(t,e){const s=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;s&&(e.meetsMinPasswordLength=t.length>=s),i&&(e.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,e){this.updatePasswordCharacterOptionsStatuses(e,!1,!1,!1,!1);let s;for(let i=0;i<t.length;i++)s=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(e,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(t,e,s,i,r){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=e)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=r))}}/**
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
 */class hv{constructor(t,e,s,i){this.app=t,this.heartbeatServiceProvider=e,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Rh(this),this.idTokenSubscription=new Rh(this),this.beforeStateQueue=new av(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ip,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(r=>this._resolvePersistenceManagerAvailable=r)}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=pn(e)),this._initializationPromise=this.queue(async()=>{var s,i,r;if(!this._deleted&&(this.persistenceManager=await Gs.create(this,t),(s=this._resolvePersistenceManagerAvailable)==null||s.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(e),this.lastNotifiedUid=((r=this.currentUser)==null?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const e=await $o(this,{idToken:t}),s=await Ve._fromGetAccountInfoResponse(this,e,t);await this.directlySetCurrentUser(s)}catch(e){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",e),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var r;if(Le(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const e=await this.assertedPersistence.getCurrentUser();let s=e,i=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(r=this.redirectUser)==null?void 0:r._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(t);(!o||o===a)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=e,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return Q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await zo(t)}catch(e){if((e==null?void 0:e.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=Wb()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(Le(this.app))return Promise.reject(ms(this));const e=t?De(t):null;return e&&Q(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&Q(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return Le(this.app)?Promise.reject(ms(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return Le(this.app)?Promise.reject(ms(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(pn(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const e=this._getPasswordPolicyInternal();return e.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):e.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await lv(this),e=new uv(t);this.tenantId===null?this._projectPasswordPolicy=e:this._tenantPasswordPolicies[this.tenantId]=e}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new Ar("auth","Firebase",t())}onAuthStateChanged(t,e,s){return this.registerStateListener(this.authStateSubscription,t,e,s)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,s){return this.registerStateListener(this.idTokenSubscription,t,e,s)}authStateReady(){return new Promise((t,e)=>{if(this.currentUser)t();else{const s=this.onAuthStateChanged(()=>{s(),t()},e)}})}async revokeAccessToken(t){if(this.currentUser){const e=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:e};this.tenantId!=null&&(s.tenantId=this.tenantId),await iv(this,s)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)==null?void 0:t.toJSON()}}async _setRedirectUser(t,e){const s=await this.getOrInitRedirectPersistenceManager(e);return t===null?s.removeCurrentUser():s.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&pn(t)||this._popupRedirectResolver;Q(e,this,"argument-error"),this.redirectPersistenceManager=await Gs.create(this,[pn(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,s;return this._isInitialized&&await this.queue(async()=>{}),((e=this._currentUser)==null?void 0:e._redirectEventId)===t?this._currentUser:((s=this.redirectUser)==null?void 0:s._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const t=((e=this.currentUser)==null?void 0:e.uid)??null;this.lastNotifiedUid!==t&&(this.lastNotifiedUid=t,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,s,i){if(this._deleted)return()=>{};const r=typeof e=="function"?e:e.next.bind(e);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(Q(a,this,"internal-error"),a.then(()=>{o||r(this.currentUser)}),typeof e=="function"){const l=t.addObserver(e,s,i);return()=>{o=!0,l()}}else{const l=t.addObserver(e);return()=>{o=!0,l()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return Q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Fp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const e=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());e&&(t["X-Firebase-Client"]=e);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;if(Le(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:e.getToken());return t!=null&&t.error&&$b(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function _a(n){return De(n)}class Rh{constructor(t){this.auth=t,this.observer=null,this.addObserver=Ay(e=>this.observer=e)}get next(){return Q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let wc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function dv(n){wc=n}function fv(n){return wc.loadJS(n)}function pv(){return wc.gapiScript}function gv(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
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
 */function mv(n,t){const e=gc(n,"auth");if(e.isInitialized()){const i=e.getImmediate(),r=e.getOptions();if(Es(r,t??{}))return i;Ze(i,"already-initialized")}return e.initialize({options:t})}function _v(n,t){const e=(t==null?void 0:t.persistence)||[],s=(Array.isArray(e)?e:[e]).map(pn);t!=null&&t.errorMap&&n._updateErrorMap(t.errorMap),n._initializeWithPersistence(s,t==null?void 0:t.popupRedirectResolver)}function yv(n,t,e){const s=_a(n);Q(/^https?:\/\//.test(t),s,"invalid-emulator-scheme");const i=!1,r=Up(t),{host:o,port:a}=bv(t),l=a===null?"":`:${a}`,u={url:`${r}//${o}${l}/`},h=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!s._canInitEmulator){Q(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),Q(Es(u,s.config.emulator)&&Es(h,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=u,s.emulatorConfig=h,s.settings.appVerificationDisabledForTesting=!0,di(o)?(gp(`${r}//${o}${l}`),mp("Auth",!0)):vv()}function Up(n){const t=n.indexOf(":");return t<0?"":n.substr(0,t+1)}function bv(n){const t=Up(n),e=/(\/\/)?([^?#/]+)/.exec(n.substr(t.length));if(!e)return{host:"",port:null};const s=e[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:Ch(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:Ch(o)}}}function Ch(n){if(!n)return null;const t=Number(n);return isNaN(t)?null:t}function vv(){function n(){const t=document.createElement("p"),e=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",e.position="fixed",e.width="100%",e.backgroundColor="#ffffff",e.border=".1em solid #000000",e.color="#b50000",e.bottom="0px",e.left="0px",e.margin="0px",e.zIndex="10000",e.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Bp{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return fn("not implemented")}_getIdTokenResponse(t){return fn("not implemented")}_linkToIdToken(t,e){return fn("not implemented")}_getReauthenticationResolver(t){return fn("not implemented")}}/**
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
 */async function Ys(n,t){return Yb(n,"POST","/v1/accounts:signInWithIdp",bc(n,t))}/**
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
 */const Ev="http://localhost";class Ts extends Bp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new Ts(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):Ze("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e=typeof t=="string"?JSON.parse(t):t,{providerId:s,signInMethod:i,...r}=e;if(!s||!i)return null;const o=new Ts(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(t){const e=this.buildRequest();return Ys(t,e)}_linkToIdToken(t,e){const s=this.buildRequest();return s.idToken=e,Ys(t,s)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,Ys(t,e)}buildRequest(){const t={requestUri:Ev,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e.id_token=this.idToken),this.accessToken&&(e.access_token=this.accessToken),this.secret&&(e.oauth_token_secret=this.secret),e.providerId=this.providerId,this.nonce&&!this.pendingToken&&(e.nonce=this.nonce),t.postBody=Pr(e)}return t}}/**
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
 */class Tc{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Rr extends Tc{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class Dn extends Rr{constructor(){super("facebook.com")}static credential(t){return Ts._fromParams({providerId:Dn.PROVIDER_ID,signInMethod:Dn.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Dn.credentialFromTaggedObject(t)}static credentialFromError(t){return Dn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Dn.credential(t.oauthAccessToken)}catch{return null}}}Dn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Dn.PROVIDER_ID="facebook.com";/**
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
 */class dn extends Rr{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return Ts._fromParams({providerId:dn.PROVIDER_ID,signInMethod:dn.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return dn.credentialFromTaggedObject(t)}static credentialFromError(t){return dn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:s}=t;if(!e&&!s)return null;try{return dn.credential(e,s)}catch{return null}}}dn.GOOGLE_SIGN_IN_METHOD="google.com";dn.PROVIDER_ID="google.com";/**
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
 */class Mn extends Rr{constructor(){super("github.com")}static credential(t){return Ts._fromParams({providerId:Mn.PROVIDER_ID,signInMethod:Mn.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Mn.credentialFromTaggedObject(t)}static credentialFromError(t){return Mn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Mn.credential(t.oauthAccessToken)}catch{return null}}}Mn.GITHUB_SIGN_IN_METHOD="github.com";Mn.PROVIDER_ID="github.com";/**
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
 */class On extends Rr{constructor(){super("twitter.com")}static credential(t,e){return Ts._fromParams({providerId:On.PROVIDER_ID,signInMethod:On.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return On.credentialFromTaggedObject(t)}static credentialFromError(t){return On.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:s}=t;if(!e||!s)return null;try{return On.credential(e,s)}catch{return null}}}On.TWITTER_SIGN_IN_METHOD="twitter.com";On.PROVIDER_ID="twitter.com";/**
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
 */class si{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,s,i=!1){const r=await Ve._fromIdTokenResponse(t,s,i),o=Dh(s);return new si({user:r,providerId:o,_tokenResponse:s,operationType:e})}static async _forOperation(t,e,s){await t._updateTokensIfNecessary(s,!0);const i=Dh(s);return new si({user:t,providerId:i,_tokenResponse:s,operationType:e})}}function Dh(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class jo extends Tn{constructor(t,e,s,i){super(e.code,e.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,jo.prototype),this.customData={appName:t.name,tenantId:t.tenantId??void 0,_serverResponse:e.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(t,e,s,i){return new jo(t,e,s,i)}}function $p(n,t,e,s){return(t==="reauthenticate"?e._getReauthenticationResolver(n):e._getIdTokenResponse(n)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?jo._fromErrorAndOperation(n,r,t,s):r})}async function wv(n,t,e=!1){const s=await ur(n,t._linkToIdToken(n.auth,await n.getIdToken()),e);return si._forOperation(n,"link",s)}/**
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
 */async function Tv(n,t,e=!1){const{auth:s}=n;if(Le(s.app))return Promise.reject(ms(s));const i="reauthenticate";try{const r=await ur(n,$p(s,i,t,n),e);Q(r.idToken,s,"internal-error");const o=vc(r.idToken);Q(o,s,"internal-error");const{sub:a}=o;return Q(n.uid===a,s,"user-mismatch"),si._forOperation(n,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&Ze(s,"user-mismatch"),r}}/**
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
 */async function Iv(n,t,e=!1){if(Le(n.app))return Promise.reject(ms(n));const s="signIn",i=await $p(n,s,t),r=await si._fromIdTokenResponse(n,s,i);return e||await n._updateCurrentUser(r.user),r}function Sv(n,t,e,s){return De(n).onIdTokenChanged(t,e,s)}function xv(n,t,e){return De(n).beforeAuthStateChanged(t,e)}function Av(n,t,e,s){return De(n).onAuthStateChanged(t,e,s)}function Pv(n){return De(n).signOut()}const Ho="__sak";/**
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
 */class zp{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(Ho,"1"),this.storage.removeItem(Ho),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const kv=1e3,Rv=10;class jp extends zp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Np(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const s=this.storage.getItem(e),i=this.localCache[e];s!==i&&t(e,i,s)}}onStorageEvent(t,e=!1){if(!t.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=t.key;e?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(s);!e&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);ov()&&r!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,Rv):i()}notifyListeners(t,e){this.localCache[t]=e;const s=this.listeners[t];if(s)for(const i of Array.from(s))i(e&&JSON.parse(e))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,e,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:s}),!0)})},kv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}jp.type="LOCAL";const Cv=jp;/**
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
 */class Hp extends zp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,e){}_removeListener(t,e){}}Hp.type="SESSION";const Wp=Hp;/**
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
 */function Dv(n){return Promise.all(n.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(e){return{fulfilled:!1,reason:e}}}))}/**
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
 */class ya{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find(i=>i.isListeningto(t));if(e)return e;const s=new ya(t);return this.receivers.push(s),s}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:s,eventType:i,data:r}=e.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;e.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async u=>u(e.origin,r)),l=await Dv(a);e.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:l})}_subscribe(t,e){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),(!e||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ya.receivers=[];/**
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
 */function Ic(n="",t=10){let e="";for(let s=0;s<t;s++)e+=Math.floor(Math.random()*10);return n+e}/**
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
 */class Mv{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const u=Ic("",20);i.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(d){const p=d;if(p.data.eventId===u)switch(p.data.status){case"ack":clearTimeout(h),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(p.data.response);break;default:clearTimeout(h),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:u,data:e},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Ge(){return window}function Ov(n){Ge().location.href=n}/**
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
 */function qp(){return typeof Ge().WorkerGlobalScope<"u"&&typeof Ge().importScripts=="function"}async function Lv(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Vv(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function Nv(){return qp()?self:null}/**
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
 */const Kp="firebaseLocalStorageDb",Fv=1,Wo="firebaseLocalStorage",Gp="fbase_key";class Cr{constructor(t){this.request=t}toPromise(){return new Promise((t,e)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{e(this.request.error)})})}}function ba(n,t){return n.transaction([Wo],t?"readwrite":"readonly").objectStore(Wo)}function Uv(){const n=indexedDB.deleteDatabase(Kp);return new Cr(n).toPromise()}function Ul(){const n=indexedDB.open(Kp,Fv);return new Promise((t,e)=>{n.addEventListener("error",()=>{e(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(Wo,{keyPath:Gp})}catch(i){e(i)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(Wo)?t(s):(s.close(),await Uv(),t(await Ul()))})})}async function Mh(n,t,e){const s=ba(n,!0).put({[Gp]:t,value:e});return new Cr(s).toPromise()}async function Bv(n,t){const e=ba(n,!1).get(t),s=await new Cr(e).toPromise();return s===void 0?null:s.value}function Oh(n,t){const e=ba(n,!0).delete(t);return new Cr(e).toPromise()}const $v=800,zv=3;class Yp{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ul(),this.db)}async _withRetries(t){let e=0;for(;;)try{const s=await this._openDb();return await t(s)}catch(s){if(e++>zv)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return qp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ya._getInstance(Nv()),this.receiver._subscribe("keyChanged",async(t,e)=>({keyProcessed:(await this._poll()).includes(e.key)})),this.receiver._subscribe("ping",async(t,e)=>["keyChanged"])}async initializeSender(){var e,s;if(this.activeServiceWorker=await Lv(),!this.activeServiceWorker)return;this.sender=new Mv(this.activeServiceWorker);const t=await this.sender._send("ping",{},800);t&&(e=t[0])!=null&&e.fulfilled&&(s=t[0])!=null&&s.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||Vv()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Ul();return await Mh(t,Ho,"1"),await Oh(t,Ho),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite(async()=>(await this._withRetries(s=>Mh(s,t,e)),this.localCache[t]=e,this.notifyServiceWorker(t)))}async _get(t){const e=await this._withRetries(s=>Bv(s,t));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(e=>Oh(e,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const r=ba(i,!1).getAll();return new Cr(r).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const e=[],s=new Set;if(t.length!==0)for(const{fbase_key:i,value:r}of t)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),e.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),e.push(i));return e}notifyListeners(t,e){this.localCache[t]=e;const s=this.listeners[t];if(s)for(const i of Array.from(s))i(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),$v)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Yp.type="LOCAL";const jv=Yp;new kr(3e4,6e4);/**
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
 */function Qp(n,t){return t?pn(t):(Q(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Sc extends Bp{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Ys(t,this._buildIdpRequest())}_linkToIdToken(t,e){return Ys(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return Ys(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function Hv(n){return Iv(n.auth,new Sc(n),n.bypassAuthState)}function Wv(n){const{auth:t,user:e}=n;return Q(e,t,"internal-error"),Tv(e,new Sc(n),n.bypassAuthState)}async function qv(n){const{auth:t,user:e}=n;return Q(e,t,"internal-error"),wv(e,new Sc(n),n.bypassAuthState)}/**
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
 */class Xp{constructor(t,e,s,i,r=!1){this.auth=t,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise(async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(t){const{urlResponse:e,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=t;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:e,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return Hv;case"linkViaPopup":case"linkViaRedirect":return qv;case"reauthViaPopup":case"reauthViaRedirect":return Wv;default:Ze(this.auth,"internal-error")}}resolve(t){bn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){bn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Kv=new kr(2e3,1e4);async function Gv(n,t,e){if(Le(n.app))return Promise.reject(Ue(n,"operation-not-supported-in-this-environment"));const s=_a(n);zb(n,t,Tc);const i=Qp(s,e);return new fs(s,"signInViaPopup",t,i).executeNotNull()}class fs extends Xp{constructor(t,e,s,i,r){super(t,e,i,r),this.provider=s,this.authWindow=null,this.pollId=null,fs.currentPopupAction&&fs.currentPopupAction.cancel(),fs.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return Q(t,this.auth,"internal-error"),t}async onExecution(){bn(this.filter.length===1,"Popup operations only handle one event");const t=Ic();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(Ue(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)==null?void 0:t.associatedEvent)||null}cancel(){this.reject(Ue(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,fs.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,s;if((s=(e=this.authWindow)==null?void 0:e.window)!=null&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ue(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,Kv.get())};t()}}fs.currentPopupAction=null;/**
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
 */const Yv="pendingRedirect",Eo=new Map;class Qv extends Xp{constructor(t,e,s=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,s),this.eventId=null}async execute(){let t=Eo.get(this.auth._key());if(!t){try{const s=await Xv(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(s)}catch(e){t=()=>Promise.reject(e)}Eo.set(this.auth._key(),t)}return this.bypassAuthState||Eo.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Xv(n,t){const e=t0(t),s=Zv(n);if(!await s._isAvailable())return!1;const i=await s._get(e)==="true";return await s._remove(e),i}function Jv(n,t){Eo.set(n._key(),t)}function Zv(n){return pn(n._redirectPersistence)}function t0(n){return vo(Yv,n.config.apiKey,n.name)}async function e0(n,t,e=!1){if(Le(n.app))return Promise.reject(ms(n));const s=_a(n),i=Qp(s,t),o=await new Qv(s,i,e).execute();return o&&!e&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,t)),o}/**
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
 */const n0=600*1e3;class s0{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(t,s)&&(e=!0,this.sendToConsumer(t,s),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!i0(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var s;if(t.error&&!Jp(t)){const i=((s=t.error.code)==null?void 0:s.split("auth/")[1])||"internal-error";e.onError(Ue(this.auth,i))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const s=e.eventId===null||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&s}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=n0&&this.cachedEventUids.clear(),this.cachedEventUids.has(Lh(t))}saveEventToCache(t){this.cachedEventUids.add(Lh(t)),this.lastProcessedEventTime=Date.now()}}function Lh(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(t=>t).join("-")}function Jp({type:n,error:t}){return n==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function i0(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Jp(n);default:return!1}}/**
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
 */async function r0(n,t={}){return pi(n,"GET","/v1/projects",t)}/**
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
 */const o0=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,a0=/^https?/;async function l0(n){if(n.config.emulator)return;const{authorizedDomains:t}=await r0(n);for(const e of t)try{if(c0(e))return}catch{}Ze(n,"unauthorized-domain")}function c0(n){const t=Nl(),{protocol:e,hostname:s}=new URL(t);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&s===""?e==="chrome-extension:"&&n.replace("chrome-extension://","")===t.replace("chrome-extension://",""):e==="chrome-extension:"&&o.hostname===s}if(!a0.test(e))return!1;if(o0.test(n))return s===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const u0=new kr(3e4,6e4);function Vh(){const n=Ge().___jsl;if(n!=null&&n.H){for(const t of Object.keys(n.H))if(n.H[t].r=n.H[t].r||[],n.H[t].L=n.H[t].L||[],n.H[t].r=[...n.H[t].L],n.CP)for(let e=0;e<n.CP.length;e++)n.CP[e]=null}}function h0(n){return new Promise((t,e)=>{var i,r,o;function s(){Vh(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Vh(),e(Ue(n,"network-request-failed"))},timeout:u0.get()})}if((r=(i=Ge().gapi)==null?void 0:i.iframes)!=null&&r.Iframe)t(gapi.iframes.getContext());else if((o=Ge().gapi)!=null&&o.load)s();else{const a=gv("iframefcb");return Ge()[a]=()=>{gapi.load?s():e(Ue(n,"network-request-failed"))},fv(`${pv()}?onload=${a}`).catch(l=>e(l))}}).catch(t=>{throw wo=null,t})}let wo=null;function d0(n){return wo=wo||h0(n),wo}/**
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
 */const f0=new kr(5e3,15e3),p0="__/auth/iframe",g0="emulator/auth/iframe",m0={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},_0=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function y0(n){const t=n.config;Q(t.authDomain,n,"auth-domain-config-required");const e=t.emulator?yc(t,g0):`https://${n.config.authDomain}/${p0}`,s={apiKey:t.apiKey,appName:n.name,v:fi},i=_0.get(n.config.apiHost);i&&(s.eid=i);const r=n._getFrameworks();return r.length&&(s.fw=r.join(",")),`${e}?${Pr(s).slice(1)}`}async function b0(n){const t=await d0(n),e=Ge().gapi;return Q(e,n,"internal-error"),t.open({where:document.body,url:y0(n),messageHandlersFilter:e.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:m0,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=Ue(n,"network-request-failed"),a=Ge().setTimeout(()=>{r(o)},f0.get());function l(){Ge().clearTimeout(a),i(s)}s.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const v0={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},E0=500,w0=600,T0="_blank",I0="http://localhost";class Nh{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function S0(n,t,e,s=E0,i=w0){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l={...v0,width:s.toString(),height:i.toString(),top:r,left:o},u=he().toLowerCase();e&&(a=Dp(u)?T0:e),Rp(u)&&(t=t||I0,l.scrollbars="yes");const h=Object.entries(l).reduce((p,[y,E])=>`${p}${y}=${E},`,"");if(rv(u)&&a!=="_self")return x0(t||"",a),new Nh(null);const d=window.open(t||"",a,h);Q(d,n,"popup-blocked");try{d.focus()}catch{}return new Nh(d)}function x0(n,t){const e=document.createElement("a");e.href=n,e.target=t;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),e.dispatchEvent(s)}/**
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
 */const A0="__/auth/handler",P0="emulator/auth/handler",k0=encodeURIComponent("fac");async function Fh(n,t,e,s,i,r){Q(n.config.authDomain,n,"auth-domain-config-required"),Q(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:e,redirectUrl:s,v:fi,eventId:i};if(t instanceof Tc){t.setDefaultLanguage(n.languageCode),o.providerId=t.providerId||"",xy(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[h,d]of Object.entries({}))o[h]=d}if(t instanceof Rr){const h=t.getScopes().filter(d=>d!=="");h.length>0&&(o.scopes=h.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const l=await n._getAppCheckToken(),u=l?`#${k0}=${encodeURIComponent(l)}`:"";return`${R0(n)}?${Pr(a).slice(1)}${u}`}function R0({config:n}){return n.emulator?yc(n,P0):`https://${n.authDomain}/${A0}`}/**
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
 */const cl="webStorageSupport";class C0{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Wp,this._completeRedirectFn=e0,this._overrideRedirectResult=Jv}async _openPopup(t,e,s,i){var o;bn((o=this.eventManagers[t._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const r=await Fh(t,e,s,Nl(),i);return S0(t,r,Ic())}async _openRedirect(t,e,s,i){await this._originValidation(t);const r=await Fh(t,e,s,Nl(),i);return Ov(r),new Promise(()=>{})}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:i,promise:r}=this.eventManagers[e];return i?Promise.resolve(i):(bn(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(t);return this.eventManagers[e]={promise:s},s.catch(()=>{delete this.eventManagers[e]}),s}async initAndGetManager(t){const e=await b0(t),s=new s0(t);return e.register("authEvent",i=>(Q(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:s},this.iframes[t._key()]=e,s}_isIframeWebStorageSupported(t,e){this.iframes[t._key()].send(cl,{type:cl},i=>{var o;const r=(o=i==null?void 0:i[0])==null?void 0:o[cl];r!==void 0&&e(!!r),Ze(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=l0(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return Np()||Cp()||Ec()}}const D0=C0;var Uh="@firebase/auth",Bh="1.12.0";/**
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
 */class M0{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)==null?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged(s=>{t((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){Q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function O0(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function L0(n){ni(new ws("auth",(t,{options:e})=>{const s=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),r=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;Q(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const l={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Fp(n)},u=new hv(s,i,r,l);return _v(u,e),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,s)=>{t.getProvider("auth-internal").initialize()})),ni(new ws("auth-internal",t=>{const e=_a(t.getProvider("auth").getImmediate());return(s=>new M0(s))(e)},"PRIVATE").setInstantiationMode("EXPLICIT")),Hn(Uh,Bh,O0(n)),Hn(Uh,Bh,"esm2020")}/**
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
 */const V0=300,N0=pp("authIdTokenMaxAge")||V0;let $h=null;const F0=n=>async t=>{const e=t&&await t.getIdTokenResult(),s=e&&(new Date().getTime()-Date.parse(e.issuedAtTime))/1e3;if(s&&s>N0)return;const i=e==null?void 0:e.token;$h!==i&&($h=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function U0(n=vp()){const t=gc(n,"auth");if(t.isInitialized())return t.getImmediate();const e=mv(n,{popupRedirectResolver:D0,persistence:[jv,Cv,Wp]}),s=pp("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(s,location.origin);if(location.origin===r.origin){const o=F0(r.toString());xv(e,o,()=>o(e.currentUser)),Sv(e,a=>o(a))}}const i=dp("auth");return i&&yv(e,`http://${i}`),e}function B0(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}dv({loadJS(n){return new Promise((t,e)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=t,s.onerror=i=>{const r=Ue("internal-error");r.customData=i,e(r)},s.type="text/javascript",s.charset="UTF-8",B0().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});L0("Browser");var zh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Wn,Zp;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(S,g){function _(){}_.prototype=g.prototype,S.F=g.prototype,S.prototype=new _,S.prototype.constructor=S,S.D=function(b,v,A){for(var x=Array(arguments.length-2),q=2;q<arguments.length;q++)x[q-2]=arguments[q];return g.prototype[v].apply(b,x)}}function e(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}t(s,e),s.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(S,g,_){_||(_=0);const b=Array(16);if(typeof g=="string")for(var v=0;v<16;++v)b[v]=g.charCodeAt(_++)|g.charCodeAt(_++)<<8|g.charCodeAt(_++)<<16|g.charCodeAt(_++)<<24;else for(v=0;v<16;++v)b[v]=g[_++]|g[_++]<<8|g[_++]<<16|g[_++]<<24;g=S.g[0],_=S.g[1],v=S.g[2];let A=S.g[3],x;x=g+(A^_&(v^A))+b[0]+3614090360&4294967295,g=_+(x<<7&4294967295|x>>>25),x=A+(v^g&(_^v))+b[1]+3905402710&4294967295,A=g+(x<<12&4294967295|x>>>20),x=v+(_^A&(g^_))+b[2]+606105819&4294967295,v=A+(x<<17&4294967295|x>>>15),x=_+(g^v&(A^g))+b[3]+3250441966&4294967295,_=v+(x<<22&4294967295|x>>>10),x=g+(A^_&(v^A))+b[4]+4118548399&4294967295,g=_+(x<<7&4294967295|x>>>25),x=A+(v^g&(_^v))+b[5]+1200080426&4294967295,A=g+(x<<12&4294967295|x>>>20),x=v+(_^A&(g^_))+b[6]+2821735955&4294967295,v=A+(x<<17&4294967295|x>>>15),x=_+(g^v&(A^g))+b[7]+4249261313&4294967295,_=v+(x<<22&4294967295|x>>>10),x=g+(A^_&(v^A))+b[8]+1770035416&4294967295,g=_+(x<<7&4294967295|x>>>25),x=A+(v^g&(_^v))+b[9]+2336552879&4294967295,A=g+(x<<12&4294967295|x>>>20),x=v+(_^A&(g^_))+b[10]+4294925233&4294967295,v=A+(x<<17&4294967295|x>>>15),x=_+(g^v&(A^g))+b[11]+2304563134&4294967295,_=v+(x<<22&4294967295|x>>>10),x=g+(A^_&(v^A))+b[12]+1804603682&4294967295,g=_+(x<<7&4294967295|x>>>25),x=A+(v^g&(_^v))+b[13]+4254626195&4294967295,A=g+(x<<12&4294967295|x>>>20),x=v+(_^A&(g^_))+b[14]+2792965006&4294967295,v=A+(x<<17&4294967295|x>>>15),x=_+(g^v&(A^g))+b[15]+1236535329&4294967295,_=v+(x<<22&4294967295|x>>>10),x=g+(v^A&(_^v))+b[1]+4129170786&4294967295,g=_+(x<<5&4294967295|x>>>27),x=A+(_^v&(g^_))+b[6]+3225465664&4294967295,A=g+(x<<9&4294967295|x>>>23),x=v+(g^_&(A^g))+b[11]+643717713&4294967295,v=A+(x<<14&4294967295|x>>>18),x=_+(A^g&(v^A))+b[0]+3921069994&4294967295,_=v+(x<<20&4294967295|x>>>12),x=g+(v^A&(_^v))+b[5]+3593408605&4294967295,g=_+(x<<5&4294967295|x>>>27),x=A+(_^v&(g^_))+b[10]+38016083&4294967295,A=g+(x<<9&4294967295|x>>>23),x=v+(g^_&(A^g))+b[15]+3634488961&4294967295,v=A+(x<<14&4294967295|x>>>18),x=_+(A^g&(v^A))+b[4]+3889429448&4294967295,_=v+(x<<20&4294967295|x>>>12),x=g+(v^A&(_^v))+b[9]+568446438&4294967295,g=_+(x<<5&4294967295|x>>>27),x=A+(_^v&(g^_))+b[14]+3275163606&4294967295,A=g+(x<<9&4294967295|x>>>23),x=v+(g^_&(A^g))+b[3]+4107603335&4294967295,v=A+(x<<14&4294967295|x>>>18),x=_+(A^g&(v^A))+b[8]+1163531501&4294967295,_=v+(x<<20&4294967295|x>>>12),x=g+(v^A&(_^v))+b[13]+2850285829&4294967295,g=_+(x<<5&4294967295|x>>>27),x=A+(_^v&(g^_))+b[2]+4243563512&4294967295,A=g+(x<<9&4294967295|x>>>23),x=v+(g^_&(A^g))+b[7]+1735328473&4294967295,v=A+(x<<14&4294967295|x>>>18),x=_+(A^g&(v^A))+b[12]+2368359562&4294967295,_=v+(x<<20&4294967295|x>>>12),x=g+(_^v^A)+b[5]+4294588738&4294967295,g=_+(x<<4&4294967295|x>>>28),x=A+(g^_^v)+b[8]+2272392833&4294967295,A=g+(x<<11&4294967295|x>>>21),x=v+(A^g^_)+b[11]+1839030562&4294967295,v=A+(x<<16&4294967295|x>>>16),x=_+(v^A^g)+b[14]+4259657740&4294967295,_=v+(x<<23&4294967295|x>>>9),x=g+(_^v^A)+b[1]+2763975236&4294967295,g=_+(x<<4&4294967295|x>>>28),x=A+(g^_^v)+b[4]+1272893353&4294967295,A=g+(x<<11&4294967295|x>>>21),x=v+(A^g^_)+b[7]+4139469664&4294967295,v=A+(x<<16&4294967295|x>>>16),x=_+(v^A^g)+b[10]+3200236656&4294967295,_=v+(x<<23&4294967295|x>>>9),x=g+(_^v^A)+b[13]+681279174&4294967295,g=_+(x<<4&4294967295|x>>>28),x=A+(g^_^v)+b[0]+3936430074&4294967295,A=g+(x<<11&4294967295|x>>>21),x=v+(A^g^_)+b[3]+3572445317&4294967295,v=A+(x<<16&4294967295|x>>>16),x=_+(v^A^g)+b[6]+76029189&4294967295,_=v+(x<<23&4294967295|x>>>9),x=g+(_^v^A)+b[9]+3654602809&4294967295,g=_+(x<<4&4294967295|x>>>28),x=A+(g^_^v)+b[12]+3873151461&4294967295,A=g+(x<<11&4294967295|x>>>21),x=v+(A^g^_)+b[15]+530742520&4294967295,v=A+(x<<16&4294967295|x>>>16),x=_+(v^A^g)+b[2]+3299628645&4294967295,_=v+(x<<23&4294967295|x>>>9),x=g+(v^(_|~A))+b[0]+4096336452&4294967295,g=_+(x<<6&4294967295|x>>>26),x=A+(_^(g|~v))+b[7]+1126891415&4294967295,A=g+(x<<10&4294967295|x>>>22),x=v+(g^(A|~_))+b[14]+2878612391&4294967295,v=A+(x<<15&4294967295|x>>>17),x=_+(A^(v|~g))+b[5]+4237533241&4294967295,_=v+(x<<21&4294967295|x>>>11),x=g+(v^(_|~A))+b[12]+1700485571&4294967295,g=_+(x<<6&4294967295|x>>>26),x=A+(_^(g|~v))+b[3]+2399980690&4294967295,A=g+(x<<10&4294967295|x>>>22),x=v+(g^(A|~_))+b[10]+4293915773&4294967295,v=A+(x<<15&4294967295|x>>>17),x=_+(A^(v|~g))+b[1]+2240044497&4294967295,_=v+(x<<21&4294967295|x>>>11),x=g+(v^(_|~A))+b[8]+1873313359&4294967295,g=_+(x<<6&4294967295|x>>>26),x=A+(_^(g|~v))+b[15]+4264355552&4294967295,A=g+(x<<10&4294967295|x>>>22),x=v+(g^(A|~_))+b[6]+2734768916&4294967295,v=A+(x<<15&4294967295|x>>>17),x=_+(A^(v|~g))+b[13]+1309151649&4294967295,_=v+(x<<21&4294967295|x>>>11),x=g+(v^(_|~A))+b[4]+4149444226&4294967295,g=_+(x<<6&4294967295|x>>>26),x=A+(_^(g|~v))+b[11]+3174756917&4294967295,A=g+(x<<10&4294967295|x>>>22),x=v+(g^(A|~_))+b[2]+718787259&4294967295,v=A+(x<<15&4294967295|x>>>17),x=_+(A^(v|~g))+b[9]+3951481745&4294967295,S.g[0]=S.g[0]+g&4294967295,S.g[1]=S.g[1]+(v+(x<<21&4294967295|x>>>11))&4294967295,S.g[2]=S.g[2]+v&4294967295,S.g[3]=S.g[3]+A&4294967295}s.prototype.v=function(S,g){g===void 0&&(g=S.length);const _=g-this.blockSize,b=this.C;let v=this.h,A=0;for(;A<g;){if(v==0)for(;A<=_;)i(this,S,A),A+=this.blockSize;if(typeof S=="string"){for(;A<g;)if(b[v++]=S.charCodeAt(A++),v==this.blockSize){i(this,b),v=0;break}}else for(;A<g;)if(b[v++]=S[A++],v==this.blockSize){i(this,b),v=0;break}}this.h=v,this.o+=g},s.prototype.A=function(){var S=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);S[0]=128;for(var g=1;g<S.length-8;++g)S[g]=0;g=this.o*8;for(var _=S.length-8;_<S.length;++_)S[_]=g&255,g/=256;for(this.v(S),S=Array(16),g=0,_=0;_<4;++_)for(let b=0;b<32;b+=8)S[g++]=this.g[_]>>>b&255;return S};function r(S,g){var _=a;return Object.prototype.hasOwnProperty.call(_,S)?_[S]:_[S]=g(S)}function o(S,g){this.h=g;const _=[];let b=!0;for(let v=S.length-1;v>=0;v--){const A=S[v]|0;b&&A==g||(_[v]=A,b=!1)}this.g=_}var a={};function l(S){return-128<=S&&S<128?r(S,function(g){return new o([g|0],g<0?-1:0)}):new o([S|0],S<0?-1:0)}function u(S){if(isNaN(S)||!isFinite(S))return d;if(S<0)return I(u(-S));const g=[];let _=1;for(let b=0;S>=_;b++)g[b]=S/_|0,_*=4294967296;return new o(g,0)}function h(S,g){if(S.length==0)throw Error("number format error: empty string");if(g=g||10,g<2||36<g)throw Error("radix out of range: "+g);if(S.charAt(0)=="-")return I(h(S.substring(1),g));if(S.indexOf("-")>=0)throw Error('number format error: interior "-" character');const _=u(Math.pow(g,8));let b=d;for(let A=0;A<S.length;A+=8){var v=Math.min(8,S.length-A);const x=parseInt(S.substring(A,A+v),g);v<8?(v=u(Math.pow(g,v)),b=b.j(v).add(u(x))):(b=b.j(_),b=b.add(u(x)))}return b}var d=l(0),p=l(1),y=l(16777216);n=o.prototype,n.m=function(){if(w(this))return-I(this).m();let S=0,g=1;for(let _=0;_<this.g.length;_++){const b=this.i(_);S+=(b>=0?b:4294967296+b)*g,g*=4294967296}return S},n.toString=function(S){if(S=S||10,S<2||36<S)throw Error("radix out of range: "+S);if(E(this))return"0";if(w(this))return"-"+I(this).toString(S);const g=u(Math.pow(S,6));var _=this;let b="";for(;;){const v=D(_,g).g;_=P(_,v.j(g));let A=((_.g.length>0?_.g[0]:_.h)>>>0).toString(S);if(_=v,E(_))return A+b;for(;A.length<6;)A="0"+A;b=A+b}},n.i=function(S){return S<0?0:S<this.g.length?this.g[S]:this.h};function E(S){if(S.h!=0)return!1;for(let g=0;g<S.g.length;g++)if(S.g[g]!=0)return!1;return!0}function w(S){return S.h==-1}n.l=function(S){return S=P(this,S),w(S)?-1:E(S)?0:1};function I(S){const g=S.g.length,_=[];for(let b=0;b<g;b++)_[b]=~S.g[b];return new o(_,~S.h).add(p)}n.abs=function(){return w(this)?I(this):this},n.add=function(S){const g=Math.max(this.g.length,S.g.length),_=[];let b=0;for(let v=0;v<=g;v++){let A=b+(this.i(v)&65535)+(S.i(v)&65535),x=(A>>>16)+(this.i(v)>>>16)+(S.i(v)>>>16);b=x>>>16,A&=65535,x&=65535,_[v]=x<<16|A}return new o(_,_[_.length-1]&-2147483648?-1:0)};function P(S,g){return S.add(I(g))}n.j=function(S){if(E(this)||E(S))return d;if(w(this))return w(S)?I(this).j(I(S)):I(I(this).j(S));if(w(S))return I(this.j(I(S)));if(this.l(y)<0&&S.l(y)<0)return u(this.m()*S.m());const g=this.g.length+S.g.length,_=[];for(var b=0;b<2*g;b++)_[b]=0;for(b=0;b<this.g.length;b++)for(let v=0;v<S.g.length;v++){const A=this.i(b)>>>16,x=this.i(b)&65535,q=S.i(v)>>>16,K=S.i(v)&65535;_[2*b+2*v]+=x*K,k(_,2*b+2*v),_[2*b+2*v+1]+=A*K,k(_,2*b+2*v+1),_[2*b+2*v+1]+=x*q,k(_,2*b+2*v+1),_[2*b+2*v+2]+=A*q,k(_,2*b+2*v+2)}for(S=0;S<g;S++)_[S]=_[2*S+1]<<16|_[2*S];for(S=g;S<2*g;S++)_[S]=0;return new o(_,0)};function k(S,g){for(;(S[g]&65535)!=S[g];)S[g+1]+=S[g]>>>16,S[g]&=65535,g++}function R(S,g){this.g=S,this.h=g}function D(S,g){if(E(g))throw Error("division by zero");if(E(S))return new R(d,d);if(w(S))return g=D(I(S),g),new R(I(g.g),I(g.h));if(w(g))return g=D(S,I(g)),new R(I(g.g),g.h);if(S.g.length>30){if(w(S)||w(g))throw Error("slowDivide_ only works with positive integers.");for(var _=p,b=g;b.l(S)<=0;)_=M(_),b=M(b);var v=L(_,1),A=L(b,1);for(b=L(b,2),_=L(_,2);!E(b);){var x=A.add(b);x.l(S)<=0&&(v=v.add(_),A=x),b=L(b,1),_=L(_,1)}return g=P(S,v.j(g)),new R(v,g)}for(v=d;S.l(g)>=0;){for(_=Math.max(1,Math.floor(S.m()/g.m())),b=Math.ceil(Math.log(_)/Math.LN2),b=b<=48?1:Math.pow(2,b-48),A=u(_),x=A.j(g);w(x)||x.l(S)>0;)_-=b,A=u(_),x=A.j(g);E(A)&&(A=p),v=v.add(A),S=P(S,x)}return new R(v,S)}n.B=function(S){return D(this,S).h},n.and=function(S){const g=Math.max(this.g.length,S.g.length),_=[];for(let b=0;b<g;b++)_[b]=this.i(b)&S.i(b);return new o(_,this.h&S.h)},n.or=function(S){const g=Math.max(this.g.length,S.g.length),_=[];for(let b=0;b<g;b++)_[b]=this.i(b)|S.i(b);return new o(_,this.h|S.h)},n.xor=function(S){const g=Math.max(this.g.length,S.g.length),_=[];for(let b=0;b<g;b++)_[b]=this.i(b)^S.i(b);return new o(_,this.h^S.h)};function M(S){const g=S.g.length+1,_=[];for(let b=0;b<g;b++)_[b]=S.i(b)<<1|S.i(b-1)>>>31;return new o(_,S.h)}function L(S,g){const _=g>>5;g%=32;const b=S.g.length-_,v=[];for(let A=0;A<b;A++)v[A]=g>0?S.i(A+_)>>>g|S.i(A+_+1)<<32-g:S.i(A+_);return new o(v,S.h)}s.prototype.digest=s.prototype.A,s.prototype.reset=s.prototype.u,s.prototype.update=s.prototype.v,Zp=s,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=h,Wn=o}).apply(typeof zh<"u"?zh:typeof self<"u"?self:typeof window<"u"?window:{});var Jr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var tg,$i,eg,To,Bl,ng,sg,ig;(function(){var n,t=Object.defineProperty;function e(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof Jr=="object"&&Jr];for(var f=0;f<c.length;++f){var m=c[f];if(m&&m.Math==Math)return m}throw Error("Cannot find global object")}var s=e(this);function i(c,f){if(f)t:{var m=s;c=c.split(".");for(var T=0;T<c.length-1;T++){var C=c[T];if(!(C in m))break t;m=m[C]}c=c[c.length-1],T=m[c],f=f(T),f!=T&&f!=null&&t(m,c,{configurable:!0,writable:!0,value:f})}}i("Symbol.dispose",function(c){return c||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(c){return c||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(c){return c||function(f){var m=[],T;for(T in f)Object.prototype.hasOwnProperty.call(f,T)&&m.push([T,f[T]]);return m}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var r=r||{},o=this||self;function a(c){var f=typeof c;return f=="object"&&c!=null||f=="function"}function l(c,f,m){return c.call.apply(c.bind,arguments)}function u(c,f,m){return u=l,u.apply(null,arguments)}function h(c,f){var m=Array.prototype.slice.call(arguments,1);return function(){var T=m.slice();return T.push.apply(T,arguments),c.apply(this,T)}}function d(c,f){function m(){}m.prototype=f.prototype,c.Z=f.prototype,c.prototype=new m,c.prototype.constructor=c,c.Ob=function(T,C,O){for(var F=Array(arguments.length-2),nt=2;nt<arguments.length;nt++)F[nt-2]=arguments[nt];return f.prototype[C].apply(T,F)}}var p=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?c=>c&&AsyncContext.Snapshot.wrap(c):c=>c;function y(c){const f=c.length;if(f>0){const m=Array(f);for(let T=0;T<f;T++)m[T]=c[T];return m}return[]}function E(c,f){for(let T=1;T<arguments.length;T++){const C=arguments[T];var m=typeof C;if(m=m!="object"?m:C?Array.isArray(C)?"array":m:"null",m=="array"||m=="object"&&typeof C.length=="number"){m=c.length||0;const O=C.length||0;c.length=m+O;for(let F=0;F<O;F++)c[m+F]=C[F]}else c.push(C)}}class w{constructor(f,m){this.i=f,this.j=m,this.h=0,this.g=null}get(){let f;return this.h>0?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function I(c){o.setTimeout(()=>{throw c},0)}function P(){var c=S;let f=null;return c.g&&(f=c.g,c.g=c.g.next,c.g||(c.h=null),f.next=null),f}class k{constructor(){this.h=this.g=null}add(f,m){const T=R.get();T.set(f,m),this.h?this.h.next=T:this.g=T,this.h=T}}var R=new w(()=>new D,c=>c.reset());class D{constructor(){this.next=this.g=this.h=null}set(f,m){this.h=f,this.g=m,this.next=null}reset(){this.next=this.g=this.h=null}}let M,L=!1,S=new k,g=()=>{const c=Promise.resolve(void 0);M=()=>{c.then(_)}};function _(){for(var c;c=P();){try{c.h.call(c.g)}catch(m){I(m)}var f=R;f.j(c),f.h<100&&(f.h++,c.next=f.g,f.g=c)}L=!1}function b(){this.u=this.u,this.C=this.C}b.prototype.u=!1,b.prototype.dispose=function(){this.u||(this.u=!0,this.N())},b.prototype[Symbol.dispose]=function(){this.dispose()},b.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function v(c,f){this.type=c,this.g=this.target=f,this.defaultPrevented=!1}v.prototype.h=function(){this.defaultPrevented=!0};var A=(function(){if(!o.addEventListener||!Object.defineProperty)return!1;var c=!1,f=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const m=()=>{};o.addEventListener("test",m,f),o.removeEventListener("test",m,f)}catch{}return c})();function x(c){return/^[\s\xa0]*$/.test(c)}function q(c,f){v.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c&&this.init(c,f)}d(q,v),q.prototype.init=function(c,f){const m=this.type=c.type,T=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;this.target=c.target||c.srcElement,this.g=f,f=c.relatedTarget,f||(m=="mouseover"?f=c.fromElement:m=="mouseout"&&(f=c.toElement)),this.relatedTarget=f,T?(this.clientX=T.clientX!==void 0?T.clientX:T.pageX,this.clientY=T.clientY!==void 0?T.clientY:T.pageY,this.screenX=T.screenX||0,this.screenY=T.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=c.pointerType,this.state=c.state,this.i=c,c.defaultPrevented&&q.Z.h.call(this)},q.prototype.h=function(){q.Z.h.call(this);const c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var K="closure_listenable_"+(Math.random()*1e6|0),it=0;function j(c,f,m,T,C){this.listener=c,this.proxy=null,this.src=f,this.type=m,this.capture=!!T,this.ha=C,this.key=++it,this.da=this.fa=!1}function rt(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function B(c,f,m){for(const T in c)f.call(m,c[T],T,c)}function Pt(c,f){for(const m in c)f.call(void 0,c[m],m,c)}function Y(c){const f={};for(const m in c)f[m]=c[m];return f}const X="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function z(c,f){let m,T;for(let C=1;C<arguments.length;C++){T=arguments[C];for(m in T)c[m]=T[m];for(let O=0;O<X.length;O++)m=X[O],Object.prototype.hasOwnProperty.call(T,m)&&(c[m]=T[m])}}function mt(c){this.src=c,this.g={},this.h=0}mt.prototype.add=function(c,f,m,T,C){const O=c.toString();c=this.g[O],c||(c=this.g[O]=[],this.h++);const F=Et(c,f,T,C);return F>-1?(f=c[F],m||(f.fa=!1)):(f=new j(f,this.src,O,!!T,C),f.fa=m,c.push(f)),f};function yt(c,f){const m=f.type;if(m in c.g){var T=c.g[m],C=Array.prototype.indexOf.call(T,f,void 0),O;(O=C>=0)&&Array.prototype.splice.call(T,C,1),O&&(rt(f),c.g[m].length==0&&(delete c.g[m],c.h--))}}function Et(c,f,m,T){for(let C=0;C<c.length;++C){const O=c[C];if(!O.da&&O.listener==f&&O.capture==!!m&&O.ha==T)return C}return-1}var re="closure_lm_"+(Math.random()*1e6|0),ot={};function ft(c,f,m,T,C){if(Array.isArray(f)){for(let O=0;O<f.length;O++)ft(c,f[O],m,T,C);return null}return m=gt(m),c&&c[K]?c.J(f,m,a(T)?!!T.capture:!1,C):Dt(c,f,m,!1,T,C)}function Dt(c,f,m,T,C,O){if(!f)throw Error("Invalid event type");const F=a(C)?!!C.capture:!!C;let nt=tt(c);if(nt||(c[re]=nt=new mt(c)),m=nt.add(f,m,T,F,O),m.proxy)return m;if(T=at(),m.proxy=T,T.src=c,T.listener=m,c.addEventListener)A||(C=F),C===void 0&&(C=!1),c.addEventListener(f.toString(),T,C);else if(c.attachEvent)c.attachEvent(It(f.toString()),T);else if(c.addListener&&c.removeListener)c.addListener(T);else throw Error("addEventListener and attachEvent are unavailable.");return m}function at(){function c(m){return f.call(c.src,c.listener,m)}const f=bt;return c}function Tt(c,f,m,T,C){if(Array.isArray(f))for(var O=0;O<f.length;O++)Tt(c,f[O],m,T,C);else T=a(T)?!!T.capture:!!T,m=gt(m),c&&c[K]?(c=c.i,O=String(f).toString(),O in c.g&&(f=c.g[O],m=Et(f,m,T,C),m>-1&&(rt(f[m]),Array.prototype.splice.call(f,m,1),f.length==0&&(delete c.g[O],c.h--)))):c&&(c=tt(c))&&(f=c.g[f.toString()],c=-1,f&&(c=Et(f,m,T,C)),(m=c>-1?f[c]:null)&&Vt(m))}function Vt(c){if(typeof c!="number"&&c&&!c.da){var f=c.src;if(f&&f[K])yt(f.i,c);else{var m=c.type,T=c.proxy;f.removeEventListener?f.removeEventListener(m,T,c.capture):f.detachEvent?f.detachEvent(It(m),T):f.addListener&&f.removeListener&&f.removeListener(T),(m=tt(f))?(yt(m,c),m.h==0&&(m.src=null,f[re]=null)):rt(c)}}}function It(c){return c in ot?ot[c]:ot[c]="on"+c}function bt(c,f){if(c.da)c=!0;else{f=new q(f,this);const m=c.listener,T=c.ha||c.src;c.fa&&Vt(c),c=m.call(T,f)}return c}function tt(c){return c=c[re],c instanceof mt?c:null}var zt="__closure_events_fn_"+(Math.random()*1e9>>>0);function gt(c){return typeof c=="function"?c:(c[zt]||(c[zt]=function(f){return c.handleEvent(f)}),c[zt])}function et(){b.call(this),this.i=new mt(this),this.M=this,this.G=null}d(et,b),et.prototype[K]=!0,et.prototype.removeEventListener=function(c,f,m,T){Tt(this,c,f,m,T)};function dt(c,f){var m,T=c.G;if(T)for(m=[];T;T=T.G)m.push(T);if(c=c.M,T=f.type||f,typeof f=="string")f=new v(f,c);else if(f instanceof v)f.target=f.target||c;else{var C=f;f=new v(T,c),z(f,C)}C=!0;let O,F;if(m)for(F=m.length-1;F>=0;F--)O=f.g=m[F],C=Me(O,T,!0,f)&&C;if(O=f.g=c,C=Me(O,T,!0,f)&&C,C=Me(O,T,!1,f)&&C,m)for(F=0;F<m.length;F++)O=f.g=m[F],C=Me(O,T,!1,f)&&C}et.prototype.N=function(){if(et.Z.N.call(this),this.i){var c=this.i;for(const f in c.g){const m=c.g[f];for(let T=0;T<m.length;T++)rt(m[T]);delete c.g[f],c.h--}}this.G=null},et.prototype.J=function(c,f,m,T){return this.i.add(String(c),f,!1,m,T)},et.prototype.K=function(c,f,m,T){return this.i.add(String(c),f,!0,m,T)};function Me(c,f,m,T){if(f=c.i.g[String(f)],!f)return!0;f=f.concat();let C=!0;for(let O=0;O<f.length;++O){const F=f[O];if(F&&!F.da&&F.capture==m){const nt=F.listener,Wt=F.ha||F.src;F.fa&&yt(c.i,F),C=nt.call(Wt,T)!==!1&&C}}return C&&!T.defaultPrevented}function xe(c,f){if(typeof c!="function")if(c&&typeof c.handleEvent=="function")c=u(c.handleEvent,c);else throw Error("Invalid listener argument");return Number(f)>2147483647?-1:o.setTimeout(c,f||0)}function In(c){c.g=xe(()=>{c.g=null,c.i&&(c.i=!1,In(c))},c.l);const f=c.h;c.h=null,c.m.apply(null,f)}class Xt extends b{constructor(f,m){super(),this.m=f,this.l=m,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:In(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function oe(c){b.call(this),this.h=c,this.g={}}d(oe,b);var Ut=[];function ee(c){B(c.g,function(f,m){this.g.hasOwnProperty(m)&&Vt(f)},c),c.g={}}oe.prototype.N=function(){oe.Z.N.call(this),ee(this)},oe.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ve=o.JSON.stringify,vi=o.JSON.parse,Ur=class{stringify(c){return o.JSON.stringify(c,void 0)}parse(c){return o.JSON.parse(c,void 0)}};function rn(){}function Ee(){}var Oe={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Ls(){v.call(this,"d")}d(Ls,v);function za(){v.call(this,"c")}d(za,v);var ns={},Su=null;function Br(){return Su=Su||new et}ns.Ia="serverreachability";function xu(c){v.call(this,ns.Ia,c)}d(xu,v);function Ei(c){const f=Br();dt(f,new xu(f))}ns.STAT_EVENT="statevent";function Au(c,f){v.call(this,ns.STAT_EVENT,c),this.stat=f}d(Au,v);function fe(c){const f=Br();dt(f,new Au(f,c))}ns.Ja="timingevent";function Pu(c,f){v.call(this,ns.Ja,c),this.size=f}d(Pu,v);function wi(c,f){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){c()},f)}function Ti(){this.g=!0}Ti.prototype.ua=function(){this.g=!1};function C_(c,f,m,T,C,O){c.info(function(){if(c.g)if(O){var F="",nt=O.split("&");for(let St=0;St<nt.length;St++){var Wt=nt[St].split("=");if(Wt.length>1){const Jt=Wt[0];Wt=Wt[1];const je=Jt.split("_");F=je.length>=2&&je[1]=="type"?F+(Jt+"="+Wt+"&"):F+(Jt+"=redacted&")}}}else F=null;else F=O;return"XMLHTTP REQ ("+T+") [attempt "+C+"]: "+f+`
`+m+`
`+F})}function D_(c,f,m,T,C,O,F){c.info(function(){return"XMLHTTP RESP ("+T+") [ attempt "+C+"]: "+f+`
`+m+`
`+O+" "+F})}function Vs(c,f,m,T){c.info(function(){return"XMLHTTP TEXT ("+f+"): "+O_(c,m)+(T?" "+T:"")})}function M_(c,f){c.info(function(){return"TIMEOUT: "+f})}Ti.prototype.info=function(){};function O_(c,f){if(!c.g)return f;if(!f)return null;try{const O=JSON.parse(f);if(O){for(c=0;c<O.length;c++)if(Array.isArray(O[c])){var m=O[c];if(!(m.length<2)){var T=m[1];if(Array.isArray(T)&&!(T.length<1)){var C=T[0];if(C!="noop"&&C!="stop"&&C!="close")for(let F=1;F<T.length;F++)T[F]=""}}}}return ve(O)}catch{return f}}var $r={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},ku={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Ru;function ja(){}d(ja,rn),ja.prototype.g=function(){return new XMLHttpRequest},Ru=new ja;function Ii(c){return encodeURIComponent(String(c))}function L_(c){var f=1;c=c.split(":");const m=[];for(;f>0&&c.length;)m.push(c.shift()),f--;return c.length&&m.push(c.join(":")),m}function Sn(c,f,m,T){this.j=c,this.i=f,this.l=m,this.S=T||1,this.V=new oe(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Cu}function Cu(){this.i=null,this.g="",this.h=!1}var Du={},Ha={};function Wa(c,f,m){c.M=1,c.A=jr(ze(f)),c.u=m,c.R=!0,Mu(c,null)}function Mu(c,f){c.F=Date.now(),zr(c),c.B=ze(c.A);var m=c.B,T=c.S;Array.isArray(T)||(T=[String(T)]),qu(m.i,"t",T),c.C=0,m=c.j.L,c.h=new Cu,c.g=uh(c.j,m?f:null,!c.u),c.P>0&&(c.O=new Xt(u(c.Y,c,c.g),c.P)),f=c.V,m=c.g,T=c.ba;var C="readystatechange";Array.isArray(C)||(C&&(Ut[0]=C.toString()),C=Ut);for(let O=0;O<C.length;O++){const F=ft(m,C[O],T||f.handleEvent,!1,f.h||f);if(!F)break;f.g[F.key]=F}f=c.J?Y(c.J):{},c.u?(c.v||(c.v="POST"),f["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.B,c.v,c.u,f)):(c.v="GET",c.g.ea(c.B,c.v,null,f)),Ei(),C_(c.i,c.v,c.B,c.l,c.S,c.u)}Sn.prototype.ba=function(c){c=c.target;const f=this.O;f&&Pn(c)==3?f.j():this.Y(c)},Sn.prototype.Y=function(c){try{if(c==this.g)t:{const nt=Pn(this.g),Wt=this.g.ya(),St=this.g.ca();if(!(nt<3)&&(nt!=3||this.g&&(this.h.h||this.g.la()||Zu(this.g)))){this.K||nt!=4||Wt==7||(Wt==8||St<=0?Ei(3):Ei(2)),qa(this);var f=this.g.ca();this.X=f;var m=V_(this);if(this.o=f==200,D_(this.i,this.v,this.B,this.l,this.S,nt,f),this.o){if(this.U&&!this.L){e:{if(this.g){var T,C=this.g;if((T=C.g?C.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!x(T)){var O=T;break e}}O=null}if(c=O)Vs(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Ka(this,c);else{this.o=!1,this.m=3,fe(12),ss(this),Si(this);break t}}if(this.R){c=!0;let Jt;for(;!this.K&&this.C<m.length;)if(Jt=N_(this,m),Jt==Ha){nt==4&&(this.m=4,fe(14),c=!1),Vs(this.i,this.l,null,"[Incomplete Response]");break}else if(Jt==Du){this.m=4,fe(15),Vs(this.i,this.l,m,"[Invalid Chunk]"),c=!1;break}else Vs(this.i,this.l,Jt,null),Ka(this,Jt);if(Ou(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),nt!=4||m.length!=0||this.h.h||(this.m=1,fe(16),c=!1),this.o=this.o&&c,!c)Vs(this.i,this.l,m,"[Invalid Chunked Response]"),ss(this),Si(this);else if(m.length>0&&!this.W){this.W=!0;var F=this.j;F.g==this&&F.aa&&!F.P&&(F.j.info("Great, no buffering proxy detected. Bytes received: "+m.length),el(F),F.P=!0,fe(11))}}else Vs(this.i,this.l,m,null),Ka(this,m);nt==4&&ss(this),this.o&&!this.K&&(nt==4?oh(this.j,this):(this.o=!1,zr(this)))}else X_(this.g),f==400&&m.indexOf("Unknown SID")>0?(this.m=3,fe(12)):(this.m=0,fe(13)),ss(this),Si(this)}}}catch{}finally{}};function V_(c){if(!Ou(c))return c.g.la();const f=Zu(c.g);if(f==="")return"";let m="";const T=f.length,C=Pn(c.g)==4;if(!c.h.i){if(typeof TextDecoder>"u")return ss(c),Si(c),"";c.h.i=new o.TextDecoder}for(let O=0;O<T;O++)c.h.h=!0,m+=c.h.i.decode(f[O],{stream:!(C&&O==T-1)});return f.length=0,c.h.g+=m,c.C=0,c.h.g}function Ou(c){return c.g?c.v=="GET"&&c.M!=2&&c.j.Aa:!1}function N_(c,f){var m=c.C,T=f.indexOf(`
`,m);return T==-1?Ha:(m=Number(f.substring(m,T)),isNaN(m)?Du:(T+=1,T+m>f.length?Ha:(f=f.slice(T,T+m),c.C=T+m,f)))}Sn.prototype.cancel=function(){this.K=!0,ss(this)};function zr(c){c.T=Date.now()+c.H,Lu(c,c.H)}function Lu(c,f){if(c.D!=null)throw Error("WatchDog timer not null");c.D=wi(u(c.aa,c),f)}function qa(c){c.D&&(o.clearTimeout(c.D),c.D=null)}Sn.prototype.aa=function(){this.D=null;const c=Date.now();c-this.T>=0?(M_(this.i,this.B),this.M!=2&&(Ei(),fe(17)),ss(this),this.m=2,Si(this)):Lu(this,this.T-c)};function Si(c){c.j.I==0||c.K||oh(c.j,c)}function ss(c){qa(c);var f=c.O;f&&typeof f.dispose=="function"&&f.dispose(),c.O=null,ee(c.V),c.g&&(f=c.g,c.g=null,f.abort(),f.dispose())}function Ka(c,f){try{var m=c.j;if(m.I!=0&&(m.g==c||Ga(m.h,c))){if(!c.L&&Ga(m.h,c)&&m.I==3){try{var T=m.Ba.g.parse(f)}catch{T=null}if(Array.isArray(T)&&T.length==3){var C=T;if(C[0]==0){t:if(!m.v){if(m.g)if(m.g.F+3e3<c.F)Gr(m),qr(m);else break t;tl(m),fe(18)}}else m.xa=C[1],0<m.xa-m.K&&C[2]<37500&&m.F&&m.A==0&&!m.C&&(m.C=wi(u(m.Va,m),6e3));Fu(m.h)<=1&&m.ta&&(m.ta=void 0)}else rs(m,11)}else if((c.L||m.g==c)&&Gr(m),!x(f))for(C=m.Ba.g.parse(f),f=0;f<C.length;f++){let St=C[f];const Jt=St[0];if(!(Jt<=m.K))if(m.K=Jt,St=St[1],m.I==2)if(St[0]=="c"){m.M=St[1],m.ba=St[2];const je=St[3];je!=null&&(m.ka=je,m.j.info("VER="+m.ka));const os=St[4];os!=null&&(m.za=os,m.j.info("SVER="+m.za));const kn=St[5];kn!=null&&typeof kn=="number"&&kn>0&&(T=1.5*kn,m.O=T,m.j.info("backChannelRequestTimeoutMs_="+T)),T=m;const Rn=c.g;if(Rn){const Qr=Rn.g?Rn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Qr){var O=T.h;O.g||Qr.indexOf("spdy")==-1&&Qr.indexOf("quic")==-1&&Qr.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&(Ya(O,O.h),O.h=null))}if(T.G){const nl=Rn.g?Rn.g.getResponseHeader("X-HTTP-Session-Id"):null;nl&&(T.wa=nl,kt(T.J,T.G,nl))}}m.I=3,m.l&&m.l.ra(),m.aa&&(m.T=Date.now()-c.F,m.j.info("Handshake RTT: "+m.T+"ms")),T=m;var F=c;if(T.na=ch(T,T.L?T.ba:null,T.W),F.L){Uu(T.h,F);var nt=F,Wt=T.O;Wt&&(nt.H=Wt),nt.D&&(qa(nt),zr(nt)),T.g=F}else ih(T);m.i.length>0&&Kr(m)}else St[0]!="stop"&&St[0]!="close"||rs(m,7);else m.I==3&&(St[0]=="stop"||St[0]=="close"?St[0]=="stop"?rs(m,7):Za(m):St[0]!="noop"&&m.l&&m.l.qa(St),m.A=0)}}Ei(4)}catch{}}var F_=class{constructor(c,f){this.g=c,this.map=f}};function Vu(c){this.l=c||10,o.PerformanceNavigationTiming?(c=o.performance.getEntriesByType("navigation"),c=c.length>0&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Nu(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function Fu(c){return c.h?1:c.g?c.g.size:0}function Ga(c,f){return c.h?c.h==f:c.g?c.g.has(f):!1}function Ya(c,f){c.g?c.g.add(f):c.h=f}function Uu(c,f){c.h&&c.h==f?c.h=null:c.g&&c.g.has(f)&&c.g.delete(f)}Vu.prototype.cancel=function(){if(this.i=Bu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function Bu(c){if(c.h!=null)return c.i.concat(c.h.G);if(c.g!=null&&c.g.size!==0){let f=c.i;for(const m of c.g.values())f=f.concat(m.G);return f}return y(c.i)}var $u=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function U_(c,f){if(c){c=c.split("&");for(let m=0;m<c.length;m++){const T=c[m].indexOf("=");let C,O=null;T>=0?(C=c[m].substring(0,T),O=c[m].substring(T+1)):C=c[m],f(C,O?decodeURIComponent(O.replace(/\+/g," ")):"")}}}function xn(c){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let f;c instanceof xn?(this.l=c.l,xi(this,c.j),this.o=c.o,this.g=c.g,Ai(this,c.u),this.h=c.h,Qa(this,Ku(c.i)),this.m=c.m):c&&(f=String(c).match($u))?(this.l=!1,xi(this,f[1]||"",!0),this.o=Pi(f[2]||""),this.g=Pi(f[3]||"",!0),Ai(this,f[4]),this.h=Pi(f[5]||"",!0),Qa(this,f[6]||"",!0),this.m=Pi(f[7]||"")):(this.l=!1,this.i=new Ri(null,this.l))}xn.prototype.toString=function(){const c=[];var f=this.j;f&&c.push(ki(f,zu,!0),":");var m=this.g;return(m||f=="file")&&(c.push("//"),(f=this.o)&&c.push(ki(f,zu,!0),"@"),c.push(Ii(m).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),m=this.u,m!=null&&c.push(":",String(m))),(m=this.h)&&(this.g&&m.charAt(0)!="/"&&c.push("/"),c.push(ki(m,m.charAt(0)=="/"?z_:$_,!0))),(m=this.i.toString())&&c.push("?",m),(m=this.m)&&c.push("#",ki(m,H_)),c.join("")},xn.prototype.resolve=function(c){const f=ze(this);let m=!!c.j;m?xi(f,c.j):m=!!c.o,m?f.o=c.o:m=!!c.g,m?f.g=c.g:m=c.u!=null;var T=c.h;if(m)Ai(f,c.u);else if(m=!!c.h){if(T.charAt(0)!="/")if(this.g&&!this.h)T="/"+T;else{var C=f.h.lastIndexOf("/");C!=-1&&(T=f.h.slice(0,C+1)+T)}if(C=T,C==".."||C==".")T="";else if(C.indexOf("./")!=-1||C.indexOf("/.")!=-1){T=C.lastIndexOf("/",0)==0,C=C.split("/");const O=[];for(let F=0;F<C.length;){const nt=C[F++];nt=="."?T&&F==C.length&&O.push(""):nt==".."?((O.length>1||O.length==1&&O[0]!="")&&O.pop(),T&&F==C.length&&O.push("")):(O.push(nt),T=!0)}T=O.join("/")}else T=C}return m?f.h=T:m=c.i.toString()!=="",m?Qa(f,Ku(c.i)):m=!!c.m,m&&(f.m=c.m),f};function ze(c){return new xn(c)}function xi(c,f,m){c.j=m?Pi(f,!0):f,c.j&&(c.j=c.j.replace(/:$/,""))}function Ai(c,f){if(f){if(f=Number(f),isNaN(f)||f<0)throw Error("Bad port number "+f);c.u=f}else c.u=null}function Qa(c,f,m){f instanceof Ri?(c.i=f,W_(c.i,c.l)):(m||(f=ki(f,j_)),c.i=new Ri(f,c.l))}function kt(c,f,m){c.i.set(f,m)}function jr(c){return kt(c,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),c}function Pi(c,f){return c?f?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function ki(c,f,m){return typeof c=="string"?(c=encodeURI(c).replace(f,B_),m&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function B_(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var zu=/[#\/\?@]/g,$_=/[#\?:]/g,z_=/[#\?]/g,j_=/[#\?@]/g,H_=/#/g;function Ri(c,f){this.h=this.g=null,this.i=c||null,this.j=!!f}function is(c){c.g||(c.g=new Map,c.h=0,c.i&&U_(c.i,function(f,m){c.add(decodeURIComponent(f.replace(/\+/g," ")),m)}))}n=Ri.prototype,n.add=function(c,f){is(this),this.i=null,c=Ns(this,c);let m=this.g.get(c);return m||this.g.set(c,m=[]),m.push(f),this.h+=1,this};function ju(c,f){is(c),f=Ns(c,f),c.g.has(f)&&(c.i=null,c.h-=c.g.get(f).length,c.g.delete(f))}function Hu(c,f){return is(c),f=Ns(c,f),c.g.has(f)}n.forEach=function(c,f){is(this),this.g.forEach(function(m,T){m.forEach(function(C){c.call(f,C,T,this)},this)},this)};function Wu(c,f){is(c);let m=[];if(typeof f=="string")Hu(c,f)&&(m=m.concat(c.g.get(Ns(c,f))));else for(c=Array.from(c.g.values()),f=0;f<c.length;f++)m=m.concat(c[f]);return m}n.set=function(c,f){return is(this),this.i=null,c=Ns(this,c),Hu(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[f]),this.h+=1,this},n.get=function(c,f){return c?(c=Wu(this,c),c.length>0?String(c[0]):f):f};function qu(c,f,m){ju(c,f),m.length>0&&(c.i=null,c.g.set(Ns(c,f),y(m)),c.h+=m.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],f=Array.from(this.g.keys());for(let T=0;T<f.length;T++){var m=f[T];const C=Ii(m);m=Wu(this,m);for(let O=0;O<m.length;O++){let F=C;m[O]!==""&&(F+="="+Ii(m[O])),c.push(F)}}return this.i=c.join("&")};function Ku(c){const f=new Ri;return f.i=c.i,c.g&&(f.g=new Map(c.g),f.h=c.h),f}function Ns(c,f){return f=String(f),c.j&&(f=f.toLowerCase()),f}function W_(c,f){f&&!c.j&&(is(c),c.i=null,c.g.forEach(function(m,T){const C=T.toLowerCase();T!=C&&(ju(this,T),qu(this,C,m))},c)),c.j=f}function q_(c,f){const m=new Ti;if(o.Image){const T=new Image;T.onload=h(An,m,"TestLoadImage: loaded",!0,f,T),T.onerror=h(An,m,"TestLoadImage: error",!1,f,T),T.onabort=h(An,m,"TestLoadImage: abort",!1,f,T),T.ontimeout=h(An,m,"TestLoadImage: timeout",!1,f,T),o.setTimeout(function(){T.ontimeout&&T.ontimeout()},1e4),T.src=c}else f(!1)}function K_(c,f){const m=new Ti,T=new AbortController,C=setTimeout(()=>{T.abort(),An(m,"TestPingServer: timeout",!1,f)},1e4);fetch(c,{signal:T.signal}).then(O=>{clearTimeout(C),O.ok?An(m,"TestPingServer: ok",!0,f):An(m,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(C),An(m,"TestPingServer: error",!1,f)})}function An(c,f,m,T,C){try{C&&(C.onload=null,C.onerror=null,C.onabort=null,C.ontimeout=null),T(m)}catch{}}function G_(){this.g=new Ur}function Xa(c){this.i=c.Sb||null,this.h=c.ab||!1}d(Xa,rn),Xa.prototype.g=function(){return new Hr(this.i,this.h)};function Hr(c,f){et.call(this),this.H=c,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}d(Hr,et),n=Hr.prototype,n.open=function(c,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=c,this.D=f,this.readyState=1,Di(this)},n.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const f={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};c&&(f.body=c),(this.H||o).fetch(new Request(this.D,f)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Ci(this)),this.readyState=0},n.Pa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,Di(this)),this.g&&(this.readyState=3,Di(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Gu(this)}else c.text().then(this.Oa.bind(this),this.ga.bind(this))};function Gu(c){c.j.read().then(c.Ma.bind(c)).catch(c.ga.bind(c))}n.Ma=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var f=c.value?c.value:new Uint8Array(0);(f=this.B.decode(f,{stream:!c.done}))&&(this.response=this.responseText+=f)}c.done?Ci(this):Di(this),this.readyState==3&&Gu(this)}},n.Oa=function(c){this.g&&(this.response=this.responseText=c,Ci(this))},n.Na=function(c){this.g&&(this.response=c,Ci(this))},n.ga=function(){this.g&&Ci(this)};function Ci(c){c.readyState=4,c.l=null,c.j=null,c.B=null,Di(c)}n.setRequestHeader=function(c,f){this.A.append(c,f)},n.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],f=this.h.entries();for(var m=f.next();!m.done;)m=m.value,c.push(m[0]+": "+m[1]),m=f.next();return c.join(`\r
`)};function Di(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(Hr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function Yu(c){let f="";return B(c,function(m,T){f+=T,f+=":",f+=m,f+=`\r
`}),f}function Ja(c,f,m){t:{for(T in m){var T=!1;break t}T=!0}T||(m=Yu(m),typeof c=="string"?m!=null&&Ii(m):kt(c,f,m))}function Nt(c){et.call(this),this.headers=new Map,this.L=c||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}d(Nt,et);var Y_=/^https?$/i,Q_=["POST","PUT"];n=Nt.prototype,n.Fa=function(c){this.H=c},n.ea=function(c,f,m,T){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);f=f?f.toUpperCase():"GET",this.D=c,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Ru.g(),this.g.onreadystatechange=p(u(this.Ca,this));try{this.B=!0,this.g.open(f,String(c),!0),this.B=!1}catch(O){Qu(this,O);return}if(c=m||"",m=new Map(this.headers),T)if(Object.getPrototypeOf(T)===Object.prototype)for(var C in T)m.set(C,T[C]);else if(typeof T.keys=="function"&&typeof T.get=="function")for(const O of T.keys())m.set(O,T.get(O));else throw Error("Unknown input type for opt_headers: "+String(T));T=Array.from(m.keys()).find(O=>O.toLowerCase()=="content-type"),C=o.FormData&&c instanceof o.FormData,!(Array.prototype.indexOf.call(Q_,f,void 0)>=0)||T||C||m.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,F]of m)this.g.setRequestHeader(O,F);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(c),this.v=!1}catch(O){Qu(this,O)}};function Qu(c,f){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=f,c.o=5,Xu(c),Wr(c)}function Xu(c){c.A||(c.A=!0,dt(c,"complete"),dt(c,"error"))}n.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=c||7,dt(this,"complete"),dt(this,"abort"),Wr(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Wr(this,!0)),Nt.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?Ju(this):this.Xa())},n.Xa=function(){Ju(this)};function Ju(c){if(c.h&&typeof r<"u"){if(c.v&&Pn(c)==4)setTimeout(c.Ca.bind(c),0);else if(dt(c,"readystatechange"),Pn(c)==4){c.h=!1;try{const O=c.ca();t:switch(O){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break t;default:f=!1}var m;if(!(m=f)){var T;if(T=O===0){let F=String(c.D).match($u)[1]||null;!F&&o.self&&o.self.location&&(F=o.self.location.protocol.slice(0,-1)),T=!Y_.test(F?F.toLowerCase():"")}m=T}if(m)dt(c,"complete"),dt(c,"success");else{c.o=6;try{var C=Pn(c)>2?c.g.statusText:""}catch{C=""}c.l=C+" ["+c.ca()+"]",Xu(c)}}finally{Wr(c)}}}}function Wr(c,f){if(c.g){c.m&&(clearTimeout(c.m),c.m=null);const m=c.g;c.g=null,f||dt(c,"ready");try{m.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function Pn(c){return c.g?c.g.readyState:0}n.ca=function(){try{return Pn(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(c){if(this.g){var f=this.g.responseText;return c&&f.indexOf(c)==0&&(f=f.substring(c.length)),vi(f)}};function Zu(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.F){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function X_(c){const f={};c=(c.g&&Pn(c)>=2&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let T=0;T<c.length;T++){if(x(c[T]))continue;var m=L_(c[T]);const C=m[0];if(m=m[1],typeof m!="string")continue;m=m.trim();const O=f[C]||[];f[C]=O,O.push(m)}Pt(f,function(T){return T.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Mi(c,f,m){return m&&m.internalChannelParams&&m.internalChannelParams[c]||f}function th(c){this.za=0,this.i=[],this.j=new Ti,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Mi("failFast",!1,c),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Mi("baseRetryDelayMs",5e3,c),this.Za=Mi("retryDelaySeedMs",1e4,c),this.Ta=Mi("forwardChannelMaxRetries",2,c),this.va=Mi("forwardChannelRequestTimeoutMs",2e4,c),this.ma=c&&c.xmlHttpFactory||void 0,this.Ua=c&&c.Rb||void 0,this.Aa=c&&c.useFetchStreams||!1,this.O=void 0,this.L=c&&c.supportsCrossDomainXhr||!1,this.M="",this.h=new Vu(c&&c.concurrentRequestLimit),this.Ba=new G_,this.S=c&&c.fastHandshake||!1,this.R=c&&c.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=c&&c.Pb||!1,c&&c.ua&&this.j.ua(),c&&c.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&c&&c.detectBufferingProxy||!1,this.ia=void 0,c&&c.longPollingTimeout&&c.longPollingTimeout>0&&(this.ia=c.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=th.prototype,n.ka=8,n.I=1,n.connect=function(c,f,m,T){fe(0),this.W=c,this.H=f||{},m&&T!==void 0&&(this.H.OSID=m,this.H.OAID=T),this.F=this.X,this.J=ch(this,null,this.W),Kr(this)};function Za(c){if(eh(c),c.I==3){var f=c.V++,m=ze(c.J);if(kt(m,"SID",c.M),kt(m,"RID",f),kt(m,"TYPE","terminate"),Oi(c,m),f=new Sn(c,c.j,f),f.M=2,f.A=jr(ze(m)),m=!1,o.navigator&&o.navigator.sendBeacon)try{m=o.navigator.sendBeacon(f.A.toString(),"")}catch{}!m&&o.Image&&(new Image().src=f.A,m=!0),m||(f.g=uh(f.j,null),f.g.ea(f.A)),f.F=Date.now(),zr(f)}lh(c)}function qr(c){c.g&&(el(c),c.g.cancel(),c.g=null)}function eh(c){qr(c),c.v&&(o.clearTimeout(c.v),c.v=null),Gr(c),c.h.cancel(),c.m&&(typeof c.m=="number"&&o.clearTimeout(c.m),c.m=null)}function Kr(c){if(!Nu(c.h)&&!c.m){c.m=!0;var f=c.Ea;M||g(),L||(M(),L=!0),S.add(f,c),c.D=0}}function J_(c,f){return Fu(c.h)>=c.h.j-(c.m?1:0)?!1:c.m?(c.i=f.G.concat(c.i),!0):c.I==1||c.I==2||c.D>=(c.Sa?0:c.Ta)?!1:(c.m=wi(u(c.Ea,c,f),ah(c,c.D)),c.D++,!0)}n.Ea=function(c){if(this.m)if(this.m=null,this.I==1){if(!c){this.V=Math.floor(Math.random()*1e5),c=this.V++;const C=new Sn(this,this.j,c);let O=this.o;if(this.U&&(O?(O=Y(O),z(O,this.U)):O=this.U),this.u!==null||this.R||(C.J=O,O=null),this.S)t:{for(var f=0,m=0;m<this.i.length;m++){e:{var T=this.i[m];if("__data__"in T.map&&(T=T.map.__data__,typeof T=="string")){T=T.length;break e}T=void 0}if(T===void 0)break;if(f+=T,f>4096){f=m;break t}if(f===4096||m===this.i.length-1){f=m+1;break t}}f=1e3}else f=1e3;f=sh(this,C,f),m=ze(this.J),kt(m,"RID",c),kt(m,"CVER",22),this.G&&kt(m,"X-HTTP-Session-Id",this.G),Oi(this,m),O&&(this.R?f="headers="+Ii(Yu(O))+"&"+f:this.u&&Ja(m,this.u,O)),Ya(this.h,C),this.Ra&&kt(m,"TYPE","init"),this.S?(kt(m,"$req",f),kt(m,"SID","null"),C.U=!0,Wa(C,m,null)):Wa(C,m,f),this.I=2}}else this.I==3&&(c?nh(this,c):this.i.length==0||Nu(this.h)||nh(this))};function nh(c,f){var m;f?m=f.l:m=c.V++;const T=ze(c.J);kt(T,"SID",c.M),kt(T,"RID",m),kt(T,"AID",c.K),Oi(c,T),c.u&&c.o&&Ja(T,c.u,c.o),m=new Sn(c,c.j,m,c.D+1),c.u===null&&(m.J=c.o),f&&(c.i=f.G.concat(c.i)),f=sh(c,m,1e3),m.H=Math.round(c.va*.5)+Math.round(c.va*.5*Math.random()),Ya(c.h,m),Wa(m,T,f)}function Oi(c,f){c.H&&B(c.H,function(m,T){kt(f,T,m)}),c.l&&B({},function(m,T){kt(f,T,m)})}function sh(c,f,m){m=Math.min(c.i.length,m);const T=c.l?u(c.l.Ka,c.l,c):null;t:{var C=c.i;let nt=-1;for(;;){const Wt=["count="+m];nt==-1?m>0?(nt=C[0].g,Wt.push("ofs="+nt)):nt=0:Wt.push("ofs="+nt);let St=!0;for(let Jt=0;Jt<m;Jt++){var O=C[Jt].g;const je=C[Jt].map;if(O-=nt,O<0)nt=Math.max(0,C[Jt].g-100),St=!1;else try{O="req"+O+"_"||"";try{var F=je instanceof Map?je:Object.entries(je);for(const[os,kn]of F){let Rn=kn;a(kn)&&(Rn=ve(kn)),Wt.push(O+os+"="+encodeURIComponent(Rn))}}catch(os){throw Wt.push(O+"type="+encodeURIComponent("_badmap")),os}}catch{T&&T(je)}}if(St){F=Wt.join("&");break t}}F=void 0}return c=c.i.splice(0,m),f.G=c,F}function ih(c){if(!c.g&&!c.v){c.Y=1;var f=c.Da;M||g(),L||(M(),L=!0),S.add(f,c),c.A=0}}function tl(c){return c.g||c.v||c.A>=3?!1:(c.Y++,c.v=wi(u(c.Da,c),ah(c,c.A)),c.A++,!0)}n.Da=function(){if(this.v=null,rh(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var c=4*this.T;this.j.info("BP detection timer enabled: "+c),this.B=wi(u(this.Wa,this),c)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,fe(10),qr(this),rh(this))};function el(c){c.B!=null&&(o.clearTimeout(c.B),c.B=null)}function rh(c){c.g=new Sn(c,c.j,"rpc",c.Y),c.u===null&&(c.g.J=c.o),c.g.P=0;var f=ze(c.na);kt(f,"RID","rpc"),kt(f,"SID",c.M),kt(f,"AID",c.K),kt(f,"CI",c.F?"0":"1"),!c.F&&c.ia&&kt(f,"TO",c.ia),kt(f,"TYPE","xmlhttp"),Oi(c,f),c.u&&c.o&&Ja(f,c.u,c.o),c.O&&(c.g.H=c.O);var m=c.g;c=c.ba,m.M=1,m.A=jr(ze(f)),m.u=null,m.R=!0,Mu(m,c)}n.Va=function(){this.C!=null&&(this.C=null,qr(this),tl(this),fe(19))};function Gr(c){c.C!=null&&(o.clearTimeout(c.C),c.C=null)}function oh(c,f){var m=null;if(c.g==f){Gr(c),el(c),c.g=null;var T=2}else if(Ga(c.h,f))m=f.G,Uu(c.h,f),T=1;else return;if(c.I!=0){if(f.o)if(T==1){m=f.u?f.u.length:0,f=Date.now()-f.F;var C=c.D;T=Br(),dt(T,new Pu(T,m)),Kr(c)}else ih(c);else if(C=f.m,C==3||C==0&&f.X>0||!(T==1&&J_(c,f)||T==2&&tl(c)))switch(m&&m.length>0&&(f=c.h,f.i=f.i.concat(m)),C){case 1:rs(c,5);break;case 4:rs(c,10);break;case 3:rs(c,6);break;default:rs(c,2)}}}function ah(c,f){let m=c.Qa+Math.floor(Math.random()*c.Za);return c.isActive()||(m*=2),m*f}function rs(c,f){if(c.j.info("Error code "+f),f==2){var m=u(c.bb,c),T=c.Ua;const C=!T;T=new xn(T||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||xi(T,"https"),jr(T),C?q_(T.toString(),m):K_(T.toString(),m)}else fe(2);c.I=0,c.l&&c.l.pa(f),lh(c),eh(c)}n.bb=function(c){c?(this.j.info("Successfully pinged google.com"),fe(2)):(this.j.info("Failed to ping google.com"),fe(1))};function lh(c){if(c.I=0,c.ja=[],c.l){const f=Bu(c.h);(f.length!=0||c.i.length!=0)&&(E(c.ja,f),E(c.ja,c.i),c.h.i.length=0,y(c.i),c.i.length=0),c.l.oa()}}function ch(c,f,m){var T=m instanceof xn?ze(m):new xn(m);if(T.g!="")f&&(T.g=f+"."+T.g),Ai(T,T.u);else{var C=o.location;T=C.protocol,f=f?f+"."+C.hostname:C.hostname,C=+C.port;const O=new xn(null);T&&xi(O,T),f&&(O.g=f),C&&Ai(O,C),m&&(O.h=m),T=O}return m=c.G,f=c.wa,m&&f&&kt(T,m,f),kt(T,"VER",c.ka),Oi(c,T),T}function uh(c,f,m){if(f&&!c.L)throw Error("Can't create secondary domain capable XhrIo object.");return f=c.Aa&&!c.ma?new Nt(new Xa({ab:m})):new Nt(c.ma),f.Fa(c.L),f}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function hh(){}n=hh.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function Yr(){}Yr.prototype.g=function(c,f){return new we(c,f)};function we(c,f){et.call(this),this.g=new th(f),this.l=c,this.h=f&&f.messageUrlParams||null,c=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(c?c["X-WebChannel-Content-Type"]=f.messageContentType:c={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.sa&&(c?c["X-WebChannel-Client-Profile"]=f.sa:c={"X-WebChannel-Client-Profile":f.sa}),this.g.U=c,(c=f&&f.Qb)&&!x(c)&&(this.g.u=c),this.A=f&&f.supportsCrossDomainXhr||!1,this.v=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!x(f)&&(this.g.G=f,c=this.h,c!==null&&f in c&&(c=this.h,f in c&&delete c[f])),this.j=new Fs(this)}d(we,et),we.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},we.prototype.close=function(){Za(this.g)},we.prototype.o=function(c){var f=this.g;if(typeof c=="string"){var m={};m.__data__=c,c=m}else this.v&&(m={},m.__data__=ve(c),c=m);f.i.push(new F_(f.Ya++,c)),f.I==3&&Kr(f)},we.prototype.N=function(){this.g.l=null,delete this.j,Za(this.g),delete this.g,we.Z.N.call(this)};function dh(c){Ls.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var f=c.__sm__;if(f){t:{for(const m in f){c=m;break t}c=void 0}(this.i=c)&&(c=this.i,f=f!==null&&c in f?f[c]:void 0),this.data=f}else this.data=c}d(dh,Ls);function fh(){za.call(this),this.status=1}d(fh,za);function Fs(c){this.g=c}d(Fs,hh),Fs.prototype.ra=function(){dt(this.g,"a")},Fs.prototype.qa=function(c){dt(this.g,new dh(c))},Fs.prototype.pa=function(c){dt(this.g,new fh)},Fs.prototype.oa=function(){dt(this.g,"b")},Yr.prototype.createWebChannel=Yr.prototype.g,we.prototype.send=we.prototype.o,we.prototype.open=we.prototype.m,we.prototype.close=we.prototype.close,ig=function(){return new Yr},sg=function(){return Br()},ng=ns,Bl={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},$r.NO_ERROR=0,$r.TIMEOUT=8,$r.HTTP_ERROR=6,To=$r,ku.COMPLETE="complete",eg=ku,Ee.EventType=Oe,Oe.OPEN="a",Oe.CLOSE="b",Oe.ERROR="c",Oe.MESSAGE="d",et.prototype.listen=et.prototype.J,$i=Ee,Nt.prototype.listenOnce=Nt.prototype.K,Nt.prototype.getLastError=Nt.prototype.Ha,Nt.prototype.getLastErrorCode=Nt.prototype.ya,Nt.prototype.getStatus=Nt.prototype.ca,Nt.prototype.getResponseJson=Nt.prototype.La,Nt.prototype.getResponseText=Nt.prototype.la,Nt.prototype.send=Nt.prototype.ea,Nt.prototype.setWithCredentials=Nt.prototype.Fa,tg=Nt}).apply(typeof Jr<"u"?Jr:typeof self<"u"?self:typeof window<"u"?window:{});/**
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
 */class le{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}le.UNAUTHENTICATED=new le(null),le.GOOGLE_CREDENTIALS=new le("google-credentials-uid"),le.FIRST_PARTY=new le("first-party-uid"),le.MOCK_USER=new le("mock-user");/**
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
 */let gi="12.9.0";function $0(n){gi=n}/**
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
 */const Is=new fc("@firebase/firestore");function $s(){return Is.logLevel}function U(n,...t){if(Is.logLevel<=lt.DEBUG){const e=t.map(xc);Is.debug(`Firestore (${gi}): ${n}`,...e)}}function vn(n,...t){if(Is.logLevel<=lt.ERROR){const e=t.map(xc);Is.error(`Firestore (${gi}): ${n}`,...e)}}function Ss(n,...t){if(Is.logLevel<=lt.WARN){const e=t.map(xc);Is.warn(`Firestore (${gi}): ${n}`,...e)}}function xc(n){if(typeof n=="string")return n;try{return(function(e){return JSON.stringify(e)})(n)}catch{return n}}/**
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
 */function G(n,t,e){let s="Unexpected state";typeof t=="string"?s=t:e=t,rg(n,s,e)}function rg(n,t,e){let s=`FIRESTORE (${gi}) INTERNAL ASSERTION FAILED: ${t} (ID: ${n.toString(16)})`;if(e!==void 0)try{s+=" CONTEXT: "+JSON.stringify(e)}catch{s+=" CONTEXT: "+e}throw vn(s),new Error(s)}function vt(n,t,e,s){let i="Unexpected state";typeof e=="string"?i=e:s=e,n||rg(t,i,s)}function Z(n,t){return n}/**
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
 */const N={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class H extends Tn{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class qn{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}/**
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
 */class og{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class z0{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(le.UNAUTHENTICATED)))}shutdown(){}}class j0{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class H0{constructor(t){this.t=t,this.currentUser=le.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){vt(this.o===void 0,42304);let s=this.i;const i=l=>this.i!==s?(s=this.i,e(l)):Promise.resolve();let r=new qn;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new qn,t.enqueueRetryable((()=>i(this.currentUser)))};const o=()=>{const l=r;t.enqueueRetryable((async()=>{await l.promise,await i(this.currentUser)}))},a=l=>{U("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit((l=>a(l))),setTimeout((()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(U("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new qn)}}),0),o()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((s=>this.i!==t?(U("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(vt(typeof s.accessToken=="string",31837,{l:s}),new og(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return vt(t===null||typeof t=="string",2055,{h:t}),new le(t)}}class W0{constructor(t,e,s){this.P=t,this.T=e,this.I=s,this.type="FirstParty",this.user=le.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const t=this.A();return t&&this.R.set("Authorization",t),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class q0{constructor(t,e,s){this.P=t,this.T=e,this.I=s}getToken(){return Promise.resolve(new W0(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable((()=>e(le.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class jh{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class K0{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Le(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){vt(this.o===void 0,3512);const s=r=>{r.error!=null&&U("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.m;return this.m=r.token,U("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?e(r.token):Promise.resolve()};this.o=r=>{t.enqueueRetryable((()=>s(r)))};const i=r=>{U("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((r=>i(r))),setTimeout((()=>{if(!this.appCheck){const r=this.V.getImmediate({optional:!0});r?i(r):U("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new jh(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((e=>e?(vt(typeof e.token=="string",44558,{tokenResult:e}),this.m=e.token,new jh(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function G0(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let s=0;s<n;s++)e[s]=Math.floor(256*Math.random());return e}/**
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
 */class Ac{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const i=G0(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<e&&(s+=t.charAt(i[r]%62))}return s}}function ct(n,t){return n<t?-1:n>t?1:0}function $l(n,t){const e=Math.min(n.length,t.length);for(let s=0;s<e;s++){const i=n.charAt(s),r=t.charAt(s);if(i!==r)return ul(i)===ul(r)?ct(i,r):ul(i)?1:-1}return ct(n.length,t.length)}const Y0=55296,Q0=57343;function ul(n){const t=n.charCodeAt(0);return t>=Y0&&t<=Q0}function ii(n,t,e){return n.length===t.length&&n.every(((s,i)=>e(s,t[i])))}/**
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
 */const Hh="__name__";class Ke{constructor(t,e,s){e===void 0?e=0:e>t.length&&G(637,{offset:e,range:t.length}),s===void 0?s=t.length-e:s>t.length-e&&G(1746,{length:s,range:t.length-e}),this.segments=t,this.offset=e,this.len=s}get length(){return this.len}isEqual(t){return Ke.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Ke?t.forEach((s=>{e.push(s)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,s=this.limit();e<s;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const s=Math.min(t.length,e.length);for(let i=0;i<s;i++){const r=Ke.compareSegments(t.get(i),e.get(i));if(r!==0)return r}return ct(t.length,e.length)}static compareSegments(t,e){const s=Ke.isNumericId(t),i=Ke.isNumericId(e);return s&&!i?-1:!s&&i?1:s&&i?Ke.extractNumericId(t).compare(Ke.extractNumericId(e)):$l(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return Wn.fromString(t.substring(4,t.length-2))}}class Mt extends Ke{construct(t,e,s){return new Mt(t,e,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const s of t){if(s.indexOf("//")>=0)throw new H(N.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);e.push(...s.split("/").filter((i=>i.length>0)))}return new Mt(e)}static emptyPath(){return new Mt([])}}const X0=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class se extends Ke{construct(t,e,s){return new se(t,e,s)}static isValidIdentifier(t){return X0.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),se.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Hh}static keyField(){return new se([Hh])}static fromServerFormat(t){const e=[];let s="",i=0;const r=()=>{if(s.length===0)throw new H(N.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(s),s=""};let o=!1;for(;i<t.length;){const a=t[i];if(a==="\\"){if(i+1===t.length)throw new H(N.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const l=t[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new H(N.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);s+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new H(N.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new se(e)}static emptyPath(){return new se([])}}/**
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
 */class W{constructor(t){this.path=t}static fromPath(t){return new W(Mt.fromString(t))}static fromName(t){return new W(Mt.fromString(t).popFirst(5))}static empty(){return new W(Mt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Mt.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return Mt.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new W(new Mt(t.slice()))}}/**
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
 */function J0(n,t,e){if(!e)throw new H(N.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function Z0(n,t,e,s){if(t===!0&&s===!0)throw new H(N.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function Wh(n){if(!W.isDocumentKey(n))throw new H(N.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function ag(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Pc(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=(function(s){return s.constructor?s.constructor.name:null})(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":G(12329,{type:typeof n})}function hr(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new H(N.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Pc(n);throw new H(N.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
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
 */function Ht(n,t){const e={typeString:n};return t&&(e.value=t),e}function Dr(n,t){if(!ag(n))throw new H(N.INVALID_ARGUMENT,"JSON must be an object");let e;for(const s in t)if(t[s]){const i=t[s].typeString,r="value"in t[s]?{value:t[s].value}:void 0;if(!(s in n)){e=`JSON missing required field: '${s}'`;break}const o=n[s];if(i&&typeof o!==i){e=`JSON field '${s}' must be a ${i}.`;break}if(r!==void 0&&o!==r.value){e=`Expected '${s}' field to equal '${r.value}'`;break}}if(e)throw new H(N.INVALID_ARGUMENT,e);return!0}/**
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
 */const qh=-62135596800,Kh=1e6;class Ct{static now(){return Ct.fromMillis(Date.now())}static fromDate(t){return Ct.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),s=Math.floor((t-1e3*e)*Kh);return new Ct(e,s)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new H(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new H(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<qh)throw new H(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new H(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Kh}_compareTo(t){return this.seconds===t.seconds?ct(this.nanoseconds,t.nanoseconds):ct(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ct._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(Dr(t,Ct._jsonSchema))return new Ct(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-qh;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ct._jsonSchemaVersion="firestore/timestamp/1.0",Ct._jsonSchema={type:Ht("string",Ct._jsonSchemaVersion),seconds:Ht("number"),nanoseconds:Ht("number")};/**
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
 */const dr=-1;function tE(n,t){const e=n.toTimestamp().seconds,s=n.toTimestamp().nanoseconds+1,i=J.fromTimestamp(s===1e9?new Ct(e+1,0):new Ct(e,s));return new Yn(i,W.empty(),t)}function eE(n){return new Yn(n.readTime,n.key,dr)}class Yn{constructor(t,e,s){this.readTime=t,this.documentKey=e,this.largestBatchId=s}static min(){return new Yn(J.min(),W.empty(),dr)}static max(){return new Yn(J.max(),W.empty(),dr)}}function nE(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=W.comparator(n.documentKey,t.documentKey),e!==0?e:ct(n.largestBatchId,t.largestBatchId))}/**
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
 */const sE="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class iE{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}/**
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
 */async function mi(n){if(n.code!==N.FAILED_PRECONDITION||n.message!==sE)throw n;U("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class V{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&G(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new V(((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(t,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(e,r).next(s,i)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof V?e:V.resolve(e)}catch(e){return V.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):V.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):V.reject(e)}static resolve(t){return new V(((e,s)=>{e(t)}))}static reject(t){return new V(((e,s)=>{s(t)}))}static waitFor(t){return new V(((e,s)=>{let i=0,r=0,o=!1;t.forEach((a=>{++i,a.next((()=>{++r,o&&r===i&&e()}),(l=>s(l)))})),o=!0,r===i&&e()}))}static or(t){let e=V.resolve(!1);for(const s of t)e=e.next((i=>i?V.resolve(i):s()));return e}static forEach(t,e){const s=[];return t.forEach(((i,r)=>{s.push(e.call(this,i,r))})),this.waitFor(s)}static mapArray(t,e){return new V(((s,i)=>{const r=t.length,o=new Array(r);let a=0;for(let l=0;l<r;l++){const u=l;e(t[u]).next((h=>{o[u]=h,++a,a===r&&s(o)}),(h=>i(h)))}}))}static doWhile(t,e){return new V(((s,i)=>{const r=()=>{t()===!0?e().next((()=>{r()}),i):s()};r()}))}}function rE(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function _i(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class va{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>e.writeSequenceNumber(s))}ae(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ue&&this.ue(t),t}}va.ce=-1;/**
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
 */const kc=-1;function Ea(n){return n==null}function qo(n){return n===0&&1/n==-1/0}function oE(n){return typeof n=="number"&&Number.isInteger(n)&&!qo(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const lg="";function aE(n){let t="";for(let e=0;e<n.length;e++)t.length>0&&(t=Gh(t)),t=lE(n.get(e),t);return Gh(t)}function lE(n,t){let e=t;const s=n.length;for(let i=0;i<s;i++){const r=n.charAt(i);switch(r){case"\0":e+="";break;case lg:e+="";break;default:e+=r}}return e}function Gh(n){return n+lg+""}/**
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
 */function Yh(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function Rs(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function cg(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
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
 */class Lt{constructor(t,e){this.comparator=t,this.root=e||ne.EMPTY}insert(t,e){return new Lt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,ne.BLACK,null,null))}remove(t){return new Lt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,ne.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const s=this.comparator(t,e.key);if(s===0)return e.value;s<0?e=e.left:s>0&&(e=e.right)}return null}indexOf(t){let e=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(t,s.key);if(i===0)return e+s.left.size;i<0?s=s.left:(e+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,s)=>(t(e,s),!1)))}toString(){const t=[];return this.inorderTraversal(((e,s)=>(t.push(`${e}:${s}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Zr(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Zr(this.root,t,this.comparator,!1)}getReverseIterator(){return new Zr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Zr(this.root,t,this.comparator,!0)}}class Zr{constructor(t,e,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!t.isEmpty();)if(r=e?s(t.key,e):1,e&&i&&(r*=-1),r<0)t=this.isReverse?t.left:t.right;else{if(r===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class ne{constructor(t,e,s,i,r){this.key=t,this.value=e,this.color=s??ne.RED,this.left=i??ne.EMPTY,this.right=r??ne.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,s,i,r){return new ne(t??this.key,e??this.value,s??this.color,i??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,s){let i=this;const r=s(t,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(t,e,s),null):r===0?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ne.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let s,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),e(t,i.key)===0){if(i.right.isEmpty())return ne.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,ne.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,ne.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw G(43730,{key:this.key,value:this.value});if(this.right.isRed())throw G(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw G(27949);return t+(this.isRed()?0:1)}}ne.EMPTY=null,ne.RED=!0,ne.BLACK=!1;ne.EMPTY=new class{constructor(){this.size=0}get key(){throw G(57766)}get value(){throw G(16141)}get color(){throw G(16727)}get left(){throw G(29726)}get right(){throw G(36894)}copy(t,e,s,i,r){return this}insert(t,e,s){return new ne(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Qt{constructor(t){this.comparator=t,this.data=new Lt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,s)=>(t(e),!1)))}forEachInRange(t,e){const s=this.data.getIteratorFrom(t[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let s;for(s=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();s.hasNext();)if(!t(s.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Qh(this.data.getIterator())}getIteratorFrom(t){return new Qh(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((s=>{e=e.add(s)})),e}isEqual(t){if(!(t instanceof Qt)||this.size!==t.size)return!1;const e=this.data.getIterator(),s=t.data.getIterator();for(;e.hasNext();){const i=e.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new Qt(this.comparator);return e.data=t,e}}class Qh{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Ne{constructor(t){this.fields=t,t.sort(se.comparator)}static empty(){return new Ne([])}unionWith(t){let e=new Qt(se.comparator);for(const s of this.fields)e=e.add(s);for(const s of t)e=e.add(s);return new Ne(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return ii(this.fields,t.fields,((e,s)=>e.isEqual(s)))}}/**
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
 */class ug extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ie{constructor(t){this.binaryString=t}static fromBase64String(t){const e=(function(i){try{return atob(i)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new ug("Invalid base64 string: "+r):r}})(t);return new ie(e)}static fromUint8Array(t){const e=(function(i){let r="";for(let o=0;o<i.length;++o)r+=String.fromCharCode(i[o]);return r})(t);return new ie(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(e){return btoa(e)})(this.binaryString)}toUint8Array(){return(function(e){const s=new Uint8Array(e.length);for(let i=0;i<e.length;i++)s[i]=e.charCodeAt(i);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return ct(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}ie.EMPTY_BYTE_STRING=new ie("");const cE=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Qn(n){if(vt(!!n,39018),typeof n=="string"){let t=0;const e=cE.exec(n);if(vt(!!e,46558,{timestamp:n}),e[1]){let i=e[1];i=(i+"000000000").substr(0,9),t=Number(i)}const s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:Bt(n.seconds),nanos:Bt(n.nanos)}}function Bt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Xn(n){return typeof n=="string"?ie.fromBase64String(n):ie.fromUint8Array(n)}/**
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
 */const hg="server_timestamp",dg="__type__",fg="__previous_value__",pg="__local_write_time__";function Rc(n){var e,s;return((s=(((e=n==null?void 0:n.mapValue)==null?void 0:e.fields)||{})[dg])==null?void 0:s.stringValue)===hg}function wa(n){const t=n.mapValue.fields[fg];return Rc(t)?wa(t):t}function fr(n){const t=Qn(n.mapValue.fields[pg].timestampValue);return new Ct(t.seconds,t.nanos)}/**
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
 */class uE{constructor(t,e,s,i,r,o,a,l,u,h,d){this.databaseId=t,this.appId=e,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u,this.isUsingEmulator=h,this.apiKey=d}}const Ko="(default)";class pr{constructor(t,e){this.projectId=t,this.database=e||Ko}static empty(){return new pr("","")}get isDefaultDatabase(){return this.database===Ko}isEqual(t){return t instanceof pr&&t.projectId===this.projectId&&t.database===this.database}}function hE(n,t){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new H(N.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new pr(n.options.projectId,t)}/**
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
 */const gg="__type__",dE="__max__",to={mapValue:{}},mg="__vector__",Go="value";function Jn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Rc(n)?4:pE(n)?9007199254740991:fE(n)?10:11:G(28295,{value:n})}function tn(n,t){if(n===t)return!0;const e=Jn(n);if(e!==Jn(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return fr(n).isEqual(fr(t));case 3:return(function(i,r){if(typeof i.timestampValue=="string"&&typeof r.timestampValue=="string"&&i.timestampValue.length===r.timestampValue.length)return i.timestampValue===r.timestampValue;const o=Qn(i.timestampValue),a=Qn(r.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos})(n,t);case 5:return n.stringValue===t.stringValue;case 6:return(function(i,r){return Xn(i.bytesValue).isEqual(Xn(r.bytesValue))})(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return(function(i,r){return Bt(i.geoPointValue.latitude)===Bt(r.geoPointValue.latitude)&&Bt(i.geoPointValue.longitude)===Bt(r.geoPointValue.longitude)})(n,t);case 2:return(function(i,r){if("integerValue"in i&&"integerValue"in r)return Bt(i.integerValue)===Bt(r.integerValue);if("doubleValue"in i&&"doubleValue"in r){const o=Bt(i.doubleValue),a=Bt(r.doubleValue);return o===a?qo(o)===qo(a):isNaN(o)&&isNaN(a)}return!1})(n,t);case 9:return ii(n.arrayValue.values||[],t.arrayValue.values||[],tn);case 10:case 11:return(function(i,r){const o=i.mapValue.fields||{},a=r.mapValue.fields||{};if(Yh(o)!==Yh(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!tn(o[l],a[l])))return!1;return!0})(n,t);default:return G(52216,{left:n})}}function gr(n,t){return(n.values||[]).find((e=>tn(e,t)))!==void 0}function ri(n,t){if(n===t)return 0;const e=Jn(n),s=Jn(t);if(e!==s)return ct(e,s);switch(e){case 0:case 9007199254740991:return 0;case 1:return ct(n.booleanValue,t.booleanValue);case 2:return(function(r,o){const a=Bt(r.integerValue||r.doubleValue),l=Bt(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1})(n,t);case 3:return Xh(n.timestampValue,t.timestampValue);case 4:return Xh(fr(n),fr(t));case 5:return $l(n.stringValue,t.stringValue);case 6:return(function(r,o){const a=Xn(r),l=Xn(o);return a.compareTo(l)})(n.bytesValue,t.bytesValue);case 7:return(function(r,o){const a=r.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const h=ct(a[u],l[u]);if(h!==0)return h}return ct(a.length,l.length)})(n.referenceValue,t.referenceValue);case 8:return(function(r,o){const a=ct(Bt(r.latitude),Bt(o.latitude));return a!==0?a:ct(Bt(r.longitude),Bt(o.longitude))})(n.geoPointValue,t.geoPointValue);case 9:return Jh(n.arrayValue,t.arrayValue);case 10:return(function(r,o){var p,y,E,w;const a=r.fields||{},l=o.fields||{},u=(p=a[Go])==null?void 0:p.arrayValue,h=(y=l[Go])==null?void 0:y.arrayValue,d=ct(((E=u==null?void 0:u.values)==null?void 0:E.length)||0,((w=h==null?void 0:h.values)==null?void 0:w.length)||0);return d!==0?d:Jh(u,h)})(n.mapValue,t.mapValue);case 11:return(function(r,o){if(r===to.mapValue&&o===to.mapValue)return 0;if(r===to.mapValue)return 1;if(o===to.mapValue)return-1;const a=r.fields||{},l=Object.keys(a),u=o.fields||{},h=Object.keys(u);l.sort(),h.sort();for(let d=0;d<l.length&&d<h.length;++d){const p=$l(l[d],h[d]);if(p!==0)return p;const y=ri(a[l[d]],u[h[d]]);if(y!==0)return y}return ct(l.length,h.length)})(n.mapValue,t.mapValue);default:throw G(23264,{he:e})}}function Xh(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return ct(n,t);const e=Qn(n),s=Qn(t),i=ct(e.seconds,s.seconds);return i!==0?i:ct(e.nanos,s.nanos)}function Jh(n,t){const e=n.values||[],s=t.values||[];for(let i=0;i<e.length&&i<s.length;++i){const r=ri(e[i],s[i]);if(r)return r}return ct(e.length,s.length)}function oi(n){return zl(n)}function zl(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(e){const s=Qn(e);return`time(${s.seconds},${s.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(e){return Xn(e).toBase64()})(n.bytesValue):"referenceValue"in n?(function(e){return W.fromName(e).toString()})(n.referenceValue):"geoPointValue"in n?(function(e){return`geo(${e.latitude},${e.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(e){let s="[",i=!0;for(const r of e.values||[])i?i=!1:s+=",",s+=zl(r);return s+"]"})(n.arrayValue):"mapValue"in n?(function(e){const s=Object.keys(e.fields||{}).sort();let i="{",r=!0;for(const o of s)r?r=!1:i+=",",i+=`${o}:${zl(e.fields[o])}`;return i+"}"})(n.mapValue):G(61005,{value:n})}function Io(n){switch(Jn(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=wa(n);return t?16+Io(t):16;case 5:return 2*n.stringValue.length;case 6:return Xn(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((i,r)=>i+Io(r)),0)})(n.arrayValue);case 10:case 11:return(function(s){let i=0;return Rs(s.fields,((r,o)=>{i+=r.length+Io(o)})),i})(n.mapValue);default:throw G(13486,{value:n})}}function jl(n){return!!n&&"integerValue"in n}function Cc(n){return!!n&&"arrayValue"in n}function Zh(n){return!!n&&"nullValue"in n}function td(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function So(n){return!!n&&"mapValue"in n}function fE(n){var e,s;return((s=(((e=n==null?void 0:n.mapValue)==null?void 0:e.fields)||{})[gg])==null?void 0:s.stringValue)===mg}function Ji(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const t={mapValue:{fields:{}}};return Rs(n.mapValue.fields,((e,s)=>t.mapValue.fields[e]=Ji(s))),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Ji(n.arrayValue.values[e]);return t}return{...n}}function pE(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===dE}/**
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
 */class ke{constructor(t){this.value=t}static empty(){return new ke({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let s=0;s<t.length-1;++s)if(e=(e.mapValue.fields||{})[t.get(s)],!So(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Ji(e)}setAll(t){let e=se.emptyPath(),s={},i=[];t.forEach(((o,a)=>{if(!e.isImmediateParentOf(a)){const l=this.getFieldsMap(e);this.applyChanges(l,s,i),s={},i=[],e=a.popLast()}o?s[a.lastSegment()]=Ji(o):i.push(a.lastSegment())}));const r=this.getFieldsMap(e);this.applyChanges(r,s,i)}delete(t){const e=this.field(t.popLast());So(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return tn(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let s=0;s<t.length;++s){let i=e.mapValue.fields[t.get(s)];So(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(s)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,s){Rs(e,((i,r)=>t[i]=r));for(const i of s)delete t[i]}clone(){return new ke(Ji(this.value))}}function _g(n){const t=[];return Rs(n.fields,((e,s)=>{const i=new se([e]);if(So(s)){const r=_g(s.mapValue).fields;if(r.length===0)t.push(i);else for(const o of r)t.push(i.child(o))}else t.push(i)})),new Ne(t)}/**
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
 */class ce{constructor(t,e,s,i,r,o,a){this.key=t,this.documentType=e,this.version=s,this.readTime=i,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(t){return new ce(t,0,J.min(),J.min(),J.min(),ke.empty(),0)}static newFoundDocument(t,e,s,i){return new ce(t,1,e,J.min(),s,i,0)}static newNoDocument(t,e){return new ce(t,2,e,J.min(),J.min(),ke.empty(),0)}static newUnknownDocument(t,e){return new ce(t,3,e,J.min(),J.min(),ke.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(J.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=ke.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=ke.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=J.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof ce&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new ce(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Yo{constructor(t,e){this.position=t,this.inclusive=e}}function ed(n,t,e){let s=0;for(let i=0;i<n.position.length;i++){const r=t[i],o=n.position[i];if(r.field.isKeyField()?s=W.comparator(W.fromName(o.referenceValue),e.key):s=ri(o,e.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function nd(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!tn(n.position[e],t.position[e]))return!1;return!0}/**
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
 */class Qo{constructor(t,e="asc"){this.field=t,this.dir=e}}function gE(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
 */class yg{}class Kt extends yg{constructor(t,e,s){super(),this.field=t,this.op=e,this.value=s}static create(t,e,s){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,s):new _E(t,e,s):e==="array-contains"?new vE(t,s):e==="in"?new EE(t,s):e==="not-in"?new wE(t,s):e==="array-contains-any"?new TE(t,s):new Kt(t,e,s)}static createKeyFieldInFilter(t,e,s){return e==="in"?new yE(t,s):new bE(t,s)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&e.nullValue===void 0&&this.matchesComparison(ri(e,this.value)):e!==null&&Jn(this.value)===Jn(e)&&this.matchesComparison(ri(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return G(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class en extends yg{constructor(t,e){super(),this.filters=t,this.op=e,this.Pe=null}static create(t,e){return new en(t,e)}matches(t){return bg(this)?this.filters.find((e=>!e.matches(t)))===void 0:this.filters.find((e=>e.matches(t)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function bg(n){return n.op==="and"}function vg(n){return mE(n)&&bg(n)}function mE(n){for(const t of n.filters)if(t instanceof en)return!1;return!0}function Hl(n){if(n instanceof Kt)return n.field.canonicalString()+n.op.toString()+oi(n.value);if(vg(n))return n.filters.map((t=>Hl(t))).join(",");{const t=n.filters.map((e=>Hl(e))).join(",");return`${n.op}(${t})`}}function Eg(n,t){return n instanceof Kt?(function(s,i){return i instanceof Kt&&s.op===i.op&&s.field.isEqual(i.field)&&tn(s.value,i.value)})(n,t):n instanceof en?(function(s,i){return i instanceof en&&s.op===i.op&&s.filters.length===i.filters.length?s.filters.reduce(((r,o,a)=>r&&Eg(o,i.filters[a])),!0):!1})(n,t):void G(19439)}function wg(n){return n instanceof Kt?(function(e){return`${e.field.canonicalString()} ${e.op} ${oi(e.value)}`})(n):n instanceof en?(function(e){return e.op.toString()+" {"+e.getFilters().map(wg).join(" ,")+"}"})(n):"Filter"}class _E extends Kt{constructor(t,e,s){super(t,e,s),this.key=W.fromName(s.referenceValue)}matches(t){const e=W.comparator(t.key,this.key);return this.matchesComparison(e)}}class yE extends Kt{constructor(t,e){super(t,"in",e),this.keys=Tg("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class bE extends Kt{constructor(t,e){super(t,"not-in",e),this.keys=Tg("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function Tg(n,t){var e;return(((e=t.arrayValue)==null?void 0:e.values)||[]).map((s=>W.fromName(s.referenceValue)))}class vE extends Kt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Cc(e)&&gr(e.arrayValue,this.value)}}class EE extends Kt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&gr(this.value.arrayValue,e)}}class wE extends Kt{constructor(t,e){super(t,"not-in",e)}matches(t){if(gr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&e.nullValue===void 0&&!gr(this.value.arrayValue,e)}}class TE extends Kt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Cc(e)||!e.arrayValue.values)&&e.arrayValue.values.some((s=>gr(this.value.arrayValue,s)))}}/**
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
 */class IE{constructor(t,e=null,s=[],i=[],r=null,o=null,a=null){this.path=t,this.collectionGroup=e,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this.Te=null}}function sd(n,t=null,e=[],s=[],i=null,r=null,o=null){return new IE(n,t,e,s,i,r,o)}function Dc(n){const t=Z(n);if(t.Te===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((s=>Hl(s))).join(","),e+="|ob:",e+=t.orderBy.map((s=>(function(r){return r.field.canonicalString()+r.dir})(s))).join(","),Ea(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((s=>oi(s))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((s=>oi(s))).join(",")),t.Te=e}return t.Te}function Mc(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!gE(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!Eg(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!nd(n.startAt,t.startAt)&&nd(n.endAt,t.endAt)}function Wl(n){return W.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Ta{constructor(t,e=null,s=[],i=[],r=null,o="F",a=null,l=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=l,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function SE(n,t,e,s,i,r,o,a){return new Ta(n,t,e,s,i,r,o,a)}function Oc(n){return new Ta(n)}function id(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function xE(n){return W.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function AE(n){return n.collectionGroup!==null}function Zi(n){const t=Z(n);if(t.Ie===null){t.Ie=[];const e=new Set;for(const r of t.explicitOrderBy)t.Ie.push(r),e.add(r.field.canonicalString());const s=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Qt(se.comparator);return o.filters.forEach((l=>{l.getFlattenedFilters().forEach((u=>{u.isInequality()&&(a=a.add(u.field))}))})),a})(t).forEach((r=>{e.has(r.canonicalString())||r.isKeyField()||t.Ie.push(new Qo(r,s))})),e.has(se.keyField().canonicalString())||t.Ie.push(new Qo(se.keyField(),s))}return t.Ie}function Ye(n){const t=Z(n);return t.Ee||(t.Ee=PE(t,Zi(n))),t.Ee}function PE(n,t){if(n.limitType==="F")return sd(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map((i=>{const r=i.dir==="desc"?"asc":"desc";return new Qo(i.field,r)}));const e=n.endAt?new Yo(n.endAt.position,n.endAt.inclusive):null,s=n.startAt?new Yo(n.startAt.position,n.startAt.inclusive):null;return sd(n.path,n.collectionGroup,t,n.filters,n.limit,e,s)}}function ql(n,t,e){return new Ta(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function Ia(n,t){return Mc(Ye(n),Ye(t))&&n.limitType===t.limitType}function Ig(n){return`${Dc(Ye(n))}|lt:${n.limitType}`}function zs(n){return`Query(target=${(function(e){let s=e.path.canonicalString();return e.collectionGroup!==null&&(s+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(s+=`, filters: [${e.filters.map((i=>wg(i))).join(", ")}]`),Ea(e.limit)||(s+=", limit: "+e.limit),e.orderBy.length>0&&(s+=`, orderBy: [${e.orderBy.map((i=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(i))).join(", ")}]`),e.startAt&&(s+=", startAt: ",s+=e.startAt.inclusive?"b:":"a:",s+=e.startAt.position.map((i=>oi(i))).join(",")),e.endAt&&(s+=", endAt: ",s+=e.endAt.inclusive?"a:":"b:",s+=e.endAt.position.map((i=>oi(i))).join(",")),`Target(${s})`})(Ye(n))}; limitType=${n.limitType})`}function Sa(n,t){return t.isFoundDocument()&&(function(s,i){const r=i.key.path;return s.collectionGroup!==null?i.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(r):W.isDocumentKey(s.path)?s.path.isEqual(r):s.path.isImmediateParentOf(r)})(n,t)&&(function(s,i){for(const r of Zi(s))if(!r.field.isKeyField()&&i.data.field(r.field)===null)return!1;return!0})(n,t)&&(function(s,i){for(const r of s.filters)if(!r.matches(i))return!1;return!0})(n,t)&&(function(s,i){return!(s.startAt&&!(function(o,a,l){const u=ed(o,a,l);return o.inclusive?u<=0:u<0})(s.startAt,Zi(s),i)||s.endAt&&!(function(o,a,l){const u=ed(o,a,l);return o.inclusive?u>=0:u>0})(s.endAt,Zi(s),i))})(n,t)}function kE(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Sg(n){return(t,e)=>{let s=!1;for(const i of Zi(n)){const r=RE(i,t,e);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function RE(n,t,e){const s=n.field.isKeyField()?W.comparator(t.key,e.key):(function(r,o,a){const l=o.data.field(r),u=a.data.field(r);return l!==null&&u!==null?ri(l,u):G(42886)})(n.field,t,e);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return G(19790,{direction:n.dir})}}/**
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
 */class Cs{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),s=this.inner[e];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,t))return r}}has(t){return this.get(t)!==void 0}set(t,e){const s=this.mapKeyFn(t),i=this.inner[s];if(i===void 0)return this.inner[s]=[[t,e]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],t))return void(i[r]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),s=this.inner[e];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return s.length===1?delete this.inner[e]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(t){Rs(this.inner,((e,s)=>{for(const[i,r]of s)t(i,r)}))}isEmpty(){return cg(this.inner)}size(){return this.innerSize}}/**
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
 */const CE=new Lt(W.comparator);function En(){return CE}const xg=new Lt(W.comparator);function zi(...n){let t=xg;for(const e of n)t=t.insert(e.key,e);return t}function Ag(n){let t=xg;return n.forEach(((e,s)=>t=t.insert(e,s.overlayedDocument))),t}function ps(){return tr()}function Pg(){return tr()}function tr(){return new Cs((n=>n.toString()),((n,t)=>n.isEqual(t)))}const DE=new Lt(W.comparator),ME=new Qt(W.comparator);function ut(...n){let t=ME;for(const e of n)t=t.add(e);return t}const OE=new Qt(ct);function LE(){return OE}/**
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
 */function Lc(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:qo(t)?"-0":t}}function kg(n){return{integerValue:""+n}}function VE(n,t){return oE(t)?kg(t):Lc(n,t)}/**
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
 */class xa{constructor(){this._=void 0}}function NE(n,t,e){return n instanceof Xo?(function(i,r){const o={fields:{[dg]:{stringValue:hg},[pg]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return r&&Rc(r)&&(r=wa(r)),r&&(o.fields[fg]=r),{mapValue:o}})(e,t):n instanceof mr?Cg(n,t):n instanceof _r?Dg(n,t):(function(i,r){const o=Rg(i,r),a=rd(o)+rd(i.Ae);return jl(o)&&jl(i.Ae)?kg(a):Lc(i.serializer,a)})(n,t)}function FE(n,t,e){return n instanceof mr?Cg(n,t):n instanceof _r?Dg(n,t):e}function Rg(n,t){return n instanceof Jo?(function(s){return jl(s)||(function(r){return!!r&&"doubleValue"in r})(s)})(t)?t:{integerValue:0}:null}class Xo extends xa{}class mr extends xa{constructor(t){super(),this.elements=t}}function Cg(n,t){const e=Mg(t);for(const s of n.elements)e.some((i=>tn(i,s)))||e.push(s);return{arrayValue:{values:e}}}class _r extends xa{constructor(t){super(),this.elements=t}}function Dg(n,t){let e=Mg(t);for(const s of n.elements)e=e.filter((i=>!tn(i,s)));return{arrayValue:{values:e}}}class Jo extends xa{constructor(t,e){super(),this.serializer=t,this.Ae=e}}function rd(n){return Bt(n.integerValue||n.doubleValue)}function Mg(n){return Cc(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function UE(n,t){return n.field.isEqual(t.field)&&(function(s,i){return s instanceof mr&&i instanceof mr||s instanceof _r&&i instanceof _r?ii(s.elements,i.elements,tn):s instanceof Jo&&i instanceof Jo?tn(s.Ae,i.Ae):s instanceof Xo&&i instanceof Xo})(n.transform,t.transform)}class BE{constructor(t,e){this.version=t,this.transformResults=e}}class _n{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new _n}static exists(t){return new _n(void 0,t)}static updateTime(t){return new _n(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function xo(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class Aa{}function Og(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new Vg(n.key,_n.none()):new Mr(n.key,n.data,_n.none());{const e=n.data,s=ke.empty();let i=new Qt(se.comparator);for(let r of t.fields)if(!i.has(r)){let o=e.field(r);o===null&&r.length>1&&(r=r.popLast(),o=e.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new Ds(n.key,s,new Ne(i.toArray()),_n.none())}}function $E(n,t,e){n instanceof Mr?(function(i,r,o){const a=i.value.clone(),l=ad(i.fieldTransforms,r,o.transformResults);a.setAll(l),r.convertToFoundDocument(o.version,a).setHasCommittedMutations()})(n,t,e):n instanceof Ds?(function(i,r,o){if(!xo(i.precondition,r))return void r.convertToUnknownDocument(o.version);const a=ad(i.fieldTransforms,r,o.transformResults),l=r.data;l.setAll(Lg(i)),l.setAll(a),r.convertToFoundDocument(o.version,l).setHasCommittedMutations()})(n,t,e):(function(i,r,o){r.convertToNoDocument(o.version).setHasCommittedMutations()})(0,t,e)}function er(n,t,e,s){return n instanceof Mr?(function(r,o,a,l){if(!xo(r.precondition,o))return a;const u=r.value.clone(),h=ld(r.fieldTransforms,l,o);return u.setAll(h),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null})(n,t,e,s):n instanceof Ds?(function(r,o,a,l){if(!xo(r.precondition,o))return a;const u=ld(r.fieldTransforms,l,o),h=o.data;return h.setAll(Lg(r)),h.setAll(u),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map((d=>d.field)))})(n,t,e,s):(function(r,o,a){return xo(r.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a})(n,t,e)}function zE(n,t){let e=null;for(const s of n.fieldTransforms){const i=t.data.field(s.field),r=Rg(s.transform,i||null);r!=null&&(e===null&&(e=ke.empty()),e.set(s.field,r))}return e||null}function od(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!(function(s,i){return s===void 0&&i===void 0||!(!s||!i)&&ii(s,i,((r,o)=>UE(r,o)))})(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class Mr extends Aa{constructor(t,e,s,i=[]){super(),this.key=t,this.value=e,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ds extends Aa{constructor(t,e,s,i,r=[]){super(),this.key=t,this.data=e,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function Lg(n){const t=new Map;return n.fieldMask.fields.forEach((e=>{if(!e.isEmpty()){const s=n.data.field(e);t.set(e,s)}})),t}function ad(n,t,e){const s=new Map;vt(n.length===e.length,32656,{Ve:e.length,de:n.length});for(let i=0;i<e.length;i++){const r=n[i],o=r.transform,a=t.data.field(r.field);s.set(r.field,FE(o,a,e[i]))}return s}function ld(n,t,e){const s=new Map;for(const i of n){const r=i.transform,o=e.data.field(i.field);s.set(i.field,NE(r,o,t))}return s}class Vg extends Aa{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class jE extends Aa{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class HE{constructor(t,e,s,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(t,e){const s=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(t.key)&&$E(r,t,s[i])}}applyToLocalView(t,e){for(const s of this.baseMutations)s.key.isEqual(t.key)&&(e=er(s,t,e,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(t.key)&&(e=er(s,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const s=Pg();return this.mutations.forEach((i=>{const r=t.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=e.has(i.key)?null:a;const l=Og(o,a);l!==null&&s.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(J.min())})),s}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),ut())}isEqual(t){return this.batchId===t.batchId&&ii(this.mutations,t.mutations,((e,s)=>od(e,s)))&&ii(this.baseMutations,t.baseMutations,((e,s)=>od(e,s)))}}class Vc{constructor(t,e,s,i){this.batch=t,this.commitVersion=e,this.mutationResults=s,this.docVersions=i}static from(t,e,s){vt(t.mutations.length===s.length,58842,{me:t.mutations.length,fe:s.length});let i=(function(){return DE})();const r=t.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new Vc(t,e,s,i)}}/**
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
 */class WE{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class qE{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
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
 */var jt,pt;function KE(n){switch(n){case N.OK:return G(64938);case N.CANCELLED:case N.UNKNOWN:case N.DEADLINE_EXCEEDED:case N.RESOURCE_EXHAUSTED:case N.INTERNAL:case N.UNAVAILABLE:case N.UNAUTHENTICATED:return!1;case N.INVALID_ARGUMENT:case N.NOT_FOUND:case N.ALREADY_EXISTS:case N.PERMISSION_DENIED:case N.FAILED_PRECONDITION:case N.ABORTED:case N.OUT_OF_RANGE:case N.UNIMPLEMENTED:case N.DATA_LOSS:return!0;default:return G(15467,{code:n})}}function Ng(n){if(n===void 0)return vn("GRPC error has no .code"),N.UNKNOWN;switch(n){case jt.OK:return N.OK;case jt.CANCELLED:return N.CANCELLED;case jt.UNKNOWN:return N.UNKNOWN;case jt.DEADLINE_EXCEEDED:return N.DEADLINE_EXCEEDED;case jt.RESOURCE_EXHAUSTED:return N.RESOURCE_EXHAUSTED;case jt.INTERNAL:return N.INTERNAL;case jt.UNAVAILABLE:return N.UNAVAILABLE;case jt.UNAUTHENTICATED:return N.UNAUTHENTICATED;case jt.INVALID_ARGUMENT:return N.INVALID_ARGUMENT;case jt.NOT_FOUND:return N.NOT_FOUND;case jt.ALREADY_EXISTS:return N.ALREADY_EXISTS;case jt.PERMISSION_DENIED:return N.PERMISSION_DENIED;case jt.FAILED_PRECONDITION:return N.FAILED_PRECONDITION;case jt.ABORTED:return N.ABORTED;case jt.OUT_OF_RANGE:return N.OUT_OF_RANGE;case jt.UNIMPLEMENTED:return N.UNIMPLEMENTED;case jt.DATA_LOSS:return N.DATA_LOSS;default:return G(39323,{code:n})}}(pt=jt||(jt={}))[pt.OK=0]="OK",pt[pt.CANCELLED=1]="CANCELLED",pt[pt.UNKNOWN=2]="UNKNOWN",pt[pt.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",pt[pt.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",pt[pt.NOT_FOUND=5]="NOT_FOUND",pt[pt.ALREADY_EXISTS=6]="ALREADY_EXISTS",pt[pt.PERMISSION_DENIED=7]="PERMISSION_DENIED",pt[pt.UNAUTHENTICATED=16]="UNAUTHENTICATED",pt[pt.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",pt[pt.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",pt[pt.ABORTED=10]="ABORTED",pt[pt.OUT_OF_RANGE=11]="OUT_OF_RANGE",pt[pt.UNIMPLEMENTED=12]="UNIMPLEMENTED",pt[pt.INTERNAL=13]="INTERNAL",pt[pt.UNAVAILABLE=14]="UNAVAILABLE",pt[pt.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function GE(){return new TextEncoder}/**
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
 */const YE=new Wn([4294967295,4294967295],0);function cd(n){const t=GE().encode(n),e=new Zp;return e.update(t),new Uint8Array(e.digest())}function ud(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),s=t.getUint32(4,!0),i=t.getUint32(8,!0),r=t.getUint32(12,!0);return[new Wn([e,s],0),new Wn([i,r],0)]}class Nc{constructor(t,e,s){if(this.bitmap=t,this.padding=e,this.hashCount=s,e<0||e>=8)throw new ji(`Invalid padding: ${e}`);if(s<0)throw new ji(`Invalid hash count: ${s}`);if(t.length>0&&this.hashCount===0)throw new ji(`Invalid hash count: ${s}`);if(t.length===0&&e!==0)throw new ji(`Invalid padding when bitmap length is 0: ${e}`);this.ge=8*t.length-e,this.pe=Wn.fromNumber(this.ge)}ye(t,e,s){let i=t.add(e.multiply(Wn.fromNumber(s)));return i.compare(YE)===1&&(i=new Wn([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.ge===0)return!1;const e=cd(t),[s,i]=ud(e);for(let r=0;r<this.hashCount;r++){const o=this.ye(s,i,r);if(!this.we(o))return!1}return!0}static create(t,e,s){const i=t%8==0?0:8-t%8,r=new Uint8Array(Math.ceil(t/8)),o=new Nc(r,i,e);return s.forEach((a=>o.insert(a))),o}insert(t){if(this.ge===0)return;const e=cd(t),[s,i]=ud(e);for(let r=0;r<this.hashCount;r++){const o=this.ye(s,i,r);this.be(o)}}be(t){const e=Math.floor(t/8),s=t%8;this.bitmap[e]|=1<<s}}class ji extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Pa{constructor(t,e,s,i,r){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(t,e,s){const i=new Map;return i.set(t,Or.createSynthesizedTargetChangeForCurrentChange(t,e,s)),new Pa(J.min(),i,new Lt(ct),En(),ut())}}class Or{constructor(t,e,s,i,r){this.resumeToken=t,this.current=e,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(t,e,s){return new Or(s,e,ut(),ut(),ut())}}/**
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
 */class Ao{constructor(t,e,s,i){this.Se=t,this.removedTargetIds=e,this.key=s,this.De=i}}class Fg{constructor(t,e){this.targetId=t,this.Ce=e}}class Ug{constructor(t,e,s=ie.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=s,this.cause=i}}class hd{constructor(){this.ve=0,this.Fe=dd(),this.Me=ie.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(t){t.approximateByteSize()>0&&(this.Oe=!0,this.Me=t)}ke(){let t=ut(),e=ut(),s=ut();return this.Fe.forEach(((i,r)=>{switch(r){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:s=s.add(i);break;default:G(38017,{changeType:r})}})),new Or(this.Me,this.xe,t,e,s)}Ke(){this.Oe=!1,this.Fe=dd()}qe(t,e){this.Oe=!0,this.Fe=this.Fe.insert(t,e)}Ue(t){this.Oe=!0,this.Fe=this.Fe.remove(t)}$e(){this.ve+=1}We(){this.ve-=1,vt(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class QE{constructor(t){this.Ge=t,this.ze=new Map,this.je=En(),this.He=eo(),this.Je=eo(),this.Ze=new Lt(ct)}Xe(t){for(const e of t.Se)t.De&&t.De.isFoundDocument()?this.Ye(e,t.De):this.et(e,t.key,t.De);for(const e of t.removedTargetIds)this.et(e,t.key,t.De)}tt(t){this.forEachTarget(t,(e=>{const s=this.nt(e);switch(t.state){case 0:this.rt(e)&&s.Le(t.resumeToken);break;case 1:s.We(),s.Ne||s.Ke(),s.Le(t.resumeToken);break;case 2:s.We(),s.Ne||this.removeTarget(e);break;case 3:this.rt(e)&&(s.Qe(),s.Le(t.resumeToken));break;case 4:this.rt(e)&&(this.it(e),s.Le(t.resumeToken));break;default:G(56790,{state:t.state})}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.ze.forEach(((s,i)=>{this.rt(i)&&e(i)}))}st(t){const e=t.targetId,s=t.Ce.count,i=this.ot(e);if(i){const r=i.target;if(Wl(r))if(s===0){const o=new W(r.path);this.et(e,o,ce.newNoDocument(o,J.min()))}else vt(s===1,20013,{expectedCount:s});else{const o=this._t(e);if(o!==s){const a=this.ut(t),l=a?this.ct(a,t,o):1;if(l!==0){this.it(e);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(e,u)}}}}}ut(t){const e=t.Ce.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:s="",padding:i=0},hashCount:r=0}=e;let o,a;try{o=Xn(s).toUint8Array()}catch(l){if(l instanceof ug)return Ss("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new Nc(o,i,r)}catch(l){return Ss(l instanceof ji?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.ge===0?null:a}ct(t,e,s){return e.Ce.count===s-this.Pt(t,e.targetId)?0:2}Pt(t,e){const s=this.Ge.getRemoteKeysForTarget(e);let i=0;return s.forEach((r=>{const o=this.Ge.ht(),a=`projects/${o.projectId}/databases/${o.database}/documents/${r.path.canonicalString()}`;t.mightContain(a)||(this.et(e,r,null),i++)})),i}Tt(t){const e=new Map;this.ze.forEach(((r,o)=>{const a=this.ot(o);if(a){if(r.current&&Wl(a.target)){const l=new W(a.target.path);this.It(l).has(o)||this.Et(o,l)||this.et(o,l,ce.newNoDocument(l,t))}r.Be&&(e.set(o,r.ke()),r.Ke())}}));let s=ut();this.Je.forEach(((r,o)=>{let a=!0;o.forEachWhile((l=>{const u=this.ot(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)})),a&&(s=s.add(r))})),this.je.forEach(((r,o)=>o.setReadTime(t)));const i=new Pa(t,e,this.Ze,this.je,s);return this.je=En(),this.He=eo(),this.Je=eo(),this.Ze=new Lt(ct),i}Ye(t,e){if(!this.rt(t))return;const s=this.Et(t,e.key)?2:0;this.nt(t).qe(e.key,s),this.je=this.je.insert(e.key,e),this.He=this.He.insert(e.key,this.It(e.key).add(t)),this.Je=this.Je.insert(e.key,this.Rt(e.key).add(t))}et(t,e,s){if(!this.rt(t))return;const i=this.nt(t);this.Et(t,e)?i.qe(e,1):i.Ue(e),this.Je=this.Je.insert(e,this.Rt(e).delete(t)),this.Je=this.Je.insert(e,this.Rt(e).add(t)),s&&(this.je=this.je.insert(e,s))}removeTarget(t){this.ze.delete(t)}_t(t){const e=this.nt(t).ke();return this.Ge.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}$e(t){this.nt(t).$e()}nt(t){let e=this.ze.get(t);return e||(e=new hd,this.ze.set(t,e)),e}Rt(t){let e=this.Je.get(t);return e||(e=new Qt(ct),this.Je=this.Je.insert(t,e)),e}It(t){let e=this.He.get(t);return e||(e=new Qt(ct),this.He=this.He.insert(t,e)),e}rt(t){const e=this.ot(t)!==null;return e||U("WatchChangeAggregator","Detected inactive target",t),e}ot(t){const e=this.ze.get(t);return e&&e.Ne?null:this.Ge.At(t)}it(t){this.ze.set(t,new hd),this.Ge.getRemoteKeysForTarget(t).forEach((e=>{this.et(t,e,null)}))}Et(t,e){return this.Ge.getRemoteKeysForTarget(t).has(e)}}function eo(){return new Lt(W.comparator)}function dd(){return new Lt(W.comparator)}const XE={asc:"ASCENDING",desc:"DESCENDING"},JE={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},ZE={and:"AND",or:"OR"};class tw{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Kl(n,t){return n.useProto3Json||Ea(t)?t:{value:t}}function Zo(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Bg(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function ew(n,t){return Zo(n,t.toTimestamp())}function Qe(n){return vt(!!n,49232),J.fromTimestamp((function(e){const s=Qn(e);return new Ct(s.seconds,s.nanos)})(n))}function Fc(n,t){return Gl(n,t).canonicalString()}function Gl(n,t){const e=(function(i){return new Mt(["projects",i.projectId,"databases",i.database])})(n).child("documents");return t===void 0?e:e.child(t)}function $g(n){const t=Mt.fromString(n);return vt(qg(t),10190,{key:t.toString()}),t}function Yl(n,t){return Fc(n.databaseId,t.path)}function hl(n,t){const e=$g(t);if(e.get(1)!==n.databaseId.projectId)throw new H(N.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new H(N.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new W(jg(e))}function zg(n,t){return Fc(n.databaseId,t)}function nw(n){const t=$g(n);return t.length===4?Mt.emptyPath():jg(t)}function Ql(n){return new Mt(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function jg(n){return vt(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function fd(n,t,e){return{name:Yl(n,t),fields:e.value.mapValue.fields}}function sw(n,t){let e;if("targetChange"in t){t.targetChange;const s=(function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:G(39313,{state:u})})(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],r=(function(u,h){return u.useProto3Json?(vt(h===void 0||typeof h=="string",58123),ie.fromBase64String(h||"")):(vt(h===void 0||h instanceof Buffer||h instanceof Uint8Array,16193),ie.fromUint8Array(h||new Uint8Array))})(n,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&(function(u){const h=u.code===void 0?N.UNKNOWN:Ng(u.code);return new H(h,u.message||"")})(o);e=new Ug(s,i,r,a||null)}else if("documentChange"in t){t.documentChange;const s=t.documentChange;s.document,s.document.name,s.document.updateTime;const i=hl(n,s.document.name),r=Qe(s.document.updateTime),o=s.document.createTime?Qe(s.document.createTime):J.min(),a=new ke({mapValue:{fields:s.document.fields}}),l=ce.newFoundDocument(i,r,o,a),u=s.targetIds||[],h=s.removedTargetIds||[];e=new Ao(u,h,l.key,l)}else if("documentDelete"in t){t.documentDelete;const s=t.documentDelete;s.document;const i=hl(n,s.document),r=s.readTime?Qe(s.readTime):J.min(),o=ce.newNoDocument(i,r),a=s.removedTargetIds||[];e=new Ao([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const s=t.documentRemove;s.document;const i=hl(n,s.document),r=s.removedTargetIds||[];e=new Ao([],r,i,null)}else{if(!("filter"in t))return G(11601,{Vt:t});{t.filter;const s=t.filter;s.targetId;const{count:i=0,unchangedNames:r}=s,o=new qE(i,r),a=s.targetId;e=new Fg(a,o)}}return e}function iw(n,t){let e;if(t instanceof Mr)e={update:fd(n,t.key,t.value)};else if(t instanceof Vg)e={delete:Yl(n,t.key)};else if(t instanceof Ds)e={update:fd(n,t.key,t.data),updateMask:fw(t.fieldMask)};else{if(!(t instanceof jE))return G(16599,{dt:t.type});e={verify:Yl(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map((s=>(function(r,o){const a=o.transform;if(a instanceof Xo)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof mr)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof _r)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Jo)return{fieldPath:o.field.canonicalString(),increment:a.Ae};throw G(20930,{transform:o.transform})})(0,s)))),t.precondition.isNone||(e.currentDocument=(function(i,r){return r.updateTime!==void 0?{updateTime:ew(i,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:G(27497)})(n,t.precondition)),e}function rw(n,t){return n&&n.length>0?(vt(t!==void 0,14353),n.map((e=>(function(i,r){let o=i.updateTime?Qe(i.updateTime):Qe(r);return o.isEqual(J.min())&&(o=Qe(r)),new BE(o,i.transformResults||[])})(e,t)))):[]}function ow(n,t){return{documents:[zg(n,t.path)]}}function aw(n,t){const e={structuredQuery:{}},s=t.path;let i;t.collectionGroup!==null?(i=s,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=s.popLast(),e.structuredQuery.from=[{collectionId:s.lastSegment()}]),e.parent=zg(n,i);const r=(function(u){if(u.length!==0)return Wg(en.create(u,"and"))})(t.filters);r&&(e.structuredQuery.where=r);const o=(function(u){if(u.length!==0)return u.map((h=>(function(p){return{field:js(p.field),direction:uw(p.dir)}})(h)))})(t.orderBy);o&&(e.structuredQuery.orderBy=o);const a=Kl(n,t.limit);return a!==null&&(e.structuredQuery.limit=a),t.startAt&&(e.structuredQuery.startAt=(function(u){return{before:u.inclusive,values:u.position}})(t.startAt)),t.endAt&&(e.structuredQuery.endAt=(function(u){return{before:!u.inclusive,values:u.position}})(t.endAt)),{ft:e,parent:i}}function lw(n){let t=nw(n.parent);const e=n.structuredQuery,s=e.from?e.from.length:0;let i=null;if(s>0){vt(s===1,65062);const h=e.from[0];h.allDescendants?i=h.collectionId:t=t.child(h.collectionId)}let r=[];e.where&&(r=(function(d){const p=Hg(d);return p instanceof en&&vg(p)?p.getFilters():[p]})(e.where));let o=[];e.orderBy&&(o=(function(d){return d.map((p=>(function(E){return new Qo(Hs(E.field),(function(I){switch(I){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(E.direction))})(p)))})(e.orderBy));let a=null;e.limit&&(a=(function(d){let p;return p=typeof d=="object"?d.value:d,Ea(p)?null:p})(e.limit));let l=null;e.startAt&&(l=(function(d){const p=!!d.before,y=d.values||[];return new Yo(y,p)})(e.startAt));let u=null;return e.endAt&&(u=(function(d){const p=!d.before,y=d.values||[];return new Yo(y,p)})(e.endAt)),SE(t,i,o,r,a,"F",l,u)}function cw(n,t){const e=(function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return G(28987,{purpose:i})}})(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Hg(n){return n.unaryFilter!==void 0?(function(e){switch(e.unaryFilter.op){case"IS_NAN":const s=Hs(e.unaryFilter.field);return Kt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const i=Hs(e.unaryFilter.field);return Kt.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Hs(e.unaryFilter.field);return Kt.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Hs(e.unaryFilter.field);return Kt.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return G(61313);default:return G(60726)}})(n):n.fieldFilter!==void 0?(function(e){return Kt.create(Hs(e.fieldFilter.field),(function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return G(58110);default:return G(50506)}})(e.fieldFilter.op),e.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(e){return en.create(e.compositeFilter.filters.map((s=>Hg(s))),(function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return G(1026)}})(e.compositeFilter.op))})(n):G(30097,{filter:n})}function uw(n){return XE[n]}function hw(n){return JE[n]}function dw(n){return ZE[n]}function js(n){return{fieldPath:n.canonicalString()}}function Hs(n){return se.fromServerFormat(n.fieldPath)}function Wg(n){return n instanceof Kt?(function(e){if(e.op==="=="){if(td(e.value))return{unaryFilter:{field:js(e.field),op:"IS_NAN"}};if(Zh(e.value))return{unaryFilter:{field:js(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(td(e.value))return{unaryFilter:{field:js(e.field),op:"IS_NOT_NAN"}};if(Zh(e.value))return{unaryFilter:{field:js(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:js(e.field),op:hw(e.op),value:e.value}}})(n):n instanceof en?(function(e){const s=e.getFilters().map((i=>Wg(i)));return s.length===1?s[0]:{compositeFilter:{op:dw(e.op),filters:s}}})(n):G(54877,{filter:n})}function fw(n){const t=[];return n.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function qg(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}function Kg(n){return!!n&&typeof n._toProto=="function"&&n._protoValueType==="ProtoValue"}/**
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
 */class Ln{constructor(t,e,s,i,r=J.min(),o=J.min(),a=ie.EMPTY_BYTE_STRING,l=null){this.target=t,this.targetId=e,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(t){return new Ln(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Ln(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Ln(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Ln(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class pw{constructor(t){this.yt=t}}function gw(n){const t=lw({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?ql(t,t.limit,"L"):t}/**
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
 */class mw{constructor(){this.Sn=new _w}addToCollectionParentIndex(t,e){return this.Sn.add(e),V.resolve()}getCollectionParents(t,e){return V.resolve(this.Sn.getEntries(e))}addFieldIndex(t,e){return V.resolve()}deleteFieldIndex(t,e){return V.resolve()}deleteAllFieldIndexes(t){return V.resolve()}createTargetIndexes(t,e){return V.resolve()}getDocumentsMatchingTarget(t,e){return V.resolve(null)}getIndexType(t,e){return V.resolve(0)}getFieldIndexes(t,e){return V.resolve([])}getNextCollectionGroupToUpdate(t){return V.resolve(null)}getMinOffset(t,e){return V.resolve(Yn.min())}getMinOffsetFromCollectionGroup(t,e){return V.resolve(Yn.min())}updateCollectionGroup(t,e,s){return V.resolve()}updateIndexEntries(t,e){return V.resolve()}}class _w{constructor(){this.index={}}add(t){const e=t.lastSegment(),s=t.popLast(),i=this.index[e]||new Qt(Mt.comparator),r=!i.has(s);return this.index[e]=i.add(s),r}has(t){const e=t.lastSegment(),s=t.popLast(),i=this.index[e];return i&&i.has(s)}getEntries(t){return(this.index[t]||new Qt(Mt.comparator)).toArray()}}/**
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
 */const pd={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Gg=41943040;class me{static withCacheSize(t){return new me(t,me.DEFAULT_COLLECTION_PERCENTILE,me.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,s){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=s}}/**
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
 */me.DEFAULT_COLLECTION_PERCENTILE=10,me.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,me.DEFAULT=new me(Gg,me.DEFAULT_COLLECTION_PERCENTILE,me.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),me.DISABLED=new me(-1,0,0);/**
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
 */class ai{constructor(t){this.sr=t}next(){return this.sr+=2,this.sr}static _r(){return new ai(0)}static ar(){return new ai(-1)}}/**
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
 */const gd="LruGarbageCollector",yw=1048576;function md([n,t],[e,s]){const i=ct(n,e);return i===0?ct(t,s):i}class bw{constructor(t){this.Pr=t,this.buffer=new Qt(md),this.Tr=0}Ir(){return++this.Tr}Er(t){const e=[t,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(e);else{const s=this.buffer.last();md(e,s)<0&&(this.buffer=this.buffer.delete(s).add(e))}}get maxValue(){return this.buffer.last()[0]}}class vw{constructor(t,e,s){this.garbageCollector=t,this.asyncQueue=e,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(t){U(gd,`Garbage collection scheduled in ${t}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){_i(e)?U(gd,"Ignoring IndexedDB error during garbage collection: ",e):await mi(e)}await this.Ar(3e5)}))}}class Ew{constructor(t,e){this.Vr=t,this.params=e}calculateTargetCount(t,e){return this.Vr.dr(t).next((s=>Math.floor(e/100*s)))}nthSequenceNumber(t,e){if(e===0)return V.resolve(va.ce);const s=new bw(e);return this.Vr.forEachTarget(t,(i=>s.Er(i.sequenceNumber))).next((()=>this.Vr.mr(t,(i=>s.Er(i))))).next((()=>s.maxValue))}removeTargets(t,e,s){return this.Vr.removeTargets(t,e,s)}removeOrphanedDocuments(t,e){return this.Vr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(U("LruGarbageCollector","Garbage collection skipped; disabled"),V.resolve(pd)):this.getCacheSize(t).next((s=>s<this.params.cacheSizeCollectionThreshold?(U("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),pd):this.gr(t,e)))}getCacheSize(t){return this.Vr.getCacheSize(t)}gr(t,e){let s,i,r,o,a,l,u;const h=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next((d=>(d>this.params.maximumSequenceNumbersToCollect?(U("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${d}`),i=this.params.maximumSequenceNumbersToCollect):i=d,o=Date.now(),this.nthSequenceNumber(t,i)))).next((d=>(s=d,a=Date.now(),this.removeTargets(t,s,e)))).next((d=>(r=d,l=Date.now(),this.removeOrphanedDocuments(t,s)))).next((d=>(u=Date.now(),$s()<=lt.DEBUG&&U("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${r} targets in `+(l-a)+`ms
	Removed ${d} documents in `+(u-l)+`ms
Total Duration: ${u-h}ms`),V.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:r,documentsRemoved:d}))))}}function ww(n,t){return new Ew(n,t)}/**
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
 */class Tw{constructor(){this.changes=new Cs((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,ce.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const s=this.changes.get(e);return s!==void 0?V.resolve(s):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class Iw{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
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
 */class Sw{constructor(t,e,s,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=s,this.indexManager=i}getDocument(t,e){let s=null;return this.documentOverlayCache.getOverlay(t,e).next((i=>(s=i,this.remoteDocumentCache.getEntry(t,e)))).next((i=>(s!==null&&er(s.mutation,i,Ne.empty(),Ct.now()),i)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((s=>this.getLocalViewOfDocuments(t,s,ut()).next((()=>s))))}getLocalViewOfDocuments(t,e,s=ut()){const i=ps();return this.populateOverlays(t,i,e).next((()=>this.computeViews(t,e,i,s).next((r=>{let o=zi();return r.forEach(((a,l)=>{o=o.insert(a,l.overlayedDocument)})),o}))))}getOverlayedDocuments(t,e){const s=ps();return this.populateOverlays(t,s,e).next((()=>this.computeViews(t,e,s,ut())))}populateOverlays(t,e,s){const i=[];return s.forEach((r=>{e.has(r)||i.push(r)})),this.documentOverlayCache.getOverlays(t,i).next((r=>{r.forEach(((o,a)=>{e.set(o,a)}))}))}computeViews(t,e,s,i){let r=En();const o=tr(),a=(function(){return tr()})();return e.forEach(((l,u)=>{const h=s.get(u.key);i.has(u.key)&&(h===void 0||h.mutation instanceof Ds)?r=r.insert(u.key,u):h!==void 0?(o.set(u.key,h.mutation.getFieldMask()),er(h.mutation,u,h.mutation.getFieldMask(),Ct.now())):o.set(u.key,Ne.empty())})),this.recalculateAndSaveOverlays(t,r).next((l=>(l.forEach(((u,h)=>o.set(u,h))),e.forEach(((u,h)=>a.set(u,new Iw(h,o.get(u)??null)))),a)))}recalculateAndSaveOverlays(t,e){const s=tr();let i=new Lt(((o,a)=>o-a)),r=ut();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((o=>{for(const a of o)a.keys().forEach((l=>{const u=e.get(l);if(u===null)return;let h=s.get(l)||Ne.empty();h=a.applyToLocalView(u,h),s.set(l,h);const d=(i.get(a.batchId)||ut()).add(l);i=i.insert(a.batchId,d)}))})).next((()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,h=l.value,d=Pg();h.forEach((p=>{if(!r.has(p)){const y=Og(e.get(p),s.get(p));y!==null&&d.set(p,y),r=r.add(p)}})),o.push(this.documentOverlayCache.saveOverlays(t,u,d))}return V.waitFor(o)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((s=>this.recalculateAndSaveOverlays(t,s)))}getDocumentsMatchingQuery(t,e,s,i){return xE(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):AE(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,s,i):this.getDocumentsMatchingCollectionQuery(t,e,s,i)}getNextDocuments(t,e,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,s,i).next((r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,s.largestBatchId,i-r.size):V.resolve(ps());let a=dr,l=r;return o.next((u=>V.forEach(u,((h,d)=>(a<d.largestBatchId&&(a=d.largestBatchId),r.get(h)?V.resolve():this.remoteDocumentCache.getEntry(t,h).next((p=>{l=l.insert(h,p)}))))).next((()=>this.populateOverlays(t,u,r))).next((()=>this.computeViews(t,l,u,ut()))).next((h=>({batchId:a,changes:Ag(h)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new W(e)).next((s=>{let i=zi();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i}))}getDocumentsMatchingCollectionGroupQuery(t,e,s,i){const r=e.collectionGroup;let o=zi();return this.indexManager.getCollectionParents(t,r).next((a=>V.forEach(a,(l=>{const u=(function(d,p){return new Ta(p,null,d.explicitOrderBy.slice(),d.filters.slice(),d.limit,d.limitType,d.startAt,d.endAt)})(e,l.child(r));return this.getDocumentsMatchingCollectionQuery(t,u,s,i).next((h=>{h.forEach(((d,p)=>{o=o.insert(d,p)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(t,e,s,i){let r;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,s.largestBatchId).next((o=>(r=o,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,s,r,i)))).next((o=>{r.forEach(((l,u)=>{const h=u.getKey();o.get(h)===null&&(o=o.insert(h,ce.newInvalidDocument(h)))}));let a=zi();return o.forEach(((l,u)=>{const h=r.get(l);h!==void 0&&er(h.mutation,u,Ne.empty(),Ct.now()),Sa(e,u)&&(a=a.insert(l,u))})),a}))}}/**
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
 */class xw{constructor(t){this.serializer=t,this.Nr=new Map,this.Br=new Map}getBundleMetadata(t,e){return V.resolve(this.Nr.get(e))}saveBundleMetadata(t,e){return this.Nr.set(e.id,(function(i){return{id:i.id,version:i.version,createTime:Qe(i.createTime)}})(e)),V.resolve()}getNamedQuery(t,e){return V.resolve(this.Br.get(e))}saveNamedQuery(t,e){return this.Br.set(e.name,(function(i){return{name:i.name,query:gw(i.bundledQuery),readTime:Qe(i.readTime)}})(e)),V.resolve()}}/**
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
 */class Aw{constructor(){this.overlays=new Lt(W.comparator),this.Lr=new Map}getOverlay(t,e){return V.resolve(this.overlays.get(e))}getOverlays(t,e){const s=ps();return V.forEach(e,(i=>this.getOverlay(t,i).next((r=>{r!==null&&s.set(i,r)})))).next((()=>s))}saveOverlays(t,e,s){return s.forEach(((i,r)=>{this.bt(t,e,r)})),V.resolve()}removeOverlaysForBatchId(t,e,s){const i=this.Lr.get(s);return i!==void 0&&(i.forEach((r=>this.overlays=this.overlays.remove(r))),this.Lr.delete(s)),V.resolve()}getOverlaysForCollection(t,e,s){const i=ps(),r=e.length+1,o=new W(e.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!e.isPrefixOf(u.path))break;u.path.length===r&&l.largestBatchId>s&&i.set(l.getKey(),l)}return V.resolve(i)}getOverlaysForCollectionGroup(t,e,s,i){let r=new Lt(((u,h)=>u-h));const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===e&&u.largestBatchId>s){let h=r.get(u.largestBatchId);h===null&&(h=ps(),r=r.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const a=ps(),l=r.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach(((u,h)=>a.set(u,h))),!(a.size()>=i)););return V.resolve(a)}bt(t,e,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.Lr.get(i.largestBatchId).delete(s.key);this.Lr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new WE(e,s));let r=this.Lr.get(e);r===void 0&&(r=ut(),this.Lr.set(e,r)),this.Lr.set(e,r.add(s.key))}}/**
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
 */class Pw{constructor(){this.sessionToken=ie.EMPTY_BYTE_STRING}getSessionToken(t){return V.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,V.resolve()}}/**
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
 */class Uc{constructor(){this.kr=new Qt(Zt.Kr),this.qr=new Qt(Zt.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(t,e){const s=new Zt(t,e);this.kr=this.kr.add(s),this.qr=this.qr.add(s)}$r(t,e){t.forEach((s=>this.addReference(s,e)))}removeReference(t,e){this.Wr(new Zt(t,e))}Qr(t,e){t.forEach((s=>this.removeReference(s,e)))}Gr(t){const e=new W(new Mt([])),s=new Zt(e,t),i=new Zt(e,t+1),r=[];return this.qr.forEachInRange([s,i],(o=>{this.Wr(o),r.push(o.key)})),r}zr(){this.kr.forEach((t=>this.Wr(t)))}Wr(t){this.kr=this.kr.delete(t),this.qr=this.qr.delete(t)}jr(t){const e=new W(new Mt([])),s=new Zt(e,t),i=new Zt(e,t+1);let r=ut();return this.qr.forEachInRange([s,i],(o=>{r=r.add(o.key)})),r}containsKey(t){const e=new Zt(t,0),s=this.kr.firstAfterOrEqual(e);return s!==null&&t.isEqual(s.key)}}class Zt{constructor(t,e){this.key=t,this.Hr=e}static Kr(t,e){return W.comparator(t.key,e.key)||ct(t.Hr,e.Hr)}static Ur(t,e){return ct(t.Hr,e.Hr)||W.comparator(t.key,e.key)}}/**
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
 */class kw{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Yn=1,this.Jr=new Qt(Zt.Kr)}checkEmpty(t){return V.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,s,i){const r=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new HE(r,e,s,i);this.mutationQueue.push(o);for(const a of i)this.Jr=this.Jr.add(new Zt(a.key,r)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return V.resolve(o)}lookupMutationBatch(t,e){return V.resolve(this.Zr(e))}getNextMutationBatchAfterBatchId(t,e){const s=e+1,i=this.Xr(s),r=i<0?0:i;return V.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return V.resolve(this.mutationQueue.length===0?kc:this.Yn-1)}getAllMutationBatches(t){return V.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const s=new Zt(e,0),i=new Zt(e,Number.POSITIVE_INFINITY),r=[];return this.Jr.forEachInRange([s,i],(o=>{const a=this.Zr(o.Hr);r.push(a)})),V.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(t,e){let s=new Qt(ct);return e.forEach((i=>{const r=new Zt(i,0),o=new Zt(i,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([r,o],(a=>{s=s.add(a.Hr)}))})),V.resolve(this.Yr(s))}getAllMutationBatchesAffectingQuery(t,e){const s=e.path,i=s.length+1;let r=s;W.isDocumentKey(r)||(r=r.child(""));const o=new Zt(new W(r),0);let a=new Qt(ct);return this.Jr.forEachWhile((l=>{const u=l.key.path;return!!s.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.Hr)),!0)}),o),V.resolve(this.Yr(a))}Yr(t){const e=[];return t.forEach((s=>{const i=this.Zr(s);i!==null&&e.push(i)})),e}removeMutationBatch(t,e){vt(this.ei(e.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Jr;return V.forEach(e.mutations,(i=>{const r=new Zt(i.key,e.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)})).next((()=>{this.Jr=s}))}nr(t){}containsKey(t,e){const s=new Zt(e,0),i=this.Jr.firstAfterOrEqual(s);return V.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,V.resolve()}ei(t,e){return this.Xr(t)}Xr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Zr(t){const e=this.Xr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
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
 */class Rw{constructor(t){this.ti=t,this.docs=(function(){return new Lt(W.comparator)})(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const s=e.key,i=this.docs.get(s),r=i?i.size:0,o=this.ti(e);return this.docs=this.docs.insert(s,{document:e.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(t,s.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const s=this.docs.get(e);return V.resolve(s?s.document.mutableCopy():ce.newInvalidDocument(e))}getEntries(t,e){let s=En();return e.forEach((i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():ce.newInvalidDocument(i))})),V.resolve(s)}getDocumentsMatchingQuery(t,e,s,i){let r=En();const o=e.path,a=new W(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:h}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||nE(eE(h),s)<=0||(i.has(h.key)||Sa(e,h))&&(r=r.insert(h.key,h.mutableCopy()))}return V.resolve(r)}getAllFromCollectionGroup(t,e,s,i){G(9500)}ni(t,e){return V.forEach(this.docs,(s=>e(s)))}newChangeBuffer(t){return new Cw(this)}getSize(t){return V.resolve(this.size)}}class Cw extends Tw{constructor(t){super(),this.Mr=t}applyChanges(t){const e=[];return this.changes.forEach(((s,i)=>{i.isValidDocument()?e.push(this.Mr.addEntry(t,i)):this.Mr.removeEntry(s)})),V.waitFor(e)}getFromCache(t,e){return this.Mr.getEntry(t,e)}getAllFromCache(t,e){return this.Mr.getEntries(t,e)}}/**
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
 */class Dw{constructor(t){this.persistence=t,this.ri=new Cs((e=>Dc(e)),Mc),this.lastRemoteSnapshotVersion=J.min(),this.highestTargetId=0,this.ii=0,this.si=new Uc,this.targetCount=0,this.oi=ai._r()}forEachTarget(t,e){return this.ri.forEach(((s,i)=>e(i))),V.resolve()}getLastRemoteSnapshotVersion(t){return V.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return V.resolve(this.ii)}allocateTargetId(t){return this.highestTargetId=this.oi.next(),V.resolve(this.highestTargetId)}setTargetsMetadata(t,e,s){return s&&(this.lastRemoteSnapshotVersion=s),e>this.ii&&(this.ii=e),V.resolve()}lr(t){this.ri.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.oi=new ai(e),this.highestTargetId=e),t.sequenceNumber>this.ii&&(this.ii=t.sequenceNumber)}addTargetData(t,e){return this.lr(e),this.targetCount+=1,V.resolve()}updateTargetData(t,e){return this.lr(e),V.resolve()}removeTargetData(t,e){return this.ri.delete(e.target),this.si.Gr(e.targetId),this.targetCount-=1,V.resolve()}removeTargets(t,e,s){let i=0;const r=[];return this.ri.forEach(((o,a)=>{a.sequenceNumber<=e&&s.get(a.targetId)===null&&(this.ri.delete(o),r.push(this.removeMatchingKeysForTargetId(t,a.targetId)),i++)})),V.waitFor(r).next((()=>i))}getTargetCount(t){return V.resolve(this.targetCount)}getTargetData(t,e){const s=this.ri.get(e)||null;return V.resolve(s)}addMatchingKeys(t,e,s){return this.si.$r(e,s),V.resolve()}removeMatchingKeys(t,e,s){this.si.Qr(e,s);const i=this.persistence.referenceDelegate,r=[];return i&&e.forEach((o=>{r.push(i.markPotentiallyOrphaned(t,o))})),V.waitFor(r)}removeMatchingKeysForTargetId(t,e){return this.si.Gr(e),V.resolve()}getMatchingKeysForTargetId(t,e){const s=this.si.jr(e);return V.resolve(s)}containsKey(t,e){return V.resolve(this.si.containsKey(e))}}/**
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
 */class Yg{constructor(t,e){this._i={},this.overlays={},this.ai=new va(0),this.ui=!1,this.ui=!0,this.ci=new Pw,this.referenceDelegate=t(this),this.li=new Dw(this),this.indexManager=new mw,this.remoteDocumentCache=(function(i){return new Rw(i)})((s=>this.referenceDelegate.hi(s))),this.serializer=new pw(e),this.Pi=new xw(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Aw,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let s=this._i[t.toKey()];return s||(s=new kw(e,this.referenceDelegate),this._i[t.toKey()]=s),s}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(t,e,s){U("MemoryPersistence","Starting transaction:",t);const i=new Mw(this.ai.next());return this.referenceDelegate.Ti(),s(i).next((r=>this.referenceDelegate.Ii(i).next((()=>r)))).toPromise().then((r=>(i.raiseOnCommittedEvent(),r)))}Ei(t,e){return V.or(Object.values(this._i).map((s=>()=>s.containsKey(t,e))))}}class Mw extends iE{constructor(t){super(),this.currentSequenceNumber=t}}class Bc{constructor(t){this.persistence=t,this.Ri=new Uc,this.Ai=null}static Vi(t){return new Bc(t)}get di(){if(this.Ai)return this.Ai;throw G(60996)}addReference(t,e,s){return this.Ri.addReference(s,e),this.di.delete(s.toString()),V.resolve()}removeReference(t,e,s){return this.Ri.removeReference(s,e),this.di.add(s.toString()),V.resolve()}markPotentiallyOrphaned(t,e){return this.di.add(e.toString()),V.resolve()}removeTarget(t,e){this.Ri.Gr(e.targetId).forEach((i=>this.di.add(i.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(t,e.targetId).next((i=>{i.forEach((r=>this.di.add(r.toString())))})).next((()=>s.removeTargetData(t,e)))}Ti(){this.Ai=new Set}Ii(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return V.forEach(this.di,(s=>{const i=W.fromPath(s);return this.mi(t,i).next((r=>{r||e.removeEntry(i,J.min())}))})).next((()=>(this.Ai=null,e.apply(t))))}updateLimboDocument(t,e){return this.mi(t,e).next((s=>{s?this.di.delete(e.toString()):this.di.add(e.toString())}))}hi(t){return 0}mi(t,e){return V.or([()=>V.resolve(this.Ri.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ei(t,e)])}}class ta{constructor(t,e){this.persistence=t,this.fi=new Cs((s=>aE(s.path)),((s,i)=>s.isEqual(i))),this.garbageCollector=ww(this,e)}static Vi(t,e){return new ta(t,e)}Ti(){}Ii(t){return V.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}dr(t){const e=this.pr(t);return this.persistence.getTargetCache().getTargetCount(t).next((s=>e.next((i=>s+i))))}pr(t){let e=0;return this.mr(t,(s=>{e++})).next((()=>e))}mr(t,e){return V.forEach(this.fi,((s,i)=>this.wr(t,s,i).next((r=>r?V.resolve():e(i)))))}removeTargets(t,e,s){return this.persistence.getTargetCache().removeTargets(t,e,s)}removeOrphanedDocuments(t,e){let s=0;const i=this.persistence.getRemoteDocumentCache(),r=i.newChangeBuffer();return i.ni(t,(o=>this.wr(t,o,e).next((a=>{a||(s++,r.removeEntry(o,J.min()))})))).next((()=>r.apply(t))).next((()=>s))}markPotentiallyOrphaned(t,e){return this.fi.set(e,t.currentSequenceNumber),V.resolve()}removeTarget(t,e){const s=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,s)}addReference(t,e,s){return this.fi.set(s,t.currentSequenceNumber),V.resolve()}removeReference(t,e,s){return this.fi.set(s,t.currentSequenceNumber),V.resolve()}updateLimboDocument(t,e){return this.fi.set(e,t.currentSequenceNumber),V.resolve()}hi(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=Io(t.data.value)),e}wr(t,e,s){return V.or([()=>this.persistence.Ei(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const i=this.fi.get(e);return V.resolve(i!==void 0&&i>s)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
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
 */class $c{constructor(t,e,s,i){this.targetId=t,this.fromCache=e,this.Ts=s,this.Is=i}static Es(t,e){let s=ut(),i=ut();for(const r of e.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new $c(t,e.fromCache,s,i)}}/**
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
 */class Ow{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class Lw{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=(function(){return vy()?8:rE(he())>0?6:4})()}initialize(t,e){this.fs=t,this.indexManager=e,this.Rs=!0}getDocumentsMatchingQuery(t,e,s,i){const r={result:null};return this.gs(t,e).next((o=>{r.result=o})).next((()=>{if(!r.result)return this.ps(t,e,i,s).next((o=>{r.result=o}))})).next((()=>{if(r.result)return;const o=new Ow;return this.ys(t,e,o).next((a=>{if(r.result=a,this.As)return this.ws(t,e,o,a.size)}))})).next((()=>r.result))}ws(t,e,s,i){return s.documentReadCount<this.Vs?($s()<=lt.DEBUG&&U("QueryEngine","SDK will not create cache indexes for query:",zs(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),V.resolve()):($s()<=lt.DEBUG&&U("QueryEngine","Query:",zs(e),"scans",s.documentReadCount,"local documents and returns",i,"documents as results."),s.documentReadCount>this.ds*i?($s()<=lt.DEBUG&&U("QueryEngine","The SDK decides to create cache indexes for query:",zs(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Ye(e))):V.resolve())}gs(t,e){if(id(e))return V.resolve(null);let s=Ye(e);return this.indexManager.getIndexType(t,s).next((i=>i===0?null:(e.limit!==null&&i===1&&(e=ql(e,null,"F"),s=Ye(e)),this.indexManager.getDocumentsMatchingTarget(t,s).next((r=>{const o=ut(...r);return this.fs.getDocuments(t,o).next((a=>this.indexManager.getMinOffset(t,s).next((l=>{const u=this.bs(e,a);return this.Ss(e,u,o,l.readTime)?this.gs(t,ql(e,null,"F")):this.Ds(t,u,e,l)}))))})))))}ps(t,e,s,i){return id(e)||i.isEqual(J.min())?V.resolve(null):this.fs.getDocuments(t,s).next((r=>{const o=this.bs(e,r);return this.Ss(e,o,s,i)?V.resolve(null):($s()<=lt.DEBUG&&U("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),zs(e)),this.Ds(t,o,e,tE(i,dr)).next((a=>a)))}))}bs(t,e){let s=new Qt(Sg(t));return e.forEach(((i,r)=>{Sa(t,r)&&(s=s.add(r))})),s}Ss(t,e,s,i){if(t.limit===null)return!1;if(s.size!==e.size)return!0;const r=t.limitType==="F"?e.last():e.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}ys(t,e,s){return $s()<=lt.DEBUG&&U("QueryEngine","Using full collection scan to execute query:",zs(e)),this.fs.getDocumentsMatchingQuery(t,e,Yn.min(),s)}Ds(t,e,s,i){return this.fs.getDocumentsMatchingQuery(t,s,i).next((r=>(e.forEach((o=>{r=r.insert(o.key,o)})),r)))}}/**
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
 */const zc="LocalStore",Vw=3e8;class Nw{constructor(t,e,s,i){this.persistence=t,this.Cs=e,this.serializer=i,this.vs=new Lt(ct),this.Fs=new Cs((r=>Dc(r)),Mc),this.Ms=new Map,this.xs=t.getRemoteDocumentCache(),this.li=t.getTargetCache(),this.Pi=t.getBundleCache(),this.Os(s)}Os(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Sw(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.vs)))}}function Fw(n,t,e,s){return new Nw(n,t,e,s)}async function Qg(n,t){const e=Z(n);return await e.persistence.runTransaction("Handle user change","readonly",(s=>{let i;return e.mutationQueue.getAllMutationBatches(s).next((r=>(i=r,e.Os(t),e.mutationQueue.getAllMutationBatches(s)))).next((r=>{const o=[],a=[];let l=ut();for(const u of i){o.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}for(const u of r){a.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}return e.localDocuments.getDocuments(s,l).next((u=>({Ns:u,removedBatchIds:o,addedBatchIds:a})))}))}))}function Uw(n,t){const e=Z(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const i=t.batch.keys(),r=e.xs.newChangeBuffer({trackRemovals:!0});return(function(a,l,u,h){const d=u.batch,p=d.keys();let y=V.resolve();return p.forEach((E=>{y=y.next((()=>h.getEntry(l,E))).next((w=>{const I=u.docVersions.get(E);vt(I!==null,48541),w.version.compareTo(I)<0&&(d.applyToRemoteDocument(w,u),w.isValidDocument()&&(w.setReadTime(u.commitVersion),h.addEntry(w)))}))})),y.next((()=>a.mutationQueue.removeMutationBatch(l,d)))})(e,s,t,r).next((()=>r.apply(s))).next((()=>e.mutationQueue.performConsistencyCheck(s))).next((()=>e.documentOverlayCache.removeOverlaysForBatchId(s,i,t.batch.batchId))).next((()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(a){let l=ut();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l})(t)))).next((()=>e.localDocuments.getDocuments(s,i)))}))}function Xg(n){const t=Z(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.li.getLastRemoteSnapshotVersion(e)))}function Bw(n,t){const e=Z(n),s=t.snapshotVersion;let i=e.vs;return e.persistence.runTransaction("Apply remote event","readwrite-primary",(r=>{const o=e.xs.newChangeBuffer({trackRemovals:!0});i=e.vs;const a=[];t.targetChanges.forEach(((h,d)=>{const p=i.get(d);if(!p)return;a.push(e.li.removeMatchingKeys(r,h.removedDocuments,d).next((()=>e.li.addMatchingKeys(r,h.addedDocuments,d))));let y=p.withSequenceNumber(r.currentSequenceNumber);t.targetMismatches.get(d)!==null?y=y.withResumeToken(ie.EMPTY_BYTE_STRING,J.min()).withLastLimboFreeSnapshotVersion(J.min()):h.resumeToken.approximateByteSize()>0&&(y=y.withResumeToken(h.resumeToken,s)),i=i.insert(d,y),(function(w,I,P){return w.resumeToken.approximateByteSize()===0||I.snapshotVersion.toMicroseconds()-w.snapshotVersion.toMicroseconds()>=Vw?!0:P.addedDocuments.size+P.modifiedDocuments.size+P.removedDocuments.size>0})(p,y,h)&&a.push(e.li.updateTargetData(r,y))}));let l=En(),u=ut();if(t.documentUpdates.forEach((h=>{t.resolvedLimboDocuments.has(h)&&a.push(e.persistence.referenceDelegate.updateLimboDocument(r,h))})),a.push($w(r,o,t.documentUpdates).next((h=>{l=h.Bs,u=h.Ls}))),!s.isEqual(J.min())){const h=e.li.getLastRemoteSnapshotVersion(r).next((d=>e.li.setTargetsMetadata(r,r.currentSequenceNumber,s)));a.push(h)}return V.waitFor(a).next((()=>o.apply(r))).next((()=>e.localDocuments.getLocalViewOfDocuments(r,l,u))).next((()=>l))})).then((r=>(e.vs=i,r)))}function $w(n,t,e){let s=ut(),i=ut();return e.forEach((r=>s=s.add(r))),t.getEntries(n,s).next((r=>{let o=En();return e.forEach(((a,l)=>{const u=r.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(J.min())?(t.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(t.addEntry(l),o=o.insert(a,l)):U(zc,"Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)})),{Bs:o,Ls:i}}))}function zw(n,t){const e=Z(n);return e.persistence.runTransaction("Get next mutation batch","readonly",(s=>(t===void 0&&(t=kc),e.mutationQueue.getNextMutationBatchAfterBatchId(s,t))))}function jw(n,t){const e=Z(n);return e.persistence.runTransaction("Allocate target","readwrite",(s=>{let i;return e.li.getTargetData(s,t).next((r=>r?(i=r,V.resolve(i)):e.li.allocateTargetId(s).next((o=>(i=new Ln(t,o,"TargetPurposeListen",s.currentSequenceNumber),e.li.addTargetData(s,i).next((()=>i)))))))})).then((s=>{const i=e.vs.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(e.vs=e.vs.insert(s.targetId,s),e.Fs.set(t,s.targetId)),s}))}async function Xl(n,t,e){const s=Z(n),i=s.vs.get(t),r=e?"readwrite":"readwrite-primary";try{e||await s.persistence.runTransaction("Release target",r,(o=>s.persistence.referenceDelegate.removeTarget(o,i)))}catch(o){if(!_i(o))throw o;U(zc,`Failed to update sequence numbers for target ${t}: ${o}`)}s.vs=s.vs.remove(t),s.Fs.delete(i.target)}function _d(n,t,e){const s=Z(n);let i=J.min(),r=ut();return s.persistence.runTransaction("Execute query","readwrite",(o=>(function(l,u,h){const d=Z(l),p=d.Fs.get(h);return p!==void 0?V.resolve(d.vs.get(p)):d.li.getTargetData(u,h)})(s,o,Ye(t)).next((a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.li.getMatchingKeysForTargetId(o,a.targetId).next((l=>{r=l}))})).next((()=>s.Cs.getDocumentsMatchingQuery(o,t,e?i:J.min(),e?r:ut()))).next((a=>(Hw(s,kE(t),a),{documents:a,ks:r})))))}function Hw(n,t,e){let s=n.Ms.get(t)||J.min();e.forEach(((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)})),n.Ms.set(t,s)}class yd{constructor(){this.activeTargetIds=LE()}Qs(t){this.activeTargetIds=this.activeTargetIds.add(t)}Gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Ws(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Ww{constructor(){this.vo=new yd,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,s){}addLocalQueryTarget(t,e=!0){return e&&this.vo.Qs(t),this.Fo[t]||"not-current"}updateQueryState(t,e,s){this.Fo[t]=e}removeLocalQueryTarget(t){this.vo.Gs(t)}isLocalQueryTarget(t){return this.vo.activeTargetIds.has(t)}clearQueryState(t){delete this.Fo[t]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(t){return this.vo.activeTargetIds.has(t)}start(){return this.vo=new yd,Promise.resolve()}handleUserChange(t,e,s){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class qw{Mo(t){}shutdown(){}}/**
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
 */const bd="ConnectivityMonitor";class vd{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(t){this.Lo.push(t)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){U(bd,"Network connectivity changed: AVAILABLE");for(const t of this.Lo)t(0)}Bo(){U(bd,"Network connectivity changed: UNAVAILABLE");for(const t of this.Lo)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let no=null;function Jl(){return no===null?no=(function(){return 268435456+Math.round(2147483648*Math.random())})():no++,"0x"+no.toString(16)}/**
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
 */const dl="RestConnection",Kw={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class Gw{get Ko(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.qo=e+"://"+t.host,this.Uo=`projects/${s}/databases/${i}`,this.$o=this.databaseId.database===Ko?`project_id=${s}`:`project_id=${s}&database_id=${i}`}Wo(t,e,s,i,r){const o=Jl(),a=this.Qo(t,e.toUriEncodedString());U(dl,`Sending RPC '${t}' ${o}:`,a,s);const l={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(l,i,r);const{host:u}=new URL(a),h=di(u);return this.zo(t,a,l,s,h).then((d=>(U(dl,`Received RPC '${t}' ${o}: `,d),d)),(d=>{throw Ss(dl,`RPC '${t}' ${o} failed with error: `,d,"url: ",a,"request:",s),d}))}jo(t,e,s,i,r,o){return this.Wo(t,e,s,i,r)}Go(t,e,s){t["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+gi})(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((i,r)=>t[r]=i)),s&&s.headers.forEach(((i,r)=>t[r]=i))}Qo(t,e){const s=Kw[t];let i=`${this.qo}/v1/${e}:${s}`;return this.databaseInfo.apiKey&&(i=`${i}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),i}terminate(){}}/**
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
 */class Yw{constructor(t){this.Ho=t.Ho,this.Jo=t.Jo}Zo(t){this.Xo=t}Yo(t){this.e_=t}t_(t){this.n_=t}onMessage(t){this.r_=t}close(){this.Jo()}send(t){this.Ho(t)}i_(){this.Xo()}s_(){this.e_()}o_(t){this.n_(t)}__(t){this.r_(t)}}/**
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
 */const ae="WebChannelConnection",Li=(n,t,e)=>{n.listen(t,(s=>{try{e(s)}catch(i){setTimeout((()=>{throw i}),0)}}))};class Qs extends Gw{constructor(t){super(t),this.a_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}static u_(){if(!Qs.c_){const t=sg();Li(t,ng.STAT_EVENT,(e=>{e.stat===Bl.PROXY?U(ae,"STAT_EVENT: detected buffering proxy"):e.stat===Bl.NOPROXY&&U(ae,"STAT_EVENT: detected no buffering proxy")})),Qs.c_=!0}}zo(t,e,s,i,r){const o=Jl();return new Promise(((a,l)=>{const u=new tg;u.setWithCredentials(!0),u.listenOnce(eg.COMPLETE,(()=>{try{switch(u.getLastErrorCode()){case To.NO_ERROR:const d=u.getResponseJson();U(ae,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(d)),a(d);break;case To.TIMEOUT:U(ae,`RPC '${t}' ${o} timed out`),l(new H(N.DEADLINE_EXCEEDED,"Request time out"));break;case To.HTTP_ERROR:const p=u.getStatus();if(U(ae,`RPC '${t}' ${o} failed with status:`,p,"response text:",u.getResponseText()),p>0){let y=u.getResponseJson();Array.isArray(y)&&(y=y[0]);const E=y==null?void 0:y.error;if(E&&E.status&&E.message){const w=(function(P){const k=P.toLowerCase().replace(/_/g,"-");return Object.values(N).indexOf(k)>=0?k:N.UNKNOWN})(E.status);l(new H(w,E.message))}else l(new H(N.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new H(N.UNAVAILABLE,"Connection failed."));break;default:G(9055,{l_:t,streamId:o,h_:u.getLastErrorCode(),P_:u.getLastError()})}}finally{U(ae,`RPC '${t}' ${o} completed.`)}}));const h=JSON.stringify(i);U(ae,`RPC '${t}' ${o} sending request:`,i),u.send(e,"POST",h,s,15)}))}T_(t,e,s){const i=Jl(),r=[this.qo,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=this.createWebChannelTransport(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(a.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(a.useFetchStreams=!0),this.Go(a.initMessageHeaders,e,s),a.encodeInitMessageHeaders=!0;const u=r.join("");U(ae,`Creating RPC '${t}' stream ${i}: ${u}`,a);const h=o.createWebChannel(u,a);this.I_(h);let d=!1,p=!1;const y=new Yw({Ho:E=>{p?U(ae,`Not sending because RPC '${t}' stream ${i} is closed:`,E):(d||(U(ae,`Opening RPC '${t}' stream ${i} transport.`),h.open(),d=!0),U(ae,`RPC '${t}' stream ${i} sending:`,E),h.send(E))},Jo:()=>h.close()});return Li(h,$i.EventType.OPEN,(()=>{p||(U(ae,`RPC '${t}' stream ${i} transport opened.`),y.i_())})),Li(h,$i.EventType.CLOSE,(()=>{p||(p=!0,U(ae,`RPC '${t}' stream ${i} transport closed`),y.o_(),this.E_(h))})),Li(h,$i.EventType.ERROR,(E=>{p||(p=!0,Ss(ae,`RPC '${t}' stream ${i} transport errored. Name:`,E.name,"Message:",E.message),y.o_(new H(N.UNAVAILABLE,"The operation could not be completed")))})),Li(h,$i.EventType.MESSAGE,(E=>{var w;if(!p){const I=E.data[0];vt(!!I,16349);const P=I,k=(P==null?void 0:P.error)||((w=P[0])==null?void 0:w.error);if(k){U(ae,`RPC '${t}' stream ${i} received error:`,k);const R=k.status;let D=(function(S){const g=jt[S];if(g!==void 0)return Ng(g)})(R),M=k.message;R==="NOT_FOUND"&&M.includes("database")&&M.includes("does not exist")&&M.includes(this.databaseId.database)&&Ss(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),D===void 0&&(D=N.INTERNAL,M="Unknown error status: "+R+" with message "+k.message),p=!0,y.o_(new H(D,M)),h.close()}else U(ae,`RPC '${t}' stream ${i} received:`,I),y.__(I)}})),Qs.u_(),setTimeout((()=>{y.s_()}),0),y}terminate(){this.a_.forEach((t=>t.close())),this.a_=[]}I_(t){this.a_.push(t)}E_(t){this.a_=this.a_.filter((e=>e===t))}Go(t,e,s){super.Go(t,e,s),this.databaseInfo.apiKey&&(t["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return ig()}}/**
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
 */function Qw(n){return new Qs(n)}function fl(){return typeof document<"u"?document:null}/**
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
 */function ka(n){return new tw(n,!0)}/**
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
 */Qs.c_=!1;class Jg{constructor(t,e,s=1e3,i=1.5,r=6e4){this.Ci=t,this.timerId=e,this.R_=s,this.A_=i,this.V_=r,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(t){this.cancel();const e=Math.floor(this.d_+this.y_()),s=Math.max(0,Date.now()-this.f_),i=Math.max(0,e-s);i>0&&U("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.d_} ms, delay with jitter: ${e} ms, last attempt: ${s} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,i,(()=>(this.f_=Date.now(),t()))),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
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
 */const Ed="PersistentStream";class Zg{constructor(t,e,s,i,r,o,a,l){this.Ci=t,this.b_=s,this.S_=i,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Jg(t,e)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.b_,6e4,(()=>this.k_())))}K_(t){this.q_(),this.stream.send(t)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,e){this.q_(),this.U_(),this.M_.cancel(),this.D_++,t!==4?this.M_.reset():e&&e.code===N.RESOURCE_EXHAUSTED?(vn(e.toString()),vn("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):e&&e.code===N.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.t_(e)}W_(){}auth(){this.state=1;const t=this.Q_(this.D_),e=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,i])=>{this.D_===e&&this.G_(s,i)}),(s=>{t((()=>{const i=new H(N.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(i)}))}))}G_(t,e){const s=this.Q_(this.D_);this.stream=this.j_(t,e),this.stream.Zo((()=>{s((()=>this.listener.Zo()))})),this.stream.Yo((()=>{s((()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.S_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.Yo())))})),this.stream.t_((i=>{s((()=>this.z_(i)))})),this.stream.onMessage((i=>{s((()=>++this.F_==1?this.H_(i):this.onNext(i)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(t){return U(Ed,`close with error: ${t}`),this.stream=null,this.close(4,t)}Q_(t){return e=>{this.Ci.enqueueAndForget((()=>this.D_===t?e():(U(Ed,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Xw extends Zg{constructor(t,e,s,i,r,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,s,i,o),this.serializer=r}j_(t,e){return this.connection.T_("Listen",t,e)}H_(t){return this.onNext(t)}onNext(t){this.M_.reset();const e=sw(this.serializer,t),s=(function(r){if(!("targetChange"in r))return J.min();const o=r.targetChange;return o.targetIds&&o.targetIds.length?J.min():o.readTime?Qe(o.readTime):J.min()})(t);return this.listener.J_(e,s)}Z_(t){const e={};e.database=Ql(this.serializer),e.addTarget=(function(r,o){let a;const l=o.target;if(a=Wl(l)?{documents:ow(r,l)}:{query:aw(r,l).ft},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=Bg(r,o.resumeToken);const u=Kl(r,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(J.min())>0){a.readTime=Zo(r,o.snapshotVersion.toTimestamp());const u=Kl(r,o.expectedCount);u!==null&&(a.expectedCount=u)}return a})(this.serializer,t);const s=cw(this.serializer,t);s&&(e.labels=s),this.K_(e)}X_(t){const e={};e.database=Ql(this.serializer),e.removeTarget=t,this.K_(e)}}class Jw extends Zg{constructor(t,e,s,i,r,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,s,i,o),this.serializer=r}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(t,e){return this.connection.T_("Write",t,e)}H_(t){return vt(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,vt(!t.writeResults||t.writeResults.length===0,55816),this.listener.ta()}onNext(t){vt(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.M_.reset();const e=rw(t.writeResults,t.commitTime),s=Qe(t.commitTime);return this.listener.na(s,e)}ra(){const t={};t.database=Ql(this.serializer),this.K_(t)}ea(t){const e={streamToken:this.lastStreamToken,writes:t.map((s=>iw(this.serializer,s)))};this.K_(e)}}/**
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
 */class Zw{}class tT extends Zw{constructor(t,e,s,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=s,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new H(N.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(t,e,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,o])=>this.connection.Wo(t,Gl(e,s),i,r,o))).catch((r=>{throw r.name==="FirebaseError"?(r.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new H(N.UNKNOWN,r.toString())}))}jo(t,e,s,i,r){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,a])=>this.connection.jo(t,Gl(e,s),i,o,a,r))).catch((o=>{throw o.name==="FirebaseError"?(o.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new H(N.UNKNOWN,o.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}function eT(n,t,e,s){return new tT(n,t,e,s)}class nT{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(t){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ca("Offline")))}set(t){this.Pa(),this.oa=0,t==="Online"&&(this.aa=!1),this.ca(t)}ca(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}la(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(vn(e),this.aa=!1):U("OnlineStateTracker",e)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const xs="RemoteStore";class sT{constructor(t,e,s,i,r){this.localStore=t,this.datastore=e,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.Ra=[],this.Aa=r,this.Aa.Mo((o=>{s.enqueueAndForget((async()=>{Ms(this)&&(U(xs,"Restarting streams for network reachability change."),await(async function(l){const u=Z(l);u.Ea.add(4),await Lr(u),u.Va.set("Unknown"),u.Ea.delete(4),await Ra(u)})(this))}))})),this.Va=new nT(s,i)}}async function Ra(n){if(Ms(n))for(const t of n.Ra)await t(!0)}async function Lr(n){for(const t of n.Ra)await t(!1)}function tm(n,t){const e=Z(n);e.Ia.has(t.targetId)||(e.Ia.set(t.targetId,t),qc(e)?Wc(e):yi(e).O_()&&Hc(e,t))}function jc(n,t){const e=Z(n),s=yi(e);e.Ia.delete(t),s.O_()&&em(e,t),e.Ia.size===0&&(s.O_()?s.L_():Ms(e)&&e.Va.set("Unknown"))}function Hc(n,t){if(n.da.$e(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(J.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}yi(n).Z_(t)}function em(n,t){n.da.$e(t),yi(n).X_(t)}function Wc(n){n.da=new QE({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),At:t=>n.Ia.get(t)||null,ht:()=>n.datastore.serializer.databaseId}),yi(n).start(),n.Va.ua()}function qc(n){return Ms(n)&&!yi(n).x_()&&n.Ia.size>0}function Ms(n){return Z(n).Ea.size===0}function nm(n){n.da=void 0}async function iT(n){n.Va.set("Online")}async function rT(n){n.Ia.forEach(((t,e)=>{Hc(n,t)}))}async function oT(n,t){nm(n),qc(n)?(n.Va.ha(t),Wc(n)):n.Va.set("Unknown")}async function aT(n,t,e){if(n.Va.set("Online"),t instanceof Ug&&t.state===2&&t.cause)try{await(async function(i,r){const o=r.cause;for(const a of r.targetIds)i.Ia.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.Ia.delete(a),i.da.removeTarget(a))})(n,t)}catch(s){U(xs,"Failed to remove targets %s: %s ",t.targetIds.join(","),s),await ea(n,s)}else if(t instanceof Ao?n.da.Xe(t):t instanceof Fg?n.da.st(t):n.da.tt(t),!e.isEqual(J.min()))try{const s=await Xg(n.localStore);e.compareTo(s)>=0&&await(function(r,o){const a=r.da.Tt(o);return a.targetChanges.forEach(((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const h=r.Ia.get(u);h&&r.Ia.set(u,h.withResumeToken(l.resumeToken,o))}})),a.targetMismatches.forEach(((l,u)=>{const h=r.Ia.get(l);if(!h)return;r.Ia.set(l,h.withResumeToken(ie.EMPTY_BYTE_STRING,h.snapshotVersion)),em(r,l);const d=new Ln(h.target,l,u,h.sequenceNumber);Hc(r,d)})),r.remoteSyncer.applyRemoteEvent(a)})(n,e)}catch(s){U(xs,"Failed to raise snapshot:",s),await ea(n,s)}}async function ea(n,t,e){if(!_i(t))throw t;n.Ea.add(1),await Lr(n),n.Va.set("Offline"),e||(e=()=>Xg(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{U(xs,"Retrying IndexedDB access"),await e(),n.Ea.delete(1),await Ra(n)}))}function sm(n,t){return t().catch((e=>ea(n,e,t)))}async function Ca(n){const t=Z(n),e=Zn(t);let s=t.Ta.length>0?t.Ta[t.Ta.length-1].batchId:kc;for(;lT(t);)try{const i=await zw(t.localStore,s);if(i===null){t.Ta.length===0&&e.L_();break}s=i.batchId,cT(t,i)}catch(i){await ea(t,i)}im(t)&&rm(t)}function lT(n){return Ms(n)&&n.Ta.length<10}function cT(n,t){n.Ta.push(t);const e=Zn(n);e.O_()&&e.Y_&&e.ea(t.mutations)}function im(n){return Ms(n)&&!Zn(n).x_()&&n.Ta.length>0}function rm(n){Zn(n).start()}async function uT(n){Zn(n).ra()}async function hT(n){const t=Zn(n);for(const e of n.Ta)t.ea(e.mutations)}async function dT(n,t,e){const s=n.Ta.shift(),i=Vc.from(s,t,e);await sm(n,(()=>n.remoteSyncer.applySuccessfulWrite(i))),await Ca(n)}async function fT(n,t){t&&Zn(n).Y_&&await(async function(s,i){if((function(o){return KE(o)&&o!==N.ABORTED})(i.code)){const r=s.Ta.shift();Zn(s).B_(),await sm(s,(()=>s.remoteSyncer.rejectFailedWrite(r.batchId,i))),await Ca(s)}})(n,t),im(n)&&rm(n)}async function wd(n,t){const e=Z(n);e.asyncQueue.verifyOperationInProgress(),U(xs,"RemoteStore received new credentials");const s=Ms(e);e.Ea.add(3),await Lr(e),s&&e.Va.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.Ea.delete(3),await Ra(e)}async function pT(n,t){const e=Z(n);t?(e.Ea.delete(2),await Ra(e)):t||(e.Ea.add(2),await Lr(e),e.Va.set("Unknown"))}function yi(n){return n.ma||(n.ma=(function(e,s,i){const r=Z(e);return r.sa(),new Xw(s,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,i)})(n.datastore,n.asyncQueue,{Zo:iT.bind(null,n),Yo:rT.bind(null,n),t_:oT.bind(null,n),J_:aT.bind(null,n)}),n.Ra.push((async t=>{t?(n.ma.B_(),qc(n)?Wc(n):n.Va.set("Unknown")):(await n.ma.stop(),nm(n))}))),n.ma}function Zn(n){return n.fa||(n.fa=(function(e,s,i){const r=Z(e);return r.sa(),new Jw(s,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,i)})(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),Yo:uT.bind(null,n),t_:fT.bind(null,n),ta:hT.bind(null,n),na:dT.bind(null,n)}),n.Ra.push((async t=>{t?(n.fa.B_(),await Ca(n)):(await n.fa.stop(),n.Ta.length>0&&(U(xs,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))}))),n.fa}/**
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
 */class Kc{constructor(t,e,s,i,r){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new qn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,e,s,i,r){const o=Date.now()+s,a=new Kc(t,e,o,i,r);return a.start(s),a}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new H(N.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Gc(n,t){if(vn("AsyncQueue",`${t}: ${n}`),_i(n))return new H(N.UNAVAILABLE,`${t}: ${n}`);throw n}/**
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
 */class Xs{static emptySet(t){return new Xs(t.comparator)}constructor(t){this.comparator=t?(e,s)=>t(e,s)||W.comparator(e.key,s.key):(e,s)=>W.comparator(e.key,s.key),this.keyedMap=zi(),this.sortedSet=new Lt(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,s)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Xs)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),s=t.sortedSet.getIterator();for(;e.hasNext();){const i=e.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const s=new Xs;return s.comparator=this.comparator,s.keyedMap=t,s.sortedSet=e,s}}/**
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
 */class Td{constructor(){this.ga=new Lt(W.comparator)}track(t){const e=t.doc.key,s=this.ga.get(e);s?t.type!==0&&s.type===3?this.ga=this.ga.insert(e,t):t.type===3&&s.type!==1?this.ga=this.ga.insert(e,{type:s.type,doc:t.doc}):t.type===2&&s.type===2?this.ga=this.ga.insert(e,{type:2,doc:t.doc}):t.type===2&&s.type===0?this.ga=this.ga.insert(e,{type:0,doc:t.doc}):t.type===1&&s.type===0?this.ga=this.ga.remove(e):t.type===1&&s.type===2?this.ga=this.ga.insert(e,{type:1,doc:s.doc}):t.type===0&&s.type===1?this.ga=this.ga.insert(e,{type:2,doc:t.doc}):G(63341,{Vt:t,pa:s}):this.ga=this.ga.insert(e,t)}ya(){const t=[];return this.ga.inorderTraversal(((e,s)=>{t.push(s)})),t}}class li{constructor(t,e,s,i,r,o,a,l,u){this.query=t,this.docs=e,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(t,e,s,i,r){const o=[];return e.forEach((a=>{o.push({type:0,doc:a})})),new li(t,e,Xs.emptySet(e),o,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Ia(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,s=t.docChanges;if(e.length!==s.length)return!1;for(let i=0;i<e.length;i++)if(e[i].type!==s[i].type||!e[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
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
 */class gT{constructor(){this.wa=void 0,this.ba=[]}Sa(){return this.ba.some((t=>t.Da()))}}class mT{constructor(){this.queries=Id(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(e,s){const i=Z(e),r=i.queries;i.queries=Id(),r.forEach(((o,a)=>{for(const l of a.ba)l.onError(s)}))})(this,new H(N.ABORTED,"Firestore shutting down"))}}function Id(){return new Cs((n=>Ig(n)),Ia)}async function _T(n,t){const e=Z(n);let s=3;const i=t.query;let r=e.queries.get(i);r?!r.Sa()&&t.Da()&&(s=2):(r=new gT,s=t.Da()?0:1);try{switch(s){case 0:r.wa=await e.onListen(i,!0);break;case 1:r.wa=await e.onListen(i,!1);break;case 2:await e.onFirstRemoteStoreListen(i)}}catch(o){const a=Gc(o,`Initialization of query '${zs(t.query)}' failed`);return void t.onError(a)}e.queries.set(i,r),r.ba.push(t),t.va(e.onlineState),r.wa&&t.Fa(r.wa)&&Yc(e)}async function yT(n,t){const e=Z(n),s=t.query;let i=3;const r=e.queries.get(s);if(r){const o=r.ba.indexOf(t);o>=0&&(r.ba.splice(o,1),r.ba.length===0?i=t.Da()?0:1:!r.Sa()&&t.Da()&&(i=2))}switch(i){case 0:return e.queries.delete(s),e.onUnlisten(s,!0);case 1:return e.queries.delete(s),e.onUnlisten(s,!1);case 2:return e.onLastRemoteStoreUnlisten(s);default:return}}function bT(n,t){const e=Z(n);let s=!1;for(const i of t){const r=i.query,o=e.queries.get(r);if(o){for(const a of o.ba)a.Fa(i)&&(s=!0);o.wa=i}}s&&Yc(e)}function vT(n,t,e){const s=Z(n),i=s.queries.get(t);if(i)for(const r of i.ba)r.onError(e);s.queries.delete(t)}function Yc(n){n.Ca.forEach((t=>{t.next()}))}var Zl,Sd;(Sd=Zl||(Zl={})).Ma="default",Sd.Cache="cache";class ET{constructor(t,e,s){this.query=t,this.xa=e,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(t){if(!this.options.includeMetadataChanges){const s=[];for(const i of t.docChanges)i.type!==3&&s.push(i);t=new li(t.query,t.docs,t.oldDocs,s,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Oa?this.Ba(t)&&(this.xa.next(t),e=!0):this.La(t,this.onlineState)&&(this.ka(t),e=!0),this.Na=t,e}onError(t){this.xa.error(t)}va(t){this.onlineState=t;let e=!1;return this.Na&&!this.Oa&&this.La(this.Na,t)&&(this.ka(this.Na),e=!0),e}La(t,e){if(!t.fromCache||!this.Da())return!0;const s=e!=="Offline";return(!this.options.Ka||!s)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}Ba(t){if(t.docChanges.length>0)return!0;const e=this.Na&&this.Na.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}ka(t){t=li.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Oa=!0,this.xa.next(t)}Da(){return this.options.source!==Zl.Cache}}/**
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
 */class om{constructor(t){this.key=t}}class am{constructor(t){this.key=t}}class wT{constructor(t,e){this.query=t,this.Za=e,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=ut(),this.mutatedKeys=ut(),this.eu=Sg(t),this.tu=new Xs(this.eu)}get nu(){return this.Za}ru(t,e){const s=e?e.iu:new Td,i=e?e.tu:this.tu;let r=e?e.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal(((h,d)=>{const p=i.get(h),y=Sa(this.query,d)?d:null,E=!!p&&this.mutatedKeys.has(p.key),w=!!y&&(y.hasLocalMutations||this.mutatedKeys.has(y.key)&&y.hasCommittedMutations);let I=!1;p&&y?p.data.isEqual(y.data)?E!==w&&(s.track({type:3,doc:y}),I=!0):this.su(p,y)||(s.track({type:2,doc:y}),I=!0,(l&&this.eu(y,l)>0||u&&this.eu(y,u)<0)&&(a=!0)):!p&&y?(s.track({type:0,doc:y}),I=!0):p&&!y&&(s.track({type:1,doc:p}),I=!0,(l||u)&&(a=!0)),I&&(y?(o=o.add(y),r=w?r.add(h):r.delete(h)):(o=o.delete(h),r=r.delete(h)))})),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),r=r.delete(h.key),s.track({type:1,doc:h})}return{tu:o,iu:s,Ss:a,mutatedKeys:r}}su(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,s,i){const r=this.tu;this.tu=t.tu,this.mutatedKeys=t.mutatedKeys;const o=t.iu.ya();o.sort(((h,d)=>(function(y,E){const w=I=>{switch(I){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return G(20277,{Vt:I})}};return w(y)-w(E)})(h.type,d.type)||this.eu(h.doc,d.doc))),this.ou(s),i=i??!1;const a=e&&!i?this._u():[],l=this.Ya.size===0&&this.current&&!i?1:0,u=l!==this.Xa;return this.Xa=l,o.length!==0||u?{snapshot:new li(this.query,t.tu,r,o,t.mutatedKeys,l===0,u,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:a}:{au:a}}va(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Td,mutatedKeys:this.mutatedKeys,Ss:!1},!1)):{au:[]}}uu(t){return!this.Za.has(t)&&!!this.tu.has(t)&&!this.tu.get(t).hasLocalMutations}ou(t){t&&(t.addedDocuments.forEach((e=>this.Za=this.Za.add(e))),t.modifiedDocuments.forEach((e=>{})),t.removedDocuments.forEach((e=>this.Za=this.Za.delete(e))),this.current=t.current)}_u(){if(!this.current)return[];const t=this.Ya;this.Ya=ut(),this.tu.forEach((s=>{this.uu(s.key)&&(this.Ya=this.Ya.add(s.key))}));const e=[];return t.forEach((s=>{this.Ya.has(s)||e.push(new am(s))})),this.Ya.forEach((s=>{t.has(s)||e.push(new om(s))})),e}cu(t){this.Za=t.ks,this.Ya=ut();const e=this.ru(t.documents);return this.applyChanges(e,!0)}lu(){return li.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const Qc="SyncEngine";class TT{constructor(t,e,s){this.query=t,this.targetId=e,this.view=s}}class IT{constructor(t){this.key=t,this.hu=!1}}class ST{constructor(t,e,s,i,r,o){this.localStore=t,this.remoteStore=e,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new Cs((a=>Ig(a)),Ia),this.Iu=new Map,this.Eu=new Set,this.Ru=new Lt(W.comparator),this.Au=new Map,this.Vu=new Uc,this.du={},this.mu=new Map,this.fu=ai.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function xT(n,t,e=!0){const s=fm(n);let i;const r=s.Tu.get(t);return r?(s.sharedClientState.addLocalQueryTarget(r.targetId),i=r.view.lu()):i=await lm(s,t,e,!0),i}async function AT(n,t){const e=fm(n);await lm(e,t,!0,!1)}async function lm(n,t,e,s){const i=await jw(n.localStore,Ye(t)),r=i.targetId,o=n.sharedClientState.addLocalQueryTarget(r,e);let a;return s&&(a=await PT(n,t,r,o==="current",i.resumeToken)),n.isPrimaryClient&&e&&tm(n.remoteStore,i),a}async function PT(n,t,e,s,i){n.pu=(d,p,y)=>(async function(w,I,P,k){let R=I.view.ru(P);R.Ss&&(R=await _d(w.localStore,I.query,!1).then((({documents:S})=>I.view.ru(S,R))));const D=k&&k.targetChanges.get(I.targetId),M=k&&k.targetMismatches.get(I.targetId)!=null,L=I.view.applyChanges(R,w.isPrimaryClient,D,M);return Ad(w,I.targetId,L.au),L.snapshot})(n,d,p,y);const r=await _d(n.localStore,t,!0),o=new wT(t,r.ks),a=o.ru(r.documents),l=Or.createSynthesizedTargetChangeForCurrentChange(e,s&&n.onlineState!=="Offline",i),u=o.applyChanges(a,n.isPrimaryClient,l);Ad(n,e,u.au);const h=new TT(t,e,o);return n.Tu.set(t,h),n.Iu.has(e)?n.Iu.get(e).push(t):n.Iu.set(e,[t]),u.snapshot}async function kT(n,t,e){const s=Z(n),i=s.Tu.get(t),r=s.Iu.get(i.targetId);if(r.length>1)return s.Iu.set(i.targetId,r.filter((o=>!Ia(o,t)))),void s.Tu.delete(t);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(i.targetId),s.sharedClientState.isActiveQueryTarget(i.targetId)||await Xl(s.localStore,i.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(i.targetId),e&&jc(s.remoteStore,i.targetId),tc(s,i.targetId)})).catch(mi)):(tc(s,i.targetId),await Xl(s.localStore,i.targetId,!0))}async function RT(n,t){const e=Z(n),s=e.Tu.get(t),i=e.Iu.get(s.targetId);e.isPrimaryClient&&i.length===1&&(e.sharedClientState.removeLocalQueryTarget(s.targetId),jc(e.remoteStore,s.targetId))}async function CT(n,t,e){const s=FT(n);try{const i=await(function(o,a){const l=Z(o),u=Ct.now(),h=a.reduce(((y,E)=>y.add(E.key)),ut());let d,p;return l.persistence.runTransaction("Locally write mutations","readwrite",(y=>{let E=En(),w=ut();return l.xs.getEntries(y,h).next((I=>{E=I,E.forEach(((P,k)=>{k.isValidDocument()||(w=w.add(P))}))})).next((()=>l.localDocuments.getOverlayedDocuments(y,E))).next((I=>{d=I;const P=[];for(const k of a){const R=zE(k,d.get(k.key).overlayedDocument);R!=null&&P.push(new Ds(k.key,R,_g(R.value.mapValue),_n.exists(!0)))}return l.mutationQueue.addMutationBatch(y,u,P,a)})).next((I=>{p=I;const P=I.applyToLocalDocumentSet(d,w);return l.documentOverlayCache.saveOverlays(y,I.batchId,P)}))})).then((()=>({batchId:p.batchId,changes:Ag(d)})))})(s.localStore,t);s.sharedClientState.addPendingMutation(i.batchId),(function(o,a,l){let u=o.du[o.currentUser.toKey()];u||(u=new Lt(ct)),u=u.insert(a,l),o.du[o.currentUser.toKey()]=u})(s,i.batchId,e),await Vr(s,i.changes),await Ca(s.remoteStore)}catch(i){const r=Gc(i,"Failed to persist write");e.reject(r)}}async function cm(n,t){const e=Z(n);try{const s=await Bw(e.localStore,t);t.targetChanges.forEach(((i,r)=>{const o=e.Au.get(r);o&&(vt(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?o.hu=!0:i.modifiedDocuments.size>0?vt(o.hu,14607):i.removedDocuments.size>0&&(vt(o.hu,42227),o.hu=!1))})),await Vr(e,s,t)}catch(s){await mi(s)}}function xd(n,t,e){const s=Z(n);if(s.isPrimaryClient&&e===0||!s.isPrimaryClient&&e===1){const i=[];s.Tu.forEach(((r,o)=>{const a=o.view.va(t);a.snapshot&&i.push(a.snapshot)})),(function(o,a){const l=Z(o);l.onlineState=a;let u=!1;l.queries.forEach(((h,d)=>{for(const p of d.ba)p.va(a)&&(u=!0)})),u&&Yc(l)})(s.eventManager,t),i.length&&s.Pu.J_(i),s.onlineState=t,s.isPrimaryClient&&s.sharedClientState.setOnlineState(t)}}async function DT(n,t,e){const s=Z(n);s.sharedClientState.updateQueryState(t,"rejected",e);const i=s.Au.get(t),r=i&&i.key;if(r){let o=new Lt(W.comparator);o=o.insert(r,ce.newNoDocument(r,J.min()));const a=ut().add(r),l=new Pa(J.min(),new Map,new Lt(ct),o,a);await cm(s,l),s.Ru=s.Ru.remove(r),s.Au.delete(t),Xc(s)}else await Xl(s.localStore,t,!1).then((()=>tc(s,t,e))).catch(mi)}async function MT(n,t){const e=Z(n),s=t.batch.batchId;try{const i=await Uw(e.localStore,t);hm(e,s,null),um(e,s),e.sharedClientState.updateMutationState(s,"acknowledged"),await Vr(e,i)}catch(i){await mi(i)}}async function OT(n,t,e){const s=Z(n);try{const i=await(function(o,a){const l=Z(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",(u=>{let h;return l.mutationQueue.lookupMutationBatch(u,a).next((d=>(vt(d!==null,37113),h=d.keys(),l.mutationQueue.removeMutationBatch(u,d)))).next((()=>l.mutationQueue.performConsistencyCheck(u))).next((()=>l.documentOverlayCache.removeOverlaysForBatchId(u,h,a))).next((()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,h))).next((()=>l.localDocuments.getDocuments(u,h)))}))})(s.localStore,t);hm(s,t,e),um(s,t),s.sharedClientState.updateMutationState(t,"rejected",e),await Vr(s,i)}catch(i){await mi(i)}}function um(n,t){(n.mu.get(t)||[]).forEach((e=>{e.resolve()})),n.mu.delete(t)}function hm(n,t,e){const s=Z(n);let i=s.du[s.currentUser.toKey()];if(i){const r=i.get(t);r&&(e?r.reject(e):r.resolve(),i=i.remove(t)),s.du[s.currentUser.toKey()]=i}}function tc(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const s of n.Iu.get(t))n.Tu.delete(s),e&&n.Pu.yu(s,e);n.Iu.delete(t),n.isPrimaryClient&&n.Vu.Gr(t).forEach((s=>{n.Vu.containsKey(s)||dm(n,s)}))}function dm(n,t){n.Eu.delete(t.path.canonicalString());const e=n.Ru.get(t);e!==null&&(jc(n.remoteStore,e),n.Ru=n.Ru.remove(t),n.Au.delete(e),Xc(n))}function Ad(n,t,e){for(const s of e)s instanceof om?(n.Vu.addReference(s.key,t),LT(n,s)):s instanceof am?(U(Qc,"Document no longer in limbo: "+s.key),n.Vu.removeReference(s.key,t),n.Vu.containsKey(s.key)||dm(n,s.key)):G(19791,{wu:s})}function LT(n,t){const e=t.key,s=e.path.canonicalString();n.Ru.get(e)||n.Eu.has(s)||(U(Qc,"New document in limbo: "+e),n.Eu.add(s),Xc(n))}function Xc(n){for(;n.Eu.size>0&&n.Ru.size<n.maxConcurrentLimboResolutions;){const t=n.Eu.values().next().value;n.Eu.delete(t);const e=new W(Mt.fromString(t)),s=n.fu.next();n.Au.set(s,new IT(e)),n.Ru=n.Ru.insert(e,s),tm(n.remoteStore,new Ln(Ye(Oc(e.path)),s,"TargetPurposeLimboResolution",va.ce))}}async function Vr(n,t,e){const s=Z(n),i=[],r=[],o=[];s.Tu.isEmpty()||(s.Tu.forEach(((a,l)=>{o.push(s.pu(l,t,e).then((u=>{var h;if((u||e)&&s.isPrimaryClient){const d=u?!u.fromCache:(h=e==null?void 0:e.targetChanges.get(l.targetId))==null?void 0:h.current;s.sharedClientState.updateQueryState(l.targetId,d?"current":"not-current")}if(u){i.push(u);const d=$c.Es(l.targetId,u);r.push(d)}})))})),await Promise.all(o),s.Pu.J_(i),await(async function(l,u){const h=Z(l);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",(d=>V.forEach(u,(p=>V.forEach(p.Ts,(y=>h.persistence.referenceDelegate.addReference(d,p.targetId,y))).next((()=>V.forEach(p.Is,(y=>h.persistence.referenceDelegate.removeReference(d,p.targetId,y)))))))))}catch(d){if(!_i(d))throw d;U(zc,"Failed to update sequence numbers: "+d)}for(const d of u){const p=d.targetId;if(!d.fromCache){const y=h.vs.get(p),E=y.snapshotVersion,w=y.withLastLimboFreeSnapshotVersion(E);h.vs=h.vs.insert(p,w)}}})(s.localStore,r))}async function VT(n,t){const e=Z(n);if(!e.currentUser.isEqual(t)){U(Qc,"User change. New user:",t.toKey());const s=await Qg(e.localStore,t);e.currentUser=t,(function(r,o){r.mu.forEach((a=>{a.forEach((l=>{l.reject(new H(N.CANCELLED,o))}))})),r.mu.clear()})(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,s.removedBatchIds,s.addedBatchIds),await Vr(e,s.Ns)}}function NT(n,t){const e=Z(n),s=e.Au.get(t);if(s&&s.hu)return ut().add(s.key);{let i=ut();const r=e.Iu.get(t);if(!r)return i;for(const o of r){const a=e.Tu.get(o);i=i.unionWith(a.view.nu)}return i}}function fm(n){const t=Z(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=cm.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=NT.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=DT.bind(null,t),t.Pu.J_=bT.bind(null,t.eventManager),t.Pu.yu=vT.bind(null,t.eventManager),t}function FT(n){const t=Z(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=MT.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=OT.bind(null,t),t}class na{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=ka(t.databaseInfo.databaseId),this.sharedClientState=this.Du(t),this.persistence=this.Cu(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Fu(t,this.localStore),this.indexBackfillerScheduler=this.Mu(t,this.localStore)}Fu(t,e){return null}Mu(t,e){return null}vu(t){return Fw(this.persistence,new Lw,t.initialUser,this.serializer)}Cu(t){return new Yg(Bc.Vi,this.serializer)}Du(t){return new Ww}async terminate(){var t,e;(t=this.gcScheduler)==null||t.stop(),(e=this.indexBackfillerScheduler)==null||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}na.provider={build:()=>new na};class UT extends na{constructor(t){super(),this.cacheSizeBytes=t}Fu(t,e){vt(this.persistence.referenceDelegate instanceof ta,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new vw(s,t.asyncQueue,e)}Cu(t){const e=this.cacheSizeBytes!==void 0?me.withCacheSize(this.cacheSizeBytes):me.DEFAULT;return new Yg((s=>ta.Vi(s,e)),this.serializer)}}class ec{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>xd(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=VT.bind(null,this.syncEngine),await pT(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return(function(){return new mT})()}createDatastore(t){const e=ka(t.databaseInfo.databaseId),s=Qw(t.databaseInfo);return eT(t.authCredentials,t.appCheckCredentials,s,e)}createRemoteStore(t){return(function(s,i,r,o,a){return new sT(s,i,r,o,a)})(this.localStore,this.datastore,t.asyncQueue,(e=>xd(this.syncEngine,e,0)),(function(){return vd.v()?new vd:new qw})())}createSyncEngine(t,e){return(function(i,r,o,a,l,u,h){const d=new ST(i,r,o,a,l,u);return h&&(d.gu=!0),d})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await(async function(i){const r=Z(i);U(xs,"RemoteStore shutting down."),r.Ea.add(5),await Lr(r),r.Aa.shutdown(),r.Va.set("Unknown")})(this.remoteStore),(t=this.datastore)==null||t.terminate(),(e=this.eventManager)==null||e.terminate()}}ec.provider={build:()=>new ec};/**
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
 */class BT{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ou(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ou(this.observer.error,t):vn("Uncaught Error in snapshot listener:",t.toString()))}Nu(){this.muted=!0}Ou(t,e){setTimeout((()=>{this.muted||t(e)}),0)}}/**
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
 */const ts="FirestoreClient";class $T{constructor(t,e,s,i,r){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=s,this._databaseInfo=i,this.user=le.UNAUTHENTICATED,this.clientId=Ac.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=r,this.authCredentials.start(s,(async o=>{U(ts,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(s,(o=>(U(ts,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new qn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const s=Gc(e,"Failed to shutdown persistence");t.reject(s)}})),t.promise}}async function pl(n,t){n.asyncQueue.verifyOperationInProgress(),U(ts,"Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let s=e.initialUser;n.setCredentialChangeListener((async i=>{s.isEqual(i)||(await Qg(t.localStore,i),s=i)})),t.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=t}async function Pd(n,t){n.asyncQueue.verifyOperationInProgress();const e=await zT(n);U(ts,"Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener((s=>wd(t.remoteStore,s))),n.setAppCheckTokenChangeListener(((s,i)=>wd(t.remoteStore,i))),n._onlineComponents=t}async function zT(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){U(ts,"Using user provided OfflineComponentProvider");try{await pl(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!(function(i){return i.name==="FirebaseError"?i.code===N.FAILED_PRECONDITION||i.code===N.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11})(e))throw e;Ss("Error using user provided cache. Falling back to memory cache: "+e),await pl(n,new na)}}else U(ts,"Using default OfflineComponentProvider"),await pl(n,new UT(void 0));return n._offlineComponents}async function pm(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(U(ts,"Using user provided OnlineComponentProvider"),await Pd(n,n._uninitializedComponentsProvider._online)):(U(ts,"Using default OnlineComponentProvider"),await Pd(n,new ec))),n._onlineComponents}function jT(n){return pm(n).then((t=>t.syncEngine))}async function HT(n){const t=await pm(n),e=t.eventManager;return e.onListen=xT.bind(null,t.syncEngine),e.onUnlisten=kT.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=AT.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=RT.bind(null,t.syncEngine),e}function WT(n,t,e={}){const s=new qn;return n.asyncQueue.enqueueAndForget((async()=>(function(r,o,a,l,u){const h=new BT({next:p=>{h.Nu(),o.enqueueAndForget((()=>yT(r,d)));const y=p.docs.has(a);!y&&p.fromCache?u.reject(new H(N.UNAVAILABLE,"Failed to get document because the client is offline.")):y&&p.fromCache&&l&&l.source==="server"?u.reject(new H(N.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(p)},error:p=>u.reject(p)}),d=new ET(Oc(a.path),h,{includeMetadataChanges:!0,Ka:!0});return _T(r,d)})(await HT(n),n.asyncQueue,t,e,s))),s.promise}function qT(n,t){const e=new qn;return n.asyncQueue.enqueueAndForget((async()=>CT(await jT(n),t,e))),e.promise}/**
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
 */function gm(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
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
 */const KT="ComponentProvider",kd=new Map;function GT(n,t,e,s,i){return new uE(n,t,e,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,gm(i.experimentalLongPollingOptions),i.useFetchStreams,i.isUsingEmulator,s)}/**
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
 */const mm="firestore.googleapis.com",Rd=!0;class Cd{constructor(t){if(t.host===void 0){if(t.ssl!==void 0)throw new H(N.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=mm,this.ssl=Rd}else this.host=t.host,this.ssl=t.ssl??Rd;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=Gg;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<yw)throw new H(N.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Z0("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=gm(t.experimentalLongPollingOptions??{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new H(N.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new H(N.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new H(N.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(function(s,i){return s.timeoutSeconds===i.timeoutSeconds})(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Jc{constructor(t,e,s,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Cd({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new H(N.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new H(N.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Cd(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new z0;switch(s.type){case"firstParty":return new q0(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new H(N.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(e){const s=kd.get(e);s&&(U(KT,"Removing Datastore"),kd.delete(e),s.terminate())})(this),Promise.resolve()}}function YT(n,t,e,s={}){var u;n=hr(n,Jc);const i=di(t),r=n._getSettings(),o={...r,emulatorOptions:n._getEmulatorOptions()},a=`${t}:${e}`;i&&(gp(`https://${a}`),mp("Firestore",!0)),r.host!==mm&&r.host!==a&&Ss("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...r,host:a,ssl:i,emulatorOptions:s};if(!Es(l,o)&&(n._setSettings(l),s.mockUserToken)){let h,d;if(typeof s.mockUserToken=="string")h=s.mockUserToken,d=le.MOCK_USER;else{h=hy(s.mockUserToken,(u=n._app)==null?void 0:u.options.projectId);const p=s.mockUserToken.sub||s.mockUserToken.user_id;if(!p)throw new H(N.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");d=new le(p)}n._authCredentials=new j0(new og(h,d))}}/**
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
 */class Zc{constructor(t,e,s){this.converter=e,this._query=s,this.type="query",this.firestore=t}withConverter(t){return new Zc(this.firestore,t,this._query)}}class te{constructor(t,e,s){this.converter=e,this._key=s,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new yr(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new te(this.firestore,t,this._key)}toJSON(){return{type:te._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,e,s){if(Dr(e,te._jsonSchema))return new te(t,s||null,new W(Mt.fromString(e.referencePath)))}}te._jsonSchemaVersion="firestore/documentReference/1.0",te._jsonSchema={type:Ht("string",te._jsonSchemaVersion),referencePath:Ht("string")};class yr extends Zc{constructor(t,e,s){super(t,e,Oc(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new te(this.firestore,null,new W(t))}withConverter(t){return new yr(this.firestore,t,this._path)}}function QT(n,t,...e){if(n=De(n),arguments.length===1&&(t=Ac.newId()),J0("doc","path",t),n instanceof Jc){const s=Mt.fromString(t,...e);return Wh(s),new te(n,null,new W(s))}{if(!(n instanceof te||n instanceof yr))throw new H(N.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(Mt.fromString(t,...e));return Wh(s),new te(n.firestore,n instanceof yr?n.converter:null,new W(s))}}/**
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
 */const Dd="AsyncQueue";class Md{constructor(t=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Jg(this,"async_queue_retry"),this._c=()=>{const s=fl();s&&U(Dd,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=t;const e=fl();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.uc(),this.cc(t)}enterRestrictedMode(t){if(!this.ec){this.ec=!0,this.sc=t||!1;const e=fl();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this._c)}}enqueue(t){if(this.uc(),this.ec)return new Promise((()=>{}));const e=new qn;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Yu.push(t),this.lc())))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(t){if(!_i(t))throw t;U(Dd,"Operation failed with retryable error: "+t)}this.Yu.length>0&&this.M_.p_((()=>this.lc()))}}cc(t){const e=this.ac.then((()=>(this.rc=!0,t().catch((s=>{throw this.nc=s,this.rc=!1,vn("INTERNAL UNHANDLED ERROR: ",Od(s)),s})).then((s=>(this.rc=!1,s))))));return this.ac=e,e}enqueueAfterDelay(t,e,s){this.uc(),this.oc.indexOf(t)>-1&&(e=0);const i=Kc.createAndSchedule(this,t,e,s,(r=>this.hc(r)));return this.tc.push(i),i}uc(){this.nc&&G(47125,{Pc:Od(this.nc)})}verifyOperationInProgress(){}async Tc(){let t;do t=this.ac,await t;while(t!==this.ac)}Ic(t){for(const e of this.tc)if(e.timerId===t)return!0;return!1}Ec(t){return this.Tc().then((()=>{this.tc.sort(((e,s)=>e.targetTimeMs-s.targetTimeMs));for(const e of this.tc)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Tc()}))}Rc(t){this.oc.push(t)}hc(t){const e=this.tc.indexOf(t);this.tc.splice(e,1)}}function Od(n){let t=n.message||"";return n.stack&&(t=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),t}class tu extends Jc{constructor(t,e,s,i){super(t,e,s,i),this.type="firestore",this._queue=new Md,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Md(t),this._firestoreClient=void 0,await t}}}function XT(n,t){const e=typeof n=="object"?n:vp(),s=typeof n=="string"?n:Ko,i=gc(e,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=cy("firestore");r&&YT(i,...r)}return i}function _m(n){if(n._terminated)throw new H(N.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||JT(n),n._firestoreClient}function JT(n){var s,i,r,o;const t=n._freezeSettings(),e=GT(n._databaseId,((s=n._app)==null?void 0:s.options.appId)||"",n._persistenceKey,(i=n._app)==null?void 0:i.options.apiKey,t);n._componentsProvider||(r=t.localCache)!=null&&r._offlineComponentProvider&&((o=t.localCache)!=null&&o._onlineComponentProvider)&&(n._componentsProvider={_offline:t.localCache._offlineComponentProvider,_online:t.localCache._onlineComponentProvider}),n._firestoreClient=new $T(n._authCredentials,n._appCheckCredentials,n._queue,e,n._componentsProvider&&(function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}})(n._componentsProvider))}/**
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
 */class Re{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Re(ie.fromBase64String(t))}catch(e){throw new H(N.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Re(ie.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:Re._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(Dr(t,Re._jsonSchema))return Re.fromBase64String(t.bytes)}}Re._jsonSchemaVersion="firestore/bytes/1.0",Re._jsonSchema={type:Ht("string",Re._jsonSchemaVersion),bytes:Ht("string")};/**
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
 */class ym{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new H(N.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new se(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class bm{constructor(t){this._methodName=t}}/**
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
 */class Xe{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new H(N.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new H(N.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return ct(this._lat,t._lat)||ct(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Xe._jsonSchemaVersion}}static fromJSON(t){if(Dr(t,Xe._jsonSchema))return new Xe(t.latitude,t.longitude)}}Xe._jsonSchemaVersion="firestore/geoPoint/1.0",Xe._jsonSchema={type:Ht("string",Xe._jsonSchemaVersion),latitude:Ht("number"),longitude:Ht("number")};/**
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
 */class Be{constructor(t){this._values=(t||[]).map((e=>e))}toArray(){return this._values.map((t=>t))}isEqual(t){return(function(s,i){if(s.length!==i.length)return!1;for(let r=0;r<s.length;++r)if(s[r]!==i[r])return!1;return!0})(this._values,t._values)}toJSON(){return{type:Be._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(Dr(t,Be._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every((e=>typeof e=="number")))return new Be(t.vectorValues);throw new H(N.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Be._jsonSchemaVersion="firestore/vectorValue/1.0",Be._jsonSchema={type:Ht("string",Be._jsonSchemaVersion),vectorValues:Ht("object")};/**
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
 */const ZT=/^__.*__$/;class tI{constructor(t,e,s){this.data=t,this.fieldMask=e,this.fieldTransforms=s}toMutation(t,e){return this.fieldMask!==null?new Ds(t,this.data,this.fieldMask,e,this.fieldTransforms):new Mr(t,this.data,e,this.fieldTransforms)}}function vm(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw G(40011,{dataSource:n})}}class eu{constructor(t,e,s,i,r,o){this.settings=t,this.databaseId=e,this.serializer=s,this.ignoreUndefinedProperties=i,r===void 0&&this.validatePath(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(t){return new eu({...this.settings,...t},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(t){var i;const e=(i=this.path)==null?void 0:i.child(t),s=this.contextWith({path:e,arrayElement:!1});return s.validatePathSegment(t),s}childContextForFieldPath(t){var i;const e=(i=this.path)==null?void 0:i.child(t),s=this.contextWith({path:e,arrayElement:!1});return s.validatePath(),s}childContextForArray(t){return this.contextWith({path:void 0,arrayElement:!0})}createError(t){return sa(t,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(t){return this.fieldMask.find((e=>t.isPrefixOf(e)))!==void 0||this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))!==void 0}validatePath(){if(this.path)for(let t=0;t<this.path.length;t++)this.validatePathSegment(this.path.get(t))}validatePathSegment(t){if(t.length===0)throw this.createError("Document fields must not be empty");if(vm(this.dataSource)&&ZT.test(t))throw this.createError('Document fields cannot begin and end with "__"')}}class eI{constructor(t,e,s){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=s||ka(t)}createContext(t,e,s,i=!1){return new eu({dataSource:t,methodName:e,targetDoc:s,path:se.emptyPath(),arrayElement:!1,hasConverter:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function nI(n){const t=n._freezeSettings(),e=ka(n._databaseId);return new eI(n._databaseId,!!t.ignoreUndefinedProperties,e)}function sI(n,t,e,s,i,r={}){const o=n.createContext(r.merge||r.mergeFields?2:0,t,e,i);Im("Data must be an object, but it was:",o,s);const a=wm(s,o);let l,u;if(r.merge)l=new Ne(o.fieldMask),u=o.fieldTransforms;else if(r.mergeFields){const h=[];for(const d of r.mergeFields){const p=nu(t,d,e);if(!o.contains(p))throw new H(N.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);oI(h,p)||h.push(p)}l=new Ne(h),u=o.fieldTransforms.filter((d=>l.covers(d.field)))}else l=null,u=o.fieldTransforms;return new tI(new ke(a),l,u)}function Em(n,t){if(Tm(n=De(n)))return Im("Unsupported field value:",t,n),wm(n,t);if(n instanceof bm)return(function(s,i){if(!vm(i.dataSource))throw i.createError(`${s._methodName}() can only be used with update() and set()`);if(!i.path)throw i.createError(`${s._methodName}() is not currently supported inside arrays`);const r=s._toFieldTransform(i);r&&i.fieldTransforms.push(r)})(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.arrayElement&&t.dataSource!==4)throw t.createError("Nested arrays are not supported");return(function(s,i){const r=[];let o=0;for(const a of s){let l=Em(a,i.childContextForArray(o));l==null&&(l={nullValue:"NULL_VALUE"}),r.push(l),o++}return{arrayValue:{values:r}}})(n,t)}return(function(s,i){if((s=De(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return VE(i.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const r=Ct.fromDate(s);return{timestampValue:Zo(i.serializer,r)}}if(s instanceof Ct){const r=new Ct(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Zo(i.serializer,r)}}if(s instanceof Xe)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Re)return{bytesValue:Bg(i.serializer,s._byteString)};if(s instanceof te){const r=i.databaseId,o=s.firestore._databaseId;if(!o.isEqual(r))throw i.createError(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:Fc(s.firestore._databaseId||i.databaseId,s._key.path)}}if(s instanceof Be)return(function(o,a){const l=o instanceof Be?o.toArray():o;return{mapValue:{fields:{[gg]:{stringValue:mg},[Go]:{arrayValue:{values:l.map((h=>{if(typeof h!="number")throw a.createError("VectorValues must only contain numeric values.");return Lc(a.serializer,h)}))}}}}}})(s,i);if(Kg(s))return s._toProto(i.serializer);throw i.createError(`Unsupported field value: ${Pc(s)}`)})(n,t)}function wm(n,t){const e={};return cg(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Rs(n,((s,i)=>{const r=Em(i,t.childContextForField(s));r!=null&&(e[s]=r)})),{mapValue:{fields:e}}}function Tm(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Ct||n instanceof Xe||n instanceof Re||n instanceof te||n instanceof bm||n instanceof Be||Kg(n))}function Im(n,t,e){if(!Tm(e)||!ag(e)){const s=Pc(e);throw s==="an object"?t.createError(n+" a custom object"):t.createError(n+" "+s)}}function nu(n,t,e){if((t=De(t))instanceof ym)return t._internalPath;if(typeof t=="string")return rI(n,t);throw sa("Field path arguments must be of type string or ",n,!1,void 0,e)}const iI=new RegExp("[~\\*/\\[\\]]");function rI(n,t,e){if(t.search(iI)>=0)throw sa(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new ym(...t.split("."))._internalPath}catch{throw sa(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function sa(n,t,e,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${t}() called with invalid data`;e&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(r||o)&&(l+=" (found",r&&(l+=` in field ${s}`),o&&(l+=` in document ${i}`),l+=")"),new H(N.INVALID_ARGUMENT,a+n+l)}function oI(n,t){return n.some((e=>e.isEqual(t)))}/**
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
 */class aI{convertValue(t,e="none"){switch(Jn(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Bt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Xn(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw G(62114,{value:t})}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const s={};return Rs(t,((i,r)=>{s[i]=this.convertValue(r,e)})),s}convertVectorValue(t){var s,i,r;const e=(r=(i=(s=t.fields)==null?void 0:s[Go].arrayValue)==null?void 0:i.values)==null?void 0:r.map((o=>Bt(o.doubleValue)));return new Be(e)}convertGeoPoint(t){return new Xe(Bt(t.latitude),Bt(t.longitude))}convertArray(t,e){return(t.values||[]).map((s=>this.convertValue(s,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const s=wa(t);return s==null?null:this.convertValue(s,e);case"estimate":return this.convertTimestamp(fr(t));default:return null}}convertTimestamp(t){const e=Qn(t);return new Ct(e.seconds,e.nanos)}convertDocumentKey(t,e){const s=Mt.fromString(t);vt(qg(s),9688,{name:t});const i=new pr(s.get(1),s.get(3)),r=new W(s.popFirst(5));return i.isEqual(e)||vn(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),r}}/**
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
 */class lI extends aI{constructor(t){super(),this.firestore=t}convertBytes(t){return new Re(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new te(this.firestore,null,e)}}const Ld="@firebase/firestore",Vd="4.11.0";/**
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
 */class Sm{constructor(t,e,s,i,r){this._firestore=t,this._userDataWriter=e,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new te(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new cI(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var t;return((t=this._document)==null?void 0:t.data.clone().value.mapValue.fields)??void 0}get(t){if(this._document){const e=this._document.data.field(nu("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class cI extends Sm{data(){return super.data()}}function uI(n,t,e){let s;return s=n?e&&(e.merge||e.mergeFields)?n.toFirestore(t,e):n.toFirestore(t):t,s}class Hi{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class _s extends Sm{constructor(t,e,s,i,r,o){super(t,e,s,i,o),this._firestore=t,this._firestoreImpl=t,this.metadata=r}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Po(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const s=this._document.data.field(nu("DocumentSnapshot.get",t));if(s!==null)return this._userDataWriter.convertValue(s,e.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new H(N.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,e={};return e.type=_s._jsonSchemaVersion,e.bundle="",e.bundleSource="DocumentSnapshot",e.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?e:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),e.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),e)}}_s._jsonSchemaVersion="firestore/documentSnapshot/1.0",_s._jsonSchema={type:Ht("string",_s._jsonSchemaVersion),bundleSource:Ht("string","DocumentSnapshot"),bundleName:Ht("string"),bundle:Ht("string")};class Po extends _s{data(t={}){return super.data(t)}}class nr{constructor(t,e,s,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new Hi(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach((s=>{t.call(e,new Po(this._firestore,this._userDataWriter,s.key,s,new Hi(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new H(N.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=(function(i,r){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map((a=>{const l=new Po(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Hi(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}}))}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter((a=>r||a.type!==3)).map((a=>{const l=new Po(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Hi(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,h=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:hI(a.type),doc:l,oldIndex:u,newIndex:h}}))}})(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new H(N.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=nr._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=Ac.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const e=[],s=[],i=[];return this.docs.forEach((r=>{r._document!==null&&(e.push(r._document),s.push(this._userDataWriter.convertObjectMap(r._document.data.value.mapValue.fields,"previous")),i.push(r.ref.path))})),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function hI(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return G(61501,{type:n})}}/**
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
 */nr._jsonSchemaVersion="firestore/querySnapshot/1.0",nr._jsonSchema={type:Ht("string",nr._jsonSchemaVersion),bundleSource:Ht("string","QuerySnapshot"),bundleName:Ht("string"),bundle:Ht("string")};/**
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
 */function dI(n){n=hr(n,te);const t=hr(n.firestore,tu),e=_m(t);return WT(e,n._key).then((s=>gI(t,n,s)))}function fI(n,t,e){n=hr(n,te);const s=hr(n.firestore,tu),i=uI(n.converter,t,e),r=nI(s);return pI(s,[sI(r,"setDoc",n._key,i,n.converter!==null,e).toMutation(n._key,_n.none())])}function pI(n,t){const e=_m(n);return qT(e,t)}function gI(n,t,e){const s=e.docs.get(t._key),i=new lI(n);return new _s(n,i,t._key,s,new Hi(e.hasPendingWrites,e.fromCache),t.converter)}(function(t,e=!0){$0(fi),ni(new ws("firestore",((s,{instanceIdentifier:i,options:r})=>{const o=s.getProvider("app").getImmediate(),a=new tu(new H0(s.getProvider("auth-internal")),new K0(o,s.getProvider("app-check-internal")),hE(o,i),o);return r={useFetchStreams:e,...r},a._setSettings(r),a}),"PUBLIC").setMultipleInstances(!0)),Hn(Ld,Vd,t),Hn(Ld,Vd,"esm2020")})();const mI={apiKey:"AIzaSyAJMG0ma7PWBytkea1Vj2cwmdSJm42GFkE",authDomain:"cryptojournal-b7438.firebaseapp.com",projectId:"cryptojournal-b7438",storageBucket:"cryptojournal-b7438.firebasestorage.app",messagingSenderId:"413410672987",appId:"1:413410672987:web:b60d93c2d083aab6469a7e"},xm=bp(mI),su=U0(xm),_I=XT(xm),yI=new dn;function bI(){return Gv(su,yI)}function vI(){return Pv(su)}function EI(n){return Av(su,n)}function Am(n){return QT(_I,"users",n)}async function wI(n,t){await fI(Am(n),t,{merge:!0})}async function TI(n){const t=await dI(Am(n));return t.exists()?t.data():null}const Pm="cj_trades",km="cj_strategies",Rm="cj_tags",II="CryptoJournalDB",SI=1,nn="images";let ys=null;function Nd(n){ys=n}function xI(){return ys}function Da(n){localStorage.setItem(Pm,JSON.stringify(n))}function Ma(){try{const n=localStorage.getItem(Pm);return n?JSON.parse(n):[]}catch{return[]}}function sr(n){localStorage.setItem(km,JSON.stringify(n))}function Vn(){try{const n=localStorage.getItem(km);return n?JSON.parse(n):["Breakout","Mean Reversion","Trend Following","Scalp","News/Event","Range Trading","Momentum","DCA"]}catch{return["Breakout","Mean Reversion","Trend Following","Scalp"]}}function ia(n){localStorage.setItem(Rm,JSON.stringify(n))}function Js(){try{const n=localStorage.getItem(Rm);return n?JSON.parse(n):["Plan followed","FOMO","Overtrading","Revenge trade","Good execution","Stop moved","Profit taken too early"]}catch{return[]}}async function iu(){if(!ys)return;const n=Ma(),t=Vn(),e=Js();console.log(`[SYNC] Uploading to cloud: ${n.length} trades, ${t.length} strategies, ${e.length} tags`),await wI(ys,{trades:n,strategies:t,tags:e,lastSync:new Date().toISOString()}),console.log("[SYNC] Upload complete")}async function AI(){if(!ys)return console.log("[SYNC] No user, skipping download"),!1;console.log("[SYNC] Downloading from cloud for uid:",ys);const n=await TI(ys);return n?(console.log(`[SYNC] Cloud data found: ${(n.trades||[]).length} trades, lastSync: ${n.lastSync}`),n.trades&&Da(n.trades),n.strategies&&sr(n.strategies),n.tags&&ia(n.tags),!0):(console.log("[SYNC] No cloud data found"),!1)}let so=null;function Oa(){return new Promise((n,t)=>{if(so)return n(so);const e=indexedDB.open(II,SI);e.onerror=()=>t(e.error),e.onsuccess=()=>{so=e.result,n(so)},e.onupgradeneeded=s=>{const i=s.target.result;i.objectStoreNames.contains(nn)||i.createObjectStore(nn,{keyPath:"id"})}})}async function ru(n,t){const e=await Oa();return new Promise((s,i)=>{const r=e.transaction(nn,"readwrite");r.objectStore(nn).put({id:n,dataUrl:t}),r.oncomplete=()=>s(),r.onerror=()=>i(r.error)})}async function Cm(n){const t=await Oa();return new Promise((e,s)=>{const r=t.transaction(nn,"readonly").objectStore(nn).get(n);r.onsuccess=()=>{var o;return e(((o=r.result)==null?void 0:o.dataUrl)||null)},r.onerror=()=>s(r.error)})}async function PI(n){const t=await Oa();return new Promise((e,s)=>{const i=t.transaction(nn,"readwrite");i.objectStore(nn).delete(n),i.oncomplete=()=>e(),i.onerror=()=>s(i.error)})}async function kI(){const n=await Oa();return new Promise((t,e)=>{const i=n.transaction(nn,"readonly").objectStore(nn).getAll();i.onsuccess=()=>t(i.result||[]),i.onerror=()=>e(i.error)})}async function RI(){const n=Ma(),t=Vn(),e=Js(),s=await kI();return{trades:n,strategies:t,tags:e,images:s,exportDate:new Date().toISOString()}}async function CI(n){if(n.trades&&Da(n.trades),n.strategies&&sr(n.strategies),n.tags&&ia(n.tags),n.images)for(const t of n.images)await ru(t.id,t.dataUrl);await iu()}function DI(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var ko={exports:{}};/* @license
Papa Parse
v5.5.3
https://github.com/mholt/PapaParse
License: MIT
*/var MI=ko.exports,Fd;function OI(){return Fd||(Fd=1,(function(n,t){((e,s)=>{n.exports=s()})(MI,function e(){var s=typeof self<"u"?self:typeof window<"u"?window:s!==void 0?s:{},i,r=!s.document&&!!s.postMessage,o=s.IS_PAPA_WORKER||!1,a={},l=0,u={};function h(g){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},(function(_){var b=M(_);b.chunkSize=parseInt(b.chunkSize),_.step||_.chunk||(b.chunkSize=null),this._handle=new w(b),(this._handle.streamer=this)._config=b}).call(this,g),this.parseChunk=function(_,b){var v=parseInt(this._config.skipFirstNLines)||0;if(this.isFirstChunk&&0<v){let x=this._config.newline;x||(A=this._config.quoteChar||'"',x=this._handle.guessLineEndings(_,A)),_=[..._.split(x).slice(v)].join(x)}this.isFirstChunk&&S(this._config.beforeFirstChunk)&&(A=this._config.beforeFirstChunk(_))!==void 0&&(_=A),this.isFirstChunk=!1,this._halted=!1;var v=this._partialLine+_,A=(this._partialLine="",this._handle.parse(v,this._baseIndex,!this._finished));if(!this._handle.paused()&&!this._handle.aborted()){if(_=A.meta.cursor,v=(this._finished||(this._partialLine=v.substring(_-this._baseIndex),this._baseIndex=_),A&&A.data&&(this._rowCount+=A.data.length),this._finished||this._config.preview&&this._rowCount>=this._config.preview),o)s.postMessage({results:A,workerId:u.WORKER_ID,finished:v});else if(S(this._config.chunk)&&!b){if(this._config.chunk(A,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);this._completeResults=A=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(A.data),this._completeResults.errors=this._completeResults.errors.concat(A.errors),this._completeResults.meta=A.meta),this._completed||!v||!S(this._config.complete)||A&&A.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),v||A&&A.meta.paused||this._nextChunk(),A}this._halted=!0},this._sendError=function(_){S(this._config.error)?this._config.error(_):o&&this._config.error&&s.postMessage({workerId:u.WORKER_ID,error:_,finished:!1})}}function d(g){var _;(g=g||{}).chunkSize||(g.chunkSize=u.RemoteChunkSize),h.call(this,g),this._nextChunk=r?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(b){this._input=b,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(_=new XMLHttpRequest,this._config.withCredentials&&(_.withCredentials=this._config.withCredentials),r||(_.onload=L(this._chunkLoaded,this),_.onerror=L(this._chunkError,this)),_.open(this._config.downloadRequestBody?"POST":"GET",this._input,!r),this._config.downloadRequestHeaders){var b,v=this._config.downloadRequestHeaders;for(b in v)_.setRequestHeader(b,v[b])}var A;this._config.chunkSize&&(A=this._start+this._config.chunkSize-1,_.setRequestHeader("Range","bytes="+this._start+"-"+A));try{_.send(this._config.downloadRequestBody)}catch(x){this._chunkError(x.message)}r&&_.status===0&&this._chunkError()}},this._chunkLoaded=function(){_.readyState===4&&(_.status<200||400<=_.status?this._chunkError():(this._start+=this._config.chunkSize||_.responseText.length,this._finished=!this._config.chunkSize||this._start>=(b=>(b=b.getResponseHeader("Content-Range"))!==null?parseInt(b.substring(b.lastIndexOf("/")+1)):-1)(_),this.parseChunk(_.responseText)))},this._chunkError=function(b){b=_.statusText||b,this._sendError(new Error(b))}}function p(g){(g=g||{}).chunkSize||(g.chunkSize=u.LocalChunkSize),h.call(this,g);var _,b,v=typeof FileReader<"u";this.stream=function(A){this._input=A,b=A.slice||A.webkitSlice||A.mozSlice,v?((_=new FileReader).onload=L(this._chunkLoaded,this),_.onerror=L(this._chunkError,this)):_=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var A=this._input,x=(this._config.chunkSize&&(x=Math.min(this._start+this._config.chunkSize,this._input.size),A=b.call(A,this._start,x)),_.readAsText(A,this._config.encoding));v||this._chunkLoaded({target:{result:x}})},this._chunkLoaded=function(A){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(A.target.result)},this._chunkError=function(){this._sendError(_.error)}}function y(g){var _;h.call(this,g=g||{}),this.stream=function(b){return _=b,this._nextChunk()},this._nextChunk=function(){var b,v;if(!this._finished)return b=this._config.chunkSize,_=b?(v=_.substring(0,b),_.substring(b)):(v=_,""),this._finished=!_,this.parseChunk(v)}}function E(g){h.call(this,g=g||{});var _=[],b=!0,v=!1;this.pause=function(){h.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){h.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(A){this._input=A,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){v&&_.length===1&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),_.length?this.parseChunk(_.shift()):b=!0},this._streamData=L(function(A){try{_.push(typeof A=="string"?A:A.toString(this._config.encoding)),b&&(b=!1,this._checkIsFinished(),this.parseChunk(_.shift()))}catch(x){this._streamError(x)}},this),this._streamError=L(function(A){this._streamCleanUp(),this._sendError(A)},this),this._streamEnd=L(function(){this._streamCleanUp(),v=!0,this._streamData("")},this),this._streamCleanUp=L(function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)},this)}function w(g){var _,b,v,A,x=Math.pow(2,53),q=-x,K=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,it=/^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,j=this,rt=0,B=0,Pt=!1,Y=!1,X=[],z={data:[],errors:[],meta:{}};function mt(ot){return g.skipEmptyLines==="greedy"?ot.join("").trim()==="":ot.length===1&&ot[0].length===0}function yt(){if(z&&v&&(re("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+u.DefaultDelimiter+"'"),v=!1),g.skipEmptyLines&&(z.data=z.data.filter(function(Tt){return!mt(Tt)})),Et()){let Tt=function(Vt,It){S(g.transformHeader)&&(Vt=g.transformHeader(Vt,It)),X.push(Vt)};var at=Tt;if(z)if(Array.isArray(z.data[0])){for(var ot=0;Et()&&ot<z.data.length;ot++)z.data[ot].forEach(Tt);z.data.splice(0,1)}else z.data.forEach(Tt)}function ft(Tt,Vt){for(var It=g.header?{}:[],bt=0;bt<Tt.length;bt++){var tt=bt,zt=Tt[bt],zt=((gt,et)=>(dt=>(g.dynamicTypingFunction&&g.dynamicTyping[dt]===void 0&&(g.dynamicTyping[dt]=g.dynamicTypingFunction(dt)),(g.dynamicTyping[dt]||g.dynamicTyping)===!0))(gt)?et==="true"||et==="TRUE"||et!=="false"&&et!=="FALSE"&&((dt=>{if(K.test(dt)&&(dt=parseFloat(dt),q<dt&&dt<x))return 1})(et)?parseFloat(et):it.test(et)?new Date(et):et===""?null:et):et)(tt=g.header?bt>=X.length?"__parsed_extra":X[bt]:tt,zt=g.transform?g.transform(zt,tt):zt);tt==="__parsed_extra"?(It[tt]=It[tt]||[],It[tt].push(zt)):It[tt]=zt}return g.header&&(bt>X.length?re("FieldMismatch","TooManyFields","Too many fields: expected "+X.length+" fields but parsed "+bt,B+Vt):bt<X.length&&re("FieldMismatch","TooFewFields","Too few fields: expected "+X.length+" fields but parsed "+bt,B+Vt)),It}var Dt;z&&(g.header||g.dynamicTyping||g.transform)&&(Dt=1,!z.data.length||Array.isArray(z.data[0])?(z.data=z.data.map(ft),Dt=z.data.length):z.data=ft(z.data,0),g.header&&z.meta&&(z.meta.fields=X),B+=Dt)}function Et(){return g.header&&X.length===0}function re(ot,ft,Dt,at){ot={type:ot,code:ft,message:Dt},at!==void 0&&(ot.row=at),z.errors.push(ot)}S(g.step)&&(A=g.step,g.step=function(ot){z=ot,Et()?yt():(yt(),z.data.length!==0&&(rt+=ot.data.length,g.preview&&rt>g.preview?b.abort():(z.data=z.data[0],A(z,j))))}),this.parse=function(ot,ft,Dt){var at=g.quoteChar||'"',at=(g.newline||(g.newline=this.guessLineEndings(ot,at)),v=!1,g.delimiter?S(g.delimiter)&&(g.delimiter=g.delimiter(ot),z.meta.delimiter=g.delimiter):((at=((Tt,Vt,It,bt,tt)=>{var zt,gt,et,dt;tt=tt||[",","	","|",";",u.RECORD_SEP,u.UNIT_SEP];for(var Me=0;Me<tt.length;Me++){for(var xe,In=tt[Me],Xt=0,oe=0,Ut=0,ee=(et=void 0,new P({comments:bt,delimiter:In,newline:Vt,preview:10}).parse(Tt)),ve=0;ve<ee.data.length;ve++)It&&mt(ee.data[ve])?Ut++:(xe=ee.data[ve].length,oe+=xe,et===void 0?et=xe:0<xe&&(Xt+=Math.abs(xe-et),et=xe));0<ee.data.length&&(oe/=ee.data.length-Ut),(gt===void 0||Xt<=gt)&&(dt===void 0||dt<oe)&&1.99<oe&&(gt=Xt,zt=In,dt=oe)}return{successful:!!(g.delimiter=zt),bestDelimiter:zt}})(ot,g.newline,g.skipEmptyLines,g.comments,g.delimitersToGuess)).successful?g.delimiter=at.bestDelimiter:(v=!0,g.delimiter=u.DefaultDelimiter),z.meta.delimiter=g.delimiter),M(g));return g.preview&&g.header&&at.preview++,_=ot,b=new P(at),z=b.parse(_,ft,Dt),yt(),Pt?{meta:{paused:!0}}:z||{meta:{paused:!1}}},this.paused=function(){return Pt},this.pause=function(){Pt=!0,b.abort(),_=S(g.chunk)?"":_.substring(b.getCharIndex())},this.resume=function(){j.streamer._halted?(Pt=!1,j.streamer.parseChunk(_,!0)):setTimeout(j.resume,3)},this.aborted=function(){return Y},this.abort=function(){Y=!0,b.abort(),z.meta.aborted=!0,S(g.complete)&&g.complete(z),_=""},this.guessLineEndings=function(Tt,at){Tt=Tt.substring(0,1048576);var at=new RegExp(I(at)+"([^]*?)"+I(at),"gm"),Dt=(Tt=Tt.replace(at,"")).split("\r"),at=Tt.split(`
`),Tt=1<at.length&&at[0].length<Dt[0].length;if(Dt.length===1||Tt)return`
`;for(var Vt=0,It=0;It<Dt.length;It++)Dt[It][0]===`
`&&Vt++;return Vt>=Dt.length/2?`\r
`:"\r"}}function I(g){return g.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function P(g){var _=(g=g||{}).delimiter,b=g.newline,v=g.comments,A=g.step,x=g.preview,q=g.fastMode,K=null,it=!1,j=g.quoteChar==null?'"':g.quoteChar,rt=j;if(g.escapeChar!==void 0&&(rt=g.escapeChar),(typeof _!="string"||-1<u.BAD_DELIMITERS.indexOf(_))&&(_=","),v===_)throw new Error("Comment character same as delimiter");v===!0?v="#":(typeof v!="string"||-1<u.BAD_DELIMITERS.indexOf(v))&&(v=!1),b!==`
`&&b!=="\r"&&b!==`\r
`&&(b=`
`);var B=0,Pt=!1;this.parse=function(Y,X,z){if(typeof Y!="string")throw new Error("Input must be a string");var mt=Y.length,yt=_.length,Et=b.length,re=v.length,ot=S(A),ft=[],Dt=[],at=[],Tt=B=0;if(!Y)return Xt();if(q||q!==!1&&Y.indexOf(j)===-1){for(var Vt=Y.split(b),It=0;It<Vt.length;It++){if(at=Vt[It],B+=at.length,It!==Vt.length-1)B+=b.length;else if(z)return Xt();if(!v||at.substring(0,re)!==v){if(ot){if(ft=[],dt(at.split(_)),oe(),Pt)return Xt()}else dt(at.split(_));if(x&&x<=It)return ft=ft.slice(0,x),Xt(!0)}}return Xt()}for(var bt=Y.indexOf(_,B),tt=Y.indexOf(b,B),zt=new RegExp(I(rt)+I(j),"g"),gt=Y.indexOf(j,B);;)if(Y[B]===j)for(gt=B,B++;;){if((gt=Y.indexOf(j,gt+1))===-1)return z||Dt.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:ft.length,index:B}),xe();if(gt===mt-1)return xe(Y.substring(B,gt).replace(zt,j));if(j===rt&&Y[gt+1]===rt)gt++;else if(j===rt||gt===0||Y[gt-1]!==rt){bt!==-1&&bt<gt+1&&(bt=Y.indexOf(_,gt+1));var et=Me((tt=tt!==-1&&tt<gt+1?Y.indexOf(b,gt+1):tt)===-1?bt:Math.min(bt,tt));if(Y.substr(gt+1+et,yt)===_){at.push(Y.substring(B,gt).replace(zt,j)),Y[B=gt+1+et+yt]!==j&&(gt=Y.indexOf(j,B)),bt=Y.indexOf(_,B),tt=Y.indexOf(b,B);break}if(et=Me(tt),Y.substring(gt+1+et,gt+1+et+Et)===b){if(at.push(Y.substring(B,gt).replace(zt,j)),In(gt+1+et+Et),bt=Y.indexOf(_,B),gt=Y.indexOf(j,B),ot&&(oe(),Pt))return Xt();if(x&&ft.length>=x)return Xt(!0);break}Dt.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:ft.length,index:B}),gt++}}else if(v&&at.length===0&&Y.substring(B,B+re)===v){if(tt===-1)return Xt();B=tt+Et,tt=Y.indexOf(b,B),bt=Y.indexOf(_,B)}else if(bt!==-1&&(bt<tt||tt===-1))at.push(Y.substring(B,bt)),B=bt+yt,bt=Y.indexOf(_,B);else{if(tt===-1)break;if(at.push(Y.substring(B,tt)),In(tt+Et),ot&&(oe(),Pt))return Xt();if(x&&ft.length>=x)return Xt(!0)}return xe();function dt(Ut){ft.push(Ut),Tt=B}function Me(Ut){var ee=0;return ee=Ut!==-1&&(Ut=Y.substring(gt+1,Ut))&&Ut.trim()===""?Ut.length:ee}function xe(Ut){return z||(Ut===void 0&&(Ut=Y.substring(B)),at.push(Ut),B=mt,dt(at),ot&&oe()),Xt()}function In(Ut){B=Ut,dt(at),at=[],tt=Y.indexOf(b,B)}function Xt(Ut){if(g.header&&!X&&ft.length&&!it){var ee=ft[0],ve=Object.create(null),vi=new Set(ee);let Ur=!1;for(let rn=0;rn<ee.length;rn++){let Ee=ee[rn];if(ve[Ee=S(g.transformHeader)?g.transformHeader(Ee,rn):Ee]){let Oe,Ls=ve[Ee];for(;Oe=Ee+"_"+Ls,Ls++,vi.has(Oe););vi.add(Oe),ee[rn]=Oe,ve[Ee]++,Ur=!0,(K=K===null?{}:K)[Oe]=Ee}else ve[Ee]=1,ee[rn]=Ee;vi.add(Ee)}Ur&&console.warn("Duplicate headers found and renamed."),it=!0}return{data:ft,errors:Dt,meta:{delimiter:_,linebreak:b,aborted:Pt,truncated:!!Ut,cursor:Tt+(X||0),renamedHeaders:K}}}function oe(){A(Xt()),ft=[],Dt=[]}},this.abort=function(){Pt=!0},this.getCharIndex=function(){return B}}function k(g){var _=g.data,b=a[_.workerId],v=!1;if(_.error)b.userError(_.error,_.file);else if(_.results&&_.results.data){var A={abort:function(){v=!0,R(_.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:D,resume:D};if(S(b.userStep)){for(var x=0;x<_.results.data.length&&(b.userStep({data:_.results.data[x],errors:_.results.errors,meta:_.results.meta},A),!v);x++);delete _.results}else S(b.userChunk)&&(b.userChunk(_.results,A,_.file),delete _.results)}_.finished&&!v&&R(_.workerId,_.results)}function R(g,_){var b=a[g];S(b.userComplete)&&b.userComplete(_),b.terminate(),delete a[g]}function D(){throw new Error("Not implemented.")}function M(g){if(typeof g!="object"||g===null)return g;var _,b=Array.isArray(g)?[]:{};for(_ in g)b[_]=M(g[_]);return b}function L(g,_){return function(){g.apply(_,arguments)}}function S(g){return typeof g=="function"}return u.parse=function(g,_){var b=(_=_||{}).dynamicTyping||!1;if(S(b)&&(_.dynamicTypingFunction=b,b={}),_.dynamicTyping=b,_.transform=!!S(_.transform)&&_.transform,!_.worker||!u.WORKERS_SUPPORTED)return b=null,u.NODE_STREAM_INPUT,typeof g=="string"?(g=(v=>v.charCodeAt(0)!==65279?v:v.slice(1))(g),b=new(_.download?d:y)(_)):g.readable===!0&&S(g.read)&&S(g.on)?b=new E(_):(s.File&&g instanceof File||g instanceof Object)&&(b=new p(_)),b.stream(g);(b=(()=>{var v;return!!u.WORKERS_SUPPORTED&&(v=(()=>{var A=s.URL||s.webkitURL||null,x=e.toString();return u.BLOB_URL||(u.BLOB_URL=A.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ","(",x,")();"],{type:"text/javascript"})))})(),(v=new s.Worker(v)).onmessage=k,v.id=l++,a[v.id]=v)})()).userStep=_.step,b.userChunk=_.chunk,b.userComplete=_.complete,b.userError=_.error,_.step=S(_.step),_.chunk=S(_.chunk),_.complete=S(_.complete),_.error=S(_.error),delete _.worker,b.postMessage({input:g,config:_,workerId:b.id})},u.unparse=function(g,_){var b=!1,v=!0,A=",",x=`\r
`,q='"',K=q+q,it=!1,j=null,rt=!1,B=((()=>{if(typeof _=="object"){if(typeof _.delimiter!="string"||u.BAD_DELIMITERS.filter(function(X){return _.delimiter.indexOf(X)!==-1}).length||(A=_.delimiter),typeof _.quotes!="boolean"&&typeof _.quotes!="function"&&!Array.isArray(_.quotes)||(b=_.quotes),typeof _.skipEmptyLines!="boolean"&&typeof _.skipEmptyLines!="string"||(it=_.skipEmptyLines),typeof _.newline=="string"&&(x=_.newline),typeof _.quoteChar=="string"&&(q=_.quoteChar),typeof _.header=="boolean"&&(v=_.header),Array.isArray(_.columns)){if(_.columns.length===0)throw new Error("Option columns is empty");j=_.columns}_.escapeChar!==void 0&&(K=_.escapeChar+q),_.escapeFormulae instanceof RegExp?rt=_.escapeFormulae:typeof _.escapeFormulae=="boolean"&&_.escapeFormulae&&(rt=/^[=+\-@\t\r].*$/)}})(),new RegExp(I(q),"g"));if(typeof g=="string"&&(g=JSON.parse(g)),Array.isArray(g)){if(!g.length||Array.isArray(g[0]))return Pt(null,g,it);if(typeof g[0]=="object")return Pt(j||Object.keys(g[0]),g,it)}else if(typeof g=="object")return typeof g.data=="string"&&(g.data=JSON.parse(g.data)),Array.isArray(g.data)&&(g.fields||(g.fields=g.meta&&g.meta.fields||j),g.fields||(g.fields=Array.isArray(g.data[0])?g.fields:typeof g.data[0]=="object"?Object.keys(g.data[0]):[]),Array.isArray(g.data[0])||typeof g.data[0]=="object"||(g.data=[g.data])),Pt(g.fields||[],g.data||[],it);throw new Error("Unable to serialize unrecognized input");function Pt(X,z,mt){var yt="",Et=(typeof X=="string"&&(X=JSON.parse(X)),typeof z=="string"&&(z=JSON.parse(z)),Array.isArray(X)&&0<X.length),re=!Array.isArray(z[0]);if(Et&&v){for(var ot=0;ot<X.length;ot++)0<ot&&(yt+=A),yt+=Y(X[ot],ot);0<z.length&&(yt+=x)}for(var ft=0;ft<z.length;ft++){var Dt=(Et?X:z[ft]).length,at=!1,Tt=Et?Object.keys(z[ft]).length===0:z[ft].length===0;if(mt&&!Et&&(at=mt==="greedy"?z[ft].join("").trim()==="":z[ft].length===1&&z[ft][0].length===0),mt==="greedy"&&Et){for(var Vt=[],It=0;It<Dt;It++){var bt=re?X[It]:It;Vt.push(z[ft][bt])}at=Vt.join("").trim()===""}if(!at){for(var tt=0;tt<Dt;tt++){0<tt&&!Tt&&(yt+=A);var zt=Et&&re?X[tt]:tt;yt+=Y(z[ft][zt],tt)}ft<z.length-1&&(!mt||0<Dt&&!Tt)&&(yt+=x)}}return yt}function Y(X,z){var mt,yt;return X==null?"":X.constructor===Date?JSON.stringify(X).slice(1,25):(yt=!1,rt&&typeof X=="string"&&rt.test(X)&&(X="'"+X,yt=!0),mt=X.toString().replace(B,K),(yt=yt||b===!0||typeof b=="function"&&b(X,z)||Array.isArray(b)&&b[z]||((Et,re)=>{for(var ot=0;ot<re.length;ot++)if(-1<Et.indexOf(re[ot]))return!0;return!1})(mt,u.BAD_DELIMITERS)||-1<mt.indexOf(A)||mt.charAt(0)===" "||mt.charAt(mt.length-1)===" ")?q+mt+q:mt)}},u.RECORD_SEP="",u.UNIT_SEP="",u.BYTE_ORDER_MARK="\uFEFF",u.BAD_DELIMITERS=["\r",`
`,'"',u.BYTE_ORDER_MARK],u.WORKERS_SUPPORTED=!r&&!!s.Worker,u.NODE_STREAM_INPUT=1,u.LocalChunkSize=10485760,u.RemoteChunkSize=5242880,u.DefaultDelimiter=",",u.Parser=P,u.ParserHandle=w,u.NetworkStreamer=d,u.FileStreamer=p,u.StringStreamer=y,u.ReadableStreamStreamer=E,s.jQuery&&((i=s.jQuery).fn.parse=function(g){var _=g.config||{},b=[];return this.each(function(x){if(!(i(this).prop("tagName").toUpperCase()==="INPUT"&&i(this).attr("type").toLowerCase()==="file"&&s.FileReader)||!this.files||this.files.length===0)return!0;for(var q=0;q<this.files.length;q++)b.push({file:this.files[q],inputElem:this,instanceConfig:i.extend({},_)})}),v(),this;function v(){if(b.length===0)S(g.complete)&&g.complete();else{var x,q,K,it,j=b[0];if(S(g.before)){var rt=g.before(j.file,j.inputElem);if(typeof rt=="object"){if(rt.action==="abort")return x="AbortError",q=j.file,K=j.inputElem,it=rt.reason,void(S(g.error)&&g.error({name:x},q,K,it));if(rt.action==="skip")return void A();typeof rt.config=="object"&&(j.instanceConfig=i.extend(j.instanceConfig,rt.config))}else if(rt==="skip")return void A()}var B=j.instanceConfig.complete;j.instanceConfig.complete=function(Pt){S(B)&&B(Pt,j.file,j.inputElem),A()},u.parse(j.file,j.instanceConfig)}}function A(){b.splice(0,1),v()}}),o&&(s.onmessage=function(g){g=g.data,u.WORKER_ID===void 0&&g&&(u.WORKER_ID=g.workerId),typeof g.input=="string"?s.postMessage({workerId:u.WORKER_ID,results:u.parse(g.input,g.config),finished:!0}):(s.File&&g.input instanceof File||g.input instanceof Object)&&(g=u.parse(g.input,g.config))&&s.postMessage({workerId:u.WORKER_ID,results:g,finished:!0})}),(d.prototype=Object.create(h.prototype)).constructor=d,(p.prototype=Object.create(h.prototype)).constructor=p,(y.prototype=Object.create(y.prototype)).constructor=y,(E.prototype=Object.create(h.prototype)).constructor=E,u})})(ko)),ko.exports}var LI=OI();const VI=DI(LI);function NI(n){return new Promise((t,e)=>{VI.parse(n,{header:!0,skipEmptyLines:!0,dynamicTyping:!1,complete(s){s.errors.length>0&&console.warn("CSV parse warnings:",s.errors);try{const i=s.data.filter(o=>o.time&&o.coin).map(o=>FI(o)),r=UI(i);t(r)}catch(i){e(i)}},error(s){e(s)}})})}function FI(n){const t=(n.dir||"").trim(),e=/long/i.test(t),s=/short/i.test(t),i=/open/i.test(t),r=/close/i.test(t);return{time:zI(n.time),coin:(n.coin||"").trim().toUpperCase(),direction:e?"Long":s?"Short":t,action:i?"Open":r?"Close":"Unknown",dirRaw:t,price:ge(n.px),size:ge(n.sz),notional:ge(n.ntl),fee:ge(n.fee),closedPnl:ge(n.closedPnl)}}function UI(n){n.sort((s,i)=>s.time.localeCompare(i.time));const t={},e=[];for(const s of n){const i=`${s.coin}_${s.direction}`;if(s.action==="Open")t[i]||(t[i]=[]),t[i].push(s);else if(s.action==="Close")if(t[i]&&t[i].length>0){const r=t[i].shift();e.push(BI(r,s))}else e.push(gl(s,!0));else e.push(gl(s,s.closedPnl!==0))}for(const s of Object.values(t))for(const i of s)e.push(gl(i,!1));return e.sort((s,i)=>i.time.localeCompare(s.time)),e}function BI(n,t){return{id:Dm(n.time,n.coin,n.direction,n.price),time:n.time,exitTime:t.time,coin:n.coin,direction:n.direction,entryPrice:n.price,exitPrice:t.price,size:n.size,notional:n.notional,fee:n.fee+t.fee,closedPnl:t.closedPnl,status:"Completed",risk:0,strategy:"",notes:"",tags:[],images:[],mae:null,mfe:null,source:"csv"}}function gl(n,t){return{id:Dm(n.time,n.coin,n.direction,n.price),time:n.time,exitTime:t?n.time:null,coin:n.coin,direction:n.direction,entryPrice:t?0:n.price,exitPrice:t?n.price:null,size:n.size,notional:n.notional,fee:n.fee,closedPnl:n.closedPnl,status:t?"Completed":"Active",risk:0,strategy:"",notes:"",tags:[],images:[],mae:null,mfe:null,source:"csv"}}function $I(n){const t=ge(n.entryPrice),e=n.exitPrice!=null&&n.exitPrice!==""&&ge(n.exitPrice)!==0?ge(n.exitPrice):null,s=ge(n.size),i=ge(n.fee),r=n.direction||"Long";let o=0;return e&&t&&s&&(o=r==="Long"?(e-t)*s-i:(t-e)*s-i),ge(n.closedPnl)&&(o=ge(n.closedPnl)),{id:"manual_"+Date.now()+"_"+Math.random().toString(36).slice(2,8),time:n.time||new Date().toISOString(),exitTime:e?n.exitTime||n.time||new Date().toISOString():null,coin:(n.coin||"").toUpperCase(),direction:r,entryPrice:t,exitPrice:e,size:s,notional:t*s,fee:i,closedPnl:o,status:e?"Completed":"Active",risk:n.risk||0,strategy:n.strategy||"",notes:n.notes||"",tags:n.tags||[],images:n.images||[],mae:n.mae!=null?ge(n.mae):null,mfe:n.mfe!=null?ge(n.mfe):null,source:"manual"}}function Dm(n,t,e,s){const i=`${n}_${t}_${e}_${s}`;let r=0;for(let o=0;o<i.length;o++){const a=i.charCodeAt(o);r=(r<<5)-r+a,r=r&r}return"hl_"+Math.abs(r).toString(36)}function zI(n){if(!n)return new Date().toISOString();const t=new Date(n.trim());return isNaN(t.getTime())?new Date().toISOString():t.toISOString()}function ge(n){if(n==null||n==="")return 0;const t=parseFloat(String(n).replace(/,/g,""));return isNaN(t)?0:t}function jI(n,t){const e=new Set(n.map(i=>i.id)),s=t.filter(i=>!e.has(i.id));return[...n,...s]}function HI(n){return n.map(t=>(t.entryPrice===void 0&&t.price!==void 0&&(t={...t,entryPrice:t.action==="Open"?t.price:0,exitPrice:t.action==="Close"?t.price:null,exitTime:t.action==="Close"?t.time:null,status:t.action==="Close"||t.closedPnl!==0?"Completed":"Active"}),t.legs&&t.legs.length>0&&(t.legs.filter(e=>e.type==="entry"),t.legs.filter(e=>e.type==="exit"),t={...t},delete t.legs,delete t.remainingSize,delete t._tradeId),t.status===void 0&&(t.status=t.exitPrice?"Completed":"Active"),t.notional===void 0&&(t.notional=(t.entryPrice||0)*(t.size||0)),t))}function Mm(n){const t=n.filter(R=>R.closedPnl!==0||R.action==="Close"),e=t.filter(R=>R.closedPnl>0),s=t.filter(R=>R.closedPnl<0),i=t.reduce((R,D)=>R+D.closedPnl,0),r=n.reduce((R,D)=>R+Math.abs(D.fee),0),o=i,a=e.length?e.reduce((R,D)=>R+D.closedPnl,0)/e.length:0,l=s.length?Math.abs(s.reduce((R,D)=>R+D.closedPnl,0)/s.length):0,u=e.reduce((R,D)=>R+D.closedPnl,0),h=Math.abs(s.reduce((R,D)=>R+D.closedPnl,0)),d=h>0?u/h:u>0?1/0:0,p=t.length?Math.max(...t.map(R=>R.closedPnl)):0,y=t.length?Math.min(...t.map(R=>R.closedPnl)):0,E=t.length?e.length/t.length*100:0,w=t.filter(R=>R.mae!=null&&R.mae!==0),I=t.filter(R=>R.mfe!=null&&R.mfe!==0),P=w.length?w.reduce((R,D)=>R+D.mae,0)/w.length:null,k=I.length?I.reduce((R,D)=>R+D.mfe,0)/I.length:null;return{totalTrades:n.length,closingTrades:t.length,wins:e.length,losses:s.length,totalPnl:i,totalFees:r,netPnl:o,winRate:E,avgWin:a,avgLoss:l,profitFactor:d,bestTrade:p,worstTrade:y,avgMae:P,avgMfe:k}}function ou(n,t){const e={};n.forEach(i=>{const r=t(i);r&&(e[r]||(e[r]=[]),e[r].push(i))});const s={};for(const[i,r]of Object.entries(e))s[i]=Mm(r);return s}function WI(n){return ou(n,t=>t.coin)}function qI(n){return ou(n,t=>t.strategy||null)}function KI(n){return ou(n,t=>t.risk>0?`Risk ${t.risk}`:null)}function au(n){const t=n.filter(s=>s.closedPnl!==0||s.action==="Close"),e={};return t.forEach(s=>{const i=s.time.slice(0,10);e[i]||(e[i]={date:i,pnl:0,trades:0,fees:0}),e[i].pnl+=s.closedPnl,e[i].trades+=1,e[i].fees+=Math.abs(s.fee)}),Object.values(e).sort((s,i)=>s.date.localeCompare(i.date))}function GI(n){const t=au(n);let e=0;return t.map(s=>(e+=s.pnl,{date:s.date,equity:e}))}function YI(n){const t=n.filter(s=>s.closedPnl!==0||s.action==="Close"),e={};return t.forEach(s=>{e[s.coin]||(e[s.coin]=0),e[s.coin]+=s.closedPnl}),Object.entries(e).map(([s,i])=>({coin:s,pnl:i})).sort((s,i)=>i.pnl-s.pnl)}function QI(n){const t=n.filter(s=>s.strategy&&(s.closedPnl!==0||s.action==="Close")),e={};return t.forEach(s=>{e[s.strategy]||(e[s.strategy]=0),e[s.strategy]+=s.closedPnl}),Object.entries(e).map(([s,i])=>({strategy:s,pnl:i})).sort((s,i)=>i.pnl-s.pnl)}function XI(n){return n.filter(t=>t.mae!=null&&t.mfe!=null&&(t.mae!==0||t.mfe!==0)).map(t=>({mae:t.mae,mfe:t.mfe,pnl:t.closedPnl,coin:t.coin,isWin:t.closedPnl>0}))}function JI(n){const t=au(n),e={};return t.forEach(s=>{e[s.date]=s}),e}function qt(n){return n==null?"-":(n>0?"+":n<0?"-":"")+"$"+Math.abs(n).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})}function qs(n){return n==null?"-":n.toFixed(1)+"%"}function ZI(n){if(!n)return"-";const t=new Date(n);return t.toLocaleDateString("en-US",{day:"2-digit",month:"2-digit",year:"numeric"})+" "+t.toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit"})}function tS(n,t){const e=Mm(n);t.innerHTML=`
    <div class="page-header">
      <div>
        <h2 class="page-title">Dashboard</h2>
        <p class="page-subtitle">Trading performance overview</p>
      </div>
    </div>

    ${n.length===0?eS():nS(e,n)}
  `}function eS(){return`
    <div class="empty-state">
      <div class="empty-state-icon">📊</div>
      <h3 class="empty-state-title">No trades imported</h3>
      <p class="empty-state-text">Import a CSV from Hyperliquid or add a manual trade to see the dashboard.</p>
    </div>
  `}function nS(n,t){const e=t.filter(i=>i.status==="Active"),s=e.reduce((i,r)=>{const o=r.remainingSize!=null?r.remainingSize:r.size;return i+(r.entryPrice||0)*o},0);return`
    <div class="kpi-grid">
      ${on("Invested Now","$"+s.toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2}),"neutral",`${e.length} active trades`,"stagger-1")}
      ${on("Total P&L",qt(n.totalPnl),n.totalPnl>=0?"profit":"loss",`${n.closingTrades} closing trades`,"stagger-2")}
      ${on("Net P&L",qt(n.netPnl),n.netPnl>=0?"profit":"loss",`Fees: ${qt(-n.totalFees)}`,"stagger-3")}
      ${on("Win Rate",qs(n.winRate),n.winRate>=50?"profit":"loss",`${n.wins}W / ${n.losses}L`,"stagger-4")}
      ${on("Profit Factor",n.profitFactor===1/0?"∞":n.profitFactor.toFixed(2),n.profitFactor>=1?"profit":"loss","","stagger-5")}
      ${on("Avg Win",qt(n.avgWin),"profit","","stagger-6")}
      ${on("Avg Loss",qt(-n.avgLoss),"loss","","stagger-7")}
      ${on("Best Trade",qt(n.bestTrade),"profit","","stagger-8")}
      ${on("Worst Trade",qt(n.worstTrade),"loss","","")}
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
  `}function on(n,t,e,s,i){return`
    <div class="kpi-card animate-in ${i}">
      <div class="kpi-label">${n}</div>
      <div class="kpi-value ${e}">${t}</div>
      ${s?`<div class="kpi-sub">${s}</div>`:""}
    </div>
  `}const ml=25;let Pe=1,br="time",Zs="desc",Ft={coin:"",direction:"",strategy:"",dateFrom:"",dateTo:""};function La(n,t,e){const s=Vn(),i=[...new Set(n.map(u=>u.coin))].sort(),r=rS(n),o=oS(r),a=Math.max(1,Math.ceil(o.length/ml));Pe>a&&(Pe=a);const l=o.slice((Pe-1)*ml,Pe*ml);t.innerHTML=`
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
            ${Te("time","Data")}
            ${Te("coin","Coin")}
            ${Te("direction","Dir")}
            ${Te("status","Status")}
            ${Te("entryPrice","Entry")}
            ${Te("exitPrice","Exit")}
            ${Te("size","Size")}
            ${Te("fee","Fee")}
            ${Te("closedPnl","P&L")}
            ${Te("strategy","Strategy")}
            <th>Tags</th>
            ${Te("risk","Risk")}
            ${Te("mae","MAE%")}
            ${Te("mfe","MFE%")}
            <th>📷</th>
          </tr>
        </thead>
        <tbody>
          ${l.length===0?'<tr><td colspan="15" class="text-center text-muted" style="padding:2rem">No trades found</td></tr>':""}
          ${l.map(u=>sS(u)).join("")}
        </tbody>
      </table>
    </div>

    ${iS(Pe,a,r.length)}
  `,aS(t,n,e),lS(t,n,e),cS(t,n,e),uS(t,n,e),hS(t,l)}function Te(n,t){const e=br===n;return`<th data-sort="${n}" class="${e?"sorted":""}">${t} <span class="sort-indicator">${e?Zs==="asc"?"↑":"↓":"↕"}</span></th>`}function sS(n){const t=n.closedPnl>0?"cell-profit":n.closedPnl<0?"cell-loss":"",e=n.direction==="Long"?"long":n.direction==="Short"?"short":"",s=n.status==="Active",i=n.entryPrice||0,r=n.exitPrice,o=n.risk>0?"★".repeat(n.risk)+"☆".repeat(5-n.risk):'<span class="text-muted">—</span>';return`
    <tr data-id="${n.id}" class="${s?"row-active":""} row-clickable">
      <td>${ZI(n.time)}</td>
      <td class="cell-coin">${n.coin}</td>
      <td><span class="cell-dir ${e}">${n.direction}</span></td>
      <td>${s?'<span class="status-badge status-active"><span class="status-dot"></span> Active</span>':'<span class="status-badge status-completed">✓ Completed</span>'}</td>
      <td>$${i.toLocaleString("en-US",{minimumFractionDigits:2})}</td>
      <td>${r!=null?"$"+r.toLocaleString("en-US",{minimumFractionDigits:2}):'<span class="text-muted">—</span>'}</td>
      <td>${n.size}</td>
      <td class="text-muted">$${Math.abs(n.fee).toFixed(2)}</td>
      <td class="${t}">${s?'<span class="text-muted">—</span>':qt(n.closedPnl)}</td>
      <td>${n.strategy?`<span class="strategy-badge">${n.strategy}</span>`:""}</td>
      <td>${(n.tags||[]).length>0?n.tags.map(a=>`<span class="tag-badge">${a}</span>`).join(""):""}</td>
      <td><span class="risk-stars" style="font-size:0.75rem;">${o}</span></td>
      <td class="text-muted">${n.mae!=null?n.mae+"%":"—"}</td>
      <td class="text-muted">${n.mfe!=null?n.mfe+"%":"—"}</td>
      <td><div class="image-thumbs" data-trade-id="${n.id}" style="display:flex; gap:3px;">${(n.images||[]).length>0?'<span class="text-muted" style="font-size:0.7rem">⏳</span>':""}</div></td>
    </tr>
  `}function iS(n,t,e){if(t<=1)return"";let s="";for(let i=1;i<=t;i++)i===1||i===t||i>=n-2&&i<=n+2?s+=`<button class="pagination-btn ${i===n?"active":""}" data-page="${i}">${i}</button>`:(i===n-3||i===n+3)&&(s+='<span class="pagination-info">...</span>');return`
    <div class="pagination">
      <button class="pagination-btn" data-page="${n-1}" ${n<=1?"disabled":""}>‹</button>
      ${s}
      <button class="pagination-btn" data-page="${n+1}" ${n>=t?"disabled":""}>›</button>
      <span class="pagination-info">${e} trade-uri</span>
    </div>
  `}function rS(n){return n.filter(t=>!(Ft.coin&&t.coin!==Ft.coin||Ft.direction&&t.direction!==Ft.direction||Ft.strategy&&t.strategy!==Ft.strategy||Ft.dateFrom&&t.time<Ft.dateFrom||Ft.dateTo&&t.time>Ft.dateTo+"T23:59:59"))}function oS(n){const t=[...n];return t.sort((e,s)=>{let i=e[br],r=s[br];if(typeof i=="string"){const o=i.localeCompare(r);return Zs==="asc"?o:-o}return Zs==="asc"?i-r:r-i}),t}function aS(n,t,e){var i,r,o,a,l,u;const s=()=>La(t,n,e);(i=n.querySelector("#filter-coin"))==null||i.addEventListener("change",h=>{Ft.coin=h.target.value,Pe=1,s()}),(r=n.querySelector("#filter-dir"))==null||r.addEventListener("change",h=>{Ft.direction=h.target.value,Pe=1,s()}),(o=n.querySelector("#filter-strategy"))==null||o.addEventListener("change",h=>{Ft.strategy=h.target.value,Pe=1,s()}),(a=n.querySelector("#filter-from"))==null||a.addEventListener("change",h=>{Ft.dateFrom=h.target.value,Pe=1,s()}),(l=n.querySelector("#filter-to"))==null||l.addEventListener("change",h=>{Ft.dateTo=h.target.value,Pe=1,s()}),(u=n.querySelector("#btn-clear-filters"))==null||u.addEventListener("click",()=>{Ft={coin:"",direction:"",strategy:"",dateFrom:"",dateTo:""},Pe=1,s()})}function lS(n,t,e){n.querySelectorAll("th[data-sort]").forEach(s=>{s.addEventListener("click",()=>{const i=s.dataset.sort;br===i?Zs=Zs==="asc"?"desc":"asc":(br=i,Zs="desc"),La(t,n,e)})})}function cS(n,t,e){n.querySelectorAll(".pagination-btn[data-page]").forEach(s=>{s.addEventListener("click",()=>{const i=parseInt(s.dataset.page);!isNaN(i)&&i>=1&&(Pe=i,La(t,n,e))})})}function uS(n,t,e){n.querySelectorAll("tr[data-id]").forEach(s=>{s.addEventListener("click",()=>{const i=t.find(r=>r.id===s.dataset.id);i&&e&&e(i)})})}async function hS(n,t){for(const e of t){if(!e.images||e.images.length===0)continue;const s=n.querySelector(`.image-thumbs[data-trade-id="${e.id}"]`);if(!s)continue;const i=[];for(const a of e.images){const l=await Cm(a);l&&i.push(l)}let r="";i.slice(0,2).forEach(a=>{r+=`<img src="${a}" class="image-thumb" data-full-src="${a}" alt="Screenshot" />`}),i.length>2&&(r+=`<span class="image-thumb-more" style="font-size:0.7rem; align-self:center; cursor:pointer; color:var(--text-muted);">+${i.length-2}</span>`),s.innerHTML=r,s.querySelectorAll(".image-thumb").forEach((a,l)=>{a.addEventListener("click",u=>{u.stopPropagation(),window.openLightbox&&window.openLightbox(i,l)})});const o=s.querySelector(".image-thumb-more");o&&o.addEventListener("click",a=>{a.stopPropagation(),window.openLightbox&&window.openLightbox(i,2)})}}function dS(n,t,e){const s=Vn(),i=Js();t.innerHTML=`
    <div class="modal-header">
      <h3 class="modal-title">➕ Add Manual Trade</h3>
      <button class="modal-close" id="modal-close">&times;</button>
    </div>
    <div class="modal-body">
      <!-- Basic info -->
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">Date & Time</label>
          <input type="datetime-local" id="trade-time" class="input" value="${fS()}" />
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
  `,n.classList.remove("hidden");let r=0,o=[],a=[];t.querySelector("#trade-img-upload").addEventListener("change",P=>{const k=t.querySelector("#trade-img-gallery");Array.from(P.target.files).forEach(R=>{const D=new FileReader;D.onload=M=>{const L="img_"+Date.now()+"_"+Math.random().toString(36).slice(2,6);a.push({id:L,dataUrl:M.target.result});const S=document.createElement("img");S.src=M.target.result,S.style.cssText="width:48px;height:48px;object-fit:cover;border-radius:4px;border:1px solid var(--border-subtle);",k.appendChild(S)},D.readAsDataURL(R)})});const l=()=>{n.classList.add("hidden")};t.querySelector("#modal-close").addEventListener("click",l),t.querySelector("#modal-cancel").addEventListener("click",l),n.addEventListener("click",P=>{P.target===n&&l()});const u=t.querySelector("#trade-entry-price"),h=t.querySelector("#trade-exit-price"),d=t.querySelector("#trade-size"),p=t.querySelector("#trade-notional"),y=t.querySelector("#trade-fee"),E=t.querySelector("#trade-direction"),w=t.querySelector("#trade-pnl");function I(){const P=parseFloat(u.value)||0,k=parseFloat(h.value)||0,R=parseFloat(d.value)||0,D=parseFloat(y.value)||0;if(P&&R&&!p.value&&(p.placeholder=(P*R).toFixed(2)),P>0&&k>0&&R>0){const L=E.value==="Long"?(k-P)*R:(P-k)*R;w.value=(L-D).toFixed(2)}}u.addEventListener("input",I),h.addEventListener("input",I),d.addEventListener("input",I),y.addEventListener("input",I),E.addEventListener("change",I),t.querySelectorAll(".risk-star-btn").forEach(P=>{P.addEventListener("click",()=>{r=parseInt(P.dataset.risk),t.querySelectorAll(".risk-star-btn").forEach(k=>{k.style.color=parseInt(k.dataset.risk)<=r?"#f59e0b":"#374151"})})}),t.querySelectorAll(".tag-toggle-btn").forEach(P=>{P.addEventListener("click",()=>{const k=P.dataset.tag;o.includes(k)?(o=o.filter(R=>R!==k),P.style.background="transparent",P.style.color="var(--text-secondary)",P.style.borderColor="var(--border-medium)"):(o.push(k),P.style.background="var(--accent-glow)",P.style.color="var(--accent-primary)",P.style.borderColor="var(--accent-primary)")})}),t.querySelector("#modal-save").addEventListener("click",async()=>{const P=t.querySelector("#trade-coin").value.trim();if(!P){alert("Please fill in the coin!");return}for(const D of a)await ru(D.id,D.dataUrl);const k=t.querySelector("#trade-time").value,R=$I({time:k?new Date(k).toISOString():new Date().toISOString(),coin:P,direction:t.querySelector("#trade-direction").value,entryPrice:t.querySelector("#trade-entry-price").value,exitPrice:t.querySelector("#trade-exit-price").value||null,size:t.querySelector("#trade-size").value,notional:t.querySelector("#trade-notional").value,fee:t.querySelector("#trade-fee").value,closedPnl:t.querySelector("#trade-pnl").value,risk:r,strategy:t.querySelector("#trade-strategy").value,notes:t.querySelector("#trade-notes").value,tags:o,images:a.map(D=>D.id),mae:t.querySelector("#trade-mae").value||null,mfe:t.querySelector("#trade-mfe").value||null});e(R),l()})}function fS(){const n=new Date,t=n.getTimezoneOffset();return new Date(n.getTime()-t*60*1e3).toISOString().slice(0,16)}function Ud(n){if(!n)return"";const t=new Date(n),e=t.getTimezoneOffset();return new Date(t.getTime()-e*60*1e3).toISOString().slice(0,16)}function pS(n,t,e,s,i){let r=n.risk||0,o=[...n.tags||[]];function a(){const E=Vn(),w=Js();t.innerHTML=`
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
          <input type="datetime-local" id="ed-time" class="input" value="${Ud(n.time)}" />
        </div>
        <div class="form-group">
          <label class="form-label">Data Închidere</label>
          <input type="datetime-local" id="ed-exit-time" class="input" value="${Ud(n.exitTime)}" />
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
            ${[1,2,3,4,5].map(I=>`
              <button class="risk-star-btn" data-risk="${I}" style="
                background:none; border:none; font-size:1.5rem; cursor:pointer; padding:0;
                color:${r>=I?"#f59e0b":"#374151"}; transition:color 150ms ease;
              ">★</button>
            `).join("")}
            <button class="btn btn-ghost btn-sm" id="risk-clear" style="margin-left:0.5rem; font-size:0.7rem; padding:0.15rem 0.4rem;">✕</button>
          </div>
        </div>
        <div class="form-group">
          <label class="form-label">Strategy</label>
          <select id="ed-strategy" class="input">
            <option value="">— None —</option>
            ${E.map(I=>`<option value="${I}" ${n.strategy===I?"selected":""}>${I}</option>`).join("")}
            ${n.strategy&&!E.includes(n.strategy)?`<option value="${n.strategy}" selected>${n.strategy}</option>`:""}
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
          ${w.map(I=>`
            <span style="display:inline-flex; align-items:center;">
              <button class="tag-toggle-btn ${o.includes(I)?"active":""}" data-tag="${I}" style="
                display:inline-block; padding:0.4rem 0.65rem; border-radius:var(--radius-sm) 0 0 var(--radius-sm);
                border:1px solid ${o.includes(I)?"var(--accent-primary)":"var(--border-subtle)"};
                border-right:none;
                background:${o.includes(I)?"var(--accent-glow)":"transparent"};
                color:${o.includes(I)?"var(--accent-primary)":"var(--text-secondary)"};
                cursor:pointer; font-size:0.85rem; transition:all 150ms ease;
              ">${I}</button><button class="tag-delete-btn" data-tag="${I}" title="Remove from list" style="
                padding:0.4rem 0.4rem; border-radius:0 var(--radius-sm) var(--radius-sm) 0;
                border:1px solid ${o.includes(I)?"var(--accent-primary)":"var(--border-subtle)"};
                background:${o.includes(I)?"var(--accent-glow)":"transparent"};
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
    `,p(),y(),l()}function l(){var D,M,L,S,g;const E=parseFloat((D=t.querySelector("#ed-entry"))==null?void 0:D.value)||0,w=parseFloat((M=t.querySelector("#ed-exit"))==null?void 0:M.value)||0,I=parseFloat((L=t.querySelector("#ed-size"))==null?void 0:L.value)||0,P=parseFloat((S=t.querySelector("#ed-fee"))==null?void 0:S.value)||0,k=((g=t.querySelector("#ed-direction"))==null?void 0:g.value)||"Long",R=t.querySelector("#pnl-value");if(R)if(w>0&&E>0&&I>0){const _=k==="Long"?(w-E)*I-P:(E-w)*I-P;R.style.color=_>=0?"var(--color-profit)":"var(--color-loss)",R.textContent=(_>=0?"+":"")+"$"+Math.abs(_).toFixed(2)}else R.style.color="var(--text-muted)",R.textContent="—"}function u(){const E=t.querySelector("#ed-direction").value,w=parseFloat(t.querySelector("#ed-entry").value)||0,I=t.querySelector("#ed-exit").value,P=I&&parseFloat(I)>0?parseFloat(I):null,k=parseFloat(t.querySelector("#ed-size").value)||0,R=parseFloat(t.querySelector("#ed-fee").value)||0,D=t.querySelector("#ed-time").value,M=t.querySelector("#ed-exit-time").value;let L=0;P&&w&&k&&(L=E==="Long"?(P-w)*k-R:(w-P)*k-R);const S={coin:(t.querySelector("#ed-coin").value||n.coin).toUpperCase(),direction:E,time:D?new Date(D).toISOString():n.time,exitTime:P?M?new Date(M).toISOString():n.exitTime||new Date().toISOString():null,entryPrice:w,exitPrice:P,size:k,fee:R,closedPnl:L,notional:w*k,status:P?"Completed":"Active",risk:r,strategy:t.querySelector("#ed-strategy").value,mae:t.querySelector("#ed-mae").value?parseFloat(t.querySelector("#ed-mae").value):null,mfe:t.querySelector("#ed-mfe").value?parseFloat(t.querySelector("#ed-mfe").value):null,notes:t.querySelector("#ed-notes").value,tags:o,images:n.images||[]};Object.assign(n,S),s(n.id,S);const g=S.strategy;if(g){const _=Vn();_.includes(g)||(_.push(g),sr(_))}return S}let h=null;function d(){const E=t.querySelector("#autosave-status");E&&(E.textContent="⏳ Saving...",E.style.color="var(--accent-primary)"),clearTimeout(h),h=setTimeout(()=>{u(),E&&(E.textContent="✅ Saved",E.style.color="var(--text-muted)")},800)}function p(){var I,P,k,R,D,M,L,S,g,_;(I=t.querySelector("#btn-back"))==null||I.addEventListener("click",e),(P=t.querySelector("#btn-back-bottom"))==null||P.addEventListener("click",e),(k=t.querySelector("#btn-save-all"))==null||k.addEventListener("click",()=>{clearTimeout(h),u();const b=t.querySelector("#autosave-status");b&&(b.textContent="✅ Saved!",b.style.color="var(--text-muted)")}),(R=t.querySelector("#btn-delete-trade"))==null||R.addEventListener("click",()=>{confirm(`Sigur vrei să ștergi trade-ul ${n.coin} ${n.direction}?`)&&(i(n.id),e())}),["#ed-coin","#ed-entry","#ed-exit","#ed-size","#ed-fee","#ed-direction","#ed-time","#ed-exit-time","#ed-strategy","#ed-mae","#ed-mfe","#ed-notes"].forEach(b=>{var v,A;(v=t.querySelector(b))==null||v.addEventListener("input",()=>{l(),d()}),(A=t.querySelector(b))==null||A.addEventListener("change",()=>{l(),d()})}),t.querySelectorAll(".risk-star-btn").forEach(b=>{b.addEventListener("click",()=>{r=parseInt(b.dataset.risk),t.querySelectorAll(".risk-star-btn").forEach(v=>{v.style.color=parseInt(v.dataset.risk)<=r?"#f59e0b":"#374151"}),d()})}),(D=t.querySelector("#risk-clear"))==null||D.addEventListener("click",()=>{r=0,t.querySelectorAll(".risk-star-btn").forEach(b=>{b.style.color="#374151"}),d()});const E=()=>{const v=(t.querySelector("#new-strategy-input").value||"").trim();if(!v)return;const A=Vn();A.includes(v)||(A.push(v),sr(A)),n.strategy=v,a()};(M=t.querySelector("#btn-add-strategy"))==null||M.addEventListener("click",E),(L=t.querySelector("#new-strategy-input"))==null||L.addEventListener("keydown",b=>{b.key==="Enter"&&(b.preventDefault(),E())}),(S=t.querySelector("#btn-delete-strategy"))==null||S.addEventListener("click",()=>{const b=t.querySelector("#ed-strategy").value;if(!b)return;const v=Vn().filter(A=>A!==b);sr(v),n.strategy="",a()}),t.querySelectorAll(".tag-toggle-btn").forEach(b=>{b.addEventListener("click",()=>{const v=b.dataset.tag;o.includes(v)?o=o.filter(A=>A!==v):o.push(v),d(),a()})}),t.querySelectorAll(".tag-delete-btn").forEach(b=>{b.addEventListener("click",v=>{v.stopPropagation();const A=b.dataset.tag,x=Js().filter(q=>q!==A);ia(x),a()})});const w=()=>{const v=(t.querySelector("#new-tag-input").value||"").trim();if(!v)return;const A=Js();A.includes(v)||(A.push(v),ia(A)),o.includes(v)||o.push(v),a()};(g=t.querySelector("#btn-add-tag"))==null||g.addEventListener("click",w),(_=t.querySelector("#new-tag-input"))==null||_.addEventListener("keydown",b=>{b.key==="Enter"&&(b.preventDefault(),w())})}async function y(){const E=t.querySelector("#trade-gallery");if(!E)return;const w=[];for(const P of n.images||[]){const k=await Cm(P);if(k){const R=w.length;w.push(k);const D=document.createElement("div");D.style.cssText="position:relative; width:80px; height:80px;",D.innerHTML=`
          <img src="${k}" style="width:100%; height:100%; object-fit:cover; border-radius:6px; border:1px solid var(--border-subtle); cursor:pointer;" />
          <button class="img-delete-btn" data-img-id="${P}" style="position:absolute; top:-6px; right:-6px; width:20px; height:20px; border-radius:50%; background:var(--color-loss); color:white; border:none; cursor:pointer; font-size:0.65rem; display:flex; align-items:center; justify-content:center;">✕</button>
        `,D.querySelector("img").addEventListener("click",()=>{window.openLightbox&&window.openLightbox(w,R)}),D.querySelector(".img-delete-btn").addEventListener("click",async M=>{M.stopPropagation();const L=M.currentTarget.dataset.imgId;await PI(L),n.images=(n.images||[]).filter(S=>S!==L),s(n.id,{images:n.images}),a()}),E.appendChild(D)}}const I=t.querySelector("#detail-image-upload");I&&I.addEventListener("change",P=>{Array.from(P.target.files).forEach(k=>{const R=new FileReader;R.onload=async D=>{const M="img_"+Date.now()+"_"+Math.random().toString(36).slice(2,6);await ru(M,D.target.result),n.images||(n.images=[]),n.images.push(M),s(n.id,{images:n.images}),a()},R.readAsDataURL(k)})})}a()}/*!
 * @kurkle/color v0.3.4
 * https://github.com/kurkle/color#readme
 * (c) 2024 Jukka Kurkela
 * Released under the MIT License
 */function Nr(n){return n+.5|0}const Nn=(n,t,e)=>Math.max(Math.min(n,e),t);function Wi(n){return Nn(Nr(n*2.55),0,255)}function Kn(n){return Nn(Nr(n*255),0,255)}function un(n){return Nn(Nr(n/2.55)/100,0,1)}function Bd(n){return Nn(Nr(n*100),0,100)}const Ae={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},nc=[..."0123456789ABCDEF"],gS=n=>nc[n&15],mS=n=>nc[(n&240)>>4]+nc[n&15],io=n=>(n&240)>>4===(n&15),_S=n=>io(n.r)&&io(n.g)&&io(n.b)&&io(n.a);function yS(n){var t=n.length,e;return n[0]==="#"&&(t===4||t===5?e={r:255&Ae[n[1]]*17,g:255&Ae[n[2]]*17,b:255&Ae[n[3]]*17,a:t===5?Ae[n[4]]*17:255}:(t===7||t===9)&&(e={r:Ae[n[1]]<<4|Ae[n[2]],g:Ae[n[3]]<<4|Ae[n[4]],b:Ae[n[5]]<<4|Ae[n[6]],a:t===9?Ae[n[7]]<<4|Ae[n[8]]:255})),e}const bS=(n,t)=>n<255?t(n):"";function vS(n){var t=_S(n)?gS:mS;return n?"#"+t(n.r)+t(n.g)+t(n.b)+bS(n.a,t):void 0}const ES=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function Om(n,t,e){const s=t*Math.min(e,1-e),i=(r,o=(r+n/30)%12)=>e-s*Math.max(Math.min(o-3,9-o,1),-1);return[i(0),i(8),i(4)]}function wS(n,t,e){const s=(i,r=(i+n/60)%6)=>e-e*t*Math.max(Math.min(r,4-r,1),0);return[s(5),s(3),s(1)]}function TS(n,t,e){const s=Om(n,1,.5);let i;for(t+e>1&&(i=1/(t+e),t*=i,e*=i),i=0;i<3;i++)s[i]*=1-t-e,s[i]+=t;return s}function IS(n,t,e,s,i){return n===i?(t-e)/s+(t<e?6:0):t===i?(e-n)/s+2:(n-t)/s+4}function lu(n){const e=n.r/255,s=n.g/255,i=n.b/255,r=Math.max(e,s,i),o=Math.min(e,s,i),a=(r+o)/2;let l,u,h;return r!==o&&(h=r-o,u=a>.5?h/(2-r-o):h/(r+o),l=IS(e,s,i,h,r),l=l*60+.5),[l|0,u||0,a]}function cu(n,t,e,s){return(Array.isArray(t)?n(t[0],t[1],t[2]):n(t,e,s)).map(Kn)}function uu(n,t,e){return cu(Om,n,t,e)}function SS(n,t,e){return cu(TS,n,t,e)}function xS(n,t,e){return cu(wS,n,t,e)}function Lm(n){return(n%360+360)%360}function AS(n){const t=ES.exec(n);let e=255,s;if(!t)return;t[5]!==s&&(e=t[6]?Wi(+t[5]):Kn(+t[5]));const i=Lm(+t[2]),r=+t[3]/100,o=+t[4]/100;return t[1]==="hwb"?s=SS(i,r,o):t[1]==="hsv"?s=xS(i,r,o):s=uu(i,r,o),{r:s[0],g:s[1],b:s[2],a:e}}function PS(n,t){var e=lu(n);e[0]=Lm(e[0]+t),e=uu(e),n.r=e[0],n.g=e[1],n.b=e[2]}function kS(n){if(!n)return;const t=lu(n),e=t[0],s=Bd(t[1]),i=Bd(t[2]);return n.a<255?`hsla(${e}, ${s}%, ${i}%, ${un(n.a)})`:`hsl(${e}, ${s}%, ${i}%)`}const $d={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},zd={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"};function RS(){const n={},t=Object.keys(zd),e=Object.keys($d);let s,i,r,o,a;for(s=0;s<t.length;s++){for(o=a=t[s],i=0;i<e.length;i++)r=e[i],a=a.replace(r,$d[r]);r=parseInt(zd[o],16),n[a]=[r>>16&255,r>>8&255,r&255]}return n}let ro;function CS(n){ro||(ro=RS(),ro.transparent=[0,0,0,0]);const t=ro[n.toLowerCase()];return t&&{r:t[0],g:t[1],b:t[2],a:t.length===4?t[3]:255}}const DS=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;function MS(n){const t=DS.exec(n);let e=255,s,i,r;if(t){if(t[7]!==s){const o=+t[7];e=t[8]?Wi(o):Nn(o*255,0,255)}return s=+t[1],i=+t[3],r=+t[5],s=255&(t[2]?Wi(s):Nn(s,0,255)),i=255&(t[4]?Wi(i):Nn(i,0,255)),r=255&(t[6]?Wi(r):Nn(r,0,255)),{r:s,g:i,b:r,a:e}}}function OS(n){return n&&(n.a<255?`rgba(${n.r}, ${n.g}, ${n.b}, ${un(n.a)})`:`rgb(${n.r}, ${n.g}, ${n.b})`)}const _l=n=>n<=.0031308?n*12.92:Math.pow(n,1/2.4)*1.055-.055,Us=n=>n<=.04045?n/12.92:Math.pow((n+.055)/1.055,2.4);function LS(n,t,e){const s=Us(un(n.r)),i=Us(un(n.g)),r=Us(un(n.b));return{r:Kn(_l(s+e*(Us(un(t.r))-s))),g:Kn(_l(i+e*(Us(un(t.g))-i))),b:Kn(_l(r+e*(Us(un(t.b))-r))),a:n.a+e*(t.a-n.a)}}function oo(n,t,e){if(n){let s=lu(n);s[t]=Math.max(0,Math.min(s[t]+s[t]*e,t===0?360:1)),s=uu(s),n.r=s[0],n.g=s[1],n.b=s[2]}}function Vm(n,t){return n&&Object.assign(t||{},n)}function jd(n){var t={r:0,g:0,b:0,a:255};return Array.isArray(n)?n.length>=3&&(t={r:n[0],g:n[1],b:n[2],a:255},n.length>3&&(t.a=Kn(n[3]))):(t=Vm(n,{r:0,g:0,b:0,a:1}),t.a=Kn(t.a)),t}function VS(n){return n.charAt(0)==="r"?MS(n):AS(n)}class vr{constructor(t){if(t instanceof vr)return t;const e=typeof t;let s;e==="object"?s=jd(t):e==="string"&&(s=yS(t)||CS(t)||VS(t)),this._rgb=s,this._valid=!!s}get valid(){return this._valid}get rgb(){var t=Vm(this._rgb);return t&&(t.a=un(t.a)),t}set rgb(t){this._rgb=jd(t)}rgbString(){return this._valid?OS(this._rgb):void 0}hexString(){return this._valid?vS(this._rgb):void 0}hslString(){return this._valid?kS(this._rgb):void 0}mix(t,e){if(t){const s=this.rgb,i=t.rgb;let r;const o=e===r?.5:e,a=2*o-1,l=s.a-i.a,u=((a*l===-1?a:(a+l)/(1+a*l))+1)/2;r=1-u,s.r=255&u*s.r+r*i.r+.5,s.g=255&u*s.g+r*i.g+.5,s.b=255&u*s.b+r*i.b+.5,s.a=o*s.a+(1-o)*i.a,this.rgb=s}return this}interpolate(t,e){return t&&(this._rgb=LS(this._rgb,t._rgb,e)),this}clone(){return new vr(this.rgb)}alpha(t){return this._rgb.a=Kn(t),this}clearer(t){const e=this._rgb;return e.a*=1-t,this}greyscale(){const t=this._rgb,e=Nr(t.r*.3+t.g*.59+t.b*.11);return t.r=t.g=t.b=e,this}opaquer(t){const e=this._rgb;return e.a*=1+t,this}negate(){const t=this._rgb;return t.r=255-t.r,t.g=255-t.g,t.b=255-t.b,this}lighten(t){return oo(this._rgb,2,t),this}darken(t){return oo(this._rgb,2,-t),this}saturate(t){return oo(this._rgb,1,t),this}desaturate(t){return oo(this._rgb,1,-t),this}rotate(t){return PS(this._rgb,t),this}}/*!
 * Chart.js v4.5.1
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */function an(){}const NS=(()=>{let n=0;return()=>n++})();function _t(n){return n==null}function Gt(n){if(Array.isArray&&Array.isArray(n))return!0;const t=Object.prototype.toString.call(n);return t.slice(0,7)==="[object"&&t.slice(-6)==="Array]"}function ht(n){return n!==null&&Object.prototype.toString.call(n)==="[object Object]"}function de(n){return(typeof n=="number"||n instanceof Number)&&isFinite(+n)}function He(n,t){return de(n)?n:t}function st(n,t){return typeof n>"u"?t:n}const FS=(n,t)=>typeof n=="string"&&n.endsWith("%")?parseFloat(n)/100:+n/t,Nm=(n,t)=>typeof n=="string"&&n.endsWith("%")?parseFloat(n)/100*t:+n;function Rt(n,t,e){if(n&&typeof n.call=="function")return n.apply(e,t)}function wt(n,t,e,s){let i,r,o;if(Gt(n))for(r=n.length,i=0;i<r;i++)t.call(e,n[i],i);else if(ht(n))for(o=Object.keys(n),r=o.length,i=0;i<r;i++)t.call(e,n[o[i]],o[i])}function ra(n,t){let e,s,i,r;if(!n||!t||n.length!==t.length)return!1;for(e=0,s=n.length;e<s;++e)if(i=n[e],r=t[e],i.datasetIndex!==r.datasetIndex||i.index!==r.index)return!1;return!0}function oa(n){if(Gt(n))return n.map(oa);if(ht(n)){const t=Object.create(null),e=Object.keys(n),s=e.length;let i=0;for(;i<s;++i)t[e[i]]=oa(n[e[i]]);return t}return n}function Fm(n){return["__proto__","prototype","constructor"].indexOf(n)===-1}function US(n,t,e,s){if(!Fm(n))return;const i=t[n],r=e[n];ht(i)&&ht(r)?Er(i,r,s):t[n]=oa(r)}function Er(n,t,e){const s=Gt(t)?t:[t],i=s.length;if(!ht(n))return n;e=e||{};const r=e.merger||US;let o;for(let a=0;a<i;++a){if(o=s[a],!ht(o))continue;const l=Object.keys(o);for(let u=0,h=l.length;u<h;++u)r(l[u],n,o,e)}return n}function ir(n,t){return Er(n,t,{merger:BS})}function BS(n,t,e){if(!Fm(n))return;const s=t[n],i=e[n];ht(s)&&ht(i)?ir(s,i):Object.prototype.hasOwnProperty.call(t,n)||(t[n]=oa(i))}const Hd={"":n=>n,x:n=>n.x,y:n=>n.y};function $S(n){const t=n.split("."),e=[];let s="";for(const i of t)s+=i,s.endsWith("\\")?s=s.slice(0,-1)+".":(e.push(s),s="");return e}function zS(n){const t=$S(n);return e=>{for(const s of t){if(s==="")break;e=e&&e[s]}return e}}function As(n,t){return(Hd[t]||(Hd[t]=zS(t)))(n)}function hu(n){return n.charAt(0).toUpperCase()+n.slice(1)}const wr=n=>typeof n<"u",es=n=>typeof n=="function",Wd=(n,t)=>{if(n.size!==t.size)return!1;for(const e of n)if(!t.has(e))return!1;return!0};function jS(n){return n.type==="mouseup"||n.type==="click"||n.type==="contextmenu"}const At=Math.PI,Ot=2*At,HS=Ot+At,aa=Number.POSITIVE_INFINITY,WS=At/180,Yt=At/2,as=At/4,qd=At*2/3,Um=Math.log10,Je=Math.sign;function rr(n,t,e){return Math.abs(n-t)<e}function Kd(n){const t=Math.round(n);n=rr(n,t,n/1e3)?t:n;const e=Math.pow(10,Math.floor(Um(n))),s=n/e;return(s<=1?1:s<=2?2:s<=5?5:10)*e}function qS(n){const t=[],e=Math.sqrt(n);let s;for(s=1;s<e;s++)n%s===0&&(t.push(s),t.push(n/s));return e===(e|0)&&t.push(e),t.sort((i,r)=>i-r).pop(),t}function KS(n){return typeof n=="symbol"||typeof n=="object"&&n!==null&&!(Symbol.toPrimitive in n||"toString"in n||"valueOf"in n)}function ci(n){return!KS(n)&&!isNaN(parseFloat(n))&&isFinite(n)}function GS(n,t){const e=Math.round(n);return e-t<=n&&e+t>=n}function YS(n,t,e){let s,i,r;for(s=0,i=n.length;s<i;s++)r=n[s][e],isNaN(r)||(t.min=Math.min(t.min,r),t.max=Math.max(t.max,r))}function gn(n){return n*(At/180)}function QS(n){return n*(180/At)}function Gd(n){if(!de(n))return;let t=1,e=0;for(;Math.round(n*t)/t!==n;)t*=10,e++;return e}function Bm(n,t){const e=t.x-n.x,s=t.y-n.y,i=Math.sqrt(e*e+s*s);let r=Math.atan2(s,e);return r<-.5*At&&(r+=Ot),{angle:r,distance:i}}function sc(n,t){return Math.sqrt(Math.pow(t.x-n.x,2)+Math.pow(t.y-n.y,2))}function XS(n,t){return(n-t+HS)%Ot-At}function Se(n){return(n%Ot+Ot)%Ot}function Tr(n,t,e,s){const i=Se(n),r=Se(t),o=Se(e),a=Se(r-i),l=Se(o-i),u=Se(i-r),h=Se(i-o);return i===r||i===o||s&&r===o||a>l&&u<h}function ue(n,t,e){return Math.max(t,Math.min(e,n))}function JS(n){return ue(n,-32768,32767)}function mn(n,t,e,s=1e-6){return n>=Math.min(t,e)-s&&n<=Math.max(t,e)+s}function du(n,t,e){e=e||(o=>n[o]<t);let s=n.length-1,i=0,r;for(;s-i>1;)r=i+s>>1,e(r)?i=r:s=r;return{lo:i,hi:s}}const gs=(n,t,e,s)=>du(n,e,s?i=>{const r=n[i][t];return r<e||r===e&&n[i+1][t]===e}:i=>n[i][t]<e),ZS=(n,t,e)=>du(n,e,s=>n[s][t]>=e);function tx(n,t,e){let s=0,i=n.length;for(;s<i&&n[s]<t;)s++;for(;i>s&&n[i-1]>e;)i--;return s>0||i<n.length?n.slice(s,i):n}const $m=["push","pop","shift","splice","unshift"];function ex(n,t){if(n._chartjs){n._chartjs.listeners.push(t);return}Object.defineProperty(n,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[t]}}),$m.forEach(e=>{const s="_onData"+hu(e),i=n[e];Object.defineProperty(n,e,{configurable:!0,enumerable:!1,value(...r){const o=i.apply(this,r);return n._chartjs.listeners.forEach(a=>{typeof a[s]=="function"&&a[s](...r)}),o}})})}function Yd(n,t){const e=n._chartjs;if(!e)return;const s=e.listeners,i=s.indexOf(t);i!==-1&&s.splice(i,1),!(s.length>0)&&($m.forEach(r=>{delete n[r]}),delete n._chartjs)}function zm(n){const t=new Set(n);return t.size===n.length?n:Array.from(t)}const jm=(function(){return typeof window>"u"?function(n){return n()}:window.requestAnimationFrame})();function Hm(n,t){let e=[],s=!1;return function(...i){e=i,s||(s=!0,jm.call(window,()=>{s=!1,n.apply(t,e)}))}}function nx(n,t){let e;return function(...s){return t?(clearTimeout(e),e=setTimeout(n,t,s)):n.apply(this,s),t}}const Wm=n=>n==="start"?"left":n==="end"?"right":"center",Ie=(n,t,e)=>n==="start"?t:n==="end"?e:(t+e)/2,sx=(n,t,e,s)=>n===(s?"left":"right")?e:n==="center"?(t+e)/2:t;function qm(n,t,e){const s=t.length;let i=0,r=s;if(n._sorted){const{iScale:o,vScale:a,_parsed:l}=n,u=n.dataset&&n.dataset.options?n.dataset.options.spanGaps:null,h=o.axis,{min:d,max:p,minDefined:y,maxDefined:E}=o.getUserBounds();if(y){if(i=Math.min(gs(l,h,d).lo,e?s:gs(t,h,o.getPixelForValue(d)).lo),u){const w=l.slice(0,i+1).reverse().findIndex(I=>!_t(I[a.axis]));i-=Math.max(0,w)}i=ue(i,0,s-1)}if(E){let w=Math.max(gs(l,o.axis,p,!0).hi+1,e?0:gs(t,h,o.getPixelForValue(p),!0).hi+1);if(u){const I=l.slice(w-1).findIndex(P=>!_t(P[a.axis]));w+=Math.max(0,I)}r=ue(w,i,s)-i}else r=s-i}return{start:i,count:r}}function Km(n){const{xScale:t,yScale:e,_scaleRanges:s}=n,i={xmin:t.min,xmax:t.max,ymin:e.min,ymax:e.max};if(!s)return n._scaleRanges=i,!0;const r=s.xmin!==t.min||s.xmax!==t.max||s.ymin!==e.min||s.ymax!==e.max;return Object.assign(s,i),r}const ao=n=>n===0||n===1,Qd=(n,t,e)=>-(Math.pow(2,10*(n-=1))*Math.sin((n-t)*Ot/e)),Xd=(n,t,e)=>Math.pow(2,-10*n)*Math.sin((n-t)*Ot/e)+1,or={linear:n=>n,easeInQuad:n=>n*n,easeOutQuad:n=>-n*(n-2),easeInOutQuad:n=>(n/=.5)<1?.5*n*n:-.5*(--n*(n-2)-1),easeInCubic:n=>n*n*n,easeOutCubic:n=>(n-=1)*n*n+1,easeInOutCubic:n=>(n/=.5)<1?.5*n*n*n:.5*((n-=2)*n*n+2),easeInQuart:n=>n*n*n*n,easeOutQuart:n=>-((n-=1)*n*n*n-1),easeInOutQuart:n=>(n/=.5)<1?.5*n*n*n*n:-.5*((n-=2)*n*n*n-2),easeInQuint:n=>n*n*n*n*n,easeOutQuint:n=>(n-=1)*n*n*n*n+1,easeInOutQuint:n=>(n/=.5)<1?.5*n*n*n*n*n:.5*((n-=2)*n*n*n*n+2),easeInSine:n=>-Math.cos(n*Yt)+1,easeOutSine:n=>Math.sin(n*Yt),easeInOutSine:n=>-.5*(Math.cos(At*n)-1),easeInExpo:n=>n===0?0:Math.pow(2,10*(n-1)),easeOutExpo:n=>n===1?1:-Math.pow(2,-10*n)+1,easeInOutExpo:n=>ao(n)?n:n<.5?.5*Math.pow(2,10*(n*2-1)):.5*(-Math.pow(2,-10*(n*2-1))+2),easeInCirc:n=>n>=1?n:-(Math.sqrt(1-n*n)-1),easeOutCirc:n=>Math.sqrt(1-(n-=1)*n),easeInOutCirc:n=>(n/=.5)<1?-.5*(Math.sqrt(1-n*n)-1):.5*(Math.sqrt(1-(n-=2)*n)+1),easeInElastic:n=>ao(n)?n:Qd(n,.075,.3),easeOutElastic:n=>ao(n)?n:Xd(n,.075,.3),easeInOutElastic(n){return ao(n)?n:n<.5?.5*Qd(n*2,.1125,.45):.5+.5*Xd(n*2-1,.1125,.45)},easeInBack(n){return n*n*((1.70158+1)*n-1.70158)},easeOutBack(n){return(n-=1)*n*((1.70158+1)*n+1.70158)+1},easeInOutBack(n){let t=1.70158;return(n/=.5)<1?.5*(n*n*(((t*=1.525)+1)*n-t)):.5*((n-=2)*n*(((t*=1.525)+1)*n+t)+2)},easeInBounce:n=>1-or.easeOutBounce(1-n),easeOutBounce(n){return n<1/2.75?7.5625*n*n:n<2/2.75?7.5625*(n-=1.5/2.75)*n+.75:n<2.5/2.75?7.5625*(n-=2.25/2.75)*n+.9375:7.5625*(n-=2.625/2.75)*n+.984375},easeInOutBounce:n=>n<.5?or.easeInBounce(n*2)*.5:or.easeOutBounce(n*2-1)*.5+.5};function fu(n){if(n&&typeof n=="object"){const t=n.toString();return t==="[object CanvasPattern]"||t==="[object CanvasGradient]"}return!1}function Jd(n){return fu(n)?n:new vr(n)}function yl(n){return fu(n)?n:new vr(n).saturate(.5).darken(.1).hexString()}const ix=["x","y","borderWidth","radius","tension"],rx=["color","borderColor","backgroundColor"];function ox(n){n.set("animation",{delay:void 0,duration:1e3,easing:"easeOutQuart",fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0}),n.describe("animation",{_fallback:!1,_indexable:!1,_scriptable:t=>t!=="onProgress"&&t!=="onComplete"&&t!=="fn"}),n.set("animations",{colors:{type:"color",properties:rx},numbers:{type:"number",properties:ix}}),n.describe("animations",{_fallback:"animation"}),n.set("transitions",{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:"transparent"},visible:{type:"boolean",duration:0}}},hide:{animations:{colors:{to:"transparent"},visible:{type:"boolean",easing:"linear",fn:t=>t|0}}}})}function ax(n){n.set("layout",{autoPadding:!0,padding:{top:0,right:0,bottom:0,left:0}})}const Zd=new Map;function lx(n,t){t=t||{};const e=n+JSON.stringify(t);let s=Zd.get(e);return s||(s=new Intl.NumberFormat(n,t),Zd.set(e,s)),s}function pu(n,t,e){return lx(t,e).format(n)}const cx={values(n){return Gt(n)?n:""+n},numeric(n,t,e){if(n===0)return"0";const s=this.chart.options.locale;let i,r=n;if(e.length>1){const u=Math.max(Math.abs(e[0].value),Math.abs(e[e.length-1].value));(u<1e-4||u>1e15)&&(i="scientific"),r=ux(n,e)}const o=Um(Math.abs(r)),a=isNaN(o)?1:Math.max(Math.min(-1*Math.floor(o),20),0),l={notation:i,minimumFractionDigits:a,maximumFractionDigits:a};return Object.assign(l,this.options.ticks.format),pu(n,s,l)}};function ux(n,t){let e=t.length>3?t[2].value-t[1].value:t[1].value-t[0].value;return Math.abs(e)>=1&&n!==Math.floor(n)&&(e=n-Math.floor(n)),e}var Gm={formatters:cx};function hx(n){n.set("scale",{display:!0,offset:!1,reverse:!1,beginAtZero:!1,bounds:"ticks",clip:!0,grace:0,grid:{display:!0,lineWidth:1,drawOnChartArea:!0,drawTicks:!0,tickLength:8,tickWidth:(t,e)=>e.lineWidth,tickColor:(t,e)=>e.color,offset:!1},border:{display:!0,dash:[],dashOffset:0,width:1},title:{display:!1,text:"",padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:!1,textStrokeWidth:0,textStrokeColor:"",padding:3,display:!0,autoSkip:!0,autoSkipPadding:3,labelOffset:0,callback:Gm.formatters.values,minor:{},major:{},align:"center",crossAlign:"near",showLabelBackdrop:!1,backdropColor:"rgba(255, 255, 255, 0.75)",backdropPadding:2}}),n.route("scale.ticks","color","","color"),n.route("scale.grid","color","","borderColor"),n.route("scale.border","color","","borderColor"),n.route("scale.title","color","","color"),n.describe("scale",{_fallback:!1,_scriptable:t=>!t.startsWith("before")&&!t.startsWith("after")&&t!=="callback"&&t!=="parser",_indexable:t=>t!=="borderDash"&&t!=="tickBorderDash"&&t!=="dash"}),n.describe("scales",{_fallback:"scale"}),n.describe("scale.ticks",{_scriptable:t=>t!=="backdropPadding"&&t!=="callback",_indexable:t=>t!=="backdropPadding"})}const Ps=Object.create(null),ic=Object.create(null);function ar(n,t){if(!t)return n;const e=t.split(".");for(let s=0,i=e.length;s<i;++s){const r=e[s];n=n[r]||(n[r]=Object.create(null))}return n}function bl(n,t,e){return typeof t=="string"?Er(ar(n,t),e):Er(ar(n,""),t)}class dx{constructor(t,e){this.animation=void 0,this.backgroundColor="rgba(0,0,0,0.1)",this.borderColor="rgba(0,0,0,0.1)",this.color="#666",this.datasets={},this.devicePixelRatio=s=>s.chart.platform.getDevicePixelRatio(),this.elements={},this.events=["mousemove","mouseout","click","touchstart","touchmove"],this.font={family:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",size:12,style:"normal",lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(s,i)=>yl(i.backgroundColor),this.hoverBorderColor=(s,i)=>yl(i.borderColor),this.hoverColor=(s,i)=>yl(i.color),this.indexAxis="x",this.interaction={mode:"nearest",intersect:!0,includeInvisible:!1},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(t),this.apply(e)}set(t,e){return bl(this,t,e)}get(t){return ar(this,t)}describe(t,e){return bl(ic,t,e)}override(t,e){return bl(Ps,t,e)}route(t,e,s,i){const r=ar(this,t),o=ar(this,s),a="_"+e;Object.defineProperties(r,{[a]:{value:r[e],writable:!0},[e]:{enumerable:!0,get(){const l=this[a],u=o[i];return ht(l)?Object.assign({},u,l):st(l,u)},set(l){this[a]=l}}})}apply(t){t.forEach(e=>e(this))}}var $t=new dx({_scriptable:n=>!n.startsWith("on"),_indexable:n=>n!=="events",hover:{_fallback:"interaction"},interaction:{_scriptable:!1,_indexable:!1}},[ox,ax,hx]);function fx(n){return!n||_t(n.size)||_t(n.family)?null:(n.style?n.style+" ":"")+(n.weight?n.weight+" ":"")+n.size+"px "+n.family}function tf(n,t,e,s,i){let r=t[i];return r||(r=t[i]=n.measureText(i).width,e.push(i)),r>s&&(s=r),s}function ls(n,t,e){const s=n.currentDevicePixelRatio,i=e!==0?Math.max(e/2,.5):0;return Math.round((t-i)*s)/s+i}function ef(n,t){!t&&!n||(t=t||n.getContext("2d"),t.save(),t.resetTransform(),t.clearRect(0,0,n.width,n.height),t.restore())}function rc(n,t,e,s){Ym(n,t,e,s,null)}function Ym(n,t,e,s,i){let r,o,a,l,u,h,d,p;const y=t.pointStyle,E=t.rotation,w=t.radius;let I=(E||0)*WS;if(y&&typeof y=="object"&&(r=y.toString(),r==="[object HTMLImageElement]"||r==="[object HTMLCanvasElement]")){n.save(),n.translate(e,s),n.rotate(I),n.drawImage(y,-y.width/2,-y.height/2,y.width,y.height),n.restore();return}if(!(isNaN(w)||w<=0)){switch(n.beginPath(),y){default:i?n.ellipse(e,s,i/2,w,0,0,Ot):n.arc(e,s,w,0,Ot),n.closePath();break;case"triangle":h=i?i/2:w,n.moveTo(e+Math.sin(I)*h,s-Math.cos(I)*w),I+=qd,n.lineTo(e+Math.sin(I)*h,s-Math.cos(I)*w),I+=qd,n.lineTo(e+Math.sin(I)*h,s-Math.cos(I)*w),n.closePath();break;case"rectRounded":u=w*.516,l=w-u,o=Math.cos(I+as)*l,d=Math.cos(I+as)*(i?i/2-u:l),a=Math.sin(I+as)*l,p=Math.sin(I+as)*(i?i/2-u:l),n.arc(e-d,s-a,u,I-At,I-Yt),n.arc(e+p,s-o,u,I-Yt,I),n.arc(e+d,s+a,u,I,I+Yt),n.arc(e-p,s+o,u,I+Yt,I+At),n.closePath();break;case"rect":if(!E){l=Math.SQRT1_2*w,h=i?i/2:l,n.rect(e-h,s-l,2*h,2*l);break}I+=as;case"rectRot":d=Math.cos(I)*(i?i/2:w),o=Math.cos(I)*w,a=Math.sin(I)*w,p=Math.sin(I)*(i?i/2:w),n.moveTo(e-d,s-a),n.lineTo(e+p,s-o),n.lineTo(e+d,s+a),n.lineTo(e-p,s+o),n.closePath();break;case"crossRot":I+=as;case"cross":d=Math.cos(I)*(i?i/2:w),o=Math.cos(I)*w,a=Math.sin(I)*w,p=Math.sin(I)*(i?i/2:w),n.moveTo(e-d,s-a),n.lineTo(e+d,s+a),n.moveTo(e+p,s-o),n.lineTo(e-p,s+o);break;case"star":d=Math.cos(I)*(i?i/2:w),o=Math.cos(I)*w,a=Math.sin(I)*w,p=Math.sin(I)*(i?i/2:w),n.moveTo(e-d,s-a),n.lineTo(e+d,s+a),n.moveTo(e+p,s-o),n.lineTo(e-p,s+o),I+=as,d=Math.cos(I)*(i?i/2:w),o=Math.cos(I)*w,a=Math.sin(I)*w,p=Math.sin(I)*(i?i/2:w),n.moveTo(e-d,s-a),n.lineTo(e+d,s+a),n.moveTo(e+p,s-o),n.lineTo(e-p,s+o);break;case"line":o=i?i/2:Math.cos(I)*w,a=Math.sin(I)*w,n.moveTo(e-o,s-a),n.lineTo(e+o,s+a);break;case"dash":n.moveTo(e,s),n.lineTo(e+Math.cos(I)*(i?i/2:w),s+Math.sin(I)*w);break;case!1:n.closePath();break}n.fill(),t.borderWidth>0&&n.stroke()}}function Ir(n,t,e){return e=e||.5,!t||n&&n.x>t.left-e&&n.x<t.right+e&&n.y>t.top-e&&n.y<t.bottom+e}function Va(n,t){n.save(),n.beginPath(),n.rect(t.left,t.top,t.right-t.left,t.bottom-t.top),n.clip()}function Na(n){n.restore()}function px(n,t,e,s,i){if(!t)return n.lineTo(e.x,e.y);if(i==="middle"){const r=(t.x+e.x)/2;n.lineTo(r,t.y),n.lineTo(r,e.y)}else i==="after"!=!!s?n.lineTo(t.x,e.y):n.lineTo(e.x,t.y);n.lineTo(e.x,e.y)}function gx(n,t,e,s){if(!t)return n.lineTo(e.x,e.y);n.bezierCurveTo(s?t.cp1x:t.cp2x,s?t.cp1y:t.cp2y,s?e.cp2x:e.cp1x,s?e.cp2y:e.cp1y,e.x,e.y)}function mx(n,t){t.translation&&n.translate(t.translation[0],t.translation[1]),_t(t.rotation)||n.rotate(t.rotation),t.color&&(n.fillStyle=t.color),t.textAlign&&(n.textAlign=t.textAlign),t.textBaseline&&(n.textBaseline=t.textBaseline)}function _x(n,t,e,s,i){if(i.strikethrough||i.underline){const r=n.measureText(s),o=t-r.actualBoundingBoxLeft,a=t+r.actualBoundingBoxRight,l=e-r.actualBoundingBoxAscent,u=e+r.actualBoundingBoxDescent,h=i.strikethrough?(l+u)/2:u;n.strokeStyle=n.fillStyle,n.beginPath(),n.lineWidth=i.decorationWidth||2,n.moveTo(o,h),n.lineTo(a,h),n.stroke()}}function yx(n,t){const e=n.fillStyle;n.fillStyle=t.color,n.fillRect(t.left,t.top,t.width,t.height),n.fillStyle=e}function la(n,t,e,s,i,r={}){const o=Gt(t)?t:[t],a=r.strokeWidth>0&&r.strokeColor!=="";let l,u;for(n.save(),n.font=i.string,mx(n,r),l=0;l<o.length;++l)u=o[l],r.backdrop&&yx(n,r.backdrop),a&&(r.strokeColor&&(n.strokeStyle=r.strokeColor),_t(r.strokeWidth)||(n.lineWidth=r.strokeWidth),n.strokeText(u,e,s,r.maxWidth)),n.fillText(u,e,s,r.maxWidth),_x(n,e,s,u,r),s+=Number(i.lineHeight);n.restore()}function ca(n,t){const{x:e,y:s,w:i,h:r,radius:o}=t;n.arc(e+o.topLeft,s+o.topLeft,o.topLeft,1.5*At,At,!0),n.lineTo(e,s+r-o.bottomLeft),n.arc(e+o.bottomLeft,s+r-o.bottomLeft,o.bottomLeft,At,Yt,!0),n.lineTo(e+i-o.bottomRight,s+r),n.arc(e+i-o.bottomRight,s+r-o.bottomRight,o.bottomRight,Yt,0,!0),n.lineTo(e+i,s+o.topRight),n.arc(e+i-o.topRight,s+o.topRight,o.topRight,0,-Yt,!0),n.lineTo(e+o.topLeft,s)}const bx=/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,vx=/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;function Ex(n,t){const e=(""+n).match(bx);if(!e||e[1]==="normal")return t*1.2;switch(n=+e[2],e[3]){case"px":return n;case"%":n/=100;break}return t*n}const wx=n=>+n||0;function gu(n,t){const e={},s=ht(t),i=s?Object.keys(t):t,r=ht(n)?s?o=>st(n[o],n[t[o]]):o=>n[o]:()=>n;for(const o of i)e[o]=wx(r(o));return e}function Qm(n){return gu(n,{top:"y",right:"x",bottom:"y",left:"x"})}function ti(n){return gu(n,["topLeft","topRight","bottomLeft","bottomRight"])}function $e(n){const t=Qm(n);return t.width=t.left+t.right,t.height=t.top+t.bottom,t}function ye(n,t){n=n||{},t=t||$t.font;let e=st(n.size,t.size);typeof e=="string"&&(e=parseInt(e,10));let s=st(n.style,t.style);s&&!(""+s).match(vx)&&(console.warn('Invalid font style specified: "'+s+'"'),s=void 0);const i={family:st(n.family,t.family),lineHeight:Ex(st(n.lineHeight,t.lineHeight),e),size:e,style:s,weight:st(n.weight,t.weight),string:""};return i.string=fx(i),i}function lo(n,t,e,s){let i,r,o;for(i=0,r=n.length;i<r;++i)if(o=n[i],o!==void 0&&o!==void 0)return o}function Tx(n,t,e){const{min:s,max:i}=n,r=Nm(t,(i-s)/2),o=(a,l)=>e&&a===0?0:a+l;return{min:o(s,-Math.abs(r)),max:o(i,r)}}function Os(n,t){return Object.assign(Object.create(n),t)}function mu(n,t=[""],e,s,i=()=>n[0]){const r=e||n;typeof s>"u"&&(s=t_("_fallback",n));const o={[Symbol.toStringTag]:"Object",_cacheable:!0,_scopes:n,_rootScopes:r,_fallback:s,_getTarget:i,override:a=>mu([a,...n],t,r,s)};return new Proxy(o,{deleteProperty(a,l){return delete a[l],delete a._keys,delete n[0][l],!0},get(a,l){return Jm(a,l,()=>Cx(l,t,n,a))},getOwnPropertyDescriptor(a,l){return Reflect.getOwnPropertyDescriptor(a._scopes[0],l)},getPrototypeOf(){return Reflect.getPrototypeOf(n[0])},has(a,l){return sf(a).includes(l)},ownKeys(a){return sf(a)},set(a,l,u){const h=a._storage||(a._storage=i());return a[l]=h[l]=u,delete a._keys,!0}})}function ui(n,t,e,s){const i={_cacheable:!1,_proxy:n,_context:t,_subProxy:e,_stack:new Set,_descriptors:Xm(n,s),setContext:r=>ui(n,r,e,s),override:r=>ui(n.override(r),t,e,s)};return new Proxy(i,{deleteProperty(r,o){return delete r[o],delete n[o],!0},get(r,o,a){return Jm(r,o,()=>Sx(r,o,a))},getOwnPropertyDescriptor(r,o){return r._descriptors.allKeys?Reflect.has(n,o)?{enumerable:!0,configurable:!0}:void 0:Reflect.getOwnPropertyDescriptor(n,o)},getPrototypeOf(){return Reflect.getPrototypeOf(n)},has(r,o){return Reflect.has(n,o)},ownKeys(){return Reflect.ownKeys(n)},set(r,o,a){return n[o]=a,delete r[o],!0}})}function Xm(n,t={scriptable:!0,indexable:!0}){const{_scriptable:e=t.scriptable,_indexable:s=t.indexable,_allKeys:i=t.allKeys}=n;return{allKeys:i,scriptable:e,indexable:s,isScriptable:es(e)?e:()=>e,isIndexable:es(s)?s:()=>s}}const Ix=(n,t)=>n?n+hu(t):t,_u=(n,t)=>ht(t)&&n!=="adapters"&&(Object.getPrototypeOf(t)===null||t.constructor===Object);function Jm(n,t,e){if(Object.prototype.hasOwnProperty.call(n,t)||t==="constructor")return n[t];const s=e();return n[t]=s,s}function Sx(n,t,e){const{_proxy:s,_context:i,_subProxy:r,_descriptors:o}=n;let a=s[t];return es(a)&&o.isScriptable(t)&&(a=xx(t,a,n,e)),Gt(a)&&a.length&&(a=Ax(t,a,n,o.isIndexable)),_u(t,a)&&(a=ui(a,i,r&&r[t],o)),a}function xx(n,t,e,s){const{_proxy:i,_context:r,_subProxy:o,_stack:a}=e;if(a.has(n))throw new Error("Recursion detected: "+Array.from(a).join("->")+"->"+n);a.add(n);let l=t(r,o||s);return a.delete(n),_u(n,l)&&(l=yu(i._scopes,i,n,l)),l}function Ax(n,t,e,s){const{_proxy:i,_context:r,_subProxy:o,_descriptors:a}=e;if(typeof r.index<"u"&&s(n))return t[r.index%t.length];if(ht(t[0])){const l=t,u=i._scopes.filter(h=>h!==l);t=[];for(const h of l){const d=yu(u,i,n,h);t.push(ui(d,r,o&&o[n],a))}}return t}function Zm(n,t,e){return es(n)?n(t,e):n}const Px=(n,t)=>n===!0?t:typeof n=="string"?As(t,n):void 0;function kx(n,t,e,s,i){for(const r of t){const o=Px(e,r);if(o){n.add(o);const a=Zm(o._fallback,e,i);if(typeof a<"u"&&a!==e&&a!==s)return a}else if(o===!1&&typeof s<"u"&&e!==s)return null}return!1}function yu(n,t,e,s){const i=t._rootScopes,r=Zm(t._fallback,e,s),o=[...n,...i],a=new Set;a.add(s);let l=nf(a,o,e,r||e,s);return l===null||typeof r<"u"&&r!==e&&(l=nf(a,o,r,l,s),l===null)?!1:mu(Array.from(a),[""],i,r,()=>Rx(t,e,s))}function nf(n,t,e,s,i){for(;e;)e=kx(n,t,e,s,i);return e}function Rx(n,t,e){const s=n._getTarget();t in s||(s[t]={});const i=s[t];return Gt(i)&&ht(e)?e:i||{}}function Cx(n,t,e,s){let i;for(const r of t)if(i=t_(Ix(r,n),e),typeof i<"u")return _u(n,i)?yu(e,s,n,i):i}function t_(n,t){for(const e of t){if(!e)continue;const s=e[n];if(typeof s<"u")return s}}function sf(n){let t=n._keys;return t||(t=n._keys=Dx(n._scopes)),t}function Dx(n){const t=new Set;for(const e of n)for(const s of Object.keys(e).filter(i=>!i.startsWith("_")))t.add(s);return Array.from(t)}const Mx=Number.EPSILON||1e-14,hi=(n,t)=>t<n.length&&!n[t].skip&&n[t],e_=n=>n==="x"?"y":"x";function Ox(n,t,e,s){const i=n.skip?t:n,r=t,o=e.skip?t:e,a=sc(r,i),l=sc(o,r);let u=a/(a+l),h=l/(a+l);u=isNaN(u)?0:u,h=isNaN(h)?0:h;const d=s*u,p=s*h;return{previous:{x:r.x-d*(o.x-i.x),y:r.y-d*(o.y-i.y)},next:{x:r.x+p*(o.x-i.x),y:r.y+p*(o.y-i.y)}}}function Lx(n,t,e){const s=n.length;let i,r,o,a,l,u=hi(n,0);for(let h=0;h<s-1;++h)if(l=u,u=hi(n,h+1),!(!l||!u)){if(rr(t[h],0,Mx)){e[h]=e[h+1]=0;continue}i=e[h]/t[h],r=e[h+1]/t[h],a=Math.pow(i,2)+Math.pow(r,2),!(a<=9)&&(o=3/Math.sqrt(a),e[h]=i*o*t[h],e[h+1]=r*o*t[h])}}function Vx(n,t,e="x"){const s=e_(e),i=n.length;let r,o,a,l=hi(n,0);for(let u=0;u<i;++u){if(o=a,a=l,l=hi(n,u+1),!a)continue;const h=a[e],d=a[s];o&&(r=(h-o[e])/3,a[`cp1${e}`]=h-r,a[`cp1${s}`]=d-r*t[u]),l&&(r=(l[e]-h)/3,a[`cp2${e}`]=h+r,a[`cp2${s}`]=d+r*t[u])}}function Nx(n,t="x"){const e=e_(t),s=n.length,i=Array(s).fill(0),r=Array(s);let o,a,l,u=hi(n,0);for(o=0;o<s;++o)if(a=l,l=u,u=hi(n,o+1),!!l){if(u){const h=u[t]-l[t];i[o]=h!==0?(u[e]-l[e])/h:0}r[o]=a?u?Je(i[o-1])!==Je(i[o])?0:(i[o-1]+i[o])/2:i[o-1]:i[o]}Lx(n,i,r),Vx(n,r,t)}function co(n,t,e){return Math.max(Math.min(n,e),t)}function Fx(n,t){let e,s,i,r,o,a=Ir(n[0],t);for(e=0,s=n.length;e<s;++e)o=r,r=a,a=e<s-1&&Ir(n[e+1],t),r&&(i=n[e],o&&(i.cp1x=co(i.cp1x,t.left,t.right),i.cp1y=co(i.cp1y,t.top,t.bottom)),a&&(i.cp2x=co(i.cp2x,t.left,t.right),i.cp2y=co(i.cp2y,t.top,t.bottom)))}function Ux(n,t,e,s,i){let r,o,a,l;if(t.spanGaps&&(n=n.filter(u=>!u.skip)),t.cubicInterpolationMode==="monotone")Nx(n,i);else{let u=s?n[n.length-1]:n[0];for(r=0,o=n.length;r<o;++r)a=n[r],l=Ox(u,a,n[Math.min(r+1,o-(s?0:1))%o],t.tension),a.cp1x=l.previous.x,a.cp1y=l.previous.y,a.cp2x=l.next.x,a.cp2y=l.next.y,u=a}t.capBezierPoints&&Fx(n,e)}function bu(){return typeof window<"u"&&typeof document<"u"}function vu(n){let t=n.parentNode;return t&&t.toString()==="[object ShadowRoot]"&&(t=t.host),t}function ua(n,t,e){let s;return typeof n=="string"?(s=parseInt(n,10),n.indexOf("%")!==-1&&(s=s/100*t.parentNode[e])):s=n,s}const Fa=n=>n.ownerDocument.defaultView.getComputedStyle(n,null);function Bx(n,t){return Fa(n).getPropertyValue(t)}const $x=["top","right","bottom","left"];function bs(n,t,e){const s={};e=e?"-"+e:"";for(let i=0;i<4;i++){const r=$x[i];s[r]=parseFloat(n[t+"-"+r+e])||0}return s.width=s.left+s.right,s.height=s.top+s.bottom,s}const zx=(n,t,e)=>(n>0||t>0)&&(!e||!e.shadowRoot);function jx(n,t){const e=n.touches,s=e&&e.length?e[0]:n,{offsetX:i,offsetY:r}=s;let o=!1,a,l;if(zx(i,r,n.target))a=i,l=r;else{const u=t.getBoundingClientRect();a=s.clientX-u.left,l=s.clientY-u.top,o=!0}return{x:a,y:l,box:o}}function hs(n,t){if("native"in n)return n;const{canvas:e,currentDevicePixelRatio:s}=t,i=Fa(e),r=i.boxSizing==="border-box",o=bs(i,"padding"),a=bs(i,"border","width"),{x:l,y:u,box:h}=jx(n,e),d=o.left+(h&&a.left),p=o.top+(h&&a.top);let{width:y,height:E}=t;return r&&(y-=o.width+a.width,E-=o.height+a.height),{x:Math.round((l-d)/y*e.width/s),y:Math.round((u-p)/E*e.height/s)}}function Hx(n,t,e){let s,i;if(t===void 0||e===void 0){const r=n&&vu(n);if(!r)t=n.clientWidth,e=n.clientHeight;else{const o=r.getBoundingClientRect(),a=Fa(r),l=bs(a,"border","width"),u=bs(a,"padding");t=o.width-u.width-l.width,e=o.height-u.height-l.height,s=ua(a.maxWidth,r,"clientWidth"),i=ua(a.maxHeight,r,"clientHeight")}}return{width:t,height:e,maxWidth:s||aa,maxHeight:i||aa}}const Fn=n=>Math.round(n*10)/10;function Wx(n,t,e,s){const i=Fa(n),r=bs(i,"margin"),o=ua(i.maxWidth,n,"clientWidth")||aa,a=ua(i.maxHeight,n,"clientHeight")||aa,l=Hx(n,t,e);let{width:u,height:h}=l;if(i.boxSizing==="content-box"){const p=bs(i,"border","width"),y=bs(i,"padding");u-=y.width+p.width,h-=y.height+p.height}return u=Math.max(0,u-r.width),h=Math.max(0,s?u/s:h-r.height),u=Fn(Math.min(u,o,l.maxWidth)),h=Fn(Math.min(h,a,l.maxHeight)),u&&!h&&(h=Fn(u/2)),(t!==void 0||e!==void 0)&&s&&l.height&&h>l.height&&(h=l.height,u=Fn(Math.floor(h*s))),{width:u,height:h}}function rf(n,t,e){const s=t||1,i=Fn(n.height*s),r=Fn(n.width*s);n.height=Fn(n.height),n.width=Fn(n.width);const o=n.canvas;return o.style&&(e||!o.style.height&&!o.style.width)&&(o.style.height=`${n.height}px`,o.style.width=`${n.width}px`),n.currentDevicePixelRatio!==s||o.height!==i||o.width!==r?(n.currentDevicePixelRatio=s,o.height=i,o.width=r,n.ctx.setTransform(s,0,0,s,0,0),!0):!1}const qx=(function(){let n=!1;try{const t={get passive(){return n=!0,!1}};bu()&&(window.addEventListener("test",null,t),window.removeEventListener("test",null,t))}catch{}return n})();function of(n,t){const e=Bx(n,t),s=e&&e.match(/^(\d+)(\.\d+)?px$/);return s?+s[1]:void 0}function ds(n,t,e,s){return{x:n.x+e*(t.x-n.x),y:n.y+e*(t.y-n.y)}}function Kx(n,t,e,s){return{x:n.x+e*(t.x-n.x),y:s==="middle"?e<.5?n.y:t.y:s==="after"?e<1?n.y:t.y:e>0?t.y:n.y}}function Gx(n,t,e,s){const i={x:n.cp2x,y:n.cp2y},r={x:t.cp1x,y:t.cp1y},o=ds(n,i,e),a=ds(i,r,e),l=ds(r,t,e),u=ds(o,a,e),h=ds(a,l,e);return ds(u,h,e)}const Yx=function(n,t){return{x(e){return n+n+t-e},setWidth(e){t=e},textAlign(e){return e==="center"?e:e==="right"?"left":"right"},xPlus(e,s){return e-s},leftForLtr(e,s){return e-s}}},Qx=function(){return{x(n){return n},setWidth(n){},textAlign(n){return n},xPlus(n,t){return n+t},leftForLtr(n,t){return n}}};function ei(n,t,e){return n?Yx(t,e):Qx()}function n_(n,t){let e,s;(t==="ltr"||t==="rtl")&&(e=n.canvas.style,s=[e.getPropertyValue("direction"),e.getPropertyPriority("direction")],e.setProperty("direction",t,"important"),n.prevTextDirection=s)}function s_(n,t){t!==void 0&&(delete n.prevTextDirection,n.canvas.style.setProperty("direction",t[0],t[1]))}function i_(n){return n==="angle"?{between:Tr,compare:XS,normalize:Se}:{between:mn,compare:(t,e)=>t-e,normalize:t=>t}}function af({start:n,end:t,count:e,loop:s,style:i}){return{start:n%e,end:t%e,loop:s&&(t-n+1)%e===0,style:i}}function Xx(n,t,e){const{property:s,start:i,end:r}=e,{between:o,normalize:a}=i_(s),l=t.length;let{start:u,end:h,loop:d}=n,p,y;if(d){for(u+=l,h+=l,p=0,y=l;p<y&&o(a(t[u%l][s]),i,r);++p)u--,h--;u%=l,h%=l}return h<u&&(h+=l),{start:u,end:h,loop:d,style:n.style}}function r_(n,t,e){if(!e)return[n];const{property:s,start:i,end:r}=e,o=t.length,{compare:a,between:l,normalize:u}=i_(s),{start:h,end:d,loop:p,style:y}=Xx(n,t,e),E=[];let w=!1,I=null,P,k,R;const D=()=>l(i,R,P)&&a(i,R)!==0,M=()=>a(r,P)===0||l(r,R,P),L=()=>w||D(),S=()=>!w||M();for(let g=h,_=h;g<=d;++g)k=t[g%o],!k.skip&&(P=u(k[s]),P!==R&&(w=l(P,i,r),I===null&&L()&&(I=a(P,i)===0?g:_),I!==null&&S()&&(E.push(af({start:I,end:g,loop:p,count:o,style:y})),I=null),_=g,R=P));return I!==null&&E.push(af({start:I,end:d,loop:p,count:o,style:y})),E}function o_(n,t){const e=[],s=n.segments;for(let i=0;i<s.length;i++){const r=r_(s[i],n.points,t);r.length&&e.push(...r)}return e}function Jx(n,t,e,s){let i=0,r=t-1;if(e&&!s)for(;i<t&&!n[i].skip;)i++;for(;i<t&&n[i].skip;)i++;for(i%=t,e&&(r+=i);r>i&&n[r%t].skip;)r--;return r%=t,{start:i,end:r}}function Zx(n,t,e,s){const i=n.length,r=[];let o=t,a=n[t],l;for(l=t+1;l<=e;++l){const u=n[l%i];u.skip||u.stop?a.skip||(s=!1,r.push({start:t%i,end:(l-1)%i,loop:s}),t=o=u.stop?l:null):(o=l,a.skip&&(t=l)),a=u}return o!==null&&r.push({start:t%i,end:o%i,loop:s}),r}function tA(n,t){const e=n.points,s=n.options.spanGaps,i=e.length;if(!i)return[];const r=!!n._loop,{start:o,end:a}=Jx(e,i,r,s);if(s===!0)return lf(n,[{start:o,end:a,loop:r}],e,t);const l=a<o?a+i:a,u=!!n._fullLoop&&o===0&&a===i-1;return lf(n,Zx(e,o,l,u),e,t)}function lf(n,t,e,s){return!s||!s.setContext||!e?t:eA(n,t,e,s)}function eA(n,t,e,s){const i=n._chart.getContext(),r=cf(n.options),{_datasetIndex:o,options:{spanGaps:a}}=n,l=e.length,u=[];let h=r,d=t[0].start,p=d;function y(E,w,I,P){const k=a?-1:1;if(E!==w){for(E+=l;e[E%l].skip;)E-=k;for(;e[w%l].skip;)w+=k;E%l!==w%l&&(u.push({start:E%l,end:w%l,loop:I,style:P}),h=P,d=w%l)}}for(const E of t){d=a?d:E.start;let w=e[d%l],I;for(p=d+1;p<=E.end;p++){const P=e[p%l];I=cf(s.setContext(Os(i,{type:"segment",p0:w,p1:P,p0DataIndex:(p-1)%l,p1DataIndex:p%l,datasetIndex:o}))),nA(I,h)&&y(d,p-1,E.loop,h),w=P,h=I}d<p-1&&y(d,p-1,E.loop,h)}return u}function cf(n){return{backgroundColor:n.backgroundColor,borderCapStyle:n.borderCapStyle,borderDash:n.borderDash,borderDashOffset:n.borderDashOffset,borderJoinStyle:n.borderJoinStyle,borderWidth:n.borderWidth,borderColor:n.borderColor}}function nA(n,t){if(!t)return!1;const e=[],s=function(i,r){return fu(r)?(e.includes(r)||e.push(r),e.indexOf(r)):r};return JSON.stringify(n,s)!==JSON.stringify(t,s)}function uo(n,t,e){return n.options.clip?n[e]:t[e]}function sA(n,t){const{xScale:e,yScale:s}=n;return e&&s?{left:uo(e,t,"left"),right:uo(e,t,"right"),top:uo(s,t,"top"),bottom:uo(s,t,"bottom")}:t}function a_(n,t){const e=t._clip;if(e.disabled)return!1;const s=sA(t,n.chartArea);return{left:e.left===!1?0:s.left-(e.left===!0?0:e.left),right:e.right===!1?n.width:s.right+(e.right===!0?0:e.right),top:e.top===!1?0:s.top-(e.top===!0?0:e.top),bottom:e.bottom===!1?n.height:s.bottom+(e.bottom===!0?0:e.bottom)}}/*!
 * Chart.js v4.5.1
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */class iA{constructor(){this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}_notify(t,e,s,i){const r=e.listeners[i],o=e.duration;r.forEach(a=>a({chart:t,initial:e.initial,numSteps:o,currentStep:Math.min(s-e.start,o)}))}_refresh(){this._request||(this._running=!0,this._request=jm.call(window,()=>{this._update(),this._request=null,this._running&&this._refresh()}))}_update(t=Date.now()){let e=0;this._charts.forEach((s,i)=>{if(!s.running||!s.items.length)return;const r=s.items;let o=r.length-1,a=!1,l;for(;o>=0;--o)l=r[o],l._active?(l._total>s.duration&&(s.duration=l._total),l.tick(t),a=!0):(r[o]=r[r.length-1],r.pop());a&&(i.draw(),this._notify(i,s,t,"progress")),r.length||(s.running=!1,this._notify(i,s,t,"complete"),s.initial=!1),e+=r.length}),this._lastDate=t,e===0&&(this._running=!1)}_getAnims(t){const e=this._charts;let s=e.get(t);return s||(s={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},e.set(t,s)),s}listen(t,e,s){this._getAnims(t).listeners[e].push(s)}add(t,e){!e||!e.length||this._getAnims(t).items.push(...e)}has(t){return this._getAnims(t).items.length>0}start(t){const e=this._charts.get(t);e&&(e.running=!0,e.start=Date.now(),e.duration=e.items.reduce((s,i)=>Math.max(s,i._duration),0),this._refresh())}running(t){if(!this._running)return!1;const e=this._charts.get(t);return!(!e||!e.running||!e.items.length)}stop(t){const e=this._charts.get(t);if(!e||!e.items.length)return;const s=e.items;let i=s.length-1;for(;i>=0;--i)s[i].cancel();e.items=[],this._notify(t,e,Date.now(),"complete")}remove(t){return this._charts.delete(t)}}var ln=new iA;const uf="transparent",rA={boolean(n,t,e){return e>.5?t:n},color(n,t,e){const s=Jd(n||uf),i=s.valid&&Jd(t||uf);return i&&i.valid?i.mix(s,e).hexString():t},number(n,t,e){return n+(t-n)*e}};class oA{constructor(t,e,s,i){const r=e[s];i=lo([t.to,i,r,t.from]);const o=lo([t.from,r,i]);this._active=!0,this._fn=t.fn||rA[t.type||typeof o],this._easing=or[t.easing]||or.linear,this._start=Math.floor(Date.now()+(t.delay||0)),this._duration=this._total=Math.floor(t.duration),this._loop=!!t.loop,this._target=e,this._prop=s,this._from=o,this._to=i,this._promises=void 0}active(){return this._active}update(t,e,s){if(this._active){this._notify(!1);const i=this._target[this._prop],r=s-this._start,o=this._duration-r;this._start=s,this._duration=Math.floor(Math.max(o,t.duration)),this._total+=r,this._loop=!!t.loop,this._to=lo([t.to,e,i,t.from]),this._from=lo([t.from,i,e])}}cancel(){this._active&&(this.tick(Date.now()),this._active=!1,this._notify(!1))}tick(t){const e=t-this._start,s=this._duration,i=this._prop,r=this._from,o=this._loop,a=this._to;let l;if(this._active=r!==a&&(o||e<s),!this._active){this._target[i]=a,this._notify(!0);return}if(e<0){this._target[i]=r;return}l=e/s%2,l=o&&l>1?2-l:l,l=this._easing(Math.min(1,Math.max(0,l))),this._target[i]=this._fn(r,a,l)}wait(){const t=this._promises||(this._promises=[]);return new Promise((e,s)=>{t.push({res:e,rej:s})})}_notify(t){const e=t?"res":"rej",s=this._promises||[];for(let i=0;i<s.length;i++)s[i][e]()}}class l_{constructor(t,e){this._chart=t,this._properties=new Map,this.configure(e)}configure(t){if(!ht(t))return;const e=Object.keys($t.animation),s=this._properties;Object.getOwnPropertyNames(t).forEach(i=>{const r=t[i];if(!ht(r))return;const o={};for(const a of e)o[a]=r[a];(Gt(r.properties)&&r.properties||[i]).forEach(a=>{(a===i||!s.has(a))&&s.set(a,o)})})}_animateOptions(t,e){const s=e.options,i=lA(t,s);if(!i)return[];const r=this._createAnimations(i,s);return s.$shared&&aA(t.options.$animations,s).then(()=>{t.options=s},()=>{}),r}_createAnimations(t,e){const s=this._properties,i=[],r=t.$animations||(t.$animations={}),o=Object.keys(e),a=Date.now();let l;for(l=o.length-1;l>=0;--l){const u=o[l];if(u.charAt(0)==="$")continue;if(u==="options"){i.push(...this._animateOptions(t,e));continue}const h=e[u];let d=r[u];const p=s.get(u);if(d)if(p&&d.active()){d.update(p,h,a);continue}else d.cancel();if(!p||!p.duration){t[u]=h;continue}r[u]=d=new oA(p,t,u,h),i.push(d)}return i}update(t,e){if(this._properties.size===0){Object.assign(t,e);return}const s=this._createAnimations(t,e);if(s.length)return ln.add(this._chart,s),!0}}function aA(n,t){const e=[],s=Object.keys(t);for(let i=0;i<s.length;i++){const r=n[s[i]];r&&r.active()&&e.push(r.wait())}return Promise.all(e)}function lA(n,t){if(!t)return;let e=n.options;if(!e){n.options=t;return}return e.$shared&&(n.options=e=Object.assign({},e,{$shared:!1,$animations:{}})),e}function hf(n,t){const e=n&&n.options||{},s=e.reverse,i=e.min===void 0?t:0,r=e.max===void 0?t:0;return{start:s?r:i,end:s?i:r}}function cA(n,t,e){if(e===!1)return!1;const s=hf(n,e),i=hf(t,e);return{top:i.end,right:s.end,bottom:i.start,left:s.start}}function uA(n){let t,e,s,i;return ht(n)?(t=n.top,e=n.right,s=n.bottom,i=n.left):t=e=s=i=n,{top:t,right:e,bottom:s,left:i,disabled:n===!1}}function c_(n,t){const e=[],s=n._getSortedDatasetMetas(t);let i,r;for(i=0,r=s.length;i<r;++i)e.push(s[i].index);return e}function df(n,t,e,s={}){const i=n.keys,r=s.mode==="single";let o,a,l,u;if(t===null)return;let h=!1;for(o=0,a=i.length;o<a;++o){if(l=+i[o],l===e){if(h=!0,s.all)continue;break}u=n.values[l],de(u)&&(r||t===0||Je(t)===Je(u))&&(t+=u)}return!h&&!s.all?0:t}function hA(n,t){const{iScale:e,vScale:s}=t,i=e.axis==="x"?"x":"y",r=s.axis==="x"?"x":"y",o=Object.keys(n),a=new Array(o.length);let l,u,h;for(l=0,u=o.length;l<u;++l)h=o[l],a[l]={[i]:h,[r]:n[h]};return a}function vl(n,t){const e=n&&n.options.stacked;return e||e===void 0&&t.stack!==void 0}function dA(n,t,e){return`${n.id}.${t.id}.${e.stack||e.type}`}function fA(n){const{min:t,max:e,minDefined:s,maxDefined:i}=n.getUserBounds();return{min:s?t:Number.NEGATIVE_INFINITY,max:i?e:Number.POSITIVE_INFINITY}}function pA(n,t,e){const s=n[t]||(n[t]={});return s[e]||(s[e]={})}function ff(n,t,e,s){for(const i of t.getMatchingVisibleMetas(s).reverse()){const r=n[i.index];if(e&&r>0||!e&&r<0)return i.index}return null}function pf(n,t){const{chart:e,_cachedMeta:s}=n,i=e._stacks||(e._stacks={}),{iScale:r,vScale:o,index:a}=s,l=r.axis,u=o.axis,h=dA(r,o,s),d=t.length;let p;for(let y=0;y<d;++y){const E=t[y],{[l]:w,[u]:I}=E,P=E._stacks||(E._stacks={});p=P[u]=pA(i,h,w),p[a]=I,p._top=ff(p,o,!0,s.type),p._bottom=ff(p,o,!1,s.type);const k=p._visualValues||(p._visualValues={});k[a]=I}}function El(n,t){const e=n.scales;return Object.keys(e).filter(s=>e[s].axis===t).shift()}function gA(n,t){return Os(n,{active:!1,dataset:void 0,datasetIndex:t,index:t,mode:"default",type:"dataset"})}function mA(n,t,e){return Os(n,{active:!1,dataIndex:t,parsed:void 0,raw:void 0,element:e,index:t,mode:"default",type:"data"})}function Vi(n,t){const e=n.controller.index,s=n.vScale&&n.vScale.axis;if(s){t=t||n._parsed;for(const i of t){const r=i._stacks;if(!r||r[s]===void 0||r[s][e]===void 0)return;delete r[s][e],r[s]._visualValues!==void 0&&r[s]._visualValues[e]!==void 0&&delete r[s]._visualValues[e]}}}const wl=n=>n==="reset"||n==="none",gf=(n,t)=>t?n:Object.assign({},n),_A=(n,t,e)=>n&&!t.hidden&&t._stacked&&{keys:c_(e,!0),values:null};class Gn{constructor(t,e){this.chart=t,this._ctx=t.ctx,this.index=e,this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=!1,this._data=void 0,this._objectData=void 0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=!1,this.supportsDecimation=!1,this.$context=void 0,this._syncList=[],this.datasetElementType=new.target.datasetElementType,this.dataElementType=new.target.dataElementType,this.initialize()}initialize(){const t=this._cachedMeta;this.configure(),this.linkScales(),t._stacked=vl(t.vScale,t),this.addElements(),this.options.fill&&!this.chart.isPluginEnabled("filler")&&console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options")}updateIndex(t){this.index!==t&&Vi(this._cachedMeta),this.index=t}linkScales(){const t=this.chart,e=this._cachedMeta,s=this.getDataset(),i=(d,p,y,E)=>d==="x"?p:d==="r"?E:y,r=e.xAxisID=st(s.xAxisID,El(t,"x")),o=e.yAxisID=st(s.yAxisID,El(t,"y")),a=e.rAxisID=st(s.rAxisID,El(t,"r")),l=e.indexAxis,u=e.iAxisID=i(l,r,o,a),h=e.vAxisID=i(l,o,r,a);e.xScale=this.getScaleForId(r),e.yScale=this.getScaleForId(o),e.rScale=this.getScaleForId(a),e.iScale=this.getScaleForId(u),e.vScale=this.getScaleForId(h)}getDataset(){return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(t){return this.chart.scales[t]}_getOtherScale(t){const e=this._cachedMeta;return t===e.iScale?e.vScale:e.iScale}reset(){this._update("reset")}_destroy(){const t=this._cachedMeta;this._data&&Yd(this._data,this),t._stacked&&Vi(t)}_dataCheck(){const t=this.getDataset(),e=t.data||(t.data=[]),s=this._data;if(ht(e)){const i=this._cachedMeta;this._data=hA(e,i)}else if(s!==e){if(s){Yd(s,this);const i=this._cachedMeta;Vi(i),i._parsed=[]}e&&Object.isExtensible(e)&&ex(e,this),this._syncList=[],this._data=e}}addElements(){const t=this._cachedMeta;this._dataCheck(),this.datasetElementType&&(t.dataset=new this.datasetElementType)}buildOrUpdateElements(t){const e=this._cachedMeta,s=this.getDataset();let i=!1;this._dataCheck();const r=e._stacked;e._stacked=vl(e.vScale,e),e.stack!==s.stack&&(i=!0,Vi(e),e.stack=s.stack),this._resyncElements(t),(i||r!==e._stacked)&&(pf(this,e._parsed),e._stacked=vl(e.vScale,e))}configure(){const t=this.chart.config,e=t.datasetScopeKeys(this._type),s=t.getOptionScopes(this.getDataset(),e,!0);this.options=t.createResolver(s,this.getContext()),this._parsing=this.options.parsing,this._cachedDataOpts={}}parse(t,e){const{_cachedMeta:s,_data:i}=this,{iScale:r,_stacked:o}=s,a=r.axis;let l=t===0&&e===i.length?!0:s._sorted,u=t>0&&s._parsed[t-1],h,d,p;if(this._parsing===!1)s._parsed=i,s._sorted=!0,p=i;else{Gt(i[t])?p=this.parseArrayData(s,i,t,e):ht(i[t])?p=this.parseObjectData(s,i,t,e):p=this.parsePrimitiveData(s,i,t,e);const y=()=>d[a]===null||u&&d[a]<u[a];for(h=0;h<e;++h)s._parsed[h+t]=d=p[h],l&&(y()&&(l=!1),u=d);s._sorted=l}o&&pf(this,p)}parsePrimitiveData(t,e,s,i){const{iScale:r,vScale:o}=t,a=r.axis,l=o.axis,u=r.getLabels(),h=r===o,d=new Array(i);let p,y,E;for(p=0,y=i;p<y;++p)E=p+s,d[p]={[a]:h||r.parse(u[E],E),[l]:o.parse(e[E],E)};return d}parseArrayData(t,e,s,i){const{xScale:r,yScale:o}=t,a=new Array(i);let l,u,h,d;for(l=0,u=i;l<u;++l)h=l+s,d=e[h],a[l]={x:r.parse(d[0],h),y:o.parse(d[1],h)};return a}parseObjectData(t,e,s,i){const{xScale:r,yScale:o}=t,{xAxisKey:a="x",yAxisKey:l="y"}=this._parsing,u=new Array(i);let h,d,p,y;for(h=0,d=i;h<d;++h)p=h+s,y=e[p],u[h]={x:r.parse(As(y,a),p),y:o.parse(As(y,l),p)};return u}getParsed(t){return this._cachedMeta._parsed[t]}getDataElement(t){return this._cachedMeta.data[t]}applyStack(t,e,s){const i=this.chart,r=this._cachedMeta,o=e[t.axis],a={keys:c_(i,!0),values:e._stacks[t.axis]._visualValues};return df(a,o,r.index,{mode:s})}updateRangeFromParsed(t,e,s,i){const r=s[e.axis];let o=r===null?NaN:r;const a=i&&s._stacks[e.axis];i&&a&&(i.values=a,o=df(i,r,this._cachedMeta.index)),t.min=Math.min(t.min,o),t.max=Math.max(t.max,o)}getMinMax(t,e){const s=this._cachedMeta,i=s._parsed,r=s._sorted&&t===s.iScale,o=i.length,a=this._getOtherScale(t),l=_A(e,s,this.chart),u={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY},{min:h,max:d}=fA(a);let p,y;function E(){y=i[p];const w=y[a.axis];return!de(y[t.axis])||h>w||d<w}for(p=0;p<o&&!(!E()&&(this.updateRangeFromParsed(u,t,y,l),r));++p);if(r){for(p=o-1;p>=0;--p)if(!E()){this.updateRangeFromParsed(u,t,y,l);break}}return u}getAllParsedValues(t){const e=this._cachedMeta._parsed,s=[];let i,r,o;for(i=0,r=e.length;i<r;++i)o=e[i][t.axis],de(o)&&s.push(o);return s}getMaxOverflow(){return!1}getLabelAndValue(t){const e=this._cachedMeta,s=e.iScale,i=e.vScale,r=this.getParsed(t);return{label:s?""+s.getLabelForValue(r[s.axis]):"",value:i?""+i.getLabelForValue(r[i.axis]):""}}_update(t){const e=this._cachedMeta;this.update(t||"default"),e._clip=uA(st(this.options.clip,cA(e.xScale,e.yScale,this.getMaxOverflow())))}update(t){}draw(){const t=this._ctx,e=this.chart,s=this._cachedMeta,i=s.data||[],r=e.chartArea,o=[],a=this._drawStart||0,l=this._drawCount||i.length-a,u=this.options.drawActiveElementsOnTop;let h;for(s.dataset&&s.dataset.draw(t,r,a,l),h=a;h<a+l;++h){const d=i[h];d.hidden||(d.active&&u?o.push(d):d.draw(t,r))}for(h=0;h<o.length;++h)o[h].draw(t,r)}getStyle(t,e){const s=e?"active":"default";return t===void 0&&this._cachedMeta.dataset?this.resolveDatasetElementOptions(s):this.resolveDataElementOptions(t||0,s)}getContext(t,e,s){const i=this.getDataset();let r;if(t>=0&&t<this._cachedMeta.data.length){const o=this._cachedMeta.data[t];r=o.$context||(o.$context=mA(this.getContext(),t,o)),r.parsed=this.getParsed(t),r.raw=i.data[t],r.index=r.dataIndex=t}else r=this.$context||(this.$context=gA(this.chart.getContext(),this.index)),r.dataset=i,r.index=r.datasetIndex=this.index;return r.active=!!e,r.mode=s,r}resolveDatasetElementOptions(t){return this._resolveElementOptions(this.datasetElementType.id,t)}resolveDataElementOptions(t,e){return this._resolveElementOptions(this.dataElementType.id,e,t)}_resolveElementOptions(t,e="default",s){const i=e==="active",r=this._cachedDataOpts,o=t+"-"+e,a=r[o],l=this.enableOptionSharing&&wr(s);if(a)return gf(a,l);const u=this.chart.config,h=u.datasetElementScopeKeys(this._type,t),d=i?[`${t}Hover`,"hover",t,""]:[t,""],p=u.getOptionScopes(this.getDataset(),h),y=Object.keys($t.elements[t]),E=()=>this.getContext(s,i,e),w=u.resolveNamedOptions(p,y,E,d);return w.$shared&&(w.$shared=l,r[o]=Object.freeze(gf(w,l))),w}_resolveAnimations(t,e,s){const i=this.chart,r=this._cachedDataOpts,o=`animation-${e}`,a=r[o];if(a)return a;let l;if(i.options.animation!==!1){const h=this.chart.config,d=h.datasetAnimationScopeKeys(this._type,e),p=h.getOptionScopes(this.getDataset(),d);l=h.createResolver(p,this.getContext(t,s,e))}const u=new l_(i,l&&l.animations);return l&&l._cacheable&&(r[o]=Object.freeze(u)),u}getSharedOptions(t){if(t.$shared)return this._sharedOptions||(this._sharedOptions=Object.assign({},t))}includeOptions(t,e){return!e||wl(t)||this.chart._animationsDisabled}_getSharedOptions(t,e){const s=this.resolveDataElementOptions(t,e),i=this._sharedOptions,r=this.getSharedOptions(s),o=this.includeOptions(e,r)||r!==i;return this.updateSharedOptions(r,e,s),{sharedOptions:r,includeOptions:o}}updateElement(t,e,s,i){wl(i)?Object.assign(t,s):this._resolveAnimations(e,i).update(t,s)}updateSharedOptions(t,e,s){t&&!wl(e)&&this._resolveAnimations(void 0,e).update(t,s)}_setStyle(t,e,s,i){t.active=i;const r=this.getStyle(e,i);this._resolveAnimations(e,s,i).update(t,{options:!i&&this.getSharedOptions(r)||r})}removeHoverStyle(t,e,s){this._setStyle(t,s,"active",!1)}setHoverStyle(t,e,s){this._setStyle(t,s,"active",!0)}_removeDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!1)}_setDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!0)}_resyncElements(t){const e=this._data,s=this._cachedMeta.data;for(const[a,l,u]of this._syncList)this[a](l,u);this._syncList=[];const i=s.length,r=e.length,o=Math.min(r,i);o&&this.parse(0,o),r>i?this._insertElements(i,r-i,t):r<i&&this._removeElements(r,i-r)}_insertElements(t,e,s=!0){const i=this._cachedMeta,r=i.data,o=t+e;let a;const l=u=>{for(u.length+=e,a=u.length-1;a>=o;a--)u[a]=u[a-e]};for(l(r),a=t;a<o;++a)r[a]=new this.dataElementType;this._parsing&&l(i._parsed),this.parse(t,e),s&&this.updateElements(r,t,e,"reset")}updateElements(t,e,s,i){}_removeElements(t,e){const s=this._cachedMeta;if(this._parsing){const i=s._parsed.splice(t,e);s._stacked&&Vi(s,i)}s.data.splice(t,e)}_sync(t){if(this._parsing)this._syncList.push(t);else{const[e,s,i]=t;this[e](s,i)}this.chart._dataChanges.push([this.index,...t])}_onDataPush(){const t=arguments.length;this._sync(["_insertElements",this.getDataset().data.length-t,t])}_onDataPop(){this._sync(["_removeElements",this._cachedMeta.data.length-1,1])}_onDataShift(){this._sync(["_removeElements",0,1])}_onDataSplice(t,e){e&&this._sync(["_removeElements",t,e]);const s=arguments.length-2;s&&this._sync(["_insertElements",t,s])}_onDataUnshift(){this._sync(["_insertElements",0,arguments.length])}}$(Gn,"defaults",{}),$(Gn,"datasetElementType",null),$(Gn,"dataElementType",null);function yA(n,t){if(!n._cache.$bar){const e=n.getMatchingVisibleMetas(t);let s=[];for(let i=0,r=e.length;i<r;i++)s=s.concat(e[i].controller.getAllParsedValues(n));n._cache.$bar=zm(s.sort((i,r)=>i-r))}return n._cache.$bar}function bA(n){const t=n.iScale,e=yA(t,n.type);let s=t._length,i,r,o,a;const l=()=>{o===32767||o===-32768||(wr(a)&&(s=Math.min(s,Math.abs(o-a)||s)),a=o)};for(i=0,r=e.length;i<r;++i)o=t.getPixelForValue(e[i]),l();for(a=void 0,i=0,r=t.ticks.length;i<r;++i)o=t.getPixelForTick(i),l();return s}function vA(n,t,e,s){const i=e.barThickness;let r,o;return _t(i)?(r=t.min*e.categoryPercentage,o=e.barPercentage):(r=i*s,o=1),{chunk:r/s,ratio:o,start:t.pixels[n]-r/2}}function EA(n,t,e,s){const i=t.pixels,r=i[n];let o=n>0?i[n-1]:null,a=n<i.length-1?i[n+1]:null;const l=e.categoryPercentage;o===null&&(o=r-(a===null?t.end-t.start:a-r)),a===null&&(a=r+r-o);const u=r-(r-Math.min(o,a))/2*l;return{chunk:Math.abs(a-o)/2*l/s,ratio:e.barPercentage,start:u}}function wA(n,t,e,s){const i=e.parse(n[0],s),r=e.parse(n[1],s),o=Math.min(i,r),a=Math.max(i,r);let l=o,u=a;Math.abs(o)>Math.abs(a)&&(l=a,u=o),t[e.axis]=u,t._custom={barStart:l,barEnd:u,start:i,end:r,min:o,max:a}}function u_(n,t,e,s){return Gt(n)?wA(n,t,e,s):t[e.axis]=e.parse(n,s),t}function mf(n,t,e,s){const i=n.iScale,r=n.vScale,o=i.getLabels(),a=i===r,l=[];let u,h,d,p;for(u=e,h=e+s;u<h;++u)p=t[u],d={},d[i.axis]=a||i.parse(o[u],u),l.push(u_(p,d,r,u));return l}function Tl(n){return n&&n.barStart!==void 0&&n.barEnd!==void 0}function TA(n,t,e){return n!==0?Je(n):(t.isHorizontal()?1:-1)*(t.min>=e?1:-1)}function IA(n){let t,e,s,i,r;return n.horizontal?(t=n.base>n.x,e="left",s="right"):(t=n.base<n.y,e="bottom",s="top"),t?(i="end",r="start"):(i="start",r="end"),{start:e,end:s,reverse:t,top:i,bottom:r}}function SA(n,t,e,s){let i=t.borderSkipped;const r={};if(!i){n.borderSkipped=r;return}if(i===!0){n.borderSkipped={top:!0,right:!0,bottom:!0,left:!0};return}const{start:o,end:a,reverse:l,top:u,bottom:h}=IA(n);i==="middle"&&e&&(n.enableBorderRadius=!0,(e._top||0)===s?i=u:(e._bottom||0)===s?i=h:(r[_f(h,o,a,l)]=!0,i=u)),r[_f(i,o,a,l)]=!0,n.borderSkipped=r}function _f(n,t,e,s){return s?(n=xA(n,t,e),n=yf(n,e,t)):n=yf(n,t,e),n}function xA(n,t,e){return n===t?e:n===e?t:n}function yf(n,t,e){return n==="start"?t:n==="end"?e:n}function AA(n,{inflateAmount:t},e){n.inflateAmount=t==="auto"?e===1?.33:0:t}class Ro extends Gn{parsePrimitiveData(t,e,s,i){return mf(t,e,s,i)}parseArrayData(t,e,s,i){return mf(t,e,s,i)}parseObjectData(t,e,s,i){const{iScale:r,vScale:o}=t,{xAxisKey:a="x",yAxisKey:l="y"}=this._parsing,u=r.axis==="x"?a:l,h=o.axis==="x"?a:l,d=[];let p,y,E,w;for(p=s,y=s+i;p<y;++p)w=e[p],E={},E[r.axis]=r.parse(As(w,u),p),d.push(u_(As(w,h),E,o,p));return d}updateRangeFromParsed(t,e,s,i){super.updateRangeFromParsed(t,e,s,i);const r=s._custom;r&&e===this._cachedMeta.vScale&&(t.min=Math.min(t.min,r.min),t.max=Math.max(t.max,r.max))}getMaxOverflow(){return 0}getLabelAndValue(t){const e=this._cachedMeta,{iScale:s,vScale:i}=e,r=this.getParsed(t),o=r._custom,a=Tl(o)?"["+o.start+", "+o.end+"]":""+i.getLabelForValue(r[i.axis]);return{label:""+s.getLabelForValue(r[s.axis]),value:a}}initialize(){this.enableOptionSharing=!0,super.initialize();const t=this._cachedMeta;t.stack=this.getDataset().stack}update(t){const e=this._cachedMeta;this.updateElements(e.data,0,e.data.length,t)}updateElements(t,e,s,i){const r=i==="reset",{index:o,_cachedMeta:{vScale:a}}=this,l=a.getBasePixel(),u=a.isHorizontal(),h=this._getRuler(),{sharedOptions:d,includeOptions:p}=this._getSharedOptions(e,i);for(let y=e;y<e+s;y++){const E=this.getParsed(y),w=r||_t(E[a.axis])?{base:l,head:l}:this._calculateBarValuePixels(y),I=this._calculateBarIndexPixels(y,h),P=(E._stacks||{})[a.axis],k={horizontal:u,base:w.base,enableBorderRadius:!P||Tl(E._custom)||o===P._top||o===P._bottom,x:u?w.head:I.center,y:u?I.center:w.head,height:u?I.size:Math.abs(w.size),width:u?Math.abs(w.size):I.size};p&&(k.options=d||this.resolveDataElementOptions(y,t[y].active?"active":i));const R=k.options||t[y].options;SA(k,R,P,o),AA(k,R,h.ratio),this.updateElement(t[y],y,k,i)}}_getStacks(t,e){const{iScale:s}=this._cachedMeta,i=s.getMatchingVisibleMetas(this._type).filter(h=>h.controller.options.grouped),r=s.options.stacked,o=[],a=this._cachedMeta.controller.getParsed(e),l=a&&a[s.axis],u=h=>{const d=h._parsed.find(y=>y[s.axis]===l),p=d&&d[h.vScale.axis];if(_t(p)||isNaN(p))return!0};for(const h of i)if(!(e!==void 0&&u(h))&&((r===!1||o.indexOf(h.stack)===-1||r===void 0&&h.stack===void 0)&&o.push(h.stack),h.index===t))break;return o.length||o.push(void 0),o}_getStackCount(t){return this._getStacks(void 0,t).length}_getAxisCount(){return this._getAxis().length}getFirstScaleIdForIndexAxis(){const t=this.chart.scales,e=this.chart.options.indexAxis;return Object.keys(t).filter(s=>t[s].axis===e).shift()}_getAxis(){const t={},e=this.getFirstScaleIdForIndexAxis();for(const s of this.chart.data.datasets)t[st(this.chart.options.indexAxis==="x"?s.xAxisID:s.yAxisID,e)]=!0;return Object.keys(t)}_getStackIndex(t,e,s){const i=this._getStacks(t,s),r=e!==void 0?i.indexOf(e):-1;return r===-1?i.length-1:r}_getRuler(){const t=this.options,e=this._cachedMeta,s=e.iScale,i=[];let r,o;for(r=0,o=e.data.length;r<o;++r)i.push(s.getPixelForValue(this.getParsed(r)[s.axis],r));const a=t.barThickness;return{min:a||bA(e),pixels:i,start:s._startPixel,end:s._endPixel,stackCount:this._getStackCount(),scale:s,grouped:t.grouped,ratio:a?1:t.categoryPercentage*t.barPercentage}}_calculateBarValuePixels(t){const{_cachedMeta:{vScale:e,_stacked:s,index:i},options:{base:r,minBarLength:o}}=this,a=r||0,l=this.getParsed(t),u=l._custom,h=Tl(u);let d=l[e.axis],p=0,y=s?this.applyStack(e,l,s):d,E,w;y!==d&&(p=y-d,y=d),h&&(d=u.barStart,y=u.barEnd-u.barStart,d!==0&&Je(d)!==Je(u.barEnd)&&(p=0),p+=d);const I=!_t(r)&&!h?r:p;let P=e.getPixelForValue(I);if(this.chart.getDataVisibility(t)?E=e.getPixelForValue(p+y):E=P,w=E-P,Math.abs(w)<o){w=TA(w,e,a)*o,d===a&&(P-=w/2);const k=e.getPixelForDecimal(0),R=e.getPixelForDecimal(1),D=Math.min(k,R),M=Math.max(k,R);P=Math.max(Math.min(P,M),D),E=P+w,s&&!h&&(l._stacks[e.axis]._visualValues[i]=e.getValueForPixel(E)-e.getValueForPixel(P))}if(P===e.getPixelForValue(a)){const k=Je(w)*e.getLineWidthForValue(a)/2;P+=k,w-=k}return{size:w,base:P,head:E,center:E+w/2}}_calculateBarIndexPixels(t,e){const s=e.scale,i=this.options,r=i.skipNull,o=st(i.maxBarThickness,1/0);let a,l;const u=this._getAxisCount();if(e.grouped){const h=r?this._getStackCount(t):e.stackCount,d=i.barThickness==="flex"?EA(t,e,i,h*u):vA(t,e,i,h*u),p=this.chart.options.indexAxis==="x"?this.getDataset().xAxisID:this.getDataset().yAxisID,y=this._getAxis().indexOf(st(p,this.getFirstScaleIdForIndexAxis())),E=this._getStackIndex(this.index,this._cachedMeta.stack,r?t:void 0)+y;a=d.start+d.chunk*E+d.chunk/2,l=Math.min(o,d.chunk*d.ratio)}else a=s.getPixelForValue(this.getParsed(t)[s.axis],t),l=Math.min(o,e.min*e.ratio);return{base:a-l/2,head:a+l/2,center:a,size:l}}draw(){const t=this._cachedMeta,e=t.vScale,s=t.data,i=s.length;let r=0;for(;r<i;++r)this.getParsed(r)[e.axis]!==null&&!s[r].hidden&&s[r].draw(this._ctx)}}$(Ro,"id","bar"),$(Ro,"defaults",{datasetElementType:!1,dataElementType:"bar",categoryPercentage:.8,barPercentage:.9,grouped:!0,animations:{numbers:{type:"number",properties:["x","y","base","width","height"]}}}),$(Ro,"overrides",{scales:{_index_:{type:"category",offset:!0,grid:{offset:!0}},_value_:{type:"linear",beginAtZero:!0}}});function PA(n,t,e){let s=1,i=1,r=0,o=0;if(t<Ot){const a=n,l=a+t,u=Math.cos(a),h=Math.sin(a),d=Math.cos(l),p=Math.sin(l),y=(R,D,M)=>Tr(R,a,l,!0)?1:Math.max(D,D*e,M,M*e),E=(R,D,M)=>Tr(R,a,l,!0)?-1:Math.min(D,D*e,M,M*e),w=y(0,u,d),I=y(Yt,h,p),P=E(At,u,d),k=E(At+Yt,h,p);s=(w-P)/2,i=(I-k)/2,r=-(w+P)/2,o=-(I+k)/2}return{ratioX:s,ratioY:i,offsetX:r,offsetY:o}}class qi extends Gn{constructor(t,e){super(t,e),this.enableOptionSharing=!0,this.innerRadius=void 0,this.outerRadius=void 0,this.offsetX=void 0,this.offsetY=void 0}linkScales(){}parse(t,e){const s=this.getDataset().data,i=this._cachedMeta;if(this._parsing===!1)i._parsed=s;else{let r=l=>+s[l];if(ht(s[t])){const{key:l="value"}=this._parsing;r=u=>+As(s[u],l)}let o,a;for(o=t,a=t+e;o<a;++o)i._parsed[o]=r(o)}}_getRotation(){return gn(this.options.rotation-90)}_getCircumference(){return gn(this.options.circumference)}_getRotationExtents(){let t=Ot,e=-Ot;for(let s=0;s<this.chart.data.datasets.length;++s)if(this.chart.isDatasetVisible(s)&&this.chart.getDatasetMeta(s).type===this._type){const i=this.chart.getDatasetMeta(s).controller,r=i._getRotation(),o=i._getCircumference();t=Math.min(t,r),e=Math.max(e,r+o)}return{rotation:t,circumference:e-t}}update(t){const e=this.chart,{chartArea:s}=e,i=this._cachedMeta,r=i.data,o=this.getMaxBorderWidth()+this.getMaxOffset(r)+this.options.spacing,a=Math.max((Math.min(s.width,s.height)-o)/2,0),l=Math.min(FS(this.options.cutout,a),1),u=this._getRingWeight(this.index),{circumference:h,rotation:d}=this._getRotationExtents(),{ratioX:p,ratioY:y,offsetX:E,offsetY:w}=PA(d,h,l),I=(s.width-o)/p,P=(s.height-o)/y,k=Math.max(Math.min(I,P)/2,0),R=Nm(this.options.radius,k),D=Math.max(R*l,0),M=(R-D)/this._getVisibleDatasetWeightTotal();this.offsetX=E*R,this.offsetY=w*R,i.total=this.calculateTotal(),this.outerRadius=R-M*this._getRingWeightOffset(this.index),this.innerRadius=Math.max(this.outerRadius-M*u,0),this.updateElements(r,0,r.length,t)}_circumference(t,e){const s=this.options,i=this._cachedMeta,r=this._getCircumference();return e&&s.animation.animateRotate||!this.chart.getDataVisibility(t)||i._parsed[t]===null||i.data[t].hidden?0:this.calculateCircumference(i._parsed[t]*r/Ot)}updateElements(t,e,s,i){const r=i==="reset",o=this.chart,a=o.chartArea,u=o.options.animation,h=(a.left+a.right)/2,d=(a.top+a.bottom)/2,p=r&&u.animateScale,y=p?0:this.innerRadius,E=p?0:this.outerRadius,{sharedOptions:w,includeOptions:I}=this._getSharedOptions(e,i);let P=this._getRotation(),k;for(k=0;k<e;++k)P+=this._circumference(k,r);for(k=e;k<e+s;++k){const R=this._circumference(k,r),D=t[k],M={x:h+this.offsetX,y:d+this.offsetY,startAngle:P,endAngle:P+R,circumference:R,outerRadius:E,innerRadius:y};I&&(M.options=w||this.resolveDataElementOptions(k,D.active?"active":i)),P+=R,this.updateElement(D,k,M,i)}}calculateTotal(){const t=this._cachedMeta,e=t.data;let s=0,i;for(i=0;i<e.length;i++){const r=t._parsed[i];r!==null&&!isNaN(r)&&this.chart.getDataVisibility(i)&&!e[i].hidden&&(s+=Math.abs(r))}return s}calculateCircumference(t){const e=this._cachedMeta.total;return e>0&&!isNaN(t)?Ot*(Math.abs(t)/e):0}getLabelAndValue(t){const e=this._cachedMeta,s=this.chart,i=s.data.labels||[],r=pu(e._parsed[t],s.options.locale);return{label:i[t]||"",value:r}}getMaxBorderWidth(t){let e=0;const s=this.chart;let i,r,o,a,l;if(!t){for(i=0,r=s.data.datasets.length;i<r;++i)if(s.isDatasetVisible(i)){o=s.getDatasetMeta(i),t=o.data,a=o.controller;break}}if(!t)return 0;for(i=0,r=t.length;i<r;++i)l=a.resolveDataElementOptions(i),l.borderAlign!=="inner"&&(e=Math.max(e,l.borderWidth||0,l.hoverBorderWidth||0));return e}getMaxOffset(t){let e=0;for(let s=0,i=t.length;s<i;++s){const r=this.resolveDataElementOptions(s);e=Math.max(e,r.offset||0,r.hoverOffset||0)}return e}_getRingWeightOffset(t){let e=0;for(let s=0;s<t;++s)this.chart.isDatasetVisible(s)&&(e+=this._getRingWeight(s));return e}_getRingWeight(t){return Math.max(st(this.chart.data.datasets[t].weight,1),0)}_getVisibleDatasetWeightTotal(){return this._getRingWeightOffset(this.chart.data.datasets.length)||1}}$(qi,"id","doughnut"),$(qi,"defaults",{datasetElementType:!1,dataElementType:"arc",animation:{animateRotate:!0,animateScale:!1},animations:{numbers:{type:"number",properties:["circumference","endAngle","innerRadius","outerRadius","startAngle","x","y","offset","borderWidth","spacing"]}},cutout:"50%",rotation:0,circumference:360,radius:"100%",spacing:0,indexAxis:"r"}),$(qi,"descriptors",{_scriptable:t=>t!=="spacing",_indexable:t=>t!=="spacing"&&!t.startsWith("borderDash")&&!t.startsWith("hoverBorderDash")}),$(qi,"overrides",{aspectRatio:1,plugins:{legend:{labels:{generateLabels(t){const e=t.data,{labels:{pointStyle:s,textAlign:i,color:r,useBorderRadius:o,borderRadius:a}}=t.legend.options;return e.labels.length&&e.datasets.length?e.labels.map((l,u)=>{const d=t.getDatasetMeta(0).controller.getStyle(u);return{text:l,fillStyle:d.backgroundColor,fontColor:r,hidden:!t.getDataVisibility(u),lineDash:d.borderDash,lineDashOffset:d.borderDashOffset,lineJoin:d.borderJoinStyle,lineWidth:d.borderWidth,strokeStyle:d.borderColor,textAlign:i,pointStyle:s,borderRadius:o&&(a||d.borderRadius),index:u}}):[]}},onClick(t,e,s){s.chart.toggleDataVisibility(e.index),s.chart.update()}}}});class Co extends Gn{initialize(){this.enableOptionSharing=!0,this.supportsDecimation=!0,super.initialize()}update(t){const e=this._cachedMeta,{dataset:s,data:i=[],_dataset:r}=e,o=this.chart._animationsDisabled;let{start:a,count:l}=qm(e,i,o);this._drawStart=a,this._drawCount=l,Km(e)&&(a=0,l=i.length),s._chart=this.chart,s._datasetIndex=this.index,s._decimated=!!r._decimated,s.points=i;const u=this.resolveDatasetElementOptions(t);this.options.showLine||(u.borderWidth=0),u.segment=this.options.segment,this.updateElement(s,void 0,{animated:!o,options:u},t),this.updateElements(i,a,l,t)}updateElements(t,e,s,i){const r=i==="reset",{iScale:o,vScale:a,_stacked:l,_dataset:u}=this._cachedMeta,{sharedOptions:h,includeOptions:d}=this._getSharedOptions(e,i),p=o.axis,y=a.axis,{spanGaps:E,segment:w}=this.options,I=ci(E)?E:Number.POSITIVE_INFINITY,P=this.chart._animationsDisabled||r||i==="none",k=e+s,R=t.length;let D=e>0&&this.getParsed(e-1);for(let M=0;M<R;++M){const L=t[M],S=P?L:{};if(M<e||M>=k){S.skip=!0;continue}const g=this.getParsed(M),_=_t(g[y]),b=S[p]=o.getPixelForValue(g[p],M),v=S[y]=r||_?a.getBasePixel():a.getPixelForValue(l?this.applyStack(a,g,l):g[y],M);S.skip=isNaN(b)||isNaN(v)||_,S.stop=M>0&&Math.abs(g[p]-D[p])>I,w&&(S.parsed=g,S.raw=u.data[M]),d&&(S.options=h||this.resolveDataElementOptions(M,L.active?"active":i)),P||this.updateElement(L,M,S,i),D=g}}getMaxOverflow(){const t=this._cachedMeta,e=t.dataset,s=e.options&&e.options.borderWidth||0,i=t.data||[];if(!i.length)return s;const r=i[0].size(this.resolveDataElementOptions(0)),o=i[i.length-1].size(this.resolveDataElementOptions(i.length-1));return Math.max(s,r,o)/2}draw(){const t=this._cachedMeta;t.dataset.updateControlPoints(this.chart.chartArea,t.iScale.axis),super.draw()}}$(Co,"id","line"),$(Co,"defaults",{datasetElementType:"line",dataElementType:"point",showLine:!0,spanGaps:!1}),$(Co,"overrides",{scales:{_index_:{type:"category"},_value_:{type:"linear"}}});class Do extends Gn{getLabelAndValue(t){const e=this._cachedMeta,s=this.chart.data.labels||[],{xScale:i,yScale:r}=e,o=this.getParsed(t),a=i.getLabelForValue(o.x),l=r.getLabelForValue(o.y);return{label:s[t]||"",value:"("+a+", "+l+")"}}update(t){const e=this._cachedMeta,{data:s=[]}=e,i=this.chart._animationsDisabled;let{start:r,count:o}=qm(e,s,i);if(this._drawStart=r,this._drawCount=o,Km(e)&&(r=0,o=s.length),this.options.showLine){this.datasetElementType||this.addElements();const{dataset:a,_dataset:l}=e;a._chart=this.chart,a._datasetIndex=this.index,a._decimated=!!l._decimated,a.points=s;const u=this.resolveDatasetElementOptions(t);u.segment=this.options.segment,this.updateElement(a,void 0,{animated:!i,options:u},t)}else this.datasetElementType&&(delete e.dataset,this.datasetElementType=!1);this.updateElements(s,r,o,t)}addElements(){const{showLine:t}=this.options;!this.datasetElementType&&t&&(this.datasetElementType=this.chart.registry.getElement("line")),super.addElements()}updateElements(t,e,s,i){const r=i==="reset",{iScale:o,vScale:a,_stacked:l,_dataset:u}=this._cachedMeta,h=this.resolveDataElementOptions(e,i),d=this.getSharedOptions(h),p=this.includeOptions(i,d),y=o.axis,E=a.axis,{spanGaps:w,segment:I}=this.options,P=ci(w)?w:Number.POSITIVE_INFINITY,k=this.chart._animationsDisabled||r||i==="none";let R=e>0&&this.getParsed(e-1);for(let D=e;D<e+s;++D){const M=t[D],L=this.getParsed(D),S=k?M:{},g=_t(L[E]),_=S[y]=o.getPixelForValue(L[y],D),b=S[E]=r||g?a.getBasePixel():a.getPixelForValue(l?this.applyStack(a,L,l):L[E],D);S.skip=isNaN(_)||isNaN(b)||g,S.stop=D>0&&Math.abs(L[y]-R[y])>P,I&&(S.parsed=L,S.raw=u.data[D]),p&&(S.options=d||this.resolveDataElementOptions(D,M.active?"active":i)),k||this.updateElement(M,D,S,i),R=L}this.updateSharedOptions(d,i,h)}getMaxOverflow(){const t=this._cachedMeta,e=t.data||[];if(!this.options.showLine){let a=0;for(let l=e.length-1;l>=0;--l)a=Math.max(a,e[l].size(this.resolveDataElementOptions(l))/2);return a>0&&a}const s=t.dataset,i=s.options&&s.options.borderWidth||0;if(!e.length)return i;const r=e[0].size(this.resolveDataElementOptions(0)),o=e[e.length-1].size(this.resolveDataElementOptions(e.length-1));return Math.max(i,r,o)/2}}$(Do,"id","scatter"),$(Do,"defaults",{datasetElementType:!1,dataElementType:"point",showLine:!1,fill:!1}),$(Do,"overrides",{interaction:{mode:"point"},scales:{x:{type:"linear"},y:{type:"linear"}}});function cs(){throw new Error("This method is not implemented: Check that a complete date adapter is provided.")}class Eu{constructor(t){$(this,"options");this.options=t||{}}static override(t){Object.assign(Eu.prototype,t)}init(){}formats(){return cs()}parse(){return cs()}format(){return cs()}add(){return cs()}diff(){return cs()}startOf(){return cs()}endOf(){return cs()}}var kA={_date:Eu};function RA(n,t,e,s){const{controller:i,data:r,_sorted:o}=n,a=i._cachedMeta.iScale,l=n.dataset&&n.dataset.options?n.dataset.options.spanGaps:null;if(a&&t===a.axis&&t!=="r"&&o&&r.length){const u=a._reversePixels?ZS:gs;if(s){if(i._sharedOptions){const h=r[0],d=typeof h.getRange=="function"&&h.getRange(t);if(d){const p=u(r,t,e-d),y=u(r,t,e+d);return{lo:p.lo,hi:y.hi}}}}else{const h=u(r,t,e);if(l){const{vScale:d}=i._cachedMeta,{_parsed:p}=n,y=p.slice(0,h.lo+1).reverse().findIndex(w=>!_t(w[d.axis]));h.lo-=Math.max(0,y);const E=p.slice(h.hi).findIndex(w=>!_t(w[d.axis]));h.hi+=Math.max(0,E)}return h}}return{lo:0,hi:r.length-1}}function Ua(n,t,e,s,i){const r=n.getSortedVisibleDatasetMetas(),o=e[t];for(let a=0,l=r.length;a<l;++a){const{index:u,data:h}=r[a],{lo:d,hi:p}=RA(r[a],t,o,i);for(let y=d;y<=p;++y){const E=h[y];E.skip||s(E,u,y)}}}function CA(n){const t=n.indexOf("x")!==-1,e=n.indexOf("y")!==-1;return function(s,i){const r=t?Math.abs(s.x-i.x):0,o=e?Math.abs(s.y-i.y):0;return Math.sqrt(Math.pow(r,2)+Math.pow(o,2))}}function Il(n,t,e,s,i){const r=[];return!i&&!n.isPointInArea(t)||Ua(n,e,t,function(a,l,u){!i&&!Ir(a,n.chartArea,0)||a.inRange(t.x,t.y,s)&&r.push({element:a,datasetIndex:l,index:u})},!0),r}function DA(n,t,e,s){let i=[];function r(o,a,l){const{startAngle:u,endAngle:h}=o.getProps(["startAngle","endAngle"],s),{angle:d}=Bm(o,{x:t.x,y:t.y});Tr(d,u,h)&&i.push({element:o,datasetIndex:a,index:l})}return Ua(n,e,t,r),i}function MA(n,t,e,s,i,r){let o=[];const a=CA(e);let l=Number.POSITIVE_INFINITY;function u(h,d,p){const y=h.inRange(t.x,t.y,i);if(s&&!y)return;const E=h.getCenterPoint(i);if(!(!!r||n.isPointInArea(E))&&!y)return;const I=a(t,E);I<l?(o=[{element:h,datasetIndex:d,index:p}],l=I):I===l&&o.push({element:h,datasetIndex:d,index:p})}return Ua(n,e,t,u),o}function Sl(n,t,e,s,i,r){return!r&&!n.isPointInArea(t)?[]:e==="r"&&!s?DA(n,t,e,i):MA(n,t,e,s,i,r)}function bf(n,t,e,s,i){const r=[],o=e==="x"?"inXRange":"inYRange";let a=!1;return Ua(n,e,t,(l,u,h)=>{l[o]&&l[o](t[e],i)&&(r.push({element:l,datasetIndex:u,index:h}),a=a||l.inRange(t.x,t.y,i))}),s&&!a?[]:r}var OA={modes:{index(n,t,e,s){const i=hs(t,n),r=e.axis||"x",o=e.includeInvisible||!1,a=e.intersect?Il(n,i,r,s,o):Sl(n,i,r,!1,s,o),l=[];return a.length?(n.getSortedVisibleDatasetMetas().forEach(u=>{const h=a[0].index,d=u.data[h];d&&!d.skip&&l.push({element:d,datasetIndex:u.index,index:h})}),l):[]},dataset(n,t,e,s){const i=hs(t,n),r=e.axis||"xy",o=e.includeInvisible||!1;let a=e.intersect?Il(n,i,r,s,o):Sl(n,i,r,!1,s,o);if(a.length>0){const l=a[0].datasetIndex,u=n.getDatasetMeta(l).data;a=[];for(let h=0;h<u.length;++h)a.push({element:u[h],datasetIndex:l,index:h})}return a},point(n,t,e,s){const i=hs(t,n),r=e.axis||"xy",o=e.includeInvisible||!1;return Il(n,i,r,s,o)},nearest(n,t,e,s){const i=hs(t,n),r=e.axis||"xy",o=e.includeInvisible||!1;return Sl(n,i,r,e.intersect,s,o)},x(n,t,e,s){const i=hs(t,n);return bf(n,i,"x",e.intersect,s)},y(n,t,e,s){const i=hs(t,n);return bf(n,i,"y",e.intersect,s)}}};const h_=["left","top","right","bottom"];function Ni(n,t){return n.filter(e=>e.pos===t)}function vf(n,t){return n.filter(e=>h_.indexOf(e.pos)===-1&&e.box.axis===t)}function Fi(n,t){return n.sort((e,s)=>{const i=t?s:e,r=t?e:s;return i.weight===r.weight?i.index-r.index:i.weight-r.weight})}function LA(n){const t=[];let e,s,i,r,o,a;for(e=0,s=(n||[]).length;e<s;++e)i=n[e],{position:r,options:{stack:o,stackWeight:a=1}}=i,t.push({index:e,box:i,pos:r,horizontal:i.isHorizontal(),weight:i.weight,stack:o&&r+o,stackWeight:a});return t}function VA(n){const t={};for(const e of n){const{stack:s,pos:i,stackWeight:r}=e;if(!s||!h_.includes(i))continue;const o=t[s]||(t[s]={count:0,placed:0,weight:0,size:0});o.count++,o.weight+=r}return t}function NA(n,t){const e=VA(n),{vBoxMaxWidth:s,hBoxMaxHeight:i}=t;let r,o,a;for(r=0,o=n.length;r<o;++r){a=n[r];const{fullSize:l}=a.box,u=e[a.stack],h=u&&a.stackWeight/u.weight;a.horizontal?(a.width=h?h*s:l&&t.availableWidth,a.height=i):(a.width=s,a.height=h?h*i:l&&t.availableHeight)}return e}function FA(n){const t=LA(n),e=Fi(t.filter(u=>u.box.fullSize),!0),s=Fi(Ni(t,"left"),!0),i=Fi(Ni(t,"right")),r=Fi(Ni(t,"top"),!0),o=Fi(Ni(t,"bottom")),a=vf(t,"x"),l=vf(t,"y");return{fullSize:e,leftAndTop:s.concat(r),rightAndBottom:i.concat(l).concat(o).concat(a),chartArea:Ni(t,"chartArea"),vertical:s.concat(i).concat(l),horizontal:r.concat(o).concat(a)}}function Ef(n,t,e,s){return Math.max(n[e],t[e])+Math.max(n[s],t[s])}function d_(n,t){n.top=Math.max(n.top,t.top),n.left=Math.max(n.left,t.left),n.bottom=Math.max(n.bottom,t.bottom),n.right=Math.max(n.right,t.right)}function UA(n,t,e,s){const{pos:i,box:r}=e,o=n.maxPadding;if(!ht(i)){e.size&&(n[i]-=e.size);const d=s[e.stack]||{size:0,count:1};d.size=Math.max(d.size,e.horizontal?r.height:r.width),e.size=d.size/d.count,n[i]+=e.size}r.getPadding&&d_(o,r.getPadding());const a=Math.max(0,t.outerWidth-Ef(o,n,"left","right")),l=Math.max(0,t.outerHeight-Ef(o,n,"top","bottom")),u=a!==n.w,h=l!==n.h;return n.w=a,n.h=l,e.horizontal?{same:u,other:h}:{same:h,other:u}}function BA(n){const t=n.maxPadding;function e(s){const i=Math.max(t[s]-n[s],0);return n[s]+=i,i}n.y+=e("top"),n.x+=e("left"),e("right"),e("bottom")}function $A(n,t){const e=t.maxPadding;function s(i){const r={left:0,top:0,right:0,bottom:0};return i.forEach(o=>{r[o]=Math.max(t[o],e[o])}),r}return s(n?["left","right"]:["top","bottom"])}function Ki(n,t,e,s){const i=[];let r,o,a,l,u,h;for(r=0,o=n.length,u=0;r<o;++r){a=n[r],l=a.box,l.update(a.width||t.w,a.height||t.h,$A(a.horizontal,t));const{same:d,other:p}=UA(t,e,a,s);u|=d&&i.length,h=h||p,l.fullSize||i.push(a)}return u&&Ki(i,t,e,s)||h}function ho(n,t,e,s,i){n.top=e,n.left=t,n.right=t+s,n.bottom=e+i,n.width=s,n.height=i}function wf(n,t,e,s){const i=e.padding;let{x:r,y:o}=t;for(const a of n){const l=a.box,u=s[a.stack]||{placed:0,weight:1},h=a.stackWeight/u.weight||1;if(a.horizontal){const d=t.w*h,p=u.size||l.height;wr(u.start)&&(o=u.start),l.fullSize?ho(l,i.left,o,e.outerWidth-i.right-i.left,p):ho(l,t.left+u.placed,o,d,p),u.start=o,u.placed+=d,o=l.bottom}else{const d=t.h*h,p=u.size||l.width;wr(u.start)&&(r=u.start),l.fullSize?ho(l,r,i.top,p,e.outerHeight-i.bottom-i.top):ho(l,r,t.top+u.placed,p,d),u.start=r,u.placed+=d,r=l.right}}t.x=r,t.y=o}var Un={addBox(n,t){n.boxes||(n.boxes=[]),t.fullSize=t.fullSize||!1,t.position=t.position||"top",t.weight=t.weight||0,t._layers=t._layers||function(){return[{z:0,draw(e){t.draw(e)}}]},n.boxes.push(t)},removeBox(n,t){const e=n.boxes?n.boxes.indexOf(t):-1;e!==-1&&n.boxes.splice(e,1)},configure(n,t,e){t.fullSize=e.fullSize,t.position=e.position,t.weight=e.weight},update(n,t,e,s){if(!n)return;const i=$e(n.options.layout.padding),r=Math.max(t-i.width,0),o=Math.max(e-i.height,0),a=FA(n.boxes),l=a.vertical,u=a.horizontal;wt(n.boxes,w=>{typeof w.beforeLayout=="function"&&w.beforeLayout()});const h=l.reduce((w,I)=>I.box.options&&I.box.options.display===!1?w:w+1,0)||1,d=Object.freeze({outerWidth:t,outerHeight:e,padding:i,availableWidth:r,availableHeight:o,vBoxMaxWidth:r/2/h,hBoxMaxHeight:o/2}),p=Object.assign({},i);d_(p,$e(s));const y=Object.assign({maxPadding:p,w:r,h:o,x:i.left,y:i.top},i),E=NA(l.concat(u),d);Ki(a.fullSize,y,d,E),Ki(l,y,d,E),Ki(u,y,d,E)&&Ki(l,y,d,E),BA(y),wf(a.leftAndTop,y,d,E),y.x+=y.w,y.y+=y.h,wf(a.rightAndBottom,y,d,E),n.chartArea={left:y.left,top:y.top,right:y.left+y.w,bottom:y.top+y.h,height:y.h,width:y.w},wt(a.chartArea,w=>{const I=w.box;Object.assign(I,n.chartArea),I.update(y.w,y.h,{left:0,top:0,right:0,bottom:0})})}};class f_{acquireContext(t,e){}releaseContext(t){return!1}addEventListener(t,e,s){}removeEventListener(t,e,s){}getDevicePixelRatio(){return 1}getMaximumSize(t,e,s,i){return e=Math.max(0,e||t.width),s=s||t.height,{width:e,height:Math.max(0,i?Math.floor(e/i):s)}}isAttached(t){return!0}updateConfig(t){}}class zA extends f_{acquireContext(t){return t&&t.getContext&&t.getContext("2d")||null}updateConfig(t){t.options.animation=!1}}const Mo="$chartjs",jA={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"},Tf=n=>n===null||n==="";function HA(n,t){const e=n.style,s=n.getAttribute("height"),i=n.getAttribute("width");if(n[Mo]={initial:{height:s,width:i,style:{display:e.display,height:e.height,width:e.width}}},e.display=e.display||"block",e.boxSizing=e.boxSizing||"border-box",Tf(i)){const r=of(n,"width");r!==void 0&&(n.width=r)}if(Tf(s))if(n.style.height==="")n.height=n.width/(t||2);else{const r=of(n,"height");r!==void 0&&(n.height=r)}return n}const p_=qx?{passive:!0}:!1;function WA(n,t,e){n&&n.addEventListener(t,e,p_)}function qA(n,t,e){n&&n.canvas&&n.canvas.removeEventListener(t,e,p_)}function KA(n,t){const e=jA[n.type]||n.type,{x:s,y:i}=hs(n,t);return{type:e,chart:t,native:n,x:s!==void 0?s:null,y:i!==void 0?i:null}}function ha(n,t){for(const e of n)if(e===t||e.contains(t))return!0}function GA(n,t,e){const s=n.canvas,i=new MutationObserver(r=>{let o=!1;for(const a of r)o=o||ha(a.addedNodes,s),o=o&&!ha(a.removedNodes,s);o&&e()});return i.observe(document,{childList:!0,subtree:!0}),i}function YA(n,t,e){const s=n.canvas,i=new MutationObserver(r=>{let o=!1;for(const a of r)o=o||ha(a.removedNodes,s),o=o&&!ha(a.addedNodes,s);o&&e()});return i.observe(document,{childList:!0,subtree:!0}),i}const Sr=new Map;let If=0;function g_(){const n=window.devicePixelRatio;n!==If&&(If=n,Sr.forEach((t,e)=>{e.currentDevicePixelRatio!==n&&t()}))}function QA(n,t){Sr.size||window.addEventListener("resize",g_),Sr.set(n,t)}function XA(n){Sr.delete(n),Sr.size||window.removeEventListener("resize",g_)}function JA(n,t,e){const s=n.canvas,i=s&&vu(s);if(!i)return;const r=Hm((a,l)=>{const u=i.clientWidth;e(a,l),u<i.clientWidth&&e()},window),o=new ResizeObserver(a=>{const l=a[0],u=l.contentRect.width,h=l.contentRect.height;u===0&&h===0||r(u,h)});return o.observe(i),QA(n,r),o}function xl(n,t,e){e&&e.disconnect(),t==="resize"&&XA(n)}function ZA(n,t,e){const s=n.canvas,i=Hm(r=>{n.ctx!==null&&e(KA(r,n))},n);return WA(s,t,i),i}class tP extends f_{acquireContext(t,e){const s=t&&t.getContext&&t.getContext("2d");return s&&s.canvas===t?(HA(t,e),s):null}releaseContext(t){const e=t.canvas;if(!e[Mo])return!1;const s=e[Mo].initial;["height","width"].forEach(r=>{const o=s[r];_t(o)?e.removeAttribute(r):e.setAttribute(r,o)});const i=s.style||{};return Object.keys(i).forEach(r=>{e.style[r]=i[r]}),e.width=e.width,delete e[Mo],!0}addEventListener(t,e,s){this.removeEventListener(t,e);const i=t.$proxies||(t.$proxies={}),o={attach:GA,detach:YA,resize:JA}[e]||ZA;i[e]=o(t,e,s)}removeEventListener(t,e){const s=t.$proxies||(t.$proxies={}),i=s[e];if(!i)return;({attach:xl,detach:xl,resize:xl}[e]||qA)(t,e,i),s[e]=void 0}getDevicePixelRatio(){return window.devicePixelRatio}getMaximumSize(t,e,s,i){return Wx(t,e,s,i)}isAttached(t){const e=t&&vu(t);return!!(e&&e.isConnected)}}function eP(n){return!bu()||typeof OffscreenCanvas<"u"&&n instanceof OffscreenCanvas?zA:tP}class sn{constructor(){$(this,"x");$(this,"y");$(this,"active",!1);$(this,"options");$(this,"$animations")}tooltipPosition(t){const{x:e,y:s}=this.getProps(["x","y"],t);return{x:e,y:s}}hasValue(){return ci(this.x)&&ci(this.y)}getProps(t,e){const s=this.$animations;if(!e||!s)return this;const i={};return t.forEach(r=>{i[r]=s[r]&&s[r].active()?s[r]._to:this[r]}),i}}$(sn,"defaults",{}),$(sn,"defaultRoutes");function nP(n,t){const e=n.options.ticks,s=sP(n),i=Math.min(e.maxTicksLimit||s,s),r=e.major.enabled?rP(t):[],o=r.length,a=r[0],l=r[o-1],u=[];if(o>i)return oP(t,u,r,o/i),u;const h=iP(r,t,i);if(o>0){let d,p;const y=o>1?Math.round((l-a)/(o-1)):null;for(fo(t,u,h,_t(y)?0:a-y,a),d=0,p=o-1;d<p;d++)fo(t,u,h,r[d],r[d+1]);return fo(t,u,h,l,_t(y)?t.length:l+y),u}return fo(t,u,h),u}function sP(n){const t=n.options.offset,e=n._tickSize(),s=n._length/e+(t?0:1),i=n._maxLength/e;return Math.floor(Math.min(s,i))}function iP(n,t,e){const s=aP(n),i=t.length/e;if(!s)return Math.max(i,1);const r=qS(s);for(let o=0,a=r.length-1;o<a;o++){const l=r[o];if(l>i)return l}return Math.max(i,1)}function rP(n){const t=[];let e,s;for(e=0,s=n.length;e<s;e++)n[e].major&&t.push(e);return t}function oP(n,t,e,s){let i=0,r=e[0],o;for(s=Math.ceil(s),o=0;o<n.length;o++)o===r&&(t.push(n[o]),i++,r=e[i*s])}function fo(n,t,e,s,i){const r=st(s,0),o=Math.min(st(i,n.length),n.length);let a=0,l,u,h;for(e=Math.ceil(e),i&&(l=i-s,e=l/Math.floor(l/e)),h=r;h<0;)a++,h=Math.round(r+a*e);for(u=Math.max(r,0);u<o;u++)u===h&&(t.push(n[u]),a++,h=Math.round(r+a*e))}function aP(n){const t=n.length;let e,s;if(t<2)return!1;for(s=n[0],e=1;e<t;++e)if(n[e]-n[e-1]!==s)return!1;return s}const lP=n=>n==="left"?"right":n==="right"?"left":n,Sf=(n,t,e)=>t==="top"||t==="left"?n[t]+e:n[t]-e,xf=(n,t)=>Math.min(t||n,n);function Af(n,t){const e=[],s=n.length/t,i=n.length;let r=0;for(;r<i;r+=s)e.push(n[Math.floor(r)]);return e}function cP(n,t,e){const s=n.ticks.length,i=Math.min(t,s-1),r=n._startPixel,o=n._endPixel,a=1e-6;let l=n.getPixelForTick(i),u;if(!(e&&(s===1?u=Math.max(l-r,o-l):t===0?u=(n.getPixelForTick(1)-l)/2:u=(l-n.getPixelForTick(i-1))/2,l+=i<t?u:-u,l<r-a||l>o+a)))return l}function uP(n,t){wt(n,e=>{const s=e.gc,i=s.length/2;let r;if(i>t){for(r=0;r<i;++r)delete e.data[s[r]];s.splice(0,i)}})}function Ui(n){return n.drawTicks?n.tickLength:0}function Pf(n,t){if(!n.display)return 0;const e=ye(n.font,t),s=$e(n.padding);return(Gt(n.text)?n.text.length:1)*e.lineHeight+s.height}function hP(n,t){return Os(n,{scale:t,type:"scale"})}function dP(n,t,e){return Os(n,{tick:e,index:t,type:"tick"})}function fP(n,t,e){let s=Wm(n);return(e&&t!=="right"||!e&&t==="right")&&(s=lP(s)),s}function pP(n,t,e,s){const{top:i,left:r,bottom:o,right:a,chart:l}=n,{chartArea:u,scales:h}=l;let d=0,p,y,E;const w=o-i,I=a-r;if(n.isHorizontal()){if(y=Ie(s,r,a),ht(e)){const P=Object.keys(e)[0],k=e[P];E=h[P].getPixelForValue(k)+w-t}else e==="center"?E=(u.bottom+u.top)/2+w-t:E=Sf(n,e,t);p=a-r}else{if(ht(e)){const P=Object.keys(e)[0],k=e[P];y=h[P].getPixelForValue(k)-I+t}else e==="center"?y=(u.left+u.right)/2-I+t:y=Sf(n,e,t);E=Ie(s,o,i),d=e==="left"?-Yt:Yt}return{titleX:y,titleY:E,maxWidth:p,rotation:d}}class bi extends sn{constructor(t){super(),this.id=t.id,this.type=t.type,this.options=void 0,this.ctx=t.ctx,this.chart=t.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void 0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache={},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=!1,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void 0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=!1,this.$context=void 0}init(t){this.options=t.setContext(this.getContext()),this.axis=t.axis,this._userMin=this.parse(t.min),this._userMax=this.parse(t.max),this._suggestedMin=this.parse(t.suggestedMin),this._suggestedMax=this.parse(t.suggestedMax)}parse(t,e){return t}getUserBounds(){let{_userMin:t,_userMax:e,_suggestedMin:s,_suggestedMax:i}=this;return t=He(t,Number.POSITIVE_INFINITY),e=He(e,Number.NEGATIVE_INFINITY),s=He(s,Number.POSITIVE_INFINITY),i=He(i,Number.NEGATIVE_INFINITY),{min:He(t,s),max:He(e,i),minDefined:de(t),maxDefined:de(e)}}getMinMax(t){let{min:e,max:s,minDefined:i,maxDefined:r}=this.getUserBounds(),o;if(i&&r)return{min:e,max:s};const a=this.getMatchingVisibleMetas();for(let l=0,u=a.length;l<u;++l)o=a[l].controller.getMinMax(this,t),i||(e=Math.min(e,o.min)),r||(s=Math.max(s,o.max));return e=r&&e>s?s:e,s=i&&e>s?e:s,{min:He(e,He(s,e)),max:He(s,He(e,s))}}getPadding(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}}getTicks(){return this.ticks}getLabels(){const t=this.chart.data;return this.options.labels||(this.isHorizontal()?t.xLabels:t.yLabels)||t.labels||[]}getLabelItems(t=this.chart.chartArea){return this._labelItems||(this._labelItems=this._computeLabelItems(t))}beforeLayout(){this._cache={},this._dataLimitsCached=!1}beforeUpdate(){Rt(this.options.beforeUpdate,[this])}update(t,e,s){const{beginAtZero:i,grace:r,ticks:o}=this.options,a=o.sampleSize;this.beforeUpdate(),this.maxWidth=t,this.maxHeight=e,this._margins=s=Object.assign({left:0,right:0,top:0,bottom:0},s),this.ticks=null,this._labelSizes=null,this._gridLineItems=null,this._labelItems=null,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this._maxLength=this.isHorizontal()?this.width+s.left+s.right:this.height+s.top+s.bottom,this._dataLimitsCached||(this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this._range=Tx(this,r,i),this._dataLimitsCached=!0),this.beforeBuildTicks(),this.ticks=this.buildTicks()||[],this.afterBuildTicks();const l=a<this.ticks.length;this._convertTicksToLabels(l?Af(this.ticks,a):this.ticks),this.configure(),this.beforeCalculateLabelRotation(),this.calculateLabelRotation(),this.afterCalculateLabelRotation(),o.display&&(o.autoSkip||o.source==="auto")&&(this.ticks=nP(this,this.ticks),this._labelSizes=null,this.afterAutoSkip()),l&&this._convertTicksToLabels(this.ticks),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate()}configure(){let t=this.options.reverse,e,s;this.isHorizontal()?(e=this.left,s=this.right):(e=this.top,s=this.bottom,t=!t),this._startPixel=e,this._endPixel=s,this._reversePixels=t,this._length=s-e,this._alignToPixels=this.options.alignToPixels}afterUpdate(){Rt(this.options.afterUpdate,[this])}beforeSetDimensions(){Rt(this.options.beforeSetDimensions,[this])}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0}afterSetDimensions(){Rt(this.options.afterSetDimensions,[this])}_callHooks(t){this.chart.notifyPlugins(t,this.getContext()),Rt(this.options[t],[this])}beforeDataLimits(){this._callHooks("beforeDataLimits")}determineDataLimits(){}afterDataLimits(){this._callHooks("afterDataLimits")}beforeBuildTicks(){this._callHooks("beforeBuildTicks")}buildTicks(){return[]}afterBuildTicks(){this._callHooks("afterBuildTicks")}beforeTickToLabelConversion(){Rt(this.options.beforeTickToLabelConversion,[this])}generateTickLabels(t){const e=this.options.ticks;let s,i,r;for(s=0,i=t.length;s<i;s++)r=t[s],r.label=Rt(e.callback,[r.value,s,t],this)}afterTickToLabelConversion(){Rt(this.options.afterTickToLabelConversion,[this])}beforeCalculateLabelRotation(){Rt(this.options.beforeCalculateLabelRotation,[this])}calculateLabelRotation(){const t=this.options,e=t.ticks,s=xf(this.ticks.length,t.ticks.maxTicksLimit),i=e.minRotation||0,r=e.maxRotation;let o=i,a,l,u;if(!this._isVisible()||!e.display||i>=r||s<=1||!this.isHorizontal()){this.labelRotation=i;return}const h=this._getLabelSizes(),d=h.widest.width,p=h.highest.height,y=ue(this.chart.width-d,0,this.maxWidth);a=t.offset?this.maxWidth/s:y/(s-1),d+6>a&&(a=y/(s-(t.offset?.5:1)),l=this.maxHeight-Ui(t.grid)-e.padding-Pf(t.title,this.chart.options.font),u=Math.sqrt(d*d+p*p),o=QS(Math.min(Math.asin(ue((h.highest.height+6)/a,-1,1)),Math.asin(ue(l/u,-1,1))-Math.asin(ue(p/u,-1,1)))),o=Math.max(i,Math.min(r,o))),this.labelRotation=o}afterCalculateLabelRotation(){Rt(this.options.afterCalculateLabelRotation,[this])}afterAutoSkip(){}beforeFit(){Rt(this.options.beforeFit,[this])}fit(){const t={width:0,height:0},{chart:e,options:{ticks:s,title:i,grid:r}}=this,o=this._isVisible(),a=this.isHorizontal();if(o){const l=Pf(i,e.options.font);if(a?(t.width=this.maxWidth,t.height=Ui(r)+l):(t.height=this.maxHeight,t.width=Ui(r)+l),s.display&&this.ticks.length){const{first:u,last:h,widest:d,highest:p}=this._getLabelSizes(),y=s.padding*2,E=gn(this.labelRotation),w=Math.cos(E),I=Math.sin(E);if(a){const P=s.mirror?0:I*d.width+w*p.height;t.height=Math.min(this.maxHeight,t.height+P+y)}else{const P=s.mirror?0:w*d.width+I*p.height;t.width=Math.min(this.maxWidth,t.width+P+y)}this._calculatePadding(u,h,I,w)}}this._handleMargins(),a?(this.width=this._length=e.width-this._margins.left-this._margins.right,this.height=t.height):(this.width=t.width,this.height=this._length=e.height-this._margins.top-this._margins.bottom)}_calculatePadding(t,e,s,i){const{ticks:{align:r,padding:o},position:a}=this.options,l=this.labelRotation!==0,u=a!=="top"&&this.axis==="x";if(this.isHorizontal()){const h=this.getPixelForTick(0)-this.left,d=this.right-this.getPixelForTick(this.ticks.length-1);let p=0,y=0;l?u?(p=i*t.width,y=s*e.height):(p=s*t.height,y=i*e.width):r==="start"?y=e.width:r==="end"?p=t.width:r!=="inner"&&(p=t.width/2,y=e.width/2),this.paddingLeft=Math.max((p-h+o)*this.width/(this.width-h),0),this.paddingRight=Math.max((y-d+o)*this.width/(this.width-d),0)}else{let h=e.height/2,d=t.height/2;r==="start"?(h=0,d=t.height):r==="end"&&(h=e.height,d=0),this.paddingTop=h+o,this.paddingBottom=d+o}}_handleMargins(){this._margins&&(this._margins.left=Math.max(this.paddingLeft,this._margins.left),this._margins.top=Math.max(this.paddingTop,this._margins.top),this._margins.right=Math.max(this.paddingRight,this._margins.right),this._margins.bottom=Math.max(this.paddingBottom,this._margins.bottom))}afterFit(){Rt(this.options.afterFit,[this])}isHorizontal(){const{axis:t,position:e}=this.options;return e==="top"||e==="bottom"||t==="x"}isFullSize(){return this.options.fullSize}_convertTicksToLabels(t){this.beforeTickToLabelConversion(),this.generateTickLabels(t);let e,s;for(e=0,s=t.length;e<s;e++)_t(t[e].label)&&(t.splice(e,1),s--,e--);this.afterTickToLabelConversion()}_getLabelSizes(){let t=this._labelSizes;if(!t){const e=this.options.ticks.sampleSize;let s=this.ticks;e<s.length&&(s=Af(s,e)),this._labelSizes=t=this._computeLabelSizes(s,s.length,this.options.ticks.maxTicksLimit)}return t}_computeLabelSizes(t,e,s){const{ctx:i,_longestTextCache:r}=this,o=[],a=[],l=Math.floor(e/xf(e,s));let u=0,h=0,d,p,y,E,w,I,P,k,R,D,M;for(d=0;d<e;d+=l){if(E=t[d].label,w=this._resolveTickFontOptions(d),i.font=I=w.string,P=r[I]=r[I]||{data:{},gc:[]},k=w.lineHeight,R=D=0,!_t(E)&&!Gt(E))R=tf(i,P.data,P.gc,R,E),D=k;else if(Gt(E))for(p=0,y=E.length;p<y;++p)M=E[p],!_t(M)&&!Gt(M)&&(R=tf(i,P.data,P.gc,R,M),D+=k);o.push(R),a.push(D),u=Math.max(R,u),h=Math.max(D,h)}uP(r,e);const L=o.indexOf(u),S=a.indexOf(h),g=_=>({width:o[_]||0,height:a[_]||0});return{first:g(0),last:g(e-1),widest:g(L),highest:g(S),widths:o,heights:a}}getLabelForValue(t){return t}getPixelForValue(t,e){return NaN}getValueForPixel(t){}getPixelForTick(t){const e=this.ticks;return t<0||t>e.length-1?null:this.getPixelForValue(e[t].value)}getPixelForDecimal(t){this._reversePixels&&(t=1-t);const e=this._startPixel+t*this._length;return JS(this._alignToPixels?ls(this.chart,e,0):e)}getDecimalForPixel(t){const e=(t-this._startPixel)/this._length;return this._reversePixels?1-e:e}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue(){const{min:t,max:e}=this;return t<0&&e<0?e:t>0&&e>0?t:0}getContext(t){const e=this.ticks||[];if(t>=0&&t<e.length){const s=e[t];return s.$context||(s.$context=dP(this.getContext(),t,s))}return this.$context||(this.$context=hP(this.chart.getContext(),this))}_tickSize(){const t=this.options.ticks,e=gn(this.labelRotation),s=Math.abs(Math.cos(e)),i=Math.abs(Math.sin(e)),r=this._getLabelSizes(),o=t.autoSkipPadding||0,a=r?r.widest.width+o:0,l=r?r.highest.height+o:0;return this.isHorizontal()?l*s>a*i?a/s:l/i:l*i<a*s?l/s:a/i}_isVisible(){const t=this.options.display;return t!=="auto"?!!t:this.getMatchingVisibleMetas().length>0}_computeGridLineItems(t){const e=this.axis,s=this.chart,i=this.options,{grid:r,position:o,border:a}=i,l=r.offset,u=this.isHorizontal(),d=this.ticks.length+(l?1:0),p=Ui(r),y=[],E=a.setContext(this.getContext()),w=E.display?E.width:0,I=w/2,P=function(it){return ls(s,it,w)};let k,R,D,M,L,S,g,_,b,v,A,x;if(o==="top")k=P(this.bottom),S=this.bottom-p,_=k-I,v=P(t.top)+I,x=t.bottom;else if(o==="bottom")k=P(this.top),v=t.top,x=P(t.bottom)-I,S=k+I,_=this.top+p;else if(o==="left")k=P(this.right),L=this.right-p,g=k-I,b=P(t.left)+I,A=t.right;else if(o==="right")k=P(this.left),b=t.left,A=P(t.right)-I,L=k+I,g=this.left+p;else if(e==="x"){if(o==="center")k=P((t.top+t.bottom)/2+.5);else if(ht(o)){const it=Object.keys(o)[0],j=o[it];k=P(this.chart.scales[it].getPixelForValue(j))}v=t.top,x=t.bottom,S=k+I,_=S+p}else if(e==="y"){if(o==="center")k=P((t.left+t.right)/2);else if(ht(o)){const it=Object.keys(o)[0],j=o[it];k=P(this.chart.scales[it].getPixelForValue(j))}L=k-I,g=L-p,b=t.left,A=t.right}const q=st(i.ticks.maxTicksLimit,d),K=Math.max(1,Math.ceil(d/q));for(R=0;R<d;R+=K){const it=this.getContext(R),j=r.setContext(it),rt=a.setContext(it),B=j.lineWidth,Pt=j.color,Y=rt.dash||[],X=rt.dashOffset,z=j.tickWidth,mt=j.tickColor,yt=j.tickBorderDash||[],Et=j.tickBorderDashOffset;D=cP(this,R,l),D!==void 0&&(M=ls(s,D,B),u?L=g=b=A=M:S=_=v=x=M,y.push({tx1:L,ty1:S,tx2:g,ty2:_,x1:b,y1:v,x2:A,y2:x,width:B,color:Pt,borderDash:Y,borderDashOffset:X,tickWidth:z,tickColor:mt,tickBorderDash:yt,tickBorderDashOffset:Et}))}return this._ticksLength=d,this._borderValue=k,y}_computeLabelItems(t){const e=this.axis,s=this.options,{position:i,ticks:r}=s,o=this.isHorizontal(),a=this.ticks,{align:l,crossAlign:u,padding:h,mirror:d}=r,p=Ui(s.grid),y=p+h,E=d?-h:y,w=-gn(this.labelRotation),I=[];let P,k,R,D,M,L,S,g,_,b,v,A,x="middle";if(i==="top")L=this.bottom-E,S=this._getXAxisLabelAlignment();else if(i==="bottom")L=this.top+E,S=this._getXAxisLabelAlignment();else if(i==="left"){const K=this._getYAxisLabelAlignment(p);S=K.textAlign,M=K.x}else if(i==="right"){const K=this._getYAxisLabelAlignment(p);S=K.textAlign,M=K.x}else if(e==="x"){if(i==="center")L=(t.top+t.bottom)/2+y;else if(ht(i)){const K=Object.keys(i)[0],it=i[K];L=this.chart.scales[K].getPixelForValue(it)+y}S=this._getXAxisLabelAlignment()}else if(e==="y"){if(i==="center")M=(t.left+t.right)/2-y;else if(ht(i)){const K=Object.keys(i)[0],it=i[K];M=this.chart.scales[K].getPixelForValue(it)}S=this._getYAxisLabelAlignment(p).textAlign}e==="y"&&(l==="start"?x="top":l==="end"&&(x="bottom"));const q=this._getLabelSizes();for(P=0,k=a.length;P<k;++P){R=a[P],D=R.label;const K=r.setContext(this.getContext(P));g=this.getPixelForTick(P)+r.labelOffset,_=this._resolveTickFontOptions(P),b=_.lineHeight,v=Gt(D)?D.length:1;const it=v/2,j=K.color,rt=K.textStrokeColor,B=K.textStrokeWidth;let Pt=S;o?(M=g,S==="inner"&&(P===k-1?Pt=this.options.reverse?"left":"right":P===0?Pt=this.options.reverse?"right":"left":Pt="center"),i==="top"?u==="near"||w!==0?A=-v*b+b/2:u==="center"?A=-q.highest.height/2-it*b+b:A=-q.highest.height+b/2:u==="near"||w!==0?A=b/2:u==="center"?A=q.highest.height/2-it*b:A=q.highest.height-v*b,d&&(A*=-1),w!==0&&!K.showLabelBackdrop&&(M+=b/2*Math.sin(w))):(L=g,A=(1-v)*b/2);let Y;if(K.showLabelBackdrop){const X=$e(K.backdropPadding),z=q.heights[P],mt=q.widths[P];let yt=A-X.top,Et=0-X.left;switch(x){case"middle":yt-=z/2;break;case"bottom":yt-=z;break}switch(S){case"center":Et-=mt/2;break;case"right":Et-=mt;break;case"inner":P===k-1?Et-=mt:P>0&&(Et-=mt/2);break}Y={left:Et,top:yt,width:mt+X.width,height:z+X.height,color:K.backdropColor}}I.push({label:D,font:_,textOffset:A,options:{rotation:w,color:j,strokeColor:rt,strokeWidth:B,textAlign:Pt,textBaseline:x,translation:[M,L],backdrop:Y}})}return I}_getXAxisLabelAlignment(){const{position:t,ticks:e}=this.options;if(-gn(this.labelRotation))return t==="top"?"left":"right";let i="center";return e.align==="start"?i="left":e.align==="end"?i="right":e.align==="inner"&&(i="inner"),i}_getYAxisLabelAlignment(t){const{position:e,ticks:{crossAlign:s,mirror:i,padding:r}}=this.options,o=this._getLabelSizes(),a=t+r,l=o.widest.width;let u,h;return e==="left"?i?(h=this.right+r,s==="near"?u="left":s==="center"?(u="center",h+=l/2):(u="right",h+=l)):(h=this.right-a,s==="near"?u="right":s==="center"?(u="center",h-=l/2):(u="left",h=this.left)):e==="right"?i?(h=this.left+r,s==="near"?u="right":s==="center"?(u="center",h-=l/2):(u="left",h-=l)):(h=this.left+a,s==="near"?u="left":s==="center"?(u="center",h+=l/2):(u="right",h=this.right)):u="right",{textAlign:u,x:h}}_computeLabelArea(){if(this.options.ticks.mirror)return;const t=this.chart,e=this.options.position;if(e==="left"||e==="right")return{top:0,left:this.left,bottom:t.height,right:this.right};if(e==="top"||e==="bottom")return{top:this.top,left:0,bottom:this.bottom,right:t.width}}drawBackground(){const{ctx:t,options:{backgroundColor:e},left:s,top:i,width:r,height:o}=this;e&&(t.save(),t.fillStyle=e,t.fillRect(s,i,r,o),t.restore())}getLineWidthForValue(t){const e=this.options.grid;if(!this._isVisible()||!e.display)return 0;const i=this.ticks.findIndex(r=>r.value===t);return i>=0?e.setContext(this.getContext(i)).lineWidth:0}drawGrid(t){const e=this.options.grid,s=this.ctx,i=this._gridLineItems||(this._gridLineItems=this._computeGridLineItems(t));let r,o;const a=(l,u,h)=>{!h.width||!h.color||(s.save(),s.lineWidth=h.width,s.strokeStyle=h.color,s.setLineDash(h.borderDash||[]),s.lineDashOffset=h.borderDashOffset,s.beginPath(),s.moveTo(l.x,l.y),s.lineTo(u.x,u.y),s.stroke(),s.restore())};if(e.display)for(r=0,o=i.length;r<o;++r){const l=i[r];e.drawOnChartArea&&a({x:l.x1,y:l.y1},{x:l.x2,y:l.y2},l),e.drawTicks&&a({x:l.tx1,y:l.ty1},{x:l.tx2,y:l.ty2},{color:l.tickColor,width:l.tickWidth,borderDash:l.tickBorderDash,borderDashOffset:l.tickBorderDashOffset})}}drawBorder(){const{chart:t,ctx:e,options:{border:s,grid:i}}=this,r=s.setContext(this.getContext()),o=s.display?r.width:0;if(!o)return;const a=i.setContext(this.getContext(0)).lineWidth,l=this._borderValue;let u,h,d,p;this.isHorizontal()?(u=ls(t,this.left,o)-o/2,h=ls(t,this.right,a)+a/2,d=p=l):(d=ls(t,this.top,o)-o/2,p=ls(t,this.bottom,a)+a/2,u=h=l),e.save(),e.lineWidth=r.width,e.strokeStyle=r.color,e.beginPath(),e.moveTo(u,d),e.lineTo(h,p),e.stroke(),e.restore()}drawLabels(t){if(!this.options.ticks.display)return;const s=this.ctx,i=this._computeLabelArea();i&&Va(s,i);const r=this.getLabelItems(t);for(const o of r){const a=o.options,l=o.font,u=o.label,h=o.textOffset;la(s,u,0,h,l,a)}i&&Na(s)}drawTitle(){const{ctx:t,options:{position:e,title:s,reverse:i}}=this;if(!s.display)return;const r=ye(s.font),o=$e(s.padding),a=s.align;let l=r.lineHeight/2;e==="bottom"||e==="center"||ht(e)?(l+=o.bottom,Gt(s.text)&&(l+=r.lineHeight*(s.text.length-1))):l+=o.top;const{titleX:u,titleY:h,maxWidth:d,rotation:p}=pP(this,l,e,a);la(t,s.text,0,0,r,{color:s.color,maxWidth:d,rotation:p,textAlign:fP(a,e,i),textBaseline:"middle",translation:[u,h]})}draw(t){this._isVisible()&&(this.drawBackground(),this.drawGrid(t),this.drawBorder(),this.drawTitle(),this.drawLabels(t))}_layers(){const t=this.options,e=t.ticks&&t.ticks.z||0,s=st(t.grid&&t.grid.z,-1),i=st(t.border&&t.border.z,0);return!this._isVisible()||this.draw!==bi.prototype.draw?[{z:e,draw:r=>{this.draw(r)}}]:[{z:s,draw:r=>{this.drawBackground(),this.drawGrid(r),this.drawTitle()}},{z:i,draw:()=>{this.drawBorder()}},{z:e,draw:r=>{this.drawLabels(r)}}]}getMatchingVisibleMetas(t){const e=this.chart.getSortedVisibleDatasetMetas(),s=this.axis+"AxisID",i=[];let r,o;for(r=0,o=e.length;r<o;++r){const a=e[r];a[s]===this.id&&(!t||a.type===t)&&i.push(a)}return i}_resolveTickFontOptions(t){const e=this.options.ticks.setContext(this.getContext(t));return ye(e.font)}_maxDigits(){const t=this._resolveTickFontOptions(0).lineHeight;return(this.isHorizontal()?this.width:this.height)/t}}class po{constructor(t,e,s){this.type=t,this.scope=e,this.override=s,this.items=Object.create(null)}isForType(t){return Object.prototype.isPrototypeOf.call(this.type.prototype,t.prototype)}register(t){const e=Object.getPrototypeOf(t);let s;_P(e)&&(s=this.register(e));const i=this.items,r=t.id,o=this.scope+"."+r;if(!r)throw new Error("class does not have id: "+t);return r in i||(i[r]=t,gP(t,o,s),this.override&&$t.override(t.id,t.overrides)),o}get(t){return this.items[t]}unregister(t){const e=this.items,s=t.id,i=this.scope;s in e&&delete e[s],i&&s in $t[i]&&(delete $t[i][s],this.override&&delete Ps[s])}}function gP(n,t,e){const s=Er(Object.create(null),[e?$t.get(e):{},$t.get(t),n.defaults]);$t.set(t,s),n.defaultRoutes&&mP(t,n.defaultRoutes),n.descriptors&&$t.describe(t,n.descriptors)}function mP(n,t){Object.keys(t).forEach(e=>{const s=e.split("."),i=s.pop(),r=[n].concat(s).join("."),o=t[e].split("."),a=o.pop(),l=o.join(".");$t.route(r,i,l,a)})}function _P(n){return"id"in n&&"defaults"in n}class yP{constructor(){this.controllers=new po(Gn,"datasets",!0),this.elements=new po(sn,"elements"),this.plugins=new po(Object,"plugins"),this.scales=new po(bi,"scales"),this._typedRegistries=[this.controllers,this.scales,this.elements]}add(...t){this._each("register",t)}remove(...t){this._each("unregister",t)}addControllers(...t){this._each("register",t,this.controllers)}addElements(...t){this._each("register",t,this.elements)}addPlugins(...t){this._each("register",t,this.plugins)}addScales(...t){this._each("register",t,this.scales)}getController(t){return this._get(t,this.controllers,"controller")}getElement(t){return this._get(t,this.elements,"element")}getPlugin(t){return this._get(t,this.plugins,"plugin")}getScale(t){return this._get(t,this.scales,"scale")}removeControllers(...t){this._each("unregister",t,this.controllers)}removeElements(...t){this._each("unregister",t,this.elements)}removePlugins(...t){this._each("unregister",t,this.plugins)}removeScales(...t){this._each("unregister",t,this.scales)}_each(t,e,s){[...e].forEach(i=>{const r=s||this._getRegistryForType(i);s||r.isForType(i)||r===this.plugins&&i.id?this._exec(t,r,i):wt(i,o=>{const a=s||this._getRegistryForType(o);this._exec(t,a,o)})})}_exec(t,e,s){const i=hu(t);Rt(s["before"+i],[],s),e[t](s),Rt(s["after"+i],[],s)}_getRegistryForType(t){for(let e=0;e<this._typedRegistries.length;e++){const s=this._typedRegistries[e];if(s.isForType(t))return s}return this.plugins}_get(t,e,s){const i=e.get(t);if(i===void 0)throw new Error('"'+t+'" is not a registered '+s+".");return i}}var qe=new yP;class bP{constructor(){this._init=void 0}notify(t,e,s,i){if(e==="beforeInit"&&(this._init=this._createDescriptors(t,!0),this._notify(this._init,t,"install")),this._init===void 0)return;const r=i?this._descriptors(t).filter(i):this._descriptors(t),o=this._notify(r,t,e,s);return e==="afterDestroy"&&(this._notify(r,t,"stop"),this._notify(this._init,t,"uninstall"),this._init=void 0),o}_notify(t,e,s,i){i=i||{};for(const r of t){const o=r.plugin,a=o[s],l=[e,i,r.options];if(Rt(a,l,o)===!1&&i.cancelable)return!1}return!0}invalidate(){_t(this._cache)||(this._oldCache=this._cache,this._cache=void 0)}_descriptors(t){if(this._cache)return this._cache;const e=this._cache=this._createDescriptors(t);return this._notifyStateChanges(t),e}_createDescriptors(t,e){const s=t&&t.config,i=st(s.options&&s.options.plugins,{}),r=vP(s);return i===!1&&!e?[]:wP(t,r,i,e)}_notifyStateChanges(t){const e=this._oldCache||[],s=this._cache,i=(r,o)=>r.filter(a=>!o.some(l=>a.plugin.id===l.plugin.id));this._notify(i(e,s),t,"stop"),this._notify(i(s,e),t,"start")}}function vP(n){const t={},e=[],s=Object.keys(qe.plugins.items);for(let r=0;r<s.length;r++)e.push(qe.getPlugin(s[r]));const i=n.plugins||[];for(let r=0;r<i.length;r++){const o=i[r];e.indexOf(o)===-1&&(e.push(o),t[o.id]=!0)}return{plugins:e,localIds:t}}function EP(n,t){return!t&&n===!1?null:n===!0?{}:n}function wP(n,{plugins:t,localIds:e},s,i){const r=[],o=n.getContext();for(const a of t){const l=a.id,u=EP(s[l],i);u!==null&&r.push({plugin:a,options:TP(n.config,{plugin:a,local:e[l]},u,o)})}return r}function TP(n,{plugin:t,local:e},s,i){const r=n.pluginScopeKeys(t),o=n.getOptionScopes(s,r);return e&&t.defaults&&o.push(t.defaults),n.createResolver(o,i,[""],{scriptable:!1,indexable:!1,allKeys:!0})}function oc(n,t){const e=$t.datasets[n]||{};return((t.datasets||{})[n]||{}).indexAxis||t.indexAxis||e.indexAxis||"x"}function IP(n,t){let e=n;return n==="_index_"?e=t:n==="_value_"&&(e=t==="x"?"y":"x"),e}function SP(n,t){return n===t?"_index_":"_value_"}function kf(n){if(n==="x"||n==="y"||n==="r")return n}function xP(n){if(n==="top"||n==="bottom")return"x";if(n==="left"||n==="right")return"y"}function ac(n,...t){if(kf(n))return n;for(const e of t){const s=e.axis||xP(e.position)||n.length>1&&kf(n[0].toLowerCase());if(s)return s}throw new Error(`Cannot determine type of '${n}' axis. Please provide 'axis' or 'position' option.`)}function Rf(n,t,e){if(e[t+"AxisID"]===n)return{axis:t}}function AP(n,t){if(t.data&&t.data.datasets){const e=t.data.datasets.filter(s=>s.xAxisID===n||s.yAxisID===n);if(e.length)return Rf(n,"x",e[0])||Rf(n,"y",e[0])}return{}}function PP(n,t){const e=Ps[n.type]||{scales:{}},s=t.scales||{},i=oc(n.type,t),r=Object.create(null);return Object.keys(s).forEach(o=>{const a=s[o];if(!ht(a))return console.error(`Invalid scale configuration for scale: ${o}`);if(a._proxy)return console.warn(`Ignoring resolver passed as options for scale: ${o}`);const l=ac(o,a,AP(o,n),$t.scales[a.type]),u=SP(l,i),h=e.scales||{};r[o]=ir(Object.create(null),[{axis:l},a,h[l],h[u]])}),n.data.datasets.forEach(o=>{const a=o.type||n.type,l=o.indexAxis||oc(a,t),h=(Ps[a]||{}).scales||{};Object.keys(h).forEach(d=>{const p=IP(d,l),y=o[p+"AxisID"]||p;r[y]=r[y]||Object.create(null),ir(r[y],[{axis:p},s[y],h[d]])})}),Object.keys(r).forEach(o=>{const a=r[o];ir(a,[$t.scales[a.type],$t.scale])}),r}function m_(n){const t=n.options||(n.options={});t.plugins=st(t.plugins,{}),t.scales=PP(n,t)}function __(n){return n=n||{},n.datasets=n.datasets||[],n.labels=n.labels||[],n}function kP(n){return n=n||{},n.data=__(n.data),m_(n),n}const Cf=new Map,y_=new Set;function go(n,t){let e=Cf.get(n);return e||(e=t(),Cf.set(n,e),y_.add(e)),e}const Bi=(n,t,e)=>{const s=As(t,e);s!==void 0&&n.add(s)};class RP{constructor(t){this._config=kP(t),this._scopeCache=new Map,this._resolverCache=new Map}get platform(){return this._config.platform}get type(){return this._config.type}set type(t){this._config.type=t}get data(){return this._config.data}set data(t){this._config.data=__(t)}get options(){return this._config.options}set options(t){this._config.options=t}get plugins(){return this._config.plugins}update(){const t=this._config;this.clearCache(),m_(t)}clearCache(){this._scopeCache.clear(),this._resolverCache.clear()}datasetScopeKeys(t){return go(t,()=>[[`datasets.${t}`,""]])}datasetAnimationScopeKeys(t,e){return go(`${t}.transition.${e}`,()=>[[`datasets.${t}.transitions.${e}`,`transitions.${e}`],[`datasets.${t}`,""]])}datasetElementScopeKeys(t,e){return go(`${t}-${e}`,()=>[[`datasets.${t}.elements.${e}`,`datasets.${t}`,`elements.${e}`,""]])}pluginScopeKeys(t){const e=t.id,s=this.type;return go(`${s}-plugin-${e}`,()=>[[`plugins.${e}`,...t.additionalOptionScopes||[]]])}_cachedScopes(t,e){const s=this._scopeCache;let i=s.get(t);return(!i||e)&&(i=new Map,s.set(t,i)),i}getOptionScopes(t,e,s){const{options:i,type:r}=this,o=this._cachedScopes(t,s),a=o.get(e);if(a)return a;const l=new Set;e.forEach(h=>{t&&(l.add(t),h.forEach(d=>Bi(l,t,d))),h.forEach(d=>Bi(l,i,d)),h.forEach(d=>Bi(l,Ps[r]||{},d)),h.forEach(d=>Bi(l,$t,d)),h.forEach(d=>Bi(l,ic,d))});const u=Array.from(l);return u.length===0&&u.push(Object.create(null)),y_.has(e)&&o.set(e,u),u}chartOptionScopes(){const{options:t,type:e}=this;return[t,Ps[e]||{},$t.datasets[e]||{},{type:e},$t,ic]}resolveNamedOptions(t,e,s,i=[""]){const r={$shared:!0},{resolver:o,subPrefixes:a}=Df(this._resolverCache,t,i);let l=o;if(DP(o,e)){r.$shared=!1,s=es(s)?s():s;const u=this.createResolver(t,s,a);l=ui(o,s,u)}for(const u of e)r[u]=l[u];return r}createResolver(t,e,s=[""],i){const{resolver:r}=Df(this._resolverCache,t,s);return ht(e)?ui(r,e,void 0,i):r}}function Df(n,t,e){let s=n.get(t);s||(s=new Map,n.set(t,s));const i=e.join();let r=s.get(i);return r||(r={resolver:mu(t,e),subPrefixes:e.filter(a=>!a.toLowerCase().includes("hover"))},s.set(i,r)),r}const CP=n=>ht(n)&&Object.getOwnPropertyNames(n).some(t=>es(n[t]));function DP(n,t){const{isScriptable:e,isIndexable:s}=Xm(n);for(const i of t){const r=e(i),o=s(i),a=(o||r)&&n[i];if(r&&(es(a)||CP(a))||o&&Gt(a))return!0}return!1}var MP="4.5.1";const OP=["top","bottom","left","right","chartArea"];function Mf(n,t){return n==="top"||n==="bottom"||OP.indexOf(n)===-1&&t==="x"}function Of(n,t){return function(e,s){return e[n]===s[n]?e[t]-s[t]:e[n]-s[n]}}function Lf(n){const t=n.chart,e=t.options.animation;t.notifyPlugins("afterRender"),Rt(e&&e.onComplete,[n],t)}function LP(n){const t=n.chart,e=t.options.animation;Rt(e&&e.onProgress,[n],t)}function b_(n){return bu()&&typeof n=="string"?n=document.getElementById(n):n&&n.length&&(n=n[0]),n&&n.canvas&&(n=n.canvas),n}const Oo={},Vf=n=>{const t=b_(n);return Object.values(Oo).filter(e=>e.canvas===t).pop()};function VP(n,t,e){const s=Object.keys(n);for(const i of s){const r=+i;if(r>=t){const o=n[i];delete n[i],(e>0||r>t)&&(n[r+e]=o)}}}function NP(n,t,e,s){return!e||n.type==="mouseout"?null:s?t:n}class hn{static register(...t){qe.add(...t),Nf()}static unregister(...t){qe.remove(...t),Nf()}constructor(t,e){const s=this.config=new RP(e),i=b_(t),r=Vf(i);if(r)throw new Error("Canvas is already in use. Chart with ID '"+r.id+"' must be destroyed before the canvas with ID '"+r.canvas.id+"' can be reused.");const o=s.createResolver(s.chartOptionScopes(),this.getContext());this.platform=new(s.platform||eP(i)),this.platform.updateConfig(s);const a=this.platform.acquireContext(i,o.aspectRatio),l=a&&a.canvas,u=l&&l.height,h=l&&l.width;if(this.id=NS(),this.ctx=a,this.canvas=l,this.width=h,this.height=u,this._options=o,this._aspectRatio=this.aspectRatio,this._layers=[],this._metasets=[],this._stacks=void 0,this.boxes=[],this.currentDevicePixelRatio=void 0,this.chartArea=void 0,this._active=[],this._lastEvent=void 0,this._listeners={},this._responsiveListeners=void 0,this._sortedMetasets=[],this.scales={},this._plugins=new bP,this.$proxies={},this._hiddenIndices={},this.attached=!1,this._animationsDisabled=void 0,this.$context=void 0,this._doResize=nx(d=>this.update(d),o.resizeDelay||0),this._dataChanges=[],Oo[this.id]=this,!a||!l){console.error("Failed to create chart: can't acquire context from the given item");return}ln.listen(this,"complete",Lf),ln.listen(this,"progress",LP),this._initialize(),this.attached&&this.update()}get aspectRatio(){const{options:{aspectRatio:t,maintainAspectRatio:e},width:s,height:i,_aspectRatio:r}=this;return _t(t)?e&&r?r:i?s/i:null:t}get data(){return this.config.data}set data(t){this.config.data=t}get options(){return this._options}set options(t){this.config.options=t}get registry(){return qe}_initialize(){return this.notifyPlugins("beforeInit"),this.options.responsive?this.resize():rf(this,this.options.devicePixelRatio),this.bindEvents(),this.notifyPlugins("afterInit"),this}clear(){return ef(this.canvas,this.ctx),this}stop(){return ln.stop(this),this}resize(t,e){ln.running(this)?this._resizeBeforeDraw={width:t,height:e}:this._resize(t,e)}_resize(t,e){const s=this.options,i=this.canvas,r=s.maintainAspectRatio&&this.aspectRatio,o=this.platform.getMaximumSize(i,t,e,r),a=s.devicePixelRatio||this.platform.getDevicePixelRatio(),l=this.width?"resize":"attach";this.width=o.width,this.height=o.height,this._aspectRatio=this.aspectRatio,rf(this,a,!0)&&(this.notifyPlugins("resize",{size:o}),Rt(s.onResize,[this,o],this),this.attached&&this._doResize(l)&&this.render())}ensureScalesHaveIDs(){const e=this.options.scales||{};wt(e,(s,i)=>{s.id=i})}buildOrUpdateScales(){const t=this.options,e=t.scales,s=this.scales,i=Object.keys(s).reduce((o,a)=>(o[a]=!1,o),{});let r=[];e&&(r=r.concat(Object.keys(e).map(o=>{const a=e[o],l=ac(o,a),u=l==="r",h=l==="x";return{options:a,dposition:u?"chartArea":h?"bottom":"left",dtype:u?"radialLinear":h?"category":"linear"}}))),wt(r,o=>{const a=o.options,l=a.id,u=ac(l,a),h=st(a.type,o.dtype);(a.position===void 0||Mf(a.position,u)!==Mf(o.dposition))&&(a.position=o.dposition),i[l]=!0;let d=null;if(l in s&&s[l].type===h)d=s[l];else{const p=qe.getScale(h);d=new p({id:l,type:h,ctx:this.ctx,chart:this}),s[d.id]=d}d.init(a,t)}),wt(i,(o,a)=>{o||delete s[a]}),wt(s,o=>{Un.configure(this,o,o.options),Un.addBox(this,o)})}_updateMetasets(){const t=this._metasets,e=this.data.datasets.length,s=t.length;if(t.sort((i,r)=>i.index-r.index),s>e){for(let i=e;i<s;++i)this._destroyDatasetMeta(i);t.splice(e,s-e)}this._sortedMetasets=t.slice(0).sort(Of("order","index"))}_removeUnreferencedMetasets(){const{_metasets:t,data:{datasets:e}}=this;t.length>e.length&&delete this._stacks,t.forEach((s,i)=>{e.filter(r=>r===s._dataset).length===0&&this._destroyDatasetMeta(i)})}buildOrUpdateControllers(){const t=[],e=this.data.datasets;let s,i;for(this._removeUnreferencedMetasets(),s=0,i=e.length;s<i;s++){const r=e[s];let o=this.getDatasetMeta(s);const a=r.type||this.config.type;if(o.type&&o.type!==a&&(this._destroyDatasetMeta(s),o=this.getDatasetMeta(s)),o.type=a,o.indexAxis=r.indexAxis||oc(a,this.options),o.order=r.order||0,o.index=s,o.label=""+r.label,o.visible=this.isDatasetVisible(s),o.controller)o.controller.updateIndex(s),o.controller.linkScales();else{const l=qe.getController(a),{datasetElementType:u,dataElementType:h}=$t.datasets[a];Object.assign(l,{dataElementType:qe.getElement(h),datasetElementType:u&&qe.getElement(u)}),o.controller=new l(this,s),t.push(o.controller)}}return this._updateMetasets(),t}_resetElements(){wt(this.data.datasets,(t,e)=>{this.getDatasetMeta(e).controller.reset()},this)}reset(){this._resetElements(),this.notifyPlugins("reset")}update(t){const e=this.config;e.update();const s=this._options=e.createResolver(e.chartOptionScopes(),this.getContext()),i=this._animationsDisabled=!s.animation;if(this._updateScales(),this._checkEventBindings(),this._updateHiddenIndices(),this._plugins.invalidate(),this.notifyPlugins("beforeUpdate",{mode:t,cancelable:!0})===!1)return;const r=this.buildOrUpdateControllers();this.notifyPlugins("beforeElementsUpdate");let o=0;for(let u=0,h=this.data.datasets.length;u<h;u++){const{controller:d}=this.getDatasetMeta(u),p=!i&&r.indexOf(d)===-1;d.buildOrUpdateElements(p),o=Math.max(+d.getMaxOverflow(),o)}o=this._minPadding=s.layout.autoPadding?o:0,this._updateLayout(o),i||wt(r,u=>{u.reset()}),this._updateDatasets(t),this.notifyPlugins("afterUpdate",{mode:t}),this._layers.sort(Of("z","_idx"));const{_active:a,_lastEvent:l}=this;l?this._eventHandler(l,!0):a.length&&this._updateHoverStyles(a,a,!0),this.render()}_updateScales(){wt(this.scales,t=>{Un.removeBox(this,t)}),this.ensureScalesHaveIDs(),this.buildOrUpdateScales()}_checkEventBindings(){const t=this.options,e=new Set(Object.keys(this._listeners)),s=new Set(t.events);(!Wd(e,s)||!!this._responsiveListeners!==t.responsive)&&(this.unbindEvents(),this.bindEvents())}_updateHiddenIndices(){const{_hiddenIndices:t}=this,e=this._getUniformDataChanges()||[];for(const{method:s,start:i,count:r}of e){const o=s==="_removeElements"?-r:r;VP(t,i,o)}}_getUniformDataChanges(){const t=this._dataChanges;if(!t||!t.length)return;this._dataChanges=[];const e=this.data.datasets.length,s=r=>new Set(t.filter(o=>o[0]===r).map((o,a)=>a+","+o.splice(1).join(","))),i=s(0);for(let r=1;r<e;r++)if(!Wd(i,s(r)))return;return Array.from(i).map(r=>r.split(",")).map(r=>({method:r[1],start:+r[2],count:+r[3]}))}_updateLayout(t){if(this.notifyPlugins("beforeLayout",{cancelable:!0})===!1)return;Un.update(this,this.width,this.height,t);const e=this.chartArea,s=e.width<=0||e.height<=0;this._layers=[],wt(this.boxes,i=>{s&&i.position==="chartArea"||(i.configure&&i.configure(),this._layers.push(...i._layers()))},this),this._layers.forEach((i,r)=>{i._idx=r}),this.notifyPlugins("afterLayout")}_updateDatasets(t){if(this.notifyPlugins("beforeDatasetsUpdate",{mode:t,cancelable:!0})!==!1){for(let e=0,s=this.data.datasets.length;e<s;++e)this.getDatasetMeta(e).controller.configure();for(let e=0,s=this.data.datasets.length;e<s;++e)this._updateDataset(e,es(t)?t({datasetIndex:e}):t);this.notifyPlugins("afterDatasetsUpdate",{mode:t})}}_updateDataset(t,e){const s=this.getDatasetMeta(t),i={meta:s,index:t,mode:e,cancelable:!0};this.notifyPlugins("beforeDatasetUpdate",i)!==!1&&(s.controller._update(e),i.cancelable=!1,this.notifyPlugins("afterDatasetUpdate",i))}render(){this.notifyPlugins("beforeRender",{cancelable:!0})!==!1&&(ln.has(this)?this.attached&&!ln.running(this)&&ln.start(this):(this.draw(),Lf({chart:this})))}draw(){let t;if(this._resizeBeforeDraw){const{width:s,height:i}=this._resizeBeforeDraw;this._resizeBeforeDraw=null,this._resize(s,i)}if(this.clear(),this.width<=0||this.height<=0||this.notifyPlugins("beforeDraw",{cancelable:!0})===!1)return;const e=this._layers;for(t=0;t<e.length&&e[t].z<=0;++t)e[t].draw(this.chartArea);for(this._drawDatasets();t<e.length;++t)e[t].draw(this.chartArea);this.notifyPlugins("afterDraw")}_getSortedDatasetMetas(t){const e=this._sortedMetasets,s=[];let i,r;for(i=0,r=e.length;i<r;++i){const o=e[i];(!t||o.visible)&&s.push(o)}return s}getSortedVisibleDatasetMetas(){return this._getSortedDatasetMetas(!0)}_drawDatasets(){if(this.notifyPlugins("beforeDatasetsDraw",{cancelable:!0})===!1)return;const t=this.getSortedVisibleDatasetMetas();for(let e=t.length-1;e>=0;--e)this._drawDataset(t[e]);this.notifyPlugins("afterDatasetsDraw")}_drawDataset(t){const e=this.ctx,s={meta:t,index:t.index,cancelable:!0},i=a_(this,t);this.notifyPlugins("beforeDatasetDraw",s)!==!1&&(i&&Va(e,i),t.controller.draw(),i&&Na(e),s.cancelable=!1,this.notifyPlugins("afterDatasetDraw",s))}isPointInArea(t){return Ir(t,this.chartArea,this._minPadding)}getElementsAtEventForMode(t,e,s,i){const r=OA.modes[e];return typeof r=="function"?r(this,t,s,i):[]}getDatasetMeta(t){const e=this.data.datasets[t],s=this._metasets;let i=s.filter(r=>r&&r._dataset===e).pop();return i||(i={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:e&&e.order||0,index:t,_dataset:e,_parsed:[],_sorted:!1},s.push(i)),i}getContext(){return this.$context||(this.$context=Os(null,{chart:this,type:"chart"}))}getVisibleDatasetCount(){return this.getSortedVisibleDatasetMetas().length}isDatasetVisible(t){const e=this.data.datasets[t];if(!e)return!1;const s=this.getDatasetMeta(t);return typeof s.hidden=="boolean"?!s.hidden:!e.hidden}setDatasetVisibility(t,e){const s=this.getDatasetMeta(t);s.hidden=!e}toggleDataVisibility(t){this._hiddenIndices[t]=!this._hiddenIndices[t]}getDataVisibility(t){return!this._hiddenIndices[t]}_updateVisibility(t,e,s){const i=s?"show":"hide",r=this.getDatasetMeta(t),o=r.controller._resolveAnimations(void 0,i);wr(e)?(r.data[e].hidden=!s,this.update()):(this.setDatasetVisibility(t,s),o.update(r,{visible:s}),this.update(a=>a.datasetIndex===t?i:void 0))}hide(t,e){this._updateVisibility(t,e,!1)}show(t,e){this._updateVisibility(t,e,!0)}_destroyDatasetMeta(t){const e=this._metasets[t];e&&e.controller&&e.controller._destroy(),delete this._metasets[t]}_stop(){let t,e;for(this.stop(),ln.remove(this),t=0,e=this.data.datasets.length;t<e;++t)this._destroyDatasetMeta(t)}destroy(){this.notifyPlugins("beforeDestroy");const{canvas:t,ctx:e}=this;this._stop(),this.config.clearCache(),t&&(this.unbindEvents(),ef(t,e),this.platform.releaseContext(e),this.canvas=null,this.ctx=null),delete Oo[this.id],this.notifyPlugins("afterDestroy")}toBase64Image(...t){return this.canvas.toDataURL(...t)}bindEvents(){this.bindUserEvents(),this.options.responsive?this.bindResponsiveEvents():this.attached=!0}bindUserEvents(){const t=this._listeners,e=this.platform,s=(r,o)=>{e.addEventListener(this,r,o),t[r]=o},i=(r,o,a)=>{r.offsetX=o,r.offsetY=a,this._eventHandler(r)};wt(this.options.events,r=>s(r,i))}bindResponsiveEvents(){this._responsiveListeners||(this._responsiveListeners={});const t=this._responsiveListeners,e=this.platform,s=(l,u)=>{e.addEventListener(this,l,u),t[l]=u},i=(l,u)=>{t[l]&&(e.removeEventListener(this,l,u),delete t[l])},r=(l,u)=>{this.canvas&&this.resize(l,u)};let o;const a=()=>{i("attach",a),this.attached=!0,this.resize(),s("resize",r),s("detach",o)};o=()=>{this.attached=!1,i("resize",r),this._stop(),this._resize(0,0),s("attach",a)},e.isAttached(this.canvas)?a():o()}unbindEvents(){wt(this._listeners,(t,e)=>{this.platform.removeEventListener(this,e,t)}),this._listeners={},wt(this._responsiveListeners,(t,e)=>{this.platform.removeEventListener(this,e,t)}),this._responsiveListeners=void 0}updateHoverStyle(t,e,s){const i=s?"set":"remove";let r,o,a,l;for(e==="dataset"&&(r=this.getDatasetMeta(t[0].datasetIndex),r.controller["_"+i+"DatasetHoverStyle"]()),a=0,l=t.length;a<l;++a){o=t[a];const u=o&&this.getDatasetMeta(o.datasetIndex).controller;u&&u[i+"HoverStyle"](o.element,o.datasetIndex,o.index)}}getActiveElements(){return this._active||[]}setActiveElements(t){const e=this._active||[],s=t.map(({datasetIndex:r,index:o})=>{const a=this.getDatasetMeta(r);if(!a)throw new Error("No dataset found at index "+r);return{datasetIndex:r,element:a.data[o],index:o}});!ra(s,e)&&(this._active=s,this._lastEvent=null,this._updateHoverStyles(s,e))}notifyPlugins(t,e,s){return this._plugins.notify(this,t,e,s)}isPluginEnabled(t){return this._plugins._cache.filter(e=>e.plugin.id===t).length===1}_updateHoverStyles(t,e,s){const i=this.options.hover,r=(l,u)=>l.filter(h=>!u.some(d=>h.datasetIndex===d.datasetIndex&&h.index===d.index)),o=r(e,t),a=s?t:r(t,e);o.length&&this.updateHoverStyle(o,i.mode,!1),a.length&&i.mode&&this.updateHoverStyle(a,i.mode,!0)}_eventHandler(t,e){const s={event:t,replay:e,cancelable:!0,inChartArea:this.isPointInArea(t)},i=o=>(o.options.events||this.options.events).includes(t.native.type);if(this.notifyPlugins("beforeEvent",s,i)===!1)return;const r=this._handleEvent(t,e,s.inChartArea);return s.cancelable=!1,this.notifyPlugins("afterEvent",s,i),(r||s.changed)&&this.render(),this}_handleEvent(t,e,s){const{_active:i=[],options:r}=this,o=e,a=this._getActiveElements(t,i,s,o),l=jS(t),u=NP(t,this._lastEvent,s,l);s&&(this._lastEvent=null,Rt(r.onHover,[t,a,this],this),l&&Rt(r.onClick,[t,a,this],this));const h=!ra(a,i);return(h||e)&&(this._active=a,this._updateHoverStyles(a,i,e)),this._lastEvent=u,h}_getActiveElements(t,e,s,i){if(t.type==="mouseout")return[];if(!s)return e;const r=this.options.hover;return this.getElementsAtEventForMode(t,r.mode,r,i)}}$(hn,"defaults",$t),$(hn,"instances",Oo),$(hn,"overrides",Ps),$(hn,"registry",qe),$(hn,"version",MP),$(hn,"getChart",Vf);function Nf(){return wt(hn.instances,n=>n._plugins.invalidate())}function FP(n,t,e){const{startAngle:s,x:i,y:r,outerRadius:o,innerRadius:a,options:l}=t,{borderWidth:u,borderJoinStyle:h}=l,d=Math.min(u/o,Se(s-e));if(n.beginPath(),n.arc(i,r,o-u/2,s+d/2,e-d/2),a>0){const p=Math.min(u/a,Se(s-e));n.arc(i,r,a+u/2,e-p/2,s+p/2,!0)}else{const p=Math.min(u/2,o*Se(s-e));if(h==="round")n.arc(i,r,p,e-At/2,s+At/2,!0);else if(h==="bevel"){const y=2*p*p,E=-y*Math.cos(e+At/2)+i,w=-y*Math.sin(e+At/2)+r,I=y*Math.cos(s+At/2)+i,P=y*Math.sin(s+At/2)+r;n.lineTo(E,w),n.lineTo(I,P)}}n.closePath(),n.moveTo(0,0),n.rect(0,0,n.canvas.width,n.canvas.height),n.clip("evenodd")}function UP(n,t,e){const{startAngle:s,pixelMargin:i,x:r,y:o,outerRadius:a,innerRadius:l}=t;let u=i/a;n.beginPath(),n.arc(r,o,a,s-u,e+u),l>i?(u=i/l,n.arc(r,o,l,e+u,s-u,!0)):n.arc(r,o,i,e+Yt,s-Yt),n.closePath(),n.clip()}function BP(n){return gu(n,["outerStart","outerEnd","innerStart","innerEnd"])}function $P(n,t,e,s){const i=BP(n.options.borderRadius),r=(e-t)/2,o=Math.min(r,s*t/2),a=l=>{const u=(e-Math.min(r,l))*s/2;return ue(l,0,Math.min(r,u))};return{outerStart:a(i.outerStart),outerEnd:a(i.outerEnd),innerStart:ue(i.innerStart,0,o),innerEnd:ue(i.innerEnd,0,o)}}function Bs(n,t,e,s){return{x:e+n*Math.cos(t),y:s+n*Math.sin(t)}}function da(n,t,e,s,i,r){const{x:o,y:a,startAngle:l,pixelMargin:u,innerRadius:h}=t,d=Math.max(t.outerRadius+s+e-u,0),p=h>0?h+s+e+u:0;let y=0;const E=i-l;if(s){const K=h>0?h-s:0,it=d>0?d-s:0,j=(K+it)/2,rt=j!==0?E*j/(j+s):E;y=(E-rt)/2}const w=Math.max(.001,E*d-e/At)/d,I=(E-w)/2,P=l+I+y,k=i-I-y,{outerStart:R,outerEnd:D,innerStart:M,innerEnd:L}=$P(t,p,d,k-P),S=d-R,g=d-D,_=P+R/S,b=k-D/g,v=p+M,A=p+L,x=P+M/v,q=k-L/A;if(n.beginPath(),r){const K=(_+b)/2;if(n.arc(o,a,d,_,K),n.arc(o,a,d,K,b),D>0){const B=Bs(g,b,o,a);n.arc(B.x,B.y,D,b,k+Yt)}const it=Bs(A,k,o,a);if(n.lineTo(it.x,it.y),L>0){const B=Bs(A,q,o,a);n.arc(B.x,B.y,L,k+Yt,q+Math.PI)}const j=(k-L/p+(P+M/p))/2;if(n.arc(o,a,p,k-L/p,j,!0),n.arc(o,a,p,j,P+M/p,!0),M>0){const B=Bs(v,x,o,a);n.arc(B.x,B.y,M,x+Math.PI,P-Yt)}const rt=Bs(S,P,o,a);if(n.lineTo(rt.x,rt.y),R>0){const B=Bs(S,_,o,a);n.arc(B.x,B.y,R,P-Yt,_)}}else{n.moveTo(o,a);const K=Math.cos(_)*d+o,it=Math.sin(_)*d+a;n.lineTo(K,it);const j=Math.cos(b)*d+o,rt=Math.sin(b)*d+a;n.lineTo(j,rt)}n.closePath()}function zP(n,t,e,s,i){const{fullCircles:r,startAngle:o,circumference:a}=t;let l=t.endAngle;if(r){da(n,t,e,s,l,i);for(let u=0;u<r;++u)n.fill();isNaN(a)||(l=o+(a%Ot||Ot))}return da(n,t,e,s,l,i),n.fill(),l}function jP(n,t,e,s,i){const{fullCircles:r,startAngle:o,circumference:a,options:l}=t,{borderWidth:u,borderJoinStyle:h,borderDash:d,borderDashOffset:p,borderRadius:y}=l,E=l.borderAlign==="inner";if(!u)return;n.setLineDash(d||[]),n.lineDashOffset=p,E?(n.lineWidth=u*2,n.lineJoin=h||"round"):(n.lineWidth=u,n.lineJoin=h||"bevel");let w=t.endAngle;if(r){da(n,t,e,s,w,i);for(let I=0;I<r;++I)n.stroke();isNaN(a)||(w=o+(a%Ot||Ot))}E&&UP(n,t,w),l.selfJoin&&w-o>=At&&y===0&&h!=="miter"&&FP(n,t,w),r||(da(n,t,e,s,w,i),n.stroke())}class Gi extends sn{constructor(e){super();$(this,"circumference");$(this,"endAngle");$(this,"fullCircles");$(this,"innerRadius");$(this,"outerRadius");$(this,"pixelMargin");$(this,"startAngle");this.options=void 0,this.circumference=void 0,this.startAngle=void 0,this.endAngle=void 0,this.innerRadius=void 0,this.outerRadius=void 0,this.pixelMargin=0,this.fullCircles=0,e&&Object.assign(this,e)}inRange(e,s,i){const r=this.getProps(["x","y"],i),{angle:o,distance:a}=Bm(r,{x:e,y:s}),{startAngle:l,endAngle:u,innerRadius:h,outerRadius:d,circumference:p}=this.getProps(["startAngle","endAngle","innerRadius","outerRadius","circumference"],i),y=(this.options.spacing+this.options.borderWidth)/2,E=st(p,u-l),w=Tr(o,l,u)&&l!==u,I=E>=Ot||w,P=mn(a,h+y,d+y);return I&&P}getCenterPoint(e){const{x:s,y:i,startAngle:r,endAngle:o,innerRadius:a,outerRadius:l}=this.getProps(["x","y","startAngle","endAngle","innerRadius","outerRadius"],e),{offset:u,spacing:h}=this.options,d=(r+o)/2,p=(a+l+h+u)/2;return{x:s+Math.cos(d)*p,y:i+Math.sin(d)*p}}tooltipPosition(e){return this.getCenterPoint(e)}draw(e){const{options:s,circumference:i}=this,r=(s.offset||0)/4,o=(s.spacing||0)/2,a=s.circular;if(this.pixelMargin=s.borderAlign==="inner"?.33:0,this.fullCircles=i>Ot?Math.floor(i/Ot):0,i===0||this.innerRadius<0||this.outerRadius<0)return;e.save();const l=(this.startAngle+this.endAngle)/2;e.translate(Math.cos(l)*r,Math.sin(l)*r);const u=1-Math.sin(Math.min(At,i||0)),h=r*u;e.fillStyle=s.backgroundColor,e.strokeStyle=s.borderColor,zP(e,this,h,o,a),jP(e,this,h,o,a),e.restore()}}$(Gi,"id","arc"),$(Gi,"defaults",{borderAlign:"center",borderColor:"#fff",borderDash:[],borderDashOffset:0,borderJoinStyle:void 0,borderRadius:0,borderWidth:2,offset:0,spacing:0,angle:void 0,circular:!0,selfJoin:!1}),$(Gi,"defaultRoutes",{backgroundColor:"backgroundColor"}),$(Gi,"descriptors",{_scriptable:!0,_indexable:e=>e!=="borderDash"});function v_(n,t,e=t){n.lineCap=st(e.borderCapStyle,t.borderCapStyle),n.setLineDash(st(e.borderDash,t.borderDash)),n.lineDashOffset=st(e.borderDashOffset,t.borderDashOffset),n.lineJoin=st(e.borderJoinStyle,t.borderJoinStyle),n.lineWidth=st(e.borderWidth,t.borderWidth),n.strokeStyle=st(e.borderColor,t.borderColor)}function HP(n,t,e){n.lineTo(e.x,e.y)}function WP(n){return n.stepped?px:n.tension||n.cubicInterpolationMode==="monotone"?gx:HP}function E_(n,t,e={}){const s=n.length,{start:i=0,end:r=s-1}=e,{start:o,end:a}=t,l=Math.max(i,o),u=Math.min(r,a),h=i<o&&r<o||i>a&&r>a;return{count:s,start:l,loop:t.loop,ilen:u<l&&!h?s+u-l:u-l}}function qP(n,t,e,s){const{points:i,options:r}=t,{count:o,start:a,loop:l,ilen:u}=E_(i,e,s),h=WP(r);let{move:d=!0,reverse:p}=s||{},y,E,w;for(y=0;y<=u;++y)E=i[(a+(p?u-y:y))%o],!E.skip&&(d?(n.moveTo(E.x,E.y),d=!1):h(n,w,E,p,r.stepped),w=E);return l&&(E=i[(a+(p?u:0))%o],h(n,w,E,p,r.stepped)),!!l}function KP(n,t,e,s){const i=t.points,{count:r,start:o,ilen:a}=E_(i,e,s),{move:l=!0,reverse:u}=s||{};let h=0,d=0,p,y,E,w,I,P;const k=D=>(o+(u?a-D:D))%r,R=()=>{w!==I&&(n.lineTo(h,I),n.lineTo(h,w),n.lineTo(h,P))};for(l&&(y=i[k(0)],n.moveTo(y.x,y.y)),p=0;p<=a;++p){if(y=i[k(p)],y.skip)continue;const D=y.x,M=y.y,L=D|0;L===E?(M<w?w=M:M>I&&(I=M),h=(d*h+D)/++d):(R(),n.lineTo(D,M),E=L,d=0,w=I=M),P=M}R()}function lc(n){const t=n.options,e=t.borderDash&&t.borderDash.length;return!n._decimated&&!n._loop&&!t.tension&&t.cubicInterpolationMode!=="monotone"&&!t.stepped&&!e?KP:qP}function GP(n){return n.stepped?Kx:n.tension||n.cubicInterpolationMode==="monotone"?Gx:ds}function YP(n,t,e,s){let i=t._path;i||(i=t._path=new Path2D,t.path(i,e,s)&&i.closePath()),v_(n,t.options),n.stroke(i)}function QP(n,t,e,s){const{segments:i,options:r}=t,o=lc(t);for(const a of i)v_(n,r,a.style),n.beginPath(),o(n,t,a,{start:e,end:e+s-1})&&n.closePath(),n.stroke()}const XP=typeof Path2D=="function";function JP(n,t,e,s){XP&&!t.options.segment?YP(n,t,e,s):QP(n,t,e,s)}class Bn extends sn{constructor(t){super(),this.animated=!0,this.options=void 0,this._chart=void 0,this._loop=void 0,this._fullLoop=void 0,this._path=void 0,this._points=void 0,this._segments=void 0,this._decimated=!1,this._pointsUpdated=!1,this._datasetIndex=void 0,t&&Object.assign(this,t)}updateControlPoints(t,e){const s=this.options;if((s.tension||s.cubicInterpolationMode==="monotone")&&!s.stepped&&!this._pointsUpdated){const i=s.spanGaps?this._loop:this._fullLoop;Ux(this._points,s,t,i,e),this._pointsUpdated=!0}}set points(t){this._points=t,delete this._segments,delete this._path,this._pointsUpdated=!1}get points(){return this._points}get segments(){return this._segments||(this._segments=tA(this,this.options.segment))}first(){const t=this.segments,e=this.points;return t.length&&e[t[0].start]}last(){const t=this.segments,e=this.points,s=t.length;return s&&e[t[s-1].end]}interpolate(t,e){const s=this.options,i=t[e],r=this.points,o=o_(this,{property:e,start:i,end:i});if(!o.length)return;const a=[],l=GP(s);let u,h;for(u=0,h=o.length;u<h;++u){const{start:d,end:p}=o[u],y=r[d],E=r[p];if(y===E){a.push(y);continue}const w=Math.abs((i-y[e])/(E[e]-y[e])),I=l(y,E,w,s.stepped);I[e]=t[e],a.push(I)}return a.length===1?a[0]:a}pathSegment(t,e,s){return lc(this)(t,this,e,s)}path(t,e,s){const i=this.segments,r=lc(this);let o=this._loop;e=e||0,s=s||this.points.length-e;for(const a of i)o&=r(t,this,a,{start:e,end:e+s-1});return!!o}draw(t,e,s,i){const r=this.options||{};(this.points||[]).length&&r.borderWidth&&(t.save(),JP(t,this,s,i),t.restore()),this.animated&&(this._pointsUpdated=!1,this._path=void 0)}}$(Bn,"id","line"),$(Bn,"defaults",{borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderWidth:3,capBezierPoints:!0,cubicInterpolationMode:"default",fill:!1,spanGaps:!1,stepped:!1,tension:0}),$(Bn,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"}),$(Bn,"descriptors",{_scriptable:!0,_indexable:t=>t!=="borderDash"&&t!=="fill"});function Ff(n,t,e,s){const i=n.options,{[e]:r}=n.getProps([e],s);return Math.abs(t-r)<i.radius+i.hitRadius}class Lo extends sn{constructor(e){super();$(this,"parsed");$(this,"skip");$(this,"stop");this.options=void 0,this.parsed=void 0,this.skip=void 0,this.stop=void 0,e&&Object.assign(this,e)}inRange(e,s,i){const r=this.options,{x:o,y:a}=this.getProps(["x","y"],i);return Math.pow(e-o,2)+Math.pow(s-a,2)<Math.pow(r.hitRadius+r.radius,2)}inXRange(e,s){return Ff(this,e,"x",s)}inYRange(e,s){return Ff(this,e,"y",s)}getCenterPoint(e){const{x:s,y:i}=this.getProps(["x","y"],e);return{x:s,y:i}}size(e){e=e||this.options||{};let s=e.radius||0;s=Math.max(s,s&&e.hoverRadius||0);const i=s&&e.borderWidth||0;return(s+i)*2}draw(e,s){const i=this.options;this.skip||i.radius<.1||!Ir(this,s,this.size(i)/2)||(e.strokeStyle=i.borderColor,e.lineWidth=i.borderWidth,e.fillStyle=i.backgroundColor,rc(e,i,this.x,this.y))}getRange(){const e=this.options||{};return e.radius+e.hitRadius}}$(Lo,"id","point"),$(Lo,"defaults",{borderWidth:1,hitRadius:1,hoverBorderWidth:1,hoverRadius:4,pointStyle:"circle",radius:3,rotation:0}),$(Lo,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});function w_(n,t){const{x:e,y:s,base:i,width:r,height:o}=n.getProps(["x","y","base","width","height"],t);let a,l,u,h,d;return n.horizontal?(d=o/2,a=Math.min(e,i),l=Math.max(e,i),u=s-d,h=s+d):(d=r/2,a=e-d,l=e+d,u=Math.min(s,i),h=Math.max(s,i)),{left:a,top:u,right:l,bottom:h}}function $n(n,t,e,s){return n?0:ue(t,e,s)}function ZP(n,t,e){const s=n.options.borderWidth,i=n.borderSkipped,r=Qm(s);return{t:$n(i.top,r.top,0,e),r:$n(i.right,r.right,0,t),b:$n(i.bottom,r.bottom,0,e),l:$n(i.left,r.left,0,t)}}function tk(n,t,e){const{enableBorderRadius:s}=n.getProps(["enableBorderRadius"]),i=n.options.borderRadius,r=ti(i),o=Math.min(t,e),a=n.borderSkipped,l=s||ht(i);return{topLeft:$n(!l||a.top||a.left,r.topLeft,0,o),topRight:$n(!l||a.top||a.right,r.topRight,0,o),bottomLeft:$n(!l||a.bottom||a.left,r.bottomLeft,0,o),bottomRight:$n(!l||a.bottom||a.right,r.bottomRight,0,o)}}function ek(n){const t=w_(n),e=t.right-t.left,s=t.bottom-t.top,i=ZP(n,e/2,s/2),r=tk(n,e/2,s/2);return{outer:{x:t.left,y:t.top,w:e,h:s,radius:r},inner:{x:t.left+i.l,y:t.top+i.t,w:e-i.l-i.r,h:s-i.t-i.b,radius:{topLeft:Math.max(0,r.topLeft-Math.max(i.t,i.l)),topRight:Math.max(0,r.topRight-Math.max(i.t,i.r)),bottomLeft:Math.max(0,r.bottomLeft-Math.max(i.b,i.l)),bottomRight:Math.max(0,r.bottomRight-Math.max(i.b,i.r))}}}}function Al(n,t,e,s){const i=t===null,r=e===null,a=n&&!(i&&r)&&w_(n,s);return a&&(i||mn(t,a.left,a.right))&&(r||mn(e,a.top,a.bottom))}function nk(n){return n.topLeft||n.topRight||n.bottomLeft||n.bottomRight}function sk(n,t){n.rect(t.x,t.y,t.w,t.h)}function Pl(n,t,e={}){const s=n.x!==e.x?-t:0,i=n.y!==e.y?-t:0,r=(n.x+n.w!==e.x+e.w?t:0)-s,o=(n.y+n.h!==e.y+e.h?t:0)-i;return{x:n.x+s,y:n.y+i,w:n.w+r,h:n.h+o,radius:n.radius}}class Vo extends sn{constructor(t){super(),this.options=void 0,this.horizontal=void 0,this.base=void 0,this.width=void 0,this.height=void 0,this.inflateAmount=void 0,t&&Object.assign(this,t)}draw(t){const{inflateAmount:e,options:{borderColor:s,backgroundColor:i}}=this,{inner:r,outer:o}=ek(this),a=nk(o.radius)?ca:sk;t.save(),(o.w!==r.w||o.h!==r.h)&&(t.beginPath(),a(t,Pl(o,e,r)),t.clip(),a(t,Pl(r,-e,o)),t.fillStyle=s,t.fill("evenodd")),t.beginPath(),a(t,Pl(r,e)),t.fillStyle=i,t.fill(),t.restore()}inRange(t,e,s){return Al(this,t,e,s)}inXRange(t,e){return Al(this,t,null,e)}inYRange(t,e){return Al(this,null,t,e)}getCenterPoint(t){const{x:e,y:s,base:i,horizontal:r}=this.getProps(["x","y","base","horizontal"],t);return{x:r?(e+i)/2:e,y:r?s:(s+i)/2}}getRange(t){return t==="x"?this.width/2:this.height/2}}$(Vo,"id","bar"),$(Vo,"defaults",{borderSkipped:"start",borderWidth:0,borderRadius:0,inflateAmount:"auto",pointStyle:void 0}),$(Vo,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});function ik(n,t,e){const s=n.segments,i=n.points,r=t.points,o=[];for(const a of s){let{start:l,end:u}=a;u=Ba(l,u,i);const h=cc(e,i[l],i[u],a.loop);if(!t.segments){o.push({source:a,target:h,start:i[l],end:i[u]});continue}const d=o_(t,h);for(const p of d){const y=cc(e,r[p.start],r[p.end],p.loop),E=r_(a,i,y);for(const w of E)o.push({source:w,target:p,start:{[e]:Uf(h,y,"start",Math.max)},end:{[e]:Uf(h,y,"end",Math.min)}})}}return o}function cc(n,t,e,s){if(s)return;let i=t[n],r=e[n];return n==="angle"&&(i=Se(i),r=Se(r)),{property:n,start:i,end:r}}function rk(n,t){const{x:e=null,y:s=null}=n||{},i=t.points,r=[];return t.segments.forEach(({start:o,end:a})=>{a=Ba(o,a,i);const l=i[o],u=i[a];s!==null?(r.push({x:l.x,y:s}),r.push({x:u.x,y:s})):e!==null&&(r.push({x:e,y:l.y}),r.push({x:e,y:u.y}))}),r}function Ba(n,t,e){for(;t>n;t--){const s=e[t];if(!isNaN(s.x)&&!isNaN(s.y))break}return t}function Uf(n,t,e,s){return n&&t?s(n[e],t[e]):n?n[e]:t?t[e]:0}function T_(n,t){let e=[],s=!1;return Gt(n)?(s=!0,e=n):e=rk(n,t),e.length?new Bn({points:e,options:{tension:0},_loop:s,_fullLoop:s}):null}function Bf(n){return n&&n.fill!==!1}function ok(n,t,e){let i=n[t].fill;const r=[t];let o;if(!e)return i;for(;i!==!1&&r.indexOf(i)===-1;){if(!de(i))return i;if(o=n[i],!o)return!1;if(o.visible)return i;r.push(i),i=o.fill}return!1}function ak(n,t,e){const s=hk(n);if(ht(s))return isNaN(s.value)?!1:s;let i=parseFloat(s);return de(i)&&Math.floor(i)===i?lk(s[0],t,i,e):["origin","start","end","stack","shape"].indexOf(s)>=0&&s}function lk(n,t,e,s){return(n==="-"||n==="+")&&(e=t+e),e===t||e<0||e>=s?!1:e}function ck(n,t){let e=null;return n==="start"?e=t.bottom:n==="end"?e=t.top:ht(n)?e=t.getPixelForValue(n.value):t.getBasePixel&&(e=t.getBasePixel()),e}function uk(n,t,e){let s;return n==="start"?s=e:n==="end"?s=t.options.reverse?t.min:t.max:ht(n)?s=n.value:s=t.getBaseValue(),s}function hk(n){const t=n.options,e=t.fill;let s=st(e&&e.target,e);return s===void 0&&(s=!!t.backgroundColor),s===!1||s===null?!1:s===!0?"origin":s}function dk(n){const{scale:t,index:e,line:s}=n,i=[],r=s.segments,o=s.points,a=fk(t,e);a.push(T_({x:null,y:t.bottom},s));for(let l=0;l<r.length;l++){const u=r[l];for(let h=u.start;h<=u.end;h++)pk(i,o[h],a)}return new Bn({points:i,options:{}})}function fk(n,t){const e=[],s=n.getMatchingVisibleMetas("line");for(let i=0;i<s.length;i++){const r=s[i];if(r.index===t)break;r.hidden||e.unshift(r.dataset)}return e}function pk(n,t,e){const s=[];for(let i=0;i<e.length;i++){const r=e[i],{first:o,last:a,point:l}=gk(r,t,"x");if(!(!l||o&&a)){if(o)s.unshift(l);else if(n.push(l),!a)break}}n.push(...s)}function gk(n,t,e){const s=n.interpolate(t,e);if(!s)return{};const i=s[e],r=n.segments,o=n.points;let a=!1,l=!1;for(let u=0;u<r.length;u++){const h=r[u],d=o[h.start][e],p=o[h.end][e];if(mn(i,d,p)){a=i===d,l=i===p;break}}return{first:a,last:l,point:s}}class I_{constructor(t){this.x=t.x,this.y=t.y,this.radius=t.radius}pathSegment(t,e,s){const{x:i,y:r,radius:o}=this;return e=e||{start:0,end:Ot},t.arc(i,r,o,e.end,e.start,!0),!s.bounds}interpolate(t){const{x:e,y:s,radius:i}=this,r=t.angle;return{x:e+Math.cos(r)*i,y:s+Math.sin(r)*i,angle:r}}}function mk(n){const{chart:t,fill:e,line:s}=n;if(de(e))return _k(t,e);if(e==="stack")return dk(n);if(e==="shape")return!0;const i=yk(n);return i instanceof I_?i:T_(i,s)}function _k(n,t){const e=n.getDatasetMeta(t);return e&&n.isDatasetVisible(t)?e.dataset:null}function yk(n){return(n.scale||{}).getPointPositionForValue?vk(n):bk(n)}function bk(n){const{scale:t={},fill:e}=n,s=ck(e,t);if(de(s)){const i=t.isHorizontal();return{x:i?s:null,y:i?null:s}}return null}function vk(n){const{scale:t,fill:e}=n,s=t.options,i=t.getLabels().length,r=s.reverse?t.max:t.min,o=uk(e,t,r),a=[];if(s.grid.circular){const l=t.getPointPositionForValue(0,r);return new I_({x:l.x,y:l.y,radius:t.getDistanceFromCenterForValue(o)})}for(let l=0;l<i;++l)a.push(t.getPointPositionForValue(l,o));return a}function kl(n,t,e){const s=mk(t),{chart:i,index:r,line:o,scale:a,axis:l}=t,u=o.options,h=u.fill,d=u.backgroundColor,{above:p=d,below:y=d}=h||{},E=i.getDatasetMeta(r),w=a_(i,E);s&&o.points.length&&(Va(n,e),Ek(n,{line:o,target:s,above:p,below:y,area:e,scale:a,axis:l,clip:w}),Na(n))}function Ek(n,t){const{line:e,target:s,above:i,below:r,area:o,scale:a,clip:l}=t,u=e._loop?"angle":t.axis;n.save();let h=r;r!==i&&(u==="x"?($f(n,s,o.top),Rl(n,{line:e,target:s,color:i,scale:a,property:u,clip:l}),n.restore(),n.save(),$f(n,s,o.bottom)):u==="y"&&(zf(n,s,o.left),Rl(n,{line:e,target:s,color:r,scale:a,property:u,clip:l}),n.restore(),n.save(),zf(n,s,o.right),h=i)),Rl(n,{line:e,target:s,color:h,scale:a,property:u,clip:l}),n.restore()}function $f(n,t,e){const{segments:s,points:i}=t;let r=!0,o=!1;n.beginPath();for(const a of s){const{start:l,end:u}=a,h=i[l],d=i[Ba(l,u,i)];r?(n.moveTo(h.x,h.y),r=!1):(n.lineTo(h.x,e),n.lineTo(h.x,h.y)),o=!!t.pathSegment(n,a,{move:o}),o?n.closePath():n.lineTo(d.x,e)}n.lineTo(t.first().x,e),n.closePath(),n.clip()}function zf(n,t,e){const{segments:s,points:i}=t;let r=!0,o=!1;n.beginPath();for(const a of s){const{start:l,end:u}=a,h=i[l],d=i[Ba(l,u,i)];r?(n.moveTo(h.x,h.y),r=!1):(n.lineTo(e,h.y),n.lineTo(h.x,h.y)),o=!!t.pathSegment(n,a,{move:o}),o?n.closePath():n.lineTo(e,d.y)}n.lineTo(e,t.first().y),n.closePath(),n.clip()}function Rl(n,t){const{line:e,target:s,property:i,color:r,scale:o,clip:a}=t,l=ik(e,s,i);for(const{source:u,target:h,start:d,end:p}of l){const{style:{backgroundColor:y=r}={}}=u,E=s!==!0;n.save(),n.fillStyle=y,wk(n,o,a,E&&cc(i,d,p)),n.beginPath();const w=!!e.pathSegment(n,u);let I;if(E){w?n.closePath():jf(n,s,p,i);const P=!!s.pathSegment(n,h,{move:w,reverse:!0});I=w&&P,I||jf(n,s,d,i)}n.closePath(),n.fill(I?"evenodd":"nonzero"),n.restore()}}function wk(n,t,e,s){const i=t.chart.chartArea,{property:r,start:o,end:a}=s||{};if(r==="x"||r==="y"){let l,u,h,d;r==="x"?(l=o,u=i.top,h=a,d=i.bottom):(l=i.left,u=o,h=i.right,d=a),n.beginPath(),e&&(l=Math.max(l,e.left),h=Math.min(h,e.right),u=Math.max(u,e.top),d=Math.min(d,e.bottom)),n.rect(l,u,h-l,d-u),n.clip()}}function jf(n,t,e,s){const i=t.interpolate(e,s);i&&n.lineTo(i.x,i.y)}var Tk={id:"filler",afterDatasetsUpdate(n,t,e){const s=(n.data.datasets||[]).length,i=[];let r,o,a,l;for(o=0;o<s;++o)r=n.getDatasetMeta(o),a=r.dataset,l=null,a&&a.options&&a instanceof Bn&&(l={visible:n.isDatasetVisible(o),index:o,fill:ak(a,o,s),chart:n,axis:r.controller.options.indexAxis,scale:r.vScale,line:a}),r.$filler=l,i.push(l);for(o=0;o<s;++o)l=i[o],!(!l||l.fill===!1)&&(l.fill=ok(i,o,e.propagate))},beforeDraw(n,t,e){const s=e.drawTime==="beforeDraw",i=n.getSortedVisibleDatasetMetas(),r=n.chartArea;for(let o=i.length-1;o>=0;--o){const a=i[o].$filler;a&&(a.line.updateControlPoints(r,a.axis),s&&a.fill&&kl(n.ctx,a,r))}},beforeDatasetsDraw(n,t,e){if(e.drawTime!=="beforeDatasetsDraw")return;const s=n.getSortedVisibleDatasetMetas();for(let i=s.length-1;i>=0;--i){const r=s[i].$filler;Bf(r)&&kl(n.ctx,r,n.chartArea)}},beforeDatasetDraw(n,t,e){const s=t.meta.$filler;!Bf(s)||e.drawTime!=="beforeDatasetDraw"||kl(n.ctx,s,n.chartArea)},defaults:{propagate:!0,drawTime:"beforeDatasetDraw"}};const Hf=(n,t)=>{let{boxHeight:e=t,boxWidth:s=t}=n;return n.usePointStyle&&(e=Math.min(e,t),s=n.pointStyleWidth||Math.min(s,t)),{boxWidth:s,boxHeight:e,itemHeight:Math.max(t,e)}},Ik=(n,t)=>n!==null&&t!==null&&n.datasetIndex===t.datasetIndex&&n.index===t.index;class Wf extends sn{constructor(t){super(),this._added=!1,this.legendHitBoxes=[],this._hoveredItem=null,this.doughnutMode=!1,this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this.legendItems=void 0,this.columnSizes=void 0,this.lineWidths=void 0,this.maxHeight=void 0,this.maxWidth=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.height=void 0,this.width=void 0,this._margins=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,e,s){this.maxWidth=t,this.maxHeight=e,this._margins=s,this.setDimensions(),this.buildLabels(),this.fit()}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=this._margins.left,this.right=this.width):(this.height=this.maxHeight,this.top=this._margins.top,this.bottom=this.height)}buildLabels(){const t=this.options.labels||{};let e=Rt(t.generateLabels,[this.chart],this)||[];t.filter&&(e=e.filter(s=>t.filter(s,this.chart.data))),t.sort&&(e=e.sort((s,i)=>t.sort(s,i,this.chart.data))),this.options.reverse&&e.reverse(),this.legendItems=e}fit(){const{options:t,ctx:e}=this;if(!t.display){this.width=this.height=0;return}const s=t.labels,i=ye(s.font),r=i.size,o=this._computeTitleHeight(),{boxWidth:a,itemHeight:l}=Hf(s,r);let u,h;e.font=i.string,this.isHorizontal()?(u=this.maxWidth,h=this._fitRows(o,r,a,l)+10):(h=this.maxHeight,u=this._fitCols(o,i,a,l)+10),this.width=Math.min(u,t.maxWidth||this.maxWidth),this.height=Math.min(h,t.maxHeight||this.maxHeight)}_fitRows(t,e,s,i){const{ctx:r,maxWidth:o,options:{labels:{padding:a}}}=this,l=this.legendHitBoxes=[],u=this.lineWidths=[0],h=i+a;let d=t;r.textAlign="left",r.textBaseline="middle";let p=-1,y=-h;return this.legendItems.forEach((E,w)=>{const I=s+e/2+r.measureText(E.text).width;(w===0||u[u.length-1]+I+2*a>o)&&(d+=h,u[u.length-(w>0?0:1)]=0,y+=h,p++),l[w]={left:0,top:y,row:p,width:I,height:i},u[u.length-1]+=I+a}),d}_fitCols(t,e,s,i){const{ctx:r,maxHeight:o,options:{labels:{padding:a}}}=this,l=this.legendHitBoxes=[],u=this.columnSizes=[],h=o-t;let d=a,p=0,y=0,E=0,w=0;return this.legendItems.forEach((I,P)=>{const{itemWidth:k,itemHeight:R}=Sk(s,e,r,I,i);P>0&&y+R+2*a>h&&(d+=p+a,u.push({width:p,height:y}),E+=p+a,w++,p=y=0),l[P]={left:E,top:y,col:w,width:k,height:R},p=Math.max(p,k),y+=R+a}),d+=p,u.push({width:p,height:y}),d}adjustHitBoxes(){if(!this.options.display)return;const t=this._computeTitleHeight(),{legendHitBoxes:e,options:{align:s,labels:{padding:i},rtl:r}}=this,o=ei(r,this.left,this.width);if(this.isHorizontal()){let a=0,l=Ie(s,this.left+i,this.right-this.lineWidths[a]);for(const u of e)a!==u.row&&(a=u.row,l=Ie(s,this.left+i,this.right-this.lineWidths[a])),u.top+=this.top+t+i,u.left=o.leftForLtr(o.x(l),u.width),l+=u.width+i}else{let a=0,l=Ie(s,this.top+t+i,this.bottom-this.columnSizes[a].height);for(const u of e)u.col!==a&&(a=u.col,l=Ie(s,this.top+t+i,this.bottom-this.columnSizes[a].height)),u.top=l,u.left+=this.left+i,u.left=o.leftForLtr(o.x(u.left),u.width),l+=u.height+i}}isHorizontal(){return this.options.position==="top"||this.options.position==="bottom"}draw(){if(this.options.display){const t=this.ctx;Va(t,this),this._draw(),Na(t)}}_draw(){const{options:t,columnSizes:e,lineWidths:s,ctx:i}=this,{align:r,labels:o}=t,a=$t.color,l=ei(t.rtl,this.left,this.width),u=ye(o.font),{padding:h}=o,d=u.size,p=d/2;let y;this.drawTitle(),i.textAlign=l.textAlign("left"),i.textBaseline="middle",i.lineWidth=.5,i.font=u.string;const{boxWidth:E,boxHeight:w,itemHeight:I}=Hf(o,d),P=function(L,S,g){if(isNaN(E)||E<=0||isNaN(w)||w<0)return;i.save();const _=st(g.lineWidth,1);if(i.fillStyle=st(g.fillStyle,a),i.lineCap=st(g.lineCap,"butt"),i.lineDashOffset=st(g.lineDashOffset,0),i.lineJoin=st(g.lineJoin,"miter"),i.lineWidth=_,i.strokeStyle=st(g.strokeStyle,a),i.setLineDash(st(g.lineDash,[])),o.usePointStyle){const b={radius:w*Math.SQRT2/2,pointStyle:g.pointStyle,rotation:g.rotation,borderWidth:_},v=l.xPlus(L,E/2),A=S+p;Ym(i,b,v,A,o.pointStyleWidth&&E)}else{const b=S+Math.max((d-w)/2,0),v=l.leftForLtr(L,E),A=ti(g.borderRadius);i.beginPath(),Object.values(A).some(x=>x!==0)?ca(i,{x:v,y:b,w:E,h:w,radius:A}):i.rect(v,b,E,w),i.fill(),_!==0&&i.stroke()}i.restore()},k=function(L,S,g){la(i,g.text,L,S+I/2,u,{strikethrough:g.hidden,textAlign:l.textAlign(g.textAlign)})},R=this.isHorizontal(),D=this._computeTitleHeight();R?y={x:Ie(r,this.left+h,this.right-s[0]),y:this.top+h+D,line:0}:y={x:this.left+h,y:Ie(r,this.top+D+h,this.bottom-e[0].height),line:0},n_(this.ctx,t.textDirection);const M=I+h;this.legendItems.forEach((L,S)=>{i.strokeStyle=L.fontColor,i.fillStyle=L.fontColor;const g=i.measureText(L.text).width,_=l.textAlign(L.textAlign||(L.textAlign=o.textAlign)),b=E+p+g;let v=y.x,A=y.y;l.setWidth(this.width),R?S>0&&v+b+h>this.right&&(A=y.y+=M,y.line++,v=y.x=Ie(r,this.left+h,this.right-s[y.line])):S>0&&A+M>this.bottom&&(v=y.x=v+e[y.line].width+h,y.line++,A=y.y=Ie(r,this.top+D+h,this.bottom-e[y.line].height));const x=l.x(v);if(P(x,A,L),v=sx(_,v+E+p,R?v+b:this.right,t.rtl),k(l.x(v),A,L),R)y.x+=b+h;else if(typeof L.text!="string"){const q=u.lineHeight;y.y+=S_(L,q)+h}else y.y+=M}),s_(this.ctx,t.textDirection)}drawTitle(){const t=this.options,e=t.title,s=ye(e.font),i=$e(e.padding);if(!e.display)return;const r=ei(t.rtl,this.left,this.width),o=this.ctx,a=e.position,l=s.size/2,u=i.top+l;let h,d=this.left,p=this.width;if(this.isHorizontal())p=Math.max(...this.lineWidths),h=this.top+u,d=Ie(t.align,d,this.right-p);else{const E=this.columnSizes.reduce((w,I)=>Math.max(w,I.height),0);h=u+Ie(t.align,this.top,this.bottom-E-t.labels.padding-this._computeTitleHeight())}const y=Ie(a,d,d+p);o.textAlign=r.textAlign(Wm(a)),o.textBaseline="middle",o.strokeStyle=e.color,o.fillStyle=e.color,o.font=s.string,la(o,e.text,y,h,s)}_computeTitleHeight(){const t=this.options.title,e=ye(t.font),s=$e(t.padding);return t.display?e.lineHeight+s.height:0}_getLegendItemAt(t,e){let s,i,r;if(mn(t,this.left,this.right)&&mn(e,this.top,this.bottom)){for(r=this.legendHitBoxes,s=0;s<r.length;++s)if(i=r[s],mn(t,i.left,i.left+i.width)&&mn(e,i.top,i.top+i.height))return this.legendItems[s]}return null}handleEvent(t){const e=this.options;if(!Pk(t.type,e))return;const s=this._getLegendItemAt(t.x,t.y);if(t.type==="mousemove"||t.type==="mouseout"){const i=this._hoveredItem,r=Ik(i,s);i&&!r&&Rt(e.onLeave,[t,i,this],this),this._hoveredItem=s,s&&!r&&Rt(e.onHover,[t,s,this],this)}else s&&Rt(e.onClick,[t,s,this],this)}}function Sk(n,t,e,s,i){const r=xk(s,n,t,e),o=Ak(i,s,t.lineHeight);return{itemWidth:r,itemHeight:o}}function xk(n,t,e,s){let i=n.text;return i&&typeof i!="string"&&(i=i.reduce((r,o)=>r.length>o.length?r:o)),t+e.size/2+s.measureText(i).width}function Ak(n,t,e){let s=n;return typeof t.text!="string"&&(s=S_(t,e)),s}function S_(n,t){const e=n.text?n.text.length:0;return t*e}function Pk(n,t){return!!((n==="mousemove"||n==="mouseout")&&(t.onHover||t.onLeave)||t.onClick&&(n==="click"||n==="mouseup"))}var kk={id:"legend",_element:Wf,start(n,t,e){const s=n.legend=new Wf({ctx:n.ctx,options:e,chart:n});Un.configure(n,s,e),Un.addBox(n,s)},stop(n){Un.removeBox(n,n.legend),delete n.legend},beforeUpdate(n,t,e){const s=n.legend;Un.configure(n,s,e),s.options=e},afterUpdate(n){const t=n.legend;t.buildLabels(),t.adjustHitBoxes()},afterEvent(n,t){t.replay||n.legend.handleEvent(t.event)},defaults:{display:!0,position:"top",align:"center",fullSize:!0,reverse:!1,weight:1e3,onClick(n,t,e){const s=t.datasetIndex,i=e.chart;i.isDatasetVisible(s)?(i.hide(s),t.hidden=!0):(i.show(s),t.hidden=!1)},onHover:null,onLeave:null,labels:{color:n=>n.chart.options.color,boxWidth:40,padding:10,generateLabels(n){const t=n.data.datasets,{labels:{usePointStyle:e,pointStyle:s,textAlign:i,color:r,useBorderRadius:o,borderRadius:a}}=n.legend.options;return n._getSortedDatasetMetas().map(l=>{const u=l.controller.getStyle(e?0:void 0),h=$e(u.borderWidth);return{text:t[l.index].label,fillStyle:u.backgroundColor,fontColor:r,hidden:!l.visible,lineCap:u.borderCapStyle,lineDash:u.borderDash,lineDashOffset:u.borderDashOffset,lineJoin:u.borderJoinStyle,lineWidth:(h.width+h.height)/4,strokeStyle:u.borderColor,pointStyle:s||u.pointStyle,rotation:u.rotation,textAlign:i||u.textAlign,borderRadius:o&&(a||u.borderRadius),datasetIndex:l.index}},this)}},title:{color:n=>n.chart.options.color,display:!1,position:"center",text:""}},descriptors:{_scriptable:n=>!n.startsWith("on"),labels:{_scriptable:n=>!["generateLabels","filter","sort"].includes(n)}}};const Yi={average(n){if(!n.length)return!1;let t,e,s=new Set,i=0,r=0;for(t=0,e=n.length;t<e;++t){const a=n[t].element;if(a&&a.hasValue()){const l=a.tooltipPosition();s.add(l.x),i+=l.y,++r}}return r===0||s.size===0?!1:{x:[...s].reduce((a,l)=>a+l)/s.size,y:i/r}},nearest(n,t){if(!n.length)return!1;let e=t.x,s=t.y,i=Number.POSITIVE_INFINITY,r,o,a;for(r=0,o=n.length;r<o;++r){const l=n[r].element;if(l&&l.hasValue()){const u=l.getCenterPoint(),h=sc(t,u);h<i&&(i=h,a=l)}}if(a){const l=a.tooltipPosition();e=l.x,s=l.y}return{x:e,y:s}}};function We(n,t){return t&&(Gt(t)?Array.prototype.push.apply(n,t):n.push(t)),n}function cn(n){return(typeof n=="string"||n instanceof String)&&n.indexOf(`
`)>-1?n.split(`
`):n}function Rk(n,t){const{element:e,datasetIndex:s,index:i}=t,r=n.getDatasetMeta(s).controller,{label:o,value:a}=r.getLabelAndValue(i);return{chart:n,label:o,parsed:r.getParsed(i),raw:n.data.datasets[s].data[i],formattedValue:a,dataset:r.getDataset(),dataIndex:i,datasetIndex:s,element:e}}function qf(n,t){const e=n.chart.ctx,{body:s,footer:i,title:r}=n,{boxWidth:o,boxHeight:a}=t,l=ye(t.bodyFont),u=ye(t.titleFont),h=ye(t.footerFont),d=r.length,p=i.length,y=s.length,E=$e(t.padding);let w=E.height,I=0,P=s.reduce((D,M)=>D+M.before.length+M.lines.length+M.after.length,0);if(P+=n.beforeBody.length+n.afterBody.length,d&&(w+=d*u.lineHeight+(d-1)*t.titleSpacing+t.titleMarginBottom),P){const D=t.displayColors?Math.max(a,l.lineHeight):l.lineHeight;w+=y*D+(P-y)*l.lineHeight+(P-1)*t.bodySpacing}p&&(w+=t.footerMarginTop+p*h.lineHeight+(p-1)*t.footerSpacing);let k=0;const R=function(D){I=Math.max(I,e.measureText(D).width+k)};return e.save(),e.font=u.string,wt(n.title,R),e.font=l.string,wt(n.beforeBody.concat(n.afterBody),R),k=t.displayColors?o+2+t.boxPadding:0,wt(s,D=>{wt(D.before,R),wt(D.lines,R),wt(D.after,R)}),k=0,e.font=h.string,wt(n.footer,R),e.restore(),I+=E.width,{width:I,height:w}}function Ck(n,t){const{y:e,height:s}=t;return e<s/2?"top":e>n.height-s/2?"bottom":"center"}function Dk(n,t,e,s){const{x:i,width:r}=s,o=e.caretSize+e.caretPadding;if(n==="left"&&i+r+o>t.width||n==="right"&&i-r-o<0)return!0}function Mk(n,t,e,s){const{x:i,width:r}=e,{width:o,chartArea:{left:a,right:l}}=n;let u="center";return s==="center"?u=i<=(a+l)/2?"left":"right":i<=r/2?u="left":i>=o-r/2&&(u="right"),Dk(u,n,t,e)&&(u="center"),u}function Kf(n,t,e){const s=e.yAlign||t.yAlign||Ck(n,e);return{xAlign:e.xAlign||t.xAlign||Mk(n,t,e,s),yAlign:s}}function Ok(n,t){let{x:e,width:s}=n;return t==="right"?e-=s:t==="center"&&(e-=s/2),e}function Lk(n,t,e){let{y:s,height:i}=n;return t==="top"?s+=e:t==="bottom"?s-=i+e:s-=i/2,s}function Gf(n,t,e,s){const{caretSize:i,caretPadding:r,cornerRadius:o}=n,{xAlign:a,yAlign:l}=e,u=i+r,{topLeft:h,topRight:d,bottomLeft:p,bottomRight:y}=ti(o);let E=Ok(t,a);const w=Lk(t,l,u);return l==="center"?a==="left"?E+=u:a==="right"&&(E-=u):a==="left"?E-=Math.max(h,p)+i:a==="right"&&(E+=Math.max(d,y)+i),{x:ue(E,0,s.width-t.width),y:ue(w,0,s.height-t.height)}}function mo(n,t,e){const s=$e(e.padding);return t==="center"?n.x+n.width/2:t==="right"?n.x+n.width-s.right:n.x+s.left}function Yf(n){return We([],cn(n))}function Vk(n,t,e){return Os(n,{tooltip:t,tooltipItems:e,type:"tooltip"})}function Qf(n,t){const e=t&&t.dataset&&t.dataset.tooltip&&t.dataset.tooltip.callbacks;return e?n.override(e):n}const x_={beforeTitle:an,title(n){if(n.length>0){const t=n[0],e=t.chart.data.labels,s=e?e.length:0;if(this&&this.options&&this.options.mode==="dataset")return t.dataset.label||"";if(t.label)return t.label;if(s>0&&t.dataIndex<s)return e[t.dataIndex]}return""},afterTitle:an,beforeBody:an,beforeLabel:an,label(n){if(this&&this.options&&this.options.mode==="dataset")return n.label+": "+n.formattedValue||n.formattedValue;let t=n.dataset.label||"";t&&(t+=": ");const e=n.formattedValue;return _t(e)||(t+=e),t},labelColor(n){const e=n.chart.getDatasetMeta(n.datasetIndex).controller.getStyle(n.dataIndex);return{borderColor:e.borderColor,backgroundColor:e.backgroundColor,borderWidth:e.borderWidth,borderDash:e.borderDash,borderDashOffset:e.borderDashOffset,borderRadius:0}},labelTextColor(){return this.options.bodyColor},labelPointStyle(n){const e=n.chart.getDatasetMeta(n.datasetIndex).controller.getStyle(n.dataIndex);return{pointStyle:e.pointStyle,rotation:e.rotation}},afterLabel:an,afterBody:an,beforeFooter:an,footer:an,afterFooter:an};function pe(n,t,e,s){const i=n[t].call(e,s);return typeof i>"u"?x_[t].call(e,s):i}class uc extends sn{constructor(t){super(),this.opacity=0,this._active=[],this._eventPosition=void 0,this._size=void 0,this._cachedAnimations=void 0,this._tooltipItems=[],this.$animations=void 0,this.$context=void 0,this.chart=t.chart,this.options=t.options,this.dataPoints=void 0,this.title=void 0,this.beforeBody=void 0,this.body=void 0,this.afterBody=void 0,this.footer=void 0,this.xAlign=void 0,this.yAlign=void 0,this.x=void 0,this.y=void 0,this.height=void 0,this.width=void 0,this.caretX=void 0,this.caretY=void 0,this.labelColors=void 0,this.labelPointStyles=void 0,this.labelTextColors=void 0}initialize(t){this.options=t,this._cachedAnimations=void 0,this.$context=void 0}_resolveAnimations(){const t=this._cachedAnimations;if(t)return t;const e=this.chart,s=this.options.setContext(this.getContext()),i=s.enabled&&e.options.animation&&s.animations,r=new l_(this.chart,i);return i._cacheable&&(this._cachedAnimations=Object.freeze(r)),r}getContext(){return this.$context||(this.$context=Vk(this.chart.getContext(),this,this._tooltipItems))}getTitle(t,e){const{callbacks:s}=e,i=pe(s,"beforeTitle",this,t),r=pe(s,"title",this,t),o=pe(s,"afterTitle",this,t);let a=[];return a=We(a,cn(i)),a=We(a,cn(r)),a=We(a,cn(o)),a}getBeforeBody(t,e){return Yf(pe(e.callbacks,"beforeBody",this,t))}getBody(t,e){const{callbacks:s}=e,i=[];return wt(t,r=>{const o={before:[],lines:[],after:[]},a=Qf(s,r);We(o.before,cn(pe(a,"beforeLabel",this,r))),We(o.lines,pe(a,"label",this,r)),We(o.after,cn(pe(a,"afterLabel",this,r))),i.push(o)}),i}getAfterBody(t,e){return Yf(pe(e.callbacks,"afterBody",this,t))}getFooter(t,e){const{callbacks:s}=e,i=pe(s,"beforeFooter",this,t),r=pe(s,"footer",this,t),o=pe(s,"afterFooter",this,t);let a=[];return a=We(a,cn(i)),a=We(a,cn(r)),a=We(a,cn(o)),a}_createItems(t){const e=this._active,s=this.chart.data,i=[],r=[],o=[];let a=[],l,u;for(l=0,u=e.length;l<u;++l)a.push(Rk(this.chart,e[l]));return t.filter&&(a=a.filter((h,d,p)=>t.filter(h,d,p,s))),t.itemSort&&(a=a.sort((h,d)=>t.itemSort(h,d,s))),wt(a,h=>{const d=Qf(t.callbacks,h);i.push(pe(d,"labelColor",this,h)),r.push(pe(d,"labelPointStyle",this,h)),o.push(pe(d,"labelTextColor",this,h))}),this.labelColors=i,this.labelPointStyles=r,this.labelTextColors=o,this.dataPoints=a,a}update(t,e){const s=this.options.setContext(this.getContext()),i=this._active;let r,o=[];if(!i.length)this.opacity!==0&&(r={opacity:0});else{const a=Yi[s.position].call(this,i,this._eventPosition);o=this._createItems(s),this.title=this.getTitle(o,s),this.beforeBody=this.getBeforeBody(o,s),this.body=this.getBody(o,s),this.afterBody=this.getAfterBody(o,s),this.footer=this.getFooter(o,s);const l=this._size=qf(this,s),u=Object.assign({},a,l),h=Kf(this.chart,s,u),d=Gf(s,u,h,this.chart);this.xAlign=h.xAlign,this.yAlign=h.yAlign,r={opacity:1,x:d.x,y:d.y,width:l.width,height:l.height,caretX:a.x,caretY:a.y}}this._tooltipItems=o,this.$context=void 0,r&&this._resolveAnimations().update(this,r),t&&s.external&&s.external.call(this,{chart:this.chart,tooltip:this,replay:e})}drawCaret(t,e,s,i){const r=this.getCaretPosition(t,s,i);e.lineTo(r.x1,r.y1),e.lineTo(r.x2,r.y2),e.lineTo(r.x3,r.y3)}getCaretPosition(t,e,s){const{xAlign:i,yAlign:r}=this,{caretSize:o,cornerRadius:a}=s,{topLeft:l,topRight:u,bottomLeft:h,bottomRight:d}=ti(a),{x:p,y}=t,{width:E,height:w}=e;let I,P,k,R,D,M;return r==="center"?(D=y+w/2,i==="left"?(I=p,P=I-o,R=D+o,M=D-o):(I=p+E,P=I+o,R=D-o,M=D+o),k=I):(i==="left"?P=p+Math.max(l,h)+o:i==="right"?P=p+E-Math.max(u,d)-o:P=this.caretX,r==="top"?(R=y,D=R-o,I=P-o,k=P+o):(R=y+w,D=R+o,I=P+o,k=P-o),M=R),{x1:I,x2:P,x3:k,y1:R,y2:D,y3:M}}drawTitle(t,e,s){const i=this.title,r=i.length;let o,a,l;if(r){const u=ei(s.rtl,this.x,this.width);for(t.x=mo(this,s.titleAlign,s),e.textAlign=u.textAlign(s.titleAlign),e.textBaseline="middle",o=ye(s.titleFont),a=s.titleSpacing,e.fillStyle=s.titleColor,e.font=o.string,l=0;l<r;++l)e.fillText(i[l],u.x(t.x),t.y+o.lineHeight/2),t.y+=o.lineHeight+a,l+1===r&&(t.y+=s.titleMarginBottom-a)}}_drawColorBox(t,e,s,i,r){const o=this.labelColors[s],a=this.labelPointStyles[s],{boxHeight:l,boxWidth:u}=r,h=ye(r.bodyFont),d=mo(this,"left",r),p=i.x(d),y=l<h.lineHeight?(h.lineHeight-l)/2:0,E=e.y+y;if(r.usePointStyle){const w={radius:Math.min(u,l)/2,pointStyle:a.pointStyle,rotation:a.rotation,borderWidth:1},I=i.leftForLtr(p,u)+u/2,P=E+l/2;t.strokeStyle=r.multiKeyBackground,t.fillStyle=r.multiKeyBackground,rc(t,w,I,P),t.strokeStyle=o.borderColor,t.fillStyle=o.backgroundColor,rc(t,w,I,P)}else{t.lineWidth=ht(o.borderWidth)?Math.max(...Object.values(o.borderWidth)):o.borderWidth||1,t.strokeStyle=o.borderColor,t.setLineDash(o.borderDash||[]),t.lineDashOffset=o.borderDashOffset||0;const w=i.leftForLtr(p,u),I=i.leftForLtr(i.xPlus(p,1),u-2),P=ti(o.borderRadius);Object.values(P).some(k=>k!==0)?(t.beginPath(),t.fillStyle=r.multiKeyBackground,ca(t,{x:w,y:E,w:u,h:l,radius:P}),t.fill(),t.stroke(),t.fillStyle=o.backgroundColor,t.beginPath(),ca(t,{x:I,y:E+1,w:u-2,h:l-2,radius:P}),t.fill()):(t.fillStyle=r.multiKeyBackground,t.fillRect(w,E,u,l),t.strokeRect(w,E,u,l),t.fillStyle=o.backgroundColor,t.fillRect(I,E+1,u-2,l-2))}t.fillStyle=this.labelTextColors[s]}drawBody(t,e,s){const{body:i}=this,{bodySpacing:r,bodyAlign:o,displayColors:a,boxHeight:l,boxWidth:u,boxPadding:h}=s,d=ye(s.bodyFont);let p=d.lineHeight,y=0;const E=ei(s.rtl,this.x,this.width),w=function(g){e.fillText(g,E.x(t.x+y),t.y+p/2),t.y+=p+r},I=E.textAlign(o);let P,k,R,D,M,L,S;for(e.textAlign=o,e.textBaseline="middle",e.font=d.string,t.x=mo(this,I,s),e.fillStyle=s.bodyColor,wt(this.beforeBody,w),y=a&&I!=="right"?o==="center"?u/2+h:u+2+h:0,D=0,L=i.length;D<L;++D){for(P=i[D],k=this.labelTextColors[D],e.fillStyle=k,wt(P.before,w),R=P.lines,a&&R.length&&(this._drawColorBox(e,t,D,E,s),p=Math.max(d.lineHeight,l)),M=0,S=R.length;M<S;++M)w(R[M]),p=d.lineHeight;wt(P.after,w)}y=0,p=d.lineHeight,wt(this.afterBody,w),t.y-=r}drawFooter(t,e,s){const i=this.footer,r=i.length;let o,a;if(r){const l=ei(s.rtl,this.x,this.width);for(t.x=mo(this,s.footerAlign,s),t.y+=s.footerMarginTop,e.textAlign=l.textAlign(s.footerAlign),e.textBaseline="middle",o=ye(s.footerFont),e.fillStyle=s.footerColor,e.font=o.string,a=0;a<r;++a)e.fillText(i[a],l.x(t.x),t.y+o.lineHeight/2),t.y+=o.lineHeight+s.footerSpacing}}drawBackground(t,e,s,i){const{xAlign:r,yAlign:o}=this,{x:a,y:l}=t,{width:u,height:h}=s,{topLeft:d,topRight:p,bottomLeft:y,bottomRight:E}=ti(i.cornerRadius);e.fillStyle=i.backgroundColor,e.strokeStyle=i.borderColor,e.lineWidth=i.borderWidth,e.beginPath(),e.moveTo(a+d,l),o==="top"&&this.drawCaret(t,e,s,i),e.lineTo(a+u-p,l),e.quadraticCurveTo(a+u,l,a+u,l+p),o==="center"&&r==="right"&&this.drawCaret(t,e,s,i),e.lineTo(a+u,l+h-E),e.quadraticCurveTo(a+u,l+h,a+u-E,l+h),o==="bottom"&&this.drawCaret(t,e,s,i),e.lineTo(a+y,l+h),e.quadraticCurveTo(a,l+h,a,l+h-y),o==="center"&&r==="left"&&this.drawCaret(t,e,s,i),e.lineTo(a,l+d),e.quadraticCurveTo(a,l,a+d,l),e.closePath(),e.fill(),i.borderWidth>0&&e.stroke()}_updateAnimationTarget(t){const e=this.chart,s=this.$animations,i=s&&s.x,r=s&&s.y;if(i||r){const o=Yi[t.position].call(this,this._active,this._eventPosition);if(!o)return;const a=this._size=qf(this,t),l=Object.assign({},o,this._size),u=Kf(e,t,l),h=Gf(t,l,u,e);(i._to!==h.x||r._to!==h.y)&&(this.xAlign=u.xAlign,this.yAlign=u.yAlign,this.width=a.width,this.height=a.height,this.caretX=o.x,this.caretY=o.y,this._resolveAnimations().update(this,h))}}_willRender(){return!!this.opacity}draw(t){const e=this.options.setContext(this.getContext());let s=this.opacity;if(!s)return;this._updateAnimationTarget(e);const i={width:this.width,height:this.height},r={x:this.x,y:this.y};s=Math.abs(s)<.001?0:s;const o=$e(e.padding),a=this.title.length||this.beforeBody.length||this.body.length||this.afterBody.length||this.footer.length;e.enabled&&a&&(t.save(),t.globalAlpha=s,this.drawBackground(r,t,i,e),n_(t,e.textDirection),r.y+=o.top,this.drawTitle(r,t,e),this.drawBody(r,t,e),this.drawFooter(r,t,e),s_(t,e.textDirection),t.restore())}getActiveElements(){return this._active||[]}setActiveElements(t,e){const s=this._active,i=t.map(({datasetIndex:a,index:l})=>{const u=this.chart.getDatasetMeta(a);if(!u)throw new Error("Cannot find a dataset at index "+a);return{datasetIndex:a,element:u.data[l],index:l}}),r=!ra(s,i),o=this._positionChanged(i,e);(r||o)&&(this._active=i,this._eventPosition=e,this._ignoreReplayEvents=!0,this.update(!0))}handleEvent(t,e,s=!0){if(e&&this._ignoreReplayEvents)return!1;this._ignoreReplayEvents=!1;const i=this.options,r=this._active||[],o=this._getActiveElements(t,r,e,s),a=this._positionChanged(o,t),l=e||!ra(o,r)||a;return l&&(this._active=o,(i.enabled||i.external)&&(this._eventPosition={x:t.x,y:t.y},this.update(!0,e))),l}_getActiveElements(t,e,s,i){const r=this.options;if(t.type==="mouseout")return[];if(!i)return e.filter(a=>this.chart.data.datasets[a.datasetIndex]&&this.chart.getDatasetMeta(a.datasetIndex).controller.getParsed(a.index)!==void 0);const o=this.chart.getElementsAtEventForMode(t,r.mode,r,s);return r.reverse&&o.reverse(),o}_positionChanged(t,e){const{caretX:s,caretY:i,options:r}=this,o=Yi[r.position].call(this,t,e);return o!==!1&&(s!==o.x||i!==o.y)}}$(uc,"positioners",Yi);var Nk={id:"tooltip",_element:uc,positioners:Yi,afterInit(n,t,e){e&&(n.tooltip=new uc({chart:n,options:e}))},beforeUpdate(n,t,e){n.tooltip&&n.tooltip.initialize(e)},reset(n,t,e){n.tooltip&&n.tooltip.initialize(e)},afterDraw(n){const t=n.tooltip;if(t&&t._willRender()){const e={tooltip:t};if(n.notifyPlugins("beforeTooltipDraw",{...e,cancelable:!0})===!1)return;t.draw(n.ctx),n.notifyPlugins("afterTooltipDraw",e)}},afterEvent(n,t){if(n.tooltip){const e=t.replay;n.tooltip.handleEvent(t.event,e,t.inChartArea)&&(t.changed=!0)}},defaults:{enabled:!0,external:null,position:"average",backgroundColor:"rgba(0,0,0,0.8)",titleColor:"#fff",titleFont:{weight:"bold"},titleSpacing:2,titleMarginBottom:6,titleAlign:"left",bodyColor:"#fff",bodySpacing:2,bodyFont:{},bodyAlign:"left",footerColor:"#fff",footerSpacing:2,footerMarginTop:6,footerFont:{weight:"bold"},footerAlign:"left",padding:6,caretPadding:2,caretSize:5,cornerRadius:6,boxHeight:(n,t)=>t.bodyFont.size,boxWidth:(n,t)=>t.bodyFont.size,multiKeyBackground:"#fff",displayColors:!0,boxPadding:0,borderColor:"rgba(0,0,0,0)",borderWidth:0,animation:{duration:400,easing:"easeOutQuart"},animations:{numbers:{type:"number",properties:["x","y","width","height","caretX","caretY"]},opacity:{easing:"linear",duration:200}},callbacks:x_},defaultRoutes:{bodyFont:"font",footerFont:"font",titleFont:"font"},descriptors:{_scriptable:n=>n!=="filter"&&n!=="itemSort"&&n!=="external",_indexable:!1,callbacks:{_scriptable:!1,_indexable:!1},animation:{_fallback:!1},animations:{_fallback:"animation"}},additionalOptionScopes:["interaction"]};const Fk=(n,t,e,s)=>(typeof t=="string"?(e=n.push(t)-1,s.unshift({index:e,label:t})):isNaN(t)&&(e=null),e);function Uk(n,t,e,s){const i=n.indexOf(t);if(i===-1)return Fk(n,t,e,s);const r=n.lastIndexOf(t);return i!==r?e:i}const Bk=(n,t)=>n===null?null:ue(Math.round(n),0,t);function Xf(n){const t=this.getLabels();return n>=0&&n<t.length?t[n]:n}class hc extends bi{constructor(t){super(t),this._startValue=void 0,this._valueRange=0,this._addedLabels=[]}init(t){const e=this._addedLabels;if(e.length){const s=this.getLabels();for(const{index:i,label:r}of e)s[i]===r&&s.splice(i,1);this._addedLabels=[]}super.init(t)}parse(t,e){if(_t(t))return null;const s=this.getLabels();return e=isFinite(e)&&s[e]===t?e:Uk(s,t,st(e,t),this._addedLabels),Bk(e,s.length-1)}determineDataLimits(){const{minDefined:t,maxDefined:e}=this.getUserBounds();let{min:s,max:i}=this.getMinMax(!0);this.options.bounds==="ticks"&&(t||(s=0),e||(i=this.getLabels().length-1)),this.min=s,this.max=i}buildTicks(){const t=this.min,e=this.max,s=this.options.offset,i=[];let r=this.getLabels();r=t===0&&e===r.length-1?r:r.slice(t,e+1),this._valueRange=Math.max(r.length-(s?0:1),1),this._startValue=this.min-(s?.5:0);for(let o=t;o<=e;o++)i.push({value:o});return i}getLabelForValue(t){return Xf.call(this,t)}configure(){super.configure(),this.isHorizontal()||(this._reversePixels=!this._reversePixels)}getPixelForValue(t){return typeof t!="number"&&(t=this.parse(t)),t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getPixelForTick(t){const e=this.ticks;return t<0||t>e.length-1?null:this.getPixelForValue(e[t].value)}getValueForPixel(t){return Math.round(this._startValue+this.getDecimalForPixel(t)*this._valueRange)}getBasePixel(){return this.bottom}}$(hc,"id","category"),$(hc,"defaults",{ticks:{callback:Xf}});function $k(n,t){const e=[],{bounds:i,step:r,min:o,max:a,precision:l,count:u,maxTicks:h,maxDigits:d,includeBounds:p}=n,y=r||1,E=h-1,{min:w,max:I}=t,P=!_t(o),k=!_t(a),R=!_t(u),D=(I-w)/(d+1);let M=Kd((I-w)/E/y)*y,L,S,g,_;if(M<1e-14&&!P&&!k)return[{value:w},{value:I}];_=Math.ceil(I/M)-Math.floor(w/M),_>E&&(M=Kd(_*M/E/y)*y),_t(l)||(L=Math.pow(10,l),M=Math.ceil(M*L)/L),i==="ticks"?(S=Math.floor(w/M)*M,g=Math.ceil(I/M)*M):(S=w,g=I),P&&k&&r&&GS((a-o)/r,M/1e3)?(_=Math.round(Math.min((a-o)/M,h)),M=(a-o)/_,S=o,g=a):R?(S=P?o:S,g=k?a:g,_=u-1,M=(g-S)/_):(_=(g-S)/M,rr(_,Math.round(_),M/1e3)?_=Math.round(_):_=Math.ceil(_));const b=Math.max(Gd(M),Gd(S));L=Math.pow(10,_t(l)?b:l),S=Math.round(S*L)/L,g=Math.round(g*L)/L;let v=0;for(P&&(p&&S!==o?(e.push({value:o}),S<o&&v++,rr(Math.round((S+v*M)*L)/L,o,Jf(o,D,n))&&v++):S<o&&v++);v<_;++v){const A=Math.round((S+v*M)*L)/L;if(k&&A>a)break;e.push({value:A})}return k&&p&&g!==a?e.length&&rr(e[e.length-1].value,a,Jf(a,D,n))?e[e.length-1].value=a:e.push({value:a}):(!k||g===a)&&e.push({value:g}),e}function Jf(n,t,{horizontal:e,minRotation:s}){const i=gn(s),r=(e?Math.sin(i):Math.cos(i))||.001,o=.75*t*(""+n).length;return Math.min(t/r,o)}class zk extends bi{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}parse(t,e){return _t(t)||(typeof t=="number"||t instanceof Number)&&!isFinite(+t)?null:+t}handleTickRangeOptions(){const{beginAtZero:t}=this.options,{minDefined:e,maxDefined:s}=this.getUserBounds();let{min:i,max:r}=this;const o=l=>i=e?i:l,a=l=>r=s?r:l;if(t){const l=Je(i),u=Je(r);l<0&&u<0?a(0):l>0&&u>0&&o(0)}if(i===r){let l=r===0?1:Math.abs(r*.05);a(r+l),t||o(i-l)}this.min=i,this.max=r}getTickLimit(){const t=this.options.ticks;let{maxTicksLimit:e,stepSize:s}=t,i;return s?(i=Math.ceil(this.max/s)-Math.floor(this.min/s)+1,i>1e3&&(console.warn(`scales.${this.id}.ticks.stepSize: ${s} would result generating up to ${i} ticks. Limiting to 1000.`),i=1e3)):(i=this.computeTickLimit(),e=e||11),e&&(i=Math.min(e,i)),i}computeTickLimit(){return Number.POSITIVE_INFINITY}buildTicks(){const t=this.options,e=t.ticks;let s=this.getTickLimit();s=Math.max(2,s);const i={maxTicks:s,bounds:t.bounds,min:t.min,max:t.max,precision:e.precision,step:e.stepSize,count:e.count,maxDigits:this._maxDigits(),horizontal:this.isHorizontal(),minRotation:e.minRotation||0,includeBounds:e.includeBounds!==!1},r=this._range||this,o=$k(i,r);return t.bounds==="ticks"&&YS(o,this,"value"),t.reverse?(o.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),o}configure(){const t=this.ticks;let e=this.min,s=this.max;if(super.configure(),this.options.offset&&t.length){const i=(s-e)/Math.max(t.length-1,1)/2;e-=i,s+=i}this._startValue=e,this._endValue=s,this._valueRange=s-e}getLabelForValue(t){return pu(t,this.chart.options.locale,this.options.ticks.format)}}class dc extends zk{determineDataLimits(){const{min:t,max:e}=this.getMinMax(!0);this.min=de(t)?t:0,this.max=de(e)?e:1,this.handleTickRangeOptions()}computeTickLimit(){const t=this.isHorizontal(),e=t?this.width:this.height,s=gn(this.options.ticks.minRotation),i=(t?Math.sin(s):Math.cos(s))||.001,r=this._resolveTickFontOptions(0);return Math.ceil(e/Math.min(40,r.lineHeight/i))}getPixelForValue(t){return t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getValueForPixel(t){return this._startValue+this.getDecimalForPixel(t)*this._valueRange}}$(dc,"id","linear"),$(dc,"defaults",{ticks:{callback:Gm.formatters.numeric}});const $a={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},_e=Object.keys($a);function Zf(n,t){return n-t}function tp(n,t){if(_t(t))return null;const e=n._adapter,{parser:s,round:i,isoWeekday:r}=n._parseOpts;let o=t;return typeof s=="function"&&(o=s(o)),de(o)||(o=typeof s=="string"?e.parse(o,s):e.parse(o)),o===null?null:(i&&(o=i==="week"&&(ci(r)||r===!0)?e.startOf(o,"isoWeek",r):e.startOf(o,i)),+o)}function ep(n,t,e,s){const i=_e.length;for(let r=_e.indexOf(n);r<i-1;++r){const o=$a[_e[r]],a=o.steps?o.steps:Number.MAX_SAFE_INTEGER;if(o.common&&Math.ceil((e-t)/(a*o.size))<=s)return _e[r]}return _e[i-1]}function jk(n,t,e,s,i){for(let r=_e.length-1;r>=_e.indexOf(e);r--){const o=_e[r];if($a[o].common&&n._adapter.diff(i,s,o)>=t-1)return o}return _e[e?_e.indexOf(e):0]}function Hk(n){for(let t=_e.indexOf(n)+1,e=_e.length;t<e;++t)if($a[_e[t]].common)return _e[t]}function np(n,t,e){if(!e)n[t]=!0;else if(e.length){const{lo:s,hi:i}=du(e,t),r=e[s]>=t?e[s]:e[i];n[r]=!0}}function Wk(n,t,e,s){const i=n._adapter,r=+i.startOf(t[0].value,s),o=t[t.length-1].value;let a,l;for(a=r;a<=o;a=+i.add(a,1,s))l=e[a],l>=0&&(t[l].major=!0);return t}function sp(n,t,e){const s=[],i={},r=t.length;let o,a;for(o=0;o<r;++o)a=t[o],i[a]=o,s.push({value:a,major:!1});return r===0||!e?s:Wk(n,s,i,e)}class fa extends bi{constructor(t){super(t),this._cache={data:[],labels:[],all:[]},this._unit="day",this._majorUnit=void 0,this._offsets={},this._normalized=!1,this._parseOpts=void 0}init(t,e={}){const s=t.time||(t.time={}),i=this._adapter=new kA._date(t.adapters.date);i.init(e),ir(s.displayFormats,i.formats()),this._parseOpts={parser:s.parser,round:s.round,isoWeekday:s.isoWeekday},super.init(t),this._normalized=e.normalized}parse(t,e){return t===void 0?null:tp(this,t)}beforeLayout(){super.beforeLayout(),this._cache={data:[],labels:[],all:[]}}determineDataLimits(){const t=this.options,e=this._adapter,s=t.time.unit||"day";let{min:i,max:r,minDefined:o,maxDefined:a}=this.getUserBounds();function l(u){!o&&!isNaN(u.min)&&(i=Math.min(i,u.min)),!a&&!isNaN(u.max)&&(r=Math.max(r,u.max))}(!o||!a)&&(l(this._getLabelBounds()),(t.bounds!=="ticks"||t.ticks.source!=="labels")&&l(this.getMinMax(!1))),i=de(i)&&!isNaN(i)?i:+e.startOf(Date.now(),s),r=de(r)&&!isNaN(r)?r:+e.endOf(Date.now(),s)+1,this.min=Math.min(i,r-1),this.max=Math.max(i+1,r)}_getLabelBounds(){const t=this.getLabelTimestamps();let e=Number.POSITIVE_INFINITY,s=Number.NEGATIVE_INFINITY;return t.length&&(e=t[0],s=t[t.length-1]),{min:e,max:s}}buildTicks(){const t=this.options,e=t.time,s=t.ticks,i=s.source==="labels"?this.getLabelTimestamps():this._generate();t.bounds==="ticks"&&i.length&&(this.min=this._userMin||i[0],this.max=this._userMax||i[i.length-1]);const r=this.min,o=this.max,a=tx(i,r,o);return this._unit=e.unit||(s.autoSkip?ep(e.minUnit,this.min,this.max,this._getLabelCapacity(r)):jk(this,a.length,e.minUnit,this.min,this.max)),this._majorUnit=!s.major.enabled||this._unit==="year"?void 0:Hk(this._unit),this.initOffsets(i),t.reverse&&a.reverse(),sp(this,a,this._majorUnit)}afterAutoSkip(){this.options.offsetAfterAutoskip&&this.initOffsets(this.ticks.map(t=>+t.value))}initOffsets(t=[]){let e=0,s=0,i,r;this.options.offset&&t.length&&(i=this.getDecimalForValue(t[0]),t.length===1?e=1-i:e=(this.getDecimalForValue(t[1])-i)/2,r=this.getDecimalForValue(t[t.length-1]),t.length===1?s=r:s=(r-this.getDecimalForValue(t[t.length-2]))/2);const o=t.length<3?.5:.25;e=ue(e,0,o),s=ue(s,0,o),this._offsets={start:e,end:s,factor:1/(e+1+s)}}_generate(){const t=this._adapter,e=this.min,s=this.max,i=this.options,r=i.time,o=r.unit||ep(r.minUnit,e,s,this._getLabelCapacity(e)),a=st(i.ticks.stepSize,1),l=o==="week"?r.isoWeekday:!1,u=ci(l)||l===!0,h={};let d=e,p,y;if(u&&(d=+t.startOf(d,"isoWeek",l)),d=+t.startOf(d,u?"day":o),t.diff(s,e,o)>1e5*a)throw new Error(e+" and "+s+" are too far apart with stepSize of "+a+" "+o);const E=i.ticks.source==="data"&&this.getDataTimestamps();for(p=d,y=0;p<s;p=+t.add(p,a,o),y++)np(h,p,E);return(p===s||i.bounds==="ticks"||y===1)&&np(h,p,E),Object.keys(h).sort(Zf).map(w=>+w)}getLabelForValue(t){const e=this._adapter,s=this.options.time;return s.tooltipFormat?e.format(t,s.tooltipFormat):e.format(t,s.displayFormats.datetime)}format(t,e){const i=this.options.time.displayFormats,r=this._unit,o=e||i[r];return this._adapter.format(t,o)}_tickFormatFunction(t,e,s,i){const r=this.options,o=r.ticks.callback;if(o)return Rt(o,[t,e,s],this);const a=r.time.displayFormats,l=this._unit,u=this._majorUnit,h=l&&a[l],d=u&&a[u],p=s[e],y=u&&d&&p&&p.major;return this._adapter.format(t,i||(y?d:h))}generateTickLabels(t){let e,s,i;for(e=0,s=t.length;e<s;++e)i=t[e],i.label=this._tickFormatFunction(i.value,e,t)}getDecimalForValue(t){return t===null?NaN:(t-this.min)/(this.max-this.min)}getPixelForValue(t){const e=this._offsets,s=this.getDecimalForValue(t);return this.getPixelForDecimal((e.start+s)*e.factor)}getValueForPixel(t){const e=this._offsets,s=this.getDecimalForPixel(t)/e.factor-e.end;return this.min+s*(this.max-this.min)}_getLabelSize(t){const e=this.options.ticks,s=this.ctx.measureText(t).width,i=gn(this.isHorizontal()?e.maxRotation:e.minRotation),r=Math.cos(i),o=Math.sin(i),a=this._resolveTickFontOptions(0).size;return{w:s*r+a*o,h:s*o+a*r}}_getLabelCapacity(t){const e=this.options.time,s=e.displayFormats,i=s[e.unit]||s.millisecond,r=this._tickFormatFunction(t,0,sp(this,[t],this._majorUnit),i),o=this._getLabelSize(r),a=Math.floor(this.isHorizontal()?this.width/o.w:this.height/o.h)-1;return a>0?a:1}getDataTimestamps(){let t=this._cache.data||[],e,s;if(t.length)return t;const i=this.getMatchingVisibleMetas();if(this._normalized&&i.length)return this._cache.data=i[0].controller.getAllParsedValues(this);for(e=0,s=i.length;e<s;++e)t=t.concat(i[e].controller.getAllParsedValues(this));return this._cache.data=this.normalize(t)}getLabelTimestamps(){const t=this._cache.labels||[];let e,s;if(t.length)return t;const i=this.getLabels();for(e=0,s=i.length;e<s;++e)t.push(tp(this,i[e]));return this._cache.labels=this._normalized?t:this.normalize(t)}normalize(t){return zm(t.sort(Zf))}}$(fa,"id","time"),$(fa,"defaults",{bounds:"data",adapters:{},time:{parser:!1,unit:!1,round:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{}},ticks:{source:"auto",callback:!1,major:{enabled:!1}}});function _o(n,t,e){let s=0,i=n.length-1,r,o,a,l;e?(t>=n[s].pos&&t<=n[i].pos&&({lo:s,hi:i}=gs(n,"pos",t)),{pos:r,time:a}=n[s],{pos:o,time:l}=n[i]):(t>=n[s].time&&t<=n[i].time&&({lo:s,hi:i}=gs(n,"time",t)),{time:r,pos:a}=n[s],{time:o,pos:l}=n[i]);const u=o-r;return u?a+(l-a)*(t-r)/u:a}class ip extends fa{constructor(t){super(t),this._table=[],this._minPos=void 0,this._tableRange=void 0}initOffsets(){const t=this._getTimestampsForTable(),e=this._table=this.buildLookupTable(t);this._minPos=_o(e,this.min),this._tableRange=_o(e,this.max)-this._minPos,super.initOffsets(t)}buildLookupTable(t){const{min:e,max:s}=this,i=[],r=[];let o,a,l,u,h;for(o=0,a=t.length;o<a;++o)u=t[o],u>=e&&u<=s&&i.push(u);if(i.length<2)return[{time:e,pos:0},{time:s,pos:1}];for(o=0,a=i.length;o<a;++o)h=i[o+1],l=i[o-1],u=i[o],Math.round((h+l)/2)!==u&&r.push({time:u,pos:o/(a-1)});return r}_generate(){const t=this.min,e=this.max;let s=super.getDataTimestamps();return(!s.includes(t)||!s.length)&&s.splice(0,0,t),(!s.includes(e)||s.length===1)&&s.push(e),s.sort((i,r)=>i-r)}_getTimestampsForTable(){let t=this._cache.all||[];if(t.length)return t;const e=this.getDataTimestamps(),s=this.getLabelTimestamps();return e.length&&s.length?t=this.normalize(e.concat(s)):t=e.length?e:s,t=this._cache.all=t,t}getDecimalForValue(t){return(_o(this._table,t)-this._minPos)/this._tableRange}getValueForPixel(t){const e=this._offsets,s=this.getDecimalForPixel(t)/e.factor-e.end;return _o(this._table,s*this._tableRange+this._minPos,!0)}}$(ip,"id","timeseries"),$(ip,"defaults",fa.defaults);hn.register(Co,Ro,qi,Do,Bn,Vo,Lo,Gi,hc,dc,Tk,kk,Nk);const yo={};function Fr(n,t){const e=document.getElementById(n);if(!e)return null;yo[n]&&yo[n].destroy();const s=e.getContext("2d");return yo[n]=new hn(s,t),yo[n]}const rp="rgba(148, 163, 184, 0.08)",lr="#64748b",vs="Inter, sans-serif",be={x:{grid:{color:rp,drawBorder:!1},ticks:{color:lr,font:{family:vs,size:11}}},y:{grid:{color:rp,drawBorder:!1},ticks:{color:lr,font:{family:vs,size:11}}}},wn={legend:{display:!1},tooltip:{backgroundColor:"rgba(17, 24, 39, 0.95)",titleFont:{family:vs,size:12},bodyFont:{family:vs,size:12},padding:10,cornerRadius:8,borderColor:"rgba(148, 163, 184, 0.2)",borderWidth:1}};function qk(n){n.length&&Fr("chart-equity",{type:"line",data:{labels:n.map(t=>t.date),datasets:[{label:"Equity",data:n.map(t=>t.equity),borderColor:"#818cf8",backgroundColor:"rgba(129, 140, 248, 0.1)",fill:!0,borderWidth:2,tension:.3,pointRadius:0,pointHoverRadius:4,pointHoverBackgroundColor:"#818cf8"}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{...wn,tooltip:{...wn.tooltip,callbacks:{label:t=>`P&L: $${t.parsed.y.toFixed(2)}`}}},scales:{...be,y:{...be.y,ticks:{...be.y.ticks,callback:t=>"$"+t.toLocaleString()}}}}})}function Kk(n){n.length&&Fr("chart-daily",{type:"bar",data:{labels:n.map(t=>t.date),datasets:[{label:"P&L",data:n.map(t=>t.pnl),backgroundColor:n.map(t=>t.pnl>=0?"rgba(34, 197, 94, 0.7)":"rgba(239, 68, 68, 0.7)"),borderColor:n.map(t=>t.pnl>=0?"#22c55e":"#ef4444"),borderWidth:1,borderRadius:4}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{...wn,tooltip:{...wn.tooltip,callbacks:{label:t=>`P&L: $${t.parsed.y.toFixed(2)}`}}},scales:{...be,y:{...be.y,ticks:{...be.y.ticks,callback:t=>"$"+t.toLocaleString()}}}}})}function Gk(n){n.length&&Fr("chart-coins",{type:"bar",data:{labels:n.map(t=>t.coin),datasets:[{label:"P&L",data:n.map(t=>t.pnl),backgroundColor:n.map(t=>t.pnl>=0?"rgba(34, 197, 94, 0.7)":"rgba(239, 68, 68, 0.7)"),borderColor:n.map(t=>t.pnl>=0?"#22c55e":"#ef4444"),borderWidth:1,borderRadius:4}]},options:{indexAxis:"y",responsive:!0,maintainAspectRatio:!1,plugins:{...wn,tooltip:{...wn.tooltip,callbacks:{label:t=>`P&L: $${t.parsed.x.toFixed(2)}`}}},scales:{x:{...be.x,ticks:{...be.x.ticks,callback:t=>"$"+t.toLocaleString()}},y:be.y}}})}function Yk(n){n.length&&Fr("chart-strategies",{type:"bar",data:{labels:n.map(t=>t.strategy),datasets:[{label:"P&L",data:n.map(t=>t.pnl),backgroundColor:n.map(t=>t.pnl>=0?"rgba(34, 197, 94, 0.7)":"rgba(239, 68, 68, 0.7)"),borderColor:n.map(t=>t.pnl>=0?"#22c55e":"#ef4444"),borderWidth:1,borderRadius:4}]},options:{indexAxis:"y",responsive:!0,maintainAspectRatio:!1,plugins:wn,scales:{x:{...be.x,ticks:{...be.x.ticks,callback:t=>"$"+t.toLocaleString()}},y:be.y}}})}function Qk(n){if(!n.length)return;const t=n.filter(s=>s.isWin),e=n.filter(s=>!s.isWin);Fr("chart-maemfe",{type:"scatter",data:{datasets:[{label:"Wins",data:t.map(s=>({x:s.mae,y:s.mfe})),backgroundColor:"rgba(34, 197, 94, 0.6)",borderColor:"#22c55e",pointRadius:6,pointHoverRadius:8},{label:"Losses",data:e.map(s=>({x:s.mae,y:s.mfe})),backgroundColor:"rgba(239, 68, 68, 0.6)",borderColor:"#ef4444",pointRadius:6,pointHoverRadius:8}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{...wn,legend:{display:!0,labels:{color:lr,font:{family:vs}}},tooltip:{...wn.tooltip,callbacks:{label:s=>`MAE: ${s.parsed.x}% | MFE: ${s.parsed.y}%`}}},scales:{x:{...be.x,title:{display:!0,text:"MAE%",color:lr,font:{family:vs}}},y:{...be.y,title:{display:!0,text:"MFE%",color:lr,font:{family:vs}}}}}})}function Xk(n,t,e,s,i){requestAnimationFrame(()=>{qk(n),Kk(t),Gk(e),Yk(s),Qk(i)})}function Jk(n,t,e){t.innerHTML=`
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
  `,n.classList.remove("hidden");let s=[];const i=()=>{n.classList.add("hidden")};t.querySelector("#modal-close").addEventListener("click",i),t.querySelector("#modal-cancel").addEventListener("click",i),n.addEventListener("click",d=>{d.target===n&&i()});const r=t.querySelector("#upload-zone"),o=t.querySelector("#csv-input"),a=t.querySelector("#upload-status"),l=t.querySelector("#upload-preview"),u=t.querySelector("#modal-import");r.addEventListener("click",()=>o.click()),r.addEventListener("dragover",d=>{d.preventDefault(),r.classList.add("drag-over")}),r.addEventListener("dragleave",()=>r.classList.remove("drag-over")),r.addEventListener("drop",d=>{d.preventDefault(),r.classList.remove("drag-over"),d.dataTransfer.files.length&&h(d.dataTransfer.files[0])}),o.addEventListener("change",d=>{d.target.files.length&&h(d.target.files[0])});async function h(d){if(!d.name.endsWith(".csv")){a.innerHTML='<span class="text-loss">❌ File must be a .csv</span>';return}a.innerHTML='<span class="text-muted">⏳ Parsing...</span>';try{s=await NI(d),a.innerHTML=`<span class="text-profit">✅ ${s.length} trades found</span>`;const p=s.slice(0,5);l.innerHTML=`
        <div style="font-size:0.8rem; color: var(--text-muted); margin-bottom:0.5rem">Preview (primele ${Math.min(5,s.length)}):</div>
        <div class="table-container" style="max-height:200px; overflow-y:auto">
          <table class="data-table">
            <thead>
              <tr><th>Date</th><th>Coin</th><th>Dir</th><th>Price</th><th>P&L</th></tr>
            </thead>
            <tbody>
              ${p.map(y=>`
                <tr>
                  <td>${new Date(y.time).toLocaleString("en-US")}</td>
                  <td class="cell-coin">${y.coin}</td>
                  <td><span class="cell-dir ${y.direction==="Long"?"long":"short"}">${y.direction}</span></td>
                  <td>$${y.price.toFixed(2)}</td>
                  <td class="${y.closedPnl>=0?"cell-profit":"cell-loss"}">${y.closedPnl>=0?"+":""}$${y.closedPnl.toFixed(2)}</td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      `,u.classList.remove("hidden")}catch(p){a.innerHTML=`<span class="text-loss">❌ Eroare la parsare: ${p.message}</span>`,console.error(p)}}u.addEventListener("click",()=>{s.length>0&&(e(s),i())})}function Zk(n,t){if(n.length===0){t.innerHTML=`
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
    `;return}const e=WI(n),s=qI(n),i=KI(n);t.innerHTML=`
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
        ${Object.keys(s).length===0?'<p class="text-muted" style="padding:1rem">Add strategies to your trades to see the analysis.</p>':Cl(s)}
      </div>

      <!-- Per Risk -->
      <div class="card animate-in">
        <div class="chart-card-title">⚡ Performance per Risk Level</div>
        ${Object.keys(i).length===0?'<p class="text-muted" style="padding:1rem">Add risk levels to your trades to see the analysis.</p>':Cl(i)}
      </div>

      <!-- Per Coin -->
      <div class="card animate-in">
        <div class="chart-card-title">🪙 Performance per Coin</div>
        ${Cl(e)}
      </div>

      <!-- Top/Bottom trades -->
      <div class="card animate-in">
        <div class="chart-card-title">🏆 Top 5 Trades</div>
        ${op(n,"top")}
      </div>

      <div class="card animate-in">
        <div class="chart-card-title">💀 Worst 5 Trades</div>
        ${op(n,"bottom")}
      </div>

      <!-- Key Insights -->
      <div class="card animate-in">
        <div class="chart-card-title">💡 Insights</div>
        ${tR(n,s,i,e)}
      </div>
    </div>
  `}function Cl(n){const t=Object.entries(n);return t.length===0?'<p class="text-muted">No data.</p>':`
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
            <td class="${s.totalPnl>=0?"text-profit":"text-loss"} fw-bold">${qt(s.totalPnl)}</td>
            <td class="${s.winRate>=50?"text-profit":"text-loss"}">${qs(s.winRate)}</td>
            <td>${s.profitFactor===1/0?"∞":s.profitFactor.toFixed(2)}</td>
            <td class="text-profit">${qt(s.avgWin)}</td>
            <td class="text-loss">${qt(-s.avgLoss)}</td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  `}function op(n,t){return`
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
            <td class="${r.closedPnl>=0?"text-profit":"text-loss"} fw-bold">${qt(r.closedPnl)}</td>
            <td>${r.strategy?`<span class="strategy-badge">${r.strategy}</span>`:"-"}</td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  `}function tR(n,t,e,s){const i=[],r=Object.entries(s||{});if(r.length>0){const y=r.reduce((w,I)=>w[1].totalPnl>I[1].totalPnl?w:I),E=r.reduce((w,I)=>w[1].totalPnl<I[1].totalPnl?w:I);i.push(`🪙 <strong>Most profitable coin</strong>: ${y[0]} (${qt(y[1].totalPnl)}, ${qs(y[1].winRate)} win rate, ${y[1].closingTrades} trades)`),E[0]!==y[0]&&i.push(`📉 <strong>Weakest coin</strong>: ${E[0]} (${qt(E[1].totalPnl)}, ${qs(E[1].winRate)} win rate, ${E[1].closingTrades} trades)`)}const o=Object.entries(t);if(o.length>0){const y=o.reduce((w,I)=>w[1].totalPnl>I[1].totalPnl?w:I),E=o.reduce((w,I)=>w[1].totalPnl<I[1].totalPnl?w:I);i.push(`✅ <strong>Best strategy</strong>: ${y[0]} (${qt(y[1].totalPnl)}, ${qs(y[1].winRate)} win rate)`),E[0]!==y[0]&&i.push(`❌ <strong>Worst strategy</strong>: ${E[0]} (${qt(E[1].totalPnl)}, ${qs(E[1].winRate)} win rate)`)}const a=Object.entries(e);if(a.length>0){const y=a.reduce((E,w)=>E[1].profitFactor>w[1].profitFactor?E:w);i.push(`⚡ <strong>Best risk/reward ratio</strong>: ${y[0]} (PF: ${y[1].profitFactor===1/0?"∞":y[1].profitFactor.toFixed(2)})`)}const l=[...n].filter(y=>y.closedPnl!==0).sort((y,E)=>y.time.localeCompare(E.time));let u=0,h=0,d=0,p=0;return l.forEach(y=>{y.closedPnl>0?(d++,p=0,u=Math.max(u,d)):(p++,d=0,h=Math.max(h,p))}),i.push(`🔥 <strong>Max win streak</strong>: ${u} consecutive trades`),i.push(`💀 <strong>Max loss streak</strong>: ${h} consecutive trades`),`
    <div style="display:flex; flex-direction:column; gap:0.75rem; padding:0.5rem 0">
      ${i.map(y=>`<div style="font-size:0.9rem; line-height:1.5">${y}</div>`).join("")}
    </div>
  `}function eR(n,t){const e=JI(n);if(n.length===0){t.innerHTML=`
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
      ${l.map(h=>nR(h,e,a)).join("")}
    </div>
  `,t.querySelectorAll(".calendar-cell.has-data").forEach(h=>{h.style.cursor="pointer",h.addEventListener("click",()=>{const d=h.dataset.date;d&&sR(d,n)})})}function nR(n,t,e){const s=n.getFullYear(),i=n.getMonth(),r=n.toLocaleDateString("en-US",{month:"long",year:"numeric"}),o=new Date(s,i,1),a=new Date(s,i+1,0),l=(o.getDay()+6)%7,u=["M","Tu","W","Th","F","Sa","Su"];let h="";h+=u.map(d=>`<div class="calendar-header-cell">${d}</div>`).join("");for(let d=0;d<l;d++)h+='<div class="calendar-cell empty"></div>';for(let d=1;d<=a.getDate();d++){const p=`${s}-${String(i+1).padStart(2,"0")}-${String(d).padStart(2,"0")}`,y=t[p];if(y){const E=iR(y.pnl,e),w=y.pnl>=0?`cal-profit-${E}`:`cal-loss-${E}`;h+=`
        <div class="calendar-cell has-data ${w}" data-date="${p}" title="${p}: ${qt(y.pnl)} (${y.trades} trades)">
          <span class="calendar-day">${d}</span>
          <span class="calendar-pnl ${y.pnl>=0?"text-profit":"text-loss"}">${rR(y.pnl)}</span>
        </div>
      `}else h+=`
        <div class="calendar-cell">
          <span class="calendar-day">${d}</span>
        </div>
      `}return`
    <div class="calendar-month-header">${r}</div>
    <div class="calendar-grid">${h}</div>
  `}function sR(n,t,e){const s=t.filter(u=>!!(u.time&&u.time.slice(0,10)===n||u.exitTime&&u.exitTime.slice(0,10)===n)),i=[];s.forEach(u=>{const h=u.closedPnl>0?"cell-profit":u.closedPnl<0?"cell-loss":"",d=u.direction==="Long"?"long":"short",p=u.status==="Completed";i.push(`
      <tr>
        <td>${new Date(u.time).toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit"})}</td>
        <td class="cell-coin">${u.coin}</td>
        <td><span class="cell-dir ${d}">${u.direction}</span></td>
        <td><span class="status-badge ${p?"status-completed":"status-active"}" style="font-size:0.7rem">${p?"✓ Completed":"Active"}</span></td>
        <td>$${(u.entryPrice||0).toLocaleString("en-US",{minimumFractionDigits:2})}</td>
        <td>${u.size}</td>
        <td class="${h}" style="font-weight:600">${p?qt(u.closedPnl):'<span class="text-muted">—</span>'}</td>
        <td>${u.strategy?`<span class="strategy-badge">${u.strategy}</span>`:""}</td>
      </tr>
    `)});const r=s.reduce((u,h)=>u+(h.closedPnl||0),0),o=r>=0?"cell-profit":"cell-loss",a=new Date(n).toLocaleDateString("en-US",{weekday:"long",day:"numeric",month:"long",year:"numeric"}),l=document.createElement("div");l.style.cssText="position:fixed; inset:0; background:rgba(0,0,0,0.5); z-index:500; display:flex; align-items:center; justify-content:center; padding:1rem;",l.innerHTML=`
        <div style="background:var(--bg-card); border-radius:var(--radius-lg); padding:1.5rem; width:700px; max-width:95vw; border:1px solid var(--border-medium); max-height:85vh; overflow-y:auto;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1rem;">
                <div>
                    <h3 style="margin:0; font-size:1.1rem;">📅 ${a}</h3>
                    <p style="margin:0.25rem 0 0; font-size:0.85rem; color:var(--text-muted);">${s.length} trades • Total: <strong class="${o}">${qt(r)}</strong></p>
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
    `,document.body.appendChild(l),l.querySelector("#day-detail-close").addEventListener("click",()=>l.remove()),l.addEventListener("click",u=>{u.target===l&&l.remove()})}function iR(n,t){const e=Math.abs(n)/t;return e<.15?1:e<.35?2:e<.65?3:4}function rR(n){return Math.abs(n)>=1e3?(n>=0?"+":"")+(n/1e3).toFixed(1)+"k":(n>=0?"+":"")+n.toFixed(0)}let xt=[],pa="dashboard";async function ga(n){Da(n);const t=document.getElementById("sync-status");t&&(t.textContent="☁️ Syncing...");try{await iu(),t&&(t.textContent="☁️ Synced")}catch(e){console.warn("Cloud sync failed:",e),t&&(t.textContent="⚠️ Offline")}}const Ws=document.getElementById("main-content"),A_=document.getElementById("modal-overlay"),P_=document.getElementById("modal-container");document.querySelectorAll(".nav-link").forEach(n=>{n.addEventListener("click",t=>{t.preventDefault();const e=n.dataset.page;e&&No(e)})});function No(n,t=!0){var e;pa=n,document.querySelectorAll(".nav-link").forEach(s=>s.classList.remove("active")),(e=document.querySelector(`[data-page="${n}"]`))==null||e.classList.add("active"),t&&history.pushState({page:n},"",`#${n}`),ks()}window.addEventListener("popstate",n=>{if(n.state&&n.state.page==="trade-detail"&&n.state.tradeId){const t=xt.find(e=>e.id===n.state.tradeId);t?k_(t,!1):No("trades",!1)}else n.state&&n.state.page?No(n.state.page,!1):No("dashboard",!1)});history.replaceState({page:pa},"",`#${pa}`);function ks(){if(!xI()){Ws.innerHTML=`
        <div class="empty-state" style="margin-top:4rem;">
          <div class="empty-state-icon" style="font-size:3rem;">🔐</div>
          <h3 class="empty-state-title">Welcome to CryptoJournal</h3>
          <p class="empty-state-text">Sign in with Google to access your trading journal.<br>Your data is synced securely in the cloud.</p>
        </div>
      `;return}switch(pa){case"dashboard":if(tS(xt,Ws),xt.length>0){const n=GI(xt),t=au(xt),e=YI(xt),s=QI(xt),i=XI(xt);Xk(n,t,e,s,i)}break;case"trades":La(xt,Ws,k_);break;case"insights":Zk(xt,Ws);break;case"calendar":eR(xt,Ws);break}}function k_(n,t=!0){t&&history.pushState({page:"trade-detail",tradeId:n.id},"",`#trade/${n.id}`),pS(n,Ws,()=>{history.back()},(e,s)=>{xt=xt.map(i=>i.id===e?{...i,...s}:i),ga(xt)},e=>{xt=xt.filter(s=>s.id!==e),ga(xt)})}function oR(n){xt=jI(xt,n),ga(xt),ks()}function aR(n){xt.push(n),ga(xt),ks()}document.getElementById("btn-import-csv").addEventListener("click",()=>{Jk(A_,P_,oR)});document.getElementById("btn-add-trade").addEventListener("click",()=>{dS(A_,P_,aR)});document.getElementById("btn-export-data").addEventListener("click",async()=>{try{const n=await RI(),t=JSON.stringify(n,null,2),e=new Blob([t],{type:"application/json"}),s=URL.createObjectURL(e),i=document.createElement("a");i.href=s,i.download=`crypto-journal-backup-${new Date().toISOString().slice(0,10)}.json`,i.click(),URL.revokeObjectURL(s)}catch(n){console.error("Export failed:",n),alert("Export error: "+n.message)}});document.getElementById("btn-import-data").addEventListener("click",()=>{const n=document.createElement("input");n.type="file",n.accept=".json",n.addEventListener("change",async t=>{var s;const e=t.target.files[0];if(e)try{const i=await e.text(),r=JSON.parse(i);await CI(r),xt=Ma(),ks(),alert(`✅ Backup imported! (${((s=r.trades)==null?void 0:s.length)||0} trades)`)}catch(i){console.error("Import failed:",i),alert("Import error: "+i.message)}}),n.click()});let Ce=[],Fe=0;function xr(){const n=document.getElementById("lightbox"),t=document.getElementById("lightbox-img"),e=document.getElementById("lightbox-counter"),s=document.getElementById("lightbox-prev"),i=document.getElementById("lightbox-next");t.src=Ce[Fe],e.textContent=Ce.length>1?`${Fe+1} / ${Ce.length}`:"",s.style.display=Ce.length>1?"flex":"none",i.style.display=Ce.length>1?"flex":"none",n.classList.remove("hidden")}window.openLightbox=function(n,t=0){Ce=n,Fe=t,xr()};document.getElementById("lightbox-close").addEventListener("click",()=>{document.getElementById("lightbox").classList.add("hidden")});document.getElementById("lightbox").addEventListener("click",n=>{n.target===n.currentTarget&&n.currentTarget.classList.add("hidden")});document.getElementById("lightbox-prev").addEventListener("click",n=>{n.stopPropagation(),Fe=(Fe-1+Ce.length)%Ce.length,xr()});document.getElementById("lightbox-next").addEventListener("click",n=>{n.stopPropagation(),Fe=(Fe+1)%Ce.length,xr()});document.addEventListener("keydown",n=>{const t=document.getElementById("lightbox");t.classList.contains("hidden")||(n.key==="ArrowLeft"&&(Fe=(Fe-1+Ce.length)%Ce.length,xr()),n.key==="ArrowRight"&&(Fe=(Fe+1)%Ce.length,xr()),n.key==="Escape"&&t.classList.add("hidden"))});const wu=document.getElementById("hamburger"),R_=document.getElementById("sidebar"),Tu=document.getElementById("sidebar-backdrop");function lR(){R_.classList.toggle("open"),wu.classList.toggle("open"),Tu.classList.toggle("open")}function Iu(){R_.classList.remove("open"),wu.classList.remove("open"),Tu.classList.remove("open")}wu.addEventListener("click",lR);Tu.addEventListener("click",Iu);document.querySelectorAll(".nav-link").forEach(n=>{n.addEventListener("click",Iu)});["btn-import-csv","btn-add-trade","btn-export-data","btn-import-data"].forEach(n=>{var t;(t=document.getElementById(n))==null||t.addEventListener("click",Iu)});const ap=document.getElementById("auth-logged-out"),lp=document.getElementById("auth-logged-in"),cR=document.getElementById("auth-avatar"),uR=document.getElementById("auth-name");document.getElementById("btn-google-login").addEventListener("click",async()=>{try{await bI()}catch(n){n.code!=="auth/popup-closed-by-user"&&(console.error("Login failed:",n),alert("Login failed: "+n.message))}});document.getElementById("btn-logout").addEventListener("click",async()=>{await vI()});EI(async n=>{if(n){Nd(n.uid),ap.classList.add("hidden"),lp.classList.remove("hidden"),cR.src=n.photoURL||"",uR.textContent=n.displayName||n.email;const t=document.getElementById("sync-status");t.textContent="☁️ Loading...";try{await AI()?(xt=HI(Ma()),ks(),t.textContent=`☁️ ${xt.length} trades synced`):(await iu(),t.textContent=`☁️ ${xt.length} trades synced`)}catch(e){console.error("[SYNC] Error:",e),t.textContent="⚠️ Sync error"}}else Nd(null),ap.classList.remove("hidden"),lp.classList.add("hidden"),Da([]),xt=[],ks()});ks();
