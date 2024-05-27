import { signOut, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { authService } from '../../main';
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:8080';

const fetchUserByUID = async (userUID) => {
  try {
    const token = await authService.getIdToken();
    const response = await axios.get(`/api/v1/user/id/${userUID}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

const fetchUserPermissions = async (uid) => {
  try {
    const token = await authService.getIdToken();
    const response = await axios.get(`/api/v1/user/permissions/${uid}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data.permissions;
  } catch (error) {
    throw error;
  }
};

const savePermissionsToLocalStorage = (permissions) => {
  localStorage.setItem('userPermissions', JSON.stringify(permissions));
};

const loadPermissionsFromLocalStorage = () => {
  const permissions = localStorage.getItem('userPermissions');
  return permissions ? JSON.parse(permissions) : [];
};

export default {
  namespaced: true,
  state: () => ({
    isAuthenticated: false,
    userPermissions: loadPermissionsFromLocalStorage(),
  }),
  mutations: {
    setAuth(state, value) {
      state.isAuthenticated = value;
    },
    setPermissions(state, permissions) {
      state.userPermissions = permissions;
      savePermissionsToLocalStorage(permissions);
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
        commit('setPermissions', []);
        localStorage.removeItem('userPermissions');
      } catch (error) {
        console.error(error);
      }
    },
    async loginWithEmail({ commit }, { email, password }) {
      try {
        const userCredential = await authService.login(email, password);
        const userUID = userCredential.user.uid;
        const user = await fetchUserByUID(userUID);
        const permissions = await fetchUserPermissions(userUID);
        commit('setAuth', true);
        commit('setPermissions', permissions);
      } catch (error) {
        throw error;
      }
    },
    async registerWithEmail({ commit }, { name, email, password, role }) {
      try {
        const userCredential = await authService.register(email, password);
        const userUID = userCredential.uid;
        const response = await axios.post('/api/v1/user', {
          name,
          email,
          password,
          uid: userUID,
          role: role || 'user'
        });
        const user = response.data;
        const permissions = await fetchUserPermissions(userUID);
        commit('setAuth', true);
        commit('setPermissions', permissions);
      } catch (error) {
        throw error;
      }
    },
    async loginWithGoogle({ commit }) {
      const provider = new GoogleAuthProvider();
      try {
        const userCredential = await signInWithPopup(authService.auth, provider);
        const userUID = userCredential.user.uid;
        const user = await fetchUserByUID(userUID);
        const permissions = await fetchUserPermissions(userUID);
        commit('setAuth', true);
        commit('setPermissions', permissions);
      } catch (error) {
        throw error;
      }
    },
    async updateUserPermissions({ commit }, { userID, permissions }) {
      try {
        const token = await authService.getIdToken();
        await axios.put(`/api/v1/user/permissions/${userID}`, { permissions }, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        commit('setPermissions', permissions);
      } catch (error) {
        throw error;
      }
    },
    async getToken() {
      const user = authService.auth.currentUser;
      if (user) {
        return await user.getIdToken();
      }
      return null;
    }
  },
  getters: {
    isAuthenticated: state => state.isAuthenticated,
    userPermissions: state => state.userPermissions,
    hasPermission: (state) => (permission) => state.userPermissions.includes(permission)
  },
};
