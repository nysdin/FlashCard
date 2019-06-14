<template>
    <div class="card-list-container">
        <h1>間違えた単語一覧</h1>
        <p v-if="!wrongCardsEmpty">間違えた単語は現在ありません。</p>
        <router-link to="/wrong-test" v-if="wrongCardsEmpty">間違えた問題をテストする</router-link>
        <ul class="cards-box">
            <li class="card-item" v-for="card in cards" :key="card.id">
                <p>{{ card.english }}</p>
                <p>{{ card.japanese }}</p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'WrongCard',
    computed: {
        cards(){
            return this.$store.state.wrongCards
        },
        wrongCardsEmpty(){
            return this.$store.state.wrongCards.length
        }
    }
}
</script>

<style>
ul{
    list-style-type: none;
}

.cards-box{
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
}

.card-item{
    width: 24%;
}
</style>