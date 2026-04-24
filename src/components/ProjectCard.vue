<script setup>
defineProps({
  icon: [String, Object],
  iconComponent: Object,
  title: String,
  description: String,
  to: [String, Object],
})
</script>

<template>
  <router-link :to="to" style="display: block; text-decoration: none">
    <div class="project-card-link">
      <el-card class="project-card" shadow="hover">
        <div class="project-card-content">
          <div class="icon-container">
            <component v-if="iconComponent" :is="iconComponent" class="custom-svg-icon" />
            <el-avatar
              v-else-if="icon && typeof icon === 'string'"
              :size="52"
              :src="icon"
              shape="square"
              style="background-color: transparent !important"
            />
          </div>
          <div class="project-details">
            <h3>{{ title }}</h3>
            <p>{{ description }}</p>
          </div>
        </div>
      </el-card>
    </div>
  </router-link>
</template>
