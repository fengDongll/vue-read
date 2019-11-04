<template>
    <div class="bookshop" >
         <!-- 头部 -->
        <Header  title="书城"  ></Header>
        <!-- 撑开头部 -->
        <div class="occ"></div>
        <!-- 内容分布 -->
        <!-- retainedData.length!=0&&endData.length!=0**potentialData.length!=0&& -->
        <div class="content" v-if="hotData.length!=0">
            
                <!-- 标题 -->
            <div class="titlebar">
                <div class="left">
                    <span class="t_mark"></span>
                    <span>热搜专区</span>
                </div>
                <div class="right">
                    <router-link :to="{name:'more',params:{type:'hotsearch-total'}}" tag="span">
                       更多
                    </router-link>
                </div>
            </div>
     
            <!-- 内容 -->
            <div class="bookcontent">
                <Bookitem mark="bookshop" v-for="data in hotData" :key="data._id+Math.random()" :data="data"></Bookitem>
     
            </div>
            <!-- 标题 -->
            <div class="titlebar">
                <div class="left">
                    <span class="t_mark"></span>
                    <span>潜力专区</span>
                </div>
                <div class="right">
                    <router-link :to="{name:'more',params:{type:'potenial-total'}}" tag="span">
                       更多
                    </router-link>
                </div>
            </div>
             <!-- 内容 -->
            <div class="bookcontent">
                <Bookitem mark="bookshop" v-for="data in potentialData" :key="data._id+Math.random()" :data="data"></Bookitem>
            </div>
            <!-- 标题 -->
            <div class="titlebar">
                <div class="left">
                    <span class="t_mark"></span>
                    <span>完结专区</span>
                </div>
                <div class="right">
                     <router-link :to="{name:'more',params:{type:'finish-total'}}" tag="span">
                       更多
                    </router-link>
                </div>
            </div>
             <!-- 内容 -->
            <div class="bookcontent">
                 <Bookitem mark="bookshop" v-for="data in endData" :key="data._id+Math.random()" :data="data"></Bookitem>
            </div>
            <!-- 标题 -->
            <div class="titlebar">
                <div class="left">
                    <span class="t_mark"></span>
                    <span>留存专区</span>
                </div>
                <div class="right">
                      <router-link :to="{name:'more',params:{type:'remain-total'}}" tag="span">
                       更多
                    </router-link>
                </div>
            </div>
             <!-- 内容 -->
            <div class="bookcontent">
                 <Bookitem mark="bookshop" v-for="data in retainedData" :key="data._id+Math.random()" :data="data"></Bookitem>
            </div>
        </div>
        <!-- 底部 -->
        <Tabbar></Tabbar>
    </div>
</template>

<script>
import Tabbar from "@/components/TabBar"// 引入底部
import Header from "@/components/Header"// 引入头部
import Bookitem from "@/views/bookrack"// 引入书籍模板
import { Toast } from 'mint-ui';//引入mint-ui toast
import api from "@/axios/api" //api
export default {
    name:'bookshop',
    components:{
        Tabbar,Header,Bookitem
    },
    data(){
        return {
            hotData:[],
            potentialData:[],
            endData:[],
            retainedData:[],
            prompt_toast:""
        }
    },
    created(){
        this.prompt_toast = Toast({
                message:"努力奋斗ing",
                duration:-1,
                iconClass: 'fa iconfont icon-shuaxin fa-spin'
        });
        //热搜
        api.RANK("hotsearch-total").then(res=>{
           this.hotData=res.data
           this.prompt_toast.close();
        })
        //潜力
        api.RANK("potenial-total").then(res=>{
           this.potentialData=res.data
        })
        //完结
        api.RANK("finish-total").then(res=>{
             this.endData=res.data
        })
        //留存
        api.RANK("remain-total").then(res=>{
           this.retainedData=res.data
           
        })
    },
    beforeRouteLeave(to, from, next) {
        //快速切换的时候关闭
        this.prompt_toast.close();
        next();
    }
  
}
</script>

<style lang="scss" scoped>
   .content{
       display: flex;
       flex-direction: column
   }
    
</style>