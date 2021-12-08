import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sync: {
      isSyncing: false,
      syncError: null,
      syncSuccess: "",
      label: "",
    },
    user: {},
    isAuth: false,
  },
  getters: {
    user: (state) => state.user,
    isAuth: (state) => state.isAuth,
    sync: (state) => state.sync,
  },
  actions: {
    setUser({ commit }, payload) {
      commit("setUser", payload);
      commit("setAuth", true);
    },

    unSetUser({ commit }) {
      commit("unsetUser");
      commit("setAuth", false);
    },

    setSync({ commit }, payload) {
      let payloadObj = Object.assign(this.state.sync, payload);
      commit("setSync", payloadObj);
    },
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },

    setSync(state, payload) {
      state.sync = payload;
    },

    setAuth(state, payload) {
      state.isAuth = payload;
    },
  },
  modules: {},
});
