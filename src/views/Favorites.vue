<template>
  <main class="container">
    <h1>Mes favoris</h1>
    <hr>

    <ul class="list-unstyled" v-for="track in userFavorites" :key="track.id">
      <li class="media">
          <img class="mr-3" :src="track.album.cover" :alt="track.album.title">
          <div class="media-body">
              <router-link :to="{ name: 'track', params: { id: track.id } }">
                <h5 class="mt-0 mb-1">{{ track.title }}</h5>
              </router-link>
              {{ track.artist.name }} / {{ track.album.title }}
              <div class="actions">
                <a href="#" @click.prevent="removeFavorite(track)" class="btn btn-danger btn-sm">Supprimer des favoris</a>
              </div>
          </div>
      </li>
    </ul>
    <p v-if="userFavorites.length === 0">
      Vous n'avez pas encore ajouté de favoris à votre liste.
      Commencez par <router-link to="/search">faire une recherche de chansons</router-link>.
    </p>

  </main>
</template>

<script>
export default {
  name: 'Favorites',
  computed: {
    userFavorites() {
      return this.$store.getters.userFavorites;
    },
  },
  methods: {
    removeFavorite(track) {
      this.$store.dispatch('removeFavorite', track);
    },
  },
};
</script>

<style scoped>
  h1 + hr {
    margin-bottom: 2rem;
  }
  h3 {
    font-size: 1.5rem;
  }
  .list-group {
    margin-bottom: 2rem;
  }
  .actions {
    margin-top: 0.5rem;
  }
</style>
