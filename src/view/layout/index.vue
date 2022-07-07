<template>
  <div>
    <router-view></router-view>
    <!-- 底部导航栏 -->
    <van-tabbar v-model="active" route>
      <van-tabbar-item to="/layout/home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/layout/lookroom" icon="search"
        >找房</van-tabbar-item
      >
      <van-tabbar-item to="/layout/info" icon="friends-o">资讯</van-tabbar-item>
      <van-tabbar-item to="/layout/my" icon="setting-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      active: 0
    }
  }
}
</script>

<style scoped lang="less">
.van-tabbar-item--active {
  color: #4fbd8b;
}
</style>
