<template>
  <div>
    <!-- top -->
    <van-search show-action readonly placeholder="请输入小区或地址">
      <template #left>
        <van-icon @click="goBack" name="arrow-left" />
      </template>
      <template #label>
        {{ hotCityNow }}
        <van-icon @click="goAddress" name="arrow-down" />
      </template>
      <template #action>
        <van-icon @click="goMap" name="location-o" />
      </template>
    </van-search>
    <!-- 导航区域 -->

    <!-- 区域 -->
    <van-dropdown-menu>
      <van-dropdown-item>
        <template #title>
          <span>区域</span>
        </template>
        <template #default
          ><van-picker :columns="columns">
            <template #columns-bottom>
              <div class="btn">
                <van-button class="quxiao" plain type="primary">取消</van-button
                ><van-button class="queren" type="primary">确认</van-button>
              </div>
            </template></van-picker
          >
        </template></van-dropdown-item
      >

      <!-- 方式 -->
      <van-dropdown-item>
        <template #title> <span>方式</span></template>
        <template #default
          ><van-picker :columns="rentType">
            <template #columns-bottom>
              <div class="btn">
                <van-button class="quxiao" plain type="primary">取消</van-button
                ><van-button class="queren" type="primary">确认</van-button>
              </div>
            </template></van-picker
          >
        </template>
      </van-dropdown-item>

      <!-- 租金 -->
      <van-dropdown-item>
        <template #title>
          <span>租金</span>
        </template>
        <template #default
          ><van-picker :columns="price">
            <template #columns-bottom>
              <div class="btn">
                <van-button class="quxiao" plain type="primary">取消</van-button
                ><van-button class="queren" type="primary">确认</van-button>
              </div>
            </template></van-picker
          >
        </template>
      </van-dropdown-item>

      <!-- 筛选 -->
      <van-dropdown-item>
        <template #title>
          <span>筛选</span>
        </template>
      </van-dropdown-item>
    </van-dropdown-menu>

    <!-- 列表渲染区域 -->
    <listcontent :list="list"></listcontent>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { QueryHouses, getCityInfo, ConditionsHouses } from "@/api";
import { setLocal, getLocal } from "@/api/store";
import listcontent from "@/components/List.vue";
export default {
  components: { listcontent }, //listcontent
  data() {
    return {
      list: getLocal("GETTHOUSE") || [],
      houseValue: "",
      rentType: [],
      price: [],
      columns: [
        { text: "区域", children: [] },
        { text: "地铁", children: [] },
      ],
    };
  },
  created() {
    this.getCityInfo();
    this.QueryHouses();
    this.ConditionsHouses();
    this.RenderCity();
  },
  computed: {
    ...mapState(["hotCityNow", "hotCityNowValue"]),
  },
  methods: {
    goBack() {
      this.$router.push("/layout/home");
    },
    goAddress() {
      this.$router.push("/dang");
    },
    goMap() {
      this.$router.push("/address");
    },
    //获得当前页面的value值
    async getCityInfo() {
      const res = await getCityInfo(this.hotCityNow);
      this.houseValue = res.data.body.value;
    },
    //渲染当前页面  的列表
    async QueryHouses() {
      try {
        const res = await QueryHouses(this.houseValue);
        setLocal("GETTHOUSE", res.data.body.list);
      } catch (e) {
        console.log(e);
      }
    },
    //获取房屋查询条件
    async ConditionsHouses() {
      try {
        const res = await ConditionsHouses(this.hotCityNowValue);
        console.log(res);
        //方式
        const NewrentType = [];
        res.data.body.rentType.forEach((item) => {
          NewrentType.push(item.label);
        });
        this.rentType = NewrentType;
        //租金
        const Newprice = [];
        res.data.body.price.forEach((item) => {
          Newprice.push(item.label);
        });
        this.price = Newprice;
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>

<style scoped lang="less">
.van-search--show-action {
  width: 100%;
  height: 50px;
  background-color: #21b97a;
}
.van-icon-arrow-left:before {
  font-size: 30px;
  color: #fff;
  margin-left: -10px;
  margin-right: 20px;
}

/deep/.btn {
  display: flex;
  .quxiao {
    height: 50px;
    width: 138px;
    color: #21b97a;
    font-size: 18px;
  }
  .queren {
    height: 50px;
    width: 276px;
    color: #ffff;
    font-size: 18px;
    background-color: #21b97a;
  }
}
</style>
