<template>
    <div class="card-list-container">
        <ul class="cards-box">
            <li class="card-item" v-for="(card, index) in cards" :key="index">
                <p>{{ card.english }}</p>
                <p>{{ card.japanese }}</p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'CardList',
    computed: {
        cards(){
            return this.$store.state.cards
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


