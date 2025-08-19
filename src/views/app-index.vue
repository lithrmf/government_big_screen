<template>
  <div class="box">
    <!-- 首页大屏：静音、循环播放、自动播放 -->
    <video style="width: 100%;height: 100%;" muted loop autoplay>
      <source src="../assets/dv-index-main.mp4">
    </video>
    <div class="dv-index-main"></div>
  </div>
</template>

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
}
</style>