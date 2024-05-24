import { createStore } from 'vuex';
import catalogSettings from './modules/catalogSettings';
import catalog from './modules/catalog';
import auth from './modules/auth';

export default createStore({
  modules: {
    catalogSettings,
    catalog,
    auth,
  },
});
