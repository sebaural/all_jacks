import axios from 'axios';

const axios_instance = axios.create({
  baseURL: 'https://all-jacks.firebaseio.com'
});

export default axios_instance;
