
<template>
  <div class="bottomNav">
    <router-link to="/home" class="bottomNav_link">
      <icon name="Book" class="svg_Nav u-cenInBlock" />
      <p>书架</p>
    </router-link>
    <router-link to="/rank" class="bottomNav_link">
      <icon name="Rank" class="svg_Nav u-cenInBlock" />
      <p>排行</p>
    </router-link>
    <router-link to="/search" class="bottomNav_link">
      <icon name="Search" class="svg_Nav u-cenInBlock" />
      <p>搜索</p>
    </router-link>
    <router-link to="/classify" class="bottomNav_link">
      <icon name="Class" class="svg_Nav u-cenInBlock" />
      <p>分类</p>
    </router-link>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
 
    .bottomNav{
       background: #fff;
        width:100%;
        display: flex;
        height:0.6rem;
        position: fixed;
        bottom: 0;
        justify-content: space-around;
        align-items: center;
        -moz-box-shadow:0px -1px 6px#ADD8E6; 
        -webkit-box-shadow:0px -1px 6px#ADD8E6; 
        box-shadow:0px -1px 6px	#ADD8E6;
        .bottomNav_link{
            display: flex;
            flex-direction: column;
            align-items: center;
            font-size:16px;
            font-weight: bold;
           
            .svg_Nav{
                width:0.26rem;
                height:0.26rem
            }
        }
    }
    .router-link-active{ color:	#FF0000}
</style>