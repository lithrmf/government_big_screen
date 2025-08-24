<template>
  <div class="box">
    <!-- 首页大屏：静音、循环播放、自动播放 -->
    <video style="width: 100%;height: 100%;" muted loop autoplay>
      <source src="../assets/dv-index-main.mp4">
    </video>
    <div class="dv-index-main">
      <div class="dv-btn-group">
        <div 
          v-for="(item,index) in btnArr" 
          :key="index" 
          class="btn-item"
          :class="[btnClassHandle(item.num)]"
          @click="btnLinkHandle(item.urlKey)"
          >
          <img :src="getItemUrl(item.url)" alt="">
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import {ref} from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
// 定义首页的按钮数组
const btnArr = ref<any>([
  {
    num:'one',
    url:'安全基础.png',   // 用于图片路径的拼接
    urlKey:'datav/security'  // 用于路由的拼接
  },
  {
    num:'two',
    url:'重大危险源.png',
    urlKey:'datav/major-hazard'  
  },
  {
    num:'three',
    url:'双重预防.png',
    urlKey:'datav/double-prevention-mechanism' 
  },
  {
    num:'four',
    url:'特殊作业.png',
    urlKey:'datav/double-prevention-mechanism' 
  }
])
// 用于拼接按钮的图片路径
const getItemUrl=(url:string)=>{
  // 返回一个url路径
  return new URL(`../assets/images/${url}`,import.meta.url).href
}
// 给不同的按钮添加动态类
const btnClassHandle=(key:string)=>{
  return `btn-item-${key}`
}
// 点击按钮路由跳转
const btnLinkHandle=(key:string)=>{
  router.push({
    path:`/${key}`
  })
}
</script>

<style lang="scss" scoped>
.box{
  position: relative;
  width: 100%;
  height: 100%;
}
.dv-index-main{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('../assets/images/大屏首页.png') no-repeat;
  background-size: 100% 100%;
  .dv-btn-group{
    position: absolute;
    left:0;
    bottom: 230px;
    width: 100%;
    height: 370px;
    z-index: 10;
    .btn-item{
      position: absolute;
      width: 140px;
      height: 160px;
      cursor: pointer;
      transition: transform .3s;
      .img{
        width: 100%;
        height: 100%;
      }
    }
    .btn-item-one{
      top:143px;
      left:260px;
    }
    .btn-item-two{
      top:184px;
      left:650px;
    }
    .btn-item-three{
      top:183px;
      right:710px;
    }
    .btn-item-four{
      top:132px;
      right:325px;
    }
  }
}
.btn-item:hover{
  transform: scale(1.1);
}
</style>