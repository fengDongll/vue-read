<template>
    <div class="header">
       <!-- 返回 -->
        <span class="title" v-if="showtitle">{{title}}</span>
       <div class="search" v-if="showsearch" @click="goSearch">
             <i class="iconfont">&#xe625;</i>
             <input type="text" v-model="keys">
       </div>
       <button class="serbtn" v-if="showsearchbtn" @click="search">搜索</button>
    </div>
</template>

<script>
export default {
    props:{
        showsearch:{type:Boolean,default:false},
        showsearchbtn:{type:Boolean,default:false},
        showtitle:{type:Boolean,default:true},
        title:{type:String,default:'书架'},
    },
    data(){
        return {
            keys:null
        }
    },
    methods:{
        goSearch(){
            !this.showsearchbtn?this.$router.push('/search'):""
           
        },
        search(){
            this.$emit("search")
        }
    }
}
</script>

<style lang="scss" scoped>
    .header{
        width:100%;
        height: 0.45rem;
        background:#fff;
        position:fixed;
        top:0;
        border-radius:0.09rem  0.09rem  0.09rem 0.09rem;
        box-shadow:0px 6px 5px #E6E6FA;
        display:flex;
        justify-content: space-around;
        align-items: center;
        z-index: 99;
        .title{
            font-size:16px;
            font-weight: bold;
            color: #00bbff;
        }
        button{
            width:0.45rem;
            height:0.25rem;
            border-radius:0.05rem;
            color:#fff;
            background: #00bbff;
            border:none;
        }
        .search{
            border:1px solid #00BFFF;
            display: flex;
            align-items: center;
            justify-content: center;
            height:0.28rem;
            width:2.6rem;
            border-radius: 0.2rem;
            input{
                width:2.44rem;
                height:0.26rem;
                border-radius: 0.2rem;
                border:none;
                font-size:16px;
                text-indent: 12px;
                background: rgba(0,0,0,0)
            }
            .iconfont{
                margin-left:0.02rem;
                color:#00BFFF;
            }
        }
    }
</style>