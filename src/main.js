import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//引入axios 并拓展他的方法绑定到vue实例
import axios from "axios"
Vue.prototype.$http = axios
//引入根字体大小设置
import "./modules/rem.js"
//加载通用样式main.scss文件  webpack all in js
import "./stylesheets/main.scss"
//引入icon模块
import Icon from 'vue-svg-icon/Icon.vue'
Vue.component('icon', Icon)
// mint-ui  按需引入css input框
import { Search , Button ,InfiniteScroll} from 'mint-ui';
Vue.component("mt-search", Search);

// button按钮
Vue.component("mt-button", Button);
//无限滚动
Vue.use(InfiniteScroll);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
