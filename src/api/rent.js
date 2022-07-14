import axios from "@/untils/request.js";

//查看已发布房源
export const getHousing = (a) => {
  return axios({
    url: "/user/houses",
    headers: { authorization: `${a}` },
  });
};
//下架房源
// export const ShelvesHousing = (a, id, shelf) => {
//   return axios({
//     url: "/user/houses/`${id}`",
//     headers: { authorization: `${a}` },
//     shelf,
//   });
// };
