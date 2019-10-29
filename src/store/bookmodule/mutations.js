import {SYNC_UPDATE} from "./const"
export default {
    [SYNC_UPDATE](state, Bookshelf){
        state.Bookshelf =  Bookshelf
    }
}