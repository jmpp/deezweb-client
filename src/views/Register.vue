<template>
  <main class="container">
    <h1>Inscription</h1>
    <form>
      <div class="form-group">
        <label for="nom">Nom</label>
        <input type="nom" class="form-control" id="nom" placeholder="SMITH">
      </div>
      <div class="form-group">
        <label for="prenom">Prénom</label>
        <input type="prenom" class="form-control" id="prenom" placeholder="John">
      </div>
      <div class="form-group">
        <label for="email">Adresse email</label>
        <input type="email" class="form-control" id="email" placeholder="john.smith@domain.tld">
      </div>
      <div class="form-group">
        <label for="motdepasse">Mot de passe</label>
        <input type="password" class="form-control" id="motdepasse" placeholder="************">
      </div>
      <div class="form-group">
        <label for="motdepasse_confirmation">Confirmez le mot de passe</label>
        <input
          type="password"
          class="form-control"
          id="motdepasse_confirmation"
          placeholder="************"
        >
      </div>
      <button type="submit" class="btn btn-primary">Créer un compte</button>
    </form>

    <p class="mt-3">
      <router-link to="/login">J'ai déjà un compte</router-link>
    </p>
  </main>
</template>

<script>
export default {
  name: "Register"
};
</script>
