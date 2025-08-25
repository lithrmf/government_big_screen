import axios from 'axios'

// 创建axios实例
const request = axios.create({
  baseURL:'http://39.100.95.39:8089/',
  timeout:5000
})

// 添加请求拦截器
request.interceptors.request.use(config => {
  // 在发送请求前做些什么
  return config
}, error => {
  // 对错误请求做些什么
  return Promise.reject(error)
})

request.interceptors.response.use(response=>{
  // 2XX 范围内的状态码都会触发该函数
  // 对响应数据做些什么
  return response.data
},error=>{
  // 超出 2XX 范围的状态码都会触发该函数
  // 对响应错误做些什么
  return Promise.reject(error)
})

// 可以封装成更方便使用的形式（这里暂时没有用）
const http ={
    get( url:string , data:any ){
        return new Promise((resolve,reject)=>{
            request.get(url,{params:data})
            .then((res)=>{
                resolve(res)
            })
            .catch((error)=>{
                reject(error);
            })
        })
    },
    post( url:string , data:any ){
        return new Promise((resolve,reject)=>{
            request.post(url, data)
            .then((res)=>{
                resolve(res)
            })
            .catch((error)=>{
                reject(error);
            })
        })
    }
}

export default request