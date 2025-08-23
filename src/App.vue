<script lang="ts" setup>
import VScaleScreen from 'v-scale-screen'
</script>
<template>
  <!-- 大屏适配：不出现滚动条 -->
  <VScaleScreen width="1920" height="1080">
    <RouterView />
  </VScaleScreen>
  
</template>

