<script setup>
import { ref } from 'vue'
import backIcon from '@/components/icons/back-icon.vue'
import GithubIcon from '@/components/icons/GithubIcon.vue'
const techStack = ref(['C++','WebView2','Windows API','JSON','Vue 3','Vite','Element Plus'])
const links = ref({
  github: 'https://github.com/noob-xiaoyu/SteamAccountManager',
})
</script>

<template>
  <div class="projects-container">
    <div class="info-card projects-card" v-show="!dialogVisible">
      <div class="project-card-header">
        <h1>SteamAccountManager</h1>
        <router-link to="/projects">
          <el-button class="action-btn" :icon="backIcon" size="large">返回</el-button>
        </router-link>
      </div>
      <el-divider />
      <div>
        <h1>✨ 功能特性</h1>
        <ul>
          <h2>🎯 账号管理</h2>
          <ul>
            <li><strong>分类管理</strong>：支持主账号、完美账号、5E账号、普通账号四种分类</li>
            <li><strong>批量操作</strong>：支持批量添加、批量删除、批量编辑</li>
            <li><strong>状态管理</strong>：账号状态标识（正常、冷却中、封禁、未知）</li>
            <li><strong>自动恢复</strong>：自动检测并恢复到期冷却账号</li>
            <li><strong>密码管理</strong>：密码字段加密显示/隐藏，支持复制功能</li>
          </ul>
          <h2>🔐 登录功能</h2>
          <ul>
            <li><strong>一键登录</strong>：快速切换到指定 Steam 账号</li>
            <li><strong>自动登录</strong>：自动设置 Windows 注册表实现 Steam 自动登录</li>
            <li><strong>安全处理</strong>：自动结束 Steam 进程并重新启动</li>
            <li><strong>兼容性</strong>：支持 Steam 启动参数优化</li>
          </ul>
          <h2>🎨 界面体验</h2>
          <ul>
            <li><strong>深色/浅色主题</strong>：支持系统级主题切换</li>
            <li><strong>自定义窗口</strong>：无边框窗口设计，支持拖拽、缩放</li>
            <li><strong>响应式布局</strong>：侧边栏可折叠，适配不同屏幕尺寸</li>
            <li><strong>键盘快捷键</strong>：支持 Ctrl+A、上下键导航、Delete 等快捷键</li>
            <li><strong>右键菜单</strong>：上下文菜单提供快速操作</li>
          </ul>
          <h2>📊 数据管理</h2>
          <ul>
            <li><strong>本地存储</strong>：账号数据以 JSON 格式存储在本地</li>
            <li><strong>配置持久化</strong>：主题、侧边栏状态等配置自动保存</li>
            <li><strong>数据隔离</strong>：不同分类账号数据分开存储</li>
            <li><strong>备份兼容</strong>：支持旧版本数据格式自动升级</li>
          </ul>
        </ul>
        <h1>🚀 快速开始</h1>
        <h3>环境要求</h3>
        <ul>
          <li><strong>操作系统</strong>: Windows 10/11 (64位)</li>
          <li><strong>运行时</strong>: Microsoft Edge WebView2 Runtime</li>
          <li><strong>Steam 客户端</strong>: 已安装最新版 Steam</li>
        </ul>
        <h3>下载与运行</h3>
        <ol>
          <li>
            <p>从 <a href="https://github.com/noob-xiaoyu/SteamAccountManager/releases/latest" target="_blank">Releases</a> 下载最新版本的 <code>SteamAccountManager.exe</code></p>
          </li>
          <li>
            <p>运行 <code>SteamAccountManager.exe</code>（确保已安装 WebView2 Runtime）</p>
          </li>
          <li>
            <p>使用批量添加功能导入账号数据（格式：<code>用户名----密码</code>）</p>
          </li>
          <li>
            <p>选择账号并点击“登录”按钮进行一键切换</p>
          </li>
        </ol>
        <h3>注意事项</h3>
        <ul>
          <li>首次运行需要管理员权限以修改注册表和结束进程</li>
          <li>账号密码以加密形式存储在本地 JSON 文件中</li>
          <li>频繁切换账号可能触发 Steam 安全验证</li>
        </ul>
      </div>
      <el-divider />
      <h3>技术栈</h3>
      <div class="tech-stack">
        <el-tag v-for="tech in techStack" :key="tech" size="large" style="margin: 4px">
          {{ tech }}
        </el-tag>
      </div>
      <h3 v-if="links && Object.keys(links).length > 0">相关链接</h3>
      <div style="display: flex; gap: 5px; flex-wrap: wrap">
        <el-col>
          <el-button
            v-if="links.github"
            tag="a"
            :href="links.github"
            target="_blank"
            class="action-btn"
            :icon="GithubIcon"
            style="text-decoration: none"
          >
            GitHub
          </el-button>
        </el-col>
        <el-col>
          <el-button
            v-if="links.live"
            tag="a"
            :href="links.live"
            target="_blank"
            type="primary"
            class="action-btn"
            style="text-decoration: none"
            plain
          >
            在线预览
          </el-button>
        </el-col>
      </div>
    </div>
  </div>
</template>
