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
                commit('setProducts', response.data.data);
            } catch (error) {
                console.error('Erro ao buscar produtos:', error);
                throw error;
            }
        },
        async addProduct({ dispatch }, product) {
            try {
                await axios.post('/api/v1/catalog', product);
                dispatch('fetchProducts');
            } catch (error) {
                console.error('Erro ao adicionar produto:', error);
                throw error;
            }
        }
    }
};
