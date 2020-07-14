<template>
  <v-container fill-height>
    <v-layout justify-center
              align-center>
      <v-flex shrink
              xs12
              sm8
              md5>
        <v-card flat
                class="transparent">
          <v-form>
        <ValidationObserver ref="observer" v-slot="{ invalid }" tag="form" @submit.prevent="submit()">

<ValidationProvider name="e-mail" rules="required|email" v-slot="{ errors }">
            <v-text-field 
                          :error-messages="errors"
                          append-icon="mdi-account-tie"
                          v-model="auth.email"
                          label="E-mail"
                          type="text"></v-text-field>
</ValidationProvider>

<ValidationProvider name="senha" rules="required" v-slot="{ errors }">
            <v-text-field 
                          :error-messages="errors"
                          append-icon="mdi-lock"
                          v-model="auth.password"
                          label="Senha"
                          type="password"></v-text-field>
</ValidationProvider>
          

          <v-btn  @click="authenticate()"
                 block
                 color="primary">Login</v-btn>
        </ValidationObserver>
                 </v-form>

        </v-card>
      </v-flex>

    </v-layout>

  </v-container>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      auth: {
        email: "will.vivien@example.com",
        password: "password"
      }
    };
  },
  
  computed: {
    ...mapState("auth", ["logged", "user"]),
  },

  methods: {
    ...mapActions("auth", ["login"]),

    authenticate() {
    this.$refs.observer.validate().then(isValid => {

         
               if (isValid) {
       
 
          this.login(this.auth).then(res => {
            if (this.$route.query.redirect) {
              this.$router.push(this.$route.query.redirect);
            } else {
              this.$router.push(`/`);
            }
          });
        }
         

           });

       

     
    }
  },
  
};
</script>
