<template>
    <div class="test-container">
        <template v-if="finished">
            <Result :correctNumber="correctNumber"/>
        </template>
        <template v-else>
            <div class="test-box">
                <h1>{{ quizeNumber + 1 }}問目 / {{ this.$store.state.quizeNumbers }}問中</h1>
                <p>{{ currentQuize.japanese }}</p>
                <el-input placeholder="English" v-model="english" clearable @keydown.enter="answerQuize(currentQuize)" style="width: 30%">
                </el-input> <br />
                <el-button type="primary" @click="answerQuize(currentQuize)" class="answer-button">解答</el-button>
            </div>
        </template>
    </div>
</template>

<script>
import Result from '../components/Result'

export default {
    name: 'RememberTest',
    components: {
        Result
    },
    data(){
        return {
            quizeNumber: 0,
            correctNumber: 0,
            english: '',
            finished: false,
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
            if(this.quizeNumber === this.$store.state.quizeNumbers - 1 ){
                this.finished = true
            }else{
                this.quizeNumber += 1
            }
            this.english = ''
        }
    }
}
</script>

<style>
.answer-button{
    margin-top: 30px;
}
</style>
