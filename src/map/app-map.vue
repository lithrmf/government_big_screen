<template>
  <div>
    <div id="tian-map"></div>
  </div>
</template>

<script lang="ts" setup>
import {onMounted} from 'vue'

// 初始化地图
const initMap=()=>{
  let T =window.T
  // 实例化
  let tmap=new T.Map('tian-map')
  // 初始化地图的位置: 坐标、远近
  tmap.centerAndZoom(new T.LngLat(116.40769,39.89945),16)
  // 启用地图拖拽（默认也是启动的）
  tmap.enableDrag()
  // 设置地图类型
  tmap.setMapType(window.TMAP_SATELLITE_MAP);
}
onMounted(()=>{
  // 1.创建script标签
  const script = document.createElement('script')
  script.src="https://api.tianditu.gov.cn/api?v=4.0&tk=2d58761eb6bbdac6095476b73d4d1a82"
  // 2.script标签夹在完毕后：初始化地图
  script.onload = initMap
  // 3.将script标签添加到页面中
  document.body.appendChild(script)
})
</script>

<style lang="scss" scoped>
#tian-map{
  width: 1920px;
  height: 1080px;
}
</style>