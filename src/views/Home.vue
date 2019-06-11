<template>
  <div class="home">
    <h1>英単語学習サイト</h1>

    <div class="add-form">
      英語: <input type="text" v-model="englishWord"><br/>
      日本語：<input type="text" v-model="japaneseWord"><br/>
      <button @click="addCard">追加</button>
    </div>

    <CardList />

    <router-link to="/test">テストを実行</router-link>
    <router-link to="/wrong-test">間違えた問題のテスト</router-link>
  </div>
</template>

<script>
// @ is an alias to /src
import CardList from '@/components/CardList.vue'

export default {
  name: 'home',
  components: {
    CardList
  },
  data(){
    return {
      englishWord: '',
      japaneseWord: '',
    }
  },
  methods: {
    addCard(){
      this.$store.commit('createCard', {english: this.englishWord, japanese: this.japaneseWord})
    }
  }
}
</script>

<style>
.add-form{
  padding: 30px;
  width: 50%;
  margin: 0 auto 20px;
  border: 1px solid rgba(0, 0, 0, 0.2);
}
</style>
