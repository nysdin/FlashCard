<template>
    <div class="test-container">
        <div class="test-box">
            <h1>{{ quizeNumber + 1 }}問目 / {{ this.$store.state.cards.length }}問中</h1>
            <p>{{ quize.japanese }}</p>
            答え： <input type="text" v-model="english" @keydown.enter="answerQuize(quize)">
        </div>

        <router-link to="/">ホームへ戻る</router-link>
    </div>
</template>

<script>
export default {
    name: 'WrongTest',
    data(){
        return {
            quizeNumber: 0,
            correctNumber: 0,
            english: '',
        }
    },
    computed: {
        quize(){
            return this.$store.state.wrongCards[this.quizeNumber]
        }
    },
    methods: {
        answerQuize(quize){
            //正解したら正答数を加算
            if(this.english === this.quize.english){
                this.correctNumber += 1
                this.$store.commit('pushCorrectCard', this.quize)
            }
            //質問が終わったら結果画面に遷移
            if(this.quizeNumber === this.$store.state.wrongCards.length - 1){
                this.$router.push({ name: 'result', params: { count: this.correctNumber } })
            }else{
                this.quizeNumber += 1
            }
            this.english = ''
        }
    }
}
</script>

