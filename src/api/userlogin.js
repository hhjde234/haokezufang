import axios from "@/untils/request";
//用户登录
export const userlogin = (data) => {
  return axios({
    method: "POST",
    url: "/user/login",
    data,
  });
};
