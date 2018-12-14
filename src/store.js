import Vue from 'vue';
import Vuex from 'vuex';
import fakeUser from './fakeUser';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loggedUser: null,
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
  },
});
