import axios from "axios";
import {Message} from "element-ui";
//统一设置baseUrl
axios.defaults.baseURL = 'http://localhost:8001/';

axios.interceptors.response.use(function (response) {
    let{status,message,data}=response.data;
    if(status==2001){
        return data;
    }else{
        Message.error(message);
        //代码阻断掉 不往下执行
        Promise.reject(false);
    }
    return response
},function (error) {
    return Promise.reject(error);
})


export default axios;
