export const wait = async (delay: number) => new Promise((res) => {
		setTimeout(() => {
			res(true);
		}, delay);
	});
