<template>
  <div class="home">
    <h1>英単語学習サイト</h1>

    <el-alert title="記入漏れが存在します。" type="error" show-icon v-if="error" @close="changeError"></el-alert>

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
      error: false,
      formInline: {
        english: '',
        japanese :''
      }
    }
  },
  methods: {
    addCard(){
      if(this.formInline.english === '' || this.formInline.japanese === ''){
        this.error = true
      }else {
        this.error = false
        this.$store.commit('createCard', {english: this.formInline.english, japanese: this.formInline.japanese})
        this.formInline.englishWord = '' 
        this.formInline.japaneseWord = ''
      }
    },
    changeError(){
      this.error = false
    }
  }
}
</script>

