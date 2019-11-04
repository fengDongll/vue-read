<template>
<div>
    <div class="read" v-if="data.length!=0 && !showcata" >
        <!-- 章节标题 -->
       <div class="title">
           <h3>{{title}}</h3>
        </div>
        <!-- 主体文字 -->
        <div class="content">
            {{data}}
        </div>
      
        <!-- 设置 -->
        <div class="effect">
            <button @click="upcata(true)">上一章</button>
            <button @click="toggleinCata">目录</button>
            <button >设置</button>
            <button @click="upcata(false)">下一章</button>
       </div>
      
    </div>
    <Incata v-if="showcata" @toggleinCata="toggleinCata"  :_id="_id"></Incata>
</div>
    
    
</template>

<script>
import api from "@/axios/api"//引入api
import { Toast } from 'mint-ui';//引入mint-ui toast
import Incata from "@/components/Incata" //引入列表
import {mapActions} from "vuex"
export default {
    components:{
        Incata
    },
    //同页面不同参路由跳转
    watch:{
    　  $route: function (to, from) {
            this.$router.go(0)
    　　},
        showcata(){
            
       }
    },
    data(){
        return {
            data:[],
            title:null,
            showcata:false,
            cata:0,
            _id:"0",
           
        }
    },
    methods:{
        
        toggleinCata(){
            this.showcata=!this.showcata
        },
        ...mapActions(["changeCata","initcatas"]),
         //前进后退章节操作
        upcata(status){
            if(status){ //true 后退
                this.cata = this.cata-1
            }else{
                this.cata = this.cata+1
            }
            this.changeCata({_id:this._id,presentCataNum:this.cata})
            let instance = Toast({
                message:"努力奋斗ing",
                duration:-1,
                iconClass: 'fa iconfont icon-shuaxin fa-spin'
            });
            let link=this.$store.state.Catamodule.Catas[this.cata].link
            api.IN_LINK_CONTENT(link).then(res=>{
                this.data=res.data.chapter.body;
                this.title=this.$store.state.Catamodule.Catas[this.cata].title
                instance.close();//关闭loading弹出框
                scrollTo(0,0)
            })
        },
    },
    created(){
        this.initcatas();
        this.cata = Number(this.$route.params.link)//第几章了
        this._id=this.$route.params.id//这里进行更改id对应看到多少章
        this.changeCata({_id:this._id,presentCataNum:this.cata})
        let instance = Toast({
            message:"努力奋斗ing",
            duration:-1,
            iconClass: 'fa iconfont icon-shuaxin fa-spin'
        });
        let link=this.$store.state.Catamodule.Catas[this.cata].link
        api.IN_LINK_CONTENT(link).then(res=>{
            this.data=res.data.chapter.body;
            this.title=this.$store.state.Catamodule.Catas[this.cata].title
            instance.close();//关闭loading弹出框
            scrollTo(0,0)
        })
        this.catas=this.$store.state.Catamodule.Catas
        
    },

}
</script>

<style lang="scss" scoped>
    .read{
        display: flex;
        flex-direction: column;
        align-items: center;
        .title{
            margin-bottom:0.05rem;
        }
        
        .effect{
            width:100%;
            height:0.25rem;
            margin-top:0.05rem;
            background: red;
            position: fixed;
            bottom: 0;
            z-index: 10;
            button{
                width:25%;
                height:100%;
                border:none;
                outline: none;
                background:#F8F8FF
            }
        }
    }
     
</style>