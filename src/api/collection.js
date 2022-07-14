import axios from "@/untils/request";
// 查看房屋收藏列表
export const SeeCollection = (a) => {
  return axios({
    url: "/user/favorites",
    headers: { authorization: `${a}` },
  });
};
