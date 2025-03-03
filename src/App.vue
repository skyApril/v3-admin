<script setup lang="ts">
// import { ref, reactive } from 'vue';
// import { useRouter } from 'vue-router';

// const cachedViews = ref([]);
// const router = useRouter();

// router.afterEach((to) => {
//   if (to.meta.keepAlive && !cachedViews.value.includes(to.name)) {
//     cachedViews.value.push(to.name);
//   }
//   console.log(cachedViews.value);
// });
</script>

<template>
  <!-- {{ $route.name }} | {{ $route.meta.keepAlive }} -->
  <router-view></router-view>
  <!-- <router-view v-slot="{ Component }">
    <keep-alive :include="cachedViews">
      <component :is="Component" />
    </keep-alive>
  </router-view> -->
</template>

<style scoped lang="scss">
</style>
