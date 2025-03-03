<template>
  <el-container class="layout-container">
    <el-container>
      <el-aside width="200px"> <Aside /> </el-aside>
      <el-container>
        <el-header> <Header /> </el-header>
        <el-main>
          <router-view v-slot="{ Component, route }">
            <transition appear name="fade-transform" mode="out-in">
              <keep-alive :include="keepAliveName">
                <component :is="Component" :key="route.fullPath" />
              </keep-alive>
            </transition>
          </router-view>
          <!-- <keep-alive :include="['goods','order']">
            <router-view></router-view>
          </keep-alive> -->
        </el-main>
        <el-footer> <Footer /> </el-footer>
      </el-container>
    </el-container>
  </el-container>
  <!-- <div class="layout">
    <Aside />
    <div class="main">
      <Header />
      <router-view></router-view>
      <el-button type="primary">Primary</el-button>
    </div>
  </div> -->
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Aside from "./component/Aside.vue";
import Header from "./component/Header.vue";
import Footer from "./component/Footer.vue";

const keepAliveName = ref<string[]>([]);
const router = useRouter();
router.afterEach((to) => {
  if(to.meta.keepAlive) {
    keepAliveName.value.push(to.name as string);
  }
})

</script>

<style lang="scss" scoped>
.layout-container {
  height: 100%;

  :deep(.el-header) {
    background-color: #b3c0d1;
  }

  :deep(.el-aside) {
    height: 100%;
    background-color: #545c64;
  }

  :deep(.el-main) {
    background-color: #e9eef3;
  }

  :deep(.el-footer) {
    background-color: #b3c0d1;
  }
}
</style>
