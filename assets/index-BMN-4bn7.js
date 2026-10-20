const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./ContentPage-DkDllfI8.js","./_plugin-vue_export-helper-BDJIh2Ao.js","./ContentPage-DNrbhI5o.css"])))=>i.map(i=>d[i]);
import{A as e,B as t,C as n,D as r,E as i,F as a,G as o,H as s,I as c,L as l,M as u,N as d,O as f,P as p,R as m,S as ee,T as h,U as te,V as g,W as _,_ as v,a as ne,b as y,c as b,d as re,f as x,g as S,h as ie,i as C,j as ae,k as w,l as T,m as E,n as oe,o as D,p as O,r as se,s as k,t as A,u as j,v as ce,w as le,x as M,y as ue,z as N}from"./_plugin-vue_export-helper-BDJIh2Ao.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var de=void 0,fe=typeof window<`u`&&window.trustedTypes;if(fe)try{de=fe.createPolicy(`vue`,{createHTML:e=>e})}catch{}var pe=de?e=>de.createHTML(e):e=>e,me=`http://www.w3.org/2000/svg`,he=`http://www.w3.org/1998/Math/MathML`,P=typeof document<`u`?document:null,ge=P&&P.createElement(`template`),_e={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{let t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{let i=t===`svg`?P.createElementNS(me,e):t===`mathml`?P.createElementNS(he,e):n?P.createElement(e,{is:n}):P.createElement(e);return e===`select`&&r&&r.multiple!=null&&i.setAttribute(`multiple`,r.multiple),i},createText:e=>P.createTextNode(e),createComment:e=>P.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>P.querySelector(e),setScopeId(e,t){e.setAttribute(t,``)},insertStaticContent(e,t,n,r,i,a){let o=n?n.previousSibling:t.lastChild;if(i&&(i===a||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===a||!(i=i.nextSibling)););else{ge.innerHTML=pe(r===`svg`?`<svg>${e}</svg>`:r===`mathml`?`<math>${e}</math>`:e);let i=ge.content;if(r===`svg`||r===`mathml`){let e=i.firstChild;for(;e.firstChild;)i.appendChild(e.firstChild);i.removeChild(e)}t.insertBefore(i,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},F=`transition`,I=`animation`,L=Symbol(`_vtc`),ve={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},ye=w({},se,ve),be=(e=>(e.displayName=`Transition`,e.props=ye,e))((e,{slots:t})=>S(oe,Se(e),t)),R=(e,t=[])=>{d(e)?e.forEach(e=>e(...t)):e&&e(...t)},xe=e=>e?d(e)?e.some(e=>e.length>1):e.length>1:!1;function Se(e){let t={};for(let n in e)n in ve||(t[n]=e[n]);if(e.css===!1)return t;let{name:n=`v`,type:r,duration:i,enterFromClass:a=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:s=`${n}-enter-to`,appearFromClass:c=a,appearActiveClass:l=o,appearToClass:u=s,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=e,m=Ce(i),ee=m&&m[0],h=m&&m[1],{onBeforeEnter:te,onEnter:g,onEnterCancelled:_,onLeave:v,onLeaveCancelled:ne,onBeforeAppear:y=te,onAppear:b=g,onAppearCancelled:re=_}=t,x=(e,t,n,r)=>{e._enterCancelled=r,B(e,t?u:s),B(e,t?l:o),n&&n()},S=(e,t)=>{e._isLeaving=!1,B(e,d),B(e,p),B(e,f),t&&t()},ie=e=>(t,n)=>{let i=e?b:g,o=()=>x(t,e,n);R(i,[t,o]),Te(()=>{B(t,e?c:a),z(t,e?u:s),xe(i)||De(t,r,ee,o)})};return w(t,{onBeforeEnter(e){R(te,[e]),z(e,a),z(e,o)},onBeforeAppear(e){R(y,[e]),z(e,c),z(e,l)},onEnter:ie(!1),onAppear:ie(!0),onLeave(e,t){e._isLeaving=!0;let n=()=>S(e,t);z(e,d),e._enterCancelled?(z(e,f),je(e)):(je(e),z(e,f)),Te(()=>{e._isLeaving&&(B(e,d),z(e,p),xe(v)||De(e,r,h,n))}),R(v,[e,n])},onEnterCancelled(e){x(e,!1,void 0,!0),R(_,[e])},onAppearCancelled(e){x(e,!0,void 0,!0),R(re,[e])},onLeaveCancelled(e){S(e),R(ne,[e])}})}function Ce(e){if(e==null)return null;if(c(e))return[we(e.enter),we(e.leave)];{let t=we(e);return[t,t]}}function we(e){return o(e)}function z(e,t){t.split(/\s+/).forEach(t=>t&&e.classList.add(t)),(e[L]||(e[L]=new Set)).add(t)}function B(e,t){t.split(/\s+/).forEach(t=>t&&e.classList.remove(t));let n=e[L];n&&(n.delete(t),n.size||(e[L]=void 0))}function Te(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}var Ee=0;function De(e,t,n,r){let i=e._endId=++Ee,a=()=>{i===e._endId&&r()};if(n!=null)return setTimeout(a,n);let{type:o,timeout:s,propCount:c}=Oe(e,t);if(!o)return r();let l=o+`end`,u=0,d=()=>{e.removeEventListener(l,f),a()},f=t=>{t.target===e&&++u>=c&&d()};setTimeout(()=>{u<c&&d()},s+1),e.addEventListener(l,f)}function Oe(e,t){let n=window.getComputedStyle(e),r=e=>(n[e]||``).split(`, `),i=r(`${F}Delay`),a=r(`${F}Duration`),o=ke(i,a),s=r(`${I}Delay`),c=r(`${I}Duration`),l=ke(s,c),u=null,d=0,f=0;t===F?o>0&&(u=F,d=o,f=a.length):t===I?l>0&&(u=I,d=l,f=c.length):(d=Math.max(o,l),u=d>0?o>l?F:I:null,f=u?u===F?a.length:c.length:0);let p=u===F&&/\b(?:transform|all)(?:,|$)/.test(r(`${F}Property`).toString());return{type:u,timeout:d,propCount:f,hasTransform:p}}function ke(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((t,n)=>Ae(t)+Ae(e[n])))}function Ae(e){return e===`auto`?0:Number(e.slice(0,-1).replace(`,`,`.`))*1e3}function je(e){return(e?e.ownerDocument:document).body.offsetHeight}function Me(e,t,n){let r=e[L];r&&(t=(t?[t,...r]:[...r]).join(` `)),t==null?e.removeAttribute(`class`):n?e.setAttribute(`class`,t):e.className=t}var Ne=Symbol(`_vod`),Pe=Symbol(`_vsh`),Fe=Symbol(``),Ie=/(?:^|;)\s*display\s*:/;function Le(e,t,n){let r=e.style,i=N(n),a=!1;if(n&&!i){if(t)if(N(t))for(let e of t.split(`;`)){let t=e.slice(0,e.indexOf(`:`)).trim();n[t]??V(r,t,``)}else for(let e in t)n[e]??V(r,e,``);for(let e in n)e===`display`&&(a=!0),V(r,e,n[e])}else if(i){if(t!==n){let e=r[Fe];e&&(n+=`;`+e),r.cssText=n,a=Ie.test(n)}}else t&&e.removeAttribute(`style`);Ne in e&&(e[Ne]=a?r.display:``,e[Pe]&&(r.display=`none`))}var Re=/\s*!important$/;function V(t,n,r){if(d(r))r.forEach(e=>V(t,n,e));else if(r??=``,n.startsWith(`--`))t.setProperty(n,r);else{let i=Ve(t,n);Re.test(r)?t.setProperty(e(i),r.replace(Re,``),`important`):t[i]=r}}var ze=[`Webkit`,`Moz`,`ms`],Be={};function Ve(e,t){let n=Be[t];if(n)return n;let i=r(t);if(i!==`filter`&&i in e)return Be[t]=i;i=f(i);for(let n=0;n<ze.length;n++){let r=ze[n]+i;if(r in e)return Be[t]=r}return t}var He=`http://www.w3.org/1999/xlink`;function Ue(e,n,r,i,a,o=m(n)){i&&n.startsWith(`xlink:`)?r==null?e.removeAttributeNS(He,n.slice(6,n.length)):e.setAttributeNS(He,n,r):r==null||o&&!ae(r)?e.removeAttribute(n):e.setAttribute(n,o?``:t(r)?String(r):r)}function We(e,t,n,r,i){if(t===`innerHTML`||t===`textContent`){n!=null&&(e[t]=t===`innerHTML`?pe(n):n);return}let a=e.tagName;if(t===`value`&&a!==`PROGRESS`&&!a.includes(`-`)){let r=a===`OPTION`?e.getAttribute(`value`)||``:e.value,i=n==null?e.type===`checkbox`?`on`:``:String(n);(r!==i||!(`_value`in e))&&(e.value=i),n??e.removeAttribute(t),e._value=n;return}let o=!1;if(n===``||n==null){let r=typeof e[t];r===`boolean`?n=ae(n):n==null&&r===`string`?(n=``,o=!0):r===`number`&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(i||t)}function H(e,t,n,r){e.addEventListener(t,n,r)}function Ge(e,t,n,r){e.removeEventListener(t,n,r)}var Ke=Symbol(`_vei`);function qe(e,t,n,r,i=null){let a=e[Ke]||(e[Ke]={}),o=a[t];if(r&&o)o.value=r;else{let[n,s]=Ye(t);r?H(e,n,a[t]=$e(r,i),s):o&&(Ge(e,n,o,s),a[t]=void 0)}}var Je=/(?:Once|Passive|Capture)$/;function Ye(t){let n;if(Je.test(t)){n={};let e;for(;e=t.match(Je);)t=t.slice(0,t.length-e[0].length),n[e[0].toLowerCase()]=!0}return[t[2]===`:`?t.slice(3):e(t.slice(2)),n]}var Xe=0,Ze=Promise.resolve(),Qe=()=>Xe||=(Ze.then(()=>Xe=0),Date.now());function $e(e,t){let n=e=>{if(!e._vts)e._vts=Date.now();else if(e._vts<=n.attached)return;ne(et(e,n.value),t,5,[e])};return n.value=e,n.attached=Qe(),n}function et(e,t){if(d(t)){let n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(e=>t=>!t._stopped&&e&&e(t))}else return t}var tt=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,nt=(e,t,n,i,o,s)=>{let c=o===`svg`;t===`class`?Me(e,i,c):t===`style`?Le(e,n,i):l(t)?a(t)||qe(e,t,n,i,s):(t[0]===`.`?(t=t.slice(1),!0):t[0]===`^`?(t=t.slice(1),!1):rt(e,t,i,c))?(We(e,t,i),!e.tagName.includes(`-`)&&(t===`value`||t===`checked`||t===`selected`)&&Ue(e,t,i,c,s,t!==`value`)):e._isVueCE&&(it(e,t)||e._def.__asyncLoader&&(/[A-Z]/.test(t)||!N(i)))?We(e,r(t),i,s,t):(t===`true-value`?e._trueValue=i:t===`false-value`&&(e._falseValue=i),Ue(e,t,i,c))};function rt(e,t,n,r){if(r)return!!(t===`innerHTML`||t===`textContent`||t in e&&tt(t)&&p(n));if(t===`spellcheck`||t===`draggable`||t===`translate`||t===`autocorrect`||t===`sandbox`&&e.tagName===`IFRAME`||t===`form`||t===`list`&&e.tagName===`INPUT`||t===`type`&&e.tagName===`TEXTAREA`)return!1;if(t===`width`||t===`height`){let t=e.tagName;if(t===`IMG`||t===`VIDEO`||t===`CANVAS`||t===`SOURCE`)return!1}return tt(t)&&N(n)?!1:t in e}function it(e,t){let n=e._def.props;if(!n)return!1;let i=r(t);return Array.isArray(n)?n.some(e=>r(e)===i):Object.keys(n).some(e=>r(e)===i)}var at=e=>{let t=e.props[`onUpdate:modelValue`]||!1;return d(t)?e=>u(t,e):t};function ot(e){e.target.composing=!0}function st(e){let t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event(`input`)))}var ct=Symbol(`_assign`);function lt(e,t,n){return t&&(e=e.trim()),n&&(e=g(e)),e}var ut={created(e,{modifiers:{lazy:t,trim:n,number:r}},i){e[ct]=at(i);let a=r||i.props&&i.props.type===`number`;H(e,t?`change`:`input`,t=>{t.target.composing||e[ct](lt(e.value,n,a))}),(n||a)&&H(e,`change`,()=>{e.value=lt(e.value,n,a)}),t||(H(e,`compositionstart`,ot),H(e,`compositionend`,st),H(e,`change`,st))},mounted(e,{value:t}){e.value=t??``},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:r,trim:i,number:a}},o){if(e[ct]=at(o),e.composing)return;let s=(a||e.type===`number`)&&!/^0\d/.test(e.value)?g(e.value):e.value,c=t??``;if(s===c)return;let l=e.getRootNode();(l instanceof Document||l instanceof ShadowRoot)&&l.activeElement===e&&e.type!==`range`&&(r&&t===n||i&&e.value.trim()===c)||(e.value=c)}},dt=[`ctrl`,`shift`,`alt`,`meta`],ft={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>`button`in e&&e.button!==0,middle:e=>`button`in e&&e.button!==1,right:e=>`button`in e&&e.button!==2,exact:(e,t)=>dt.some(n=>e[`${n}Key`]&&!t.includes(n))},pt=(e,t)=>{if(!e)return e;let n=e._withMods||={},r=t.join(`.`);return n[r]||(n[r]=((n,...r)=>{for(let e=0;e<t.length;e++){let r=ft[t[e]];if(r&&r(n,t))return}return e(n,...r)}))},mt={esc:`escape`,space:` `,up:`arrow-up`,left:`arrow-left`,right:`arrow-right`,down:`arrow-down`,delete:`backspace`},ht=(t,n)=>{let r=t._withKeys||={},i=n.join(`.`);return r[i]||(r[i]=(r=>{if(!(`key`in r))return;let i=e(r.key);if(n.some(e=>e===i||mt[e]===i))return t(r)}))},gt=w({patchProp:nt},_e),_t;function vt(){return _t||=re(gt)}var yt=((...e)=>{let t=vt().createApp(...e),{mount:n}=t;return t.mount=e=>{let r=xt(e);if(!r)return;let i=t._component;!p(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent=``);let a=n(r,!1,bt(r));return r instanceof Element&&(r.removeAttribute(`v-cloak`),r.setAttribute(`data-v-app`,``)),a},t});function bt(e){if(e instanceof SVGElement)return`svg`;if(typeof MathMLElement==`function`&&e instanceof MathMLElement)return`mathml`}function xt(e){return N(e)?document.querySelector(e):e}var St=`cfw-language`;function Ct(){if(typeof window>`u`)return`zh`;let e=new URLSearchParams(window.location.search).get(`lang`);if(e===`zh`||e===`en`)return e;try{return localStorage.getItem(St)===`en`?`en`:`zh`}catch{return`zh`}}var U=h(Ct()),W=(e,t)=>U.value===`en`?t:e;async function wt(e){if(![`zh`,`en`].includes(e)||e===U.value)return;let t=window.scrollY;U.value=e;try{localStorage.setItem(St,e)}catch{}let n=new URL(window.location.href);n.searchParams.set(`lang`,e),window.history.replaceState(window.history.state,``,n),await v(),await new Promise(e=>requestAnimationFrame(()=>requestAnimationFrame(e))),window.scrollTo({top:t,behavior:`instant`})}function Tt(e){return e?U.value===`zh`?e.replaceAll(`-`,`.`):new Intl.DateTimeFormat(`en`,{year:`numeric`,month:`short`,day:`numeric`,timeZone:`UTC`}).format(new Date(`${e}T12:00:00Z`)):``}var Et=e=>W(`${e} 篇笔记`,`${e} ${e===1?`note`:`notes`}`),Dt=`# 文章目录

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

