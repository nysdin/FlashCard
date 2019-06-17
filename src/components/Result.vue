<template>
    <div class="result-container">
        <p>正答数 {{ correctNumber }}</p>


        <el-table :data="correctCards" style="width: 100%" >
            <el-table-column label="English" prop="english" :align="'center'">

            </el-table-column>
            <el-table-column label="日本語" prop="japanese" :align="'center'">
                
            </el-table-column>
            <el-table-column label="正解" :align="'center'">
                <template>
                    <i class="el-icon-check"></i>
                </template>
            </el-table-column>
        </el-table>

        <el-table :data="wrongCards" style="width: 100%" >
            <el-table-column label="English" prop="english" :align="'center'">

            </el-table-column>
            <el-table-column label="日本語" prop="japanese" :align="'center'">
                
            </el-table-column>
            <el-table-column label="不正解" :align="'center'">
                <template>
                    <i class="el-icon-close"></i>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
    name: 'Result',
    props: ['correctNumber', 'correctCards', 'wrongCards'],
    data(){
        return {
            count: 0,
        }
    },
}
</script>