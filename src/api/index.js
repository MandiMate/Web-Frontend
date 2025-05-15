import axios from "axios";

const apiClient = axios.create({
    baseURL: "http://localhost:7000",
    timeout: 5000,
    headers: {
        "Content-Type": "application/json"
    }
})

apiClient.interceptors.response.use((res) => {
    return res;
}, (error) => {
    return Promise.reject(error);
})

export default apiClient