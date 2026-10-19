<script setup>
import heroAnimation from '@/assets/cfw_observe_model_live_hero.gif'
import { notes as allNotes, news } from '@/data/notes.js'
import { computed } from 'vue'
import { locale, t, formatDate, noteCount } from '@/i18n.js'

const notes = computed(() => allNotes.value.filter(note => !note.isNews))

const perspectives = computed(() => [
  { number: '01', name: t('物理与机理', 'Physics & mechanisms'), english: t('理解机理', 'UNDERSTAND'), description: t('把问题拆回物理机理、相互作用与边界条件，先明确模型需要回答什么。', 'Start with physical mechanisms, interactions, and boundary conditions. Define what the model needs to explain.'), annotation: t('机理 → 模型', 'mechanism → model'), symbol: '∂' },
  { number: '02', name: t('计算与验证', 'Computation & validation'), english: t('计算验证', 'COMPUTE'), description: t('让方程走向离散、求解与对照，让假设、误差与结果都能够被追溯。', 'Move from equations to discretization, solutions, and comparisons. Make assumptions, errors, and results traceable.'), annotation: t('模型 → 求解 → 验证', 'model → solve → verify'), symbol: '∫' },
  { number: '03', name: t('智能与系统', 'Intelligence & systems'), english: t('系统集成', 'INTEGRATE'), description: t('将感知、模型、决策和反馈放在一起思考，让局部能力形成完整闭环。', 'Connect perception, models, decisions, and feedback. Bring individual capabilities into a complete working loop.'), annotation: t('观测 → 行动 → 学习', 'observe → act → learn'), symbol: '↻' },
])
</script>

