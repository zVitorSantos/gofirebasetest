<template>
    <div>
        <h1>Catálogo Autenticado</h1>
        <div v-if="products.length === 0">Nenhum produto encontrado.</div>
        <ul v-else>
            <li v-for="product in products" :key="product.id">{{ product.descricao }}</li>
        </ul>
        <div>
            <h2>Adicionar Produto</h2>
            <form @submit.prevent="addProduct">
                <input v-model="newProduct.descricao" placeholder="Descrição" required />
                <input v-model="newProduct.ref" placeholder="Ref" required />
                <button type="submit">Adicionar</button>
            </form>
        </div>
    </div>
</template>

<script>
import CatalogService from '../../services/CatalogService';

export default {
    data() {
        return {
            products: [],
            newProduct: {
                descricao: '',
                ref: ''
            }
        };
    },
    mounted() {
        this.fetchProducts();
    },
    methods: {
        async fetchProducts() {
            try {
                this.products = await CatalogService.getProducts();
            } catch (error) {
                console.error('Erro ao buscar produtos:', error);
            }
        },
        async addProduct() {
            try {
                await CatalogService.addProduct(this.newProduct);
                this.newProduct.descricao = '';
                this.newProduct.ref = '';
                this.fetchProducts();
            } catch (error) {
                console.error('Erro ao adicionar produto:', error);
            }
        }
    }
};
</script>
