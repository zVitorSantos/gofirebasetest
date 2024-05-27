<template>
  <div v-if="show" class="modal-overlay" @click.self="closeModal">
    <div class="modal-content">
      <h2>Adicionar Produto</h2>
      <form @submit.prevent="submitForm">
        <div class="form-container">
          <div class="form-column image-column">
            <div class="image-upload" @drop.prevent="onDrop" @dragover.prevent>
              <label for="imagem" class="image-label">+</label>
              <input id="imagem" type="file" @change="onFileChange" hidden />
              <img v-if="imageUrl" :src="imageUrl" class="image-preview" />
            </div>
          </div>
          <div class="form-column">
            <div class="form-group">
              <input id="ref" v-model="newProduct.ref" placeholder="Ref" required />
            </div>
            <div class="form-group">
              <input id="descricao" v-model="newProduct.descricao" placeholder="Descrição" required />
            </div>
            <div class="form-group">
              <input id="material" v-model="newProduct.material" placeholder="Material" />
            </div>
            <div class="form-group">
              <input id="peso" type="number" v-model="newProduct.peso" placeholder="Peso" />
            </div>
            <div class="form-group">
              <label for="matriz">Matriz:</label>
              <select id="matriz" v-model="newProduct.matriz">
                <option value="true">Sim</option>
                <option value="false">Não</option>
              </select>
            </div>
          </div>
          <div class="form-column">
            <div class="form-group">
              <select id="tipo" v-model="newProduct.tipo" required>
                <option v-for="tipo in catalogSettings.types" :key="tipo" :value="tipo">{{ tipo }}</option>
              </select>
            </div>
            <div class="form-group">
              <select id="modelo" v-model="newProduct.modelo">
                <option v-for="modelo in catalogSettings.models" :key="modelo" :value="modelo">{{ modelo }}</option>
              </select>
            </div>
            <div class="form-group">
              <select id="formato" v-model="newProduct.formato">
                <option v-for="formato in catalogSettings.formats" :key="formato" :value="formato">{{ formato }}
                </option>
              </select>
            </div>
            <div class="form-group">
              <select id="complementos" v-model="newProduct.complementos">
                <option v-for="complemento in catalogSettings.complements" :key="complemento" :value="complemento">{{
    complemento }}</option>
              </select>
            </div>
            <div class="form-group">
              <label for="piloto">Piloto:</label>
              <select id="piloto" v-model="newProduct.piloto">
                <option value="true">Sim</option>
                <option value="false">Não</option>
              </select>
            </div>
          </div>
          <div class="form-column">
            <div class="form-group">
              <input id="altura" type="number" v-model="newProduct.altura" placeholder="Altura" />
            </div>
            <div class="form-group">
              <input id="largura" type="number" v-model="newProduct.largura" placeholder="Largura" />
            </div>
            <div class="form-group">
              <input id="comprimento" type="number" v-model="newProduct.comprimento" placeholder="Comprimento" />
            </div>
            <div class="form-group">
              <input id="valor" type="number" v-model="newProduct.valor" placeholder="Valor (mil)" />
            </div>
            <div class="form-group">
              <label for="desenho">Desenho:</label>
              <select id="desenho" v-model="newProduct.desenho">
                <option value="true">Sim</option>
                <option value="false">Não</option>
              </select>
            </div>
          </div>
        </div>
        <button type="submit" class="btn btn-primary">Adicionar</button>
        <button type="button" @click="closeModal" class="btn btn-secondary">Fechar</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, getCurrentInstance } from 'vue';
import { useStore } from 'vuex';

const props = defineProps({
  show: Boolean,
  onClose: Function,
});

const { proxy } = getCurrentInstance();
const store = useStore();
const catalogSettings = computed(() => store.getters['catalog/catalogSettings']);
const canEditTipo = computed(() => store.getters['auth/hasPermission']('edit_type'));

const newProduct = ref({
  descricao: '',
  ref: '',
  imagem: '',
  tipo: '',
  modelo: '',
  formato: '',
  complementos: '',
  material: '',
  peso: null,
  altura: null,
  largura: null,
  comprimento: null,
  valor: null,
  matriz: 'false',
  piloto: 'false',
  desenho: 'false',
});

const imageUrl = ref('');

const onFileChange = (e) => {
  const file = e.target.files[0];
  const reader = new FileReader();
  reader.onload = (event) => {
    imageUrl.value = event.target.result;
    newProduct.value.imagem = imageUrl.value;
  };
  reader.readAsDataURL(file);
};

const onDrop = (e) => {
  const file = e.dataTransfer.files[0];
  const reader = new FileReader();
  reader.onload = (event) => {
    imageUrl.value = event.target.result;
    newProduct.value.imagem = imageUrl.value;
  };
  reader.readAsDataURL(file);
};

const submitForm = async () => {
  try {
    await store.dispatch('catalog/addProduct', newProduct.value);
    resetForm();
    props.onClose();
    proxy.$notify.success('Produto adicionado com sucesso!');
  } catch (error) {

    
    proxy.$notify.error(error.response.data.error);
    console.error(error);
  }
};

const resetForm = () => {
  newProduct.value = {
    descricao: '',
    ref: '',
    imagem: '',
    tipo: '',
    modelo: '',
    formato: '',
    complementos: '',
    material: '',
    peso: null,
    altura: null,
    largura: null,
    comprimento: null,
    valor: null,
    matriz: 'false',
    piloto: 'false',
    desenho: 'false',
  };
  imageUrl.value = '';
};

const closeModal = () => {
  props.onClose();
};

onMounted(async () => {
  if (!catalogSettings.value) {
    await store.dispatch('catalog/fetchCatalogSettings');
  }
});
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 1200px;
  width: 100%;
}

.form-container {
  display: flex;
  justify-content: space-between;
}

.form-column {
  flex: 1;
  padding: 10px;
}

.image-column {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.image-upload {
  width: 100px;
  height: 100px;
  border: 2px dashed #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.image-label {
  font-size: 2rem;
}

.image-preview {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input,
select {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}
</style>
