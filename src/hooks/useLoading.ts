import { useMemo } from "react";
import { useAtomValue } from "jotai/utils";

export const useLoading = () => {
	// const isLocaleLoaded = useAtomValue(isloading);

	const isLoading = false
	return {
		isLoading,
	};
};
