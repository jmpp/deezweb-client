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
    userFavorites(state) {
      if (state.loggedUser) {
        return state.loggedUser.favorites;
      }

      return [];
    },
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
    removeFavorite(context, track) {
      authService.removeFavorite(track).then(() => {
        context.commit('removeUserFavorite', track);
      }).catch((err) => {
        console.error(err);
      });
    },
    addFavorite(context, track) {
      authService.addFavorite(track).then(() => {
        context.commit('addUserFavorite', track);
      }).catch((err) => {
        console.error(err);
      });
    },
  },

  mutations: {
    changeUser(state, user) {
      state.loggedUser = user;
    },
    removeUserFavorite(state, track) {
      const index = state.loggedUser.favorites.findIndex(t => t.id === track.id);
      state.loggedUser.favorites.splice(index, 1);
    },
    addUserFavorite(state, track) {
      state.loggedUser.favorites.push({
        id: track.id,
        title: track.title,
        artist: {
          name: track.artist.name,
        },
        album: {
          title: track.album.title,
          cover: track.album.cover,
        },
      });
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
