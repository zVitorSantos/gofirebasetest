<template>
  <div class="catalog-page">
    <Navbar />
    <div class="toggle-buttons">
      <button @click="toggleView('cards')">Cards View</button>
      <button @click="toggleView('list')">List View</button>
    </div>
    <div class="catalog-container"
      :class="{ 'list-view': currentView === 'list', 'cards-view': currentView === 'cards' }">
      <h2>Catálogo</h2>
      <div v-if="fetchError">Erro ao carregar produtos.</div>
      <div v-else>
        <div v-if="filteredProducts.length === 0">Nenhum produto encontrado.</div>
        <div v-else>
          <div v-for="product in filteredProducts" :key="product.ref" class="catalog-item">
            <div v-if="currentView === 'list'" class="item">
              <div class="image-column">
                <img class="item-image" :src="product.imagem || 'https://via.placeholder.com/100'"
                  alt="Imagem do item" />
              </div>
              <div class="info-column">
                <div class="info-block">
                  <strong>Ref:</strong>
                  <p>{{ product.ref || 'N/A' }}</p>
                </div>
                <div class="info-block">
                  <strong>Descrição:</strong>
                  <p>{{ product.descricao || 'N/A' }}</p>
                </div>
                <div class="info-block">
                  <strong>Valor:</strong>
                  <p>{{ product.valor ? 'R$ ' + product.valor : 'N/A' }}</p>
                </div>
              </div>
              <div class="info-column">
                <div class="info-block">
                  <strong>Categoria 1:</strong>
                  <p>{{ product.categoria_1 || 'N/A' }}</p>
                </div>
                <div class="info-block">
                  <strong>Categoria 2:</strong>
                  <p>{{ product.categoria_2 || 'N/A' }}</p>
                </div>
                <div class="info-block">
                  <strong>Categoria 3:</strong>
                  <p>{{ product.categoria_3 || 'N/A' }}</p>
                </div>
              </div>
              <div class="info-column">
                <div class="info-block">
                  <strong>Complementos:</strong>
                  <p>{{ product.complementos || 'N/A' }}</p>
                </div>
                <div class="info-block">
                  <strong>Material:</strong>
                  <p>{{ product.material || 'N/A' }}</p>
                </div>
                <div class="info-block">
                  <strong>Peso:</strong>
                  <p>{{ product.peso || 'N/A' }}</p>
                </div>
              </div>
              <div class="info-column">
                <div class="info-block">
                  <strong>Altura:</strong>
                  <p>{{ product.altura || 'N/A' }}</p>
                </div>
                <div class="info-block">
                  <strong>Largura:</strong>
                  <p>{{ product.largura || 'N/A' }}</p>
                </div>
                <div class="info-block">
                  <strong>Comprimento:</strong>
                  <p>{{ product.comprimento || 'N/A' }}</p>
                </div>
              </div>
              <div class="info-column">
                <div class="info-block">
                  <strong>Matriz:</strong>
                  <p>{{ product.matriz ? 'Sim' : 'Não' }}</p>
                </div>
                <div class="info-block">
                  <strong>Piloto:</strong>
                  <p>{{ product.piloto ? 'Sim' : 'Não' }}</p>
                </div>
                <div class="info-block">
                  <strong>Desenho:</strong>
                  <p>{{ product.desenho ? 'Sim' : 'Não' }}</p>
                </div>
              </div>
            </div>
            <div v-if="currentView === 'cards'" class="card">
              <div class="image-column">
                <img class="item-image" :src="product.imagem || 'https://via.placeholder.com/100'"
                  alt="Imagem do item" />
              </div>
              <div class="info-column">
                <div class="info-block">
                  <strong>Ref:</strong>
                  <p>{{ product.ref || 'N/A' }}</p>
                </div>
                <div class="info-block">
                  <strong>Medidas:</strong>
                  <p>{{ product.altura || 'N/A' }} x {{ product.largura || 'N/A' }} x {{ product.comprimento || 'N/A' }}
                  </p>
                </div>
                <div class="info-block">
                  <strong>Peso:</strong>
                  <p>{{ product.peso || 'N/A' }}</p>
                </div>
                <div class="info-block">
                  <strong>Valor:</strong>
                  <p>{{ product.valor ? 'R$ ' + product.valor : 'N/A' }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="canAddProduct">
      <button @click="showModal = true">Adicionar Produto</button>
      <AddProductModal :show="showModal" @close="showModal = false" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import Navbar from '../common/NavBar.vue';
import AddProductModal from './AddProductModal.vue';

const store = useStore();
const isAuthenticated = computed(() => store.getters['auth/isAuthenticated']);
const products = computed(() => store.getters['catalog/products']);
const canAddProduct = computed(() => store.getters['auth/hasPermission']('add_item'));
const currentView = ref('cards');
const showModal = ref(false);
const fetchError = ref(false);

// Filtra os produtos com base na autenticação do usuário
const filteredProducts = computed(() => {
  if (!isAuthenticated.value) {
    return products.value.filter(product => product.tipo === 'Enfeite' || product.tipo === 'Enfeite Montado');
  }
  return products.value;
});

const fetchProducts = async () => {
  try {
    await store.dispatch('catalog/fetchProducts');
    await store.dispatch('catalog/fetchCatalogSettings');
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
  justify-content: center;
  align-items: center;
  height: 100%;
}

.toggle-buttons {
  display: flex;
  justify-content: center;
  margin: 20px 0;
}

.catalog-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
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
