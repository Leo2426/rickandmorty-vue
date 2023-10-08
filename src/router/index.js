import {createRouter, createWebHistory} from "vue-router";
import Characters from "../characters/pages/characters.component.vue"
import Home from "../public/pages/home.component.vue";
import PageNotFound from "../public/pages/page-not-found.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/home',        component: Home, meta: { title: 'Home'} },
        { path: '/characters',       component: Characters, meta: { title: 'Characters'} },
        { path: '/',        redirect: "/home" },
        { path: '/:pathMatch(.*)*', name: 'not-found', component: PageNotFound }
    ]
});

export default router;