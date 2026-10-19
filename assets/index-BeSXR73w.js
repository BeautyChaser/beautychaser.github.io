const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./ContentPage-DkDllfI8.js","./_plugin-vue_export-helper-BDJIh2Ao.js","./ContentPage-DNrbhI5o.css"])))=>i.map(i=>d[i]);
import{A as e,B as t,C as n,D as r,E as i,F as a,G as o,H as s,I as c,L as l,M as u,N as d,O as f,P as p,R as m,S as ee,T as h,U as g,V as _,W as v,_ as y,a as te,b,c as x,d as ne,f as S,g as C,h as w,i as T,j as re,k as E,l as D,m as O,n as ie,o as k,p as A,r as ae,s as j,t as M,u as N,v as oe,w as se,x as P,y as ce,z as F}from"./_plugin-vue_export-helper-BDJIh2Ao.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var I=void 0,le=typeof window<`u`&&window.trustedTypes;if(le)try{I=le.createPolicy(`vue`,{createHTML:e=>e})}catch{}var ue=I?e=>I.createHTML(e):e=>e,de=`http://www.w3.org/2000/svg`,fe=`http://www.w3.org/1998/Math/MathML`,L=typeof document<`u`?document:null,pe=L&&L.createElement(`template`),me={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{let t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{let i=t===`svg`?L.createElementNS(de,e):t===`mathml`?L.createElementNS(fe,e):n?L.createElement(e,{is:n}):L.createElement(e);return e===`select`&&r&&r.multiple!=null&&i.setAttribute(`multiple`,r.multiple),i},createText:e=>L.createTextNode(e),createComment:e=>L.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>L.querySelector(e),setScopeId(e,t){e.setAttribute(t,``)},insertStaticContent(e,t,n,r,i,a){let o=n?n.previousSibling:t.lastChild;if(i&&(i===a||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===a||!(i=i.nextSibling)););else{pe.innerHTML=ue(r===`svg`?`<svg>${e}</svg>`:r===`mathml`?`<math>${e}</math>`:e);let i=pe.content;if(r===`svg`||r===`mathml`){let e=i.firstChild;for(;e.firstChild;)i.appendChild(e.firstChild);i.removeChild(e)}t.insertBefore(i,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},R=`transition`,z=`animation`,B=Symbol(`_vtc`),he={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},ge=E({},ae,he),_e=(e=>(e.displayName=`Transition`,e.props=ge,e))((e,{slots:t})=>C(ie,ye(e),t)),V=(e,t=[])=>{d(e)?e.forEach(e=>e(...t)):e&&e(...t)},ve=e=>e?d(e)?e.some(e=>e.length>1):e.length>1:!1;function ye(e){let t={};for(let n in e)n in he||(t[n]=e[n]);if(e.css===!1)return t;let{name:n=`v`,type:r,duration:i,enterFromClass:a=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:s=`${n}-enter-to`,appearFromClass:c=a,appearActiveClass:l=o,appearToClass:u=s,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=e,m=be(i),ee=m&&m[0],h=m&&m[1],{onBeforeEnter:g,onEnter:_,onEnterCancelled:v,onLeave:y,onLeaveCancelled:te,onBeforeAppear:b=g,onAppear:x=_,onAppearCancelled:ne=v}=t,S=(e,t,n,r)=>{e._enterCancelled=r,W(e,t?u:s),W(e,t?l:o),n&&n()},C=(e,t)=>{e._isLeaving=!1,W(e,d),W(e,p),W(e,f),t&&t()},w=e=>(t,n)=>{let i=e?x:_,o=()=>S(t,e,n);V(i,[t,o]),xe(()=>{W(t,e?c:a),U(t,e?u:s),ve(i)||Ce(t,r,ee,o)})};return E(t,{onBeforeEnter(e){V(g,[e]),U(e,a),U(e,o)},onBeforeAppear(e){V(b,[e]),U(e,c),U(e,l)},onEnter:w(!1),onAppear:w(!0),onLeave(e,t){e._isLeaving=!0;let n=()=>C(e,t);U(e,d),e._enterCancelled?(U(e,f),De(e)):(De(e),U(e,f)),xe(()=>{e._isLeaving&&(W(e,d),U(e,p),ve(y)||Ce(e,r,h,n))}),V(y,[e,n])},onEnterCancelled(e){S(e,!1,void 0,!0),V(v,[e])},onAppearCancelled(e){S(e,!0,void 0,!0),V(ne,[e])},onLeaveCancelled(e){C(e),V(te,[e])}})}function be(e){if(e==null)return null;if(c(e))return[H(e.enter),H(e.leave)];{let t=H(e);return[t,t]}}function H(e){return o(e)}function U(e,t){t.split(/\s+/).forEach(t=>t&&e.classList.add(t)),(e[B]||(e[B]=new Set)).add(t)}function W(e,t){t.split(/\s+/).forEach(t=>t&&e.classList.remove(t));let n=e[B];n&&(n.delete(t),n.size||(e[B]=void 0))}function xe(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}var Se=0;function Ce(e,t,n,r){let i=e._endId=++Se,a=()=>{i===e._endId&&r()};if(n!=null)return setTimeout(a,n);let{type:o,timeout:s,propCount:c}=we(e,t);if(!o)return r();let l=o+`end`,u=0,d=()=>{e.removeEventListener(l,f),a()},f=t=>{t.target===e&&++u>=c&&d()};setTimeout(()=>{u<c&&d()},s+1),e.addEventListener(l,f)}function we(e,t){let n=window.getComputedStyle(e),r=e=>(n[e]||``).split(`, `),i=r(`${R}Delay`),a=r(`${R}Duration`),o=Te(i,a),s=r(`${z}Delay`),c=r(`${z}Duration`),l=Te(s,c),u=null,d=0,f=0;t===R?o>0&&(u=R,d=o,f=a.length):t===z?l>0&&(u=z,d=l,f=c.length):(d=Math.max(o,l),u=d>0?o>l?R:z:null,f=u?u===R?a.length:c.length:0);let p=u===R&&/\b(?:transform|all)(?:,|$)/.test(r(`${R}Property`).toString());return{type:u,timeout:d,propCount:f,hasTransform:p}}function Te(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((t,n)=>Ee(t)+Ee(e[n])))}function Ee(e){return e===`auto`?0:Number(e.slice(0,-1).replace(`,`,`.`))*1e3}function De(e){return(e?e.ownerDocument:document).body.offsetHeight}function Oe(e,t,n){let r=e[B];r&&(t=(t?[t,...r]:[...r]).join(` `)),t==null?e.removeAttribute(`class`):n?e.setAttribute(`class`,t):e.className=t}var ke=Symbol(`_vod`),Ae=Symbol(`_vsh`),je=Symbol(``),Me=/(?:^|;)\s*display\s*:/;function Ne(e,t,n){let r=e.style,i=F(n),a=!1;if(n&&!i){if(t)if(F(t))for(let e of t.split(`;`)){let t=e.slice(0,e.indexOf(`:`)).trim();n[t]??G(r,t,``)}else for(let e in t)n[e]??G(r,e,``);for(let e in n)e===`display`&&(a=!0),G(r,e,n[e])}else if(i){if(t!==n){let e=r[je];e&&(n+=`;`+e),r.cssText=n,a=Me.test(n)}}else t&&e.removeAttribute(`style`);ke in e&&(e[ke]=a?r.display:``,e[Ae]&&(r.display=`none`))}var Pe=/\s*!important$/;function G(t,n,r){if(d(r))r.forEach(e=>G(t,n,e));else if(r??=``,n.startsWith(`--`))t.setProperty(n,r);else{let i=Ie(t,n);Pe.test(r)?t.setProperty(e(i),r.replace(Pe,``),`important`):t[i]=r}}var Fe=[`Webkit`,`Moz`,`ms`],K={};function Ie(e,t){let n=K[t];if(n)return n;let i=r(t);if(i!==`filter`&&i in e)return K[t]=i;i=f(i);for(let n=0;n<Fe.length;n++){let r=Fe[n]+i;if(r in e)return K[t]=r}return t}var Le=`http://www.w3.org/1999/xlink`;function Re(e,n,r,i,a,o=m(n)){i&&n.startsWith(`xlink:`)?r==null?e.removeAttributeNS(Le,n.slice(6,n.length)):e.setAttributeNS(Le,n,r):r==null||o&&!re(r)?e.removeAttribute(n):e.setAttribute(n,o?``:t(r)?String(r):r)}function ze(e,t,n,r,i){if(t===`innerHTML`||t===`textContent`){n!=null&&(e[t]=t===`innerHTML`?ue(n):n);return}let a=e.tagName;if(t===`value`&&a!==`PROGRESS`&&!a.includes(`-`)){let r=a===`OPTION`?e.getAttribute(`value`)||``:e.value,i=n==null?e.type===`checkbox`?`on`:``:String(n);(r!==i||!(`_value`in e))&&(e.value=i),n??e.removeAttribute(t),e._value=n;return}let o=!1;if(n===``||n==null){let r=typeof e[t];r===`boolean`?n=re(n):n==null&&r===`string`?(n=``,o=!0):r===`number`&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(i||t)}function q(e,t,n,r){e.addEventListener(t,n,r)}function Be(e,t,n,r){e.removeEventListener(t,n,r)}var Ve=Symbol(`_vei`);function He(e,t,n,r,i=null){let a=e[Ve]||(e[Ve]={}),o=a[t];if(r&&o)o.value=r;else{let[n,s]=We(t);r?q(e,n,a[t]=Je(r,i),s):o&&(Be(e,n,o,s),a[t]=void 0)}}var Ue=/(?:Once|Passive|Capture)$/;function We(t){let n;if(Ue.test(t)){n={};let e;for(;e=t.match(Ue);)t=t.slice(0,t.length-e[0].length),n[e[0].toLowerCase()]=!0}return[t[2]===`:`?t.slice(3):e(t.slice(2)),n]}var Ge=0,Ke=Promise.resolve(),qe=()=>Ge||=(Ke.then(()=>Ge=0),Date.now());function Je(e,t){let n=e=>{if(!e._vts)e._vts=Date.now();else if(e._vts<=n.attached)return;te(Ye(e,n.value),t,5,[e])};return n.value=e,n.attached=qe(),n}function Ye(e,t){if(d(t)){let n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(e=>t=>!t._stopped&&e&&e(t))}else return t}var Xe=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Ze=(e,t,n,i,o,s)=>{let c=o===`svg`;t===`class`?Oe(e,i,c):t===`style`?Ne(e,n,i):l(t)?a(t)||He(e,t,n,i,s):(t[0]===`.`?(t=t.slice(1),!0):t[0]===`^`?(t=t.slice(1),!1):Qe(e,t,i,c))?(ze(e,t,i),!e.tagName.includes(`-`)&&(t===`value`||t===`checked`||t===`selected`)&&Re(e,t,i,c,s,t!==`value`)):e._isVueCE&&($e(e,t)||e._def.__asyncLoader&&(/[A-Z]/.test(t)||!F(i)))?ze(e,r(t),i,s,t):(t===`true-value`?e._trueValue=i:t===`false-value`&&(e._falseValue=i),Re(e,t,i,c))};function Qe(e,t,n,r){if(r)return!!(t===`innerHTML`||t===`textContent`||t in e&&Xe(t)&&p(n));if(t===`spellcheck`||t===`draggable`||t===`translate`||t===`autocorrect`||t===`sandbox`&&e.tagName===`IFRAME`||t===`form`||t===`list`&&e.tagName===`INPUT`||t===`type`&&e.tagName===`TEXTAREA`)return!1;if(t===`width`||t===`height`){let t=e.tagName;if(t===`IMG`||t===`VIDEO`||t===`CANVAS`||t===`SOURCE`)return!1}return Xe(t)&&F(n)?!1:t in e}function $e(e,t){let n=e._def.props;if(!n)return!1;let i=r(t);return Array.isArray(n)?n.some(e=>r(e)===i):Object.keys(n).some(e=>r(e)===i)}var et=e=>{let t=e.props[`onUpdate:modelValue`]||!1;return d(t)?e=>u(t,e):t};function tt(e){e.target.composing=!0}function nt(e){let t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event(`input`)))}var J=Symbol(`_assign`);function rt(e,t,n){return t&&(e=e.trim()),n&&(e=_(e)),e}var it={created(e,{modifiers:{lazy:t,trim:n,number:r}},i){e[J]=et(i);let a=r||i.props&&i.props.type===`number`;q(e,t?`change`:`input`,t=>{t.target.composing||e[J](rt(e.value,n,a))}),(n||a)&&q(e,`change`,()=>{e.value=rt(e.value,n,a)}),t||(q(e,`compositionstart`,tt),q(e,`compositionend`,nt),q(e,`change`,nt))},mounted(e,{value:t}){e.value=t??``},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:r,trim:i,number:a}},o){if(e[J]=et(o),e.composing)return;let s=(a||e.type===`number`)&&!/^0\d/.test(e.value)?_(e.value):e.value,c=t??``;if(s===c)return;let l=e.getRootNode();(l instanceof Document||l instanceof ShadowRoot)&&l.activeElement===e&&e.type!==`range`&&(r&&t===n||i&&e.value.trim()===c)||(e.value=c)}},at=[`ctrl`,`shift`,`alt`,`meta`],ot={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>`button`in e&&e.button!==0,middle:e=>`button`in e&&e.button!==1,right:e=>`button`in e&&e.button!==2,exact:(e,t)=>at.some(n=>e[`${n}Key`]&&!t.includes(n))},st=(e,t)=>{if(!e)return e;let n=e._withMods||={},r=t.join(`.`);return n[r]||(n[r]=((n,...r)=>{for(let e=0;e<t.length;e++){let r=ot[t[e]];if(r&&r(n,t))return}return e(n,...r)}))},ct={esc:`escape`,space:` `,up:`arrow-up`,left:`arrow-left`,right:`arrow-right`,down:`arrow-down`,delete:`backspace`},lt=(t,n)=>{let r=t._withKeys||={},i=n.join(`.`);return r[i]||(r[i]=(r=>{if(!(`key`in r))return;let i=e(r.key);if(n.some(e=>e===i||ct[e]===i))return t(r)}))},ut=E({patchProp:Ze},me),dt;function ft(){return dt||=ne(ut)}var pt=((...e)=>{let t=ft().createApp(...e),{mount:n}=t;return t.mount=e=>{let r=ht(e);if(!r)return;let i=t._component;!p(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent=``);let a=n(r,!1,mt(r));return r instanceof Element&&(r.removeAttribute(`v-cloak`),r.setAttribute(`data-v-app`,``)),a},t});function mt(e){if(e instanceof SVGElement)return`svg`;if(typeof MathMLElement==`function`&&e instanceof MathMLElement)return`mathml`}function ht(e){return F(e)?document.querySelector(e):e}var gt=`cfw-language`;function _t(){if(typeof window>`u`)return`zh`;let e=new URLSearchParams(window.location.search).get(`lang`);if(e===`zh`||e===`en`)return e;try{return localStorage.getItem(gt)===`en`?`en`:`zh`}catch{return`zh`}}var Y=h(_t()),X=(e,t)=>Y.value===`en`?t:e;async function vt(e){if(![`zh`,`en`].includes(e)||e===Y.value)return;let t=window.scrollY;Y.value=e;try{localStorage.setItem(gt,e)}catch{}let n=new URL(window.location.href);n.searchParams.set(`lang`,e),window.history.replaceState(window.history.state,``,n),await y(),await new Promise(e=>requestAnimationFrame(()=>requestAnimationFrame(e))),window.scrollTo({top:t,behavior:`instant`})}function yt(e){return e?Y.value===`zh`?e.replaceAll(`-`,`.`):new Intl.DateTimeFormat(`en`,{year:`numeric`,month:`short`,day:`numeric`,timeZone:`UTC`}).format(new Date(`${e}T12:00:00Z`)):``}var bt=e=>X(`${e} 篇笔记`,`${e} ${e===1?`note`:`notes`}`),xt=`# 文章目录

