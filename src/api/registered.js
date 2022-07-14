//注册
import axios from "@/untils/request";
//用户注册
export const registered = (data) => {
  return axios({
    method: "POST",
    url: "/user/registered",
    data,
  });
};
