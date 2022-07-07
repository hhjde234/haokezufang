import Vue from "vue";
import Vuex from "vuex";
import { getLocal, setLocal } from "@/api/store.js";
Vue.use(Vuex);

export default new Vuex.Store({
  //用户存储全局状态数据
  state: {
    user: getLocal("TOKEN"),
  },
  getters: {},
  //只允许有同步状态
  //修改状态的唯一入口
  mutations: {
    setToken(state, token) {
      state.user = token;
      localStorage.setItem("TOKEN", JSON.stringify(token));
      setLocal("TOKEN", token);
    },
  },
  //异步状态修改
  actions: {},
  modules: {},
});
