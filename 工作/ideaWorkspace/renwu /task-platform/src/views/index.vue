<template>
  <div>
    <router-link class="link" to="/accept">接单</router-link>
    <router-link class="link" to="/grant">下单</router-link>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      
    }
  },
}
</script>

<style lang="less" scoped>
  .link {
    display: block;
    margin-top: 50px;
  }
</style>