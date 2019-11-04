<template>
    <div class="bookitem"  @click="goreadinfo(data._id)">
        <div class="leftimg">
            <img :src="data.cover" alt="">
        </div>
        <div class="rightdesc">
            <span class="title">{{data.title}}</span>
            <span class="author">{{data.author}}</span>
            <div class="longIntro">{{data.longIntro}}</div>
            <span class="time">{{data.updated}}</span>
            <div class="bottom">
               
                <span class="wordCount">{{data.wordCount}}字</span>
                <span class="theme">{{data.cat}}</span>
            </div>
           
         
        </div>
    </div>
</template>

<script>
export default {
    props:{
        data:{
            type:Object,
            default:""
        }
    },
    methods:{
         goreadinfo(id){
            this.$router.push({name:"info",params:{id}})
        }
    }
}
</script>

<style lang="scss" scoped>
    .bookitem{
        height:1.5rem;
        margin:0.05rem 0.06rem 0 0.06rem;
        border-radius: 0.05rem;
        border:1px solid  #00BFFF;
        display: flex;
        // 左边图片
        .leftimg{
            width:1.8rem;
            height:100%;
            img{
                width: 100%;
                height:100%;
                border-radius: 0.05rem;
            }
        }
        // 右边描述
        .rightdesc{
            width:100%;
            margin-left:0.08rem;
            border-radius: 0.05rem;
            // border-left: 1px solid red;
            height: 100%;
            display: flex;
            flex-direction: column;
            .title{
                color: #00BFFF;
                font-size:18px;
               
            }
            .author{
                color: #00BFFF;
                font-size:12px;
                margin-top:0.1rem;
            }
            .longIntro{
                color: #00BFFF;
                font-size:12px;
                margin: .06667rem 0 .13333rem;
                height: 0.3rem;
                line-height: 0.15rem;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                word-break: break-all;
                text-overflow: ellipsis;
                overflow: hidden;
            }
            .time{
                font-size:12px;
                color: #00BFFF;
            }
            .bottom{
                color: #00BFFF;
                display: flex;
                justify-content:space-between;
                margin-top:0.18rem; 
                font-size:12px;
            }
        }
    }  
</style>