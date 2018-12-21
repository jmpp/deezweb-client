import Vue from 'vue';
import Vuex from 'vuex';
import jwtDecode from 'jwt-decode';

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
    logUserWithToken(context, token) {
      const user = jwtDecode(token);
      context.commit('changeUser', user);
    },
    logoutUser(context) {
      context.commit('changeUser', null);
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
