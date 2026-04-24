<script setup>
import { RouterView } from 'vue-router'
import { ref, onMounted, watch } from 'vue'
import { Sunny, Moon } from '@element-plus/icons-vue' // 1. 导入图标
import { useTheme } from '@/composables/useTheme.js' // 2. 导入 useTheme
import Waifu from '@/components/Waifu.vue' // 导入看板娘组件

// 使用 import.meta.glob 获取视频文件的 URL 列表（不会打包到 JS 中）
const videoModules = import.meta.glob('/src/assets/video/*.webm', {
  eager: true,
  query: '?url',
  import: 'default',
})
const videos = Object.values(videoModules)

// 视频加载失败时的备用背景图片
import fallbackBg from '@/assets/image/4k.webp'

// --- 视频背景逻辑 ---
const videoUrl = ref('')
const videoLoading = ref(true)
const videoError = ref(false)
const videoRef = ref(null)

// 设置随机视频（扩展名故意写错以触发错误状态）
const setRandomVideo = () => {
  videoLoading.value = true
  videoError.value = false
  const randomIndex = Math.floor(Math.random() * videos.length)
  videoUrl.value = `${videos[randomIndex]}?t=${Date.now()}`
}

// 视频就绪
const handleVideoLoaded = () => {
  videoLoading.value = false
  videoError.value = false
}

// 视频加载失败
const handleVideoError = () => {
  videoLoading.value = false
  videoError.value = true
}

// 重试
const handleRetry = () => {
  setRandomVideo()
}

onMounted(() => {
  setRandomVideo()
})

// --- 主题切换逻辑 (现在移动到这里) ---
const { theme, toggleTheme } = useTheme() // 3. 获取主题状态和切换函数

// 监听主题变化，并更新 <body> 的 class (保持不变)
watch(
  theme,
  (newTheme, oldTheme) => {
    if (oldTheme) {
      document.body.classList.remove(`${oldTheme}-theme`)
    }
    document.body.classList.add(`${newTheme}-theme`)
  },
  { immediate: true },
)
</script>

<template>
  <!-- 视频背景层 -->
  <div class="video-background">
    <video
      ref="videoRef"
      :src="videoUrl"
      autoplay
      muted
      loop
      playsinline
      @loadeddata="handleVideoLoaded"
      @error="handleVideoError"
    ></video>
  </div>

  <!-- 视频加载状态 (独立层级，确保可点击) -->
  <div v-if="videoLoading" class="video-loading">
    <el-icon class="is-loading"
      ><svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
        <path
          fill="currentColor"
          d="M512 0a512 512 0 1 0 512 512A512 512 0 0 0 512 0zm0 960A448 448 0 1 1 512 64a448 448 0 0 1 0 896z"
        ></path>
        <path
          fill="currentColor"
          d="M725.1 686.7a32 32 0 0 1-45.2 45.2l-192-192a32 32 0 0 1 0-45.2l192-192a32 32 0 0 1 45.2 45.2L565.2 512l159.9 174.7z"
        ></path></svg
    ></el-icon>
  </div>

  <!-- 视频加载失败时显示备用背景 -->
  <div v-if="videoError" class="video-backup-bg" :style="{ backgroundImage: `url(${fallbackBg})` }"></div>

  <!-- 视频加载错误提示 (独立层级，确保可点击) -->
  <div v-if="videoError" class="video-error">
    <el-icon
      ><svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
        <path
          fill="currentColor"
          d="M512 0a512 512 0 1 0 512 512A512 512 0 0 0 512 0zm0 960a448 448 0 1 1 448-448 448 448 0 0 1-448 448zm-45.2-512 192-192a32 32 0 1 1 45.2 45.2L565.2 512l159.9 174.7a32 32 0 0 1-45.2 45.2l-192-192a32 32 0 0 1 0-45.2z"
        ></path></svg
    ></el-icon>
    <span>视频加载失败</span>
    <el-button size="small" @click="handleRetry">重试</el-button>
  </div>

  <!-- 内容覆盖层 -->
  <div class="content-overlay">
    <RouterView v-slot="{ Component }">
      <Transition name="fade" mode="out-in">
        <component :is="Component" />
      </Transition>
    </RouterView>
  </div>

  <!-- 4. 将主题切换按钮添加到这里 -->
  <el-button
    class="theme-toggle"
    :icon="theme === 'light' ? Moon : Sunny"
    @click="toggleTheme"
    circle
    size="large"
  />

  <div class="global-footer">© 2025 Noob_Xiaoyu. All Rights Reserved.</div>

  <!-- 看板娘组件 -->
  <Waifu />
</template>