<template>
  <div id="home" class="home-page">
    <section id="news" class="news-column page-width" aria-labelledby="news-title">
      <div class="news-heading"><h2 id="news-title">NEWS<span> / {{ t('近况', 'Updates') }}</span></h2><span class="news-dot" aria-hidden="true"></span></div>
      <div class="news-items">
        <a v-for="item in news.slice(0, 3)" :key="item.slug" :href="item.href" class="news-item">
          <time v-if="item.date" :datetime="item.date">{{ formatDate(item.date) }}</time>
          <span class="news-title">{{ item.title }}</span><span class="news-arrow" aria-hidden="true">↗</span>
        </a>
        <p v-if="!news.length" class="news-empty">{{ t('新的想法与进展，会在这里记录。', 'New ideas and progress will be shared here.') }}</p>
      </div>
    </section>
    <section class="hero page-width" aria-labelledby="identity">
      <div class="hero-copy">
        <p class="eyebrow hero-eyebrow"><span class="small-cross">+</span> CALLINGFORWIND / {{ t('个人研究手记', 'PERSONAL FIELD NOTES') }}</p>
        <h1 v-if="locale === 'zh'" id="identity">跨领域计算物理与<br><em>Physical AI</em><br>系统架构师<span class="title-period">.</span></h1>
        <h1 v-else id="identity" class="identity-heading-en">Cross-domain<br>Computational Physics<br>&amp; <em>Physical AI</em><br>Systems Architect<span class="title-period">.</span></h1>
        <p class="identity-en">{{ t('Cross-domain Computational Physics & Physical AI Systems Architect', 'From physical mechanisms to integrated, verifiable systems.') }}</p>
        <div class="hero-statement"><span class="statement-line"></span><p>{{ t('从物理机理出发，用计算建立模型，让智能进入真实系统。', 'Start with physics. Build computational models. Bring intelligence into real-world systems.') }}</p></div>
        <div class="hero-actions"><a class="primary-link" href="#systems">{{ t('探索系统视角', 'Explore systems') }} <span>↗</span></a><a class="secondary-link" href="#notes">{{ t('阅读笔记', 'Read notes') }} <span>↓</span></a></div>
      </div>
      <figure class="system-sheet" :aria-label="t('物理、计算和智能之间的反馈闭环示意图', 'A feedback loop connecting physics, computation, and intelligence')">
        <div class="sheet-top"><span>{{ t('图 01', 'FIG. 01') }}</span><span>{{ t('从系统视角出发', 'A SYSTEMS PERSPECTIVE') }}</span><span>+</span></div>
        <div class="system-drawing">
          <div class="drawing-grid"></div>
          <svg class="cycle-lines" viewBox="0 0 400 350" aria-hidden="true">
            <defs><marker id="arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="none" stroke="currentColor" /></marker></defs>
            <path d="M145 57 H253 M319 99 V244 M255 290 H145 M80 245 V102" fill="none" stroke="currentColor" stroke-width="1" marker-end="url(#arrow)" />
            <path d="M159 175 H241 M200 136 V215" stroke="currentColor" stroke-opacity="0.24" stroke-dasharray="3 5" />
          </svg>
          <div class="system-node node-physics"><span class="node-index">01 / {{ t('物理', 'PHYSICS') }}</span><strong>{{ t('物理世界', 'Physical world') }}</strong><small>{{ t('机理 · 约束 · 边界', 'Mechanisms · constraints') }}</small></div>
          <div class="system-node node-model"><span class="node-index">02 / {{ t('计算', 'COMPUTATION') }}</span><strong>{{ t('计算模型', 'Computational model') }}</strong><small>{{ t('方程 · 求解 · 验证', 'Equations · validation') }}</small></div>
          <div class="system-node node-ai"><span class="node-index">03 / {{ t('智能', 'INTELLIGENCE') }}</span><strong>{{ t('智能系统', 'Intelligent system') }}</strong><small>{{ t('感知 · 决策 · 行动', 'Sense · decide · act') }}</small></div>
          <div class="system-node node-feedback"><span class="node-index">04 / {{ t('反馈', 'FEEDBACK') }}</span><strong>{{ t('观测反馈', 'Observation & feedback') }}</strong><small>{{ t('测量 · 对照 · 迭代', 'Measure · compare · iterate') }}</small></div>
          <img class="model-animation" :src="heroAnimation" :alt="t('观测与建模动态示意', 'Animated illustration of observation and modeling')" width="130" height="130">
        </div>
        <figcaption><span class="loop-symbol">↻</span> {{ t('从观测到模型，再回到真实世界。', 'From observation to models, back to the real world.') }}</figcaption>
        <div class="sheet-bottom"><span>{{ t('物理世界 ↔ 计算模型', 'PHYSICAL WORLD ↔ COMPUTATIONAL MODEL') }}</span><span>CFW.</span></div>
      </figure>
    </section>
    <div class="discipline-strip page-width" :aria-label="t('关注方向', 'Areas of focus')">
      <span class="strip-label">{{ t('贯穿其中的线索', 'THE CONNECTING THREAD') }}</span><span>{{ t('计算物理', 'Computational Physics') }}</span><span class="strip-plus">+</span><span>{{ t('科学计算', 'Scientific Computing') }}</span><span class="strip-plus">+</span><span>Physical AI</span>
    </div>
    <section id="systems" class="perspectives page-width" aria-labelledby="systems-title">
      <div class="section-heading"><div><p class="eyebrow">01 / {{ t('系统思考', 'SYSTEMS THINKING') }}</p><h2 id="systems-title">{{ t('在学科之间，建立连接。', 'Make connections across disciplines.') }}</h2></div><p class="section-aside">{{ t('以机理为起点，以计算为桥梁，以可验证的系统为落点。', 'Grounded in mechanisms. Bridged by computation. Built into verifiable systems.') }}</p></div>
      <div class="perspective-grid">
        <article v-for="item in perspectives" :key="item.number" class="perspective-card">
          <div class="card-top"><span>{{ item.number }} / {{ item.english }}</span><span class="card-symbol" aria-hidden="true">{{ item.symbol }}</span></div>
          <h3>{{ item.name }}</h3><p>{{ item.description }}</p><div class="card-annotation">{{ item.annotation }}</div>
        </article>
      </div>
    </section>
    <section id="notes" class="notes-section page-width" aria-labelledby="notes-title">
      <div class="section-heading"><div><p class="eyebrow">02 / {{ t('公开的研究手记', 'THE OPEN NOTEBOOK') }}</p><h2 id="notes-title">{{ t('推导、搭建，也记录。', 'Derive. Build. Write it down.') }}</h2></div><span class="notes-count">{{ noteCount(notes.length) }}</span></div>
      <a v-for="(note, index) in notes" :key="note.slug" class="note-row" :href="note.href">
        <span class="note-number">{{ String(index + 1).padStart(2, '0') }}</span>
        <div class="note-content"><span class="eyebrow">{{ note.category }}</span><h3>{{ note.title }}</h3><p>{{ note.description }}</p></div>
        <span class="note-label">{{ note.label }}</span><span class="note-arrow" aria-hidden="true">↗</span>
      </a>
      <p class="notebook-end"><span>∴</span> {{ t('理解世界，也把理解变成可以运行的东西。', 'Understand the world. Turn understanding into something that works.') }}</p>
    </section>
  </div>
