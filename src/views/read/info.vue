<template>
     <div class="info">
            <div>
                title：{{readinfo.title}}
                 <img :src="readinfo.cover" alt="">
            </div>
            <div>
                <button @click="addBookshelf(readinfo)">{{addbooks?"移除书架":"加入书架"}}</button>
                <button>立即阅读</button>
            </div>
           
     </div>
</template>

<script>
//我是小说阅读页面
import {mapActions,mapState,mapGetters} from "vuex"
export default {
    data(){
        return {
           readinfo:[],
           addbooks:false
     
        }
    },
    methods:{
         ...mapActions(["addBookshelf","removeBookshelf"]),
       
    },
    created(){
        this.$http.get("/api/info",{
            params:{
                id:this.$route.params.id
            }
        }).then(res=>{
            this.readinfo=res.data;
            console.log(res.data)
        })
    }
}
</script>

<style>

</style>