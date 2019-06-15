<template>
    <div class="card-list-container">
        <ul class="cards-box">
            <li class="card-item" v-for="card in cards" :key="card.id">
                <p>{{ card.english }}</p>
                <p>{{ card.japanese }}</p>
            </li>
        </ul>

        <el-table :data="cards" tyle="width: 100%" >
            <el-table-column label="English" width="180" prop="english">

            </el-table-column>
            <el-table-column label="日本語" width="180" prop="japanese">
                
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button size="mini" @click="handleEdit(scope.row.id)">Edit</el-button>
                    <el-button size="mini" type="danger" @click="handleDelete(scope.row.id)">Delete</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
    name: 'CardList',
    computed: {
        cards(){
            return this.$store.state.cards
        }
    },
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


