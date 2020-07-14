import Vue from "vue";

import { ValidationProvider, ValidationObserver, localize,extend } from 'vee-validate';

import pt_BR from "vee-validate/dist/locale/pt_BR.json";
import { required, email } from 'vee-validate/dist/rules';

extend('required', required);
extend('email', email);

  localize('pt_BR', pt_BR);

Vue.component('ValidationProvider', ValidationProvider);

Vue.component('ValidationObserver', ValidationObserver);