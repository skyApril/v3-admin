<template>
  <div>
    <h1>首页</h1>
    <el-button @click="handleLogin">登录</el-button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter();
const handleLogin = () => {
  router.push('/login')
}
</script>

<style lang="scss" scoped>

</style>