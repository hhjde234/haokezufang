<template>
  <div>
    <!-- top -->
    <van-nav-bar
      class="top"
      title="账号登陆"
      left-arrow
      @click-left="onClickLeft"
    />
    <!-- 表单 -->
    <div class="froms">
      <van-form @submit="onSubmit">
        <van-field
          v-model="body.username"
          name="username"
          label="用户名"
          placeholder="用户名"
          autocomplete
          :rules="rules.use"
        />
        <van-field
          v-model="body.password"
          type="password"
          name="password"
          label="密码"
          autocomplete
          placeholder="密码"
          :rules="rules.pass"
        />
        <div style="margin: 16px">
          <van-button class="btn" round block type="info" native-type="submit"
            >登录</van-button
          >
        </div>
      </van-form>
    </div>
    <!-- 底部文字 -->
    <div class="txt" @click="goRegistered">还没有账号,去注册~</div>
  </div>
</template>

<script>
import { userlogin } from "@/api";
import { Toast } from "vant";
export default {
  data() {
    return {
      body: { username: "", password: "" },
      rules: {
        use: [
          { required: true, message: "请填写用户名" },
          {
            pattern: /^[a-zA-Z0-9]{5,8}$/,
            message: "用户名格式为5-8位的字母和数字",
          },
        ],
        pass: [
          { required: true, message: "请填写用户名" },
          {
            pattern: /^[a-zA-Z0-9]{5,12}$/,
            message: "密码格式为5-8位的字母和数字",
          },
        ],
      },
    };
  },
  methods: {
    goRegistered() {
      this.$router.push("/registered");
    },
    async onSubmit() {
      try {
        const res = await userlogin(this.body);
        console.log(res);
        this.$store.commit("setToken", res.data.body.token);
        Toast.success(res.data.description);
        this.$router.push("/layout/my");
      } catch (e) {
        console.log(e.data.description);
      }
    },
    onClickLeft() {
      this.$router.push("/layout/my");
    },
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
.froms {
  margin-top: 50px;
}
.btn {
  background-color: #21b97a;
}
.txt {
  color: #666;
  font-size: 12px;
  margin-top: 20px;
  margin-left: 130px;
}
</style>
