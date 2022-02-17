/* eslint-disable camelcase */
import { apiClient } from "./apiClient";
import { Breed } from "@/types/cat";

type CatSearchResponse = {
	breeds: unknown[][];
	id: string;
	url: string;
	width: number;
	height: number;
}[];
const search = async ({ breed_id }: { breed_id?: string }) => {
	const { data } = await apiClient.get<CatSearchResponse>("/v1/images/search", {
		params: {
			limit: 10,
			page: 1,
			order: "Desc",
			breed_id: breed_id || "sibe",
		},
	});
	return data;
};

const searchBreeds = async ({
	page,
	limit,
}: {
	page: number;
	limit: number;
}) => {
	const { data } = await apiClient.get<Breed[]>("/v1/breeds", {
		params: {
			limit,
			page,
		},
	});
	return data;
};
export const catApi = { search, searchBreeds };
