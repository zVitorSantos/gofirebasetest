<template>
  <div class="catalog-page">
    <Navbar />
    <div class="toggle-buttons">
      <a href="#" @click.prevent="toggleView('cards')" id="grid-view" title="Visualização em grade" :class="{ active: currentView === 'cards' }" class="btn btn-light">
        <i class="icon-grid" aria-hidden="true"></i>
      </a>
      <a href="#" @click.prevent="toggleView('list')" id="list-view" title="Visualização em lista" :class="{ active: currentView === 'list' }" class="btn btn-light">
        <i class="icon-list" aria-hidden="true"></i>
      </a>
    </div>
    <div class="catalog-container"
      :class="{ 'list-view': currentView === 'list', 'cards-view': currentView === 'cards' }">
      <h2>Catálogo</h2>
      <div v-if="fetchError">Erro ao carregar produtos.</div>
      <div v-else>
        <div v-if="filteredProducts.length === 0">Nenhum produto encontrado.</div>
        <div class="products-list">
          <div v-for="product in filteredProducts" :key="product.ref">
            <ItemCard v-if="currentView === 'cards'" :product="product" />
            <ItemColumn v-else :product="product" />
          </div>
        </div>
      </div>
    </div>
    <div v-if="canAddProduct">
      <button @click="showModal = true" class="btn btn-primary mt-3">Adicionar Produto</button>
      <AddProductModal :show="showModal" @close="showModal = false" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import Navbar from '../common/NavBar.vue';
import AddProductModal from './AddProductModal.vue';
import ItemCard from './ItemCard.vue';
import ItemColumn from './ItemColumn.vue';
import { authService } from '../../main';

const store = useStore();
const isAuthenticated = computed(() => store.getters['auth/isAuthenticated']);
const products = computed(() => store.getters['catalog/products']);
const userPermissions = computed(() => store.state.auth.user?.permissions || []);
const canAddProduct = computed(() => store.getters['auth/hasPermission']('add_item'));
const currentView = ref('cards');
const showModal = ref(false);
const fetchError = ref(false);

// Filtra os produtos com base na autenticação do usuário e suas permissões
const filteredProducts = computed(() => {
  const defaultTypes = ['Enfeite', 'Enfeite Montado'];

  if (!isAuthenticated.value) {
    return products.value.filter(product => defaultTypes.includes(product.tipo));
  }

  const hasViewAllTypesPermission = userPermissions.value.includes('view_all_types');
  if (hasViewAllTypesPermission) {
    return products.value;
  }

  const viewableTypes = userPermissions.value
    .filter(permission => permission.startsWith('view_type:'))
    .map(permission => permission.split(':')[1])
    .concat(defaultTypes);

  return products.value.filter(product => viewableTypes.includes(product.tipo));
});

const fetchProducts = async () => {
  try {
    if (isAuthenticated.value) {
      const user = authService.auth.currentUser;
      if (user) {
        const token = await user.getIdToken();
        await store.dispatch('catalog/fetchProducts', token);
        await store.dispatch('catalog/fetchCatalogSettings', token);
      } else {
        fetchError.value = true;
        console.error('Erro ao obter token de autenticação.');
      }
    } else {
      await store.dispatch('catalog/fetchProducts', null);
      await store.dispatch('catalog/fetchCatalogSettings', null);
    }
  } catch (error) {
    fetchError.value = true;
    console.error('Erro ao buscar produtos:', error);
  }
};

const toggleView = (view) => {
  currentView.value = view;
};

onMounted(fetchProducts);
</script>

<style scoped>
.catalog-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
}

.toggle-buttons {
  display: flex;
  justify-content: center;
  margin: 20px 0;
}

.catalog-container {
  width: 100%;
  max-width: 1200px;
}

.products-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}

.catalog-container.list-view .products-list {
  flex-direction: column;
}

.catalog-container.cards-view .products-list {
  flex-direction: row;
}

.catalog-container.list-view .catalog-item {
  flex: 1 1 100%;
  display: flex;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-sizing: border-box;
}

.catalog-container.cards-view .catalog-item {
  flex: 1 1 200px;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-sizing: border-box;
}

.image-column {
  width: 100px;
  height: 100px;
  margin-right: 1rem;
}

.image-column img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.info-column {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.item {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #000;
  height: 200px;
}

.item:last-child {
  border-bottom: none;
}

.info-block {
  margin-bottom: 1%;
}

.item-image {
  max-width: 90%;
  max-height: 90%;
  margin: 10%;
  object-fit: contain;
}
</style>
