<template>
  <div class="car-wrapper" @click="handelHref">
    <div class="thumb">
      <img :src="book.image" class="img" alt="" mode="aspectFit" @click.stop="previewImage">
    </div>
    <div class="detail">
      <h3 class="title">{{book.title}}</h3>
      <star :rate="book.rate"></star>
      <div class="author">{{book.author}} / {{book.publisher}}</div>
      <div class="summary">{{book.summary}}</div>
      <div class="info">
        <div class="item"><div class="person icon"></div>{{book.user_info}}</div>
        <div class="item"><div class="eye icon"></div>{{book.count}}次</div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Star from '@/components/Star'

export default {
  name: 'BookCar',
  props: {
    book: {
      type: ['book']
    }
  },
  methods: {
    handelHref() {
      wx.navigateTo({
        url: '/pages/detail/main?id=' + this.book.id
      });
    },
    previewImage() {
      wx.previewImage({
        current: this.book.image,
        urls: [this.book.image]
      });
    }
  },
  components: {
    Star
  }
};
</script>

<style lang="scss">
  @function rpx($value) {
    @return $value * 1rpx;
  }
  .car-wrapper{
    display: flex;
    padding: 5px;
    overflow: hidden;
    .thumb{
      flex: 0 0 90px;
      width: 90px;
      height: 128px;
      overflow: hidden;
      .img{
        max-width: 100%;
        max-height: 100%;
      }
    }
    .detail{
      padding: 5px;
      .title{
        font-size: rpx(32);
        color: #3377aa;
      }
      .author{
        width: 200px;
        margin-top: 5px;
        font-size: rpx(28);
        color: #494949;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
      .summary{
        margin-top: 2px;
        height: rpx(60);
        line-height: rpx(32);
        font-size: rpx(28);
        overflow : hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
      }
      .info{
        display: flex;
        justify-content: space-between;
        margin-top: 8px;
        font-size: rpx(28);
        .item{
          height: rpx(36);
          line-height: rpx(36);
        }
        .icon{
          display: inline-block;
          width: 16px;
          height: 16px;
          margin-right: 3px;
          vertical-align: top;
        }
        .person{
          background: url("../../static/img/person.png") center / 100%;
        }
        .eye{
          background: url("../../static/img/eye.png") center / 100%;
        }
      }
    }
  }
</style>
