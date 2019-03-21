<template>
  <div class="detail-wrapper">
    <book-info :info="info"></book-info>
  </div>
</template>

<script type="text/ecmascript-6">
import {get} from 'common/until';
import BookInfo from '@/components/BookInfo';

export default {
  name: 'Detail',
  data() {
    return {
      id: '',
      info: {}
    };
  },
  mounted() {
    this.id = this.$root.$mp.query.id;
    this.getDetail(this.id);
  },
  methods: {
    async getDetail(id) {
      const info = await get('/weapp/bookdetail', {id});
      wx.setNavigationBarTitle({
        title: info.data.title
      });
      this.info = info.data;
    }
  },
  components: {
    BookInfo
  }
};
</script>

<style lang="scss">

</style>
