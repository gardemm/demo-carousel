import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import carousel from '~/store/modules/carousel'

export const store = new Vuex.Store({
  modules: {
    carousel,
  }
})

export default () => store
