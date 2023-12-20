import { createRouter, createWebHistory } from 'vue-router'
import MainHome from '../views/MainHome.vue';
import MainContato from '../views/MainContato.vue';
import MainCursos from '../views/MainCursos.vue';

const routes = [
  {
    path: '/',
    name: 'MainHome',
    component: MainHome
  },
  {
    path: '/cursos',
    name: 'MainCursos',
    component: MainCursos
  },
  {
    path: '/contato',
    name: 'MainContato',
    component: MainContato
  }
]

const router = createRouter({
  mode: 'history',
  history: createWebHistory(),
  routes,
})

export default router