\`news/\` 专门放本站动态，文件名使用 \`YYYY-MM-DD-标题.md\`。首页 News 与独立的 \`#news\` 页面按日期汇总本站和外站更新，首页展示最新三条；本站动态同样参与全文搜索。知乎、bilibili、领英的订阅与收录维护见 \`agent/NEWS_SYNC.md\`，不需要将外站全文复制到本目录。

\`\`\`markdown
# 我的文章标题

这一段介绍文章内容，也会显示在网站的笔记列表中。

## 正文

支持普通 Markdown、代码块和 $E = mc^2$ 这样的数学公式。
\`\`\`

保存后，开发服务器会更新文章列表与搜索索引。搜索框同时检索文章标题和完整正文，多个关键词用空格分隔，标题匹配优先展示。点击结果会打开对应文章。

发布前在项目根目录执行 \`npm run build\` 和 \`npm run check\`，然后将文章源码与根目录构建输出一并提交。正式网站的搜索是浏览器中的静态检索，不需要后端服务。

公开发布的网站会包含这些文章内容。项目维护说明放在 \`agent/\`，不要放入此目录作为文章。
`,Ot=`# Deriving the Allen–Cahn equation from first principles

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
`,kt=`# 从第一性原理推导 Allen–Cahn 方程

从自由能泛函出发，推导 **Allen-Cahn (AC) 方程**，理解双阱势、梯度能与相场动力学之间的联系。

为了让推导清晰易懂，我们采用一个最经典的 **“1D 两个相争地盘”** 的小例子。

---

### **场景设定：一根棍子上的“红蓝之争”**

*   **几何模型：** 一根一维的棍子，坐标为 $x$。
*   **序参数 $\\phi(x)$：**
    *   $\\phi = 1$：代表**红色相**（比如固态）。
    *   $\\phi = -1$：代表**蓝色相**（比如液态）。
    *   *注：为了数学对称方便，这里我们用 1 和 -1，而不用 0 和 1，道理是一样的。*
*   **目标：** 我们要推导出 $\\phi$ 随时间 $t$ 变化的公式。

---

### **第一层：搭建能量泛函（The Script）**

一切的起源是能量。系统的总自由能 $F$ 由两部分组成：**“让自己舒服的能量”** + **“跟邻居协调的能量”**。

$$ F[\\phi] = \\int_{整个棍子} \\left( \\underbrace{f_{bulk}(\\phi)}_{\\text{体自由能}} + \\underbrace{\\frac{\\kappa}{2} \\left( \\frac{\\partial \\phi}{\\partial x} \\right)^2}_{\\text{梯度能}} \\right) dx $$

#### **1. 体自由能 $f_{bulk}(\\phi)$：双阱势（Double-Well Potential）**
物质喜欢待在稳定的状态（$\\phi=1$ 或 $\\phi=-1$），不喜欢待在中间状态（$\\phi=0$）。
我们通常构造一个 **“W” 形状的函数**：

$$ f_{bulk}(\\phi) = A (\\phi^2 - 1)^2 $$

*   **看形状：**
    *   当 $\\phi = 1$ 或 $-1$ 时，$f = 0$（能量最低，舒服）。
    *   当 $\\phi = 0$ 时，$f = A$（能量最高，难受）。
*   这就是所谓的**“势阱”**。

#### **2. 梯度能（界面能）：**
$$ \\frac{\\kappa}{2} (\\nabla \\phi)^2 $$
*   如果 $\\phi$ 变化剧烈（界面陡峭），这一项就大。系统为了省能量，会倾向于让界面平缓一点。

---

### **第二层：计算驱动力（The Driving Force）**

现在我们要算：**如果我改变一点点 $\\phi$，总能量 $F$ 会变多少？**
这就是求**变分导数** $\\frac{\\delta F}{\\delta \\phi}$。

我们分别对两部分求导：

#### **A. 对体自由能求导**
这是普通的求导：
$$ \\frac{\\partial f_{bulk}}{\\partial \\phi} = \\frac{\\partial}{\\partial \\phi} [A(\\phi^2 - 1)^2] = A \\cdot 2(\\phi^2 - 1) \\cdot 2\\phi = 4A(\\phi^3 - \\phi) $$
*   *这一项代表：我想立刻滚回阱底（1或-1）去的欲望。*

#### **B. 对梯度能求导（关键数学步骤）**
这里涉及到泛函求导的**分部积分法**（Variational Calculus 101）：
我们需要对 $\\int \\frac{\\kappa}{2} (\\phi_x)^2 dx$ 求变分。

根据欧拉-拉格朗日方程的推论，梯度项的变分导数是：
$$ \\frac{\\delta}{\\delta \\phi} \\left( \\frac{\\kappa}{2} (\\phi_x)^2 \\right) = - \\kappa \\frac{\\partial^2 \\phi}{\\partial x^2} $$
*   *注意：这里出现了一个负号和二阶导数（拉普拉斯项）。*
*   *这一项代表：邻居拉着我不让我剧烈变化的力（平滑作用）。*

#### **C. 合并驱动力**
$$ \\frac{\\delta F}{\\delta \\phi} = \\underbrace{4A(\\phi^3 - \\phi)}_{\\text{去阱底的力}} - \\underbrace{\\kappa \\nabla^2 \\phi}_{\\text{平滑界面的力}} $$

---

### **第三层：组装控制方程（The Action）**

最后，我们搬出 **Allen-Cahn 的总纲领**：
**变化速度 $\\propto$ 负的驱动力** （我要顺着能量降低的方向跑）。

$$ \\frac{\\partial \\phi}{\\partial t} = -L \\times \\frac{\\delta F}{\\delta \\phi} $$

将刚才算出的两项代入：

$$ \\frac{\\partial \\phi}{\\partial t} = -L \\left[ 4A(\\phi^3 - \\phi) - \\kappa \\nabla^2 \\phi \\right] $$

整理一下负号，得到最终的 **AC 方程**：

$$ \\boxed{ \\frac{\\partial \\phi}{\\partial t} = L \\left( \\kappa \\nabla^2 \\phi - 4A(\\phi^3 - \\phi) \\right) } $$

---

### **第四层：物理含义解读（从公式看本质）**

这个公式告诉我们，$\\phi$ 的变化是由两股力量在“拔河”：

#### **1. 扩散项 $L\\kappa \\nabla^2 \\phi$（来自梯度能）**
*   **作用：** **磨平**。
*   **行为：** 这就是经典的热传导/扩散项。它试图让 $\\phi$ 在空间上分布均匀，把陡峭的界面拉宽，减少梯度的惩罚。
*   *它说：“大家别吵了，都平滑一点，界面别那么陡。”*

#### **2. 反应项 $-4AL(\\phi^3 - \\phi)$（来自体自由能）**
*   **作用：** **站队**。
*   **行为：**
    *   如果 $\\phi$ 稍微偏正（比如 0.1），这一项会推着它往 1 跑。
    *   如果 $\\phi$ 稍微偏负（比如 -0.1），这一项会推着它往 -1 跑。
    *   这叫**“反扩散”**（Anti-diffusion）或**“锐化”**。
*   *它说：“不行！必须选边站！要么是1，要么是-1，不准待在0！”*

---

### **总结：AC 方程到底在算什么？**

AC 方程的整个计算过程，就是这两股力量的**动态平衡**：

1.  **反应项**拼命想让界面变窄，让界面上的点迅速变成 1 或 -1（**锐化**）。
2.  **扩散项**拼命想让界面变宽，减少能量梯度（**钝化**）。

最终，两者达成妥协，形成了一个**具有固定宽度的、平滑过渡的弥散界面**（这正是双曲正切函数 $\\tanh(x)$ 的形状）。这也就是为什么相场法能自动维持一个稳定的弥散界面的数学原理。


## 相关参数

这是一个非常实际的**“工程落地”**问题。

你在推导公式时，A、$\\kappa$、L 是**数学参数**；但在实际写代码做仿真时，你不能随便填数，必须让它们对应真实的**材料属性**（如钢铁、锂电池、高分子）。

这三者不是凭空得出的，而是通过**“宏观材料参数”**反推出来的。我们需要建立一个**“映射关系”**。

---

### **1. 我们手里有什么？（真实的材料参数）**

去查材料手册（或者文献），我们通常能找到以下三个物理量：
1.  **表面张力 / 界面能 ($\\gamma$, Gamma)**：
    *   单位：$J/m^2$。
    *   含义：造出一个单位面积的界面需要消耗多少能量。
2.  **界面厚度 ($\\delta$, Delta)**：
    *   单位：$m$。
    *   含义：真实的物理界面厚度（通常只有几纳米）。
    *   *工程潜规则：* 在仿真里，为了省网格，我们通常把 $\\delta$ **人为放大**（比如放到微米级），只要它比晶粒尺寸小得多就行。
3.  **界面迁移率 ($M_{gb}$, Mobility)**：
    *   单位：$m^4/(J \\cdot s)$ 或 $m/s \\cdot K^{-1}$。
    *   含义：给界面一点驱动力，它跑得有多快。

---

### **2. 怎么算出 A 和 $\\kappa$？（静态参数映射）**

**$A$ (势垒高度)** 和 **$\\kappa$ (梯度系数)** 这两个兄弟联手决定了界面的形状和能量。
通过对平衡状态下的相场方程积分（解出 $\\tanh$ 轮廓），我们可以得到以下严格的数学关系：

#### **公式推导结果（直接记结论）：**
$$ \\gamma = \\frac{2\\sqrt{2}}{3} \\sqrt{\\kappa A} $$
$$ \\delta \\approx \\sqrt{\\frac{\\kappa}{A}} \\times (\\text{常数，通常取2~4}) $$

我们可以反解出 $A$ 和 $\\kappa$：

1.  **计算 A（势阱深度）：**
    $$ A = \\frac{3 \\gamma}{\\sqrt{2} \\delta} $$
    *   *直觉：* 如果你想让界面能 $\\gamma$ 大一点，或者界面 $\\delta$ 薄一点，你就得把势阱挖得深一点（A 变大）。

2.  **计算 $\\kappa$（梯度惩罚）：**
    $$ \\kappa = \\frac{3 \\gamma \\delta}{\\sqrt{2}} $$
    *   *直觉：* 界面能 $\\gamma$ 大，或者界面 $\\delta$ 厚，说明系统对梯度的容忍度高，或者梯度的能量贡献大。

> **工程师的操作流：**
> 1.  先定**网格大小 $dx$**。
> 2.  人为设定**界面厚度 $\\delta$**（通常取 $4dx \\sim 5dx$，保证界面内有足够的网格点）。
> 3.  查手册得到 **$\\gamma$**。
> 4.  套公式算出 **$A$** 和 **$\\kappa$** 输入代码。

---

### **3. 怎么算出 L？（动力学参数映射）**

**$L$ (相场松弛系数)** 决定了方程演化的快慢。它必须匹配真实的**物理界面迁移率 $M_{gb}$**。

根据渐进分析（Asymptotic Analysis），当界面厚度 $\\delta \\to 0$ 时，AC 方程必须退化为经典的夏普界面模型（Sharp Interface Model）：$V = M_{gb} \\cdot \\Delta G$。

#### **映射关系：**
$$ L = \\frac{M_{gb}}{\\delta} \\times (\\text{形状因子}) $$

或者更通用的形式（取决于具体的势函数定义）：
$$ L = \\frac{M_{gb}}{\\kappa} \\times (\\text{系数}) $$

*   **直觉：**
    *   真实的原子动得越快（$M_{gb}$ 大），$L$ 就越大。
    *   注意这里除以了 $\\delta$。因为相场法是在把一个锐利的界面“拉宽”了来算，为了保证总的移动速度 $V$ 不变，界面越宽，内部反应系数 $L$ 就得调整。

---

### **4. 总结：从手册到代码的流水线**

假设你要算一个**纯金属凝固**的例子，AC 方程中的参数是这样来的：

| 代码里的参数 | 谁决定的？ | 计算逻辑 (配方) | 物理意义 |
| :--- | :--- | :--- | :--- |
| **A** | **界面能 + 网格** | $\\propto \\frac{\\gamma}{\\delta_{num}}$ | 势阱有多深（界面想变薄的力） |
| **$\\kappa$** | **界面能 + 网格** | $\\propto \\gamma \\cdot \\delta_{num}$ | 梯度惩罚有多大（界面想变宽的力） |
| **L** | **迁移率 + 网格** | $\\propto \\frac{M_{gb}}{\\delta_{num}}$ | 反应有多快（调节仿真时间步长） |

### **5. 一个具体的数值例子（防坑指南）**

假设你想模拟金（Au）：
1.  **查参：** 表面张力 $1.5$。
2.  **定网格：** 假设你网格 $dx = 10 \\, nm$。
3.  **定界面：** 设定仿真界面厚度 $\\delta = 4dx = 40 \\, nm$（这是数值界面，比真实物理界面厚，但在相场里是被允许的“模型参数”）。
4.  **算参数：**
    *   $A = \\frac{3 \\times 1.5}{\\sqrt{2} \\times 40 \\times 10^{-9}} \\approx 7.9 \\times 10^7$
    *   $\\kappa = \\frac{3 \\times 1.5 \\times 40 \\times 10^{-9}}{\\sqrt{2}} \\approx 1.27 \\times 10^{-7}$

**关键点：**
你在代码里填入 $7.9 \\times 10^7$ 和 $1.27 \\times 10^{-7}$，你的相场模型就能模拟出**真实的金的表面张力**效果。这就是为什么相场法被称为“唯象模型”（Phenomenological Model）——我们调节内部参数，是为了重现宏观现象。
`,At=`# Homepage and research notebook update

The personal homepage has been reorganized around computational physics, scientific computing, and Physical AI. The graph-paper background and notebook style remain, with new sections for a systems perspective and research notes.

Notes can be searched by title and full text, and the article reader supports mathematical notation and code. Ideas, derivations, and engineering records will continue to grow here.
`,jt=`# 主页与研究笔记更新

个人主页围绕计算物理、科学计算与 Physical AI 重新整理。纸张网格与手稿式表达延续下来，新增系统视角和研究笔记入口。

研究笔记支持按标题与正文搜索，文章阅读支持数学公式和代码。后续的想法、推导与工程记录，会继续在这里积累。
`,Mt=`# Deploying a Vue 3 personal blog to GitHub Pages

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
`,Nt=`# Vue 3 项目部署到 GitHub Pages 作为个人博客

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
`,Pt={zh:{news:`近况更新`,physics:`计算物理`,engineering:`工程记录`,notes:`研究笔记`},en:{news:`NEWS & UPDATES`,physics:`COMPUTATIONAL PHYSICS`,engineering:`ENGINEERING NOTES`,notes:`FIELD NOTES`}};function G(e){return e.normalize(`NFKC`).toLocaleLowerCase().replace(/[–—−]/g,`-`)}function Ft(e,t){return e.replace(/<!--[\s\S]*?-->/g,``).replace(/\$\$[\s\S]*?\$\$/g,t===`en`?` [equation] `:` [数学公式] `).replace(/\$([^$\n]+)\$/g,`$1`).replace(/\\text\{([^}]+)\}/g,`$1`).replace(/```[^\n]*\n/g,``).replace(/!?\[([^\]]*)\]\([^)]*\)/g,`$1`).replace(/^\s{0,3}#{1,6}\s+/gm,``).replace(/[*_`~>|]/g,``).replace(/\s+/g,` `).trim()}function It(e){let t=new Map;for(let[n,r]of Object.entries(e)){let e=n.replace(`../../markdown/`,``);if(/(?:^|\/)readme(?:\.(?:zh|en))?\.md$/i.test(e))continue;let i=e.match(/\.(zh|en)\.md$/i)?.[1].toLowerCase()??`zh`,a=e.replace(/(?:\.(?:zh|en))?\.md$/i,``),o=t.get(a)??{slug:a,fileName:`${a}.md`,href:`#note/${encodeURIComponent(a)}`,isNews:a.startsWith(`news/`),date:a.startsWith(`news/`)?a.match(/\d{4}-\d{2}-\d{2}/)?.[0]??``:``,versions:{}};if(o.versions[i])throw Error(`Duplicate ${i} article: ${a}`);let s=r.match(/^#\s+(.+?)\s*#*\s*$/m),c=Ft(s?.[1]??a.split(`/`).at(-1),i),l=s?r.replace(s[0],``).trim():r.trim(),u=Ft(l,i),d=Ft(l.split(/\r?\n\s*\r?\n/).find(e=>e.trim()&&!/^\s*(?:#|---|```|\$\$|<!--)/.test(e))??u,i),f=i===`en`?200:110;o.versions[i]={title:c,content:l,text:u,description:d.length>f?`${d.slice(0,f)}…`:d,searchTitle:G(c),searchContent:G(`${u} ${l}`)},t.set(a,o)}return[...t.values()].map(e=>{let t=Object.values(e.versions).map(e=>e.title).join(` `);return{...e,categoryKey:e.isNews?`news`:/Allen|方程|物理|相场|physics|phase.field/i.test(t)?`physics`:/部署|工程|GitHub|Vue|deployment|engineering/i.test(t)?`engineering`:`notes`}}).sort((e,t)=>e.fileName.localeCompare(t.fileName,`zh-CN`))}function Lt(e,t){let n=e.versions[t]?t:Object.keys(e.versions)[0];return{...e,...e.versions[n],contentLocale:n,translationMissing:n!==t,category:Pt[t][e.categoryKey],label:Pt[t][e.isNews?`news`:`notes`]}}function Rt(e,t,n){let r=G(t).trim().split(/\s+/).filter(Boolean);return r.length?e.filter(e=>r.every(t=>Object.values(e.versions).some(e=>e.searchTitle.includes(t)||e.searchContent.includes(t)))).map(e=>{let t=Lt(e,n),i=Object.values(e.versions),a=r.some(e=>i.some(t=>t.searchTitle.includes(e))),o=r.reduce((e,n)=>e+(t.searchTitle.includes(n)?8:i.some(e=>e.searchTitle.includes(n))?4:1),0),s=r.map(e=>G(t.text).indexOf(e)).filter(e=>e>=0).sort((e,t)=>e-t),c=Math.max(0,(s[0]??0)-28),l=n===`en`?230:140,u=`${c>0?`…`:``}${t.text.slice(c,c+l)}${c+l<t.text.length?`…`:``}`;return{...t,titleMatch:a,score:o,excerpt:u}}).sort((e,t)=>t.score-e.score||e.fileName.localeCompare(t.fileName,`zh-CN`)):[]}var zt=It(Object.assign({"../../markdown/README.md":Dt,"../../markdown/allen-cahn.en.md":Ot,"../../markdown/allen-cahn.md":kt,"../../markdown/news/2026-10-19-website-update.en.md":At,"../../markdown/news/2026-10-19-website-update.md":jt,"../../markdown/vue3-github-pages-blog-deployment.en.md":Mt,"../../markdown/vue3-github-pages-blog-deployment.md":Nt})),Bt=D(()=>zt.map(e=>Lt(e,U.value))),Vt=D(()=>Bt.value.filter(e=>e.isNews).sort((e,t)=>t.fileName.localeCompare(e.fileName))),Ht=e=>Rt(zt,e,U.value),Ut=[`aria-label`],Wt=[`aria-label`,`placeholder`,`aria-expanded`],Gt=[`aria-label`],Kt={key:0,id:`note-search-results`,class:`search-results`},qt={class:`result-heading`,role:`status`},Jt={key:0},Yt=[`href`],Xt={class:`result-category`},Zt={key:1,class:`empty-search`},Qt=A({__name:`WebSearch`,setup(e){let t=h(``),n=h(!1),r=D(()=>Ht(t.value)),a=D(()=>n.value&&!!t.value.trim());function o(e){e.currentTarget.contains(e.relatedTarget)||(n.value=!1)}return(e,s)=>(y(),j(`div`,{class:`search-container`,onFocusin:s[4]||=e=>n.value=!0,onFocusout:o,onKeydown:s[5]||=ht(e=>n.value=!1,[`esc`])},[k(`form`,{class:`search-field`,role:`search`,"aria-label":i(W)(`搜索研究笔记`,`Search notes`),onSubmit:s[2]||=pt(e=>n.value=!0,[`prevent`])},[s[6]||=k(`span`,{class:`search-symbol`,"aria-hidden":`true`},`⌕`,-1),le(k(`input`,{"onUpdate:modelValue":s[0]||=e=>t.value=e,type:`search`,"aria-label":i(W)(`搜索文章标题与正文`,`Search titles and content`),placeholder:i(W)(`搜索标题与正文…`,`Title / content…`),autocomplete:`off`,"aria-controls":`note-search-results`,"aria-expanded":a.value,onInput:s[1]||=e=>n.value=!0},null,40,Wt),[[ut,t.value]]),k(`button`,{type:`submit`,class:`search-submit`,"aria-label":i(W)(`搜索`,`Search`)},`↵`,8,Gt)],40,Ut),a.value?(y(),j(`div`,Kt,[k(`div`,qt,[O(_(i(Et)(r.value.length))+` `,1),k(`span`,null,_(i(W)(`标题 + 正文检索`,`Titles + full text`)),1)]),r.value.length?(y(),j(`ul`,Jt,[(y(!0),j(C,null,M(r.value,e=>(y(),j(`li`,{key:e.slug},[k(`a`,{href:e.href,onClick:s[3]||=e=>n.value=!1},[k(`span`,Xt,_(e.titleMatch?i(W)(`标题命中`,`Title match`):i(W)(`正文命中`,`Content match`)),1),k(`strong`,null,_(e.title),1),k(`p`,null,_(e.excerpt),1)],8,Yt)]))),128))])):(y(),j(`p`,Zt,_(i(W)(`没有找到相关笔记，试试其他关键词。`,`No notes found. Try another keyword.`)),1))])):T(``,!0)],32))}},[[`__scopeId`,`data-v-9370c159`]]),$t={class:`web-header`},en={class:`header-inner`},tn=[`aria-label`],nn={class:`brand-caption`},rn=[`aria-label`],an=[`href`,`aria-label`],on={class:`nav-index`},sn={class:`nav-label`},cn={class:`nav-label-short`},ln=[`aria-label`],un=[`aria-pressed`],dn=[`aria-pressed`],fn=A({__name:`WebHeader`,setup(e){let t=D(()=>[{href:`#home`,label:W(`首页`,`Home`),index:`00`},{href:`#news`,label:`News`,index:`N`},{href:`#systems`,label:W(`系统视角`,`Systems`),shortLabel:W(`系统`,`Work`),index:`01`},{href:`#notes`,label:W(`研究笔记`,`Notes`),shortLabel:W(`笔记`,`Notes`),index:`02`},{href:`#contact`,label:W(`联系`,`Contact`),shortLabel:W(`联系`,`Mail`),index:`03`}]);return(e,n)=>(y(),j(`header`,$t,[k(`div`,en,[k(`a`,{class:`brand`,href:`#home`,"aria-label":i(W)(`Callingforwind 首页`,`Callingforwind home`)},[n[4]||=k(`span`,{class:`brand-mark`},[O(`CFW`),k(`span`,null,`.`)],-1),k(`span`,nn,[n[2]||=O(`CALLINGFORWIND`,-1),n[3]||=k(`br`,null,null,-1),k(`span`,null,_(i(W)(`物理 · 计算 · 系统`,`PHYSICS · COMPUTATION · SYSTEMS`)),1)])],8,tn),E(Qt),k(`nav`,{"aria-label":i(W)(`主导航`,`Main navigation`)},[(y(!0),j(C,null,M(t.value,e=>(y(),j(`a`,{key:e.href,href:e.href,"aria-label":e.label},[k(`span`,on,_(e.index),1),k(`span`,sn,_(e.label),1),k(`span`,cn,_(e.shortLabel||e.label),1)],8,an))),128))],8,rn),k(`div`,{class:`language-switch`,role:`group`,"aria-label":i(W)(`网站语言`,`Site language`)},[k(`button`,{type:`button`,lang:`zh-CN`,"aria-pressed":i(U)===`zh`,"aria-label":`切换为中文`,onClick:n[0]||=e=>i(wt)(`zh`)},`中`,8,un),k(`button`,{type:`button`,lang:`en`,"aria-pressed":i(U)===`en`,"aria-label":`Switch to English`,onClick:n[1]||=e=>i(wt)(`en`)},`EN`,8,dn)],8,ln)])]))}},[[`__scopeId`,`data-v-deb72d9c`]]),pn=``+new URL(`cfw_observe_model_live_hero-D_EHy4FS.gif`,import.meta.url).href,K={liveFeedUrl:`https://raw.githubusercontent.com/BeautyChaser/beautychaser.github.io/main/public/news-feed.json`,sources:[{id:`zhihu`,name:{zh:`知乎`,en:`Zhihu`},short:`ZH`,handle:`Callingforwind`,profileUrl:`https://www.zhihu.com/people/zhu-yao-mei-zhui`,hosts:[`zhihu.com`,`www.zhihu.com`,`zhuanlan.zhihu.com`],feeds:[]},{id:`bilibili`,name:{zh:`bilibili`,en:`bilibili`},short:`Bili`,handle:`Callingforwind`,profileUrl:`https://space.bilibili.com/354151470`,hosts:[`www.bilibili.com`,`bilibili.com`,`space.bilibili.com`,`b23.tv`],feeds:[]},{id:`linkedin`,name:{zh:`领英`,en:`LinkedIn`},short:`in`,handle:`Jinfeng Zhao`,profileUrl:`https://www.linkedin.com/in/jinfeng-zhao-641647296/`,hosts:[`linkedin.com`,`www.linkedin.com`],feeds:[]}]};function mn(e,t){try{let n=new URL(e);if(n.protocol!==`https:`||n.username||n.password||!t.includes(n.hostname))return``;for(let e of[...n.searchParams.keys()])/^(?:utm_|spm|from$|source$|share_)/i.test(e)&&n.searchParams.delete(e);return n.hash=``,n.href}catch{return``}}function q(e){if(typeof e!=`string`||!e.trim())return null;let t=Date.parse(e);return Number.isFinite(t)?new Date(t).toISOString():null}function hn(e){return!e||typeof e!=`object`||Array.isArray(e)?{}:Object.fromEntries([`zh`,`en`].filter(t=>typeof e[t]==`string`&&e[t].trim()).map(t=>[t,e[t].trim().slice(0,1e3)]))}function gn(e,t){let n=t.find(t=>t.id===e?.source);if(!n)return null;let r=mn(e.url,n.hosts),i=q(e.publishedAt),a=q(e.collectedAt),o=e.origin===`manual`,s=hn(e.title),c=e.titlePending===!0||!Object.keys(s).length;if(!r||!i&&(!o||!a)||!o&&c)return null;let l=c?{zh:`${n.name?.zh??n.id}文章链接`,en:`${n.name?.en??n.id} article link`}:s;return{id:`${n.id}:${r}`,source:n.id,url:r,publishedAt:i,collectedAt:a,title:l,titlePending:c,summary:hn(e.summary),kind:[`article`,`video`,`post`].includes(e.kind)?e.kind:`post`,origin:o?`manual`:`feed`}}function _n(e,t){let n=new Map;for(let r of e){let e=gn(r,t);e&&n.set(e.id,{...n.get(e.id),...e})}let r=new Map;return[...n.values()].sort((e,t)=>(t.publishedAt??t.collectedAt).localeCompare(e.publishedAt??e.collectedAt)).filter(e=>{let t=(r.get(e.source)??0)+1;return r.set(e.source,t),t<=100})}function vn(e,t){let n=e.title[t]?t:Object.keys(e.title)[0];return{...e,href:e.url,external:!0,contentLocale:n,title:e.title[n],description:e.summary[t]??e.summary[n]??``,date:new Intl.DateTimeFormat(`en-CA`,{timeZone:`Asia/Shanghai`,year:`numeric`,month:`2-digit`,day:`2-digit`}).format(new Date(e.publishedAt??e.collectedAt)),dateKind:e.publishedAt?`published`:`collected`}}function yn(e,t){if(e?.version!==1||!Array.isArray(e.items)||!Array.isArray(e.sources))throw Error(`Invalid news snapshot`);return{version:1,generatedAt:q(e.generatedAt),items:_n(e.items,t),sources:t.map(t=>{let n=e.sources.find(e=>e.id===t.id);return{id:t.id,status:[`ok`,`partial`,`unavailable`,`manual`].includes(n?.status)?n.status:`pending`,lastAttemptAt:q(n?.lastAttemptAt),lastSuccessAt:q(n?.lastSuccessAt)}})}}var J=K.sources,Y=h(yn({version:1,sources:[],items:[]},J)),X=h(!1),bn=h(!1),xn=D(()=>Y.value.generatedAt),Sn=D(()=>Y.value.sources),Z=e=>J.find(t=>t.id===e)?.name[U.value]??(U.value===`en`?`This website`:`本站`),Cn=e=>J.find(t=>t.id===e)?.short??`CFW`,Q=D(()=>[...Vt.value.map(e=>({...e,id:`site:${e.slug}`,source:`site`,kind:`article`,contentLocale:U.value,external:!1})),...Y.value.items.map(e=>vn(e,U.value))].sort((e,t)=>(t.publishedAt??t.collectedAt??t.date??``).localeCompare(e.publishedAt??e.collectedAt??e.date??``)));async function wn(e){let t=await fetch(e,{cache:`no-store`,signal:AbortSignal.timeout(8e3),headers:{Accept:`application/json`}});if(!t.ok)throw Error(`News could not be loaded`);let n=await t.text();if(n.length>1e6)throw Error(`News snapshot too large`);let r=yn(JSON.parse(n),J);(!Y.value.generatedAt||r.generatedAt&&r.generatedAt>=Y.value.generatedAt)&&(Y.value=r)}async function $(){if(X.value)return;X.value=!0;let e=!1;try{try{await wn(`./news-feed.json`),e=!0}catch{}if(![`localhost`,`127.0.0.1`,`[::1]`].includes(window.location.hostname)&&K.liveFeedUrl)try{let t=new URL(K.liveFeedUrl);t.searchParams.set(`v`,String(Math.floor(Date.now()/3e5))),await wn(t.href),e=!0}catch{}bn.value=!e}finally{X.value=!1}}function Tn(){$();let e=()=>{document.visibilityState===`visible`&&$()},t=window.setInterval(e,300*1e3);return document.addEventListener(`visibilitychange`,e),()=>{clearInterval(t),document.removeEventListener(`visibilitychange`,e)}}var En=[`aria-label`],Dn={class:`strip-heading`},On={class:`news-heading-link`,href:`#news`},kn={class:`all-news`,href:`#news`},An={class:`strip-content`},jn=[`aria-label`],Mn=[`href`],Nn=[`href`,`target`,`rel`],Pn={class:`strip-date`},Fn={key:0},In=[`datetime`],Ln={class:`source-tag`},Rn=[`lang`],zn={key:0,class:`strip-empty`},Bn=A({__name:`NewsStrip`,setup(e){return(e,t)=>(y(),j(`section`,{id:`home-news`,class:`news-strip`,"aria-label":i(W)(`各平台最近更新`,`Latest updates across platforms`)},[k(`div`,Dn,[k(`a`,On,[t[0]||=O(`NEWS `,-1),k(`span`,null,`/ `+_(i(W)(`近况`,`Updates`)),1),t[1]||=k(`span`,{class:`news-dot`,"aria-hidden":`true`},null,-1)]),k(`a`,kn,_(i(W)(`全部动态`,`All updates`))+` ↗`,1)]),k(`div`,An,[k(`div`,{class:`platform-links`,"aria-label":i(W)(`公开平台`,`Public platforms`)},[(y(!0),j(C,null,M(i(J),e=>(y(),j(`a`,{key:e.id,href:e.profileUrl,target:`_blank`,rel:`noopener noreferrer`},[k(`span`,null,_(e.short),1),O(` `+_(i(Z)(e.id))+` ↗`,1)],8,Mn))),128))],8,jn),(y(!0),j(C,null,M(i(Q).slice(0,3),e=>(y(),j(`a`,{key:e.id,class:`strip-update`,href:e.href,target:e.external?`_blank`:void 0,rel:e.external?`noopener noreferrer`:void 0},[k(`span`,Pn,[e.dateKind===`collected`?(y(),j(`span`,Fn,_(i(W)(`收录于`,`Added`)),1)):T(``,!0),e.date?(y(),j(`time`,{key:1,datetime:e.date},_(i(Tt)(e.date)),9,In)):T(``,!0)]),k(`span`,Ln,_(i(Cn)(e.source)),1),k(`span`,{class:`update-title`,lang:e.contentLocale===`en`?`en`:`zh-CN`},_(e.title),9,Rn),t[2]||=k(`span`,{class:`update-arrow`,"aria-hidden":`true`},`↗`,-1)],8,Nn))),128)),i(Q).length?T(``,!0):(y(),j(`p`,zn,_(i(W)(`最近更新正在收录，欢迎前往各平台主页。`,`Recent updates are being collected. Visit the platform profiles in the meantime.`)),1))])],8,En))}},[[`__scopeId`,`data-v-7eb936ee`]]),Vn={id:`home`,class:`home-page`},Hn={class:`hero page-width`,"aria-labelledby":`identity`},Un={class:`hero-copy`},Wn={class:`eyebrow hero-eyebrow`},Gn={key:0,id:`identity`},Kn={key:1,id:`identity`,class:`identity-heading-en`},qn={class:`identity-en`},Jn={class:`hero-statement`},Yn={class:`hero-actions`},Xn={class:`primary-link`,href:`#systems`},Zn={class:`secondary-link`,href:`#notes`},Qn=[`aria-label`],$n={class:`sheet-top`},er={class:`system-drawing`},tr={class:`system-node node-physics`},nr={class:`node-index`},rr={class:`system-node node-model`},ir={class:`node-index`},ar={class:`system-node node-ai`},or={class:`node-index`},sr={class:`system-node node-feedback`},cr={class:`node-index`},lr=[`src`,`alt`],ur={class:`sheet-bottom`},dr=[`aria-label`],fr={class:`strip-label`},pr={id:`systems`,class:`perspectives page-width`,"aria-labelledby":`systems-title`},mr={class:`section-heading`},hr={class:`eyebrow`},gr={id:`systems-title`},_r={class:`section-aside`},vr={class:`perspective-grid`},yr={class:`card-top`},br={class:`card-symbol`,"aria-hidden":`true`},xr={class:`card-annotation`},Sr={id:`notes`,class:`notes-section page-width`,"aria-labelledby":`notes-title`},Cr={class:`section-heading`},wr={class:`eyebrow`},Tr={id:`notes-title`},Er={class:`notes-count`},Dr=[`href`],Or={class:`note-number`},kr={class:`note-content`},Ar={class:`eyebrow`},jr={class:`note-label`},Mr={class:`notebook-end`},Nr=A({__name:`HomePage`,setup(e){let t=D(()=>Bt.value.filter(e=>!e.isNews)),n=D(()=>[{number:`01`,name:W(`物理与机理`,`Physics & mechanisms`),english:W(`理解机理`,`UNDERSTAND`),description:W(`把问题拆回物理机理、相互作用与边界条件，先明确模型需要回答什么。`,`Start with physical mechanisms, interactions, and boundary conditions. Define what the model needs to explain.`),annotation:W(`机理 → 模型`,`mechanism → model`),symbol:`∂`},{number:`02`,name:W(`计算与验证`,`Computation & validation`),english:W(`计算验证`,`COMPUTE`),description:W(`让方程走向离散、求解与对照，让假设、误差与结果都能够被追溯。`,`Move from equations to discretization, solutions, and comparisons. Make assumptions, errors, and results traceable.`),annotation:W(`模型 → 求解 → 验证`,`model → solve → verify`),symbol:`∫`},{number:`03`,name:W(`智能与系统`,`Intelligence & systems`),english:W(`系统集成`,`INTEGRATE`),description:W(`将感知、模型、决策和反馈放在一起思考，让局部能力形成完整闭环。`,`Connect perception, models, decisions, and feedback. Bring individual capabilities into a complete working loop.`),annotation:W(`观测 → 行动 → 学习`,`observe → act → learn`),symbol:`↻`}]);return(e,r)=>(y(),j(`div`,Vn,[E(Bn),k(`section`,Hn,[k(`div`,Un,[k(`p`,Wn,[r[0]||=k(`span`,{class:`small-cross`},`+`,-1),O(` CALLINGFORWIND / `+_(i(W)(`个人研究手记`,`PERSONAL FIELD NOTES`)),1)]),i(U)===`zh`?(y(),j(`h1`,Gn,[...r[1]||=[O(`跨领域计算物理与`,-1),k(`br`,null,null,-1),k(`em`,null,`Physical AI`,-1),k(`br`,null,null,-1),O(`系统架构师`,-1),k(`span`,{class:`title-period`},`.`,-1)]])):(y(),j(`h1`,Kn,[...r[2]||=[O(`Cross-domain`,-1),k(`br`,null,null,-1),O(`Computational Physics`,-1),k(`br`,null,null,-1),O(`& `,-1),k(`em`,null,`Physical AI`,-1),k(`br`,null,null,-1),O(`Systems Architect`,-1),k(`span`,{class:`title-period`},`.`,-1)]])),k(`p`,qn,_(i(W)(`Cross-domain Computational Physics & Physical AI Systems Architect`,`From physical mechanisms to integrated, verifiable systems.`)),1),k(`div`,Jn,[r[3]||=k(`span`,{class:`statement-line`},null,-1),k(`p`,null,_(i(W)(`从物理机理出发，用计算建立模型，让智能进入真实系统。`,`Start with physics. Build computational models. Bring intelligence into real-world systems.`)),1)]),k(`div`,Yn,[k(`a`,Xn,[O(_(i(W)(`探索系统视角`,`Explore systems`))+` `,1),r[4]||=k(`span`,null,`↗`,-1)]),k(`a`,Zn,[O(_(i(W)(`阅读笔记`,`Read notes`))+` `,1),r[5]||=k(`span`,null,`↓`,-1)])])]),k(`figure`,{class:`system-sheet`,"aria-label":i(W)(`物理、计算和智能之间的反馈闭环示意图`,`A feedback loop connecting physics, computation, and intelligence`)},[k(`div`,$n,[k(`span`,null,_(i(W)(`图 01`,`FIG. 01`)),1),k(`span`,null,_(i(W)(`从系统视角出发`,`A SYSTEMS PERSPECTIVE`)),1),r[6]||=k(`span`,null,`+`,-1)]),k(`div`,er,[r[7]||=x(`<div class="drawing-grid" data-v-0f9e543a></div><svg class="cycle-lines" viewBox="0 0 400 350" aria-hidden="true" data-v-0f9e543a><defs data-v-0f9e543a><marker id="arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto" data-v-0f9e543a><path d="M0,0 L6,3 L0,6" fill="none" stroke="currentColor" data-v-0f9e543a></path></marker></defs><path d="M145 57 H253 M319 99 V244 M255 290 H145 M80 245 V102" fill="none" stroke="currentColor" stroke-width="1" marker-end="url(#arrow)" data-v-0f9e543a></path><path d="M159 175 H241 M200 136 V215" stroke="currentColor" stroke-opacity="0.24" stroke-dasharray="3 5" data-v-0f9e543a></path></svg>`,2),k(`div`,tr,[k(`span`,nr,`01 / `+_(i(W)(`物理`,`PHYSICS`)),1),k(`strong`,null,_(i(W)(`物理世界`,`Physical world`)),1),k(`small`,null,_(i(W)(`机理 · 约束 · 边界`,`Mechanisms · constraints`)),1)]),k(`div`,rr,[k(`span`,ir,`02 / `+_(i(W)(`计算`,`COMPUTATION`)),1),k(`strong`,null,_(i(W)(`计算模型`,`Computational model`)),1),k(`small`,null,_(i(W)(`方程 · 求解 · 验证`,`Equations · validation`)),1)]),k(`div`,ar,[k(`span`,or,`03 / `+_(i(W)(`智能`,`INTELLIGENCE`)),1),k(`strong`,null,_(i(W)(`智能系统`,`Intelligent system`)),1),k(`small`,null,_(i(W)(`感知 · 决策 · 行动`,`Sense · decide · act`)),1)]),k(`div`,sr,[k(`span`,cr,`04 / `+_(i(W)(`反馈`,`FEEDBACK`)),1),k(`strong`,null,_(i(W)(`观测反馈`,`Observation & feedback`)),1),k(`small`,null,_(i(W)(`测量 · 对照 · 迭代`,`Measure · compare · iterate`)),1)]),k(`img`,{class:`model-animation`,src:i(pn),alt:i(W)(`观测与建模动态示意`,`Animated illustration of observation and modeling`),width:`130`,height:`130`},null,8,lr)]),k(`figcaption`,null,[r[8]||=k(`span`,{class:`loop-symbol`},`↻`,-1),O(` `+_(i(W)(`从观测到模型，再回到真实世界。`,`From observation to models, back to the real world.`)),1)]),k(`div`,ur,[k(`span`,null,_(i(W)(`物理世界 ↔ 计算模型`,`PHYSICAL WORLD ↔ COMPUTATIONAL MODEL`)),1),r[9]||=k(`span`,null,`CFW.`,-1)])],8,Qn)]),k(`div`,{class:`discipline-strip page-width`,"aria-label":i(W)(`关注方向`,`Areas of focus`)},[k(`span`,fr,_(i(W)(`贯穿其中的线索`,`THE CONNECTING THREAD`)),1),k(`span`,null,_(i(W)(`计算物理`,`Computational Physics`)),1),r[10]||=k(`span`,{class:`strip-plus`},`+`,-1),k(`span`,null,_(i(W)(`科学计算`,`Scientific Computing`)),1),r[11]||=k(`span`,{class:`strip-plus`},`+`,-1),r[12]||=k(`span`,null,`Physical AI`,-1)],8,dr),k(`section`,pr,[k(`div`,mr,[k(`div`,null,[k(`p`,hr,`01 / `+_(i(W)(`系统思考`,`SYSTEMS THINKING`)),1),k(`h2`,gr,_(i(W)(`在学科之间，建立连接。`,`Make connections across disciplines.`)),1)]),k(`p`,_r,_(i(W)(`以机理为起点，以计算为桥梁，以可验证的系统为落点。`,`Grounded in mechanisms. Bridged by computation. Built into verifiable systems.`)),1)]),k(`div`,vr,[(y(!0),j(C,null,M(n.value,e=>(y(),j(`article`,{key:e.number,class:`perspective-card`},[k(`div`,yr,[k(`span`,null,_(e.number)+` / `+_(e.english),1),k(`span`,br,_(e.symbol),1)]),k(`h3`,null,_(e.name),1),k(`p`,null,_(e.description),1),k(`div`,xr,_(e.annotation),1)]))),128))])]),k(`section`,Sr,[k(`div`,Cr,[k(`div`,null,[k(`p`,wr,`02 / `+_(i(W)(`公开的研究手记`,`THE OPEN NOTEBOOK`)),1),k(`h2`,Tr,_(i(W)(`推导、搭建，也记录。`,`Derive. Build. Write it down.`)),1)]),k(`span`,Er,_(i(Et)(t.value.length)),1)]),(y(!0),j(C,null,M(t.value,(e,t)=>(y(),j(`a`,{key:e.slug,class:`note-row`,href:e.href},[k(`span`,Or,_(String(t+1).padStart(2,`0`)),1),k(`div`,kr,[k(`span`,Ar,_(e.category),1),k(`h3`,null,_(e.title),1),k(`p`,null,_(e.description),1)]),k(`span`,jr,_(e.label),1),r[13]||=k(`span`,{class:`note-arrow`,"aria-hidden":`true`},`↗`,-1)],8,Dr))),128)),k(`p`,Mr,[r[14]||=k(`span`,null,`∴`,-1),O(` `+_(i(W)(`理解世界，也把理解变成可以运行的东西。`,`Understand the world. Turn understanding into something that works.`)),1)])])]))}},[[`__scopeId`,`data-v-0f9e543a`]]),Pr={id:`news`,class:`news-page`},Fr={class:`back-home`,href:`#home`},Ir={class:`news-intro`},Lr={class:`eyebrow`},Rr={class:`intro-copy`},zr=[`aria-label`],Br=[`href`],Vr={class:`source-monogram`,"aria-hidden":`true`},Hr={class:`source-identity`},Ur={class:`profile-visit`},Wr={class:`source-state`},Gr={key:0,class:`source-date`},Kr=[`datetime`],qr={class:`updates-section`,"aria-labelledby":`updates-title`},Jr={class:`updates-heading`},Yr={id:`updates-title`},Xr=[`disabled`],Zr=[`aria-label`],Qr=[`aria-pressed`,`onClick`],$r={class:`collection-note`},ei={key:0,class:`collection-date`},ti=[`datetime`],ni={key:1,class:`connection-notice`,role:`status`},ri={"aria-live":`polite`,class:`results-status`},ii={key:2,class:`update-list`},ai={class:`update-date`},oi={key:0},si=[`datetime`],ci={class:`update-copy`},li={class:`update-meta`},ui=[`href`,`target`,`rel`,`lang`],di=[`lang`],fi={key:1,class:`collection-note`},pi=[`href`,`target`,`rel`],mi={key:3,class:`empty-updates`},hi=A({__name:`NewsPage`,setup(e){let t=h(`all`),n=D(()=>[{id:`all`,label:W(`全部`,`All`)},...J.map(e=>({id:e.id,label:Z(e.id)})),{id:`site`,label:W(`本站`,`This website`)}]),r=D(()=>t.value===`all`?Q.value:Q.value.filter(e=>e.source===t.value)),a=e=>e===`all`?Q.value.length:Q.value.filter(t=>t.source===e).length,o=e=>Sn.value.find(t=>t.id===e)?.status,s=e=>Sn.value.find(t=>t.id===e)?.lastSuccessAt,c=J.some(e=>e.feeds.length);function l(e){return new Intl.DateTimeFormat(U.value===`zh`?`zh-CN`:`en`,{dateStyle:`medium`,timeStyle:`short`,timeZone:`Asia/Shanghai`}).format(new Date(e))}function u(e){return!J.find(t=>t.id===e)?.feeds.length||o(e)===`manual`?W(`由本人按文章链接更新`,`Updated by the author from article links`):o(e)===`unavailable`?W(`同步暂不可用，可前往主页查看`,`Sync unavailable; visit the profile for updates`):o(e)===`partial`?W(`部分更新暂不可用`,`Some updates are temporarily unavailable`):o(e)===`ok`?a(e)?W(`已同步公开更新`,`Public updates synced`):W(`暂未发现公开更新`,`No public updates found`):W(`主页已连接 · 等待同步`,`Profile connected · Awaiting sync`)}return(e,o)=>(y(),j(`div`,Pr,[k(`a`,Fr,`← `+_(i(W)(`返回首页`,`Back home`)),1),k(`header`,Ir,[k(`p`,Lr,`NEWS / `+_(i(W)(`各处的记录`,`ACROSS PLATFORMS`)),1),k(`h1`,null,[O(_(i(W)(`近况与平台更新`,`News & updates`)),1),o[2]||=k(`span`,null,`.`,-1)]),k(`p`,Rr,_(i(W)(`知乎的思考、bilibili 的分享、领英的近况，以及这个网站的更新。在这里汇合，从这里前往原文。`,`Thoughts on Zhihu, sharing on bilibili, updates on LinkedIn, and notes from this website. Collected here, with links to the originals.`)),1)]),k(`section`,{class:`source-grid`,"aria-label":i(W)(`我的公开平台`,`My public platforms`)},[(y(!0),j(C,null,M(i(J),e=>(y(),j(`article`,{key:e.id,class:`source-card`},[k(`a`,{class:`source-profile`,href:e.profileUrl,target:`_blank`,rel:`noopener noreferrer`},[k(`span`,Vr,_(e.short),1),k(`span`,Hr,[k(`strong`,null,_(i(Z)(e.id)),1),k(`span`,null,_(e.handle),1)]),k(`span`,Ur,_(i(W)(`前往主页`,`Visit profile`))+` ↗`,1)],8,Br),k(`p`,Wr,_(u(e.id)),1),s(e.id)?(y(),j(`p`,Gr,[O(_(i(W)(`最近同步`,`Last synced`))+` `,1),k(`time`,{datetime:s(e.id)},_(l(s(e.id))),9,Kr)])):T(``,!0)]))),128))],8,zr),k(`section`,qr,[k(`div`,Jr,[k(`h2`,Yr,_(i(W)(`最近更新`,`Recent updates`)),1),k(`button`,{class:`refresh-button`,type:`button`,disabled:i(X),onClick:o[0]||=(...e)=>i($)&&i($)(...e)},[o[3]||=k(`span`,{"aria-hidden":`true`},`↻`,-1),O(` `+_(i(X)?i(W)(`正在刷新…`,`Refreshing…`):i(W)(`刷新动态`,`Refresh updates`)),1)],8,Xr)]),k(`div`,{class:`filters`,role:`group`,"aria-label":i(W)(`按平台筛选动态`,`Filter updates by platform`)},[(y(!0),j(C,null,M(n.value,e=>(y(),j(`button`,{key:e.id,type:`button`,"aria-pressed":t.value===e.id,onClick:n=>t.value=e.id},[O(_(e.label)+` `,1),k(`span`,null,_(a(e.id)),1)],8,Qr))),128))],8,Zr),k(`p`,$r,_(i(c)?i(W)(`可用订阅源提供自动更新，其他文章由本人按链接收录。外站标题与摘要保留原语言。`,`Available feeds provide automatic updates; other articles are collected by the author from links. External titles and excerpts keep their original language.`):i(W)(`这里收录本人提供的文章与视频链接，点击条目前往原文。完整更新可在各平台主页查看。`,`Articles and videos are collected here from links supplied by the author. Open an entry to view the original, or visit each profile for all updates.`)),1),i(xn)?(y(),j(`p`,ei,[O(_(i(c)?i(W)(`最近检查`,`Last checked`):i(W)(`最近整理`,`Last curated`))+` `,1),k(`time`,{datetime:i(xn)},_(l(i(xn))),9,ti),O(` · `+_(i(W)(`北京时间`,`Beijing time`)),1)])):T(``,!0),i(bn)?(y(),j(`p`,ni,_(i(W)(`暂时无法获取更新，仍可查看已收录内容和平台主页。`,`Updates could not be refreshed. Saved entries and platform profiles remain available.`)),1)):T(``,!0),k(`div`,ri,_(i(W)(`共 ${r.value.length} 条动态`,`${r.value.length} ${r.value.length===1?`update`:`updates`}`)),1),r.value.length?(y(),j(`ol`,ii,[(y(!0),j(C,null,M(r.value,e=>(y(),j(`li`,{key:e.id,class:`update-row`},[k(`div`,ai,[e.dateKind===`collected`?(y(),j(`span`,oi,_(i(W)(`收录于`,`Added`)),1)):T(``,!0),e.date?(y(),j(`time`,{key:1,datetime:e.date},_(i(Tt)(e.date)),9,si)):T(``,!0),k(`span`,null,_(i(Cn)(e.source)),1)]),k(`div`,ci,[k(`p`,li,[O(_(i(Z)(e.source)),1),o[4]||=k(`span`,{"aria-hidden":`true`},` / `,-1),O(_(e.kind===`video`?i(W)(`视频`,`Video`):e.kind===`post`?i(W)(`动态`,`Post`):i(W)(`文章`,`Article`)),1)]),k(`h3`,null,[k(`a`,{href:e.href,target:e.external?`_blank`:void 0,rel:e.external?`noopener noreferrer`:void 0,lang:e.contentLocale===`en`?`en`:`zh-CN`},[O(_(e.title)+` `,1),o[5]||=k(`span`,{"aria-hidden":`true`},`↗`,-1)],8,ui)]),e.description?(y(),j(`p`,{key:0,class:`update-summary`,lang:e.contentLocale===`en`?`en`:`zh-CN`},_(e.description),9,di)):T(``,!0),e.titlePending?(y(),j(`p`,fi,_(i(W)(`已收录文章链接，标题信息待补充，可直接前往原文查看。`,`Article link saved. Its title is not available yet; open the original to read it.`)),1)):T(``,!0),k(`a`,{class:`read-original`,href:e.href,target:e.external?`_blank`:void 0,rel:e.external?`noopener noreferrer`:void 0},_(e.external?i(W)(`阅读原文`,`View original`):i(W)(`阅读站内记录`,`Read this note`))+` ↗`,9,pi)])]))),128))])):(y(),j(`div`,mi,[o[6]||=k(`span`,{"aria-hidden":`true`},`∴`,-1),k(`h3`,null,_(i(W)(`这里还没有收录的更新。`,`No updates collected here yet.`)),1),k(`p`,null,_(i(W)(`可以先前往上方的平台主页查看。后续收录的文章和视频会出现在这里。`,`Visit the profiles above in the meantime. New articles and videos will appear here as they are collected.`)),1),k(`button`,{type:`button`,onClick:o[1]||=e=>t.value=`all`},_(i(W)(`查看全部动态`,`Show all updates`))+` ↗`,1)]))])]))}},[[`__scopeId`,`data-v-18e3ad40`]]),gi=`modulepreload`,_i=function(e,t){return new URL(e,t).href},vi={},yi=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}r=o(t.map(t=>{if(t=_i(t,n),t in vi)return;vi[t]=!0;let r=t.endsWith(`.css`),i=r?`[rel="stylesheet"]`:``;if(n)for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${t}"]${i}`))return;let o=document.createElement(`link`);if(o.rel=r?`stylesheet`:gi,r||(o.as=`script`),o.crossOrigin=``,o.href=t,a&&o.setAttribute(`nonce`,a),document.head.appendChild(o),r)return new Promise((e,n)=>{o.addEventListener(`load`,e),o.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},bi={key:1,class:`article-page`},xi={class:`article-heading`},Si=[`href`],Ci={class:`eyebrow`},wi={key:0,class:`article-context`},Ti={key:1,class:`article-context`,role:`status`},Ei=[`lang`],Di=A({__name:`WebMain`,setup(e){let t=h(``),n=h(window.location.hash===`#news`),r=D(()=>Bt.value.find(e=>e.slug===t.value)??null),a=ie({loader:()=>yi(()=>import(`./ContentPage-DkDllfI8.js`),__vite__mapDeps([0,1,2]),import.meta.url),delay:0,timeout:2e4,loadingComponent:{setup:()=>()=>S(`p`,{role:`status`},W(`正在加载文章…`,`Loading article…`))},errorComponent:{setup:()=>()=>S(`p`,{role:`alert`},W(`文章加载失败，请刷新页面重试。`,`Could not load the article. Please refresh to try again.`))}});ee(()=>{let e=r.value,t=W(`跨领域计算物理与 Physical AI 系统架构师`,`Cross-domain Computational Physics & Physical AI Systems Architect`),i=n.value?W(`近况与平台更新`,`News & updates`):e?.title??t;document.title=`${i} | Callingforwind`;let a=document.querySelector(`meta[name="description"]`);a&&(a.content=n.value?W(`Callingforwind 在知乎、bilibili、领英和个人网站的最近更新。`,`Recent updates from Callingforwind on Zhihu, bilibili, LinkedIn, and this website.`):e?.description??`Callingforwind — ${t}.`)});async function o(){let e=window.location.hash;n.value=e===`#news`;let i=``;if(e.startsWith(`#note/`))try{i=decodeURIComponent(e.slice(6))}catch{}t.value=i,await v(),n.value||r.value?window.scrollTo({top:0,behavior:`instant`}):e?document.getElementById(e.slice(1))?.scrollIntoView():window.scrollTo({top:0,behavior:`instant`})}return ce(()=>{window.addEventListener(`hashchange`,o),o()}),ue(()=>window.removeEventListener(`hashchange`,o)),(e,t)=>n.value?(y(),b(hi,{key:0})):r.value?(y(),j(`div`,bi,[k(`div`,xi,[k(`a`,{class:`back-link`,href:r.value.isNews?`#news`:`#notes`},`← `+_(r.value.isNews?i(W)(`返回 News`,`Back to News`):i(W)(`返回研究笔记`,`Back to notes`)),9,Si),k(`p`,Ci,_(r.value.category)+` / `+_(r.value.date?i(Tt)(r.value.date):r.value.label),1),k(`h1`,null,_(r.value.title),1),r.value.slug===`vue3-github-pages-blog-deployment`?(y(),j(`p`,wi,_(i(W)(`这篇文章保留通用部署参考。本网站当前采用根目录静态文件发布，具体维护步骤请以仓库 README 为准。`,`This article is a general deployment reference. This site publishes static files from the repository root; see the repository README for its current maintenance steps.`)),1)):T(``,!0),r.value.translationMissing?(y(),j(`p`,Ti,_(i(W)(`这篇文章暂时只有英文版本。`,`This article is currently available in Chinese only.`)),1)):T(``,!0)]),k(`div`,{lang:r.value.contentLocale===`en`?`en`:`zh-CN`},[(y(),b(i(a),{key:r.value.slug,content:r.value.content},null,8,[`content`]))],8,Ei)])):(y(),b(Nr,{key:2}))}},[[`__scopeId`,`data-v-083c7890`]]),Oi={id:`contact`,class:`desk-container`},ki={class:`contact-wrapper`},Ai={class:`paper-main`},ji={class:`contact-eyebrow`},Mi={class:`title-underline`},Ni={class:`content-body`},Pi={class:`code-comment`},Fi={class:`code-line`},Ii={class:`contact-list`},Li={class:`item`},Ri={class:`key`},zi={class:`business-card`},Bi={class:`card-pattern`},Vi={class:`icon-grid`},Hi=[`aria-pressed`,`aria-label`,`onClick`,`title`],Ui=[`href`],Wi={class:`stamp-seal`},Gi={key:0,class:`copy-tip`,role:`status`},Ki={class:`wood-footer`},qi={class:`copy-text`},Ji=A({__name:`Contact`,setup(e){let t=e=>K.sources.find(t=>t.id===e).profileUrl,r=D(()=>({wx:{name:W(`微信账号`,`WeChat account`),iconText:`Wx`,label:`Beauty7Chaser`,color:`#2e7d32`},in:{name:W(`LinkedIn 账号`,`LinkedIn account`),iconText:`In`,label:`Jinfeng Zhao`,profileUrl:t(`linkedin`),color:`#0077b5`},rss:{name:W(`QQ 账号`,`QQ account`),iconText:`QQ`,label:`584830702`,color:`#d71b1b`}})),a=h(null),o=h(``),c=h(``),l=D(()=>o.value===`copied`?W(`已复制：`,`Copied: `)+c.value:o.value===`manual`?W(`账号已显示，可手动复制`,`Account shown. You can copy it manually.`):``),u,d=D(()=>a.value?r.value[a.value].label:W(`建立连接()`,`Connect()`)),f=D(()=>a.value?r.value[a.value].color:`#333`),p=async e=>{if(clearTimeout(u),o.value=``,a.value===e)a.value=null;else{a.value=e;let t=r.value[e].label;try{await navigator.clipboard.writeText(t),c.value=t,o.value=`copied`}catch{o.value=`manual`}u=setTimeout(()=>{o.value=``},2e3)}};return ue(()=>clearTimeout(u)),(e,t)=>(y(),j(`footer`,Oi,[t[2]||=k(`div`,{class:`desk-edge-shadow`},null,-1),k(`div`,ki,[k(`div`,Ai,[k(`p`,ji,`03 / `+_(i(W)(`建立连接`,`LET'S CONNECT`)),1),k(`h2`,Mi,_(i(W)(`从一个问题开始。`,`Start with a question.`)),1),k(`div`,Ni,[k(`p`,Pi,_(i(W)(`如果你也在思考物理、计算或智能系统，欢迎交换一个问题、一个想法，或一个合作的可能。`,`Thinking about physics, computation, or intelligent systems? Let’s exchange a question, an idea, or a possibility for collaboration.`)),1),k(`p`,Fi,_(i(W)(`物理 → 计算 → 智能`,`physics → computation → intelligence`)),1),k(`div`,Ii,[k(`div`,Li,[k(`span`,Ri,_(i(W)(`邮箱：`,`Email:`)),1),t[0]||=k(`a`,{href:`mailto:beauty7chaser@gmail.com`,class:`val`},`beauty7chaser@gmail.com`,-1)]),t[1]||=k(`div`,{class:`item`},[k(`span`,{class:`key`},`Github:`),k(`a`,{href:`https://github.com/BeautyChaser`,target:`_blank`,rel:`noopener noreferrer`,class:`val`},`@BeautyChaser`)],-1)])])]),k(`div`,zi,[k(`div`,Bi,[k(`h3`,{class:`card-header`,style:te({color:f.value})},_(d.value),5),k(`div`,Vi,[(y(!0),j(C,null,M(r.value,(e,t)=>(y(),j(`button`,{key:t,type:`button`,class:s([`btn`,{active:a.value===t}]),"aria-pressed":a.value===t,"aria-label":i(W)(`查看`,`View `)+e.name,onClick:e=>p(t),title:i(W)(`点击查看`,`View `)+e.name},_(e.iconText),11,Hi))),128))]),a.value&&r.value[a.value].profileUrl?(y(),j(`a`,{key:0,class:`platform-home-link active-profile-link`,href:r.value[a.value].profileUrl,target:`_blank`,rel:`noopener noreferrer`},_(i(W)(`前往主页`,`Visit profile`))+` ↗`,9,Ui)):T(``,!0),k(`div`,Wi,_(i(W)(`一起构建`,`LET'S BUILD`)),1),E(be,{name:`fade`},{default:n(()=>[l.value?(y(),j(`span`,Gi,_(l.value),1)):T(``,!0)]),_:1})])])]),k(`div`,Ki,[k(`p`,qi,`© `+_(new Date().getFullYear())+` `+_(i(W)(`由 Callingforwind 设计。`,`DESIGNED BY Callingforwind.`)),1)])]))}},[[`__scopeId`,`data-v-36bddfa3`]]),Yi={class:`skip-link`,href:`#main-content`},Xi={class:`page-container`},Zi={id:`main-content`};yt(A({__name:`App`,setup(e){let t;return ce(()=>{t=Tn()}),ue(()=>t?.()),ee(()=>{document.documentElement.lang=U.value===`en`?`en`:`zh-CN`}),(e,t)=>(y(),j(C,null,[k(`a`,Yi,_(i(W)(`跳转到正文`,`Skip to content`)),1),k(`div`,Xi,[E(fn),k(`main`,Zi,[E(Di)]),E(Ji)])],64))}},[[`__scopeId`,`data-v-a45e6c58`]])).mount(`#app`);