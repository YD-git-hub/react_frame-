import axios from 'axios'; // 引入axios
import QS from 'qs'; // 引入qs模块，用来序列化post类型的数据，后面会提到

import {Message} from "element-react"
let reqList = []
let Cancel_url=['/api/Address/address','/api/Order/confirm_order','/api/index/createOrder','api/index/wx','/api/index/bage','/api/Sms/send']//拦截名单

/**
 * 阻止重复请求
 * @param {array} reqList - 请求缓存列表
 * @param {string} url - 当前请求地址
 * @param {function} cancel - 请求中断函数
 * @param {string} errorMessage - 请求中断时需要显示的错误信息
 */
const stopRepeatRequest = function (reqList, url, cancel, errorMessage) {
  const errorMsg = errorMessage || ''
  for (let i = 0; i < reqList.length; i++) {
    if (reqList[i] === url) {
      cancel(errorMsg)
      return
    }
  }
  reqList.push(url)
}

/**
 * 允许某个请求可以继续进行
 * @param {array} reqList 全部请求列表
 * @param {string} url 请求地址
 */
const allowRequest = function (reqList, url) {
  for (let i = 0; i < reqList.length; i++) {
    if (reqList[i] === url) {
      reqList.splice(i, 1)
      break
    }
  }
}

if (process.env.NODE_ENV === 'development') {
  //本地(开发)环境
  axios.defaults.baseURL = process.env.VUE_APP_ONE_API;
} else if (process.env.NODE_ENV === 'production') {
  //线上（开发）环境
  axios.defaults.baseURL = ''; // 一只老鹰
}

axios.defaults.timeout = 10000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
// 请求拦截器
axios.interceptors.request.use(
  config => {
    let cancel
    // 设置cancelToken对象
    config.cancelToken = new axios.CancelToken(function (c) {
      cancel = c
    })
    if (Cancel_url.includes(config.url)) {
      // 阻止重复请求。当上个请求未完成时，相同的请求不会进行
      stopRepeatRequest(reqList, config.url, cancel, `${config.url} 请求被中断`);
    }
    // if (store.state.token) {
    //   config.headers.token = store.state.token;
    // }
    // if(config.url!='/api/index/search/searchName'){

    // }
    return config;
  },
  error => {
    return Promise.error(error);
  });

// 响应拦截器
axios.interceptors.response.use(
  response => {
    setTimeout(() => {
      allowRequest(reqList, response.config.url)
    }, 1000);
    if (response.status === 200) {
      console.log(333)
      return response.data;
    }
  },
  error => {
    if (axios.isCancel(error)) {
      console.log(error.message);
    } else {
      // 增加延迟，相同请求不得在短时间内重复发送
      setTimeout(() => {
        allowRequest(reqList, error.config.url)
      }, 1000)
    }
    if (error && error.response && error.response.status) {
      switch (error.response.status) {
        // 401: 未登录
        case 401:
          Message({
            type:'warning',
            message:'401'
          })
          break;
          // 404请求不存在
        case 404:
          Message({
            type:'warning',
            message:'!网络请求不存在'
          })
          break;
          // 其他错误，直接抛出错误提示
        case 500:
          Message({
            type:'warning',
            message:'!服务器出小差了'
          })
          break;
        default:
          Message({
            type:'warning',
            message:error.response.data.message
          })
          break;
      }
      return Promise.reject(error.response);
    }
  }
);

/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get(url, params) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
        params: params
      })
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
}

/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function post(url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, QS.stringify(params))
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
}

export function Uploadpost(url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, params, {
        headers: {
          'Content-Type': 'multipart/form-data;charset=UTF-8'
        }
      })
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err.data);
      });
  });
}
