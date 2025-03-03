<template>
  <div>
    <span>Message is: {{ msg }}</span>
    <el-input v-model="msg" placeholder=""></el-input>
    <el-button @click="handleLogin">登录</el-button>
  </div>
</template>

<script setup lang="ts">
import { ref, onActivated, onDeactivated } from 'vue'
import Cookies from 'js-cookie';
import { useRouter } from 'vue-router'

defineOptions({
  name: 'login',
})

onActivated(() => {
  console.log('登录重新激活');
})
onDeactivated(() => {
  console.log('登录被缓存');
})

const msg = ref('')
const router = useRouter();
const handleLogin = () => {
  // Cookies.set('v3-admin-token', '1234567890')
  router.push('/home')
}
</script>

<style lang="scss" scoped>

</style>