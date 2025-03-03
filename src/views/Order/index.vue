<template>
  <div>
    <h1>订单列表</h1>
    <span>Message is: {{ msg }}</span>
    <el-input v-model="msg" placeholder=""></el-input>

    <el-divider></el-divider>

    <el-button @click="activeComponent = From">表单</el-button>
    <el-button @click="activeComponent = Table">表格</el-button>
    <keep-alive>
      <component :is="activeComponent" />
    </keep-alive>
  </div>
</template>

<script setup lang="ts">
import { onActivated, onDeactivated, shallowRef, ref } from 'vue'
defineOptions({
  name: 'order',
})
import From from './components/From.vue'
import Table from './components/Table.vue'

const activeComponent = shallowRef(From)
let msg = ref('')

onActivated(() => {
  // 调用时机为首次挂载
  // 以及每次从缓存中被重新插入时
  console.log('订单列表重新激活');
})

onDeactivated(() => {
  // 在从 DOM 上移除、进入缓存
  // 以及组件卸载时调用
  console.log('订单列表被缓存');
})
</script>

<style lang="scss" scoped>

</style>