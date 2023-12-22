<template>
    <div>
        <div v-if="loading">
            <PageLoad />
        </div>
        <div v-else class="conteudo">
            <div>
                <h1>{{ data.titulo }}</h1>
                <p>{{ data.descricao }}</p>
                <ul>
                    <li v-for="curso in data.cursos" :key="curso.id">
                        <h2>
                            <RouterLink :to="{name: 'CursoDetail', params: {curso: curso.id}}">
                            {{ curso.nome }} - {{ curso.totalAulas }} aulas | {{ curso.horas }} horas
                            </RouterLink>
                        </h2>
                        <p>{{ curso.descricao }}</p>
                    </li>
                </ul>
            </div>
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