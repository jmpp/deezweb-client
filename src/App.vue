<template>
  <div id="app">
    <dz-navbar></dz-navbar>
    <router-view/>
  </div>
</template>

<script>
import DzNavbar from "@/components/DzNavbar";

export default {
  name: "App",
  components: { DzNavbar }
};
</script>

<style>
.navbar-nav.nav-right {
  margin-left: auto;
}

body > main.container {
  margin-top: 2rem;
}

.search-results {
  flex-wrap: wrap;
}
.search-results .card {
  min-width: 200px;
  max-width: 300px;
}
</style>
