import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://cors-proxy.fringe.zone/http://api.wisey.app/api/v1/',
});

export default instance;
