<template>
  <div class="login page">
    <h1>
      Please {{showSignUp ? 'Sign Up': 'Login'}}
    </h1>
      <v-card 
      class="mx-auto"
      max-width="500"
      >
        <v-form 
        v-model="valid"
        ref="registerForm"
        class="mr-2 ml-2"
        >
          <div v-if="!showSignUp">
            <v-container fluid>
                <v-text-field
                  v-model="form.username"
                  :rules="fieldRules"
                  label="Username"
                  required
                ></v-text-field>

                <v-text-field
                  v-model="form.password"
                  :rules="fieldRules"
                  label="Password"
                  :type="showPassword ? 'text' : 'password'"
                  :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                  @click:append="switchPassword"
                  required
                ></v-text-field>

              <v-btn
                elevation="2"
                class="red white--text mr-2"
                @click="reset()"
              >Reset</v-btn>
              <v-btn
                elevation="2"
                style="background-color: #B38A0B"
                class="white--text"
                :disabled="!valid"
                @click="handleLogin()"
              >Login</v-btn>

              <div
                class="mt-3"
              >
                First time visiting? Sign up <strong @click="switchForm"> here </strong>
              </div>
            </v-container>
          </div>

          <div v-else-if="showSignUp">
            <v-container fluid>
                <v-text-field
                  v-model="form.username"
                  :rules="signUpFieldRules"
                  label="Username"
                  required
                ></v-text-field>

                <v-text-field
                  v-model="form.password"
                  :rules="passwordRules"
                  label="Password"
                  :type="showPassword ? 'text' : 'password'"
                  :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                  @click:append="switchPassword"
                  required
                ></v-text-field>

                <v-text-field
                  v-model="form.email"
                  :rules="emailRules"
                  label="E-mail"
                  required
                ></v-text-field>
              <v-btn
                elevation="2"
                class="red white--text mr-2"
                @click="reset()"
              >Reset</v-btn>
              <v-btn
                elevation="2"
                style="background-color: #B38A0B"
                class="white--text"
                :disabled="!valid"
                @click="handleSignup()"
              >Sign Up</v-btn>

              <div
                class="mt-3"
              >
                Have an account? Login <strong @click="switchForm"> here </strong>
              </div>
            </v-container>
          </div>
        </v-form>
      </v-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {mapActions} from 'vuex';
export default Vue.extend({
  name: 'Login',
  components: {},
  data: () =>({
    form: {
      username: '',
      password: '',
      email: '',
    },
    errormessage:'',
    valid: false,
    showSignUp: false,
    showPassword: false,
    fieldMaxLen: 30,
    fieldRules: [
        (v: string) => !!v || 'This field is required'
    ],
    signUpFieldRules: [
        (v: string) => !!v || 'This field is required',
        (v: string) => v.length > 8 || 'Field must be greater than 8 characters'
    ],
    emailRules: [
        (v: string) => !!v || 'E-mail is required',
        (v: string) => /.+@.+/.test(v) || 'E-mail must be valid',
    ],
    passwordRules: [
        (v: string) => !!v || 'This field is required',
        (v: string) => v.length >= 8 || 'Password must be equal to or greater than 8 characters',
        (v: string) => /\W|_/g.test(v) || 'Password must have a special character',
        (v: string) => /\d|_/g.test(v) || 'Password must have a number'
    ]
  }),
  methods: {
    ...mapActions("auth",["login","signUp"]),
    handleLogin(){
      if(this.valid){
        console.log('handling login');
        //this.login(this.form.username, this.form.password)
      }
    },
    handleSignup(){
      if(this.valid){
        console.log('handling signup');
        //this.signUp(this.form.username,this.form.password,this.form.email)
      }
    },
    reset () {
        this.form = {
          username: '',
          password: '',
          email: '',
        }
        this.showPassword = false
        
        var refForm: any = this.$refs.registerForm;

        refForm.resetValidation()
    },
    switchForm(){
      this.reset()
      this.showSignUp = !this.showSignUp
    },
    switchPassword(){
      this.showPassword = !this.showPassword
    }
  }
});
</script>
<style scoped>

/* .formStyle {
  max-width: 50%;
  margin: auto;
} */

</style>
