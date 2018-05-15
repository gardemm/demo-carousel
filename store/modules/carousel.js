import { CHANGE_DESKTOP_ITEMS_COUNT,
        CHANGE_MOBILE_ITEMS_COUNT,
        CHANGE_SLIDER_ITEMS_COUNT } from '~/store/MutationTypes'

export const state = {
  itemsCount: 7,
  desktopItemsCount: 3,
  mobileItemsCount: 1,
  sliderItemsCount: 7
}

export const mutations = {
  [ CHANGE_DESKTOP_ITEMS_COUNT ] (state, number) {
    state.desktopItemsCount = number
  },

  [ CHANGE_MOBILE_ITEMS_COUNT ] (state, number) {
    state.mobileItemsCount = number
  },

  [ CHANGE_SLIDER_ITEMS_COUNT ] (state, number) {
    state.sliderItemsCount = number
    console.log('state info', number);
  }
}

export const actions = {
  changeDesktopItemsCount ({ commit, dispatch }, number) {
    commit(CHANGE_DESKTOP_ITEMS_COUNT, number)
  },

  changeMobileItemsCount ({ commit, dispatch }, number) {
    commit(CHANGE_MOBILE_ITEMS_COUNT, number)
  },

  changeSliderItemsCount ({ commit, dispatch }, number) {
    commit(CHANGE_SLIDER_ITEMS_COUNT, number)
  }
}

export default {
  state,
  mutations,
  actions
}
