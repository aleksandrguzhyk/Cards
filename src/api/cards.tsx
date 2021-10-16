import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://deckofcardsapi.com/api/deck'
});

instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (err) => {
    return Promise.reject(err)
  }
)

export default instance