import axios from  'axios';
import { getToken } from './auth';

const api = axios.create({
    baseURL: 'https://empresas.ioasys.com.br/api/v1/',
});

api.interceptors.request.use(async config => {
    const token = getToken();
    if(token) {
        config.headers.Authorization = `Bearet ${token}`;
    }

    return config;
});

export default api;