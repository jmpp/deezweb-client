<template>
  <main class="container" v-if="album">
    <h1><span class="badge badge-primary">{{ album.record_type === 'single' ? 'Single' : 'Album' }}</span> {{album.title}}</h1>
    <hr>

    <p>
      Artiste : <router-link :to="{ name: 'artist', params: { id: album.artist.id }}">{{ album.artist.name }}</router-link> /
      Date de sortie : <strong>{{ album.release_date }}</strong> /
      Durée totale : <strong>{{ album.duration | toMinutes }}</strong>
    </p>
    <hr>

    <div class="media">
      <img class="align-self-start mr-3 img-thumbnail" :src="album.cover_medium" :alt="album.title">
      <div class="media-body">
        <ul class="list-group list-group-flush">
          <li class="list-group-item" v-for="(track, index) in album.tracks.data" :key="track.id">
            {{ index + 1 }}.
            <router-link :to="{ name: 'track', params: { id: track.id }}">{{ track.title }}</router-link>
            <span class="badge badge-light">{{ track.duration | toMinutes }}</span>
          </li>
        </ul>
      </div>
    </div>
  </main>
</template>

<script>
import fetchjsonp from 'fetch-jsonp';

export default {
  name: 'Album',
  data() {
    return {
      album: null,
    };
  },
  created() {
    fetchjsonp(`https://api.deezer.com/album/${this.$route.params.id}?output=jsonp`)
      .then(res => res.json())
      .then((album) => {
        this.album = album;
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
  .badge {
    margin-left: 1em;
  }
</style>
