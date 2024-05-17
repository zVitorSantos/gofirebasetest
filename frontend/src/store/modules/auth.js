import { signOut } from "firebase/auth";
import { authService } from '../../main';

export default {
  namespaced: true,
  state: () => ({
    isAuthenticated: false,
  }),
  mutations: {
    setAuth(state, value) {
      state.isAuthenticated = value;
    },
  },
  actions: {
    login({ commit }) {
      // lógica de login
      commit('setAuth', true);
    },
    async logout({ commit }) {
      try {
        await signOut(authService.auth);
        commit('setAuth', false);
      } catch (error) {
        console.error(error);
      }
    }
  },
  getters: {
    isAuthenticated: state => state.isAuthenticated,
  },
};