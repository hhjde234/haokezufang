import axios from "@/untils/request";
// 获取my 页面的 用户信息 接口
export const getUserInfo = (a) =>
  axios({
    url: "/user",
    headers: { authorization: `${a}` },
  });
