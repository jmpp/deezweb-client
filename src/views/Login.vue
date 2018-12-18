<template>
  <main class="container">
    <h1>Connexion</h1>

    <div class="alert alert-danger" role="alert" v-if="error">
      {{ error }}
    </div>

    <form @submit.prevent="logUser">
      <div class="form-group">
        <label for="email">Adresse email</label>
        <input type="email" class="form-control" id="email" v-model="email" placeholder="john.smith@domain.tld">
      </div>
      <div class="form-group">
        <label for="password">Mot de passe</label>
        <input type="password" class="form-control" id="password" v-model="password" placeholder="************">
      </div>
      <button type="submit" class="btn btn-primary">Se connecter</button>
    </form>

    <p class="mt-3">
      <router-link to="/register">Je n'ai pas de compte</router-link>
    </p>
  </main>
</template>

<script>
import authService from '@/authService';

export default {
  name: 'Login',

  data() {
    return {
      email: '',
      password: '',
      error: null,
    };
  },

  methods: {
    logUser() {
      this.error = null;

      authService.login(this.email, this.password)
        .then(({ token }) => {
          // Sauvegarde du token dans le local storage du navigateur
          localStorage.setItem('deezweb-auth-jwt', token);
          return token;
        })
        .then(token => this.$store.dispatch('logUserWithToken', token))
        .then(() => {
          this.$router.push('search');
        })
        .catch((error) => {
          this.error = error.message;
        });
    },
  },
};
</script>
