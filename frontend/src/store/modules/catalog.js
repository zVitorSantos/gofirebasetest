import axios from 'axios';

export default {
    namespaced: true,
    state: () => ({
        products: []
    }),
    mutations: {
        setProducts(state, products) {
            state.products = products;
        },
        addProduct(state, product) {
            state.products.push(product);
        }
    },
    actions: {
        async fetchProducts({ commit }) {
            try {
                const response = await axios.get('/api/v1/catalog');
                commit('setProducts', response.data.data);
            } catch (error) {
                console.error('Erro ao buscar produtos:', error);
                throw error;
            }
        },
        async addProduct({ commit, dispatch }, product) {
            try {
                await axios.post('/api/v1/catalog', product);
                // dispatch('fetchProducts'); // Se quiser buscar os produtos novamente após adicionar
                commit('addProduct', product); // Adiciona o produto diretamente no estado
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
