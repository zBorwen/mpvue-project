<script>
export default {
  created() {
  }
};
</script>

<style lang="scss">
@function rpx($value) {
  @return $value * 1rpx;
}
.no-data{
  padding: 15px 0;
  text-align: center;
  font-size: 16px;
  color: #eee;
}
.btn{
  width: 100%;
  height: 30px;
  line-height: 30px;
  margin-bottom: 10px;
  padding: 0 15px;
  color: #fff;
  font-size: rpx(32);
  background: #00B51D;
  border-radius: 5px;
}
.btn:active{
  background: #FA5A49;
}
</style>
