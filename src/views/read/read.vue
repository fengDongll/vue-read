<template>
     <div>
        过来的书的id是 {{readId}}
     </div>
</template>

<script>
//我是小说阅读页面
export default {
    data(){
        return {
           readId:this.$route.params.id
     
        }
    }
}
</script>

<style>

</style>