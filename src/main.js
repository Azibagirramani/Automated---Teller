import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

// Services injection
import "./service/services.index"

import VueParticles from "vue-particles";
Vue.use(VueParticles);


// custom scss
import "./sass/sass.index.scss";

// bootstrap
// scss
import "./sass/boostrap/index.bootstrap.scss";
// theme import
import "./plugins/bootstrapVue";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
