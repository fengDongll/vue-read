<template>
  <div id="app">
    <keep-alive :include="/bookshop|search/">
        <router-view></router-view>
    </keep-alive>
    
  </div>
</template>
<script>
export default {
  components:{
    
  },
  created(){
    //刷新url地址栏，直接回到首页
       this.$store.dispatch("initBooks")
  }
}
</script>
<style lang="scss">

</style>
