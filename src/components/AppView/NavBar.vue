<template>
  <!-- <v-app> -->
    <v-app-bar
      app
      style="background-color: #B38A0B"
    >
        <v-img
        :aspect-ratio="17/22"
        max-width="3rem"
        class=""
        src="/CookBookLogo.png"
        lazy-src="/CookBookLogo.png"
        ></v-img>

      <div class="d-flex align-center">
        <router-link to="/" class="link-style">
        <h2 class="ml-3 white--text">CookBook</h2>
        </router-link>
      </div>

      <v-spacer/>

      <router-link 
      v-if="user" 
      to="/profile" 
      class="link-style"
      >
        <strong class="white--text">{{user.username}}</strong>
      </router-link>

      <v-menu 
      offset-y
      :disabled="!user"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-icon 
            large
            v-bind="attrs"
            v-on="on"
            class="white--text  pl-3 pr-3">mdi-menu</v-icon>
        </template>
        <v-list-item-group
        v-model="selectedItem"
        color="primary"
        >
          <v-list dense>
            <v-list-item
              v-for="(item, index) in menu_items"
              :key="index"
              @click="() => {
                if(item.title === 'Logout')
                    handleLogout()
                else if($route.path !==item.link)
                    $router.push(item.link)
                }"
            >
              <v-list-item-icon>
                <v-icon v-text="item.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-list-item-group>
      </v-menu>

    </v-app-bar>
</template>

<script lang="ts">
import store from '@/store';
import Vue from 'vue';
import {mapActions, mapGetters} from 'vuex';
export default Vue.extend({
  name: 'NavBar',
  mounted: () =>{},
  data: () => ({
    selectedItem: null,
    menu_items: [
      {
        title: "Profile",
        link: "/profile",
        icon: "mdi-chef-hat"
      },
      {
        title: "Search",
        link: "/search",
        icon: "mdi-magnify"
      },
      {
        title: "New Recipe",
        link: "/upload",
        icon: "mdi-upload"
      },
      {
        title: "Bookmarks",
        link: "/bookmarks",
        icon: "mdi-bookmark-multiple"
      },
      {
        title: "About",
        link: "/about",
        icon: "mdi-lightbulb"
      },
      {
        title: "Logout",
        link: "/",
        icon: "mdi-exit-to-app"
      }
    ]
  }),
  computed:{
    ...mapGetters({
      user: "auth/user"
    })
  },
  methods: {
    ...mapActions("auth",["logout"]),
    async handleLogout(){
      await this.logout()
      this.$router.push("/login")
    }
  }
});
</script>

<style scoped>
    
</style>