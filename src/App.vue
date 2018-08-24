<script>
import qcloud from 'wafer2-client-sdk';
import config from 'common/config';
import {showSuccess} from 'common/until';

export default {
  created() {
    const user = wx.getStorageSync('useInfo');
    if (!user) {
      qcloud.setLoginUrl(config.loginUrl);
      qcloud.login({
        success(userInfo) {
          showSuccess('登陆成功');
          wx.setStorageSync('useInfo', userInfo);
          console.log('登录成功', userInfo);
        },
        fail(err) {
          console.log('登录失败', err);
        }
      });
    }
  }
};
</script>

<style>
</style>
