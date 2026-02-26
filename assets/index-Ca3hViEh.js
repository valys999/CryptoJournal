var Z_=Object.defineProperty;var ty=(n,t,e)=>t in n?Z_(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var z=(n,t,e)=>ty(n,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const ey=()=>{};var hh={};/**
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
 */const ap=function(n){const t=[];let e=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++i)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},ny=function(n){const t=[];let e=0,i=0;for(;e<n.length;){const s=n[e++];if(s<128)t[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=n[e++];t[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=n[e++],o=n[e++],a=n[e++],l=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;t[i++]=String.fromCharCode(55296+(l>>10)),t[i++]=String.fromCharCode(56320+(l&1023))}else{const r=n[e++],o=n[e++];t[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return t.join("")},lp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<n.length;s+=3){const r=n[s],o=s+1<n.length,a=o?n[s+1]:0,l=s+2<n.length,u=l?n[s+2]:0,h=r>>2,d=(r&3)<<4|a>>4;let p=(a&15)<<2|u>>6,y=u&63;l||(y=64,o||(p=64)),i.push(e[h],e[d],e[p],e[y])}return i.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(ap(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):ny(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<n.length;){const r=e[n.charAt(s++)],a=s<n.length?e[n.charAt(s)]:0;++s;const u=s<n.length?e[n.charAt(s)]:64;++s;const d=s<n.length?e[n.charAt(s)]:64;if(++s,r==null||a==null||u==null||d==null)throw new iy;const p=r<<2|a>>4;if(i.push(p),u!==64){const y=a<<4&240|u>>2;if(i.push(y),d!==64){const S=u<<6&192|d;i.push(S)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class iy extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const sy=function(n){const t=ap(n);return lp.encodeByteArray(t,!0)},Oo=function(n){return sy(n).replace(/\./g,"")},cp=function(n){try{return lp.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */const oy=()=>ry().__FIREBASE_DEFAULTS__,ay=()=>{if(typeof process>"u"||typeof hh>"u")return;const n=hh.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},ly=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&cp(n[1]);return t&&JSON.parse(t)},da=()=>{try{return ey()||oy()||ay()||ly()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},up=n=>{var t,e;return(e=(t=da())==null?void 0:t.emulatorHosts)==null?void 0:e[n]},cy=n=>{const t=up(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const i=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),i]:[t.substring(0,e),i]},hp=()=>{var n;return(n=da())==null?void 0:n.config},dp=n=>{var t;return(t=da())==null?void 0:t[`_${n}`]};/**
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
 */class uy{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,i)=>{e?this.reject(e):this.resolve(i),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,i))}}}/**
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
 */function us(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function fp(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function hy(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},i=t||"demo-project",s=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Oo(JSON.stringify(e)),Oo(JSON.stringify(o)),""].join(".")}const Gs={};function dy(){const n={prod:[],emulator:[]};for(const t of Object.keys(Gs))Gs[t]?n.emulator.push(t):n.prod.push(t);return n}function fy(n){let t=document.getElementById(n),e=!1;return t||(t=document.createElement("div"),t.setAttribute("id",n),e=!0),{created:e,element:t}}let dh=!1;function pp(n,t){if(typeof window>"u"||typeof document>"u"||!us(window.location.host)||Gs[n]===t||Gs[n]||dh)return;Gs[n]=t;function e(p){return`__firebase__banner__${p}`}const i="__firebase__banner",r=dy().prod.length>0;function o(){const p=document.getElementById(i);p&&p.remove()}function a(p){p.style.display="flex",p.style.background="#7faaf0",p.style.position="fixed",p.style.bottom="5px",p.style.left="5px",p.style.padding=".5em",p.style.borderRadius="5px",p.style.alignItems="center"}function l(p,y){p.setAttribute("width","24"),p.setAttribute("id",y),p.setAttribute("height","24"),p.setAttribute("viewBox","0 0 24 24"),p.setAttribute("fill","none"),p.style.marginLeft="-6px"}function u(){const p=document.createElement("span");return p.style.cursor="pointer",p.style.marginLeft="16px",p.style.fontSize="24px",p.innerHTML=" &times;",p.onclick=()=>{dh=!0,o()},p}function h(p,y){p.setAttribute("id",y),p.innerText="Learn more",p.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",p.setAttribute("target","__blank"),p.style.paddingLeft="5px",p.style.textDecoration="underline"}function d(){const p=fy(i),y=e("text"),S=document.getElementById(y)||document.createElement("span"),b=e("learnmore"),T=document.getElementById(b)||document.createElement("a"),P=e("preprendIcon"),k=document.getElementById(P)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(p.created){const C=p.element;a(C),h(T,b);const R=u();l(k,P),C.append(k,S,T,R),document.body.appendChild(C)}r?(S.innerText="Preview backend disconnected.",k.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,S.innerText="Preview backend running in this workspace."),S.setAttribute("id",y)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",d):d()}/**
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
 */function he(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function py(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(he())}function gy(){var t;const n=(t=da())==null?void 0:t.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function my(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function _y(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function yy(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function by(){const n=he();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function vy(){return!gy()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Ey(){try{return typeof indexedDB=="object"}catch{return!1}}function wy(){return new Promise((n,t)=>{try{let e=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(i),n(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var r;t(((r=s.error)==null?void 0:r.message)||"")}}catch(e){t(e)}})}/**
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
 */const Ty="FirebaseError";class En extends Error{constructor(t,e,i){super(e),this.code=t,this.customData=i,this.name=Ty,Object.setPrototypeOf(this,En.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Tr.prototype.create)}}class Tr{constructor(t,e,i){this.service=t,this.serviceName=e,this.errors=i}create(t,...e){const i=e[0]||{},s=`${this.service}/${t}`,r=this.errors[t],o=r?Iy(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new En(s,a,i)}}function Iy(n,t){return n.replace(Sy,(e,i)=>{const s=t[i];return s!=null?String(s):`<${i}?>`})}const Sy=/\{\$([^}]+)}/g;function xy(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}function bi(n,t){if(n===t)return!0;const e=Object.keys(n),i=Object.keys(t);for(const s of e){if(!i.includes(s))return!1;const r=n[s],o=t[s];if(fh(r)&&fh(o)){if(!bi(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!e.includes(s))return!1;return!0}function fh(n){return n!==null&&typeof n=="object"}/**
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
 */function Ir(n){const t=[];for(const[e,i]of Object.entries(n))Array.isArray(i)?i.forEach(s=>{t.push(encodeURIComponent(e)+"="+encodeURIComponent(s))}):t.push(encodeURIComponent(e)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}function Ay(n,t){const e=new Py(n,t);return e.subscribe.bind(e)}class Py{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then(()=>{t(this)}).catch(i=>{this.error(i)})}next(t){this.forEachObserver(e=>{e.next(t)})}error(t){this.forEachObserver(e=>{e.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,e,i){let s;if(t===void 0&&e===void 0&&i===void 0)throw new Error("Missing Observer.");ky(t,["next","error","complete"])?s=t:s={next:t,error:e,complete:i},s.next===void 0&&(s.next=Za),s.error===void 0&&(s.error=Za),s.complete===void 0&&(s.complete=Za);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{e(this.observers[t])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ky(n,t){if(typeof n!="object"||n===null)return!1;for(const e of t)if(e in n&&typeof n[e]=="function")return!0;return!1}function Za(){}/**
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
 */function Re(n){return n&&n._delegate?n._delegate:n}class vi{constructor(t,e,i){this.name=t,this.instanceFactory=e,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const li="[DEFAULT]";/**
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
 */class Ry{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const i=new uy;if(this.instancesDeferred.set(e,i),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){const e=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(t==null?void 0:t.optional)??!1;if(this.isInitialized(e)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:e})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Dy(t))try{this.getOrInitializeService({instanceIdentifier:li})}catch{}for(const[e,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(t=li){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=li){return this.instances.has(t)}getOptions(t=li){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,i=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:e});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(t,e){const i=this.normalizeInstanceIdentifier(e),s=this.onInitCallbacks.get(i)??new Set;s.add(t),this.onInitCallbacks.set(i,s);const r=this.instances.get(i);return r&&t(r,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,e){const i=this.onInitCallbacks.get(e);if(i)for(const s of i)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let i=this.instances.get(t);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Cy(t),options:e}),this.instances.set(t,i),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(i,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,i)}catch{}return i||null}normalizeInstanceIdentifier(t=li){return this.component?this.component.multipleInstances?t:li:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Cy(n){return n===li?void 0:n}function Dy(n){return n.instantiationMode==="EAGER"}/**
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
 */var lt;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(lt||(lt={}));const Oy={debug:lt.DEBUG,verbose:lt.VERBOSE,info:lt.INFO,warn:lt.WARN,error:lt.ERROR,silent:lt.SILENT},Ly=lt.INFO,Vy={[lt.DEBUG]:"log",[lt.VERBOSE]:"log",[lt.INFO]:"info",[lt.WARN]:"warn",[lt.ERROR]:"error"},Ny=(n,t,...e)=>{if(t<n.logLevel)return;const i=new Date().toISOString(),s=Vy[t];if(s)console[s](`[${i}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class uc{constructor(t){this.name=t,this._logLevel=Ly,this._logHandler=Ny,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in lt))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Oy[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,lt.DEBUG,...t),this._logHandler(this,lt.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,lt.VERBOSE,...t),this._logHandler(this,lt.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,lt.INFO,...t),this._logHandler(this,lt.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,lt.WARN,...t),this._logHandler(this,lt.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,lt.ERROR,...t),this._logHandler(this,lt.ERROR,...t)}}const Fy=(n,t)=>t.some(e=>n instanceof e);let ph,gh;function $y(){return ph||(ph=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Uy(){return gh||(gh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const gp=new WeakMap,Pl=new WeakMap,mp=new WeakMap,tl=new WeakMap,hc=new WeakMap;function zy(n){const t=new Promise((e,i)=>{const s=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{e(Un(n.result)),s()},o=()=>{i(n.error),s()};n.addEventListener("success",r),n.addEventListener("error",o)});return t.then(e=>{e instanceof IDBCursor&&gp.set(e,n)}).catch(()=>{}),hc.set(t,n),t}function By(n){if(Pl.has(n))return;const t=new Promise((e,i)=>{const s=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{e(),s()},o=()=>{i(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});Pl.set(n,t)}let kl={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return Pl.get(n);if(t==="objectStoreNames")return n.objectStoreNames||mp.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return Un(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function jy(n){kl=n(kl)}function Hy(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const i=n.call(el(this),t,...e);return mp.set(i,t.sort?t.sort():[t]),Un(i)}:Uy().includes(n)?function(...t){return n.apply(el(this),t),Un(gp.get(this))}:function(...t){return Un(n.apply(el(this),t))}}function Wy(n){return typeof n=="function"?Hy(n):(n instanceof IDBTransaction&&By(n),Fy(n,$y())?new Proxy(n,kl):n)}function Un(n){if(n instanceof IDBRequest)return zy(n);if(tl.has(n))return tl.get(n);const t=Wy(n);return t!==n&&(tl.set(n,t),hc.set(t,n)),t}const el=n=>hc.get(n);function qy(n,t,{blocked:e,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(n,t),a=Un(o);return i&&o.addEventListener("upgradeneeded",l=>{i(Un(o.result),l.oldVersion,l.newVersion,Un(o.transaction),l)}),e&&o.addEventListener("blocked",l=>e(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),s&&l.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const Ky=["get","getKey","getAll","getAllKeys","count"],Gy=["put","add","delete","clear"],nl=new Map;function mh(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(nl.get(t))return nl.get(t);const e=t.replace(/FromIndex$/,""),i=t!==e,s=Gy.includes(e);if(!(e in(i?IDBIndex:IDBObjectStore).prototype)||!(s||Ky.includes(e)))return;const r=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let u=l.store;return i&&(u=u.index(a.shift())),(await Promise.all([u[e](...a),s&&l.done]))[0]};return nl.set(t,r),r}jy(n=>({...n,get:(t,e,i)=>mh(t,e)||n.get(t,e,i),has:(t,e)=>!!mh(t,e)||n.has(t,e)}));/**
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
 */class Yy{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(Qy(e)){const i=e.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(e=>e).join(" ")}}function Qy(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Rl="@firebase/app",_h="0.14.8";/**
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
 */const mn=new uc("@firebase/app"),Xy="@firebase/app-compat",Jy="@firebase/analytics-compat",Zy="@firebase/analytics",tb="@firebase/app-check-compat",eb="@firebase/app-check",nb="@firebase/auth",ib="@firebase/auth-compat",sb="@firebase/database",rb="@firebase/data-connect",ob="@firebase/database-compat",ab="@firebase/functions",lb="@firebase/functions-compat",cb="@firebase/installations",ub="@firebase/installations-compat",hb="@firebase/messaging",db="@firebase/messaging-compat",fb="@firebase/performance",pb="@firebase/performance-compat",gb="@firebase/remote-config",mb="@firebase/remote-config-compat",_b="@firebase/storage",yb="@firebase/storage-compat",bb="@firebase/firestore",vb="@firebase/ai",Eb="@firebase/firestore-compat",wb="firebase",Tb="12.9.0";/**
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
 */const Cl="[DEFAULT]",Ib={[Rl]:"fire-core",[Xy]:"fire-core-compat",[Zy]:"fire-analytics",[Jy]:"fire-analytics-compat",[eb]:"fire-app-check",[tb]:"fire-app-check-compat",[nb]:"fire-auth",[ib]:"fire-auth-compat",[sb]:"fire-rtdb",[rb]:"fire-data-connect",[ob]:"fire-rtdb-compat",[ab]:"fire-fn",[lb]:"fire-fn-compat",[cb]:"fire-iid",[ub]:"fire-iid-compat",[hb]:"fire-fcm",[db]:"fire-fcm-compat",[fb]:"fire-perf",[pb]:"fire-perf-compat",[gb]:"fire-rc",[mb]:"fire-rc-compat",[_b]:"fire-gcs",[yb]:"fire-gcs-compat",[bb]:"fire-fst",[Eb]:"fire-fst-compat",[vb]:"fire-vertex","fire-js":"fire-js",[wb]:"fire-js-all"};/**
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
 */const Lo=new Map,Sb=new Map,Dl=new Map;function yh(n,t){try{n.container.addComponent(t)}catch(e){mn.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function ts(n){const t=n.name;if(Dl.has(t))return mn.debug(`There were multiple attempts to register component ${t}.`),!1;Dl.set(t,n);for(const e of Lo.values())yh(e,n);for(const e of Sb.values())yh(e,n);return!0}function dc(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function Me(n){return n==null?!1:n.settings!==void 0}/**
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
 */const xb={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},zn=new Tr("app","Firebase",xb);/**
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
 */class Ab{constructor(t,e,i){this._isDeleted=!1,this._options={...t},this._config={...e},this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new vi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw zn.create("app-deleted",{appName:this._name})}}/**
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
 */const hs=Tb;function _p(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const i={name:Cl,automaticDataCollectionEnabled:!0,...t},s=i.name;if(typeof s!="string"||!s)throw zn.create("bad-app-name",{appName:String(s)});if(e||(e=hp()),!e)throw zn.create("no-options");const r=Lo.get(s);if(r){if(bi(e,r.options)&&bi(i,r.config))return r;throw zn.create("duplicate-app",{appName:s})}const o=new My(s);for(const l of Dl.values())o.addComponent(l);const a=new Ab(e,i,o);return Lo.set(s,a),a}function yp(n=Cl){const t=Lo.get(n);if(!t&&n===Cl&&hp())return _p();if(!t)throw zn.create("no-app",{appName:n});return t}function Bn(n,t,e){let i=Ib[n]??n;e&&(i+=`-${e}`);const s=i.match(/\s|\//),r=t.match(/\s|\//);if(s||r){const o=[`Unable to register library "${i}" with version "${t}":`];s&&o.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&r&&o.push("and"),r&&o.push(`version name "${t}" contains illegal characters (whitespace or "/")`),mn.warn(o.join(" "));return}ts(new vi(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const Pb="firebase-heartbeat-database",kb=1,or="firebase-heartbeat-store";let il=null;function bp(){return il||(il=qy(Pb,kb,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(or)}catch(e){console.warn(e)}}}}).catch(n=>{throw zn.create("idb-open",{originalErrorMessage:n.message})})),il}async function Rb(n){try{const e=(await bp()).transaction(or),i=await e.objectStore(or).get(vp(n));return await e.done,i}catch(t){if(t instanceof En)mn.warn(t.message);else{const e=zn.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});mn.warn(e.message)}}}async function bh(n,t){try{const i=(await bp()).transaction(or,"readwrite");await i.objectStore(or).put(t,vp(n)),await i.done}catch(e){if(e instanceof En)mn.warn(e.message);else{const i=zn.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});mn.warn(i.message)}}}function vp(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Cb=1024,Db=30;class Mb{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Lb(e),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var t,e;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=vh();if(((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:s}),this._heartbeatsCache.heartbeats.length>Db){const o=Vb(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){mn.warn(i)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=vh(),{heartbeatsToSend:i,unsentEntries:s}=Ob(this._heartbeatsCache.heartbeats),r=Oo(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(e){return mn.warn(e),""}}}function vh(){return new Date().toISOString().substring(0,10)}function Ob(n,t=Cb){const e=[];let i=n.slice();for(const s of n){const r=e.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),Eh(e)>t){r.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),Eh(e)>t){e.pop();break}i=i.slice(1)}return{heartbeatsToSend:e,unsentEntries:i}}class Lb{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ey()?wy().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await Rb(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const i=await this.read();return bh(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const i=await this.read();return bh(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Eh(n){return Oo(JSON.stringify({version:2,heartbeats:n})).length}function Vb(n){if(n.length===0)return-1;let t=0,e=n[0].date;for(let i=1;i<n.length;i++)n[i].date<e&&(e=n[i].date,t=i);return t}/**
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
 */function Nb(n){ts(new vi("platform-logger",t=>new Yy(t),"PRIVATE")),ts(new vi("heartbeat",t=>new Mb(t),"PRIVATE")),Bn(Rl,_h,n),Bn(Rl,_h,"esm2020"),Bn("fire-js","")}Nb("");var Fb="firebase",$b="12.9.0";/**
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
 */Bn(Fb,$b,"app");function Ep(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Ub=Ep,wp=new Tr("auth","Firebase",Ep());/**
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
 */const Vo=new uc("@firebase/auth");function zb(n,...t){Vo.logLevel<=lt.WARN&&Vo.warn(`Auth (${hs}): ${n}`,...t)}function mo(n,...t){Vo.logLevel<=lt.ERROR&&Vo.error(`Auth (${hs}): ${n}`,...t)}/**
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
 */function Qe(n,...t){throw pc(n,...t)}function Ve(n,...t){return pc(n,...t)}function fc(n,t,e){const i={...Ub(),[t]:e};return new Tr("auth","Firebase",i).create(t,{appName:n.name})}function pi(n){return fc(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Bb(n,t,e){const i=e;if(!(t instanceof i))throw i.name!==t.constructor.name&&Qe(n,"argument-error"),fc(n,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function pc(n,...t){if(typeof n!="string"){const e=t[0],i=[...t.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(e,...i)}return wp.create(n,...t)}function Q(n,t,...e){if(!n)throw pc(t,...e)}function hn(n){const t="INTERNAL ASSERTION FAILED: "+n;throw mo(t),new Error(t)}function _n(n,t){n||hn(t)}/**
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
 */function Ml(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function jb(){return wh()==="http:"||wh()==="https:"}function wh(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
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
 */class Sr{constructor(t,e){this.shortDelay=t,this.longDelay=e,_n(e>t,"Short delay should be less than long delay!"),this.isMobile=py()||yy()}get(){return Hb()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function gc(n,t){_n(n.emulator,"Emulator should always be set here");const{url:e}=n.emulator;return t?`${e}${t.startsWith("/")?t.slice(1):t}`:e}/**
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
 */class Tp{static initialize(t,e,i){this.fetchImpl=t,e&&(this.headersImpl=e),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;hn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;hn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;hn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Kb=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Gb=new Sr(3e4,6e4);function mc(n,t){return n.tenantId&&!t.tenantId?{...t,tenantId:n.tenantId}:t}async function ds(n,t,e,i,s={}){return Ip(n,s,async()=>{let r={},o={};i&&(t==="GET"?o=i:r={body:JSON.stringify(i)});const a=Ir({key:n.config.apiKey,...o}).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const u={method:t,headers:l,...r};return my()||(u.referrerPolicy="no-referrer"),n.emulatorConfig&&us(n.emulatorConfig.host)&&(u.credentials="include"),Tp.fetch()(await Sp(n,n.config.apiHost,e,a),u)})}async function Ip(n,t,e){n._canInitEmulator=!1;const i={...qb,...t};try{const s=new Qb(n),r=await Promise.race([e(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Gr(n,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Gr(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Gr(n,"email-already-in-use",o);if(l==="USER_DISABLED")throw Gr(n,"user-disabled",o);const h=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw fc(n,h,u);Qe(n,h)}}catch(s){if(s instanceof En)throw s;Qe(n,"network-request-failed",{message:String(s)})}}async function Yb(n,t,e,i,s={}){const r=await ds(n,t,e,i,s);return"mfaPendingCredential"in r&&Qe(n,"multi-factor-auth-required",{_serverResponse:r}),r}async function Sp(n,t,e,i){const s=`${t}${e}?${i}`,r=n,o=r.config.emulator?gc(n.config,s):`${n.config.apiScheme}://${s}`;return Kb.includes(e)&&(await r._persistenceManagerAvailable,r._getPersistenceType()==="COOKIE")?r._getPersistence()._getFinalTarget(o).toString():o}class Qb{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((e,i)=>{this.timer=setTimeout(()=>i(Ve(this.auth,"network-request-failed")),Gb.get())})}}function Gr(n,t,e){const i={appName:n.name};e.email&&(i.email=e.email),e.phoneNumber&&(i.phoneNumber=e.phoneNumber);const s=Ve(n,t,i);return s.customData._tokenResponse=e,s}/**
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
 */async function Xb(n,t){return ds(n,"POST","/v1/accounts:delete",t)}async function No(n,t){return ds(n,"POST","/v1/accounts:lookup",t)}/**
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
 */function Ys(n){if(n)try{const t=new Date(Number(n));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function Jb(n,t=!1){const e=Re(n),i=await e.getIdToken(t),s=_c(i);Q(s&&s.exp&&s.auth_time&&s.iat,e.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:Ys(sl(s.auth_time)),issuedAtTime:Ys(sl(s.iat)),expirationTime:Ys(sl(s.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function sl(n){return Number(n)*1e3}function _c(n){const[t,e,i]=n.split(".");if(t===void 0||e===void 0||i===void 0)return mo("JWT malformed, contained fewer than 3 sections"),null;try{const s=cp(e);return s?JSON.parse(s):(mo("Failed to decode base64 JWT payload"),null)}catch(s){return mo("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Th(n){const t=_c(n);return Q(t,"internal-error"),Q(typeof t.exp<"u","internal-error"),Q(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function ar(n,t,e=!1){if(e)return t;try{return await t}catch(i){throw i instanceof En&&Zb(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function Zb({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class tv{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){if(t){const e=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),e}else{this.errorBackoff=3e4;const i=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Ol{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ys(this.lastLoginAt),this.creationTime=Ys(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Fo(n){var d;const t=n.auth,e=await n.getIdToken(),i=await ar(n,No(t,{idToken:e}));Q(i==null?void 0:i.users.length,t,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const r=(d=s.providerUserInfo)!=null&&d.length?xp(s.providerUserInfo):[],o=nv(n.providerData,r),a=n.isAnonymous,l=!(n.email&&s.passwordHash)&&!(o!=null&&o.length),u=a?l:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new Ol(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(n,h)}async function ev(n){const t=Re(n);await Fo(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function nv(n,t){return[...n.filter(i=>!t.some(s=>s.providerId===i.providerId)),...t]}function xp(n){return n.map(({providerId:t,...e})=>({providerId:t,uid:e.rawId||"",displayName:e.displayName||null,email:e.email||null,phoneNumber:e.phoneNumber||null,photoURL:e.photoUrl||null}))}/**
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
 */async function iv(n,t){const e=await Ip(n,{},async()=>{const i=Ir({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:s,apiKey:r}=n.config,o=await Sp(n,s,"/v1/token",`key=${r}`),a=await n._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:a,body:i};return n.emulatorConfig&&us(n.emulatorConfig.host)&&(l.credentials="include"),Tp.fetch()(o,l)});return{accessToken:e.access_token,expiresIn:e.expires_in,refreshToken:e.refresh_token}}async function sv(n,t){return ds(n,"POST","/v2/accounts:revokeToken",mc(n,t))}/**
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
 */class qi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){Q(t.idToken,"internal-error"),Q(typeof t.idToken<"u","internal-error"),Q(typeof t.refreshToken<"u","internal-error");const e="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):Th(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}updateFromIdToken(t){Q(t.length!==0,"internal-error");const e=Th(t);this.updateTokensAndExpiration(t,null,e)}async getToken(t,e=!1){return!e&&this.accessToken&&!this.isExpired?this.accessToken:(Q(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:i,refreshToken:s,expiresIn:r}=await iv(t,e);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(t,e,i){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(t,e){const{refreshToken:i,accessToken:s,expirationTime:r}=e,o=new qi;return i&&(Q(typeof i=="string","internal-error",{appName:t}),o.refreshToken=i),s&&(Q(typeof s=="string","internal-error",{appName:t}),o.accessToken=s),r&&(Q(typeof r=="number","internal-error",{appName:t}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new qi,this.toJSON())}_performRefresh(){return hn("not implemented")}}/**
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
 */function kn(n,t){Q(typeof n=="string"||typeof n>"u","internal-error",{appName:t})}class Oe{constructor({uid:t,auth:e,stsTokenManager:i,...s}){this.providerId="firebase",this.proactiveRefresh=new tv(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=e,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Ol(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const e=await ar(this,this.stsTokenManager.getToken(this.auth,t));return Q(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return Jb(this,t)}reload(){return ev(this)}_assign(t){this!==t&&(Q(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(e=>({...e})),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const e=new Oe({...this,auth:t,stsTokenManager:this.stsTokenManager._clone()});return e.metadata._copy(this.metadata),e}_onReload(t){Q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let i=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),i=!0),e&&await Fo(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Me(this.auth.app))return Promise.reject(pi(this.auth));const t=await this.getIdToken();return await ar(this,Xb(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>({...t})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){const i=e.displayName??void 0,s=e.email??void 0,r=e.phoneNumber??void 0,o=e.photoURL??void 0,a=e.tenantId??void 0,l=e._redirectEventId??void 0,u=e.createdAt??void 0,h=e.lastLoginAt??void 0,{uid:d,emailVerified:p,isAnonymous:y,providerData:S,stsTokenManager:b}=e;Q(d&&b,t,"internal-error");const T=qi.fromJSON(this.name,b);Q(typeof d=="string",t,"internal-error"),kn(i,t.name),kn(s,t.name),Q(typeof p=="boolean",t,"internal-error"),Q(typeof y=="boolean",t,"internal-error"),kn(r,t.name),kn(o,t.name),kn(a,t.name),kn(l,t.name),kn(u,t.name),kn(h,t.name);const P=new Oe({uid:d,auth:t,email:s,emailVerified:p,displayName:i,isAnonymous:y,photoURL:o,phoneNumber:r,tenantId:a,stsTokenManager:T,createdAt:u,lastLoginAt:h});return S&&Array.isArray(S)&&(P.providerData=S.map(k=>({...k}))),l&&(P._redirectEventId=l),P}static async _fromIdTokenResponse(t,e,i=!1){const s=new qi;s.updateFromServerResponse(e);const r=new Oe({uid:e.localId,auth:t,stsTokenManager:s,isAnonymous:i});return await Fo(r),r}static async _fromGetAccountInfoResponse(t,e,i){const s=e.users[0];Q(s.localId!==void 0,"internal-error");const r=s.providerUserInfo!==void 0?xp(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(r!=null&&r.length),a=new qi;a.updateFromIdToken(i);const l=new Oe({uid:s.localId,auth:t,stsTokenManager:a,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:r,metadata:new Ol(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(r!=null&&r.length)};return Object.assign(l,u),l}}/**
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
 */const Ih=new Map;function dn(n){_n(n instanceof Function,"Expected a class definition");let t=Ih.get(n);return t?(_n(t instanceof n,"Instance stored in cache mismatched with class"),t):(t=new n,Ih.set(n,t),t)}/**
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
 */class Ap{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return e===void 0?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}Ap.type="NONE";const Sh=Ap;/**
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
 */function _o(n,t,e){return`firebase:${n}:${t}:${e}`}class Ki{constructor(t,e,i){this.persistence=t,this.auth=e,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=_o(this.userKey,s.apiKey,r),this.fullPersistenceKey=_o("persistence",s.apiKey,r),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if(typeof t=="string"){const e=await No(this.auth,{idToken:t}).catch(()=>{});return e?Oe._fromGetAccountInfoResponse(this.auth,e,t):null}return Oe._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,e)return this.setCurrentUser(e)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,i="authUser"){if(!e.length)return new Ki(dn(Sh),t,i);const s=(await Promise.all(e.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let r=s[0]||dn(Sh);const o=_o(i,t.config.apiKey,t.name);let a=null;for(const u of e)try{const h=await u._get(o);if(h){let d;if(typeof h=="string"){const p=await No(t,{idToken:h}).catch(()=>{});if(!p)break;d=await Oe._fromGetAccountInfoResponse(t,p,h)}else d=Oe._fromJSON(t,h);u!==r&&(a=d),r=u;break}}catch{}const l=s.filter(u=>u._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new Ki(r,t,i):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(e.map(async u=>{if(u!==r)try{await u._remove(o)}catch{}})),new Ki(r,t,i))}}/**
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
 */function xh(n){const t=n.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Cp(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Pp(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Mp(t))return"Blackberry";if(Op(t))return"Webos";if(kp(t))return"Safari";if((t.includes("chrome/")||Rp(t))&&!t.includes("edge/"))return"Chrome";if(Dp(t))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(e);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function Pp(n=he()){return/firefox\//i.test(n)}function kp(n=he()){const t=n.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Rp(n=he()){return/crios\//i.test(n)}function Cp(n=he()){return/iemobile/i.test(n)}function Dp(n=he()){return/android/i.test(n)}function Mp(n=he()){return/blackberry/i.test(n)}function Op(n=he()){return/webos/i.test(n)}function yc(n=he()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function rv(n=he()){var t;return yc(n)&&!!((t=window.navigator)!=null&&t.standalone)}function ov(){return by()&&document.documentMode===10}function Lp(n=he()){return yc(n)||Dp(n)||Op(n)||Mp(n)||/windows phone/i.test(n)||Cp(n)}/**
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
 */function Vp(n,t=[]){let e;switch(n){case"Browser":e=xh(he());break;case"Worker":e=`${xh(he())}-${n}`;break;default:e=n}const i=t.length?t.join(","):"FirebaseCore-web";return`${e}/JsCore/${hs}/${i}`}/**
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
 */class av{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,e){const i=r=>new Promise((o,a)=>{try{const l=t(r);o(l)}catch(l){a(l)}});i.onAbort=e,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const e=[];try{for(const i of this.queue)await i(t),i.onAbort&&e.push(i.onAbort)}catch(i){e.reverse();for(const s of e)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */async function lv(n,t={}){return ds(n,"GET","/v2/passwordPolicy",mc(n,t))}/**
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
 */const cv=6;class uv{constructor(t){var i;const e=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=e.minPasswordLength??cv,e.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=e.maxPasswordLength),e.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=e.containsLowercaseCharacter),e.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=e.containsUppercaseCharacter),e.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=e.containsNumericCharacter),e.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=e.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((i=t.allowedNonAlphanumericCharacters)==null?void 0:i.join(""))??"",this.forceUpgradeOnSignin=t.forceUpgradeOnSignin??!1,this.schemaVersion=t.schemaVersion}validatePassword(t){const e={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,e),this.validatePasswordCharacterOptions(t,e),e.isValid&&(e.isValid=e.meetsMinPasswordLength??!0),e.isValid&&(e.isValid=e.meetsMaxPasswordLength??!0),e.isValid&&(e.isValid=e.containsLowercaseLetter??!0),e.isValid&&(e.isValid=e.containsUppercaseLetter??!0),e.isValid&&(e.isValid=e.containsNumericCharacter??!0),e.isValid&&(e.isValid=e.containsNonAlphanumericCharacter??!0),e}validatePasswordLengthOptions(t,e){const i=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;i&&(e.meetsMinPasswordLength=t.length>=i),s&&(e.meetsMaxPasswordLength=t.length<=s)}validatePasswordCharacterOptions(t,e){this.updatePasswordCharacterOptionsStatuses(e,!1,!1,!1,!1);let i;for(let s=0;s<t.length;s++)i=t.charAt(s),this.updatePasswordCharacterOptionsStatuses(e,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(t,e,i,s,r){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=e)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=r))}}/**
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
 */class hv{constructor(t,e,i,s){this.app=t,this.heartbeatServiceProvider=e,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ah(this),this.idTokenSubscription=new Ah(this),this.beforeStateQueue=new av(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=wp,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(r=>this._resolvePersistenceManagerAvailable=r)}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=dn(e)),this._initializationPromise=this.queue(async()=>{var i,s,r;if(!this._deleted&&(this.persistenceManager=await Ki.create(this,t),(i=this._resolvePersistenceManagerAvailable)==null||i.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(e),this.lastNotifiedUid=((r=this.currentUser)==null?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const e=await No(this,{idToken:t}),i=await Oe._fromGetAccountInfoResponse(this,e,t);await this.directlySetCurrentUser(i)}catch(e){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",e),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var r;if(Me(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const e=await this.assertedPersistence.getCurrentUser();let i=e,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(r=this.redirectUser)==null?void 0:r._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(t);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=e,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await Fo(t)}catch(e){if((e==null?void 0:e.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=Wb()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(Me(this.app))return Promise.reject(pi(this));const e=t?Re(t):null;return e&&Q(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&Q(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return Me(this.app)?Promise.reject(pi(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return Me(this.app)?Promise.reject(pi(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(dn(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const e=this._getPasswordPolicyInternal();return e.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):e.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await lv(this),e=new uv(t);this.tenantId===null?this._projectPasswordPolicy=e:this._tenantPasswordPolicies[this.tenantId]=e}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new Tr("auth","Firebase",t())}onAuthStateChanged(t,e,i){return this.registerStateListener(this.authStateSubscription,t,e,i)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,i){return this.registerStateListener(this.idTokenSubscription,t,e,i)}authStateReady(){return new Promise((t,e)=>{if(this.currentUser)t();else{const i=this.onAuthStateChanged(()=>{i(),t()},e)}})}async revokeAccessToken(t){if(this.currentUser){const e=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:e};this.tenantId!=null&&(i.tenantId=this.tenantId),await sv(this,i)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)==null?void 0:t.toJSON()}}async _setRedirectUser(t,e){const i=await this.getOrInitRedirectPersistenceManager(e);return t===null?i.removeCurrentUser():i.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&dn(t)||this._popupRedirectResolver;Q(e,this,"argument-error"),this.redirectPersistenceManager=await Ki.create(this,[dn(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,i;return this._isInitialized&&await this.queue(async()=>{}),((e=this._currentUser)==null?void 0:e._redirectEventId)===t?this._currentUser:((i=this.redirectUser)==null?void 0:i._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const t=((e=this.currentUser)==null?void 0:e.uid)??null;this.lastNotifiedUid!==t&&(this.lastNotifiedUid=t,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,i,s){if(this._deleted)return()=>{};const r=typeof e=="function"?e:e.next.bind(e);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(Q(a,this,"internal-error"),a.then(()=>{o||r(this.currentUser)}),typeof e=="function"){const l=t.addObserver(e,i,s);return()=>{o=!0,l()}}else{const l=t.addObserver(e);return()=>{o=!0,l()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return Q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Vp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const e=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());e&&(t["X-Firebase-Client"]=e);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;if(Me(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:e.getToken());return t!=null&&t.error&&zb(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function fa(n){return Re(n)}class Ah{constructor(t){this.auth=t,this.observer=null,this.addObserver=Ay(e=>this.observer=e)}get next(){return Q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let bc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function dv(n){bc=n}function fv(n){return bc.loadJS(n)}function pv(){return bc.gapiScript}function gv(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
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
 */function mv(n,t){const e=dc(n,"auth");if(e.isInitialized()){const s=e.getImmediate(),r=e.getOptions();if(bi(r,t??{}))return s;Qe(s,"already-initialized")}return e.initialize({options:t})}function _v(n,t){const e=(t==null?void 0:t.persistence)||[],i=(Array.isArray(e)?e:[e]).map(dn);t!=null&&t.errorMap&&n._updateErrorMap(t.errorMap),n._initializeWithPersistence(i,t==null?void 0:t.popupRedirectResolver)}function yv(n,t,e){const i=fa(n);Q(/^https?:\/\//.test(t),i,"invalid-emulator-scheme");const s=!1,r=Np(t),{host:o,port:a}=bv(t),l=a===null?"":`:${a}`,u={url:`${r}//${o}${l}/`},h=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!i._canInitEmulator){Q(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),Q(bi(u,i.config.emulator)&&bi(h,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=u,i.emulatorConfig=h,i.settings.appVerificationDisabledForTesting=!0,us(o)?(fp(`${r}//${o}${l}`),pp("Auth",!0)):vv()}function Np(n){const t=n.indexOf(":");return t<0?"":n.substr(0,t+1)}function bv(n){const t=Np(n),e=/(\/\/)?([^?#/]+)/.exec(n.substr(t.length));if(!e)return{host:"",port:null};const i=e[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const r=s[1];return{host:r,port:Ph(i.substr(r.length+1))}}else{const[r,o]=i.split(":");return{host:r,port:Ph(o)}}}function Ph(n){if(!n)return null;const t=Number(n);return isNaN(t)?null:t}function vv(){function n(){const t=document.createElement("p"),e=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",e.position="fixed",e.width="100%",e.backgroundColor="#ffffff",e.border=".1em solid #000000",e.color="#b50000",e.bottom="0px",e.left="0px",e.margin="0px",e.zIndex="10000",e.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Fp{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return hn("not implemented")}_getIdTokenResponse(t){return hn("not implemented")}_linkToIdToken(t,e){return hn("not implemented")}_getReauthenticationResolver(t){return hn("not implemented")}}/**
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
 */async function Gi(n,t){return Yb(n,"POST","/v1/accounts:signInWithIdp",mc(n,t))}/**
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
 */const Ev="http://localhost";class Ei extends Fp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new Ei(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):Qe("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e=typeof t=="string"?JSON.parse(t):t,{providerId:i,signInMethod:s,...r}=e;if(!i||!s)return null;const o=new Ei(i,s);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(t){const e=this.buildRequest();return Gi(t,e)}_linkToIdToken(t,e){const i=this.buildRequest();return i.idToken=e,Gi(t,i)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,Gi(t,e)}buildRequest(){const t={requestUri:Ev,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e.id_token=this.idToken),this.accessToken&&(e.access_token=this.accessToken),this.secret&&(e.oauth_token_secret=this.secret),e.providerId=this.providerId,this.nonce&&!this.pendingToken&&(e.nonce=this.nonce),t.postBody=Ir(e)}return t}}/**
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
 */class vc{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class xr extends vc{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class Rn extends xr{constructor(){super("facebook.com")}static credential(t){return Ei._fromParams({providerId:Rn.PROVIDER_ID,signInMethod:Rn.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Rn.credentialFromTaggedObject(t)}static credentialFromError(t){return Rn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Rn.credential(t.oauthAccessToken)}catch{return null}}}Rn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Rn.PROVIDER_ID="facebook.com";/**
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
 */class un extends xr{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return Ei._fromParams({providerId:un.PROVIDER_ID,signInMethod:un.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return un.credentialFromTaggedObject(t)}static credentialFromError(t){return un.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:i}=t;if(!e&&!i)return null;try{return un.credential(e,i)}catch{return null}}}un.GOOGLE_SIGN_IN_METHOD="google.com";un.PROVIDER_ID="google.com";/**
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
 */class Cn extends xr{constructor(){super("github.com")}static credential(t){return Ei._fromParams({providerId:Cn.PROVIDER_ID,signInMethod:Cn.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Cn.credentialFromTaggedObject(t)}static credentialFromError(t){return Cn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Cn.credential(t.oauthAccessToken)}catch{return null}}}Cn.GITHUB_SIGN_IN_METHOD="github.com";Cn.PROVIDER_ID="github.com";/**
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
 */class Dn extends xr{constructor(){super("twitter.com")}static credential(t,e){return Ei._fromParams({providerId:Dn.PROVIDER_ID,signInMethod:Dn.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return Dn.credentialFromTaggedObject(t)}static credentialFromError(t){return Dn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:i}=t;if(!e||!i)return null;try{return Dn.credential(e,i)}catch{return null}}}Dn.TWITTER_SIGN_IN_METHOD="twitter.com";Dn.PROVIDER_ID="twitter.com";/**
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
 */class es{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,i,s=!1){const r=await Oe._fromIdTokenResponse(t,i,s),o=kh(i);return new es({user:r,providerId:o,_tokenResponse:i,operationType:e})}static async _forOperation(t,e,i){await t._updateTokensIfNecessary(i,!0);const s=kh(i);return new es({user:t,providerId:s,_tokenResponse:i,operationType:e})}}function kh(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class $o extends En{constructor(t,e,i,s){super(e.code,e.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,$o.prototype),this.customData={appName:t.name,tenantId:t.tenantId??void 0,_serverResponse:e.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(t,e,i,s){return new $o(t,e,i,s)}}function $p(n,t,e,i){return(t==="reauthenticate"?e._getReauthenticationResolver(n):e._getIdTokenResponse(n)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?$o._fromErrorAndOperation(n,r,t,i):r})}async function wv(n,t,e=!1){const i=await ar(n,t._linkToIdToken(n.auth,await n.getIdToken()),e);return es._forOperation(n,"link",i)}/**
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
 */async function Tv(n,t,e=!1){const{auth:i}=n;if(Me(i.app))return Promise.reject(pi(i));const s="reauthenticate";try{const r=await ar(n,$p(i,s,t,n),e);Q(r.idToken,i,"internal-error");const o=_c(r.idToken);Q(o,i,"internal-error");const{sub:a}=o;return Q(n.uid===a,i,"user-mismatch"),es._forOperation(n,s,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&Qe(i,"user-mismatch"),r}}/**
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
 */async function Iv(n,t,e=!1){if(Me(n.app))return Promise.reject(pi(n));const i="signIn",s=await $p(n,i,t),r=await es._fromIdTokenResponse(n,i,s);return e||await n._updateCurrentUser(r.user),r}function Sv(n,t,e,i){return Re(n).onIdTokenChanged(t,e,i)}function xv(n,t,e){return Re(n).beforeAuthStateChanged(t,e)}function Av(n,t,e,i){return Re(n).onAuthStateChanged(t,e,i)}function Pv(n){return Re(n).signOut()}const Uo="__sak";/**
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
 */class Up{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(Uo,"1"),this.storage.removeItem(Uo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const kv=1e3,Rv=10;class zp extends Up{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Lp(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const i=this.storage.getItem(e),s=this.localCache[e];i!==s&&t(e,s,i)}}onStorageEvent(t,e=!1){if(!t.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const i=t.key;e?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(i);!e&&this.localCache[i]===o||this.notifyListeners(i,o)},r=this.storage.getItem(i);ov()&&r!==t.newValue&&t.newValue!==t.oldValue?setTimeout(s,Rv):s()}notifyListeners(t,e){this.localCache[t]=e;const i=this.listeners[t];if(i)for(const s of Array.from(i))s(e&&JSON.parse(e))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,e,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:i}),!0)})},kv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}zp.type="LOCAL";const Cv=zp;/**
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
 */class Bp extends Up{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,e){}_removeListener(t,e){}}Bp.type="SESSION";const jp=Bp;/**
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
 */class pa{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find(s=>s.isListeningto(t));if(e)return e;const i=new pa(t);return this.receivers.push(i),i}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:i,eventType:s,data:r}=e.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;e.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const a=Array.from(o).map(async u=>u(e.origin,r)),l=await Dv(a);e.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:l})}_subscribe(t,e){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),(!e||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}pa.receivers=[];/**
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
 */function Ec(n="",t=10){let e="";for(let i=0;i<t;i++)e+=Math.floor(Math.random()*10);return n+e}/**
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
 */class Mv{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const u=Ec("",20);s.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},i);o={messageChannel:s,onMessage(d){const p=d;if(p.data.eventId===u)switch(p.data.status){case"ack":clearTimeout(h),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(p.data.response);break;default:clearTimeout(h),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:u,data:e},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function We(){return window}function Ov(n){We().location.href=n}/**
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
 */function Hp(){return typeof We().WorkerGlobalScope<"u"&&typeof We().importScripts=="function"}async function Lv(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Vv(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function Nv(){return Hp()?self:null}/**
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
 */const Wp="firebaseLocalStorageDb",Fv=1,zo="firebaseLocalStorage",qp="fbase_key";class Ar{constructor(t){this.request=t}toPromise(){return new Promise((t,e)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{e(this.request.error)})})}}function ga(n,t){return n.transaction([zo],t?"readwrite":"readonly").objectStore(zo)}function $v(){const n=indexedDB.deleteDatabase(Wp);return new Ar(n).toPromise()}function Ll(){const n=indexedDB.open(Wp,Fv);return new Promise((t,e)=>{n.addEventListener("error",()=>{e(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(zo,{keyPath:qp})}catch(s){e(s)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(zo)?t(i):(i.close(),await $v(),t(await Ll()))})})}async function Rh(n,t,e){const i=ga(n,!0).put({[qp]:t,value:e});return new Ar(i).toPromise()}async function Uv(n,t){const e=ga(n,!1).get(t),i=await new Ar(e).toPromise();return i===void 0?null:i.value}function Ch(n,t){const e=ga(n,!0).delete(t);return new Ar(e).toPromise()}const zv=800,Bv=3;class Kp{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ll(),this.db)}async _withRetries(t){let e=0;for(;;)try{const i=await this._openDb();return await t(i)}catch(i){if(e++>Bv)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Hp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=pa._getInstance(Nv()),this.receiver._subscribe("keyChanged",async(t,e)=>({keyProcessed:(await this._poll()).includes(e.key)})),this.receiver._subscribe("ping",async(t,e)=>["keyChanged"])}async initializeSender(){var e,i;if(this.activeServiceWorker=await Lv(),!this.activeServiceWorker)return;this.sender=new Mv(this.activeServiceWorker);const t=await this.sender._send("ping",{},800);t&&(e=t[0])!=null&&e.fulfilled&&(i=t[0])!=null&&i.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||Vv()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Ll();return await Rh(t,Uo,"1"),await Ch(t,Uo),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite(async()=>(await this._withRetries(i=>Rh(i,t,e)),this.localCache[t]=e,this.notifyServiceWorker(t)))}async _get(t){const e=await this._withRetries(i=>Uv(i,t));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(e=>Ch(e,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(s=>{const r=ga(s,!1).getAll();return new Ar(r).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const e=[],i=new Set;if(t.length!==0)for(const{fbase_key:s,value:r}of t)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),e.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),e.push(s));return e}notifyListeners(t,e){this.localCache[t]=e;const i=this.listeners[t];if(i)for(const s of Array.from(i))s(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),zv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Kp.type="LOCAL";const jv=Kp;new Sr(3e4,6e4);/**
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
 */function Gp(n,t){return t?dn(t):(Q(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class wc extends Fp{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Gi(t,this._buildIdpRequest())}_linkToIdToken(t,e){return Gi(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return Gi(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function Hv(n){return Iv(n.auth,new wc(n),n.bypassAuthState)}function Wv(n){const{auth:t,user:e}=n;return Q(e,t,"internal-error"),Tv(e,new wc(n),n.bypassAuthState)}async function qv(n){const{auth:t,user:e}=n;return Q(e,t,"internal-error"),wv(e,new wc(n),n.bypassAuthState)}/**
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
 */class Yp{constructor(t,e,i,s,r=!1){this.auth=t,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise(async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(t){const{urlResponse:e,sessionId:i,postBody:s,tenantId:r,error:o,type:a}=t;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:e,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return Hv;case"linkViaPopup":case"linkViaRedirect":return qv;case"reauthViaPopup":case"reauthViaRedirect":return Wv;default:Qe(this.auth,"internal-error")}}resolve(t){_n(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){_n(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Kv=new Sr(2e3,1e4);async function Gv(n,t,e){if(Me(n.app))return Promise.reject(Ve(n,"operation-not-supported-in-this-environment"));const i=fa(n);Bb(n,t,vc);const s=Gp(i,e);return new hi(i,"signInViaPopup",t,s).executeNotNull()}class hi extends Yp{constructor(t,e,i,s,r){super(t,e,s,r),this.provider=i,this.authWindow=null,this.pollId=null,hi.currentPopupAction&&hi.currentPopupAction.cancel(),hi.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return Q(t,this.auth,"internal-error"),t}async onExecution(){_n(this.filter.length===1,"Popup operations only handle one event");const t=Ec();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(Ve(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)==null?void 0:t.associatedEvent)||null}cancel(){this.reject(Ve(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,hi.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,i;if((i=(e=this.authWindow)==null?void 0:e.window)!=null&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ve(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,Kv.get())};t()}}hi.currentPopupAction=null;/**
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
 */const Yv="pendingRedirect",yo=new Map;class Qv extends Yp{constructor(t,e,i=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,i),this.eventId=null}async execute(){let t=yo.get(this.auth._key());if(!t){try{const i=await Xv(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(i)}catch(e){t=()=>Promise.reject(e)}yo.set(this.auth._key(),t)}return this.bypassAuthState||yo.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Xv(n,t){const e=t0(t),i=Zv(n);if(!await i._isAvailable())return!1;const s=await i._get(e)==="true";return await i._remove(e),s}function Jv(n,t){yo.set(n._key(),t)}function Zv(n){return dn(n._redirectPersistence)}function t0(n){return _o(Yv,n.config.apiKey,n.name)}async function e0(n,t,e=!1){if(Me(n.app))return Promise.reject(pi(n));const i=fa(n),s=Gp(i,t),o=await new Qv(i,s,e).execute();return o&&!e&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,t)),o}/**
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
 */const n0=600*1e3;class i0{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(t,i)&&(e=!0,this.sendToConsumer(t,i),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!s0(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var i;if(t.error&&!Qp(t)){const s=((i=t.error.code)==null?void 0:i.split("auth/")[1])||"internal-error";e.onError(Ve(this.auth,s))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const i=e.eventId===null||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&i}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=n0&&this.cachedEventUids.clear(),this.cachedEventUids.has(Dh(t))}saveEventToCache(t){this.cachedEventUids.add(Dh(t)),this.lastProcessedEventTime=Date.now()}}function Dh(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(t=>t).join("-")}function Qp({type:n,error:t}){return n==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function s0(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Qp(n);default:return!1}}/**
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
 */async function r0(n,t={}){return ds(n,"GET","/v1/projects",t)}/**
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
 */const o0=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,a0=/^https?/;async function l0(n){if(n.config.emulator)return;const{authorizedDomains:t}=await r0(n);for(const e of t)try{if(c0(e))return}catch{}Qe(n,"unauthorized-domain")}function c0(n){const t=Ml(),{protocol:e,hostname:i}=new URL(t);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&i===""?e==="chrome-extension:"&&n.replace("chrome-extension://","")===t.replace("chrome-extension://",""):e==="chrome-extension:"&&o.hostname===i}if(!a0.test(e))return!1;if(o0.test(n))return i===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
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
 */const u0=new Sr(3e4,6e4);function Mh(){const n=We().___jsl;if(n!=null&&n.H){for(const t of Object.keys(n.H))if(n.H[t].r=n.H[t].r||[],n.H[t].L=n.H[t].L||[],n.H[t].r=[...n.H[t].L],n.CP)for(let e=0;e<n.CP.length;e++)n.CP[e]=null}}function h0(n){return new Promise((t,e)=>{var s,r,o;function i(){Mh(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Mh(),e(Ve(n,"network-request-failed"))},timeout:u0.get()})}if((r=(s=We().gapi)==null?void 0:s.iframes)!=null&&r.Iframe)t(gapi.iframes.getContext());else if((o=We().gapi)!=null&&o.load)i();else{const a=gv("iframefcb");return We()[a]=()=>{gapi.load?i():e(Ve(n,"network-request-failed"))},fv(`${pv()}?onload=${a}`).catch(l=>e(l))}}).catch(t=>{throw bo=null,t})}let bo=null;function d0(n){return bo=bo||h0(n),bo}/**
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
 */const f0=new Sr(5e3,15e3),p0="__/auth/iframe",g0="emulator/auth/iframe",m0={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},_0=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function y0(n){const t=n.config;Q(t.authDomain,n,"auth-domain-config-required");const e=t.emulator?gc(t,g0):`https://${n.config.authDomain}/${p0}`,i={apiKey:t.apiKey,appName:n.name,v:hs},s=_0.get(n.config.apiHost);s&&(i.eid=s);const r=n._getFrameworks();return r.length&&(i.fw=r.join(",")),`${e}?${Ir(i).slice(1)}`}async function b0(n){const t=await d0(n),e=We().gapi;return Q(e,n,"internal-error"),t.open({where:document.body,url:y0(n),messageHandlersFilter:e.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:m0,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const o=Ve(n,"network-request-failed"),a=We().setTimeout(()=>{r(o)},f0.get());function l(){We().clearTimeout(a),s(i)}i.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const v0={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},E0=500,w0=600,T0="_blank",I0="http://localhost";class Oh{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function S0(n,t,e,i=E0,s=w0){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l={...v0,width:i.toString(),height:s.toString(),top:r,left:o},u=he().toLowerCase();e&&(a=Rp(u)?T0:e),Pp(u)&&(t=t||I0,l.scrollbars="yes");const h=Object.entries(l).reduce((p,[y,S])=>`${p}${y}=${S},`,"");if(rv(u)&&a!=="_self")return x0(t||"",a),new Oh(null);const d=window.open(t||"",a,h);Q(d,n,"popup-blocked");try{d.focus()}catch{}return new Oh(d)}function x0(n,t){const e=document.createElement("a");e.href=n,e.target=t;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),e.dispatchEvent(i)}/**
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
 */const A0="__/auth/handler",P0="emulator/auth/handler",k0=encodeURIComponent("fac");async function Lh(n,t,e,i,s,r){Q(n.config.authDomain,n,"auth-domain-config-required"),Q(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:e,redirectUrl:i,v:hs,eventId:s};if(t instanceof vc){t.setDefaultLanguage(n.languageCode),o.providerId=t.providerId||"",xy(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[h,d]of Object.entries({}))o[h]=d}if(t instanceof xr){const h=t.getScopes().filter(d=>d!=="");h.length>0&&(o.scopes=h.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const l=await n._getAppCheckToken(),u=l?`#${k0}=${encodeURIComponent(l)}`:"";return`${R0(n)}?${Ir(a).slice(1)}${u}`}function R0({config:n}){return n.emulator?gc(n,P0):`https://${n.authDomain}/${A0}`}/**
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
 */const rl="webStorageSupport";class C0{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=jp,this._completeRedirectFn=e0,this._overrideRedirectResult=Jv}async _openPopup(t,e,i,s){var o;_n((o=this.eventManagers[t._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const r=await Lh(t,e,i,Ml(),s);return S0(t,r,Ec())}async _openRedirect(t,e,i,s){await this._originValidation(t);const r=await Lh(t,e,i,Ml(),s);return Ov(r),new Promise(()=>{})}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:s,promise:r}=this.eventManagers[e];return s?Promise.resolve(s):(_n(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(t);return this.eventManagers[e]={promise:i},i.catch(()=>{delete this.eventManagers[e]}),i}async initAndGetManager(t){const e=await b0(t),i=new i0(t);return e.register("authEvent",s=>(Q(s==null?void 0:s.authEvent,t,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:i},this.iframes[t._key()]=e,i}_isIframeWebStorageSupported(t,e){this.iframes[t._key()].send(rl,{type:rl},s=>{var o;const r=(o=s==null?void 0:s[0])==null?void 0:o[rl];r!==void 0&&e(!!r),Qe(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=l0(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return Lp()||kp()||yc()}}const D0=C0;var Vh="@firebase/auth",Nh="1.12.0";/**
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
 */class M0{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)==null?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged(i=>{t((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){Q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function O0(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function L0(n){ts(new vi("auth",(t,{options:e})=>{const i=t.getProvider("app").getImmediate(),s=t.getProvider("heartbeat"),r=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;Q(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const l={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Vp(n)},u=new hv(i,s,r,l);return _v(u,e),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,i)=>{t.getProvider("auth-internal").initialize()})),ts(new vi("auth-internal",t=>{const e=fa(t.getProvider("auth").getImmediate());return(i=>new M0(i))(e)},"PRIVATE").setInstantiationMode("EXPLICIT")),Bn(Vh,Nh,O0(n)),Bn(Vh,Nh,"esm2020")}/**
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
 */const V0=300,N0=dp("authIdTokenMaxAge")||V0;let Fh=null;const F0=n=>async t=>{const e=t&&await t.getIdTokenResult(),i=e&&(new Date().getTime()-Date.parse(e.issuedAtTime))/1e3;if(i&&i>N0)return;const s=e==null?void 0:e.token;Fh!==s&&(Fh=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function $0(n=yp()){const t=dc(n,"auth");if(t.isInitialized())return t.getImmediate();const e=mv(n,{popupRedirectResolver:D0,persistence:[jv,Cv,jp]}),i=dp("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(i,location.origin);if(location.origin===r.origin){const o=F0(r.toString());xv(e,o,()=>o(e.currentUser)),Sv(e,a=>o(a))}}const s=up("auth");return s&&yv(e,`http://${s}`),e}function U0(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}dv({loadJS(n){return new Promise((t,e)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=t,i.onerror=s=>{const r=Ve("internal-error");r.customData=s,e(r)},i.type="text/javascript",i.charset="UTF-8",U0().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});L0("Browser");var $h=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var jn,Xp;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(E,g){function _(){}_.prototype=g.prototype,E.F=g.prototype,E.prototype=new _,E.prototype.constructor=E,E.D=function(v,I,A){for(var x=Array(arguments.length-2),G=2;G<arguments.length;G++)x[G-2]=arguments[G];return g.prototype[I].apply(v,x)}}function e(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}t(i,e),i.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(E,g,_){_||(_=0);const v=Array(16);if(typeof g=="string")for(var I=0;I<16;++I)v[I]=g.charCodeAt(_++)|g.charCodeAt(_++)<<8|g.charCodeAt(_++)<<16|g.charCodeAt(_++)<<24;else for(I=0;I<16;++I)v[I]=g[_++]|g[_++]<<8|g[_++]<<16|g[_++]<<24;g=E.g[0],_=E.g[1],I=E.g[2];let A=E.g[3],x;x=g+(A^_&(I^A))+v[0]+3614090360&4294967295,g=_+(x<<7&4294967295|x>>>25),x=A+(I^g&(_^I))+v[1]+3905402710&4294967295,A=g+(x<<12&4294967295|x>>>20),x=I+(_^A&(g^_))+v[2]+606105819&4294967295,I=A+(x<<17&4294967295|x>>>15),x=_+(g^I&(A^g))+v[3]+3250441966&4294967295,_=I+(x<<22&4294967295|x>>>10),x=g+(A^_&(I^A))+v[4]+4118548399&4294967295,g=_+(x<<7&4294967295|x>>>25),x=A+(I^g&(_^I))+v[5]+1200080426&4294967295,A=g+(x<<12&4294967295|x>>>20),x=I+(_^A&(g^_))+v[6]+2821735955&4294967295,I=A+(x<<17&4294967295|x>>>15),x=_+(g^I&(A^g))+v[7]+4249261313&4294967295,_=I+(x<<22&4294967295|x>>>10),x=g+(A^_&(I^A))+v[8]+1770035416&4294967295,g=_+(x<<7&4294967295|x>>>25),x=A+(I^g&(_^I))+v[9]+2336552879&4294967295,A=g+(x<<12&4294967295|x>>>20),x=I+(_^A&(g^_))+v[10]+4294925233&4294967295,I=A+(x<<17&4294967295|x>>>15),x=_+(g^I&(A^g))+v[11]+2304563134&4294967295,_=I+(x<<22&4294967295|x>>>10),x=g+(A^_&(I^A))+v[12]+1804603682&4294967295,g=_+(x<<7&4294967295|x>>>25),x=A+(I^g&(_^I))+v[13]+4254626195&4294967295,A=g+(x<<12&4294967295|x>>>20),x=I+(_^A&(g^_))+v[14]+2792965006&4294967295,I=A+(x<<17&4294967295|x>>>15),x=_+(g^I&(A^g))+v[15]+1236535329&4294967295,_=I+(x<<22&4294967295|x>>>10),x=g+(I^A&(_^I))+v[1]+4129170786&4294967295,g=_+(x<<5&4294967295|x>>>27),x=A+(_^I&(g^_))+v[6]+3225465664&4294967295,A=g+(x<<9&4294967295|x>>>23),x=I+(g^_&(A^g))+v[11]+643717713&4294967295,I=A+(x<<14&4294967295|x>>>18),x=_+(A^g&(I^A))+v[0]+3921069994&4294967295,_=I+(x<<20&4294967295|x>>>12),x=g+(I^A&(_^I))+v[5]+3593408605&4294967295,g=_+(x<<5&4294967295|x>>>27),x=A+(_^I&(g^_))+v[10]+38016083&4294967295,A=g+(x<<9&4294967295|x>>>23),x=I+(g^_&(A^g))+v[15]+3634488961&4294967295,I=A+(x<<14&4294967295|x>>>18),x=_+(A^g&(I^A))+v[4]+3889429448&4294967295,_=I+(x<<20&4294967295|x>>>12),x=g+(I^A&(_^I))+v[9]+568446438&4294967295,g=_+(x<<5&4294967295|x>>>27),x=A+(_^I&(g^_))+v[14]+3275163606&4294967295,A=g+(x<<9&4294967295|x>>>23),x=I+(g^_&(A^g))+v[3]+4107603335&4294967295,I=A+(x<<14&4294967295|x>>>18),x=_+(A^g&(I^A))+v[8]+1163531501&4294967295,_=I+(x<<20&4294967295|x>>>12),x=g+(I^A&(_^I))+v[13]+2850285829&4294967295,g=_+(x<<5&4294967295|x>>>27),x=A+(_^I&(g^_))+v[2]+4243563512&4294967295,A=g+(x<<9&4294967295|x>>>23),x=I+(g^_&(A^g))+v[7]+1735328473&4294967295,I=A+(x<<14&4294967295|x>>>18),x=_+(A^g&(I^A))+v[12]+2368359562&4294967295,_=I+(x<<20&4294967295|x>>>12),x=g+(_^I^A)+v[5]+4294588738&4294967295,g=_+(x<<4&4294967295|x>>>28),x=A+(g^_^I)+v[8]+2272392833&4294967295,A=g+(x<<11&4294967295|x>>>21),x=I+(A^g^_)+v[11]+1839030562&4294967295,I=A+(x<<16&4294967295|x>>>16),x=_+(I^A^g)+v[14]+4259657740&4294967295,_=I+(x<<23&4294967295|x>>>9),x=g+(_^I^A)+v[1]+2763975236&4294967295,g=_+(x<<4&4294967295|x>>>28),x=A+(g^_^I)+v[4]+1272893353&4294967295,A=g+(x<<11&4294967295|x>>>21),x=I+(A^g^_)+v[7]+4139469664&4294967295,I=A+(x<<16&4294967295|x>>>16),x=_+(I^A^g)+v[10]+3200236656&4294967295,_=I+(x<<23&4294967295|x>>>9),x=g+(_^I^A)+v[13]+681279174&4294967295,g=_+(x<<4&4294967295|x>>>28),x=A+(g^_^I)+v[0]+3936430074&4294967295,A=g+(x<<11&4294967295|x>>>21),x=I+(A^g^_)+v[3]+3572445317&4294967295,I=A+(x<<16&4294967295|x>>>16),x=_+(I^A^g)+v[6]+76029189&4294967295,_=I+(x<<23&4294967295|x>>>9),x=g+(_^I^A)+v[9]+3654602809&4294967295,g=_+(x<<4&4294967295|x>>>28),x=A+(g^_^I)+v[12]+3873151461&4294967295,A=g+(x<<11&4294967295|x>>>21),x=I+(A^g^_)+v[15]+530742520&4294967295,I=A+(x<<16&4294967295|x>>>16),x=_+(I^A^g)+v[2]+3299628645&4294967295,_=I+(x<<23&4294967295|x>>>9),x=g+(I^(_|~A))+v[0]+4096336452&4294967295,g=_+(x<<6&4294967295|x>>>26),x=A+(_^(g|~I))+v[7]+1126891415&4294967295,A=g+(x<<10&4294967295|x>>>22),x=I+(g^(A|~_))+v[14]+2878612391&4294967295,I=A+(x<<15&4294967295|x>>>17),x=_+(A^(I|~g))+v[5]+4237533241&4294967295,_=I+(x<<21&4294967295|x>>>11),x=g+(I^(_|~A))+v[12]+1700485571&4294967295,g=_+(x<<6&4294967295|x>>>26),x=A+(_^(g|~I))+v[3]+2399980690&4294967295,A=g+(x<<10&4294967295|x>>>22),x=I+(g^(A|~_))+v[10]+4293915773&4294967295,I=A+(x<<15&4294967295|x>>>17),x=_+(A^(I|~g))+v[1]+2240044497&4294967295,_=I+(x<<21&4294967295|x>>>11),x=g+(I^(_|~A))+v[8]+1873313359&4294967295,g=_+(x<<6&4294967295|x>>>26),x=A+(_^(g|~I))+v[15]+4264355552&4294967295,A=g+(x<<10&4294967295|x>>>22),x=I+(g^(A|~_))+v[6]+2734768916&4294967295,I=A+(x<<15&4294967295|x>>>17),x=_+(A^(I|~g))+v[13]+1309151649&4294967295,_=I+(x<<21&4294967295|x>>>11),x=g+(I^(_|~A))+v[4]+4149444226&4294967295,g=_+(x<<6&4294967295|x>>>26),x=A+(_^(g|~I))+v[11]+3174756917&4294967295,A=g+(x<<10&4294967295|x>>>22),x=I+(g^(A|~_))+v[2]+718787259&4294967295,I=A+(x<<15&4294967295|x>>>17),x=_+(A^(I|~g))+v[9]+3951481745&4294967295,E.g[0]=E.g[0]+g&4294967295,E.g[1]=E.g[1]+(I+(x<<21&4294967295|x>>>11))&4294967295,E.g[2]=E.g[2]+I&4294967295,E.g[3]=E.g[3]+A&4294967295}i.prototype.v=function(E,g){g===void 0&&(g=E.length);const _=g-this.blockSize,v=this.C;let I=this.h,A=0;for(;A<g;){if(I==0)for(;A<=_;)s(this,E,A),A+=this.blockSize;if(typeof E=="string"){for(;A<g;)if(v[I++]=E.charCodeAt(A++),I==this.blockSize){s(this,v),I=0;break}}else for(;A<g;)if(v[I++]=E[A++],I==this.blockSize){s(this,v),I=0;break}}this.h=I,this.o+=g},i.prototype.A=function(){var E=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);E[0]=128;for(var g=1;g<E.length-8;++g)E[g]=0;g=this.o*8;for(var _=E.length-8;_<E.length;++_)E[_]=g&255,g/=256;for(this.v(E),E=Array(16),g=0,_=0;_<4;++_)for(let v=0;v<32;v+=8)E[g++]=this.g[_]>>>v&255;return E};function r(E,g){var _=a;return Object.prototype.hasOwnProperty.call(_,E)?_[E]:_[E]=g(E)}function o(E,g){this.h=g;const _=[];let v=!0;for(let I=E.length-1;I>=0;I--){const A=E[I]|0;v&&A==g||(_[I]=A,v=!1)}this.g=_}var a={};function l(E){return-128<=E&&E<128?r(E,function(g){return new o([g|0],g<0?-1:0)}):new o([E|0],E<0?-1:0)}function u(E){if(isNaN(E)||!isFinite(E))return d;if(E<0)return T(u(-E));const g=[];let _=1;for(let v=0;E>=_;v++)g[v]=E/_|0,_*=4294967296;return new o(g,0)}function h(E,g){if(E.length==0)throw Error("number format error: empty string");if(g=g||10,g<2||36<g)throw Error("radix out of range: "+g);if(E.charAt(0)=="-")return T(h(E.substring(1),g));if(E.indexOf("-")>=0)throw Error('number format error: interior "-" character');const _=u(Math.pow(g,8));let v=d;for(let A=0;A<E.length;A+=8){var I=Math.min(8,E.length-A);const x=parseInt(E.substring(A,A+I),g);I<8?(I=u(Math.pow(g,I)),v=v.j(I).add(u(x))):(v=v.j(_),v=v.add(u(x)))}return v}var d=l(0),p=l(1),y=l(16777216);n=o.prototype,n.m=function(){if(b(this))return-T(this).m();let E=0,g=1;for(let _=0;_<this.g.length;_++){const v=this.i(_);E+=(v>=0?v:4294967296+v)*g,g*=4294967296}return E},n.toString=function(E){if(E=E||10,E<2||36<E)throw Error("radix out of range: "+E);if(S(this))return"0";if(b(this))return"-"+T(this).toString(E);const g=u(Math.pow(E,6));var _=this;let v="";for(;;){const I=R(_,g).g;_=P(_,I.j(g));let A=((_.g.length>0?_.g[0]:_.h)>>>0).toString(E);if(_=I,S(_))return A+v;for(;A.length<6;)A="0"+A;v=A+v}},n.i=function(E){return E<0?0:E<this.g.length?this.g[E]:this.h};function S(E){if(E.h!=0)return!1;for(let g=0;g<E.g.length;g++)if(E.g[g]!=0)return!1;return!0}function b(E){return E.h==-1}n.l=function(E){return E=P(this,E),b(E)?-1:S(E)?0:1};function T(E){const g=E.g.length,_=[];for(let v=0;v<g;v++)_[v]=~E.g[v];return new o(_,~E.h).add(p)}n.abs=function(){return b(this)?T(this):this},n.add=function(E){const g=Math.max(this.g.length,E.g.length),_=[];let v=0;for(let I=0;I<=g;I++){let A=v+(this.i(I)&65535)+(E.i(I)&65535),x=(A>>>16)+(this.i(I)>>>16)+(E.i(I)>>>16);v=x>>>16,A&=65535,x&=65535,_[I]=x<<16|A}return new o(_,_[_.length-1]&-2147483648?-1:0)};function P(E,g){return E.add(T(g))}n.j=function(E){if(S(this)||S(E))return d;if(b(this))return b(E)?T(this).j(T(E)):T(T(this).j(E));if(b(E))return T(this.j(T(E)));if(this.l(y)<0&&E.l(y)<0)return u(this.m()*E.m());const g=this.g.length+E.g.length,_=[];for(var v=0;v<2*g;v++)_[v]=0;for(v=0;v<this.g.length;v++)for(let I=0;I<E.g.length;I++){const A=this.i(v)>>>16,x=this.i(v)&65535,G=E.i(I)>>>16,q=E.i(I)&65535;_[2*v+2*I]+=x*q,k(_,2*v+2*I),_[2*v+2*I+1]+=A*q,k(_,2*v+2*I+1),_[2*v+2*I+1]+=x*G,k(_,2*v+2*I+1),_[2*v+2*I+2]+=A*G,k(_,2*v+2*I+2)}for(E=0;E<g;E++)_[E]=_[2*E+1]<<16|_[2*E];for(E=g;E<2*g;E++)_[E]=0;return new o(_,0)};function k(E,g){for(;(E[g]&65535)!=E[g];)E[g+1]+=E[g]>>>16,E[g]&=65535,g++}function C(E,g){this.g=E,this.h=g}function R(E,g){if(S(g))throw Error("division by zero");if(S(E))return new C(d,d);if(b(E))return g=R(T(E),g),new C(T(g.g),T(g.h));if(b(g))return g=R(E,T(g)),new C(T(g.g),g.h);if(E.g.length>30){if(b(E)||b(g))throw Error("slowDivide_ only works with positive integers.");for(var _=p,v=g;v.l(E)<=0;)_=M(_),v=M(v);var I=L(_,1),A=L(v,1);for(v=L(v,2),_=L(_,2);!S(v);){var x=A.add(v);x.l(E)<=0&&(I=I.add(_),A=x),v=L(v,1),_=L(_,1)}return g=P(E,I.j(g)),new C(I,g)}for(I=d;E.l(g)>=0;){for(_=Math.max(1,Math.floor(E.m()/g.m())),v=Math.ceil(Math.log(_)/Math.LN2),v=v<=48?1:Math.pow(2,v-48),A=u(_),x=A.j(g);b(x)||x.l(E)>0;)_-=v,A=u(_),x=A.j(g);S(A)&&(A=p),I=I.add(A),E=P(E,x)}return new C(I,E)}n.B=function(E){return R(this,E).h},n.and=function(E){const g=Math.max(this.g.length,E.g.length),_=[];for(let v=0;v<g;v++)_[v]=this.i(v)&E.i(v);return new o(_,this.h&E.h)},n.or=function(E){const g=Math.max(this.g.length,E.g.length),_=[];for(let v=0;v<g;v++)_[v]=this.i(v)|E.i(v);return new o(_,this.h|E.h)},n.xor=function(E){const g=Math.max(this.g.length,E.g.length),_=[];for(let v=0;v<g;v++)_[v]=this.i(v)^E.i(v);return new o(_,this.h^E.h)};function M(E){const g=E.g.length+1,_=[];for(let v=0;v<g;v++)_[v]=E.i(v)<<1|E.i(v-1)>>>31;return new o(_,E.h)}function L(E,g){const _=g>>5;g%=32;const v=E.g.length-_,I=[];for(let A=0;A<v;A++)I[A]=g>0?E.i(A+_)>>>g|E.i(A+_+1)<<32-g:E.i(A+_);return new o(I,E.h)}i.prototype.digest=i.prototype.A,i.prototype.reset=i.prototype.u,i.prototype.update=i.prototype.v,Xp=i,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=h,jn=o}).apply(typeof $h<"u"?$h:typeof self<"u"?self:typeof window<"u"?window:{});var Yr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Jp,$s,Zp,vo,Vl,tg,eg,ng;(function(){var n,t=Object.defineProperty;function e(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof Yr=="object"&&Yr];for(var f=0;f<c.length;++f){var m=c[f];if(m&&m.Math==Math)return m}throw Error("Cannot find global object")}var i=e(this);function s(c,f){if(f)t:{var m=i;c=c.split(".");for(var w=0;w<c.length-1;w++){var D=c[w];if(!(D in m))break t;m=m[D]}c=c[c.length-1],w=m[c],f=f(w),f!=w&&f!=null&&t(m,c,{configurable:!0,writable:!0,value:f})}}s("Symbol.dispose",function(c){return c||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(c){return c||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(c){return c||function(f){var m=[],w;for(w in f)Object.prototype.hasOwnProperty.call(f,w)&&m.push([w,f[w]]);return m}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var r=r||{},o=this||self;function a(c){var f=typeof c;return f=="object"&&c!=null||f=="function"}function l(c,f,m){return c.call.apply(c.bind,arguments)}function u(c,f,m){return u=l,u.apply(null,arguments)}function h(c,f){var m=Array.prototype.slice.call(arguments,1);return function(){var w=m.slice();return w.push.apply(w,arguments),c.apply(this,w)}}function d(c,f){function m(){}m.prototype=f.prototype,c.Z=f.prototype,c.prototype=new m,c.prototype.constructor=c,c.Ob=function(w,D,O){for(var F=Array(arguments.length-2),nt=2;nt<arguments.length;nt++)F[nt-2]=arguments[nt];return f.prototype[D].apply(w,F)}}var p=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?c=>c&&AsyncContext.Snapshot.wrap(c):c=>c;function y(c){const f=c.length;if(f>0){const m=Array(f);for(let w=0;w<f;w++)m[w]=c[w];return m}return[]}function S(c,f){for(let w=1;w<arguments.length;w++){const D=arguments[w];var m=typeof D;if(m=m!="object"?m:D?Array.isArray(D)?"array":m:"null",m=="array"||m=="object"&&typeof D.length=="number"){m=c.length||0;const O=D.length||0;c.length=m+O;for(let F=0;F<O;F++)c[m+F]=D[F]}else c.push(D)}}class b{constructor(f,m){this.i=f,this.j=m,this.h=0,this.g=null}get(){let f;return this.h>0?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function T(c){o.setTimeout(()=>{throw c},0)}function P(){var c=E;let f=null;return c.g&&(f=c.g,c.g=c.g.next,c.g||(c.h=null),f.next=null),f}class k{constructor(){this.h=this.g=null}add(f,m){const w=C.get();w.set(f,m),this.h?this.h.next=w:this.g=w,this.h=w}}var C=new b(()=>new R,c=>c.reset());class R{constructor(){this.next=this.g=this.h=null}set(f,m){this.h=f,this.g=m,this.next=null}reset(){this.next=this.g=this.h=null}}let M,L=!1,E=new k,g=()=>{const c=Promise.resolve(void 0);M=()=>{c.then(_)}};function _(){for(var c;c=P();){try{c.h.call(c.g)}catch(m){T(m)}var f=C;f.j(c),f.h<100&&(f.h++,c.next=f.g,f.g=c)}L=!1}function v(){this.u=this.u,this.C=this.C}v.prototype.u=!1,v.prototype.dispose=function(){this.u||(this.u=!0,this.N())},v.prototype[Symbol.dispose]=function(){this.dispose()},v.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function I(c,f){this.type=c,this.g=this.target=f,this.defaultPrevented=!1}I.prototype.h=function(){this.defaultPrevented=!0};var A=(function(){if(!o.addEventListener||!Object.defineProperty)return!1;var c=!1,f=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const m=()=>{};o.addEventListener("test",m,f),o.removeEventListener("test",m,f)}catch{}return c})();function x(c){return/^[\s\xa0]*$/.test(c)}function G(c,f){I.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c&&this.init(c,f)}d(G,I),G.prototype.init=function(c,f){const m=this.type=c.type,w=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;this.target=c.target||c.srcElement,this.g=f,f=c.relatedTarget,f||(m=="mouseover"?f=c.fromElement:m=="mouseout"&&(f=c.toElement)),this.relatedTarget=f,w?(this.clientX=w.clientX!==void 0?w.clientX:w.pageX,this.clientY=w.clientY!==void 0?w.clientY:w.pageY,this.screenX=w.screenX||0,this.screenY=w.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=c.pointerType,this.state=c.state,this.i=c,c.defaultPrevented&&G.Z.h.call(this)},G.prototype.h=function(){G.Z.h.call(this);const c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var q="closure_listenable_"+(Math.random()*1e6|0),st=0;function j(c,f,m,w,D){this.listener=c,this.proxy=null,this.src=f,this.type=m,this.capture=!!w,this.ha=D,this.key=++st,this.da=this.fa=!1}function rt(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function U(c,f,m){for(const w in c)f.call(m,c[w],w,c)}function Pt(c,f){for(const m in c)f.call(void 0,c[m],m,c)}function Y(c){const f={};for(const m in c)f[m]=c[m];return f}const X="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function B(c,f){let m,w;for(let D=1;D<arguments.length;D++){w=arguments[D];for(m in w)c[m]=w[m];for(let O=0;O<X.length;O++)m=X[O],Object.prototype.hasOwnProperty.call(w,m)&&(c[m]=w[m])}}function mt(c){this.src=c,this.g={},this.h=0}mt.prototype.add=function(c,f,m,w,D){const O=c.toString();c=this.g[O],c||(c=this.g[O]=[],this.h++);const F=Et(c,f,w,D);return F>-1?(f=c[F],m||(f.fa=!1)):(f=new j(f,this.src,O,!!w,D),f.fa=m,c.push(f)),f};function yt(c,f){const m=f.type;if(m in c.g){var w=c.g[m],D=Array.prototype.indexOf.call(w,f,void 0),O;(O=D>=0)&&Array.prototype.splice.call(w,D,1),O&&(rt(f),c.g[m].length==0&&(delete c.g[m],c.h--))}}function Et(c,f,m,w){for(let D=0;D<c.length;++D){const O=c[D];if(!O.da&&O.listener==f&&O.capture==!!m&&O.ha==w)return D}return-1}var re="closure_lm_"+(Math.random()*1e6|0),ot={};function ft(c,f,m,w,D){if(Array.isArray(f)){for(let O=0;O<f.length;O++)ft(c,f[O],m,w,D);return null}return m=gt(m),c&&c[q]?c.J(f,m,a(w)?!!w.capture:!1,D):Dt(c,f,m,!1,w,D)}function Dt(c,f,m,w,D,O){if(!f)throw Error("Invalid event type");const F=a(D)?!!D.capture:!!D;let nt=tt(c);if(nt||(c[re]=nt=new mt(c)),m=nt.add(f,m,w,F,O),m.proxy)return m;if(w=at(),m.proxy=w,w.src=c,w.listener=m,c.addEventListener)A||(D=F),D===void 0&&(D=!1),c.addEventListener(f.toString(),w,D);else if(c.attachEvent)c.attachEvent(St(f.toString()),w);else if(c.addListener&&c.removeListener)c.addListener(w);else throw Error("addEventListener and attachEvent are unavailable.");return m}function at(){function c(m){return f.call(c.src,c.listener,m)}const f=bt;return c}function It(c,f,m,w,D){if(Array.isArray(f))for(var O=0;O<f.length;O++)It(c,f[O],m,w,D);else w=a(w)?!!w.capture:!!w,m=gt(m),c&&c[q]?(c=c.i,O=String(f).toString(),O in c.g&&(f=c.g[O],m=Et(f,m,w,D),m>-1&&(rt(f[m]),Array.prototype.splice.call(f,m,1),f.length==0&&(delete c.g[O],c.h--)))):c&&(c=tt(c))&&(f=c.g[f.toString()],c=-1,f&&(c=Et(f,m,w,D)),(m=c>-1?f[c]:null)&&Vt(m))}function Vt(c){if(typeof c!="number"&&c&&!c.da){var f=c.src;if(f&&f[q])yt(f.i,c);else{var m=c.type,w=c.proxy;f.removeEventListener?f.removeEventListener(m,w,c.capture):f.detachEvent?f.detachEvent(St(m),w):f.addListener&&f.removeListener&&f.removeListener(w),(m=tt(f))?(yt(m,c),m.h==0&&(m.src=null,f[re]=null)):rt(c)}}}function St(c){return c in ot?ot[c]:ot[c]="on"+c}function bt(c,f){if(c.da)c=!0;else{f=new G(f,this);const m=c.listener,w=c.ha||c.src;c.fa&&Vt(c),c=m.call(w,f)}return c}function tt(c){return c=c[re],c instanceof mt?c:null}var jt="__closure_events_fn_"+(Math.random()*1e9>>>0);function gt(c){return typeof c=="function"?c:(c[jt]||(c[jt]=function(f){return c.handleEvent(f)}),c[jt])}function et(){v.call(this),this.i=new mt(this),this.M=this,this.G=null}d(et,v),et.prototype[q]=!0,et.prototype.removeEventListener=function(c,f,m,w){It(this,c,f,m,w)};function dt(c,f){var m,w=c.G;if(w)for(m=[];w;w=w.G)m.push(w);if(c=c.M,w=f.type||f,typeof f=="string")f=new I(f,c);else if(f instanceof I)f.target=f.target||c;else{var D=f;f=new I(w,c),B(f,D)}D=!0;let O,F;if(m)for(F=m.length-1;F>=0;F--)O=f.g=m[F],D=Ce(O,w,!0,f)&&D;if(O=f.g=c,D=Ce(O,w,!0,f)&&D,D=Ce(O,w,!1,f)&&D,m)for(F=0;F<m.length;F++)O=f.g=m[F],D=Ce(O,w,!1,f)&&D}et.prototype.N=function(){if(et.Z.N.call(this),this.i){var c=this.i;for(const f in c.g){const m=c.g[f];for(let w=0;w<m.length;w++)rt(m[w]);delete c.g[f],c.h--}}this.G=null},et.prototype.J=function(c,f,m,w){return this.i.add(String(c),f,!1,m,w)},et.prototype.K=function(c,f,m,w){return this.i.add(String(c),f,!0,m,w)};function Ce(c,f,m,w){if(f=c.i.g[String(f)],!f)return!0;f=f.concat();let D=!0;for(let O=0;O<f.length;++O){const F=f[O];if(F&&!F.da&&F.capture==m){const nt=F.listener,qt=F.ha||F.src;F.fa&&yt(c.i,F),D=nt.call(qt,w)!==!1&&D}}return D&&!w.defaultPrevented}function Se(c,f){if(typeof c!="function")if(c&&typeof c.handleEvent=="function")c=u(c.handleEvent,c);else throw Error("Invalid listener argument");return Number(f)>2147483647?-1:o.setTimeout(c,f||0)}function wn(c){c.g=Se(()=>{c.g=null,c.i&&(c.i=!1,wn(c))},c.l);const f=c.h;c.h=null,c.m.apply(null,f)}class Xt extends v{constructor(f,m){super(),this.m=f,this.l=m,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:wn(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function oe(c){v.call(this),this.h=c,this.g={}}d(oe,v);var Ut=[];function ee(c){U(c.g,function(f,m){this.g.hasOwnProperty(m)&&Vt(f)},c),c.g={}}oe.prototype.N=function(){oe.Z.N.call(this),ee(this)},oe.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var be=o.JSON.stringify,ys=o.JSON.parse,Vr=class{stringify(c){return o.JSON.stringify(c,void 0)}parse(c){return o.JSON.parse(c,void 0)}};function en(){}function ve(){}var De={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Mi(){I.call(this,"d")}d(Mi,I);function Fa(){I.call(this,"c")}d(Fa,I);var ti={},wu=null;function Nr(){return wu=wu||new et}ti.Ia="serverreachability";function Tu(c){I.call(this,ti.Ia,c)}d(Tu,I);function bs(c){const f=Nr();dt(f,new Tu(f))}ti.STAT_EVENT="statevent";function Iu(c,f){I.call(this,ti.STAT_EVENT,c),this.stat=f}d(Iu,I);function fe(c){const f=Nr();dt(f,new Iu(f,c))}ti.Ja="timingevent";function Su(c,f){I.call(this,ti.Ja,c),this.size=f}d(Su,I);function vs(c,f){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){c()},f)}function Es(){this.g=!0}Es.prototype.ua=function(){this.g=!1};function C_(c,f,m,w,D,O){c.info(function(){if(c.g)if(O){var F="",nt=O.split("&");for(let xt=0;xt<nt.length;xt++){var qt=nt[xt].split("=");if(qt.length>1){const Jt=qt[0];qt=qt[1];const Ue=Jt.split("_");F=Ue.length>=2&&Ue[1]=="type"?F+(Jt+"="+qt+"&"):F+(Jt+"=redacted&")}}}else F=null;else F=O;return"XMLHTTP REQ ("+w+") [attempt "+D+"]: "+f+`
`+m+`
`+F})}function D_(c,f,m,w,D,O,F){c.info(function(){return"XMLHTTP RESP ("+w+") [ attempt "+D+"]: "+f+`
`+m+`
`+O+" "+F})}function Oi(c,f,m,w){c.info(function(){return"XMLHTTP TEXT ("+f+"): "+O_(c,m)+(w?" "+w:"")})}function M_(c,f){c.info(function(){return"TIMEOUT: "+f})}Es.prototype.info=function(){};function O_(c,f){if(!c.g)return f;if(!f)return null;try{const O=JSON.parse(f);if(O){for(c=0;c<O.length;c++)if(Array.isArray(O[c])){var m=O[c];if(!(m.length<2)){var w=m[1];if(Array.isArray(w)&&!(w.length<1)){var D=w[0];if(D!="noop"&&D!="stop"&&D!="close")for(let F=1;F<w.length;F++)w[F]=""}}}}return be(O)}catch{return f}}var Fr={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},xu={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Au;function $a(){}d($a,en),$a.prototype.g=function(){return new XMLHttpRequest},Au=new $a;function ws(c){return encodeURIComponent(String(c))}function L_(c){var f=1;c=c.split(":");const m=[];for(;f>0&&c.length;)m.push(c.shift()),f--;return c.length&&m.push(c.join(":")),m}function Tn(c,f,m,w){this.j=c,this.i=f,this.l=m,this.S=w||1,this.V=new oe(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Pu}function Pu(){this.i=null,this.g="",this.h=!1}var ku={},Ua={};function za(c,f,m){c.M=1,c.A=Ur($e(f)),c.u=m,c.R=!0,Ru(c,null)}function Ru(c,f){c.F=Date.now(),$r(c),c.B=$e(c.A);var m=c.B,w=c.S;Array.isArray(w)||(w=[String(w)]),ju(m.i,"t",w),c.C=0,m=c.j.L,c.h=new Pu,c.g=ah(c.j,m?f:null,!c.u),c.P>0&&(c.O=new Xt(u(c.Y,c,c.g),c.P)),f=c.V,m=c.g,w=c.ba;var D="readystatechange";Array.isArray(D)||(D&&(Ut[0]=D.toString()),D=Ut);for(let O=0;O<D.length;O++){const F=ft(m,D[O],w||f.handleEvent,!1,f.h||f);if(!F)break;f.g[F.key]=F}f=c.J?Y(c.J):{},c.u?(c.v||(c.v="POST"),f["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.B,c.v,c.u,f)):(c.v="GET",c.g.ea(c.B,c.v,null,f)),bs(),C_(c.i,c.v,c.B,c.l,c.S,c.u)}Tn.prototype.ba=function(c){c=c.target;const f=this.O;f&&xn(c)==3?f.j():this.Y(c)},Tn.prototype.Y=function(c){try{if(c==this.g)t:{const nt=xn(this.g),qt=this.g.ya(),xt=this.g.ca();if(!(nt<3)&&(nt!=3||this.g&&(this.h.h||this.g.la()||Qu(this.g)))){this.K||nt!=4||qt==7||(qt==8||xt<=0?bs(3):bs(2)),Ba(this);var f=this.g.ca();this.X=f;var m=V_(this);if(this.o=f==200,D_(this.i,this.v,this.B,this.l,this.S,nt,f),this.o){if(this.U&&!this.L){e:{if(this.g){var w,D=this.g;if((w=D.g?D.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!x(w)){var O=w;break e}}O=null}if(c=O)Oi(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,ja(this,c);else{this.o=!1,this.m=3,fe(12),ei(this),Ts(this);break t}}if(this.R){c=!0;let Jt;for(;!this.K&&this.C<m.length;)if(Jt=N_(this,m),Jt==Ua){nt==4&&(this.m=4,fe(14),c=!1),Oi(this.i,this.l,null,"[Incomplete Response]");break}else if(Jt==ku){this.m=4,fe(15),Oi(this.i,this.l,m,"[Invalid Chunk]"),c=!1;break}else Oi(this.i,this.l,Jt,null),ja(this,Jt);if(Cu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),nt!=4||m.length!=0||this.h.h||(this.m=1,fe(16),c=!1),this.o=this.o&&c,!c)Oi(this.i,this.l,m,"[Invalid Chunked Response]"),ei(this),Ts(this);else if(m.length>0&&!this.W){this.W=!0;var F=this.j;F.g==this&&F.aa&&!F.P&&(F.j.info("Great, no buffering proxy detected. Bytes received: "+m.length),Xa(F),F.P=!0,fe(11))}}else Oi(this.i,this.l,m,null),ja(this,m);nt==4&&ei(this),this.o&&!this.K&&(nt==4?ih(this.j,this):(this.o=!1,$r(this)))}else X_(this.g),f==400&&m.indexOf("Unknown SID")>0?(this.m=3,fe(12)):(this.m=0,fe(13)),ei(this),Ts(this)}}}catch{}finally{}};function V_(c){if(!Cu(c))return c.g.la();const f=Qu(c.g);if(f==="")return"";let m="";const w=f.length,D=xn(c.g)==4;if(!c.h.i){if(typeof TextDecoder>"u")return ei(c),Ts(c),"";c.h.i=new o.TextDecoder}for(let O=0;O<w;O++)c.h.h=!0,m+=c.h.i.decode(f[O],{stream:!(D&&O==w-1)});return f.length=0,c.h.g+=m,c.C=0,c.h.g}function Cu(c){return c.g?c.v=="GET"&&c.M!=2&&c.j.Aa:!1}function N_(c,f){var m=c.C,w=f.indexOf(`
`,m);return w==-1?Ua:(m=Number(f.substring(m,w)),isNaN(m)?ku:(w+=1,w+m>f.length?Ua:(f=f.slice(w,w+m),c.C=w+m,f)))}Tn.prototype.cancel=function(){this.K=!0,ei(this)};function $r(c){c.T=Date.now()+c.H,Du(c,c.H)}function Du(c,f){if(c.D!=null)throw Error("WatchDog timer not null");c.D=vs(u(c.aa,c),f)}function Ba(c){c.D&&(o.clearTimeout(c.D),c.D=null)}Tn.prototype.aa=function(){this.D=null;const c=Date.now();c-this.T>=0?(M_(this.i,this.B),this.M!=2&&(bs(),fe(17)),ei(this),this.m=2,Ts(this)):Du(this,this.T-c)};function Ts(c){c.j.I==0||c.K||ih(c.j,c)}function ei(c){Ba(c);var f=c.O;f&&typeof f.dispose=="function"&&f.dispose(),c.O=null,ee(c.V),c.g&&(f=c.g,c.g=null,f.abort(),f.dispose())}function ja(c,f){try{var m=c.j;if(m.I!=0&&(m.g==c||Ha(m.h,c))){if(!c.L&&Ha(m.h,c)&&m.I==3){try{var w=m.Ba.g.parse(f)}catch{w=null}if(Array.isArray(w)&&w.length==3){var D=w;if(D[0]==0){t:if(!m.v){if(m.g)if(m.g.F+3e3<c.F)Wr(m),jr(m);else break t;Qa(m),fe(18)}}else m.xa=D[1],0<m.xa-m.K&&D[2]<37500&&m.F&&m.A==0&&!m.C&&(m.C=vs(u(m.Va,m),6e3));Lu(m.h)<=1&&m.ta&&(m.ta=void 0)}else ii(m,11)}else if((c.L||m.g==c)&&Wr(m),!x(f))for(D=m.Ba.g.parse(f),f=0;f<D.length;f++){let xt=D[f];const Jt=xt[0];if(!(Jt<=m.K))if(m.K=Jt,xt=xt[1],m.I==2)if(xt[0]=="c"){m.M=xt[1],m.ba=xt[2];const Ue=xt[3];Ue!=null&&(m.ka=Ue,m.j.info("VER="+m.ka));const si=xt[4];si!=null&&(m.za=si,m.j.info("SVER="+m.za));const An=xt[5];An!=null&&typeof An=="number"&&An>0&&(w=1.5*An,m.O=w,m.j.info("backChannelRequestTimeoutMs_="+w)),w=m;const Pn=c.g;if(Pn){const Kr=Pn.g?Pn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Kr){var O=w.h;O.g||Kr.indexOf("spdy")==-1&&Kr.indexOf("quic")==-1&&Kr.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&(Wa(O,O.h),O.h=null))}if(w.G){const Ja=Pn.g?Pn.g.getResponseHeader("X-HTTP-Session-Id"):null;Ja&&(w.wa=Ja,kt(w.J,w.G,Ja))}}m.I=3,m.l&&m.l.ra(),m.aa&&(m.T=Date.now()-c.F,m.j.info("Handshake RTT: "+m.T+"ms")),w=m;var F=c;if(w.na=oh(w,w.L?w.ba:null,w.W),F.L){Vu(w.h,F);var nt=F,qt=w.O;qt&&(nt.H=qt),nt.D&&(Ba(nt),$r(nt)),w.g=F}else eh(w);m.i.length>0&&Hr(m)}else xt[0]!="stop"&&xt[0]!="close"||ii(m,7);else m.I==3&&(xt[0]=="stop"||xt[0]=="close"?xt[0]=="stop"?ii(m,7):Ya(m):xt[0]!="noop"&&m.l&&m.l.qa(xt),m.A=0)}}bs(4)}catch{}}var F_=class{constructor(c,f){this.g=c,this.map=f}};function Mu(c){this.l=c||10,o.PerformanceNavigationTiming?(c=o.performance.getEntriesByType("navigation"),c=c.length>0&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Ou(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function Lu(c){return c.h?1:c.g?c.g.size:0}function Ha(c,f){return c.h?c.h==f:c.g?c.g.has(f):!1}function Wa(c,f){c.g?c.g.add(f):c.h=f}function Vu(c,f){c.h&&c.h==f?c.h=null:c.g&&c.g.has(f)&&c.g.delete(f)}Mu.prototype.cancel=function(){if(this.i=Nu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function Nu(c){if(c.h!=null)return c.i.concat(c.h.G);if(c.g!=null&&c.g.size!==0){let f=c.i;for(const m of c.g.values())f=f.concat(m.G);return f}return y(c.i)}var Fu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function $_(c,f){if(c){c=c.split("&");for(let m=0;m<c.length;m++){const w=c[m].indexOf("=");let D,O=null;w>=0?(D=c[m].substring(0,w),O=c[m].substring(w+1)):D=c[m],f(D,O?decodeURIComponent(O.replace(/\+/g," ")):"")}}}function In(c){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let f;c instanceof In?(this.l=c.l,Is(this,c.j),this.o=c.o,this.g=c.g,Ss(this,c.u),this.h=c.h,qa(this,Hu(c.i)),this.m=c.m):c&&(f=String(c).match(Fu))?(this.l=!1,Is(this,f[1]||"",!0),this.o=xs(f[2]||""),this.g=xs(f[3]||"",!0),Ss(this,f[4]),this.h=xs(f[5]||"",!0),qa(this,f[6]||"",!0),this.m=xs(f[7]||"")):(this.l=!1,this.i=new Ps(null,this.l))}In.prototype.toString=function(){const c=[];var f=this.j;f&&c.push(As(f,$u,!0),":");var m=this.g;return(m||f=="file")&&(c.push("//"),(f=this.o)&&c.push(As(f,$u,!0),"@"),c.push(ws(m).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),m=this.u,m!=null&&c.push(":",String(m))),(m=this.h)&&(this.g&&m.charAt(0)!="/"&&c.push("/"),c.push(As(m,m.charAt(0)=="/"?B_:z_,!0))),(m=this.i.toString())&&c.push("?",m),(m=this.m)&&c.push("#",As(m,H_)),c.join("")},In.prototype.resolve=function(c){const f=$e(this);let m=!!c.j;m?Is(f,c.j):m=!!c.o,m?f.o=c.o:m=!!c.g,m?f.g=c.g:m=c.u!=null;var w=c.h;if(m)Ss(f,c.u);else if(m=!!c.h){if(w.charAt(0)!="/")if(this.g&&!this.h)w="/"+w;else{var D=f.h.lastIndexOf("/");D!=-1&&(w=f.h.slice(0,D+1)+w)}if(D=w,D==".."||D==".")w="";else if(D.indexOf("./")!=-1||D.indexOf("/.")!=-1){w=D.lastIndexOf("/",0)==0,D=D.split("/");const O=[];for(let F=0;F<D.length;){const nt=D[F++];nt=="."?w&&F==D.length&&O.push(""):nt==".."?((O.length>1||O.length==1&&O[0]!="")&&O.pop(),w&&F==D.length&&O.push("")):(O.push(nt),w=!0)}w=O.join("/")}else w=D}return m?f.h=w:m=c.i.toString()!=="",m?qa(f,Hu(c.i)):m=!!c.m,m&&(f.m=c.m),f};function $e(c){return new In(c)}function Is(c,f,m){c.j=m?xs(f,!0):f,c.j&&(c.j=c.j.replace(/:$/,""))}function Ss(c,f){if(f){if(f=Number(f),isNaN(f)||f<0)throw Error("Bad port number "+f);c.u=f}else c.u=null}function qa(c,f,m){f instanceof Ps?(c.i=f,W_(c.i,c.l)):(m||(f=As(f,j_)),c.i=new Ps(f,c.l))}function kt(c,f,m){c.i.set(f,m)}function Ur(c){return kt(c,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),c}function xs(c,f){return c?f?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function As(c,f,m){return typeof c=="string"?(c=encodeURI(c).replace(f,U_),m&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function U_(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var $u=/[#\/\?@]/g,z_=/[#\?:]/g,B_=/[#\?]/g,j_=/[#\?@]/g,H_=/#/g;function Ps(c,f){this.h=this.g=null,this.i=c||null,this.j=!!f}function ni(c){c.g||(c.g=new Map,c.h=0,c.i&&$_(c.i,function(f,m){c.add(decodeURIComponent(f.replace(/\+/g," ")),m)}))}n=Ps.prototype,n.add=function(c,f){ni(this),this.i=null,c=Li(this,c);let m=this.g.get(c);return m||this.g.set(c,m=[]),m.push(f),this.h+=1,this};function Uu(c,f){ni(c),f=Li(c,f),c.g.has(f)&&(c.i=null,c.h-=c.g.get(f).length,c.g.delete(f))}function zu(c,f){return ni(c),f=Li(c,f),c.g.has(f)}n.forEach=function(c,f){ni(this),this.g.forEach(function(m,w){m.forEach(function(D){c.call(f,D,w,this)},this)},this)};function Bu(c,f){ni(c);let m=[];if(typeof f=="string")zu(c,f)&&(m=m.concat(c.g.get(Li(c,f))));else for(c=Array.from(c.g.values()),f=0;f<c.length;f++)m=m.concat(c[f]);return m}n.set=function(c,f){return ni(this),this.i=null,c=Li(this,c),zu(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[f]),this.h+=1,this},n.get=function(c,f){return c?(c=Bu(this,c),c.length>0?String(c[0]):f):f};function ju(c,f,m){Uu(c,f),m.length>0&&(c.i=null,c.g.set(Li(c,f),y(m)),c.h+=m.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],f=Array.from(this.g.keys());for(let w=0;w<f.length;w++){var m=f[w];const D=ws(m);m=Bu(this,m);for(let O=0;O<m.length;O++){let F=D;m[O]!==""&&(F+="="+ws(m[O])),c.push(F)}}return this.i=c.join("&")};function Hu(c){const f=new Ps;return f.i=c.i,c.g&&(f.g=new Map(c.g),f.h=c.h),f}function Li(c,f){return f=String(f),c.j&&(f=f.toLowerCase()),f}function W_(c,f){f&&!c.j&&(ni(c),c.i=null,c.g.forEach(function(m,w){const D=w.toLowerCase();w!=D&&(Uu(this,w),ju(this,D,m))},c)),c.j=f}function q_(c,f){const m=new Es;if(o.Image){const w=new Image;w.onload=h(Sn,m,"TestLoadImage: loaded",!0,f,w),w.onerror=h(Sn,m,"TestLoadImage: error",!1,f,w),w.onabort=h(Sn,m,"TestLoadImage: abort",!1,f,w),w.ontimeout=h(Sn,m,"TestLoadImage: timeout",!1,f,w),o.setTimeout(function(){w.ontimeout&&w.ontimeout()},1e4),w.src=c}else f(!1)}function K_(c,f){const m=new Es,w=new AbortController,D=setTimeout(()=>{w.abort(),Sn(m,"TestPingServer: timeout",!1,f)},1e4);fetch(c,{signal:w.signal}).then(O=>{clearTimeout(D),O.ok?Sn(m,"TestPingServer: ok",!0,f):Sn(m,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(D),Sn(m,"TestPingServer: error",!1,f)})}function Sn(c,f,m,w,D){try{D&&(D.onload=null,D.onerror=null,D.onabort=null,D.ontimeout=null),w(m)}catch{}}function G_(){this.g=new Vr}function Ka(c){this.i=c.Sb||null,this.h=c.ab||!1}d(Ka,en),Ka.prototype.g=function(){return new zr(this.i,this.h)};function zr(c,f){et.call(this),this.H=c,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}d(zr,et),n=zr.prototype,n.open=function(c,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=c,this.D=f,this.readyState=1,Rs(this)},n.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const f={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};c&&(f.body=c),(this.H||o).fetch(new Request(this.D,f)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,ks(this)),this.readyState=0},n.Pa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,Rs(this)),this.g&&(this.readyState=3,Rs(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Wu(this)}else c.text().then(this.Oa.bind(this),this.ga.bind(this))};function Wu(c){c.j.read().then(c.Ma.bind(c)).catch(c.ga.bind(c))}n.Ma=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var f=c.value?c.value:new Uint8Array(0);(f=this.B.decode(f,{stream:!c.done}))&&(this.response=this.responseText+=f)}c.done?ks(this):Rs(this),this.readyState==3&&Wu(this)}},n.Oa=function(c){this.g&&(this.response=this.responseText=c,ks(this))},n.Na=function(c){this.g&&(this.response=c,ks(this))},n.ga=function(){this.g&&ks(this)};function ks(c){c.readyState=4,c.l=null,c.j=null,c.B=null,Rs(c)}n.setRequestHeader=function(c,f){this.A.append(c,f)},n.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],f=this.h.entries();for(var m=f.next();!m.done;)m=m.value,c.push(m[0]+": "+m[1]),m=f.next();return c.join(`\r
`)};function Rs(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(zr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function qu(c){let f="";return U(c,function(m,w){f+=w,f+=":",f+=m,f+=`\r
`}),f}function Ga(c,f,m){t:{for(w in m){var w=!1;break t}w=!0}w||(m=qu(m),typeof c=="string"?m!=null&&ws(m):kt(c,f,m))}function Nt(c){et.call(this),this.headers=new Map,this.L=c||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}d(Nt,et);var Y_=/^https?$/i,Q_=["POST","PUT"];n=Nt.prototype,n.Fa=function(c){this.H=c},n.ea=function(c,f,m,w){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);f=f?f.toUpperCase():"GET",this.D=c,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Au.g(),this.g.onreadystatechange=p(u(this.Ca,this));try{this.B=!0,this.g.open(f,String(c),!0),this.B=!1}catch(O){Ku(this,O);return}if(c=m||"",m=new Map(this.headers),w)if(Object.getPrototypeOf(w)===Object.prototype)for(var D in w)m.set(D,w[D]);else if(typeof w.keys=="function"&&typeof w.get=="function")for(const O of w.keys())m.set(O,w.get(O));else throw Error("Unknown input type for opt_headers: "+String(w));w=Array.from(m.keys()).find(O=>O.toLowerCase()=="content-type"),D=o.FormData&&c instanceof o.FormData,!(Array.prototype.indexOf.call(Q_,f,void 0)>=0)||w||D||m.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,F]of m)this.g.setRequestHeader(O,F);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(c),this.v=!1}catch(O){Ku(this,O)}};function Ku(c,f){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=f,c.o=5,Gu(c),Br(c)}function Gu(c){c.A||(c.A=!0,dt(c,"complete"),dt(c,"error"))}n.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=c||7,dt(this,"complete"),dt(this,"abort"),Br(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Br(this,!0)),Nt.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?Yu(this):this.Xa())},n.Xa=function(){Yu(this)};function Yu(c){if(c.h&&typeof r<"u"){if(c.v&&xn(c)==4)setTimeout(c.Ca.bind(c),0);else if(dt(c,"readystatechange"),xn(c)==4){c.h=!1;try{const O=c.ca();t:switch(O){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break t;default:f=!1}var m;if(!(m=f)){var w;if(w=O===0){let F=String(c.D).match(Fu)[1]||null;!F&&o.self&&o.self.location&&(F=o.self.location.protocol.slice(0,-1)),w=!Y_.test(F?F.toLowerCase():"")}m=w}if(m)dt(c,"complete"),dt(c,"success");else{c.o=6;try{var D=xn(c)>2?c.g.statusText:""}catch{D=""}c.l=D+" ["+c.ca()+"]",Gu(c)}}finally{Br(c)}}}}function Br(c,f){if(c.g){c.m&&(clearTimeout(c.m),c.m=null);const m=c.g;c.g=null,f||dt(c,"ready");try{m.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function xn(c){return c.g?c.g.readyState:0}n.ca=function(){try{return xn(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(c){if(this.g){var f=this.g.responseText;return c&&f.indexOf(c)==0&&(f=f.substring(c.length)),ys(f)}};function Qu(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.F){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function X_(c){const f={};c=(c.g&&xn(c)>=2&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let w=0;w<c.length;w++){if(x(c[w]))continue;var m=L_(c[w]);const D=m[0];if(m=m[1],typeof m!="string")continue;m=m.trim();const O=f[D]||[];f[D]=O,O.push(m)}Pt(f,function(w){return w.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Cs(c,f,m){return m&&m.internalChannelParams&&m.internalChannelParams[c]||f}function Xu(c){this.za=0,this.i=[],this.j=new Es,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Cs("failFast",!1,c),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Cs("baseRetryDelayMs",5e3,c),this.Za=Cs("retryDelaySeedMs",1e4,c),this.Ta=Cs("forwardChannelMaxRetries",2,c),this.va=Cs("forwardChannelRequestTimeoutMs",2e4,c),this.ma=c&&c.xmlHttpFactory||void 0,this.Ua=c&&c.Rb||void 0,this.Aa=c&&c.useFetchStreams||!1,this.O=void 0,this.L=c&&c.supportsCrossDomainXhr||!1,this.M="",this.h=new Mu(c&&c.concurrentRequestLimit),this.Ba=new G_,this.S=c&&c.fastHandshake||!1,this.R=c&&c.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=c&&c.Pb||!1,c&&c.ua&&this.j.ua(),c&&c.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&c&&c.detectBufferingProxy||!1,this.ia=void 0,c&&c.longPollingTimeout&&c.longPollingTimeout>0&&(this.ia=c.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=Xu.prototype,n.ka=8,n.I=1,n.connect=function(c,f,m,w){fe(0),this.W=c,this.H=f||{},m&&w!==void 0&&(this.H.OSID=m,this.H.OAID=w),this.F=this.X,this.J=oh(this,null,this.W),Hr(this)};function Ya(c){if(Ju(c),c.I==3){var f=c.V++,m=$e(c.J);if(kt(m,"SID",c.M),kt(m,"RID",f),kt(m,"TYPE","terminate"),Ds(c,m),f=new Tn(c,c.j,f),f.M=2,f.A=Ur($e(m)),m=!1,o.navigator&&o.navigator.sendBeacon)try{m=o.navigator.sendBeacon(f.A.toString(),"")}catch{}!m&&o.Image&&(new Image().src=f.A,m=!0),m||(f.g=ah(f.j,null),f.g.ea(f.A)),f.F=Date.now(),$r(f)}rh(c)}function jr(c){c.g&&(Xa(c),c.g.cancel(),c.g=null)}function Ju(c){jr(c),c.v&&(o.clearTimeout(c.v),c.v=null),Wr(c),c.h.cancel(),c.m&&(typeof c.m=="number"&&o.clearTimeout(c.m),c.m=null)}function Hr(c){if(!Ou(c.h)&&!c.m){c.m=!0;var f=c.Ea;M||g(),L||(M(),L=!0),E.add(f,c),c.D=0}}function J_(c,f){return Lu(c.h)>=c.h.j-(c.m?1:0)?!1:c.m?(c.i=f.G.concat(c.i),!0):c.I==1||c.I==2||c.D>=(c.Sa?0:c.Ta)?!1:(c.m=vs(u(c.Ea,c,f),sh(c,c.D)),c.D++,!0)}n.Ea=function(c){if(this.m)if(this.m=null,this.I==1){if(!c){this.V=Math.floor(Math.random()*1e5),c=this.V++;const D=new Tn(this,this.j,c);let O=this.o;if(this.U&&(O?(O=Y(O),B(O,this.U)):O=this.U),this.u!==null||this.R||(D.J=O,O=null),this.S)t:{for(var f=0,m=0;m<this.i.length;m++){e:{var w=this.i[m];if("__data__"in w.map&&(w=w.map.__data__,typeof w=="string")){w=w.length;break e}w=void 0}if(w===void 0)break;if(f+=w,f>4096){f=m;break t}if(f===4096||m===this.i.length-1){f=m+1;break t}}f=1e3}else f=1e3;f=th(this,D,f),m=$e(this.J),kt(m,"RID",c),kt(m,"CVER",22),this.G&&kt(m,"X-HTTP-Session-Id",this.G),Ds(this,m),O&&(this.R?f="headers="+ws(qu(O))+"&"+f:this.u&&Ga(m,this.u,O)),Wa(this.h,D),this.Ra&&kt(m,"TYPE","init"),this.S?(kt(m,"$req",f),kt(m,"SID","null"),D.U=!0,za(D,m,null)):za(D,m,f),this.I=2}}else this.I==3&&(c?Zu(this,c):this.i.length==0||Ou(this.h)||Zu(this))};function Zu(c,f){var m;f?m=f.l:m=c.V++;const w=$e(c.J);kt(w,"SID",c.M),kt(w,"RID",m),kt(w,"AID",c.K),Ds(c,w),c.u&&c.o&&Ga(w,c.u,c.o),m=new Tn(c,c.j,m,c.D+1),c.u===null&&(m.J=c.o),f&&(c.i=f.G.concat(c.i)),f=th(c,m,1e3),m.H=Math.round(c.va*.5)+Math.round(c.va*.5*Math.random()),Wa(c.h,m),za(m,w,f)}function Ds(c,f){c.H&&U(c.H,function(m,w){kt(f,w,m)}),c.l&&U({},function(m,w){kt(f,w,m)})}function th(c,f,m){m=Math.min(c.i.length,m);const w=c.l?u(c.l.Ka,c.l,c):null;t:{var D=c.i;let nt=-1;for(;;){const qt=["count="+m];nt==-1?m>0?(nt=D[0].g,qt.push("ofs="+nt)):nt=0:qt.push("ofs="+nt);let xt=!0;for(let Jt=0;Jt<m;Jt++){var O=D[Jt].g;const Ue=D[Jt].map;if(O-=nt,O<0)nt=Math.max(0,D[Jt].g-100),xt=!1;else try{O="req"+O+"_"||"";try{var F=Ue instanceof Map?Ue:Object.entries(Ue);for(const[si,An]of F){let Pn=An;a(An)&&(Pn=be(An)),qt.push(O+si+"="+encodeURIComponent(Pn))}}catch(si){throw qt.push(O+"type="+encodeURIComponent("_badmap")),si}}catch{w&&w(Ue)}}if(xt){F=qt.join("&");break t}}F=void 0}return c=c.i.splice(0,m),f.G=c,F}function eh(c){if(!c.g&&!c.v){c.Y=1;var f=c.Da;M||g(),L||(M(),L=!0),E.add(f,c),c.A=0}}function Qa(c){return c.g||c.v||c.A>=3?!1:(c.Y++,c.v=vs(u(c.Da,c),sh(c,c.A)),c.A++,!0)}n.Da=function(){if(this.v=null,nh(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var c=4*this.T;this.j.info("BP detection timer enabled: "+c),this.B=vs(u(this.Wa,this),c)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,fe(10),jr(this),nh(this))};function Xa(c){c.B!=null&&(o.clearTimeout(c.B),c.B=null)}function nh(c){c.g=new Tn(c,c.j,"rpc",c.Y),c.u===null&&(c.g.J=c.o),c.g.P=0;var f=$e(c.na);kt(f,"RID","rpc"),kt(f,"SID",c.M),kt(f,"AID",c.K),kt(f,"CI",c.F?"0":"1"),!c.F&&c.ia&&kt(f,"TO",c.ia),kt(f,"TYPE","xmlhttp"),Ds(c,f),c.u&&c.o&&Ga(f,c.u,c.o),c.O&&(c.g.H=c.O);var m=c.g;c=c.ba,m.M=1,m.A=Ur($e(f)),m.u=null,m.R=!0,Ru(m,c)}n.Va=function(){this.C!=null&&(this.C=null,jr(this),Qa(this),fe(19))};function Wr(c){c.C!=null&&(o.clearTimeout(c.C),c.C=null)}function ih(c,f){var m=null;if(c.g==f){Wr(c),Xa(c),c.g=null;var w=2}else if(Ha(c.h,f))m=f.G,Vu(c.h,f),w=1;else return;if(c.I!=0){if(f.o)if(w==1){m=f.u?f.u.length:0,f=Date.now()-f.F;var D=c.D;w=Nr(),dt(w,new Su(w,m)),Hr(c)}else eh(c);else if(D=f.m,D==3||D==0&&f.X>0||!(w==1&&J_(c,f)||w==2&&Qa(c)))switch(m&&m.length>0&&(f=c.h,f.i=f.i.concat(m)),D){case 1:ii(c,5);break;case 4:ii(c,10);break;case 3:ii(c,6);break;default:ii(c,2)}}}function sh(c,f){let m=c.Qa+Math.floor(Math.random()*c.Za);return c.isActive()||(m*=2),m*f}function ii(c,f){if(c.j.info("Error code "+f),f==2){var m=u(c.bb,c),w=c.Ua;const D=!w;w=new In(w||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Is(w,"https"),Ur(w),D?q_(w.toString(),m):K_(w.toString(),m)}else fe(2);c.I=0,c.l&&c.l.pa(f),rh(c),Ju(c)}n.bb=function(c){c?(this.j.info("Successfully pinged google.com"),fe(2)):(this.j.info("Failed to ping google.com"),fe(1))};function rh(c){if(c.I=0,c.ja=[],c.l){const f=Nu(c.h);(f.length!=0||c.i.length!=0)&&(S(c.ja,f),S(c.ja,c.i),c.h.i.length=0,y(c.i),c.i.length=0),c.l.oa()}}function oh(c,f,m){var w=m instanceof In?$e(m):new In(m);if(w.g!="")f&&(w.g=f+"."+w.g),Ss(w,w.u);else{var D=o.location;w=D.protocol,f=f?f+"."+D.hostname:D.hostname,D=+D.port;const O=new In(null);w&&Is(O,w),f&&(O.g=f),D&&Ss(O,D),m&&(O.h=m),w=O}return m=c.G,f=c.wa,m&&f&&kt(w,m,f),kt(w,"VER",c.ka),Ds(c,w),w}function ah(c,f,m){if(f&&!c.L)throw Error("Can't create secondary domain capable XhrIo object.");return f=c.Aa&&!c.ma?new Nt(new Ka({ab:m})):new Nt(c.ma),f.Fa(c.L),f}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function lh(){}n=lh.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function qr(){}qr.prototype.g=function(c,f){return new Ee(c,f)};function Ee(c,f){et.call(this),this.g=new Xu(f),this.l=c,this.h=f&&f.messageUrlParams||null,c=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(c?c["X-WebChannel-Content-Type"]=f.messageContentType:c={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.sa&&(c?c["X-WebChannel-Client-Profile"]=f.sa:c={"X-WebChannel-Client-Profile":f.sa}),this.g.U=c,(c=f&&f.Qb)&&!x(c)&&(this.g.u=c),this.A=f&&f.supportsCrossDomainXhr||!1,this.v=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!x(f)&&(this.g.G=f,c=this.h,c!==null&&f in c&&(c=this.h,f in c&&delete c[f])),this.j=new Vi(this)}d(Ee,et),Ee.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Ee.prototype.close=function(){Ya(this.g)},Ee.prototype.o=function(c){var f=this.g;if(typeof c=="string"){var m={};m.__data__=c,c=m}else this.v&&(m={},m.__data__=be(c),c=m);f.i.push(new F_(f.Ya++,c)),f.I==3&&Hr(f)},Ee.prototype.N=function(){this.g.l=null,delete this.j,Ya(this.g),delete this.g,Ee.Z.N.call(this)};function ch(c){Mi.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var f=c.__sm__;if(f){t:{for(const m in f){c=m;break t}c=void 0}(this.i=c)&&(c=this.i,f=f!==null&&c in f?f[c]:void 0),this.data=f}else this.data=c}d(ch,Mi);function uh(){Fa.call(this),this.status=1}d(uh,Fa);function Vi(c){this.g=c}d(Vi,lh),Vi.prototype.ra=function(){dt(this.g,"a")},Vi.prototype.qa=function(c){dt(this.g,new ch(c))},Vi.prototype.pa=function(c){dt(this.g,new uh)},Vi.prototype.oa=function(){dt(this.g,"b")},qr.prototype.createWebChannel=qr.prototype.g,Ee.prototype.send=Ee.prototype.o,Ee.prototype.open=Ee.prototype.m,Ee.prototype.close=Ee.prototype.close,ng=function(){return new qr},eg=function(){return Nr()},tg=ti,Vl={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Fr.NO_ERROR=0,Fr.TIMEOUT=8,Fr.HTTP_ERROR=6,vo=Fr,xu.COMPLETE="complete",Zp=xu,ve.EventType=De,De.OPEN="a",De.CLOSE="b",De.ERROR="c",De.MESSAGE="d",et.prototype.listen=et.prototype.J,$s=ve,Nt.prototype.listenOnce=Nt.prototype.K,Nt.prototype.getLastError=Nt.prototype.Ha,Nt.prototype.getLastErrorCode=Nt.prototype.ya,Nt.prototype.getStatus=Nt.prototype.ca,Nt.prototype.getResponseJson=Nt.prototype.La,Nt.prototype.getResponseText=Nt.prototype.la,Nt.prototype.send=Nt.prototype.ea,Nt.prototype.setWithCredentials=Nt.prototype.Fa,Jp=Nt}).apply(typeof Yr<"u"?Yr:typeof self<"u"?self:typeof window<"u"?window:{});/**
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
 */let fs="12.9.0";function z0(n){fs=n}/**
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
 */const wi=new uc("@firebase/firestore");function Ui(){return wi.logLevel}function $(n,...t){if(wi.logLevel<=lt.DEBUG){const e=t.map(Tc);wi.debug(`Firestore (${fs}): ${n}`,...e)}}function yn(n,...t){if(wi.logLevel<=lt.ERROR){const e=t.map(Tc);wi.error(`Firestore (${fs}): ${n}`,...e)}}function Ti(n,...t){if(wi.logLevel<=lt.WARN){const e=t.map(Tc);wi.warn(`Firestore (${fs}): ${n}`,...e)}}function Tc(n){if(typeof n=="string")return n;try{return(function(e){return JSON.stringify(e)})(n)}catch{return n}}/**
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
 */function K(n,t,e){let i="Unexpected state";typeof t=="string"?i=t:e=t,ig(n,i,e)}function ig(n,t,e){let i=`FIRESTORE (${fs}) INTERNAL ASSERTION FAILED: ${t} (ID: ${n.toString(16)})`;if(e!==void 0)try{i+=" CONTEXT: "+JSON.stringify(e)}catch{i+=" CONTEXT: "+e}throw yn(i),new Error(i)}function vt(n,t,e,i){let s="Unexpected state";typeof e=="string"?s=e:i=e,n||ig(t,s,i)}function Z(n,t){return n}/**
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
 */const N={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class H extends En{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Hn{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}/**
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
 */class sg{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class B0{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(le.UNAUTHENTICATED)))}shutdown(){}}class j0{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class H0{constructor(t){this.t=t,this.currentUser=le.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){vt(this.o===void 0,42304);let i=this.i;const s=l=>this.i!==i?(i=this.i,e(l)):Promise.resolve();let r=new Hn;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Hn,t.enqueueRetryable((()=>s(this.currentUser)))};const o=()=>{const l=r;t.enqueueRetryable((async()=>{await l.promise,await s(this.currentUser)}))},a=l=>{$("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit((l=>a(l))),setTimeout((()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):($("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Hn)}}),0),o()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((i=>this.i!==t?($("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(vt(typeof i.accessToken=="string",31837,{l:i}),new sg(i.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return vt(t===null||typeof t=="string",2055,{h:t}),new le(t)}}class W0{constructor(t,e,i){this.P=t,this.T=e,this.I=i,this.type="FirstParty",this.user=le.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const t=this.A();return t&&this.R.set("Authorization",t),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class q0{constructor(t,e,i){this.P=t,this.T=e,this.I=i}getToken(){return Promise.resolve(new W0(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable((()=>e(le.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Uh{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class K0{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Me(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){vt(this.o===void 0,3512);const i=r=>{r.error!=null&&$("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.m;return this.m=r.token,$("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?e(r.token):Promise.resolve()};this.o=r=>{t.enqueueRetryable((()=>i(r)))};const s=r=>{$("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((r=>s(r))),setTimeout((()=>{if(!this.appCheck){const r=this.V.getImmediate({optional:!0});r?s(r):$("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Uh(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((e=>e?(vt(typeof e.token=="string",44558,{tokenResult:e}),this.m=e.token,new Uh(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function G0(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let i=0;i<n;i++)e[i]=Math.floor(256*Math.random());return e}/**
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
 */class Ic{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let i="";for(;i.length<20;){const s=G0(40);for(let r=0;r<s.length;++r)i.length<20&&s[r]<e&&(i+=t.charAt(s[r]%62))}return i}}function ct(n,t){return n<t?-1:n>t?1:0}function Nl(n,t){const e=Math.min(n.length,t.length);for(let i=0;i<e;i++){const s=n.charAt(i),r=t.charAt(i);if(s!==r)return ol(s)===ol(r)?ct(s,r):ol(s)?1:-1}return ct(n.length,t.length)}const Y0=55296,Q0=57343;function ol(n){const t=n.charCodeAt(0);return t>=Y0&&t<=Q0}function ns(n,t,e){return n.length===t.length&&n.every(((i,s)=>e(i,t[s])))}/**
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
 */const zh="__name__";class He{constructor(t,e,i){e===void 0?e=0:e>t.length&&K(637,{offset:e,range:t.length}),i===void 0?i=t.length-e:i>t.length-e&&K(1746,{length:i,range:t.length-e}),this.segments=t,this.offset=e,this.len=i}get length(){return this.len}isEqual(t){return He.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof He?t.forEach((i=>{e.push(i)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,i=this.limit();e<i;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const i=Math.min(t.length,e.length);for(let s=0;s<i;s++){const r=He.compareSegments(t.get(s),e.get(s));if(r!==0)return r}return ct(t.length,e.length)}static compareSegments(t,e){const i=He.isNumericId(t),s=He.isNumericId(e);return i&&!s?-1:!i&&s?1:i&&s?He.extractNumericId(t).compare(He.extractNumericId(e)):Nl(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return jn.fromString(t.substring(4,t.length-2))}}class Mt extends He{construct(t,e,i){return new Mt(t,e,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const i of t){if(i.indexOf("//")>=0)throw new H(N.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);e.push(...i.split("/").filter((s=>s.length>0)))}return new Mt(e)}static emptyPath(){return new Mt([])}}const X0=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ie extends He{construct(t,e,i){return new ie(t,e,i)}static isValidIdentifier(t){return X0.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ie.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===zh}static keyField(){return new ie([zh])}static fromServerFormat(t){const e=[];let i="",s=0;const r=()=>{if(i.length===0)throw new H(N.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(i),i=""};let o=!1;for(;s<t.length;){const a=t[s];if(a==="\\"){if(s+1===t.length)throw new H(N.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const l=t[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new H(N.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);i+=l,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(i+=a,s++):(r(),s++)}if(r(),o)throw new H(N.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new ie(e)}static emptyPath(){return new ie([])}}/**
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
 */function J0(n,t,e){if(!e)throw new H(N.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function Z0(n,t,e,i){if(t===!0&&i===!0)throw new H(N.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function Bh(n){if(!W.isDocumentKey(n))throw new H(N.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function rg(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Sc(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=(function(i){return i.constructor?i.constructor.name:null})(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":K(12329,{type:typeof n})}function lr(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new H(N.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Sc(n);throw new H(N.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
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
 */function Wt(n,t){const e={typeString:n};return t&&(e.value=t),e}function Pr(n,t){if(!rg(n))throw new H(N.INVALID_ARGUMENT,"JSON must be an object");let e;for(const i in t)if(t[i]){const s=t[i].typeString,r="value"in t[i]?{value:t[i].value}:void 0;if(!(i in n)){e=`JSON missing required field: '${i}'`;break}const o=n[i];if(s&&typeof o!==s){e=`JSON field '${i}' must be a ${s}.`;break}if(r!==void 0&&o!==r.value){e=`Expected '${i}' field to equal '${r.value}'`;break}}if(e)throw new H(N.INVALID_ARGUMENT,e);return!0}/**
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
 */const jh=-62135596800,Hh=1e6;class Ct{static now(){return Ct.fromMillis(Date.now())}static fromDate(t){return Ct.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),i=Math.floor((t-1e3*e)*Hh);return new Ct(e,i)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new H(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new H(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<jh)throw new H(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new H(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Hh}_compareTo(t){return this.seconds===t.seconds?ct(this.nanoseconds,t.nanoseconds):ct(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ct._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(Pr(t,Ct._jsonSchema))return new Ct(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-jh;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ct._jsonSchemaVersion="firestore/timestamp/1.0",Ct._jsonSchema={type:Wt("string",Ct._jsonSchemaVersion),seconds:Wt("number"),nanoseconds:Wt("number")};/**
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
 */const cr=-1;function tE(n,t){const e=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,s=J.fromTimestamp(i===1e9?new Ct(e+1,0):new Ct(e,i));return new Kn(s,W.empty(),t)}function eE(n){return new Kn(n.readTime,n.key,cr)}class Kn{constructor(t,e,i){this.readTime=t,this.documentKey=e,this.largestBatchId=i}static min(){return new Kn(J.min(),W.empty(),cr)}static max(){return new Kn(J.max(),W.empty(),cr)}}function nE(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=W.comparator(n.documentKey,t.documentKey),e!==0?e:ct(n.largestBatchId,t.largestBatchId))}/**
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
 */const iE="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class sE{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}/**
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
 */async function ps(n){if(n.code!==N.FAILED_PRECONDITION||n.message!==iE)throw n;$("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class V{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&K(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new V(((i,s)=>{this.nextCallback=r=>{this.wrapSuccess(t,r).next(i,s)},this.catchCallback=r=>{this.wrapFailure(e,r).next(i,s)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof V?e:V.resolve(e)}catch(e){return V.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):V.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):V.reject(e)}static resolve(t){return new V(((e,i)=>{e(t)}))}static reject(t){return new V(((e,i)=>{i(t)}))}static waitFor(t){return new V(((e,i)=>{let s=0,r=0,o=!1;t.forEach((a=>{++s,a.next((()=>{++r,o&&r===s&&e()}),(l=>i(l)))})),o=!0,r===s&&e()}))}static or(t){let e=V.resolve(!1);for(const i of t)e=e.next((s=>s?V.resolve(s):i()));return e}static forEach(t,e){const i=[];return t.forEach(((s,r)=>{i.push(e.call(this,s,r))})),this.waitFor(i)}static mapArray(t,e){return new V(((i,s)=>{const r=t.length,o=new Array(r);let a=0;for(let l=0;l<r;l++){const u=l;e(t[u]).next((h=>{o[u]=h,++a,a===r&&i(o)}),(h=>s(h)))}}))}static doWhile(t,e){return new V(((i,s)=>{const r=()=>{t()===!0?e().next((()=>{r()}),s):i()};r()}))}}function rE(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function gs(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class ma{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=i=>this.ae(i),this.ue=i=>e.writeSequenceNumber(i))}ae(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ue&&this.ue(t),t}}ma.ce=-1;/**
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
 */const xc=-1;function _a(n){return n==null}function Bo(n){return n===0&&1/n==-1/0}function oE(n){return typeof n=="number"&&Number.isInteger(n)&&!Bo(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const og="";function aE(n){let t="";for(let e=0;e<n.length;e++)t.length>0&&(t=Wh(t)),t=lE(n.get(e),t);return Wh(t)}function lE(n,t){let e=t;const i=n.length;for(let s=0;s<i;s++){const r=n.charAt(s);switch(r){case"\0":e+="";break;case og:e+="";break;default:e+=r}}return e}function Wh(n){return n+og+""}/**
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
 */function qh(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function Pi(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function ag(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
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
 */class Lt{constructor(t,e){this.comparator=t,this.root=e||ne.EMPTY}insert(t,e){return new Lt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,ne.BLACK,null,null))}remove(t){return new Lt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,ne.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const i=this.comparator(t,e.key);if(i===0)return e.value;i<0?e=e.left:i>0&&(e=e.right)}return null}indexOf(t){let e=0,i=this.root;for(;!i.isEmpty();){const s=this.comparator(t,i.key);if(s===0)return e+i.left.size;s<0?i=i.left:(e+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,i)=>(t(e,i),!1)))}toString(){const t=[];return this.inorderTraversal(((e,i)=>(t.push(`${e}:${i}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Qr(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Qr(this.root,t,this.comparator,!1)}getReverseIterator(){return new Qr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Qr(this.root,t,this.comparator,!0)}}class Qr{constructor(t,e,i,s){this.isReverse=s,this.nodeStack=[];let r=1;for(;!t.isEmpty();)if(r=e?i(t.key,e):1,e&&s&&(r*=-1),r<0)t=this.isReverse?t.left:t.right;else{if(r===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class ne{constructor(t,e,i,s,r){this.key=t,this.value=e,this.color=i??ne.RED,this.left=s??ne.EMPTY,this.right=r??ne.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,i,s,r){return new ne(t??this.key,e??this.value,i??this.color,s??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,i){let s=this;const r=i(t,s.key);return s=r<0?s.copy(null,null,null,s.left.insert(t,e,i),null):r===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,i)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ne.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let i,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return ne.EMPTY;i=s.right.min(),s=s.copy(i.key,i.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,ne.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,ne.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw K(43730,{key:this.key,value:this.value});if(this.right.isRed())throw K(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw K(27949);return t+(this.isRed()?0:1)}}ne.EMPTY=null,ne.RED=!0,ne.BLACK=!1;ne.EMPTY=new class{constructor(){this.size=0}get key(){throw K(57766)}get value(){throw K(16141)}get color(){throw K(16727)}get left(){throw K(29726)}get right(){throw K(36894)}copy(t,e,i,s,r){return this}insert(t,e,i){return new ne(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Qt{constructor(t){this.comparator=t,this.data=new Lt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,i)=>(t(e),!1)))}forEachInRange(t,e){const i=this.data.getIteratorFrom(t[0]);for(;i.hasNext();){const s=i.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let i;for(i=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();i.hasNext();)if(!t(i.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Kh(this.data.getIterator())}getIteratorFrom(t){return new Kh(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((i=>{e=e.add(i)})),e}isEqual(t){if(!(t instanceof Qt)||this.size!==t.size)return!1;const e=this.data.getIterator(),i=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,r=i.getNext().key;if(this.comparator(s,r)!==0)return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new Qt(this.comparator);return e.data=t,e}}class Kh{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Le{constructor(t){this.fields=t,t.sort(ie.comparator)}static empty(){return new Le([])}unionWith(t){let e=new Qt(ie.comparator);for(const i of this.fields)e=e.add(i);for(const i of t)e=e.add(i);return new Le(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return ns(this.fields,t.fields,((e,i)=>e.isEqual(i)))}}/**
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
 */class lg extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class se{constructor(t){this.binaryString=t}static fromBase64String(t){const e=(function(s){try{return atob(s)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new lg("Invalid base64 string: "+r):r}})(t);return new se(e)}static fromUint8Array(t){const e=(function(s){let r="";for(let o=0;o<s.length;++o)r+=String.fromCharCode(s[o]);return r})(t);return new se(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(e){return btoa(e)})(this.binaryString)}toUint8Array(){return(function(e){const i=new Uint8Array(e.length);for(let s=0;s<e.length;s++)i[s]=e.charCodeAt(s);return i})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return ct(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}se.EMPTY_BYTE_STRING=new se("");const cE=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Gn(n){if(vt(!!n,39018),typeof n=="string"){let t=0;const e=cE.exec(n);if(vt(!!e,46558,{timestamp:n}),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:t}}return{seconds:zt(n.seconds),nanos:zt(n.nanos)}}function zt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Yn(n){return typeof n=="string"?se.fromBase64String(n):se.fromUint8Array(n)}/**
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
 */const cg="server_timestamp",ug="__type__",hg="__previous_value__",dg="__local_write_time__";function Ac(n){var e,i;return((i=(((e=n==null?void 0:n.mapValue)==null?void 0:e.fields)||{})[ug])==null?void 0:i.stringValue)===cg}function ya(n){const t=n.mapValue.fields[hg];return Ac(t)?ya(t):t}function ur(n){const t=Gn(n.mapValue.fields[dg].timestampValue);return new Ct(t.seconds,t.nanos)}/**
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
 */class uE{constructor(t,e,i,s,r,o,a,l,u,h,d){this.databaseId=t,this.appId=e,this.persistenceKey=i,this.host=s,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u,this.isUsingEmulator=h,this.apiKey=d}}const jo="(default)";class hr{constructor(t,e){this.projectId=t,this.database=e||jo}static empty(){return new hr("","")}get isDefaultDatabase(){return this.database===jo}isEqual(t){return t instanceof hr&&t.projectId===this.projectId&&t.database===this.database}}function hE(n,t){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new H(N.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new hr(n.options.projectId,t)}/**
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
 */const fg="__type__",dE="__max__",Xr={mapValue:{}},pg="__vector__",Ho="value";function Qn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Ac(n)?4:pE(n)?9007199254740991:fE(n)?10:11:K(28295,{value:n})}function Xe(n,t){if(n===t)return!0;const e=Qn(n);if(e!==Qn(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return ur(n).isEqual(ur(t));case 3:return(function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const o=Gn(s.timestampValue),a=Gn(r.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos})(n,t);case 5:return n.stringValue===t.stringValue;case 6:return(function(s,r){return Yn(s.bytesValue).isEqual(Yn(r.bytesValue))})(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return(function(s,r){return zt(s.geoPointValue.latitude)===zt(r.geoPointValue.latitude)&&zt(s.geoPointValue.longitude)===zt(r.geoPointValue.longitude)})(n,t);case 2:return(function(s,r){if("integerValue"in s&&"integerValue"in r)return zt(s.integerValue)===zt(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const o=zt(s.doubleValue),a=zt(r.doubleValue);return o===a?Bo(o)===Bo(a):isNaN(o)&&isNaN(a)}return!1})(n,t);case 9:return ns(n.arrayValue.values||[],t.arrayValue.values||[],Xe);case 10:case 11:return(function(s,r){const o=s.mapValue.fields||{},a=r.mapValue.fields||{};if(qh(o)!==qh(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Xe(o[l],a[l])))return!1;return!0})(n,t);default:return K(52216,{left:n})}}function dr(n,t){return(n.values||[]).find((e=>Xe(e,t)))!==void 0}function is(n,t){if(n===t)return 0;const e=Qn(n),i=Qn(t);if(e!==i)return ct(e,i);switch(e){case 0:case 9007199254740991:return 0;case 1:return ct(n.booleanValue,t.booleanValue);case 2:return(function(r,o){const a=zt(r.integerValue||r.doubleValue),l=zt(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1})(n,t);case 3:return Gh(n.timestampValue,t.timestampValue);case 4:return Gh(ur(n),ur(t));case 5:return Nl(n.stringValue,t.stringValue);case 6:return(function(r,o){const a=Yn(r),l=Yn(o);return a.compareTo(l)})(n.bytesValue,t.bytesValue);case 7:return(function(r,o){const a=r.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const h=ct(a[u],l[u]);if(h!==0)return h}return ct(a.length,l.length)})(n.referenceValue,t.referenceValue);case 8:return(function(r,o){const a=ct(zt(r.latitude),zt(o.latitude));return a!==0?a:ct(zt(r.longitude),zt(o.longitude))})(n.geoPointValue,t.geoPointValue);case 9:return Yh(n.arrayValue,t.arrayValue);case 10:return(function(r,o){var p,y,S,b;const a=r.fields||{},l=o.fields||{},u=(p=a[Ho])==null?void 0:p.arrayValue,h=(y=l[Ho])==null?void 0:y.arrayValue,d=ct(((S=u==null?void 0:u.values)==null?void 0:S.length)||0,((b=h==null?void 0:h.values)==null?void 0:b.length)||0);return d!==0?d:Yh(u,h)})(n.mapValue,t.mapValue);case 11:return(function(r,o){if(r===Xr.mapValue&&o===Xr.mapValue)return 0;if(r===Xr.mapValue)return 1;if(o===Xr.mapValue)return-1;const a=r.fields||{},l=Object.keys(a),u=o.fields||{},h=Object.keys(u);l.sort(),h.sort();for(let d=0;d<l.length&&d<h.length;++d){const p=Nl(l[d],h[d]);if(p!==0)return p;const y=is(a[l[d]],u[h[d]]);if(y!==0)return y}return ct(l.length,h.length)})(n.mapValue,t.mapValue);default:throw K(23264,{he:e})}}function Gh(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return ct(n,t);const e=Gn(n),i=Gn(t),s=ct(e.seconds,i.seconds);return s!==0?s:ct(e.nanos,i.nanos)}function Yh(n,t){const e=n.values||[],i=t.values||[];for(let s=0;s<e.length&&s<i.length;++s){const r=is(e[s],i[s]);if(r)return r}return ct(e.length,i.length)}function ss(n){return Fl(n)}function Fl(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(e){const i=Gn(e);return`time(${i.seconds},${i.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(e){return Yn(e).toBase64()})(n.bytesValue):"referenceValue"in n?(function(e){return W.fromName(e).toString()})(n.referenceValue):"geoPointValue"in n?(function(e){return`geo(${e.latitude},${e.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(e){let i="[",s=!0;for(const r of e.values||[])s?s=!1:i+=",",i+=Fl(r);return i+"]"})(n.arrayValue):"mapValue"in n?(function(e){const i=Object.keys(e.fields||{}).sort();let s="{",r=!0;for(const o of i)r?r=!1:s+=",",s+=`${o}:${Fl(e.fields[o])}`;return s+"}"})(n.mapValue):K(61005,{value:n})}function Eo(n){switch(Qn(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=ya(n);return t?16+Eo(t):16;case 5:return 2*n.stringValue.length;case 6:return Yn(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(i){return(i.values||[]).reduce(((s,r)=>s+Eo(r)),0)})(n.arrayValue);case 10:case 11:return(function(i){let s=0;return Pi(i.fields,((r,o)=>{s+=r.length+Eo(o)})),s})(n.mapValue);default:throw K(13486,{value:n})}}function $l(n){return!!n&&"integerValue"in n}function Pc(n){return!!n&&"arrayValue"in n}function Qh(n){return!!n&&"nullValue"in n}function Xh(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function wo(n){return!!n&&"mapValue"in n}function fE(n){var e,i;return((i=(((e=n==null?void 0:n.mapValue)==null?void 0:e.fields)||{})[fg])==null?void 0:i.stringValue)===pg}function Qs(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const t={mapValue:{fields:{}}};return Pi(n.mapValue.fields,((e,i)=>t.mapValue.fields[e]=Qs(i))),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Qs(n.arrayValue.values[e]);return t}return{...n}}function pE(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===dE}/**
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
 */class Pe{constructor(t){this.value=t}static empty(){return new Pe({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let i=0;i<t.length-1;++i)if(e=(e.mapValue.fields||{})[t.get(i)],!wo(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Qs(e)}setAll(t){let e=ie.emptyPath(),i={},s=[];t.forEach(((o,a)=>{if(!e.isImmediateParentOf(a)){const l=this.getFieldsMap(e);this.applyChanges(l,i,s),i={},s=[],e=a.popLast()}o?i[a.lastSegment()]=Qs(o):s.push(a.lastSegment())}));const r=this.getFieldsMap(e);this.applyChanges(r,i,s)}delete(t){const e=this.field(t.popLast());wo(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Xe(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let i=0;i<t.length;++i){let s=e.mapValue.fields[t.get(i)];wo(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(i)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,i){Pi(e,((s,r)=>t[s]=r));for(const s of i)delete t[s]}clone(){return new Pe(Qs(this.value))}}function gg(n){const t=[];return Pi(n.fields,((e,i)=>{const s=new ie([e]);if(wo(i)){const r=gg(i.mapValue).fields;if(r.length===0)t.push(s);else for(const o of r)t.push(s.child(o))}else t.push(s)})),new Le(t)}/**
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
 */class ce{constructor(t,e,i,s,r,o,a){this.key=t,this.documentType=e,this.version=i,this.readTime=s,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(t){return new ce(t,0,J.min(),J.min(),J.min(),Pe.empty(),0)}static newFoundDocument(t,e,i,s){return new ce(t,1,e,J.min(),i,s,0)}static newNoDocument(t,e){return new ce(t,2,e,J.min(),J.min(),Pe.empty(),0)}static newUnknownDocument(t,e){return new ce(t,3,e,J.min(),J.min(),Pe.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(J.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Pe.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Pe.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=J.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof ce&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new ce(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Wo{constructor(t,e){this.position=t,this.inclusive=e}}function Jh(n,t,e){let i=0;for(let s=0;s<n.position.length;s++){const r=t[s],o=n.position[s];if(r.field.isKeyField()?i=W.comparator(W.fromName(o.referenceValue),e.key):i=is(o,e.data.field(r.field)),r.dir==="desc"&&(i*=-1),i!==0)break}return i}function Zh(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!Xe(n.position[e],t.position[e]))return!1;return!0}/**
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
 */class qo{constructor(t,e="asc"){this.field=t,this.dir=e}}function gE(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
 */class mg{}class Kt extends mg{constructor(t,e,i){super(),this.field=t,this.op=e,this.value=i}static create(t,e,i){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,i):new _E(t,e,i):e==="array-contains"?new vE(t,i):e==="in"?new EE(t,i):e==="not-in"?new wE(t,i):e==="array-contains-any"?new TE(t,i):new Kt(t,e,i)}static createKeyFieldInFilter(t,e,i){return e==="in"?new yE(t,i):new bE(t,i)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&e.nullValue===void 0&&this.matchesComparison(is(e,this.value)):e!==null&&Qn(this.value)===Qn(e)&&this.matchesComparison(is(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return K(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Je extends mg{constructor(t,e){super(),this.filters=t,this.op=e,this.Pe=null}static create(t,e){return new Je(t,e)}matches(t){return _g(this)?this.filters.find((e=>!e.matches(t)))===void 0:this.filters.find((e=>e.matches(t)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function _g(n){return n.op==="and"}function yg(n){return mE(n)&&_g(n)}function mE(n){for(const t of n.filters)if(t instanceof Je)return!1;return!0}function Ul(n){if(n instanceof Kt)return n.field.canonicalString()+n.op.toString()+ss(n.value);if(yg(n))return n.filters.map((t=>Ul(t))).join(",");{const t=n.filters.map((e=>Ul(e))).join(",");return`${n.op}(${t})`}}function bg(n,t){return n instanceof Kt?(function(i,s){return s instanceof Kt&&i.op===s.op&&i.field.isEqual(s.field)&&Xe(i.value,s.value)})(n,t):n instanceof Je?(function(i,s){return s instanceof Je&&i.op===s.op&&i.filters.length===s.filters.length?i.filters.reduce(((r,o,a)=>r&&bg(o,s.filters[a])),!0):!1})(n,t):void K(19439)}function vg(n){return n instanceof Kt?(function(e){return`${e.field.canonicalString()} ${e.op} ${ss(e.value)}`})(n):n instanceof Je?(function(e){return e.op.toString()+" {"+e.getFilters().map(vg).join(" ,")+"}"})(n):"Filter"}class _E extends Kt{constructor(t,e,i){super(t,e,i),this.key=W.fromName(i.referenceValue)}matches(t){const e=W.comparator(t.key,this.key);return this.matchesComparison(e)}}class yE extends Kt{constructor(t,e){super(t,"in",e),this.keys=Eg("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class bE extends Kt{constructor(t,e){super(t,"not-in",e),this.keys=Eg("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function Eg(n,t){var e;return(((e=t.arrayValue)==null?void 0:e.values)||[]).map((i=>W.fromName(i.referenceValue)))}class vE extends Kt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Pc(e)&&dr(e.arrayValue,this.value)}}class EE extends Kt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&dr(this.value.arrayValue,e)}}class wE extends Kt{constructor(t,e){super(t,"not-in",e)}matches(t){if(dr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&e.nullValue===void 0&&!dr(this.value.arrayValue,e)}}class TE extends Kt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Pc(e)||!e.arrayValue.values)&&e.arrayValue.values.some((i=>dr(this.value.arrayValue,i)))}}/**
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
 */class IE{constructor(t,e=null,i=[],s=[],r=null,o=null,a=null){this.path=t,this.collectionGroup=e,this.orderBy=i,this.filters=s,this.limit=r,this.startAt=o,this.endAt=a,this.Te=null}}function td(n,t=null,e=[],i=[],s=null,r=null,o=null){return new IE(n,t,e,i,s,r,o)}function kc(n){const t=Z(n);if(t.Te===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((i=>Ul(i))).join(","),e+="|ob:",e+=t.orderBy.map((i=>(function(r){return r.field.canonicalString()+r.dir})(i))).join(","),_a(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((i=>ss(i))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((i=>ss(i))).join(",")),t.Te=e}return t.Te}function Rc(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!gE(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!bg(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!Zh(n.startAt,t.startAt)&&Zh(n.endAt,t.endAt)}function zl(n){return W.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class ba{constructor(t,e=null,i=[],s=[],r=null,o="F",a=null,l=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=i,this.filters=s,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=l,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function SE(n,t,e,i,s,r,o,a){return new ba(n,t,e,i,s,r,o,a)}function Cc(n){return new ba(n)}function ed(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function xE(n){return W.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function AE(n){return n.collectionGroup!==null}function Xs(n){const t=Z(n);if(t.Ie===null){t.Ie=[];const e=new Set;for(const r of t.explicitOrderBy)t.Ie.push(r),e.add(r.field.canonicalString());const i=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Qt(ie.comparator);return o.filters.forEach((l=>{l.getFlattenedFilters().forEach((u=>{u.isInequality()&&(a=a.add(u.field))}))})),a})(t).forEach((r=>{e.has(r.canonicalString())||r.isKeyField()||t.Ie.push(new qo(r,i))})),e.has(ie.keyField().canonicalString())||t.Ie.push(new qo(ie.keyField(),i))}return t.Ie}function qe(n){const t=Z(n);return t.Ee||(t.Ee=PE(t,Xs(n))),t.Ee}function PE(n,t){if(n.limitType==="F")return td(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map((s=>{const r=s.dir==="desc"?"asc":"desc";return new qo(s.field,r)}));const e=n.endAt?new Wo(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new Wo(n.startAt.position,n.startAt.inclusive):null;return td(n.path,n.collectionGroup,t,n.filters,n.limit,e,i)}}function Bl(n,t,e){return new ba(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function va(n,t){return Rc(qe(n),qe(t))&&n.limitType===t.limitType}function wg(n){return`${kc(qe(n))}|lt:${n.limitType}`}function zi(n){return`Query(target=${(function(e){let i=e.path.canonicalString();return e.collectionGroup!==null&&(i+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(i+=`, filters: [${e.filters.map((s=>vg(s))).join(", ")}]`),_a(e.limit)||(i+=", limit: "+e.limit),e.orderBy.length>0&&(i+=`, orderBy: [${e.orderBy.map((s=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(s))).join(", ")}]`),e.startAt&&(i+=", startAt: ",i+=e.startAt.inclusive?"b:":"a:",i+=e.startAt.position.map((s=>ss(s))).join(",")),e.endAt&&(i+=", endAt: ",i+=e.endAt.inclusive?"a:":"b:",i+=e.endAt.position.map((s=>ss(s))).join(",")),`Target(${i})`})(qe(n))}; limitType=${n.limitType})`}function Ea(n,t){return t.isFoundDocument()&&(function(i,s){const r=s.key.path;return i.collectionGroup!==null?s.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(r):W.isDocumentKey(i.path)?i.path.isEqual(r):i.path.isImmediateParentOf(r)})(n,t)&&(function(i,s){for(const r of Xs(i))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0})(n,t)&&(function(i,s){for(const r of i.filters)if(!r.matches(s))return!1;return!0})(n,t)&&(function(i,s){return!(i.startAt&&!(function(o,a,l){const u=Jh(o,a,l);return o.inclusive?u<=0:u<0})(i.startAt,Xs(i),s)||i.endAt&&!(function(o,a,l){const u=Jh(o,a,l);return o.inclusive?u>=0:u>0})(i.endAt,Xs(i),s))})(n,t)}function kE(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Tg(n){return(t,e)=>{let i=!1;for(const s of Xs(n)){const r=RE(s,t,e);if(r!==0)return r;i=i||s.field.isKeyField()}return 0}}function RE(n,t,e){const i=n.field.isKeyField()?W.comparator(t.key,e.key):(function(r,o,a){const l=o.data.field(r),u=a.data.field(r);return l!==null&&u!==null?is(l,u):K(42886)})(n.field,t,e);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return K(19790,{direction:n.dir})}}/**
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
 */class ki{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),i=this.inner[e];if(i!==void 0){for(const[s,r]of i)if(this.equalsFn(s,t))return r}}has(t){return this.get(t)!==void 0}set(t,e){const i=this.mapKeyFn(t),s=this.inner[i];if(s===void 0)return this.inner[i]=[[t,e]],void this.innerSize++;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],t))return void(s[r]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),i=this.inner[e];if(i===void 0)return!1;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],t))return i.length===1?delete this.inner[e]:i.splice(s,1),this.innerSize--,!0;return!1}forEach(t){Pi(this.inner,((e,i)=>{for(const[s,r]of i)t(s,r)}))}isEmpty(){return ag(this.inner)}size(){return this.innerSize}}/**
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
 */const CE=new Lt(W.comparator);function bn(){return CE}const Ig=new Lt(W.comparator);function Us(...n){let t=Ig;for(const e of n)t=t.insert(e.key,e);return t}function Sg(n){let t=Ig;return n.forEach(((e,i)=>t=t.insert(e,i.overlayedDocument))),t}function di(){return Js()}function xg(){return Js()}function Js(){return new ki((n=>n.toString()),((n,t)=>n.isEqual(t)))}const DE=new Lt(W.comparator),ME=new Qt(W.comparator);function ut(...n){let t=ME;for(const e of n)t=t.add(e);return t}const OE=new Qt(ct);function LE(){return OE}/**
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
 */function Dc(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Bo(t)?"-0":t}}function Ag(n){return{integerValue:""+n}}function VE(n,t){return oE(t)?Ag(t):Dc(n,t)}/**
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
 */class wa{constructor(){this._=void 0}}function NE(n,t,e){return n instanceof Ko?(function(s,r){const o={fields:{[ug]:{stringValue:cg},[dg]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&Ac(r)&&(r=ya(r)),r&&(o.fields[hg]=r),{mapValue:o}})(e,t):n instanceof fr?kg(n,t):n instanceof pr?Rg(n,t):(function(s,r){const o=Pg(s,r),a=nd(o)+nd(s.Ae);return $l(o)&&$l(s.Ae)?Ag(a):Dc(s.serializer,a)})(n,t)}function FE(n,t,e){return n instanceof fr?kg(n,t):n instanceof pr?Rg(n,t):e}function Pg(n,t){return n instanceof Go?(function(i){return $l(i)||(function(r){return!!r&&"doubleValue"in r})(i)})(t)?t:{integerValue:0}:null}class Ko extends wa{}class fr extends wa{constructor(t){super(),this.elements=t}}function kg(n,t){const e=Cg(t);for(const i of n.elements)e.some((s=>Xe(s,i)))||e.push(i);return{arrayValue:{values:e}}}class pr extends wa{constructor(t){super(),this.elements=t}}function Rg(n,t){let e=Cg(t);for(const i of n.elements)e=e.filter((s=>!Xe(s,i)));return{arrayValue:{values:e}}}class Go extends wa{constructor(t,e){super(),this.serializer=t,this.Ae=e}}function nd(n){return zt(n.integerValue||n.doubleValue)}function Cg(n){return Pc(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function $E(n,t){return n.field.isEqual(t.field)&&(function(i,s){return i instanceof fr&&s instanceof fr||i instanceof pr&&s instanceof pr?ns(i.elements,s.elements,Xe):i instanceof Go&&s instanceof Go?Xe(i.Ae,s.Ae):i instanceof Ko&&s instanceof Ko})(n.transform,t.transform)}class UE{constructor(t,e){this.version=t,this.transformResults=e}}class gn{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new gn}static exists(t){return new gn(void 0,t)}static updateTime(t){return new gn(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function To(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class Ta{}function Dg(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new Og(n.key,gn.none()):new kr(n.key,n.data,gn.none());{const e=n.data,i=Pe.empty();let s=new Qt(ie.comparator);for(let r of t.fields)if(!s.has(r)){let o=e.field(r);o===null&&r.length>1&&(r=r.popLast(),o=e.field(r)),o===null?i.delete(r):i.set(r,o),s=s.add(r)}return new Ri(n.key,i,new Le(s.toArray()),gn.none())}}function zE(n,t,e){n instanceof kr?(function(s,r,o){const a=s.value.clone(),l=sd(s.fieldTransforms,r,o.transformResults);a.setAll(l),r.convertToFoundDocument(o.version,a).setHasCommittedMutations()})(n,t,e):n instanceof Ri?(function(s,r,o){if(!To(s.precondition,r))return void r.convertToUnknownDocument(o.version);const a=sd(s.fieldTransforms,r,o.transformResults),l=r.data;l.setAll(Mg(s)),l.setAll(a),r.convertToFoundDocument(o.version,l).setHasCommittedMutations()})(n,t,e):(function(s,r,o){r.convertToNoDocument(o.version).setHasCommittedMutations()})(0,t,e)}function Zs(n,t,e,i){return n instanceof kr?(function(r,o,a,l){if(!To(r.precondition,o))return a;const u=r.value.clone(),h=rd(r.fieldTransforms,l,o);return u.setAll(h),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null})(n,t,e,i):n instanceof Ri?(function(r,o,a,l){if(!To(r.precondition,o))return a;const u=rd(r.fieldTransforms,l,o),h=o.data;return h.setAll(Mg(r)),h.setAll(u),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map((d=>d.field)))})(n,t,e,i):(function(r,o,a){return To(r.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a})(n,t,e)}function BE(n,t){let e=null;for(const i of n.fieldTransforms){const s=t.data.field(i.field),r=Pg(i.transform,s||null);r!=null&&(e===null&&(e=Pe.empty()),e.set(i.field,r))}return e||null}function id(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!(function(i,s){return i===void 0&&s===void 0||!(!i||!s)&&ns(i,s,((r,o)=>$E(r,o)))})(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class kr extends Ta{constructor(t,e,i,s=[]){super(),this.key=t,this.value=e,this.precondition=i,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Ri extends Ta{constructor(t,e,i,s,r=[]){super(),this.key=t,this.data=e,this.fieldMask=i,this.precondition=s,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function Mg(n){const t=new Map;return n.fieldMask.fields.forEach((e=>{if(!e.isEmpty()){const i=n.data.field(e);t.set(e,i)}})),t}function sd(n,t,e){const i=new Map;vt(n.length===e.length,32656,{Ve:e.length,de:n.length});for(let s=0;s<e.length;s++){const r=n[s],o=r.transform,a=t.data.field(r.field);i.set(r.field,FE(o,a,e[s]))}return i}function rd(n,t,e){const i=new Map;for(const s of n){const r=s.transform,o=e.data.field(s.field);i.set(s.field,NE(r,o,t))}return i}class Og extends Ta{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class jE extends Ta{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class HE{constructor(t,e,i,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=i,this.mutations=s}applyToRemoteDocument(t,e){const i=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const r=this.mutations[s];r.key.isEqual(t.key)&&zE(r,t,i[s])}}applyToLocalView(t,e){for(const i of this.baseMutations)i.key.isEqual(t.key)&&(e=Zs(i,t,e,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(t.key)&&(e=Zs(i,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const i=xg();return this.mutations.forEach((s=>{const r=t.get(s.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=e.has(s.key)?null:a;const l=Dg(o,a);l!==null&&i.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(J.min())})),i}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),ut())}isEqual(t){return this.batchId===t.batchId&&ns(this.mutations,t.mutations,((e,i)=>id(e,i)))&&ns(this.baseMutations,t.baseMutations,((e,i)=>id(e,i)))}}class Mc{constructor(t,e,i,s){this.batch=t,this.commitVersion=e,this.mutationResults=i,this.docVersions=s}static from(t,e,i){vt(t.mutations.length===i.length,58842,{me:t.mutations.length,fe:i.length});let s=(function(){return DE})();const r=t.mutations;for(let o=0;o<r.length;o++)s=s.insert(r[o].key,i[o].version);return new Mc(t,e,i,s)}}/**
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
 */var Ht,pt;function KE(n){switch(n){case N.OK:return K(64938);case N.CANCELLED:case N.UNKNOWN:case N.DEADLINE_EXCEEDED:case N.RESOURCE_EXHAUSTED:case N.INTERNAL:case N.UNAVAILABLE:case N.UNAUTHENTICATED:return!1;case N.INVALID_ARGUMENT:case N.NOT_FOUND:case N.ALREADY_EXISTS:case N.PERMISSION_DENIED:case N.FAILED_PRECONDITION:case N.ABORTED:case N.OUT_OF_RANGE:case N.UNIMPLEMENTED:case N.DATA_LOSS:return!0;default:return K(15467,{code:n})}}function Lg(n){if(n===void 0)return yn("GRPC error has no .code"),N.UNKNOWN;switch(n){case Ht.OK:return N.OK;case Ht.CANCELLED:return N.CANCELLED;case Ht.UNKNOWN:return N.UNKNOWN;case Ht.DEADLINE_EXCEEDED:return N.DEADLINE_EXCEEDED;case Ht.RESOURCE_EXHAUSTED:return N.RESOURCE_EXHAUSTED;case Ht.INTERNAL:return N.INTERNAL;case Ht.UNAVAILABLE:return N.UNAVAILABLE;case Ht.UNAUTHENTICATED:return N.UNAUTHENTICATED;case Ht.INVALID_ARGUMENT:return N.INVALID_ARGUMENT;case Ht.NOT_FOUND:return N.NOT_FOUND;case Ht.ALREADY_EXISTS:return N.ALREADY_EXISTS;case Ht.PERMISSION_DENIED:return N.PERMISSION_DENIED;case Ht.FAILED_PRECONDITION:return N.FAILED_PRECONDITION;case Ht.ABORTED:return N.ABORTED;case Ht.OUT_OF_RANGE:return N.OUT_OF_RANGE;case Ht.UNIMPLEMENTED:return N.UNIMPLEMENTED;case Ht.DATA_LOSS:return N.DATA_LOSS;default:return K(39323,{code:n})}}(pt=Ht||(Ht={}))[pt.OK=0]="OK",pt[pt.CANCELLED=1]="CANCELLED",pt[pt.UNKNOWN=2]="UNKNOWN",pt[pt.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",pt[pt.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",pt[pt.NOT_FOUND=5]="NOT_FOUND",pt[pt.ALREADY_EXISTS=6]="ALREADY_EXISTS",pt[pt.PERMISSION_DENIED=7]="PERMISSION_DENIED",pt[pt.UNAUTHENTICATED=16]="UNAUTHENTICATED",pt[pt.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",pt[pt.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",pt[pt.ABORTED=10]="ABORTED",pt[pt.OUT_OF_RANGE=11]="OUT_OF_RANGE",pt[pt.UNIMPLEMENTED=12]="UNIMPLEMENTED",pt[pt.INTERNAL=13]="INTERNAL",pt[pt.UNAVAILABLE=14]="UNAVAILABLE",pt[pt.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const YE=new jn([4294967295,4294967295],0);function od(n){const t=GE().encode(n),e=new Xp;return e.update(t),new Uint8Array(e.digest())}function ad(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),i=t.getUint32(4,!0),s=t.getUint32(8,!0),r=t.getUint32(12,!0);return[new jn([e,i],0),new jn([s,r],0)]}class Oc{constructor(t,e,i){if(this.bitmap=t,this.padding=e,this.hashCount=i,e<0||e>=8)throw new zs(`Invalid padding: ${e}`);if(i<0)throw new zs(`Invalid hash count: ${i}`);if(t.length>0&&this.hashCount===0)throw new zs(`Invalid hash count: ${i}`);if(t.length===0&&e!==0)throw new zs(`Invalid padding when bitmap length is 0: ${e}`);this.ge=8*t.length-e,this.pe=jn.fromNumber(this.ge)}ye(t,e,i){let s=t.add(e.multiply(jn.fromNumber(i)));return s.compare(YE)===1&&(s=new jn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.ge===0)return!1;const e=od(t),[i,s]=ad(e);for(let r=0;r<this.hashCount;r++){const o=this.ye(i,s,r);if(!this.we(o))return!1}return!0}static create(t,e,i){const s=t%8==0?0:8-t%8,r=new Uint8Array(Math.ceil(t/8)),o=new Oc(r,s,e);return i.forEach((a=>o.insert(a))),o}insert(t){if(this.ge===0)return;const e=od(t),[i,s]=ad(e);for(let r=0;r<this.hashCount;r++){const o=this.ye(i,s,r);this.be(o)}}be(t){const e=Math.floor(t/8),i=t%8;this.bitmap[e]|=1<<i}}class zs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Ia{constructor(t,e,i,s,r){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=i,this.documentUpdates=s,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(t,e,i){const s=new Map;return s.set(t,Rr.createSynthesizedTargetChangeForCurrentChange(t,e,i)),new Ia(J.min(),s,new Lt(ct),bn(),ut())}}class Rr{constructor(t,e,i,s,r){this.resumeToken=t,this.current=e,this.addedDocuments=i,this.modifiedDocuments=s,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(t,e,i){return new Rr(i,e,ut(),ut(),ut())}}/**
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
 */class Io{constructor(t,e,i,s){this.Se=t,this.removedTargetIds=e,this.key=i,this.De=s}}class Vg{constructor(t,e){this.targetId=t,this.Ce=e}}class Ng{constructor(t,e,i=se.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=i,this.cause=s}}class ld{constructor(){this.ve=0,this.Fe=cd(),this.Me=se.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(t){t.approximateByteSize()>0&&(this.Oe=!0,this.Me=t)}ke(){let t=ut(),e=ut(),i=ut();return this.Fe.forEach(((s,r)=>{switch(r){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:i=i.add(s);break;default:K(38017,{changeType:r})}})),new Rr(this.Me,this.xe,t,e,i)}Ke(){this.Oe=!1,this.Fe=cd()}qe(t,e){this.Oe=!0,this.Fe=this.Fe.insert(t,e)}Ue(t){this.Oe=!0,this.Fe=this.Fe.remove(t)}$e(){this.ve+=1}We(){this.ve-=1,vt(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class QE{constructor(t){this.Ge=t,this.ze=new Map,this.je=bn(),this.He=Jr(),this.Je=Jr(),this.Ze=new Lt(ct)}Xe(t){for(const e of t.Se)t.De&&t.De.isFoundDocument()?this.Ye(e,t.De):this.et(e,t.key,t.De);for(const e of t.removedTargetIds)this.et(e,t.key,t.De)}tt(t){this.forEachTarget(t,(e=>{const i=this.nt(e);switch(t.state){case 0:this.rt(e)&&i.Le(t.resumeToken);break;case 1:i.We(),i.Ne||i.Ke(),i.Le(t.resumeToken);break;case 2:i.We(),i.Ne||this.removeTarget(e);break;case 3:this.rt(e)&&(i.Qe(),i.Le(t.resumeToken));break;case 4:this.rt(e)&&(this.it(e),i.Le(t.resumeToken));break;default:K(56790,{state:t.state})}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.ze.forEach(((i,s)=>{this.rt(s)&&e(s)}))}st(t){const e=t.targetId,i=t.Ce.count,s=this.ot(e);if(s){const r=s.target;if(zl(r))if(i===0){const o=new W(r.path);this.et(e,o,ce.newNoDocument(o,J.min()))}else vt(i===1,20013,{expectedCount:i});else{const o=this._t(e);if(o!==i){const a=this.ut(t),l=a?this.ct(a,t,o):1;if(l!==0){this.it(e);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(e,u)}}}}}ut(t){const e=t.Ce.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:i="",padding:s=0},hashCount:r=0}=e;let o,a;try{o=Yn(i).toUint8Array()}catch(l){if(l instanceof lg)return Ti("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new Oc(o,s,r)}catch(l){return Ti(l instanceof zs?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.ge===0?null:a}ct(t,e,i){return e.Ce.count===i-this.Pt(t,e.targetId)?0:2}Pt(t,e){const i=this.Ge.getRemoteKeysForTarget(e);let s=0;return i.forEach((r=>{const o=this.Ge.ht(),a=`projects/${o.projectId}/databases/${o.database}/documents/${r.path.canonicalString()}`;t.mightContain(a)||(this.et(e,r,null),s++)})),s}Tt(t){const e=new Map;this.ze.forEach(((r,o)=>{const a=this.ot(o);if(a){if(r.current&&zl(a.target)){const l=new W(a.target.path);this.It(l).has(o)||this.Et(o,l)||this.et(o,l,ce.newNoDocument(l,t))}r.Be&&(e.set(o,r.ke()),r.Ke())}}));let i=ut();this.Je.forEach(((r,o)=>{let a=!0;o.forEachWhile((l=>{const u=this.ot(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)})),a&&(i=i.add(r))})),this.je.forEach(((r,o)=>o.setReadTime(t)));const s=new Ia(t,e,this.Ze,this.je,i);return this.je=bn(),this.He=Jr(),this.Je=Jr(),this.Ze=new Lt(ct),s}Ye(t,e){if(!this.rt(t))return;const i=this.Et(t,e.key)?2:0;this.nt(t).qe(e.key,i),this.je=this.je.insert(e.key,e),this.He=this.He.insert(e.key,this.It(e.key).add(t)),this.Je=this.Je.insert(e.key,this.Rt(e.key).add(t))}et(t,e,i){if(!this.rt(t))return;const s=this.nt(t);this.Et(t,e)?s.qe(e,1):s.Ue(e),this.Je=this.Je.insert(e,this.Rt(e).delete(t)),this.Je=this.Je.insert(e,this.Rt(e).add(t)),i&&(this.je=this.je.insert(e,i))}removeTarget(t){this.ze.delete(t)}_t(t){const e=this.nt(t).ke();return this.Ge.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}$e(t){this.nt(t).$e()}nt(t){let e=this.ze.get(t);return e||(e=new ld,this.ze.set(t,e)),e}Rt(t){let e=this.Je.get(t);return e||(e=new Qt(ct),this.Je=this.Je.insert(t,e)),e}It(t){let e=this.He.get(t);return e||(e=new Qt(ct),this.He=this.He.insert(t,e)),e}rt(t){const e=this.ot(t)!==null;return e||$("WatchChangeAggregator","Detected inactive target",t),e}ot(t){const e=this.ze.get(t);return e&&e.Ne?null:this.Ge.At(t)}it(t){this.ze.set(t,new ld),this.Ge.getRemoteKeysForTarget(t).forEach((e=>{this.et(t,e,null)}))}Et(t,e){return this.Ge.getRemoteKeysForTarget(t).has(e)}}function Jr(){return new Lt(W.comparator)}function cd(){return new Lt(W.comparator)}const XE={asc:"ASCENDING",desc:"DESCENDING"},JE={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},ZE={and:"AND",or:"OR"};class tw{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function jl(n,t){return n.useProto3Json||_a(t)?t:{value:t}}function Yo(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Fg(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function ew(n,t){return Yo(n,t.toTimestamp())}function Ke(n){return vt(!!n,49232),J.fromTimestamp((function(e){const i=Gn(e);return new Ct(i.seconds,i.nanos)})(n))}function Lc(n,t){return Hl(n,t).canonicalString()}function Hl(n,t){const e=(function(s){return new Mt(["projects",s.projectId,"databases",s.database])})(n).child("documents");return t===void 0?e:e.child(t)}function $g(n){const t=Mt.fromString(n);return vt(Hg(t),10190,{key:t.toString()}),t}function Wl(n,t){return Lc(n.databaseId,t.path)}function al(n,t){const e=$g(t);if(e.get(1)!==n.databaseId.projectId)throw new H(N.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new H(N.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new W(zg(e))}function Ug(n,t){return Lc(n.databaseId,t)}function nw(n){const t=$g(n);return t.length===4?Mt.emptyPath():zg(t)}function ql(n){return new Mt(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function zg(n){return vt(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function ud(n,t,e){return{name:Wl(n,t),fields:e.value.mapValue.fields}}function iw(n,t){let e;if("targetChange"in t){t.targetChange;const i=(function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:K(39313,{state:u})})(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],r=(function(u,h){return u.useProto3Json?(vt(h===void 0||typeof h=="string",58123),se.fromBase64String(h||"")):(vt(h===void 0||h instanceof Buffer||h instanceof Uint8Array,16193),se.fromUint8Array(h||new Uint8Array))})(n,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&(function(u){const h=u.code===void 0?N.UNKNOWN:Lg(u.code);return new H(h,u.message||"")})(o);e=new Ng(i,s,r,a||null)}else if("documentChange"in t){t.documentChange;const i=t.documentChange;i.document,i.document.name,i.document.updateTime;const s=al(n,i.document.name),r=Ke(i.document.updateTime),o=i.document.createTime?Ke(i.document.createTime):J.min(),a=new Pe({mapValue:{fields:i.document.fields}}),l=ce.newFoundDocument(s,r,o,a),u=i.targetIds||[],h=i.removedTargetIds||[];e=new Io(u,h,l.key,l)}else if("documentDelete"in t){t.documentDelete;const i=t.documentDelete;i.document;const s=al(n,i.document),r=i.readTime?Ke(i.readTime):J.min(),o=ce.newNoDocument(s,r),a=i.removedTargetIds||[];e=new Io([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const i=t.documentRemove;i.document;const s=al(n,i.document),r=i.removedTargetIds||[];e=new Io([],r,s,null)}else{if(!("filter"in t))return K(11601,{Vt:t});{t.filter;const i=t.filter;i.targetId;const{count:s=0,unchangedNames:r}=i,o=new qE(s,r),a=i.targetId;e=new Vg(a,o)}}return e}function sw(n,t){let e;if(t instanceof kr)e={update:ud(n,t.key,t.value)};else if(t instanceof Og)e={delete:Wl(n,t.key)};else if(t instanceof Ri)e={update:ud(n,t.key,t.data),updateMask:fw(t.fieldMask)};else{if(!(t instanceof jE))return K(16599,{dt:t.type});e={verify:Wl(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map((i=>(function(r,o){const a=o.transform;if(a instanceof Ko)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof fr)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof pr)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Go)return{fieldPath:o.field.canonicalString(),increment:a.Ae};throw K(20930,{transform:o.transform})})(0,i)))),t.precondition.isNone||(e.currentDocument=(function(s,r){return r.updateTime!==void 0?{updateTime:ew(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:K(27497)})(n,t.precondition)),e}function rw(n,t){return n&&n.length>0?(vt(t!==void 0,14353),n.map((e=>(function(s,r){let o=s.updateTime?Ke(s.updateTime):Ke(r);return o.isEqual(J.min())&&(o=Ke(r)),new UE(o,s.transformResults||[])})(e,t)))):[]}function ow(n,t){return{documents:[Ug(n,t.path)]}}function aw(n,t){const e={structuredQuery:{}},i=t.path;let s;t.collectionGroup!==null?(s=i,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=i.popLast(),e.structuredQuery.from=[{collectionId:i.lastSegment()}]),e.parent=Ug(n,s);const r=(function(u){if(u.length!==0)return jg(Je.create(u,"and"))})(t.filters);r&&(e.structuredQuery.where=r);const o=(function(u){if(u.length!==0)return u.map((h=>(function(p){return{field:Bi(p.field),direction:uw(p.dir)}})(h)))})(t.orderBy);o&&(e.structuredQuery.orderBy=o);const a=jl(n,t.limit);return a!==null&&(e.structuredQuery.limit=a),t.startAt&&(e.structuredQuery.startAt=(function(u){return{before:u.inclusive,values:u.position}})(t.startAt)),t.endAt&&(e.structuredQuery.endAt=(function(u){return{before:!u.inclusive,values:u.position}})(t.endAt)),{ft:e,parent:s}}function lw(n){let t=nw(n.parent);const e=n.structuredQuery,i=e.from?e.from.length:0;let s=null;if(i>0){vt(i===1,65062);const h=e.from[0];h.allDescendants?s=h.collectionId:t=t.child(h.collectionId)}let r=[];e.where&&(r=(function(d){const p=Bg(d);return p instanceof Je&&yg(p)?p.getFilters():[p]})(e.where));let o=[];e.orderBy&&(o=(function(d){return d.map((p=>(function(S){return new qo(ji(S.field),(function(T){switch(T){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(S.direction))})(p)))})(e.orderBy));let a=null;e.limit&&(a=(function(d){let p;return p=typeof d=="object"?d.value:d,_a(p)?null:p})(e.limit));let l=null;e.startAt&&(l=(function(d){const p=!!d.before,y=d.values||[];return new Wo(y,p)})(e.startAt));let u=null;return e.endAt&&(u=(function(d){const p=!d.before,y=d.values||[];return new Wo(y,p)})(e.endAt)),SE(t,s,o,r,a,"F",l,u)}function cw(n,t){const e=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return K(28987,{purpose:s})}})(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Bg(n){return n.unaryFilter!==void 0?(function(e){switch(e.unaryFilter.op){case"IS_NAN":const i=ji(e.unaryFilter.field);return Kt.create(i,"==",{doubleValue:NaN});case"IS_NULL":const s=ji(e.unaryFilter.field);return Kt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=ji(e.unaryFilter.field);return Kt.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ji(e.unaryFilter.field);return Kt.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return K(61313);default:return K(60726)}})(n):n.fieldFilter!==void 0?(function(e){return Kt.create(ji(e.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return K(58110);default:return K(50506)}})(e.fieldFilter.op),e.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(e){return Je.create(e.compositeFilter.filters.map((i=>Bg(i))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return K(1026)}})(e.compositeFilter.op))})(n):K(30097,{filter:n})}function uw(n){return XE[n]}function hw(n){return JE[n]}function dw(n){return ZE[n]}function Bi(n){return{fieldPath:n.canonicalString()}}function ji(n){return ie.fromServerFormat(n.fieldPath)}function jg(n){return n instanceof Kt?(function(e){if(e.op==="=="){if(Xh(e.value))return{unaryFilter:{field:Bi(e.field),op:"IS_NAN"}};if(Qh(e.value))return{unaryFilter:{field:Bi(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Xh(e.value))return{unaryFilter:{field:Bi(e.field),op:"IS_NOT_NAN"}};if(Qh(e.value))return{unaryFilter:{field:Bi(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Bi(e.field),op:hw(e.op),value:e.value}}})(n):n instanceof Je?(function(e){const i=e.getFilters().map((s=>jg(s)));return i.length===1?i[0]:{compositeFilter:{op:dw(e.op),filters:i}}})(n):K(54877,{filter:n})}function fw(n){const t=[];return n.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function Hg(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}function Wg(n){return!!n&&typeof n._toProto=="function"&&n._protoValueType==="ProtoValue"}/**
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
 */class Mn{constructor(t,e,i,s,r=J.min(),o=J.min(),a=se.EMPTY_BYTE_STRING,l=null){this.target=t,this.targetId=e,this.purpose=i,this.sequenceNumber=s,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(t){return new Mn(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Mn(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Mn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Mn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class pw{constructor(t){this.yt=t}}function gw(n){const t=lw({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Bl(t,t.limit,"L"):t}/**
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
 */class mw{constructor(){this.Sn=new _w}addToCollectionParentIndex(t,e){return this.Sn.add(e),V.resolve()}getCollectionParents(t,e){return V.resolve(this.Sn.getEntries(e))}addFieldIndex(t,e){return V.resolve()}deleteFieldIndex(t,e){return V.resolve()}deleteAllFieldIndexes(t){return V.resolve()}createTargetIndexes(t,e){return V.resolve()}getDocumentsMatchingTarget(t,e){return V.resolve(null)}getIndexType(t,e){return V.resolve(0)}getFieldIndexes(t,e){return V.resolve([])}getNextCollectionGroupToUpdate(t){return V.resolve(null)}getMinOffset(t,e){return V.resolve(Kn.min())}getMinOffsetFromCollectionGroup(t,e){return V.resolve(Kn.min())}updateCollectionGroup(t,e,i){return V.resolve()}updateIndexEntries(t,e){return V.resolve()}}class _w{constructor(){this.index={}}add(t){const e=t.lastSegment(),i=t.popLast(),s=this.index[e]||new Qt(Mt.comparator),r=!s.has(i);return this.index[e]=s.add(i),r}has(t){const e=t.lastSegment(),i=t.popLast(),s=this.index[e];return s&&s.has(i)}getEntries(t){return(this.index[t]||new Qt(Mt.comparator)).toArray()}}/**
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
 */const hd={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},qg=41943040;class ge{static withCacheSize(t){return new ge(t,ge.DEFAULT_COLLECTION_PERCENTILE,ge.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,i){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=i}}/**
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
 */ge.DEFAULT_COLLECTION_PERCENTILE=10,ge.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ge.DEFAULT=new ge(qg,ge.DEFAULT_COLLECTION_PERCENTILE,ge.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ge.DISABLED=new ge(-1,0,0);/**
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
 */class rs{constructor(t){this.sr=t}next(){return this.sr+=2,this.sr}static _r(){return new rs(0)}static ar(){return new rs(-1)}}/**
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
 */const dd="LruGarbageCollector",yw=1048576;function fd([n,t],[e,i]){const s=ct(n,e);return s===0?ct(t,i):s}class bw{constructor(t){this.Pr=t,this.buffer=new Qt(fd),this.Tr=0}Ir(){return++this.Tr}Er(t){const e=[t,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(e);else{const i=this.buffer.last();fd(e,i)<0&&(this.buffer=this.buffer.delete(i).add(e))}}get maxValue(){return this.buffer.last()[0]}}class vw{constructor(t,e,i){this.garbageCollector=t,this.asyncQueue=e,this.localStore=i,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(t){$(dd,`Garbage collection scheduled in ${t}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){gs(e)?$(dd,"Ignoring IndexedDB error during garbage collection: ",e):await ps(e)}await this.Ar(3e5)}))}}class Ew{constructor(t,e){this.Vr=t,this.params=e}calculateTargetCount(t,e){return this.Vr.dr(t).next((i=>Math.floor(e/100*i)))}nthSequenceNumber(t,e){if(e===0)return V.resolve(ma.ce);const i=new bw(e);return this.Vr.forEachTarget(t,(s=>i.Er(s.sequenceNumber))).next((()=>this.Vr.mr(t,(s=>i.Er(s))))).next((()=>i.maxValue))}removeTargets(t,e,i){return this.Vr.removeTargets(t,e,i)}removeOrphanedDocuments(t,e){return this.Vr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?($("LruGarbageCollector","Garbage collection skipped; disabled"),V.resolve(hd)):this.getCacheSize(t).next((i=>i<this.params.cacheSizeCollectionThreshold?($("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),hd):this.gr(t,e)))}getCacheSize(t){return this.Vr.getCacheSize(t)}gr(t,e){let i,s,r,o,a,l,u;const h=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next((d=>(d>this.params.maximumSequenceNumbersToCollect?($("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${d}`),s=this.params.maximumSequenceNumbersToCollect):s=d,o=Date.now(),this.nthSequenceNumber(t,s)))).next((d=>(i=d,a=Date.now(),this.removeTargets(t,i,e)))).next((d=>(r=d,l=Date.now(),this.removeOrphanedDocuments(t,i)))).next((d=>(u=Date.now(),Ui()<=lt.DEBUG&&$("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${s} in `+(a-o)+`ms
	Removed ${r} targets in `+(l-a)+`ms
	Removed ${d} documents in `+(u-l)+`ms
Total Duration: ${u-h}ms`),V.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:r,documentsRemoved:d}))))}}function ww(n,t){return new Ew(n,t)}/**
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
 */class Tw{constructor(){this.changes=new ki((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,ce.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const i=this.changes.get(e);return i!==void 0?V.resolve(i):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class Sw{constructor(t,e,i,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=i,this.indexManager=s}getDocument(t,e){let i=null;return this.documentOverlayCache.getOverlay(t,e).next((s=>(i=s,this.remoteDocumentCache.getEntry(t,e)))).next((s=>(i!==null&&Zs(i.mutation,s,Le.empty(),Ct.now()),s)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((i=>this.getLocalViewOfDocuments(t,i,ut()).next((()=>i))))}getLocalViewOfDocuments(t,e,i=ut()){const s=di();return this.populateOverlays(t,s,e).next((()=>this.computeViews(t,e,s,i).next((r=>{let o=Us();return r.forEach(((a,l)=>{o=o.insert(a,l.overlayedDocument)})),o}))))}getOverlayedDocuments(t,e){const i=di();return this.populateOverlays(t,i,e).next((()=>this.computeViews(t,e,i,ut())))}populateOverlays(t,e,i){const s=[];return i.forEach((r=>{e.has(r)||s.push(r)})),this.documentOverlayCache.getOverlays(t,s).next((r=>{r.forEach(((o,a)=>{e.set(o,a)}))}))}computeViews(t,e,i,s){let r=bn();const o=Js(),a=(function(){return Js()})();return e.forEach(((l,u)=>{const h=i.get(u.key);s.has(u.key)&&(h===void 0||h.mutation instanceof Ri)?r=r.insert(u.key,u):h!==void 0?(o.set(u.key,h.mutation.getFieldMask()),Zs(h.mutation,u,h.mutation.getFieldMask(),Ct.now())):o.set(u.key,Le.empty())})),this.recalculateAndSaveOverlays(t,r).next((l=>(l.forEach(((u,h)=>o.set(u,h))),e.forEach(((u,h)=>a.set(u,new Iw(h,o.get(u)??null)))),a)))}recalculateAndSaveOverlays(t,e){const i=Js();let s=new Lt(((o,a)=>o-a)),r=ut();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((o=>{for(const a of o)a.keys().forEach((l=>{const u=e.get(l);if(u===null)return;let h=i.get(l)||Le.empty();h=a.applyToLocalView(u,h),i.set(l,h);const d=(s.get(a.batchId)||ut()).add(l);s=s.insert(a.batchId,d)}))})).next((()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,h=l.value,d=xg();h.forEach((p=>{if(!r.has(p)){const y=Dg(e.get(p),i.get(p));y!==null&&d.set(p,y),r=r.add(p)}})),o.push(this.documentOverlayCache.saveOverlays(t,u,d))}return V.waitFor(o)})).next((()=>i))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((i=>this.recalculateAndSaveOverlays(t,i)))}getDocumentsMatchingQuery(t,e,i,s){return xE(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):AE(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,i,s):this.getDocumentsMatchingCollectionQuery(t,e,i,s)}getNextDocuments(t,e,i,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,i,s).next((r=>{const o=s-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,i.largestBatchId,s-r.size):V.resolve(di());let a=cr,l=r;return o.next((u=>V.forEach(u,((h,d)=>(a<d.largestBatchId&&(a=d.largestBatchId),r.get(h)?V.resolve():this.remoteDocumentCache.getEntry(t,h).next((p=>{l=l.insert(h,p)}))))).next((()=>this.populateOverlays(t,u,r))).next((()=>this.computeViews(t,l,u,ut()))).next((h=>({batchId:a,changes:Sg(h)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new W(e)).next((i=>{let s=Us();return i.isFoundDocument()&&(s=s.insert(i.key,i)),s}))}getDocumentsMatchingCollectionGroupQuery(t,e,i,s){const r=e.collectionGroup;let o=Us();return this.indexManager.getCollectionParents(t,r).next((a=>V.forEach(a,(l=>{const u=(function(d,p){return new ba(p,null,d.explicitOrderBy.slice(),d.filters.slice(),d.limit,d.limitType,d.startAt,d.endAt)})(e,l.child(r));return this.getDocumentsMatchingCollectionQuery(t,u,i,s).next((h=>{h.forEach(((d,p)=>{o=o.insert(d,p)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(t,e,i,s){let r;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,i.largestBatchId).next((o=>(r=o,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,i,r,s)))).next((o=>{r.forEach(((l,u)=>{const h=u.getKey();o.get(h)===null&&(o=o.insert(h,ce.newInvalidDocument(h)))}));let a=Us();return o.forEach(((l,u)=>{const h=r.get(l);h!==void 0&&Zs(h.mutation,u,Le.empty(),Ct.now()),Ea(e,u)&&(a=a.insert(l,u))})),a}))}}/**
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
 */class xw{constructor(t){this.serializer=t,this.Nr=new Map,this.Br=new Map}getBundleMetadata(t,e){return V.resolve(this.Nr.get(e))}saveBundleMetadata(t,e){return this.Nr.set(e.id,(function(s){return{id:s.id,version:s.version,createTime:Ke(s.createTime)}})(e)),V.resolve()}getNamedQuery(t,e){return V.resolve(this.Br.get(e))}saveNamedQuery(t,e){return this.Br.set(e.name,(function(s){return{name:s.name,query:gw(s.bundledQuery),readTime:Ke(s.readTime)}})(e)),V.resolve()}}/**
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
 */class Aw{constructor(){this.overlays=new Lt(W.comparator),this.Lr=new Map}getOverlay(t,e){return V.resolve(this.overlays.get(e))}getOverlays(t,e){const i=di();return V.forEach(e,(s=>this.getOverlay(t,s).next((r=>{r!==null&&i.set(s,r)})))).next((()=>i))}saveOverlays(t,e,i){return i.forEach(((s,r)=>{this.bt(t,e,r)})),V.resolve()}removeOverlaysForBatchId(t,e,i){const s=this.Lr.get(i);return s!==void 0&&(s.forEach((r=>this.overlays=this.overlays.remove(r))),this.Lr.delete(i)),V.resolve()}getOverlaysForCollection(t,e,i){const s=di(),r=e.length+1,o=new W(e.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!e.isPrefixOf(u.path))break;u.path.length===r&&l.largestBatchId>i&&s.set(l.getKey(),l)}return V.resolve(s)}getOverlaysForCollectionGroup(t,e,i,s){let r=new Lt(((u,h)=>u-h));const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===e&&u.largestBatchId>i){let h=r.get(u.largestBatchId);h===null&&(h=di(),r=r.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const a=di(),l=r.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach(((u,h)=>a.set(u,h))),!(a.size()>=s)););return V.resolve(a)}bt(t,e,i){const s=this.overlays.get(i.key);if(s!==null){const o=this.Lr.get(s.largestBatchId).delete(i.key);this.Lr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(i.key,new WE(e,i));let r=this.Lr.get(e);r===void 0&&(r=ut(),this.Lr.set(e,r)),this.Lr.set(e,r.add(i.key))}}/**
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
 */class Pw{constructor(){this.sessionToken=se.EMPTY_BYTE_STRING}getSessionToken(t){return V.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,V.resolve()}}/**
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
 */class Vc{constructor(){this.kr=new Qt(Zt.Kr),this.qr=new Qt(Zt.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(t,e){const i=new Zt(t,e);this.kr=this.kr.add(i),this.qr=this.qr.add(i)}$r(t,e){t.forEach((i=>this.addReference(i,e)))}removeReference(t,e){this.Wr(new Zt(t,e))}Qr(t,e){t.forEach((i=>this.removeReference(i,e)))}Gr(t){const e=new W(new Mt([])),i=new Zt(e,t),s=new Zt(e,t+1),r=[];return this.qr.forEachInRange([i,s],(o=>{this.Wr(o),r.push(o.key)})),r}zr(){this.kr.forEach((t=>this.Wr(t)))}Wr(t){this.kr=this.kr.delete(t),this.qr=this.qr.delete(t)}jr(t){const e=new W(new Mt([])),i=new Zt(e,t),s=new Zt(e,t+1);let r=ut();return this.qr.forEachInRange([i,s],(o=>{r=r.add(o.key)})),r}containsKey(t){const e=new Zt(t,0),i=this.kr.firstAfterOrEqual(e);return i!==null&&t.isEqual(i.key)}}class Zt{constructor(t,e){this.key=t,this.Hr=e}static Kr(t,e){return W.comparator(t.key,e.key)||ct(t.Hr,e.Hr)}static Ur(t,e){return ct(t.Hr,e.Hr)||W.comparator(t.key,e.key)}}/**
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
 */class kw{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Yn=1,this.Jr=new Qt(Zt.Kr)}checkEmpty(t){return V.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,i,s){const r=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new HE(r,e,i,s);this.mutationQueue.push(o);for(const a of s)this.Jr=this.Jr.add(new Zt(a.key,r)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return V.resolve(o)}lookupMutationBatch(t,e){return V.resolve(this.Zr(e))}getNextMutationBatchAfterBatchId(t,e){const i=e+1,s=this.Xr(i),r=s<0?0:s;return V.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return V.resolve(this.mutationQueue.length===0?xc:this.Yn-1)}getAllMutationBatches(t){return V.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const i=new Zt(e,0),s=new Zt(e,Number.POSITIVE_INFINITY),r=[];return this.Jr.forEachInRange([i,s],(o=>{const a=this.Zr(o.Hr);r.push(a)})),V.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(t,e){let i=new Qt(ct);return e.forEach((s=>{const r=new Zt(s,0),o=new Zt(s,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([r,o],(a=>{i=i.add(a.Hr)}))})),V.resolve(this.Yr(i))}getAllMutationBatchesAffectingQuery(t,e){const i=e.path,s=i.length+1;let r=i;W.isDocumentKey(r)||(r=r.child(""));const o=new Zt(new W(r),0);let a=new Qt(ct);return this.Jr.forEachWhile((l=>{const u=l.key.path;return!!i.isPrefixOf(u)&&(u.length===s&&(a=a.add(l.Hr)),!0)}),o),V.resolve(this.Yr(a))}Yr(t){const e=[];return t.forEach((i=>{const s=this.Zr(i);s!==null&&e.push(s)})),e}removeMutationBatch(t,e){vt(this.ei(e.batchId,"removed")===0,55003),this.mutationQueue.shift();let i=this.Jr;return V.forEach(e.mutations,(s=>{const r=new Zt(s.key,e.batchId);return i=i.delete(r),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)})).next((()=>{this.Jr=i}))}nr(t){}containsKey(t,e){const i=new Zt(e,0),s=this.Jr.firstAfterOrEqual(i);return V.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,V.resolve()}ei(t,e){return this.Xr(t)}Xr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Zr(t){const e=this.Xr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
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
 */class Rw{constructor(t){this.ti=t,this.docs=(function(){return new Lt(W.comparator)})(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const i=e.key,s=this.docs.get(i),r=s?s.size:0,o=this.ti(e);return this.docs=this.docs.insert(i,{document:e.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(t,i.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const i=this.docs.get(e);return V.resolve(i?i.document.mutableCopy():ce.newInvalidDocument(e))}getEntries(t,e){let i=bn();return e.forEach((s=>{const r=this.docs.get(s);i=i.insert(s,r?r.document.mutableCopy():ce.newInvalidDocument(s))})),V.resolve(i)}getDocumentsMatchingQuery(t,e,i,s){let r=bn();const o=e.path,a=new W(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:h}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||nE(eE(h),i)<=0||(s.has(h.key)||Ea(e,h))&&(r=r.insert(h.key,h.mutableCopy()))}return V.resolve(r)}getAllFromCollectionGroup(t,e,i,s){K(9500)}ni(t,e){return V.forEach(this.docs,(i=>e(i)))}newChangeBuffer(t){return new Cw(this)}getSize(t){return V.resolve(this.size)}}class Cw extends Tw{constructor(t){super(),this.Mr=t}applyChanges(t){const e=[];return this.changes.forEach(((i,s)=>{s.isValidDocument()?e.push(this.Mr.addEntry(t,s)):this.Mr.removeEntry(i)})),V.waitFor(e)}getFromCache(t,e){return this.Mr.getEntry(t,e)}getAllFromCache(t,e){return this.Mr.getEntries(t,e)}}/**
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
 */class Dw{constructor(t){this.persistence=t,this.ri=new ki((e=>kc(e)),Rc),this.lastRemoteSnapshotVersion=J.min(),this.highestTargetId=0,this.ii=0,this.si=new Vc,this.targetCount=0,this.oi=rs._r()}forEachTarget(t,e){return this.ri.forEach(((i,s)=>e(s))),V.resolve()}getLastRemoteSnapshotVersion(t){return V.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return V.resolve(this.ii)}allocateTargetId(t){return this.highestTargetId=this.oi.next(),V.resolve(this.highestTargetId)}setTargetsMetadata(t,e,i){return i&&(this.lastRemoteSnapshotVersion=i),e>this.ii&&(this.ii=e),V.resolve()}lr(t){this.ri.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.oi=new rs(e),this.highestTargetId=e),t.sequenceNumber>this.ii&&(this.ii=t.sequenceNumber)}addTargetData(t,e){return this.lr(e),this.targetCount+=1,V.resolve()}updateTargetData(t,e){return this.lr(e),V.resolve()}removeTargetData(t,e){return this.ri.delete(e.target),this.si.Gr(e.targetId),this.targetCount-=1,V.resolve()}removeTargets(t,e,i){let s=0;const r=[];return this.ri.forEach(((o,a)=>{a.sequenceNumber<=e&&i.get(a.targetId)===null&&(this.ri.delete(o),r.push(this.removeMatchingKeysForTargetId(t,a.targetId)),s++)})),V.waitFor(r).next((()=>s))}getTargetCount(t){return V.resolve(this.targetCount)}getTargetData(t,e){const i=this.ri.get(e)||null;return V.resolve(i)}addMatchingKeys(t,e,i){return this.si.$r(e,i),V.resolve()}removeMatchingKeys(t,e,i){this.si.Qr(e,i);const s=this.persistence.referenceDelegate,r=[];return s&&e.forEach((o=>{r.push(s.markPotentiallyOrphaned(t,o))})),V.waitFor(r)}removeMatchingKeysForTargetId(t,e){return this.si.Gr(e),V.resolve()}getMatchingKeysForTargetId(t,e){const i=this.si.jr(e);return V.resolve(i)}containsKey(t,e){return V.resolve(this.si.containsKey(e))}}/**
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
 */class Kg{constructor(t,e){this._i={},this.overlays={},this.ai=new ma(0),this.ui=!1,this.ui=!0,this.ci=new Pw,this.referenceDelegate=t(this),this.li=new Dw(this),this.indexManager=new mw,this.remoteDocumentCache=(function(s){return new Rw(s)})((i=>this.referenceDelegate.hi(i))),this.serializer=new pw(e),this.Pi=new xw(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Aw,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let i=this._i[t.toKey()];return i||(i=new kw(e,this.referenceDelegate),this._i[t.toKey()]=i),i}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(t,e,i){$("MemoryPersistence","Starting transaction:",t);const s=new Mw(this.ai.next());return this.referenceDelegate.Ti(),i(s).next((r=>this.referenceDelegate.Ii(s).next((()=>r)))).toPromise().then((r=>(s.raiseOnCommittedEvent(),r)))}Ei(t,e){return V.or(Object.values(this._i).map((i=>()=>i.containsKey(t,e))))}}class Mw extends sE{constructor(t){super(),this.currentSequenceNumber=t}}class Nc{constructor(t){this.persistence=t,this.Ri=new Vc,this.Ai=null}static Vi(t){return new Nc(t)}get di(){if(this.Ai)return this.Ai;throw K(60996)}addReference(t,e,i){return this.Ri.addReference(i,e),this.di.delete(i.toString()),V.resolve()}removeReference(t,e,i){return this.Ri.removeReference(i,e),this.di.add(i.toString()),V.resolve()}markPotentiallyOrphaned(t,e){return this.di.add(e.toString()),V.resolve()}removeTarget(t,e){this.Ri.Gr(e.targetId).forEach((s=>this.di.add(s.toString())));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(t,e.targetId).next((s=>{s.forEach((r=>this.di.add(r.toString())))})).next((()=>i.removeTargetData(t,e)))}Ti(){this.Ai=new Set}Ii(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return V.forEach(this.di,(i=>{const s=W.fromPath(i);return this.mi(t,s).next((r=>{r||e.removeEntry(s,J.min())}))})).next((()=>(this.Ai=null,e.apply(t))))}updateLimboDocument(t,e){return this.mi(t,e).next((i=>{i?this.di.delete(e.toString()):this.di.add(e.toString())}))}hi(t){return 0}mi(t,e){return V.or([()=>V.resolve(this.Ri.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ei(t,e)])}}class Qo{constructor(t,e){this.persistence=t,this.fi=new ki((i=>aE(i.path)),((i,s)=>i.isEqual(s))),this.garbageCollector=ww(this,e)}static Vi(t,e){return new Qo(t,e)}Ti(){}Ii(t){return V.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}dr(t){const e=this.pr(t);return this.persistence.getTargetCache().getTargetCount(t).next((i=>e.next((s=>i+s))))}pr(t){let e=0;return this.mr(t,(i=>{e++})).next((()=>e))}mr(t,e){return V.forEach(this.fi,((i,s)=>this.wr(t,i,s).next((r=>r?V.resolve():e(s)))))}removeTargets(t,e,i){return this.persistence.getTargetCache().removeTargets(t,e,i)}removeOrphanedDocuments(t,e){let i=0;const s=this.persistence.getRemoteDocumentCache(),r=s.newChangeBuffer();return s.ni(t,(o=>this.wr(t,o,e).next((a=>{a||(i++,r.removeEntry(o,J.min()))})))).next((()=>r.apply(t))).next((()=>i))}markPotentiallyOrphaned(t,e){return this.fi.set(e,t.currentSequenceNumber),V.resolve()}removeTarget(t,e){const i=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,i)}addReference(t,e,i){return this.fi.set(i,t.currentSequenceNumber),V.resolve()}removeReference(t,e,i){return this.fi.set(i,t.currentSequenceNumber),V.resolve()}updateLimboDocument(t,e){return this.fi.set(e,t.currentSequenceNumber),V.resolve()}hi(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=Eo(t.data.value)),e}wr(t,e,i){return V.or([()=>this.persistence.Ei(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const s=this.fi.get(e);return V.resolve(s!==void 0&&s>i)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
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
 */class Fc{constructor(t,e,i,s){this.targetId=t,this.fromCache=e,this.Ts=i,this.Is=s}static Es(t,e){let i=ut(),s=ut();for(const r of e.docChanges)switch(r.type){case 0:i=i.add(r.doc.key);break;case 1:s=s.add(r.doc.key)}return new Fc(t,e.fromCache,i,s)}}/**
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
 */class Lw{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=(function(){return vy()?8:rE(he())>0?6:4})()}initialize(t,e){this.fs=t,this.indexManager=e,this.Rs=!0}getDocumentsMatchingQuery(t,e,i,s){const r={result:null};return this.gs(t,e).next((o=>{r.result=o})).next((()=>{if(!r.result)return this.ps(t,e,s,i).next((o=>{r.result=o}))})).next((()=>{if(r.result)return;const o=new Ow;return this.ys(t,e,o).next((a=>{if(r.result=a,this.As)return this.ws(t,e,o,a.size)}))})).next((()=>r.result))}ws(t,e,i,s){return i.documentReadCount<this.Vs?(Ui()<=lt.DEBUG&&$("QueryEngine","SDK will not create cache indexes for query:",zi(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),V.resolve()):(Ui()<=lt.DEBUG&&$("QueryEngine","Query:",zi(e),"scans",i.documentReadCount,"local documents and returns",s,"documents as results."),i.documentReadCount>this.ds*s?(Ui()<=lt.DEBUG&&$("QueryEngine","The SDK decides to create cache indexes for query:",zi(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,qe(e))):V.resolve())}gs(t,e){if(ed(e))return V.resolve(null);let i=qe(e);return this.indexManager.getIndexType(t,i).next((s=>s===0?null:(e.limit!==null&&s===1&&(e=Bl(e,null,"F"),i=qe(e)),this.indexManager.getDocumentsMatchingTarget(t,i).next((r=>{const o=ut(...r);return this.fs.getDocuments(t,o).next((a=>this.indexManager.getMinOffset(t,i).next((l=>{const u=this.bs(e,a);return this.Ss(e,u,o,l.readTime)?this.gs(t,Bl(e,null,"F")):this.Ds(t,u,e,l)}))))})))))}ps(t,e,i,s){return ed(e)||s.isEqual(J.min())?V.resolve(null):this.fs.getDocuments(t,i).next((r=>{const o=this.bs(e,r);return this.Ss(e,o,i,s)?V.resolve(null):(Ui()<=lt.DEBUG&&$("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),zi(e)),this.Ds(t,o,e,tE(s,cr)).next((a=>a)))}))}bs(t,e){let i=new Qt(Tg(t));return e.forEach(((s,r)=>{Ea(t,r)&&(i=i.add(r))})),i}Ss(t,e,i,s){if(t.limit===null)return!1;if(i.size!==e.size)return!0;const r=t.limitType==="F"?e.last():e.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(s)>0)}ys(t,e,i){return Ui()<=lt.DEBUG&&$("QueryEngine","Using full collection scan to execute query:",zi(e)),this.fs.getDocumentsMatchingQuery(t,e,Kn.min(),i)}Ds(t,e,i,s){return this.fs.getDocumentsMatchingQuery(t,i,s).next((r=>(e.forEach((o=>{r=r.insert(o.key,o)})),r)))}}/**
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
 */const $c="LocalStore",Vw=3e8;class Nw{constructor(t,e,i,s){this.persistence=t,this.Cs=e,this.serializer=s,this.vs=new Lt(ct),this.Fs=new ki((r=>kc(r)),Rc),this.Ms=new Map,this.xs=t.getRemoteDocumentCache(),this.li=t.getTargetCache(),this.Pi=t.getBundleCache(),this.Os(i)}Os(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Sw(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.vs)))}}function Fw(n,t,e,i){return new Nw(n,t,e,i)}async function Gg(n,t){const e=Z(n);return await e.persistence.runTransaction("Handle user change","readonly",(i=>{let s;return e.mutationQueue.getAllMutationBatches(i).next((r=>(s=r,e.Os(t),e.mutationQueue.getAllMutationBatches(i)))).next((r=>{const o=[],a=[];let l=ut();for(const u of s){o.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}for(const u of r){a.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}return e.localDocuments.getDocuments(i,l).next((u=>({Ns:u,removedBatchIds:o,addedBatchIds:a})))}))}))}function $w(n,t){const e=Z(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",(i=>{const s=t.batch.keys(),r=e.xs.newChangeBuffer({trackRemovals:!0});return(function(a,l,u,h){const d=u.batch,p=d.keys();let y=V.resolve();return p.forEach((S=>{y=y.next((()=>h.getEntry(l,S))).next((b=>{const T=u.docVersions.get(S);vt(T!==null,48541),b.version.compareTo(T)<0&&(d.applyToRemoteDocument(b,u),b.isValidDocument()&&(b.setReadTime(u.commitVersion),h.addEntry(b)))}))})),y.next((()=>a.mutationQueue.removeMutationBatch(l,d)))})(e,i,t,r).next((()=>r.apply(i))).next((()=>e.mutationQueue.performConsistencyCheck(i))).next((()=>e.documentOverlayCache.removeOverlaysForBatchId(i,s,t.batch.batchId))).next((()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,(function(a){let l=ut();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l})(t)))).next((()=>e.localDocuments.getDocuments(i,s)))}))}function Yg(n){const t=Z(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.li.getLastRemoteSnapshotVersion(e)))}function Uw(n,t){const e=Z(n),i=t.snapshotVersion;let s=e.vs;return e.persistence.runTransaction("Apply remote event","readwrite-primary",(r=>{const o=e.xs.newChangeBuffer({trackRemovals:!0});s=e.vs;const a=[];t.targetChanges.forEach(((h,d)=>{const p=s.get(d);if(!p)return;a.push(e.li.removeMatchingKeys(r,h.removedDocuments,d).next((()=>e.li.addMatchingKeys(r,h.addedDocuments,d))));let y=p.withSequenceNumber(r.currentSequenceNumber);t.targetMismatches.get(d)!==null?y=y.withResumeToken(se.EMPTY_BYTE_STRING,J.min()).withLastLimboFreeSnapshotVersion(J.min()):h.resumeToken.approximateByteSize()>0&&(y=y.withResumeToken(h.resumeToken,i)),s=s.insert(d,y),(function(b,T,P){return b.resumeToken.approximateByteSize()===0||T.snapshotVersion.toMicroseconds()-b.snapshotVersion.toMicroseconds()>=Vw?!0:P.addedDocuments.size+P.modifiedDocuments.size+P.removedDocuments.size>0})(p,y,h)&&a.push(e.li.updateTargetData(r,y))}));let l=bn(),u=ut();if(t.documentUpdates.forEach((h=>{t.resolvedLimboDocuments.has(h)&&a.push(e.persistence.referenceDelegate.updateLimboDocument(r,h))})),a.push(zw(r,o,t.documentUpdates).next((h=>{l=h.Bs,u=h.Ls}))),!i.isEqual(J.min())){const h=e.li.getLastRemoteSnapshotVersion(r).next((d=>e.li.setTargetsMetadata(r,r.currentSequenceNumber,i)));a.push(h)}return V.waitFor(a).next((()=>o.apply(r))).next((()=>e.localDocuments.getLocalViewOfDocuments(r,l,u))).next((()=>l))})).then((r=>(e.vs=s,r)))}function zw(n,t,e){let i=ut(),s=ut();return e.forEach((r=>i=i.add(r))),t.getEntries(n,i).next((r=>{let o=bn();return e.forEach(((a,l)=>{const u=r.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(a)),l.isNoDocument()&&l.version.isEqual(J.min())?(t.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(t.addEntry(l),o=o.insert(a,l)):$($c,"Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)})),{Bs:o,Ls:s}}))}function Bw(n,t){const e=Z(n);return e.persistence.runTransaction("Get next mutation batch","readonly",(i=>(t===void 0&&(t=xc),e.mutationQueue.getNextMutationBatchAfterBatchId(i,t))))}function jw(n,t){const e=Z(n);return e.persistence.runTransaction("Allocate target","readwrite",(i=>{let s;return e.li.getTargetData(i,t).next((r=>r?(s=r,V.resolve(s)):e.li.allocateTargetId(i).next((o=>(s=new Mn(t,o,"TargetPurposeListen",i.currentSequenceNumber),e.li.addTargetData(i,s).next((()=>s)))))))})).then((i=>{const s=e.vs.get(i.targetId);return(s===null||i.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.vs=e.vs.insert(i.targetId,i),e.Fs.set(t,i.targetId)),i}))}async function Kl(n,t,e){const i=Z(n),s=i.vs.get(t),r=e?"readwrite":"readwrite-primary";try{e||await i.persistence.runTransaction("Release target",r,(o=>i.persistence.referenceDelegate.removeTarget(o,s)))}catch(o){if(!gs(o))throw o;$($c,`Failed to update sequence numbers for target ${t}: ${o}`)}i.vs=i.vs.remove(t),i.Fs.delete(s.target)}function pd(n,t,e){const i=Z(n);let s=J.min(),r=ut();return i.persistence.runTransaction("Execute query","readwrite",(o=>(function(l,u,h){const d=Z(l),p=d.Fs.get(h);return p!==void 0?V.resolve(d.vs.get(p)):d.li.getTargetData(u,h)})(i,o,qe(t)).next((a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,i.li.getMatchingKeysForTargetId(o,a.targetId).next((l=>{r=l}))})).next((()=>i.Cs.getDocumentsMatchingQuery(o,t,e?s:J.min(),e?r:ut()))).next((a=>(Hw(i,kE(t),a),{documents:a,ks:r})))))}function Hw(n,t,e){let i=n.Ms.get(t)||J.min();e.forEach(((s,r)=>{r.readTime.compareTo(i)>0&&(i=r.readTime)})),n.Ms.set(t,i)}class gd{constructor(){this.activeTargetIds=LE()}Qs(t){this.activeTargetIds=this.activeTargetIds.add(t)}Gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Ws(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Ww{constructor(){this.vo=new gd,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,i){}addLocalQueryTarget(t,e=!0){return e&&this.vo.Qs(t),this.Fo[t]||"not-current"}updateQueryState(t,e,i){this.Fo[t]=e}removeLocalQueryTarget(t){this.vo.Gs(t)}isLocalQueryTarget(t){return this.vo.activeTargetIds.has(t)}clearQueryState(t){delete this.Fo[t]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(t){return this.vo.activeTargetIds.has(t)}start(){return this.vo=new gd,Promise.resolve()}handleUserChange(t,e,i){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */const md="ConnectivityMonitor";class _d{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(t){this.Lo.push(t)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){$(md,"Network connectivity changed: AVAILABLE");for(const t of this.Lo)t(0)}Bo(){$(md,"Network connectivity changed: UNAVAILABLE");for(const t of this.Lo)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Zr=null;function Gl(){return Zr===null?Zr=(function(){return 268435456+Math.round(2147483648*Math.random())})():Zr++,"0x"+Zr.toString(16)}/**
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
 */const ll="RestConnection",Kw={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class Gw{get Ko(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.qo=e+"://"+t.host,this.Uo=`projects/${i}/databases/${s}`,this.$o=this.databaseId.database===jo?`project_id=${i}`:`project_id=${i}&database_id=${s}`}Wo(t,e,i,s,r){const o=Gl(),a=this.Qo(t,e.toUriEncodedString());$(ll,`Sending RPC '${t}' ${o}:`,a,i);const l={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(l,s,r);const{host:u}=new URL(a),h=us(u);return this.zo(t,a,l,i,h).then((d=>($(ll,`Received RPC '${t}' ${o}: `,d),d)),(d=>{throw Ti(ll,`RPC '${t}' ${o} failed with error: `,d,"url: ",a,"request:",i),d}))}jo(t,e,i,s,r,o){return this.Wo(t,e,i,s,r)}Go(t,e,i){t["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+fs})(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((s,r)=>t[r]=s)),i&&i.headers.forEach(((s,r)=>t[r]=s))}Qo(t,e){const i=Kw[t];let s=`${this.qo}/v1/${e}:${i}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
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
 */const ae="WebChannelConnection",Ms=(n,t,e)=>{n.listen(t,(i=>{try{e(i)}catch(s){setTimeout((()=>{throw s}),0)}}))};class Yi extends Gw{constructor(t){super(t),this.a_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}static u_(){if(!Yi.c_){const t=eg();Ms(t,tg.STAT_EVENT,(e=>{e.stat===Vl.PROXY?$(ae,"STAT_EVENT: detected buffering proxy"):e.stat===Vl.NOPROXY&&$(ae,"STAT_EVENT: detected no buffering proxy")})),Yi.c_=!0}}zo(t,e,i,s,r){const o=Gl();return new Promise(((a,l)=>{const u=new Jp;u.setWithCredentials(!0),u.listenOnce(Zp.COMPLETE,(()=>{try{switch(u.getLastErrorCode()){case vo.NO_ERROR:const d=u.getResponseJson();$(ae,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(d)),a(d);break;case vo.TIMEOUT:$(ae,`RPC '${t}' ${o} timed out`),l(new H(N.DEADLINE_EXCEEDED,"Request time out"));break;case vo.HTTP_ERROR:const p=u.getStatus();if($(ae,`RPC '${t}' ${o} failed with status:`,p,"response text:",u.getResponseText()),p>0){let y=u.getResponseJson();Array.isArray(y)&&(y=y[0]);const S=y==null?void 0:y.error;if(S&&S.status&&S.message){const b=(function(P){const k=P.toLowerCase().replace(/_/g,"-");return Object.values(N).indexOf(k)>=0?k:N.UNKNOWN})(S.status);l(new H(b,S.message))}else l(new H(N.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new H(N.UNAVAILABLE,"Connection failed."));break;default:K(9055,{l_:t,streamId:o,h_:u.getLastErrorCode(),P_:u.getLastError()})}}finally{$(ae,`RPC '${t}' ${o} completed.`)}}));const h=JSON.stringify(s);$(ae,`RPC '${t}' ${o} sending request:`,s),u.send(e,"POST",h,i,15)}))}T_(t,e,i){const s=Gl(),r=[this.qo,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=this.createWebChannelTransport(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(a.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(a.useFetchStreams=!0),this.Go(a.initMessageHeaders,e,i),a.encodeInitMessageHeaders=!0;const u=r.join("");$(ae,`Creating RPC '${t}' stream ${s}: ${u}`,a);const h=o.createWebChannel(u,a);this.I_(h);let d=!1,p=!1;const y=new Yw({Ho:S=>{p?$(ae,`Not sending because RPC '${t}' stream ${s} is closed:`,S):(d||($(ae,`Opening RPC '${t}' stream ${s} transport.`),h.open(),d=!0),$(ae,`RPC '${t}' stream ${s} sending:`,S),h.send(S))},Jo:()=>h.close()});return Ms(h,$s.EventType.OPEN,(()=>{p||($(ae,`RPC '${t}' stream ${s} transport opened.`),y.i_())})),Ms(h,$s.EventType.CLOSE,(()=>{p||(p=!0,$(ae,`RPC '${t}' stream ${s} transport closed`),y.o_(),this.E_(h))})),Ms(h,$s.EventType.ERROR,(S=>{p||(p=!0,Ti(ae,`RPC '${t}' stream ${s} transport errored. Name:`,S.name,"Message:",S.message),y.o_(new H(N.UNAVAILABLE,"The operation could not be completed")))})),Ms(h,$s.EventType.MESSAGE,(S=>{var b;if(!p){const T=S.data[0];vt(!!T,16349);const P=T,k=(P==null?void 0:P.error)||((b=P[0])==null?void 0:b.error);if(k){$(ae,`RPC '${t}' stream ${s} received error:`,k);const C=k.status;let R=(function(E){const g=Ht[E];if(g!==void 0)return Lg(g)})(C),M=k.message;C==="NOT_FOUND"&&M.includes("database")&&M.includes("does not exist")&&M.includes(this.databaseId.database)&&Ti(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),R===void 0&&(R=N.INTERNAL,M="Unknown error status: "+C+" with message "+k.message),p=!0,y.o_(new H(R,M)),h.close()}else $(ae,`RPC '${t}' stream ${s} received:`,T),y.__(T)}})),Yi.u_(),setTimeout((()=>{y.s_()}),0),y}terminate(){this.a_.forEach((t=>t.close())),this.a_=[]}I_(t){this.a_.push(t)}E_(t){this.a_=this.a_.filter((e=>e===t))}Go(t,e,i){super.Go(t,e,i),this.databaseInfo.apiKey&&(t["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return ng()}}/**
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
 */function Qw(n){return new Yi(n)}function cl(){return typeof document<"u"?document:null}/**
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
 */function Sa(n){return new tw(n,!0)}/**
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
 */Yi.c_=!1;class Qg{constructor(t,e,i=1e3,s=1.5,r=6e4){this.Ci=t,this.timerId=e,this.R_=i,this.A_=s,this.V_=r,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(t){this.cancel();const e=Math.floor(this.d_+this.y_()),i=Math.max(0,Date.now()-this.f_),s=Math.max(0,e-i);s>0&&$("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.d_} ms, delay with jitter: ${e} ms, last attempt: ${i} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,s,(()=>(this.f_=Date.now(),t()))),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
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
 */const yd="PersistentStream";class Xg{constructor(t,e,i,s,r,o,a,l){this.Ci=t,this.b_=i,this.S_=s,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Qg(t,e)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.b_,6e4,(()=>this.k_())))}K_(t){this.q_(),this.stream.send(t)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,e){this.q_(),this.U_(),this.M_.cancel(),this.D_++,t!==4?this.M_.reset():e&&e.code===N.RESOURCE_EXHAUSTED?(yn(e.toString()),yn("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):e&&e.code===N.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.t_(e)}W_(){}auth(){this.state=1;const t=this.Q_(this.D_),e=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([i,s])=>{this.D_===e&&this.G_(i,s)}),(i=>{t((()=>{const s=new H(N.UNKNOWN,"Fetching auth token failed: "+i.message);return this.z_(s)}))}))}G_(t,e){const i=this.Q_(this.D_);this.stream=this.j_(t,e),this.stream.Zo((()=>{i((()=>this.listener.Zo()))})),this.stream.Yo((()=>{i((()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.S_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.Yo())))})),this.stream.t_((s=>{i((()=>this.z_(s)))})),this.stream.onMessage((s=>{i((()=>++this.F_==1?this.H_(s):this.onNext(s)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(t){return $(yd,`close with error: ${t}`),this.stream=null,this.close(4,t)}Q_(t){return e=>{this.Ci.enqueueAndForget((()=>this.D_===t?e():($(yd,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Xw extends Xg{constructor(t,e,i,s,r,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,i,s,o),this.serializer=r}j_(t,e){return this.connection.T_("Listen",t,e)}H_(t){return this.onNext(t)}onNext(t){this.M_.reset();const e=iw(this.serializer,t),i=(function(r){if(!("targetChange"in r))return J.min();const o=r.targetChange;return o.targetIds&&o.targetIds.length?J.min():o.readTime?Ke(o.readTime):J.min()})(t);return this.listener.J_(e,i)}Z_(t){const e={};e.database=ql(this.serializer),e.addTarget=(function(r,o){let a;const l=o.target;if(a=zl(l)?{documents:ow(r,l)}:{query:aw(r,l).ft},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=Fg(r,o.resumeToken);const u=jl(r,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(J.min())>0){a.readTime=Yo(r,o.snapshotVersion.toTimestamp());const u=jl(r,o.expectedCount);u!==null&&(a.expectedCount=u)}return a})(this.serializer,t);const i=cw(this.serializer,t);i&&(e.labels=i),this.K_(e)}X_(t){const e={};e.database=ql(this.serializer),e.removeTarget=t,this.K_(e)}}class Jw extends Xg{constructor(t,e,i,s,r,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,i,s,o),this.serializer=r}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(t,e){return this.connection.T_("Write",t,e)}H_(t){return vt(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,vt(!t.writeResults||t.writeResults.length===0,55816),this.listener.ta()}onNext(t){vt(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.M_.reset();const e=rw(t.writeResults,t.commitTime),i=Ke(t.commitTime);return this.listener.na(i,e)}ra(){const t={};t.database=ql(this.serializer),this.K_(t)}ea(t){const e={streamToken:this.lastStreamToken,writes:t.map((i=>sw(this.serializer,i)))};this.K_(e)}}/**
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
 */class Zw{}class tT extends Zw{constructor(t,e,i,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=i,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new H(N.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(t,e,i,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,o])=>this.connection.Wo(t,Hl(e,i),s,r,o))).catch((r=>{throw r.name==="FirebaseError"?(r.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new H(N.UNKNOWN,r.toString())}))}jo(t,e,i,s,r){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,a])=>this.connection.jo(t,Hl(e,i),s,o,a,r))).catch((o=>{throw o.name==="FirebaseError"?(o.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new H(N.UNKNOWN,o.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}function eT(n,t,e,i){return new tT(n,t,e,i)}class nT{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(t){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ca("Offline")))}set(t){this.Pa(),this.oa=0,t==="Online"&&(this.aa=!1),this.ca(t)}ca(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}la(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(yn(e),this.aa=!1):$("OnlineStateTracker",e)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const Ii="RemoteStore";class iT{constructor(t,e,i,s,r){this.localStore=t,this.datastore=e,this.asyncQueue=i,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.Ra=[],this.Aa=r,this.Aa.Mo((o=>{i.enqueueAndForget((async()=>{Ci(this)&&($(Ii,"Restarting streams for network reachability change."),await(async function(l){const u=Z(l);u.Ea.add(4),await Cr(u),u.Va.set("Unknown"),u.Ea.delete(4),await xa(u)})(this))}))})),this.Va=new nT(i,s)}}async function xa(n){if(Ci(n))for(const t of n.Ra)await t(!0)}async function Cr(n){for(const t of n.Ra)await t(!1)}function Jg(n,t){const e=Z(n);e.Ia.has(t.targetId)||(e.Ia.set(t.targetId,t),jc(e)?Bc(e):ms(e).O_()&&zc(e,t))}function Uc(n,t){const e=Z(n),i=ms(e);e.Ia.delete(t),i.O_()&&Zg(e,t),e.Ia.size===0&&(i.O_()?i.L_():Ci(e)&&e.Va.set("Unknown"))}function zc(n,t){if(n.da.$e(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(J.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}ms(n).Z_(t)}function Zg(n,t){n.da.$e(t),ms(n).X_(t)}function Bc(n){n.da=new QE({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),At:t=>n.Ia.get(t)||null,ht:()=>n.datastore.serializer.databaseId}),ms(n).start(),n.Va.ua()}function jc(n){return Ci(n)&&!ms(n).x_()&&n.Ia.size>0}function Ci(n){return Z(n).Ea.size===0}function tm(n){n.da=void 0}async function sT(n){n.Va.set("Online")}async function rT(n){n.Ia.forEach(((t,e)=>{zc(n,t)}))}async function oT(n,t){tm(n),jc(n)?(n.Va.ha(t),Bc(n)):n.Va.set("Unknown")}async function aT(n,t,e){if(n.Va.set("Online"),t instanceof Ng&&t.state===2&&t.cause)try{await(async function(s,r){const o=r.cause;for(const a of r.targetIds)s.Ia.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.Ia.delete(a),s.da.removeTarget(a))})(n,t)}catch(i){$(Ii,"Failed to remove targets %s: %s ",t.targetIds.join(","),i),await Xo(n,i)}else if(t instanceof Io?n.da.Xe(t):t instanceof Vg?n.da.st(t):n.da.tt(t),!e.isEqual(J.min()))try{const i=await Yg(n.localStore);e.compareTo(i)>=0&&await(function(r,o){const a=r.da.Tt(o);return a.targetChanges.forEach(((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const h=r.Ia.get(u);h&&r.Ia.set(u,h.withResumeToken(l.resumeToken,o))}})),a.targetMismatches.forEach(((l,u)=>{const h=r.Ia.get(l);if(!h)return;r.Ia.set(l,h.withResumeToken(se.EMPTY_BYTE_STRING,h.snapshotVersion)),Zg(r,l);const d=new Mn(h.target,l,u,h.sequenceNumber);zc(r,d)})),r.remoteSyncer.applyRemoteEvent(a)})(n,e)}catch(i){$(Ii,"Failed to raise snapshot:",i),await Xo(n,i)}}async function Xo(n,t,e){if(!gs(t))throw t;n.Ea.add(1),await Cr(n),n.Va.set("Offline"),e||(e=()=>Yg(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{$(Ii,"Retrying IndexedDB access"),await e(),n.Ea.delete(1),await xa(n)}))}function em(n,t){return t().catch((e=>Xo(n,e,t)))}async function Aa(n){const t=Z(n),e=Xn(t);let i=t.Ta.length>0?t.Ta[t.Ta.length-1].batchId:xc;for(;lT(t);)try{const s=await Bw(t.localStore,i);if(s===null){t.Ta.length===0&&e.L_();break}i=s.batchId,cT(t,s)}catch(s){await Xo(t,s)}nm(t)&&im(t)}function lT(n){return Ci(n)&&n.Ta.length<10}function cT(n,t){n.Ta.push(t);const e=Xn(n);e.O_()&&e.Y_&&e.ea(t.mutations)}function nm(n){return Ci(n)&&!Xn(n).x_()&&n.Ta.length>0}function im(n){Xn(n).start()}async function uT(n){Xn(n).ra()}async function hT(n){const t=Xn(n);for(const e of n.Ta)t.ea(e.mutations)}async function dT(n,t,e){const i=n.Ta.shift(),s=Mc.from(i,t,e);await em(n,(()=>n.remoteSyncer.applySuccessfulWrite(s))),await Aa(n)}async function fT(n,t){t&&Xn(n).Y_&&await(async function(i,s){if((function(o){return KE(o)&&o!==N.ABORTED})(s.code)){const r=i.Ta.shift();Xn(i).B_(),await em(i,(()=>i.remoteSyncer.rejectFailedWrite(r.batchId,s))),await Aa(i)}})(n,t),nm(n)&&im(n)}async function bd(n,t){const e=Z(n);e.asyncQueue.verifyOperationInProgress(),$(Ii,"RemoteStore received new credentials");const i=Ci(e);e.Ea.add(3),await Cr(e),i&&e.Va.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.Ea.delete(3),await xa(e)}async function pT(n,t){const e=Z(n);t?(e.Ea.delete(2),await xa(e)):t||(e.Ea.add(2),await Cr(e),e.Va.set("Unknown"))}function ms(n){return n.ma||(n.ma=(function(e,i,s){const r=Z(e);return r.sa(),new Xw(i,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)})(n.datastore,n.asyncQueue,{Zo:sT.bind(null,n),Yo:rT.bind(null,n),t_:oT.bind(null,n),J_:aT.bind(null,n)}),n.Ra.push((async t=>{t?(n.ma.B_(),jc(n)?Bc(n):n.Va.set("Unknown")):(await n.ma.stop(),tm(n))}))),n.ma}function Xn(n){return n.fa||(n.fa=(function(e,i,s){const r=Z(e);return r.sa(),new Jw(i,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)})(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),Yo:uT.bind(null,n),t_:fT.bind(null,n),ta:hT.bind(null,n),na:dT.bind(null,n)}),n.Ra.push((async t=>{t?(n.fa.B_(),await Aa(n)):(await n.fa.stop(),n.Ta.length>0&&($(Ii,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))}))),n.fa}/**
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
 */class Hc{constructor(t,e,i,s,r){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=i,this.op=s,this.removalCallback=r,this.deferred=new Hn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,e,i,s,r){const o=Date.now()+i,a=new Hc(t,e,o,s,r);return a.start(i),a}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new H(N.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Wc(n,t){if(yn("AsyncQueue",`${t}: ${n}`),gs(n))return new H(N.UNAVAILABLE,`${t}: ${n}`);throw n}/**
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
 */class Qi{static emptySet(t){return new Qi(t.comparator)}constructor(t){this.comparator=t?(e,i)=>t(e,i)||W.comparator(e.key,i.key):(e,i)=>W.comparator(e.key,i.key),this.keyedMap=Us(),this.sortedSet=new Lt(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,i)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Qi)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),i=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,r=i.getNext().key;if(!s.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const i=new Qi;return i.comparator=this.comparator,i.keyedMap=t,i.sortedSet=e,i}}/**
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
 */class vd{constructor(){this.ga=new Lt(W.comparator)}track(t){const e=t.doc.key,i=this.ga.get(e);i?t.type!==0&&i.type===3?this.ga=this.ga.insert(e,t):t.type===3&&i.type!==1?this.ga=this.ga.insert(e,{type:i.type,doc:t.doc}):t.type===2&&i.type===2?this.ga=this.ga.insert(e,{type:2,doc:t.doc}):t.type===2&&i.type===0?this.ga=this.ga.insert(e,{type:0,doc:t.doc}):t.type===1&&i.type===0?this.ga=this.ga.remove(e):t.type===1&&i.type===2?this.ga=this.ga.insert(e,{type:1,doc:i.doc}):t.type===0&&i.type===1?this.ga=this.ga.insert(e,{type:2,doc:t.doc}):K(63341,{Vt:t,pa:i}):this.ga=this.ga.insert(e,t)}ya(){const t=[];return this.ga.inorderTraversal(((e,i)=>{t.push(i)})),t}}class os{constructor(t,e,i,s,r,o,a,l,u){this.query=t,this.docs=e,this.oldDocs=i,this.docChanges=s,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(t,e,i,s,r){const o=[];return e.forEach((a=>{o.push({type:0,doc:a})})),new os(t,e,Qi.emptySet(e),o,i,s,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&va(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,i=t.docChanges;if(e.length!==i.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==i[s].type||!e[s].doc.isEqual(i[s].doc))return!1;return!0}}/**
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
 */class gT{constructor(){this.wa=void 0,this.ba=[]}Sa(){return this.ba.some((t=>t.Da()))}}class mT{constructor(){this.queries=Ed(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(e,i){const s=Z(e),r=s.queries;s.queries=Ed(),r.forEach(((o,a)=>{for(const l of a.ba)l.onError(i)}))})(this,new H(N.ABORTED,"Firestore shutting down"))}}function Ed(){return new ki((n=>wg(n)),va)}async function _T(n,t){const e=Z(n);let i=3;const s=t.query;let r=e.queries.get(s);r?!r.Sa()&&t.Da()&&(i=2):(r=new gT,i=t.Da()?0:1);try{switch(i){case 0:r.wa=await e.onListen(s,!0);break;case 1:r.wa=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(o){const a=Wc(o,`Initialization of query '${zi(t.query)}' failed`);return void t.onError(a)}e.queries.set(s,r),r.ba.push(t),t.va(e.onlineState),r.wa&&t.Fa(r.wa)&&qc(e)}async function yT(n,t){const e=Z(n),i=t.query;let s=3;const r=e.queries.get(i);if(r){const o=r.ba.indexOf(t);o>=0&&(r.ba.splice(o,1),r.ba.length===0?s=t.Da()?0:1:!r.Sa()&&t.Da()&&(s=2))}switch(s){case 0:return e.queries.delete(i),e.onUnlisten(i,!0);case 1:return e.queries.delete(i),e.onUnlisten(i,!1);case 2:return e.onLastRemoteStoreUnlisten(i);default:return}}function bT(n,t){const e=Z(n);let i=!1;for(const s of t){const r=s.query,o=e.queries.get(r);if(o){for(const a of o.ba)a.Fa(s)&&(i=!0);o.wa=s}}i&&qc(e)}function vT(n,t,e){const i=Z(n),s=i.queries.get(t);if(s)for(const r of s.ba)r.onError(e);i.queries.delete(t)}function qc(n){n.Ca.forEach((t=>{t.next()}))}var Yl,wd;(wd=Yl||(Yl={})).Ma="default",wd.Cache="cache";class ET{constructor(t,e,i){this.query=t,this.xa=e,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=i||{}}Fa(t){if(!this.options.includeMetadataChanges){const i=[];for(const s of t.docChanges)s.type!==3&&i.push(s);t=new os(t.query,t.docs,t.oldDocs,i,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Oa?this.Ba(t)&&(this.xa.next(t),e=!0):this.La(t,this.onlineState)&&(this.ka(t),e=!0),this.Na=t,e}onError(t){this.xa.error(t)}va(t){this.onlineState=t;let e=!1;return this.Na&&!this.Oa&&this.La(this.Na,t)&&(this.ka(this.Na),e=!0),e}La(t,e){if(!t.fromCache||!this.Da())return!0;const i=e!=="Offline";return(!this.options.Ka||!i)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}Ba(t){if(t.docChanges.length>0)return!0;const e=this.Na&&this.Na.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}ka(t){t=os.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Oa=!0,this.xa.next(t)}Da(){return this.options.source!==Yl.Cache}}/**
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
 */class sm{constructor(t){this.key=t}}class rm{constructor(t){this.key=t}}class wT{constructor(t,e){this.query=t,this.Za=e,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=ut(),this.mutatedKeys=ut(),this.eu=Tg(t),this.tu=new Qi(this.eu)}get nu(){return this.Za}ru(t,e){const i=e?e.iu:new vd,s=e?e.tu:this.tu;let r=e?e.mutatedKeys:this.mutatedKeys,o=s,a=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal(((h,d)=>{const p=s.get(h),y=Ea(this.query,d)?d:null,S=!!p&&this.mutatedKeys.has(p.key),b=!!y&&(y.hasLocalMutations||this.mutatedKeys.has(y.key)&&y.hasCommittedMutations);let T=!1;p&&y?p.data.isEqual(y.data)?S!==b&&(i.track({type:3,doc:y}),T=!0):this.su(p,y)||(i.track({type:2,doc:y}),T=!0,(l&&this.eu(y,l)>0||u&&this.eu(y,u)<0)&&(a=!0)):!p&&y?(i.track({type:0,doc:y}),T=!0):p&&!y&&(i.track({type:1,doc:p}),T=!0,(l||u)&&(a=!0)),T&&(y?(o=o.add(y),r=b?r.add(h):r.delete(h)):(o=o.delete(h),r=r.delete(h)))})),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),r=r.delete(h.key),i.track({type:1,doc:h})}return{tu:o,iu:i,Ss:a,mutatedKeys:r}}su(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,i,s){const r=this.tu;this.tu=t.tu,this.mutatedKeys=t.mutatedKeys;const o=t.iu.ya();o.sort(((h,d)=>(function(y,S){const b=T=>{switch(T){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return K(20277,{Vt:T})}};return b(y)-b(S)})(h.type,d.type)||this.eu(h.doc,d.doc))),this.ou(i),s=s??!1;const a=e&&!s?this._u():[],l=this.Ya.size===0&&this.current&&!s?1:0,u=l!==this.Xa;return this.Xa=l,o.length!==0||u?{snapshot:new os(this.query,t.tu,r,o,t.mutatedKeys,l===0,u,!1,!!i&&i.resumeToken.approximateByteSize()>0),au:a}:{au:a}}va(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new vd,mutatedKeys:this.mutatedKeys,Ss:!1},!1)):{au:[]}}uu(t){return!this.Za.has(t)&&!!this.tu.has(t)&&!this.tu.get(t).hasLocalMutations}ou(t){t&&(t.addedDocuments.forEach((e=>this.Za=this.Za.add(e))),t.modifiedDocuments.forEach((e=>{})),t.removedDocuments.forEach((e=>this.Za=this.Za.delete(e))),this.current=t.current)}_u(){if(!this.current)return[];const t=this.Ya;this.Ya=ut(),this.tu.forEach((i=>{this.uu(i.key)&&(this.Ya=this.Ya.add(i.key))}));const e=[];return t.forEach((i=>{this.Ya.has(i)||e.push(new rm(i))})),this.Ya.forEach((i=>{t.has(i)||e.push(new sm(i))})),e}cu(t){this.Za=t.ks,this.Ya=ut();const e=this.ru(t.documents);return this.applyChanges(e,!0)}lu(){return os.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const Kc="SyncEngine";class TT{constructor(t,e,i){this.query=t,this.targetId=e,this.view=i}}class IT{constructor(t){this.key=t,this.hu=!1}}class ST{constructor(t,e,i,s,r,o){this.localStore=t,this.remoteStore=e,this.eventManager=i,this.sharedClientState=s,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new ki((a=>wg(a)),va),this.Iu=new Map,this.Eu=new Set,this.Ru=new Lt(W.comparator),this.Au=new Map,this.Vu=new Vc,this.du={},this.mu=new Map,this.fu=rs.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function xT(n,t,e=!0){const i=hm(n);let s;const r=i.Tu.get(t);return r?(i.sharedClientState.addLocalQueryTarget(r.targetId),s=r.view.lu()):s=await om(i,t,e,!0),s}async function AT(n,t){const e=hm(n);await om(e,t,!0,!1)}async function om(n,t,e,i){const s=await jw(n.localStore,qe(t)),r=s.targetId,o=n.sharedClientState.addLocalQueryTarget(r,e);let a;return i&&(a=await PT(n,t,r,o==="current",s.resumeToken)),n.isPrimaryClient&&e&&Jg(n.remoteStore,s),a}async function PT(n,t,e,i,s){n.pu=(d,p,y)=>(async function(b,T,P,k){let C=T.view.ru(P);C.Ss&&(C=await pd(b.localStore,T.query,!1).then((({documents:E})=>T.view.ru(E,C))));const R=k&&k.targetChanges.get(T.targetId),M=k&&k.targetMismatches.get(T.targetId)!=null,L=T.view.applyChanges(C,b.isPrimaryClient,R,M);return Id(b,T.targetId,L.au),L.snapshot})(n,d,p,y);const r=await pd(n.localStore,t,!0),o=new wT(t,r.ks),a=o.ru(r.documents),l=Rr.createSynthesizedTargetChangeForCurrentChange(e,i&&n.onlineState!=="Offline",s),u=o.applyChanges(a,n.isPrimaryClient,l);Id(n,e,u.au);const h=new TT(t,e,o);return n.Tu.set(t,h),n.Iu.has(e)?n.Iu.get(e).push(t):n.Iu.set(e,[t]),u.snapshot}async function kT(n,t,e){const i=Z(n),s=i.Tu.get(t),r=i.Iu.get(s.targetId);if(r.length>1)return i.Iu.set(s.targetId,r.filter((o=>!va(o,t)))),void i.Tu.delete(t);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(s.targetId),i.sharedClientState.isActiveQueryTarget(s.targetId)||await Kl(i.localStore,s.targetId,!1).then((()=>{i.sharedClientState.clearQueryState(s.targetId),e&&Uc(i.remoteStore,s.targetId),Ql(i,s.targetId)})).catch(ps)):(Ql(i,s.targetId),await Kl(i.localStore,s.targetId,!0))}async function RT(n,t){const e=Z(n),i=e.Tu.get(t),s=e.Iu.get(i.targetId);e.isPrimaryClient&&s.length===1&&(e.sharedClientState.removeLocalQueryTarget(i.targetId),Uc(e.remoteStore,i.targetId))}async function CT(n,t,e){const i=FT(n);try{const s=await(function(o,a){const l=Z(o),u=Ct.now(),h=a.reduce(((y,S)=>y.add(S.key)),ut());let d,p;return l.persistence.runTransaction("Locally write mutations","readwrite",(y=>{let S=bn(),b=ut();return l.xs.getEntries(y,h).next((T=>{S=T,S.forEach(((P,k)=>{k.isValidDocument()||(b=b.add(P))}))})).next((()=>l.localDocuments.getOverlayedDocuments(y,S))).next((T=>{d=T;const P=[];for(const k of a){const C=BE(k,d.get(k.key).overlayedDocument);C!=null&&P.push(new Ri(k.key,C,gg(C.value.mapValue),gn.exists(!0)))}return l.mutationQueue.addMutationBatch(y,u,P,a)})).next((T=>{p=T;const P=T.applyToLocalDocumentSet(d,b);return l.documentOverlayCache.saveOverlays(y,T.batchId,P)}))})).then((()=>({batchId:p.batchId,changes:Sg(d)})))})(i.localStore,t);i.sharedClientState.addPendingMutation(s.batchId),(function(o,a,l){let u=o.du[o.currentUser.toKey()];u||(u=new Lt(ct)),u=u.insert(a,l),o.du[o.currentUser.toKey()]=u})(i,s.batchId,e),await Dr(i,s.changes),await Aa(i.remoteStore)}catch(s){const r=Wc(s,"Failed to persist write");e.reject(r)}}async function am(n,t){const e=Z(n);try{const i=await Uw(e.localStore,t);t.targetChanges.forEach(((s,r)=>{const o=e.Au.get(r);o&&(vt(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?vt(o.hu,14607):s.removedDocuments.size>0&&(vt(o.hu,42227),o.hu=!1))})),await Dr(e,i,t)}catch(i){await ps(i)}}function Td(n,t,e){const i=Z(n);if(i.isPrimaryClient&&e===0||!i.isPrimaryClient&&e===1){const s=[];i.Tu.forEach(((r,o)=>{const a=o.view.va(t);a.snapshot&&s.push(a.snapshot)})),(function(o,a){const l=Z(o);l.onlineState=a;let u=!1;l.queries.forEach(((h,d)=>{for(const p of d.ba)p.va(a)&&(u=!0)})),u&&qc(l)})(i.eventManager,t),s.length&&i.Pu.J_(s),i.onlineState=t,i.isPrimaryClient&&i.sharedClientState.setOnlineState(t)}}async function DT(n,t,e){const i=Z(n);i.sharedClientState.updateQueryState(t,"rejected",e);const s=i.Au.get(t),r=s&&s.key;if(r){let o=new Lt(W.comparator);o=o.insert(r,ce.newNoDocument(r,J.min()));const a=ut().add(r),l=new Ia(J.min(),new Map,new Lt(ct),o,a);await am(i,l),i.Ru=i.Ru.remove(r),i.Au.delete(t),Gc(i)}else await Kl(i.localStore,t,!1).then((()=>Ql(i,t,e))).catch(ps)}async function MT(n,t){const e=Z(n),i=t.batch.batchId;try{const s=await $w(e.localStore,t);cm(e,i,null),lm(e,i),e.sharedClientState.updateMutationState(i,"acknowledged"),await Dr(e,s)}catch(s){await ps(s)}}async function OT(n,t,e){const i=Z(n);try{const s=await(function(o,a){const l=Z(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",(u=>{let h;return l.mutationQueue.lookupMutationBatch(u,a).next((d=>(vt(d!==null,37113),h=d.keys(),l.mutationQueue.removeMutationBatch(u,d)))).next((()=>l.mutationQueue.performConsistencyCheck(u))).next((()=>l.documentOverlayCache.removeOverlaysForBatchId(u,h,a))).next((()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,h))).next((()=>l.localDocuments.getDocuments(u,h)))}))})(i.localStore,t);cm(i,t,e),lm(i,t),i.sharedClientState.updateMutationState(t,"rejected",e),await Dr(i,s)}catch(s){await ps(s)}}function lm(n,t){(n.mu.get(t)||[]).forEach((e=>{e.resolve()})),n.mu.delete(t)}function cm(n,t,e){const i=Z(n);let s=i.du[i.currentUser.toKey()];if(s){const r=s.get(t);r&&(e?r.reject(e):r.resolve(),s=s.remove(t)),i.du[i.currentUser.toKey()]=s}}function Ql(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const i of n.Iu.get(t))n.Tu.delete(i),e&&n.Pu.yu(i,e);n.Iu.delete(t),n.isPrimaryClient&&n.Vu.Gr(t).forEach((i=>{n.Vu.containsKey(i)||um(n,i)}))}function um(n,t){n.Eu.delete(t.path.canonicalString());const e=n.Ru.get(t);e!==null&&(Uc(n.remoteStore,e),n.Ru=n.Ru.remove(t),n.Au.delete(e),Gc(n))}function Id(n,t,e){for(const i of e)i instanceof sm?(n.Vu.addReference(i.key,t),LT(n,i)):i instanceof rm?($(Kc,"Document no longer in limbo: "+i.key),n.Vu.removeReference(i.key,t),n.Vu.containsKey(i.key)||um(n,i.key)):K(19791,{wu:i})}function LT(n,t){const e=t.key,i=e.path.canonicalString();n.Ru.get(e)||n.Eu.has(i)||($(Kc,"New document in limbo: "+e),n.Eu.add(i),Gc(n))}function Gc(n){for(;n.Eu.size>0&&n.Ru.size<n.maxConcurrentLimboResolutions;){const t=n.Eu.values().next().value;n.Eu.delete(t);const e=new W(Mt.fromString(t)),i=n.fu.next();n.Au.set(i,new IT(e)),n.Ru=n.Ru.insert(e,i),Jg(n.remoteStore,new Mn(qe(Cc(e.path)),i,"TargetPurposeLimboResolution",ma.ce))}}async function Dr(n,t,e){const i=Z(n),s=[],r=[],o=[];i.Tu.isEmpty()||(i.Tu.forEach(((a,l)=>{o.push(i.pu(l,t,e).then((u=>{var h;if((u||e)&&i.isPrimaryClient){const d=u?!u.fromCache:(h=e==null?void 0:e.targetChanges.get(l.targetId))==null?void 0:h.current;i.sharedClientState.updateQueryState(l.targetId,d?"current":"not-current")}if(u){s.push(u);const d=Fc.Es(l.targetId,u);r.push(d)}})))})),await Promise.all(o),i.Pu.J_(s),await(async function(l,u){const h=Z(l);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",(d=>V.forEach(u,(p=>V.forEach(p.Ts,(y=>h.persistence.referenceDelegate.addReference(d,p.targetId,y))).next((()=>V.forEach(p.Is,(y=>h.persistence.referenceDelegate.removeReference(d,p.targetId,y)))))))))}catch(d){if(!gs(d))throw d;$($c,"Failed to update sequence numbers: "+d)}for(const d of u){const p=d.targetId;if(!d.fromCache){const y=h.vs.get(p),S=y.snapshotVersion,b=y.withLastLimboFreeSnapshotVersion(S);h.vs=h.vs.insert(p,b)}}})(i.localStore,r))}async function VT(n,t){const e=Z(n);if(!e.currentUser.isEqual(t)){$(Kc,"User change. New user:",t.toKey());const i=await Gg(e.localStore,t);e.currentUser=t,(function(r,o){r.mu.forEach((a=>{a.forEach((l=>{l.reject(new H(N.CANCELLED,o))}))})),r.mu.clear()})(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,i.removedBatchIds,i.addedBatchIds),await Dr(e,i.Ns)}}function NT(n,t){const e=Z(n),i=e.Au.get(t);if(i&&i.hu)return ut().add(i.key);{let s=ut();const r=e.Iu.get(t);if(!r)return s;for(const o of r){const a=e.Tu.get(o);s=s.unionWith(a.view.nu)}return s}}function hm(n){const t=Z(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=am.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=NT.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=DT.bind(null,t),t.Pu.J_=bT.bind(null,t.eventManager),t.Pu.yu=vT.bind(null,t.eventManager),t}function FT(n){const t=Z(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=MT.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=OT.bind(null,t),t}class Jo{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Sa(t.databaseInfo.databaseId),this.sharedClientState=this.Du(t),this.persistence=this.Cu(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Fu(t,this.localStore),this.indexBackfillerScheduler=this.Mu(t,this.localStore)}Fu(t,e){return null}Mu(t,e){return null}vu(t){return Fw(this.persistence,new Lw,t.initialUser,this.serializer)}Cu(t){return new Kg(Nc.Vi,this.serializer)}Du(t){return new Ww}async terminate(){var t,e;(t=this.gcScheduler)==null||t.stop(),(e=this.indexBackfillerScheduler)==null||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Jo.provider={build:()=>new Jo};class $T extends Jo{constructor(t){super(),this.cacheSizeBytes=t}Fu(t,e){vt(this.persistence.referenceDelegate instanceof Qo,46915);const i=this.persistence.referenceDelegate.garbageCollector;return new vw(i,t.asyncQueue,e)}Cu(t){const e=this.cacheSizeBytes!==void 0?ge.withCacheSize(this.cacheSizeBytes):ge.DEFAULT;return new Kg((i=>Qo.Vi(i,e)),this.serializer)}}class Xl{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>Td(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=VT.bind(null,this.syncEngine),await pT(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return(function(){return new mT})()}createDatastore(t){const e=Sa(t.databaseInfo.databaseId),i=Qw(t.databaseInfo);return eT(t.authCredentials,t.appCheckCredentials,i,e)}createRemoteStore(t){return(function(i,s,r,o,a){return new iT(i,s,r,o,a)})(this.localStore,this.datastore,t.asyncQueue,(e=>Td(this.syncEngine,e,0)),(function(){return _d.v()?new _d:new qw})())}createSyncEngine(t,e){return(function(s,r,o,a,l,u,h){const d=new ST(s,r,o,a,l,u);return h&&(d.gu=!0),d})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await(async function(s){const r=Z(s);$(Ii,"RemoteStore shutting down."),r.Ea.add(5),await Cr(r),r.Aa.shutdown(),r.Va.set("Unknown")})(this.remoteStore),(t=this.datastore)==null||t.terminate(),(e=this.eventManager)==null||e.terminate()}}Xl.provider={build:()=>new Xl};/**
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
 */class UT{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ou(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ou(this.observer.error,t):yn("Uncaught Error in snapshot listener:",t.toString()))}Nu(){this.muted=!0}Ou(t,e){setTimeout((()=>{this.muted||t(e)}),0)}}/**
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
 */const Jn="FirestoreClient";class zT{constructor(t,e,i,s,r){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=i,this._databaseInfo=s,this.user=le.UNAUTHENTICATED,this.clientId=Ic.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=r,this.authCredentials.start(i,(async o=>{$(Jn,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(i,(o=>($(Jn,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Hn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const i=Wc(e,"Failed to shutdown persistence");t.reject(i)}})),t.promise}}async function ul(n,t){n.asyncQueue.verifyOperationInProgress(),$(Jn,"Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let i=e.initialUser;n.setCredentialChangeListener((async s=>{i.isEqual(s)||(await Gg(t.localStore,s),i=s)})),t.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=t}async function Sd(n,t){n.asyncQueue.verifyOperationInProgress();const e=await BT(n);$(Jn,"Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener((i=>bd(t.remoteStore,i))),n.setAppCheckTokenChangeListener(((i,s)=>bd(t.remoteStore,s))),n._onlineComponents=t}async function BT(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){$(Jn,"Using user provided OfflineComponentProvider");try{await ul(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!(function(s){return s.name==="FirebaseError"?s.code===N.FAILED_PRECONDITION||s.code===N.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(e))throw e;Ti("Error using user provided cache. Falling back to memory cache: "+e),await ul(n,new Jo)}}else $(Jn,"Using default OfflineComponentProvider"),await ul(n,new $T(void 0));return n._offlineComponents}async function dm(n){return n._onlineComponents||(n._uninitializedComponentsProvider?($(Jn,"Using user provided OnlineComponentProvider"),await Sd(n,n._uninitializedComponentsProvider._online)):($(Jn,"Using default OnlineComponentProvider"),await Sd(n,new Xl))),n._onlineComponents}function jT(n){return dm(n).then((t=>t.syncEngine))}async function HT(n){const t=await dm(n),e=t.eventManager;return e.onListen=xT.bind(null,t.syncEngine),e.onUnlisten=kT.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=AT.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=RT.bind(null,t.syncEngine),e}function WT(n,t,e={}){const i=new Hn;return n.asyncQueue.enqueueAndForget((async()=>(function(r,o,a,l,u){const h=new UT({next:p=>{h.Nu(),o.enqueueAndForget((()=>yT(r,d)));const y=p.docs.has(a);!y&&p.fromCache?u.reject(new H(N.UNAVAILABLE,"Failed to get document because the client is offline.")):y&&p.fromCache&&l&&l.source==="server"?u.reject(new H(N.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(p)},error:p=>u.reject(p)}),d=new ET(Cc(a.path),h,{includeMetadataChanges:!0,Ka:!0});return _T(r,d)})(await HT(n),n.asyncQueue,t,e,i))),i.promise}function qT(n,t){const e=new Hn;return n.asyncQueue.enqueueAndForget((async()=>CT(await jT(n),t,e))),e.promise}/**
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
 */function fm(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
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
 */const KT="ComponentProvider",xd=new Map;function GT(n,t,e,i,s){return new uE(n,t,e,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,fm(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,i)}/**
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
 */const pm="firestore.googleapis.com",Ad=!0;class Pd{constructor(t){if(t.host===void 0){if(t.ssl!==void 0)throw new H(N.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=pm,this.ssl=Ad}else this.host=t.host,this.ssl=t.ssl??Ad;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=qg;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<yw)throw new H(N.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Z0("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=fm(t.experimentalLongPollingOptions??{}),(function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new H(N.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new H(N.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new H(N.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(function(i,s){return i.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Yc{constructor(t,e,i,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Pd({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new H(N.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new H(N.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Pd(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=(function(i){if(!i)return new B0;switch(i.type){case"firstParty":return new q0(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new H(N.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(e){const i=xd.get(e);i&&($(KT,"Removing Datastore"),xd.delete(e),i.terminate())})(this),Promise.resolve()}}function YT(n,t,e,i={}){var u;n=lr(n,Yc);const s=us(t),r=n._getSettings(),o={...r,emulatorOptions:n._getEmulatorOptions()},a=`${t}:${e}`;s&&(fp(`https://${a}`),pp("Firestore",!0)),r.host!==pm&&r.host!==a&&Ti("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...r,host:a,ssl:s,emulatorOptions:i};if(!bi(l,o)&&(n._setSettings(l),i.mockUserToken)){let h,d;if(typeof i.mockUserToken=="string")h=i.mockUserToken,d=le.MOCK_USER;else{h=hy(i.mockUserToken,(u=n._app)==null?void 0:u.options.projectId);const p=i.mockUserToken.sub||i.mockUserToken.user_id;if(!p)throw new H(N.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");d=new le(p)}n._authCredentials=new j0(new sg(h,d))}}/**
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
 */class Qc{constructor(t,e,i){this.converter=e,this._query=i,this.type="query",this.firestore=t}withConverter(t){return new Qc(this.firestore,t,this._query)}}class te{constructor(t,e,i){this.converter=e,this._key=i,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new gr(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new te(this.firestore,t,this._key)}toJSON(){return{type:te._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,e,i){if(Pr(e,te._jsonSchema))return new te(t,i||null,new W(Mt.fromString(e.referencePath)))}}te._jsonSchemaVersion="firestore/documentReference/1.0",te._jsonSchema={type:Wt("string",te._jsonSchemaVersion),referencePath:Wt("string")};class gr extends Qc{constructor(t,e,i){super(t,e,Cc(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new te(this.firestore,null,new W(t))}withConverter(t){return new gr(this.firestore,t,this._path)}}function QT(n,t,...e){if(n=Re(n),arguments.length===1&&(t=Ic.newId()),J0("doc","path",t),n instanceof Yc){const i=Mt.fromString(t,...e);return Bh(i),new te(n,null,new W(i))}{if(!(n instanceof te||n instanceof gr))throw new H(N.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(Mt.fromString(t,...e));return Bh(i),new te(n.firestore,n instanceof gr?n.converter:null,new W(i))}}/**
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
 */const kd="AsyncQueue";class Rd{constructor(t=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Qg(this,"async_queue_retry"),this._c=()=>{const i=cl();i&&$(kd,"Visibility state changed to "+i.visibilityState),this.M_.w_()},this.ac=t;const e=cl();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.uc(),this.cc(t)}enterRestrictedMode(t){if(!this.ec){this.ec=!0,this.sc=t||!1;const e=cl();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this._c)}}enqueue(t){if(this.uc(),this.ec)return new Promise((()=>{}));const e=new Hn;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Yu.push(t),this.lc())))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(t){if(!gs(t))throw t;$(kd,"Operation failed with retryable error: "+t)}this.Yu.length>0&&this.M_.p_((()=>this.lc()))}}cc(t){const e=this.ac.then((()=>(this.rc=!0,t().catch((i=>{throw this.nc=i,this.rc=!1,yn("INTERNAL UNHANDLED ERROR: ",Cd(i)),i})).then((i=>(this.rc=!1,i))))));return this.ac=e,e}enqueueAfterDelay(t,e,i){this.uc(),this.oc.indexOf(t)>-1&&(e=0);const s=Hc.createAndSchedule(this,t,e,i,(r=>this.hc(r)));return this.tc.push(s),s}uc(){this.nc&&K(47125,{Pc:Cd(this.nc)})}verifyOperationInProgress(){}async Tc(){let t;do t=this.ac,await t;while(t!==this.ac)}Ic(t){for(const e of this.tc)if(e.timerId===t)return!0;return!1}Ec(t){return this.Tc().then((()=>{this.tc.sort(((e,i)=>e.targetTimeMs-i.targetTimeMs));for(const e of this.tc)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Tc()}))}Rc(t){this.oc.push(t)}hc(t){const e=this.tc.indexOf(t);this.tc.splice(e,1)}}function Cd(n){let t=n.message||"";return n.stack&&(t=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),t}class Xc extends Yc{constructor(t,e,i,s){super(t,e,i,s),this.type="firestore",this._queue=new Rd,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Rd(t),this._firestoreClient=void 0,await t}}}function XT(n,t){const e=typeof n=="object"?n:yp(),i=typeof n=="string"?n:jo,s=dc(e,"firestore").getImmediate({identifier:i});if(!s._initialized){const r=cy("firestore");r&&YT(s,...r)}return s}function gm(n){if(n._terminated)throw new H(N.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||JT(n),n._firestoreClient}function JT(n){var i,s,r,o;const t=n._freezeSettings(),e=GT(n._databaseId,((i=n._app)==null?void 0:i.options.appId)||"",n._persistenceKey,(s=n._app)==null?void 0:s.options.apiKey,t);n._componentsProvider||(r=t.localCache)!=null&&r._offlineComponentProvider&&((o=t.localCache)!=null&&o._onlineComponentProvider)&&(n._componentsProvider={_offline:t.localCache._offlineComponentProvider,_online:t.localCache._onlineComponentProvider}),n._firestoreClient=new zT(n._authCredentials,n._appCheckCredentials,n._queue,e,n._componentsProvider&&(function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}})(n._componentsProvider))}/**
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
 */class ke{constructor(t){this._byteString=t}static fromBase64String(t){try{return new ke(se.fromBase64String(t))}catch(e){throw new H(N.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new ke(se.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:ke._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(Pr(t,ke._jsonSchema))return ke.fromBase64String(t.bytes)}}ke._jsonSchemaVersion="firestore/bytes/1.0",ke._jsonSchema={type:Wt("string",ke._jsonSchemaVersion),bytes:Wt("string")};/**
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
 */class mm{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new H(N.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ie(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class _m{constructor(t){this._methodName=t}}/**
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
 */class Ge{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new H(N.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new H(N.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return ct(this._lat,t._lat)||ct(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Ge._jsonSchemaVersion}}static fromJSON(t){if(Pr(t,Ge._jsonSchema))return new Ge(t.latitude,t.longitude)}}Ge._jsonSchemaVersion="firestore/geoPoint/1.0",Ge._jsonSchema={type:Wt("string",Ge._jsonSchemaVersion),latitude:Wt("number"),longitude:Wt("number")};/**
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
 */class Ne{constructor(t){this._values=(t||[]).map((e=>e))}toArray(){return this._values.map((t=>t))}isEqual(t){return(function(i,s){if(i.length!==s.length)return!1;for(let r=0;r<i.length;++r)if(i[r]!==s[r])return!1;return!0})(this._values,t._values)}toJSON(){return{type:Ne._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(Pr(t,Ne._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every((e=>typeof e=="number")))return new Ne(t.vectorValues);throw new H(N.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Ne._jsonSchemaVersion="firestore/vectorValue/1.0",Ne._jsonSchema={type:Wt("string",Ne._jsonSchemaVersion),vectorValues:Wt("object")};/**
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
 */const ZT=/^__.*__$/;class tI{constructor(t,e,i){this.data=t,this.fieldMask=e,this.fieldTransforms=i}toMutation(t,e){return this.fieldMask!==null?new Ri(t,this.data,this.fieldMask,e,this.fieldTransforms):new kr(t,this.data,e,this.fieldTransforms)}}function ym(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw K(40011,{dataSource:n})}}class Jc{constructor(t,e,i,s,r,o){this.settings=t,this.databaseId=e,this.serializer=i,this.ignoreUndefinedProperties=s,r===void 0&&this.validatePath(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(t){return new Jc({...this.settings,...t},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(t){var s;const e=(s=this.path)==null?void 0:s.child(t),i=this.contextWith({path:e,arrayElement:!1});return i.validatePathSegment(t),i}childContextForFieldPath(t){var s;const e=(s=this.path)==null?void 0:s.child(t),i=this.contextWith({path:e,arrayElement:!1});return i.validatePath(),i}childContextForArray(t){return this.contextWith({path:void 0,arrayElement:!0})}createError(t){return Zo(t,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(t){return this.fieldMask.find((e=>t.isPrefixOf(e)))!==void 0||this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))!==void 0}validatePath(){if(this.path)for(let t=0;t<this.path.length;t++)this.validatePathSegment(this.path.get(t))}validatePathSegment(t){if(t.length===0)throw this.createError("Document fields must not be empty");if(ym(this.dataSource)&&ZT.test(t))throw this.createError('Document fields cannot begin and end with "__"')}}class eI{constructor(t,e,i){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=i||Sa(t)}createContext(t,e,i,s=!1){return new Jc({dataSource:t,methodName:e,targetDoc:i,path:ie.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function nI(n){const t=n._freezeSettings(),e=Sa(n._databaseId);return new eI(n._databaseId,!!t.ignoreUndefinedProperties,e)}function iI(n,t,e,i,s,r={}){const o=n.createContext(r.merge||r.mergeFields?2:0,t,e,s);wm("Data must be an object, but it was:",o,i);const a=vm(i,o);let l,u;if(r.merge)l=new Le(o.fieldMask),u=o.fieldTransforms;else if(r.mergeFields){const h=[];for(const d of r.mergeFields){const p=Zc(t,d,e);if(!o.contains(p))throw new H(N.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);oI(h,p)||h.push(p)}l=new Le(h),u=o.fieldTransforms.filter((d=>l.covers(d.field)))}else l=null,u=o.fieldTransforms;return new tI(new Pe(a),l,u)}function bm(n,t){if(Em(n=Re(n)))return wm("Unsupported field value:",t,n),vm(n,t);if(n instanceof _m)return(function(i,s){if(!ym(s.dataSource))throw s.createError(`${i._methodName}() can only be used with update() and set()`);if(!s.path)throw s.createError(`${i._methodName}() is not currently supported inside arrays`);const r=i._toFieldTransform(s);r&&s.fieldTransforms.push(r)})(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.arrayElement&&t.dataSource!==4)throw t.createError("Nested arrays are not supported");return(function(i,s){const r=[];let o=0;for(const a of i){let l=bm(a,s.childContextForArray(o));l==null&&(l={nullValue:"NULL_VALUE"}),r.push(l),o++}return{arrayValue:{values:r}}})(n,t)}return(function(i,s){if((i=Re(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return VE(s.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const r=Ct.fromDate(i);return{timestampValue:Yo(s.serializer,r)}}if(i instanceof Ct){const r=new Ct(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:Yo(s.serializer,r)}}if(i instanceof Ge)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof ke)return{bytesValue:Fg(s.serializer,i._byteString)};if(i instanceof te){const r=s.databaseId,o=i.firestore._databaseId;if(!o.isEqual(r))throw s.createError(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:Lc(i.firestore._databaseId||s.databaseId,i._key.path)}}if(i instanceof Ne)return(function(o,a){const l=o instanceof Ne?o.toArray():o;return{mapValue:{fields:{[fg]:{stringValue:pg},[Ho]:{arrayValue:{values:l.map((h=>{if(typeof h!="number")throw a.createError("VectorValues must only contain numeric values.");return Dc(a.serializer,h)}))}}}}}})(i,s);if(Wg(i))return i._toProto(s.serializer);throw s.createError(`Unsupported field value: ${Sc(i)}`)})(n,t)}function vm(n,t){const e={};return ag(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Pi(n,((i,s)=>{const r=bm(s,t.childContextForField(i));r!=null&&(e[i]=r)})),{mapValue:{fields:e}}}function Em(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Ct||n instanceof Ge||n instanceof ke||n instanceof te||n instanceof _m||n instanceof Ne||Wg(n))}function wm(n,t,e){if(!Em(e)||!rg(e)){const i=Sc(e);throw i==="an object"?t.createError(n+" a custom object"):t.createError(n+" "+i)}}function Zc(n,t,e){if((t=Re(t))instanceof mm)return t._internalPath;if(typeof t=="string")return rI(n,t);throw Zo("Field path arguments must be of type string or ",n,!1,void 0,e)}const sI=new RegExp("[~\\*/\\[\\]]");function rI(n,t,e){if(t.search(sI)>=0)throw Zo(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new mm(...t.split("."))._internalPath}catch{throw Zo(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function Zo(n,t,e,i,s){const r=i&&!i.isEmpty(),o=s!==void 0;let a=`Function ${t}() called with invalid data`;e&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(r||o)&&(l+=" (found",r&&(l+=` in field ${i}`),o&&(l+=` in document ${s}`),l+=")"),new H(N.INVALID_ARGUMENT,a+n+l)}function oI(n,t){return n.some((e=>e.isEqual(t)))}/**
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
 */class aI{convertValue(t,e="none"){switch(Qn(t)){case 0:return null;case 1:return t.booleanValue;case 2:return zt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Yn(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw K(62114,{value:t})}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const i={};return Pi(t,((s,r)=>{i[s]=this.convertValue(r,e)})),i}convertVectorValue(t){var i,s,r;const e=(r=(s=(i=t.fields)==null?void 0:i[Ho].arrayValue)==null?void 0:s.values)==null?void 0:r.map((o=>zt(o.doubleValue)));return new Ne(e)}convertGeoPoint(t){return new Ge(zt(t.latitude),zt(t.longitude))}convertArray(t,e){return(t.values||[]).map((i=>this.convertValue(i,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const i=ya(t);return i==null?null:this.convertValue(i,e);case"estimate":return this.convertTimestamp(ur(t));default:return null}}convertTimestamp(t){const e=Gn(t);return new Ct(e.seconds,e.nanos)}convertDocumentKey(t,e){const i=Mt.fromString(t);vt(Hg(i),9688,{name:t});const s=new hr(i.get(1),i.get(3)),r=new W(i.popFirst(5));return s.isEqual(e)||yn(`Document ${r} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),r}}/**
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
 */class lI extends aI{constructor(t){super(),this.firestore=t}convertBytes(t){return new ke(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new te(this.firestore,null,e)}}const Dd="@firebase/firestore",Md="4.11.0";/**
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
 */class Tm{constructor(t,e,i,s,r){this._firestore=t,this._userDataWriter=e,this._key=i,this._document=s,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new te(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new cI(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var t;return((t=this._document)==null?void 0:t.data.clone().value.mapValue.fields)??void 0}get(t){if(this._document){const e=this._document.data.field(Zc("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class cI extends Tm{data(){return super.data()}}function uI(n,t,e){let i;return i=n?e&&(e.merge||e.mergeFields)?n.toFirestore(t,e):n.toFirestore(t):t,i}class Bs{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class gi extends Tm{constructor(t,e,i,s,r,o){super(t,e,i,s,o),this._firestore=t,this._firestoreImpl=t,this.metadata=r}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new So(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const i=this._document.data.field(Zc("DocumentSnapshot.get",t));if(i!==null)return this._userDataWriter.convertValue(i,e.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new H(N.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,e={};return e.type=gi._jsonSchemaVersion,e.bundle="",e.bundleSource="DocumentSnapshot",e.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?e:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),e.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),e)}}gi._jsonSchemaVersion="firestore/documentSnapshot/1.0",gi._jsonSchema={type:Wt("string",gi._jsonSchemaVersion),bundleSource:Wt("string","DocumentSnapshot"),bundleName:Wt("string"),bundle:Wt("string")};class So extends gi{data(t={}){return super.data(t)}}class tr{constructor(t,e,i,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new Bs(s.hasPendingWrites,s.fromCache),this.query=i}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach((i=>{t.call(e,new So(this._firestore,this._userDataWriter,i.key,i,new Bs(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new H(N.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=(function(s,r){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map((a=>{const l=new So(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Bs(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}}))}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((a=>r||a.type!==3)).map((a=>{const l=new So(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Bs(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,h=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:hI(a.type),doc:l,oldIndex:u,newIndex:h}}))}})(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new H(N.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=tr._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=Ic.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const e=[],i=[],s=[];return this.docs.forEach((r=>{r._document!==null&&(e.push(r._document),i.push(this._userDataWriter.convertObjectMap(r._document.data.value.mapValue.fields,"previous")),s.push(r.ref.path))})),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function hI(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return K(61501,{type:n})}}/**
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
 */tr._jsonSchemaVersion="firestore/querySnapshot/1.0",tr._jsonSchema={type:Wt("string",tr._jsonSchemaVersion),bundleSource:Wt("string","QuerySnapshot"),bundleName:Wt("string"),bundle:Wt("string")};/**
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
 */function dI(n){n=lr(n,te);const t=lr(n.firestore,Xc),e=gm(t);return WT(e,n._key).then((i=>gI(t,n,i)))}function fI(n,t,e){n=lr(n,te);const i=lr(n.firestore,Xc),s=uI(n.converter,t,e),r=nI(i);return pI(i,[iI(r,"setDoc",n._key,s,n.converter!==null,e).toMutation(n._key,gn.none())])}function pI(n,t){const e=gm(n);return qT(e,t)}function gI(n,t,e){const i=e.docs.get(t._key),s=new lI(n);return new gi(n,s,t._key,i,new Bs(e.hasPendingWrites,e.fromCache),t.converter)}(function(t,e=!0){z0(hs),ts(new vi("firestore",((i,{instanceIdentifier:s,options:r})=>{const o=i.getProvider("app").getImmediate(),a=new Xc(new H0(i.getProvider("auth-internal")),new K0(o,i.getProvider("app-check-internal")),hE(o,s),o);return r={useFetchStreams:e,...r},a._setSettings(r),a}),"PUBLIC").setMultipleInstances(!0)),Bn(Dd,Md,t),Bn(Dd,Md,"esm2020")})();const mI={apiKey:"AIzaSyAJMG0ma7PWBytkea1Vj2cwmdSJm42GFkE",authDomain:"cryptojournal-b7438.firebaseapp.com",projectId:"cryptojournal-b7438",storageBucket:"cryptojournal-b7438.firebasestorage.app",messagingSenderId:"413410672987",appId:"1:413410672987:web:b60d93c2d083aab6469a7e"},Im=_p(mI),tu=$0(Im),_I=XT(Im),yI=new un;function bI(){return Gv(tu,yI)}function vI(){return Pv(tu)}function EI(n){return Av(tu,n)}function Sm(n){return QT(_I,"users",n)}async function wI(n,t){await fI(Sm(n),t,{merge:!0})}async function TI(n){const t=await dI(Sm(n));return t.exists()?t.data():null}const xm="cj_trades",Am="cj_strategies",Pm="cj_tags",II="CryptoJournalDB",SI=1,Ze="images";let mi=null;function Od(n){mi=n}function xI(){return mi}function Pa(n){localStorage.setItem(xm,JSON.stringify(n))}function ka(){try{const n=localStorage.getItem(xm);return n?JSON.parse(n):[]}catch{return[]}}function km(n){localStorage.setItem(Am,JSON.stringify(n))}function Mr(){try{const n=localStorage.getItem(Am);return n?JSON.parse(n):["Breakout","Mean Reversion","Trend Following","Scalp","News/Event","Range Trading","Momentum","DCA"]}catch{return["Breakout","Mean Reversion","Trend Following","Scalp"]}}function Rm(n){localStorage.setItem(Pm,JSON.stringify(n))}function eu(){try{const n=localStorage.getItem(Pm);return n?JSON.parse(n):["Plan followed","FOMO","Overtrading","Revenge trade","Good execution","Stop moved","Profit taken too early"]}catch{return[]}}async function nu(){if(!mi)return;const n=ka(),t=Mr(),e=eu();console.log(`[SYNC] Uploading to cloud: ${n.length} trades, ${t.length} strategies, ${e.length} tags`),await wI(mi,{trades:n,strategies:t,tags:e,lastSync:new Date().toISOString()}),console.log("[SYNC] Upload complete")}async function AI(){if(!mi)return console.log("[SYNC] No user, skipping download"),!1;console.log("[SYNC] Downloading from cloud for uid:",mi);const n=await TI(mi);return n?(console.log(`[SYNC] Cloud data found: ${(n.trades||[]).length} trades, lastSync: ${n.lastSync}`),n.trades&&Pa(n.trades),n.strategies&&km(n.strategies),n.tags&&Rm(n.tags),!0):(console.log("[SYNC] No cloud data found"),!1)}let to=null;function Ra(){return new Promise((n,t)=>{if(to)return n(to);const e=indexedDB.open(II,SI);e.onerror=()=>t(e.error),e.onsuccess=()=>{to=e.result,n(to)},e.onupgradeneeded=i=>{const s=i.target.result;s.objectStoreNames.contains(Ze)||s.createObjectStore(Ze,{keyPath:"id"})}})}async function ta(n,t){const e=await Ra();return new Promise((i,s)=>{const r=e.transaction(Ze,"readwrite");r.objectStore(Ze).put({id:n,dataUrl:t}),r.oncomplete=()=>i(),r.onerror=()=>s(r.error)})}async function Jl(n){const t=await Ra();return new Promise((e,i)=>{const r=t.transaction(Ze,"readonly").objectStore(Ze).get(n);r.onsuccess=()=>{var o;return e(((o=r.result)==null?void 0:o.dataUrl)||null)},r.onerror=()=>i(r.error)})}async function PI(n){const t=await Ra();return new Promise((e,i)=>{const s=t.transaction(Ze,"readwrite");s.objectStore(Ze).delete(n),s.oncomplete=()=>e(),s.onerror=()=>i(s.error)})}async function kI(){const n=await Ra();return new Promise((t,e)=>{const s=n.transaction(Ze,"readonly").objectStore(Ze).getAll();s.onsuccess=()=>t(s.result||[]),s.onerror=()=>e(s.error)})}async function RI(){const n=ka(),t=Mr(),e=eu(),i=await kI();return{trades:n,strategies:t,tags:e,images:i,exportDate:new Date().toISOString()}}async function CI(n){if(n.trades&&Pa(n.trades),n.strategies&&km(n.strategies),n.tags&&Rm(n.tags),n.images)for(const t of n.images)await ta(t.id,t.dataUrl);await nu()}function DI(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var xo={exports:{}};/* @license
Papa Parse
v5.5.3
https://github.com/mholt/PapaParse
License: MIT
*/var MI=xo.exports,Ld;function OI(){return Ld||(Ld=1,(function(n,t){((e,i)=>{n.exports=i()})(MI,function e(){var i=typeof self<"u"?self:typeof window<"u"?window:i!==void 0?i:{},s,r=!i.document&&!!i.postMessage,o=i.IS_PAPA_WORKER||!1,a={},l=0,u={};function h(g){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},(function(_){var v=M(_);v.chunkSize=parseInt(v.chunkSize),_.step||_.chunk||(v.chunkSize=null),this._handle=new b(v),(this._handle.streamer=this)._config=v}).call(this,g),this.parseChunk=function(_,v){var I=parseInt(this._config.skipFirstNLines)||0;if(this.isFirstChunk&&0<I){let x=this._config.newline;x||(A=this._config.quoteChar||'"',x=this._handle.guessLineEndings(_,A)),_=[..._.split(x).slice(I)].join(x)}this.isFirstChunk&&E(this._config.beforeFirstChunk)&&(A=this._config.beforeFirstChunk(_))!==void 0&&(_=A),this.isFirstChunk=!1,this._halted=!1;var I=this._partialLine+_,A=(this._partialLine="",this._handle.parse(I,this._baseIndex,!this._finished));if(!this._handle.paused()&&!this._handle.aborted()){if(_=A.meta.cursor,I=(this._finished||(this._partialLine=I.substring(_-this._baseIndex),this._baseIndex=_),A&&A.data&&(this._rowCount+=A.data.length),this._finished||this._config.preview&&this._rowCount>=this._config.preview),o)i.postMessage({results:A,workerId:u.WORKER_ID,finished:I});else if(E(this._config.chunk)&&!v){if(this._config.chunk(A,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);this._completeResults=A=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(A.data),this._completeResults.errors=this._completeResults.errors.concat(A.errors),this._completeResults.meta=A.meta),this._completed||!I||!E(this._config.complete)||A&&A.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),I||A&&A.meta.paused||this._nextChunk(),A}this._halted=!0},this._sendError=function(_){E(this._config.error)?this._config.error(_):o&&this._config.error&&i.postMessage({workerId:u.WORKER_ID,error:_,finished:!1})}}function d(g){var _;(g=g||{}).chunkSize||(g.chunkSize=u.RemoteChunkSize),h.call(this,g),this._nextChunk=r?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(v){this._input=v,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(_=new XMLHttpRequest,this._config.withCredentials&&(_.withCredentials=this._config.withCredentials),r||(_.onload=L(this._chunkLoaded,this),_.onerror=L(this._chunkError,this)),_.open(this._config.downloadRequestBody?"POST":"GET",this._input,!r),this._config.downloadRequestHeaders){var v,I=this._config.downloadRequestHeaders;for(v in I)_.setRequestHeader(v,I[v])}var A;this._config.chunkSize&&(A=this._start+this._config.chunkSize-1,_.setRequestHeader("Range","bytes="+this._start+"-"+A));try{_.send(this._config.downloadRequestBody)}catch(x){this._chunkError(x.message)}r&&_.status===0&&this._chunkError()}},this._chunkLoaded=function(){_.readyState===4&&(_.status<200||400<=_.status?this._chunkError():(this._start+=this._config.chunkSize||_.responseText.length,this._finished=!this._config.chunkSize||this._start>=(v=>(v=v.getResponseHeader("Content-Range"))!==null?parseInt(v.substring(v.lastIndexOf("/")+1)):-1)(_),this.parseChunk(_.responseText)))},this._chunkError=function(v){v=_.statusText||v,this._sendError(new Error(v))}}function p(g){(g=g||{}).chunkSize||(g.chunkSize=u.LocalChunkSize),h.call(this,g);var _,v,I=typeof FileReader<"u";this.stream=function(A){this._input=A,v=A.slice||A.webkitSlice||A.mozSlice,I?((_=new FileReader).onload=L(this._chunkLoaded,this),_.onerror=L(this._chunkError,this)):_=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var A=this._input,x=(this._config.chunkSize&&(x=Math.min(this._start+this._config.chunkSize,this._input.size),A=v.call(A,this._start,x)),_.readAsText(A,this._config.encoding));I||this._chunkLoaded({target:{result:x}})},this._chunkLoaded=function(A){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(A.target.result)},this._chunkError=function(){this._sendError(_.error)}}function y(g){var _;h.call(this,g=g||{}),this.stream=function(v){return _=v,this._nextChunk()},this._nextChunk=function(){var v,I;if(!this._finished)return v=this._config.chunkSize,_=v?(I=_.substring(0,v),_.substring(v)):(I=_,""),this._finished=!_,this.parseChunk(I)}}function S(g){h.call(this,g=g||{});var _=[],v=!0,I=!1;this.pause=function(){h.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){h.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(A){this._input=A,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){I&&_.length===1&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),_.length?this.parseChunk(_.shift()):v=!0},this._streamData=L(function(A){try{_.push(typeof A=="string"?A:A.toString(this._config.encoding)),v&&(v=!1,this._checkIsFinished(),this.parseChunk(_.shift()))}catch(x){this._streamError(x)}},this),this._streamError=L(function(A){this._streamCleanUp(),this._sendError(A)},this),this._streamEnd=L(function(){this._streamCleanUp(),I=!0,this._streamData("")},this),this._streamCleanUp=L(function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)},this)}function b(g){var _,v,I,A,x=Math.pow(2,53),G=-x,q=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,st=/^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,j=this,rt=0,U=0,Pt=!1,Y=!1,X=[],B={data:[],errors:[],meta:{}};function mt(ot){return g.skipEmptyLines==="greedy"?ot.join("").trim()==="":ot.length===1&&ot[0].length===0}function yt(){if(B&&I&&(re("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+u.DefaultDelimiter+"'"),I=!1),g.skipEmptyLines&&(B.data=B.data.filter(function(It){return!mt(It)})),Et()){let It=function(Vt,St){E(g.transformHeader)&&(Vt=g.transformHeader(Vt,St)),X.push(Vt)};var at=It;if(B)if(Array.isArray(B.data[0])){for(var ot=0;Et()&&ot<B.data.length;ot++)B.data[ot].forEach(It);B.data.splice(0,1)}else B.data.forEach(It)}function ft(It,Vt){for(var St=g.header?{}:[],bt=0;bt<It.length;bt++){var tt=bt,jt=It[bt],jt=((gt,et)=>(dt=>(g.dynamicTypingFunction&&g.dynamicTyping[dt]===void 0&&(g.dynamicTyping[dt]=g.dynamicTypingFunction(dt)),(g.dynamicTyping[dt]||g.dynamicTyping)===!0))(gt)?et==="true"||et==="TRUE"||et!=="false"&&et!=="FALSE"&&((dt=>{if(q.test(dt)&&(dt=parseFloat(dt),G<dt&&dt<x))return 1})(et)?parseFloat(et):st.test(et)?new Date(et):et===""?null:et):et)(tt=g.header?bt>=X.length?"__parsed_extra":X[bt]:tt,jt=g.transform?g.transform(jt,tt):jt);tt==="__parsed_extra"?(St[tt]=St[tt]||[],St[tt].push(jt)):St[tt]=jt}return g.header&&(bt>X.length?re("FieldMismatch","TooManyFields","Too many fields: expected "+X.length+" fields but parsed "+bt,U+Vt):bt<X.length&&re("FieldMismatch","TooFewFields","Too few fields: expected "+X.length+" fields but parsed "+bt,U+Vt)),St}var Dt;B&&(g.header||g.dynamicTyping||g.transform)&&(Dt=1,!B.data.length||Array.isArray(B.data[0])?(B.data=B.data.map(ft),Dt=B.data.length):B.data=ft(B.data,0),g.header&&B.meta&&(B.meta.fields=X),U+=Dt)}function Et(){return g.header&&X.length===0}function re(ot,ft,Dt,at){ot={type:ot,code:ft,message:Dt},at!==void 0&&(ot.row=at),B.errors.push(ot)}E(g.step)&&(A=g.step,g.step=function(ot){B=ot,Et()?yt():(yt(),B.data.length!==0&&(rt+=ot.data.length,g.preview&&rt>g.preview?v.abort():(B.data=B.data[0],A(B,j))))}),this.parse=function(ot,ft,Dt){var at=g.quoteChar||'"',at=(g.newline||(g.newline=this.guessLineEndings(ot,at)),I=!1,g.delimiter?E(g.delimiter)&&(g.delimiter=g.delimiter(ot),B.meta.delimiter=g.delimiter):((at=((It,Vt,St,bt,tt)=>{var jt,gt,et,dt;tt=tt||[",","	","|",";",u.RECORD_SEP,u.UNIT_SEP];for(var Ce=0;Ce<tt.length;Ce++){for(var Se,wn=tt[Ce],Xt=0,oe=0,Ut=0,ee=(et=void 0,new P({comments:bt,delimiter:wn,newline:Vt,preview:10}).parse(It)),be=0;be<ee.data.length;be++)St&&mt(ee.data[be])?Ut++:(Se=ee.data[be].length,oe+=Se,et===void 0?et=Se:0<Se&&(Xt+=Math.abs(Se-et),et=Se));0<ee.data.length&&(oe/=ee.data.length-Ut),(gt===void 0||Xt<=gt)&&(dt===void 0||dt<oe)&&1.99<oe&&(gt=Xt,jt=wn,dt=oe)}return{successful:!!(g.delimiter=jt),bestDelimiter:jt}})(ot,g.newline,g.skipEmptyLines,g.comments,g.delimitersToGuess)).successful?g.delimiter=at.bestDelimiter:(I=!0,g.delimiter=u.DefaultDelimiter),B.meta.delimiter=g.delimiter),M(g));return g.preview&&g.header&&at.preview++,_=ot,v=new P(at),B=v.parse(_,ft,Dt),yt(),Pt?{meta:{paused:!0}}:B||{meta:{paused:!1}}},this.paused=function(){return Pt},this.pause=function(){Pt=!0,v.abort(),_=E(g.chunk)?"":_.substring(v.getCharIndex())},this.resume=function(){j.streamer._halted?(Pt=!1,j.streamer.parseChunk(_,!0)):setTimeout(j.resume,3)},this.aborted=function(){return Y},this.abort=function(){Y=!0,v.abort(),B.meta.aborted=!0,E(g.complete)&&g.complete(B),_=""},this.guessLineEndings=function(It,at){It=It.substring(0,1048576);var at=new RegExp(T(at)+"([^]*?)"+T(at),"gm"),Dt=(It=It.replace(at,"")).split("\r"),at=It.split(`
`),It=1<at.length&&at[0].length<Dt[0].length;if(Dt.length===1||It)return`
`;for(var Vt=0,St=0;St<Dt.length;St++)Dt[St][0]===`
`&&Vt++;return Vt>=Dt.length/2?`\r
`:"\r"}}function T(g){return g.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function P(g){var _=(g=g||{}).delimiter,v=g.newline,I=g.comments,A=g.step,x=g.preview,G=g.fastMode,q=null,st=!1,j=g.quoteChar==null?'"':g.quoteChar,rt=j;if(g.escapeChar!==void 0&&(rt=g.escapeChar),(typeof _!="string"||-1<u.BAD_DELIMITERS.indexOf(_))&&(_=","),I===_)throw new Error("Comment character same as delimiter");I===!0?I="#":(typeof I!="string"||-1<u.BAD_DELIMITERS.indexOf(I))&&(I=!1),v!==`
`&&v!=="\r"&&v!==`\r
`&&(v=`
`);var U=0,Pt=!1;this.parse=function(Y,X,B){if(typeof Y!="string")throw new Error("Input must be a string");var mt=Y.length,yt=_.length,Et=v.length,re=I.length,ot=E(A),ft=[],Dt=[],at=[],It=U=0;if(!Y)return Xt();if(G||G!==!1&&Y.indexOf(j)===-1){for(var Vt=Y.split(v),St=0;St<Vt.length;St++){if(at=Vt[St],U+=at.length,St!==Vt.length-1)U+=v.length;else if(B)return Xt();if(!I||at.substring(0,re)!==I){if(ot){if(ft=[],dt(at.split(_)),oe(),Pt)return Xt()}else dt(at.split(_));if(x&&x<=St)return ft=ft.slice(0,x),Xt(!0)}}return Xt()}for(var bt=Y.indexOf(_,U),tt=Y.indexOf(v,U),jt=new RegExp(T(rt)+T(j),"g"),gt=Y.indexOf(j,U);;)if(Y[U]===j)for(gt=U,U++;;){if((gt=Y.indexOf(j,gt+1))===-1)return B||Dt.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:ft.length,index:U}),Se();if(gt===mt-1)return Se(Y.substring(U,gt).replace(jt,j));if(j===rt&&Y[gt+1]===rt)gt++;else if(j===rt||gt===0||Y[gt-1]!==rt){bt!==-1&&bt<gt+1&&(bt=Y.indexOf(_,gt+1));var et=Ce((tt=tt!==-1&&tt<gt+1?Y.indexOf(v,gt+1):tt)===-1?bt:Math.min(bt,tt));if(Y.substr(gt+1+et,yt)===_){at.push(Y.substring(U,gt).replace(jt,j)),Y[U=gt+1+et+yt]!==j&&(gt=Y.indexOf(j,U)),bt=Y.indexOf(_,U),tt=Y.indexOf(v,U);break}if(et=Ce(tt),Y.substring(gt+1+et,gt+1+et+Et)===v){if(at.push(Y.substring(U,gt).replace(jt,j)),wn(gt+1+et+Et),bt=Y.indexOf(_,U),gt=Y.indexOf(j,U),ot&&(oe(),Pt))return Xt();if(x&&ft.length>=x)return Xt(!0);break}Dt.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:ft.length,index:U}),gt++}}else if(I&&at.length===0&&Y.substring(U,U+re)===I){if(tt===-1)return Xt();U=tt+Et,tt=Y.indexOf(v,U),bt=Y.indexOf(_,U)}else if(bt!==-1&&(bt<tt||tt===-1))at.push(Y.substring(U,bt)),U=bt+yt,bt=Y.indexOf(_,U);else{if(tt===-1)break;if(at.push(Y.substring(U,tt)),wn(tt+Et),ot&&(oe(),Pt))return Xt();if(x&&ft.length>=x)return Xt(!0)}return Se();function dt(Ut){ft.push(Ut),It=U}function Ce(Ut){var ee=0;return ee=Ut!==-1&&(Ut=Y.substring(gt+1,Ut))&&Ut.trim()===""?Ut.length:ee}function Se(Ut){return B||(Ut===void 0&&(Ut=Y.substring(U)),at.push(Ut),U=mt,dt(at),ot&&oe()),Xt()}function wn(Ut){U=Ut,dt(at),at=[],tt=Y.indexOf(v,U)}function Xt(Ut){if(g.header&&!X&&ft.length&&!st){var ee=ft[0],be=Object.create(null),ys=new Set(ee);let Vr=!1;for(let en=0;en<ee.length;en++){let ve=ee[en];if(be[ve=E(g.transformHeader)?g.transformHeader(ve,en):ve]){let De,Mi=be[ve];for(;De=ve+"_"+Mi,Mi++,ys.has(De););ys.add(De),ee[en]=De,be[ve]++,Vr=!0,(q=q===null?{}:q)[De]=ve}else be[ve]=1,ee[en]=ve;ys.add(ve)}Vr&&console.warn("Duplicate headers found and renamed."),st=!0}return{data:ft,errors:Dt,meta:{delimiter:_,linebreak:v,aborted:Pt,truncated:!!Ut,cursor:It+(X||0),renamedHeaders:q}}}function oe(){A(Xt()),ft=[],Dt=[]}},this.abort=function(){Pt=!0},this.getCharIndex=function(){return U}}function k(g){var _=g.data,v=a[_.workerId],I=!1;if(_.error)v.userError(_.error,_.file);else if(_.results&&_.results.data){var A={abort:function(){I=!0,C(_.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:R,resume:R};if(E(v.userStep)){for(var x=0;x<_.results.data.length&&(v.userStep({data:_.results.data[x],errors:_.results.errors,meta:_.results.meta},A),!I);x++);delete _.results}else E(v.userChunk)&&(v.userChunk(_.results,A,_.file),delete _.results)}_.finished&&!I&&C(_.workerId,_.results)}function C(g,_){var v=a[g];E(v.userComplete)&&v.userComplete(_),v.terminate(),delete a[g]}function R(){throw new Error("Not implemented.")}function M(g){if(typeof g!="object"||g===null)return g;var _,v=Array.isArray(g)?[]:{};for(_ in g)v[_]=M(g[_]);return v}function L(g,_){return function(){g.apply(_,arguments)}}function E(g){return typeof g=="function"}return u.parse=function(g,_){var v=(_=_||{}).dynamicTyping||!1;if(E(v)&&(_.dynamicTypingFunction=v,v={}),_.dynamicTyping=v,_.transform=!!E(_.transform)&&_.transform,!_.worker||!u.WORKERS_SUPPORTED)return v=null,u.NODE_STREAM_INPUT,typeof g=="string"?(g=(I=>I.charCodeAt(0)!==65279?I:I.slice(1))(g),v=new(_.download?d:y)(_)):g.readable===!0&&E(g.read)&&E(g.on)?v=new S(_):(i.File&&g instanceof File||g instanceof Object)&&(v=new p(_)),v.stream(g);(v=(()=>{var I;return!!u.WORKERS_SUPPORTED&&(I=(()=>{var A=i.URL||i.webkitURL||null,x=e.toString();return u.BLOB_URL||(u.BLOB_URL=A.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ","(",x,")();"],{type:"text/javascript"})))})(),(I=new i.Worker(I)).onmessage=k,I.id=l++,a[I.id]=I)})()).userStep=_.step,v.userChunk=_.chunk,v.userComplete=_.complete,v.userError=_.error,_.step=E(_.step),_.chunk=E(_.chunk),_.complete=E(_.complete),_.error=E(_.error),delete _.worker,v.postMessage({input:g,config:_,workerId:v.id})},u.unparse=function(g,_){var v=!1,I=!0,A=",",x=`\r
`,G='"',q=G+G,st=!1,j=null,rt=!1,U=((()=>{if(typeof _=="object"){if(typeof _.delimiter!="string"||u.BAD_DELIMITERS.filter(function(X){return _.delimiter.indexOf(X)!==-1}).length||(A=_.delimiter),typeof _.quotes!="boolean"&&typeof _.quotes!="function"&&!Array.isArray(_.quotes)||(v=_.quotes),typeof _.skipEmptyLines!="boolean"&&typeof _.skipEmptyLines!="string"||(st=_.skipEmptyLines),typeof _.newline=="string"&&(x=_.newline),typeof _.quoteChar=="string"&&(G=_.quoteChar),typeof _.header=="boolean"&&(I=_.header),Array.isArray(_.columns)){if(_.columns.length===0)throw new Error("Option columns is empty");j=_.columns}_.escapeChar!==void 0&&(q=_.escapeChar+G),_.escapeFormulae instanceof RegExp?rt=_.escapeFormulae:typeof _.escapeFormulae=="boolean"&&_.escapeFormulae&&(rt=/^[=+\-@\t\r].*$/)}})(),new RegExp(T(G),"g"));if(typeof g=="string"&&(g=JSON.parse(g)),Array.isArray(g)){if(!g.length||Array.isArray(g[0]))return Pt(null,g,st);if(typeof g[0]=="object")return Pt(j||Object.keys(g[0]),g,st)}else if(typeof g=="object")return typeof g.data=="string"&&(g.data=JSON.parse(g.data)),Array.isArray(g.data)&&(g.fields||(g.fields=g.meta&&g.meta.fields||j),g.fields||(g.fields=Array.isArray(g.data[0])?g.fields:typeof g.data[0]=="object"?Object.keys(g.data[0]):[]),Array.isArray(g.data[0])||typeof g.data[0]=="object"||(g.data=[g.data])),Pt(g.fields||[],g.data||[],st);throw new Error("Unable to serialize unrecognized input");function Pt(X,B,mt){var yt="",Et=(typeof X=="string"&&(X=JSON.parse(X)),typeof B=="string"&&(B=JSON.parse(B)),Array.isArray(X)&&0<X.length),re=!Array.isArray(B[0]);if(Et&&I){for(var ot=0;ot<X.length;ot++)0<ot&&(yt+=A),yt+=Y(X[ot],ot);0<B.length&&(yt+=x)}for(var ft=0;ft<B.length;ft++){var Dt=(Et?X:B[ft]).length,at=!1,It=Et?Object.keys(B[ft]).length===0:B[ft].length===0;if(mt&&!Et&&(at=mt==="greedy"?B[ft].join("").trim()==="":B[ft].length===1&&B[ft][0].length===0),mt==="greedy"&&Et){for(var Vt=[],St=0;St<Dt;St++){var bt=re?X[St]:St;Vt.push(B[ft][bt])}at=Vt.join("").trim()===""}if(!at){for(var tt=0;tt<Dt;tt++){0<tt&&!It&&(yt+=A);var jt=Et&&re?X[tt]:tt;yt+=Y(B[ft][jt],tt)}ft<B.length-1&&(!mt||0<Dt&&!It)&&(yt+=x)}}return yt}function Y(X,B){var mt,yt;return X==null?"":X.constructor===Date?JSON.stringify(X).slice(1,25):(yt=!1,rt&&typeof X=="string"&&rt.test(X)&&(X="'"+X,yt=!0),mt=X.toString().replace(U,q),(yt=yt||v===!0||typeof v=="function"&&v(X,B)||Array.isArray(v)&&v[B]||((Et,re)=>{for(var ot=0;ot<re.length;ot++)if(-1<Et.indexOf(re[ot]))return!0;return!1})(mt,u.BAD_DELIMITERS)||-1<mt.indexOf(A)||mt.charAt(0)===" "||mt.charAt(mt.length-1)===" ")?G+mt+G:mt)}},u.RECORD_SEP="",u.UNIT_SEP="",u.BYTE_ORDER_MARK="\uFEFF",u.BAD_DELIMITERS=["\r",`
`,'"',u.BYTE_ORDER_MARK],u.WORKERS_SUPPORTED=!r&&!!i.Worker,u.NODE_STREAM_INPUT=1,u.LocalChunkSize=10485760,u.RemoteChunkSize=5242880,u.DefaultDelimiter=",",u.Parser=P,u.ParserHandle=b,u.NetworkStreamer=d,u.FileStreamer=p,u.StringStreamer=y,u.ReadableStreamStreamer=S,i.jQuery&&((s=i.jQuery).fn.parse=function(g){var _=g.config||{},v=[];return this.each(function(x){if(!(s(this).prop("tagName").toUpperCase()==="INPUT"&&s(this).attr("type").toLowerCase()==="file"&&i.FileReader)||!this.files||this.files.length===0)return!0;for(var G=0;G<this.files.length;G++)v.push({file:this.files[G],inputElem:this,instanceConfig:s.extend({},_)})}),I(),this;function I(){if(v.length===0)E(g.complete)&&g.complete();else{var x,G,q,st,j=v[0];if(E(g.before)){var rt=g.before(j.file,j.inputElem);if(typeof rt=="object"){if(rt.action==="abort")return x="AbortError",G=j.file,q=j.inputElem,st=rt.reason,void(E(g.error)&&g.error({name:x},G,q,st));if(rt.action==="skip")return void A();typeof rt.config=="object"&&(j.instanceConfig=s.extend(j.instanceConfig,rt.config))}else if(rt==="skip")return void A()}var U=j.instanceConfig.complete;j.instanceConfig.complete=function(Pt){E(U)&&U(Pt,j.file,j.inputElem),A()},u.parse(j.file,j.instanceConfig)}}function A(){v.splice(0,1),I()}}),o&&(i.onmessage=function(g){g=g.data,u.WORKER_ID===void 0&&g&&(u.WORKER_ID=g.workerId),typeof g.input=="string"?i.postMessage({workerId:u.WORKER_ID,results:u.parse(g.input,g.config),finished:!0}):(i.File&&g.input instanceof File||g.input instanceof Object)&&(g=u.parse(g.input,g.config))&&i.postMessage({workerId:u.WORKER_ID,results:g,finished:!0})}),(d.prototype=Object.create(h.prototype)).constructor=d,(p.prototype=Object.create(h.prototype)).constructor=p,(y.prototype=Object.create(y.prototype)).constructor=y,(S.prototype=Object.create(h.prototype)).constructor=S,u})})(xo)),xo.exports}var LI=OI();const VI=DI(LI);function NI(n){return new Promise((t,e)=>{VI.parse(n,{header:!0,skipEmptyLines:!0,dynamicTyping:!1,complete(i){i.errors.length>0&&console.warn("CSV parse warnings:",i.errors);try{const s=i.data.filter(o=>o.time&&o.coin).map(o=>FI(o)),r=$I(s);t(r)}catch(s){e(s)}},error(i){e(i)}})})}function FI(n){const t=(n.dir||"").trim(),e=/long/i.test(t),i=/short/i.test(t),s=/open/i.test(t),r=/close/i.test(t);return{time:BI(n.time),coin:(n.coin||"").trim().toUpperCase(),direction:e?"Long":i?"Short":t,action:s?"Open":r?"Close":"Unknown",dirRaw:t,price:Te(n.px),size:Te(n.sz),notional:Te(n.ntl),fee:Te(n.fee),closedPnl:Te(n.closedPnl)}}function $I(n){n.sort((i,s)=>i.time.localeCompare(s.time));const t={},e=[];for(const i of n){const s=`${i.coin}_${i.direction}`;if(i.action==="Open")t[s]||(t[s]=[]),t[s].push(i);else if(i.action==="Close")if(t[s]&&t[s].length>0){const r=t[s].shift();e.push(UI(r,i))}else e.push(hl(i,!0));else e.push(hl(i,i.closedPnl!==0))}for(const i of Object.values(t))for(const s of i)e.push(hl(s,!1));return e.sort((i,s)=>s.time.localeCompare(i.time)),e}function UI(n,t){return{id:Cm(n.time,n.coin,n.direction,n.price),time:n.time,exitTime:t.time,coin:n.coin,direction:n.direction,entryPrice:n.price,exitPrice:t.price,size:n.size,notional:n.notional,fee:n.fee+t.fee,closedPnl:t.closedPnl,status:"Completed",risk:0,strategy:"",notes:"",tags:[],images:[],mae:null,mfe:null,source:"csv"}}function hl(n,t){return{id:Cm(n.time,n.coin,n.direction,n.price),time:n.time,exitTime:t?n.time:null,coin:n.coin,direction:n.direction,entryPrice:t?0:n.price,exitPrice:t?n.price:null,size:n.size,notional:n.notional,fee:n.fee,closedPnl:n.closedPnl,status:t?"Completed":"Active",risk:0,strategy:"",notes:"",tags:[],images:[],mae:null,mfe:null,source:"csv"}}function On(n){if(!n||n.length===0)return{entryPrice:0,exitPrice:null,size:0,remainingSize:0,notional:0,fee:0,closedPnl:0,status:"Active"};const t=n.filter(p=>p.type==="entry"),e=n.filter(p=>p.type==="exit"),i=t.reduce((p,y)=>p+y.size,0),s=e.reduce((p,y)=>p+y.size,0),r=Math.max(0,+(i-s).toFixed(8)),o=i>0?t.reduce((p,y)=>p+y.price*y.size,0)/i:0,a=s>0?e.reduce((p,y)=>p+y.price*y.size,0)/s:null,l=n.reduce((p,y)=>p+(y.fee||0),0),u=t.reduce((p,y)=>p+y.price*y.size,0),h=e.reduce((p,y)=>p+(y.pnl||0),0),d=r>0?"Active":s>0?"Completed":"Active";return{entryPrice:o,exitPrice:a,size:i,remainingSize:r,notional:u,fee:l,closedPnl:h,status:d}}function ea(n,t){if(!n)return n;const e=n.filter(r=>r.type==="entry"),i=e.reduce((r,o)=>r+o.size,0),s=i>0?e.reduce((r,o)=>r+o.price*o.size,0)/i:0;return n.map(r=>{if(r.type!=="exit")return r;const o=t==="Long"?(r.price-s)*r.size-(r.fee||0):(s-r.price)*r.size-(r.fee||0);return{...r,pnl:o}})}function zI(n){const t=Te(n.entryPrice),e=n.exitPrice!=null&&n.exitPrice!==""&&Te(n.exitPrice)!==0?Te(n.exitPrice):null,i=Te(n.size),s=Te(n.fee),r=n.direction||"Long",o={strategy:n.strategy||"",risk:n.risk||0,notes:n.notes||"",tags:n.tags||[],images:n.images||[],mae:n.mae!=null?Te(n.mae):null,mfe:n.mfe!=null?Te(n.mfe):null},a=[];t>0&&i>0&&a.push({type:"entry",time:n.time||new Date().toISOString(),price:t,size:i,fee:e?0:s,...o}),e&&i>0&&a.push({type:"exit",time:n.exitTime||n.time||new Date().toISOString(),price:e,size:i,fee:s,pnl:r==="Long"?(e-t)*i-s:(t-e)*i-s,...o});const l=On(a);return{id:"manual_"+Date.now()+"_"+Math.random().toString(36).slice(2,8),time:n.time||new Date().toISOString(),exitTime:e?n.exitTime||n.time||new Date().toISOString():null,coin:(n.coin||"").toUpperCase(),direction:r,legs:a,...l,closedPnl:Te(n.closedPnl)||l.closedPnl,risk:0,strategy:"",notes:"",tags:[],images:[],mae:null,mfe:null,source:"manual"}}function Cm(n,t,e,i){const s=`${n}_${t}_${e}_${i}`;let r=0;for(let o=0;o<s.length;o++){const a=s.charCodeAt(o);r=(r<<5)-r+a,r=r&r}return"hl_"+Math.abs(r).toString(36)}function BI(n){if(!n)return new Date().toISOString();const t=new Date(n.trim());return isNaN(t.getTime())?new Date().toISOString():t.toISOString()}function Te(n){if(n==null||n==="")return 0;const t=parseFloat(String(n).replace(/,/g,""));return isNaN(t)?0:t}function jI(n,t){const e=new Set(n.map(s=>s.id)),i=t.filter(s=>!e.has(s.id));return[...n,...i]}function HI(n){return n.map(t=>{if(t.entryPrice===void 0&&t.price!==void 0&&(t={...t,entryPrice:t.action==="Open"?t.price:0,exitPrice:t.action==="Close"?t.price:null,exitTime:t.action==="Close"?t.time:null,status:t.action==="Close"||t.closedPnl!==0?"Completed":"Active"}),!t.legs){const e={strategy:t.strategy||"",risk:t.risk||0,notes:t.notes||"",tags:t.tags||[],images:t.images||[]},i=[];t.entryPrice&&t.size&&i.push({type:"entry",time:t.time,price:t.entryPrice,size:t.size,fee:t.exitPrice?0:t.fee||0,...e}),t.exitPrice&&t.size&&i.push({type:"exit",time:t.exitTime||t.time,price:t.exitPrice,size:t.size,fee:t.fee||0,pnl:t.closedPnl||0,...e}),t={...t,legs:i};const s=On(i);t.remainingSize=s.remainingSize,t.status=s.status}return t})}function WI(n){const t={};n.forEach(i=>{const s=`${i.coin}_${i.direction}`;t[s]||(t[s]=[]),t[s].push(i)});const e=[];for(const[i,s]of Object.entries(t)){if(s.length<=1){e.push(s[0]);continue}s.sort((u,h)=>u.time.localeCompare(h.time));const r=s[0],o=[];for(const u of s)if(u.legs&&u.legs.length>0)for(const h of u.legs)o.push({...h,strategy:h.strategy||u.strategy||"",risk:h.risk!=null?h.risk:u.risk||0,notes:h.notes||u.notes||"",tags:h.tags||u.tags||[],images:h.images||u.images||[]});o.sort((u,h)=>(u.time||"").localeCompare(h.time||""));const a=ea(o,r.direction),l=On(a);e.push({...r,legs:a,...l,exitTime:l.status==="Completed"?s.at(-1).exitTime||s.at(-1).time:null,strategy:s.map(u=>u.strategy).filter(Boolean)[0]||"",risk:Math.max(...s.map(u=>u.risk||0)),notes:"",tags:[...new Set(s.flatMap(u=>u.tags||[]))],images:[...new Set(s.flatMap(u=>u.images||[]))],mae:null,mfe:null})}return e}function Dm(n){const t=n.filter(C=>C.closedPnl!==0||C.action==="Close"),e=t.filter(C=>C.closedPnl>0),i=t.filter(C=>C.closedPnl<0),s=t.reduce((C,R)=>C+R.closedPnl,0),r=n.reduce((C,R)=>C+Math.abs(R.fee),0),o=s-r,a=e.length?e.reduce((C,R)=>C+R.closedPnl,0)/e.length:0,l=i.length?Math.abs(i.reduce((C,R)=>C+R.closedPnl,0)/i.length):0,u=e.reduce((C,R)=>C+R.closedPnl,0),h=Math.abs(i.reduce((C,R)=>C+R.closedPnl,0)),d=h>0?u/h:u>0?1/0:0,p=t.length?Math.max(...t.map(C=>C.closedPnl)):0,y=t.length?Math.min(...t.map(C=>C.closedPnl)):0,S=t.length?e.length/t.length*100:0,b=t.filter(C=>C.mae!=null&&C.mae!==0),T=t.filter(C=>C.mfe!=null&&C.mfe!==0),P=b.length?b.reduce((C,R)=>C+R.mae,0)/b.length:null,k=T.length?T.reduce((C,R)=>C+R.mfe,0)/T.length:null;return{totalTrades:n.length,closingTrades:t.length,wins:e.length,losses:i.length,totalPnl:s,totalFees:r,netPnl:o,winRate:S,avgWin:a,avgLoss:l,profitFactor:d,bestTrade:p,worstTrade:y,avgMae:P,avgMfe:k}}function iu(n,t){const e={};n.forEach(s=>{const r=t(s);r&&(e[r]||(e[r]=[]),e[r].push(s))});const i={};for(const[s,r]of Object.entries(e))i[s]=Dm(r);return i}function qI(n){return iu(n,t=>t.coin)}function KI(n){return iu(n,t=>t.strategy||null)}function GI(n){return iu(n,t=>t.risk>0?`Risk ${t.risk}`:null)}function su(n){const t=n.filter(i=>i.closedPnl!==0||i.action==="Close"),e={};return t.forEach(i=>{const s=i.time.slice(0,10);e[s]||(e[s]={date:s,pnl:0,trades:0,fees:0}),e[s].pnl+=i.closedPnl,e[s].trades+=1,e[s].fees+=Math.abs(i.fee)}),Object.values(e).sort((i,s)=>i.date.localeCompare(s.date))}function YI(n){const t=su(n);let e=0;return t.map(i=>(e+=i.pnl,{date:i.date,equity:e}))}function QI(n){const t=n.filter(i=>i.closedPnl!==0||i.action==="Close"),e={};return t.forEach(i=>{e[i.coin]||(e[i.coin]=0),e[i.coin]+=i.closedPnl}),Object.entries(e).map(([i,s])=>({coin:i,pnl:s})).sort((i,s)=>s.pnl-i.pnl)}function XI(n){const t=n.filter(i=>i.strategy&&(i.closedPnl!==0||i.action==="Close")),e={};return t.forEach(i=>{e[i.strategy]||(e[i.strategy]=0),e[i.strategy]+=i.closedPnl}),Object.entries(e).map(([i,s])=>({strategy:i,pnl:s})).sort((i,s)=>s.pnl-i.pnl)}function JI(n){return n.filter(t=>t.mae!=null&&t.mfe!=null&&(t.mae!==0||t.mfe!==0)).map(t=>({mae:t.mae,mfe:t.mfe,pnl:t.closedPnl,coin:t.coin,isWin:t.closedPnl>0}))}function ZI(n){const t=su(n),e={};return t.forEach(i=>{e[i.date]=i}),e}function $t(n){return n==null?"-":(n>0?"+":n<0?"-":"")+"$"+Math.abs(n).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})}function Wi(n){return n==null?"-":n.toFixed(1)+"%"}function tS(n){if(!n)return"-";const t=new Date(n);return t.toLocaleDateString("en-US",{day:"2-digit",month:"2-digit",year:"numeric"})+" "+t.toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit"})}function eS(n,t){const e=Dm(n);t.innerHTML=`
    <div class="page-header">
      <div>
        <h2 class="page-title">Dashboard</h2>
        <p class="page-subtitle">Trading performance overview</p>
      </div>
    </div>

    ${n.length===0?nS():iS(e,n)}
  `}function nS(){return`
    <div class="empty-state">
      <div class="empty-state-icon">📊</div>
      <h3 class="empty-state-title">No trades imported</h3>
      <p class="empty-state-text">Import a CSV from Hyperliquid or add a manual trade to see the dashboard.</p>
    </div>
  `}function iS(n,t){const e=t.filter(s=>s.status==="Active"),i=e.reduce((s,r)=>{const o=r.remainingSize!=null?r.remainingSize:r.size;return s+(r.entryPrice||0)*o},0);return`
    <div class="kpi-grid">
      ${nn("Invested Now","$"+i.toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2}),"neutral",`${e.length} active trades`,"stagger-1")}
      ${nn("Total P&L",$t(n.totalPnl),n.totalPnl>=0?"profit":"loss",`${n.closingTrades} closing trades`,"stagger-2")}
      ${nn("Net P&L",$t(n.netPnl),n.netPnl>=0?"profit":"loss",`Fees: ${$t(-n.totalFees)}`,"stagger-3")}
      ${nn("Win Rate",Wi(n.winRate),n.winRate>=50?"profit":"loss",`${n.wins}W / ${n.losses}L`,"stagger-4")}
      ${nn("Profit Factor",n.profitFactor===1/0?"∞":n.profitFactor.toFixed(2),n.profitFactor>=1?"profit":"loss","","stagger-5")}
      ${nn("Avg Win",$t(n.avgWin),"profit","","stagger-6")}
      ${nn("Avg Loss",$t(-n.avgLoss),"loss","","stagger-7")}
      ${nn("Best Trade",$t(n.bestTrade),"profit","","stagger-8")}
      ${nn("Worst Trade",$t(n.worstTrade),"loss","","")}
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
  `}function nn(n,t,e,i,s){return`
    <div class="kpi-card animate-in ${s}">
      <div class="kpi-label">${n}</div>
      <div class="kpi-value ${e}">${t}</div>
      ${i?`<div class="kpi-sub">${i}</div>`:""}
    </div>
  `}const dl=25;let Ae=1,mr="time",Xi="desc",Ft={coin:"",direction:"",strategy:"",dateFrom:"",dateTo:""};function Ca(n,t,e){const i=Mr(),s=[...new Set(n.map(u=>u.coin))].sort(),r=oS(n),o=aS(r),a=Math.max(1,Math.ceil(o.length/dl));Ae>a&&(Ae=a);const l=o.slice((Ae-1)*dl,Ae*dl);t.innerHTML=`
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
          ${s.map(u=>`<option value="${u}" ${Ft.coin===u?"selected":""}>${u}</option>`).join("")}
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
          ${i.map(u=>`<option value="${u}" ${Ft.strategy===u?"selected":""}>${u}</option>`).join("")}
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
            ${sn("time","Data")}
            ${sn("coin","Coin")}
            ${sn("direction","Dir")}
            ${sn("status","Status")}
            ${sn("entryPrice","Entry")}
            ${sn("exitPrice","Exit")}
            ${sn("size","Size")}
            ${sn("fee","Fee")}
            ${sn("closedPnl","P&L")}
          </tr>
        </thead>
        <tbody>
          ${l.length===0?'<tr><td colspan="9" class="text-center text-muted" style="padding:2rem">No trades found</td></tr>':""}
          ${l.map(u=>sS(u)).join("")}
        </tbody>
      </table>
    </div>

    ${rS(Ae,a,r.length)}
  `,lS(t,n,e),cS(t,n,e),uS(t,n,e),hS(t,n,e),dS(t,l)}function sn(n,t){const e=mr===n;return`<th data-sort="${n}" class="${e?"sorted":""}">${t} <span class="sort-indicator">${e?Xi==="asc"?"↑":"↓":"↕"}</span></th>`}function sS(n){const t=n.closedPnl>0?"cell-profit":n.closedPnl<0?"cell-loss":"",e=n.direction==="Long"?"long":n.direction==="Short"?"short":"",i=n.status==="Active",s=n.entryPrice||0,r=n.exitPrice;return(n.legs||[]).length,`
    <tr data-id="${n.id}" class="${i?"row-active":""} row-clickable">
      <td>${tS(n.time)}</td>
      <td class="cell-coin">${n.coin}</td>
      <td><span class="cell-dir ${e}">${n.direction}</span></td>
      <td>${i?'<span class="status-badge status-active"><span class="status-dot"></span> Active</span>':'<span class="status-badge status-completed">✓ Completed</span>'}</td>
      <td>$${s.toLocaleString("en-US",{minimumFractionDigits:2})}</td>
      <td>${r!=null?"$"+r.toLocaleString("en-US",{minimumFractionDigits:2}):'<span class="text-muted">—</span>'}</td>
      <td>${n.remainingSize!=null&&n.remainingSize!==n.size?`<span style="color:var(--accent-primary)">${n.remainingSize}</span>/${n.size}`:n.size}</td>
      <td class="text-muted">$${Math.abs(n.fee).toFixed(2)}</td>
      <td class="${t}">${i?'<span class="text-muted">—</span>':$t(n.closedPnl)}</td>
    </tr>
  `}function rS(n,t,e){if(t<=1)return"";let i="";for(let s=1;s<=t;s++)s===1||s===t||s>=n-2&&s<=n+2?i+=`<button class="pagination-btn ${s===n?"active":""}" data-page="${s}">${s}</button>`:(s===n-3||s===n+3)&&(i+='<span class="pagination-info">...</span>');return`
    <div class="pagination">
      <button class="pagination-btn" data-page="${n-1}" ${n<=1?"disabled":""}>‹</button>
      ${i}
      <button class="pagination-btn" data-page="${n+1}" ${n>=t?"disabled":""}>›</button>
      <span class="pagination-info">${e} trade-uri</span>
    </div>
  `}function oS(n){return n.filter(t=>!(Ft.coin&&t.coin!==Ft.coin||Ft.direction&&t.direction!==Ft.direction||Ft.strategy&&t.strategy!==Ft.strategy||Ft.dateFrom&&t.time<Ft.dateFrom||Ft.dateTo&&t.time>Ft.dateTo+"T23:59:59"))}function aS(n){const t=[...n];return t.sort((e,i)=>{let s=e[mr],r=i[mr];if(typeof s=="string"){const o=s.localeCompare(r);return Xi==="asc"?o:-o}return Xi==="asc"?s-r:r-s}),t}function lS(n,t,e){var s,r,o,a,l,u;const i=()=>Ca(t,n,e);(s=n.querySelector("#filter-coin"))==null||s.addEventListener("change",h=>{Ft.coin=h.target.value,Ae=1,i()}),(r=n.querySelector("#filter-dir"))==null||r.addEventListener("change",h=>{Ft.direction=h.target.value,Ae=1,i()}),(o=n.querySelector("#filter-strategy"))==null||o.addEventListener("change",h=>{Ft.strategy=h.target.value,Ae=1,i()}),(a=n.querySelector("#filter-from"))==null||a.addEventListener("change",h=>{Ft.dateFrom=h.target.value,Ae=1,i()}),(l=n.querySelector("#filter-to"))==null||l.addEventListener("change",h=>{Ft.dateTo=h.target.value,Ae=1,i()}),(u=n.querySelector("#btn-clear-filters"))==null||u.addEventListener("click",()=>{Ft={coin:"",direction:"",strategy:"",dateFrom:"",dateTo:""},Ae=1,i()})}function cS(n,t,e){n.querySelectorAll("th[data-sort]").forEach(i=>{i.addEventListener("click",()=>{const s=i.dataset.sort;mr===s?Xi=Xi==="asc"?"desc":"asc":(mr=s,Xi="desc"),Ca(t,n,e)})})}function uS(n,t,e){n.querySelectorAll(".pagination-btn[data-page]").forEach(i=>{i.addEventListener("click",()=>{const s=parseInt(i.dataset.page);!isNaN(s)&&s>=1&&(Ae=s,Ca(t,n,e))})})}function hS(n,t,e){n.querySelectorAll("tr[data-id]").forEach(i=>{i.addEventListener("click",()=>{const s=t.find(r=>r.id===i.dataset.id);s&&e&&e(s)})})}async function dS(n,t){for(const e of t){if(!e.images||e.images.length===0)continue;const i=n.querySelector(`.image-thumbs[data-trade-id="${e.id}"]`);if(!i)continue;let s="";for(const r of e.images.slice(0,3)){const o=await Jl(r);o&&(s+=`<img src="${o}" class="image-thumb" data-full-src="${o}" alt="Screenshot" />`)}e.images.length>3&&(s+=`<span class="text-muted" style="font-size:0.7rem; align-self:center">+${e.images.length-3}</span>`),i.innerHTML=s,i.querySelectorAll(".image-thumb").forEach(r=>{r.addEventListener("click",o=>{o.stopPropagation();const a=document.getElementById("lightbox"),l=document.getElementById("lightbox-img");l.src=r.dataset.fullSrc,a.classList.remove("hidden")})})}}function fS(n,t,e){const i=Mr(),s=eu();t.innerHTML=`
    <div class="modal-header">
      <h3 class="modal-title">➕ Add Manual Trade</h3>
      <button class="modal-close" id="modal-close">&times;</button>
    </div>
    <div class="modal-body">
      <!-- Basic info -->
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">Date & Time</label>
          <input type="datetime-local" id="trade-time" class="input" value="${pS()}" />
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
          ${i.map(P=>`<option value="${P}">${P}</option>`).join("")}
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
          ${s.map(P=>`
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
  `,n.classList.remove("hidden");let r=0,o=[],a=[];t.querySelector("#trade-img-upload").addEventListener("change",P=>{const k=t.querySelector("#trade-img-gallery");Array.from(P.target.files).forEach(C=>{const R=new FileReader;R.onload=M=>{const L="img_"+Date.now()+"_"+Math.random().toString(36).slice(2,6);a.push({id:L,dataUrl:M.target.result});const E=document.createElement("img");E.src=M.target.result,E.style.cssText="width:48px;height:48px;object-fit:cover;border-radius:4px;border:1px solid var(--border-subtle);",k.appendChild(E)},R.readAsDataURL(C)})});const l=()=>{n.classList.add("hidden")};t.querySelector("#modal-close").addEventListener("click",l),t.querySelector("#modal-cancel").addEventListener("click",l),n.addEventListener("click",P=>{P.target===n&&l()});const u=t.querySelector("#trade-entry-price"),h=t.querySelector("#trade-exit-price"),d=t.querySelector("#trade-size"),p=t.querySelector("#trade-notional"),y=t.querySelector("#trade-fee"),S=t.querySelector("#trade-direction"),b=t.querySelector("#trade-pnl");function T(){const P=parseFloat(u.value)||0,k=parseFloat(h.value)||0,C=parseFloat(d.value)||0,R=parseFloat(y.value)||0;if(P&&C&&!p.value&&(p.placeholder=(P*C).toFixed(2)),P>0&&k>0&&C>0){const L=S.value==="Long"?(k-P)*C:(P-k)*C;b.value=(L-R).toFixed(2)}}u.addEventListener("input",T),h.addEventListener("input",T),d.addEventListener("input",T),y.addEventListener("input",T),S.addEventListener("change",T),t.querySelectorAll(".risk-star-btn").forEach(P=>{P.addEventListener("click",()=>{r=parseInt(P.dataset.risk),t.querySelectorAll(".risk-star-btn").forEach(k=>{k.style.color=parseInt(k.dataset.risk)<=r?"#f59e0b":"#374151"})})}),t.querySelectorAll(".tag-toggle-btn").forEach(P=>{P.addEventListener("click",()=>{const k=P.dataset.tag;o.includes(k)?(o=o.filter(C=>C!==k),P.style.background="transparent",P.style.color="var(--text-secondary)",P.style.borderColor="var(--border-medium)"):(o.push(k),P.style.background="var(--accent-glow)",P.style.color="var(--accent-primary)",P.style.borderColor="var(--accent-primary)")})}),t.querySelector("#modal-save").addEventListener("click",async()=>{const P=t.querySelector("#trade-coin").value.trim();if(!P){alert("Please fill in the coin!");return}for(const R of a)await ta(R.id,R.dataUrl);const k=t.querySelector("#trade-time").value,C=zI({time:k?new Date(k).toISOString():new Date().toISOString(),coin:P,direction:t.querySelector("#trade-direction").value,entryPrice:t.querySelector("#trade-entry-price").value,exitPrice:t.querySelector("#trade-exit-price").value||null,size:t.querySelector("#trade-size").value,notional:t.querySelector("#trade-notional").value,fee:t.querySelector("#trade-fee").value,closedPnl:t.querySelector("#trade-pnl").value,risk:r,strategy:t.querySelector("#trade-strategy").value,notes:t.querySelector("#trade-notes").value,tags:o,images:a.map(R=>R.id),mae:t.querySelector("#trade-mae").value||null,mfe:t.querySelector("#trade-mfe").value||null});e(C),l()})}function pS(){const n=new Date,t=n.getTimezoneOffset();return new Date(n.getTime()-t*60*1e3).toISOString().slice(0,16)}function Vd(n){const t=new Date(n);return t.toLocaleDateString("en-US",{day:"2-digit",month:"2-digit",year:"numeric"})+" "+t.toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit"})}function Ni(n){return n!=null?"$"+n.toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2}):"—"}function Nd(n){const t=new Date(n),e=t.getTimezoneOffset();return new Date(t.getTime()-e*60*1e3).toISOString().slice(0,16)}function gS(n,t,e,i,s){let r=JSON.parse(JSON.stringify(n.legs||[]));const o=Mr();function a(){const b=On(r),T=r.filter(k=>k.type==="entry"),P=r.filter(k=>k.type==="exit");t.innerHTML=`
    <div class="page-header" style="margin-bottom:1.5rem;">
      <div style="display:flex; align-items:center; gap:1rem; flex-wrap:wrap;">
        <button class="btn btn-ghost btn-sm" id="btn-back">← Back</button>
        <div>
          <h2 class="page-title" style="display:flex; align-items:center; gap:0.5rem;">
            ${n.coin} ${n.direction}
            <span class="status-badge ${b.status==="Active"?"status-active":"status-completed"}" style="font-size:0.75rem;">
              ${b.status==="Active"?'<span class="status-dot"></span> Active':"✓ Completed"}
            </span>
          </h2>
          <p class="page-subtitle">${T.length} entries • ${P.length} exits • ${r.length} legs total</p>
        </div>
      </div>
    </div>

    <!-- Position Summary KPIs -->
    <div class="kpi-grid" style="margin-bottom:1.5rem;">
      <div class="kpi-card animate-in stagger-1">
        <div class="kpi-label">Avg Entry</div>
        <div class="kpi-value">${Ni(b.entryPrice)}</div>
      </div>
      <div class="kpi-card animate-in stagger-2">
        <div class="kpi-label">Avg Exit</div>
        <div class="kpi-value">${b.exitPrice?Ni(b.exitPrice):"—"}</div>
      </div>
      <div class="kpi-card animate-in stagger-3">
        <div class="kpi-label">Size</div>
        <div class="kpi-value">${b.remainingSize!==b.size?`<span style="color:var(--accent-primary)">${b.remainingSize}</span> / ${b.size}`:b.size}</div>
      </div>
      <div class="kpi-card animate-in stagger-4">
        <div class="kpi-label">P&L <span style="font-size:0.65rem; color:var(--text-muted)">(net of fees)</span></div>
        <div class="kpi-value ${b.closedPnl>=0?"profit":"loss"}">${$t(b.closedPnl)}</div>
      </div>
      <div class="kpi-card animate-in stagger-5">
        <div class="kpi-label">Invested</div>
        <div class="kpi-value">${Ni(b.notional)}</div>
      </div>
      <div class="kpi-card animate-in stagger-6">
        <div class="kpi-label">Fee Total</div>
        <div class="kpi-value loss">-$${b.fee.toFixed(2)}</div>
      </div>
    </div>

    <!-- Entries Table -->
    <div class="card" style="margin-bottom:1.5rem;">
      <div style="display:flex; justify-content:space-between; align-items:center; padding:1rem 1.25rem 0.5rem;">
        <h3 style="margin:0; font-size:1rem;">📥 Entries (${T.length})</h3>
        <button class="btn btn-primary btn-sm" id="btn-add-entry">+ Add Entry</button>
      </div>
      <div class="table-container">
        <table class="data-table">
          <thead><tr>
            <th>Data</th>
            <th>Price</th>
            <th>Size</th>
            <th>Value</th>
            <th>Fee</th>
            <th>Risk</th>
            <th>Strategy</th>
            <th>Notes</th>
            <th>MAE%</th>
            <th>MFE%</th>
            <th>📷</th>
          </tr></thead>
          <tbody>
            ${T.length===0?'<tr><td colspan="11" style="text-align:center; padding:1.5rem; color:var(--text-muted)">No entries — add the first entry</td></tr>':""}
            ${T.map((k,C)=>l(k,"entry",C)).join("")}
          </tbody>
        </table>
      </div>
    </div>

    <!-- Exits Table -->
    <div class="card" style="margin-bottom:1.5rem;">
      <div style="display:flex; justify-content:space-between; align-items:center; padding:1rem 1.25rem 0.5rem;">
        <h3 style="margin:0; font-size:1rem;">📤 Exits (${P.length})</h3>
        <button class="btn btn-primary btn-sm" id="btn-add-exit" ${b.remainingSize<=0?"disabled":""}>+ Add Exit ${b.remainingSize>0?`(max: ${b.remainingSize})`:""}</button>
      </div>
      <div class="table-container">
        <table class="data-table">
          <thead><tr>
            <th>Data</th>
            <th>Price</th>
            <th>Size</th>
            <th>Fee</th>
            <th>P&L</th>
            <th>Risk</th>
            <th>Strategy</th>
            <th>Notes</th>
            <th>MAE%</th>
            <th>MFE%</th>
            <th>📷</th>
          </tr></thead>
          <tbody>
            ${P.length===0?'<tr><td colspan="11" style="text-align:center; padding:1.5rem; color:var(--text-muted)">No exits — fully open position</td></tr>':""}
            ${P.map((k,C)=>u(k,C)).join("")}
          </tbody>
        </table>
      </div>
    </div>

    <!-- Actions -->
    <div style="display:flex; gap:0.75rem; flex-wrap:wrap;">
      <button class="btn btn-ghost btn-sm" id="btn-back-bottom">← Back to Trades</button>
      <div style="flex:1"></div>
      <button class="btn btn-danger btn-sm" id="btn-delete-position">🗑️ Delete Position</button>
    </div>
    `,h()}function l(b,T,P){const k=b.risk>0?"★".repeat(b.risk)+"☆".repeat(5-b.risk):'<span class="text-muted">-</span>',C=b.price*b.size,R=(b.images||[]).length;return`
      <tr class="row-clickable" data-type="${T}" data-idx="${P}">
        <td>${Vd(b.time)}</td>
        <td>${Ni(b.price)}</td>
        <td>${b.size}</td>
        <td class="text-muted">${Ni(C)}</td>
        <td class="text-muted">$${(b.fee||0).toFixed(2)}</td>
        <td><span class="risk-stars">${k}</span></td>
        <td>${b.strategy?`<span class="strategy-badge">${b.strategy}</span>`:'<span class="text-muted">-</span>'}</td>
        <td style="max-width:150px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;" title="${(b.notes||"").replace(/"/g,"&quot;")}">${b.notes||""}</td>
        <td class="text-muted">${b.mae!=null?b.mae+"%":""}</td>
        <td class="text-muted">${b.mfe!=null?b.mfe+"%":""}</td>
        <td>${R>0?`<button class="btn btn-ghost btn-sm leg-gallery-btn" data-type="${T}" data-idx="${P}" style="font-size:0.75rem; padding:0.15rem 0.4rem; cursor:pointer;">📷 ${R}</button>`:""}</td>
      </tr>
    `}function u(b,T,P){const k=b.risk>0?"★".repeat(b.risk)+"☆".repeat(5-b.risk):'<span class="text-muted">-</span>',C=(b.pnl||0)>=0?"cell-profit":"cell-loss",R=(b.images||[]).length;return`
      <tr class="row-clickable" data-type="exit" data-idx="${T}">
        <td>${Vd(b.time)}</td>
        <td>${Ni(b.price)}</td>
        <td>${b.size}</td>
        <td class="text-muted">$${(b.fee||0).toFixed(2)}</td>
        <td class="${C}" style="font-weight:600;">${$t(b.pnl||0)}</td>
        <td><span class="risk-stars">${k}</span></td>
        <td>${b.strategy?`<span class="strategy-badge">${b.strategy}</span>`:'<span class="text-muted">-</span>'}</td>
        <td style="max-width:150px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;" title="${(b.notes||"").replace(/"/g,"&quot;")}">${b.notes||""}</td>
        <td class="text-muted">${b.mae!=null?b.mae+"%":""}</td>
        <td class="text-muted">${b.mfe!=null?b.mfe+"%":""}</td>
        <td>${R>0?`<button class="btn btn-ghost btn-sm leg-gallery-btn" data-type="exit" data-idx="${T}" style="font-size:0.75rem; padding:0.15rem 0.4rem; cursor:pointer;">📷 ${R}</button>`:""}</td>
      </tr>
    `}function h(){var b,T,P,k,C;(b=t.querySelector("#btn-back"))==null||b.addEventListener("click",e),(T=t.querySelector("#btn-back-bottom"))==null||T.addEventListener("click",e),(P=t.querySelector("#btn-delete-position"))==null||P.addEventListener("click",()=>{confirm(`Are you sure you want to delete the entire ${n.coin} ${n.direction} position?`)&&(s(n.id),e())}),(k=t.querySelector("#btn-add-entry"))==null||k.addEventListener("click",()=>{const R=On(r),M=r.filter(L=>L.type==="entry").at(-1);y("entry",{price:(M==null?void 0:M.price)||0,time:new Date().toISOString(),size:0},R)}),(C=t.querySelector("#btn-add-exit"))==null||C.addEventListener("click",()=>{const R=On(r);R.remainingSize<=0||y("exit",{price:0,time:new Date().toISOString(),size:R.remainingSize},R)}),t.querySelectorAll("tr.row-clickable[data-type]").forEach(R=>{R.addEventListener("click",M=>{if(M.target.closest(".leg-remove-btn"))return;const L=R.dataset.type,E=parseInt(R.dataset.idx),_=r.filter(v=>v.type===L)[E];_&&S(_,L,E)})}),t.querySelectorAll(".leg-gallery-btn").forEach(R=>{R.addEventListener("click",M=>{M.stopPropagation();const L=R.dataset.type,E=parseInt(R.dataset.idx),_=r.filter(v=>v.type===L)[E];_&&_.images&&_.images.length>0&&d(_)})})}async function d(b){const T=document.createElement("div");T.style.cssText="position:fixed; inset:0; background:rgba(0,0,0,0.85); z-index:600; display:flex; flex-direction:column; align-items:center; justify-content:center; padding:1rem;",T.innerHTML='<button style="position:absolute; top:1rem; right:1rem; background:none; border:none; color:white; font-size:2rem; cursor:pointer; z-index:10;">✕</button><div style="display:flex; flex-wrap:wrap; gap:1rem; justify-content:center; max-height:90vh; overflow-y:auto; padding:1rem;"></div>';const P=T.querySelector("div");for(const k of b.images){const C=await Jl(k);if(C){const R=document.createElement("img");R.src=C,R.style.cssText="max-width:90vw; max-height:80vh; border-radius:8px; object-fit:contain; cursor:pointer;",R.addEventListener("click",()=>{const M=document.getElementById("lightbox");M&&(document.getElementById("lightbox-img").src=C,M.classList.remove("hidden"))}),P.appendChild(R)}}T.querySelector("button").addEventListener("click",()=>T.remove()),T.addEventListener("click",k=>{k.target===T&&T.remove()}),document.body.appendChild(T)}function p(){r=ea(r,n.direction);const b=On(r);i(n.id,{legs:r,...b,exitTime:b.status==="Completed"?new Date().toISOString():null}),a()}function y(b,T,P){const k=b==="exit"?P.remainingSize:999999,C=b==="entry"?"Entry":"Exit",R=document.createElement("div");R.style.cssText="position:fixed; inset:0; background:rgba(0,0,0,0.5); z-index:500; display:flex; align-items:center; justify-content:center;",R.innerHTML=`
      <div style="background:var(--bg-card); border-radius:var(--radius-lg); padding:1.5rem; width:420px; max-width:90vw; border:1px solid var(--border-medium); max-height:90vh; overflow-y:auto;">
        <h4 style="margin:0 0 1rem;">➕ Add ${C}</h4>
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:0.75rem;">
          <div class="form-group"><label class="form-label">Price</label><input type="number" step="0.01" class="input" id="lp-price" value="${T.price||""}" /></div>
          <div class="form-group"><label class="form-label">Size ${b==="exit"?`(max: ${k})`:""}</label><input type="number" step="0.0001" class="input" id="lp-size" value="${T.size||""}" /></div>
          <div class="form-group"><label class="form-label">Fee</label><input type="number" step="0.01" class="input" id="lp-fee" value="0" /></div>
          <div class="form-group"><label class="form-label">Date</label><input type="datetime-local" class="input" id="lp-time" value="${Nd(T.time)}" /></div>
          <div class="form-group"><label class="form-label">Strategy</label><select class="input" id="lp-strategy"><option value="">—</option>${o.map(E=>`<option value="${E}">${E}</option>`).join("")}</select></div>
          <div class="form-group"><label class="form-label">Risk</label><div id="lp-risk" style="display:flex; gap:0.1rem; padding-top:0.3rem;">${[1,2,3,4,5].map(E=>`<button class="lp-risk-btn" data-r="${E}" style="background:none;border:none;font-size:1.2rem;cursor:pointer;color:#374151;">★</button>`).join("")}</div></div>
        </div>
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:0.75rem; margin-top:0.75rem;">
          <div class="form-group"><label class="form-label">MAE%</label><input type="number" step="0.01" class="input" id="lp-mae" placeholder="ex: -2.5" /></div>
          <div class="form-group"><label class="form-label">MFE%</label><input type="number" step="0.01" class="input" id="lp-mfe" placeholder="ex: 5.3" /></div>
        </div>
        <div class="form-group" style="margin-top:0.75rem;"><label class="form-label">Notes</label><textarea class="input" id="lp-notes" rows="2" placeholder="Observations..." style="resize:vertical;"></textarea></div>
        <div class="form-group" style="margin-top:0.75rem;"><label class="form-label">Screenshots</label><div id="lp-gallery" style="display:flex; flex-wrap:wrap; gap:0.35rem; margin-bottom:0.5rem;"></div><label class="btn btn-secondary btn-sm" style="cursor:pointer; display:inline-flex; align-items:center; gap:0.35rem;">📷 Add<input type="file" accept="image/*" id="lp-img-upload" style="display:none" multiple /></label></div>
        <div style="display:flex; gap:0.5rem; justify-content:flex-end; margin-top:1rem;">
          <button class="btn btn-ghost" id="lp-cancel">Cancel</button>
          <button class="btn btn-primary" id="lp-confirm">✓ Add</button>
        </div>
      </div>
    `,document.body.appendChild(R);let M=0,L=[];R.querySelectorAll(".lp-risk-btn").forEach(E=>E.addEventListener("click",()=>{M=parseInt(E.dataset.r),R.querySelectorAll(".lp-risk-btn").forEach(g=>g.style.color=parseInt(g.dataset.r)<=M?"#f59e0b":"#374151")})),R.querySelector("#lp-img-upload").addEventListener("change",E=>{Array.from(E.target.files).forEach(g=>{const _=new FileReader;_.onload=v=>{const I="img_"+Date.now()+"_"+Math.random().toString(36).slice(2,6);L.push({id:I,dataUrl:v.target.result});const A=document.createElement("img");A.src=v.target.result,A.style.cssText="width:48px;height:48px;object-fit:cover;border-radius:4px;border:1px solid var(--border-subtle);",R.querySelector("#lp-gallery").appendChild(A)},_.readAsDataURL(g)})}),R.querySelector("#lp-cancel").addEventListener("click",()=>R.remove()),R.addEventListener("click",E=>{E.target===R&&R.remove()}),R.querySelector("#lp-confirm").addEventListener("click",async()=>{const E=parseFloat(R.querySelector("#lp-price").value),g=parseFloat(R.querySelector("#lp-size").value);if(!E||!g||E<=0||g<=0){alert("Invalid price/size.");return}if(b==="exit"&&g>k+1e-4){alert(`Max exit: ${k}`);return}for(const v of L)await ta(v.id,v.dataUrl);const _={type:b,time:R.querySelector("#lp-time").value?new Date(R.querySelector("#lp-time").value).toISOString():new Date().toISOString(),price:E,size:Math.min(g,b==="exit"?k:g),fee:parseFloat(R.querySelector("#lp-fee").value)||0,strategy:R.querySelector("#lp-strategy").value,risk:M,notes:R.querySelector("#lp-notes").value,tags:[],images:L.map(v=>v.id),mae:R.querySelector("#lp-mae").value?parseFloat(R.querySelector("#lp-mae").value):null,mfe:R.querySelector("#lp-mfe").value?parseFloat(R.querySelector("#lp-mfe").value):null};if(b==="exit"){const v=P.entryPrice;_.pnl=n.direction==="Long"?(E-v)*_.size-_.fee:(v-E)*_.size-_.fee}r.push(_),R.remove(),p()})}function S(b,T,P){const k=document.createElement("div");k.style.cssText="position:fixed; inset:0; background:rgba(0,0,0,0.5); z-index:500; display:flex; align-items:center; justify-content:center;",k.innerHTML=`
      <div style="background:var(--bg-card); border-radius:var(--radius-lg); padding:1.5rem; width:420px; max-width:90vw; border:1px solid var(--border-medium); max-height:90vh; overflow-y:auto;">
        <h4 style="margin:0 0 1rem;">✏️ Edit ${T==="entry"?"Entry":"Exit"} #${P+1}</h4>
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:0.75rem;">
          <div class="form-group"><label class="form-label">Price</label><input type="number" step="0.01" class="input" id="le-price" value="${b.price}" /></div>
          <div class="form-group"><label class="form-label">Size</label><input type="number" step="0.0001" class="input" id="le-size" value="${b.size}" /></div>
          <div class="form-group"><label class="form-label">Fee</label><input type="number" step="0.01" class="input" id="le-fee" value="${b.fee||0}" /></div>
          <div class="form-group"><label class="form-label">Data</label><input type="datetime-local" class="input" id="le-time" value="${Nd(b.time)}" /></div>
          <div class="form-group"><label class="form-label">Strategy</label><select class="input" id="le-strategy"><option value="">—</option>${o.map(E=>`<option value="${E}" ${b.strategy===E?"selected":""}>${E}</option>`).join("")}</select></div>
          <div class="form-group"><label class="form-label">Risk</label><div id="le-risk" style="display:flex; gap:0.1rem; padding-top:0.3rem;">${[1,2,3,4,5].map(E=>`<button class="le-risk-btn" data-r="${E}" style="background:none;border:none;font-size:1.2rem;cursor:pointer;color:${E<=(b.risk||0)?"#f59e0b":"#374151"};">★</button>`).join("")}</div></div>
        </div>
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:0.75rem; margin-top:0.75rem;">
          <div class="form-group"><label class="form-label">MAE%</label><input type="number" step="0.01" class="input" id="le-mae" value="${b.mae!=null?b.mae:""}" placeholder="ex: -2.5" /></div>
          <div class="form-group"><label class="form-label">MFE%</label><input type="number" step="0.01" class="input" id="le-mfe" value="${b.mfe!=null?b.mfe:""}" placeholder="ex: 5.3" /></div>
        </div>
        <div class="form-group" style="margin-top:0.75rem;"><label class="form-label">Notes</label><textarea class="input" id="le-notes" rows="3" style="resize:vertical;">${b.notes||""}</textarea></div>
        <div class="form-group" style="margin-top:0.75rem;"><label class="form-label">Screenshots</label><div id="le-gallery" style="display:flex; flex-wrap:wrap; gap:0.35rem; margin-bottom:0.5rem;"></div><label class="btn btn-secondary btn-sm" style="cursor:pointer; display:inline-flex; align-items:center; gap:0.35rem;">📷 Add<input type="file" accept="image/*" id="le-img-upload" style="display:none" multiple /></label></div>
        <div style="display:flex; gap:0.5rem; justify-content:flex-end; margin-top:1rem;">
          <button class="btn btn-danger btn-sm" id="le-delete">🗑️ Delete Leg</button>
          <div style="flex:1"></div>
          <button class="btn btn-ghost" id="le-cancel">Cancel</button>
          <button class="btn btn-primary" id="le-save">💾 Save</button>
        </div>
      </div>
    `,document.body.appendChild(k);let C=b.risk||0,R=[...b.images||[]],M=[];const L=k.querySelector("#le-gallery");R.forEach(async E=>{const g=await Jl(E);if(g){const _=document.createElement("div");_.style.cssText="position:relative; width:48px; height:48px;",_.innerHTML=`<img src="${g}" style="width:100%;height:100%;object-fit:cover;border-radius:4px;border:1px solid var(--border-subtle);" /><button data-img="${E}" style="position:absolute;top:-4px;right:-4px;width:16px;height:16px;border-radius:50%;background:var(--color-loss);color:white;border:none;cursor:pointer;font-size:0.6rem;display:flex;align-items:center;justify-content:center;">✕</button>`,_.querySelector("button").addEventListener("click",()=>{R=R.filter(v=>v!==E),PI(E),_.remove()}),L.appendChild(_)}}),k.querySelectorAll(".le-risk-btn").forEach(E=>E.addEventListener("click",()=>{C=parseInt(E.dataset.r),k.querySelectorAll(".le-risk-btn").forEach(g=>g.style.color=parseInt(g.dataset.r)<=C?"#f59e0b":"#374151")})),k.querySelector("#le-img-upload").addEventListener("change",E=>{Array.from(E.target.files).forEach(g=>{const _=new FileReader;_.onload=v=>{const I="img_"+Date.now()+"_"+Math.random().toString(36).slice(2,6);M.push({id:I,dataUrl:v.target.result}),R.push(I);const A=document.createElement("img");A.src=v.target.result,A.style.cssText="width:48px;height:48px;object-fit:cover;border-radius:4px;border:1px solid var(--border-subtle);",L.appendChild(A)},_.readAsDataURL(g)})}),k.querySelector("#le-cancel").addEventListener("click",()=>k.remove()),k.addEventListener("click",E=>{E.target===k&&k.remove()}),k.querySelector("#le-delete").addEventListener("click",()=>{confirm("Are you sure you want to delete this leg?")&&(r=r.filter(E=>E!==b),r=ea(r,n.direction),k.remove(),p())}),k.querySelector("#le-save").addEventListener("click",async()=>{for(const E of M)await ta(E.id,E.dataUrl);b.price=parseFloat(k.querySelector("#le-price").value)||b.price,b.size=parseFloat(k.querySelector("#le-size").value)||b.size,b.fee=parseFloat(k.querySelector("#le-fee").value)||0,b.time=k.querySelector("#le-time").value?new Date(k.querySelector("#le-time").value).toISOString():b.time,b.strategy=k.querySelector("#le-strategy").value,b.risk=C,b.notes=k.querySelector("#le-notes").value,b.images=R,b.mae=k.querySelector("#le-mae").value?parseFloat(k.querySelector("#le-mae").value):null,b.mfe=k.querySelector("#le-mfe").value?parseFloat(k.querySelector("#le-mfe").value):null,k.remove(),p()})}a()}/*!
 * @kurkle/color v0.3.4
 * https://github.com/kurkle/color#readme
 * (c) 2024 Jukka Kurkela
 * Released under the MIT License
 */function Or(n){return n+.5|0}const Ln=(n,t,e)=>Math.max(Math.min(n,e),t);function js(n){return Ln(Or(n*2.55),0,255)}function Wn(n){return Ln(Or(n*255),0,255)}function ln(n){return Ln(Or(n/2.55)/100,0,1)}function Fd(n){return Ln(Or(n*100),0,100)}const xe={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},Zl=[..."0123456789ABCDEF"],mS=n=>Zl[n&15],_S=n=>Zl[(n&240)>>4]+Zl[n&15],eo=n=>(n&240)>>4===(n&15),yS=n=>eo(n.r)&&eo(n.g)&&eo(n.b)&&eo(n.a);function bS(n){var t=n.length,e;return n[0]==="#"&&(t===4||t===5?e={r:255&xe[n[1]]*17,g:255&xe[n[2]]*17,b:255&xe[n[3]]*17,a:t===5?xe[n[4]]*17:255}:(t===7||t===9)&&(e={r:xe[n[1]]<<4|xe[n[2]],g:xe[n[3]]<<4|xe[n[4]],b:xe[n[5]]<<4|xe[n[6]],a:t===9?xe[n[7]]<<4|xe[n[8]]:255})),e}const vS=(n,t)=>n<255?t(n):"";function ES(n){var t=yS(n)?mS:_S;return n?"#"+t(n.r)+t(n.g)+t(n.b)+vS(n.a,t):void 0}const wS=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function Mm(n,t,e){const i=t*Math.min(e,1-e),s=(r,o=(r+n/30)%12)=>e-i*Math.max(Math.min(o-3,9-o,1),-1);return[s(0),s(8),s(4)]}function TS(n,t,e){const i=(s,r=(s+n/60)%6)=>e-e*t*Math.max(Math.min(r,4-r,1),0);return[i(5),i(3),i(1)]}function IS(n,t,e){const i=Mm(n,1,.5);let s;for(t+e>1&&(s=1/(t+e),t*=s,e*=s),s=0;s<3;s++)i[s]*=1-t-e,i[s]+=t;return i}function SS(n,t,e,i,s){return n===s?(t-e)/i+(t<e?6:0):t===s?(e-n)/i+2:(n-t)/i+4}function ru(n){const e=n.r/255,i=n.g/255,s=n.b/255,r=Math.max(e,i,s),o=Math.min(e,i,s),a=(r+o)/2;let l,u,h;return r!==o&&(h=r-o,u=a>.5?h/(2-r-o):h/(r+o),l=SS(e,i,s,h,r),l=l*60+.5),[l|0,u||0,a]}function ou(n,t,e,i){return(Array.isArray(t)?n(t[0],t[1],t[2]):n(t,e,i)).map(Wn)}function au(n,t,e){return ou(Mm,n,t,e)}function xS(n,t,e){return ou(IS,n,t,e)}function AS(n,t,e){return ou(TS,n,t,e)}function Om(n){return(n%360+360)%360}function PS(n){const t=wS.exec(n);let e=255,i;if(!t)return;t[5]!==i&&(e=t[6]?js(+t[5]):Wn(+t[5]));const s=Om(+t[2]),r=+t[3]/100,o=+t[4]/100;return t[1]==="hwb"?i=xS(s,r,o):t[1]==="hsv"?i=AS(s,r,o):i=au(s,r,o),{r:i[0],g:i[1],b:i[2],a:e}}function kS(n,t){var e=ru(n);e[0]=Om(e[0]+t),e=au(e),n.r=e[0],n.g=e[1],n.b=e[2]}function RS(n){if(!n)return;const t=ru(n),e=t[0],i=Fd(t[1]),s=Fd(t[2]);return n.a<255?`hsla(${e}, ${i}%, ${s}%, ${ln(n.a)})`:`hsl(${e}, ${i}%, ${s}%)`}const $d={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},Ud={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"};function CS(){const n={},t=Object.keys(Ud),e=Object.keys($d);let i,s,r,o,a;for(i=0;i<t.length;i++){for(o=a=t[i],s=0;s<e.length;s++)r=e[s],a=a.replace(r,$d[r]);r=parseInt(Ud[o],16),n[a]=[r>>16&255,r>>8&255,r&255]}return n}let no;function DS(n){no||(no=CS(),no.transparent=[0,0,0,0]);const t=no[n.toLowerCase()];return t&&{r:t[0],g:t[1],b:t[2],a:t.length===4?t[3]:255}}const MS=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;function OS(n){const t=MS.exec(n);let e=255,i,s,r;if(t){if(t[7]!==i){const o=+t[7];e=t[8]?js(o):Ln(o*255,0,255)}return i=+t[1],s=+t[3],r=+t[5],i=255&(t[2]?js(i):Ln(i,0,255)),s=255&(t[4]?js(s):Ln(s,0,255)),r=255&(t[6]?js(r):Ln(r,0,255)),{r:i,g:s,b:r,a:e}}}function LS(n){return n&&(n.a<255?`rgba(${n.r}, ${n.g}, ${n.b}, ${ln(n.a)})`:`rgb(${n.r}, ${n.g}, ${n.b})`)}const fl=n=>n<=.0031308?n*12.92:Math.pow(n,1/2.4)*1.055-.055,Fi=n=>n<=.04045?n/12.92:Math.pow((n+.055)/1.055,2.4);function VS(n,t,e){const i=Fi(ln(n.r)),s=Fi(ln(n.g)),r=Fi(ln(n.b));return{r:Wn(fl(i+e*(Fi(ln(t.r))-i))),g:Wn(fl(s+e*(Fi(ln(t.g))-s))),b:Wn(fl(r+e*(Fi(ln(t.b))-r))),a:n.a+e*(t.a-n.a)}}function io(n,t,e){if(n){let i=ru(n);i[t]=Math.max(0,Math.min(i[t]+i[t]*e,t===0?360:1)),i=au(i),n.r=i[0],n.g=i[1],n.b=i[2]}}function Lm(n,t){return n&&Object.assign(t||{},n)}function zd(n){var t={r:0,g:0,b:0,a:255};return Array.isArray(n)?n.length>=3&&(t={r:n[0],g:n[1],b:n[2],a:255},n.length>3&&(t.a=Wn(n[3]))):(t=Lm(n,{r:0,g:0,b:0,a:1}),t.a=Wn(t.a)),t}function NS(n){return n.charAt(0)==="r"?OS(n):PS(n)}class _r{constructor(t){if(t instanceof _r)return t;const e=typeof t;let i;e==="object"?i=zd(t):e==="string"&&(i=bS(t)||DS(t)||NS(t)),this._rgb=i,this._valid=!!i}get valid(){return this._valid}get rgb(){var t=Lm(this._rgb);return t&&(t.a=ln(t.a)),t}set rgb(t){this._rgb=zd(t)}rgbString(){return this._valid?LS(this._rgb):void 0}hexString(){return this._valid?ES(this._rgb):void 0}hslString(){return this._valid?RS(this._rgb):void 0}mix(t,e){if(t){const i=this.rgb,s=t.rgb;let r;const o=e===r?.5:e,a=2*o-1,l=i.a-s.a,u=((a*l===-1?a:(a+l)/(1+a*l))+1)/2;r=1-u,i.r=255&u*i.r+r*s.r+.5,i.g=255&u*i.g+r*s.g+.5,i.b=255&u*i.b+r*s.b+.5,i.a=o*i.a+(1-o)*s.a,this.rgb=i}return this}interpolate(t,e){return t&&(this._rgb=VS(this._rgb,t._rgb,e)),this}clone(){return new _r(this.rgb)}alpha(t){return this._rgb.a=Wn(t),this}clearer(t){const e=this._rgb;return e.a*=1-t,this}greyscale(){const t=this._rgb,e=Or(t.r*.3+t.g*.59+t.b*.11);return t.r=t.g=t.b=e,this}opaquer(t){const e=this._rgb;return e.a*=1+t,this}negate(){const t=this._rgb;return t.r=255-t.r,t.g=255-t.g,t.b=255-t.b,this}lighten(t){return io(this._rgb,2,t),this}darken(t){return io(this._rgb,2,-t),this}saturate(t){return io(this._rgb,1,t),this}desaturate(t){return io(this._rgb,1,-t),this}rotate(t){return kS(this._rgb,t),this}}/*!
 * Chart.js v4.5.1
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */function rn(){}const FS=(()=>{let n=0;return()=>n++})();function _t(n){return n==null}function Gt(n){if(Array.isArray&&Array.isArray(n))return!0;const t=Object.prototype.toString.call(n);return t.slice(0,7)==="[object"&&t.slice(-6)==="Array]"}function ht(n){return n!==null&&Object.prototype.toString.call(n)==="[object Object]"}function de(n){return(typeof n=="number"||n instanceof Number)&&isFinite(+n)}function ze(n,t){return de(n)?n:t}function it(n,t){return typeof n>"u"?t:n}const $S=(n,t)=>typeof n=="string"&&n.endsWith("%")?parseFloat(n)/100:+n/t,Vm=(n,t)=>typeof n=="string"&&n.endsWith("%")?parseFloat(n)/100*t:+n;function Rt(n,t,e){if(n&&typeof n.call=="function")return n.apply(e,t)}function wt(n,t,e,i){let s,r,o;if(Gt(n))for(r=n.length,s=0;s<r;s++)t.call(e,n[s],s);else if(ht(n))for(o=Object.keys(n),r=o.length,s=0;s<r;s++)t.call(e,n[o[s]],o[s])}function na(n,t){let e,i,s,r;if(!n||!t||n.length!==t.length)return!1;for(e=0,i=n.length;e<i;++e)if(s=n[e],r=t[e],s.datasetIndex!==r.datasetIndex||s.index!==r.index)return!1;return!0}function ia(n){if(Gt(n))return n.map(ia);if(ht(n)){const t=Object.create(null),e=Object.keys(n),i=e.length;let s=0;for(;s<i;++s)t[e[s]]=ia(n[e[s]]);return t}return n}function Nm(n){return["__proto__","prototype","constructor"].indexOf(n)===-1}function US(n,t,e,i){if(!Nm(n))return;const s=t[n],r=e[n];ht(s)&&ht(r)?yr(s,r,i):t[n]=ia(r)}function yr(n,t,e){const i=Gt(t)?t:[t],s=i.length;if(!ht(n))return n;e=e||{};const r=e.merger||US;let o;for(let a=0;a<s;++a){if(o=i[a],!ht(o))continue;const l=Object.keys(o);for(let u=0,h=l.length;u<h;++u)r(l[u],n,o,e)}return n}function er(n,t){return yr(n,t,{merger:zS})}function zS(n,t,e){if(!Nm(n))return;const i=t[n],s=e[n];ht(i)&&ht(s)?er(i,s):Object.prototype.hasOwnProperty.call(t,n)||(t[n]=ia(s))}const Bd={"":n=>n,x:n=>n.x,y:n=>n.y};function BS(n){const t=n.split("."),e=[];let i="";for(const s of t)i+=s,i.endsWith("\\")?i=i.slice(0,-1)+".":(e.push(i),i="");return e}function jS(n){const t=BS(n);return e=>{for(const i of t){if(i==="")break;e=e&&e[i]}return e}}function Si(n,t){return(Bd[t]||(Bd[t]=jS(t)))(n)}function lu(n){return n.charAt(0).toUpperCase()+n.slice(1)}const br=n=>typeof n<"u",Zn=n=>typeof n=="function",jd=(n,t)=>{if(n.size!==t.size)return!1;for(const e of n)if(!t.has(e))return!1;return!0};function HS(n){return n.type==="mouseup"||n.type==="click"||n.type==="contextmenu"}const At=Math.PI,Ot=2*At,WS=Ot+At,sa=Number.POSITIVE_INFINITY,qS=At/180,Yt=At/2,ri=At/4,Hd=At*2/3,Fm=Math.log10,Ye=Math.sign;function nr(n,t,e){return Math.abs(n-t)<e}function Wd(n){const t=Math.round(n);n=nr(n,t,n/1e3)?t:n;const e=Math.pow(10,Math.floor(Fm(n))),i=n/e;return(i<=1?1:i<=2?2:i<=5?5:10)*e}function KS(n){const t=[],e=Math.sqrt(n);let i;for(i=1;i<e;i++)n%i===0&&(t.push(i),t.push(n/i));return e===(e|0)&&t.push(e),t.sort((s,r)=>s-r).pop(),t}function GS(n){return typeof n=="symbol"||typeof n=="object"&&n!==null&&!(Symbol.toPrimitive in n||"toString"in n||"valueOf"in n)}function as(n){return!GS(n)&&!isNaN(parseFloat(n))&&isFinite(n)}function YS(n,t){const e=Math.round(n);return e-t<=n&&e+t>=n}function QS(n,t,e){let i,s,r;for(i=0,s=n.length;i<s;i++)r=n[i][e],isNaN(r)||(t.min=Math.min(t.min,r),t.max=Math.max(t.max,r))}function fn(n){return n*(At/180)}function XS(n){return n*(180/At)}function qd(n){if(!de(n))return;let t=1,e=0;for(;Math.round(n*t)/t!==n;)t*=10,e++;return e}function $m(n,t){const e=t.x-n.x,i=t.y-n.y,s=Math.sqrt(e*e+i*i);let r=Math.atan2(i,e);return r<-.5*At&&(r+=Ot),{angle:r,distance:s}}function tc(n,t){return Math.sqrt(Math.pow(t.x-n.x,2)+Math.pow(t.y-n.y,2))}function JS(n,t){return(n-t+WS)%Ot-At}function Ie(n){return(n%Ot+Ot)%Ot}function vr(n,t,e,i){const s=Ie(n),r=Ie(t),o=Ie(e),a=Ie(r-s),l=Ie(o-s),u=Ie(s-r),h=Ie(s-o);return s===r||s===o||i&&r===o||a>l&&u<h}function ue(n,t,e){return Math.max(t,Math.min(e,n))}function ZS(n){return ue(n,-32768,32767)}function pn(n,t,e,i=1e-6){return n>=Math.min(t,e)-i&&n<=Math.max(t,e)+i}function cu(n,t,e){e=e||(o=>n[o]<t);let i=n.length-1,s=0,r;for(;i-s>1;)r=s+i>>1,e(r)?s=r:i=r;return{lo:s,hi:i}}const fi=(n,t,e,i)=>cu(n,e,i?s=>{const r=n[s][t];return r<e||r===e&&n[s+1][t]===e}:s=>n[s][t]<e),tx=(n,t,e)=>cu(n,e,i=>n[i][t]>=e);function ex(n,t,e){let i=0,s=n.length;for(;i<s&&n[i]<t;)i++;for(;s>i&&n[s-1]>e;)s--;return i>0||s<n.length?n.slice(i,s):n}const Um=["push","pop","shift","splice","unshift"];function nx(n,t){if(n._chartjs){n._chartjs.listeners.push(t);return}Object.defineProperty(n,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[t]}}),Um.forEach(e=>{const i="_onData"+lu(e),s=n[e];Object.defineProperty(n,e,{configurable:!0,enumerable:!1,value(...r){const o=s.apply(this,r);return n._chartjs.listeners.forEach(a=>{typeof a[i]=="function"&&a[i](...r)}),o}})})}function Kd(n,t){const e=n._chartjs;if(!e)return;const i=e.listeners,s=i.indexOf(t);s!==-1&&i.splice(s,1),!(i.length>0)&&(Um.forEach(r=>{delete n[r]}),delete n._chartjs)}function zm(n){const t=new Set(n);return t.size===n.length?n:Array.from(t)}const Bm=(function(){return typeof window>"u"?function(n){return n()}:window.requestAnimationFrame})();function jm(n,t){let e=[],i=!1;return function(...s){e=s,i||(i=!0,Bm.call(window,()=>{i=!1,n.apply(t,e)}))}}function ix(n,t){let e;return function(...i){return t?(clearTimeout(e),e=setTimeout(n,t,i)):n.apply(this,i),t}}const Hm=n=>n==="start"?"left":n==="end"?"right":"center",we=(n,t,e)=>n==="start"?t:n==="end"?e:(t+e)/2,sx=(n,t,e,i)=>n===(i?"left":"right")?e:n==="center"?(t+e)/2:t;function Wm(n,t,e){const i=t.length;let s=0,r=i;if(n._sorted){const{iScale:o,vScale:a,_parsed:l}=n,u=n.dataset&&n.dataset.options?n.dataset.options.spanGaps:null,h=o.axis,{min:d,max:p,minDefined:y,maxDefined:S}=o.getUserBounds();if(y){if(s=Math.min(fi(l,h,d).lo,e?i:fi(t,h,o.getPixelForValue(d)).lo),u){const b=l.slice(0,s+1).reverse().findIndex(T=>!_t(T[a.axis]));s-=Math.max(0,b)}s=ue(s,0,i-1)}if(S){let b=Math.max(fi(l,o.axis,p,!0).hi+1,e?0:fi(t,h,o.getPixelForValue(p),!0).hi+1);if(u){const T=l.slice(b-1).findIndex(P=>!_t(P[a.axis]));b+=Math.max(0,T)}r=ue(b,s,i)-s}else r=i-s}return{start:s,count:r}}function qm(n){const{xScale:t,yScale:e,_scaleRanges:i}=n,s={xmin:t.min,xmax:t.max,ymin:e.min,ymax:e.max};if(!i)return n._scaleRanges=s,!0;const r=i.xmin!==t.min||i.xmax!==t.max||i.ymin!==e.min||i.ymax!==e.max;return Object.assign(i,s),r}const so=n=>n===0||n===1,Gd=(n,t,e)=>-(Math.pow(2,10*(n-=1))*Math.sin((n-t)*Ot/e)),Yd=(n,t,e)=>Math.pow(2,-10*n)*Math.sin((n-t)*Ot/e)+1,ir={linear:n=>n,easeInQuad:n=>n*n,easeOutQuad:n=>-n*(n-2),easeInOutQuad:n=>(n/=.5)<1?.5*n*n:-.5*(--n*(n-2)-1),easeInCubic:n=>n*n*n,easeOutCubic:n=>(n-=1)*n*n+1,easeInOutCubic:n=>(n/=.5)<1?.5*n*n*n:.5*((n-=2)*n*n+2),easeInQuart:n=>n*n*n*n,easeOutQuart:n=>-((n-=1)*n*n*n-1),easeInOutQuart:n=>(n/=.5)<1?.5*n*n*n*n:-.5*((n-=2)*n*n*n-2),easeInQuint:n=>n*n*n*n*n,easeOutQuint:n=>(n-=1)*n*n*n*n+1,easeInOutQuint:n=>(n/=.5)<1?.5*n*n*n*n*n:.5*((n-=2)*n*n*n*n+2),easeInSine:n=>-Math.cos(n*Yt)+1,easeOutSine:n=>Math.sin(n*Yt),easeInOutSine:n=>-.5*(Math.cos(At*n)-1),easeInExpo:n=>n===0?0:Math.pow(2,10*(n-1)),easeOutExpo:n=>n===1?1:-Math.pow(2,-10*n)+1,easeInOutExpo:n=>so(n)?n:n<.5?.5*Math.pow(2,10*(n*2-1)):.5*(-Math.pow(2,-10*(n*2-1))+2),easeInCirc:n=>n>=1?n:-(Math.sqrt(1-n*n)-1),easeOutCirc:n=>Math.sqrt(1-(n-=1)*n),easeInOutCirc:n=>(n/=.5)<1?-.5*(Math.sqrt(1-n*n)-1):.5*(Math.sqrt(1-(n-=2)*n)+1),easeInElastic:n=>so(n)?n:Gd(n,.075,.3),easeOutElastic:n=>so(n)?n:Yd(n,.075,.3),easeInOutElastic(n){return so(n)?n:n<.5?.5*Gd(n*2,.1125,.45):.5+.5*Yd(n*2-1,.1125,.45)},easeInBack(n){return n*n*((1.70158+1)*n-1.70158)},easeOutBack(n){return(n-=1)*n*((1.70158+1)*n+1.70158)+1},easeInOutBack(n){let t=1.70158;return(n/=.5)<1?.5*(n*n*(((t*=1.525)+1)*n-t)):.5*((n-=2)*n*(((t*=1.525)+1)*n+t)+2)},easeInBounce:n=>1-ir.easeOutBounce(1-n),easeOutBounce(n){return n<1/2.75?7.5625*n*n:n<2/2.75?7.5625*(n-=1.5/2.75)*n+.75:n<2.5/2.75?7.5625*(n-=2.25/2.75)*n+.9375:7.5625*(n-=2.625/2.75)*n+.984375},easeInOutBounce:n=>n<.5?ir.easeInBounce(n*2)*.5:ir.easeOutBounce(n*2-1)*.5+.5};function uu(n){if(n&&typeof n=="object"){const t=n.toString();return t==="[object CanvasPattern]"||t==="[object CanvasGradient]"}return!1}function Qd(n){return uu(n)?n:new _r(n)}function pl(n){return uu(n)?n:new _r(n).saturate(.5).darken(.1).hexString()}const rx=["x","y","borderWidth","radius","tension"],ox=["color","borderColor","backgroundColor"];function ax(n){n.set("animation",{delay:void 0,duration:1e3,easing:"easeOutQuart",fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0}),n.describe("animation",{_fallback:!1,_indexable:!1,_scriptable:t=>t!=="onProgress"&&t!=="onComplete"&&t!=="fn"}),n.set("animations",{colors:{type:"color",properties:ox},numbers:{type:"number",properties:rx}}),n.describe("animations",{_fallback:"animation"}),n.set("transitions",{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:"transparent"},visible:{type:"boolean",duration:0}}},hide:{animations:{colors:{to:"transparent"},visible:{type:"boolean",easing:"linear",fn:t=>t|0}}}})}function lx(n){n.set("layout",{autoPadding:!0,padding:{top:0,right:0,bottom:0,left:0}})}const Xd=new Map;function cx(n,t){t=t||{};const e=n+JSON.stringify(t);let i=Xd.get(e);return i||(i=new Intl.NumberFormat(n,t),Xd.set(e,i)),i}function hu(n,t,e){return cx(t,e).format(n)}const ux={values(n){return Gt(n)?n:""+n},numeric(n,t,e){if(n===0)return"0";const i=this.chart.options.locale;let s,r=n;if(e.length>1){const u=Math.max(Math.abs(e[0].value),Math.abs(e[e.length-1].value));(u<1e-4||u>1e15)&&(s="scientific"),r=hx(n,e)}const o=Fm(Math.abs(r)),a=isNaN(o)?1:Math.max(Math.min(-1*Math.floor(o),20),0),l={notation:s,minimumFractionDigits:a,maximumFractionDigits:a};return Object.assign(l,this.options.ticks.format),hu(n,i,l)}};function hx(n,t){let e=t.length>3?t[2].value-t[1].value:t[1].value-t[0].value;return Math.abs(e)>=1&&n!==Math.floor(n)&&(e=n-Math.floor(n)),e}var Km={formatters:ux};function dx(n){n.set("scale",{display:!0,offset:!1,reverse:!1,beginAtZero:!1,bounds:"ticks",clip:!0,grace:0,grid:{display:!0,lineWidth:1,drawOnChartArea:!0,drawTicks:!0,tickLength:8,tickWidth:(t,e)=>e.lineWidth,tickColor:(t,e)=>e.color,offset:!1},border:{display:!0,dash:[],dashOffset:0,width:1},title:{display:!1,text:"",padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:!1,textStrokeWidth:0,textStrokeColor:"",padding:3,display:!0,autoSkip:!0,autoSkipPadding:3,labelOffset:0,callback:Km.formatters.values,minor:{},major:{},align:"center",crossAlign:"near",showLabelBackdrop:!1,backdropColor:"rgba(255, 255, 255, 0.75)",backdropPadding:2}}),n.route("scale.ticks","color","","color"),n.route("scale.grid","color","","borderColor"),n.route("scale.border","color","","borderColor"),n.route("scale.title","color","","color"),n.describe("scale",{_fallback:!1,_scriptable:t=>!t.startsWith("before")&&!t.startsWith("after")&&t!=="callback"&&t!=="parser",_indexable:t=>t!=="borderDash"&&t!=="tickBorderDash"&&t!=="dash"}),n.describe("scales",{_fallback:"scale"}),n.describe("scale.ticks",{_scriptable:t=>t!=="backdropPadding"&&t!=="callback",_indexable:t=>t!=="backdropPadding"})}const xi=Object.create(null),ec=Object.create(null);function sr(n,t){if(!t)return n;const e=t.split(".");for(let i=0,s=e.length;i<s;++i){const r=e[i];n=n[r]||(n[r]=Object.create(null))}return n}function gl(n,t,e){return typeof t=="string"?yr(sr(n,t),e):yr(sr(n,""),t)}class fx{constructor(t,e){this.animation=void 0,this.backgroundColor="rgba(0,0,0,0.1)",this.borderColor="rgba(0,0,0,0.1)",this.color="#666",this.datasets={},this.devicePixelRatio=i=>i.chart.platform.getDevicePixelRatio(),this.elements={},this.events=["mousemove","mouseout","click","touchstart","touchmove"],this.font={family:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",size:12,style:"normal",lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(i,s)=>pl(s.backgroundColor),this.hoverBorderColor=(i,s)=>pl(s.borderColor),this.hoverColor=(i,s)=>pl(s.color),this.indexAxis="x",this.interaction={mode:"nearest",intersect:!0,includeInvisible:!1},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(t),this.apply(e)}set(t,e){return gl(this,t,e)}get(t){return sr(this,t)}describe(t,e){return gl(ec,t,e)}override(t,e){return gl(xi,t,e)}route(t,e,i,s){const r=sr(this,t),o=sr(this,i),a="_"+e;Object.defineProperties(r,{[a]:{value:r[e],writable:!0},[e]:{enumerable:!0,get(){const l=this[a],u=o[s];return ht(l)?Object.assign({},u,l):it(l,u)},set(l){this[a]=l}}})}apply(t){t.forEach(e=>e(this))}}var Bt=new fx({_scriptable:n=>!n.startsWith("on"),_indexable:n=>n!=="events",hover:{_fallback:"interaction"},interaction:{_scriptable:!1,_indexable:!1}},[ax,lx,dx]);function px(n){return!n||_t(n.size)||_t(n.family)?null:(n.style?n.style+" ":"")+(n.weight?n.weight+" ":"")+n.size+"px "+n.family}function Jd(n,t,e,i,s){let r=t[s];return r||(r=t[s]=n.measureText(s).width,e.push(s)),r>i&&(i=r),i}function oi(n,t,e){const i=n.currentDevicePixelRatio,s=e!==0?Math.max(e/2,.5):0;return Math.round((t-s)*i)/i+s}function Zd(n,t){!t&&!n||(t=t||n.getContext("2d"),t.save(),t.resetTransform(),t.clearRect(0,0,n.width,n.height),t.restore())}function nc(n,t,e,i){Gm(n,t,e,i,null)}function Gm(n,t,e,i,s){let r,o,a,l,u,h,d,p;const y=t.pointStyle,S=t.rotation,b=t.radius;let T=(S||0)*qS;if(y&&typeof y=="object"&&(r=y.toString(),r==="[object HTMLImageElement]"||r==="[object HTMLCanvasElement]")){n.save(),n.translate(e,i),n.rotate(T),n.drawImage(y,-y.width/2,-y.height/2,y.width,y.height),n.restore();return}if(!(isNaN(b)||b<=0)){switch(n.beginPath(),y){default:s?n.ellipse(e,i,s/2,b,0,0,Ot):n.arc(e,i,b,0,Ot),n.closePath();break;case"triangle":h=s?s/2:b,n.moveTo(e+Math.sin(T)*h,i-Math.cos(T)*b),T+=Hd,n.lineTo(e+Math.sin(T)*h,i-Math.cos(T)*b),T+=Hd,n.lineTo(e+Math.sin(T)*h,i-Math.cos(T)*b),n.closePath();break;case"rectRounded":u=b*.516,l=b-u,o=Math.cos(T+ri)*l,d=Math.cos(T+ri)*(s?s/2-u:l),a=Math.sin(T+ri)*l,p=Math.sin(T+ri)*(s?s/2-u:l),n.arc(e-d,i-a,u,T-At,T-Yt),n.arc(e+p,i-o,u,T-Yt,T),n.arc(e+d,i+a,u,T,T+Yt),n.arc(e-p,i+o,u,T+Yt,T+At),n.closePath();break;case"rect":if(!S){l=Math.SQRT1_2*b,h=s?s/2:l,n.rect(e-h,i-l,2*h,2*l);break}T+=ri;case"rectRot":d=Math.cos(T)*(s?s/2:b),o=Math.cos(T)*b,a=Math.sin(T)*b,p=Math.sin(T)*(s?s/2:b),n.moveTo(e-d,i-a),n.lineTo(e+p,i-o),n.lineTo(e+d,i+a),n.lineTo(e-p,i+o),n.closePath();break;case"crossRot":T+=ri;case"cross":d=Math.cos(T)*(s?s/2:b),o=Math.cos(T)*b,a=Math.sin(T)*b,p=Math.sin(T)*(s?s/2:b),n.moveTo(e-d,i-a),n.lineTo(e+d,i+a),n.moveTo(e+p,i-o),n.lineTo(e-p,i+o);break;case"star":d=Math.cos(T)*(s?s/2:b),o=Math.cos(T)*b,a=Math.sin(T)*b,p=Math.sin(T)*(s?s/2:b),n.moveTo(e-d,i-a),n.lineTo(e+d,i+a),n.moveTo(e+p,i-o),n.lineTo(e-p,i+o),T+=ri,d=Math.cos(T)*(s?s/2:b),o=Math.cos(T)*b,a=Math.sin(T)*b,p=Math.sin(T)*(s?s/2:b),n.moveTo(e-d,i-a),n.lineTo(e+d,i+a),n.moveTo(e+p,i-o),n.lineTo(e-p,i+o);break;case"line":o=s?s/2:Math.cos(T)*b,a=Math.sin(T)*b,n.moveTo(e-o,i-a),n.lineTo(e+o,i+a);break;case"dash":n.moveTo(e,i),n.lineTo(e+Math.cos(T)*(s?s/2:b),i+Math.sin(T)*b);break;case!1:n.closePath();break}n.fill(),t.borderWidth>0&&n.stroke()}}function Er(n,t,e){return e=e||.5,!t||n&&n.x>t.left-e&&n.x<t.right+e&&n.y>t.top-e&&n.y<t.bottom+e}function Da(n,t){n.save(),n.beginPath(),n.rect(t.left,t.top,t.right-t.left,t.bottom-t.top),n.clip()}function Ma(n){n.restore()}function gx(n,t,e,i,s){if(!t)return n.lineTo(e.x,e.y);if(s==="middle"){const r=(t.x+e.x)/2;n.lineTo(r,t.y),n.lineTo(r,e.y)}else s==="after"!=!!i?n.lineTo(t.x,e.y):n.lineTo(e.x,t.y);n.lineTo(e.x,e.y)}function mx(n,t,e,i){if(!t)return n.lineTo(e.x,e.y);n.bezierCurveTo(i?t.cp1x:t.cp2x,i?t.cp1y:t.cp2y,i?e.cp2x:e.cp1x,i?e.cp2y:e.cp1y,e.x,e.y)}function _x(n,t){t.translation&&n.translate(t.translation[0],t.translation[1]),_t(t.rotation)||n.rotate(t.rotation),t.color&&(n.fillStyle=t.color),t.textAlign&&(n.textAlign=t.textAlign),t.textBaseline&&(n.textBaseline=t.textBaseline)}function yx(n,t,e,i,s){if(s.strikethrough||s.underline){const r=n.measureText(i),o=t-r.actualBoundingBoxLeft,a=t+r.actualBoundingBoxRight,l=e-r.actualBoundingBoxAscent,u=e+r.actualBoundingBoxDescent,h=s.strikethrough?(l+u)/2:u;n.strokeStyle=n.fillStyle,n.beginPath(),n.lineWidth=s.decorationWidth||2,n.moveTo(o,h),n.lineTo(a,h),n.stroke()}}function bx(n,t){const e=n.fillStyle;n.fillStyle=t.color,n.fillRect(t.left,t.top,t.width,t.height),n.fillStyle=e}function ra(n,t,e,i,s,r={}){const o=Gt(t)?t:[t],a=r.strokeWidth>0&&r.strokeColor!=="";let l,u;for(n.save(),n.font=s.string,_x(n,r),l=0;l<o.length;++l)u=o[l],r.backdrop&&bx(n,r.backdrop),a&&(r.strokeColor&&(n.strokeStyle=r.strokeColor),_t(r.strokeWidth)||(n.lineWidth=r.strokeWidth),n.strokeText(u,e,i,r.maxWidth)),n.fillText(u,e,i,r.maxWidth),yx(n,e,i,u,r),i+=Number(s.lineHeight);n.restore()}function oa(n,t){const{x:e,y:i,w:s,h:r,radius:o}=t;n.arc(e+o.topLeft,i+o.topLeft,o.topLeft,1.5*At,At,!0),n.lineTo(e,i+r-o.bottomLeft),n.arc(e+o.bottomLeft,i+r-o.bottomLeft,o.bottomLeft,At,Yt,!0),n.lineTo(e+s-o.bottomRight,i+r),n.arc(e+s-o.bottomRight,i+r-o.bottomRight,o.bottomRight,Yt,0,!0),n.lineTo(e+s,i+o.topRight),n.arc(e+s-o.topRight,i+o.topRight,o.topRight,0,-Yt,!0),n.lineTo(e+o.topLeft,i)}const vx=/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,Ex=/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;function wx(n,t){const e=(""+n).match(vx);if(!e||e[1]==="normal")return t*1.2;switch(n=+e[2],e[3]){case"px":return n;case"%":n/=100;break}return t*n}const Tx=n=>+n||0;function du(n,t){const e={},i=ht(t),s=i?Object.keys(t):t,r=ht(n)?i?o=>it(n[o],n[t[o]]):o=>n[o]:()=>n;for(const o of s)e[o]=Tx(r(o));return e}function Ym(n){return du(n,{top:"y",right:"x",bottom:"y",left:"x"})}function Ji(n){return du(n,["topLeft","topRight","bottomLeft","bottomRight"])}function Fe(n){const t=Ym(n);return t.width=t.left+t.right,t.height=t.top+t.bottom,t}function _e(n,t){n=n||{},t=t||Bt.font;let e=it(n.size,t.size);typeof e=="string"&&(e=parseInt(e,10));let i=it(n.style,t.style);i&&!(""+i).match(Ex)&&(console.warn('Invalid font style specified: "'+i+'"'),i=void 0);const s={family:it(n.family,t.family),lineHeight:wx(it(n.lineHeight,t.lineHeight),e),size:e,style:i,weight:it(n.weight,t.weight),string:""};return s.string=px(s),s}function ro(n,t,e,i){let s,r,o;for(s=0,r=n.length;s<r;++s)if(o=n[s],o!==void 0&&o!==void 0)return o}function Ix(n,t,e){const{min:i,max:s}=n,r=Vm(t,(s-i)/2),o=(a,l)=>e&&a===0?0:a+l;return{min:o(i,-Math.abs(r)),max:o(s,r)}}function Di(n,t){return Object.assign(Object.create(n),t)}function fu(n,t=[""],e,i,s=()=>n[0]){const r=e||n;typeof i>"u"&&(i=Zm("_fallback",n));const o={[Symbol.toStringTag]:"Object",_cacheable:!0,_scopes:n,_rootScopes:r,_fallback:i,_getTarget:s,override:a=>fu([a,...n],t,r,i)};return new Proxy(o,{deleteProperty(a,l){return delete a[l],delete a._keys,delete n[0][l],!0},get(a,l){return Xm(a,l,()=>Dx(l,t,n,a))},getOwnPropertyDescriptor(a,l){return Reflect.getOwnPropertyDescriptor(a._scopes[0],l)},getPrototypeOf(){return Reflect.getPrototypeOf(n[0])},has(a,l){return ef(a).includes(l)},ownKeys(a){return ef(a)},set(a,l,u){const h=a._storage||(a._storage=s());return a[l]=h[l]=u,delete a._keys,!0}})}function ls(n,t,e,i){const s={_cacheable:!1,_proxy:n,_context:t,_subProxy:e,_stack:new Set,_descriptors:Qm(n,i),setContext:r=>ls(n,r,e,i),override:r=>ls(n.override(r),t,e,i)};return new Proxy(s,{deleteProperty(r,o){return delete r[o],delete n[o],!0},get(r,o,a){return Xm(r,o,()=>xx(r,o,a))},getOwnPropertyDescriptor(r,o){return r._descriptors.allKeys?Reflect.has(n,o)?{enumerable:!0,configurable:!0}:void 0:Reflect.getOwnPropertyDescriptor(n,o)},getPrototypeOf(){return Reflect.getPrototypeOf(n)},has(r,o){return Reflect.has(n,o)},ownKeys(){return Reflect.ownKeys(n)},set(r,o,a){return n[o]=a,delete r[o],!0}})}function Qm(n,t={scriptable:!0,indexable:!0}){const{_scriptable:e=t.scriptable,_indexable:i=t.indexable,_allKeys:s=t.allKeys}=n;return{allKeys:s,scriptable:e,indexable:i,isScriptable:Zn(e)?e:()=>e,isIndexable:Zn(i)?i:()=>i}}const Sx=(n,t)=>n?n+lu(t):t,pu=(n,t)=>ht(t)&&n!=="adapters"&&(Object.getPrototypeOf(t)===null||t.constructor===Object);function Xm(n,t,e){if(Object.prototype.hasOwnProperty.call(n,t)||t==="constructor")return n[t];const i=e();return n[t]=i,i}function xx(n,t,e){const{_proxy:i,_context:s,_subProxy:r,_descriptors:o}=n;let a=i[t];return Zn(a)&&o.isScriptable(t)&&(a=Ax(t,a,n,e)),Gt(a)&&a.length&&(a=Px(t,a,n,o.isIndexable)),pu(t,a)&&(a=ls(a,s,r&&r[t],o)),a}function Ax(n,t,e,i){const{_proxy:s,_context:r,_subProxy:o,_stack:a}=e;if(a.has(n))throw new Error("Recursion detected: "+Array.from(a).join("->")+"->"+n);a.add(n);let l=t(r,o||i);return a.delete(n),pu(n,l)&&(l=gu(s._scopes,s,n,l)),l}function Px(n,t,e,i){const{_proxy:s,_context:r,_subProxy:o,_descriptors:a}=e;if(typeof r.index<"u"&&i(n))return t[r.index%t.length];if(ht(t[0])){const l=t,u=s._scopes.filter(h=>h!==l);t=[];for(const h of l){const d=gu(u,s,n,h);t.push(ls(d,r,o&&o[n],a))}}return t}function Jm(n,t,e){return Zn(n)?n(t,e):n}const kx=(n,t)=>n===!0?t:typeof n=="string"?Si(t,n):void 0;function Rx(n,t,e,i,s){for(const r of t){const o=kx(e,r);if(o){n.add(o);const a=Jm(o._fallback,e,s);if(typeof a<"u"&&a!==e&&a!==i)return a}else if(o===!1&&typeof i<"u"&&e!==i)return null}return!1}function gu(n,t,e,i){const s=t._rootScopes,r=Jm(t._fallback,e,i),o=[...n,...s],a=new Set;a.add(i);let l=tf(a,o,e,r||e,i);return l===null||typeof r<"u"&&r!==e&&(l=tf(a,o,r,l,i),l===null)?!1:fu(Array.from(a),[""],s,r,()=>Cx(t,e,i))}function tf(n,t,e,i,s){for(;e;)e=Rx(n,t,e,i,s);return e}function Cx(n,t,e){const i=n._getTarget();t in i||(i[t]={});const s=i[t];return Gt(s)&&ht(e)?e:s||{}}function Dx(n,t,e,i){let s;for(const r of t)if(s=Zm(Sx(r,n),e),typeof s<"u")return pu(n,s)?gu(e,i,n,s):s}function Zm(n,t){for(const e of t){if(!e)continue;const i=e[n];if(typeof i<"u")return i}}function ef(n){let t=n._keys;return t||(t=n._keys=Mx(n._scopes)),t}function Mx(n){const t=new Set;for(const e of n)for(const i of Object.keys(e).filter(s=>!s.startsWith("_")))t.add(i);return Array.from(t)}const Ox=Number.EPSILON||1e-14,cs=(n,t)=>t<n.length&&!n[t].skip&&n[t],t_=n=>n==="x"?"y":"x";function Lx(n,t,e,i){const s=n.skip?t:n,r=t,o=e.skip?t:e,a=tc(r,s),l=tc(o,r);let u=a/(a+l),h=l/(a+l);u=isNaN(u)?0:u,h=isNaN(h)?0:h;const d=i*u,p=i*h;return{previous:{x:r.x-d*(o.x-s.x),y:r.y-d*(o.y-s.y)},next:{x:r.x+p*(o.x-s.x),y:r.y+p*(o.y-s.y)}}}function Vx(n,t,e){const i=n.length;let s,r,o,a,l,u=cs(n,0);for(let h=0;h<i-1;++h)if(l=u,u=cs(n,h+1),!(!l||!u)){if(nr(t[h],0,Ox)){e[h]=e[h+1]=0;continue}s=e[h]/t[h],r=e[h+1]/t[h],a=Math.pow(s,2)+Math.pow(r,2),!(a<=9)&&(o=3/Math.sqrt(a),e[h]=s*o*t[h],e[h+1]=r*o*t[h])}}function Nx(n,t,e="x"){const i=t_(e),s=n.length;let r,o,a,l=cs(n,0);for(let u=0;u<s;++u){if(o=a,a=l,l=cs(n,u+1),!a)continue;const h=a[e],d=a[i];o&&(r=(h-o[e])/3,a[`cp1${e}`]=h-r,a[`cp1${i}`]=d-r*t[u]),l&&(r=(l[e]-h)/3,a[`cp2${e}`]=h+r,a[`cp2${i}`]=d+r*t[u])}}function Fx(n,t="x"){const e=t_(t),i=n.length,s=Array(i).fill(0),r=Array(i);let o,a,l,u=cs(n,0);for(o=0;o<i;++o)if(a=l,l=u,u=cs(n,o+1),!!l){if(u){const h=u[t]-l[t];s[o]=h!==0?(u[e]-l[e])/h:0}r[o]=a?u?Ye(s[o-1])!==Ye(s[o])?0:(s[o-1]+s[o])/2:s[o-1]:s[o]}Vx(n,s,r),Nx(n,r,t)}function oo(n,t,e){return Math.max(Math.min(n,e),t)}function $x(n,t){let e,i,s,r,o,a=Er(n[0],t);for(e=0,i=n.length;e<i;++e)o=r,r=a,a=e<i-1&&Er(n[e+1],t),r&&(s=n[e],o&&(s.cp1x=oo(s.cp1x,t.left,t.right),s.cp1y=oo(s.cp1y,t.top,t.bottom)),a&&(s.cp2x=oo(s.cp2x,t.left,t.right),s.cp2y=oo(s.cp2y,t.top,t.bottom)))}function Ux(n,t,e,i,s){let r,o,a,l;if(t.spanGaps&&(n=n.filter(u=>!u.skip)),t.cubicInterpolationMode==="monotone")Fx(n,s);else{let u=i?n[n.length-1]:n[0];for(r=0,o=n.length;r<o;++r)a=n[r],l=Lx(u,a,n[Math.min(r+1,o-(i?0:1))%o],t.tension),a.cp1x=l.previous.x,a.cp1y=l.previous.y,a.cp2x=l.next.x,a.cp2y=l.next.y,u=a}t.capBezierPoints&&$x(n,e)}function mu(){return typeof window<"u"&&typeof document<"u"}function _u(n){let t=n.parentNode;return t&&t.toString()==="[object ShadowRoot]"&&(t=t.host),t}function aa(n,t,e){let i;return typeof n=="string"?(i=parseInt(n,10),n.indexOf("%")!==-1&&(i=i/100*t.parentNode[e])):i=n,i}const Oa=n=>n.ownerDocument.defaultView.getComputedStyle(n,null);function zx(n,t){return Oa(n).getPropertyValue(t)}const Bx=["top","right","bottom","left"];function _i(n,t,e){const i={};e=e?"-"+e:"";for(let s=0;s<4;s++){const r=Bx[s];i[r]=parseFloat(n[t+"-"+r+e])||0}return i.width=i.left+i.right,i.height=i.top+i.bottom,i}const jx=(n,t,e)=>(n>0||t>0)&&(!e||!e.shadowRoot);function Hx(n,t){const e=n.touches,i=e&&e.length?e[0]:n,{offsetX:s,offsetY:r}=i;let o=!1,a,l;if(jx(s,r,n.target))a=s,l=r;else{const u=t.getBoundingClientRect();a=i.clientX-u.left,l=i.clientY-u.top,o=!0}return{x:a,y:l,box:o}}function ci(n,t){if("native"in n)return n;const{canvas:e,currentDevicePixelRatio:i}=t,s=Oa(e),r=s.boxSizing==="border-box",o=_i(s,"padding"),a=_i(s,"border","width"),{x:l,y:u,box:h}=Hx(n,e),d=o.left+(h&&a.left),p=o.top+(h&&a.top);let{width:y,height:S}=t;return r&&(y-=o.width+a.width,S-=o.height+a.height),{x:Math.round((l-d)/y*e.width/i),y:Math.round((u-p)/S*e.height/i)}}function Wx(n,t,e){let i,s;if(t===void 0||e===void 0){const r=n&&_u(n);if(!r)t=n.clientWidth,e=n.clientHeight;else{const o=r.getBoundingClientRect(),a=Oa(r),l=_i(a,"border","width"),u=_i(a,"padding");t=o.width-u.width-l.width,e=o.height-u.height-l.height,i=aa(a.maxWidth,r,"clientWidth"),s=aa(a.maxHeight,r,"clientHeight")}}return{width:t,height:e,maxWidth:i||sa,maxHeight:s||sa}}const Vn=n=>Math.round(n*10)/10;function qx(n,t,e,i){const s=Oa(n),r=_i(s,"margin"),o=aa(s.maxWidth,n,"clientWidth")||sa,a=aa(s.maxHeight,n,"clientHeight")||sa,l=Wx(n,t,e);let{width:u,height:h}=l;if(s.boxSizing==="content-box"){const p=_i(s,"border","width"),y=_i(s,"padding");u-=y.width+p.width,h-=y.height+p.height}return u=Math.max(0,u-r.width),h=Math.max(0,i?u/i:h-r.height),u=Vn(Math.min(u,o,l.maxWidth)),h=Vn(Math.min(h,a,l.maxHeight)),u&&!h&&(h=Vn(u/2)),(t!==void 0||e!==void 0)&&i&&l.height&&h>l.height&&(h=l.height,u=Vn(Math.floor(h*i))),{width:u,height:h}}function nf(n,t,e){const i=t||1,s=Vn(n.height*i),r=Vn(n.width*i);n.height=Vn(n.height),n.width=Vn(n.width);const o=n.canvas;return o.style&&(e||!o.style.height&&!o.style.width)&&(o.style.height=`${n.height}px`,o.style.width=`${n.width}px`),n.currentDevicePixelRatio!==i||o.height!==s||o.width!==r?(n.currentDevicePixelRatio=i,o.height=s,o.width=r,n.ctx.setTransform(i,0,0,i,0,0),!0):!1}const Kx=(function(){let n=!1;try{const t={get passive(){return n=!0,!1}};mu()&&(window.addEventListener("test",null,t),window.removeEventListener("test",null,t))}catch{}return n})();function sf(n,t){const e=zx(n,t),i=e&&e.match(/^(\d+)(\.\d+)?px$/);return i?+i[1]:void 0}function ui(n,t,e,i){return{x:n.x+e*(t.x-n.x),y:n.y+e*(t.y-n.y)}}function Gx(n,t,e,i){return{x:n.x+e*(t.x-n.x),y:i==="middle"?e<.5?n.y:t.y:i==="after"?e<1?n.y:t.y:e>0?t.y:n.y}}function Yx(n,t,e,i){const s={x:n.cp2x,y:n.cp2y},r={x:t.cp1x,y:t.cp1y},o=ui(n,s,e),a=ui(s,r,e),l=ui(r,t,e),u=ui(o,a,e),h=ui(a,l,e);return ui(u,h,e)}const Qx=function(n,t){return{x(e){return n+n+t-e},setWidth(e){t=e},textAlign(e){return e==="center"?e:e==="right"?"left":"right"},xPlus(e,i){return e-i},leftForLtr(e,i){return e-i}}},Xx=function(){return{x(n){return n},setWidth(n){},textAlign(n){return n},xPlus(n,t){return n+t},leftForLtr(n,t){return n}}};function Zi(n,t,e){return n?Qx(t,e):Xx()}function e_(n,t){let e,i;(t==="ltr"||t==="rtl")&&(e=n.canvas.style,i=[e.getPropertyValue("direction"),e.getPropertyPriority("direction")],e.setProperty("direction",t,"important"),n.prevTextDirection=i)}function n_(n,t){t!==void 0&&(delete n.prevTextDirection,n.canvas.style.setProperty("direction",t[0],t[1]))}function i_(n){return n==="angle"?{between:vr,compare:JS,normalize:Ie}:{between:pn,compare:(t,e)=>t-e,normalize:t=>t}}function rf({start:n,end:t,count:e,loop:i,style:s}){return{start:n%e,end:t%e,loop:i&&(t-n+1)%e===0,style:s}}function Jx(n,t,e){const{property:i,start:s,end:r}=e,{between:o,normalize:a}=i_(i),l=t.length;let{start:u,end:h,loop:d}=n,p,y;if(d){for(u+=l,h+=l,p=0,y=l;p<y&&o(a(t[u%l][i]),s,r);++p)u--,h--;u%=l,h%=l}return h<u&&(h+=l),{start:u,end:h,loop:d,style:n.style}}function s_(n,t,e){if(!e)return[n];const{property:i,start:s,end:r}=e,o=t.length,{compare:a,between:l,normalize:u}=i_(i),{start:h,end:d,loop:p,style:y}=Jx(n,t,e),S=[];let b=!1,T=null,P,k,C;const R=()=>l(s,C,P)&&a(s,C)!==0,M=()=>a(r,P)===0||l(r,C,P),L=()=>b||R(),E=()=>!b||M();for(let g=h,_=h;g<=d;++g)k=t[g%o],!k.skip&&(P=u(k[i]),P!==C&&(b=l(P,s,r),T===null&&L()&&(T=a(P,s)===0?g:_),T!==null&&E()&&(S.push(rf({start:T,end:g,loop:p,count:o,style:y})),T=null),_=g,C=P));return T!==null&&S.push(rf({start:T,end:d,loop:p,count:o,style:y})),S}function r_(n,t){const e=[],i=n.segments;for(let s=0;s<i.length;s++){const r=s_(i[s],n.points,t);r.length&&e.push(...r)}return e}function Zx(n,t,e,i){let s=0,r=t-1;if(e&&!i)for(;s<t&&!n[s].skip;)s++;for(;s<t&&n[s].skip;)s++;for(s%=t,e&&(r+=s);r>s&&n[r%t].skip;)r--;return r%=t,{start:s,end:r}}function tA(n,t,e,i){const s=n.length,r=[];let o=t,a=n[t],l;for(l=t+1;l<=e;++l){const u=n[l%s];u.skip||u.stop?a.skip||(i=!1,r.push({start:t%s,end:(l-1)%s,loop:i}),t=o=u.stop?l:null):(o=l,a.skip&&(t=l)),a=u}return o!==null&&r.push({start:t%s,end:o%s,loop:i}),r}function eA(n,t){const e=n.points,i=n.options.spanGaps,s=e.length;if(!s)return[];const r=!!n._loop,{start:o,end:a}=Zx(e,s,r,i);if(i===!0)return of(n,[{start:o,end:a,loop:r}],e,t);const l=a<o?a+s:a,u=!!n._fullLoop&&o===0&&a===s-1;return of(n,tA(e,o,l,u),e,t)}function of(n,t,e,i){return!i||!i.setContext||!e?t:nA(n,t,e,i)}function nA(n,t,e,i){const s=n._chart.getContext(),r=af(n.options),{_datasetIndex:o,options:{spanGaps:a}}=n,l=e.length,u=[];let h=r,d=t[0].start,p=d;function y(S,b,T,P){const k=a?-1:1;if(S!==b){for(S+=l;e[S%l].skip;)S-=k;for(;e[b%l].skip;)b+=k;S%l!==b%l&&(u.push({start:S%l,end:b%l,loop:T,style:P}),h=P,d=b%l)}}for(const S of t){d=a?d:S.start;let b=e[d%l],T;for(p=d+1;p<=S.end;p++){const P=e[p%l];T=af(i.setContext(Di(s,{type:"segment",p0:b,p1:P,p0DataIndex:(p-1)%l,p1DataIndex:p%l,datasetIndex:o}))),iA(T,h)&&y(d,p-1,S.loop,h),b=P,h=T}d<p-1&&y(d,p-1,S.loop,h)}return u}function af(n){return{backgroundColor:n.backgroundColor,borderCapStyle:n.borderCapStyle,borderDash:n.borderDash,borderDashOffset:n.borderDashOffset,borderJoinStyle:n.borderJoinStyle,borderWidth:n.borderWidth,borderColor:n.borderColor}}function iA(n,t){if(!t)return!1;const e=[],i=function(s,r){return uu(r)?(e.includes(r)||e.push(r),e.indexOf(r)):r};return JSON.stringify(n,i)!==JSON.stringify(t,i)}function ao(n,t,e){return n.options.clip?n[e]:t[e]}function sA(n,t){const{xScale:e,yScale:i}=n;return e&&i?{left:ao(e,t,"left"),right:ao(e,t,"right"),top:ao(i,t,"top"),bottom:ao(i,t,"bottom")}:t}function o_(n,t){const e=t._clip;if(e.disabled)return!1;const i=sA(t,n.chartArea);return{left:e.left===!1?0:i.left-(e.left===!0?0:e.left),right:e.right===!1?n.width:i.right+(e.right===!0?0:e.right),top:e.top===!1?0:i.top-(e.top===!0?0:e.top),bottom:e.bottom===!1?n.height:i.bottom+(e.bottom===!0?0:e.bottom)}}/*!
 * Chart.js v4.5.1
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */class rA{constructor(){this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}_notify(t,e,i,s){const r=e.listeners[s],o=e.duration;r.forEach(a=>a({chart:t,initial:e.initial,numSteps:o,currentStep:Math.min(i-e.start,o)}))}_refresh(){this._request||(this._running=!0,this._request=Bm.call(window,()=>{this._update(),this._request=null,this._running&&this._refresh()}))}_update(t=Date.now()){let e=0;this._charts.forEach((i,s)=>{if(!i.running||!i.items.length)return;const r=i.items;let o=r.length-1,a=!1,l;for(;o>=0;--o)l=r[o],l._active?(l._total>i.duration&&(i.duration=l._total),l.tick(t),a=!0):(r[o]=r[r.length-1],r.pop());a&&(s.draw(),this._notify(s,i,t,"progress")),r.length||(i.running=!1,this._notify(s,i,t,"complete"),i.initial=!1),e+=r.length}),this._lastDate=t,e===0&&(this._running=!1)}_getAnims(t){const e=this._charts;let i=e.get(t);return i||(i={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},e.set(t,i)),i}listen(t,e,i){this._getAnims(t).listeners[e].push(i)}add(t,e){!e||!e.length||this._getAnims(t).items.push(...e)}has(t){return this._getAnims(t).items.length>0}start(t){const e=this._charts.get(t);e&&(e.running=!0,e.start=Date.now(),e.duration=e.items.reduce((i,s)=>Math.max(i,s._duration),0),this._refresh())}running(t){if(!this._running)return!1;const e=this._charts.get(t);return!(!e||!e.running||!e.items.length)}stop(t){const e=this._charts.get(t);if(!e||!e.items.length)return;const i=e.items;let s=i.length-1;for(;s>=0;--s)i[s].cancel();e.items=[],this._notify(t,e,Date.now(),"complete")}remove(t){return this._charts.delete(t)}}var on=new rA;const lf="transparent",oA={boolean(n,t,e){return e>.5?t:n},color(n,t,e){const i=Qd(n||lf),s=i.valid&&Qd(t||lf);return s&&s.valid?s.mix(i,e).hexString():t},number(n,t,e){return n+(t-n)*e}};class aA{constructor(t,e,i,s){const r=e[i];s=ro([t.to,s,r,t.from]);const o=ro([t.from,r,s]);this._active=!0,this._fn=t.fn||oA[t.type||typeof o],this._easing=ir[t.easing]||ir.linear,this._start=Math.floor(Date.now()+(t.delay||0)),this._duration=this._total=Math.floor(t.duration),this._loop=!!t.loop,this._target=e,this._prop=i,this._from=o,this._to=s,this._promises=void 0}active(){return this._active}update(t,e,i){if(this._active){this._notify(!1);const s=this._target[this._prop],r=i-this._start,o=this._duration-r;this._start=i,this._duration=Math.floor(Math.max(o,t.duration)),this._total+=r,this._loop=!!t.loop,this._to=ro([t.to,e,s,t.from]),this._from=ro([t.from,s,e])}}cancel(){this._active&&(this.tick(Date.now()),this._active=!1,this._notify(!1))}tick(t){const e=t-this._start,i=this._duration,s=this._prop,r=this._from,o=this._loop,a=this._to;let l;if(this._active=r!==a&&(o||e<i),!this._active){this._target[s]=a,this._notify(!0);return}if(e<0){this._target[s]=r;return}l=e/i%2,l=o&&l>1?2-l:l,l=this._easing(Math.min(1,Math.max(0,l))),this._target[s]=this._fn(r,a,l)}wait(){const t=this._promises||(this._promises=[]);return new Promise((e,i)=>{t.push({res:e,rej:i})})}_notify(t){const e=t?"res":"rej",i=this._promises||[];for(let s=0;s<i.length;s++)i[s][e]()}}class a_{constructor(t,e){this._chart=t,this._properties=new Map,this.configure(e)}configure(t){if(!ht(t))return;const e=Object.keys(Bt.animation),i=this._properties;Object.getOwnPropertyNames(t).forEach(s=>{const r=t[s];if(!ht(r))return;const o={};for(const a of e)o[a]=r[a];(Gt(r.properties)&&r.properties||[s]).forEach(a=>{(a===s||!i.has(a))&&i.set(a,o)})})}_animateOptions(t,e){const i=e.options,s=cA(t,i);if(!s)return[];const r=this._createAnimations(s,i);return i.$shared&&lA(t.options.$animations,i).then(()=>{t.options=i},()=>{}),r}_createAnimations(t,e){const i=this._properties,s=[],r=t.$animations||(t.$animations={}),o=Object.keys(e),a=Date.now();let l;for(l=o.length-1;l>=0;--l){const u=o[l];if(u.charAt(0)==="$")continue;if(u==="options"){s.push(...this._animateOptions(t,e));continue}const h=e[u];let d=r[u];const p=i.get(u);if(d)if(p&&d.active()){d.update(p,h,a);continue}else d.cancel();if(!p||!p.duration){t[u]=h;continue}r[u]=d=new aA(p,t,u,h),s.push(d)}return s}update(t,e){if(this._properties.size===0){Object.assign(t,e);return}const i=this._createAnimations(t,e);if(i.length)return on.add(this._chart,i),!0}}function lA(n,t){const e=[],i=Object.keys(t);for(let s=0;s<i.length;s++){const r=n[i[s]];r&&r.active()&&e.push(r.wait())}return Promise.all(e)}function cA(n,t){if(!t)return;let e=n.options;if(!e){n.options=t;return}return e.$shared&&(n.options=e=Object.assign({},e,{$shared:!1,$animations:{}})),e}function cf(n,t){const e=n&&n.options||{},i=e.reverse,s=e.min===void 0?t:0,r=e.max===void 0?t:0;return{start:i?r:s,end:i?s:r}}function uA(n,t,e){if(e===!1)return!1;const i=cf(n,e),s=cf(t,e);return{top:s.end,right:i.end,bottom:s.start,left:i.start}}function hA(n){let t,e,i,s;return ht(n)?(t=n.top,e=n.right,i=n.bottom,s=n.left):t=e=i=s=n,{top:t,right:e,bottom:i,left:s,disabled:n===!1}}function l_(n,t){const e=[],i=n._getSortedDatasetMetas(t);let s,r;for(s=0,r=i.length;s<r;++s)e.push(i[s].index);return e}function uf(n,t,e,i={}){const s=n.keys,r=i.mode==="single";let o,a,l,u;if(t===null)return;let h=!1;for(o=0,a=s.length;o<a;++o){if(l=+s[o],l===e){if(h=!0,i.all)continue;break}u=n.values[l],de(u)&&(r||t===0||Ye(t)===Ye(u))&&(t+=u)}return!h&&!i.all?0:t}function dA(n,t){const{iScale:e,vScale:i}=t,s=e.axis==="x"?"x":"y",r=i.axis==="x"?"x":"y",o=Object.keys(n),a=new Array(o.length);let l,u,h;for(l=0,u=o.length;l<u;++l)h=o[l],a[l]={[s]:h,[r]:n[h]};return a}function ml(n,t){const e=n&&n.options.stacked;return e||e===void 0&&t.stack!==void 0}function fA(n,t,e){return`${n.id}.${t.id}.${e.stack||e.type}`}function pA(n){const{min:t,max:e,minDefined:i,maxDefined:s}=n.getUserBounds();return{min:i?t:Number.NEGATIVE_INFINITY,max:s?e:Number.POSITIVE_INFINITY}}function gA(n,t,e){const i=n[t]||(n[t]={});return i[e]||(i[e]={})}function hf(n,t,e,i){for(const s of t.getMatchingVisibleMetas(i).reverse()){const r=n[s.index];if(e&&r>0||!e&&r<0)return s.index}return null}function df(n,t){const{chart:e,_cachedMeta:i}=n,s=e._stacks||(e._stacks={}),{iScale:r,vScale:o,index:a}=i,l=r.axis,u=o.axis,h=fA(r,o,i),d=t.length;let p;for(let y=0;y<d;++y){const S=t[y],{[l]:b,[u]:T}=S,P=S._stacks||(S._stacks={});p=P[u]=gA(s,h,b),p[a]=T,p._top=hf(p,o,!0,i.type),p._bottom=hf(p,o,!1,i.type);const k=p._visualValues||(p._visualValues={});k[a]=T}}function _l(n,t){const e=n.scales;return Object.keys(e).filter(i=>e[i].axis===t).shift()}function mA(n,t){return Di(n,{active:!1,dataset:void 0,datasetIndex:t,index:t,mode:"default",type:"dataset"})}function _A(n,t,e){return Di(n,{active:!1,dataIndex:t,parsed:void 0,raw:void 0,element:e,index:t,mode:"default",type:"data"})}function Os(n,t){const e=n.controller.index,i=n.vScale&&n.vScale.axis;if(i){t=t||n._parsed;for(const s of t){const r=s._stacks;if(!r||r[i]===void 0||r[i][e]===void 0)return;delete r[i][e],r[i]._visualValues!==void 0&&r[i]._visualValues[e]!==void 0&&delete r[i]._visualValues[e]}}}const yl=n=>n==="reset"||n==="none",ff=(n,t)=>t?n:Object.assign({},n),yA=(n,t,e)=>n&&!t.hidden&&t._stacked&&{keys:l_(e,!0),values:null};class qn{constructor(t,e){this.chart=t,this._ctx=t.ctx,this.index=e,this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=!1,this._data=void 0,this._objectData=void 0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=!1,this.supportsDecimation=!1,this.$context=void 0,this._syncList=[],this.datasetElementType=new.target.datasetElementType,this.dataElementType=new.target.dataElementType,this.initialize()}initialize(){const t=this._cachedMeta;this.configure(),this.linkScales(),t._stacked=ml(t.vScale,t),this.addElements(),this.options.fill&&!this.chart.isPluginEnabled("filler")&&console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options")}updateIndex(t){this.index!==t&&Os(this._cachedMeta),this.index=t}linkScales(){const t=this.chart,e=this._cachedMeta,i=this.getDataset(),s=(d,p,y,S)=>d==="x"?p:d==="r"?S:y,r=e.xAxisID=it(i.xAxisID,_l(t,"x")),o=e.yAxisID=it(i.yAxisID,_l(t,"y")),a=e.rAxisID=it(i.rAxisID,_l(t,"r")),l=e.indexAxis,u=e.iAxisID=s(l,r,o,a),h=e.vAxisID=s(l,o,r,a);e.xScale=this.getScaleForId(r),e.yScale=this.getScaleForId(o),e.rScale=this.getScaleForId(a),e.iScale=this.getScaleForId(u),e.vScale=this.getScaleForId(h)}getDataset(){return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(t){return this.chart.scales[t]}_getOtherScale(t){const e=this._cachedMeta;return t===e.iScale?e.vScale:e.iScale}reset(){this._update("reset")}_destroy(){const t=this._cachedMeta;this._data&&Kd(this._data,this),t._stacked&&Os(t)}_dataCheck(){const t=this.getDataset(),e=t.data||(t.data=[]),i=this._data;if(ht(e)){const s=this._cachedMeta;this._data=dA(e,s)}else if(i!==e){if(i){Kd(i,this);const s=this._cachedMeta;Os(s),s._parsed=[]}e&&Object.isExtensible(e)&&nx(e,this),this._syncList=[],this._data=e}}addElements(){const t=this._cachedMeta;this._dataCheck(),this.datasetElementType&&(t.dataset=new this.datasetElementType)}buildOrUpdateElements(t){const e=this._cachedMeta,i=this.getDataset();let s=!1;this._dataCheck();const r=e._stacked;e._stacked=ml(e.vScale,e),e.stack!==i.stack&&(s=!0,Os(e),e.stack=i.stack),this._resyncElements(t),(s||r!==e._stacked)&&(df(this,e._parsed),e._stacked=ml(e.vScale,e))}configure(){const t=this.chart.config,e=t.datasetScopeKeys(this._type),i=t.getOptionScopes(this.getDataset(),e,!0);this.options=t.createResolver(i,this.getContext()),this._parsing=this.options.parsing,this._cachedDataOpts={}}parse(t,e){const{_cachedMeta:i,_data:s}=this,{iScale:r,_stacked:o}=i,a=r.axis;let l=t===0&&e===s.length?!0:i._sorted,u=t>0&&i._parsed[t-1],h,d,p;if(this._parsing===!1)i._parsed=s,i._sorted=!0,p=s;else{Gt(s[t])?p=this.parseArrayData(i,s,t,e):ht(s[t])?p=this.parseObjectData(i,s,t,e):p=this.parsePrimitiveData(i,s,t,e);const y=()=>d[a]===null||u&&d[a]<u[a];for(h=0;h<e;++h)i._parsed[h+t]=d=p[h],l&&(y()&&(l=!1),u=d);i._sorted=l}o&&df(this,p)}parsePrimitiveData(t,e,i,s){const{iScale:r,vScale:o}=t,a=r.axis,l=o.axis,u=r.getLabels(),h=r===o,d=new Array(s);let p,y,S;for(p=0,y=s;p<y;++p)S=p+i,d[p]={[a]:h||r.parse(u[S],S),[l]:o.parse(e[S],S)};return d}parseArrayData(t,e,i,s){const{xScale:r,yScale:o}=t,a=new Array(s);let l,u,h,d;for(l=0,u=s;l<u;++l)h=l+i,d=e[h],a[l]={x:r.parse(d[0],h),y:o.parse(d[1],h)};return a}parseObjectData(t,e,i,s){const{xScale:r,yScale:o}=t,{xAxisKey:a="x",yAxisKey:l="y"}=this._parsing,u=new Array(s);let h,d,p,y;for(h=0,d=s;h<d;++h)p=h+i,y=e[p],u[h]={x:r.parse(Si(y,a),p),y:o.parse(Si(y,l),p)};return u}getParsed(t){return this._cachedMeta._parsed[t]}getDataElement(t){return this._cachedMeta.data[t]}applyStack(t,e,i){const s=this.chart,r=this._cachedMeta,o=e[t.axis],a={keys:l_(s,!0),values:e._stacks[t.axis]._visualValues};return uf(a,o,r.index,{mode:i})}updateRangeFromParsed(t,e,i,s){const r=i[e.axis];let o=r===null?NaN:r;const a=s&&i._stacks[e.axis];s&&a&&(s.values=a,o=uf(s,r,this._cachedMeta.index)),t.min=Math.min(t.min,o),t.max=Math.max(t.max,o)}getMinMax(t,e){const i=this._cachedMeta,s=i._parsed,r=i._sorted&&t===i.iScale,o=s.length,a=this._getOtherScale(t),l=yA(e,i,this.chart),u={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY},{min:h,max:d}=pA(a);let p,y;function S(){y=s[p];const b=y[a.axis];return!de(y[t.axis])||h>b||d<b}for(p=0;p<o&&!(!S()&&(this.updateRangeFromParsed(u,t,y,l),r));++p);if(r){for(p=o-1;p>=0;--p)if(!S()){this.updateRangeFromParsed(u,t,y,l);break}}return u}getAllParsedValues(t){const e=this._cachedMeta._parsed,i=[];let s,r,o;for(s=0,r=e.length;s<r;++s)o=e[s][t.axis],de(o)&&i.push(o);return i}getMaxOverflow(){return!1}getLabelAndValue(t){const e=this._cachedMeta,i=e.iScale,s=e.vScale,r=this.getParsed(t);return{label:i?""+i.getLabelForValue(r[i.axis]):"",value:s?""+s.getLabelForValue(r[s.axis]):""}}_update(t){const e=this._cachedMeta;this.update(t||"default"),e._clip=hA(it(this.options.clip,uA(e.xScale,e.yScale,this.getMaxOverflow())))}update(t){}draw(){const t=this._ctx,e=this.chart,i=this._cachedMeta,s=i.data||[],r=e.chartArea,o=[],a=this._drawStart||0,l=this._drawCount||s.length-a,u=this.options.drawActiveElementsOnTop;let h;for(i.dataset&&i.dataset.draw(t,r,a,l),h=a;h<a+l;++h){const d=s[h];d.hidden||(d.active&&u?o.push(d):d.draw(t,r))}for(h=0;h<o.length;++h)o[h].draw(t,r)}getStyle(t,e){const i=e?"active":"default";return t===void 0&&this._cachedMeta.dataset?this.resolveDatasetElementOptions(i):this.resolveDataElementOptions(t||0,i)}getContext(t,e,i){const s=this.getDataset();let r;if(t>=0&&t<this._cachedMeta.data.length){const o=this._cachedMeta.data[t];r=o.$context||(o.$context=_A(this.getContext(),t,o)),r.parsed=this.getParsed(t),r.raw=s.data[t],r.index=r.dataIndex=t}else r=this.$context||(this.$context=mA(this.chart.getContext(),this.index)),r.dataset=s,r.index=r.datasetIndex=this.index;return r.active=!!e,r.mode=i,r}resolveDatasetElementOptions(t){return this._resolveElementOptions(this.datasetElementType.id,t)}resolveDataElementOptions(t,e){return this._resolveElementOptions(this.dataElementType.id,e,t)}_resolveElementOptions(t,e="default",i){const s=e==="active",r=this._cachedDataOpts,o=t+"-"+e,a=r[o],l=this.enableOptionSharing&&br(i);if(a)return ff(a,l);const u=this.chart.config,h=u.datasetElementScopeKeys(this._type,t),d=s?[`${t}Hover`,"hover",t,""]:[t,""],p=u.getOptionScopes(this.getDataset(),h),y=Object.keys(Bt.elements[t]),S=()=>this.getContext(i,s,e),b=u.resolveNamedOptions(p,y,S,d);return b.$shared&&(b.$shared=l,r[o]=Object.freeze(ff(b,l))),b}_resolveAnimations(t,e,i){const s=this.chart,r=this._cachedDataOpts,o=`animation-${e}`,a=r[o];if(a)return a;let l;if(s.options.animation!==!1){const h=this.chart.config,d=h.datasetAnimationScopeKeys(this._type,e),p=h.getOptionScopes(this.getDataset(),d);l=h.createResolver(p,this.getContext(t,i,e))}const u=new a_(s,l&&l.animations);return l&&l._cacheable&&(r[o]=Object.freeze(u)),u}getSharedOptions(t){if(t.$shared)return this._sharedOptions||(this._sharedOptions=Object.assign({},t))}includeOptions(t,e){return!e||yl(t)||this.chart._animationsDisabled}_getSharedOptions(t,e){const i=this.resolveDataElementOptions(t,e),s=this._sharedOptions,r=this.getSharedOptions(i),o=this.includeOptions(e,r)||r!==s;return this.updateSharedOptions(r,e,i),{sharedOptions:r,includeOptions:o}}updateElement(t,e,i,s){yl(s)?Object.assign(t,i):this._resolveAnimations(e,s).update(t,i)}updateSharedOptions(t,e,i){t&&!yl(e)&&this._resolveAnimations(void 0,e).update(t,i)}_setStyle(t,e,i,s){t.active=s;const r=this.getStyle(e,s);this._resolveAnimations(e,i,s).update(t,{options:!s&&this.getSharedOptions(r)||r})}removeHoverStyle(t,e,i){this._setStyle(t,i,"active",!1)}setHoverStyle(t,e,i){this._setStyle(t,i,"active",!0)}_removeDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!1)}_setDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!0)}_resyncElements(t){const e=this._data,i=this._cachedMeta.data;for(const[a,l,u]of this._syncList)this[a](l,u);this._syncList=[];const s=i.length,r=e.length,o=Math.min(r,s);o&&this.parse(0,o),r>s?this._insertElements(s,r-s,t):r<s&&this._removeElements(r,s-r)}_insertElements(t,e,i=!0){const s=this._cachedMeta,r=s.data,o=t+e;let a;const l=u=>{for(u.length+=e,a=u.length-1;a>=o;a--)u[a]=u[a-e]};for(l(r),a=t;a<o;++a)r[a]=new this.dataElementType;this._parsing&&l(s._parsed),this.parse(t,e),i&&this.updateElements(r,t,e,"reset")}updateElements(t,e,i,s){}_removeElements(t,e){const i=this._cachedMeta;if(this._parsing){const s=i._parsed.splice(t,e);i._stacked&&Os(i,s)}i.data.splice(t,e)}_sync(t){if(this._parsing)this._syncList.push(t);else{const[e,i,s]=t;this[e](i,s)}this.chart._dataChanges.push([this.index,...t])}_onDataPush(){const t=arguments.length;this._sync(["_insertElements",this.getDataset().data.length-t,t])}_onDataPop(){this._sync(["_removeElements",this._cachedMeta.data.length-1,1])}_onDataShift(){this._sync(["_removeElements",0,1])}_onDataSplice(t,e){e&&this._sync(["_removeElements",t,e]);const i=arguments.length-2;i&&this._sync(["_insertElements",t,i])}_onDataUnshift(){this._sync(["_insertElements",0,arguments.length])}}z(qn,"defaults",{}),z(qn,"datasetElementType",null),z(qn,"dataElementType",null);function bA(n,t){if(!n._cache.$bar){const e=n.getMatchingVisibleMetas(t);let i=[];for(let s=0,r=e.length;s<r;s++)i=i.concat(e[s].controller.getAllParsedValues(n));n._cache.$bar=zm(i.sort((s,r)=>s-r))}return n._cache.$bar}function vA(n){const t=n.iScale,e=bA(t,n.type);let i=t._length,s,r,o,a;const l=()=>{o===32767||o===-32768||(br(a)&&(i=Math.min(i,Math.abs(o-a)||i)),a=o)};for(s=0,r=e.length;s<r;++s)o=t.getPixelForValue(e[s]),l();for(a=void 0,s=0,r=t.ticks.length;s<r;++s)o=t.getPixelForTick(s),l();return i}function EA(n,t,e,i){const s=e.barThickness;let r,o;return _t(s)?(r=t.min*e.categoryPercentage,o=e.barPercentage):(r=s*i,o=1),{chunk:r/i,ratio:o,start:t.pixels[n]-r/2}}function wA(n,t,e,i){const s=t.pixels,r=s[n];let o=n>0?s[n-1]:null,a=n<s.length-1?s[n+1]:null;const l=e.categoryPercentage;o===null&&(o=r-(a===null?t.end-t.start:a-r)),a===null&&(a=r+r-o);const u=r-(r-Math.min(o,a))/2*l;return{chunk:Math.abs(a-o)/2*l/i,ratio:e.barPercentage,start:u}}function TA(n,t,e,i){const s=e.parse(n[0],i),r=e.parse(n[1],i),o=Math.min(s,r),a=Math.max(s,r);let l=o,u=a;Math.abs(o)>Math.abs(a)&&(l=a,u=o),t[e.axis]=u,t._custom={barStart:l,barEnd:u,start:s,end:r,min:o,max:a}}function c_(n,t,e,i){return Gt(n)?TA(n,t,e,i):t[e.axis]=e.parse(n,i),t}function pf(n,t,e,i){const s=n.iScale,r=n.vScale,o=s.getLabels(),a=s===r,l=[];let u,h,d,p;for(u=e,h=e+i;u<h;++u)p=t[u],d={},d[s.axis]=a||s.parse(o[u],u),l.push(c_(p,d,r,u));return l}function bl(n){return n&&n.barStart!==void 0&&n.barEnd!==void 0}function IA(n,t,e){return n!==0?Ye(n):(t.isHorizontal()?1:-1)*(t.min>=e?1:-1)}function SA(n){let t,e,i,s,r;return n.horizontal?(t=n.base>n.x,e="left",i="right"):(t=n.base<n.y,e="bottom",i="top"),t?(s="end",r="start"):(s="start",r="end"),{start:e,end:i,reverse:t,top:s,bottom:r}}function xA(n,t,e,i){let s=t.borderSkipped;const r={};if(!s){n.borderSkipped=r;return}if(s===!0){n.borderSkipped={top:!0,right:!0,bottom:!0,left:!0};return}const{start:o,end:a,reverse:l,top:u,bottom:h}=SA(n);s==="middle"&&e&&(n.enableBorderRadius=!0,(e._top||0)===i?s=u:(e._bottom||0)===i?s=h:(r[gf(h,o,a,l)]=!0,s=u)),r[gf(s,o,a,l)]=!0,n.borderSkipped=r}function gf(n,t,e,i){return i?(n=AA(n,t,e),n=mf(n,e,t)):n=mf(n,t,e),n}function AA(n,t,e){return n===t?e:n===e?t:n}function mf(n,t,e){return n==="start"?t:n==="end"?e:n}function PA(n,{inflateAmount:t},e){n.inflateAmount=t==="auto"?e===1?.33:0:t}class Ao extends qn{parsePrimitiveData(t,e,i,s){return pf(t,e,i,s)}parseArrayData(t,e,i,s){return pf(t,e,i,s)}parseObjectData(t,e,i,s){const{iScale:r,vScale:o}=t,{xAxisKey:a="x",yAxisKey:l="y"}=this._parsing,u=r.axis==="x"?a:l,h=o.axis==="x"?a:l,d=[];let p,y,S,b;for(p=i,y=i+s;p<y;++p)b=e[p],S={},S[r.axis]=r.parse(Si(b,u),p),d.push(c_(Si(b,h),S,o,p));return d}updateRangeFromParsed(t,e,i,s){super.updateRangeFromParsed(t,e,i,s);const r=i._custom;r&&e===this._cachedMeta.vScale&&(t.min=Math.min(t.min,r.min),t.max=Math.max(t.max,r.max))}getMaxOverflow(){return 0}getLabelAndValue(t){const e=this._cachedMeta,{iScale:i,vScale:s}=e,r=this.getParsed(t),o=r._custom,a=bl(o)?"["+o.start+", "+o.end+"]":""+s.getLabelForValue(r[s.axis]);return{label:""+i.getLabelForValue(r[i.axis]),value:a}}initialize(){this.enableOptionSharing=!0,super.initialize();const t=this._cachedMeta;t.stack=this.getDataset().stack}update(t){const e=this._cachedMeta;this.updateElements(e.data,0,e.data.length,t)}updateElements(t,e,i,s){const r=s==="reset",{index:o,_cachedMeta:{vScale:a}}=this,l=a.getBasePixel(),u=a.isHorizontal(),h=this._getRuler(),{sharedOptions:d,includeOptions:p}=this._getSharedOptions(e,s);for(let y=e;y<e+i;y++){const S=this.getParsed(y),b=r||_t(S[a.axis])?{base:l,head:l}:this._calculateBarValuePixels(y),T=this._calculateBarIndexPixels(y,h),P=(S._stacks||{})[a.axis],k={horizontal:u,base:b.base,enableBorderRadius:!P||bl(S._custom)||o===P._top||o===P._bottom,x:u?b.head:T.center,y:u?T.center:b.head,height:u?T.size:Math.abs(b.size),width:u?Math.abs(b.size):T.size};p&&(k.options=d||this.resolveDataElementOptions(y,t[y].active?"active":s));const C=k.options||t[y].options;xA(k,C,P,o),PA(k,C,h.ratio),this.updateElement(t[y],y,k,s)}}_getStacks(t,e){const{iScale:i}=this._cachedMeta,s=i.getMatchingVisibleMetas(this._type).filter(h=>h.controller.options.grouped),r=i.options.stacked,o=[],a=this._cachedMeta.controller.getParsed(e),l=a&&a[i.axis],u=h=>{const d=h._parsed.find(y=>y[i.axis]===l),p=d&&d[h.vScale.axis];if(_t(p)||isNaN(p))return!0};for(const h of s)if(!(e!==void 0&&u(h))&&((r===!1||o.indexOf(h.stack)===-1||r===void 0&&h.stack===void 0)&&o.push(h.stack),h.index===t))break;return o.length||o.push(void 0),o}_getStackCount(t){return this._getStacks(void 0,t).length}_getAxisCount(){return this._getAxis().length}getFirstScaleIdForIndexAxis(){const t=this.chart.scales,e=this.chart.options.indexAxis;return Object.keys(t).filter(i=>t[i].axis===e).shift()}_getAxis(){const t={},e=this.getFirstScaleIdForIndexAxis();for(const i of this.chart.data.datasets)t[it(this.chart.options.indexAxis==="x"?i.xAxisID:i.yAxisID,e)]=!0;return Object.keys(t)}_getStackIndex(t,e,i){const s=this._getStacks(t,i),r=e!==void 0?s.indexOf(e):-1;return r===-1?s.length-1:r}_getRuler(){const t=this.options,e=this._cachedMeta,i=e.iScale,s=[];let r,o;for(r=0,o=e.data.length;r<o;++r)s.push(i.getPixelForValue(this.getParsed(r)[i.axis],r));const a=t.barThickness;return{min:a||vA(e),pixels:s,start:i._startPixel,end:i._endPixel,stackCount:this._getStackCount(),scale:i,grouped:t.grouped,ratio:a?1:t.categoryPercentage*t.barPercentage}}_calculateBarValuePixels(t){const{_cachedMeta:{vScale:e,_stacked:i,index:s},options:{base:r,minBarLength:o}}=this,a=r||0,l=this.getParsed(t),u=l._custom,h=bl(u);let d=l[e.axis],p=0,y=i?this.applyStack(e,l,i):d,S,b;y!==d&&(p=y-d,y=d),h&&(d=u.barStart,y=u.barEnd-u.barStart,d!==0&&Ye(d)!==Ye(u.barEnd)&&(p=0),p+=d);const T=!_t(r)&&!h?r:p;let P=e.getPixelForValue(T);if(this.chart.getDataVisibility(t)?S=e.getPixelForValue(p+y):S=P,b=S-P,Math.abs(b)<o){b=IA(b,e,a)*o,d===a&&(P-=b/2);const k=e.getPixelForDecimal(0),C=e.getPixelForDecimal(1),R=Math.min(k,C),M=Math.max(k,C);P=Math.max(Math.min(P,M),R),S=P+b,i&&!h&&(l._stacks[e.axis]._visualValues[s]=e.getValueForPixel(S)-e.getValueForPixel(P))}if(P===e.getPixelForValue(a)){const k=Ye(b)*e.getLineWidthForValue(a)/2;P+=k,b-=k}return{size:b,base:P,head:S,center:S+b/2}}_calculateBarIndexPixels(t,e){const i=e.scale,s=this.options,r=s.skipNull,o=it(s.maxBarThickness,1/0);let a,l;const u=this._getAxisCount();if(e.grouped){const h=r?this._getStackCount(t):e.stackCount,d=s.barThickness==="flex"?wA(t,e,s,h*u):EA(t,e,s,h*u),p=this.chart.options.indexAxis==="x"?this.getDataset().xAxisID:this.getDataset().yAxisID,y=this._getAxis().indexOf(it(p,this.getFirstScaleIdForIndexAxis())),S=this._getStackIndex(this.index,this._cachedMeta.stack,r?t:void 0)+y;a=d.start+d.chunk*S+d.chunk/2,l=Math.min(o,d.chunk*d.ratio)}else a=i.getPixelForValue(this.getParsed(t)[i.axis],t),l=Math.min(o,e.min*e.ratio);return{base:a-l/2,head:a+l/2,center:a,size:l}}draw(){const t=this._cachedMeta,e=t.vScale,i=t.data,s=i.length;let r=0;for(;r<s;++r)this.getParsed(r)[e.axis]!==null&&!i[r].hidden&&i[r].draw(this._ctx)}}z(Ao,"id","bar"),z(Ao,"defaults",{datasetElementType:!1,dataElementType:"bar",categoryPercentage:.8,barPercentage:.9,grouped:!0,animations:{numbers:{type:"number",properties:["x","y","base","width","height"]}}}),z(Ao,"overrides",{scales:{_index_:{type:"category",offset:!0,grid:{offset:!0}},_value_:{type:"linear",beginAtZero:!0}}});function kA(n,t,e){let i=1,s=1,r=0,o=0;if(t<Ot){const a=n,l=a+t,u=Math.cos(a),h=Math.sin(a),d=Math.cos(l),p=Math.sin(l),y=(C,R,M)=>vr(C,a,l,!0)?1:Math.max(R,R*e,M,M*e),S=(C,R,M)=>vr(C,a,l,!0)?-1:Math.min(R,R*e,M,M*e),b=y(0,u,d),T=y(Yt,h,p),P=S(At,u,d),k=S(At+Yt,h,p);i=(b-P)/2,s=(T-k)/2,r=-(b+P)/2,o=-(T+k)/2}return{ratioX:i,ratioY:s,offsetX:r,offsetY:o}}class Hs extends qn{constructor(t,e){super(t,e),this.enableOptionSharing=!0,this.innerRadius=void 0,this.outerRadius=void 0,this.offsetX=void 0,this.offsetY=void 0}linkScales(){}parse(t,e){const i=this.getDataset().data,s=this._cachedMeta;if(this._parsing===!1)s._parsed=i;else{let r=l=>+i[l];if(ht(i[t])){const{key:l="value"}=this._parsing;r=u=>+Si(i[u],l)}let o,a;for(o=t,a=t+e;o<a;++o)s._parsed[o]=r(o)}}_getRotation(){return fn(this.options.rotation-90)}_getCircumference(){return fn(this.options.circumference)}_getRotationExtents(){let t=Ot,e=-Ot;for(let i=0;i<this.chart.data.datasets.length;++i)if(this.chart.isDatasetVisible(i)&&this.chart.getDatasetMeta(i).type===this._type){const s=this.chart.getDatasetMeta(i).controller,r=s._getRotation(),o=s._getCircumference();t=Math.min(t,r),e=Math.max(e,r+o)}return{rotation:t,circumference:e-t}}update(t){const e=this.chart,{chartArea:i}=e,s=this._cachedMeta,r=s.data,o=this.getMaxBorderWidth()+this.getMaxOffset(r)+this.options.spacing,a=Math.max((Math.min(i.width,i.height)-o)/2,0),l=Math.min($S(this.options.cutout,a),1),u=this._getRingWeight(this.index),{circumference:h,rotation:d}=this._getRotationExtents(),{ratioX:p,ratioY:y,offsetX:S,offsetY:b}=kA(d,h,l),T=(i.width-o)/p,P=(i.height-o)/y,k=Math.max(Math.min(T,P)/2,0),C=Vm(this.options.radius,k),R=Math.max(C*l,0),M=(C-R)/this._getVisibleDatasetWeightTotal();this.offsetX=S*C,this.offsetY=b*C,s.total=this.calculateTotal(),this.outerRadius=C-M*this._getRingWeightOffset(this.index),this.innerRadius=Math.max(this.outerRadius-M*u,0),this.updateElements(r,0,r.length,t)}_circumference(t,e){const i=this.options,s=this._cachedMeta,r=this._getCircumference();return e&&i.animation.animateRotate||!this.chart.getDataVisibility(t)||s._parsed[t]===null||s.data[t].hidden?0:this.calculateCircumference(s._parsed[t]*r/Ot)}updateElements(t,e,i,s){const r=s==="reset",o=this.chart,a=o.chartArea,u=o.options.animation,h=(a.left+a.right)/2,d=(a.top+a.bottom)/2,p=r&&u.animateScale,y=p?0:this.innerRadius,S=p?0:this.outerRadius,{sharedOptions:b,includeOptions:T}=this._getSharedOptions(e,s);let P=this._getRotation(),k;for(k=0;k<e;++k)P+=this._circumference(k,r);for(k=e;k<e+i;++k){const C=this._circumference(k,r),R=t[k],M={x:h+this.offsetX,y:d+this.offsetY,startAngle:P,endAngle:P+C,circumference:C,outerRadius:S,innerRadius:y};T&&(M.options=b||this.resolveDataElementOptions(k,R.active?"active":s)),P+=C,this.updateElement(R,k,M,s)}}calculateTotal(){const t=this._cachedMeta,e=t.data;let i=0,s;for(s=0;s<e.length;s++){const r=t._parsed[s];r!==null&&!isNaN(r)&&this.chart.getDataVisibility(s)&&!e[s].hidden&&(i+=Math.abs(r))}return i}calculateCircumference(t){const e=this._cachedMeta.total;return e>0&&!isNaN(t)?Ot*(Math.abs(t)/e):0}getLabelAndValue(t){const e=this._cachedMeta,i=this.chart,s=i.data.labels||[],r=hu(e._parsed[t],i.options.locale);return{label:s[t]||"",value:r}}getMaxBorderWidth(t){let e=0;const i=this.chart;let s,r,o,a,l;if(!t){for(s=0,r=i.data.datasets.length;s<r;++s)if(i.isDatasetVisible(s)){o=i.getDatasetMeta(s),t=o.data,a=o.controller;break}}if(!t)return 0;for(s=0,r=t.length;s<r;++s)l=a.resolveDataElementOptions(s),l.borderAlign!=="inner"&&(e=Math.max(e,l.borderWidth||0,l.hoverBorderWidth||0));return e}getMaxOffset(t){let e=0;for(let i=0,s=t.length;i<s;++i){const r=this.resolveDataElementOptions(i);e=Math.max(e,r.offset||0,r.hoverOffset||0)}return e}_getRingWeightOffset(t){let e=0;for(let i=0;i<t;++i)this.chart.isDatasetVisible(i)&&(e+=this._getRingWeight(i));return e}_getRingWeight(t){return Math.max(it(this.chart.data.datasets[t].weight,1),0)}_getVisibleDatasetWeightTotal(){return this._getRingWeightOffset(this.chart.data.datasets.length)||1}}z(Hs,"id","doughnut"),z(Hs,"defaults",{datasetElementType:!1,dataElementType:"arc",animation:{animateRotate:!0,animateScale:!1},animations:{numbers:{type:"number",properties:["circumference","endAngle","innerRadius","outerRadius","startAngle","x","y","offset","borderWidth","spacing"]}},cutout:"50%",rotation:0,circumference:360,radius:"100%",spacing:0,indexAxis:"r"}),z(Hs,"descriptors",{_scriptable:t=>t!=="spacing",_indexable:t=>t!=="spacing"&&!t.startsWith("borderDash")&&!t.startsWith("hoverBorderDash")}),z(Hs,"overrides",{aspectRatio:1,plugins:{legend:{labels:{generateLabels(t){const e=t.data,{labels:{pointStyle:i,textAlign:s,color:r,useBorderRadius:o,borderRadius:a}}=t.legend.options;return e.labels.length&&e.datasets.length?e.labels.map((l,u)=>{const d=t.getDatasetMeta(0).controller.getStyle(u);return{text:l,fillStyle:d.backgroundColor,fontColor:r,hidden:!t.getDataVisibility(u),lineDash:d.borderDash,lineDashOffset:d.borderDashOffset,lineJoin:d.borderJoinStyle,lineWidth:d.borderWidth,strokeStyle:d.borderColor,textAlign:s,pointStyle:i,borderRadius:o&&(a||d.borderRadius),index:u}}):[]}},onClick(t,e,i){i.chart.toggleDataVisibility(e.index),i.chart.update()}}}});class Po extends qn{initialize(){this.enableOptionSharing=!0,this.supportsDecimation=!0,super.initialize()}update(t){const e=this._cachedMeta,{dataset:i,data:s=[],_dataset:r}=e,o=this.chart._animationsDisabled;let{start:a,count:l}=Wm(e,s,o);this._drawStart=a,this._drawCount=l,qm(e)&&(a=0,l=s.length),i._chart=this.chart,i._datasetIndex=this.index,i._decimated=!!r._decimated,i.points=s;const u=this.resolveDatasetElementOptions(t);this.options.showLine||(u.borderWidth=0),u.segment=this.options.segment,this.updateElement(i,void 0,{animated:!o,options:u},t),this.updateElements(s,a,l,t)}updateElements(t,e,i,s){const r=s==="reset",{iScale:o,vScale:a,_stacked:l,_dataset:u}=this._cachedMeta,{sharedOptions:h,includeOptions:d}=this._getSharedOptions(e,s),p=o.axis,y=a.axis,{spanGaps:S,segment:b}=this.options,T=as(S)?S:Number.POSITIVE_INFINITY,P=this.chart._animationsDisabled||r||s==="none",k=e+i,C=t.length;let R=e>0&&this.getParsed(e-1);for(let M=0;M<C;++M){const L=t[M],E=P?L:{};if(M<e||M>=k){E.skip=!0;continue}const g=this.getParsed(M),_=_t(g[y]),v=E[p]=o.getPixelForValue(g[p],M),I=E[y]=r||_?a.getBasePixel():a.getPixelForValue(l?this.applyStack(a,g,l):g[y],M);E.skip=isNaN(v)||isNaN(I)||_,E.stop=M>0&&Math.abs(g[p]-R[p])>T,b&&(E.parsed=g,E.raw=u.data[M]),d&&(E.options=h||this.resolveDataElementOptions(M,L.active?"active":s)),P||this.updateElement(L,M,E,s),R=g}}getMaxOverflow(){const t=this._cachedMeta,e=t.dataset,i=e.options&&e.options.borderWidth||0,s=t.data||[];if(!s.length)return i;const r=s[0].size(this.resolveDataElementOptions(0)),o=s[s.length-1].size(this.resolveDataElementOptions(s.length-1));return Math.max(i,r,o)/2}draw(){const t=this._cachedMeta;t.dataset.updateControlPoints(this.chart.chartArea,t.iScale.axis),super.draw()}}z(Po,"id","line"),z(Po,"defaults",{datasetElementType:"line",dataElementType:"point",showLine:!0,spanGaps:!1}),z(Po,"overrides",{scales:{_index_:{type:"category"},_value_:{type:"linear"}}});class ko extends qn{getLabelAndValue(t){const e=this._cachedMeta,i=this.chart.data.labels||[],{xScale:s,yScale:r}=e,o=this.getParsed(t),a=s.getLabelForValue(o.x),l=r.getLabelForValue(o.y);return{label:i[t]||"",value:"("+a+", "+l+")"}}update(t){const e=this._cachedMeta,{data:i=[]}=e,s=this.chart._animationsDisabled;let{start:r,count:o}=Wm(e,i,s);if(this._drawStart=r,this._drawCount=o,qm(e)&&(r=0,o=i.length),this.options.showLine){this.datasetElementType||this.addElements();const{dataset:a,_dataset:l}=e;a._chart=this.chart,a._datasetIndex=this.index,a._decimated=!!l._decimated,a.points=i;const u=this.resolveDatasetElementOptions(t);u.segment=this.options.segment,this.updateElement(a,void 0,{animated:!s,options:u},t)}else this.datasetElementType&&(delete e.dataset,this.datasetElementType=!1);this.updateElements(i,r,o,t)}addElements(){const{showLine:t}=this.options;!this.datasetElementType&&t&&(this.datasetElementType=this.chart.registry.getElement("line")),super.addElements()}updateElements(t,e,i,s){const r=s==="reset",{iScale:o,vScale:a,_stacked:l,_dataset:u}=this._cachedMeta,h=this.resolveDataElementOptions(e,s),d=this.getSharedOptions(h),p=this.includeOptions(s,d),y=o.axis,S=a.axis,{spanGaps:b,segment:T}=this.options,P=as(b)?b:Number.POSITIVE_INFINITY,k=this.chart._animationsDisabled||r||s==="none";let C=e>0&&this.getParsed(e-1);for(let R=e;R<e+i;++R){const M=t[R],L=this.getParsed(R),E=k?M:{},g=_t(L[S]),_=E[y]=o.getPixelForValue(L[y],R),v=E[S]=r||g?a.getBasePixel():a.getPixelForValue(l?this.applyStack(a,L,l):L[S],R);E.skip=isNaN(_)||isNaN(v)||g,E.stop=R>0&&Math.abs(L[y]-C[y])>P,T&&(E.parsed=L,E.raw=u.data[R]),p&&(E.options=d||this.resolveDataElementOptions(R,M.active?"active":s)),k||this.updateElement(M,R,E,s),C=L}this.updateSharedOptions(d,s,h)}getMaxOverflow(){const t=this._cachedMeta,e=t.data||[];if(!this.options.showLine){let a=0;for(let l=e.length-1;l>=0;--l)a=Math.max(a,e[l].size(this.resolveDataElementOptions(l))/2);return a>0&&a}const i=t.dataset,s=i.options&&i.options.borderWidth||0;if(!e.length)return s;const r=e[0].size(this.resolveDataElementOptions(0)),o=e[e.length-1].size(this.resolveDataElementOptions(e.length-1));return Math.max(s,r,o)/2}}z(ko,"id","scatter"),z(ko,"defaults",{datasetElementType:!1,dataElementType:"point",showLine:!1,fill:!1}),z(ko,"overrides",{interaction:{mode:"point"},scales:{x:{type:"linear"},y:{type:"linear"}}});function ai(){throw new Error("This method is not implemented: Check that a complete date adapter is provided.")}class yu{constructor(t){z(this,"options");this.options=t||{}}static override(t){Object.assign(yu.prototype,t)}init(){}formats(){return ai()}parse(){return ai()}format(){return ai()}add(){return ai()}diff(){return ai()}startOf(){return ai()}endOf(){return ai()}}var RA={_date:yu};function CA(n,t,e,i){const{controller:s,data:r,_sorted:o}=n,a=s._cachedMeta.iScale,l=n.dataset&&n.dataset.options?n.dataset.options.spanGaps:null;if(a&&t===a.axis&&t!=="r"&&o&&r.length){const u=a._reversePixels?tx:fi;if(i){if(s._sharedOptions){const h=r[0],d=typeof h.getRange=="function"&&h.getRange(t);if(d){const p=u(r,t,e-d),y=u(r,t,e+d);return{lo:p.lo,hi:y.hi}}}}else{const h=u(r,t,e);if(l){const{vScale:d}=s._cachedMeta,{_parsed:p}=n,y=p.slice(0,h.lo+1).reverse().findIndex(b=>!_t(b[d.axis]));h.lo-=Math.max(0,y);const S=p.slice(h.hi).findIndex(b=>!_t(b[d.axis]));h.hi+=Math.max(0,S)}return h}}return{lo:0,hi:r.length-1}}function La(n,t,e,i,s){const r=n.getSortedVisibleDatasetMetas(),o=e[t];for(let a=0,l=r.length;a<l;++a){const{index:u,data:h}=r[a],{lo:d,hi:p}=CA(r[a],t,o,s);for(let y=d;y<=p;++y){const S=h[y];S.skip||i(S,u,y)}}}function DA(n){const t=n.indexOf("x")!==-1,e=n.indexOf("y")!==-1;return function(i,s){const r=t?Math.abs(i.x-s.x):0,o=e?Math.abs(i.y-s.y):0;return Math.sqrt(Math.pow(r,2)+Math.pow(o,2))}}function vl(n,t,e,i,s){const r=[];return!s&&!n.isPointInArea(t)||La(n,e,t,function(a,l,u){!s&&!Er(a,n.chartArea,0)||a.inRange(t.x,t.y,i)&&r.push({element:a,datasetIndex:l,index:u})},!0),r}function MA(n,t,e,i){let s=[];function r(o,a,l){const{startAngle:u,endAngle:h}=o.getProps(["startAngle","endAngle"],i),{angle:d}=$m(o,{x:t.x,y:t.y});vr(d,u,h)&&s.push({element:o,datasetIndex:a,index:l})}return La(n,e,t,r),s}function OA(n,t,e,i,s,r){let o=[];const a=DA(e);let l=Number.POSITIVE_INFINITY;function u(h,d,p){const y=h.inRange(t.x,t.y,s);if(i&&!y)return;const S=h.getCenterPoint(s);if(!(!!r||n.isPointInArea(S))&&!y)return;const T=a(t,S);T<l?(o=[{element:h,datasetIndex:d,index:p}],l=T):T===l&&o.push({element:h,datasetIndex:d,index:p})}return La(n,e,t,u),o}function El(n,t,e,i,s,r){return!r&&!n.isPointInArea(t)?[]:e==="r"&&!i?MA(n,t,e,s):OA(n,t,e,i,s,r)}function _f(n,t,e,i,s){const r=[],o=e==="x"?"inXRange":"inYRange";let a=!1;return La(n,e,t,(l,u,h)=>{l[o]&&l[o](t[e],s)&&(r.push({element:l,datasetIndex:u,index:h}),a=a||l.inRange(t.x,t.y,s))}),i&&!a?[]:r}var LA={modes:{index(n,t,e,i){const s=ci(t,n),r=e.axis||"x",o=e.includeInvisible||!1,a=e.intersect?vl(n,s,r,i,o):El(n,s,r,!1,i,o),l=[];return a.length?(n.getSortedVisibleDatasetMetas().forEach(u=>{const h=a[0].index,d=u.data[h];d&&!d.skip&&l.push({element:d,datasetIndex:u.index,index:h})}),l):[]},dataset(n,t,e,i){const s=ci(t,n),r=e.axis||"xy",o=e.includeInvisible||!1;let a=e.intersect?vl(n,s,r,i,o):El(n,s,r,!1,i,o);if(a.length>0){const l=a[0].datasetIndex,u=n.getDatasetMeta(l).data;a=[];for(let h=0;h<u.length;++h)a.push({element:u[h],datasetIndex:l,index:h})}return a},point(n,t,e,i){const s=ci(t,n),r=e.axis||"xy",o=e.includeInvisible||!1;return vl(n,s,r,i,o)},nearest(n,t,e,i){const s=ci(t,n),r=e.axis||"xy",o=e.includeInvisible||!1;return El(n,s,r,e.intersect,i,o)},x(n,t,e,i){const s=ci(t,n);return _f(n,s,"x",e.intersect,i)},y(n,t,e,i){const s=ci(t,n);return _f(n,s,"y",e.intersect,i)}}};const u_=["left","top","right","bottom"];function Ls(n,t){return n.filter(e=>e.pos===t)}function yf(n,t){return n.filter(e=>u_.indexOf(e.pos)===-1&&e.box.axis===t)}function Vs(n,t){return n.sort((e,i)=>{const s=t?i:e,r=t?e:i;return s.weight===r.weight?s.index-r.index:s.weight-r.weight})}function VA(n){const t=[];let e,i,s,r,o,a;for(e=0,i=(n||[]).length;e<i;++e)s=n[e],{position:r,options:{stack:o,stackWeight:a=1}}=s,t.push({index:e,box:s,pos:r,horizontal:s.isHorizontal(),weight:s.weight,stack:o&&r+o,stackWeight:a});return t}function NA(n){const t={};for(const e of n){const{stack:i,pos:s,stackWeight:r}=e;if(!i||!u_.includes(s))continue;const o=t[i]||(t[i]={count:0,placed:0,weight:0,size:0});o.count++,o.weight+=r}return t}function FA(n,t){const e=NA(n),{vBoxMaxWidth:i,hBoxMaxHeight:s}=t;let r,o,a;for(r=0,o=n.length;r<o;++r){a=n[r];const{fullSize:l}=a.box,u=e[a.stack],h=u&&a.stackWeight/u.weight;a.horizontal?(a.width=h?h*i:l&&t.availableWidth,a.height=s):(a.width=i,a.height=h?h*s:l&&t.availableHeight)}return e}function $A(n){const t=VA(n),e=Vs(t.filter(u=>u.box.fullSize),!0),i=Vs(Ls(t,"left"),!0),s=Vs(Ls(t,"right")),r=Vs(Ls(t,"top"),!0),o=Vs(Ls(t,"bottom")),a=yf(t,"x"),l=yf(t,"y");return{fullSize:e,leftAndTop:i.concat(r),rightAndBottom:s.concat(l).concat(o).concat(a),chartArea:Ls(t,"chartArea"),vertical:i.concat(s).concat(l),horizontal:r.concat(o).concat(a)}}function bf(n,t,e,i){return Math.max(n[e],t[e])+Math.max(n[i],t[i])}function h_(n,t){n.top=Math.max(n.top,t.top),n.left=Math.max(n.left,t.left),n.bottom=Math.max(n.bottom,t.bottom),n.right=Math.max(n.right,t.right)}function UA(n,t,e,i){const{pos:s,box:r}=e,o=n.maxPadding;if(!ht(s)){e.size&&(n[s]-=e.size);const d=i[e.stack]||{size:0,count:1};d.size=Math.max(d.size,e.horizontal?r.height:r.width),e.size=d.size/d.count,n[s]+=e.size}r.getPadding&&h_(o,r.getPadding());const a=Math.max(0,t.outerWidth-bf(o,n,"left","right")),l=Math.max(0,t.outerHeight-bf(o,n,"top","bottom")),u=a!==n.w,h=l!==n.h;return n.w=a,n.h=l,e.horizontal?{same:u,other:h}:{same:h,other:u}}function zA(n){const t=n.maxPadding;function e(i){const s=Math.max(t[i]-n[i],0);return n[i]+=s,s}n.y+=e("top"),n.x+=e("left"),e("right"),e("bottom")}function BA(n,t){const e=t.maxPadding;function i(s){const r={left:0,top:0,right:0,bottom:0};return s.forEach(o=>{r[o]=Math.max(t[o],e[o])}),r}return i(n?["left","right"]:["top","bottom"])}function Ws(n,t,e,i){const s=[];let r,o,a,l,u,h;for(r=0,o=n.length,u=0;r<o;++r){a=n[r],l=a.box,l.update(a.width||t.w,a.height||t.h,BA(a.horizontal,t));const{same:d,other:p}=UA(t,e,a,i);u|=d&&s.length,h=h||p,l.fullSize||s.push(a)}return u&&Ws(s,t,e,i)||h}function lo(n,t,e,i,s){n.top=e,n.left=t,n.right=t+i,n.bottom=e+s,n.width=i,n.height=s}function vf(n,t,e,i){const s=e.padding;let{x:r,y:o}=t;for(const a of n){const l=a.box,u=i[a.stack]||{placed:0,weight:1},h=a.stackWeight/u.weight||1;if(a.horizontal){const d=t.w*h,p=u.size||l.height;br(u.start)&&(o=u.start),l.fullSize?lo(l,s.left,o,e.outerWidth-s.right-s.left,p):lo(l,t.left+u.placed,o,d,p),u.start=o,u.placed+=d,o=l.bottom}else{const d=t.h*h,p=u.size||l.width;br(u.start)&&(r=u.start),l.fullSize?lo(l,r,s.top,p,e.outerHeight-s.bottom-s.top):lo(l,r,t.top+u.placed,p,d),u.start=r,u.placed+=d,r=l.right}}t.x=r,t.y=o}var Nn={addBox(n,t){n.boxes||(n.boxes=[]),t.fullSize=t.fullSize||!1,t.position=t.position||"top",t.weight=t.weight||0,t._layers=t._layers||function(){return[{z:0,draw(e){t.draw(e)}}]},n.boxes.push(t)},removeBox(n,t){const e=n.boxes?n.boxes.indexOf(t):-1;e!==-1&&n.boxes.splice(e,1)},configure(n,t,e){t.fullSize=e.fullSize,t.position=e.position,t.weight=e.weight},update(n,t,e,i){if(!n)return;const s=Fe(n.options.layout.padding),r=Math.max(t-s.width,0),o=Math.max(e-s.height,0),a=$A(n.boxes),l=a.vertical,u=a.horizontal;wt(n.boxes,b=>{typeof b.beforeLayout=="function"&&b.beforeLayout()});const h=l.reduce((b,T)=>T.box.options&&T.box.options.display===!1?b:b+1,0)||1,d=Object.freeze({outerWidth:t,outerHeight:e,padding:s,availableWidth:r,availableHeight:o,vBoxMaxWidth:r/2/h,hBoxMaxHeight:o/2}),p=Object.assign({},s);h_(p,Fe(i));const y=Object.assign({maxPadding:p,w:r,h:o,x:s.left,y:s.top},s),S=FA(l.concat(u),d);Ws(a.fullSize,y,d,S),Ws(l,y,d,S),Ws(u,y,d,S)&&Ws(l,y,d,S),zA(y),vf(a.leftAndTop,y,d,S),y.x+=y.w,y.y+=y.h,vf(a.rightAndBottom,y,d,S),n.chartArea={left:y.left,top:y.top,right:y.left+y.w,bottom:y.top+y.h,height:y.h,width:y.w},wt(a.chartArea,b=>{const T=b.box;Object.assign(T,n.chartArea),T.update(y.w,y.h,{left:0,top:0,right:0,bottom:0})})}};class d_{acquireContext(t,e){}releaseContext(t){return!1}addEventListener(t,e,i){}removeEventListener(t,e,i){}getDevicePixelRatio(){return 1}getMaximumSize(t,e,i,s){return e=Math.max(0,e||t.width),i=i||t.height,{width:e,height:Math.max(0,s?Math.floor(e/s):i)}}isAttached(t){return!0}updateConfig(t){}}class jA extends d_{acquireContext(t){return t&&t.getContext&&t.getContext("2d")||null}updateConfig(t){t.options.animation=!1}}const Ro="$chartjs",HA={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"},Ef=n=>n===null||n==="";function WA(n,t){const e=n.style,i=n.getAttribute("height"),s=n.getAttribute("width");if(n[Ro]={initial:{height:i,width:s,style:{display:e.display,height:e.height,width:e.width}}},e.display=e.display||"block",e.boxSizing=e.boxSizing||"border-box",Ef(s)){const r=sf(n,"width");r!==void 0&&(n.width=r)}if(Ef(i))if(n.style.height==="")n.height=n.width/(t||2);else{const r=sf(n,"height");r!==void 0&&(n.height=r)}return n}const f_=Kx?{passive:!0}:!1;function qA(n,t,e){n&&n.addEventListener(t,e,f_)}function KA(n,t,e){n&&n.canvas&&n.canvas.removeEventListener(t,e,f_)}function GA(n,t){const e=HA[n.type]||n.type,{x:i,y:s}=ci(n,t);return{type:e,chart:t,native:n,x:i!==void 0?i:null,y:s!==void 0?s:null}}function la(n,t){for(const e of n)if(e===t||e.contains(t))return!0}function YA(n,t,e){const i=n.canvas,s=new MutationObserver(r=>{let o=!1;for(const a of r)o=o||la(a.addedNodes,i),o=o&&!la(a.removedNodes,i);o&&e()});return s.observe(document,{childList:!0,subtree:!0}),s}function QA(n,t,e){const i=n.canvas,s=new MutationObserver(r=>{let o=!1;for(const a of r)o=o||la(a.removedNodes,i),o=o&&!la(a.addedNodes,i);o&&e()});return s.observe(document,{childList:!0,subtree:!0}),s}const wr=new Map;let wf=0;function p_(){const n=window.devicePixelRatio;n!==wf&&(wf=n,wr.forEach((t,e)=>{e.currentDevicePixelRatio!==n&&t()}))}function XA(n,t){wr.size||window.addEventListener("resize",p_),wr.set(n,t)}function JA(n){wr.delete(n),wr.size||window.removeEventListener("resize",p_)}function ZA(n,t,e){const i=n.canvas,s=i&&_u(i);if(!s)return;const r=jm((a,l)=>{const u=s.clientWidth;e(a,l),u<s.clientWidth&&e()},window),o=new ResizeObserver(a=>{const l=a[0],u=l.contentRect.width,h=l.contentRect.height;u===0&&h===0||r(u,h)});return o.observe(s),XA(n,r),o}function wl(n,t,e){e&&e.disconnect(),t==="resize"&&JA(n)}function tP(n,t,e){const i=n.canvas,s=jm(r=>{n.ctx!==null&&e(GA(r,n))},n);return qA(i,t,s),s}class eP extends d_{acquireContext(t,e){const i=t&&t.getContext&&t.getContext("2d");return i&&i.canvas===t?(WA(t,e),i):null}releaseContext(t){const e=t.canvas;if(!e[Ro])return!1;const i=e[Ro].initial;["height","width"].forEach(r=>{const o=i[r];_t(o)?e.removeAttribute(r):e.setAttribute(r,o)});const s=i.style||{};return Object.keys(s).forEach(r=>{e.style[r]=s[r]}),e.width=e.width,delete e[Ro],!0}addEventListener(t,e,i){this.removeEventListener(t,e);const s=t.$proxies||(t.$proxies={}),o={attach:YA,detach:QA,resize:ZA}[e]||tP;s[e]=o(t,e,i)}removeEventListener(t,e){const i=t.$proxies||(t.$proxies={}),s=i[e];if(!s)return;({attach:wl,detach:wl,resize:wl}[e]||KA)(t,e,s),i[e]=void 0}getDevicePixelRatio(){return window.devicePixelRatio}getMaximumSize(t,e,i,s){return qx(t,e,i,s)}isAttached(t){const e=t&&_u(t);return!!(e&&e.isConnected)}}function nP(n){return!mu()||typeof OffscreenCanvas<"u"&&n instanceof OffscreenCanvas?jA:eP}class tn{constructor(){z(this,"x");z(this,"y");z(this,"active",!1);z(this,"options");z(this,"$animations")}tooltipPosition(t){const{x:e,y:i}=this.getProps(["x","y"],t);return{x:e,y:i}}hasValue(){return as(this.x)&&as(this.y)}getProps(t,e){const i=this.$animations;if(!e||!i)return this;const s={};return t.forEach(r=>{s[r]=i[r]&&i[r].active()?i[r]._to:this[r]}),s}}z(tn,"defaults",{}),z(tn,"defaultRoutes");function iP(n,t){const e=n.options.ticks,i=sP(n),s=Math.min(e.maxTicksLimit||i,i),r=e.major.enabled?oP(t):[],o=r.length,a=r[0],l=r[o-1],u=[];if(o>s)return aP(t,u,r,o/s),u;const h=rP(r,t,s);if(o>0){let d,p;const y=o>1?Math.round((l-a)/(o-1)):null;for(co(t,u,h,_t(y)?0:a-y,a),d=0,p=o-1;d<p;d++)co(t,u,h,r[d],r[d+1]);return co(t,u,h,l,_t(y)?t.length:l+y),u}return co(t,u,h),u}function sP(n){const t=n.options.offset,e=n._tickSize(),i=n._length/e+(t?0:1),s=n._maxLength/e;return Math.floor(Math.min(i,s))}function rP(n,t,e){const i=lP(n),s=t.length/e;if(!i)return Math.max(s,1);const r=KS(i);for(let o=0,a=r.length-1;o<a;o++){const l=r[o];if(l>s)return l}return Math.max(s,1)}function oP(n){const t=[];let e,i;for(e=0,i=n.length;e<i;e++)n[e].major&&t.push(e);return t}function aP(n,t,e,i){let s=0,r=e[0],o;for(i=Math.ceil(i),o=0;o<n.length;o++)o===r&&(t.push(n[o]),s++,r=e[s*i])}function co(n,t,e,i,s){const r=it(i,0),o=Math.min(it(s,n.length),n.length);let a=0,l,u,h;for(e=Math.ceil(e),s&&(l=s-i,e=l/Math.floor(l/e)),h=r;h<0;)a++,h=Math.round(r+a*e);for(u=Math.max(r,0);u<o;u++)u===h&&(t.push(n[u]),a++,h=Math.round(r+a*e))}function lP(n){const t=n.length;let e,i;if(t<2)return!1;for(i=n[0],e=1;e<t;++e)if(n[e]-n[e-1]!==i)return!1;return i}const cP=n=>n==="left"?"right":n==="right"?"left":n,Tf=(n,t,e)=>t==="top"||t==="left"?n[t]+e:n[t]-e,If=(n,t)=>Math.min(t||n,n);function Sf(n,t){const e=[],i=n.length/t,s=n.length;let r=0;for(;r<s;r+=i)e.push(n[Math.floor(r)]);return e}function uP(n,t,e){const i=n.ticks.length,s=Math.min(t,i-1),r=n._startPixel,o=n._endPixel,a=1e-6;let l=n.getPixelForTick(s),u;if(!(e&&(i===1?u=Math.max(l-r,o-l):t===0?u=(n.getPixelForTick(1)-l)/2:u=(l-n.getPixelForTick(s-1))/2,l+=s<t?u:-u,l<r-a||l>o+a)))return l}function hP(n,t){wt(n,e=>{const i=e.gc,s=i.length/2;let r;if(s>t){for(r=0;r<s;++r)delete e.data[i[r]];i.splice(0,s)}})}function Ns(n){return n.drawTicks?n.tickLength:0}function xf(n,t){if(!n.display)return 0;const e=_e(n.font,t),i=Fe(n.padding);return(Gt(n.text)?n.text.length:1)*e.lineHeight+i.height}function dP(n,t){return Di(n,{scale:t,type:"scale"})}function fP(n,t,e){return Di(n,{tick:e,index:t,type:"tick"})}function pP(n,t,e){let i=Hm(n);return(e&&t!=="right"||!e&&t==="right")&&(i=cP(i)),i}function gP(n,t,e,i){const{top:s,left:r,bottom:o,right:a,chart:l}=n,{chartArea:u,scales:h}=l;let d=0,p,y,S;const b=o-s,T=a-r;if(n.isHorizontal()){if(y=we(i,r,a),ht(e)){const P=Object.keys(e)[0],k=e[P];S=h[P].getPixelForValue(k)+b-t}else e==="center"?S=(u.bottom+u.top)/2+b-t:S=Tf(n,e,t);p=a-r}else{if(ht(e)){const P=Object.keys(e)[0],k=e[P];y=h[P].getPixelForValue(k)-T+t}else e==="center"?y=(u.left+u.right)/2-T+t:y=Tf(n,e,t);S=we(i,o,s),d=e==="left"?-Yt:Yt}return{titleX:y,titleY:S,maxWidth:p,rotation:d}}class _s extends tn{constructor(t){super(),this.id=t.id,this.type=t.type,this.options=void 0,this.ctx=t.ctx,this.chart=t.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void 0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache={},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=!1,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void 0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=!1,this.$context=void 0}init(t){this.options=t.setContext(this.getContext()),this.axis=t.axis,this._userMin=this.parse(t.min),this._userMax=this.parse(t.max),this._suggestedMin=this.parse(t.suggestedMin),this._suggestedMax=this.parse(t.suggestedMax)}parse(t,e){return t}getUserBounds(){let{_userMin:t,_userMax:e,_suggestedMin:i,_suggestedMax:s}=this;return t=ze(t,Number.POSITIVE_INFINITY),e=ze(e,Number.NEGATIVE_INFINITY),i=ze(i,Number.POSITIVE_INFINITY),s=ze(s,Number.NEGATIVE_INFINITY),{min:ze(t,i),max:ze(e,s),minDefined:de(t),maxDefined:de(e)}}getMinMax(t){let{min:e,max:i,minDefined:s,maxDefined:r}=this.getUserBounds(),o;if(s&&r)return{min:e,max:i};const a=this.getMatchingVisibleMetas();for(let l=0,u=a.length;l<u;++l)o=a[l].controller.getMinMax(this,t),s||(e=Math.min(e,o.min)),r||(i=Math.max(i,o.max));return e=r&&e>i?i:e,i=s&&e>i?e:i,{min:ze(e,ze(i,e)),max:ze(i,ze(e,i))}}getPadding(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}}getTicks(){return this.ticks}getLabels(){const t=this.chart.data;return this.options.labels||(this.isHorizontal()?t.xLabels:t.yLabels)||t.labels||[]}getLabelItems(t=this.chart.chartArea){return this._labelItems||(this._labelItems=this._computeLabelItems(t))}beforeLayout(){this._cache={},this._dataLimitsCached=!1}beforeUpdate(){Rt(this.options.beforeUpdate,[this])}update(t,e,i){const{beginAtZero:s,grace:r,ticks:o}=this.options,a=o.sampleSize;this.beforeUpdate(),this.maxWidth=t,this.maxHeight=e,this._margins=i=Object.assign({left:0,right:0,top:0,bottom:0},i),this.ticks=null,this._labelSizes=null,this._gridLineItems=null,this._labelItems=null,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this._maxLength=this.isHorizontal()?this.width+i.left+i.right:this.height+i.top+i.bottom,this._dataLimitsCached||(this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this._range=Ix(this,r,s),this._dataLimitsCached=!0),this.beforeBuildTicks(),this.ticks=this.buildTicks()||[],this.afterBuildTicks();const l=a<this.ticks.length;this._convertTicksToLabels(l?Sf(this.ticks,a):this.ticks),this.configure(),this.beforeCalculateLabelRotation(),this.calculateLabelRotation(),this.afterCalculateLabelRotation(),o.display&&(o.autoSkip||o.source==="auto")&&(this.ticks=iP(this,this.ticks),this._labelSizes=null,this.afterAutoSkip()),l&&this._convertTicksToLabels(this.ticks),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate()}configure(){let t=this.options.reverse,e,i;this.isHorizontal()?(e=this.left,i=this.right):(e=this.top,i=this.bottom,t=!t),this._startPixel=e,this._endPixel=i,this._reversePixels=t,this._length=i-e,this._alignToPixels=this.options.alignToPixels}afterUpdate(){Rt(this.options.afterUpdate,[this])}beforeSetDimensions(){Rt(this.options.beforeSetDimensions,[this])}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0}afterSetDimensions(){Rt(this.options.afterSetDimensions,[this])}_callHooks(t){this.chart.notifyPlugins(t,this.getContext()),Rt(this.options[t],[this])}beforeDataLimits(){this._callHooks("beforeDataLimits")}determineDataLimits(){}afterDataLimits(){this._callHooks("afterDataLimits")}beforeBuildTicks(){this._callHooks("beforeBuildTicks")}buildTicks(){return[]}afterBuildTicks(){this._callHooks("afterBuildTicks")}beforeTickToLabelConversion(){Rt(this.options.beforeTickToLabelConversion,[this])}generateTickLabels(t){const e=this.options.ticks;let i,s,r;for(i=0,s=t.length;i<s;i++)r=t[i],r.label=Rt(e.callback,[r.value,i,t],this)}afterTickToLabelConversion(){Rt(this.options.afterTickToLabelConversion,[this])}beforeCalculateLabelRotation(){Rt(this.options.beforeCalculateLabelRotation,[this])}calculateLabelRotation(){const t=this.options,e=t.ticks,i=If(this.ticks.length,t.ticks.maxTicksLimit),s=e.minRotation||0,r=e.maxRotation;let o=s,a,l,u;if(!this._isVisible()||!e.display||s>=r||i<=1||!this.isHorizontal()){this.labelRotation=s;return}const h=this._getLabelSizes(),d=h.widest.width,p=h.highest.height,y=ue(this.chart.width-d,0,this.maxWidth);a=t.offset?this.maxWidth/i:y/(i-1),d+6>a&&(a=y/(i-(t.offset?.5:1)),l=this.maxHeight-Ns(t.grid)-e.padding-xf(t.title,this.chart.options.font),u=Math.sqrt(d*d+p*p),o=XS(Math.min(Math.asin(ue((h.highest.height+6)/a,-1,1)),Math.asin(ue(l/u,-1,1))-Math.asin(ue(p/u,-1,1)))),o=Math.max(s,Math.min(r,o))),this.labelRotation=o}afterCalculateLabelRotation(){Rt(this.options.afterCalculateLabelRotation,[this])}afterAutoSkip(){}beforeFit(){Rt(this.options.beforeFit,[this])}fit(){const t={width:0,height:0},{chart:e,options:{ticks:i,title:s,grid:r}}=this,o=this._isVisible(),a=this.isHorizontal();if(o){const l=xf(s,e.options.font);if(a?(t.width=this.maxWidth,t.height=Ns(r)+l):(t.height=this.maxHeight,t.width=Ns(r)+l),i.display&&this.ticks.length){const{first:u,last:h,widest:d,highest:p}=this._getLabelSizes(),y=i.padding*2,S=fn(this.labelRotation),b=Math.cos(S),T=Math.sin(S);if(a){const P=i.mirror?0:T*d.width+b*p.height;t.height=Math.min(this.maxHeight,t.height+P+y)}else{const P=i.mirror?0:b*d.width+T*p.height;t.width=Math.min(this.maxWidth,t.width+P+y)}this._calculatePadding(u,h,T,b)}}this._handleMargins(),a?(this.width=this._length=e.width-this._margins.left-this._margins.right,this.height=t.height):(this.width=t.width,this.height=this._length=e.height-this._margins.top-this._margins.bottom)}_calculatePadding(t,e,i,s){const{ticks:{align:r,padding:o},position:a}=this.options,l=this.labelRotation!==0,u=a!=="top"&&this.axis==="x";if(this.isHorizontal()){const h=this.getPixelForTick(0)-this.left,d=this.right-this.getPixelForTick(this.ticks.length-1);let p=0,y=0;l?u?(p=s*t.width,y=i*e.height):(p=i*t.height,y=s*e.width):r==="start"?y=e.width:r==="end"?p=t.width:r!=="inner"&&(p=t.width/2,y=e.width/2),this.paddingLeft=Math.max((p-h+o)*this.width/(this.width-h),0),this.paddingRight=Math.max((y-d+o)*this.width/(this.width-d),0)}else{let h=e.height/2,d=t.height/2;r==="start"?(h=0,d=t.height):r==="end"&&(h=e.height,d=0),this.paddingTop=h+o,this.paddingBottom=d+o}}_handleMargins(){this._margins&&(this._margins.left=Math.max(this.paddingLeft,this._margins.left),this._margins.top=Math.max(this.paddingTop,this._margins.top),this._margins.right=Math.max(this.paddingRight,this._margins.right),this._margins.bottom=Math.max(this.paddingBottom,this._margins.bottom))}afterFit(){Rt(this.options.afterFit,[this])}isHorizontal(){const{axis:t,position:e}=this.options;return e==="top"||e==="bottom"||t==="x"}isFullSize(){return this.options.fullSize}_convertTicksToLabels(t){this.beforeTickToLabelConversion(),this.generateTickLabels(t);let e,i;for(e=0,i=t.length;e<i;e++)_t(t[e].label)&&(t.splice(e,1),i--,e--);this.afterTickToLabelConversion()}_getLabelSizes(){let t=this._labelSizes;if(!t){const e=this.options.ticks.sampleSize;let i=this.ticks;e<i.length&&(i=Sf(i,e)),this._labelSizes=t=this._computeLabelSizes(i,i.length,this.options.ticks.maxTicksLimit)}return t}_computeLabelSizes(t,e,i){const{ctx:s,_longestTextCache:r}=this,o=[],a=[],l=Math.floor(e/If(e,i));let u=0,h=0,d,p,y,S,b,T,P,k,C,R,M;for(d=0;d<e;d+=l){if(S=t[d].label,b=this._resolveTickFontOptions(d),s.font=T=b.string,P=r[T]=r[T]||{data:{},gc:[]},k=b.lineHeight,C=R=0,!_t(S)&&!Gt(S))C=Jd(s,P.data,P.gc,C,S),R=k;else if(Gt(S))for(p=0,y=S.length;p<y;++p)M=S[p],!_t(M)&&!Gt(M)&&(C=Jd(s,P.data,P.gc,C,M),R+=k);o.push(C),a.push(R),u=Math.max(C,u),h=Math.max(R,h)}hP(r,e);const L=o.indexOf(u),E=a.indexOf(h),g=_=>({width:o[_]||0,height:a[_]||0});return{first:g(0),last:g(e-1),widest:g(L),highest:g(E),widths:o,heights:a}}getLabelForValue(t){return t}getPixelForValue(t,e){return NaN}getValueForPixel(t){}getPixelForTick(t){const e=this.ticks;return t<0||t>e.length-1?null:this.getPixelForValue(e[t].value)}getPixelForDecimal(t){this._reversePixels&&(t=1-t);const e=this._startPixel+t*this._length;return ZS(this._alignToPixels?oi(this.chart,e,0):e)}getDecimalForPixel(t){const e=(t-this._startPixel)/this._length;return this._reversePixels?1-e:e}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue(){const{min:t,max:e}=this;return t<0&&e<0?e:t>0&&e>0?t:0}getContext(t){const e=this.ticks||[];if(t>=0&&t<e.length){const i=e[t];return i.$context||(i.$context=fP(this.getContext(),t,i))}return this.$context||(this.$context=dP(this.chart.getContext(),this))}_tickSize(){const t=this.options.ticks,e=fn(this.labelRotation),i=Math.abs(Math.cos(e)),s=Math.abs(Math.sin(e)),r=this._getLabelSizes(),o=t.autoSkipPadding||0,a=r?r.widest.width+o:0,l=r?r.highest.height+o:0;return this.isHorizontal()?l*i>a*s?a/i:l/s:l*s<a*i?l/i:a/s}_isVisible(){const t=this.options.display;return t!=="auto"?!!t:this.getMatchingVisibleMetas().length>0}_computeGridLineItems(t){const e=this.axis,i=this.chart,s=this.options,{grid:r,position:o,border:a}=s,l=r.offset,u=this.isHorizontal(),d=this.ticks.length+(l?1:0),p=Ns(r),y=[],S=a.setContext(this.getContext()),b=S.display?S.width:0,T=b/2,P=function(st){return oi(i,st,b)};let k,C,R,M,L,E,g,_,v,I,A,x;if(o==="top")k=P(this.bottom),E=this.bottom-p,_=k-T,I=P(t.top)+T,x=t.bottom;else if(o==="bottom")k=P(this.top),I=t.top,x=P(t.bottom)-T,E=k+T,_=this.top+p;else if(o==="left")k=P(this.right),L=this.right-p,g=k-T,v=P(t.left)+T,A=t.right;else if(o==="right")k=P(this.left),v=t.left,A=P(t.right)-T,L=k+T,g=this.left+p;else if(e==="x"){if(o==="center")k=P((t.top+t.bottom)/2+.5);else if(ht(o)){const st=Object.keys(o)[0],j=o[st];k=P(this.chart.scales[st].getPixelForValue(j))}I=t.top,x=t.bottom,E=k+T,_=E+p}else if(e==="y"){if(o==="center")k=P((t.left+t.right)/2);else if(ht(o)){const st=Object.keys(o)[0],j=o[st];k=P(this.chart.scales[st].getPixelForValue(j))}L=k-T,g=L-p,v=t.left,A=t.right}const G=it(s.ticks.maxTicksLimit,d),q=Math.max(1,Math.ceil(d/G));for(C=0;C<d;C+=q){const st=this.getContext(C),j=r.setContext(st),rt=a.setContext(st),U=j.lineWidth,Pt=j.color,Y=rt.dash||[],X=rt.dashOffset,B=j.tickWidth,mt=j.tickColor,yt=j.tickBorderDash||[],Et=j.tickBorderDashOffset;R=uP(this,C,l),R!==void 0&&(M=oi(i,R,U),u?L=g=v=A=M:E=_=I=x=M,y.push({tx1:L,ty1:E,tx2:g,ty2:_,x1:v,y1:I,x2:A,y2:x,width:U,color:Pt,borderDash:Y,borderDashOffset:X,tickWidth:B,tickColor:mt,tickBorderDash:yt,tickBorderDashOffset:Et}))}return this._ticksLength=d,this._borderValue=k,y}_computeLabelItems(t){const e=this.axis,i=this.options,{position:s,ticks:r}=i,o=this.isHorizontal(),a=this.ticks,{align:l,crossAlign:u,padding:h,mirror:d}=r,p=Ns(i.grid),y=p+h,S=d?-h:y,b=-fn(this.labelRotation),T=[];let P,k,C,R,M,L,E,g,_,v,I,A,x="middle";if(s==="top")L=this.bottom-S,E=this._getXAxisLabelAlignment();else if(s==="bottom")L=this.top+S,E=this._getXAxisLabelAlignment();else if(s==="left"){const q=this._getYAxisLabelAlignment(p);E=q.textAlign,M=q.x}else if(s==="right"){const q=this._getYAxisLabelAlignment(p);E=q.textAlign,M=q.x}else if(e==="x"){if(s==="center")L=(t.top+t.bottom)/2+y;else if(ht(s)){const q=Object.keys(s)[0],st=s[q];L=this.chart.scales[q].getPixelForValue(st)+y}E=this._getXAxisLabelAlignment()}else if(e==="y"){if(s==="center")M=(t.left+t.right)/2-y;else if(ht(s)){const q=Object.keys(s)[0],st=s[q];M=this.chart.scales[q].getPixelForValue(st)}E=this._getYAxisLabelAlignment(p).textAlign}e==="y"&&(l==="start"?x="top":l==="end"&&(x="bottom"));const G=this._getLabelSizes();for(P=0,k=a.length;P<k;++P){C=a[P],R=C.label;const q=r.setContext(this.getContext(P));g=this.getPixelForTick(P)+r.labelOffset,_=this._resolveTickFontOptions(P),v=_.lineHeight,I=Gt(R)?R.length:1;const st=I/2,j=q.color,rt=q.textStrokeColor,U=q.textStrokeWidth;let Pt=E;o?(M=g,E==="inner"&&(P===k-1?Pt=this.options.reverse?"left":"right":P===0?Pt=this.options.reverse?"right":"left":Pt="center"),s==="top"?u==="near"||b!==0?A=-I*v+v/2:u==="center"?A=-G.highest.height/2-st*v+v:A=-G.highest.height+v/2:u==="near"||b!==0?A=v/2:u==="center"?A=G.highest.height/2-st*v:A=G.highest.height-I*v,d&&(A*=-1),b!==0&&!q.showLabelBackdrop&&(M+=v/2*Math.sin(b))):(L=g,A=(1-I)*v/2);let Y;if(q.showLabelBackdrop){const X=Fe(q.backdropPadding),B=G.heights[P],mt=G.widths[P];let yt=A-X.top,Et=0-X.left;switch(x){case"middle":yt-=B/2;break;case"bottom":yt-=B;break}switch(E){case"center":Et-=mt/2;break;case"right":Et-=mt;break;case"inner":P===k-1?Et-=mt:P>0&&(Et-=mt/2);break}Y={left:Et,top:yt,width:mt+X.width,height:B+X.height,color:q.backdropColor}}T.push({label:R,font:_,textOffset:A,options:{rotation:b,color:j,strokeColor:rt,strokeWidth:U,textAlign:Pt,textBaseline:x,translation:[M,L],backdrop:Y}})}return T}_getXAxisLabelAlignment(){const{position:t,ticks:e}=this.options;if(-fn(this.labelRotation))return t==="top"?"left":"right";let s="center";return e.align==="start"?s="left":e.align==="end"?s="right":e.align==="inner"&&(s="inner"),s}_getYAxisLabelAlignment(t){const{position:e,ticks:{crossAlign:i,mirror:s,padding:r}}=this.options,o=this._getLabelSizes(),a=t+r,l=o.widest.width;let u,h;return e==="left"?s?(h=this.right+r,i==="near"?u="left":i==="center"?(u="center",h+=l/2):(u="right",h+=l)):(h=this.right-a,i==="near"?u="right":i==="center"?(u="center",h-=l/2):(u="left",h=this.left)):e==="right"?s?(h=this.left+r,i==="near"?u="right":i==="center"?(u="center",h-=l/2):(u="left",h-=l)):(h=this.left+a,i==="near"?u="left":i==="center"?(u="center",h+=l/2):(u="right",h=this.right)):u="right",{textAlign:u,x:h}}_computeLabelArea(){if(this.options.ticks.mirror)return;const t=this.chart,e=this.options.position;if(e==="left"||e==="right")return{top:0,left:this.left,bottom:t.height,right:this.right};if(e==="top"||e==="bottom")return{top:this.top,left:0,bottom:this.bottom,right:t.width}}drawBackground(){const{ctx:t,options:{backgroundColor:e},left:i,top:s,width:r,height:o}=this;e&&(t.save(),t.fillStyle=e,t.fillRect(i,s,r,o),t.restore())}getLineWidthForValue(t){const e=this.options.grid;if(!this._isVisible()||!e.display)return 0;const s=this.ticks.findIndex(r=>r.value===t);return s>=0?e.setContext(this.getContext(s)).lineWidth:0}drawGrid(t){const e=this.options.grid,i=this.ctx,s=this._gridLineItems||(this._gridLineItems=this._computeGridLineItems(t));let r,o;const a=(l,u,h)=>{!h.width||!h.color||(i.save(),i.lineWidth=h.width,i.strokeStyle=h.color,i.setLineDash(h.borderDash||[]),i.lineDashOffset=h.borderDashOffset,i.beginPath(),i.moveTo(l.x,l.y),i.lineTo(u.x,u.y),i.stroke(),i.restore())};if(e.display)for(r=0,o=s.length;r<o;++r){const l=s[r];e.drawOnChartArea&&a({x:l.x1,y:l.y1},{x:l.x2,y:l.y2},l),e.drawTicks&&a({x:l.tx1,y:l.ty1},{x:l.tx2,y:l.ty2},{color:l.tickColor,width:l.tickWidth,borderDash:l.tickBorderDash,borderDashOffset:l.tickBorderDashOffset})}}drawBorder(){const{chart:t,ctx:e,options:{border:i,grid:s}}=this,r=i.setContext(this.getContext()),o=i.display?r.width:0;if(!o)return;const a=s.setContext(this.getContext(0)).lineWidth,l=this._borderValue;let u,h,d,p;this.isHorizontal()?(u=oi(t,this.left,o)-o/2,h=oi(t,this.right,a)+a/2,d=p=l):(d=oi(t,this.top,o)-o/2,p=oi(t,this.bottom,a)+a/2,u=h=l),e.save(),e.lineWidth=r.width,e.strokeStyle=r.color,e.beginPath(),e.moveTo(u,d),e.lineTo(h,p),e.stroke(),e.restore()}drawLabels(t){if(!this.options.ticks.display)return;const i=this.ctx,s=this._computeLabelArea();s&&Da(i,s);const r=this.getLabelItems(t);for(const o of r){const a=o.options,l=o.font,u=o.label,h=o.textOffset;ra(i,u,0,h,l,a)}s&&Ma(i)}drawTitle(){const{ctx:t,options:{position:e,title:i,reverse:s}}=this;if(!i.display)return;const r=_e(i.font),o=Fe(i.padding),a=i.align;let l=r.lineHeight/2;e==="bottom"||e==="center"||ht(e)?(l+=o.bottom,Gt(i.text)&&(l+=r.lineHeight*(i.text.length-1))):l+=o.top;const{titleX:u,titleY:h,maxWidth:d,rotation:p}=gP(this,l,e,a);ra(t,i.text,0,0,r,{color:i.color,maxWidth:d,rotation:p,textAlign:pP(a,e,s),textBaseline:"middle",translation:[u,h]})}draw(t){this._isVisible()&&(this.drawBackground(),this.drawGrid(t),this.drawBorder(),this.drawTitle(),this.drawLabels(t))}_layers(){const t=this.options,e=t.ticks&&t.ticks.z||0,i=it(t.grid&&t.grid.z,-1),s=it(t.border&&t.border.z,0);return!this._isVisible()||this.draw!==_s.prototype.draw?[{z:e,draw:r=>{this.draw(r)}}]:[{z:i,draw:r=>{this.drawBackground(),this.drawGrid(r),this.drawTitle()}},{z:s,draw:()=>{this.drawBorder()}},{z:e,draw:r=>{this.drawLabels(r)}}]}getMatchingVisibleMetas(t){const e=this.chart.getSortedVisibleDatasetMetas(),i=this.axis+"AxisID",s=[];let r,o;for(r=0,o=e.length;r<o;++r){const a=e[r];a[i]===this.id&&(!t||a.type===t)&&s.push(a)}return s}_resolveTickFontOptions(t){const e=this.options.ticks.setContext(this.getContext(t));return _e(e.font)}_maxDigits(){const t=this._resolveTickFontOptions(0).lineHeight;return(this.isHorizontal()?this.width:this.height)/t}}class uo{constructor(t,e,i){this.type=t,this.scope=e,this.override=i,this.items=Object.create(null)}isForType(t){return Object.prototype.isPrototypeOf.call(this.type.prototype,t.prototype)}register(t){const e=Object.getPrototypeOf(t);let i;yP(e)&&(i=this.register(e));const s=this.items,r=t.id,o=this.scope+"."+r;if(!r)throw new Error("class does not have id: "+t);return r in s||(s[r]=t,mP(t,o,i),this.override&&Bt.override(t.id,t.overrides)),o}get(t){return this.items[t]}unregister(t){const e=this.items,i=t.id,s=this.scope;i in e&&delete e[i],s&&i in Bt[s]&&(delete Bt[s][i],this.override&&delete xi[i])}}function mP(n,t,e){const i=yr(Object.create(null),[e?Bt.get(e):{},Bt.get(t),n.defaults]);Bt.set(t,i),n.defaultRoutes&&_P(t,n.defaultRoutes),n.descriptors&&Bt.describe(t,n.descriptors)}function _P(n,t){Object.keys(t).forEach(e=>{const i=e.split("."),s=i.pop(),r=[n].concat(i).join("."),o=t[e].split("."),a=o.pop(),l=o.join(".");Bt.route(r,s,l,a)})}function yP(n){return"id"in n&&"defaults"in n}class bP{constructor(){this.controllers=new uo(qn,"datasets",!0),this.elements=new uo(tn,"elements"),this.plugins=new uo(Object,"plugins"),this.scales=new uo(_s,"scales"),this._typedRegistries=[this.controllers,this.scales,this.elements]}add(...t){this._each("register",t)}remove(...t){this._each("unregister",t)}addControllers(...t){this._each("register",t,this.controllers)}addElements(...t){this._each("register",t,this.elements)}addPlugins(...t){this._each("register",t,this.plugins)}addScales(...t){this._each("register",t,this.scales)}getController(t){return this._get(t,this.controllers,"controller")}getElement(t){return this._get(t,this.elements,"element")}getPlugin(t){return this._get(t,this.plugins,"plugin")}getScale(t){return this._get(t,this.scales,"scale")}removeControllers(...t){this._each("unregister",t,this.controllers)}removeElements(...t){this._each("unregister",t,this.elements)}removePlugins(...t){this._each("unregister",t,this.plugins)}removeScales(...t){this._each("unregister",t,this.scales)}_each(t,e,i){[...e].forEach(s=>{const r=i||this._getRegistryForType(s);i||r.isForType(s)||r===this.plugins&&s.id?this._exec(t,r,s):wt(s,o=>{const a=i||this._getRegistryForType(o);this._exec(t,a,o)})})}_exec(t,e,i){const s=lu(t);Rt(i["before"+s],[],i),e[t](i),Rt(i["after"+s],[],i)}_getRegistryForType(t){for(let e=0;e<this._typedRegistries.length;e++){const i=this._typedRegistries[e];if(i.isForType(t))return i}return this.plugins}_get(t,e,i){const s=e.get(t);if(s===void 0)throw new Error('"'+t+'" is not a registered '+i+".");return s}}var je=new bP;class vP{constructor(){this._init=void 0}notify(t,e,i,s){if(e==="beforeInit"&&(this._init=this._createDescriptors(t,!0),this._notify(this._init,t,"install")),this._init===void 0)return;const r=s?this._descriptors(t).filter(s):this._descriptors(t),o=this._notify(r,t,e,i);return e==="afterDestroy"&&(this._notify(r,t,"stop"),this._notify(this._init,t,"uninstall"),this._init=void 0),o}_notify(t,e,i,s){s=s||{};for(const r of t){const o=r.plugin,a=o[i],l=[e,s,r.options];if(Rt(a,l,o)===!1&&s.cancelable)return!1}return!0}invalidate(){_t(this._cache)||(this._oldCache=this._cache,this._cache=void 0)}_descriptors(t){if(this._cache)return this._cache;const e=this._cache=this._createDescriptors(t);return this._notifyStateChanges(t),e}_createDescriptors(t,e){const i=t&&t.config,s=it(i.options&&i.options.plugins,{}),r=EP(i);return s===!1&&!e?[]:TP(t,r,s,e)}_notifyStateChanges(t){const e=this._oldCache||[],i=this._cache,s=(r,o)=>r.filter(a=>!o.some(l=>a.plugin.id===l.plugin.id));this._notify(s(e,i),t,"stop"),this._notify(s(i,e),t,"start")}}function EP(n){const t={},e=[],i=Object.keys(je.plugins.items);for(let r=0;r<i.length;r++)e.push(je.getPlugin(i[r]));const s=n.plugins||[];for(let r=0;r<s.length;r++){const o=s[r];e.indexOf(o)===-1&&(e.push(o),t[o.id]=!0)}return{plugins:e,localIds:t}}function wP(n,t){return!t&&n===!1?null:n===!0?{}:n}function TP(n,{plugins:t,localIds:e},i,s){const r=[],o=n.getContext();for(const a of t){const l=a.id,u=wP(i[l],s);u!==null&&r.push({plugin:a,options:IP(n.config,{plugin:a,local:e[l]},u,o)})}return r}function IP(n,{plugin:t,local:e},i,s){const r=n.pluginScopeKeys(t),o=n.getOptionScopes(i,r);return e&&t.defaults&&o.push(t.defaults),n.createResolver(o,s,[""],{scriptable:!1,indexable:!1,allKeys:!0})}function ic(n,t){const e=Bt.datasets[n]||{};return((t.datasets||{})[n]||{}).indexAxis||t.indexAxis||e.indexAxis||"x"}function SP(n,t){let e=n;return n==="_index_"?e=t:n==="_value_"&&(e=t==="x"?"y":"x"),e}function xP(n,t){return n===t?"_index_":"_value_"}function Af(n){if(n==="x"||n==="y"||n==="r")return n}function AP(n){if(n==="top"||n==="bottom")return"x";if(n==="left"||n==="right")return"y"}function sc(n,...t){if(Af(n))return n;for(const e of t){const i=e.axis||AP(e.position)||n.length>1&&Af(n[0].toLowerCase());if(i)return i}throw new Error(`Cannot determine type of '${n}' axis. Please provide 'axis' or 'position' option.`)}function Pf(n,t,e){if(e[t+"AxisID"]===n)return{axis:t}}function PP(n,t){if(t.data&&t.data.datasets){const e=t.data.datasets.filter(i=>i.xAxisID===n||i.yAxisID===n);if(e.length)return Pf(n,"x",e[0])||Pf(n,"y",e[0])}return{}}function kP(n,t){const e=xi[n.type]||{scales:{}},i=t.scales||{},s=ic(n.type,t),r=Object.create(null);return Object.keys(i).forEach(o=>{const a=i[o];if(!ht(a))return console.error(`Invalid scale configuration for scale: ${o}`);if(a._proxy)return console.warn(`Ignoring resolver passed as options for scale: ${o}`);const l=sc(o,a,PP(o,n),Bt.scales[a.type]),u=xP(l,s),h=e.scales||{};r[o]=er(Object.create(null),[{axis:l},a,h[l],h[u]])}),n.data.datasets.forEach(o=>{const a=o.type||n.type,l=o.indexAxis||ic(a,t),h=(xi[a]||{}).scales||{};Object.keys(h).forEach(d=>{const p=SP(d,l),y=o[p+"AxisID"]||p;r[y]=r[y]||Object.create(null),er(r[y],[{axis:p},i[y],h[d]])})}),Object.keys(r).forEach(o=>{const a=r[o];er(a,[Bt.scales[a.type],Bt.scale])}),r}function g_(n){const t=n.options||(n.options={});t.plugins=it(t.plugins,{}),t.scales=kP(n,t)}function m_(n){return n=n||{},n.datasets=n.datasets||[],n.labels=n.labels||[],n}function RP(n){return n=n||{},n.data=m_(n.data),g_(n),n}const kf=new Map,__=new Set;function ho(n,t){let e=kf.get(n);return e||(e=t(),kf.set(n,e),__.add(e)),e}const Fs=(n,t,e)=>{const i=Si(t,e);i!==void 0&&n.add(i)};class CP{constructor(t){this._config=RP(t),this._scopeCache=new Map,this._resolverCache=new Map}get platform(){return this._config.platform}get type(){return this._config.type}set type(t){this._config.type=t}get data(){return this._config.data}set data(t){this._config.data=m_(t)}get options(){return this._config.options}set options(t){this._config.options=t}get plugins(){return this._config.plugins}update(){const t=this._config;this.clearCache(),g_(t)}clearCache(){this._scopeCache.clear(),this._resolverCache.clear()}datasetScopeKeys(t){return ho(t,()=>[[`datasets.${t}`,""]])}datasetAnimationScopeKeys(t,e){return ho(`${t}.transition.${e}`,()=>[[`datasets.${t}.transitions.${e}`,`transitions.${e}`],[`datasets.${t}`,""]])}datasetElementScopeKeys(t,e){return ho(`${t}-${e}`,()=>[[`datasets.${t}.elements.${e}`,`datasets.${t}`,`elements.${e}`,""]])}pluginScopeKeys(t){const e=t.id,i=this.type;return ho(`${i}-plugin-${e}`,()=>[[`plugins.${e}`,...t.additionalOptionScopes||[]]])}_cachedScopes(t,e){const i=this._scopeCache;let s=i.get(t);return(!s||e)&&(s=new Map,i.set(t,s)),s}getOptionScopes(t,e,i){const{options:s,type:r}=this,o=this._cachedScopes(t,i),a=o.get(e);if(a)return a;const l=new Set;e.forEach(h=>{t&&(l.add(t),h.forEach(d=>Fs(l,t,d))),h.forEach(d=>Fs(l,s,d)),h.forEach(d=>Fs(l,xi[r]||{},d)),h.forEach(d=>Fs(l,Bt,d)),h.forEach(d=>Fs(l,ec,d))});const u=Array.from(l);return u.length===0&&u.push(Object.create(null)),__.has(e)&&o.set(e,u),u}chartOptionScopes(){const{options:t,type:e}=this;return[t,xi[e]||{},Bt.datasets[e]||{},{type:e},Bt,ec]}resolveNamedOptions(t,e,i,s=[""]){const r={$shared:!0},{resolver:o,subPrefixes:a}=Rf(this._resolverCache,t,s);let l=o;if(MP(o,e)){r.$shared=!1,i=Zn(i)?i():i;const u=this.createResolver(t,i,a);l=ls(o,i,u)}for(const u of e)r[u]=l[u];return r}createResolver(t,e,i=[""],s){const{resolver:r}=Rf(this._resolverCache,t,i);return ht(e)?ls(r,e,void 0,s):r}}function Rf(n,t,e){let i=n.get(t);i||(i=new Map,n.set(t,i));const s=e.join();let r=i.get(s);return r||(r={resolver:fu(t,e),subPrefixes:e.filter(a=>!a.toLowerCase().includes("hover"))},i.set(s,r)),r}const DP=n=>ht(n)&&Object.getOwnPropertyNames(n).some(t=>Zn(n[t]));function MP(n,t){const{isScriptable:e,isIndexable:i}=Qm(n);for(const s of t){const r=e(s),o=i(s),a=(o||r)&&n[s];if(r&&(Zn(a)||DP(a))||o&&Gt(a))return!0}return!1}var OP="4.5.1";const LP=["top","bottom","left","right","chartArea"];function Cf(n,t){return n==="top"||n==="bottom"||LP.indexOf(n)===-1&&t==="x"}function Df(n,t){return function(e,i){return e[n]===i[n]?e[t]-i[t]:e[n]-i[n]}}function Mf(n){const t=n.chart,e=t.options.animation;t.notifyPlugins("afterRender"),Rt(e&&e.onComplete,[n],t)}function VP(n){const t=n.chart,e=t.options.animation;Rt(e&&e.onProgress,[n],t)}function y_(n){return mu()&&typeof n=="string"?n=document.getElementById(n):n&&n.length&&(n=n[0]),n&&n.canvas&&(n=n.canvas),n}const Co={},Of=n=>{const t=y_(n);return Object.values(Co).filter(e=>e.canvas===t).pop()};function NP(n,t,e){const i=Object.keys(n);for(const s of i){const r=+s;if(r>=t){const o=n[s];delete n[s],(e>0||r>t)&&(n[r+e]=o)}}}function FP(n,t,e,i){return!e||n.type==="mouseout"?null:i?t:n}class cn{static register(...t){je.add(...t),Lf()}static unregister(...t){je.remove(...t),Lf()}constructor(t,e){const i=this.config=new CP(e),s=y_(t),r=Of(s);if(r)throw new Error("Canvas is already in use. Chart with ID '"+r.id+"' must be destroyed before the canvas with ID '"+r.canvas.id+"' can be reused.");const o=i.createResolver(i.chartOptionScopes(),this.getContext());this.platform=new(i.platform||nP(s)),this.platform.updateConfig(i);const a=this.platform.acquireContext(s,o.aspectRatio),l=a&&a.canvas,u=l&&l.height,h=l&&l.width;if(this.id=FS(),this.ctx=a,this.canvas=l,this.width=h,this.height=u,this._options=o,this._aspectRatio=this.aspectRatio,this._layers=[],this._metasets=[],this._stacks=void 0,this.boxes=[],this.currentDevicePixelRatio=void 0,this.chartArea=void 0,this._active=[],this._lastEvent=void 0,this._listeners={},this._responsiveListeners=void 0,this._sortedMetasets=[],this.scales={},this._plugins=new vP,this.$proxies={},this._hiddenIndices={},this.attached=!1,this._animationsDisabled=void 0,this.$context=void 0,this._doResize=ix(d=>this.update(d),o.resizeDelay||0),this._dataChanges=[],Co[this.id]=this,!a||!l){console.error("Failed to create chart: can't acquire context from the given item");return}on.listen(this,"complete",Mf),on.listen(this,"progress",VP),this._initialize(),this.attached&&this.update()}get aspectRatio(){const{options:{aspectRatio:t,maintainAspectRatio:e},width:i,height:s,_aspectRatio:r}=this;return _t(t)?e&&r?r:s?i/s:null:t}get data(){return this.config.data}set data(t){this.config.data=t}get options(){return this._options}set options(t){this.config.options=t}get registry(){return je}_initialize(){return this.notifyPlugins("beforeInit"),this.options.responsive?this.resize():nf(this,this.options.devicePixelRatio),this.bindEvents(),this.notifyPlugins("afterInit"),this}clear(){return Zd(this.canvas,this.ctx),this}stop(){return on.stop(this),this}resize(t,e){on.running(this)?this._resizeBeforeDraw={width:t,height:e}:this._resize(t,e)}_resize(t,e){const i=this.options,s=this.canvas,r=i.maintainAspectRatio&&this.aspectRatio,o=this.platform.getMaximumSize(s,t,e,r),a=i.devicePixelRatio||this.platform.getDevicePixelRatio(),l=this.width?"resize":"attach";this.width=o.width,this.height=o.height,this._aspectRatio=this.aspectRatio,nf(this,a,!0)&&(this.notifyPlugins("resize",{size:o}),Rt(i.onResize,[this,o],this),this.attached&&this._doResize(l)&&this.render())}ensureScalesHaveIDs(){const e=this.options.scales||{};wt(e,(i,s)=>{i.id=s})}buildOrUpdateScales(){const t=this.options,e=t.scales,i=this.scales,s=Object.keys(i).reduce((o,a)=>(o[a]=!1,o),{});let r=[];e&&(r=r.concat(Object.keys(e).map(o=>{const a=e[o],l=sc(o,a),u=l==="r",h=l==="x";return{options:a,dposition:u?"chartArea":h?"bottom":"left",dtype:u?"radialLinear":h?"category":"linear"}}))),wt(r,o=>{const a=o.options,l=a.id,u=sc(l,a),h=it(a.type,o.dtype);(a.position===void 0||Cf(a.position,u)!==Cf(o.dposition))&&(a.position=o.dposition),s[l]=!0;let d=null;if(l in i&&i[l].type===h)d=i[l];else{const p=je.getScale(h);d=new p({id:l,type:h,ctx:this.ctx,chart:this}),i[d.id]=d}d.init(a,t)}),wt(s,(o,a)=>{o||delete i[a]}),wt(i,o=>{Nn.configure(this,o,o.options),Nn.addBox(this,o)})}_updateMetasets(){const t=this._metasets,e=this.data.datasets.length,i=t.length;if(t.sort((s,r)=>s.index-r.index),i>e){for(let s=e;s<i;++s)this._destroyDatasetMeta(s);t.splice(e,i-e)}this._sortedMetasets=t.slice(0).sort(Df("order","index"))}_removeUnreferencedMetasets(){const{_metasets:t,data:{datasets:e}}=this;t.length>e.length&&delete this._stacks,t.forEach((i,s)=>{e.filter(r=>r===i._dataset).length===0&&this._destroyDatasetMeta(s)})}buildOrUpdateControllers(){const t=[],e=this.data.datasets;let i,s;for(this._removeUnreferencedMetasets(),i=0,s=e.length;i<s;i++){const r=e[i];let o=this.getDatasetMeta(i);const a=r.type||this.config.type;if(o.type&&o.type!==a&&(this._destroyDatasetMeta(i),o=this.getDatasetMeta(i)),o.type=a,o.indexAxis=r.indexAxis||ic(a,this.options),o.order=r.order||0,o.index=i,o.label=""+r.label,o.visible=this.isDatasetVisible(i),o.controller)o.controller.updateIndex(i),o.controller.linkScales();else{const l=je.getController(a),{datasetElementType:u,dataElementType:h}=Bt.datasets[a];Object.assign(l,{dataElementType:je.getElement(h),datasetElementType:u&&je.getElement(u)}),o.controller=new l(this,i),t.push(o.controller)}}return this._updateMetasets(),t}_resetElements(){wt(this.data.datasets,(t,e)=>{this.getDatasetMeta(e).controller.reset()},this)}reset(){this._resetElements(),this.notifyPlugins("reset")}update(t){const e=this.config;e.update();const i=this._options=e.createResolver(e.chartOptionScopes(),this.getContext()),s=this._animationsDisabled=!i.animation;if(this._updateScales(),this._checkEventBindings(),this._updateHiddenIndices(),this._plugins.invalidate(),this.notifyPlugins("beforeUpdate",{mode:t,cancelable:!0})===!1)return;const r=this.buildOrUpdateControllers();this.notifyPlugins("beforeElementsUpdate");let o=0;for(let u=0,h=this.data.datasets.length;u<h;u++){const{controller:d}=this.getDatasetMeta(u),p=!s&&r.indexOf(d)===-1;d.buildOrUpdateElements(p),o=Math.max(+d.getMaxOverflow(),o)}o=this._minPadding=i.layout.autoPadding?o:0,this._updateLayout(o),s||wt(r,u=>{u.reset()}),this._updateDatasets(t),this.notifyPlugins("afterUpdate",{mode:t}),this._layers.sort(Df("z","_idx"));const{_active:a,_lastEvent:l}=this;l?this._eventHandler(l,!0):a.length&&this._updateHoverStyles(a,a,!0),this.render()}_updateScales(){wt(this.scales,t=>{Nn.removeBox(this,t)}),this.ensureScalesHaveIDs(),this.buildOrUpdateScales()}_checkEventBindings(){const t=this.options,e=new Set(Object.keys(this._listeners)),i=new Set(t.events);(!jd(e,i)||!!this._responsiveListeners!==t.responsive)&&(this.unbindEvents(),this.bindEvents())}_updateHiddenIndices(){const{_hiddenIndices:t}=this,e=this._getUniformDataChanges()||[];for(const{method:i,start:s,count:r}of e){const o=i==="_removeElements"?-r:r;NP(t,s,o)}}_getUniformDataChanges(){const t=this._dataChanges;if(!t||!t.length)return;this._dataChanges=[];const e=this.data.datasets.length,i=r=>new Set(t.filter(o=>o[0]===r).map((o,a)=>a+","+o.splice(1).join(","))),s=i(0);for(let r=1;r<e;r++)if(!jd(s,i(r)))return;return Array.from(s).map(r=>r.split(",")).map(r=>({method:r[1],start:+r[2],count:+r[3]}))}_updateLayout(t){if(this.notifyPlugins("beforeLayout",{cancelable:!0})===!1)return;Nn.update(this,this.width,this.height,t);const e=this.chartArea,i=e.width<=0||e.height<=0;this._layers=[],wt(this.boxes,s=>{i&&s.position==="chartArea"||(s.configure&&s.configure(),this._layers.push(...s._layers()))},this),this._layers.forEach((s,r)=>{s._idx=r}),this.notifyPlugins("afterLayout")}_updateDatasets(t){if(this.notifyPlugins("beforeDatasetsUpdate",{mode:t,cancelable:!0})!==!1){for(let e=0,i=this.data.datasets.length;e<i;++e)this.getDatasetMeta(e).controller.configure();for(let e=0,i=this.data.datasets.length;e<i;++e)this._updateDataset(e,Zn(t)?t({datasetIndex:e}):t);this.notifyPlugins("afterDatasetsUpdate",{mode:t})}}_updateDataset(t,e){const i=this.getDatasetMeta(t),s={meta:i,index:t,mode:e,cancelable:!0};this.notifyPlugins("beforeDatasetUpdate",s)!==!1&&(i.controller._update(e),s.cancelable=!1,this.notifyPlugins("afterDatasetUpdate",s))}render(){this.notifyPlugins("beforeRender",{cancelable:!0})!==!1&&(on.has(this)?this.attached&&!on.running(this)&&on.start(this):(this.draw(),Mf({chart:this})))}draw(){let t;if(this._resizeBeforeDraw){const{width:i,height:s}=this._resizeBeforeDraw;this._resizeBeforeDraw=null,this._resize(i,s)}if(this.clear(),this.width<=0||this.height<=0||this.notifyPlugins("beforeDraw",{cancelable:!0})===!1)return;const e=this._layers;for(t=0;t<e.length&&e[t].z<=0;++t)e[t].draw(this.chartArea);for(this._drawDatasets();t<e.length;++t)e[t].draw(this.chartArea);this.notifyPlugins("afterDraw")}_getSortedDatasetMetas(t){const e=this._sortedMetasets,i=[];let s,r;for(s=0,r=e.length;s<r;++s){const o=e[s];(!t||o.visible)&&i.push(o)}return i}getSortedVisibleDatasetMetas(){return this._getSortedDatasetMetas(!0)}_drawDatasets(){if(this.notifyPlugins("beforeDatasetsDraw",{cancelable:!0})===!1)return;const t=this.getSortedVisibleDatasetMetas();for(let e=t.length-1;e>=0;--e)this._drawDataset(t[e]);this.notifyPlugins("afterDatasetsDraw")}_drawDataset(t){const e=this.ctx,i={meta:t,index:t.index,cancelable:!0},s=o_(this,t);this.notifyPlugins("beforeDatasetDraw",i)!==!1&&(s&&Da(e,s),t.controller.draw(),s&&Ma(e),i.cancelable=!1,this.notifyPlugins("afterDatasetDraw",i))}isPointInArea(t){return Er(t,this.chartArea,this._minPadding)}getElementsAtEventForMode(t,e,i,s){const r=LA.modes[e];return typeof r=="function"?r(this,t,i,s):[]}getDatasetMeta(t){const e=this.data.datasets[t],i=this._metasets;let s=i.filter(r=>r&&r._dataset===e).pop();return s||(s={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:e&&e.order||0,index:t,_dataset:e,_parsed:[],_sorted:!1},i.push(s)),s}getContext(){return this.$context||(this.$context=Di(null,{chart:this,type:"chart"}))}getVisibleDatasetCount(){return this.getSortedVisibleDatasetMetas().length}isDatasetVisible(t){const e=this.data.datasets[t];if(!e)return!1;const i=this.getDatasetMeta(t);return typeof i.hidden=="boolean"?!i.hidden:!e.hidden}setDatasetVisibility(t,e){const i=this.getDatasetMeta(t);i.hidden=!e}toggleDataVisibility(t){this._hiddenIndices[t]=!this._hiddenIndices[t]}getDataVisibility(t){return!this._hiddenIndices[t]}_updateVisibility(t,e,i){const s=i?"show":"hide",r=this.getDatasetMeta(t),o=r.controller._resolveAnimations(void 0,s);br(e)?(r.data[e].hidden=!i,this.update()):(this.setDatasetVisibility(t,i),o.update(r,{visible:i}),this.update(a=>a.datasetIndex===t?s:void 0))}hide(t,e){this._updateVisibility(t,e,!1)}show(t,e){this._updateVisibility(t,e,!0)}_destroyDatasetMeta(t){const e=this._metasets[t];e&&e.controller&&e.controller._destroy(),delete this._metasets[t]}_stop(){let t,e;for(this.stop(),on.remove(this),t=0,e=this.data.datasets.length;t<e;++t)this._destroyDatasetMeta(t)}destroy(){this.notifyPlugins("beforeDestroy");const{canvas:t,ctx:e}=this;this._stop(),this.config.clearCache(),t&&(this.unbindEvents(),Zd(t,e),this.platform.releaseContext(e),this.canvas=null,this.ctx=null),delete Co[this.id],this.notifyPlugins("afterDestroy")}toBase64Image(...t){return this.canvas.toDataURL(...t)}bindEvents(){this.bindUserEvents(),this.options.responsive?this.bindResponsiveEvents():this.attached=!0}bindUserEvents(){const t=this._listeners,e=this.platform,i=(r,o)=>{e.addEventListener(this,r,o),t[r]=o},s=(r,o,a)=>{r.offsetX=o,r.offsetY=a,this._eventHandler(r)};wt(this.options.events,r=>i(r,s))}bindResponsiveEvents(){this._responsiveListeners||(this._responsiveListeners={});const t=this._responsiveListeners,e=this.platform,i=(l,u)=>{e.addEventListener(this,l,u),t[l]=u},s=(l,u)=>{t[l]&&(e.removeEventListener(this,l,u),delete t[l])},r=(l,u)=>{this.canvas&&this.resize(l,u)};let o;const a=()=>{s("attach",a),this.attached=!0,this.resize(),i("resize",r),i("detach",o)};o=()=>{this.attached=!1,s("resize",r),this._stop(),this._resize(0,0),i("attach",a)},e.isAttached(this.canvas)?a():o()}unbindEvents(){wt(this._listeners,(t,e)=>{this.platform.removeEventListener(this,e,t)}),this._listeners={},wt(this._responsiveListeners,(t,e)=>{this.platform.removeEventListener(this,e,t)}),this._responsiveListeners=void 0}updateHoverStyle(t,e,i){const s=i?"set":"remove";let r,o,a,l;for(e==="dataset"&&(r=this.getDatasetMeta(t[0].datasetIndex),r.controller["_"+s+"DatasetHoverStyle"]()),a=0,l=t.length;a<l;++a){o=t[a];const u=o&&this.getDatasetMeta(o.datasetIndex).controller;u&&u[s+"HoverStyle"](o.element,o.datasetIndex,o.index)}}getActiveElements(){return this._active||[]}setActiveElements(t){const e=this._active||[],i=t.map(({datasetIndex:r,index:o})=>{const a=this.getDatasetMeta(r);if(!a)throw new Error("No dataset found at index "+r);return{datasetIndex:r,element:a.data[o],index:o}});!na(i,e)&&(this._active=i,this._lastEvent=null,this._updateHoverStyles(i,e))}notifyPlugins(t,e,i){return this._plugins.notify(this,t,e,i)}isPluginEnabled(t){return this._plugins._cache.filter(e=>e.plugin.id===t).length===1}_updateHoverStyles(t,e,i){const s=this.options.hover,r=(l,u)=>l.filter(h=>!u.some(d=>h.datasetIndex===d.datasetIndex&&h.index===d.index)),o=r(e,t),a=i?t:r(t,e);o.length&&this.updateHoverStyle(o,s.mode,!1),a.length&&s.mode&&this.updateHoverStyle(a,s.mode,!0)}_eventHandler(t,e){const i={event:t,replay:e,cancelable:!0,inChartArea:this.isPointInArea(t)},s=o=>(o.options.events||this.options.events).includes(t.native.type);if(this.notifyPlugins("beforeEvent",i,s)===!1)return;const r=this._handleEvent(t,e,i.inChartArea);return i.cancelable=!1,this.notifyPlugins("afterEvent",i,s),(r||i.changed)&&this.render(),this}_handleEvent(t,e,i){const{_active:s=[],options:r}=this,o=e,a=this._getActiveElements(t,s,i,o),l=HS(t),u=FP(t,this._lastEvent,i,l);i&&(this._lastEvent=null,Rt(r.onHover,[t,a,this],this),l&&Rt(r.onClick,[t,a,this],this));const h=!na(a,s);return(h||e)&&(this._active=a,this._updateHoverStyles(a,s,e)),this._lastEvent=u,h}_getActiveElements(t,e,i,s){if(t.type==="mouseout")return[];if(!i)return e;const r=this.options.hover;return this.getElementsAtEventForMode(t,r.mode,r,s)}}z(cn,"defaults",Bt),z(cn,"instances",Co),z(cn,"overrides",xi),z(cn,"registry",je),z(cn,"version",OP),z(cn,"getChart",Of);function Lf(){return wt(cn.instances,n=>n._plugins.invalidate())}function $P(n,t,e){const{startAngle:i,x:s,y:r,outerRadius:o,innerRadius:a,options:l}=t,{borderWidth:u,borderJoinStyle:h}=l,d=Math.min(u/o,Ie(i-e));if(n.beginPath(),n.arc(s,r,o-u/2,i+d/2,e-d/2),a>0){const p=Math.min(u/a,Ie(i-e));n.arc(s,r,a+u/2,e-p/2,i+p/2,!0)}else{const p=Math.min(u/2,o*Ie(i-e));if(h==="round")n.arc(s,r,p,e-At/2,i+At/2,!0);else if(h==="bevel"){const y=2*p*p,S=-y*Math.cos(e+At/2)+s,b=-y*Math.sin(e+At/2)+r,T=y*Math.cos(i+At/2)+s,P=y*Math.sin(i+At/2)+r;n.lineTo(S,b),n.lineTo(T,P)}}n.closePath(),n.moveTo(0,0),n.rect(0,0,n.canvas.width,n.canvas.height),n.clip("evenodd")}function UP(n,t,e){const{startAngle:i,pixelMargin:s,x:r,y:o,outerRadius:a,innerRadius:l}=t;let u=s/a;n.beginPath(),n.arc(r,o,a,i-u,e+u),l>s?(u=s/l,n.arc(r,o,l,e+u,i-u,!0)):n.arc(r,o,s,e+Yt,i-Yt),n.closePath(),n.clip()}function zP(n){return du(n,["outerStart","outerEnd","innerStart","innerEnd"])}function BP(n,t,e,i){const s=zP(n.options.borderRadius),r=(e-t)/2,o=Math.min(r,i*t/2),a=l=>{const u=(e-Math.min(r,l))*i/2;return ue(l,0,Math.min(r,u))};return{outerStart:a(s.outerStart),outerEnd:a(s.outerEnd),innerStart:ue(s.innerStart,0,o),innerEnd:ue(s.innerEnd,0,o)}}function $i(n,t,e,i){return{x:e+n*Math.cos(t),y:i+n*Math.sin(t)}}function ca(n,t,e,i,s,r){const{x:o,y:a,startAngle:l,pixelMargin:u,innerRadius:h}=t,d=Math.max(t.outerRadius+i+e-u,0),p=h>0?h+i+e+u:0;let y=0;const S=s-l;if(i){const q=h>0?h-i:0,st=d>0?d-i:0,j=(q+st)/2,rt=j!==0?S*j/(j+i):S;y=(S-rt)/2}const b=Math.max(.001,S*d-e/At)/d,T=(S-b)/2,P=l+T+y,k=s-T-y,{outerStart:C,outerEnd:R,innerStart:M,innerEnd:L}=BP(t,p,d,k-P),E=d-C,g=d-R,_=P+C/E,v=k-R/g,I=p+M,A=p+L,x=P+M/I,G=k-L/A;if(n.beginPath(),r){const q=(_+v)/2;if(n.arc(o,a,d,_,q),n.arc(o,a,d,q,v),R>0){const U=$i(g,v,o,a);n.arc(U.x,U.y,R,v,k+Yt)}const st=$i(A,k,o,a);if(n.lineTo(st.x,st.y),L>0){const U=$i(A,G,o,a);n.arc(U.x,U.y,L,k+Yt,G+Math.PI)}const j=(k-L/p+(P+M/p))/2;if(n.arc(o,a,p,k-L/p,j,!0),n.arc(o,a,p,j,P+M/p,!0),M>0){const U=$i(I,x,o,a);n.arc(U.x,U.y,M,x+Math.PI,P-Yt)}const rt=$i(E,P,o,a);if(n.lineTo(rt.x,rt.y),C>0){const U=$i(E,_,o,a);n.arc(U.x,U.y,C,P-Yt,_)}}else{n.moveTo(o,a);const q=Math.cos(_)*d+o,st=Math.sin(_)*d+a;n.lineTo(q,st);const j=Math.cos(v)*d+o,rt=Math.sin(v)*d+a;n.lineTo(j,rt)}n.closePath()}function jP(n,t,e,i,s){const{fullCircles:r,startAngle:o,circumference:a}=t;let l=t.endAngle;if(r){ca(n,t,e,i,l,s);for(let u=0;u<r;++u)n.fill();isNaN(a)||(l=o+(a%Ot||Ot))}return ca(n,t,e,i,l,s),n.fill(),l}function HP(n,t,e,i,s){const{fullCircles:r,startAngle:o,circumference:a,options:l}=t,{borderWidth:u,borderJoinStyle:h,borderDash:d,borderDashOffset:p,borderRadius:y}=l,S=l.borderAlign==="inner";if(!u)return;n.setLineDash(d||[]),n.lineDashOffset=p,S?(n.lineWidth=u*2,n.lineJoin=h||"round"):(n.lineWidth=u,n.lineJoin=h||"bevel");let b=t.endAngle;if(r){ca(n,t,e,i,b,s);for(let T=0;T<r;++T)n.stroke();isNaN(a)||(b=o+(a%Ot||Ot))}S&&UP(n,t,b),l.selfJoin&&b-o>=At&&y===0&&h!=="miter"&&$P(n,t,b),r||(ca(n,t,e,i,b,s),n.stroke())}class qs extends tn{constructor(e){super();z(this,"circumference");z(this,"endAngle");z(this,"fullCircles");z(this,"innerRadius");z(this,"outerRadius");z(this,"pixelMargin");z(this,"startAngle");this.options=void 0,this.circumference=void 0,this.startAngle=void 0,this.endAngle=void 0,this.innerRadius=void 0,this.outerRadius=void 0,this.pixelMargin=0,this.fullCircles=0,e&&Object.assign(this,e)}inRange(e,i,s){const r=this.getProps(["x","y"],s),{angle:o,distance:a}=$m(r,{x:e,y:i}),{startAngle:l,endAngle:u,innerRadius:h,outerRadius:d,circumference:p}=this.getProps(["startAngle","endAngle","innerRadius","outerRadius","circumference"],s),y=(this.options.spacing+this.options.borderWidth)/2,S=it(p,u-l),b=vr(o,l,u)&&l!==u,T=S>=Ot||b,P=pn(a,h+y,d+y);return T&&P}getCenterPoint(e){const{x:i,y:s,startAngle:r,endAngle:o,innerRadius:a,outerRadius:l}=this.getProps(["x","y","startAngle","endAngle","innerRadius","outerRadius"],e),{offset:u,spacing:h}=this.options,d=(r+o)/2,p=(a+l+h+u)/2;return{x:i+Math.cos(d)*p,y:s+Math.sin(d)*p}}tooltipPosition(e){return this.getCenterPoint(e)}draw(e){const{options:i,circumference:s}=this,r=(i.offset||0)/4,o=(i.spacing||0)/2,a=i.circular;if(this.pixelMargin=i.borderAlign==="inner"?.33:0,this.fullCircles=s>Ot?Math.floor(s/Ot):0,s===0||this.innerRadius<0||this.outerRadius<0)return;e.save();const l=(this.startAngle+this.endAngle)/2;e.translate(Math.cos(l)*r,Math.sin(l)*r);const u=1-Math.sin(Math.min(At,s||0)),h=r*u;e.fillStyle=i.backgroundColor,e.strokeStyle=i.borderColor,jP(e,this,h,o,a),HP(e,this,h,o,a),e.restore()}}z(qs,"id","arc"),z(qs,"defaults",{borderAlign:"center",borderColor:"#fff",borderDash:[],borderDashOffset:0,borderJoinStyle:void 0,borderRadius:0,borderWidth:2,offset:0,spacing:0,angle:void 0,circular:!0,selfJoin:!1}),z(qs,"defaultRoutes",{backgroundColor:"backgroundColor"}),z(qs,"descriptors",{_scriptable:!0,_indexable:e=>e!=="borderDash"});function b_(n,t,e=t){n.lineCap=it(e.borderCapStyle,t.borderCapStyle),n.setLineDash(it(e.borderDash,t.borderDash)),n.lineDashOffset=it(e.borderDashOffset,t.borderDashOffset),n.lineJoin=it(e.borderJoinStyle,t.borderJoinStyle),n.lineWidth=it(e.borderWidth,t.borderWidth),n.strokeStyle=it(e.borderColor,t.borderColor)}function WP(n,t,e){n.lineTo(e.x,e.y)}function qP(n){return n.stepped?gx:n.tension||n.cubicInterpolationMode==="monotone"?mx:WP}function v_(n,t,e={}){const i=n.length,{start:s=0,end:r=i-1}=e,{start:o,end:a}=t,l=Math.max(s,o),u=Math.min(r,a),h=s<o&&r<o||s>a&&r>a;return{count:i,start:l,loop:t.loop,ilen:u<l&&!h?i+u-l:u-l}}function KP(n,t,e,i){const{points:s,options:r}=t,{count:o,start:a,loop:l,ilen:u}=v_(s,e,i),h=qP(r);let{move:d=!0,reverse:p}=i||{},y,S,b;for(y=0;y<=u;++y)S=s[(a+(p?u-y:y))%o],!S.skip&&(d?(n.moveTo(S.x,S.y),d=!1):h(n,b,S,p,r.stepped),b=S);return l&&(S=s[(a+(p?u:0))%o],h(n,b,S,p,r.stepped)),!!l}function GP(n,t,e,i){const s=t.points,{count:r,start:o,ilen:a}=v_(s,e,i),{move:l=!0,reverse:u}=i||{};let h=0,d=0,p,y,S,b,T,P;const k=R=>(o+(u?a-R:R))%r,C=()=>{b!==T&&(n.lineTo(h,T),n.lineTo(h,b),n.lineTo(h,P))};for(l&&(y=s[k(0)],n.moveTo(y.x,y.y)),p=0;p<=a;++p){if(y=s[k(p)],y.skip)continue;const R=y.x,M=y.y,L=R|0;L===S?(M<b?b=M:M>T&&(T=M),h=(d*h+R)/++d):(C(),n.lineTo(R,M),S=L,d=0,b=T=M),P=M}C()}function rc(n){const t=n.options,e=t.borderDash&&t.borderDash.length;return!n._decimated&&!n._loop&&!t.tension&&t.cubicInterpolationMode!=="monotone"&&!t.stepped&&!e?GP:KP}function YP(n){return n.stepped?Gx:n.tension||n.cubicInterpolationMode==="monotone"?Yx:ui}function QP(n,t,e,i){let s=t._path;s||(s=t._path=new Path2D,t.path(s,e,i)&&s.closePath()),b_(n,t.options),n.stroke(s)}function XP(n,t,e,i){const{segments:s,options:r}=t,o=rc(t);for(const a of s)b_(n,r,a.style),n.beginPath(),o(n,t,a,{start:e,end:e+i-1})&&n.closePath(),n.stroke()}const JP=typeof Path2D=="function";function ZP(n,t,e,i){JP&&!t.options.segment?QP(n,t,e,i):XP(n,t,e,i)}class Fn extends tn{constructor(t){super(),this.animated=!0,this.options=void 0,this._chart=void 0,this._loop=void 0,this._fullLoop=void 0,this._path=void 0,this._points=void 0,this._segments=void 0,this._decimated=!1,this._pointsUpdated=!1,this._datasetIndex=void 0,t&&Object.assign(this,t)}updateControlPoints(t,e){const i=this.options;if((i.tension||i.cubicInterpolationMode==="monotone")&&!i.stepped&&!this._pointsUpdated){const s=i.spanGaps?this._loop:this._fullLoop;Ux(this._points,i,t,s,e),this._pointsUpdated=!0}}set points(t){this._points=t,delete this._segments,delete this._path,this._pointsUpdated=!1}get points(){return this._points}get segments(){return this._segments||(this._segments=eA(this,this.options.segment))}first(){const t=this.segments,e=this.points;return t.length&&e[t[0].start]}last(){const t=this.segments,e=this.points,i=t.length;return i&&e[t[i-1].end]}interpolate(t,e){const i=this.options,s=t[e],r=this.points,o=r_(this,{property:e,start:s,end:s});if(!o.length)return;const a=[],l=YP(i);let u,h;for(u=0,h=o.length;u<h;++u){const{start:d,end:p}=o[u],y=r[d],S=r[p];if(y===S){a.push(y);continue}const b=Math.abs((s-y[e])/(S[e]-y[e])),T=l(y,S,b,i.stepped);T[e]=t[e],a.push(T)}return a.length===1?a[0]:a}pathSegment(t,e,i){return rc(this)(t,this,e,i)}path(t,e,i){const s=this.segments,r=rc(this);let o=this._loop;e=e||0,i=i||this.points.length-e;for(const a of s)o&=r(t,this,a,{start:e,end:e+i-1});return!!o}draw(t,e,i,s){const r=this.options||{};(this.points||[]).length&&r.borderWidth&&(t.save(),ZP(t,this,i,s),t.restore()),this.animated&&(this._pointsUpdated=!1,this._path=void 0)}}z(Fn,"id","line"),z(Fn,"defaults",{borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderWidth:3,capBezierPoints:!0,cubicInterpolationMode:"default",fill:!1,spanGaps:!1,stepped:!1,tension:0}),z(Fn,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"}),z(Fn,"descriptors",{_scriptable:!0,_indexable:t=>t!=="borderDash"&&t!=="fill"});function Vf(n,t,e,i){const s=n.options,{[e]:r}=n.getProps([e],i);return Math.abs(t-r)<s.radius+s.hitRadius}class Do extends tn{constructor(e){super();z(this,"parsed");z(this,"skip");z(this,"stop");this.options=void 0,this.parsed=void 0,this.skip=void 0,this.stop=void 0,e&&Object.assign(this,e)}inRange(e,i,s){const r=this.options,{x:o,y:a}=this.getProps(["x","y"],s);return Math.pow(e-o,2)+Math.pow(i-a,2)<Math.pow(r.hitRadius+r.radius,2)}inXRange(e,i){return Vf(this,e,"x",i)}inYRange(e,i){return Vf(this,e,"y",i)}getCenterPoint(e){const{x:i,y:s}=this.getProps(["x","y"],e);return{x:i,y:s}}size(e){e=e||this.options||{};let i=e.radius||0;i=Math.max(i,i&&e.hoverRadius||0);const s=i&&e.borderWidth||0;return(i+s)*2}draw(e,i){const s=this.options;this.skip||s.radius<.1||!Er(this,i,this.size(s)/2)||(e.strokeStyle=s.borderColor,e.lineWidth=s.borderWidth,e.fillStyle=s.backgroundColor,nc(e,s,this.x,this.y))}getRange(){const e=this.options||{};return e.radius+e.hitRadius}}z(Do,"id","point"),z(Do,"defaults",{borderWidth:1,hitRadius:1,hoverBorderWidth:1,hoverRadius:4,pointStyle:"circle",radius:3,rotation:0}),z(Do,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});function E_(n,t){const{x:e,y:i,base:s,width:r,height:o}=n.getProps(["x","y","base","width","height"],t);let a,l,u,h,d;return n.horizontal?(d=o/2,a=Math.min(e,s),l=Math.max(e,s),u=i-d,h=i+d):(d=r/2,a=e-d,l=e+d,u=Math.min(i,s),h=Math.max(i,s)),{left:a,top:u,right:l,bottom:h}}function $n(n,t,e,i){return n?0:ue(t,e,i)}function tk(n,t,e){const i=n.options.borderWidth,s=n.borderSkipped,r=Ym(i);return{t:$n(s.top,r.top,0,e),r:$n(s.right,r.right,0,t),b:$n(s.bottom,r.bottom,0,e),l:$n(s.left,r.left,0,t)}}function ek(n,t,e){const{enableBorderRadius:i}=n.getProps(["enableBorderRadius"]),s=n.options.borderRadius,r=Ji(s),o=Math.min(t,e),a=n.borderSkipped,l=i||ht(s);return{topLeft:$n(!l||a.top||a.left,r.topLeft,0,o),topRight:$n(!l||a.top||a.right,r.topRight,0,o),bottomLeft:$n(!l||a.bottom||a.left,r.bottomLeft,0,o),bottomRight:$n(!l||a.bottom||a.right,r.bottomRight,0,o)}}function nk(n){const t=E_(n),e=t.right-t.left,i=t.bottom-t.top,s=tk(n,e/2,i/2),r=ek(n,e/2,i/2);return{outer:{x:t.left,y:t.top,w:e,h:i,radius:r},inner:{x:t.left+s.l,y:t.top+s.t,w:e-s.l-s.r,h:i-s.t-s.b,radius:{topLeft:Math.max(0,r.topLeft-Math.max(s.t,s.l)),topRight:Math.max(0,r.topRight-Math.max(s.t,s.r)),bottomLeft:Math.max(0,r.bottomLeft-Math.max(s.b,s.l)),bottomRight:Math.max(0,r.bottomRight-Math.max(s.b,s.r))}}}}function Tl(n,t,e,i){const s=t===null,r=e===null,a=n&&!(s&&r)&&E_(n,i);return a&&(s||pn(t,a.left,a.right))&&(r||pn(e,a.top,a.bottom))}function ik(n){return n.topLeft||n.topRight||n.bottomLeft||n.bottomRight}function sk(n,t){n.rect(t.x,t.y,t.w,t.h)}function Il(n,t,e={}){const i=n.x!==e.x?-t:0,s=n.y!==e.y?-t:0,r=(n.x+n.w!==e.x+e.w?t:0)-i,o=(n.y+n.h!==e.y+e.h?t:0)-s;return{x:n.x+i,y:n.y+s,w:n.w+r,h:n.h+o,radius:n.radius}}class Mo extends tn{constructor(t){super(),this.options=void 0,this.horizontal=void 0,this.base=void 0,this.width=void 0,this.height=void 0,this.inflateAmount=void 0,t&&Object.assign(this,t)}draw(t){const{inflateAmount:e,options:{borderColor:i,backgroundColor:s}}=this,{inner:r,outer:o}=nk(this),a=ik(o.radius)?oa:sk;t.save(),(o.w!==r.w||o.h!==r.h)&&(t.beginPath(),a(t,Il(o,e,r)),t.clip(),a(t,Il(r,-e,o)),t.fillStyle=i,t.fill("evenodd")),t.beginPath(),a(t,Il(r,e)),t.fillStyle=s,t.fill(),t.restore()}inRange(t,e,i){return Tl(this,t,e,i)}inXRange(t,e){return Tl(this,t,null,e)}inYRange(t,e){return Tl(this,null,t,e)}getCenterPoint(t){const{x:e,y:i,base:s,horizontal:r}=this.getProps(["x","y","base","horizontal"],t);return{x:r?(e+s)/2:e,y:r?i:(i+s)/2}}getRange(t){return t==="x"?this.width/2:this.height/2}}z(Mo,"id","bar"),z(Mo,"defaults",{borderSkipped:"start",borderWidth:0,borderRadius:0,inflateAmount:"auto",pointStyle:void 0}),z(Mo,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});function rk(n,t,e){const i=n.segments,s=n.points,r=t.points,o=[];for(const a of i){let{start:l,end:u}=a;u=Va(l,u,s);const h=oc(e,s[l],s[u],a.loop);if(!t.segments){o.push({source:a,target:h,start:s[l],end:s[u]});continue}const d=r_(t,h);for(const p of d){const y=oc(e,r[p.start],r[p.end],p.loop),S=s_(a,s,y);for(const b of S)o.push({source:b,target:p,start:{[e]:Nf(h,y,"start",Math.max)},end:{[e]:Nf(h,y,"end",Math.min)}})}}return o}function oc(n,t,e,i){if(i)return;let s=t[n],r=e[n];return n==="angle"&&(s=Ie(s),r=Ie(r)),{property:n,start:s,end:r}}function ok(n,t){const{x:e=null,y:i=null}=n||{},s=t.points,r=[];return t.segments.forEach(({start:o,end:a})=>{a=Va(o,a,s);const l=s[o],u=s[a];i!==null?(r.push({x:l.x,y:i}),r.push({x:u.x,y:i})):e!==null&&(r.push({x:e,y:l.y}),r.push({x:e,y:u.y}))}),r}function Va(n,t,e){for(;t>n;t--){const i=e[t];if(!isNaN(i.x)&&!isNaN(i.y))break}return t}function Nf(n,t,e,i){return n&&t?i(n[e],t[e]):n?n[e]:t?t[e]:0}function w_(n,t){let e=[],i=!1;return Gt(n)?(i=!0,e=n):e=ok(n,t),e.length?new Fn({points:e,options:{tension:0},_loop:i,_fullLoop:i}):null}function Ff(n){return n&&n.fill!==!1}function ak(n,t,e){let s=n[t].fill;const r=[t];let o;if(!e)return s;for(;s!==!1&&r.indexOf(s)===-1;){if(!de(s))return s;if(o=n[s],!o)return!1;if(o.visible)return s;r.push(s),s=o.fill}return!1}function lk(n,t,e){const i=dk(n);if(ht(i))return isNaN(i.value)?!1:i;let s=parseFloat(i);return de(s)&&Math.floor(s)===s?ck(i[0],t,s,e):["origin","start","end","stack","shape"].indexOf(i)>=0&&i}function ck(n,t,e,i){return(n==="-"||n==="+")&&(e=t+e),e===t||e<0||e>=i?!1:e}function uk(n,t){let e=null;return n==="start"?e=t.bottom:n==="end"?e=t.top:ht(n)?e=t.getPixelForValue(n.value):t.getBasePixel&&(e=t.getBasePixel()),e}function hk(n,t,e){let i;return n==="start"?i=e:n==="end"?i=t.options.reverse?t.min:t.max:ht(n)?i=n.value:i=t.getBaseValue(),i}function dk(n){const t=n.options,e=t.fill;let i=it(e&&e.target,e);return i===void 0&&(i=!!t.backgroundColor),i===!1||i===null?!1:i===!0?"origin":i}function fk(n){const{scale:t,index:e,line:i}=n,s=[],r=i.segments,o=i.points,a=pk(t,e);a.push(w_({x:null,y:t.bottom},i));for(let l=0;l<r.length;l++){const u=r[l];for(let h=u.start;h<=u.end;h++)gk(s,o[h],a)}return new Fn({points:s,options:{}})}function pk(n,t){const e=[],i=n.getMatchingVisibleMetas("line");for(let s=0;s<i.length;s++){const r=i[s];if(r.index===t)break;r.hidden||e.unshift(r.dataset)}return e}function gk(n,t,e){const i=[];for(let s=0;s<e.length;s++){const r=e[s],{first:o,last:a,point:l}=mk(r,t,"x");if(!(!l||o&&a)){if(o)i.unshift(l);else if(n.push(l),!a)break}}n.push(...i)}function mk(n,t,e){const i=n.interpolate(t,e);if(!i)return{};const s=i[e],r=n.segments,o=n.points;let a=!1,l=!1;for(let u=0;u<r.length;u++){const h=r[u],d=o[h.start][e],p=o[h.end][e];if(pn(s,d,p)){a=s===d,l=s===p;break}}return{first:a,last:l,point:i}}class T_{constructor(t){this.x=t.x,this.y=t.y,this.radius=t.radius}pathSegment(t,e,i){const{x:s,y:r,radius:o}=this;return e=e||{start:0,end:Ot},t.arc(s,r,o,e.end,e.start,!0),!i.bounds}interpolate(t){const{x:e,y:i,radius:s}=this,r=t.angle;return{x:e+Math.cos(r)*s,y:i+Math.sin(r)*s,angle:r}}}function _k(n){const{chart:t,fill:e,line:i}=n;if(de(e))return yk(t,e);if(e==="stack")return fk(n);if(e==="shape")return!0;const s=bk(n);return s instanceof T_?s:w_(s,i)}function yk(n,t){const e=n.getDatasetMeta(t);return e&&n.isDatasetVisible(t)?e.dataset:null}function bk(n){return(n.scale||{}).getPointPositionForValue?Ek(n):vk(n)}function vk(n){const{scale:t={},fill:e}=n,i=uk(e,t);if(de(i)){const s=t.isHorizontal();return{x:s?i:null,y:s?null:i}}return null}function Ek(n){const{scale:t,fill:e}=n,i=t.options,s=t.getLabels().length,r=i.reverse?t.max:t.min,o=hk(e,t,r),a=[];if(i.grid.circular){const l=t.getPointPositionForValue(0,r);return new T_({x:l.x,y:l.y,radius:t.getDistanceFromCenterForValue(o)})}for(let l=0;l<s;++l)a.push(t.getPointPositionForValue(l,o));return a}function Sl(n,t,e){const i=_k(t),{chart:s,index:r,line:o,scale:a,axis:l}=t,u=o.options,h=u.fill,d=u.backgroundColor,{above:p=d,below:y=d}=h||{},S=s.getDatasetMeta(r),b=o_(s,S);i&&o.points.length&&(Da(n,e),wk(n,{line:o,target:i,above:p,below:y,area:e,scale:a,axis:l,clip:b}),Ma(n))}function wk(n,t){const{line:e,target:i,above:s,below:r,area:o,scale:a,clip:l}=t,u=e._loop?"angle":t.axis;n.save();let h=r;r!==s&&(u==="x"?($f(n,i,o.top),xl(n,{line:e,target:i,color:s,scale:a,property:u,clip:l}),n.restore(),n.save(),$f(n,i,o.bottom)):u==="y"&&(Uf(n,i,o.left),xl(n,{line:e,target:i,color:r,scale:a,property:u,clip:l}),n.restore(),n.save(),Uf(n,i,o.right),h=s)),xl(n,{line:e,target:i,color:h,scale:a,property:u,clip:l}),n.restore()}function $f(n,t,e){const{segments:i,points:s}=t;let r=!0,o=!1;n.beginPath();for(const a of i){const{start:l,end:u}=a,h=s[l],d=s[Va(l,u,s)];r?(n.moveTo(h.x,h.y),r=!1):(n.lineTo(h.x,e),n.lineTo(h.x,h.y)),o=!!t.pathSegment(n,a,{move:o}),o?n.closePath():n.lineTo(d.x,e)}n.lineTo(t.first().x,e),n.closePath(),n.clip()}function Uf(n,t,e){const{segments:i,points:s}=t;let r=!0,o=!1;n.beginPath();for(const a of i){const{start:l,end:u}=a,h=s[l],d=s[Va(l,u,s)];r?(n.moveTo(h.x,h.y),r=!1):(n.lineTo(e,h.y),n.lineTo(h.x,h.y)),o=!!t.pathSegment(n,a,{move:o}),o?n.closePath():n.lineTo(e,d.y)}n.lineTo(e,t.first().y),n.closePath(),n.clip()}function xl(n,t){const{line:e,target:i,property:s,color:r,scale:o,clip:a}=t,l=rk(e,i,s);for(const{source:u,target:h,start:d,end:p}of l){const{style:{backgroundColor:y=r}={}}=u,S=i!==!0;n.save(),n.fillStyle=y,Tk(n,o,a,S&&oc(s,d,p)),n.beginPath();const b=!!e.pathSegment(n,u);let T;if(S){b?n.closePath():zf(n,i,p,s);const P=!!i.pathSegment(n,h,{move:b,reverse:!0});T=b&&P,T||zf(n,i,d,s)}n.closePath(),n.fill(T?"evenodd":"nonzero"),n.restore()}}function Tk(n,t,e,i){const s=t.chart.chartArea,{property:r,start:o,end:a}=i||{};if(r==="x"||r==="y"){let l,u,h,d;r==="x"?(l=o,u=s.top,h=a,d=s.bottom):(l=s.left,u=o,h=s.right,d=a),n.beginPath(),e&&(l=Math.max(l,e.left),h=Math.min(h,e.right),u=Math.max(u,e.top),d=Math.min(d,e.bottom)),n.rect(l,u,h-l,d-u),n.clip()}}function zf(n,t,e,i){const s=t.interpolate(e,i);s&&n.lineTo(s.x,s.y)}var Ik={id:"filler",afterDatasetsUpdate(n,t,e){const i=(n.data.datasets||[]).length,s=[];let r,o,a,l;for(o=0;o<i;++o)r=n.getDatasetMeta(o),a=r.dataset,l=null,a&&a.options&&a instanceof Fn&&(l={visible:n.isDatasetVisible(o),index:o,fill:lk(a,o,i),chart:n,axis:r.controller.options.indexAxis,scale:r.vScale,line:a}),r.$filler=l,s.push(l);for(o=0;o<i;++o)l=s[o],!(!l||l.fill===!1)&&(l.fill=ak(s,o,e.propagate))},beforeDraw(n,t,e){const i=e.drawTime==="beforeDraw",s=n.getSortedVisibleDatasetMetas(),r=n.chartArea;for(let o=s.length-1;o>=0;--o){const a=s[o].$filler;a&&(a.line.updateControlPoints(r,a.axis),i&&a.fill&&Sl(n.ctx,a,r))}},beforeDatasetsDraw(n,t,e){if(e.drawTime!=="beforeDatasetsDraw")return;const i=n.getSortedVisibleDatasetMetas();for(let s=i.length-1;s>=0;--s){const r=i[s].$filler;Ff(r)&&Sl(n.ctx,r,n.chartArea)}},beforeDatasetDraw(n,t,e){const i=t.meta.$filler;!Ff(i)||e.drawTime!=="beforeDatasetDraw"||Sl(n.ctx,i,n.chartArea)},defaults:{propagate:!0,drawTime:"beforeDatasetDraw"}};const Bf=(n,t)=>{let{boxHeight:e=t,boxWidth:i=t}=n;return n.usePointStyle&&(e=Math.min(e,t),i=n.pointStyleWidth||Math.min(i,t)),{boxWidth:i,boxHeight:e,itemHeight:Math.max(t,e)}},Sk=(n,t)=>n!==null&&t!==null&&n.datasetIndex===t.datasetIndex&&n.index===t.index;class jf extends tn{constructor(t){super(),this._added=!1,this.legendHitBoxes=[],this._hoveredItem=null,this.doughnutMode=!1,this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this.legendItems=void 0,this.columnSizes=void 0,this.lineWidths=void 0,this.maxHeight=void 0,this.maxWidth=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.height=void 0,this.width=void 0,this._margins=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,e,i){this.maxWidth=t,this.maxHeight=e,this._margins=i,this.setDimensions(),this.buildLabels(),this.fit()}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=this._margins.left,this.right=this.width):(this.height=this.maxHeight,this.top=this._margins.top,this.bottom=this.height)}buildLabels(){const t=this.options.labels||{};let e=Rt(t.generateLabels,[this.chart],this)||[];t.filter&&(e=e.filter(i=>t.filter(i,this.chart.data))),t.sort&&(e=e.sort((i,s)=>t.sort(i,s,this.chart.data))),this.options.reverse&&e.reverse(),this.legendItems=e}fit(){const{options:t,ctx:e}=this;if(!t.display){this.width=this.height=0;return}const i=t.labels,s=_e(i.font),r=s.size,o=this._computeTitleHeight(),{boxWidth:a,itemHeight:l}=Bf(i,r);let u,h;e.font=s.string,this.isHorizontal()?(u=this.maxWidth,h=this._fitRows(o,r,a,l)+10):(h=this.maxHeight,u=this._fitCols(o,s,a,l)+10),this.width=Math.min(u,t.maxWidth||this.maxWidth),this.height=Math.min(h,t.maxHeight||this.maxHeight)}_fitRows(t,e,i,s){const{ctx:r,maxWidth:o,options:{labels:{padding:a}}}=this,l=this.legendHitBoxes=[],u=this.lineWidths=[0],h=s+a;let d=t;r.textAlign="left",r.textBaseline="middle";let p=-1,y=-h;return this.legendItems.forEach((S,b)=>{const T=i+e/2+r.measureText(S.text).width;(b===0||u[u.length-1]+T+2*a>o)&&(d+=h,u[u.length-(b>0?0:1)]=0,y+=h,p++),l[b]={left:0,top:y,row:p,width:T,height:s},u[u.length-1]+=T+a}),d}_fitCols(t,e,i,s){const{ctx:r,maxHeight:o,options:{labels:{padding:a}}}=this,l=this.legendHitBoxes=[],u=this.columnSizes=[],h=o-t;let d=a,p=0,y=0,S=0,b=0;return this.legendItems.forEach((T,P)=>{const{itemWidth:k,itemHeight:C}=xk(i,e,r,T,s);P>0&&y+C+2*a>h&&(d+=p+a,u.push({width:p,height:y}),S+=p+a,b++,p=y=0),l[P]={left:S,top:y,col:b,width:k,height:C},p=Math.max(p,k),y+=C+a}),d+=p,u.push({width:p,height:y}),d}adjustHitBoxes(){if(!this.options.display)return;const t=this._computeTitleHeight(),{legendHitBoxes:e,options:{align:i,labels:{padding:s},rtl:r}}=this,o=Zi(r,this.left,this.width);if(this.isHorizontal()){let a=0,l=we(i,this.left+s,this.right-this.lineWidths[a]);for(const u of e)a!==u.row&&(a=u.row,l=we(i,this.left+s,this.right-this.lineWidths[a])),u.top+=this.top+t+s,u.left=o.leftForLtr(o.x(l),u.width),l+=u.width+s}else{let a=0,l=we(i,this.top+t+s,this.bottom-this.columnSizes[a].height);for(const u of e)u.col!==a&&(a=u.col,l=we(i,this.top+t+s,this.bottom-this.columnSizes[a].height)),u.top=l,u.left+=this.left+s,u.left=o.leftForLtr(o.x(u.left),u.width),l+=u.height+s}}isHorizontal(){return this.options.position==="top"||this.options.position==="bottom"}draw(){if(this.options.display){const t=this.ctx;Da(t,this),this._draw(),Ma(t)}}_draw(){const{options:t,columnSizes:e,lineWidths:i,ctx:s}=this,{align:r,labels:o}=t,a=Bt.color,l=Zi(t.rtl,this.left,this.width),u=_e(o.font),{padding:h}=o,d=u.size,p=d/2;let y;this.drawTitle(),s.textAlign=l.textAlign("left"),s.textBaseline="middle",s.lineWidth=.5,s.font=u.string;const{boxWidth:S,boxHeight:b,itemHeight:T}=Bf(o,d),P=function(L,E,g){if(isNaN(S)||S<=0||isNaN(b)||b<0)return;s.save();const _=it(g.lineWidth,1);if(s.fillStyle=it(g.fillStyle,a),s.lineCap=it(g.lineCap,"butt"),s.lineDashOffset=it(g.lineDashOffset,0),s.lineJoin=it(g.lineJoin,"miter"),s.lineWidth=_,s.strokeStyle=it(g.strokeStyle,a),s.setLineDash(it(g.lineDash,[])),o.usePointStyle){const v={radius:b*Math.SQRT2/2,pointStyle:g.pointStyle,rotation:g.rotation,borderWidth:_},I=l.xPlus(L,S/2),A=E+p;Gm(s,v,I,A,o.pointStyleWidth&&S)}else{const v=E+Math.max((d-b)/2,0),I=l.leftForLtr(L,S),A=Ji(g.borderRadius);s.beginPath(),Object.values(A).some(x=>x!==0)?oa(s,{x:I,y:v,w:S,h:b,radius:A}):s.rect(I,v,S,b),s.fill(),_!==0&&s.stroke()}s.restore()},k=function(L,E,g){ra(s,g.text,L,E+T/2,u,{strikethrough:g.hidden,textAlign:l.textAlign(g.textAlign)})},C=this.isHorizontal(),R=this._computeTitleHeight();C?y={x:we(r,this.left+h,this.right-i[0]),y:this.top+h+R,line:0}:y={x:this.left+h,y:we(r,this.top+R+h,this.bottom-e[0].height),line:0},e_(this.ctx,t.textDirection);const M=T+h;this.legendItems.forEach((L,E)=>{s.strokeStyle=L.fontColor,s.fillStyle=L.fontColor;const g=s.measureText(L.text).width,_=l.textAlign(L.textAlign||(L.textAlign=o.textAlign)),v=S+p+g;let I=y.x,A=y.y;l.setWidth(this.width),C?E>0&&I+v+h>this.right&&(A=y.y+=M,y.line++,I=y.x=we(r,this.left+h,this.right-i[y.line])):E>0&&A+M>this.bottom&&(I=y.x=I+e[y.line].width+h,y.line++,A=y.y=we(r,this.top+R+h,this.bottom-e[y.line].height));const x=l.x(I);if(P(x,A,L),I=sx(_,I+S+p,C?I+v:this.right,t.rtl),k(l.x(I),A,L),C)y.x+=v+h;else if(typeof L.text!="string"){const G=u.lineHeight;y.y+=I_(L,G)+h}else y.y+=M}),n_(this.ctx,t.textDirection)}drawTitle(){const t=this.options,e=t.title,i=_e(e.font),s=Fe(e.padding);if(!e.display)return;const r=Zi(t.rtl,this.left,this.width),o=this.ctx,a=e.position,l=i.size/2,u=s.top+l;let h,d=this.left,p=this.width;if(this.isHorizontal())p=Math.max(...this.lineWidths),h=this.top+u,d=we(t.align,d,this.right-p);else{const S=this.columnSizes.reduce((b,T)=>Math.max(b,T.height),0);h=u+we(t.align,this.top,this.bottom-S-t.labels.padding-this._computeTitleHeight())}const y=we(a,d,d+p);o.textAlign=r.textAlign(Hm(a)),o.textBaseline="middle",o.strokeStyle=e.color,o.fillStyle=e.color,o.font=i.string,ra(o,e.text,y,h,i)}_computeTitleHeight(){const t=this.options.title,e=_e(t.font),i=Fe(t.padding);return t.display?e.lineHeight+i.height:0}_getLegendItemAt(t,e){let i,s,r;if(pn(t,this.left,this.right)&&pn(e,this.top,this.bottom)){for(r=this.legendHitBoxes,i=0;i<r.length;++i)if(s=r[i],pn(t,s.left,s.left+s.width)&&pn(e,s.top,s.top+s.height))return this.legendItems[i]}return null}handleEvent(t){const e=this.options;if(!kk(t.type,e))return;const i=this._getLegendItemAt(t.x,t.y);if(t.type==="mousemove"||t.type==="mouseout"){const s=this._hoveredItem,r=Sk(s,i);s&&!r&&Rt(e.onLeave,[t,s,this],this),this._hoveredItem=i,i&&!r&&Rt(e.onHover,[t,i,this],this)}else i&&Rt(e.onClick,[t,i,this],this)}}function xk(n,t,e,i,s){const r=Ak(i,n,t,e),o=Pk(s,i,t.lineHeight);return{itemWidth:r,itemHeight:o}}function Ak(n,t,e,i){let s=n.text;return s&&typeof s!="string"&&(s=s.reduce((r,o)=>r.length>o.length?r:o)),t+e.size/2+i.measureText(s).width}function Pk(n,t,e){let i=n;return typeof t.text!="string"&&(i=I_(t,e)),i}function I_(n,t){const e=n.text?n.text.length:0;return t*e}function kk(n,t){return!!((n==="mousemove"||n==="mouseout")&&(t.onHover||t.onLeave)||t.onClick&&(n==="click"||n==="mouseup"))}var Rk={id:"legend",_element:jf,start(n,t,e){const i=n.legend=new jf({ctx:n.ctx,options:e,chart:n});Nn.configure(n,i,e),Nn.addBox(n,i)},stop(n){Nn.removeBox(n,n.legend),delete n.legend},beforeUpdate(n,t,e){const i=n.legend;Nn.configure(n,i,e),i.options=e},afterUpdate(n){const t=n.legend;t.buildLabels(),t.adjustHitBoxes()},afterEvent(n,t){t.replay||n.legend.handleEvent(t.event)},defaults:{display:!0,position:"top",align:"center",fullSize:!0,reverse:!1,weight:1e3,onClick(n,t,e){const i=t.datasetIndex,s=e.chart;s.isDatasetVisible(i)?(s.hide(i),t.hidden=!0):(s.show(i),t.hidden=!1)},onHover:null,onLeave:null,labels:{color:n=>n.chart.options.color,boxWidth:40,padding:10,generateLabels(n){const t=n.data.datasets,{labels:{usePointStyle:e,pointStyle:i,textAlign:s,color:r,useBorderRadius:o,borderRadius:a}}=n.legend.options;return n._getSortedDatasetMetas().map(l=>{const u=l.controller.getStyle(e?0:void 0),h=Fe(u.borderWidth);return{text:t[l.index].label,fillStyle:u.backgroundColor,fontColor:r,hidden:!l.visible,lineCap:u.borderCapStyle,lineDash:u.borderDash,lineDashOffset:u.borderDashOffset,lineJoin:u.borderJoinStyle,lineWidth:(h.width+h.height)/4,strokeStyle:u.borderColor,pointStyle:i||u.pointStyle,rotation:u.rotation,textAlign:s||u.textAlign,borderRadius:o&&(a||u.borderRadius),datasetIndex:l.index}},this)}},title:{color:n=>n.chart.options.color,display:!1,position:"center",text:""}},descriptors:{_scriptable:n=>!n.startsWith("on"),labels:{_scriptable:n=>!["generateLabels","filter","sort"].includes(n)}}};const Ks={average(n){if(!n.length)return!1;let t,e,i=new Set,s=0,r=0;for(t=0,e=n.length;t<e;++t){const a=n[t].element;if(a&&a.hasValue()){const l=a.tooltipPosition();i.add(l.x),s+=l.y,++r}}return r===0||i.size===0?!1:{x:[...i].reduce((a,l)=>a+l)/i.size,y:s/r}},nearest(n,t){if(!n.length)return!1;let e=t.x,i=t.y,s=Number.POSITIVE_INFINITY,r,o,a;for(r=0,o=n.length;r<o;++r){const l=n[r].element;if(l&&l.hasValue()){const u=l.getCenterPoint(),h=tc(t,u);h<s&&(s=h,a=l)}}if(a){const l=a.tooltipPosition();e=l.x,i=l.y}return{x:e,y:i}}};function Be(n,t){return t&&(Gt(t)?Array.prototype.push.apply(n,t):n.push(t)),n}function an(n){return(typeof n=="string"||n instanceof String)&&n.indexOf(`
`)>-1?n.split(`
`):n}function Ck(n,t){const{element:e,datasetIndex:i,index:s}=t,r=n.getDatasetMeta(i).controller,{label:o,value:a}=r.getLabelAndValue(s);return{chart:n,label:o,parsed:r.getParsed(s),raw:n.data.datasets[i].data[s],formattedValue:a,dataset:r.getDataset(),dataIndex:s,datasetIndex:i,element:e}}function Hf(n,t){const e=n.chart.ctx,{body:i,footer:s,title:r}=n,{boxWidth:o,boxHeight:a}=t,l=_e(t.bodyFont),u=_e(t.titleFont),h=_e(t.footerFont),d=r.length,p=s.length,y=i.length,S=Fe(t.padding);let b=S.height,T=0,P=i.reduce((R,M)=>R+M.before.length+M.lines.length+M.after.length,0);if(P+=n.beforeBody.length+n.afterBody.length,d&&(b+=d*u.lineHeight+(d-1)*t.titleSpacing+t.titleMarginBottom),P){const R=t.displayColors?Math.max(a,l.lineHeight):l.lineHeight;b+=y*R+(P-y)*l.lineHeight+(P-1)*t.bodySpacing}p&&(b+=t.footerMarginTop+p*h.lineHeight+(p-1)*t.footerSpacing);let k=0;const C=function(R){T=Math.max(T,e.measureText(R).width+k)};return e.save(),e.font=u.string,wt(n.title,C),e.font=l.string,wt(n.beforeBody.concat(n.afterBody),C),k=t.displayColors?o+2+t.boxPadding:0,wt(i,R=>{wt(R.before,C),wt(R.lines,C),wt(R.after,C)}),k=0,e.font=h.string,wt(n.footer,C),e.restore(),T+=S.width,{width:T,height:b}}function Dk(n,t){const{y:e,height:i}=t;return e<i/2?"top":e>n.height-i/2?"bottom":"center"}function Mk(n,t,e,i){const{x:s,width:r}=i,o=e.caretSize+e.caretPadding;if(n==="left"&&s+r+o>t.width||n==="right"&&s-r-o<0)return!0}function Ok(n,t,e,i){const{x:s,width:r}=e,{width:o,chartArea:{left:a,right:l}}=n;let u="center";return i==="center"?u=s<=(a+l)/2?"left":"right":s<=r/2?u="left":s>=o-r/2&&(u="right"),Mk(u,n,t,e)&&(u="center"),u}function Wf(n,t,e){const i=e.yAlign||t.yAlign||Dk(n,e);return{xAlign:e.xAlign||t.xAlign||Ok(n,t,e,i),yAlign:i}}function Lk(n,t){let{x:e,width:i}=n;return t==="right"?e-=i:t==="center"&&(e-=i/2),e}function Vk(n,t,e){let{y:i,height:s}=n;return t==="top"?i+=e:t==="bottom"?i-=s+e:i-=s/2,i}function qf(n,t,e,i){const{caretSize:s,caretPadding:r,cornerRadius:o}=n,{xAlign:a,yAlign:l}=e,u=s+r,{topLeft:h,topRight:d,bottomLeft:p,bottomRight:y}=Ji(o);let S=Lk(t,a);const b=Vk(t,l,u);return l==="center"?a==="left"?S+=u:a==="right"&&(S-=u):a==="left"?S-=Math.max(h,p)+s:a==="right"&&(S+=Math.max(d,y)+s),{x:ue(S,0,i.width-t.width),y:ue(b,0,i.height-t.height)}}function fo(n,t,e){const i=Fe(e.padding);return t==="center"?n.x+n.width/2:t==="right"?n.x+n.width-i.right:n.x+i.left}function Kf(n){return Be([],an(n))}function Nk(n,t,e){return Di(n,{tooltip:t,tooltipItems:e,type:"tooltip"})}function Gf(n,t){const e=t&&t.dataset&&t.dataset.tooltip&&t.dataset.tooltip.callbacks;return e?n.override(e):n}const S_={beforeTitle:rn,title(n){if(n.length>0){const t=n[0],e=t.chart.data.labels,i=e?e.length:0;if(this&&this.options&&this.options.mode==="dataset")return t.dataset.label||"";if(t.label)return t.label;if(i>0&&t.dataIndex<i)return e[t.dataIndex]}return""},afterTitle:rn,beforeBody:rn,beforeLabel:rn,label(n){if(this&&this.options&&this.options.mode==="dataset")return n.label+": "+n.formattedValue||n.formattedValue;let t=n.dataset.label||"";t&&(t+=": ");const e=n.formattedValue;return _t(e)||(t+=e),t},labelColor(n){const e=n.chart.getDatasetMeta(n.datasetIndex).controller.getStyle(n.dataIndex);return{borderColor:e.borderColor,backgroundColor:e.backgroundColor,borderWidth:e.borderWidth,borderDash:e.borderDash,borderDashOffset:e.borderDashOffset,borderRadius:0}},labelTextColor(){return this.options.bodyColor},labelPointStyle(n){const e=n.chart.getDatasetMeta(n.datasetIndex).controller.getStyle(n.dataIndex);return{pointStyle:e.pointStyle,rotation:e.rotation}},afterLabel:rn,afterBody:rn,beforeFooter:rn,footer:rn,afterFooter:rn};function pe(n,t,e,i){const s=n[t].call(e,i);return typeof s>"u"?S_[t].call(e,i):s}class ac extends tn{constructor(t){super(),this.opacity=0,this._active=[],this._eventPosition=void 0,this._size=void 0,this._cachedAnimations=void 0,this._tooltipItems=[],this.$animations=void 0,this.$context=void 0,this.chart=t.chart,this.options=t.options,this.dataPoints=void 0,this.title=void 0,this.beforeBody=void 0,this.body=void 0,this.afterBody=void 0,this.footer=void 0,this.xAlign=void 0,this.yAlign=void 0,this.x=void 0,this.y=void 0,this.height=void 0,this.width=void 0,this.caretX=void 0,this.caretY=void 0,this.labelColors=void 0,this.labelPointStyles=void 0,this.labelTextColors=void 0}initialize(t){this.options=t,this._cachedAnimations=void 0,this.$context=void 0}_resolveAnimations(){const t=this._cachedAnimations;if(t)return t;const e=this.chart,i=this.options.setContext(this.getContext()),s=i.enabled&&e.options.animation&&i.animations,r=new a_(this.chart,s);return s._cacheable&&(this._cachedAnimations=Object.freeze(r)),r}getContext(){return this.$context||(this.$context=Nk(this.chart.getContext(),this,this._tooltipItems))}getTitle(t,e){const{callbacks:i}=e,s=pe(i,"beforeTitle",this,t),r=pe(i,"title",this,t),o=pe(i,"afterTitle",this,t);let a=[];return a=Be(a,an(s)),a=Be(a,an(r)),a=Be(a,an(o)),a}getBeforeBody(t,e){return Kf(pe(e.callbacks,"beforeBody",this,t))}getBody(t,e){const{callbacks:i}=e,s=[];return wt(t,r=>{const o={before:[],lines:[],after:[]},a=Gf(i,r);Be(o.before,an(pe(a,"beforeLabel",this,r))),Be(o.lines,pe(a,"label",this,r)),Be(o.after,an(pe(a,"afterLabel",this,r))),s.push(o)}),s}getAfterBody(t,e){return Kf(pe(e.callbacks,"afterBody",this,t))}getFooter(t,e){const{callbacks:i}=e,s=pe(i,"beforeFooter",this,t),r=pe(i,"footer",this,t),o=pe(i,"afterFooter",this,t);let a=[];return a=Be(a,an(s)),a=Be(a,an(r)),a=Be(a,an(o)),a}_createItems(t){const e=this._active,i=this.chart.data,s=[],r=[],o=[];let a=[],l,u;for(l=0,u=e.length;l<u;++l)a.push(Ck(this.chart,e[l]));return t.filter&&(a=a.filter((h,d,p)=>t.filter(h,d,p,i))),t.itemSort&&(a=a.sort((h,d)=>t.itemSort(h,d,i))),wt(a,h=>{const d=Gf(t.callbacks,h);s.push(pe(d,"labelColor",this,h)),r.push(pe(d,"labelPointStyle",this,h)),o.push(pe(d,"labelTextColor",this,h))}),this.labelColors=s,this.labelPointStyles=r,this.labelTextColors=o,this.dataPoints=a,a}update(t,e){const i=this.options.setContext(this.getContext()),s=this._active;let r,o=[];if(!s.length)this.opacity!==0&&(r={opacity:0});else{const a=Ks[i.position].call(this,s,this._eventPosition);o=this._createItems(i),this.title=this.getTitle(o,i),this.beforeBody=this.getBeforeBody(o,i),this.body=this.getBody(o,i),this.afterBody=this.getAfterBody(o,i),this.footer=this.getFooter(o,i);const l=this._size=Hf(this,i),u=Object.assign({},a,l),h=Wf(this.chart,i,u),d=qf(i,u,h,this.chart);this.xAlign=h.xAlign,this.yAlign=h.yAlign,r={opacity:1,x:d.x,y:d.y,width:l.width,height:l.height,caretX:a.x,caretY:a.y}}this._tooltipItems=o,this.$context=void 0,r&&this._resolveAnimations().update(this,r),t&&i.external&&i.external.call(this,{chart:this.chart,tooltip:this,replay:e})}drawCaret(t,e,i,s){const r=this.getCaretPosition(t,i,s);e.lineTo(r.x1,r.y1),e.lineTo(r.x2,r.y2),e.lineTo(r.x3,r.y3)}getCaretPosition(t,e,i){const{xAlign:s,yAlign:r}=this,{caretSize:o,cornerRadius:a}=i,{topLeft:l,topRight:u,bottomLeft:h,bottomRight:d}=Ji(a),{x:p,y}=t,{width:S,height:b}=e;let T,P,k,C,R,M;return r==="center"?(R=y+b/2,s==="left"?(T=p,P=T-o,C=R+o,M=R-o):(T=p+S,P=T+o,C=R-o,M=R+o),k=T):(s==="left"?P=p+Math.max(l,h)+o:s==="right"?P=p+S-Math.max(u,d)-o:P=this.caretX,r==="top"?(C=y,R=C-o,T=P-o,k=P+o):(C=y+b,R=C+o,T=P+o,k=P-o),M=C),{x1:T,x2:P,x3:k,y1:C,y2:R,y3:M}}drawTitle(t,e,i){const s=this.title,r=s.length;let o,a,l;if(r){const u=Zi(i.rtl,this.x,this.width);for(t.x=fo(this,i.titleAlign,i),e.textAlign=u.textAlign(i.titleAlign),e.textBaseline="middle",o=_e(i.titleFont),a=i.titleSpacing,e.fillStyle=i.titleColor,e.font=o.string,l=0;l<r;++l)e.fillText(s[l],u.x(t.x),t.y+o.lineHeight/2),t.y+=o.lineHeight+a,l+1===r&&(t.y+=i.titleMarginBottom-a)}}_drawColorBox(t,e,i,s,r){const o=this.labelColors[i],a=this.labelPointStyles[i],{boxHeight:l,boxWidth:u}=r,h=_e(r.bodyFont),d=fo(this,"left",r),p=s.x(d),y=l<h.lineHeight?(h.lineHeight-l)/2:0,S=e.y+y;if(r.usePointStyle){const b={radius:Math.min(u,l)/2,pointStyle:a.pointStyle,rotation:a.rotation,borderWidth:1},T=s.leftForLtr(p,u)+u/2,P=S+l/2;t.strokeStyle=r.multiKeyBackground,t.fillStyle=r.multiKeyBackground,nc(t,b,T,P),t.strokeStyle=o.borderColor,t.fillStyle=o.backgroundColor,nc(t,b,T,P)}else{t.lineWidth=ht(o.borderWidth)?Math.max(...Object.values(o.borderWidth)):o.borderWidth||1,t.strokeStyle=o.borderColor,t.setLineDash(o.borderDash||[]),t.lineDashOffset=o.borderDashOffset||0;const b=s.leftForLtr(p,u),T=s.leftForLtr(s.xPlus(p,1),u-2),P=Ji(o.borderRadius);Object.values(P).some(k=>k!==0)?(t.beginPath(),t.fillStyle=r.multiKeyBackground,oa(t,{x:b,y:S,w:u,h:l,radius:P}),t.fill(),t.stroke(),t.fillStyle=o.backgroundColor,t.beginPath(),oa(t,{x:T,y:S+1,w:u-2,h:l-2,radius:P}),t.fill()):(t.fillStyle=r.multiKeyBackground,t.fillRect(b,S,u,l),t.strokeRect(b,S,u,l),t.fillStyle=o.backgroundColor,t.fillRect(T,S+1,u-2,l-2))}t.fillStyle=this.labelTextColors[i]}drawBody(t,e,i){const{body:s}=this,{bodySpacing:r,bodyAlign:o,displayColors:a,boxHeight:l,boxWidth:u,boxPadding:h}=i,d=_e(i.bodyFont);let p=d.lineHeight,y=0;const S=Zi(i.rtl,this.x,this.width),b=function(g){e.fillText(g,S.x(t.x+y),t.y+p/2),t.y+=p+r},T=S.textAlign(o);let P,k,C,R,M,L,E;for(e.textAlign=o,e.textBaseline="middle",e.font=d.string,t.x=fo(this,T,i),e.fillStyle=i.bodyColor,wt(this.beforeBody,b),y=a&&T!=="right"?o==="center"?u/2+h:u+2+h:0,R=0,L=s.length;R<L;++R){for(P=s[R],k=this.labelTextColors[R],e.fillStyle=k,wt(P.before,b),C=P.lines,a&&C.length&&(this._drawColorBox(e,t,R,S,i),p=Math.max(d.lineHeight,l)),M=0,E=C.length;M<E;++M)b(C[M]),p=d.lineHeight;wt(P.after,b)}y=0,p=d.lineHeight,wt(this.afterBody,b),t.y-=r}drawFooter(t,e,i){const s=this.footer,r=s.length;let o,a;if(r){const l=Zi(i.rtl,this.x,this.width);for(t.x=fo(this,i.footerAlign,i),t.y+=i.footerMarginTop,e.textAlign=l.textAlign(i.footerAlign),e.textBaseline="middle",o=_e(i.footerFont),e.fillStyle=i.footerColor,e.font=o.string,a=0;a<r;++a)e.fillText(s[a],l.x(t.x),t.y+o.lineHeight/2),t.y+=o.lineHeight+i.footerSpacing}}drawBackground(t,e,i,s){const{xAlign:r,yAlign:o}=this,{x:a,y:l}=t,{width:u,height:h}=i,{topLeft:d,topRight:p,bottomLeft:y,bottomRight:S}=Ji(s.cornerRadius);e.fillStyle=s.backgroundColor,e.strokeStyle=s.borderColor,e.lineWidth=s.borderWidth,e.beginPath(),e.moveTo(a+d,l),o==="top"&&this.drawCaret(t,e,i,s),e.lineTo(a+u-p,l),e.quadraticCurveTo(a+u,l,a+u,l+p),o==="center"&&r==="right"&&this.drawCaret(t,e,i,s),e.lineTo(a+u,l+h-S),e.quadraticCurveTo(a+u,l+h,a+u-S,l+h),o==="bottom"&&this.drawCaret(t,e,i,s),e.lineTo(a+y,l+h),e.quadraticCurveTo(a,l+h,a,l+h-y),o==="center"&&r==="left"&&this.drawCaret(t,e,i,s),e.lineTo(a,l+d),e.quadraticCurveTo(a,l,a+d,l),e.closePath(),e.fill(),s.borderWidth>0&&e.stroke()}_updateAnimationTarget(t){const e=this.chart,i=this.$animations,s=i&&i.x,r=i&&i.y;if(s||r){const o=Ks[t.position].call(this,this._active,this._eventPosition);if(!o)return;const a=this._size=Hf(this,t),l=Object.assign({},o,this._size),u=Wf(e,t,l),h=qf(t,l,u,e);(s._to!==h.x||r._to!==h.y)&&(this.xAlign=u.xAlign,this.yAlign=u.yAlign,this.width=a.width,this.height=a.height,this.caretX=o.x,this.caretY=o.y,this._resolveAnimations().update(this,h))}}_willRender(){return!!this.opacity}draw(t){const e=this.options.setContext(this.getContext());let i=this.opacity;if(!i)return;this._updateAnimationTarget(e);const s={width:this.width,height:this.height},r={x:this.x,y:this.y};i=Math.abs(i)<.001?0:i;const o=Fe(e.padding),a=this.title.length||this.beforeBody.length||this.body.length||this.afterBody.length||this.footer.length;e.enabled&&a&&(t.save(),t.globalAlpha=i,this.drawBackground(r,t,s,e),e_(t,e.textDirection),r.y+=o.top,this.drawTitle(r,t,e),this.drawBody(r,t,e),this.drawFooter(r,t,e),n_(t,e.textDirection),t.restore())}getActiveElements(){return this._active||[]}setActiveElements(t,e){const i=this._active,s=t.map(({datasetIndex:a,index:l})=>{const u=this.chart.getDatasetMeta(a);if(!u)throw new Error("Cannot find a dataset at index "+a);return{datasetIndex:a,element:u.data[l],index:l}}),r=!na(i,s),o=this._positionChanged(s,e);(r||o)&&(this._active=s,this._eventPosition=e,this._ignoreReplayEvents=!0,this.update(!0))}handleEvent(t,e,i=!0){if(e&&this._ignoreReplayEvents)return!1;this._ignoreReplayEvents=!1;const s=this.options,r=this._active||[],o=this._getActiveElements(t,r,e,i),a=this._positionChanged(o,t),l=e||!na(o,r)||a;return l&&(this._active=o,(s.enabled||s.external)&&(this._eventPosition={x:t.x,y:t.y},this.update(!0,e))),l}_getActiveElements(t,e,i,s){const r=this.options;if(t.type==="mouseout")return[];if(!s)return e.filter(a=>this.chart.data.datasets[a.datasetIndex]&&this.chart.getDatasetMeta(a.datasetIndex).controller.getParsed(a.index)!==void 0);const o=this.chart.getElementsAtEventForMode(t,r.mode,r,i);return r.reverse&&o.reverse(),o}_positionChanged(t,e){const{caretX:i,caretY:s,options:r}=this,o=Ks[r.position].call(this,t,e);return o!==!1&&(i!==o.x||s!==o.y)}}z(ac,"positioners",Ks);var Fk={id:"tooltip",_element:ac,positioners:Ks,afterInit(n,t,e){e&&(n.tooltip=new ac({chart:n,options:e}))},beforeUpdate(n,t,e){n.tooltip&&n.tooltip.initialize(e)},reset(n,t,e){n.tooltip&&n.tooltip.initialize(e)},afterDraw(n){const t=n.tooltip;if(t&&t._willRender()){const e={tooltip:t};if(n.notifyPlugins("beforeTooltipDraw",{...e,cancelable:!0})===!1)return;t.draw(n.ctx),n.notifyPlugins("afterTooltipDraw",e)}},afterEvent(n,t){if(n.tooltip){const e=t.replay;n.tooltip.handleEvent(t.event,e,t.inChartArea)&&(t.changed=!0)}},defaults:{enabled:!0,external:null,position:"average",backgroundColor:"rgba(0,0,0,0.8)",titleColor:"#fff",titleFont:{weight:"bold"},titleSpacing:2,titleMarginBottom:6,titleAlign:"left",bodyColor:"#fff",bodySpacing:2,bodyFont:{},bodyAlign:"left",footerColor:"#fff",footerSpacing:2,footerMarginTop:6,footerFont:{weight:"bold"},footerAlign:"left",padding:6,caretPadding:2,caretSize:5,cornerRadius:6,boxHeight:(n,t)=>t.bodyFont.size,boxWidth:(n,t)=>t.bodyFont.size,multiKeyBackground:"#fff",displayColors:!0,boxPadding:0,borderColor:"rgba(0,0,0,0)",borderWidth:0,animation:{duration:400,easing:"easeOutQuart"},animations:{numbers:{type:"number",properties:["x","y","width","height","caretX","caretY"]},opacity:{easing:"linear",duration:200}},callbacks:S_},defaultRoutes:{bodyFont:"font",footerFont:"font",titleFont:"font"},descriptors:{_scriptable:n=>n!=="filter"&&n!=="itemSort"&&n!=="external",_indexable:!1,callbacks:{_scriptable:!1,_indexable:!1},animation:{_fallback:!1},animations:{_fallback:"animation"}},additionalOptionScopes:["interaction"]};const $k=(n,t,e,i)=>(typeof t=="string"?(e=n.push(t)-1,i.unshift({index:e,label:t})):isNaN(t)&&(e=null),e);function Uk(n,t,e,i){const s=n.indexOf(t);if(s===-1)return $k(n,t,e,i);const r=n.lastIndexOf(t);return s!==r?e:s}const zk=(n,t)=>n===null?null:ue(Math.round(n),0,t);function Yf(n){const t=this.getLabels();return n>=0&&n<t.length?t[n]:n}class lc extends _s{constructor(t){super(t),this._startValue=void 0,this._valueRange=0,this._addedLabels=[]}init(t){const e=this._addedLabels;if(e.length){const i=this.getLabels();for(const{index:s,label:r}of e)i[s]===r&&i.splice(s,1);this._addedLabels=[]}super.init(t)}parse(t,e){if(_t(t))return null;const i=this.getLabels();return e=isFinite(e)&&i[e]===t?e:Uk(i,t,it(e,t),this._addedLabels),zk(e,i.length-1)}determineDataLimits(){const{minDefined:t,maxDefined:e}=this.getUserBounds();let{min:i,max:s}=this.getMinMax(!0);this.options.bounds==="ticks"&&(t||(i=0),e||(s=this.getLabels().length-1)),this.min=i,this.max=s}buildTicks(){const t=this.min,e=this.max,i=this.options.offset,s=[];let r=this.getLabels();r=t===0&&e===r.length-1?r:r.slice(t,e+1),this._valueRange=Math.max(r.length-(i?0:1),1),this._startValue=this.min-(i?.5:0);for(let o=t;o<=e;o++)s.push({value:o});return s}getLabelForValue(t){return Yf.call(this,t)}configure(){super.configure(),this.isHorizontal()||(this._reversePixels=!this._reversePixels)}getPixelForValue(t){return typeof t!="number"&&(t=this.parse(t)),t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getPixelForTick(t){const e=this.ticks;return t<0||t>e.length-1?null:this.getPixelForValue(e[t].value)}getValueForPixel(t){return Math.round(this._startValue+this.getDecimalForPixel(t)*this._valueRange)}getBasePixel(){return this.bottom}}z(lc,"id","category"),z(lc,"defaults",{ticks:{callback:Yf}});function Bk(n,t){const e=[],{bounds:s,step:r,min:o,max:a,precision:l,count:u,maxTicks:h,maxDigits:d,includeBounds:p}=n,y=r||1,S=h-1,{min:b,max:T}=t,P=!_t(o),k=!_t(a),C=!_t(u),R=(T-b)/(d+1);let M=Wd((T-b)/S/y)*y,L,E,g,_;if(M<1e-14&&!P&&!k)return[{value:b},{value:T}];_=Math.ceil(T/M)-Math.floor(b/M),_>S&&(M=Wd(_*M/S/y)*y),_t(l)||(L=Math.pow(10,l),M=Math.ceil(M*L)/L),s==="ticks"?(E=Math.floor(b/M)*M,g=Math.ceil(T/M)*M):(E=b,g=T),P&&k&&r&&YS((a-o)/r,M/1e3)?(_=Math.round(Math.min((a-o)/M,h)),M=(a-o)/_,E=o,g=a):C?(E=P?o:E,g=k?a:g,_=u-1,M=(g-E)/_):(_=(g-E)/M,nr(_,Math.round(_),M/1e3)?_=Math.round(_):_=Math.ceil(_));const v=Math.max(qd(M),qd(E));L=Math.pow(10,_t(l)?v:l),E=Math.round(E*L)/L,g=Math.round(g*L)/L;let I=0;for(P&&(p&&E!==o?(e.push({value:o}),E<o&&I++,nr(Math.round((E+I*M)*L)/L,o,Qf(o,R,n))&&I++):E<o&&I++);I<_;++I){const A=Math.round((E+I*M)*L)/L;if(k&&A>a)break;e.push({value:A})}return k&&p&&g!==a?e.length&&nr(e[e.length-1].value,a,Qf(a,R,n))?e[e.length-1].value=a:e.push({value:a}):(!k||g===a)&&e.push({value:g}),e}function Qf(n,t,{horizontal:e,minRotation:i}){const s=fn(i),r=(e?Math.sin(s):Math.cos(s))||.001,o=.75*t*(""+n).length;return Math.min(t/r,o)}class jk extends _s{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}parse(t,e){return _t(t)||(typeof t=="number"||t instanceof Number)&&!isFinite(+t)?null:+t}handleTickRangeOptions(){const{beginAtZero:t}=this.options,{minDefined:e,maxDefined:i}=this.getUserBounds();let{min:s,max:r}=this;const o=l=>s=e?s:l,a=l=>r=i?r:l;if(t){const l=Ye(s),u=Ye(r);l<0&&u<0?a(0):l>0&&u>0&&o(0)}if(s===r){let l=r===0?1:Math.abs(r*.05);a(r+l),t||o(s-l)}this.min=s,this.max=r}getTickLimit(){const t=this.options.ticks;let{maxTicksLimit:e,stepSize:i}=t,s;return i?(s=Math.ceil(this.max/i)-Math.floor(this.min/i)+1,s>1e3&&(console.warn(`scales.${this.id}.ticks.stepSize: ${i} would result generating up to ${s} ticks. Limiting to 1000.`),s=1e3)):(s=this.computeTickLimit(),e=e||11),e&&(s=Math.min(e,s)),s}computeTickLimit(){return Number.POSITIVE_INFINITY}buildTicks(){const t=this.options,e=t.ticks;let i=this.getTickLimit();i=Math.max(2,i);const s={maxTicks:i,bounds:t.bounds,min:t.min,max:t.max,precision:e.precision,step:e.stepSize,count:e.count,maxDigits:this._maxDigits(),horizontal:this.isHorizontal(),minRotation:e.minRotation||0,includeBounds:e.includeBounds!==!1},r=this._range||this,o=Bk(s,r);return t.bounds==="ticks"&&QS(o,this,"value"),t.reverse?(o.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),o}configure(){const t=this.ticks;let e=this.min,i=this.max;if(super.configure(),this.options.offset&&t.length){const s=(i-e)/Math.max(t.length-1,1)/2;e-=s,i+=s}this._startValue=e,this._endValue=i,this._valueRange=i-e}getLabelForValue(t){return hu(t,this.chart.options.locale,this.options.ticks.format)}}class cc extends jk{determineDataLimits(){const{min:t,max:e}=this.getMinMax(!0);this.min=de(t)?t:0,this.max=de(e)?e:1,this.handleTickRangeOptions()}computeTickLimit(){const t=this.isHorizontal(),e=t?this.width:this.height,i=fn(this.options.ticks.minRotation),s=(t?Math.sin(i):Math.cos(i))||.001,r=this._resolveTickFontOptions(0);return Math.ceil(e/Math.min(40,r.lineHeight/s))}getPixelForValue(t){return t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getValueForPixel(t){return this._startValue+this.getDecimalForPixel(t)*this._valueRange}}z(cc,"id","linear"),z(cc,"defaults",{ticks:{callback:Km.formatters.numeric}});const Na={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},me=Object.keys(Na);function Xf(n,t){return n-t}function Jf(n,t){if(_t(t))return null;const e=n._adapter,{parser:i,round:s,isoWeekday:r}=n._parseOpts;let o=t;return typeof i=="function"&&(o=i(o)),de(o)||(o=typeof i=="string"?e.parse(o,i):e.parse(o)),o===null?null:(s&&(o=s==="week"&&(as(r)||r===!0)?e.startOf(o,"isoWeek",r):e.startOf(o,s)),+o)}function Zf(n,t,e,i){const s=me.length;for(let r=me.indexOf(n);r<s-1;++r){const o=Na[me[r]],a=o.steps?o.steps:Number.MAX_SAFE_INTEGER;if(o.common&&Math.ceil((e-t)/(a*o.size))<=i)return me[r]}return me[s-1]}function Hk(n,t,e,i,s){for(let r=me.length-1;r>=me.indexOf(e);r--){const o=me[r];if(Na[o].common&&n._adapter.diff(s,i,o)>=t-1)return o}return me[e?me.indexOf(e):0]}function Wk(n){for(let t=me.indexOf(n)+1,e=me.length;t<e;++t)if(Na[me[t]].common)return me[t]}function tp(n,t,e){if(!e)n[t]=!0;else if(e.length){const{lo:i,hi:s}=cu(e,t),r=e[i]>=t?e[i]:e[s];n[r]=!0}}function qk(n,t,e,i){const s=n._adapter,r=+s.startOf(t[0].value,i),o=t[t.length-1].value;let a,l;for(a=r;a<=o;a=+s.add(a,1,i))l=e[a],l>=0&&(t[l].major=!0);return t}function ep(n,t,e){const i=[],s={},r=t.length;let o,a;for(o=0;o<r;++o)a=t[o],s[a]=o,i.push({value:a,major:!1});return r===0||!e?i:qk(n,i,s,e)}class ua extends _s{constructor(t){super(t),this._cache={data:[],labels:[],all:[]},this._unit="day",this._majorUnit=void 0,this._offsets={},this._normalized=!1,this._parseOpts=void 0}init(t,e={}){const i=t.time||(t.time={}),s=this._adapter=new RA._date(t.adapters.date);s.init(e),er(i.displayFormats,s.formats()),this._parseOpts={parser:i.parser,round:i.round,isoWeekday:i.isoWeekday},super.init(t),this._normalized=e.normalized}parse(t,e){return t===void 0?null:Jf(this,t)}beforeLayout(){super.beforeLayout(),this._cache={data:[],labels:[],all:[]}}determineDataLimits(){const t=this.options,e=this._adapter,i=t.time.unit||"day";let{min:s,max:r,minDefined:o,maxDefined:a}=this.getUserBounds();function l(u){!o&&!isNaN(u.min)&&(s=Math.min(s,u.min)),!a&&!isNaN(u.max)&&(r=Math.max(r,u.max))}(!o||!a)&&(l(this._getLabelBounds()),(t.bounds!=="ticks"||t.ticks.source!=="labels")&&l(this.getMinMax(!1))),s=de(s)&&!isNaN(s)?s:+e.startOf(Date.now(),i),r=de(r)&&!isNaN(r)?r:+e.endOf(Date.now(),i)+1,this.min=Math.min(s,r-1),this.max=Math.max(s+1,r)}_getLabelBounds(){const t=this.getLabelTimestamps();let e=Number.POSITIVE_INFINITY,i=Number.NEGATIVE_INFINITY;return t.length&&(e=t[0],i=t[t.length-1]),{min:e,max:i}}buildTicks(){const t=this.options,e=t.time,i=t.ticks,s=i.source==="labels"?this.getLabelTimestamps():this._generate();t.bounds==="ticks"&&s.length&&(this.min=this._userMin||s[0],this.max=this._userMax||s[s.length-1]);const r=this.min,o=this.max,a=ex(s,r,o);return this._unit=e.unit||(i.autoSkip?Zf(e.minUnit,this.min,this.max,this._getLabelCapacity(r)):Hk(this,a.length,e.minUnit,this.min,this.max)),this._majorUnit=!i.major.enabled||this._unit==="year"?void 0:Wk(this._unit),this.initOffsets(s),t.reverse&&a.reverse(),ep(this,a,this._majorUnit)}afterAutoSkip(){this.options.offsetAfterAutoskip&&this.initOffsets(this.ticks.map(t=>+t.value))}initOffsets(t=[]){let e=0,i=0,s,r;this.options.offset&&t.length&&(s=this.getDecimalForValue(t[0]),t.length===1?e=1-s:e=(this.getDecimalForValue(t[1])-s)/2,r=this.getDecimalForValue(t[t.length-1]),t.length===1?i=r:i=(r-this.getDecimalForValue(t[t.length-2]))/2);const o=t.length<3?.5:.25;e=ue(e,0,o),i=ue(i,0,o),this._offsets={start:e,end:i,factor:1/(e+1+i)}}_generate(){const t=this._adapter,e=this.min,i=this.max,s=this.options,r=s.time,o=r.unit||Zf(r.minUnit,e,i,this._getLabelCapacity(e)),a=it(s.ticks.stepSize,1),l=o==="week"?r.isoWeekday:!1,u=as(l)||l===!0,h={};let d=e,p,y;if(u&&(d=+t.startOf(d,"isoWeek",l)),d=+t.startOf(d,u?"day":o),t.diff(i,e,o)>1e5*a)throw new Error(e+" and "+i+" are too far apart with stepSize of "+a+" "+o);const S=s.ticks.source==="data"&&this.getDataTimestamps();for(p=d,y=0;p<i;p=+t.add(p,a,o),y++)tp(h,p,S);return(p===i||s.bounds==="ticks"||y===1)&&tp(h,p,S),Object.keys(h).sort(Xf).map(b=>+b)}getLabelForValue(t){const e=this._adapter,i=this.options.time;return i.tooltipFormat?e.format(t,i.tooltipFormat):e.format(t,i.displayFormats.datetime)}format(t,e){const s=this.options.time.displayFormats,r=this._unit,o=e||s[r];return this._adapter.format(t,o)}_tickFormatFunction(t,e,i,s){const r=this.options,o=r.ticks.callback;if(o)return Rt(o,[t,e,i],this);const a=r.time.displayFormats,l=this._unit,u=this._majorUnit,h=l&&a[l],d=u&&a[u],p=i[e],y=u&&d&&p&&p.major;return this._adapter.format(t,s||(y?d:h))}generateTickLabels(t){let e,i,s;for(e=0,i=t.length;e<i;++e)s=t[e],s.label=this._tickFormatFunction(s.value,e,t)}getDecimalForValue(t){return t===null?NaN:(t-this.min)/(this.max-this.min)}getPixelForValue(t){const e=this._offsets,i=this.getDecimalForValue(t);return this.getPixelForDecimal((e.start+i)*e.factor)}getValueForPixel(t){const e=this._offsets,i=this.getDecimalForPixel(t)/e.factor-e.end;return this.min+i*(this.max-this.min)}_getLabelSize(t){const e=this.options.ticks,i=this.ctx.measureText(t).width,s=fn(this.isHorizontal()?e.maxRotation:e.minRotation),r=Math.cos(s),o=Math.sin(s),a=this._resolveTickFontOptions(0).size;return{w:i*r+a*o,h:i*o+a*r}}_getLabelCapacity(t){const e=this.options.time,i=e.displayFormats,s=i[e.unit]||i.millisecond,r=this._tickFormatFunction(t,0,ep(this,[t],this._majorUnit),s),o=this._getLabelSize(r),a=Math.floor(this.isHorizontal()?this.width/o.w:this.height/o.h)-1;return a>0?a:1}getDataTimestamps(){let t=this._cache.data||[],e,i;if(t.length)return t;const s=this.getMatchingVisibleMetas();if(this._normalized&&s.length)return this._cache.data=s[0].controller.getAllParsedValues(this);for(e=0,i=s.length;e<i;++e)t=t.concat(s[e].controller.getAllParsedValues(this));return this._cache.data=this.normalize(t)}getLabelTimestamps(){const t=this._cache.labels||[];let e,i;if(t.length)return t;const s=this.getLabels();for(e=0,i=s.length;e<i;++e)t.push(Jf(this,s[e]));return this._cache.labels=this._normalized?t:this.normalize(t)}normalize(t){return zm(t.sort(Xf))}}z(ua,"id","time"),z(ua,"defaults",{bounds:"data",adapters:{},time:{parser:!1,unit:!1,round:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{}},ticks:{source:"auto",callback:!1,major:{enabled:!1}}});function po(n,t,e){let i=0,s=n.length-1,r,o,a,l;e?(t>=n[i].pos&&t<=n[s].pos&&({lo:i,hi:s}=fi(n,"pos",t)),{pos:r,time:a}=n[i],{pos:o,time:l}=n[s]):(t>=n[i].time&&t<=n[s].time&&({lo:i,hi:s}=fi(n,"time",t)),{time:r,pos:a}=n[i],{time:o,pos:l}=n[s]);const u=o-r;return u?a+(l-a)*(t-r)/u:a}class np extends ua{constructor(t){super(t),this._table=[],this._minPos=void 0,this._tableRange=void 0}initOffsets(){const t=this._getTimestampsForTable(),e=this._table=this.buildLookupTable(t);this._minPos=po(e,this.min),this._tableRange=po(e,this.max)-this._minPos,super.initOffsets(t)}buildLookupTable(t){const{min:e,max:i}=this,s=[],r=[];let o,a,l,u,h;for(o=0,a=t.length;o<a;++o)u=t[o],u>=e&&u<=i&&s.push(u);if(s.length<2)return[{time:e,pos:0},{time:i,pos:1}];for(o=0,a=s.length;o<a;++o)h=s[o+1],l=s[o-1],u=s[o],Math.round((h+l)/2)!==u&&r.push({time:u,pos:o/(a-1)});return r}_generate(){const t=this.min,e=this.max;let i=super.getDataTimestamps();return(!i.includes(t)||!i.length)&&i.splice(0,0,t),(!i.includes(e)||i.length===1)&&i.push(e),i.sort((s,r)=>s-r)}_getTimestampsForTable(){let t=this._cache.all||[];if(t.length)return t;const e=this.getDataTimestamps(),i=this.getLabelTimestamps();return e.length&&i.length?t=this.normalize(e.concat(i)):t=e.length?e:i,t=this._cache.all=t,t}getDecimalForValue(t){return(po(this._table,t)-this._minPos)/this._tableRange}getValueForPixel(t){const e=this._offsets,i=this.getDecimalForPixel(t)/e.factor-e.end;return po(this._table,i*this._tableRange+this._minPos,!0)}}z(np,"id","timeseries"),z(np,"defaults",ua.defaults);cn.register(Po,Ao,Hs,ko,Fn,Mo,Do,qs,lc,cc,Ik,Rk,Fk);const go={};function Lr(n,t){const e=document.getElementById(n);if(!e)return null;go[n]&&go[n].destroy();const i=e.getContext("2d");return go[n]=new cn(i,t),go[n]}const ip="rgba(148, 163, 184, 0.08)",rr="#64748b",yi="Inter, sans-serif",ye={x:{grid:{color:ip,drawBorder:!1},ticks:{color:rr,font:{family:yi,size:11}}},y:{grid:{color:ip,drawBorder:!1},ticks:{color:rr,font:{family:yi,size:11}}}},vn={legend:{display:!1},tooltip:{backgroundColor:"rgba(17, 24, 39, 0.95)",titleFont:{family:yi,size:12},bodyFont:{family:yi,size:12},padding:10,cornerRadius:8,borderColor:"rgba(148, 163, 184, 0.2)",borderWidth:1}};function Kk(n){n.length&&Lr("chart-equity",{type:"line",data:{labels:n.map(t=>t.date),datasets:[{label:"Equity",data:n.map(t=>t.equity),borderColor:"#818cf8",backgroundColor:"rgba(129, 140, 248, 0.1)",fill:!0,borderWidth:2,tension:.3,pointRadius:0,pointHoverRadius:4,pointHoverBackgroundColor:"#818cf8"}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{...vn,tooltip:{...vn.tooltip,callbacks:{label:t=>`P&L: $${t.parsed.y.toFixed(2)}`}}},scales:{...ye,y:{...ye.y,ticks:{...ye.y.ticks,callback:t=>"$"+t.toLocaleString()}}}}})}function Gk(n){n.length&&Lr("chart-daily",{type:"bar",data:{labels:n.map(t=>t.date),datasets:[{label:"P&L",data:n.map(t=>t.pnl),backgroundColor:n.map(t=>t.pnl>=0?"rgba(34, 197, 94, 0.7)":"rgba(239, 68, 68, 0.7)"),borderColor:n.map(t=>t.pnl>=0?"#22c55e":"#ef4444"),borderWidth:1,borderRadius:4}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{...vn,tooltip:{...vn.tooltip,callbacks:{label:t=>`P&L: $${t.parsed.y.toFixed(2)}`}}},scales:{...ye,y:{...ye.y,ticks:{...ye.y.ticks,callback:t=>"$"+t.toLocaleString()}}}}})}function Yk(n){n.length&&Lr("chart-coins",{type:"bar",data:{labels:n.map(t=>t.coin),datasets:[{label:"P&L",data:n.map(t=>t.pnl),backgroundColor:n.map(t=>t.pnl>=0?"rgba(34, 197, 94, 0.7)":"rgba(239, 68, 68, 0.7)"),borderColor:n.map(t=>t.pnl>=0?"#22c55e":"#ef4444"),borderWidth:1,borderRadius:4}]},options:{indexAxis:"y",responsive:!0,maintainAspectRatio:!1,plugins:{...vn,tooltip:{...vn.tooltip,callbacks:{label:t=>`P&L: $${t.parsed.x.toFixed(2)}`}}},scales:{x:{...ye.x,ticks:{...ye.x.ticks,callback:t=>"$"+t.toLocaleString()}},y:ye.y}}})}function Qk(n){n.length&&Lr("chart-strategies",{type:"bar",data:{labels:n.map(t=>t.strategy),datasets:[{label:"P&L",data:n.map(t=>t.pnl),backgroundColor:n.map(t=>t.pnl>=0?"rgba(34, 197, 94, 0.7)":"rgba(239, 68, 68, 0.7)"),borderColor:n.map(t=>t.pnl>=0?"#22c55e":"#ef4444"),borderWidth:1,borderRadius:4}]},options:{indexAxis:"y",responsive:!0,maintainAspectRatio:!1,plugins:vn,scales:{x:{...ye.x,ticks:{...ye.x.ticks,callback:t=>"$"+t.toLocaleString()}},y:ye.y}}})}function Xk(n){if(!n.length)return;const t=n.filter(i=>i.isWin),e=n.filter(i=>!i.isWin);Lr("chart-maemfe",{type:"scatter",data:{datasets:[{label:"Wins",data:t.map(i=>({x:i.mae,y:i.mfe})),backgroundColor:"rgba(34, 197, 94, 0.6)",borderColor:"#22c55e",pointRadius:6,pointHoverRadius:8},{label:"Losses",data:e.map(i=>({x:i.mae,y:i.mfe})),backgroundColor:"rgba(239, 68, 68, 0.6)",borderColor:"#ef4444",pointRadius:6,pointHoverRadius:8}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{...vn,legend:{display:!0,labels:{color:rr,font:{family:yi}}},tooltip:{...vn.tooltip,callbacks:{label:i=>`MAE: ${i.parsed.x}% | MFE: ${i.parsed.y}%`}}},scales:{x:{...ye.x,title:{display:!0,text:"MAE%",color:rr,font:{family:yi}}},y:{...ye.y,title:{display:!0,text:"MFE%",color:rr,font:{family:yi}}}}}})}function Jk(n,t,e,i,s){requestAnimationFrame(()=>{Kk(n),Gk(t),Yk(e),Qk(i),Xk(s)})}function Zk(n,t,e){t.innerHTML=`
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
  `,n.classList.remove("hidden");let i=[];const s=()=>{n.classList.add("hidden")};t.querySelector("#modal-close").addEventListener("click",s),t.querySelector("#modal-cancel").addEventListener("click",s),n.addEventListener("click",d=>{d.target===n&&s()});const r=t.querySelector("#upload-zone"),o=t.querySelector("#csv-input"),a=t.querySelector("#upload-status"),l=t.querySelector("#upload-preview"),u=t.querySelector("#modal-import");r.addEventListener("click",()=>o.click()),r.addEventListener("dragover",d=>{d.preventDefault(),r.classList.add("drag-over")}),r.addEventListener("dragleave",()=>r.classList.remove("drag-over")),r.addEventListener("drop",d=>{d.preventDefault(),r.classList.remove("drag-over"),d.dataTransfer.files.length&&h(d.dataTransfer.files[0])}),o.addEventListener("change",d=>{d.target.files.length&&h(d.target.files[0])});async function h(d){if(!d.name.endsWith(".csv")){a.innerHTML='<span class="text-loss">❌ File must be a .csv</span>';return}a.innerHTML='<span class="text-muted">⏳ Parsing...</span>';try{i=await NI(d),a.innerHTML=`<span class="text-profit">✅ ${i.length} trades found</span>`;const p=i.slice(0,5);l.innerHTML=`
        <div style="font-size:0.8rem; color: var(--text-muted); margin-bottom:0.5rem">Preview (primele ${Math.min(5,i.length)}):</div>
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
      `,u.classList.remove("hidden")}catch(p){a.innerHTML=`<span class="text-loss">❌ Eroare la parsare: ${p.message}</span>`,console.error(p)}}u.addEventListener("click",()=>{i.length>0&&(e(i),s())})}function tR(n,t){if(n.length===0){t.innerHTML=`
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
    `;return}const e=qI(n),i=KI(n),s=GI(n);t.innerHTML=`
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
        ${Object.keys(i).length===0?'<p class="text-muted" style="padding:1rem">Add strategies to your trades to see the analysis.</p>':Al(i)}
      </div>

      <!-- Per Risk -->
      <div class="card animate-in">
        <div class="chart-card-title">⚡ Performance per Risk Level</div>
        ${Object.keys(s).length===0?'<p class="text-muted" style="padding:1rem">Add risk levels to your trades to see the analysis.</p>':Al(s)}
      </div>

      <!-- Per Coin -->
      <div class="card animate-in">
        <div class="chart-card-title">🪙 Performance per Coin</div>
        ${Al(e)}
      </div>

      <!-- Top/Bottom trades -->
      <div class="card animate-in">
        <div class="chart-card-title">🏆 Top 5 Trades</div>
        ${sp(n,"top")}
      </div>

      <div class="card animate-in">
        <div class="chart-card-title">💀 Worst 5 Trades</div>
        ${sp(n,"bottom")}
      </div>

      <!-- Key Insights -->
      <div class="card animate-in">
        <div class="chart-card-title">💡 Insights</div>
        ${eR(n,i,s,e)}
      </div>
    </div>
  `}function Al(n){const t=Object.entries(n);return t.length===0?'<p class="text-muted">No data.</p>':`
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
        ${t.map(([e,i])=>`
          <tr>
            <td class="fw-bold">${e}</td>
            <td>${i.closingTrades}</td>
            <td class="${i.totalPnl>=0?"text-profit":"text-loss"} fw-bold">${$t(i.totalPnl)}</td>
            <td class="${i.winRate>=50?"text-profit":"text-loss"}">${Wi(i.winRate)}</td>
            <td>${i.profitFactor===1/0?"∞":i.profitFactor.toFixed(2)}</td>
            <td class="text-profit">${$t(i.avgWin)}</td>
            <td class="text-loss">${$t(-i.avgLoss)}</td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  `}function sp(n,t){return`
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
            <td class="${r.closedPnl>=0?"text-profit":"text-loss"} fw-bold">${$t(r.closedPnl)}</td>
            <td>${r.strategy?`<span class="strategy-badge">${r.strategy}</span>`:"-"}</td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  `}function eR(n,t,e,i){const s=[],r=Object.entries(i||{});if(r.length>0){const y=r.reduce((b,T)=>b[1].totalPnl>T[1].totalPnl?b:T),S=r.reduce((b,T)=>b[1].totalPnl<T[1].totalPnl?b:T);s.push(`🪙 <strong>Most profitable coin</strong>: ${y[0]} (${$t(y[1].totalPnl)}, ${Wi(y[1].winRate)} win rate, ${y[1].closingTrades} trades)`),S[0]!==y[0]&&s.push(`📉 <strong>Weakest coin</strong>: ${S[0]} (${$t(S[1].totalPnl)}, ${Wi(S[1].winRate)} win rate, ${S[1].closingTrades} trades)`)}const o=Object.entries(t);if(o.length>0){const y=o.reduce((b,T)=>b[1].totalPnl>T[1].totalPnl?b:T),S=o.reduce((b,T)=>b[1].totalPnl<T[1].totalPnl?b:T);s.push(`✅ <strong>Best strategy</strong>: ${y[0]} (${$t(y[1].totalPnl)}, ${Wi(y[1].winRate)} win rate)`),S[0]!==y[0]&&s.push(`❌ <strong>Worst strategy</strong>: ${S[0]} (${$t(S[1].totalPnl)}, ${Wi(S[1].winRate)} win rate)`)}const a=Object.entries(e);if(a.length>0){const y=a.reduce((S,b)=>S[1].profitFactor>b[1].profitFactor?S:b);s.push(`⚡ <strong>Best risk/reward ratio</strong>: ${y[0]} (PF: ${y[1].profitFactor===1/0?"∞":y[1].profitFactor.toFixed(2)})`)}const l=[...n].filter(y=>y.closedPnl!==0).sort((y,S)=>y.time.localeCompare(S.time));let u=0,h=0,d=0,p=0;return l.forEach(y=>{y.closedPnl>0?(d++,p=0,u=Math.max(u,d)):(p++,d=0,h=Math.max(h,p))}),s.push(`🔥 <strong>Max win streak</strong>: ${u} consecutive trades`),s.push(`💀 <strong>Max loss streak</strong>: ${h} consecutive trades`),`
    <div style="display:flex; flex-direction:column; gap:0.75rem; padding:0.5rem 0">
      ${s.map(y=>`<div style="font-size:0.9rem; line-height:1.5">${y}</div>`).join("")}
    </div>
  `}function nR(n,t){const e=ZI(n);if(n.length===0){t.innerHTML=`
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
    `;return}const i=Object.keys(e).sort(),s=new Date(i[0]),r=new Date(i[i.length-1]),o=Object.values(e).map(h=>Math.abs(h.pnl)),a=Math.max(...o,1),l=[],u=new Date(s.getFullYear(),s.getMonth(),1);for(;u<=r;)l.push(new Date(u)),u.setMonth(u.getMonth()+1);t.innerHTML=`
    <div class="page-header">
      <div>
        <h2 class="page-title">Calendar</h2>
        <p class="page-subtitle">Daily P&L Heatmap — ${i.length} active days</p>
      </div>
    </div>
    <div class="card">
      ${l.map(h=>iR(h,e,a)).join("")}
    </div>
  `,t.querySelectorAll(".calendar-cell.has-data").forEach(h=>{h.style.cursor="pointer",h.addEventListener("click",()=>{const d=h.dataset.date;d&&sR(d,n)})})}function iR(n,t,e){const i=n.getFullYear(),s=n.getMonth(),r=n.toLocaleDateString("en-US",{month:"long",year:"numeric"}),o=new Date(i,s,1),a=new Date(i,s+1,0),l=(o.getDay()+6)%7,u=["M","Tu","W","Th","F","Sa","Su"];let h="";h+=u.map(d=>`<div class="calendar-header-cell">${d}</div>`).join("");for(let d=0;d<l;d++)h+='<div class="calendar-cell empty"></div>';for(let d=1;d<=a.getDate();d++){const p=`${i}-${String(s+1).padStart(2,"0")}-${String(d).padStart(2,"0")}`,y=t[p];if(y){const S=rR(y.pnl,e),b=y.pnl>=0?`cal-profit-${S}`:`cal-loss-${S}`;h+=`
        <div class="calendar-cell has-data ${b}" data-date="${p}" title="${p}: ${$t(y.pnl)} (${y.trades} trades)">
          <span class="calendar-day">${d}</span>
          <span class="calendar-pnl ${y.pnl>=0?"text-profit":"text-loss"}">${oR(y.pnl)}</span>
        </div>
      `}else h+=`
        <div class="calendar-cell">
          <span class="calendar-day">${d}</span>
        </div>
      `}return`
    <div class="calendar-month-header">${r}</div>
    <div class="calendar-grid">${h}</div>
  `}function sR(n,t,e){const i=t.filter(u=>u.time&&u.time.slice(0,10)===n||u.exitTime&&u.exitTime.slice(0,10)===n?!0:u.legs?u.legs.some(h=>h.time&&h.time.slice(0,10)===n):!1),s=[];i.forEach(u=>{const h=(u.legs||[]).filter(d=>d.time&&d.time.slice(0,10)===n);if(h.length>0)h.forEach(d=>{const p=u.direction==="Long"?"long":"short",y=d.type==="exit"&&d.pnl||0,S=y>0?"cell-profit":y<0?"cell-loss":"",b=new Date(d.time).toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit"});s.push(`
                    <tr>
                        <td>${b}</td>
                        <td class="cell-coin">${u.coin}</td>
                        <td><span class="cell-dir ${p}">${u.direction}</span></td>
                        <td><span class="status-badge ${d.type==="entry"?"status-active":"status-completed"}" style="font-size:0.7rem">${d.type==="entry"?"📥 Entry":"📤 Exit"}</span></td>
                        <td>$${d.price.toLocaleString("en-US",{minimumFractionDigits:2})}</td>
                        <td>${d.size}</td>
                        <td class="${S}" style="font-weight:600">${d.type==="exit"?$t(y):'<span class="text-muted">—</span>'}</td>
                        <td>${d.strategy?`<span class="strategy-badge">${d.strategy}</span>`:""}</td>
                    </tr>
                `)});else{const d=u.closedPnl>0?"cell-profit":u.closedPnl<0?"cell-loss":"",p=u.direction==="Long"?"long":"short";s.push(`
                <tr>
                    <td>${new Date(u.time).toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit"})}</td>
                    <td class="cell-coin">${u.coin}</td>
                    <td><span class="cell-dir ${p}">${u.direction}</span></td>
                    <td>—</td>
                    <td>$${(u.entryPrice||0).toLocaleString("en-US",{minimumFractionDigits:2})}</td>
                    <td>${u.size}</td>
                    <td class="${d}" style="font-weight:600">${u.closedPnl?$t(u.closedPnl):'<span class="text-muted">—</span>'}</td>
                    <td>${u.strategy?`<span class="strategy-badge">${u.strategy}</span>`:""}</td>
                </tr>
            `)}});let r=0;i.forEach(u=>{(u.legs||[]).filter(h=>h.time&&h.time.slice(0,10)===n&&h.type==="exit").forEach(h=>{r+=h.pnl||0})});const o=r>=0?"cell-profit":"cell-loss",a=new Date(n).toLocaleDateString("en-US",{weekday:"long",day:"numeric",month:"long",year:"numeric"}),l=document.createElement("div");l.style.cssText="position:fixed; inset:0; background:rgba(0,0,0,0.5); z-index:500; display:flex; align-items:center; justify-content:center; padding:1rem;",l.innerHTML=`
        <div style="background:var(--bg-card); border-radius:var(--radius-lg); padding:1.5rem; width:700px; max-width:95vw; border:1px solid var(--border-medium); max-height:85vh; overflow-y:auto;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1rem;">
                <div>
                    <h3 style="margin:0; font-size:1.1rem;">📅 ${a}</h3>
                    <p style="margin:0.25rem 0 0; font-size:0.85rem; color:var(--text-muted);">${s.length} transactions • Total: <strong class="${o}">${$t(r)}</strong></p>
                </div>
                <button id="day-detail-close" style="background:none; border:none; font-size:1.5rem; cursor:pointer; color:var(--text-secondary);">✕</button>
            </div>
            <div class="table-container">
                <table class="data-table">
                    <thead><tr>
                        <th>Ora</th>
                        <th>Coin</th>
                        <th>Dir</th>
                        <th>Type</th>
                        <th>Price</th>
                        <th>Size</th>
                        <th>P&L</th>
                        <th>Strategy</th>
                    </tr></thead>
                    <tbody>
                        ${s.length>0?s.join(""):'<tr><td colspan="8" style="text-align:center; padding:1.5rem; color:var(--text-muted)">No transactions</td></tr>'}
                    </tbody>
                </table>
            </div>
        </div>
    `,document.body.appendChild(l),l.querySelector("#day-detail-close").addEventListener("click",()=>l.remove()),l.addEventListener("click",u=>{u.target===l&&l.remove()})}function rR(n,t){const e=Math.abs(n)/t;return e<.15?1:e<.35?2:e<.65?3:4}function oR(n){return Math.abs(n)>=1e3?(n>=0?"+":"")+(n/1e3).toFixed(1)+"k":(n>=0?"+":"")+n.toFixed(0)}let Tt=[],x_="dashboard";async function ha(n){Pa(n);const t=document.getElementById("sync-status");t&&(t.textContent="☁️ Syncing...");try{await nu(),t&&(t.textContent="☁️ Synced")}catch(e){console.warn("Cloud sync failed:",e),t&&(t.textContent="⚠️ Offline")}}const Hi=document.getElementById("main-content"),A_=document.getElementById("modal-overlay"),P_=document.getElementById("modal-container");document.querySelectorAll(".nav-link").forEach(n=>{n.addEventListener("click",t=>{t.preventDefault();const e=n.dataset.page;e&&k_(e)})});function k_(n){var t;x_=n,document.querySelectorAll(".nav-link").forEach(e=>e.classList.remove("active")),(t=document.querySelector(`[data-page="${n}"]`))==null||t.classList.add("active"),Ai()}function Ai(){if(!xI()){Hi.innerHTML=`
        <div class="empty-state" style="margin-top:4rem;">
          <div class="empty-state-icon" style="font-size:3rem;">🔐</div>
          <h3 class="empty-state-title">Welcome to CryptoJournal</h3>
          <p class="empty-state-text">Sign in with Google to access your trading journal.<br>Your data is synced securely in the cloud.</p>
        </div>
      `;return}switch(x_){case"dashboard":if(eS(Tt,Hi),Tt.length>0){const n=YI(Tt),t=su(Tt),e=QI(Tt),i=XI(Tt),s=JI(Tt);Jk(n,t,e,i,s)}break;case"trades":Ca(Tt,Hi,aR);break;case"insights":tR(Tt,Hi);break;case"calendar":nR(Tt,Hi);break}}function aR(n){gS(n,Hi,()=>{k_("trades")},(t,e)=>{Tt=Tt.map(i=>i.id===t?{...i,...e}:i),ha(Tt)},t=>{Tt=Tt.filter(e=>e.id!==t),ha(Tt)})}function lR(n){Tt=jI(Tt,n),ha(Tt),Ai()}function cR(n){const t=Tt.findIndex(e=>e.coin===n.coin&&e.direction===n.direction);if(t!==-1){const e=Tt[t],i=[...e.legs||[],...n.legs||[]],s=ea(i,e.direction),r=On(s);Tt[t]={...e,legs:s,...r,exitTime:r.status==="Completed"?new Date().toISOString():null}}else Tt.push(n);ha(Tt),Ai()}document.getElementById("btn-import-csv").addEventListener("click",()=>{Zk(A_,P_,lR)});document.getElementById("btn-add-trade").addEventListener("click",()=>{fS(A_,P_,cR)});document.getElementById("btn-export-data").addEventListener("click",async()=>{try{const n=await RI(),t=JSON.stringify(n,null,2),e=new Blob([t],{type:"application/json"}),i=URL.createObjectURL(e),s=document.createElement("a");s.href=i,s.download=`crypto-journal-backup-${new Date().toISOString().slice(0,10)}.json`,s.click(),URL.revokeObjectURL(i)}catch(n){console.error("Export failed:",n),alert("Export error: "+n.message)}});document.getElementById("btn-import-data").addEventListener("click",()=>{const n=document.createElement("input");n.type="file",n.accept=".json",n.addEventListener("change",async t=>{var i;const e=t.target.files[0];if(e)try{const s=await e.text(),r=JSON.parse(s);await CI(r),Tt=ka(),Ai(),alert(`✅ Backup imported! (${((i=r.trades)==null?void 0:i.length)||0} trades)`)}catch(s){console.error("Import failed:",s),alert("Import error: "+s.message)}}),n.click()});document.getElementById("lightbox-close").addEventListener("click",()=>{document.getElementById("lightbox").classList.add("hidden")});document.getElementById("lightbox").addEventListener("click",n=>{n.target===n.currentTarget&&n.currentTarget.classList.add("hidden")});const bu=document.getElementById("hamburger"),R_=document.getElementById("sidebar"),vu=document.getElementById("sidebar-backdrop");function uR(){R_.classList.toggle("open"),bu.classList.toggle("open"),vu.classList.toggle("open")}function Eu(){R_.classList.remove("open"),bu.classList.remove("open"),vu.classList.remove("open")}bu.addEventListener("click",uR);vu.addEventListener("click",Eu);document.querySelectorAll(".nav-link").forEach(n=>{n.addEventListener("click",Eu)});["btn-import-csv","btn-add-trade","btn-export-data","btn-import-data"].forEach(n=>{var t;(t=document.getElementById(n))==null||t.addEventListener("click",Eu)});const rp=document.getElementById("auth-logged-out"),op=document.getElementById("auth-logged-in"),hR=document.getElementById("auth-avatar"),dR=document.getElementById("auth-name");document.getElementById("btn-google-login").addEventListener("click",async()=>{try{await bI()}catch(n){n.code!=="auth/popup-closed-by-user"&&(console.error("Login failed:",n),alert("Login failed: "+n.message))}});document.getElementById("btn-logout").addEventListener("click",async()=>{await vI()});EI(async n=>{if(n){Od(n.uid),rp.classList.add("hidden"),op.classList.remove("hidden"),hR.src=n.photoURL||"",dR.textContent=n.displayName||n.email;const t=document.getElementById("sync-status");t.textContent="☁️ Loading...";try{await AI()?(Tt=WI(HI(ka())),Ai(),t.textContent=`☁️ ${Tt.length} trades synced`):(await nu(),t.textContent=`☁️ ${Tt.length} trades synced`)}catch(e){console.error("[SYNC] Error:",e),t.textContent="⚠️ Sync error"}}else Od(null),rp.classList.remove("hidden"),op.classList.add("hidden"),Pa([]),Tt=[],Ai()});Ai();
