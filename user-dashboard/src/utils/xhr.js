import axios from 'axios'
const BASE_URL='https://dev.r1992.com/dev/api';
export const URL={
    userLogin:{
        url:BASE_URL+'/user/login',
        method:'post'
    }
};
const XHR=(name,jsonData)=>{
    if(URL[name]){
        if(URL[name].method==='post'){
            return new Promise((resolve, reject)=>{
                REQUESTS.post(URL[name].url,jsonData)
                    .then(res=>{
                        if(res.data){
                            resolve(res.data)
                        }
                    })
                    .catch(err=>{
                        if(err.response){
                            if(err.response.status===403){//未登录
                                reject({'message':'未登录'})
                            }else{
                                reject({'message':err.response.data.message})
                            }
                        }else if(err.request){
                            console.log(err.request);
                        }else{
                            console.log('Error', err.message);
                        }
                        reject({'message':'你的请求出错啦'})
                    })

            })
        }else if(URL[name].method==='get'){
            return new Promise((resolve, reject)=>{
                REQUESTS.get(URL[name].url,jsonData)
                    .then(res=>{
                        if(res.data){
                            resolve(res.data)
                        }
                    })
                    .catch(err=>{
                        if(err.response){
                            if(err.response.status===403){//未登录
                                reject({'message':'未登录'})
                            }else{
                                reject({'message':err.response.data.message})
                            }
                        }else if(err.request){
                            console.log(err.request);
                        }else{
                            console.log('Error', err.message);
                        }
                        reject({'message':'你的请求出错啦'})
                    })

            })
        }
    }else{
        return false
    }
};
const REQUESTS={
    post:function(url,jsonData){
        return axios.post(url,jsonData)
    },
    get:function(url,jsonData){
        return axios.get(url,{params:jsonData})
    }
};
export default XHR
