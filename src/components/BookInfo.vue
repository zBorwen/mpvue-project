<template>
<div class="info-wrapper">
  <div class="thumb">
    <img class="bg" :src="info.image" mode="aspectFill">
    <img class="img" :src="info.image" mode="aspectFit">
    <div class="info">
      <div class="title">{{info.title}}</div>
    </div>
  </div>
</div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'BookInfo',
  props: ['info']
};
</script>

<style lang="scss" scoped>
@function rpx($value) {
  @return $value * 1rpx;
}
.info-wrapper{
  .thumb {
    position: relative;
    overflow: hidden;
    width: rpx(750);
    height: rpx(500);
    .bg {
      width: 100%;
      filter: blur(12px);
    }
    .img {
      position: absolute;
      top: calc(50% - 150rpx);
      left: 0;
      width: 100%;
      height: rpx(300);
    }
  }
}
</style>
