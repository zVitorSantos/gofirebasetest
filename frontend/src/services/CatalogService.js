import axios from 'axios';

class CatalogService {
    constructor() {
        this.baseURL = '/api/v1/catalog';
    }

    async getProducts() {
        try {
            const response = await axios.get(this.baseURL);
            return response.data.data || [];
        } catch (error) {
            console.error('Erro ao buscar produtos:', error);
            throw error;
        }
    }

    async addProduct(product) {
        try {
            await axios.post(this.baseURL, product);
        } catch (error) {
            console.error('Erro ao adicionar produto:', error);
            throw error;
        }
    }
}

export default new CatalogService();
