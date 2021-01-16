<template>
  <v-app>

    <NavBar/>

    <v-main>

      <router-view />

    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import NavBar from '@/components/NavBar.vue'
import {mapActions} from 'vuex';
export default Vue.extend({
  name: 'App',
  components: {
    NavBar
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

<style scoped>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: wheat;
  padding: 0 1rem
}

.page{
  min-height: 1700px;
}

</style>
