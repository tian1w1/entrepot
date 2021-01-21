import Fetch from "../util/fetch";
//密码登陆
export const loginpassword = data => Fetch.post("/login", data);
//获取个人数据
export const grzy = data => Fetch.get("/userInfo");
// console.log(grzy)
// 修改头像
export const xgtx = data => Fetch.post(`/public/img`, data);
// 修改用户信息名字头像
export const xgxx = data => Fetch.put(`/user`, data);
//城市省级
export const sheng = data => Fetch.get(`/sonArea/${data}`);
//验证码
export const yzm = data => Fetch.post(`/smsCode`, data);
export const login = data => Fetch.post("/login", data);
//我的收藏
export const wdsc = data =>
  Fetch.get(
    `/collect?page=${data.page}&limit=${data.limit}&type=1&token=${data.token}`
  );
