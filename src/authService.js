import axios from 'axios';

const AUTH_SERVER_URL = 'http://localhost:9000';

export default {
  login(email, password) {
    return axios.post(`${AUTH_SERVER_URL}/login`, {
      email,
      password,
    })
      .then(response => response.data)
      .catch(error => Promise.reject(error.response.data));
  },
};
