<template>
  <div>
    <h2 class="form-title">登录 BugOJ</h2>
    <a-form :model="form" layout="vertical">
      <a-form-item label="用户名">
        <a-input v-model="form.username" />
      </a-form-item>
      <a-form-item label="密码">
        <a-input-password v-model="form.password" />
      </a-form-item>
      <a-button type="primary" long @click="onLogin">登录</a-button>
    </a-form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const form = reactive({ username: '', password: '' })

function onLogin() {
  console.log('Login with', form)
}
</script>

<style scoped>
.form-title {
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 32px;
}
</style>
