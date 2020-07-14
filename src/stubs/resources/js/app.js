window._ = require("lodash");

window.Vue = require("vue");

import vuetify from "./plugins/vuetify";
import "./plugins/validate";
import "./plugins/axios";


import App from "./components/App.vue";


import router from "./router";
import store from "./store";

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.auth)) {
        if (store.state.auth.token) {
            next()
        } else {
            next({
                path: '/login',
                query: {
                    redirect: to.fullPath
                }
            })
        }
    } else {
        next()
    }
})



new Vue({
    vuetify,
    store,
    router,
    render: h => h(App)
}).$mount("#app");