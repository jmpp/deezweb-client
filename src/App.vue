<template>
  <div id="app">
    <dz-navbar></dz-navbar>
    <router-view/>
  </div>
</template>

<script>
import DzNavbar from '@/components/DzNavbar.vue';

export default {
  name: 'App',
  components: { DzNavbar },
  created() {
    const token = localStorage.getItem('deezweb-auth-jwt');
    if (token !== null) {
      this.$store.dispatch('logUserWithToken', token);
    }
  },
};
</script>

<style>
.navbar-nav.nav-right {
  margin-left: auto;
}

main.container {
  padding-top: 2rem;
}

.search-results {
  flex-wrap: wrap;
}
.search-results .card {
  min-width: 200px;
  max-width: 300px;
}
</style>
