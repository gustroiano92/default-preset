window.axios = require("axios");

import store from "../store";

axios.defaults.withCredentials = true;

window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";