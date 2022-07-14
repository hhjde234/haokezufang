<template>
  <div>
    <!-- top -->
    <van-nav-bar
      class="top"
      title="收藏列表"
      left-arrow
      @click-left="onClickLeft"
    />
    <listcontent :list="list"></listcontent>
  </div>
</template>

<script>
import { SeeCollection } from "@/api";
import { mapState } from "vuex";
import listcontent from "@/components/List.vue";
//import { SwipeCell } from "vant";
export default {
  components: { listcontent },
  data() {
    return {
      url: "http://liufusong.top:8080",
      list: [],
    };
  },
  computed: {
    ...mapState(["user"]),
  },
  methods: {
    onClickLeft() {
      this.$router.back();
    },
    async SeeCollection() {
      const res = await SeeCollection(this.user);
      this.list = res.data.body;
      console.log(res);
    },
  },
  created() {
    this.SeeCollection();
  },
};
</script>

<style scoped lang="less">
.van-nav-bar {
  background-color: #21b97a;
}
/deep/.top {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}
/deep/.van-icon-arrow-left {
  color: #fff;
}
/deep/.van-nav-bar__title {
  color: #fff;
}
/deep/.van-nav-bar__img {
  width: 106px;
  height: 80px;
}
.goods-card {
  margin: 0;
  background-color: white;
}

.delete-button {
  height: 100%;
}
/deep/.sad {
  height: 120px;
  position: relative;
  box-sizing: border-box;
  justify-content: space-around;
  padding-top: 18px;
  border-bottom: 1px solid #e5e5e5;
  margin-top: 30px;
}

/deep/.van-card__title {
  margin: 0;
  font-size: 12px;
  color: #394043;
}
/deep/.van-card__desc {
  color: #cacccc;
}
/deep/.van-card__price {
  color: #fa615f;
  font-weight: 700;
}
.tags {
  color: #39becd;
  background: #e1f5f8;
}
</style>
