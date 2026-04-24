<script setup>
import backIcon from '@/components/icons/back-icon.vue'
import launcherIcon from '@/components/icons/launcher-icon.vue'
import vsIcon from '@/components/icons/Visual_Studio_2022.vue'
import EverythingIcon from '@/components/icons/EverythingIcon.vue'
import nullIcon from '@/components/icons/null.vue'
import IDEAIcon from '@/components/icons/IDEA.vue'
import msysIcon from '@/components/icons/msys.vue'
import NeatDMIcon from '@/assets/image/icon/NeatDM.webp'
import ThoriumWinIcon from '@/assets/image/icon/Thorium.webp'
import ClashPartyIcon from '@/assets/image/icon/clash.webp'
import ClashDevIcon from '@/assets/image/icon/clash-dev.webp'
import javaIcon from '@/assets/image/icon/java.webp'
import PowerToysIcon from '@/components/icons/PowerToys.vue'
</script>

<template>
  <div class="Download-container">
    <div class="info-card Download-card">
      <div class="project-card-header">
        <h1>下载</h1>
        <router-link to="/">
          <el-button class="action-btn" :icon="backIcon" size="large">返回</el-button>
        </router-link>
      </div>
      <el-divider />

      <div class="project-list-container">
        <!-- Visual Studio 2022 -->
        <a
          href="https://aka.ms/vs/17/release/vs_community.exe"
          target="_blank"
          class="download-card-link"
          download
        >
          <el-card class="project-card" shadow="hover">
            <div class="project-card-content">
              <div class="icon-container">
                <component :is="vsIcon" class="custom-svg-icon" />
              </div>
              <div class="project-details">
                <h3>Visual Studio 2022</h3>
                <p>Visual Studio 2022 Community</p>
              </div>
            </div>
          </el-card>
        </a>

        <!-- launcher for napcat&yunzai -->
        <!-- <a href="../assets/exe/launcher.exe" target="_blank" class="download-card-link" download>
          <el-card class="project-card" shadow="hover">
            <div class="project-card-content">
              <div class="icon-container">
                <component :is="launcherIcon" class="custom-svg-icon" />
              </div>
              <div class="project-details">
                <h3>launcher for napcat&yunzai</h3>
                <p>这是一个在 Windows 电脑上，让你能一键启动和运行 QQ 机器人的“傻瓜式”工具</p>
              </div>
            </div>
          </el-card>
        </a> -->

        <!-- SteamAccountManager -->
        <!-- <a
          href="src/assets/exe/SteamAccountManager.exe"
          target="_blank"
          class="download-card-link"
          download
        >
          <el-card class="project-card" shadow="hover">
            <div class="project-card-content">
              <div class="icon-container">
                <img
                  :src="SteamAccountManagerIcon"
                  alt="SteamAccountManager"
                  class="custom-svg-icon"
                />
              </div>
              <div class="project-details">
                <h3>SteamAccountManager</h3>
                <p>一个用于集中管理 Steam 账号的工具</p>
              </div>
            </div>
          </el-card>
        </a> -->

        <!-- Everything -->
        <a
          href="https://www.voidtools.com/zh-cn/downloads/"
          target="_blank"
          class="download-card-link"
        >
          <el-card class="project-card" shadow="hover">
            <div class="project-card-content">
              <div class="icon-container">
                <component :is="EverythingIcon" class="custom-svg-icon" />
              </div>
              <div class="project-details">
                <h3>Everything</h3>
                <p>快速文件搜索工具，让你瞬间找到电脑上的任何文件</p>
              </div>
            </div>
          </el-card>
        </a>

        <!-- ExplorerBlurMica -->
        <a
          href="https://github.com/Maplespe/ExplorerBlurMica/releases/latest"
          target="_blank"
          class="download-card-link"
        >
          <el-card class="project-card" shadow="hover">
            <div class="project-card-content">
              <div class="icon-container">
                <component :is="nullIcon" class="custom-svg-icon" />
              </div>
              <div class="project-details">
                <h3>ExplorerBlurMica</h3>
                <p>Windows 文件资源管理器模糊和云母效果增强工具</p>
              </div>
            </div>
          </el-card>
        </a>

        <!-- JetBrains IDEA 其他版本 -->
        <a
          href="https://www.jetbrains.com/zh-cn/idea/download/other.html"
          target="_blank"
          class="download-card-link"
        >
          <el-card class="project-card" shadow="hover">
            <div class="project-card-content">
              <div class="icon-container">
                <component :is="IDEAIcon" class="custom-svg-icon" />
              </div>
              <div class="project-details">
                <h3>JetBrains IDEA 其他版本</h3>
                <p>下载 JetBrains IDEA 的历史版本和其他发行版</p>
              </div>
            </div>
          </el-card>
        </a>

        <!-- MSYS2 -->
        <a href="https://www.msys2.org/#installation" target="_blank" class="download-card-link">
          <el-card class="project-card" shadow="hover">
            <div class="project-card-content">
              <div class="icon-container">
                <component :is="msysIcon" class="custom-svg-icon" />
              </div>
              <div class="project-details">
                <h3>MSYS2</h3>
                <p>Windows 软件分发和构建平台，提供原生 Windows 软件的构建环境</p>
              </div>
            </div>
          </el-card>
        </a>

        <!-- Microsoft 通用运行时库 -->
        <a
          href="https://github.com/noob-xiaoyu/Download_site/raw/refs/heads/main/Microsoft%20common%20runtime%20libraries/Microsoft%20common%20runtime%20libraries25-12-3.exe"
          target="_blank"
          class="download-card-link"
        >
          <el-card class="project-card" shadow="hover">
            <div class="project-card-content">
              <div class="icon-container">
                <component :is="nullIcon" class="custom-svg-icon" />
              </div>
              <div class="project-details">
                <h3>Microsoft 通用运行时库</h3>
                <p>Microsoft 通用运行时库集合，用于支持各种 Windows 应用程序的运行</p>
              </div>
            </div>
          </el-card>
        </a>

        <!-- NeatDM 多线程下载器 -->
        <a
          href="https://github.com/noob-xiaoyu/Download_site/blob/main/Multi-threaded%20downloader/NeatDM_v1.3_Chs.exe"
          target="_blank"
          class="download-card-link"
        >
          <el-card class="project-card" shadow="hover">
            <div class="project-card-content">
              <div class="icon-container">
                <img :src="NeatDMIcon" alt="NeatDM" class="custom-svg-icon" />
              </div>
              <div class="project-details">
                <h3>NeatDM 多线程下载器</h3>
                <p>一款简洁高效的多线程下载工具</p>
              </div>
            </div>
          </el-card>
        </a>

        <!-- Thorium-Win 浏览器 -->
        <a
          href="https://github.com/Alex313031/Thorium-Win/releases/latest"
          target="_blank"
          class="download-card-link"
        >
          <el-card class="project-card" shadow="hover">
            <div class="project-card-content">
              <div class="icon-container">
                <img :src="ThoriumWinIcon" alt="Thorium-Win" class="custom-svg-icon" />
              </div>
              <div class="project-details">
                <h3>Thorium-Win 浏览器</h3>
                <p>基于 Chromium 的高性能浏览器，专注于安全性和隐私保护</p>
              </div>
            </div>
          </el-card>
        </a>

        <!-- PowerToys -->
        <a
          href="https://github.com/microsoft/PowerToys/releases/latest"
          target="_blank"
          class="download-card-link"
        >
          <el-card class="project-card" shadow="hover">
            <div class="project-card-content">
              <div class="icon-container">
                <component :is="PowerToysIcon" class="custom-svg-icon" />
              </div>
              <div class="project-details">
                <h3>PowerToys</h3>
                <p>Windows 系统工具集，提供额外的功能和增强的用户体验</p>
              </div>
            </div>
          </el-card>
        </a>

        <!-- Clash Party -->
        <div class="clash-group">
          <div class="section-label">Clash</div>
          <a
            href="https://github.com/Maplespe/ExplorerBlurMica/releases/latest"
            target="_blank"
            class="download-card-link"
          >
            <el-card class="project-card" shadow="hover">
              <div class="project-card-content">
                <div class="icon-container">
                  <img :src="ClashPartyIcon" alt="Clash Party" class="custom-svg-icon" />
                </div>
                <div class="project-details">
                  <h3>Clash Party</h3>
                  <p>基于 Mihomo 的跨平台代理客户端，支持多种代理协议和高级功能</p>
                </div>
              </div>
            </el-card>
          </a>
          <!-- Clash 官网导航 -->
          <a
            href="https://github.com/clashdownload/Clash"
            target="_blank"
            class="download-card-link"
          >
            <el-card class="project-card" shadow="hover">
              <div class="project-card-content">
                <div class="icon-container">
                  <img :src="ClashDevIcon" alt="Clash Dev" class="custom-svg-icon" />
                </div>
                <div class="project-details">
                  <h3>Clash 官网导航</h3>
                  <p>Clash 官网各版本 Clash 下载地址及备份下载地址</p>
                </div>
              </div>
            </el-card>
          </a>
        </div>

        <el-divider />

        <!-- Java -->
        <div class="clash-group">
          <div class="section-label">Java 开发工具包</div>

          <div class="java-versions-container">
            <!-- JDK 25 -->
            <a
              href="https://download.oracle.com/java/25/latest/jdk-25_windows-x64_bin.exe"
              target="_blank"
              class="download-card-link"
              style="text-decoration: none"
            >
              <el-card class="project-card" shadow="hover">
                <div class="project-card-content">
                  <div class="icon-container">
                    <img
                      :src="javaIcon"
                      alt="Java"
                      class="custom-svg-icon"
                      style="width: 80px; height: 80px"
                    />
                  </div>
                  <div class="project-details">
                    <h3>Oracle JDK 25.0.2</h3>
                    <p>Java 开发工具包 25.0.2 稳定版</p>
                  </div>
                </div>
              </el-card>
            </a>
            <!-- JDK 22 -->
            <a
              href="https://download.oracle.com/java/22/archive/jdk-22.0.2_windows-x64_bin.exe"
              target="_blank"
              class="download-card-link"
              style="text-decoration: none"
            >
              <el-card class="project-card" shadow="hover">
                <div class="project-card-content">
                  <div class="icon-container">
                    <img
                      :src="javaIcon"
                      alt="Java"
                      class="custom-svg-icon"
                      style="width: 80px; height: 80px"
                    />
                  </div>
                  <div class="project-details">
                    <h3>Oracle JDK 22.0.2</h3>
                    <p>Java 开发工具包 22.0.2 稳定版</p>
                  </div>
                </div>
              </el-card>
            </a>
            <!-- JDK 21 -->
            <a
              href="https://download.oracle.com/java/21/archive/jdk-21.0.2_windows-x64_bin.exe"
              target="_blank"
              class="download-card-link"
              style="text-decoration: none"
            >
              <el-card class="project-card" shadow="hover">
                <div class="project-card-content">
                  <div class="icon-container">
                    <img
                      :src="javaIcon"
                      alt="Java"
                      class="custom-svg-icon"
                      style="width: 80px; height: 80px"
                    />
                  </div>
                  <div class="project-details">
                    <h3>Oracle JDK 21.0.2</h3>
                    <p>Java 开发工具包 21.0.2 稳定版</p>
                  </div>
                </div>
              </el-card>
            </a>
            <!-- JDK 17 -->
            <a
              href="https://download.oracle.com/java/17/archive/jdk-17.0.12_windows-x64_bin.exe"
              target="_blank"
              class="download-card-link"
              style="text-decoration: none"
            >
              <el-card class="project-card" shadow="hover">
                <div class="project-card-content">
                  <div class="icon-container">
                    <img
                      :src="javaIcon"
                      alt="Java"
                      class="custom-svg-icon"
                      style="width: 80px; height: 80px"
                    />
                  </div>
                  <div class="project-details">
                    <h3>Oracle JDK 17.0.12</h3>
                    <p>Java 开发工具包 17.0.12 稳定版</p>
                  </div>
                </div>
              </el-card>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
