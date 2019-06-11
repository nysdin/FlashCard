import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cards: [{id: 1, english: 'hello', japanese: 'こんにちは'}],
  },
  mutations: {
    createCard(state, card){
      state.cards.push(card)
    }
  },
  actions: {
    
  }
})
