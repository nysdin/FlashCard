<template>
    <div class="result-container">
        <p>正答数 {{ correctNumber }}</p>
        <router-link to="/">ホームへ戻る</router-link>
    </div>
</template>

<script>
export default {
    name: 'Result',
    props: ['correctNumber'],
    data(){
        return {
            count: 0
        }
    },
}
</script>