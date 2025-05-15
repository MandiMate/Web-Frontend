import { toast } from 'react-toastify';
import apiClient from "./index.js";

// Post Request
const postAuth = async (path, data) => {
    try {
        let response = await apiClient.post(path, data);
        return response;
    } catch (error) {
        toast.error(error?.response?.data.message || "An error occurred during authentication.");
    }
}

export { postAuth}
