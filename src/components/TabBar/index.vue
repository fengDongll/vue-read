<template>
    <div class="tabbar">
        <router-link to="/home" tag='div' class="tab-items">
            <span class="iconfont">&#xe627;</span>
            <span>书架</span>
        </router-link>
        <router-link to="/bookshop" tag='div' class="tab-items">
            <span class="iconfont">&#xe61e;</span>
            <span>书城</span>
        </router-link>
        <router-link to="/search" tag='div' class="tab-items">
            <span class="iconfont">&#xe60c;</span>
            <span>搜索</span>
        </router-link>
        <router-link to="/mine" tag='div' class="tab-items">
            <span class="iconfont">&#xe616;</span>
            <span>我的</span>
        </router-link>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
     .tabbar{
         z-index: 10;
         background:#fff;
         box-shadow:0px -2px 10px #cccccc;
         color:  #00BFFF;
         height:0.5rem;
         width: 100%;
         position: fixed;
         bottom: 0;
         display: flex;
         justify-content: space-around;
         border-radius:0.09rem  0.09rem  0.09rem 0.09rem;
        .tab-items{
            margin-top:0.05rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding:0 0.2rem;
            .iconfont{
                font-size:26px;
            }
        }
      }
      .router-link-active{ color:	#FFD700}
</style>