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
    async fetchProducts({ commit }) {
      try {
        const response = await axios.get('/api/v1/catalog');
        console.log('Fetched products:', response.data.data);
        commit('setProducts', response.data.data || []);
      } catch (error) {
        console.error('Erro ao buscar produtos:', error);
        throw error;
      }
    },
    async addProduct({ dispatch }) {
      try {
        await axios.post('/api/v1/catalog', product);
        dispatch('fetchProducts');
      } catch (error) {
        if (error.response && error.response.data && error.response.data.error === 'Produto com essa referência já existe.') {
          this._vm.$notify.error('Produto com essa referência já existe.');
        } else {
          console.error('Erro ao adicionar produto:', error);
          this._vm.$notify.error('Erro ao adicionar produto.');
          throw error;
        }
      }
    },
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
    products: (state) => state.products,
    catalogSettings: (state) => state.catalogSettings,
  },
};
