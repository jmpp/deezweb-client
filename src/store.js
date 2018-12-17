import Vue from 'vue';
import Vuex from 'vuex';
import fakeUser from './fakeUser';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loggedUser: null,
    searchResults: [],
    searchText: '',
    searchOrder: '',
  },

  getters: {

  },

  actions: {
    getUser(context) {
      fakeUser.getUser().then((user) => {
        context.commit('changeUser', user);
      });
    },
  },

  mutations: {
    changeUser(state, user) {
      state.loggedUser = user;
    },
    setSearchResult(state, searchResults) {
      state.searchResults = searchResults;
    },
    setSearchText(state, searchText) {
      state.searchText = searchText;
    },
    setSearchOrder(state, searchOrder) {
      state.searchOrder = searchOrder;
    },
  },
});
