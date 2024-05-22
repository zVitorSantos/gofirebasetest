class CatalogService {
    constructor() {
        // Define a base URL para as requisições ao catálogo
        this.baseURL = '/api/v1/catalog';
    }

    // Método para buscar produtos no catálogo
    async getProducts() {
        try {
            const response = await axios.get(this.baseURL);
            return response.data.data;
        } catch (error) {
            console.error('Erro ao buscar produtos:', error);
            throw error;
        }
    }

    // Método para adicionar um novo produto ao catálogo
    async addProduct(product) {
        try {
            await axios.post(this.baseURL, product);
        } catch (error) {
            console.error('Erro ao adicionar produto:', error);
            throw error;
        }
    }
}

// Exporta uma instância do serviço para uso em outros componentes
export default new CatalogService();