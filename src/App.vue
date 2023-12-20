<script>
import TheHeader from './components/TheHeader.vue';

export default {
  components: {
    TheHeader
  }
}
</script>



<template>
  <div id="app">
    <TheHeader />
    <RouterView class="container" />
  </div>
</template>




<style>
  .container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }
</style>
