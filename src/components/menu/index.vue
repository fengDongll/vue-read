<template>
    <div class="menu">
       <div class="content">
            <div class="header">
                <span><img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3583433020,118316633&fm=26&gp=0.jpg" alt=""></span>
                <span class="wz" @click="login">请登录</span>
            </div>
            <div class="bz">
                <ul>
                    <li>
                        <span> <icon name="Feedback" class="ls svg_menu u-cenInBlock" />
                       </span>
                        <p class="u-cenInBlock">
                            反馈建议
                        </p>
                        
                    </li>
                    <li>
                       <span>   <icon name="Setting" class="ls svg_menu u-cenInBlock" />
                     </span>
                        <p class="u-cenInBlock">
                            我的设置
                        </p>
                        
                    </li>
                </ul>

            </div>

       </div>
       <div @click.self="close" class="btnclose"></div>
    </div>
</template>

<script>
export default {
    methods:{
        close(){
            this.$emit('menuClose')
        },
        login(){
            alert("登录功能待开发")
        }
    }
}
</script>

<style lang="scss" scoped>
    .menu{
        height:100%;
        position: fixed;
        width:100%;
        display: flex;
        top:0;
        justify-content:space-between;
        .content{
            width:70%;
             background:rgba(#FFF0F5,0.6);
            }
        .btnclose{
            width:30%;
            background:rgba(0,0,0,0.6);
        }
        // menu 头像
        .header{
            background: url('https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1369474181,3706556329&fm=26&gp=0.jpg');
            width:100%;
            height:2.2rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            img{
                width:0.6rem;
                height:0.6rem;
                border-radius:50%;
            }
            .wz{
                margin-top:0.08rem;
                font-size:24px;
                color:	#6495ED;
            }
        }
        //设置 反馈意见
        .bz{
            display:flex;
            flex-direction:column;
            .ls{
                width: 0.2rem;
                height:0.2rem;
               
            }
            ul{
                margin-top:0.46rem;
            }
            ul li {
                padding:0.2rem 0.2rem;
                display:flex;
            }
        }
    }


</style>