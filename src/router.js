import Vue from 'vue';
import Router from 'vue-router';

import Home from './views/Home.vue';
import Login from './views/Login.vue';
import Register from './views/Register.vue';
import Search from './views/Search.vue';
import Track from './views/Track.vue';
import Album from './views/Album.vue';
import Artist from './views/Artist.vue';

Vue.use(Router);

export default new Router({
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
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
    },
    {
      path: '/search',
      name: 'search',
      component: Search,
    },
    {
      path: '/track/:id',
      name: 'track',
      component: Track,
    },
    {
      path: '/album/:id',
      name: 'album',
      component: Album,
    },
    {
      path: '/artist/:id',
      name: 'artist',
      component: Artist,
    },
  ],
});
