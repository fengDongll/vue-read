//引入mutations 修改状态的方法  通过 commit 调用
import {SYNC_UPDATE} from "./const"
//定义数据初始化 获取 缓存的书架 数据  或者 服务器的书架顺序
function getBookshelf(){
    return JSON.parse(localStorage.bookshelf?localStorage.bookshelf:'[]')
}
export default {
//初始化 vuex 中毒的状态
    initBookshelf(ctx){
        let bookshelf = getBookshelf();
        ctx.commit(SYNC_UPDATE,bookshelf)
    },
// 书籍加入 
    addBookshelf(ctx,data){
        let bookshelf = getBookshelf();
        let isHas = bookshelf.some(item=>{
            if(item._id===data._id){
                return {
                    isHas:true
                }
            }
        })
        if(!isHas){
            bookshelf.push(data)
        }
        //更改 缓存  或者服务器
        localStorage.bookshelf = JSON.stringify(bookshelf)
        //修改 状态管理中的 书架信息
        ctx.commit(SYNC_UPDATE,bookshelf)
    },
    //书籍的删除
    removeBookshelf(ctx,data){
        let bookshelf = getBookshelf();
        bookshelf = bookshelf.filter(item=>{
            if(item._id === data_id){
                return false; //返回false直接将此商品从数组里面删除了！
            }
        })
        //更改 缓存  或者服务器
        localStorage.bookshelf = JSON.stringify(bookshelf)
        //修改 状态管理中的 书架信息
        ctx.commit(SYNC_UPDATE,bookshelf)
    }
}