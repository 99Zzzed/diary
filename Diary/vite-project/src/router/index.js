import {createRouter,createWebHistory} from "vue-router";
import Login from "../pages/Login.vue";
import Register from "../pages/Register.vue";
import Task from "../pages/Task.vue";
import Base from "../pages/Base.vue";
import Profile from "../pages/Profile.vue";
import CreateTaskForm from "../pages/CreateTaskForm.vue";

const routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: Login,
                name: 'login_page'
            },
            {
                path: 'register',
                component: Register,
                name: 'register_page'
            }
        ]
    },
    {
        path: '',
        component: Base,
        children: [
            {
                path: '/tasks',
                component: Task,
                name: 'task_page'
            },
            {
                path: '/profile',
                component: Profile,
                name: 'profile_page'
            },
            {
                path: '/created-task',
                component: CreateTaskForm,
                name: 'createdTask_page'
            }
        ]
    }
]

export default createRouter({
    routes: routes,
    history: createWebHistory()
})