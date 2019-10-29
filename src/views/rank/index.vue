<template>
    <div class="rank">
            <Header 
        :back-visible="false" 
        :search-visible="true" 
        :mineVisible="false"
        :editVisible="false"
        title="排行榜" 
         >
        </Header>
        <div class="hz"></div>
        <ul>
            <router-link
                tag="li"
                :to='{name:"ranklist",params:{key:"hot",name:"热榜"}}'
            >
                  <i class="fa fa-h-square" aria-hidden="true"></i>
                  <span>最热阅读榜单</span>
            </router-link>

             <router-link
                tag="li"
                :to='{name:"ranklist",params:{key:"hotsearch",name:"热搜榜"}}'
            >
               <i class="fa fa-h-square" aria-hidden="true"></i>
               <span>最热搜索榜单</span>
            </router-link>
            <router-link
                tag="li"
                :to='{name:"ranklist",params:{key:"potenial",name:"潜力榜"}}'
            >
               <i class="fa fa-battery-full" aria-hidden="true"></i>
               <span>潜力榜单</span>
           </router-link>
           <router-link
                tag="li"
                :to='{name:"ranklist",params:{key:"remain",name:"留存榜"}}'
            >
               <i class="fa fa-heart-o" aria-hidden="true"></i>
               <span>留存榜单</span>
            </router-link>
            <router-link
                tag="li"
                :to='{name:"ranklist",params:{key:"finish",name:"完结榜"}}'
            >
               <i class="fa fa-plus-square" aria-hidden="true"></i>
               <span>完结榜单</span>
             </router-link>
            
        </ul>
        
         <BottomNav></BottomNav> 
    </div>
</template>

<script>
//引入底部导航
import BottomNav from "@/components/bottomNav"
//引入头部
import Header from "@/components/header"
export default {
    components:{
        BottomNav,Header
    }
}
</script>

<style lang="scss" scoped>
    ul{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top:0.4rem;
        li{ 
            margin:0.24rem 0 ;
            width:80%;
            height:0.45rem;
            font-size:0.26rem;
            background:#FF4500;
            display: flex;
            justify-content: space-around;
            align-items: center;
            border-radius:0.06rem 0.06rem;
            color:#008B8B
        }
    }
  
</style>