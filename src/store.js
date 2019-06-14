import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cards: [{id: 1, english: 'hello', japanese: 'こんにちは'}],
    wrongCards: [],
    correctCards: [],
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
    //correctCardsにある要素をwrongCardsから削除
    removeWrongCard(state){
      state.wrongCards = state.wrongCards.filter(function(card){
        return state.correctCards.indexOf(card) === -1
      })
      //correctCardsを初期化
      state.correctCards = []
    },
    //正解した問題をcorrectCardsに追加
    pushCorrectCard(state, card){
      state.correctCards.push(card)
    }
  },
  actions: {
    
  }
})
