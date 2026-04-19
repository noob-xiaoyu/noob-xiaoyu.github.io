<script setup>
import { ref } from 'vue'
import ProjectCard from '@/components/ProjectCard.vue'
import backIcon from '@/components/icons/back-icon.vue'
import bIcon from '@/assets/image/icon/svg/b.svg'
import launcherIcon from '@/assets/image/icon/svg/launcher.svg'
import yt_dlp_gui_Icon from '@/assets/image/icon/dlp.ico'
import SteamAccountManager_Icon from '@/assets/image/icon/SteamAccountManager.ico'
import imguiIcon from '@/assets/image/icon/imgui.png'
import vsIcon from '@/assets/image/icon/Visual Studio 2022.png'

// 1. 完整项目数据
const projectList = ref([
  {
    id: 'personal-website',
    icon: 'https://cdn.jsdelivr.net/gh/noob-xiaoyu/image@main/hoshino.jpg',
    title: '个人网站',
    shortDescription: '就是本网站，使用 Vue 3 + Element Plus 构建。',
    to: 'projects/personal-website',
  },
  {
    id: 'Imgui-menu',
    icon: imguiIcon,
    title: 'Imgui-menu',
    shortDescription:
      '这是一款基于 ImGui 的现代化悬浮菜单框架，它集成了辉光、鼠标拖尾等丰富视觉特效和计时器等实用工具，并提供强大的主题与配置系统。',
    to: 'projects/Imgui-menu',
  },
  {
    id: 'launcher for napcat&yunzai',
    icon: launcherIcon,
    title: 'launcher for napcat&yunzai',
    shortDescription: '这是一个在 Windows 电脑上，让你能一键启动和运行 QQ 机器人的“傻瓜式”工具。',
    techStack: ['C++'],
    to: 'projects/launcher',
  },
  {
    id: 'yt-dlp-gui',
    icon: yt_dlp_gui_Icon,
    title: 'yt-dlp-gui',
    shortDescription:
      '一个为 yt-dlp 开发的图形用户界面 (GUI) 工具，让不熟悉命令行的用户也能轻松使用其强大的视频下载功能。',
    to: 'projects/yt-dlp-gui',
  },
  {
    id: 'SteamAccountManager',
    icon: SteamAccountManager_Icon,
    title: 'SteamAccountManager',
    shortDescription:
      '现代化的 Steam 账号管理桌面应用，支持账号分类、批量操作、自动登录、深色/浅色主题等功能。',
    to: 'projects/SteamAccountManager',
  },
  {
    id: 'Minecraft 投影文件分类',
    icon: bIcon,
    title: 'Minecraft 投影文件分类',
    shortDescription:
      '一个用于将 Minecraft Litematica 模组的投影文件按文件夹进行自动化分类整理的小工具。',
    to: 'projects/Projection_file_classification',
  },
  {
    id: 'ImageBinaryConverter',
    icon: vsIcon,
    title: 'ImageBinaryConverter',
    shortDescription:
      '一个可以在图片和二进制文件之间进行双向转换的工具，用于文件伪装、隐藏和绕过传输限制。',
    links: {
      github: 'https://github.com/noob-xiaoyu/Imgui-menu',
    },
    to: 'projects/ImageBinaryConverter',
  },
  {
    id: 'ImGui-Main',
    icon: imguiIcon,
    title: 'ImGui-Main',
    shortDescription:
      '基于 Dear ImGui 的 C++ 图形界面应用程序框架，使用 OpenGL 作为渲染后端，提供完整的 UI 控件库和渲染功能。',
    links: {
      github: 'https://github.com/noob-xiaoyu/ImGui-Main',
    },
    to: 'projects/ImGui-Main',
  },
  // {
  //   id: '',
  //   icon: '',
  //   title: '',
  //   shortDescription: '',
  //   to: '',
  // },
])
</script>

<template>
  <div class="projects-container">
    <!-- v-show="!dialogVisible" 会在弹窗出现时，通过 CSS 隐藏这个列表卡片 -->
    <div class="info-card projects-card" v-show="!dialogVisible">
      <div class="project-card-header">
        <h1>我的作品</h1>
        <router-link to="/">
          <el-button class="action-btn" :icon="backIcon" size="large">返回</el-button>
        </router-link>
      </div>
      <el-divider />
      <div class="project-list-container">
        <ProjectCard
          v-for="project in projectList"
          :key="project.id"
          :icon="project.icon"
          :iconComponent="project.iconComponent"
          :title="project.title"
          :description="project.shortDescription"
          :to="project.to"
          @viewDetails="showProjectDetails(project)"
        />
      </div>
    </div>
  </div>
</template>
