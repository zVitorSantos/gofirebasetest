import { createStore } from 'vuex';
import auth from './modules/auth';
import catalog from './modules/catalog';

export default createStore({
  modules: {
    auth,
    catalog
  }
});
