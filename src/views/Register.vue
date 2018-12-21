<template>
  <main class="container">
    <h1>Inscription</h1>

    <div class="alert alert-danger" role="alert" v-if="errors">
      Des erreurs ont été rencontrées :
      <ul>
        <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
      </ul>
    </div>

    <div class="alert alert-success" role="alert" v-if="success">
      {{ success }}
    </div>

    <form @submit.prevent="registerUser">
      <div class="form-group">
        <label for="nom">Nom</label>
        <input type="nom" class="form-control" v-model="nom" id="nom" placeholder="SMITH">
      </div>
      <div class="form-group">
        <label for="prenom">Prénom</label>
        <input type="prenom" class="form-control" v-model="prenom" id="prenom" placeholder="John">
      </div>
      <div class="form-group">
        <label for="email">Adresse email</label>
        <input type="email" class="form-control" v-model="email" id="email" placeholder="john.smith@domain.tld">
      </div>
      <div class="form-group">
        <label for="motdepasse">Mot de passe</label>
        <input type="password" class="form-control" v-model="motdepasse" id="motdepasse" placeholder="************">
      </div>
      <div class="form-group">
        <label for="motdepasse_confirmation">Confirmez le mot de passe</label>
        <input
          type="password"
          class="form-control"
          v-model="motdepasse_confirmation"
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
import axios from 'axios';

export default {
  name: 'Register',

  data() {
    return {
      nom: '',
      prenom: '',
      email: '',
      motdepasse: '',
      motdepasse_confirmation: '',
      errors: null,
      success: null,
    };
  },

  methods: {
    registerUser() {
      this.errors = null;
      this.success = null;
      axios.post('http://localhost:9000/register', {
        firstname: this.prenom,
        lastname: this.nom,
        email: this.email,
        password: this.motdepasse,
        password_confirmation: this.motdepasse_confirmation,
      }).then((response) => {
        this.success = response.data.message;
      }).catch((errors) => {
        this.errors = errors.response.data;
      });
    },
  },
};
</script>
