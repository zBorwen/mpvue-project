<template>
  <div class="year-wrapper">
    <progress :percent="percent" activeColor="#00B51D"></progress>
    <p>{{year}}已经过去了{{days}}天，{{percent}}%</p>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'YearProgress',
  methods: {
    isLeapYear() {
      if (this.year % 400 === 0) {
        return true;
      } else if (this.year % 4 === 0 && this.year % 100 !== 0) {
        return true;
      }
      return false;
    },
    getDayOfYear() {
      return this.isLeapYear() ? 366 : 365;
    }
  },
  computed: {
    year() {
      return new Date().getFullYear();
    },
    days() {
      const start = new Date();
      start.setMonth(0);
      start.setDate(1);
      const offset = new Date() - start;
      return parseInt(offset / 1000 / 60 / 60 / 24, 10) + 1;
    },
    percent() {
      return ((this.days / this.getDayOfYear()) * 100).toFixed(1);
    }
  }
};
</script>

<style lang="scss" scoped>
.year-wrapper {
  width: 100%;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 30px;
  progress {
    margin-bottom: 10px;
  }
}
</style>
