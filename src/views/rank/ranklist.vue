<template>
    <div id="ranklist"
        v-infinite-scroll="loadMore"
          infinite-scroll-disabled="loading"
          infinite-scroll-distance="0"
    >
         <Header 
        :back-visible="true" 
        :search-visible="false" 
        :mineVisible="false"
        :editVisible="false"
        :title="name" 
         >
         </Header>
         <div class="hz"></div>
         <div class="tab">
             <ul>
                 <li @click="type='week'">周榜
                     <span :class="{active:type=='week'}"></span>
                 </li>
                 <li @click="type='month'">月榜
                     <span :class="{active:type=='month'}"></span>
                 </li>
                 <li @click="type='total'">总榜
                     <span :class="{active:type=='total'}"></span>
                 </li>
             </ul>
         </div>
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
        
    </div>
</template>

<script>

//引入头部
import Header from "@/components/header"
import { Toast } from 'mint-ui';
export default {
    data(){
        return{
            name:this.$route.params.name,
            type:'week',//默认是周
            books:[],
            limit:6,
            page:0,
            cycle:this.$route.params.key,
            loading:false,  //默认开启无限滚动
            hasMore:true    //默认有更多数据
        }
    },
    watch:{
        type(val){
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
            let {limit,page,cycle,type} = this; 
            this.loading = true;//关闭无限滚动
            this.$http.get("/api/ranklist",{
                params:{
                    cycle:cycle+"-"+type,
                    limit,
                    page
                }
            }).then(res=>{
                this.books = this.books.concat(res.data)  
                this.loading = false;//开启无限滚动
                instance.close();//关闭loading弹出框
                if(res.data==0){
                    this.hasMore = false //代表没有更多数据了
                    return false;
                }
                this.page++
            })
           
        }

    },
    components:{
        Header
    }
}
</script>

<style lang="scss" scoped>
    .tab{
       background: #fff;
        position: fixed;
        width:100%;
       
        ul{
            
             display: flex;
             justify-content:space-between;
             margin-top:0.1rem;
            li{

              flex: 1; 
              display: flex;
              justify-content:center;
              font-size:0.16rem;
              span{
                  display: block;
                  width:1.2rem;
                  height:0.02rem;
                  background:#fff;
                  position: fixed;
                  top:0.76rem;
              }
              .active{
                  background:red
              }
            }
        }
    }
    
</style>