<template>
  <main class="container">
    <h1>Bienvenue John SMITH</h1>
    <p>Recherchez un titre sur Deezer en utilisant le formulaire suivant :</p>
    <hr>
    <form>
      <div class="row">
        <label for="searchText" class="col-sm-2 col-form-label text-right">Recherche&nbsp;:</label>
        <div class="col-sm-4">
          <input
            type="text"
            class="form-control"
            id="searchText"
            placeholder="Eminem, Armin Van Buuren, Rihanna, ..."
          >
        </div>
        <label for="searchText" class="col-sm-2 col-form-label text-right">Trier par :</label>
        <div class="col-sm-2">
          <select id="order" class="custom-select">
            <option>Album</option>
            <option>Artiste</option>
            <option>Musique</option>
            <option>Les plus populaires</option>
            <option>Les mieux notés</option>
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
      <div class="card">
        <a href="#">
          <img
            class="card-img-top"
            src="//via.placeholder.com/180x100.png?text=Lose+Yourself"
            alt="Card image cap"
          >
        </a>
        <div class="card-body">
          <h5 class="card-title">
            <a href="#">Lose Yourself</a>
          </h5>
          <p class="card-text">Eminem / Curtain Call</p>
          <p class="card-text">
            <small class="text-muted">Durée : 5min26</small>
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
      <div class="card">
        <a href="#">
          <img
            class="card-img-top"
            src="//via.placeholder.com/180x100.png?text=Without+Me"
            alt="Card image cap"
          >
        </a>
        <div class="card-body">
          <h5 class="card-title">
            <a href="#">Without Me</a>
          </h5>
          <p class="card-text">Eminem / The Eminem Show</p>
          <p class="card-text">
            <small class="text-muted">Durée : 4m50</small>
          </p>
        </div>
        <div class="card-footer">
          <a href="#" class="btn btn-secondary btn-sm">
            <i class="fa fa-cc-discover"></i> Album
          </a>
          <a href="#" class="btn btn-secondary btn-sm">
            <i class="fa fa-user"></i> Artiste
          </a>
          <a href="#" class="btn btn-danger btn-sm">
            <i class="fa fa-heart"></i>
          </a>
        </div>
      </div>
      <div class="card">
        <a href="#">
          <img
            class="card-img-top"
            src="//via.placeholder.com/180x100.png?text=The+Real+Slim+Shady"
            alt="Card image cap"
          >
        </a>
        <div class="card-body">
          <h5 class="card-title">
            <a href="#">The Real Slim Shady</a>
          </h5>
          <p class="card-text">Eminem / Curtain Call</p>
          <p class="card-text">
            <small class="text-muted">Durée : 4min44</small>
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
export default {
  name: "Search"
};
</script>
