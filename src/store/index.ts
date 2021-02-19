import Vue from 'vue';
import Vuex from 'vuex';
import {auth} from './auth/auth';
import {home} from './home/home';
import {profile} from './profile/profile';
import {search} from './search/search';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    home,
    profile,
    search
  },
});
