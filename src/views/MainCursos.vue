<template>
    <div>
        <div v-if="loading">
            <PageLoad />
        </div>
        <div v-else>
            <h1>Cursos</h1>
            {{ data }}
        </div>
    </div>
</template>

<script>
    import fetchData from '../mixins/fetchData';

    export default {
        name: 'MainCursos',

        mixins: [fetchData],

        created() {
            this.fetchData("/cursos");
        }
    }
</script>

<style>

</style>