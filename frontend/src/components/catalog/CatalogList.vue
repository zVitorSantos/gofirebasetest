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
            <div v-if="products && products.length === 0">Nenhum produto encontrado.</div>
            <div v-else>
                <div v-for="product in products" :key="product.id" class="catalog-item">
                    <div class="image-column">
                        <img class="item-image" :src="product.imagem" alt="Imagem do item" />
                    </div>
                    <div class="info-column">
                        <div class="info-block" v-if="currentView === 'list'">
                            <strong>Ref:</strong>
                            <p>{{ product.ref || 'N/A' }}</p>
                            <strong>Descrição:</strong>
                            <p>{{ product.descricao || 'N/A' }}</p>
                            <strong>Valor:</strong>
                            <p>R$ ****</p>
                            <strong>Categoria 1:</strong>
                            <p>{{ product.categoria_1 || 'N/A' }}</p>
                            <strong>Categoria 2:</strong>
                            <p>{{ product.categoria_2 || 'N/A' }}</p>
                            <strong>Categoria 3:</strong>
                            <p>{{ product.categoria_3 || 'N/A' }}</p>
                            <strong>Complementos:</strong>
                            <p>{{ product.complementos || 'N/A' }}</p>
                            <strong>Material:</strong>
                            <p>{{ product.material || 'N/A' }}</p>
                            <strong>Peso:</strong>
                            <p>{{ product.peso || 'N/A' }}</p>
                            <strong>Altura:</strong>
                            <p>{{ product.altura || 'N/A' }}</p>
                            <strong>Largura:</strong>
                            <p>{{ product.largura || 'N/A' }}</p>
                            <strong>Comprimento:</strong>
                            <p>{{ product.comprimento || 'N/A' }}</p>
                            <strong>Matriz:</strong>
                            <p>{{ product.matriz ? 'Sim' : 'Não' }}</p>
                            <strong>Piloto:</strong>
                            <p>{{ product.piloto ? 'Sim' : 'Não' }}</p>
                            <strong>Desenho:</strong>
                            <p>{{ product.desenho ? 'Sim' : 'Não' }}</p>
                        </div>
                        <div class="info-block" v-if="currentView === 'cards'">
                            <strong>Ref:</strong>
                            <p>{{ product.ref || 'N/A' }}</p>
                            <strong>Medidas:</strong>
                            <p>{{ product.altura || 'N/A' }} x {{ product.largura || 'N/A' }} x {{ product.comprimento
                || 'N/A' }}</p>
                            <strong>Peso:</strong>
                            <p>{{ product.peso || 'N/A' }}</p>
                            <strong>Valor:</strong>
                            <p>R$ ****</p>
                        </div>
                    </div>
                </div>
            </div>
            <div v-else>
                Erro ao carregar produtos.
            </div>
        </div>
        <div v-if="isAuthenticated">
            <div>
                <h2>Adicionar Produto</h2>
                <form @submit.prevent="addProduct">
                    <input v-model="newProduct.descricao" placeholder="Descrição" required />
                    <input v-model="newProduct.ref" placeholder="Ref" required />
                    <button type="submit">Adicionar</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useStore } from 'vuex';
import Navbar from '../common/NavBar.vue';

const store = useStore();
const isAuthenticated = ref(store.getters['auth/isAuthenticated']);
const products = ref([]);
const currentView = ref('cards');
const newProduct = ref({ descricao: '', ref: '' });

const fetchProducts = async () => {
    try {
        await store.dispatch('catalog/fetchProducts');
        products.value = store.state.catalog.products;
    } catch (error) {
        console.error('Erro ao buscar produtos:', error);
        products.value = [];
    }
};

const addProduct = async () => {
    try {
        await store.dispatch('catalog/addProduct', newProduct.value);
        newProduct.value.descricao = '';
        newProduct.value.ref = '';
    } catch (error) {
        console.error('Erro ao adicionar produto:', error);
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
</style>