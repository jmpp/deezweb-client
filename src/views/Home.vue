<template>
  <div class="home">
    <main class="container">
      <div class="jumbotron">
        <p class="lead">L'application d'écoute et de gestion de musique gratuite, via le catalogue Deezer !</p>
        <hr class="my-4">
        <p>Ecoutez gratuitement des extraits issus de la base de données de Deezer, et organisez vos favoris sur votre compte personnel !</p>
        <div class="text-center">
          <router-link to="/register" class="btn btn-primary btn-lg" role="button">Je m'inscris</router-link>
          <router-link to="/login" class="btn btn-info btn-lg" role="button">Je me connecte</router-link>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "home",
  },
};
</script>
