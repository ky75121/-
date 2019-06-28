import axios from 'axios' 
// axios  请求返回的是一个promise  axios是基于一个promise 一个库 
// 轮播图 export导出 的是一个接口不能是一个值 
 const getBanner = ()=> axios.get('http://localhost:3000/banner')


export{
    getBanner
}

