import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    //设置默认页面home
    {
      path: '/',
      redirect: '/home',
    },
    //home页面路由
    {
      path: '/home',
      name: 'home',
      component:()=>import("@/views/Home.vue")
    },
    //配置rank排行榜路由
    {
      path: '/rank',
      name: 'rank',
      component:()=>import("@/views/rank")
    },
    //配置serach搜索路由
    {
      path: '/search',
      name: 'search',
      component:()=>import("@/views/search")
    },
    //配置classify分类路由
    {
      path: '/classify',
      name: 'classify',
      component:()=>import("@/views/classify")
    },
    //配置排行页面 ranklist
    {
      path: '/ranklist:key',
      name: 'ranklist',
      component:()=>import("@/views/rank/ranklist")
    },
    //配置小说阅读页面路由
    {
      path: '/read:link',
      name: 'read',
      component:()=>import("@/views/read/read")
    },
    //配置小说信息页面路由
    {
      path: '/info:id',
      name: 'info',
      component:()=>import("@/views/read/info")
    },
  ]
})
