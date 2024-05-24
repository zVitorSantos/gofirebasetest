import axios from 'axios';

export default {
  namespaced: true,
  state: () => ({
    products: []
  }),
  mutations: {
    setProducts(state, products) {
      state.products = products;
    }
  },
  actions: {
    async fetchProducts({ commit }) {
      try {
        const response = await axios.get('/api/v1/catalog');
        commit('setProducts', response.data.data || []);
      } catch (error) {
        console.error('Erro ao buscar produtos:', error);
        throw error;
      }
    },
    async addProduct({ dispatch }, product) {
      try {
        await axios.post('/api/v1/catalog', {
          ref: product.ref,
          descricao: product.descricao,
          tipo: product.tipo,
          imagem: product.imagem,
          modelo: product.modelo,
          formato: product.formato,
          complementos: product.complementos,
          material: product.material,
          peso: product.peso,
          altura: product.altura,
          largura: product.largura,
          comprimento: product.comprimento,
          valor: product.valor,
          matriz: product.matriz,
          piloto: product.piloto,
          desenho: product.desenho
        });
        dispatch('fetchProducts');
      } catch (error) {
        console.error('Erro ao adicionar produto:', error);
        throw error;
      }
    }
  },
  getters: {
    products: state => state.products
  }
};