将要展示在网站上的 Markdown 文章放在这个目录，支持子目录。不需要手工登记文章列表。

\`\`\`text
markdown/
  allen-cahn.md
  allen-cahn.en.md
  vue3-github-pages-blog-deployment.md
  vue3-github-pages-blog-deployment.en.md
  physics/
    new-model.md
  news/
    2026-10-19-website-update.md
    2026-10-19-website-update.en.md
\`\`\`

每篇文章的第一个一级标题作为网页标题；没有一级标题时使用文件名。正文首段自动形成列表摘要。\`README.md\` 仅为维护说明，不会作为文章展示。

## 中英文版本

- \`文章.md\`（或 \`文章.zh.md\`）保存中文，\`文章.en.md\` 保存英文；同一中文版本不要同时使用两种命名。
- 两份文件合并成一篇文章，切换语言时保留相同文章链接，标题、摘要与正文一起切换。
- News 同样需要中英文配对，例如 \`news/2026-10-19-update.md\` 与 \`news/2026-10-19-update.en.md\`。
- 搜索会检索两种语言的标题和正文，结果按当前界面语言展示，不会将两种版本重复计数。
- 开发中缺少译文时，会提示原文语言；正式构建会检查所有文章都有中文、英文正文，缺失时停止构建，补齐后再发布。
- 不要将一份语言版本简单复制为另一份；需要实际翻译标题、正文、图注与代码注释，数学公式保留原意。

网站顶部可切换「中 / EN」，访客选择会在当前浏览器保存。分享英文页面可使用 \`index.html?lang=en\`，中文页面使用 \`index.html?lang=zh\`，文章 hash 链接仍然有效。

\`news/\` 专门放首页顶部的动态，文件名使用 \`YYYY-MM-DD-标题.md\`。首页 News 按文件名倒序显示最近三条，文件名中的日期用于展示；动态同样参与全文搜索。

\`\`\`markdown
# 我的文章标题

这一段介绍文章内容，也会显示在网站的笔记列表中。

## 正文

支持普通 Markdown、代码块和 $E = mc^2$ 这样的数学公式。
\`\`\`

保存后，开发服务器会更新文章列表与搜索索引。搜索框同时检索文章标题和完整正文，多个关键词用空格分隔，标题匹配优先展示。点击结果会打开对应文章。

发布前在项目根目录执行 \`npm run build\` 和 \`npm run check\`，然后将文章源码与根目录构建输出一并提交。正式网站的搜索是浏览器中的静态检索，不需要后端服务。

公开发布的网站会包含这些文章内容。项目维护说明放在 \`agent/\`，不要放入此目录作为文章。
`,St=`# Deriving the Allen–Cahn equation from first principles

Starting from a free-energy functional, derive the **Allen–Cahn (AC) equation** and connect the double-well potential, gradient energy, and phase-field dynamics.

To make the derivation concrete, consider a simple **one-dimensional competition between two phases**.

---

### Setting the scene: red and blue phases on a rod

* **Geometry:** a one-dimensional rod with coordinate $x$.
* **Order parameter $\\phi(x)$:**
  * $\\phi = 1$ represents the **red phase**, such as a solid.
  * $\\phi = -1$ represents the **blue phase**, such as a liquid.
  * For mathematical symmetry, use 1 and −1 instead of 0 and 1; the underlying idea is the same.
* **Goal:** derive an equation describing how $\\phi$ evolves with time $t$.

---

### Step 1: construct the energy functional

Start with energy. The total free energy $F$ has two contributions: **the local preference of each point** and **the cost of differing from its neighbors**.

$$ F[\\phi] = \\int_{\\text{rod}} \\left( \\underbrace{f_{bulk}(\\phi)}_{\\text{bulk free energy}} + \\underbrace{\\frac{\\kappa}{2} \\left( \\frac{\\partial \\phi}{\\partial x} \\right)^2}_{\\text{gradient energy}} \\right) dx $$

#### 1. Bulk free energy: a double-well potential

The material favors the stable states $\\phi=1$ and $\\phi=-1$ rather than the intermediate state $\\phi=0$. A typical **W-shaped potential** is

$$ f_{bulk}(\\phi) = A (\\phi^2 - 1)^2 $$

* At $\\phi = 1$ or $\\phi = -1$, $f = 0$: the energy is minimal.
* At $\\phi = 0$, $f = A$: the energy is higher.
* These minima are the two **potential wells**.

#### 2. Gradient energy: the cost of an interface

$$ \\frac{\\kappa}{2} (\\nabla \\phi)^2 $$

When $\\phi$ changes sharply, this contribution becomes large. Reducing the energy therefore favors a smoother interface.

---

### Step 2: calculate the driving force

Ask: **if $\\phi$ changes slightly, how does the total energy $F$ change?** This is the **functional derivative** $\\frac{\\delta F}{\\delta \\phi}$.

Calculate the two contributions separately.

#### A. Differentiate the bulk free energy

This is an ordinary derivative:

$$ \\frac{\\partial f_{bulk}}{\\partial \\phi} = \\frac{\\partial}{\\partial \\phi} [A(\\phi^2 - 1)^2] = A \\cdot 2(\\phi^2 - 1) \\cdot 2\\phi = 4A(\\phi^3 - \\phi) $$

This term drives the order parameter back toward one of the potential wells, at 1 or −1.

#### B. Differentiate the gradient energy

The gradient contribution uses **integration by parts in the calculus of variations**. Take the variation of $\\int \\frac{\\kappa}{2} (\\phi_x)^2 dx$.

The Euler–Lagrange calculation gives

$$ \\frac{\\delta}{\\delta \\phi} \\left( \\frac{\\kappa}{2} (\\phi_x)^2 \\right) = - \\kappa \\frac{\\partial^2 \\phi}{\\partial x^2} $$

Notice the negative sign and the second spatial derivative, or Laplacian. This contribution penalizes sharp differences between neighboring points and smooths the interface.

#### C. Combine the contributions

$$ \\frac{\\delta F}{\\delta \\phi} = \\underbrace{4A(\\phi^3 - \\phi)}_{\\text{preference for a well}} - \\underbrace{\\kappa \\nabla^2 \\phi}_{\\text{interface smoothing}} $$

---

### Step 3: assemble the evolution equation

The guiding principle of **Allen–Cahn dynamics** is that the **rate of change is proportional to the negative energy gradient**: the system evolves toward lower energy.

$$ \\frac{\\partial \\phi}{\\partial t} = -L \\times \\frac{\\delta F}{\\delta \\phi} $$

Substitute the two contributions:

$$ \\frac{\\partial \\phi}{\\partial t} = -L \\left[ 4A(\\phi^3 - \\phi) - \\kappa \\nabla^2 \\phi \\right] $$

Rearrange the signs to obtain the **AC equation**:

$$ \\boxed{ \\frac{\\partial \\phi}{\\partial t} = L \\left( \\kappa \\nabla^2 \\phi - 4A(\\phi^3 - \\phi) \\right) } $$

---

### Step 4: interpret the physics

Two competing effects determine the evolution of $\\phi$.

#### 1. Diffusion: $L\\kappa \\nabla^2 \\phi$

* **Role:** smoothing.
* **Behavior:** this is the familiar diffusion term. It tends to make $\\phi$ more uniform, broadens sharp interfaces, and reduces the gradient penalty.
* In intuitive terms: let neighboring points vary more gently.

#### 2. Reaction: $-4AL(\\phi^3 - \\phi)$

* **Role:** choosing a phase.
* **Behavior:**
  * If $\\phi$ is slightly positive, such as 0.1, this term pushes it toward 1.
  * If $\\phi$ is slightly negative, such as −0.1, it pushes it toward −1.
  * This effect is described here as **sharpening** or **anti-diffusion**.
* In intuitive terms: choose one of the two phases rather than remaining near zero.

---

### What is the AC equation computing?

Its evolution reflects a **balance between two effects**:

1. The **reaction term** sharpens the interface by pushing points toward 1 or −1.
2. The **diffusion term** broadens the interface to reduce spatial gradients.

Together, they produce a **smooth diffuse interface with a characteristic width**, associated with a hyperbolic tangent profile $\\tanh(x)$. This explains how the phase-field description maintains a smooth transition between phases.

## Related parameters

The next question is practical: how do mathematical parameters become simulation inputs?

In the derivation, $A$, $\\kappa$, and $L$ are **model parameters**. In a simulation of a real material—such as steel, a battery material, or a polymer—they must be related to **material properties**.

This requires a mapping from macroscopic quantities to the model parameters.

---

### 1. Available material properties

Material handbooks or papers commonly provide the following quantities:

1. **Surface tension or interfacial energy, $\\gamma$**
   * Unit: $J/m^2$.
   * Meaning: the energy needed to create a unit area of interface.
2. **Interface thickness, $\\delta$**
   * Unit: $m$.
   * Meaning: the physical thickness of the interface, often only a few nanometers.
   * In numerical work, the interface is often deliberately widened to reduce mesh costs, while keeping it small relative to the relevant microstructural scale.
3. **Interface mobility, $M_{gb}$**
   * Units used in the original notes include $m^4/(J \\cdot s)$ or $m/s \\cdot K^{-1}$, depending on the driving-force convention.
   * Meaning: how quickly an interface moves in response to a driving force.

---

### 2. Mapping static parameters: $A$ and $\\kappa$

The **barrier height $A$** and **gradient coefficient $\\kappa$** jointly determine the interface profile and energy. Integrating the equilibrium phase-field equation gives a hyperbolic tangent profile and relates these quantities.

#### Relations recorded in these notes

$$ \\gamma = \\frac{2\\sqrt{2}}{3} \\sqrt{\\kappa A} $$

$$ \\delta \\approx \\sqrt{\\frac{\\kappa}{A}} \\times (\\text{constant, typically 2 to 4}) $$

The parameter mapping used in the example is

1. **Potential-well depth:**

   $$ A = \\frac{3 \\gamma}{\\sqrt{2} \\delta} $$

   Intuitively, a larger interfacial energy or a thinner interface requires a deeper potential well.

2. **Gradient penalty:**

   $$ \\kappa = \\frac{3 \\gamma \\delta}{\\sqrt{2}} $$

   The gradient coefficient connects the interfacial energy with the chosen interface thickness.

> **A practical workflow**
>
> 1. Choose the mesh spacing $dx$.
> 2. Choose the numerical interface thickness $\\delta$, for example $4dx \\sim 5dx$, so that several mesh points resolve the interface.
> 3. Obtain $\\gamma$ from material data.
> 4. Calculate $A$ and $\\kappa$ and use them in the simulation.

---

### 3. Mapping the kinetic parameter: $L$

The **phase-field relaxation coefficient $L$** sets the rate of evolution. It must be related to the physical **interface mobility $M_{gb}$**.

In an asymptotic description, the diffuse-interface model approaches a sharp-interface relation such as $V = M_{gb} \\cdot \\Delta G$ as $\\delta \\to 0$.

#### Mapping forms recorded in these notes

$$ L = \\frac{M_{gb}}{\\delta} \\times (\\text{shape factor}) $$

Another form, dependent on the potential and parameter conventions, is

$$ L = \\frac{M_{gb}}{\\kappa} \\times (\\text{coefficient}) $$

* Faster physical interface motion, represented by a larger mobility, requires a corresponding kinetic coefficient.
* When the numerical interface is widened, its internal dynamics must be adjusted to preserve the intended interface velocity $V$.

---

### 4. From material data to code

For a pure-metal solidification example, the notes organize the mapping as follows:

| Code parameter | Inputs | Scaling used in the notes | Physical role |
| :--- | :--- | :--- | :--- |
| $A$ | Interfacial energy and mesh | $\\propto \\frac{\\gamma}{\\delta_{num}}$ | Depth of the potential well; tendency to sharpen the interface |
| $\\kappa$ | Interfacial energy and mesh | $\\propto \\gamma \\cdot \\delta_{num}$ | Gradient penalty; tendency to broaden the interface |
| $L$ | Mobility and mesh | $\\propto \\frac{M_{gb}}{\\delta_{num}}$ | Rate of phase-field evolution |

### 5. A numerical example

Consider a gold (Au) example:

1. **Material input:** use a surface-tension value of $1.5$ in the example's unit convention.
2. **Mesh:** let $dx = 10 \\, nm$.
3. **Interface:** choose $\\delta = 4dx = 40 \\, nm$. This is a numerical interface thickness, wider than the physical interface.
4. **Calculate the parameters:**
   * $A = \\frac{3 \\times 1.5}{\\sqrt{2} \\times 40 \\times 10^{-9}} \\approx 7.9 \\times 10^7$
   * $\\kappa = \\frac{3 \\times 1.5 \\times 40 \\times 10^{-9}}{\\sqrt{2}} \\approx 1.27 \\times 10^{-7}$

The example uses $7.9 \\times 10^7$ and $1.27 \\times 10^{-7}$ to connect the internal parameters with the intended macroscopic interfacial behavior. This is the idea behind a **phenomenological model**: tune an internal description to reproduce a macroscopic phenomenon.
`,Ct=`# 从第一性原理推导 Allen–Cahn 方程

从自由能泛函出发，推导 **Allen-Cahn (AC) 方程**，理解双阱势、梯度能与相场动力学之间的联系。
\r
为了让推导清晰易懂，我们采用一个最经典的 **“1D 两个相争地盘”** 的小例子。\r
\r
---\r
\r
### **场景设定：一根棍子上的“红蓝之争”**\r
\r
*   **几何模型：** 一根一维的棍子，坐标为 $x$。\r
*   **序参数 $\\phi(x)$：**\r
    *   $\\phi = 1$：代表**红色相**（比如固态）。\r
    *   $\\phi = -1$：代表**蓝色相**（比如液态）。\r
    *   *注：为了数学对称方便，这里我们用 1 和 -1，而不用 0 和 1，道理是一样的。*\r
*   **目标：** 我们要推导出 $\\phi$ 随时间 $t$ 变化的公式。\r
\r
---\r
\r
### **第一层：搭建能量泛函（The Script）**\r
\r
一切的起源是能量。系统的总自由能 $F$ 由两部分组成：**“让自己舒服的能量”** + **“跟邻居协调的能量”**。\r
\r
$$ F[\\phi] = \\int_{整个棍子} \\left( \\underbrace{f_{bulk}(\\phi)}_{\\text{体自由能}} + \\underbrace{\\frac{\\kappa}{2} \\left( \\frac{\\partial \\phi}{\\partial x} \\right)^2}_{\\text{梯度能}} \\right) dx $$\r
\r
#### **1. 体自由能 $f_{bulk}(\\phi)$：双阱势（Double-Well Potential）**\r
物质喜欢待在稳定的状态（$\\phi=1$ 或 $\\phi=-1$），不喜欢待在中间状态（$\\phi=0$）。\r
我们通常构造一个 **“W” 形状的函数**：\r
\r
$$ f_{bulk}(\\phi) = A (\\phi^2 - 1)^2 $$\r
\r
*   **看形状：**\r
    *   当 $\\phi = 1$ 或 $-1$ 时，$f = 0$（能量最低，舒服）。\r
    *   当 $\\phi = 0$ 时，$f = A$（能量最高，难受）。\r
*   这就是所谓的**“势阱”**。\r
\r
#### **2. 梯度能（界面能）：**\r
$$ \\frac{\\kappa}{2} (\\nabla \\phi)^2 $$\r
*   如果 $\\phi$ 变化剧烈（界面陡峭），这一项就大。系统为了省能量，会倾向于让界面平缓一点。\r
\r
---\r
\r
### **第二层：计算驱动力（The Driving Force）**\r
\r
现在我们要算：**如果我改变一点点 $\\phi$，总能量 $F$ 会变多少？**\r
这就是求**变分导数** $\\frac{\\delta F}{\\delta \\phi}$。\r
\r
我们分别对两部分求导：\r
\r
#### **A. 对体自由能求导**\r
这是普通的求导：\r
$$ \\frac{\\partial f_{bulk}}{\\partial \\phi} = \\frac{\\partial}{\\partial \\phi} [A(\\phi^2 - 1)^2] = A \\cdot 2(\\phi^2 - 1) \\cdot 2\\phi = 4A(\\phi^3 - \\phi) $$\r
*   *这一项代表：我想立刻滚回阱底（1或-1）去的欲望。*\r
\r
#### **B. 对梯度能求导（关键数学步骤）**\r
这里涉及到泛函求导的**分部积分法**（Variational Calculus 101）：\r
我们需要对 $\\int \\frac{\\kappa}{2} (\\phi_x)^2 dx$ 求变分。\r
\r
根据欧拉-拉格朗日方程的推论，梯度项的变分导数是：\r
$$ \\frac{\\delta}{\\delta \\phi} \\left( \\frac{\\kappa}{2} (\\phi_x)^2 \\right) = - \\kappa \\frac{\\partial^2 \\phi}{\\partial x^2} $$\r
*   *注意：这里出现了一个负号和二阶导数（拉普拉斯项）。*\r
*   *这一项代表：邻居拉着我不让我剧烈变化的力（平滑作用）。*\r
\r
#### **C. 合并驱动力**\r
$$ \\frac{\\delta F}{\\delta \\phi} = \\underbrace{4A(\\phi^3 - \\phi)}_{\\text{去阱底的力}} - \\underbrace{\\kappa \\nabla^2 \\phi}_{\\text{平滑界面的力}} $$\r
\r
---\r
\r
### **第三层：组装控制方程（The Action）**\r
\r
最后，我们搬出 **Allen-Cahn 的总纲领**：\r
**变化速度 $\\propto$ 负的驱动力** （我要顺着能量降低的方向跑）。\r
\r
$$ \\frac{\\partial \\phi}{\\partial t} = -L \\times \\frac{\\delta F}{\\delta \\phi} $$\r
\r
将刚才算出的两项代入：\r
\r
$$ \\frac{\\partial \\phi}{\\partial t} = -L \\left[ 4A(\\phi^3 - \\phi) - \\kappa \\nabla^2 \\phi \\right] $$\r
\r
整理一下负号，得到最终的 **AC 方程**：\r
\r
$$ \\boxed{ \\frac{\\partial \\phi}{\\partial t} = L \\left( \\kappa \\nabla^2 \\phi - 4A(\\phi^3 - \\phi) \\right) } $$\r
\r
---\r
\r
### **第四层：物理含义解读（从公式看本质）**\r
\r
这个公式告诉我们，$\\phi$ 的变化是由两股力量在“拔河”：\r
\r
#### **1. 扩散项 $L\\kappa \\nabla^2 \\phi$（来自梯度能）**\r
*   **作用：** **磨平**。\r
*   **行为：** 这就是经典的热传导/扩散项。它试图让 $\\phi$ 在空间上分布均匀，把陡峭的界面拉宽，减少梯度的惩罚。\r
*   *它说：“大家别吵了，都平滑一点，界面别那么陡。”*\r
\r
#### **2. 反应项 $-4AL(\\phi^3 - \\phi)$（来自体自由能）**\r
*   **作用：** **站队**。\r
*   **行为：**\r
    *   如果 $\\phi$ 稍微偏正（比如 0.1），这一项会推着它往 1 跑。\r
    *   如果 $\\phi$ 稍微偏负（比如 -0.1），这一项会推着它往 -1 跑。\r
    *   这叫**“反扩散”**（Anti-diffusion）或**“锐化”**。\r
*   *它说：“不行！必须选边站！要么是1，要么是-1，不准待在0！”*\r
\r
---\r
\r
### **总结：AC 方程到底在算什么？**\r
\r
AC 方程的整个计算过程，就是这两股力量的**动态平衡**：\r
\r
1.  **反应项**拼命想让界面变窄，让界面上的点迅速变成 1 或 -1（**锐化**）。\r
2.  **扩散项**拼命想让界面变宽，减少能量梯度（**钝化**）。\r
\r
最终，两者达成妥协，形成了一个**具有固定宽度的、平滑过渡的弥散界面**（这正是双曲正切函数 $\\tanh(x)$ 的形状）。这也就是为什么相场法能自动维持一个稳定的弥散界面的数学原理。\r
\r
\r
## 相关参数\r
\r
这是一个非常实际的**“工程落地”**问题。\r
\r
你在推导公式时，A、$\\kappa$、L 是**数学参数**；但在实际写代码做仿真时，你不能随便填数，必须让它们对应真实的**材料属性**（如钢铁、锂电池、高分子）。\r
\r
这三者不是凭空得出的，而是通过**“宏观材料参数”**反推出来的。我们需要建立一个**“映射关系”**。\r
\r
---\r
\r
### **1. 我们手里有什么？（真实的材料参数）**\r
\r
去查材料手册（或者文献），我们通常能找到以下三个物理量：\r
1.  **表面张力 / 界面能 ($\\gamma$, Gamma)**：\r
    *   单位：$J/m^2$。\r
    *   含义：造出一个单位面积的界面需要消耗多少能量。\r
2.  **界面厚度 ($\\delta$, Delta)**：\r
    *   单位：$m$。\r
    *   含义：真实的物理界面厚度（通常只有几纳米）。\r
    *   *工程潜规则：* 在仿真里，为了省网格，我们通常把 $\\delta$ **人为放大**（比如放到微米级），只要它比晶粒尺寸小得多就行。\r
3.  **界面迁移率 ($M_{gb}$, Mobility)**：\r
    *   单位：$m^4/(J \\cdot s)$ 或 $m/s \\cdot K^{-1}$。\r
    *   含义：给界面一点驱动力，它跑得有多快。\r
\r
---\r
\r
### **2. 怎么算出 A 和 $\\kappa$？（静态参数映射）**\r
\r
**$A$ (势垒高度)** 和 **$\\kappa$ (梯度系数)** 这两个兄弟联手决定了界面的形状和能量。\r
通过对平衡状态下的相场方程积分（解出 $\\tanh$ 轮廓），我们可以得到以下严格的数学关系：\r
\r
#### **公式推导结果（直接记结论）：**\r
$$ \\gamma = \\frac{2\\sqrt{2}}{3} \\sqrt{\\kappa A} $$\r
$$ \\delta \\approx \\sqrt{\\frac{\\kappa}{A}} \\times (\\text{常数，通常取2~4}) $$\r
\r
我们可以反解出 $A$ 和 $\\kappa$：\r
\r
1.  **计算 A（势阱深度）：**\r
    $$ A = \\frac{3 \\gamma}{\\sqrt{2} \\delta} $$\r
    *   *直觉：* 如果你想让界面能 $\\gamma$ 大一点，或者界面 $\\delta$ 薄一点，你就得把势阱挖得深一点（A 变大）。\r
\r
2.  **计算 $\\kappa$（梯度惩罚）：**\r
    $$ \\kappa = \\frac{3 \\gamma \\delta}{\\sqrt{2}} $$\r
    *   *直觉：* 界面能 $\\gamma$ 大，或者界面 $\\delta$ 厚，说明系统对梯度的容忍度高，或者梯度的能量贡献大。\r
\r
> **工程师的操作流：**\r
> 1.  先定**网格大小 $dx$**。\r
> 2.  人为设定**界面厚度 $\\delta$**（通常取 $4dx \\sim 5dx$，保证界面内有足够的网格点）。\r
> 3.  查手册得到 **$\\gamma$**。\r
> 4.  套公式算出 **$A$** 和 **$\\kappa$** 输入代码。\r
\r
---\r
\r
### **3. 怎么算出 L？（动力学参数映射）**\r
\r
**$L$ (相场松弛系数)** 决定了方程演化的快慢。它必须匹配真实的**物理界面迁移率 $M_{gb}$**。\r
\r
根据渐进分析（Asymptotic Analysis），当界面厚度 $\\delta \\to 0$ 时，AC 方程必须退化为经典的夏普界面模型（Sharp Interface Model）：$V = M_{gb} \\cdot \\Delta G$。\r
\r
#### **映射关系：**\r
$$ L = \\frac{M_{gb}}{\\delta} \\times (\\text{形状因子}) $$\r
\r
或者更通用的形式（取决于具体的势函数定义）：\r
$$ L = \\frac{M_{gb}}{\\kappa} \\times (\\text{系数}) $$\r
\r
*   **直觉：**\r
    *   真实的原子动得越快（$M_{gb}$ 大），$L$ 就越大。\r
    *   注意这里除以了 $\\delta$。因为相场法是在把一个锐利的界面“拉宽”了来算，为了保证总的移动速度 $V$ 不变，界面越宽，内部反应系数 $L$ 就得调整。\r
\r
---\r
\r
### **4. 总结：从手册到代码的流水线**\r
\r
假设你要算一个**纯金属凝固**的例子，AC 方程中的参数是这样来的：\r
\r
| 代码里的参数 | 谁决定的？ | 计算逻辑 (配方) | 物理意义 |\r
| :--- | :--- | :--- | :--- |\r
| **A** | **界面能 + 网格** | $\\propto \\frac{\\gamma}{\\delta_{num}}$ | 势阱有多深（界面想变薄的力） |\r
| **$\\kappa$** | **界面能 + 网格** | $\\propto \\gamma \\cdot \\delta_{num}$ | 梯度惩罚有多大（界面想变宽的力） |\r
| **L** | **迁移率 + 网格** | $\\propto \\frac{M_{gb}}{\\delta_{num}}$ | 反应有多快（调节仿真时间步长） |\r
\r
### **5. 一个具体的数值例子（防坑指南）**\r
\r
假设你想模拟金（Au）：\r
1.  **查参：** 表面张力 $1.5$。\r
2.  **定网格：** 假设你网格 $dx = 10 \\, nm$。\r
3.  **定界面：** 设定仿真界面厚度 $\\delta = 4dx = 40 \\, nm$（这是数值界面，比真实物理界面厚，但在相场里是被允许的“模型参数”）。\r
4.  **算参数：**\r
    *   $A = \\frac{3 \\times 1.5}{\\sqrt{2} \\times 40 \\times 10^{-9}} \\approx 7.9 \\times 10^7$\r
    *   $\\kappa = \\frac{3 \\times 1.5 \\times 40 \\times 10^{-9}}{\\sqrt{2}} \\approx 1.27 \\times 10^{-7}$\r
\r
**关键点：**\r
你在代码里填入 $7.9 \\times 10^7$ 和 $1.27 \\times 10^{-7}$，你的相场模型就能模拟出**真实的金的表面张力**效果。这就是为什么相场法被称为“唯象模型”（Phenomenological Model）——我们调节内部参数，是为了重现宏观现象。
`,wt=`# Homepage and research notebook update

The personal homepage has been reorganized around computational physics, scientific computing, and Physical AI. The graph-paper background and notebook style remain, with new sections for a systems perspective and research notes.

Notes can be searched by title and full text, and the article reader supports mathematical notation and code. Ideas, derivations, and engineering records will continue to grow here.
`,Tt=`# 主页与研究笔记更新

个人主页围绕计算物理、科学计算与 Physical AI 重新整理。纸张网格与手稿式表达延续下来，新增系统视角和研究笔记入口。

研究笔记支持按标题与正文搜索，文章阅读支持数学公式和代码。后续的想法、推导与工程记录，会继续在这里积累。
`,Et=`# Deploying a Vue 3 personal blog to GitHub Pages

A Vue 3 project can be deployed with **GitHub Pages and GitHub Actions**. This reference walks through a typical **Vue 3 + Vite** setup.

---

## 1. Choose the repository type

There are two common GitHub Pages arrangements.

### Option A: a personal-site repository

Use a repository named:

\`\`\`text
YOUR_USERNAME.github.io
\`\`\`

For the GitHub username \`BeautyChaser\`, the example repository is:

\`\`\`text
BeautyChaser.github.io
\`\`\`

The site address is:

\`\`\`text
https://BeautyChaser.github.io/
\`\`\`

For a site served at the domain root, set Vite's base path to:

\`\`\`js
base: '/'
\`\`\`

### Option B: a project repository

For a repository named:

\`\`\`text
my-blog
\`\`\`

The site address becomes:

\`\`\`text
https://BeautyChaser.github.io/my-blog/
\`\`\`

In that arrangement, configure the base path as:

\`\`\`js
base: '/my-blog/'
\`\`\`

---

## 2. Verify the production build

Run these commands in the Vue project directory:

\`\`\`bash
npm install
npm run build
\`\`\`

A successful default build produces:

\`\`\`text
dist/
\`\`\`

Preview the production version locally:

\`\`\`bash
npm run preview
\`\`\`

Vite's default build output directory is \`dist\`.

---

## 3. Configure Vite

A minimal \`vite.config.js\` might contain:

\`\`\`js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
})
\`\`\`

### Personal-site repository

For \`BeautyChaser.github.io\`:

\`\`\`js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/',
})
\`\`\`

The default value of \`base\` is \`/\`, so it can also be omitted.

### Project repository

For \`my-blog\`:

\`\`\`js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/my-blog/',
})
\`\`\`

Match the repository name in the path, including its capitalization.

---

## 4. Configure Vue Router

GitHub Pages serves static files and does not provide general server-side route rewrites.

With:

\`\`\`js
createWebHistory()
\`\`\`

Refreshing a nested URL such as \`/article/example\` can produce a \`404\`.

Hash routing avoids this issue. Edit:

\`\`\`text
src/router/index.js
\`\`\`

or:

\`\`\`text
src/router/index.ts
\`\`\`

For example:

\`\`\`js
import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    // ...
  ],
})

export default router
\`\`\`

An address then looks like:

\`\`\`text
https://BeautyChaser.github.io/#/articles
\`\`\`

The fragment stays in the browser, so refreshing the article still requests the site's entry document.

If you retain \`createWebHistory()\`, you need an additional fallback arrangement, such as a \`404.html\` script. Hash routing is a simpler starting point for a personal blog.

---

## 5. Add a deployment workflow

Create:

\`\`\`text
.github/
└── workflows/
    └── deploy.yml
\`\`\`

The workflow from this reference is:

\`\`\`yaml
name: Deploy Vue Blog to GitHub Pages

on:
  push:
    branches:
      - main

  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  deploy:
    environment:
      name: github-pages
      url: \${{ steps.deployment.outputs.page_url }}

    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v6

      - name: Setup Node.js
        uses: actions/setup-node@v6
        with:
          node-version: 22
          cache: npm

      - name: Install dependencies
        run: npm ci

      - name: Build project
        run: npm run build

      - name: Configure GitHub Pages
        uses: actions/configure-pages@v5

      - name: Upload dist
        uses: actions/upload-pages-artifact@v4
        with:
          path: ./dist

      - name: Deploy GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
\`\`\`

If the default branch is \`master\`, replace:

\`\`\`yaml
branches:
  - main
\`\`\`

with:

\`\`\`yaml
branches:
  - master
\`\`\`

---

## 6. Commit and push the project

If Git has not been initialized:

\`\`\`bash
git init
git add .
git commit -m "Initial Vue blog"
git branch -M main
git remote add origin https://github.com/BeautyChaser/BeautyChaser.github.io.git
git push -u origin main
\`\`\`

For a project repository, the remote URL would instead be:

\`\`\`bash
git remote add origin https://github.com/BeautyChaser/my-blog.git
\`\`\`

If the project already has a remote:

\`\`\`bash
git add .
git commit -m "Configure GitHub Pages deployment"
git push
\`\`\`

---

## 7. Enable GitHub Pages

In the repository settings, follow:

\`\`\`text
Settings
→ Pages
→ Build and deployment
→ Source
→ GitHub Actions
\`\`\`

Open the **Actions** tab and look for:

\`\`\`text
Deploy Vue Blog to GitHub Pages
\`\`\`

After the workflow completes successfully, find the published address under **Settings → Pages**.

---

## 8. Example project structure

\`\`\`text
my-blog/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── public/
│   ├── favicon.ico
│   └── images/
├── src/
│   ├── assets/
│   ├── components/
│   ├── router/
│   │   └── index.js
│   ├── views/
│   │   ├── HomeView.vue
│   │   ├── ArticlesView.vue
│   │   └── AboutView.vue
│   ├── App.vue
│   └── main.js
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js
\`\`\`

---

## 9. Common problems

### Blank page or missing JavaScript and CSS

Check the base path. A personal-site repository usually uses:

\`\`\`js
base: '/'
\`\`\`

A project repository named \`my-blog\` uses:

\`\`\`js
base: '/my-blog/'
\`\`\`

A relative base path:

\`\`\`js
base: './'
\`\`\`

requires understanding how relative resource URLs behave. This site's own build deliberately uses a relative base with static output at the repository root; the surrounding article notice distinguishes that setup from this general reference.

### \`npm ci\` fails in GitHub Actions

The repository must contain:

\`\`\`text
package-lock.json
\`\`\`

Generate and commit the lockfile locally:

\`\`\`bash
npm install
git add package-lock.json
git commit -m "Add package lock"
git push
\`\`\`

For Yarn, the corresponding workflow steps could be:

\`\`\`yaml
- name: Install dependencies
  run: yarn install --frozen-lockfile

- name: Build project
  run: yarn build
\`\`\`

### Homepage works, but refreshing an article gives a 404

This is the usual mismatch between \`createWebHistory()\` and static hosting. Use:

\`\`\`js
createWebHashHistory()
\`\`\`

### Images work locally but disappear after deployment

Do not reference source files directly in rendered HTML:

\`\`\`html
<img src="/src/assets/test.png">
\`\`\`

Import the asset in the Vue component:

\`\`\`vue
<script setup>
import testImage from '@/assets/test.png'
<\/script>

<template>
  <img :src="testImage" alt="test">
</template>
\`\`\`

For files in \`public\`, account for the deployment subpath rather than hardcoding a site-root URL.

---

## 10. Deployment pattern in this reference

For the example username \`BeautyChaser\`:

\`\`\`text
Repository: BeautyChaser.github.io
Address: https://BeautyChaser.github.io/
Vite base: /
Router: createWebHashHistory()
Deployment: GitHub Actions
Build directory: dist
\`\`\`

After configuration, an update follows the normal Git workflow:

\`\`\`bash
git add .
git commit -m "Update blog"
git push
\`\`\`

GitHub Actions then rebuilds and publishes the site.
`,Dt=`# Vue 3 项目部署到 GitHub Pages 作为个人博客

可以直接使用 **GitHub Pages + GitHub Actions** 部署 Vue 3 项目。下面按照最常见的 **Vue 3 + Vite** 项目说明完整流程。

---

## 一、确定博客仓库类型

GitHub Pages 有两种常见部署方式。

### 方案 A：个人主页仓库（推荐）

仓库名必须是：

\`\`\`text
你的GitHub用户名.github.io
\`\`\`

例如 GitHub 用户名是 \`BeautyChaser\`：

\`\`\`text
BeautyChaser.github.io
\`\`\`

网站地址为：

\`\`\`text
https://BeautyChaser.github.io/
\`\`\`

这种方式适合作为正式个人博客，Vite 的 \`base\` 使用：

\`\`\`js
base: '/'
\`\`\`

### 方案 B：普通项目仓库

例如仓库名为：

\`\`\`text
my-blog
\`\`\`

网站地址为：

\`\`\`text
https://BeautyChaser.github.io/my-blog/
\`\`\`

这种方式要求 Vite 的 \`base\` 设置为：

\`\`\`js
base: '/my-blog/'
\`\`\`

---

## 二、确认项目能够正常构建

在 Vue 项目根目录运行：

\`\`\`bash
npm install
npm run build
\`\`\`

构建成功后，项目根目录应该生成：

\`\`\`text
dist/
\`\`\`

可以在本地检查生产版本：

\`\`\`bash
npm run preview
\`\`\`

Vite 默认将构建结果输出到 \`dist\` 目录。

---

## 三、配置 \`vite.config.js\`

假设当前文件内容如下：

\`\`\`js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
})
\`\`\`

### 情况 1：仓库名是 \`BeautyChaser.github.io\`

配置为：

\`\`\`js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/',
})
\`\`\`

\`base\` 默认值就是 \`/\`，因此也可以省略。

### 情况 2：仓库名是 \`my-blog\`

配置为：

\`\`\`js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/my-blog/',
})
\`\`\`

这里的仓库名必须与 GitHub 仓库名称完全一致，包括大小写。

---

## 四、配置 Vue Router

GitHub Pages 本质上是静态文件托管，不提供常规服务器路由重写。

如果使用：

\`\`\`js
createWebHistory()
\`\`\`

直接刷新 \`/article/example\` 等子页面时，可能出现 \`404\`。

对于 GitHub Pages，最简单稳定的方法是使用 Hash 路由。

修改：

\`\`\`text
src/router/index.js
\`\`\`

或者：

\`\`\`text
src/router/index.ts
\`\`\`

示例：

\`\`\`js
import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    // ...
  ],
})

export default router
\`\`\`

最终地址可能类似：

\`\`\`text
https://BeautyChaser.github.io/#/articles
\`\`\`

虽然地址中带有 \`#\`，但刷新子页面时不会出现 GitHub Pages \`404\`。

如果坚持使用：

\`\`\`js
createWebHistory()
\`\`\`

则需要额外制作 \`404.html\` 回退脚本。个人博客初期通常没有必要增加这层复杂度。

---

## 五、创建 GitHub Actions 部署文件

在项目根目录创建：

\`\`\`text
.github/
└── workflows/
    └── deploy.yml
\`\`\`

在 \`deploy.yml\` 中填写：

\`\`\`yaml
name: Deploy Vue Blog to GitHub Pages

on:
  push:
    branches:
      - main

  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  deploy:
    environment:
      name: github-pages
      url: \${{ steps.deployment.outputs.page_url }}

    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v6

      - name: Setup Node.js
        uses: actions/setup-node@v6
        with:
          node-version: 22
          cache: npm

      - name: Install dependencies
        run: npm ci

      - name: Build project
        run: npm run build

      - name: Configure GitHub Pages
        uses: actions/configure-pages@v5

      - name: Upload dist
        uses: actions/upload-pages-artifact@v4
        with:
          path: ./dist

      - name: Deploy GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
\`\`\`

如果默认分支是 \`master\`，将：

\`\`\`yaml
branches:
  - main
\`\`\`

改为：

\`\`\`yaml
branches:
  - master
\`\`\`

---

## 六、提交项目到 GitHub 仓库

如果项目还没有初始化 Git：

\`\`\`bash
git init
git add .
git commit -m "Initial Vue blog"
git branch -M main
git remote add origin https://github.com/BeautyChaser/BeautyChaser.github.io.git
git push -u origin main
\`\`\`

如果使用普通项目仓库：

\`\`\`bash
git remote add origin https://github.com/BeautyChaser/my-blog.git
\`\`\`

如果项目已经存在远程仓库，只需要：

\`\`\`bash
git add .
git commit -m "Configure GitHub Pages deployment"
git push
\`\`\`

---

## 七、在 GitHub 开启 Pages

进入 GitHub 仓库页面：

\`\`\`text
Settings
→ Pages
→ Build and deployment
→ Source
→ GitHub Actions
\`\`\`

随后进入：

\`\`\`text
Actions
\`\`\`

查看工作流：

\`\`\`text
Deploy Vue Blog to GitHub Pages
\`\`\`

工作流运行成功后，可以在：

\`\`\`text
Settings → Pages
\`\`\`

看到博客地址。

---

## 八、推荐的项目目录结构

\`\`\`text
my-blog/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── public/
│   ├── favicon.ico
│   └── images/
├── src/
│   ├── assets/
│   ├── components/
│   ├── router/
│   │   └── index.js
│   ├── views/
│   │   ├── HomeView.vue
│   │   ├── ArticlesView.vue
│   │   └── AboutView.vue
│   ├── App.vue
│   └── main.js
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js
\`\`\`

---

## 九、常见错误

### 1. 页面空白，JS 或 CSS 加载 404

通常是 \`base\` 配置错误。

个人主页仓库：

\`\`\`js
base: '/'
\`\`\`

普通仓库 \`my-blog\`：

\`\`\`js
base: '/my-blog/'
\`\`\`

通常不建议随意写成：

\`\`\`js
base: './'
\`\`\`

除非明确理解相对资源路径可能带来的影响。

---

### 2. GitHub Actions 中 \`npm ci\` 报错

\`npm ci\` 要求仓库中存在：

\`\`\`text
package-lock.json
\`\`\`

先在本地执行：

\`\`\`bash
npm install
git add package-lock.json
git commit -m "Add package lock"
git push
\`\`\`

如果项目使用 Yarn，可以将工作流中的安装和构建步骤改为：

\`\`\`yaml
- name: Install dependencies
  run: yarn install --frozen-lockfile

- name: Build project
  run: yarn build
\`\`\`

---

### 3. 主页能打开，刷新文章页面出现 404

这是 \`createWebHistory()\` 与 GitHub Pages 静态托管不匹配导致的。

可以改为：

\`\`\`js
createWebHashHistory()
\`\`\`

这是最简单稳定的方案。

---

### 4. 图片在开发环境正常，部署后不显示

不要直接写：

\`\`\`html
<img src="/src/assets/test.png">
\`\`\`

组件内应该导入资源：

\`\`\`vue
<script setup>
import testImage from '@/assets/test.png'
<\/script>

<template>
  <img :src="testImage" alt="test">
</template>
\`\`\`

如果图片放在 \`public\` 目录，需要特别注意普通仓库部署时的子路径问题，避免硬编码错误的站点根路径。

---

## 十、推荐的最终方案

以 GitHub 用户名 \`BeautyChaser\` 为例：

\`\`\`text
仓库：BeautyChaser.github.io
地址：https://BeautyChaser.github.io/
Vite base：/
路由：createWebHashHistory()
部署方式：GitHub Actions
构建目录：dist
\`\`\`

以后每次更新博客只需要：

\`\`\`bash
git add .
git commit -m "Update blog"
git push
\`\`\`

GitHub Actions 会自动重新构建并发布网站。
`,Ot={zh:{news:`近况更新`,physics:`计算物理`,engineering:`工程记录`,notes:`研究笔记`},en:{news:`NEWS & UPDATES`,physics:`COMPUTATIONAL PHYSICS`,engineering:`ENGINEERING NOTES`,notes:`FIELD NOTES`}};function Z(e){return e.normalize(`NFKC`).toLocaleLowerCase().replace(/[–—−]/g,`-`)}function Q(e,t){return e.replace(/<!--[\s\S]*?-->/g,``).replace(/\$\$[\s\S]*?\$\$/g,t===`en`?` [equation] `:` [数学公式] `).replace(/\$([^$\n]+)\$/g,`$1`).replace(/\\text\{([^}]+)\}/g,`$1`).replace(/```[^\n]*\n/g,``).replace(/!?\[([^\]]*)\]\([^)]*\)/g,`$1`).replace(/^\s{0,3}#{1,6}\s+/gm,``).replace(/[*_`~>|]/g,``).replace(/\s+/g,` `).trim()}function kt(e){let t=new Map;for(let[n,r]of Object.entries(e)){let e=n.replace(`../../markdown/`,``);if(/(?:^|\/)readme(?:\.(?:zh|en))?\.md$/i.test(e))continue;let i=e.match(/\.(zh|en)\.md$/i)?.[1].toLowerCase()??`zh`,a=e.replace(/(?:\.(?:zh|en))?\.md$/i,``),o=t.get(a)??{slug:a,fileName:`${a}.md`,href:`#note/${encodeURIComponent(a)}`,isNews:a.startsWith(`news/`),date:a.startsWith(`news/`)?a.match(/\d{4}-\d{2}-\d{2}/)?.[0]??``:``,versions:{}};if(o.versions[i])throw Error(`Duplicate ${i} article: ${a}`);let s=r.match(/^#\s+(.+?)\s*#*\s*$/m),c=Q(s?.[1]??a.split(`/`).at(-1),i),l=s?r.replace(s[0],``).trim():r.trim(),u=Q(l,i),d=Q(l.split(/\r?\n\s*\r?\n/).find(e=>e.trim()&&!/^\s*(?:#|---|```|\$\$|<!--)/.test(e))??u,i),f=i===`en`?200:110;o.versions[i]={title:c,content:l,text:u,description:d.length>f?`${d.slice(0,f)}…`:d,searchTitle:Z(c),searchContent:Z(`${u} ${l}`)},t.set(a,o)}return[...t.values()].map(e=>{let t=Object.values(e.versions).map(e=>e.title).join(` `);return{...e,categoryKey:e.isNews?`news`:/Allen|方程|物理|相场|physics|phase.field/i.test(t)?`physics`:/部署|工程|GitHub|Vue|deployment|engineering/i.test(t)?`engineering`:`notes`}}).sort((e,t)=>e.fileName.localeCompare(t.fileName,`zh-CN`))}function At(e,t){let n=e.versions[t]?t:Object.keys(e.versions)[0];return{...e,...e.versions[n],contentLocale:n,translationMissing:n!==t,category:Ot[t][e.categoryKey],label:Ot[t][e.isNews?`news`:`notes`]}}function jt(e,t,n){let r=Z(t).trim().split(/\s+/).filter(Boolean);return r.length?e.filter(e=>r.every(t=>Object.values(e.versions).some(e=>e.searchTitle.includes(t)||e.searchContent.includes(t)))).map(e=>{let t=At(e,n),i=Object.values(e.versions),a=r.some(e=>i.some(t=>t.searchTitle.includes(e))),o=r.reduce((e,n)=>e+(t.searchTitle.includes(n)?8:i.some(e=>e.searchTitle.includes(n))?4:1),0),s=r.map(e=>Z(t.text).indexOf(e)).filter(e=>e>=0).sort((e,t)=>e-t),c=Math.max(0,(s[0]??0)-28),l=n===`en`?230:140,u=`${c>0?`…`:``}${t.text.slice(c,c+l)}${c+l<t.text.length?`…`:``}`;return{...t,titleMatch:a,score:o,excerpt:u}}).sort((e,t)=>t.score-e.score||e.fileName.localeCompare(t.fileName,`zh-CN`)):[]}var Mt=kt(Object.assign({"../../markdown/README.md":xt,"../../markdown/allen-cahn.en.md":St,"../../markdown/allen-cahn.md":Ct,"../../markdown/news/2026-10-19-website-update.en.md":wt,"../../markdown/news/2026-10-19-website-update.md":Tt,"../../markdown/vue3-github-pages-blog-deployment.en.md":Et,"../../markdown/vue3-github-pages-blog-deployment.md":Dt})),$=k(()=>Mt.map(e=>At(e,Y.value))),Nt=k(()=>$.value.filter(e=>e.isNews).sort((e,t)=>t.fileName.localeCompare(e.fileName))),Pt=e=>jt(Mt,e,Y.value),Ft=[`aria-label`],It=[`aria-label`,`placeholder`,`aria-expanded`],Lt=[`aria-label`],Rt={key:0,id:`note-search-results`,class:`search-results`},zt={class:`result-heading`,role:`status`},Bt={key:0},Vt=[`href`],Ht={class:`result-category`},Ut={key:1,class:`empty-search`},Wt=M({__name:`WebSearch`,setup(e){let t=h(``),n=h(!1),r=k(()=>Pt(t.value)),a=k(()=>n.value&&!!t.value.trim());function o(e){e.currentTarget.contains(e.relatedTarget)||(n.value=!1)}return(e,s)=>(b(),N(`div`,{class:`search-container`,onFocusin:s[4]||=e=>n.value=!0,onFocusout:o,onKeydown:s[5]||=lt(e=>n.value=!1,[`esc`])},[j(`form`,{class:`search-field`,role:`search`,"aria-label":i(X)(`搜索研究笔记`,`Search notes`),onSubmit:s[2]||=st(e=>n.value=!0,[`prevent`])},[s[6]||=j(`span`,{class:`search-symbol`,"aria-hidden":`true`},`⌕`,-1),se(j(`input`,{"onUpdate:modelValue":s[0]||=e=>t.value=e,type:`search`,"aria-label":i(X)(`搜索文章标题与正文`,`Search titles and content`),placeholder:i(X)(`搜索标题与正文…`,`Title / content…`),autocomplete:`off`,"aria-controls":`note-search-results`,"aria-expanded":a.value,onInput:s[1]||=e=>n.value=!0},null,40,It),[[it,t.value]]),j(`button`,{type:`submit`,class:`search-submit`,"aria-label":i(X)(`搜索`,`Search`)},`↵`,8,Lt)],40,Ft),a.value?(b(),N(`div`,Rt,[j(`div`,zt,[A(v(i(bt)(r.value.length))+` `,1),j(`span`,null,v(i(X)(`标题 + 正文检索`,`Titles + full text`)),1)]),r.value.length?(b(),N(`ul`,Bt,[(b(!0),N(T,null,P(r.value,e=>(b(),N(`li`,{key:e.slug},[j(`a`,{href:e.href,onClick:s[3]||=e=>n.value=!1},[j(`span`,Ht,v(e.titleMatch?i(X)(`标题命中`,`Title match`):i(X)(`正文命中`,`Content match`)),1),j(`strong`,null,v(e.title),1),j(`p`,null,v(e.excerpt),1)],8,Vt)]))),128))])):(b(),N(`p`,Ut,v(i(X)(`没有找到相关笔记，试试其他关键词。`,`No notes found. Try another keyword.`)),1))])):D(``,!0)],32))}},[[`__scopeId`,`data-v-9370c159`]]),Gt={class:`web-header`},Kt={class:`header-inner`},qt=[`aria-label`],Jt={class:`brand-caption`},Yt=[`aria-label`],Xt=[`href`,`aria-label`],Zt={class:`nav-index`},Qt={class:`nav-label`},$t={class:`nav-label-short`},en=[`aria-label`],tn=[`aria-pressed`],nn=[`aria-pressed`],rn=M({__name:`WebHeader`,setup(e){let t=k(()=>[{href:`#home`,label:X(`首页`,`Home`),index:`00`},{href:`#news`,label:`News`,index:`N`},{href:`#systems`,label:X(`系统视角`,`Systems`),shortLabel:X(`系统`,`Work`),index:`01`},{href:`#notes`,label:X(`研究笔记`,`Notes`),shortLabel:X(`笔记`,`Notes`),index:`02`},{href:`#contact`,label:X(`联系`,`Contact`),shortLabel:X(`联系`,`Mail`),index:`03`}]);return(e,n)=>(b(),N(`header`,Gt,[j(`div`,Kt,[j(`a`,{class:`brand`,href:`#home`,"aria-label":i(X)(`Callingforwind 首页`,`Callingforwind home`)},[n[4]||=j(`span`,{class:`brand-mark`},[A(`CFW`),j(`span`,null,`.`)],-1),j(`span`,Jt,[n[2]||=A(`CALLINGFORWIND`,-1),n[3]||=j(`br`,null,null,-1),j(`span`,null,v(i(X)(`物理 · 计算 · 系统`,`PHYSICS · COMPUTATION · SYSTEMS`)),1)])],8,qt),O(Wt),j(`nav`,{"aria-label":i(X)(`主导航`,`Main navigation`)},[(b(!0),N(T,null,P(t.value,e=>(b(),N(`a`,{key:e.href,href:e.href,"aria-label":e.label},[j(`span`,Zt,v(e.index),1),j(`span`,Qt,v(e.label),1),j(`span`,$t,v(e.shortLabel||e.label),1)],8,Xt))),128))],8,Yt),j(`div`,{class:`language-switch`,role:`group`,"aria-label":i(X)(`网站语言`,`Site language`)},[j(`button`,{type:`button`,lang:`zh-CN`,"aria-pressed":i(Y)===`zh`,"aria-label":`切换为中文`,onClick:n[0]||=e=>i(vt)(`zh`)},`中`,8,tn),j(`button`,{type:`button`,lang:`en`,"aria-pressed":i(Y)===`en`,"aria-label":`Switch to English`,onClick:n[1]||=e=>i(vt)(`en`)},`EN`,8,nn)],8,en)])]))}},[[`__scopeId`,`data-v-deb72d9c`]]),an=``+new URL(`cfw_observe_model_live_hero-D_EHy4FS.gif`,import.meta.url).href,on={id:`home`,class:`home-page`},sn={id:`news`,class:`news-column page-width`,"aria-labelledby":`news-title`},cn={class:`news-heading`},ln={id:`news-title`},un={class:`news-items`},dn=[`href`],fn=[`datetime`],pn={class:`news-title`},mn={key:0,class:`news-empty`},hn={class:`hero page-width`,"aria-labelledby":`identity`},gn={class:`hero-copy`},_n={class:`eyebrow hero-eyebrow`},vn={key:0,id:`identity`},yn={key:1,id:`identity`,class:`identity-heading-en`},bn={class:`identity-en`},xn={class:`hero-statement`},Sn={class:`hero-actions`},Cn={class:`primary-link`,href:`#systems`},wn={class:`secondary-link`,href:`#notes`},Tn=[`aria-label`],En={class:`sheet-top`},Dn={class:`system-drawing`},On={class:`system-node node-physics`},kn={class:`node-index`},An={class:`system-node node-model`},jn={class:`node-index`},Mn={class:`system-node node-ai`},Nn={class:`node-index`},Pn={class:`system-node node-feedback`},Fn={class:`node-index`},In=[`src`,`alt`],Ln={class:`sheet-bottom`},Rn=[`aria-label`],zn={class:`strip-label`},Bn={id:`systems`,class:`perspectives page-width`,"aria-labelledby":`systems-title`},Vn={class:`section-heading`},Hn={class:`eyebrow`},Un={id:`systems-title`},Wn={class:`section-aside`},Gn={class:`perspective-grid`},Kn={class:`card-top`},qn={class:`card-symbol`,"aria-hidden":`true`},Jn={class:`card-annotation`},Yn={id:`notes`,class:`notes-section page-width`,"aria-labelledby":`notes-title`},Xn={class:`section-heading`},Zn={class:`eyebrow`},Qn={id:`notes-title`},$n={class:`notes-count`},er=[`href`],tr={class:`note-number`},nr={class:`note-content`},rr={class:`eyebrow`},ir={class:`note-label`},ar={class:`notebook-end`},or=M({__name:`HomePage`,setup(e){let t=k(()=>$.value.filter(e=>!e.isNews)),n=k(()=>[{number:`01`,name:X(`物理与机理`,`Physics & mechanisms`),english:X(`理解机理`,`UNDERSTAND`),description:X(`把问题拆回物理机理、相互作用与边界条件，先明确模型需要回答什么。`,`Start with physical mechanisms, interactions, and boundary conditions. Define what the model needs to explain.`),annotation:X(`机理 → 模型`,`mechanism → model`),symbol:`∂`},{number:`02`,name:X(`计算与验证`,`Computation & validation`),english:X(`计算验证`,`COMPUTE`),description:X(`让方程走向离散、求解与对照，让假设、误差与结果都能够被追溯。`,`Move from equations to discretization, solutions, and comparisons. Make assumptions, errors, and results traceable.`),annotation:X(`模型 → 求解 → 验证`,`model → solve → verify`),symbol:`∫`},{number:`03`,name:X(`智能与系统`,`Intelligence & systems`),english:X(`系统集成`,`INTEGRATE`),description:X(`将感知、模型、决策和反馈放在一起思考，让局部能力形成完整闭环。`,`Connect perception, models, decisions, and feedback. Bring individual capabilities into a complete working loop.`),annotation:X(`观测 → 行动 → 学习`,`observe → act → learn`),symbol:`↻`}]);return(e,r)=>(b(),N(`div`,on,[j(`section`,sn,[j(`div`,cn,[j(`h2`,ln,[r[0]||=A(`NEWS`,-1),j(`span`,null,` / `+v(i(X)(`近况`,`Updates`)),1)]),r[1]||=j(`span`,{class:`news-dot`,"aria-hidden":`true`},null,-1)]),j(`div`,un,[(b(!0),N(T,null,P(i(Nt).slice(0,3),e=>(b(),N(`a`,{key:e.slug,href:e.href,class:`news-item`},[e.date?(b(),N(`time`,{key:0,datetime:e.date},v(i(yt)(e.date)),9,fn)):D(``,!0),j(`span`,pn,v(e.title),1),r[2]||=j(`span`,{class:`news-arrow`,"aria-hidden":`true`},`↗`,-1)],8,dn))),128)),i(Nt).length?D(``,!0):(b(),N(`p`,mn,v(i(X)(`新的想法与进展，会在这里记录。`,`New ideas and progress will be shared here.`)),1))])]),j(`section`,hn,[j(`div`,gn,[j(`p`,_n,[r[3]||=j(`span`,{class:`small-cross`},`+`,-1),A(` CALLINGFORWIND / `+v(i(X)(`个人研究手记`,`PERSONAL FIELD NOTES`)),1)]),i(Y)===`zh`?(b(),N(`h1`,vn,[...r[4]||=[A(`跨领域计算物理与`,-1),j(`br`,null,null,-1),j(`em`,null,`Physical AI`,-1),j(`br`,null,null,-1),A(`系统架构师`,-1),j(`span`,{class:`title-period`},`.`,-1)]])):(b(),N(`h1`,yn,[...r[5]||=[A(`Cross-domain`,-1),j(`br`,null,null,-1),A(`Computational Physics`,-1),j(`br`,null,null,-1),A(`& `,-1),j(`em`,null,`Physical AI`,-1),j(`br`,null,null,-1),A(`Systems Architect`,-1),j(`span`,{class:`title-period`},`.`,-1)]])),j(`p`,bn,v(i(X)(`Cross-domain Computational Physics & Physical AI Systems Architect`,`From physical mechanisms to integrated, verifiable systems.`)),1),j(`div`,xn,[r[6]||=j(`span`,{class:`statement-line`},null,-1),j(`p`,null,v(i(X)(`从物理机理出发，用计算建立模型，让智能进入真实系统。`,`Start with physics. Build computational models. Bring intelligence into real-world systems.`)),1)]),j(`div`,Sn,[j(`a`,Cn,[A(v(i(X)(`探索系统视角`,`Explore systems`))+` `,1),r[7]||=j(`span`,null,`↗`,-1)]),j(`a`,wn,[A(v(i(X)(`阅读笔记`,`Read notes`))+` `,1),r[8]||=j(`span`,null,`↓`,-1)])])]),j(`figure`,{class:`system-sheet`,"aria-label":i(X)(`物理、计算和智能之间的反馈闭环示意图`,`A feedback loop connecting physics, computation, and intelligence`)},[j(`div`,En,[j(`span`,null,v(i(X)(`图 01`,`FIG. 01`)),1),j(`span`,null,v(i(X)(`从系统视角出发`,`A SYSTEMS PERSPECTIVE`)),1),r[9]||=j(`span`,null,`+`,-1)]),j(`div`,Dn,[r[10]||=S(`<div class="drawing-grid" data-v-a54dea18></div><svg class="cycle-lines" viewBox="0 0 400 350" aria-hidden="true" data-v-a54dea18><defs data-v-a54dea18><marker id="arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto" data-v-a54dea18><path d="M0,0 L6,3 L0,6" fill="none" stroke="currentColor" data-v-a54dea18></path></marker></defs><path d="M145 57 H253 M319 99 V244 M255 290 H145 M80 245 V102" fill="none" stroke="currentColor" stroke-width="1" marker-end="url(#arrow)" data-v-a54dea18></path><path d="M159 175 H241 M200 136 V215" stroke="currentColor" stroke-opacity="0.24" stroke-dasharray="3 5" data-v-a54dea18></path></svg>`,2),j(`div`,On,[j(`span`,kn,`01 / `+v(i(X)(`物理`,`PHYSICS`)),1),j(`strong`,null,v(i(X)(`物理世界`,`Physical world`)),1),j(`small`,null,v(i(X)(`机理 · 约束 · 边界`,`Mechanisms · constraints`)),1)]),j(`div`,An,[j(`span`,jn,`02 / `+v(i(X)(`计算`,`COMPUTATION`)),1),j(`strong`,null,v(i(X)(`计算模型`,`Computational model`)),1),j(`small`,null,v(i(X)(`方程 · 求解 · 验证`,`Equations · validation`)),1)]),j(`div`,Mn,[j(`span`,Nn,`03 / `+v(i(X)(`智能`,`INTELLIGENCE`)),1),j(`strong`,null,v(i(X)(`智能系统`,`Intelligent system`)),1),j(`small`,null,v(i(X)(`感知 · 决策 · 行动`,`Sense · decide · act`)),1)]),j(`div`,Pn,[j(`span`,Fn,`04 / `+v(i(X)(`反馈`,`FEEDBACK`)),1),j(`strong`,null,v(i(X)(`观测反馈`,`Observation & feedback`)),1),j(`small`,null,v(i(X)(`测量 · 对照 · 迭代`,`Measure · compare · iterate`)),1)]),j(`img`,{class:`model-animation`,src:i(an),alt:i(X)(`观测与建模动态示意`,`Animated illustration of observation and modeling`),width:`130`,height:`130`},null,8,In)]),j(`figcaption`,null,[r[11]||=j(`span`,{class:`loop-symbol`},`↻`,-1),A(` `+v(i(X)(`从观测到模型，再回到真实世界。`,`From observation to models, back to the real world.`)),1)]),j(`div`,Ln,[j(`span`,null,v(i(X)(`物理世界 ↔ 计算模型`,`PHYSICAL WORLD ↔ COMPUTATIONAL MODEL`)),1),r[12]||=j(`span`,null,`CFW.`,-1)])],8,Tn)]),j(`div`,{class:`discipline-strip page-width`,"aria-label":i(X)(`关注方向`,`Areas of focus`)},[j(`span`,zn,v(i(X)(`贯穿其中的线索`,`THE CONNECTING THREAD`)),1),j(`span`,null,v(i(X)(`计算物理`,`Computational Physics`)),1),r[13]||=j(`span`,{class:`strip-plus`},`+`,-1),j(`span`,null,v(i(X)(`科学计算`,`Scientific Computing`)),1),r[14]||=j(`span`,{class:`strip-plus`},`+`,-1),r[15]||=j(`span`,null,`Physical AI`,-1)],8,Rn),j(`section`,Bn,[j(`div`,Vn,[j(`div`,null,[j(`p`,Hn,`01 / `+v(i(X)(`系统思考`,`SYSTEMS THINKING`)),1),j(`h2`,Un,v(i(X)(`在学科之间，建立连接。`,`Make connections across disciplines.`)),1)]),j(`p`,Wn,v(i(X)(`以机理为起点，以计算为桥梁，以可验证的系统为落点。`,`Grounded in mechanisms. Bridged by computation. Built into verifiable systems.`)),1)]),j(`div`,Gn,[(b(!0),N(T,null,P(n.value,e=>(b(),N(`article`,{key:e.number,class:`perspective-card`},[j(`div`,Kn,[j(`span`,null,v(e.number)+` / `+v(e.english),1),j(`span`,qn,v(e.symbol),1)]),j(`h3`,null,v(e.name),1),j(`p`,null,v(e.description),1),j(`div`,Jn,v(e.annotation),1)]))),128))])]),j(`section`,Yn,[j(`div`,Xn,[j(`div`,null,[j(`p`,Zn,`02 / `+v(i(X)(`公开的研究手记`,`THE OPEN NOTEBOOK`)),1),j(`h2`,Qn,v(i(X)(`推导、搭建，也记录。`,`Derive. Build. Write it down.`)),1)]),j(`span`,$n,v(i(bt)(t.value.length)),1)]),(b(!0),N(T,null,P(t.value,(e,t)=>(b(),N(`a`,{key:e.slug,class:`note-row`,href:e.href},[j(`span`,tr,v(String(t+1).padStart(2,`0`)),1),j(`div`,nr,[j(`span`,rr,v(e.category),1),j(`h3`,null,v(e.title),1),j(`p`,null,v(e.description),1)]),j(`span`,ir,v(e.label),1),r[16]||=j(`span`,{class:`note-arrow`,"aria-hidden":`true`},`↗`,-1)],8,er))),128)),j(`p`,ar,[r[17]||=j(`span`,null,`∴`,-1),A(` `+v(i(X)(`理解世界，也把理解变成可以运行的东西。`,`Understand the world. Turn understanding into something that works.`)),1)])])]))}},[[`__scopeId`,`data-v-a54dea18`]]),sr=`modulepreload`,cr=function(e,t){return new URL(e,t).href},lr={},ur=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}r=o(t.map(t=>{if(t=cr(t,n),t in lr)return;lr[t]=!0;let r=t.endsWith(`.css`),i=r?`[rel="stylesheet"]`:``;if(n)for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${t}"]${i}`))return;let o=document.createElement(`link`);if(o.rel=r?`stylesheet`:sr,r||(o.as=`script`),o.crossOrigin=``,o.href=t,a&&o.setAttribute(`nonce`,a),document.head.appendChild(o),r)return new Promise((e,n)=>{o.addEventListener(`load`,e),o.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},dr={key:0,class:`article-page`},fr={class:`article-heading`},pr={class:`back-link`,href:`#notes`},mr={class:`eyebrow`},hr={key:0,class:`article-context`},gr={key:1,class:`article-context`,role:`status`},_r=[`lang`],vr=M({__name:`WebMain`,setup(e){let t=h(``),n=k(()=>$.value.find(e=>e.slug===t.value)??null),r=w({loader:()=>ur(()=>import(`./ContentPage-DkDllfI8.js`),__vite__mapDeps([0,1,2]),import.meta.url),delay:0,timeout:2e4,loadingComponent:{setup:()=>()=>C(`p`,{role:`status`},X(`正在加载文章…`,`Loading article…`))},errorComponent:{setup:()=>()=>C(`p`,{role:`alert`},X(`文章加载失败，请刷新页面重试。`,`Could not load the article. Please refresh to try again.`))}});ee(()=>{let e=n.value,t=X(`跨领域计算物理与 Physical AI 系统架构师`,`Cross-domain Computational Physics & Physical AI Systems Architect`);document.title=`${e?.title??t} | Callingforwind`;let r=document.querySelector(`meta[name="description"]`);r&&(r.content=e?.description??`Callingforwind — ${t}.`)});async function a(){let e=window.location.hash,r=``;if(e.startsWith(`#note/`))try{r=decodeURIComponent(e.slice(6))}catch{}t.value=r,await y(),n.value?window.scrollTo({top:0,behavior:`instant`}):e?document.getElementById(e.slice(1))?.scrollIntoView():window.scrollTo({top:0,behavior:`instant`})}return oe(()=>{window.addEventListener(`hashchange`,a),a()}),ce(()=>window.removeEventListener(`hashchange`,a)),(e,t)=>n.value?(b(),N(`div`,dr,[j(`div`,fr,[j(`a`,pr,`← `+v(i(X)(`返回研究笔记`,`Back to notes`)),1),j(`p`,mr,v(n.value.category)+` / `+v(n.value.date?i(yt)(n.value.date):n.value.label),1),j(`h1`,null,v(n.value.title),1),n.value.slug===`vue3-github-pages-blog-deployment`?(b(),N(`p`,hr,v(i(X)(`这篇文章保留通用部署参考。本网站当前采用根目录静态文件发布，具体维护步骤请以仓库 README 为准。`,`This article is a general deployment reference. This site publishes static files from the repository root; see the repository README for its current maintenance steps.`)),1)):D(``,!0),n.value.translationMissing?(b(),N(`p`,gr,v(i(X)(`这篇文章暂时只有英文版本。`,`This article is currently available in Chinese only.`)),1)):D(``,!0)]),j(`div`,{lang:n.value.contentLocale===`en`?`en`:`zh-CN`},[(b(),x(i(r),{key:n.value.slug,content:n.value.content},null,8,[`content`]))],8,_r)])):(b(),x(or,{key:1}))}},[[`__scopeId`,`data-v-8781f55c`]]),yr={id:`contact`,class:`desk-container`},br={class:`contact-wrapper`},xr={class:`paper-main`},Sr={class:`contact-eyebrow`},Cr={class:`title-underline`},wr={class:`content-body`},Tr={class:`code-comment`},Er={class:`code-line`},Dr={class:`contact-list`},Or={class:`item`},kr={class:`key`},Ar={class:`item`},jr={class:`key`},Mr=[`aria-label`],Nr={class:`business-card`},Pr={class:`card-pattern`},Fr={class:`icon-grid`},Ir=[`aria-pressed`,`aria-label`,`onClick`,`title`],Lr={class:`stamp-seal`},Rr={key:0,class:`copy-tip`,role:`status`},zr={class:`wood-footer`},Br={class:`copy-text`},Vr=M({__name:`Contact`,setup(e){let t=k(()=>({wx:{name:X(`微信账号`,`WeChat account`),iconText:`Wx`,label:`Beauty7Chaser`,color:`#2e7d32`},tw:{name:X(`Bilibili 账号`,`Bilibili account`),iconText:`Bili`,label:`Callingforwind`,color:`#FB7299`},in:{name:X(`LinkedIn 账号`,`LinkedIn account`),iconText:`In`,label:`Jinfeng Zhao`,color:`#0077b5`},rss:{name:X(`QQ 账号`,`QQ account`),iconText:`QQ`,label:`584830702`,color:`#d71b1b`},zhihu:{name:X(`知乎账号`,`Zhihu account`),iconText:X(`知乎`,`Zhi`),label:`Callingforwind`,color:`#1769c2`}})),r=h(null),a=h(``),o=h(``),c=k(()=>a.value===`copied`?X(`已复制：`,`Copied: `)+o.value:a.value===`manual`?X(`账号已显示，可手动复制`,`Account shown. You can copy it manually.`):``),l,u=k(()=>r.value?t.value[r.value].label:X(`建立连接()`,`Connect()`)),d=k(()=>r.value?t.value[r.value].color:`#333`),f=async e=>{if(clearTimeout(l),a.value=``,r.value===e)r.value=null;else{r.value=e;let n=t.value[e].label;try{await navigator.clipboard.writeText(n),o.value=n,a.value=`copied`}catch{a.value=`manual`}l=setTimeout(()=>{a.value=``},2e3)}};return ce(()=>clearTimeout(l)),(e,a)=>(b(),N(`footer`,yr,[a[3]||=j(`div`,{class:`desk-edge-shadow`},null,-1),j(`div`,br,[j(`div`,xr,[j(`p`,Sr,`03 / `+v(i(X)(`建立连接`,`LET'S CONNECT`)),1),j(`h2`,Cr,v(i(X)(`从一个问题开始。`,`Start with a question.`)),1),j(`div`,wr,[j(`p`,Tr,v(i(X)(`如果你也在思考物理、计算或智能系统，欢迎交换一个问题、一个想法，或一个合作的可能。`,`Thinking about physics, computation, or intelligent systems? Let’s exchange a question, an idea, or a possibility for collaboration.`)),1),j(`p`,Er,v(i(X)(`物理 → 计算 → 智能`,`physics → computation → intelligence`)),1),j(`div`,Dr,[j(`div`,Or,[j(`span`,kr,v(i(X)(`邮箱：`,`Email:`)),1),a[1]||=j(`a`,{href:`mailto:beauty7chaser@gmail.com`,class:`val`},`beauty7chaser@gmail.com`,-1)]),j(`div`,Ar,[j(`span`,jr,v(i(X)(`知乎：`,`Zhihu:`)),1),j(`button`,{type:`button`,class:`val account-link`,"aria-label":i(X)(`复制知乎账号 Callingforwind`,`Copy Zhihu account Callingforwind`),onClick:a[0]||=e=>f(`zhihu`)},`Callingforwind`,8,Mr)]),a[2]||=j(`div`,{class:`item`},[j(`span`,{class:`key`},`Github:`),j(`a`,{href:`https://github.com/BeautyChaser`,target:`_blank`,rel:`noopener noreferrer`,class:`val`},`@BeautyChaser`)],-1)])])]),j(`div`,Nr,[j(`div`,Pr,[j(`h3`,{class:`card-header`,style:g({color:d.value})},v(u.value),5),j(`div`,Fr,[(b(!0),N(T,null,P(t.value,(e,t)=>(b(),N(`button`,{key:t,type:`button`,class:s([`btn`,{active:r.value===t}]),"aria-pressed":r.value===t,"aria-label":i(X)(`查看`,`View `)+e.name,onClick:e=>f(t),title:i(X)(`点击查看`,`View `)+e.name},v(e.iconText),11,Ir))),128))]),j(`div`,Lr,v(i(X)(`一起构建`,`LET'S BUILD`)),1),O(_e,{name:`fade`},{default:n(()=>[c.value?(b(),N(`span`,Rr,v(c.value),1)):D(``,!0)]),_:1})])])]),j(`div`,zr,[j(`p`,Br,`© `+v(new Date().getFullYear())+` `+v(i(X)(`由 Callingforwind 设计。`,`DESIGNED BY Callingforwind.`)),1)])]))}},[[`__scopeId`,`data-v-21cdd4e0`]]),Hr={class:`skip-link`,href:`#main-content`},Ur={class:`page-container`},Wr={id:`main-content`};pt(M({__name:`App`,setup(e){return ee(()=>{document.documentElement.lang=Y.value===`en`?`en`:`zh-CN`}),(e,t)=>(b(),N(T,null,[j(`a`,Hr,v(i(X)(`跳转到正文`,`Skip to content`)),1),j(`div`,Ur,[O(rn),j(`main`,Wr,[O(vr)]),O(Vr)])],64))}},[[`__scopeId`,`data-v-87689ef8`]])).mount(`#app`);