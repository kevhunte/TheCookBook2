<template>
  <div class="login page">
    <h1>
      Login / Sign Up Page
    </h1>
    <div>
      This page will show the login fields for users. It will be the default reroute page for unauthenticated users
    </div>
    <div>
      Toggle variable for sign up and login components
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {mapActions} from 'vuex';
export default Vue.extend({
  name: 'Login',
  components: {},
  data: () =>({
    username: '',
    password: '',
    email: '',
    errormessage:'',
    showSignUp: false
  }),
  methods: {
    ...mapActions("auth",["login","signUp"])
  }
});
</script>
