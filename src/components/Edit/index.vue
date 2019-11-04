<template>
    <div class="edit">
       
        <i class="iconfont" @click="edit">&#xe60e;</i>
        <span class="delete" v-show="deletebook" >
        <i class="iconfont" @click="del">&#xe619;</i>
        </span>
    </div>
</template>

<script>
import {mapActions,mapState,mapGetters} from "vuex"
import { MessageBox } from 'mint-ui';
export default {
    data(){
        return{
            deletebook:false,
            select:false,
            data:[]
        }
    },
    computed:{
        ...mapState({
            
        }),
       
    },
    methods:{
        edit(){
            this.deletebook=!this.deletebook;
            this.select=!this.select;
            this.$parent.$refs.bookitem
            this.$emit('togglebtn')
            //编辑打开关闭 清空删除队列
            if(this.$parent.$refs.bookitem){
                this.$parent.$refs.bookitem.forEach(item=>{
                  item.deldata=[]
                })
           
            }
            
 
           
        },
        del(){
            //删除队列先清空再找选中的
            if(this.$parent.$refs.bookitem){
                this.data=[];   
                this.$parent.$refs.bookitem.map(item=>{
                   if(item.deldata.length!=0){
                       return this.data.push(item.deldata)
                   }
                })
                MessageBox.confirm('确定执行此操作?').then(action => {
                        this.data.forEach(item=>{
                            
                            this.removeBooks(item[0])
                        })
                        this.$router.go(0)
                
                });
            }
            
            
        },
        
         ...mapActions(["addBooks","removeBooks"]),
    }
}
</script>

<style lang="scss" scoped>
    .edit{
        z-index:20;
        top:0.6rem;
        right:0.05rem;
        position: fixed;
        // background: #00BFFF;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right:0.06rem;
        //主icon
        .iconfont{
            font-size:0.36rem;
            color: 	#00BFFF;
        }
        //全选
        .selectall{
            position: absolute;
            right:0.5rem;
            width:0.22rem;
            height:0.4rem;
            font-size: 16px;
        }
        //删除
         .delete{
             position: absolute;
             top:0.4rem;
            
         }
    }
</style>