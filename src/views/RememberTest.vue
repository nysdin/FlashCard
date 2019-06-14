<template>
    <div class="test-container">
        <div class="test-box">
            <h1>{{ quizeNumber + 1 }}問目 / {{ this.$store.state.cards.length }}問中</h1>
            <p>{{ currentQuize.japanese }}</p>
            答え： <input type="text" v-model="english" @keydown.enter="answerQuize(currentQuize)">
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
        //シャッフルした問題の配列を返す
        quize(){
            //stateのcards配列をコピー
            const randomQuize = this.$store.state.cards.slice()
            //配列の要素をランダムなrand番目とindex番目を交換
            for(let index = randomQuize.length - 1; index >= 0; index--){
                let rand = Math.floor(Math.random() * (index + 1))
                let tmp = randomQuize[index]
                randomQuize[index] = randomQuize[rand]
                randomQuize[rand] = tmp
            }
            return randomQuize
        },
        //現在の問題を返す
        currentQuize(){
            return this.quize[this.quizeNumber]
        }
    },
    methods: {
        answerQuize(quize){
            //答えが一致したら正答数を加算、不一致ならwrongListにcardを記録
            if(this.english === this.currentQuize.english){
                this.correctNumber += 1
            } else {
                this.$store.commit('pushWrongCard', quize)
            }
            //問題数が最後なら結果画面に遷移
            if(this.quizeNumber === this.$store.state.cards.length - 1 ){
                this.$router.push({ name: 'result', params: { count: this.correctNumber } })
            }else{
                this.quizeNumber += 1
            }
            this.english = ''
        }
    }
}
</script>
