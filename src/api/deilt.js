import axios from "@/untils/request";
// 租房小组
export const DEilt = (id) =>
  axios({
    url: `/houses/${id}`,
  });
