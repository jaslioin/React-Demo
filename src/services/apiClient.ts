import axios from "axios";

export const apiClient = axios.create({
	baseURL: "cat-api",
	headers: {
		"x-api-key": import.meta.env.CAT_API_KEY,
	},
});
