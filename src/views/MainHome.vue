<template>
    <div>
        <div v-if="loading">
            <PageLoad />
        </div>
        <transition>
            <div v-if="data" class="conteudo">
                <h1>Sobre a {{ data.titulo }}</h1>
                <p>{{ data.descricao }}</p>

                <RouterLink to="/cursos">
                    <button class="btn-cursos">Cursos</button>
                </RouterLink>
                <div>
                    <h2>Avaliações</h2>
                    <ul>
                        <li v-for="av in data.avaliacoes" :key="av.nome">
                        <p>{{ av.nome }}</p>
                        <p>{{ av.descricao }}</p>
                        </li>
                    </ul>
                </div>
            </div>
        </transition>
    </div>
</template>


<script>
import fetchData from '../mixins/fetchData'

export default {
    name: 'MainHome',

    mixins: [fetchData],
    
    created() {
        this.fetchData("/home");
    }
}
</script>

<style>
    .btn-cursos {
        border: none;
        background-color: #4b8;
        border-radius: 4px;
        color: white;
        cursor: pointer;
        padding: 15px 40px;
        font-size: 1rem;
        margin-top: 40px;
        margin-bottom: 40px;
        font-family: 'Avenir', Arial, Helvetica, sans-serif;
        box-shadow: 0 4px 2px rgba(0, 0, 0, .1);
    }
</style>