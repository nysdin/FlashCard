import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cards: [{english: 'hello', japanese: 'こんにちは'}],
  },
  mutations: {
    createCard(state, card){
      state.cards.push(card)
    }
  },
  actions: {
    
  }
})
