<template>
  <div>
    图书馆
  </div>
</template>
<script>
import {get} from 'common/until';

export default {
  async created() {
    const data = await get('/weapp/demo');
    console.log(data);
  }
};
</script>

<style>
</style>
