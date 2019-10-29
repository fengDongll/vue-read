import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import bookmodule from "./bookmodule"

export default new Vuex.Store({
    modules:{
      bookmodule 
    }
})