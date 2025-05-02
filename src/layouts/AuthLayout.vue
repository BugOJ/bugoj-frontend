<template>
  <div class="auth-container">
    <div class="auth-visual">
      <VisualCarousel />
    </div>

    <div class="auth-form">
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts">
import VisualCarousel from '@/components/VisualCarousel.vue'
</script>

<style scoped>
.auth-container {
  display: flex;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

.auth-visual,
.auth-form {
  width: 50vw;
  height: 100%;
  flex-shrink: 0;
  box-sizing: border-box;
  padding: 0px;
}

.auth-form > * {
  max-width: 600px;
  margin: 0 auto;
}
</style>
