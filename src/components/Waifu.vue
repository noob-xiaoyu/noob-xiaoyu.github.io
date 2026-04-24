<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const oml2dRef = ref(null)
let oml2dInstance = null

onMounted(async () => {
  // 移动端不加载
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent,
  )
  if (isMobile || window.innerWidth < 768) return

  const { loadOml2d } = await import('oh-my-live2d')

  // 模型基础路径
  const modelBase = 'https://raw.githubusercontent.com/noob-xiaoyu/toshiki-live2d/refs/heads/master'

  const models = [
    {
      name: 'HK416',
      path: `${modelBase}/%E5%B0%91%E5%A5%B3%E5%89%8D%E7%BA%BF%20girls%20Frontline/live2dnew/hk416_3401/normal/normal.model3.json`,
      scale: 0.1,
      position: [0, 20],
      stageStyle: { height: 500 },
    },
  ]

  oml2dInstance = loadOml2d({
    parentElement: oml2dRef.value,
    models,
    tips: {
      idleTips: {
        wordTheDay: (data) => data.hitokoto,
      },
    },
    menus: {
      disable: false,
    },
    transitionTime: 0.6,
    sayHello: false,
  })
})

onUnmounted(() => {
  if (oml2dInstance) {
    // 移除DOM元素以清理
    if (oml2dRef.value) {
      oml2dRef.value.innerHTML = ''
    }
  }
})
</script>

<template>
  <div class="waifu-container" ref="oml2dRef"></div>
</template>

<style scoped>
.waifu-container {
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 9999;
}
</style>
