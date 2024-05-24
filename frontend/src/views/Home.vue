<template>
  <div>
    <div v-if="isAuthenticated">
      <AuthenticatedHome />
    </div>
    <div v-else>
      <UnauthenticatedHome />
    </div>
  </div>
</template>

<script>
import { computed, watch } from 'vue';
import { useStore } from 'vuex';
import AuthenticatedHome from '../components/home/AuthenticatedHome.vue';
import UnauthenticatedHome from '../components/home/UnauthenticatedHome.vue';

export default {
  components: {
    AuthenticatedHome,
    UnauthenticatedHome
  },
  setup() {
    const store = useStore();
    const isAuthenticated = computed(() => store.getters['auth/isAuthenticated']);

    watch(isAuthenticated, (newValue) => {
      console.log('Authentication state changed:', newValue);
    });

    return {
      isAuthenticated
    };
  }
};
</script>
