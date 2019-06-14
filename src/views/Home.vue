<template>
  <div class="home">
    <h1>英単語学習サイト</h1>

    <el-form :inline="true" :model="formInline" class="demo-form-inline">
    <el-form-item label="English">
      <el-input v-model="formInline.english" placeholder="English"></el-input>
    </el-form-item>
    <el-form-item label="日本語">
      <el-input v-model="formInline.japanese" placeholder="日本語"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="addCard">追加</el-button>
    </el-form-item>
</el-form>

    <CardList />
  </div>
</template>

<script>
// @ is an alias to /src
import CardList from '@/components/CardList.vue'
import { log } from 'util';

export default {
  name: 'home',
  components: {
    CardList
  },
  data(){
    return {
      formInline: {
        english: '',
        japanese :'',
      }
    }
  },
  methods: {
    addCard(){
      this.$store.commit('createCard', {english: this.formInline.english, japanese: this.formInline.japanese})
      this.formInline.englishWord = '' 
      this.formInline.japaneseWord = ''
    }
  }
}
</script>

