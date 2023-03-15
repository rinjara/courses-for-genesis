import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://api.wisey.app/api/v1/',
});

export default instance;
