import { createStore } from 'vuex';
import catalog from './modules/catalog';
import auth from './modules/auth';

export default createStore({
  modules: {
    catalog,
    auth,
  },
});
