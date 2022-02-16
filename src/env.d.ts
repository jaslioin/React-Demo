/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_APP_SOMETHING: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}

declare const __GIT_HASH__: string;
declare const __MODE__: "dev" | "prd" | "stg";
