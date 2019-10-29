<template>
    <div id="Home">
        <Header 
        :back-visible="false" 
        :search-visible="false" 
        :edit-visible="true" 
        :mine-visible="true" 
        :edit="editFlag"
        @lsdit="changeEdit"  
        @lsMine="menuToggle" 
        title="书架" >
        </Header>
         <div class="content">
             <!-- {{bookshelf?bookshelf:"还没有书籍赶快加入图书开启阅读把"}} -->
            <div v-for="book in bookshelf" :key="book.id">
                    <img :src="book.cover" alt="">
            </div>
         </div>
        <BottomNav></BottomNav> 
        <!-- 编辑按钮 -->
        <div v-show="!editFlag" class="editBtn">
            <button >
                全选
            </button>
            <button >
                删除
            </button>
        </div>
        <!-- 登录menu publice index 引入了animated.css样式-->
        <transition name="fade"
         enter-active-class="animated fadeInLeft"
         leave-active-class="animated fadeOutLeft"
        
        >
         <Menu v-show="menuFlag" :flag="menuFlag" @menuClose="menuToggle" />
        </transition>
    </div>
    
</template>

<script>
//引入底部导航
import BottomNav from "@/components/bottomNav"
// 引入头部
import Header from "@/components/header"
//引入菜单页面
import Menu from "@/components/menu"
import {mapActions,mapState,mapGetters} from "vuex"
export default {
    components:{
        BottomNav,Header,Menu
    },
    data () {
        return {
        editFlag: true, //编辑是否完成
        menuFlag: false  // 我的菜单是否打开
        }
    },
    computed:{
         ...mapState({
           bookshelf:state=>state.bookmodule.Bookshelf
        }),
       
    },
    created(){
      console.log(this.bookshelf)
    },
    methods:{
        //改变编辑状态  通过绑定自定义事件让 子组件触发更改传递过去的参数
        changeEdit () {
            this.editFlag = !this.editFlag
        },
        //菜单打开关闭
        menuToggle() {
            this.menuFlag = !this.menuFlag
        }
    }
}
</script>
<style lang="scss" scoped>  
   .content{
       margin-top:0.6rem;
   }
   //点击编辑弹出的删除完成
   .editBtn{
       width:100%;
       height:0.45rem;
       position: fixed;
       bottom:0.6rem;
       background:red;
       display: flex;
       justify-content: space-around;
       button{
           width:100%;
           height:100%;
           background:darkcyan;
           border-color:darkcyan; 
       }
   }
</style>