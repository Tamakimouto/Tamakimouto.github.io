import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import jsconfigPaths from "vite-jsconfig-paths";
import svgr from "vite-plugin-svgr";
import * as path from "path";

export default defineConfig({
    plugins: [react(), jsconfigPaths(), svgr()],
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
