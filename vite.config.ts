import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      components: `${path.resolve(__dirname, "./src/components/")}`,
      core: `${path.resolve(__dirname, "./src/core/")}`,
      layout: `${path.resolve(__dirname, "./src/layout/")}`,
      assets: `${path.resolve(__dirname, "./src/assets/")}`,
      data: `${path.resolve(__dirname, "./src/data/")}`,
      hook: `${path.resolve(__dirname, "./src/shared/hooks")}`,
      util: `${path.resolve(__dirname, "./src/shared/utils")}`,
      routes: `${path.resolve(__dirname, "./src/routes")}`,
      pages: `${path.resolve(__dirname, "./src/pages")}`,
    },
  },
});
