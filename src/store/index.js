import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import Bookmodule from "./BookModule"
import Catamodule from "./CataModule"

export default new Vuex.Store({
  modules:{
    Bookmodule,Catamodule
  }
})
