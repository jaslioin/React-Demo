/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly CAT_API_KEY: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}

declare const __GIT_HASH__: string;
declare const __MODE__: "dev" | "prd" | "stg";
