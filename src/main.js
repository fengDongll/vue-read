import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//引入根字体大小设置
import "./utils/rem.js"
//加载通用样式main.scss文件  webpack all in js
import "./stylesheets/main.scss"
import { Lazyload,InfiniteScroll} from 'mint-ui';
//图片懒加载
Vue.use(Lazyload);
//下拉刷新
Vue.use(InfiniteScroll);


Vue.config.productionTip = false




new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
