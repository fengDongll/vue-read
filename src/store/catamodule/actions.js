//引入mutations 修改状态的方法  通过 commit 调用
import {SYNC_UPDATECATA} from "./const"

function getcatas(){
    return JSON.parse(localStorage.catas?localStorage.catas:'[]')
}
export default {
    
// 书籍列表存入 
    addcatas(ctx,data){
        localStorage.catas = JSON.stringify(data)
        ctx.commit(SYNC_UPDATECATA,data)
    },
    initcatas(ctx){
        let catas = getcatas()
        ctx.commit(SYNC_UPDATECATA,catas)
    },
}