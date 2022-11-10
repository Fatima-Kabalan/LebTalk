// import axios from "axios";

// const baserURL = "http://127.0.0.1:8000/api"

// const axiosInstance = axios.create({
//     baseURL:baserURL,
//     headers:{
//         "Content-Type": "application/json",
//         "Access-Control-Allow-Origin": "*",
//     }
// });

// export function httpPost(url,data){
//     if(getApiToken()!= null){
//         return axiosInstance.post(url,data,{
//             headers:{'Authorization':"Bearer"+getApiToken()},
//         })
//     }
//     return axiosInstance.post(url,data);
// }

// export function httpGet(url){
//     if(getApiToken()!= null){
//         return axiosInstance.get(url,{
//             headers:{'Authorization':"Bearer"+getApiToken()},
//         })
//     }
//     return axiosInstance.get(url);
// }
