
<template>
  
    
    <div class="head">
       <!-- 统筹布局头部通过 接受 父组件传递过来的参数来选择显示什么内容 -->
       <!-- 是否有返回上一级backVisible -->
      <div v-if="backVisible" class="back" @click="back">
        <icon name="Back" class="svg_back u-cenInBlock" />
      </div>
       <!-- 是否有xxxx mineVisible -->
      <div v-if="mineVisible" class="Mine" @click="mine">
        <icon name="Mine" class="svg_Mine u-cenInBlock" />
      </div>
      <!-- 标题 -->
      <div class="head_title">
        {{ title }}
      </div>
      <!-- 是否有搜索  searchVisible-->
      <div v-if="searchVisible" class="search" @click="search">
        <icon name="Search" class="svg_search u-cenInBlock" />
      </div>
      <!-- 是否有编辑 -->
      <div v-show="editVisible" class="edit" @click="changeEdit">
        {{ edit?'编辑':'完成' }}
      </div>
    </div>

</template>

<script>
export default {
    props:{
        // 默认全部打开
        backVisible:{
            type: Boolean,
            default: true 
        },
        mineVisible:{
            type: Boolean,
            default: true 
        },
        title:{
            type: String,
            default: "天将明" 
        },
        searchVisible:{
            type: Boolean,
            default: true 
        },
        editVisible:{
            type: Boolean,
            default: true 
        },
        edit:{
            type: Boolean,
            default: true
        }

    },
    methods:{
        //返回上一级方法
        back () {
            this.$router.go(-1)
        },
        //返回搜索页面方法
        search () {
            this.$router.push('/search')
        },
        //改变编辑状态 通过触发自定义事件
        //点击编辑变成 完成  点击完成变成编辑
        changeEdit () {
            this.$emit('lsdit')
        },
        //选中删除的选择还是取消选择
        mine () {
        this.$emit('lsMine')
        }
    }

}
</script>

<style lang="scss" scoped>  
    .head{
        width:100%;
        height:0.45rem;
        border-bottom:1px solid red;
        display:flex;
        justify-content: space-between;
        align-items: center;
        font-size:0.16rem;
        padding:0 0.05rem;
        position: fixed;
        top:0;
        z-index: inherit;
        background: #fff;
        .u-cenInBlock{
           width:0.2rem;
           height:0.2rem;
           margin-top:0.1rem
        }
    }
</style>