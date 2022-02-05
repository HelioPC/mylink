import axios from "axios";

export const key = "9b0c57a43be19c31d18974bd5616bf157fe8b884";

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4',
    headers:{
        'Authorization': `Bearer ${key}`
    }
})

export default api;
