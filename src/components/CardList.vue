<template>
    <div class="card-list-container">

        <el-table :data="cards" style="width: 100%" >
            <el-table-column label="English" prop="english" :align="'center'">

            </el-table-column>
            <el-table-column label="日本語" prop="japanese" :align="'center'">
                
            </el-table-column>
            <el-table-column label="操作" :align="'center'">
                <template slot-scope="scope">
                    <el-button size="mini" @click="displayEditForm(scope.row.id)">Edit</el-button>
                    <el-button size="mini" type="danger" @click="deleteCard(scope.row.id)">Delete</el-button>
                </template>
            </el-table-column>
        </el-table>

        <el-dialog title="編集" :visible.sync="dialogVisible">
            <el-form >
                <el-form-item label="English">
                <el-input v-model="editEnglish" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="日本語">
                <el-input v-model="editJapanese" autocomplete="off"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">キャンセル</el-button>
                <el-button type="primary" @click="editCard(editId)">変更</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
export default {
    name: 'CardList',
    data(){
        return {
            dialogVisible: false,
            english: '',
            japanese: '',
            editEnglish: '',
            editJapanese: '',
            editId: 0,
        }
    },
    computed: {
        cards(){
            return this.$store.state.cards
        }
    },
    methods: {
        //単語を削除する処理
        deleteCard(id){
            this.$store.commit('deleteCard', id)
        },
        //編集する単語を表示
        displayEditForm(id){
            const card = this.cards.find(function(item){
                return item.id === id 
            })
            this.editEnglish = card.english
            this.editJapanese = card.japanese
            this.editId = card.id
            this.dialogVisible = true
        },
        //モーダルの変更ボタン押下で単語の変更を実施
        editCard(id){
            this.$store.commit('editCard', { id, english: this.editEnglish, japanese: this.editJapanese})
            this.dialogVisible = false
        }
    }
}
</script>

<style>

</style>


