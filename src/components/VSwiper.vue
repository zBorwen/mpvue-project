<template>
  <div class="swiper-wrapper">
    <swiper
      :indicator-dots="true"
      :circular="true"
      :autoplay="true"
      :interval="5000"
      :duration="1000"
      @click="handelSwiper">
      <block :key='i' v-for='(top, i) in tops'>
        <swiper-item>
          <img
            class='slide-image'
            mode='aspectFit'
            v-for='img in top'
            :data-id="img.id"
            :key='img.id'
            :src="img.image"
          >
        </swiper-item>
      </block>
    </swiper>
  </div>
</template>

<script type="text/ecmascript-6">
import { chunk } from '../common/until';

export default {
  name: 'VSwiper',
  props: ['top'],
  methods: {
    handelSwiper(ev) {
      wx.navigateTo({
        url: '/pages/detail/main?id=' + ev.target.dataset.id
      });
    }
  },
  computed: {
    tops() {
      return chunk(this.top, 3);
    }
  }
};
</script>

<style lang="scss">
  @function rpx($value) {
    @return $value * 1rpx;
  }
  .slide-image{
    width: 33.33%;
    height: rpx(300);
  }
</style>
