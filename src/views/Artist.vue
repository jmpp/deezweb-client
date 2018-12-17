<template>
  <main class="container" v-if="artist">
    <h1><span class="badge badge-primary">Artiste</span> {{artist.name}}</h1>
    <hr>

    <div class="media">
      <img class="align-self-start mr-3 img-thumbnail" :src="artist.picture_medium" :alt="artist.name">
      <div class="media-body">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Nombre d'albums : {{ artist.nb_album }}</li>
          <li class="list-group-item">Nombre de fans : {{ artist.nb_fan }}</li>
        </ul>
        <a :href="artist.link" class="btn btn-info btn-lg" target="_blank">Plus de détails sur Deezer</a>
      </div>
    </div>
  </main>
</template>

<script>
import fetchjsonp from 'fetch-jsonp';

export default {
  name: 'Artist',
  data() {
    return {
      artist: null,
    };
  },
  created() {
    fetchjsonp(`https://api.deezer.com/artist/${this.$route.params.id}?output=jsonp`)
      .then(res => res.json())
      .then((artist) => {
        this.artist = artist;
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
  .list-group {
    margin-bottom: 2rem;
  }
</style>
