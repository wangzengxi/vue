import axios from 'axios'
import store from '../store/'
import router from '../router/'

// 默认配置
axios.defaults.baseURL = 'http://192.168.10.185:3000'
axios.defaults.timeout = 5000;
// axios.defaults.headers.post['Content-Type'] = 'application/json'

export const request = (config) => {
  return axios(config)
}

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  if(store.state.token){
    config.headers.common['Authorization'] = store.state.token;
  };
  console.log(1,config)
  return config;
}, function (error) {
  console.log(2)
  return Promise.reject(error);
});


// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  console.log(3,response)
  return response;
}, function (error) {
console.log(4)
  if (error.response) {
    switch (error.response.status) {
      case 401:
        // 返回 401 清除token信息并跳转到登录页面
        console.log('登录超时')
        router.replace({
          path: '/',
          query: {redirect: router.currentRoute.fullPath}
        })
    }
  }
  return Promise.reject(error)   // 返回接口返回的错误信息
});