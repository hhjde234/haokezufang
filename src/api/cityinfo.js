import axios from "@/untils/request";

//根据城市名称查询该城市信息  没用到
//妈的 在当前城市列表就已经获取了当前城市的value值并且持久化了呜呜呜
export const getCityInfo = (name) => {
  return axios({
    method: "GET",
    url: "/area/info",
    params: { name },
  });
};

//根据条件查询房屋所需要的各种数据
export const QueryHouses = (cityId) => {
  return axios({
    method: "GET",
    url: "/houses",
    params: { cityId },
  });
};

// 获取房屋查询条件
export const ConditionsHouses = (id) => {
  return axios({
    method: "GET",
    url: "/houses/condition",
    params: { id },
  });
};
