import Vue from "vue";
import Router from "vue-router";

import Login from "./components/Login.vue";
import Home from "./components/Home.vue";


Vue.use(Router);

export default new Router({
    mode: "history",
    base: "/",
    routes: [{
            path: "/login",
            name: "Login",
            component: Login
        },
        
        {
            path: "/",
            name: "Home",
            component: Home,
            meta: {
                auth: true
            }
        },
        {
            path: "*",
            redirect: "/"
        }
    ],
    scrollBehavior() {
        return {
            x: 0,
            y: 0
        };
    }
});
