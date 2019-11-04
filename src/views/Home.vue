<template>
    <div class="home"  >
        <!-- 头部 -->
        <Header   :showsearch="true" ></Header>
        <!-- 撑开顶部失去的高度-->
        <div class="occ"></div>
        <!-- 书架书籍 -->
       <Bookitem :isbtn="isbtn" v-for="book in books" :key="book._id" :data="book" ref="bookitem"></Bookitem>
       <Edit @togglebtn="togglebtn"></Edit>
        <!-- 底部 -->
       <Tabbar></Tabbar>
    </div>
</template>

<script>
import Tabbar from "@/components/TabBar"// 引入底部
import Header from "@/components/Header"// 引入头部
import Bookitem from "@/views/bookrack"// 引入书籍模板
import Edit from "@/components/Edit"// 引入编辑
import {mapActions,mapState,mapGetters} from "vuex"
export default {
    components:{
        Tabbar,Header,Edit,Bookitem
    },
    data(){
        return{
             isbtn:false, //删除按钮是否出现
        }
    },
    computed:{
        ...mapState({
            books:state=>state.Bookmodule.Books
        }),
       
    },
    methods:{
        togglebtn(){
          
            this.isbtn=!this.isbtn
          
        },
    }
  
}
</script>

<style>

</style>