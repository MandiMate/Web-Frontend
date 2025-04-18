import { toast } from 'react-toastify';
import apiClient from "./index.js";

const getAuthHeader = () => {
    const token = localStorage.getItem("token");    
    return token ? { Authorization: `Bearer ${token}` } : {};
};

// Post Request
const postAuth = async (path, data) => {
    try {
        let response = await apiClient.post(path, data);
        return response;
    } catch (error) {
        toast.error(error?.response?.data.message || "An error occurred during authentication.");
    }
}

// Get All Seasons
const fetchAllSeasons = async (path) => {
    try {
        const res = await apiClient.get(path, { headers: getAuthHeader() });
        return res;
    } catch (error) {
        toast.error(error?.response?.data?.message || "Failed to fetch all seasons.");
    }
};

// Get Active Season
const fetchActiveSeason = async (path) => {
    try {
        const res = await apiClient.get(path, { headers: getAuthHeader() });
        return res;
    } catch (error) {
        toast.error(error?.response?.data?.message || "Failed to fetch active season.");
    }
};

// Start New Season
const startSeason = async (path, data) => {
    try {
        const res = await apiClient.post(path, data, { headers: getAuthHeader() });
        return res;
    } catch (error) {
        toast.error(error?.response?.data?.message || "Failed to start season.");
    }
};

// Close Season
const closeSeason = async (path) => {
    try {
        const res = await apiClient.patch(path, {}, { headers: getAuthHeader() });
        return res;
    } catch (error) {
        toast.error(error?.response?.data?.message || "Failed to close season.");
    }
};

export { postAuth, fetchAllSeasons, fetchActiveSeason, startSeason, closeSeason }
