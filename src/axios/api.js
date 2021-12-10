import {
  post,
  get,
  Uploadpost
} from "./config";

let img;
if (process.env.NODE_ENV === 'development') {
  img = process.env.REACT_APP_API; // 一只老鹰
} else if (process.env.NODE_ENV === 'production') {
  //线上环境
  img = 'https://api.yzlyxds.com'; // 一只老鹰
}

export const imgpath = img;
export const upload_img = data => Uploadpost('api/Common/upload', data);
export const collectPointdata = data => post('api/web/getCommoditySuyuan', data);//测试
export const CreateOrder = data => get('', data);
