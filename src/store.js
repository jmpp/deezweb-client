import Vue from 'vue';
import Vuex from 'vuex';
import authService from './authService';

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
      // Vérification auprès du serveur si ce token est valide
      return authService.authenticate(token)
        .then((user) => {
          context.commit('changeUser', user);
        })
        .catch((err) => {
          // Token invalide ou expiré, on ne fait rien de spécial ici, si ce n'est que l'utilisateur devra se reconnecter manuellement
          // (éventuellement, on peut émettre un warning dans la console pour le dev ...)
          console.warn(err);
        });
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
