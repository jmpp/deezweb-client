<template>
  <main class="container">
    <h1>Connexion</h1>
    <form>
      <div class="form-group">
        <label for="email">Adresse email</label>
        <input type="email" class="form-control" id="email" placeholder="john.smith@domain.tld">
      </div>
      <div class="form-group">
        <label for="motdepasse">Mot de passe</label>
        <input type="password" class="form-control" id="motdepasse" placeholder="************">
      </div>
      <button type="submit" class="btn btn-primary">Se connecter</button>
    </form>

    <p class="mt-3">
      <router-link to="/register">Je n'ai pas de compte</router-link>
    </p>
  </main>
</template>

<script>
export default {
  name: "Login"
};
</script>
