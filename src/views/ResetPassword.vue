<template>
    <div class="resetpassword page">
        <h1>
            Reset Password
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
          <div v-if="!showPasswordSubmit">
            <v-container fluid>

                <div
                v-if="!showCode"
                >
                    <h2>Enter your username</h2>
                    <v-text-field
                    v-model="username"
                    :rules="fieldRules"
                    label="Username"
                    required
                    ></v-text-field>
                    <v-btn
                        elevation="2"
                        style="background-color: #B38A0B"
                        class="white--text"
                        :disabled="!valid"
                        @click="handleForgotPassword()"
                    >Confirm</v-btn>
                </div>
                
                <div 
                v-else-if="showCode"
                >
                    <h3>
                        Check your email. Paste the confirmation code below.
                    </h3>
                    <div 
                    class="mt-6"
                    style="color: #B38A0B"
                    >
                        <strong>
                        Username: {{username}}
                        </strong>
                    </div>

                    <v-text-field
                    v-model="code"
                    :rules="fieldRules"
                    label="Code"
                    required
                    ></v-text-field>

                    <v-text-field
                    v-model="newpassword"
                    :rules="passwordRules"
                    label="Password"
                    :type="show1 ? 'text' : 'password'"
                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                    @click:append="show1 = !show1"
                    required
                    ></v-text-field>

                    <v-text-field
                    :rules="[(v) => v === this.newpassword || 'Passwords do not match']"
                    label="Confirm Password"
                    :type="show2 ? 'text' : 'password'"
                    :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                    @click:append="show2 = !show2"
                    required
                    ></v-text-field>

                    <v-btn
                    elevation="2"
                    style="background-color: #B38A0B"
                    class="white--text"
                    :disabled="!valid"
                    @click="handleForgotPasswordSubmit()"
                    >Set New Password</v-btn>
                </div>
                
              <div class="mt-3 red--text">
                {{errormessage}}
              </div>

              <div
              @click="() => {
                  $router.go(-1)
              }"
              >
                  <strong>
                      Go Back
                  </strong>
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
import { use } from 'vue/types/umd';
import {mapActions} from 'vuex';
export default Vue.extend({
    name: 'Reset',
    data: () => ({
        showPasswordSubmit: false,
        valid: false,
        showCode: false,
        show1: false,
        show2: false,
        username: '',
        code: '',
        newpassword: '',
        errormessage: '',
        fieldRules: [
        (v: string) => !!v || 'This field is required'
        ],
        passwordRules: [
        (v: string) => !!v || 'This field is required',
        (v: string) => v.length >= 8 || 'Password must be equal to or greater than 8 characters',
        (v: string) => /\d|_/g.test(v) || 'Password must have a number',
        (v: string) => /\W|_/g.test(v) || 'Password must have a special character'
        ]
    }),
    methods:{
        ...mapActions("auth",["login","forgotPassword","forgotPasswordSubmit"]),
        async handleForgotPassword(){
            if(this.valid){
                try {
                    await this.forgotPassword({
                        username: this.username
                    })
                    this.showCode = !this.showCode
                } catch (error) {
                    this.errormessage = `Error: ${error}`
                }
            }
        },
        async handleForgotPasswordSubmit(){
            if(this.valid){
                try {
                    await this.forgotPasswordSubmit({
                        username: this.username,
                        code: this.code,
                        password: this.newpassword
                    })
                    await this.login({
                        username: this.username,
                        password: this.newpassword
                    })
                    // push to return URL
                    const url = this.$route.query.redirect
                    url ? router.push(`${url}`) : router.push('/')
                    } 
                catch (error) {
                    this.errormessage = `Error: ${error}`
                }
            }
        }    
    }
})
</script>

<style scoped>

</style>