import axios from "axios";

export const api = axios.create({

    baseURL: "https://localhost:8393"

})
export default api;