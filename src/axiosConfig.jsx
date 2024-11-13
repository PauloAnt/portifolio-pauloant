import axios from "axios";

const api = axios.create({
    baseURL: "https://apiproject-eosin.vercel.app/"
})

export default api;