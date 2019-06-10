<template>
    <div class="result-container">
        <p>正答数 {{ $route.params.count }}</p>
        <router-link to="/">ホームへ戻る</router-link>
    </div>
</template>

<script>
export default {
    name: 'Result',
    data(){
        return {
            count: 0
        }
    },
}
</script>

