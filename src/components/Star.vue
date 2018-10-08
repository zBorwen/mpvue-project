<template>
  <div class="star-wrapper">
     <div class="item light" v-for="i of light" :key="i"></div>
     <div class="item half" v-if="half !== 0"></div>
     <div class="item gray" v-for="i of gray" :key="i"></div>
    <div class="rate">{{rate}}分</div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'Star',
  props: {
    rate: {
      type: [Number, String],
      default: 0
    }
  },
  computed: {
    light() {
      return parseInt(this.rate / 2, 10);
    },
    half() {
      const num = this.rate / 2;
      return num - parseInt(num, 10) >= 0.5 ? 1 : 0;
    },
    gray() {
      const num = this.rate / 2;
      const light = parseInt(num, 10);
      const half = num - parseInt(num, 10) >= 0.5 ? 1 : 0;
      return 5 - light - half;
    }
  }
};
</script>

<style lang="scss">
  @function rpx($value) {
    @return $value * 1rpx;
  }
  .star-wrapper{
    display: flex;
    align-items: center;
    height: rpx(36);
    margin-top: 3px;
    font-size: rpx(28);
    color: #9b9b9b;
    .item{
      width: 16px;
      height: 16px;
    }
    .light{
      background: url("../../static/img/rate_light.png") center / 100%;
    }
    .half{
      background: url("../../static/img/rate_half.jpg") center / 100%;
    }
    .gray{
      background: url("../../static/img/rate_gray.png") center / 100%;
    }
    .rate{
      margin-left: 3px;
    }
  }
</style>
