<template>
  <div class="container">
    <div class="userinfo">
      <img :src="userInfo.avatarUrl" alt="">
      <p>{{userInfo.nickName}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userInfo: {}
    };
  },
  created() {
    const userInfo = wx.getStorageSync('userInfo');
    if (userInfo) {
      this.userInfo = userInfo;
    } else {
      this.userInfo = {nickName: '路人甲', avatarUrl: '../../../static/img/unlogin.png'};
    }
  },
  methods: {
  }
};
</script>

<style lang="scss">
@function rpx($value) {
  @return $value * 1rpx;
}
.container{
  padding: 0 rpx(30);
  .userinfo{
    margin-top: rpx(100);
    text-align: center;
    img{
      width: rpx(150);
      height: rpx(150);
      margin: rpx(20);
      border-radius: 50%;
    }
  }
}
</style>
