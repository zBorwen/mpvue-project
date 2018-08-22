import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;
const app = new Vue(App);
app.$mount();

export default {
  // app.json
  config: {
    pages: ['^pages/book/main'],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#00B51D',
      navigationBarTitleText: '豆瓣图书',
      navigationBarTextStyle: 'light',
    },
  },
};
