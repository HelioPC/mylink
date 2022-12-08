import axios from "axios";

export const key = import.meta.env.VITE_REACT_APP_API_KEY

const api = axios.create({
    baseURL: import.meta.env.VITE_REACT_APP_API_BASE_URL,
    headers:{
        'Authorization': `Bearer ${key}`
    }
})

export default api;
