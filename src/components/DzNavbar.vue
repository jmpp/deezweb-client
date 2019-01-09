<template>
  <nav class="navbar navbar-expand-lg sticky-top navbar-light bg-light">
    <router-link to="/" class="navbar-brand">
      <i class="fa fa-headphones"></i> Deezweb
    </router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav nav-right">

        <template v-if="!loggedUser">
          <router-link to="/login" class="nav-item nav-link">
            <i class="fa fa-sign-in"></i> Connexion
          </router-link>
          <router-link to="/register" class="nav-item nav-link">
            <i class="fa fa-user-plus"></i> Inscription
          </router-link>
        </template>
        <template v-else>
          <router-link to="/search" class="nav-item nav-link active">
            <i class="fa fa-search"></i> Recherche
          </router-link>
          <router-link to="/favorites" class="nav-item nav-link">
            <i class="fa fa-heart"></i> Mes favoris
          </router-link>
          <div class="nav-item dropleft">
            <a class="nav-link dropdown-toggle" id="userMenu" role="button" data-toggle="dropdown">
              <img
                :src="loggedUser.avatar"
                :alt="loggedUser.firstname"
                width="28"
                height="28"
              >
            </a>
            <div class="dropdown-menu" aria-labelledby="userMenu">
              <h6 class="dropdown-header">{{loggedUser.firstname}} {{loggedUser.lastname}}</h6>
              <a class="dropdown-item" href="account.html">Mon compte</a>
              <router-link to="/logout" class="dropdown-item">
                Déconnexion
              </router-link>
            </div>
          </div>
        </template>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'DzNavbar',

  computed: {
    loggedUser() {
      return this.$store.state.loggedUser;
    },
  },
};
</script>

<style scoped>
  nav div.logged-user {
    display: inline-block;
  }
</style>
