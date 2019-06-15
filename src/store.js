import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cards: [{id: 1, english: 'hello', japanese: 'こんにちは'}, {id: 2, english: 'soccer', japanese: 'サッカー'}],
    wrongCards: [],
    correctCards: [],
  },
  mutations: {
    //cardを追加
    createCard(state, card){
      const maxId = state.cards.reduce(function(prev, next){
        return prev < next.id ? next.id : prev
      }, 0)
      state.cards.push({ id: maxId + 1, ...card})
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
    },
    //登録している単語を削除
    deleteCard(state, id){
      const card = state.cards.find(function(card){
        return card.id === id 
      })
      state.cards = state.cards.filter(function(item){
        return item !== card 
      })
    },
    //登録している間違った単語を削除
    deleteWrongCard(state, id){
      const card = state.wrongCards.find(function(card){
        return card.id === id
      })
      state.wrongCards = state.wrongCards.filter(function(item){
        return item !== card
      })
    },
    //登録した単語の英語、もしくは日本語を変更
    editCard(state, card){
      const editedCard = state.cards.find(function(item){
        return item.id === card.id 
      })
      editedCard.english = card.english
      editedCard.japanese = card.japanese
    }
  },
  actions: {
    
  }
})
