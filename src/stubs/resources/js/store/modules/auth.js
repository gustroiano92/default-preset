const state = {
    user: {},
    logged: false,
    token: localStorage.getItem('api_token'),
}
const actions = {
    getUser: (context) => {
        axios.get(`/api/user`).then(response => {
            context.commit('GET_USER', response.data)
        })
    },
    login: (context, payload) => {
        
        return new Promise((resolve, reject) => {
            axios.get('/sanctum/csrf-cookie').then(response => {
                axios.post(`/login`, payload).then(response => {

                    let token = "123123123"
      
                    context.commit('LOGIN', token)
    
                    context.dispatch('getUser');
    
                    resolve(response)
                }).catch(error => {
                    reject(error)
                })
            });

        })
    },
    logout: (context) => {
        context.commit('LOGOUT')
        
    }
}
const mutations = {
    GET_USER: (state, payload) => {
        state.user = payload
    },
    LOGIN: (state, token) => {
        state.token = token
        state.logged = true
        localStorage.setItem('api_token', token)
    },
    LOGOUT: (state) => {
        state.token = null
        state.logged = false
        localStorage.removeItem('api_token')
    },
}
const getters = {
    user: state => {
        return state.user
    },
    token: state => {
        return state.token
    },
    logged: state => {
        return (state.token == null) ? false : true
    }
}
export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}