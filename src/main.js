import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/main.css';
import PageLoad from './components/PageLoad.vue';


const app = createApp(App);

app.component('PageLoad', PageLoad);

app.use(router).mount('#app')
