## mpvue-project
> wx小程序mpvue学习
>
> 初始化项目代码

### 腾讯云后台搭建

关联腾讯云下载nodejs demo将 *server* 拷贝到mpvue项目中在 `config.js` 配置

```json
serverHost: 'localhost',
tunnelServerUrl: '',
tunnelSignatureKey: '27fb7d1c161b7ca52d73cce0f1d833f9f5b5ec89',
// 腾讯云相关配置可以查看云 API 秘钥控制台：https://console.cloud.tencent.com/capi
qcloudAppId: '您的腾讯云 AppID',
qcloudSecretId: '您的腾讯云 SecretId',
qcloudSecretKey: '您的腾讯云 SecretKey',
wxMessageToken: 'weixinmsgtoken',
networkTimeout: 30000
```

[Secret生成](https://console.cloud.tencent.com/cam/capi) 填写所需的内容其它的不用修改

打开小程序开发工具第一次上传腾讯云初始化，选择模块上传全部勾选，以后上传选择智能上传即可。

测试是否成功

在`server/router/index.js` 中

``` js
router.get('/demo', controllers.demo)
```

 在`server/controllers/demo.js` 中

```js
module.exports = async (ctx)=> {
    ctx.state.data = {
        msg: '初始化成功~'
    }
}
```

在开发工具详情找到腾讯云免费提供的 **开发环境 request 域名** 别忘了修改代码每次都要提交才能看到效果。

浏览器查看 https://xxx/weapp/demo 能否返回我们刚才写的data 这里域名后边是有一个默认的前缀的weapp可以选择在 `router/index.js` 中去修改。

### 本地开发环境搭建

因为每次修改代码都要上传才可以看到效果所以搭建本地开发环境方便调试编写代码。

在mysql中创建名为 **cAuth** 的数据库

进入 `server` 目录执行 *node tools/initad.js* 初始化数据库

> 执行安装依赖
>
> npm i  nodemon -g
>
> npm install

npm run dev 在浏览器输入 `localhost:5757/weapp/demo` 到此本地开发环境搭建完成。

