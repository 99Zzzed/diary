import axios from "axios";
import router from "../router/index.js";


export default {
    state() {
        return {
            tasks: [],
            queryParams: {
                page: 1,
                limit: 5
            }
        }
    },
    mutations: {
        updateTask(state, {data, page, limit}) {
            state.tasks = data;
            state.queryParams.page = page;
            state.queryParams.limit = limit;
        }
    },
    getters: {
        getTasks(state) {
            return state.tasks
        }
    },
    actions: {
        loadTask({commit}, params) {
            axios.get(`https://test.ai-softdev.com/tasks/?page=${params.page}&limit=${params.limit}`, {
                headers: {
                    Authorization: localStorage.getItem('access_token')
                }
            }).then(res => {
                commit('updateTask', {data: res.data, page: params.page, limit: params.limit});
            });
        },
        createTask({dispatch, state}, data) {
            const {page, limit} = state.queryParams;
            axios.post(`https://test.ai-softdev.com/tasks/?page=${page}&limit=${limit}`, data, {
                headers: {
                    Authorization: localStorage.getItem('access_token')
                }
            }).then(res => {
                dispatch('loadTask', {page, limit})
                router.push({
                    name: 'task_page'
                })
            });
        },
        deleteTask({commit, state}, id) {
            const {page, limit} = state.queryParams;
            axios.delete(`https://test.ai-softdev.com/tasks/${id}?page=${page}&limit=${limit}`, {
                headers: {
                    Authorization: localStorage.getItem('access_token')
                }
            }).then(res => {
                commit('updateTask', {data: res.data, page, limit})
            });
        },
        taskIsDone({commit, state}, id) {
            const {page, limit} = state.queryParams;
            axios.patch(`https://test.ai-softdev.com/tasks/done/${id}?page=${page}&limit=${limit}`, null, {
                headers: {
                    Authorization: localStorage.getItem('access_token')
                }
            }).then(res => {
                commit('updateTask', {data: res.data, page, limit})
            })
        },
        editTask({commit, state}, {id, data}) {
            const {page, limit} = state.queryParams;
            axios.put(`https://test.ai-softdev.com/tasks/${id}?page=${page}&limit=${limit}`, data, {
                headers: {
                    Authorization: localStorage.getItem('access_token')
                }
            }).then(res => {
                commit('updateTask', {data: res.data, page, limit})
            });
        },
        sortTaskByDate({commit, state}, date) {
            const {page, limit} = state.queryParams;
            axios.get(`https://test.ai-softdev.com/tasks/${date}?page=${page}&limit=${limit}`, {
                headers: {
                    Authorization: localStorage.getItem('access_token')
                }
            }).then(res => {
                commit('updateTask', {data: res.data, page, limit})
            })
        }
    }
}