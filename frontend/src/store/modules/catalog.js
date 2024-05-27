import axios from 'axios';

export default {
  namespaced: true,
  state: () => ({
    products: [],
    catalogSettings: null,
  }),
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
    setCatalogSettings(state, settings) {
      state.catalogSettings = settings;
    },
  },
  actions: {
    async fetchProducts({ commit }, token) {
      try {
        const headers = token ? { Authorization: `Bearer ${token}` } : {};
        const response = await axios.get('/api/v1/catalog', { headers });
        console.log('Fetched products:', response.data.data);
        commit('setProducts', response.data.data || []);
      } catch (error) {
        console.error('Erro ao buscar produtos:', error);
        throw error;
      }
    },
    async addProduct({ dispatch, rootState }, product) {
      try {
        const token = await rootState.auth.user.getIdToken();
        await axios.post('/api/v1/catalog', product, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        dispatch('fetchProducts');
      } catch (error) {
        console.error('Erro ao adicionar produto:', error);
        throw error;
      }
    },
    async fetchCatalogSettings({ commit }, token) {
      try {
        const headers = token ? { Authorization: `Bearer ${token}` } : {};
        const response = await axios.get('/api/v1/catalog/settings', { headers });
        commit('setCatalogSettings', response.data.data);
      } catch (error) {
        console.error('Erro ao buscar configurações do catálogo:', error);
        throw error;
      }
    },
  },
  getters: {
    products: (state) => state.products,
    catalogSettings: (state) => state.catalogSettings,
  },
};