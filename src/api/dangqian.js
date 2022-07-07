import axios from "@/untils/request";
// 热门城市
export const Hotcity = () =>
  axios({
    url: "/area/hot",
  });
//城市列表
export const Citylist = (level) =>
  axios({
    url: "/area/city",
    params: { level },
  });
