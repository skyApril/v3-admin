<template>
  <div>
    <el-button @click="handleLogin">登录</el-button>
  </div>
</template>

<script setup lang="ts">
import Cookies from 'js-cookie';
import { useRouter } from 'vue-router'
const router = useRouter();
const handleLogin = () => {
  Cookies.set('v3-admin-token', '1234567890')
  router.push('/home')
}
</script>

<style lang="scss" scoped>

</style>