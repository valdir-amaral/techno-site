<template>
    <div>
        
        <div v-if="loading">
            <PageLoad />
        </div>
        <div v-else class="conteudo">
            <div>
                <h1>{{ data.nome }}</h1>
                <p>{{ data.descricao }}</p>
                <h2>Aulas</h2>
                <ul class="aulas">
                    <li v-for="aula in data.aulas" :key="aula.id">
                        <RouterLink :to="{name: 'aula', params:{aula: aula.id}}">{{ aula.nome }}</RouterLink>
                    </li>
                </ul>
            </div>

            <RouterView></RouterView>

        </div>
    </div>
 
</template>

<script>
import fetchData from '@/mixins/fetchData';

export default {
    name: "CursoDetail",
    props: ["curso"],
    mixins: [fetchData],

    created() {
        this.fetchData(`/curso/${this.curso}`);
    }
    
};
</script>

<style>
    .aulas li a {
        display: block;
        box-shadow: 0 2px 4px 0 rgba(0,0,0,.1);
        background-color: white;
        padding: 20px;
        margin-bottom: 10px;
        border-radius: 4px;
    }

    .aulas li a.router-link-active {
        background-color: #4B8;
        color: white;
    }
</style>