import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        port: 3000,
    },
    build: {
        outDir: "build",
    },
    resolve: {
        alias: {
            assets: path.resolve("src/assets/"),
            components: path.resolve("src/components/"),
        },
    },
});
