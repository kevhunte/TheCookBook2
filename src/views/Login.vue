<template>
  <div class="login page">
    <h1>
      Login / Sign Up Page
    </h1>
    <div>
      This page will show the login fields for users. It will be the default reroute page for unauthenticated users
    </div>
    <div>
      There must be a link to the sign up page
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
// make login and sign up components
export default Vue.extend({
  name: 'Login',
  components: {},
  data: () =>({
    
  })
});
</script>
