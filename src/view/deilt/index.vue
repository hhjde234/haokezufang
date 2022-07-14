<template>
  <div>
    <!-- 标题 -->
    <Title :title1="list.community"></Title>
    <!-- 轮播图 -->
    <div class="tupian">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(item, index) in list.houseImg" :key="index">
          <img v-lazy="url + item" />
        </van-swipe-item>
      </van-swipe>
      <!-- 标题 -->
      <van-cell-group>
        <van-cell :title="list.title">
          <template #label>
            <van-tag class="tags" type="primary">{{ list.tags[0] }}</van-tag>
          </template></van-cell
        >
      </van-cell-group>
    </div>
  </div>
</template>

<script>
import Title from "@/components/Title.vue";
import { getLocal, setLocal } from "@/api/store.js";
import { DEilt } from "@/api";
export default {
  components: { Title },
  data() {
    return {
      url: "http://liufusong.top:8080",
      title1: "",
      list: getLocal("DEILTLIST") || [],
      img: [],
    };
  },
  created() {
    this.DEilt();
  },
  methods: {
    async DEilt() {
      const a = getLocal("HOUSECODES");
      const res = await DEilt(a);
      setLocal("DEILTLIST", res.data.body);
    },
  },
};
</script>

<style scoped lang="less">
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
/deep/.tupian {
  width: 100%;
  height: 252px;
  img {
    width: 100%;
  }
}
.tags {
  color: #39becd;
  background: #e1f5f8;
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
