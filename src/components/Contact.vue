<template>
  <footer id="contact" class="desk-container">
    <div class="desk-edge-shadow"></div>

    <div class="contact-wrapper">
      <!-- 左侧：信纸（保持不变） -->
      <div class="paper-main">
        <p class="contact-eyebrow">03 / {{ t('建立连接', "LET'S CONNECT") }}</p>
        <h2 class="title-underline">{{ t('从一个问题开始。', 'Start with a question.') }}</h2>
        <div class="content-body">
          <p class="code-comment">{{ t('如果你也在思考物理、计算或智能系统，欢迎交换一个问题、一个想法，或一个合作的可能。', 'Thinking about physics, computation, or intelligent systems? Let’s exchange a question, an idea, or a possibility for collaboration.') }}</p>
          <p class="code-line">{{ t('物理 → 计算 → 智能', 'physics → computation → intelligence') }}</p>
          <div class="contact-list">
            <div class="item">
              <span class="key">{{ t('邮箱：', 'Email:') }}</span>
              <a href="mailto:beauty7chaser@gmail.com" class="val">beauty7chaser@gmail.com</a>
            </div>
            <div class="item">
              <span class="key">Github:</span>
              <a href="https://github.com/BeautyChaser" target="_blank" rel="noopener noreferrer" class="val">@BeautyChaser</a>
            </div>
          </div>
        </div>
      </div>

      <!-- 右侧：名片（动态升级版） -->
      <div class="business-card">
        <div class="card-pattern">
          <!-- 动态标题：根据 activeKey 显示对应文字 -->
          <h3 class="card-header" :style="{ color: activeColor }">
            {{ activeLabel }}
          </h3>

          <div class="icon-grid">
            <!-- 循环渲染按钮 -->
            <button
                v-for="(info, key) in socialData"
                :key="key"
                type="button"
                class="btn"
                :class="{ 'active': activeKey === key }"
                :aria-pressed="activeKey === key"
                :aria-label="t('查看', 'View ') + info.name"
                @click="handleIconClick(key)"
                :title="t('点击查看', 'View ') + info.name"
            >
              {{ info.iconText }}
            </button>
          </div>

          <a v-if="activeKey && socialData[activeKey].profileUrl" class="platform-home-link active-profile-link" :href="socialData[activeKey].profileUrl" target="_blank" rel="noopener noreferrer">{{ t('前往主页', 'Visit profile') }} ↗</a>

          <div class="stamp-seal">{{ t('一起构建', "LET'S BUILD") }}</div>

          <!-- 复制提示 -->
          <transition name="fade">
            <span v-if="copyMessage" class="copy-tip" role="status">{{ copyMessage }}</span>
          </transition>
        </div>
      </div>
    </div>

    <div class="wood-footer">
      <p class="copy-text">© {{ new Date().getFullYear() }} {{ t('由 Callingforwind 设计。', 'DESIGNED BY Callingforwind.') }}</p>
    </div>
  </footer>
</template>

<script setup>
import { ref, computed, onUnmounted } from 'vue';
import { t } from '@/i18n.js';
import newsConfig from '../../config/news-sources.json';
const profile = id => newsConfig.sources.find(source => source.id === id).profileUrl;

// 1. 配置所有社交媒体的数据
const socialData = computed(() => ({
  wx: {
    name: t('微信账号', 'WeChat account'),
    iconText: 'Wx',
    label: 'Beauty7Chaser',
    color: '#2e7d32' // 微信绿
  },
  in: {
    name: t('LinkedIn 账号', 'LinkedIn account'),
    iconText: 'In',
    label: 'Jinfeng Zhao',
    profileUrl: profile('linkedin'),
    color: '#0077b5' // 领英蓝
  },
  rss: {
    name: t('QQ 账号', 'QQ account'),
    iconText: 'QQ',
    label: '584830702',
    color: '#d71b1b' // QQ红
  },
}));

const activeKey = ref(null); // 当前选中的 key (null, 'wx', 'tw'...)
const copyState = ref('');
const copiedText = ref('');
const copyMessage = computed(() => copyState.value === 'copied' ? t('已复制：', 'Copied: ') + copiedText.value : copyState.value === 'manual' ? t('账号已显示，可手动复制', 'Account shown. You can copy it manually.') : '');
let copyTimer;

// 2. 计算属性：动态获取显示的文字
const activeLabel = computed(() => {
  if (!activeKey.value) return t('建立连接()', 'Connect()');
  return socialData.value[activeKey.value].label;
});

// 3. 计算属性：动态获取文字颜色
const activeColor = computed(() => {
  if (!activeKey.value) return '#333';
  return socialData.value[activeKey.value].color;
});

// 4. 点击处理函数
const handleIconClick = async (key) => {
  clearTimeout(copyTimer);
  copyState.value = '';
  if (activeKey.value === key) {
    // 如果点击的是已经选中的，则切换回初始状态
    activeKey.value = null;
  } else {
    activeKey.value = key;
    // 自动复制到剪贴板
    const textToCopy = socialData.value[key].label;
    try {
      await navigator.clipboard.writeText(textToCopy);
      copiedText.value = textToCopy;
      copyState.value = 'copied';
    } catch {
      copyState.value = 'manual';
    }
    copyTimer = setTimeout(() => { copyState.value = ''; }, 2000);
  }
};
onUnmounted(() => clearTimeout(copyTimer));
</script>

