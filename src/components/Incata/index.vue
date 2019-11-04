<template>
     <div class="incata">
        <div class="header">
           <span class="iconfont" @click="back">&#xe610;</span>
           <span>小说章节</span>
           <span class="iconfont" @click="refresh">&#xe621;</span>
        </div>
        <div class="occ"></div>
        <div class="content" v-if="data.length!=0">
            <ul>
              <router-link :to="{name:'read',params:{link:index,id:_id}}" 
              tag="li" v-for="(cata,index) in data" :key="cata.link"
              >
                    {{cata.title}}
              </router-link>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            data:[]
        }
    },
    created(){
        this.data=this.$store.state.Catamodule.Catas
    },
    props:{
        _id:{type:String,default:null}
    },
    methods:{
        back(){
            this.$emit("toggleinCata")
        },
        refresh(){
            this.$router.go(0)
        }
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
        ul{
            .router-link-exact-active {
                background:#ccc;  
            }
            li{
                display: flex;
                justify-content: center;
                align-items: center;
                padding:0.08rem 0.15rem;
                border-bottom: 1px solid #00bbff;
                font-size: 16px;
                line-height:16px;
                color: #00bbff;
            }
        }
    }
</style>