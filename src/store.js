import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cards: [{id: 1, english: 'hello', japanese: 'こんにちは'}],
    wrongCards: [],
  },
  mutations: {
    //cardを追加
    createCard(state, card){
      state.cards.push(card)
    },
    //間違えたCardをwrongCardsに追加
    pushWrongCard(state, card){
      if(!state.wrongCards.includes(card)){
        state.wrongCards.push(card)
      }
    },
    //間違えた問題に正解したらwrongCardsから削除
    removeWrongCard(state, card){
      const newCards = state.wrongCards.filter(function(item){
        return card !== item
      })
      state.wrongCards = newCards
    },
  },
  actions: {
    
  }
})
