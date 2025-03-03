<template>
  <div>
    <h1>表单</h1>
    {{ num }}
    <el-button type="primary" @click="add">add</el-button>
  </div>
</template>

<script setup lang="ts">
import { ref, onActivated, onDeactivated } from 'vue'
const num = ref(10)
const add = () => {
  num.value++
}

onActivated(() => {
  // 调用时机为首次挂载
  // 以及每次从缓存中被重新插入时
  console.log('-------表单重新激活');
})

onDeactivated(() => {
  // 在从 DOM 上移除、进入缓存
  // 以及组件卸载时调用
  console.log('-------表单被缓存');
})
</script>

<style lang="scss" scoped>

</style>