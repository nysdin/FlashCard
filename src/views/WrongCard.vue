<template>
    <div class="card-list-container">
        <h1>間違えた単語一覧</h1>
        <router-link to="/wrong-test" v-if="wrongCardsEmpty">間違えた問題をテストする</router-link>

        <el-table :data="cards" style="width: 100%" >
            <el-table-column label="English" prop="english" :align="'center'">

            </el-table-column>
            <el-table-column label="日本語" prop="japanese" :align="'center'">
                
            </el-table-column>
            <el-table-column label="操作" :align="'center'">
                <template slot-scope="scope">
                    <el-button size="mini" @click="handleEdit(scope.row.id)">Edit</el-button>
                    <el-button size="mini" type="danger" @click="deleteCard(scope.row.id)">Delete</el-button>
                </template>
            </el-table-column>
        </el-table>
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
    },
    methods: {
        deleteCard(id){
            this.$store.commit('deleteWrongCard', id)
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