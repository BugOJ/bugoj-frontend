<template>
  <div class="home">
    <div class="hero">
      <h1 class="title">BugOJ 在线评测系统</h1>
      <p class="subtitle">轻量、高性能、多语言支持的开源 OJ 平台</p>
      <div class="hero-buttons">
        <a-button type="primary" size="large">开始使用</a-button>
        <a-button type="outline" size="large">浏览题库</a-button>
      </div>
    </div>

    <div class="features">
      <a-card v-for="f in features" :key="f.title" class="feature-card">
        <template #title>
          <span>{{ f.icon }} {{ f.title }}</span>
        </template>
        <div>{{ f.description }}</div>
      </a-card>
    </div>
  </div>
</template>

<script setup lang="ts">
const features = [
  { icon: "🧠", title: "多语言支持", description: "支持 C/C++/Go/Python 等主流语言" },
  { icon: "⚡", title: "分布式评测", description: "支持多评测机并发，提升评测速度" },
  { icon: "🛠️", title: "权限系统", description: "内建题目管理、用户管理、角色控制" },
  { icon: "📈", title: "比赛与排行", description: "未来支持赛制设置、比赛模式、排行榜" }
]
</script>

<style scoped>
.hero {
  text-align: center;
  padding: 80px 20px 48px;
}
.title {
  font-size: 40px;
  margin-bottom: 16px;
}
.subtitle {
  font-size: 18px;
  color: #666;
  margin-bottom: 32px;
}
.hero-buttons a-button {
  margin: 0 8px;
}
.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
  padding: 48px 24px;
}
.feature-card {
  text-align: center;
}
</style>
