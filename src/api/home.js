import axios from '@/untils/request'
// 租房小组
export const Rent = (area) =>
  axios({
    url: '/home/groups',
    params: { area }
  })
