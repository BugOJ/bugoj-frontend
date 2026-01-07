import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import AuthLayout from '@/layouts/AuthLayout.vue'

import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'
import ProblemList from '@/views/ProblemList.vue'
// import ProblemDetail from '@/views/ProblemDetail.vue'

const routes = [
    {
        path: '/',
        component: DefaultLayout,
        children: [
            { path: '', component: Home },
            { path: 'problems', component: ProblemList }
        ]
    },
    {
      path: '/problems/:pid',
      name: 'problem-detail',
      component: () => import('@/views/ProblemDetail.vue'),
      props: true,
    },
    {
        path: '/',
        component: AuthLayout,
        children: [
            { path: 'login', component: Login },
            { path: 'register', component: Register }
        ]
    }
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})
