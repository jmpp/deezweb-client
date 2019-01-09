import Vue from 'vue';
import Router from 'vue-router';

import Home from './views/Home.vue';
import Login from './views/Login.vue';
import Register from './views/Register.vue';
import Search from './views/Search.vue';
import Track from './views/Track.vue';
import Album from './views/Album.vue';
import Artist from './views/Artist.vue';
import Favorites from './views/Favorites.vue';

import store from './store';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: { requiresNoAuth: true },
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      meta: { requiresNoAuth: true },
    },
    {
      path: '/search',
      name: 'search',
      component: Search,
      meta: { requiresAuth: true },
    },
    {
      path: '/track/:id',
      name: 'track',
      component: Track,
      meta: { requiresAuth: true },
    },
    {
      path: '/album/:id',
      name: 'album',
      component: Album,
      meta: { requiresAuth: true },
    },
    {
      path: '/artist/:id',
      name: 'artist',
      component: Artist,
      meta: { requiresAuth: true },
    },
    {
      path: '/favorites',
      name: 'favorites',
      component: Favorites,
      meta: { requiresAuth: true },
    },
    {
      path: '/logout',
      name: 'logout',
      beforeEnter() {
        localStorage.removeItem('deezweb-auth-jwt');
        store.dispatch('logoutUser');
        router.replace({ name: 'home' });
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  const jwtClient = localStorage.getItem('deezweb-auth-jwt');

  // Vérification si on tente d'accéder à une route nécessitant une authentification
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (jwtClient === null || jwtClient.trim() === '') {
      return next({
        path: '/login',
      });
    }
  } else if (to.matched.some(record => record.meta.requiresNoAuth)) {
    if (jwtClient !== null) {
      return next({
        path: '/search',
      });
    }
  }
  return next();
});

export default router;
