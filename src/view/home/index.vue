<template>
  <div class="body">
    <!-- 轮播图 -->
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
    <!-- 搜索框 -->

    <div class="top">
      <div class="city">
        <span @click="city"
          >{{ hotCityNow }}<van-icon name="arrow-down"
        /></span>
      </div>
      <van-search
        v-model="value"
        class="searcg"
        background="transparent"
        show-action
        placeholder="请输入搜索关键词"
      >
        <template #action>
          <div @click="goAddress"><van-icon name="location-o" /></div>
        </template>
      </van-search>
    </div>
    <!-- icon图标区 -->
    <van-grid :border="false">
      <van-grid-item @click="goLookhome" icon="wap-home-o" text="整租" />
      <van-grid-item @click="goLookhome" icon="friends-o" text="合租" />
      <van-grid-item @click="goAddress" icon="guide-o" text="地图找房" />
      <van-grid-item icon="cash-back-record" text="去出租" />
    </van-grid>
    <!-- 租房小组  :icon="item.imgSrc"-->
    <van-cell class="zf" title="租房小组" value="更多" />
    <van-grid :gutter="10" class="zf" column-num="2" direction="horizontal">
      <van-grid-item
        class="xiaohezi"
        v-for="item in zufang"
        :key="item.id"
        icon="photo - o"
        :text="item.title + item.desc"
      />
    </van-grid>
  </div>
</template>

<script>
import { Rent } from "@/api";
import { mapState } from "vuex";
export default {
  data() {
    return {
      value: "",
      value1: 0,
      value2: "a",
      zufang: [],
      images: [
        "http://liufusong.top:8080/img/swiper/1.png",
        "http://liufusong.top:8080/img/swiper/2.png",
        "http://liufusong.top:8080/img/swiper/3.png",
      ],
    };
  },
  computed: {
    ...mapState(["hotCityNow"]),
  },
  created() {
    this.Rent();
  },
  methods: {
    async Rent() {
      const { data } = await Rent();
      this.zufang = data.body;
    },
    goAddress() {
      this.$router.push("/address");
    },
    city() {
      this.$router.push("/dang");
    },
    goLookhome() {
      this.$router.push("/layout/lookroom");
    },
  },
};
</script>

<style scoped lang="less">
.van-swipe-item {
  width: 414px;
  height: 212px;
  img {
    width: 100%;
  }
}
.van-swipe__track {
  font-weight: 700;
}
.zf {
  background-color: #f6f5f6;
}

.searcg {
  position: absolute;
  top: 0;
  left: 60px;
  width: 80%;
}
.city {
  position: absolute;
  top: 3px;
  left: 12px;
  /deep/span {
    font-size: 20px;
    margin-left: -5px;
  }
}
.xiaohezi {
  /deep/ .van-grid-item__text {
    margin-top: 0;
    margin-left: 8px;
    width: 60px;
  }
}
</style>
