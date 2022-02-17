/* eslint-disable camelcase */
export type Breed = {
	id: string;
	name: string;
	origin: string;
	description: string;
	life_span: string;
	wikipedia_url: string;
	image: {
		id: string;
		width: number;
		height: number;
		url: string;
	};
};
