import axios from "axios";
import router from "../router/index.js";


export default {
    state() {
        return {
            user: {}
        }
    },
    mutations: {
        updateUser(state, data) {
            state.user = data
        }
    },
    getters: {
        getCurrentUser(state) {
            return state.user
        }
    },
    actions: {
        register(context, params) {
            axios.post('https://test.ai-softdev.com/auth/register', params)
                .then(res => {
                    localStorage.setItem('access_token', res.data.access_token)
                        router.push({
                            name: 'task_page'
                        })

                })
        },
        login({commit}, params) {
            axios.post('https://test.ai-softdev.com/auth/login', params)
                .then(res => {
                    commit('updateUser', res.data.user)
                    localStorage.setItem('access_token', res.data.access_token)
                        router.push({
                            name: 'task_page'
                        })
                })
        },
        loadCurrentUser({commit}) {
            axios.get('https://test.ai-softdev.com/auth/current-user', {
                headers: {
                    Authorization: `${localStorage.getItem('access_token')}`
                }
            }).then(res => {
                commit('updateUser', res.data)
                console.log(res.data)
            })
        },
        logout() {
            axios.post('https://test.ai-softdev.com/auth/logout')
                .then(res => {
                    localStorage.removeItem('access_token')
                    router.push({
                        name: 'login_page'
                    })
                })
        },
        sendUserAvatar({dispatch}, data) {
            const fd = new FormData()
            fd.append('avatar', data.avatar)
            axios.patch(`https://test.ai-softdev.com/auth/user`, fd, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: localStorage.getItem('access_token')
                }
            }).then(res => {
                dispatch('loadCurrentUser')
                console.log(res.data)
            })
        },
        changeUserPassword({commit}, data) {
            axios.post('https://test.ai-softdev.com/auth/change-password', data, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    Authorization: localStorage.getItem('access_token')
                }
            }).then(res => {
                console.log(res.data)
            })
        }
    }
}