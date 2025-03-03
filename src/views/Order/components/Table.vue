<template>
  <div>
    <h1>表格</h1>
    {{ num }}
    <el-button type="primary" @click="add">add</el-button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const num = ref(0)
const add = () => {
  num.value++
}
</script>

<style lang="scss" scoped>

</style>