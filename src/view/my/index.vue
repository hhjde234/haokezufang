<template>
  <div>
    <!-- 上半部分  未登录 -->
    <div class="mytop" v-if="!user">
      <img
        class="bj"
        src="http://liufusong.top:8080/img/profile/bg.png"
        alt="背景图"
      />
      <div class="tupian">
        <!-- 头像 -->
        <div class="myicon">
          <img
            src="	http://liufusong.top:8080/img/profile/avatar.png"
            alt="头像"
          />
        </div>
        <div class="text"><span>游客</span></div>
        <div class="btn">
          <van-button type="primary" to="/userlogin">去登陆</van-button>
        </div>
      </div>
    </div>
    <!-- 上半部分  已登录 -->
    <div class="mytop1" v-else>
      <img
        class="My_bg__2j-VX"
        src="http://liufusong.top:8080/img/avatar.png"
        alt="背景图"
      />
      <div class="tupian1">
        <!-- 头像 -->
        <div class="myicon1">
          <img
            src="	http://liufusong.top:8080/img/profile/avatar.png"
            alt="头像"
          />
        </div>
        <div class="text1">
          <span>{{ userInfo.nickname }}</span>
        </div>
        <div class="btn1">
          <van-button type="primary" @click="delTOken">退出</van-button>
        </div>
        <van-cell class="sdf" title="编辑个人资料 >" />
      </div>
    </div>
    <!-- 下半部分 -->
    <van-grid class="botton" clickable :column-num="3">
      <van-grid-item icon="star-o" text="我的收藏" to="/" />
      <van-grid-item icon="wap-home-o" text="我的出租" to="/" />
      <van-grid-item icon="underway-o" text="看房记录" to="/" />
      <van-grid-item icon="refund-o" text="成为房主" to="/" />
      <van-grid-item icon="user-o" text="个人资料" to="/" />
      <van-grid-item icon="phone-circle-o" text="联系我们" to="/" />
    </van-grid>
    <div class="hk">
      <img
        src="	http://liufusong.top:8080/img/profile/join.png"
        alt="认识好客"
      />
    </div>
  </div>
</template>

<script>
import { getUserInfo } from "@/api";
import { mapState } from "vuex";
import { Dialog } from "vant";
export default {
  data() {
    return {
      userInfo: [],
    };
  },
  computed: {
    ...mapState(["user"]),
  },
  methods: {
    async delTOken() {
      await Dialog.confirm({
        title: "提示",
        message: "确认退出?",
      });
      console.log("确认退出");
      this.$store.commit("setToken", null);
      this.$router.push("/userlogin");
    },
    async getUserInfo() {
      const res = await getUserInfo(this.user);
      this.userInfo = res.data.body;
      console.log(this.userInfo);
    },
  },
  created() {
    this.getUserInfo();
  },
};
</script>

<style scoped lang="less">
.My_bg__2j-VX {
  width: 100%;
}
.mytop {
  margin-bottom: 100px;
}
.mytop1 {
  margin-bottom: 100px;
  position: relative;
}
.bj {
  width: 100%;
  height: 210px;
  position: relative;
}
.tupian {
  position: absolute;
  top: 140px;
  width: 320px;
  height: 165px;
  background: #fff;
  box-shadow: 0 0 10px 3px #ddd;
  margin-left: 30px;
}
.tupian1 {
  position: absolute;
  top: 175px;
  width: 320px;
  height: 250px;
  background: #fff;
  box-shadow: 0 0 10px 3px #ddd;
  margin-left: 30px;
}
/deep/.sdf {
  margin-left: 100px;
  color: #a5a8ad;
}
.myicon {
  border-radius: 50%;
  width: 70px;
  height: 70px;
  margin-top: -35px;
  margin-left: 120px;
  border: 5px solid #f5f5f5;
  display: inline-block;
  box-shadow: 0 2px 2px #bdbdbd;
  img {
    width: 100%;
  }
}
.myicon1 {
  border-radius: 50%;
  width: 70px;
  height: 70px;
  margin-top: -35px;
  margin-left: 120px;
  border: 5px solid #f5f5f5;
  display: inline-block;
  box-shadow: 0 2px 2px #bdbdbd;
  img {
    width: 100%;
  }
}
.btn {
  width: 70px;
  height: 39px;
  margin-top: 10px;
  margin-left: 125px;
  border-radius: 10px;
  .van-button {
    border-radius: 10px;
    background-color: #21b97a;
  }
}
.btn1 {
  width: 54px;
  margin-top: 10px;
  margin-left: 125px;
  border-radius: 30px;
  margin-bottom: 10px;
  .van-button {
    border-radius: 30px;
    height: 18px;
    color: #fff;
    padding: 2px 15px;
    background: #21b97a;
    font-size: 8px;
  }
}
.text {
  margin-top: 10px;
  margin-left: 150px;
  font-size: 12px;
}
.text1 {
  margin-top: 20px;
  margin-left: 125px;
  font-size: 12px;
}
.hk {
  margin: 10px auto;
  width: 350px;
  height: 94px;
  img {
    width: 100%;
  }
}
</style>
