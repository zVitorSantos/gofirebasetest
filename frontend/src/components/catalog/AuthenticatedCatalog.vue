<template>
  <div>
    <h1>Catálogo Autenticado</h1>
    <div v-if="products.length === 0">Nenhum produto encontrado.</div>
    <ul v-else>
      <li v-for="product in filteredProducts" :key="product.id">{{ product.descricao }}</li>
    </ul>
    <div v-if="hasPermission('add_item')">
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
import { mapGetters } from 'vuex';

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
  computed: {
    ...mapGetters('auth', ['userPermissions']),
    filteredProducts() {
      if (this.hasPermission('view_all_categories')) {
        return this.products;
      }
      return this.products.filter(product => {
        return this.userPermissions.some(permission => permission.startsWith('view_specific_category:') && permission.endsWith(product.tipo));
      });
    }
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
    },
    hasPermission(permission) {
      return this.userPermissions && this.userPermissions.includes(permission);
    }
  }
};
</script>
