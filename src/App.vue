<script lang="ts" setup>
import VScaleScreen from 'v-scale-screen'
import {getHazard} from '@/api/safe'

getHazard({companyId:0}).then(res=>{
  console.log(res)
})
</script>
<template>
  <!-- 大屏适配：不出现滚动条 -->
  <VScaleScreen width="1920" height="1080">
    <RouterView />
    <!-- 让天地图作为全局组件出现 -->
    <AppMap></AppMap>
  </VScaleScreen>
  
</template>

