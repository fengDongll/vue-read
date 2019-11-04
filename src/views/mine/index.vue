<template>
    <div class="mine">
        <!-- 头部 -->
        <Header  title="个人中心"></Header>
        <!-- 占位 -->
        <div class="occ"></div>
        <!-- 头像部分 -->
        <div class="peoplePhoto">
            <div class="img">
                <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2725348955,3544898368&fm=26&gp=0.jpg" alt="">
            </div>
            <div class="mineInfo">
               <div><span>爱看小说的天将明</span></div>
               <div><span>共享2级</span></div>
            </div>
        </div>
        <!-- 功能部分 -->
        <div class="funct">
            <ul>
                <li><i class="iconfont before">&#xe61c;</i><span>加入团队</span><i class="iconfont after">&#xe62a;</i></li>
                <li><i class="iconfont before">&#xe60f;</i><span>充值中心</span><i class="iconfont after">&#xe62a;</i></li>
                <li><i class="iconfont before">&#xe615;</i><span>服务中心</span><i class="iconfont after">&#xe62a;</i></li>
                <li><i class="iconfont before">&#xe620;</i><span>设置</span><i class="iconfont after">&#xe62a;</i></li>
                <li><i class="iconfont before">&#xe614;</i><span>分享</span><i class="iconfont after">&#xe62a;</i></li>
                <li><i class="iconfont before">&#xe61a;</i><span>意见反馈</span><i class="iconfont after">&#xe62a;</i></li>
            </ul>
        </div>
         <!-- 底部 -->
        <Tabbar></Tabbar>
    </div>
</template>

<script>
import Tabbar from "@/components/TabBar"// 引入底部
import Header from "@/components/Header"// 引入头部
export default {
     components:{
        Tabbar,Header
    },
}
</script>

<style lang="scss" scoped>
    .peoplePhoto{
        height:2rem;
        margin:0.1rem;
        background: #00bbff;
        opacity: 0.5;
        box-shadow:0px 0px 11px #228CBA;
        border-radius: 0.15rem;
        .mineInfo{
            position: relative;
            top:0.25rem;
            display: flex;
            flex-direction: column;  
            align-items: center;
            color:#fff;
            font-size:18px;
            div{
                margin:0.05rem 0;
            }
        }
        .img{
            height:0.8rem;
            width:0.8rem;
            border-radius: 50%;
            position: relative;
            transform: translate(-0.4rem,0.1rem);
            left:50%;
            top:0.1rem;
            img{
                width:100%;
                height:100%;
                border-radius: 50%;
                
            }
        }
    }
    .funct{
        margin-top:0.3rem;
        ul{
            display: flex;
            flex-direction: column;
            align-items: center;
            li{
                width:3.5rem;
                height:0.35rem;
                box-shadow:0px 0px 6px #87CEFA;
                background:#87CEFA;
                margin:0.05rem;
                border-radius: 0.1rem;
                display: flex;
                justify-content: space-between;
                align-items: center;
                color:#fff;
                .iconfont{
                  font-size:0.2rem;
                }
                .before{
                    margin-left:0.05rem;
                }
                .after{
                    margin-right:0.05rem;
                }
            }
        }
        
    }
</style>