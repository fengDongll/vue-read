<template>
    <div class="search"
          v-infinite-scroll="loadMore"
          infinite-scroll-disabled="loading"
          infinite-scroll-distance="0"
         
    >
        <Header 
        :back-visible="false" 
        :search-visible="true" 
        :mineVisible="false"
        :editVisible="false"
        title="搜索" 
         >
        </Header>
        <div class="hezi"></div>
            <div class="ipsearch" >
                <mt-search v-model="key"></mt-search>
            </div>
            <!-- <div class="btn">
                <mt-button class="searchBtn" type="primary" 
                @click="SearchBtn"
                >开始搜索</mt-button>
            </div> -->
            <div class="ls-content">
                <ul>
                    <li
                        v-for="book in books"
                            :key="Math.random()+book._id"
                            @click="bookinfo(book._id)"
                    >
                       
                            <span><img :src="book.cover" alt=""></span>
                            <div class="write">
                                <span><h4>书名：{{book.title}}</h4></span>
                                <span>类别:{{book.cat}}</span>
                                <span>作者:{{book.author}}</span>
                                <span class="about">简介:{{book.longIntro}}</span>
                                <span>总字数:{{book.wordCount}}</span>

                            </div>
                       
                    </li>

                </ul>
            </div>
         
           
           
         
         <BottomNav></BottomNav> 
    </div>
</template>

<script>
//引入底部导航
import BottomNav from "@/components/bottomNav"
//引入头部
import Header from "@/components/header"
//引入mint-ui toast
import { Toast } from 'mint-ui';
export default {
    data(){
        return{
            books:[],
            limit:6,
            page:0,
            key:"",
            loading:true,  //默认关闭无限滚动
            hasMore:true    //默认有更多数据
        }
    },
     watch:{
        key(val){
            this.books = [];//每次类型切换的时候，数组清空
            this.page = 0;//每次类型切换的时候，页码从第一页开始
            this.hasMore = true;//有更多数据
            if(val==""){
                return  false;
            }else{
                this.SearchBtn()
            }
           
        }
    },
    methods:{
        bookinfo(id){
           this.$router.push({name:"info",params:{id}})
        },
        loadMore(){
           if(!this.hasMore){ //没有更多数据
                Toast({
                    message:"我是有底线的...",
                    position:"bottom"
                })
                this.loading = true;//关闭无限滚动  loadMore方法就不会进来了
                return false;
            }
            this.SearchBtn()
           
        },
        SearchBtn(){
            let instance = Toast({
                message:"正在加载中...",
                duration:-1,
                iconClass: 'fa fa-cog fa-spin'
            });
            let {limit,page,key} = this; 
            this.loading = true;//关闭无限滚动
            this.$http.get("/api/bookname",{
                params:{
                    key,
                    limit,
                    page
                }
            }).then(res=>{
                this.books = this.books.concat(res.data.books)  
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
    components:{
        BottomNav,Header
    }
}
</script>

<style lang="scss" scoped>
    .hezi{
          height:0.45rem;
    }
    .ipsearch{
        height:0.4rem;
        overflow: hidden;
        position: relative;
    background: red
    }
  
    .searchBtn{
        width:100%;
        height:0.3rem;
        border-radius: 0.2rem 0.2rem
    }
  
    
</style>