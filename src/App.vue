<template>
  <v-app>

    <NavBar/>

    <v-main>

      <router-view />

      <Footer/>

    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import NavBar from '@/components/AppView/NavBar.vue'
import Footer from '@/components/AppView/Footer.vue'
import {mapActions} from 'vuex';
export default Vue.extend({
  name: 'App',
  components: {
    NavBar,
    Footer
  },
  mounted(){
    // persists login info on app load
    this.authAction()
  },
  data: () => ({}),
  methods: {
    ...mapActions("auth",["authAction"])
  }
});
</script>

<style>

* {
    scroll-behavior: smooth;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: wheat;
  padding: 0 1rem
}

a {
  text-decoration: none;
  color: inherit;
}

.page{
  min-height: 35em;
}

</style>
