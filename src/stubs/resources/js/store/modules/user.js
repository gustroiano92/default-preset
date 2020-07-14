const state = {
    user: {},
    users: {
        data: [],
        meta:{}
    },
}
const actions = {
    showUsers: (context) => {
        return new Promise((resolve, reject) => {
            axios.get(`/api/users`).then(response => {
                context.commit('SHOW_USERS', response.data)
                resolve(response)
            }).catch(error => {
                reject(error)
            })
        })
    },
    showUser: (context, id) => {
        return new Promise((resolve, reject) => {
            axios.get(`/api/users/${id}`).then(response => {
                context.commit('SHOW_USER', response.data.data)
                resolve(response)
            }).catch(error => {
                reject(error)
            })
        })
    },
    storeUser: (context, payload) => {
        return new Promise((resolve, reject) => {
            axios.post(`/api/users`, payload).then(response => {
                context.commit('STORE_USER', response.data)
                context.dispatch('showUsers')
                resolve(response)
            }).catch(error => {
                reject(error)
            })
        })
    },
    updateUser: (context, payload) => {
        return new Promise((resolve, reject) => {
            axios.put(`/api/users/${payload.id}`, payload).then(response => {
                resolve(response)
            }).catch(error => {
                reject(error)
            })
        })
    },
    destroyUser: (context, id) => {
        return new Promise((resolve, reject) => {
            axios.delete(`/api/users/${id}`).then(response => {
                context.dispatch('showUsers')
                resolve(response)
            }).catch(error => {
                reject(error)
            })
        })
    }
}
const mutations = {

    SHOW_USER: (state, payload) => {
        state.user = payload
    },
    SHOW_USERS: (state, payload) => {
        state.users = payload
    },
    STORE_USER: (state, payload) => {
        state.user = payload
    }
}
const getters = {
    user: state => {
        return state.user
    },
    users: state => {
        return state.users
    }
}
export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}
