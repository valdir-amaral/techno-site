import { createRouter, createWebHistory } from 'vue-router'
import MainHome from '../views/MainHome.vue';
import MainContato from '../views/MainContato.vue';
import MainCursos from '../views/MainCursos.vue';
import CursoDetail from '../views/CursoDetail.vue'
import AulaDetail from '../views/AulaDetail.vue'
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
    path: '/cursos/:curso',
    name: 'CursoDetail',
    component: CursoDetail,
    props: true,
    children: [
      {
        path:":aula",
        name: "aula",
        component: AulaDetail,
        props: true
      }
    ]
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
