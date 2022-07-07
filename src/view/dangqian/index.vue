<template>
  <div>
    <van-nav-bar
      class="top"
      title="城市列表"
      left-arrow
      @click-left="onClickLeft"
    />
    <van-index-anchor class="opp">当前城市</van-index-anchor>
    <van-cell title="杭州" />
    <van-index-anchor>热门城市</van-index-anchor>
    <van-cell
      v-for="(item, index) in hotcity"
      :key="index"
      :title="item.label"
    />
    <!-- :sticky="false" -->
    <!-- 拼音 -->
    <van-index-bar
      class="indexBar"
      v-for="item in FirstPin"
      :key="item"
      :sticky="false"
      highlight-color="#fb6463"
    >
      <van-index-anchor :index="item">{{ item }}</van-index-anchor>
      <van-cell
        :title="city.label"
        v-for="(city, index) in filterCitys(item)"
        :key="index"
      />
    </van-index-bar>

    <!-- 拼音 -->
    <!-- <van-index-bar v-for="item in FirstPin" :key="item">
      <van-index-anchor :index="item">{{ item }}</van-index-anchor>
      <van-cell
        :title="city.label"
        v-for="(city, index) in filterCitys(item)"
        :key="index"
      />
    </van-index-bar> -->
  </div>
</template>

<script>
import { Hotcity, Citylist } from "@/api";

export default {
  name: "hotcity",
  data() {
    return {
      hotcity: [],
      citylist: [],
      FirstPin: [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "J",
        "K",
        "L",
        "M",
        "N",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "W",
        "X",
        "Y",
        "Z",
      ],
    };
  },
  created() {
    this.Hotcity();
    this.Citylist();
  },
  methods: {
    onClickLeft() {
      this.$router.push("/layout/home");
    },
    async Hotcity() {
      const { data } = await Hotcity();
      this.hotcity = data.body;
    },
    async Citylist() {
      const { data } = await Citylist(1);
      this.citylist = data.body;
    },
  },
  computed: {
    filterCitys() {
      return (letter) => {
        return this.citylist.filter(
          (item) => item.short.substr(0, 1).toUpperCase() === letter
        );
      };
    },
  },
};
</script>

<style scoped lang="less">
.van-nav-bar {
  background-color: #21b97a;
}
/deep/.van-nav-bar__title {
  color: #fff;
}
/deep/.van-icon-arrow-left {
  color: #fff;
}
/deep/.van-index-anchor {
  color: #999999;
}
/deep/.top {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}
.opp {
  margin-top: 45px;
}
</style>
