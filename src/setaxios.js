 import axios from "axios"
 import router from "./router"
 import store from "./store"
 
 export default function setAxios(){
    //请求拦截 
    axios.interceptors.request.use(
         config=>{
             if(store.state.token){
                 config.headers.token=store.state.token
             }
             return config
         }
     )
     //每次请求有返回的，都是先经过拦截器
         axios.interceptors.response.use(
             response=>{
                 if(response.status==200){
                    const data=response.data 
                    if(data.code==-1){
                        //登陆过期,重启登录,清空vuex的token和localstorage的token
                        store.commit("settoken")
                        localStorage.removeItem("token")
                        //跳转到login页面
                        router.replace({path:"/login"})

                    }
                    return data
                 }
                 return response
             }
         )
 }