<template>
  <div>
    <!-- top -->
    <van-nav-bar
      class="top"
      title="房屋管理"
      left-arrow
      @click-left="onClickLeft"
    />
    <!-- 没有token -->
    <div v-if="!user">
      <div class="tp">
        <img src="http://liufusong.top:8080/img/not-found.png" alt="" />
      </div>
      <p>您还没有房源，<a href="#/rent/add">去发布房源</a>吧~</p>
    </div>
    <!-- 有token -->
    <div v-else>
      <!-- 列表组件-->
      <listcontent :list="list"></listcontent>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { getHousing } from "@/api";
import listcontent from "@/components/List.vue";
export default {
  components: { listcontent },
  data() {
    return {
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
    async getHousing() {
      const res = await getHousing(this.user);
      this.list = res.data.body;
      console.log(this.list);
    },
  },
  created() {
    this.getHousing();
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

.tp {
  margin-top: 70px;
  margin-bottom: 20px;
  margin-left: 120px;
  width: 150px;
  height: 97px;
  img {
    width: 100%;
  }
}
/deep/.van-cell {
  color: #21b97a;
}
p {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  height: 100%;
  font-family: "Microsoft YaHei";
  color: #333;
  background-color: #fff;
  font-size: 14px;
  padding-left: 100px;
  a {
    color: #33be85;
  }
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
