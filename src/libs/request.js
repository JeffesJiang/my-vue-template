import axios from 'axios';
import { get } from 'lodash';

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
});

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent
    return config;
  },
  error => {
    // do something with request error
    console.log(error); // for debug
    return Promise.reject(error);
  }
);

// response interceptor
service.interceptors.response.use(
  response => {
    const res = response.data;

    // if the custom code is not 200, it is judged as an error.
    if (res.code !== 200) {
      return Promise.reject(new Error(res.msg || 'Error'));
    } else {
      return res;
    }
  },
  error => {
    console.log('err' + error); // for debug

    const status = get(error, 'response.status');
    switch (status) {
      case 400: error.message = '请求错误'; break;
      case 401: error.message = '未授权，请登录'; break;
      case 403: error.message = '拒绝访问'; break;
      case 404: error.message = `请求地址出错: ${error.response.config.url}`; break;
      case 408: error.message = '请求超时'; break;
      case 500: error.message = '服务器内部错误'; break;
      case 501: error.message = '服务未实现'; break;
      case 502: error.message = '网关错误'; break;
      case 503: error.message = '服务不可用'; break;
      case 504: error.message = '网关超时'; break;
      case 505: error.message = 'HTTP版本不受支持'; break;
      default: break;
    }

    return Promise.reject(error);
  }
);

export default service;
