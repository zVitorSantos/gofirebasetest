<template>
    <div>
        <Navbar />
        <div v-if="isAuthenticated">
            <AuthenticatedCatalog />
        </div>
        <div v-else>
            <UnauthenticatedCatalog />
        </div>
    </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import Navbar from '../components/common/NavBar.vue';
import AuthenticatedCatalog from '../components/catalog/AuthenticatedCatalog.vue';
import UnauthenticatedCatalog from '../components/catalog/UnauthenticatedCatalog.vue';

export default {
    components: {
        AuthenticatedCatalog,
        UnauthenticatedCatalog
    },
    setup() {
        const store = useStore();
        const isAuthenticated = computed(() => store.getters['auth/isAuthenticated']);

        return {
            isAuthenticated
        };
    }
};
</script>