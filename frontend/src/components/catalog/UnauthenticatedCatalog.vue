<template>
    <div>
      <h1>Catálogo</h1>
      <div v-if="products.length === 0">Nenhum produto encontrado.</div>
      <ul v-else>
        <li v-for="product in products" :key="product.id">{{ product.descricao }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  import CatalogService from '../../services/CatalogService';
  
  export default {
    data() {
      return {
        products: []
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
      }
    }
  };
  </script>
  