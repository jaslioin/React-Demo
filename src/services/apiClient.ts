import axios from "axios";

export const apiClient = axios.create({
    baseURL: "cat-api",
    headers: {
        "x-api-key": "b7945a96-706e-4075-9ecb-c677a96edf13",
    },

});
