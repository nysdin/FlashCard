<template>
    <div class="card-list-container">

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
    name: 'CardList',
    computed: {
        cards(){
            return this.$store.state.cards
        }
    },
    methods: {
        deleteCard(id){
            this.$store.commit('deleteCard', id)
        }
    }
}
</script>

<style>

</style>


