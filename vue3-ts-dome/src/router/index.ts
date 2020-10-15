import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

// const Home = () => import('../views/Home.vue')
import Home from '../views/home/index.vue'
// const Home = () => import('../views/home/index.vue')
const Mine = () => import('../views/mine/index.vue')
const Profile = () => import('../views/profile/index.vue')
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/mine',
        name: 'Mine',
        component: Mine
    },
    {
        path: '/profile',
        name: 'Profile',
        component: Profile
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router