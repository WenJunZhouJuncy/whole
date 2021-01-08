import axios from 'axios';
// 创建axios实例
// const BASEURL = process.env.NODE_ENV === 'production' ? '' : '/api';
const service = axios.create({
  // baseURL: process.env.VUE_APP_PORTALAPI|| '',
  timeout: 10000, // 请求超时时间      
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
  //axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";  
 /* withCredentials: false,
   headers:{
      'Access-Control-Allow-Origin': '*',
    }, */
})
// 添加request拦截器 
service.interceptors.request.use(config => {
  let token = localStorage.getItem('token');
  if (token) {
      config.headers.Authorization = "Bearer " + token;
  }
  return config
}, error => {
  Promise.reject(error)
})
// 添加respone拦截器
// response interceptor

service.interceptors.response.use(                  
  response => {
    console.log(response,'response');
    let res={}; 
    res.status=response.status
    res.data=response.data;
    return res.data;
  },
  error => {
    console.log(error,'error');
    // if (error == 'Error: Request failed with status code 401') {
    //   console.log('token过期')
    // }        
    return Promise.reject(error)
  }
)

// service.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';


//不要忘记export
export default service