import {
  post,
  get,
  Uploadpost
} from "./config";

let img;
if (process.env.NODE_ENV === 'development') {
  img = process.env.VUE_APP_ONE_API; // 一只老鹰
} else if (process.env.NODE_ENV === 'production') {
  //线上环境
  img = 'https://api.yzlyxds.com'; // 一只老鹰
}
export const imgpath = img;
export const upload = data => Uploadpost('', data); //上传图片
export const collectPointdata = data => post('api/web/getCommoditySuyuan', data);//测试
export const CreateOrder = data => get('', data);