import axios from "axios";

export const apiClient = axios.create({
	baseURL: import.meta.env.VITE_CAT_API_BASE_URL || "cat-api",
	headers: {
		"x-api-key": import.meta.env.VITE_CAT_API_KEY,
	},
});
