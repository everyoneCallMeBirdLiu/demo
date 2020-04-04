<template>
  <div id="accept">
    <div class="wrap">
      <router-view />
    </div>
    <van-tabbar v-model="active" :fixed="true" route>
      <van-tabbar-item to="/accept/home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/accept/order" icon="records">订单管理</van-tabbar-item>
      <van-tabbar-item to="/accept/stat" icon="coupon-o">统计</van-tabbar-item>
      <van-tabbar-item to="/accept/mycenter" icon="contact">个人中心</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "accept",
  data() {
    return {
      active: 0
    }
  },
}
</script>

<style lang="less" scoped>
  #accept {
    .wrap {
      position: absolute;
      width: 100%;
      top: 0;
      bottom: 50px;
    }
    .van-tabbar--fixed {
      position: fixed !important;
    }
  }
</style>