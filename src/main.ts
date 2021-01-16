import Vue from 'vue';
import App from './App.vue';
// import './registerServiceWorker';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import Amplify, * as AmplifyModules from 'aws-amplify';
//import { AmplifyPlugin } from 'aws-amplify-vue';
const aws_amplify_vue = require('aws-amplify-vue');
import aws_exports from './aws-exports';
Amplify.configure(aws_exports);
Vue.use(aws_amplify_vue.AmplifyPlugin, AmplifyModules);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App)
}).$mount('#app');
