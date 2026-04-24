import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  base: './',
  publicDir: 'public',
  server: {
    host: '0.0.0.0',
    port: 80,
    historyApiFallback: true,
  },
  plugins: [
    vue(),
    ...(process.env.NODE_ENV === 'development' ? [vueDevTools()] : []),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    // 生产环境移除 console 和 debugger
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        // 代码分割：将第三方库拆分为独立 chunk
        manualChunks: {
          'vendor-vue': ['vue', 'vue-router'],
          'vendor-element': ['element-plus', '@element-plus/icons-vue'],
        },
      },
    },
    // 生成 chunk 大小警告的阈值
    chunkSizeWarningLimit: 500,
    // 不显示 .webm 等媒体文件的大小警告
    assetsInlineLimit: 0,
  },
})
