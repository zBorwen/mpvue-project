import Vue from 'vue';
import App from './App';

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
      navigationBarTextStyle: 'light'
    },
    tabBar: {
      selectedColor: '#00B51D',
      list: [{
        pagePath: 'pages/book/main',
        text: '图书',
        iconPath: 'static/img/book.png',
        selectedIconPath: 'static/img/book-active.png'
      }, {
        pagePath: 'pages/comment/main',
        text: '评论',
        iconPath: 'static/img/todo.png',
        selectedIconPath: 'static/img/todo-active.png'
      }, {
        pagePath: 'pages/me/main',
        text: '我',
        iconPath: 'static/img/me.png',
        selectedIconPath: 'static/img/me-active.png'
      }]
    }
  }
};
