<template>
  <div class="container">
    <div class="userinfo" @click="login">
      <img :src="userInfo.avatarUrl" alt="">
      <p>{{userInfo.nickName}}</p>
    </div>
    <year-progress></year-progress>
    <button class="btn" @click="scanBook">添加图书</button>
  </div>
</template>

<script>
import qcloud from 'wafer2-client-sdk';
import config from 'common/config';
import {showSuccess, post, showModal} from 'common/until';
import YearProgress from '@/components/YearProgress';

export default {
  data() {
    return {
      userInfo: {
        avatarUrl: '../../../static/img/unlogin.png',
        nickName: '点击登陆'
      }
    };
  },
  created() {
    const userInfo = wx.getStorageSync('userInfo');
    if (userInfo) {
      this.userInfo = userInfo;
    }
  },
  methods: {
    async addBook(isbn) {
      const res = await post('/weapp/addbook', {
        isbn,
        openId: this.userInfo.openId
      })
      // 为什么不写else 因为reject 阻止了程序的执行
      if (res.code === 0 && res.data.title) {
        showModal('添加成功', `${res.data.title}添加成功`);
      }
    },
    scanBook() {
      wx.scanCode({
        success: (res) => {
          if (res.result) {
            this.addBook(res.result);
          } else {
            console.log(res);
          }
        }
      });
    },
    login() {
      const user = wx.getStorageSync('userInfo');
      if (!user) {
        qcloud.setLoginUrl(config.loginUrl);
        qcloud.login({
          success: () => {
            // login 返回的没有openID 如果要用ID做标识在调用一次user接口返回ID
            qcloud.request({
              url: config.userUrl,
              success: (userRes) => {
                showSuccess('登陆成功');
                wx.setStorageSync('userInfo', userRes.data.data);
                this.userInfo = userRes.data.data;
              }
            });
          },
          fail(err) {
            console.log('登录失败', err);
          }
        });
      }
    }
  },
  components: {
    YearProgress
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
    margin-top: rpx(80);
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
