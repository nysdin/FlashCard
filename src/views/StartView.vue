<template>
    <div class="start">
        <h1>現在の単語数は{{ $store.state.cards.length }}個です</h1>
        <p>問題数を何問にしますか？</p>
        <el-input-number v-model="num" :min="1" :max="10"></el-input-number> <br/>
        <el-button type="success" round　v-on:click="setQuizeNumber">決定</el-button>
    </div>
</template>

<script>
export default {
    data(){
        return {
            num: 1,
        }
    },
    computed: {
        max(){
            return this.$store.state.cards.length
        }
    },
    methods: {
        setQuizeNumber(){
            console.log(this.num)
        }
    }
}
</script>

