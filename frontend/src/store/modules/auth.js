import { signOut } from "firebase/auth";
import { authService } from '../../main';

export default {
  namespaced: true,
  state: () => ({
    isAuthenticated: false,
    userPermissions: null,
  }),
  mutations: {
    setAuth(state, value) {
      state.isAuthenticated = value;
    },
    setPermissions(state, permissions) {
      state.userPermissions = permissions;
    },
  },
  actions: {
    login({ commit }) {
      commit('setAuth', true);
    },
    async logout({ commit }) {
      try {
        await signOut(authService.auth);
        commit('setAuth', false);
        commit('setPermissions', null);
      } catch (error) {
        console.error(error);
      }
    },
    setPermissions({ commit }, permissions) {
      commit('setPermissions', permissions);
    },
  },
  getters: {
    isAuthenticated: state => state.isAuthenticated,
    userPermissions: state => state.userPermissions,
  },
};
