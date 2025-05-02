<template>
  <a-carousel
    class="auth-carousel"
    animation-name="fade"
    autoplay
    show-arrow="never"
    indicator-type="line"
  >
    <div class="carousel-slide" v-for="item in slides" :key="item.caption">
      <img :src="item.image" :alt="item.caption" />
      <p class="caption">{{ item.caption }}</p>
    </div>
  </a-carousel>
</template>

<script setup lang="ts">
const slides = [
  {
    image: new URL('@/assets/login-1.png', import.meta.url).href,
    caption: '支持多语言评测',
  },
  {
    image: new URL('@/assets/login-2.png', import.meta.url).href,
    caption: '分布式高性能评测引擎',
  },
  {
    image: new URL('@/assets/login-3.png', import.meta.url).href,
    caption: '现代 UI，极致体验',
  },
]
</script>

<style scoped>
.auth-carousel {
  width: 100%;
  height: 100%;
  background: #f5f5f5;
}
.carousel-slide {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.carousel-slide img {
  max-height: 60%;
  margin-bottom: 16px;
  object-fit: cover;
}
.caption {
  font-size: 18px;
  color: #666;
}
</style>
