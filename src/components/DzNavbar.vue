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

        <router-link to="/search" class="nav-item nav-link active">
          <i class="fa fa-search"></i> Recherche
        </router-link>
        <router-link to="/favorites" class="nav-item nav-link">
          <i class="fa fa-heart"></i> Mes favoris
        </router-link>
          <router-link to="/login" class="nav-item nav-link">
            <i class="fa fa-sign-in"></i> Connexion
          </router-link>
          <router-link to="/register" class="nav-item nav-link">
            <i class="fa fa-user-plus"></i> Inscription
          </router-link>
          <div class="nav-item dropleft">
            <a class="nav-link dropdown-toggle" id="userMenu" role="button" data-toggle="dropdown">
              <img
                src="https://secure.gravatar.com/avatar/ab80b4d52a10aaea34780144949caef0"
                alt="JM Cléry"
                width="28"
                height="28"
              >
            </a>
            <div class="dropdown-menu" aria-labelledby="userMenu">
              <h6 class="dropdown-header">John SMITH</h6>
              <a class="dropdown-item" href="account.html">Mon compte</a>
              <a class="dropdown-item" href="#">Déconnexion</a>
            </div>
          </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "DzNavbar",
};
</script>

<style scoped>
  nav div.logged-user {
    display: inline-block;
  }
</style>
