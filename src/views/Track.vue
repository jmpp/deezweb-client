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
            <a href="#" class="btn btn-primary btn-sm">Consulter l'album</a>
          </div>
        </div>
      </div>
      <div class="col-sm">
        <h2>Artiste</h2>
        <div class="media">
          <img class="align-self-start mr-3 img-thumbnail" :src="track.artist.picture" :alt="track.artist.name">
          <div class="media-body">
            <h3 class="mt-0">{{ track.artist.name }}</h3>
            <a href="#" class="btn btn-primary btn-sm">Voir l'artiste</a>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import fetchjsonp from 'fetch-jsonp';

export default {
  name: 'Track',
  data() {
    return {
      track: null,
    };
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
