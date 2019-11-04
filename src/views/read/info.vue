<template>
    <div class="info" v-if="data.length!=0 && wonderfulData.length!=0">
        <div class="header">
           <span class="iconfont" @click="back">&#xe610;</span>
           <span>{{data.title}}</span>
           <span class="iconfont" @click="refresh">&#xe621;</span>
        </div>
        <div class="occ"></div>
        <div class="content">
            <div class="img">
                 <img :src="data.cover">
            </div>
            <div class="Introduction">
               <span class="title">{{data.title}}</span> 
               <span>{{data.author}}</span>  
               <span>{{data.majorCate}}</span>   
               <span>{{data.minorCate}}</span> 
               <span>{{data.wordCount}}字</span>   
            </div>
        </div>
        <div class="conclusion">
            {{data.longIntro}}  
        </div>
        <div class="titlebar">
            <div class="left">
                <span class="t_mark"></span>
                <span>精彩推荐</span>
            </div>
            <div class="right">
                 <router-link :to="{name:'more',params:{type:'hot-total'}}" tag="span">
                   更多
                </router-link>
            </div>
        </div>
        <div class="bookcontent" >
                <Bookitem mark="bookshop" v-for="data in wonderfulData" :key="data._id+Math.random()" :data="data"></Bookitem>
        </div>
        <div class="footer">
           <button @click="toggbook(isbook)">{{!isbook?"加入书架":"移出书架"}}</button>
           <button @click="opencata(data._id)">开始阅读</button>
        </div>
    </div>
</template>

<script>
import api from "@/axios/api"//引入api
import { Toast } from 'mint-ui';//引入mint-ui toast
import Bookitem from "@/views/bookrack"// 引入书籍模板
import {mapActions} from "vuex" //引入状态管理
export default {
    components:{
        Bookitem
    },
    data(){
        return{
            data:[],
            wonderfulData:[],
            isbook:false,//是否在书架默认不是
        }
    },
    methods:{
         ...mapActions(["addBooks","removeBooks"]),
        //返回上一级
        back(){
            this.$router.go(-1)
        },
        //刷新
        refresh(){
            this.$router.go(0)
        },
        //加入移除书架
        toggbook(type){
          if(!type){
              this.addBooks(this.data)
              this.isbook=true
          }else{
              this.removeBooks(this.data)
               this.isbook=false
          }
        },
        //章节列表
        opencata(id){
            this.$router.push({name:"catas",params:{id:id}})
        },
    },
    watch :{
    　  $route: function (to, from) {
            this.$router.go(0)
    　　}
    },
    created(){
        const prompt_toast = Toast({
                message:"努力奋斗ing",
                duration:-1,
                iconClass: 'fa iconfont icon-shuaxin fa-spin'
        });
        api.IN_ID_BOOK(this.$route.params.id).then(res=>{
            this.data=res.data
            if(this.data.length!=0 && this.wonderfulData.length!=0){
             prompt_toast.close();
            }
        })
        api.RANK("hot-total").then(res=>{
            this.wonderfulData=res.data
            if(this.data.length!=0 && this.wonderfulData.length!=0){
             prompt_toast.close();
            }
        })
        
    }
}
</script>

<style lang="scss" scoped>
    .header{
        height:0.4rem;
        width: 100%;
        background:#00bbff;
        position: fixed;
        top:0;
        display: flex;
        justify-content:space-between;
        align-items: center;
        color:#fff;
        font-size:16px;
        .iconfont{
            color:#fff;
            font-size:24px;
            margin:0 0.05rem;
        }
    }
    .content{
        display: flex;
        align-items: center;
        .img{
            margin-left:0.05rem;
            img{
                width:1.6rem;
                height:2.2rem;
                border-radius: 0.08rem;
                border:1px solid #00bbff;
            }
        }
        .Introduction{
            display: flex;
            flex-direction: column;
            color:#00bbff;
            margin-left:0.5rem;
            span{
                margin:0.06rem 0;
            }
            .title{
                font-size:24px;
            }
        }
    }
    .conclusion{
        margin-top:0.15rem;
        color: #00BFFF;
        font-size:14px;
        height: 0.8rem;
        line-height: 0.2rem;
        display: -webkit-box;
        padding:0 0.1rem;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
        word-break: break-all;
        text-overflow: ellipsis;
        overflow: hidden;    
    }
    .titlebar{
        margin-top:0.1rem;
    }
    .footer{
        height:0.4rem;
        width: 100%;
        // background:#00bbff;
        position: fixed;
        bottom:0;
        display: flex;
        button{
            background:#00bbff;
            border:none;
            border-radius: 0.1rem;
            width:50%;
            height:100%;
            color: #fff;
            font-size:16px;
        }
    }
</style>