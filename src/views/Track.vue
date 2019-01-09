<template>
  <main class="container" v-if="track">
    <h1><span class="badge badge-primary">Track</span> {{track.title}}</h1>
    <hr>

    <audio :src="track.preview" controls class="col"></audio>

    <ul class="list-group list-group-flush">
      <li class="list-group-item">Date de sortie : {{ track.release_date }}</li>
      <li class="list-group-item">Durée totale : {{ track.duration | toMinutes }}</li>
      <li class="list-group-item">Rang : #{{ track.rank }}</li>
    </ul>

    <div class="row">
      <div class="col-sm">
        <h2>Album</h2>
        <div class="media">
          <img class="align-self-start mr-3 img-thumbnail" :src="track.album.cover" :alt="track.album.title">
          <div class="media-body">
            <h3 class="mt-0">{{ track.album.title }}</h3>
            <p>Date de sortie : {{ track.album.release_date }}</p>
            <router-link :to="{ name: 'album', params: { id: track.album.id }}" class="btn btn-primary btn-sm">Consulter l'album</router-link>
          </div>
        </div>
      </div>
      <div class="col-sm">
        <h2>Artiste</h2>
        <div class="media">
          <img class="align-self-start mr-3 img-thumbnail" :src="track.artist.picture" :alt="track.artist.name">
          <div class="media-body">
            <h3 class="mt-0">{{ track.artist.name }}</h3>
            <router-link :to="{ name: 'artist', params: { id: track.artist.id }}" class="btn btn-primary btn-sm">Voir l'artiste</router-link>
          </div>
        </div>
      </div>
    </div>

    <hr>
    <div class="row mt-5">
      <button class="btn btn-lg btn-outline-danger" @click="toggleFavorite(track)" v-if="(userFavorites.find(t => t.id === track.id)) === undefined">
        <i class="fa fa-heart"></i> Ajouter aux favoris
      </button>
      <button class="btn btn-lg btn-danger" @click="toggleFavorite(track)" v-else>
        <i class="fa fa-heart-o"></i> Retirer des favoris
      </button>
    </div>
  </main>
</template>

<script>
import fetchjsonp from 'fetch-jsonp';
import { mapGetters } from 'vuex';

export default {
  name: 'Track',
  data() {
    return {
      track: null,
    };
  },
  computed: {
    ...mapGetters(['userFavorites']),
  },
  methods: {
    toggleFavorite(track) {
      const fav = this.userFavorites.find(t => t.id === track.id);
      if (fav) {
        this.$store.dispatch('removeFavorite', track); // Si ce track se trouvait dans les favoris du store, on l'en supprime
      } else {
        this.$store.dispatch('addFavorite', track); // Sinon, on l'y ajoute
      }
    },
  },
  created() {
    fetchjsonp(`https://api.deezer.com/track/${this.$route.params.id}?output=jsonp`)
      .then(res => res.json())
      .then((track) => {
        this.track = track;
      });
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
  audio {
    margin-bottom: 1.6rem;
  }
  .list-group {
    margin-bottom: 2rem;
  }
</style>
