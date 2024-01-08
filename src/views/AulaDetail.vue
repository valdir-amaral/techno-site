<template>
    <div>
        <div v-if="loading">
            <PageLoading />
        </div>

        <div v-if="data">
            <h2>{{ data.nome }}</h2>
            <div class="video">
                <iframe
                    :src="`https://www.youtube.com/embed/${data.youtube}`" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowfullscreen>
                </iframe>
            </div>
            
        </div>
    </div>

</template>

<script>
    import fetchData from '@/mixins/fetchData';

    export default {
        name: "AulaDetail",
        props: ["aula"],
        mixins: [fetchData],
        created() {
            this.fetchData(`/aula/${this.aula}`)
        },
        beforeRouteUpdate(to, from, next) {
            this.fetchData(`/aula/${to.params.aula}`);
            next();
        }
    };
</script>

<style>
.video {
    position: relative;
    padding-bottom: 56.25%;
}
.video iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

</style>