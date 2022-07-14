<template>
  <div>
    <Title title1="城市列表"></Title>

    <!-- 全部城市 -->
    <van-index-bar :index-list="Word">
      <!-- 当前城市 -->
      <van-index-anchor index="#">当前城市 </van-index-anchor>
      <van-index-anchor index="#">{{ hotCityNow }} </van-index-anchor>

      <!-- 热门城市 -->
      <van-index-anchor index="热"
        >热门城市
        <div
          v-for="(item, index) in hotCity"
          :key="index"
          @click="event(item.label, item.value)"
        >
          {{ item.label }}
        </div>
      </van-index-anchor>

      <!--列表 -->
      <div v-for="(item, index) in citys" :key="index">
        <van-index-anchor :index="item.name">{{ item.name }}</van-index-anchor>

        <div index="item.name" v-for="(item, index) in item.label" :key="index">
          <van-index-anchor>{{ item.label }}</van-index-anchor>
        </div>
      </div>
    </van-index-bar>
  </div>
</template>

<script>
import Title from "@/components/Title.vue";
import { Hotcity, Citylist } from "@/api";
import { mapState } from "vuex";
export default {
  name: "city",
  components: { Title },
  data() {
    return {
      hotCity: [],
      cityList: [],
      level: 1,
      pinyinFrist: [],
      Word: ["#", "热"],
      newWord: [],
      newCityList: [],
      citys: [],
      aaa: [],
    };
  },
  created() {
    this.Hotcity();
    this.Citylist();
  },
  methods: {
    async Hotcity() {
      const res = await Hotcity();
      this.hotCity = res.data.body;
      console.log(res);
      // this.commit
    },
    // 全部城市
    async Citylist() {
      const res = await Citylist(this.level);
      this.cityList = res.data.body;
      // 遍历每一个 ，把首字母提取出来，并把数据放在一个数组里面
      // 截取首字母转化为大写
      this.cityList.forEach((item) => {
        const first = item.short.substr(0, 1).toUpperCase();
        this.Word.push(first);
        this.Word = [...new Set(this.Word)];

        item.short = first;
      });
      // 按照首字母排序
      this.pinyinFrist = this.cityList.sort(
        (a, b) => a.short.charCodeAt() - b.short.charCodeAt()
      );
      this.newWord = this.Word.sort((a, b) => a.charCodeAt() - b.charCodeAt());

      // 新建一个数组利用forEach遍历 把首字母相同的放到一个对象里面
      const city = {};
      this.pinyinFrist.forEach((item) => {
        const first = item.short;
        if (city[first]) {
          city[first].push(item);
        } else {
          city[first] = [item];
        }
      });
      // 对象转为数组

      for (const key in city) {
        this.citys.push({
          name: key,
          label: city[key],
        });
      }
      // this.aaa = this.citys.label;
      this.aaa.push();
    },
    event(a, b) {
      console.log(a, b);
      this.$store.commit("getHotCity", a);
      this.$store.commit("getCityNowValue", b);
      this.$router.back();
    },
  },
  computed: {
    ...mapState(["hotCityNow"]),
  },
};
</script>

<style scoped lang="less">
.title {
  color: #ccc;
  padding-left: 18px;
}
.box {
  padding: 0 15px;
  border-bottom: 1px solid #eee;
  color: #333;
}
</style>
