import axios from "axios";

// 65930000/json/

const api = axios.create({
    baseURL:"https://viacep.com.br/ws/"
});

export default api;