import { createApp } from 'vue'
import { createRouter, createWebHistory} from 'vue-router'
import App from './App.vue'

import Axios from 'axios'
import home from './page/homePage.vue'
import userList from './page/userList.vue'
import usersData from './page/usersData.vue'

const routes = [
    { name: 'home', path: '/', component: home },
    { name: 'list', path: '/user', component: userList },
    {
        name: 'data',
        path: '/user/:userId',
        component: usersData
       
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

const app = createApp(App)
app.use(router)

app.mount('#app')

app.config.globalProperties.$axios = Axios;