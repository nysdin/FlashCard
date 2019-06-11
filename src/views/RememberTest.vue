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
    name: 'RememberTest',
    data(){
        return {
            quizeNumber: 0,
            correctNumber: 0,
            english: '',
        }
    },
    computed: {
        quize(){
            return this.$store.state.cards[this.quizeNumber]
        },
    },
    methods: {
        answerQuize(quize){
            //答えが一致したら正答数を加算、不一致ならwrongListにidを記録
            if(this.english === this.quize.english){
                this.correctNumber += 1
            } else {
                this.$store.commit('pushWrongCard', quize)
            }
            //問題数が最後なら結果画面に遷移
            if(this.quizeNumber === this.$store.state.cards.length - 1 ){
                this.$router.push({ name: 'result', params: { count: this.correctNumber } })
            }
            this.quizeNumber += 1
            this.english = ''
        }
    }
}
</script>
