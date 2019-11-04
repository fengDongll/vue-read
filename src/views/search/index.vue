<template>
    <div class="search"
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="0"
    >
         <!-- 头部 -->
        <Header  :showtitle="false" :showsearch="true" :showsearchbtn="true" @search="search" ref="headerKey"></Header>
        <!-- 占位 -->
        <div class="occ"></div>
        <!-- 热搜词 -->
        <div class="hot_search" v-if="data.length===0">
            <div class="title">热搜关键词</div> 
            <div class="hot_area">
                <span v-for="(data,index) in hotdata" :key="index" >{{data.title}}</span>  
            </div>   
        </div>
        <div class="history" v-if="data.length===0">
             <div class="title">历史搜索</div> 
              <div class="hot_area">
               <span v-for="(data,index) in hotdata" :key="index" >{{data.title}}</span>  
           
             </div>   
        </div>
        <Bookitem  
        v-for="book in data" 
        :key="book._id+Math.random()" 
        :data="book"
       
        ></Bookitem>
        <!-- 底部 -->
        <Tabbar></Tabbar>
    </div>
</template>

<script>
import Tabbar from "@/components/TabBar"// 引入底部
import Header from "@/components/Header"// 引入头部
import api from "@/axios/api"//引入api
import { Toast } from 'mint-ui';//引入mint-ui toast
import Bookitem from "@/views/search/bookitem"// 引入书籍样式模块
export default {
    name:'search',
    components:{
        Tabbar,Header,Bookitem
    },
    data(){
        return{
            data:[],
            limit:4,
            page:0,
            loading:true,  //默认关闭无限滚动
            hasMore:true,    //默认有更多数据
            hotdata:[],
            historydata:[],
            isone:true //是不是第一次默认是第一次
        }
    },
    created(){
        //热词
        api.HOT_ANTISTOP(15).then(res=>{
            this.hotdata=res.data
        })
    },
    methods:{
         search(){
            this.data = [];//每次类型切换的时候，数组清空
            this.page = 0;//每次类型切换的时候，页码从第一页开始
            this.hasMore = true;//有更多数据
            if(this.$refs.headerKey.keys==""){
                return  false;
            }else{
                this.searchAPI()
            }
        },
        loadMore(){
            if(!this.hasMore){ //没有更多数据
                Toast({
                    message:"到底了~~~",
                    position:"bottom"
                })
                this.loading = true;//关闭无限滚动  loadMore方法就不会进来了
                return false;
            }
             this.searchAPI()
        },
        searchAPI(){
            let instance = Toast({
                message:"努力奋斗ing",
                duration:-1,
                iconClass: 'fa iconfont icon-shuaxin fa-spin'
            });
           
            this.loading = true;//关闭无限滚动
           api.IN_NAME_BOOK(this.$refs.headerKey.keys,this.limit).then(res=>{
                this.data = this.data.concat(res.data.books)  
                this.loading = false;//开启无限滚动
                instance.close();//关闭loading弹出框
                if(res.data.books==0){
                    this.hasMore = false //代表没有更多数据了
                    return false;
                }
                this.page++
            })
           
        }
    },
    activated(){
        //不是第一次而且 搜索数据不是空
        if(!this.isone && this.data.length!=0){
            this.loading = false;//继续开启无限滚动
        }
        
    },
    deactivated(){
        this.loading = true;//关闭无限滚动
        this.isone=false;//不是第一次了
        
    }
}
</script>

<style lang="scss" scoped>
    .title{
        font-size:24px;
        text-indent: 0.15rem;
        margin-top:0.2rem;
        color:#00bbff;
    }
  
    .hot_area{
        margin-top:0.1rem;
        span{
            display: block;
            float: left;
            line-height:0.32rem;
            font-size:16px;
            border: 1px solid#00bbff;
            background: #00bbff;
            color:#fff;
            margin:0.02rem;
            padding:0 0.05rem;
            border-radius: 0.12rem;
        }
        &:after{
        content:".";
        clear:both;
        display:block;
        height:0;
        overflow:hidden;
        visibility:hidden;
        }
    }
    
</style>