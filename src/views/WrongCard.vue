<template>
    <div class="card-list-container">
        <h1>間違えた単語一覧</h1>
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