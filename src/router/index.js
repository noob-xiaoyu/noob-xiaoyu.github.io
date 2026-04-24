import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('../views/ProjectsView.vue'),
    },
    {
      path: '/download',
      name: 'download',
      component: () => import('../views/downloadView.vue'),
    },
    {
      path: '/projects/personal-website',
      name: 'personal-website',
      component: () => import('../views/projects/personal-website.vue'),
    },
    {
      path: '/projects/ImGui-menu',
      name: 'ImGui-menu',
      component: () => import('../views/projects/Imgui-menu.vue'),
    },
    {
      path: '/projects/launcher',
      name: 'launcher',
      component: () => import('../views/projects/launcher-app.vue'),
    },
    {
      path: '/projects/yt-dlp-gui',
      name: 'yt-dlp-gui',
      component: () => import('../views/projects/yt-dlp-gui.vue'),
    },
    {
      path: '/projects/SteamAccountManager',
      name: 'SteamAccountManager',
      component: () => import('../views/projects/SteamAccountManager.vue'),
    },
    {
      path: '/projects/Projection_file_classification',
      name: 'Projection_file_classification',
      component: () => import('../views/projects/Projection_file_classification.vue'),
    },
    {
      path: '/projects/ImageBinaryConverter',
      name: 'ImageBinaryConverter',
      component: () => import('../views/projects/ImageBinaryConverter.vue'),
    },
    {
      path: '/projects/ImGui-Main',
      name: 'ImGui-Main',
      component: () => import('../views/projects/ImGui-Main.vue'),
    },
  ],
})

export default router
