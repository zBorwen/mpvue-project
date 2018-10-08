<template>
  <div>{{bookId}}123123</div>
</template>

<script type="text/ecmascript-6">
import {get} from 'common/until';

export default {
  name: 'Detail',
  data() {
    return {
      bookId: ''
    };
  },
  mounted() {
    this.boookId = this.$root.$mp.query.id;
    this.getDetail(this.boookId);
  },
  methods: {
    async getDetail(id) {
      const info = await get('/weapp/bookdetail', {id});
    }
  }
};
</script>

<style lang="scss">

</style>
