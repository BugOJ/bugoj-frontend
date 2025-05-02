<template>
  <a-layout>
    <!-- 顶部导航栏 -->
    <a-layout-header class="header">
      <div class="logo">
        <img src="@/assets/logo-noword.png" alt="BugOJ Logo" class="logo-img" />
        <span class="logo-text">BugOJ</span>
      </div>
      <div class="nav-links">
        <a-button type="text" @click="$router.push('/problems')">题库</a-button>
        <a-button type="text">比赛</a-button>
        <a-button type="primary" @click="$router.push('/login')">登录</a-button>
        <a-button type="outline" @click="$router.push('/register')">注册</a-button>
      </div>
    </a-layout-header>

    <!-- 页面主体 -->
    <a-layout-content style="padding-top: 64px">
      <router-view />
    </a-layout-content>

    <!-- 页脚 -->
    <a-layout-footer class="footer">
      © 2025 BugOJ | <a href="https://github.com/BugOJ" target="_blank">GitHub</a>
    </a-layout-footer>
  </a-layout>
</template>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}
.logo {
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
}
.logo-img {
  height: 1em;
  margin-right: 8px;
}
.nav-links a-button {
  margin-left: 12px;
}
.footer {
  text-align: center;
  padding: 24px;
  background: #f5f5f5;
  color: #999;
}
</style>
