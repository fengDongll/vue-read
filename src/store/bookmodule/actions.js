//引入mutations 修改状态的方法  通过 commit 调用
import {SYNC_UPDATEBOOK} from "./const"
//定义数据初始化 获取 缓存的书架 数据  或者 服务器的书架顺序
function getBooks(){
    return JSON.parse(localStorage.books?localStorage.books:'[]')
}
export default {
//初始化 vuex 中毒的状态
    initBooks(ctx){
        let books = getBooks();
        ctx.commit(SYNC_UPDATEBOOK,books)
    },
    // 书籍加入 
    addBooks(ctx,data){
        let books = getBooks();
        let isHas = books.some(item=>{
            if(item._id===data._id){
                return {
                    isHas:true
                }
            }
        })
        if(!isHas){
            data.presentCataNum=0
            books.push(data)
        }
        //更改 缓存  或者服务器
        localStorage.books = JSON.stringify(books)
        //修改 状态管理中的 书架信息
        ctx.commit(SYNC_UPDATEBOOK,books)
    },
    //书籍的删除
    removeBooks(ctx,data){
        let books = getBooks();
        books = books.filter(item=>{
            if(item._id === data._id){
                return false; //返回false直接将此商品从数组里面删除了！
            }
            return true
        })
        //更改 缓存  或者服务器
        localStorage.books = JSON.stringify(books)
        //修改 状态管理中的 书架信息
        ctx.commit(SYNC_UPDATEBOOK,books)
    },
    //更改看多了多少章节
    changeCata(ctx,data){
        let books = getBooks();
        books = books.map((item)=>{
            if(item._id === data._id){
               item.presentCataNum=data.presentCataNum
               return item
            }
             return item
        })
        
        localStorage.books = JSON.stringify(books)
        ctx.commit(SYNC_UPDATEBOOK,books)
    }
}