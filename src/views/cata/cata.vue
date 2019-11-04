<template>
    <div class="cata">
        <div class="header">
           <span class="iconfont" @click="back">&#xe610;</span>
           <span></span>
           <span class="iconfont" @click="refresh">&#xe621;</span>
        </div>
        <div class="occ"></div>
        <!-- 章节列表 -->
        <div class="content" v-if="data.length!=0">
            <ul>
               <router-link :to="{name:'read',params:{link:index,id:$route.params.id}}" tag="li" v-for="(cata,index) in data" :key="cata.link">
                    {{cata.title}}
              </router-link>
               

            </ul>
        </div>
    </div>
</template>

<script>
import { Toast } from 'mint-ui';//引入mint-ui toast
import api from "@/axios/api"//引入api
import {mapActions} from "vuex"
export default {
    data(){
        return {
            data:[]
        }
    },
    created(){
        let instance = Toast({
                message:"努力奋斗ing",
                duration:-1,
                iconClass: 'fa iconfont icon-shuaxin fa-spin'
        });
        let id=this.$route.params.id
        api.IN_ID_CHAPTER(id,9999).then(res=>{
             this.data=res.data
             this.addcatas(res.data)
             scrollTo(0,0)
             instance.close();//关闭loading弹出框
        })
    },
    methods:{
        //返回上一级
        back(){
            this.$router.go(-1)
        },
        //刷新
        refresh(){
            this.$router.go(0)
        },
        ...mapActions(["addcatas"])
       
    },
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
        
        ul{
            li{
                display: flex;
                justify-content: center;
                align-items: center;
                padding:0.08rem 0.15rem;
                border-bottom: 1px solid #00bbff;
                font-size: 16px;
                color: #00bbff
            }
        }
    }

</style>