<template>
    <div class="bookitem" >
        <img v-lazy="data.cover" alt="" @click="goreadinfo(mark,data._id)">
         <i class="iconfont edicon" v-if="isbtn" @click.self="selbook(data,$event)">&#xe613;</i>
    </div>
</template>

<script>
import {mapActions,mapState,mapGetters} from "vuex"
import { Toast } from 'mint-ui';//引入mint-ui toast
import api from "@/axios/api"//引入api
export default {
    props:{
        data:{
            type:Object,
            default:[]
        },
        isbtn:{type:Boolean,default:false},
        mark:{
            type:String,
            default:""
        }
    },
    data(){
        return{
            iscolor:false,
            deldata:[]
        }
    },
    methods:{
        ...mapActions(["addcatas"]),
        //非书架点击书籍进入书籍详情页 
        goreadinfo(mark,id){
            mark==="bookshop"?this.$router.push({name:"info",params:{id}}):this. gohistoryread(id)
        },
        //书架点击（进行章节的初始化）且直接进入历史阅读的页面 
        gohistoryread(id){
            let instance = Toast({
                message:"努力初始化ing",
                duration:-1,
                iconClass: 'fa iconfont icon-shuaxin fa-spin'
            });
            api.IN_ID_CHAPTER(id,9999).then(res=>{
                this.addcatas(res.data)
                scrollTo(0,0)
                let books=this.$store.state.Bookmodule.Books
                books = books.filter(item=>{
                    if(item._id===id){
                        return true
                    }
                    return false
                })
                let link = books[0].presentCataNum
                instance.close();
                this.$router.push({name:'read',params:{link,id}})
            })
        },
        selbook(data,e){
          
            if(this.iscolor){
                  e.target.style.color="#00BFFF"
                  this.iscolor=!this.iscolor
                  this.deldata = this.deldata.filter(item=>{
                       if(item._id === data._id){
                            return false; //
                        }
                        return true
                  })
            }else{
                this.iscolor=!this.iscolor
                e.target.style.color="red"
                this.deldata.push(data)
            }
        }
    }    
}
</script>

<style lang="scss" scoped>
      .bookitem{
            border:1px solid #ccc;
            position: relative;
            float: left;
            margin:0.1rem 0.02rem;
            width:1.2rem;
            height:1.6rem;
            //书的图片
            img{
                width: 95%;
                height: 95%;
                display:block;
                position: relative;
                left:0;top:0.04rem;right:0;bottom:0;
                margin:auto;
            }
            //书上面的选择按钮
            .edicon{
                position: absolute;
                z-index:30;
                top:0;left:0;bottom:0;right:0;
                margin:auto;
                height:0.28rem;
                width:0.28rem;
                border:1px solid #fff;
                background: #00BFFF;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;

            }
            .iconfont{
                font-size:18px;
                font-weight: bold;
                color:#00BFFF;
            }
        }
</style>