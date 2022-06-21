import VueRouter from 'vue-router'
import Vue from 'vue'
import Main from "./components/views/Main";
import PageLayout from "./components/PageLayout";
import About from "./components/views/About";
import Skills from "./components/views/Skills";
import Projects from "./components/views/projects/Projects";
import Contact from "./components/views/Contact";
import Project from "./components/views/projects/Project";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'page',
        redirect: '/main',
        component: PageLayout,
        children: [
            {
                path: '/main',
                name: 'main',
                component: Main,
            },
            {
                path: '/about',
                name: 'about',
                component: About,
            },
            {
                path: '/skills',
                name: 'skills',
                component: Skills,
            },
            {
                path: '/projects',
                name: 'projects',
                component: Projects,
            },
            {
                path: '/project/:id',
                name: 'project',
                component: Project,
            },
            {
                path: '/contact',
                name: 'contact',
                component: Contact,
            },
        ]
    },
    // {
    //     path: "/page-not-found",
    //     alias: '*',
    //     component: Error404,
    // },
]
const router = new VueRouter({
    mode: 'history',
    routes
})

export default router
