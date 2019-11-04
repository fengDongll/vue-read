import {SYNC_UPDATEBOOK} from "./const"
export default {
    [SYNC_UPDATEBOOK](state, Books){
        state.Books =  Books
    }
}