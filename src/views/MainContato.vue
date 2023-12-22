<template>
    <div>
        <div v-if="loading">
            <PageLoad />
        </div>
        <div v-else>
            <h1>{{ data.titulo }}</h1>
            <p>{{ data.descricao }}</p>
            <ul>
                <li>
                    <b>E-mail:</b>
                    {{ data.contato.email }}
                </li>
                <li>
                    <b>Telefone:</b>
                    {{ data.contato.telefone }}
                </li>
                <li>
                    <b>Endereço:</b>
                    {{ data.contato.endereco }}
                </li>
            </ul>
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