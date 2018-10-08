<template>
  <div>
    <v-swiper :top="top"></v-swiper>
    <book-car
      v-for="item of books"
      :key="item.id"
      :book="item"></book-car>
    <div class="no-data" v-if="!more">没有更多数据</div>
  </div>
</template>
<script>
import {get} from 'common/until';
import BookCar from '@/components/BookCar';
import VSwiper from '@/components/VSwiper';

export default {
  data() {
    return {
      books: [],
      page: 0,
      more: true,
      top: []
    };
  },
  mounted() {
    this.getList(true);
    this.getTop();
  },
  methods: {
    async getList(init) {
      if (init) {
        this.page = 0;
        this.more = true;
      }
      wx.showNavigationBarLoading();
      const books = await get('/weapp/booklist', {page: this.page});
      // page=0没有数据 或者数据不足10
      if (books.data.list.length < 10 && this.page >= 0) {
        this.more = false;
      }
      if (init) {
        this.books = books.data.list;
        wx.stopPullDownRefresh();
      } else {
        // 累加数据
        this.books = this.books.concat(books.data.list);
      }
      wx.hideNavigationBarLoading();
    },
    async getTop() {
      const top = await get('/weapp/top');
      this.top = top.data;
    }
  },
  onPullDownRefresh() {
    this.getList(true);
    this.top();
  },
  onReachBottom() {
    if (!this.more) {
      return false;
    }
    this.page = this.page + 1;
    this.getList();
  },
  components: {
    BookCar,
    VSwiper
  }
};
</script>

<style lang="scss">
</style>
