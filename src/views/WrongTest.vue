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
            english: '',
        }
    },
    computed: {
        quize(){
            return this.$store.state.wrongCards[quizeNumber]
        }
    },
    methods: {
        
    }
}
</script>

