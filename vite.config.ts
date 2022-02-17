import { defineConfig } from "vite";
import fs from "fs";
import path from "path";
import react from "@vitejs/plugin-react";

const getGit = () => {
	const rev = fs.readFileSync(".git/HEAD").toString().trim();
	if (rev.indexOf(":") === -1) {
		return rev;
	}
	return fs
		.readFileSync(`.git/${rev.substring(5)}`)
		.toString()
		.trim();
};
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
	console.log("⧭ cross-env MODE:", process.env.MODE);
	console.log("⧭ mode:", mode);
	return {
		plugins: [react()],
		build: {
			minify: process.env.MODE === "prd" ? "terser" : "esbuild",
			...(process.env.MODE === "prd"
				? {
						terserOptions: {
							compress: {
								drop_console: true,
								drop_debugger: true,
							},
						},
				  }
				: {}),
		},
		define: {
			__GIT_HASH__: JSON.stringify(getGit()),
			__MODE__: JSON.stringify(process.env.MODE),
		},
		resolve: {
			alias: {
				"@": path.resolve(__dirname, "./src"),
			},
		},
		server: {
			proxy: {
				"^/cat-api": {
					secure: true,
					changeOrigin: true,
					target: "https://api.thecatapi.com",
					rewrite: (path) => path.replace(/^\/cat-api/, ""),
				},
			},
		},
	};
});
