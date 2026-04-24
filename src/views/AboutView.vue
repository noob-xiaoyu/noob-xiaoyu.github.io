<!-- AboutView.vue -->
<script setup>
import backIcon from '@/components/icons/back-icon.vue'
import qqIcon from '@/components/icons/qq-icon.vue'
import GithubIcon from '@/components/icons/GithubIcon.vue'
import qqmailIcon from '@/components/icons/qqmail-icon.vue'
import gmailIcon from '@/components/icons/gmail-icon.vue'
</script>
<template>
  <div class="home-container">
    <div class="info-card">
      <div class="project-card-header">
        <h1>关于我</h1>
        <router-link to="/">
          <el-button class="action-btn" :icon="backIcon" size="large">返回</el-button>
        </router-link>
      </div>
      <el-divider />
      <div style="display: flex; align-items: center; gap: 10px">
        <h3 style="margin: 0; font-size: 1.11em">笨蛋小雨</h3>
        <p style="margin: 0">是一个好吃懒做大笨蛋杂鱼!</p>
      </div>
      <h2>联系我</h2>
      <ul>
        <li>
          <strong>QQ:</strong>
          <div class="button-group">
            <el-row :gutter="16">
              <el-col :span="8">
                <el-button
                  class="action-btn"
                  size="large"
                  :icon="qqIcon"
                  tag="a"
                  href="https://qm.qq.com/q/OB7LzPzZo6"
                  target="_blank"
                  rel="noopener noreferrer"
                  style="text-decoration: none"
                  >笨蛋小雨喵</el-button
                >
              </el-col>
            </el-row>
          </div>
        </li>
        <li>
          <strong>GitHub:</strong>
          <div class="button-group">
            <el-row :gutter="16">
              <el-col :span="8">
                <el-button
                  class="action-btn"
                  size="large"
                  :icon="GithubIcon"
                  tag="a"
                  href="https://github.com/noob-xiaoyu"
                  target="_blank"
                  rel="noopener noreferrer"
                  style="text-decoration: none"
                  >noob-xiaoyu
                </el-button>
              </el-col>
            </el-row>
          </div>
        </li>
        <li>
          <strong>Mail:</strong>
          <div class="button-group">
            <el-row :gutter="16">
              <el-col :span="8">
                <el-button
                  class="action-btn"
                  size="large"
                  :icon="qqmailIcon"
                  tag="a"
                  href="mailto:1372448375@qq.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style="text-decoration: none"
                  >QQ邮箱</el-button
                >
              </el-col>
              <el-col :span="8">
                <el-button
                  class="action-btn"
                  size="large"
                  :icon="gmailIcon"
                  tag="a"
                  href="mailto:kclon29@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style="text-decoration: none"
                  >Google邮箱</el-button
                >
              </el-col>
            </el-row>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
