import axios from 'axios';

const BASE_URL = 'https://swapi.py4e.com/api';

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
});