<style scoped>
.platform-home-link { color: var(--olive); font-size: 0.95rem; text-underline-offset: 5px; }
.active-profile-link { display: inline-block; margin-top: 18px; min-height: 36px; }
/* --- 桌面与背景保持之前的木纹设计 --- */
.desk-container {
  padding: 80px 32px 36px;
  position: relative;
  background-color: #3e2723;
  background-image:
      radial-gradient(circle at center, rgba(0,0,0,0) 20%, rgba(0,0,0,0.4) 100%),
      repeating-linear-gradient(90deg, rgba(255,255,255,0.01) 0px, rgba(255,255,255,0.01) 1px, transparent 1px, transparent 30px),
      linear-gradient(90deg, #3e2723 0%, #4e342e 25%, #3e2723 50%, #4e342e 75%, #3e2723 100%);
  width: 100%;
  font-family: 'Courier New', Courier, monospace;
}

.desk-edge-shadow {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 30px;
  background: linear-gradient(to bottom, rgba(0,0,0,0.4), transparent);
}

.contact-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  flex-wrap: wrap;
}

/* --- 纸张与物理阴影 --- */
.paper-main, .business-card {
  background: #fdfaf3;
  border: 1px solid rgba(0,0,0,0.1);
  box-shadow:
      0 1px 1px rgba(0,0,0,0.3),
      0 10px 25px rgba(0,0,0,0.4),
      0 20px 50px rgba(0,0,0,0.3);
}

.paper-main {
  padding: 42px;
  min-width: 0;
  transform: rotate(-1.5deg);
  flex: 1;
}

.business-card {
  width: 340px; /* 稍微加宽一点适应较长的文字 */
  padding: 12px;
  transform: rotate(2.5deg);
}

.card-pattern {
  border: 1px dashed #d0d0d0;
  padding: 40px 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: radial-gradient(#e0e0e0 1px, transparent 1px);
  background-size: 10px 10px;
  position: relative;
  min-height: 220px;
}

/* --- 动态标题 --- */
.card-header {
  font-size: 1.4rem;
  margin-bottom: 25px;
  height: 35px;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  text-align: center;
  word-break: break-all;
}

/* --- 按钮矩阵 --- */
.icon-grid {
  display: flex;
  gap: 10px;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
}

.btn {
  width: 48px;
  height: 48px;
  border: 2px solid #333;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: #333;
  font-weight: bold;
  transition: all 0.2s;
  background: transparent;
}

/* 激活状态：反色 */
.btn.active {
  background: #333;
  color: #fff;
  transform: scale(0.9);
}

.btn:hover:not(.active) {
  transform: translateY(-5px);
  box-shadow: 0 5px 10px rgba(0,0,0,0.15);
}

/* --- 其他装饰项 --- */
.title-underline {
  font-family: var(--serif);
  font-size: 1.9rem; margin: 20px 0 24px;
  font-weight: 500;
  display: inline-block; border-bottom: 1px solid #b7b09b;
  padding-bottom: 12px;
}

.contact-eyebrow { color: #88816b; font-size: 0.6rem; letter-spacing: 0.12em; margin: 0; }
.code-comment { color: #817b68; font: 0.85rem/2 var(--serif); max-width: 450px; }
.code-line { color: #7c7b53; margin: 20px 0 28px; font-size: 0.7rem; }
.contact-list .item { margin-bottom: 12px; }
.key { font-weight: bold; color: #999; margin-right: 10px; }
.val { color: #444032; text-decoration: none; border-bottom: 1px solid #ccc; overflow-wrap: anywhere; }
.contact-list { font-size: 0.8rem; }

.stamp-seal {
  margin-top: 30px;
  border: 3px solid #b71c1c; color: #b71c1c;
  padding: 4px 12px; font-weight: 900;
  transform: rotate(-15deg); opacity: 0.6;
}

.copy-tip {
  position: absolute;
  top: 5px;
  font-size: 0.7rem;
  background: #333;
  color: #fff;
  padding: 2px 10px;
  border-radius: 2px;
}

/* 动画 */
.fade-enter-active, .fade-leave-active { transition: opacity 0.3s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

.wood-footer { margin-top: 56px; text-align: center; }
.copy-text { font-size: 0.65rem; color: rgba(255,255,255,0.48); }

@media (max-width: 768px) {
  .desk-container { padding: 48px 24px 24px; }
  .contact-wrapper { flex-direction: column; gap: 28px; }
  .paper-main { padding: 28px; flex: auto; }
  .title-underline { font-size: 1.65rem; }
  .contact-list { font-size: 0.7rem; }
  .paper-main, .business-card { transform: rotate(0); width: 100%; min-width: unset; }
}
.code-comment { font-size: 1.05rem; line-height: 1.9; color: #686354; }
.contact-eyebrow { font-size: 0.8rem; }.code-line { font-size: 0.9rem; line-height: 1.8; }
.contact-list { font-size: 1rem; line-height: 1.9; }
.copy-text { font-size: 0.85rem; line-height: 1.8; }
.copy-tip { font-size: 0.85rem; line-height: 1.5; max-width: calc(100% - 20px); overflow-wrap: anywhere; text-align: center; }
.account-link { font: inherit; padding: 0; background: none; border: 0; border-bottom: 1px solid #ccc; cursor: pointer; text-align: left; }
@media (max-width: 768px) { .paper-main { padding: 28px 24px; }.contact-list { font-size: 1rem; } }
</style>
