<template>
    <div class="catalog-page">
        <div class="catalog-content">
            <CatalogList />
        </div>
    </div>
</template>

<script>
import CatalogList from '../components/catalog/CatalogList.vue';

export default {
    components: {
        CatalogList
    }
};
</script>

<style scoped>
.catalog-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
}
</style>
