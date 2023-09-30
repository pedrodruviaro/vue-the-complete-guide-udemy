import { createStore } from 'vuex';
import rootMutations from './mutations';
import rootActions from './actions';
import rootGetters from './getters';

import couterModule from './counter';

const store = createStore({
  modules: { counter: couterModule },

  state() {
    return {
      isLoggedIn: false,
    };
  },

  mutations: rootMutations,
  actions: rootActions,
  getters: rootGetters,
});

export default store;
