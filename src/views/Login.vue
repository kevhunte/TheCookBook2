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
        @submit.prevent=""
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
                <div>
                  <router-link 
                  to="/resetpassword"
                  class=""
                  >
                  <p>
                    Forgot password?
                  </p>
                  </router-link>
                </div>
                

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
                @keypress.enter="handleLogin()"
              >Login</v-btn>

              <div class="mt-3 red--text">
                {{errormessage}}
              </div>

              <div
                class="mt-3"
              >
                First time visiting? Sign up <strong @click="switchForm"> here </strong>
              </div>
            </v-container>
          </div>

          <div v-else-if="showSignUp && !showConfirmSignUp">
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
                  :type="show1 ? 'text' : 'password'"
                  :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                  @click:append="show1 = !show1"
                  required
                ></v-text-field>

                <v-text-field
                  v-model="confirmPassword"
                  :rules="[(v) => v === form.password || 'Passwords do not match']"
                  label="Confirm Password"
                  :type="show2 ? 'text' : 'password'"
                  :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                  @click:append="show2 = !show2"
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
                @keypress.enter="handleSignup()"
              >Sign Up</v-btn>

              <div class="mt-3 red--text">
                {{errormessage}}
              </div>

              <div
                class="mt-3"
              >
                Have an account? Login <strong @click="switchForm"> here </strong>
              </div>
            </v-container>
          </div>

          <div v-else-if="showSignUp && showConfirmSignUp">
            <v-container fluid>
              <h2>Confirm Sign Up. Check your email.</h2>

              <v-spacer/>

                <div 
                class="mt-6"
                style="color: #B38A0B"
                >
                  <strong>
                    Username: {{form.username}}
                  </strong>
                </div>
                

                <v-text-field
                  v-model="form.code"
                  :rules="[(v) => !!v || 'This field is required']"
                  label="Code"
                  required
                ></v-text-field>

              <v-btn
                elevation="2"
                style="background-color: #B38A0B"
                class="white--text"
                :disabled="!valid"
                @click="handleConfirmSignUp()"
                @keypress.enter="handleConfirmSignUp()"
              >Confirm Sign Up</v-btn>

              <div class="mt-3 red--text">
                {{errormessage}}
              </div>
            </v-container>

          </div>
        </v-form>
      </v-card>
  </div>
</template>

<script lang="ts">
import router from '@/router';
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
      code: ''
    },
    confirmPassword: '',
    errormessage:'',
    valid: false,
    showSignUp: false,
    showConfirmSignUp: false,
    showPassword: false,
    show1: false,
    show2: false,
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
        (v: string) => /\d|_/g.test(v) || 'Password must have a number',
        (v: string) => /\W|_/g.test(v) || 'Password must have a special character'
    ]
  }),
  methods: {
    ...mapActions("auth",["login","signUp","confirmSignUp"]),
    async handleLogin(){
      if(this.valid){
        console.log('handling login');

        try{
          await this.login({
            username: this.form.username, 
            password: this.form.password
          });
          // push to return URL
          const url = this.$route.query.redirect
          url ? router.push(`${url}`) : router.push('/')
        }
        catch(error){
          this.errormessage = `Error: ${error.message}`;
        }
        
      }
    },
    async handleSignup(){
      if(this.valid){
        console.log('handling signup');

        try {
          await this.signUp({
            username: this.form.username,
            password: this.form.password,
            email: this.form.email
          });

          this.showConfirmSignUp = true
        } 
        catch (error) {
          this.errormessage = `Error: ${error.message}`
        }
      }
    },
    async handleConfirmSignUp(){
      if(this.valid){
        try {
          await this.confirmSignUp({
            username: this.form.username,
            code: this.form.code
          });
          // sign in after confirmation
          await this.login({
            username: this.form.username,
            password: this.form.password
          })
          // push to return URL
          const url = this.$route.query.redirect
          url ? router.push(`${url}`) : router.push('/')
        } catch (error) {
          this.errormessage = `Error: ${error.message}`
        }
      }
    },
    reset () {
        this.form = {
          username: '',
          password: '',
          email: '',
          code: ''
        }
        this.showPassword = false
        this.show1 = false
        this.show2 = false
        this.confirmPassword = ''
        this.errormessage = ''
        
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


</style>
