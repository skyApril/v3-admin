<template>
  <div class="aside">
    <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
      <el-radio-button :value="false">expand</el-radio-button>
      <el-radio-button :value="true">collapse</el-radio-button>
    </el-radio-group>
    <div class="aside-menu">
      <el-menu
        active-text-color="#ffd04b"
        background-color="#545c64"
        :default-active="active"
        class="el-menu-vertical-demo"
        :collapse="isCollapse"
        text-color="#fff"
        @open="handleOpen"
        @close="handleClose"
        @select="handleSelect"
      >
        <el-menu-item index="/home">
          <el-icon><HomeFilled /></el-icon>
          <template #title>主页</template>
        </el-menu-item>
        <el-sub-menu index="2">
          <template #title>
            <el-icon><Menu /></el-icon>
            <span>菜单</span>
          </template>
          <!-- <el-menu-item index="/home">Home</el-menu-item> -->
          <el-menu-item index="/goods">商品列表</el-menu-item>
          <el-menu-item index="/order">订单列表</el-menu-item>
        </el-sub-menu>
        <!-- <el-menu-item index="2">
          <el-icon><IconMenu /></el-icon>
          <template #title>Navigator Two</template>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <el-icon><Document /></el-icon>
          <template #title>Navigator Three</template>
        </el-menu-item>
        <el-menu-item index="4">
          <el-icon><Setting /></el-icon>
          <template #title>Navigator Four</template>
        </el-menu-item> -->
      </el-menu>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from 'vue-router'
import {  Menu, HomeFilled } from "@element-plus/icons-vue";

let active = ref("/home");
const isCollapse = ref(false);
const router = useRouter();
const handleOpen = (key: string, keyPath: string[]) => {
  // console.log(key, keyPath, "handleOpen");
};
const handleClose = (key: string, keyPath: string[]) => {
  // console.log(key, keyPath, "handleClose");
};
const handleSelect = (key: string, keyPath: string[]) => {
  // console.log(key, keyPath, "handleSelect");
  active.value = key;
  // console.log(key, active);
  router.push(key);
};
</script>

<style lang="scss" scoped>
.aside {

  .aside-menu {
    height: 100%;
  }
}

.el-menu{
  border:0 !important;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  // min-height: 400px;
  scrollbar-width: none;
}
</style>
