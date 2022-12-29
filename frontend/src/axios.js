import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:4444'
});

instance.interceptors.request.use((config) => {
    config.headers.Authorization = window.localStorage.getItem('token');
    
    console.log("Here is the token!", window.localStorage.getItem("token"));
    console.log("Here is config!", config.headers.Authorizaton);
    return config
});

export default instance;