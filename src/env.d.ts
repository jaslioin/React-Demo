/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_CAT_API_KEY: string;
	readonly VITE_CAT_API_BASE_URL: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}

declare const __GIT_HASH__: string;
declare const __MODE__: "dev" | "prd" | "stg";
