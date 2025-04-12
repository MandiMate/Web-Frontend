import axios from "axios";

const apiClient = axios.create({
    baseURL: "https://mandimatebackend.vercel.app",
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