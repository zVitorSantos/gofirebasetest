import axios from 'axios';

export default {
  namespaced: true,
  state: () => ({
    catalogSettings: null,
  }),
  mutations: {
    setCatalogSettings(state, settings) {
      state.catalogSettings = settings;
    },
  },
  actions: {
    async fetchCatalogSettings({ commit }) {
      try {
        const response = await axios.get('/api/v1/catalog/settings');
        commit('setCatalogSettings', response.data.data);
      } catch (error) {
        console.error('Erro ao buscar configurações do catálogo:', error);
        throw error;
      }
    },
  },
  getters: {
    catalogSettings: (state) => state.catalogSettings,
  },
};
