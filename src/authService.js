import axios from 'axios';

const AUTH_SERVER_URL = (process.env.NODE_ENV === 'development')
  ? 'http://localhost:9000'
  : 'https://deezweb.herokuapp.com';

export default {
  login(email, password) {
    return axios.post(`${AUTH_SERVER_URL}/login`, {
      email,
      password,
    }).then(response => response.data)
      .catch(error => Promise.reject(error.response.data));
  },
  authenticate(token) {
    return axios.get(`${AUTH_SERVER_URL}/auth`, {
      params: { token },
    }).then(response => response.data)
      .catch(error => Promise.reject(error.response.data));
  },
  addFavorite(track) {
    return axios({
      method: 'post',
      url: `${AUTH_SERVER_URL}/favorite`,
      data: {
        track: {
          id: track.id,
          title: track.title,
          artist: {
            name: track.artist.name,
          },
          album: {
            title: track.album.title,
            cover: track.album.cover,
          },
        },
      },
      headers: {
        Authorization: `Bearer ${localStorage.getItem('deezweb-auth-jwt')}`,
      },
    });
  },
  removeFavorite(track) {
    return axios({
      method: 'delete',
      url: `${AUTH_SERVER_URL}/favorite/${track.id}`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem('deezweb-auth-jwt')}`,
      },
    });
  },
};
