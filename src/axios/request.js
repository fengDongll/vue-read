import axios from "axios";
import qs from "qs";
//创建axios实例
const service = axios.create({
    timeout: 1000000  // 请求超时时间
});
// request拦截器  在请求之前做出验证 可以进行 会员限制
service.interceptors.request.use(
  config => config,
  error => error
)
service.interceptors.response.use(
  response=>response,
  error=> error 

);

export default service
  