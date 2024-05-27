<template>
    <div class="item">
      <div class="image-column">
        <img class="item-image" :src="product.imagem || 'https://via.placeholder.com/100'" alt="Imagem do item" />
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
  </template>
  
  <script setup>
  
  const props = defineProps({
    product: Object
  });
  </script>
  
  <style scoped>
  /* Adicione seu estilo aqui */
  </style>
  