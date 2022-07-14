<template>
  <!-- 有token -->
  <div>
    <van-swipe-cell
      style="background-color;: red"
      @click="toDetail(item.houseCode)"
      class="sad"
      v-for="(item, index) in list"
      :key="index"
    >
      <van-card
        :price="item.price + '元/月'"
        :desc="item.desc"
        :title="item.title"
        :thumb="url + item.houseImg"
      >
        <template #tags>
          <van-tag class="tags" plain type="danger">{{ item.tags[0] }}</van-tag>
        </template>
      </van-card>
      <template #right>
        <van-button square text="删除" type="danger" class="delete-button" />
      </template>
    </van-swipe-cell>
  </div>
</template>

<script>
import { setLocal } from "@/api/store.js";
export default {
  name: "listcontent",
  props: {
    list: {
      required: true,
      type: Array,
    },
  },
  data() {
    return {
      url: "http://liufusong.top:8080",
    };
  },
  methods: {
    toDetail(a) {
      // debugger;
      this.$router.push("/deilt");
      setLocal("HOUSECODES", a);
    },
  },
};
</script>

<style scoped lang="less">
/deep/.sad {
  height: 120px;
  position: relative;
  box-sizing: border-box;
  justify-content: space-around;
  padding-top: 18px;
  border-bottom: 1px solid #e5e5e5;
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