</template>

<style scoped>
.page-width { width: min(1240px, calc(100% - 96px)); margin-inline: auto; }
.news-column { display: grid; grid-template-columns: 156px 1fr; gap: 28px; align-items: start; padding-block: 24px; border-bottom: 1px solid var(--rule); }
.news-heading { display: flex; align-items: center; gap: 16px; min-height: 26px; }
.news-heading h2 { margin: 0; font: 0.7rem var(--mono); letter-spacing: 0.07em; }
.news-heading h2 span { font: 0.65rem var(--serif); color: var(--muted); letter-spacing: 0; }
.news-dot { width: 5px; height: 5px; border-radius: 50%; background: var(--olive); }
.news-item { display: flex; align-items: center; gap: 22px; min-height: 36px; padding-block: 5px; text-decoration: none; line-height: 1.6; }
.news-item + .news-item { margin-top: 8px; }
.news-item time { flex: 0 0 auto; color: #96907a; font: 0.6rem var(--mono); }
.news-title { min-width: 0; overflow-wrap: anywhere; font-size: 0.8rem; }.news-arrow { margin-left: auto; color: var(--olive); }
.news-item:hover .news-title { text-decoration: underline; text-underline-offset: 4px; }
.news-empty { margin: 4px 0; color: var(--muted); font-size: 0.75rem; }
.hero { display: grid; grid-template-columns: 1.15fr 1fr; align-items: center; gap: 64px; padding-block: 84px 72px; }
.hero-eyebrow { display: flex; align-items: center; gap: 12px; font-size: 0.6rem; letter-spacing: 0.12em; }
.small-cross { font-size: 1.1rem; color: var(--olive); }
h1 { margin: 30px 0 20px; font-size: clamp(2.25rem, 3.7vw, 3.7rem); line-height: 1.32; font-weight: 500; letter-spacing: -0.045em; }
h1 em { color: var(--olive); font: italic 1.16em/1.1 Georgia, serif; letter-spacing: -0.05em; }
.title-period { color: var(--olive); }
.identity-en { color: #797461; margin: 0; font: 0.8rem/1.75 var(--mono); letter-spacing: -0.03em; }
.hero-statement { display: flex; align-items: center; gap: 18px; margin-top: 30px; }
.statement-line { flex: 0 0 2px; height: 44px; background: var(--olive); }
.hero-statement p { margin: 0; color: #666253; font-size: 0.95rem; line-height: 1.9; }
.hero-actions { display: flex; align-items: center; gap: 26px; margin-top: 30px; }
.hero-actions a { display: flex; align-items: center; justify-content: space-between; gap: 32px; padding: 13px 18px; font-size: 0.8rem; text-decoration: none; transition: background 160ms; }
.primary-link { background: var(--ink); color: var(--paper-light); border: 1px solid var(--ink); }
.primary-link:hover { background: #55543a; }
.hero-actions .secondary-link { padding-inline: 0; border-bottom: 1px solid var(--rule); gap: 22px; }
.system-sheet { position: relative; margin: 0; padding: 20px; border: 1px solid #c9c3af; background: #faf8f0d9; box-shadow: 6px 7px 0 #e6e0d1, 0 8px 28px #3c382709; transform: rotate(1deg); }
.system-sheet::before { content: ''; position: absolute; top: -12px; right: 40px; width: 76px; height: 25px; background: #c8c3a867; transform: rotate(-7deg); }
.sheet-top, .sheet-bottom { display: flex; justify-content: space-between; gap: 10px; color: #89826e; font: 0.5rem/1.6 var(--mono); letter-spacing: 0.08em; }
.sheet-top { border-bottom: 1px solid var(--rule); padding-bottom: 12px; }
.sheet-bottom { padding-top: 15px; border-top: 1px solid var(--rule); font-size: 0.45rem; }
.system-drawing { position: relative; margin: 16px auto 0; width: 100%; aspect-ratio: 400 / 350; }
.drawing-grid { position: absolute; inset: 16px 0; opacity: 0.6; background-image: radial-gradient(#c3bdac 0.7px, transparent 0.7px); background-size: 13px 13px; }
.cycle-lines { position: absolute; inset: 0; width: 100%; height: 100%; color: #858565; }
.system-node { position: absolute; width: 35%; text-align: center; padding: 12px 4px; background: #faf8f0; border: 1px solid #d8d3c0; }
.system-node strong { display: block; font-size: clamp(0.85rem, 1.1vw, 1rem); font-weight: 500; margin: 8px 0; }
.node-index { display: block; color: var(--olive); font: 0.43rem var(--mono); letter-spacing: 0.03em; }
.system-node small { display: block; font-size: 0.56rem; color: #938c77; }
.node-physics { top: 4%; left: 2%; }.node-model { top: 4%; right: 2%; }
.node-ai { bottom: 4%; right: 2%; }.node-feedback { bottom: 4%; left: 2%; }
.model-animation { position: absolute; left: 34%; top: 33%; width: 32%; height: 34%; object-fit: contain; mix-blend-mode: multiply; opacity: 0.72; }
figcaption { margin: 16px 0 22px; text-align: center; color: #77715d; font-size: 0.75rem; }
.loop-symbol { margin-right: 6px; font-size: 1.1rem; color: var(--olive); }
.discipline-strip { display: flex; justify-content: space-between; align-items: center; gap: 20px; padding: 22px 0; border-top: 1px solid var(--rule); border-bottom: 1px solid var(--rule); font: 0.7rem var(--mono); color: #6d6958; }
.strip-label { font-size: 0.5rem; letter-spacing: 0.08em; color: #9a937e; }.strip-plus { color: #a4a08a; }
.perspectives { padding-block: 85px 0; }.section-heading { display: flex; justify-content: space-between; align-items: flex-end; gap: 30px; margin-bottom: 32px; }
h2 { margin: 12px 0 0; font-size: clamp(1.5rem, 2.2vw, 2rem); font-weight: 500; letter-spacing: -0.03em; }
.section-aside { margin: 0; font-size: 0.78rem; line-height: 1.8; color: var(--muted); }
.perspective-grid { display: grid; grid-template-columns: repeat(3, 1fr); border: 1px solid var(--rule); background: #faf8f04d; }
.perspective-card { padding: 26px 28px 24px; }.perspective-card + .perspective-card { border-left: 1px solid var(--rule); }
.card-top { display: flex; align-items: center; justify-content: space-between; color: #89836d; font: 0.55rem var(--mono); letter-spacing: 0.07em; }
.card-symbol { font: 2.4rem/1 Georgia, serif; color: #969575; }
.perspective-card h3 { font-weight: 500; font-size: 1.15rem; margin: 18px 0 12px; }
.perspective-card p { margin: 0; color: #7d7765; font-size: 0.8rem; line-height: 2; }
.card-annotation { border-top: 1px dashed var(--rule); margin-top: 22px; padding-top: 15px; color: var(--olive); font: 0.6rem var(--mono); }
.notes-section { padding-block: 90px 70px; }.notes-count { color: #8b856f; font: 0.55rem var(--mono); letter-spacing: 0.08em; }
.note-row { display: flex; align-items: center; gap: 30px; padding: 29px 4px; border-top: 1px solid var(--rule); text-decoration: none; transition: background 160ms; }
.note-row:last-of-type { border-bottom: 1px solid var(--rule); }.note-row:hover { background: #eae6d766; }
.note-number { align-self: flex-start; padding-top: 3px; color: #9a947e; font: 0.65rem var(--mono); }
.note-content { flex: 1; }.note-content .eyebrow { font-size: 0.5rem; letter-spacing: 0.1em; }
.note-content h3 { margin: 10px 0; font-size: 1.15rem; font-weight: 500; }
.note-content p { color: var(--muted); font-size: 0.78rem; line-height: 1.8; margin: 0; max-width: 660px; }
.note-label { padding: 5px 10px; border: 1px solid var(--rule); color: #87816d; font-size: 0.6rem; white-space: nowrap; }.note-arrow { font-size: 1.25rem; color: var(--olive); }
.notebook-end { margin: 42px 0 0; color: #969079; font-size: 0.76rem; text-align: center; }.notebook-end span { color: var(--olive); padding-right: 10px; }
@media (min-width: 1500px) { .hero { gap: 100px; } }
@media (max-width: 1000px) {
  .hero { gap: 36px; }.page-width { width: calc(100% - 64px); }
  .system-sheet { padding: 14px; }.sheet-top { font-size: 0.43rem; }.system-node { padding: 9px 3px; }.node-index { font-size: 0.36rem; }
  .strip-label { display: none; }.perspective-card { padding: 24px 20px; }
}
@media (max-width: 760px) {
  .news-column { grid-template-columns: 1fr; gap: 10px; padding-block: 20px; }
  .news-item { gap: 14px; min-height: 44px; }.news-title { font-size: 0.75rem; }
  .page-width { width: calc(100% - 40px); }.hero { grid-template-columns: 1fr; padding-block: 44px 42px; gap: 48px; }
  h1 { font-size: clamp(1.8rem, 7vw, 3.3rem); margin-top: 24px; }.hero-copy { max-width: 560px; }
  .system-sheet { width: min(460px, 94%); margin: 0 auto; padding: 20px; }
  .node-index { font-size: 0.43rem; }.system-node { padding: 12px 4px; }.system-node strong { font-size: 1rem; }
  .system-node small { font-size: 0.48rem; white-space: nowrap; }
  .node-index { font-size: 0.37rem; }
  .discipline-strip { gap: 12px; flex-wrap: wrap; justify-content: center; font-size: 0.55rem; }
  .perspectives { padding-top: 60px; }.section-heading { align-items: flex-start; gap: 18px; }.section-aside { display: none; }
  .perspective-grid { grid-template-columns: 1fr; }.perspective-card { padding: 24px; }
  .perspective-card + .perspective-card { border-left: 0; border-top: 1px solid var(--rule); }.perspective-card h3 { margin-top: 6px; }
  .notes-section { padding-block: 60px 48px; }.note-row { gap: 16px; padding-block: 24px; }.note-label { display: none; }
  .note-content h3 { font-size: 1rem; line-height: 1.6; }.note-content p { font-size: 0.75rem; }.notes-count { font-size: 0.45rem; padding-top: 4px; }
  .notebook-end { font-size: 0.65rem; line-height: 1.8; }.hero-eyebrow { font-size: 0.5rem; }
}
@media (prefers-reduced-motion: reduce) { .model-animation { display: none; } }

/* Keep the notebook detail readable; narrow screens reflow instead of shrinking type. */
.hero-eyebrow { font-size: 0.8rem; letter-spacing: 0.04em; }
.identity-heading-en { font-size: clamp(2rem, 3.25vw, 3.2rem); line-height: 1.2; }
.identity-en { max-width: 38rem; font-size: 0.95rem; line-height: 1.8; }
.hero-statement p { font-size: 1.1rem; line-height: 1.9; max-width: 32rem; }
.hero-actions { flex-wrap: wrap; gap: 20px; }
.hero-actions a { font-size: 1rem; gap: 22px; min-height: 48px; }
.sheet-top { font-size: 0.75rem; letter-spacing: 0.03em; }
.sheet-bottom { font-size: 0.75rem; letter-spacing: 0; overflow-wrap: anywhere; }
.system-node { width: 40%; padding: 10px 6px; }
.system-node strong { font-size: 1rem; line-height: 1.4; }
.node-index { font-size: 0.75rem; line-height: 1.4; overflow-wrap: anywhere; }
.system-node small { font-size: 0.75rem; white-space: normal; line-height: 1.5; }
.system-drawing { aspect-ratio: 400 / 390; }
figcaption { font-size: 0.95rem; line-height: 1.7; }
.discipline-strip { font-size: 0.9rem; flex-wrap: wrap; }
.strip-label { font-size: 0.75rem; }
.section-aside { font-size: 1rem; line-height: 1.8; max-width: 22rem; }
.perspective-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
.card-top { font-size: 0.8rem; line-height: 1.6; gap: 12px; }
.perspective-card h3 { font-size: 1.3rem; line-height: 1.5; }
.perspective-card p { font-size: 1.05rem; line-height: 1.85; color: #686354; }
.card-annotation { font-size: 0.85rem; line-height: 1.7; }
.notes-count { font-size: 0.85rem; white-space: nowrap; }
.note-content { min-width: 0; }
.note-content .eyebrow { font-size: 0.8rem; }
.note-content h3 { font-size: 1.3rem; line-height: 1.6; }
.note-content p { font-size: 1rem; line-height: 1.85; color: #686354; overflow-wrap: anywhere; }
.note-number { font-size: 0.85rem; }.note-label { font-size: 0.85rem; }
.notebook-end { font-size: 1rem; line-height: 1.8; }
.news-heading h2 { font-size: 0.9rem; }.news-heading h2 span { font-size: 0.85rem; }
.news-title { font-size: 1rem; }.news-item time { font-size: 0.85rem; }.news-empty { font-size: 1rem; }
@media (max-width: 1000px) {
  .hero { grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); gap: 32px; }
  .system-sheet { padding: 16px; }
}
@media (max-width: 760px) {
  .hero { grid-template-columns: 1fr; }
  .hero-statement p, .perspective-card p { font-size: 1.05rem; }
  .perspective-grid { grid-template-columns: 1fr; }
  .section-heading { flex-wrap: wrap; }
  .note-label { display: none; }
  .hero-eyebrow { font-size: 0.75rem; }
}
@media (max-width: 600px) {
  .system-drawing { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 16px; aspect-ratio: auto; }
  .cycle-lines { display: none; }
  .system-node { position: relative; width: 100%; inset: auto; padding: 14px 8px; }
  .system-node strong { font-size: 1rem; }.system-node small { font-size: 0.8rem; }
  .model-animation { position: relative; inset: auto; grid-column: 1 / -1; width: 140px; height: 90px; margin-inline: auto; }
  .sheet-top { flex-wrap: wrap; }.identity-heading-en { font-size: clamp(1.8rem, 7.5vw, 2.8rem); }
  .news-item { flex-wrap: wrap; gap: 10px 14px; }.news-title { flex: 1; }
}
</style>
