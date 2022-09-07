import { createApp } from 'vue'
import { createRouter, createWebHistory}from 'vue-router'
import App from './App.vue'

import Axios from 'axios';
import home from './components/homePage.vue';
import userList from './components/userListPage.vue';
import userProfile from './components/userProfilePage.vue';

const routes = [
    { name:'home', path: '/', component: home },
    { name:'userList', path: '/user', component: userList },
    { 
        path: '/user', 
        component: userProfile,
        children: [
            {name:'userProfile', path: ':userId', component: userProfile}
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

const app = createApp(App)
app.use(router)

app.mount('#app')

app.config.globalProperties.$axios = Axios;