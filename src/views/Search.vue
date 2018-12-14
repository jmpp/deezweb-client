<template>
  <main class="container">
    <h1>Bienvenue <span v-if="user">{{user.firstname}} {{user.lastname}}</span></h1>
    <p>Recherchez un titre sur Deezer en utilisant le formulaire suivant :</p>
    <hr>
    <form @submit.prevent="searchForm">
      <div class="row">
        <label for="searchText" class="col-sm-2 col-form-label text-right">Recherche&nbsp;:</label>
        <div class="col-sm-4">
          <input
            type="text"
            class="form-control"
            id="searchText"
            v-model="searchText"
            placeholder="Eminem, Armin Van Buuren, Rihanna, ..."
          >
        </div>
        <label for="searchText" class="col-sm-2 col-form-label text-right">Trier par :</label>
        <div class="col-sm-2">
          <select id="order" v-model="searchOrder" class="custom-select">
            <option value="ALBUM_ASC">Album</option>
            <option value="ARTIST_ASC">Artiste</option>
            <option value="TRACK_ASC">Musique</option>
            <option value="RANKING">Les plus populaires</option>
            <option value="RATING_ASC">Les mieux notés</option>
          </select>
        </div>
        <div class="col-sm-2 text-right">
          <input type="submit" class="btn btn-primary" value="Go">
        </div>
      </div>
    </form>
    <hr>

    <h2>Résultats</h2>
    <div class="card-deck search-results">
      <div class="card" v-for="track in tracksList" :key="track.id">
        <a href="#">
          <img
            class="card-img-top"
            :src="track.album.cover_big"
            alt="Card image cap"
          >
        </a>
        <div class="card-body">
          <h5 class="card-title">
            <a href="#">{{track.title}}</a>
          </h5>
          <p class="card-text">{{track.artist.name}} / {{track.album.title}}</p>
          <p class="card-text">
            <small class="text-muted">Durée : {{track.duration | toMinutes}}</small>
          </p>
        </div>
        <div class="card-footer">
          <a href="#" class="btn btn-secondary btn-sm">
            <i class="fa fa-cc-discover"></i> Album
          </a>
          <a href="#" class="btn btn-secondary btn-sm">
            <i class="fa fa-user"></i> Artiste
          </a>
          <a href="#" class="btn btn-outline-danger btn-sm">
            <i class="fa fa-heart-o"></i>
          </a>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import fetchjsonp from 'fetch-jsonp';

export default {
  name: "Search",

  data() {
    return {
      tracksList: [],
      searchText: '',
      searchOrder: ''
    }
  },

  computed: {
    user() {
      return this.$store.state.loggedUser;
    }
  },

  filters: {
    toMinutes(seconds) {
      let rest = seconds % 60;
      return Math.floor(seconds/60) + 'min' + rest;
    }
  },

  methods : {
    searchForm() {
      fetchjsonp('https://api.deezer.com/search?q='+ encodeURIComponent(this.searchText) +'&output=jsonp&order=' + this.searchOrder)
        .then(res => res.json())
        .then(({data: tracksList}) => this.tracksList = tracksList);
    }
  }
};
</script>
