<template>
  <div>
    <h1>商品列表</h1>
    <span>Message is: {{ msg }}</span>
    <el-input v-model="msg" placeholder=""></el-input>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
defineOptions({
  name: 'goods'
})
const msg = ref('')

</script>

<style lang="scss" scoped>

</style>