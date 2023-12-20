<template>
    <div>
        <div v-if="loading">
            <PageLoad />
        </div>
        <div v-else>
            <h1>Contato</h1>
            <p>{{ data }}</p>
        </div>
    </div>
   
</template>

<script>
import fetchData from '../mixins/fetchData'

    export default {
        name: 'MainContato',

       mixins: [fetchData],
        
        created() {
            this.fetchData("/contato");
        }
    }
</script>

<style></style>