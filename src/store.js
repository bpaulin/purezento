import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import { firebase, auth } from "@/db";

Vue.use(Vuex);

const store = new Vuex.Store({
  plugins: [
    createPersistedState({
      storage: window.sessionStorage,
    }),
  ],
  state: {
    user: null,
    status: null,
    error: null,
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },

    removeUser(state) {
      state.user = null;
    },

    setStatus(state, payload) {
      state.status = payload;
    },

    setError(state, payload) {
      state.error = payload;
    },
  },
  actions: {
    signInAction({ commit }) {
      const provider = new firebase.auth.GoogleAuthProvider();

      auth
        .signInWithPopup(provider)
        .then((response) => {
          commit("setUser", response.user);
          commit("setStatus", "success");
          commit("setError", null);
        })
        .catch((error) => {
          commit("setStatus", "failure");
          commit("setError", error.message);
        });
    },

    signOutAction({ commit }) {
      auth
        .signOut()
        .then(() => {
          commit("setUser", null);
          commit("setStatus", "success");
          commit("setError", null);
        })
        .catch((error) => {
          commit("setStatus", "failure");
          commit("setError", error.message);
        });
    },
  },

  getters: {
    status(state) {
      return state.status;
    },

    user(state) {
      return state.user;
    },

    error(state) {
      return state.error;
    },
  },
});

if (window.Cypress) {
  window.__store__ = store;
}

export default store;
